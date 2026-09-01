<template>
  <DotsFollow />

  <div class="h-full w-full bg-mist-900">
    <div
      class="relative flex h-full items-start justify-start overflow-y-auto p-8 lg:justify-center"
    >
      <div class="container max-h-full max-w-160">
        <div class="text-left lg:mt-20">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
