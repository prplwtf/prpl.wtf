<template>
  <!-- dots -->
  <div
    class="absolute inset-0 z-0 bg-radial from-white from-[2px] to-transparent to-[3px] bg-size-[25px_25px]"
  />

  <!-- radial center cutoff -->
  <div
    class="absolute inset-0 z-0 bg-radial from-mist-900 from-20% to-mist-900/20"
  />
  <!-- linear center cutoff -->
  <div
    class="absolute inset-0 z-0 bg-linear-to-b from-mist-900 from-50% to-mist-900/60 to-80%"
  />

  <DotsCutoff />
</template>
