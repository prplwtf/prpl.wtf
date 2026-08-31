<template>
  <div class="h-full w-full max-lg:overflow-scroll">
    <div
      class="group/list h-full w-full items-stretch max-lg:space-y-4 lg:flex"
    >
      <div
        v-for="project in projects"
        :key="project.name"
        :class="[
          'group/container min-w-0 flex-1 transition-[flex] duration-300 ease-in-out last:pr-0 max-lg:h-50 max-lg:w-full lg:pr-4',
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
          <div class="absolute top-0 left-0 z-30 h-full w-full max-lg:hidden">
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

          <!-- page link -->
          <NuxtLink
            :to="`/works/${project.id}`"
            @mousedown.prevent
            class="absolute top-0 left-0 z-60 h-full w-full rounded-2xl border-3 border-transparent focus:border-white"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { projects } from '~/assets/projects'
</script>
