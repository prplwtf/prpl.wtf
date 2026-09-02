<template>
  <h4
    :id="props.id"
    class="h5 group relative -ms-2 flex items-center justify-start ps-2"
  >
    <UtilityHeadingshare v-if="props.id" :id="props.id" :level="4" />
    <slot />
  </h4>
</template>

<script setup lang="ts">
const props = defineProps<{
  id?: string
}>()
</script>
