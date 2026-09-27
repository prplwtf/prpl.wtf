<template>
  <td
    class="text-default-font/80 border-r border-mist-700/70 p-3 text-sm last:border-r-0"
    :align="props.align"
  >
    <slot />
  </td>
</template>

<script setup lang="ts">
const props = defineProps<{
  align?: 'left' | 'center' | 'right' | 'justify' | 'char'
}>()
</script>
