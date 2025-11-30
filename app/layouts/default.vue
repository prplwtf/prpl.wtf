<template>
  <NuxtLoadingIndicator color="#FFFFFF" :height="3" />
  <div
    class="flex flex-col justify-center items-center h-full w-full fixed top-0 left-0"
  >
    <div class="w-200">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.nuxt-loading-indicator {
  top: 0px !important;
}
</style>
