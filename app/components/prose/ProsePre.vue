<template>
  <div class="my-4 overflow-auto rounded-2xl bg-mist-800 p-3">
    <div class="flex justify-between pb-2">
      <div>
        <div class="flex items-center gap-1.5">
          <Icon name="bi:code" />
          <span>{{ props.filename || props.language || 'code' }}</span>
        </div>
      </div>
      <button class="rounded-lg bg-mist-700 px-2 py-1">Copy</button>
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
</script>

<style scoped>
.code-block :deep(code span) {
  font-family: inherit;
}

.code-block :deep(.line) {
  display: block;
}
</style>
