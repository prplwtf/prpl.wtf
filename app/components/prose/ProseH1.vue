<template>
  <h1
    :id="props.id"
    class="h2 group relative -ms-2 flex items-center justify-start ps-2 font-bold!"
  >
    <UtilityHeadingshare v-if="props.id" :id="props.id" :level="1" />
    <slot />
  </h1>
</template>

<script setup lang="ts">
const props = defineProps<{
  id?: string
}>()
</script>
