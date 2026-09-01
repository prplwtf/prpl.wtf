<template>
  <nav
    class="flex items-center justify-between pt-1 pb-3 text-sm text-mist-100"
  >
    <NuxtLink to="/" class="font-display font-bold italic">
      <NuxtImg
        src="/img/circles_drawn_resized.png"
        class="h-5.75 w-10 invert"
      />
    </NuxtLink>
    <ul class="flex gap-6">
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/works">Works</NuxtLink></li>
      <li><NuxtLink to="/blog">Blog</NuxtLink></li>
    </ul>
  </nav>
</template>
