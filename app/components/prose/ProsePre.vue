<template>
  <div class="group my-4 overflow-auto rounded-2xl bg-mist-800 p-3">
    <div class="flex justify-between gap-3 pb-2">
      <div>
        <div class="flex items-center gap-1.5">
          <Icon name="bi:code" />
          <span>{{ props.filename || props.language || 'code' }}</span>
        </div>
      </div>
      <button
        type="button"
        class="flex shrink-0 items-center gap-1.5 rounded-lg bg-mist-700 p-1 px-2 text-sm transition-[background-color] duration-200 ease-in-out hover:bg-mist-600"
        @click="copyCode"
      >
        <div class="relative overflow-hidden">
          <span
            class="relative block transition-[top,opacity,padding-right]!"
            :class="
              copied ? '-top-5 pr-3.5 opacity-0' : 'top-0 pr-0 opacity-100'
            "
          >
            Copy
          </span>
          <span
            class="absolute top-0 left-0 block transition-[top,opacity]!"
            :class="copied ? 'top-0 opacity-100' : 'top-5 opacity-0'"
          >
            Copied!
          </span>
        </div>
      </button>
    </div>
    <pre
      class="code-block w-full min-w-0 overflow-x-auto font-mono text-sm"
      :class="props.class"
    ><slot /></pre>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    code: string
    language?: string
    filename?: string
    highlights?: () => number[]
    meta?: string
    class?: string
  }>(),
  {
    code: '',
    highlights: () => [],
  }
)

const copied = ref(false)
let copiedTimeout: ReturnType<typeof setTimeout> | null = null

const copyCode = async () => {
  if (copied.value) return

  await navigator.clipboard.writeText(props.code)

  copied.value = true
  copiedTimeout = setTimeout(() => {
    copied.value = false
    copiedTimeout = null
  }, 1500)
}

onBeforeUnmount(() => {
  if (copiedTimeout) clearTimeout(copiedTimeout)
})
</script>

<style scoped>
.code-block :deep(code span) {
  font-family: inherit;
}

.code-block :deep(.line) {
  display: block;
}
</style>
