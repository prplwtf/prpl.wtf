<template>
  <h5
    :id="props.id"
    class="h6 group relative -ms-2 flex items-center justify-start ps-2"
  >
    <UtilityHeadingshare v-if="props.id" :id="props.id" :level="5" />
    <slot />
  </h5>
</template>

<script setup lang="ts">
const props = defineProps<{
  id?: string
}>()
</script>
