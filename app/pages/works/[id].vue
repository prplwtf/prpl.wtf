<template>
  <pre>{{ project }}</pre>
</template>

<script setup lang="ts">
import { projects } from '~/assets/projects'

const route = useRoute()
const project = projects.find((p) => p.id === route.params.id)
</script>
