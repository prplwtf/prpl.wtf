<template>
  <div class="flex h-dvh items-center justify-center">
    <div class="container max-h-dvh max-w-135">
      <div class="text-center">
        <slot />
      </div>
    </div>
    <NuxtImg
      src="/img/polaroids/snowman.jpg"
      :width="256"
      :height="261"
      class="bg-white p-4 pb-14"
    />
  </div>
</template>
