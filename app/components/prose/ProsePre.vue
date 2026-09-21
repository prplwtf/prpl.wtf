<template>
  <div class="my-4 overflow-auto rounded-2xl bg-mist-800 p-2">
    <div class="flex justify-between pb-2">
      <div class="flex items-center gap-1.5 ps-1">
        <Icon name="bi:code" />
        <span>{{ props.filename || props.language || 'code' }}</span>
      </div>
      <button class="rounded-lg bg-mist-700 px-2 py-1">Copy</button>
    </div>
    <pre
      class="w-full min-w-0 overflow-x-auto"
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
pre code .line {
  display: block;
}
</style>
