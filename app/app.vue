<template>
  <div class="flex h-dvh w-dvw flex-col gap-2 bg-mist-950 p-4">
    <Navigation />

    <div
      data-page-container
      class="relative flex-1 overflow-hidden rounded-2xl"
    >
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>
