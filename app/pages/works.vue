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
              <div
                class="mb-0 space-y-1 transition-[margin-bottom] duration-300 group-hover/container:mb-2"
              >
                <h2 class="max-w-full truncate italic">{{ project.name }}</h2>
                <p class="max-w-full truncate">{{ project.summary }}</p>
              </div>
              <div
                class="max-h-0 opacity-0 transition-[max-height,opacity] duration-300 group-hover/container:max-h-(--link-h) group-hover/container:opacity-75"
                :ref="(el) => setLinkRef(el, project.id)"
                :style="{ '--link-h': linkHeights[project.id] }"
              >
                <div class="flex items-center rounded-full">
                  <span>{{ project.link.text }}</span>
                  <Icon name="bi:arrow-right-short" :size="24" />
                </div>
              </div>
            </div>
          </div>

          <!-- page link -->
          <NuxtLink
            :to="project.link.url"
            target="_blank"
            class="absolute top-0 left-0 z-60 h-full w-full rounded-2xl border-3 border-transparent focus:border-white"
            @mousedown.prevent
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const linkRefs = ref<Record<string, HTMLElement>>({})
const linkHeights = ref<Record<string, string>>({})

function setLinkRef(el: unknown, id: string) {
  if (el instanceof HTMLElement) {
    linkRefs.value[id] = el
  }
}

onMounted(async () => {
  await nextTick()
  for (const [id, el] of Object.entries(linkRefs.value)) {
    linkHeights.value[id] = `${el.scrollHeight}px`
  }
})

const projects = [
  {
    id: 'blueprint',
    name: 'Blueprint',
    summary: 'Nonprofit organization',
    logo: '/img/works/logo/blueprint.svg',
    cover: '/img/works/banner/vertical/blueprint.jpg',
    link: {
      text: 'blueprint.zip',
      url: 'https://blueprint.zip',
    },
  },
  {
    id: 'nebula',
    name: 'Nebula',
    summary: 'Pterodactyl theme',
    logo: '/img/works/logo/nebula.svg',
    cover: '/img/works/banner/vertical/nebula.jpg',
    link: {
      text: 'nebula.style',
      url: 'https://nebula.style',
    },
  },
  {
    id: 'writea',
    name: 'Writea',
    summary: 'Blogging site',
    logo: '/img/works/logo/writea.svg',
    cover: '/img/works/banner/vertical/writea.jpg',
    link: {
      icon: 'simpleicons:github',
      text: 'GitHub repository',
      url: 'https://github.com/prplwtf/writea',
    },
  },
  {
    id: 'bashatime',
    name: 'Bashatime',
    summary: 'Wakatime plugin',
    logo: '/img/works/logo/bashatime.svg',
    cover: '/img/works/banner/vertical/bashatime.jpg',
    link: {
      text: 'GitHub repository',
      url: 'https://github.com/prplwtf/bashatime.sh',
    },
  },
  {
    id: 'circles',
    name: 'Circles',
    summary: 'Brand kit',
    logo: '/img/works/logo/circles.svg',
    cover: '/img/works/banner/vertical/circles.jpg',
    link: {
      text: 'GitHub repository',
      url: 'https://github.com/prplwtf/circles',
    },
  },
]
</script>
