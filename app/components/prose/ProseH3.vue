<template>
  <h3
    :id="props.id"
    class="h4 group relative -ms-2 flex items-center justify-start ps-2"
  >
    <UtilityHeadingshare v-if="props.id" :id="props.id" :level="3" />
    <slot />
  </h3>
</template>

<script setup lang="ts">
const props = defineProps<{
  id?: string
}>()
</script>
