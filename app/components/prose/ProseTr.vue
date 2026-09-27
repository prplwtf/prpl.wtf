<template>
  <tr
    class="group transition-colors duration-200 hover:bg-mist-700/15"
    :class="props.to ? 'cursor-pointer' : ''"
    :align="props.align"
    @click="handleClick"
  >
    <slot />
  </tr>
</template>

<script setup lang="ts">
const props = defineProps<{
  to?: string
  align?: 'left' | 'center' | 'right' | 'justify' | 'char'
}>()

const handleClick = () => {
  if (!props.to) return

  navigateTo(props.to)
}
</script>
