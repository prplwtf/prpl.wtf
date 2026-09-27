<template>
  <div class="my-4 flex items-center gap-1 rounded-2xl bg-mist-800 p-3">
    <Icon name="bi:quote" :size="24" class="min-w-6s -ml-1" />
    <blockquote class="italic">
      <slot />
    </blockquote>
  </div>
</template>
