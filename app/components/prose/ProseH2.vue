<template>
  <h2
    :id="props.id"
    class="h3 group relative -ms-2 flex items-center justify-start ps-2 font-semibold!"
  >
    <UtilityHeadingshare v-if="props.id" :id="props.id" :level="2" />
    <slot />
  </h2>
</template>

<script setup lang="ts">
const props = defineProps<{
  id?: string
}>()
</script>
