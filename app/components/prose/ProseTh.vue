<template>
  <th
    class="text-default-font border-r border-mist-700/70 px-6 py-3.5 text-left text-sm font-semibold last:border-r-0"
    :align="props.align"
  >
    <slot />
  </th>
</template>

<script setup lang="ts">
const props = defineProps<{
  align?: 'left' | 'center' | 'right' | 'justify' | 'char'
}>()
</script>
