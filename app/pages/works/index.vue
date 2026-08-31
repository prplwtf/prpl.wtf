<template>
  <div class="group/list flex h-full w-full items-stretch">
    <div
      v-for="project in projects"
      :key="project.name"
      :class="[
        'group/container min-w-0 flex-1 pr-4 transition-[flex] duration-300 ease-in-out last:pr-0',
        'md:group-has-[&:hover]/list:flex-[0.65] md:group-has-[&:hover]/list:hover:flex-[1.35]',
        'lg:group-has-[&:hover]/list:flex-[0.8] lg:group-has-[&:hover]/list:hover:flex-[1.2]',
        'xl:group-has-[&:hover]/list:flex-[0.9] xl:group-has-[&:hover]/list:hover:flex-[1.1]',
      ]"
    >
      <div
        class="relative h-full w-full overflow-hidden rounded-2xl bg-mist-900"
      >
        <NuxtImg
          class="absolute top-0 left-0 z-10 h-full w-full object-cover"
          :src="project.cover"
        />
        <div
          class="absolute top-1/2 left-0 z-20 h-full w-full bg-linear-to-b from-transparent to-black/40 opacity-50 transition-all duration-300 group-hover/container:top-0 group-hover/container:opacity-100"
        />
        <div class="absolute top-0 left-0 z-30 h-full w-full p-6">
          <div
            class="flex h-full w-full flex-col items-start justify-end overflow-hidden"
          >
            <div class="space-y-1">
              <h2 class="max-w-full truncate italic">{{ project.name }}</h2>
              <p class="max-w-full truncate">{{ project.summary }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    name: 'Blueprint',
    summary: 'Nonprofit organization',
    cover: '/img/placeholders/works/one.webp',
  },
  {
    name: 'Nebula',
    summary: 'Pterodactyl theme',
    cover: '/img/placeholders/works/two.webp',
  },
  {
    name: 'Writea',
    summary: 'Blogging site',
    cover: '/img/placeholders/works/three.webp',
  },
  {
    name: 'Bashatime',
    summary: 'Wakatime tracking',
    cover: '/img/placeholders/works/four.webp',
  },
  {
    name: 'Circles',
    summary: 'Brandkit',
    cover: '/img/placeholders/works/five.webp',
  },
]
</script>
