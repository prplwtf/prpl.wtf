<template>
  <NuxtLink
    v-if="generate"
    :to="`#${props.id}`"
    :class="[
      'copy-link absolute right-full min-w-max -translate-x-4 no-underline! max-lg:hidden',
      'opacity-0 transition-[translate,opacity]! duration-200 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 hover:opacity-100!',
    ]"
    @click.prevent="copyLink"
  >
    <div
      class="flex items-center gap-1.5 rounded-lg bg-mist-700 p-1 px-2 text-sm font-normal transition-colors hover:bg-mist-600"
    >
      <Icon name="bi:share-fill" :size="12" />
      <div class="relative overflow-hidden">
        <span
          class="relative transition-[top,opacity,padding-right]!"
          :class="copied ? '-top-5 pr-3.5 opacity-0' : 'top-0 pr-0 opacity-100'"
        >
          Share
        </span>
        <span
          class="absolute left-0 transition-[top,opacity]!"
          :class="copied ? 'top-0 opacity-100' : 'top-5 opacity-0'"
        >
          Copied!
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  id: string
  level: 1 | 2 | 3 | 4 | 5 | 6
}>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => {
  const links = headings?.anchorLinks
  if (typeof links === 'boolean') return links
  if (typeof links === 'object') return !!links?.[`h${props.level}`]
  return false
})

const copied = ref(false)
const copyLink = () => {
  if (copied.value) return
  const url = `${window.location.origin}${window.location.pathname}#${props.id}`
  navigator.clipboard.writeText(url)

  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 1500)
}
</script>

<style scoped>
.copy-link::before {
  content: '';
  position: absolute;
  inset: -1rem;
}
</style>
