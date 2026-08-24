<template>
  <div class="relative h-dvh w-dvw overflow-hidden">
    <div
      v-for="(polaroid, index) in polaroids"
      :key="polaroid.src"
      class="group absolute cursor-grab select-none active:cursor-grabbing"
      :style="polaroidStyle(index)"
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

    <div class="flex h-dvh items-center justify-center">
      <div class="container max-h-dvh max-w-135">
        <div class="text-center">
          <slot />
        </div>
      </div>
    </div>
  </div>

  <div
    class="absolute top-0 left-0 -z-1 h-full w-full bg-linear-to-b from-mist-900 from-50% to-mist-900/60 to-80%"
  />
  <div
    class="absolute top-0 left-0 -z-2 h-full w-full bg-radial from-mist-900 from-20% to-mist-900/20"
  />
  <div
    class="absolute top-0 left-0 -z-3 h-full w-full bg-radial from-white from-[2px] to-transparent to-[3px] bg-size-[25px_25px]"
  />
</template>

<script setup lang="ts">
const polaroids = [
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

const CARD_W = 256 + 32 // p-4 = 16px each side
const CARD_H = 261 + 32 + 56 // pb-14 = 56px, p-4 top
const EDGE_INSET = 80

const positions = ref<Array<{ x: number; y: number } | null>>(
  polaroids.map(() => null)
)

const zOrder = ref<number[]>(polaroids.map((_, i) => i))

function bringToFront(index: number) {
  zOrder.value = [...zOrder.value.filter((i) => i !== index), index]
}

function perimeterPositions(n: number): Array<{ x: number; y: number }> {
  const W = window.innerWidth
  const H = window.innerHeight

  const top = EDGE_INSET
  const right = W - EDGE_INSET
  const bottom = H - EDGE_INSET
  const left = EDGE_INSET

  // Lengths of each centre-path edge
  const lenTop = right - left // left → right along top
  const lenRight = bottom - top // top → bottom along right
  const lenBottom = right - left // right → left along bottom
  const lenLeft = bottom - top // bottom → top along left
  const totalLen = lenTop + lenRight + lenBottom + lenLeft

  const spacing = totalLen / n

  const results: Array<{ x: number; y: number }> = []

  for (let i = 0; i < n; i++) {
    const d = i * spacing

    let cx: number
    let cy: number

    if (d < lenTop) {
      // Top edge: left → right
      cx = left + d
      cy = top
    } else if (d < lenTop + lenRight) {
      // Right edge: top → bottom
      cx = right
      cy = top + (d - lenTop)
    } else if (d < lenTop + lenRight + lenBottom) {
      // Bottom edge: right → left
      cx = right - (d - lenTop - lenRight)
      cy = bottom
    } else {
      // Left edge: bottom → top
      cx = left
      cy = bottom - (d - lenTop - lenRight - lenBottom)
    }

    // Convert centre → top-left corner
    results.push({ x: cx - CARD_W / 2, y: cy - CARD_H / 2 })
  }

  return results
}

function deterministicRotation(index: number): number {
  const seed = (index * 2654435761) >>> 0
  return (seed % 300) / 10 - 15
}

function polaroidStyle(index: number): Record<string, string> {
  const pos = positions.value[index]
  if (!pos) return { visibility: 'hidden' }

  const rotate = deterministicRotation(index)
  return {
    transform: `translate(${pos.x}px, ${pos.y}px) rotate(${rotate}deg)`,
    zIndex: String(zOrder.value.indexOf(index) + 1),
  }
}

onMounted(() => {
  const pts = perimeterPositions(polaroids.length)
  positions.value = pts

  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseup', onMouseUp)
})

function onResize() {
  const pts = perimeterPositions(polaroids.length)
  positions.value = pts
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
