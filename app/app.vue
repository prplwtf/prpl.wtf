<template>
  <div class="flex h-dvh w-dvw flex-col gap-2 bg-mist-950 p-4">
    <nav
      class="flex items-center justify-between pt-1 pb-2 text-sm text-mist-100"
    >
      <span class="font-display font-bold italic">
        <NuxtImg
          src="/img/circles_drawn_resized.png"
          class="h-5.75 w-10 invert"
        />
      </span>
      <ul class="flex gap-6">
        <li><NuxtLink to="/" class="">Home</NuxtLink></li>
        <li><NuxtLink to="/" class="">Blog</NuxtLink></li>
      </ul>
    </nav>

    <div
      data-polaroid-container
      class="relative flex-1 overflow-hidden rounded-2xl"
    >
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>
