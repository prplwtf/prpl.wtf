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
        <!-- background image cover -->
        <NuxtImg
          class="absolute top-0 left-0 z-10 h-full w-full object-cover"
          :src="project.cover"
        />

        <!-- background gradient -->
        <div
          class="absolute top-1/2 left-0 z-20 h-full w-full bg-linear-to-b from-transparent to-black/40 opacity-50 transition-all duration-300 group-hover/container:top-0 group-hover/container:opacity-100"
        />

        <!-- project logo -->
        <div class="absolute top-0 left-0 z-30 h-full w-full">
          <div class="flex h-full flex-row items-center justify-center">
            <NuxtImg :src="project.logo" class="w-5/6 max-w-75 xl:w-2/3" />
          </div>
        </div>

        <!-- link icon -->
        <div class="absolute top-0 right-0 z-40 p-6">
          <Icon
            name="bi:arrow-up-right-square"
            :size="48"
            mode="svg"
            class="opacity-100 transition-opacity duration-300 group-hover/container:opacity-0"
          />
        </div>
        <div class="absolute top-0 right-0 z-45 p-6">
          <Icon
            name="bi:arrow-up-right-square-fill"
            :size="48"
            mode="svg"
            class="opacity-0 transition-opacity duration-300 group-hover/container:opacity-100"
          />
        </div>

        <!-- project info -->
        <div class="absolute top-0 left-0 z-50 h-full w-full p-6">
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
    logo: '/img/works/logo/blueprint.svg',
    cover: '/img/works/banner/vertical/blueprint.jpg',
  },
  {
    name: 'Nebula',
    summary: 'Pterodactyl theme',
    logo: '/img/works/logo/nebula.svg',
    cover: '/img/placeholders/works/two.webp',
  },
  {
    name: 'Writea',
    summary: 'Blogging site',
    logo: '/img/works/logo/writea.svg',
    cover: '/img/placeholders/works/three.webp',
  },
  {
    name: 'Bashatime',
    summary: 'Wakatime tracking',
    logo: '/img/works/logo/bashatime.svg',
    cover: '/img/placeholders/works/four.webp',
  },
  {
    name: 'Circles',
    summary: 'Brandkit',
    logo: '/img/works/logo/circles.svg',
    cover: '/img/placeholders/works/five.webp',
  },
]
</script>
