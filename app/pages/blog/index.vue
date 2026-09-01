<template>
  <div class="space-y-2 lg:px-4">
    <h2 class="italic max-lg:text-2xl!">the emma blog</h2>
    <p>
      locally sourced, free-range blog posts. now available at a prpl.wtf near
      you! supply is limited, get them while they're fresh!
    </p>
  </div>

  <Wave class="my-6 lg:px-4.5" />

  <div class="flex flex-col">
    <NuxtLink
      v-for="post in posts"
      :to="post.path"
      class="relative block no-underline! opacity-100!"
    >
      <div
        class="group/card pb-4 transition-[padding] duration-300 hover:px-0 max-lg:px-0 lg:px-4"
      >
        <div class="overflow-hidden rounded-2xl bg-mist-800">
          <div
            class="bg-transparent p-4 transition-colors duration-300 hover:bg-mist-700/30"
          >
            <div class="flex items-center justify-between gap-4">
              <span class="h1 truncate text-lg! font-normal! italic">
                {{ post.title }}
              </span>
              <div class="relative overflow-y-hidden opacity-50">
                <NuxtTime
                  :datetime="post.date"
                  :relative="true"
                  class="relative top-0 opacity-100 transition-[top,opacity] duration-300 group-hover/card:-top-5 group-hover/card:opacity-0"
                />
                <NuxtTime
                  :datetime="post.date"
                  class="absolute top-5 right-0 opacity-0 transition-[top,opacity] duration-300 group-hover/card:top-0 group-hover/card:opacity-100"
                />
              </div>
            </div>
            <div
              class="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-hover/card:grid-rows-[1fr] max-lg:grid-rows-[1fr]"
            >
              <p
                class="m-0! overflow-hidden pt-0 opacity-50 transition-[padding] duration-300 group-hover/card:pt-2 max-lg:pt-2"
              >
                {{ post.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { data: posts } = await useAsyncData('blog', () =>
  queryCollection('blog')
    .orWhere((query) =>
      query.where('unlisted', '=', false).where('unlisted', 'IS NULL')
    )
    .order('date', 'DESC')
    .all()
)
</script>
