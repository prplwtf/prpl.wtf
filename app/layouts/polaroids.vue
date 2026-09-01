<template>
  <DotsFollow />
  <!-- radial center cutoff -->
  <div
    class="absolute inset-0 z-0 bg-radial from-mist-900/80 from-20% to-transparent to-70% max-lg:hidden"
  />

  <div
    v-for="(polaroid, index) in activePolaroids"
    :key="polaroid.src"
    class="group absolute z-10 hidden cursor-grab select-none active:cursor-grabbing lg:block"
    :style="polaroidStyles[index]"
    @mousedown="startDrag($event, index)"
    @touchstart.prevent="startDragTouch($event, index)"
  >
    <NuxtImg
      :src="`/img/polaroids/${polaroid.src}`"
      :width="256"
      :height="261"
      draggable="false"
      class="bg-white p-4 pb-14 shadow-xl transition-[scale,box-shadow,rotate] group-active:scale-105 group-active:rotate-5 group-active:shadow-black/30"
    />
  </div>

  <div
    class="relative flex h-full items-start justify-start p-8 lg:items-center lg:justify-center"
  >
    <div class="container max-h-full max-w-135 overflow-y-auto">
      <div class="text-left lg:text-center">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const ALL_POLAROIDS = [
  { src: 'snowman.jpg' },
  { src: 'amsterdam.jpg' },
  { src: 'bells.jpg' },
  { src: 'blahaj.jpg' },
  { src: 'cavetown.jpg' },
  { src: 'desk-shark.jpg' },
  { src: 'dogs.jpg' },
  { src: 'eurostar-blahaj.jpg' },
  { src: 'flover.jpg' },
  { src: 'flower.jpg' },
  { src: 'forest.jpg' },
  { src: 'fosdem-duck.jpg' },
  { src: 'fosdem-kotlin.jpg' },
  { src: 'fosdem-train.jpg' },
  { src: 'fosdem-vlc.jpg' },
  { src: 'fountain.jpg' },
  { src: 'nijntje-pleintje.jpg' },
  { src: 'pride-arcs.jpg' },
  { src: 'puppy.jpg' },
  { src: 'seagull.jpg' },
  { src: 'selfie.jpg' },
  { src: 'sharks.jpg' },
  { src: 'sky.jpg' },
  { src: 'strandbeest.jpg' },
  { src: 'train.jpg' },
  { src: 'waterfall.jpg' },
  { src: 'why2025-anderstorp.jpg' },
  { src: 'why2025-faxekondi.jpg' },
  { src: 'why2025-harmonica.jpg' },
  { src: 'why2025-village.jpg' },
]

const CARD_W = 256
const CARD_H = 300
const EDGE_INSET = 80
const POLAROID_SLOT = 180

function getContainerSize(): { W: number; H: number } {
  if (import.meta.client) {
    const el = document.querySelector<HTMLElement>('[data-page-container]')
    if (el) return { W: el.clientWidth, H: el.clientHeight }
  }
  return { W: 0, H: 0 }
}

function calcTotalLen(W: number, H: number): number {
  const lenTop = W - EDGE_INSET - EDGE_INSET
  const lenRight = H - EDGE_INSET - EDGE_INSET
  return 2 * (lenTop + lenRight)
}

function calcCount(totalLen: number): number {
  return Math.floor(totalLen / POLAROID_SLOT)
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const shuffledCatalogue = shuffle(ALL_POLAROIDS)

const activePolaroids = ref<typeof ALL_POLAROIDS>(
  shuffledCatalogue.slice(0, calcCount(calcTotalLen(0, 0)))
)

const positions = ref<Array<{ x: number; y: number } | null>>(
  activePolaroids.value.map(() => null)
)

const zOrder = ref<number[]>(activePolaroids.value.map((_, i) => i))

function bringToFront(index: number) {
  zOrder.value = [...zOrder.value.filter((i) => i !== index), index]
}

function perimeterPositions(n: number): Array<{ x: number; y: number }> {
  const { W, H } = getContainerSize()

  const top = EDGE_INSET
  const right = W - EDGE_INSET
  const bottom = H - EDGE_INSET
  const left = EDGE_INSET

  const lenTop = right - left
  const lenRight = bottom - top
  const lenBottom = right - left
  const lenLeft = bottom - top
  const totalLen = lenTop + lenRight + lenBottom + lenLeft

  const spacing = totalLen / n

  const results: Array<{ x: number; y: number }> = []

  for (let i = 0; i < n; i++) {
    const d = i * spacing

    let cx: number
    let cy: number

    if (d < lenTop) {
      cx = left + d
      cy = top
    } else if (d < lenTop + lenRight) {
      cx = right
      cy = top + (d - lenTop)
    } else if (d < lenTop + lenRight + lenBottom) {
      cx = right - (d - lenTop - lenRight)
      cy = bottom
    } else {
      cx = left
      cy = bottom - (d - lenTop - lenRight - lenBottom)
    }

    results.push({ x: cx - CARD_W / 2, y: cy - CARD_H / 2 })
  }

  return results
}

const rotations = computed(() =>
  ALL_POLAROIDS.map((_, i) => {
    const seed = (i * 2654435761) >>> 0
    return (seed % 300) / 10 - 15
  })
)

const polaroidStyles = computed(() =>
  activePolaroids.value.map((_, index) => {
    const pos = positions.value[index]
    if (!pos) return { visibility: 'hidden' }
    return {
      transform: `translate(${pos.x}px, ${pos.y}px) rotate(${rotations.value[index]}deg)`,
      zIndex: String(zOrder.value.indexOf(index) + 1),
    }
  })
)

onMounted(() => {
  applyViewport()
  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseup', onMouseUp)
})

function applyViewport() {
  const { W, H } = getContainerSize()
  const count = calcCount(calcTotalLen(W, H))

  if (count !== activePolaroids.value.length) {
    activePolaroids.value = shuffledCatalogue.slice(0, count)
    positions.value = activePolaroids.value.map(() => null)
    zOrder.value = activePolaroids.value.map((_, i) => i)
  }

  positions.value = perimeterPositions(activePolaroids.value.length)
}

function onResize() {
  applyViewport()
}

interface DragState {
  index: number
  startX: number
  startY: number
  originX: number
  originY: number
}

const dragState = ref<DragState | null>(null)

function startDrag(event: MouseEvent, index: number) {
  const pos = positions.value[index]
  if (!pos) return

  bringToFront(index)
  dragState.value = {
    index,
    startX: event.clientX,
    startY: event.clientY,
    originX: pos.x,
    originY: pos.y,
  }

  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseup', onMouseUp)
}

function startDragTouch(event: TouchEvent, index: number) {
  const touch = event.touches[0]
  if (!touch) return
  const pos = positions.value[index]
  if (!pos) return

  bringToFront(index)
  dragState.value = {
    index,
    startX: touch.clientX,
    startY: touch.clientY,
    originX: pos.x,
    originY: pos.y,
  }

  window.addEventListener('touchmove', onTouchMove, { passive: false })
  window.addEventListener('touchend', onTouchEnd)
}

function onMouseMove(event: MouseEvent) {
  applyDrag(event.clientX, event.clientY)
}

function onTouchMove(event: TouchEvent) {
  event.preventDefault()
  const touch = event.touches[0]
  if (touch) applyDrag(touch.clientX, touch.clientY)
}

function applyDrag(clientX: number, clientY: number) {
  if (!dragState.value) return
  const { index, startX, startY, originX, originY } = dragState.value

  positions.value[index] = {
    x: originX + (clientX - startX),
    y: originY + (clientY - startY),
  }
}

function onMouseUp() {
  dragState.value = null
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseup', onMouseUp)
}

function onTouchEnd() {
  dragState.value = null
  window.removeEventListener('touchmove', onTouchMove)
  window.removeEventListener('touchend', onTouchEnd)
}
</script>
