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

  <!-- left cutoff -->
  <div
    class="absolute top-0 left-0 z-0 h-full w-5 bg-linear-to-r from-mist-900 to-transparent lg:w-10"
  />
  <!-- right cutoff -->
  <div
    class="absolute top-0 right-0 z-0 h-full w-5 bg-linear-to-l from-mist-900 to-transparent"
  />
  <!-- top cutoff -->
  <div
    class="absolute top-0 left-0 z-0 h-5 w-full bg-linear-to-b from-mist-900 to-transparent"
  />
  <!-- bottom cutoff -->
  <div
    class="absolute bottom-0 left-0 z-0 h-5 w-full bg-linear-to-t from-mist-900 to-transparent"
  />
</template>
