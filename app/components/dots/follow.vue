<template>
  <!-- dots -->
  <div
    ref="el"
    class="absolute inset-0 z-0 bg-radial from-white from-[2px] to-transparent to-[3px] bg-size-[25px_25px]"
  />

  <!-- radial highlight -->
  <div
    v-if="initialized"
    class="absolute inset-0 z-0 max-lg:hidden"
    :style="{
      background: `radial-gradient(circle at ${x}px ${y}px, transparent 0%, color-mix(in oklab, var(--color-mist-900) 70%, transparent) 200px)`,
    }"
  />
  <div v-else class="absolute inset-0 z-0 bg-mist-900/70 max-lg:hidden" />

  <!-- linear center cutoff -->
  <div class="absolute inset-0 z-0 bg-mist-900/50 max-lg:hidden" />

  <!-- radial center cutoff -->
  <div
    class="absolute inset-0 z-0 bg-radial from-mist-900 from-20% to-mist-900/20 lg:hidden"
  />
  <!-- linear center cutoff -->
  <div
    class="absolute inset-0 z-0 bg-linear-to-b from-mist-900 from-50% to-mist-900/60 to-80% lg:hidden"
  />

  <DotsCutoff />
</template>

<script setup lang="ts">
const el = useTemplateRef<HTMLElement>('el')

const x = ref(0)
const y = ref(0)
const initialized = ref(false)

const onMouseMove = (e: MouseEvent) => {
  const parent = (el.value as HTMLElement | null)?.parentElement
  const rect = parent ? parent.getBoundingClientRect() : { left: 0, top: 0 }

  x.value = e.clientX - rect.left
  y.value = e.clientY - rect.top
  initialized.value = true
}

onMounted(() => {
  const parent = (el.value as HTMLElement | null)?.parentElement
  if (parent) {
    x.value = parent.offsetWidth / 2
    y.value = parent.offsetHeight / 2
  }
  window.addEventListener('mousemove', onMouseMove)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
})
</script>
