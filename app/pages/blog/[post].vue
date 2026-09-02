<template>
  <div
    class="relative mb-10 min-h-45 overflow-hidden rounded-t-2xl bg-mist-800"
  >
    <NuxtImg
      :src="`/img/blog/thumbnails/${post.image}`"
      :height="400"
      class="absolute inset-0 z-10 h-[calc(100%-1px)] w-full object-cover"
    />
    <div
      class="absolute inset-0 z-20 bg-linear-to-b from-transparent to-mist-900 to-75%"
    />
    <div class="absolute bottom-0 left-0 z-30 w-full space-y-2 p-4 text-center">
      <h2 class="italic">
        {{ post.title }}
      </h2>
      <div class="space-y-1">
        <p class="text-mist-400">
          {{ post.description }} •
          <NuxtTime :datetime="post.date" :relative="true" class="" />
        </p>
      </div>
    </div>
  </div>

  <div class="p-4 pb-20">
    <ContentRenderer :value="post" class="prose-content space-y-3" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const path = `/blog/${route.params.post}`

const { data: post } = await useAsyncData(`blog.${path}`, () =>
  queryCollection('blog').path(path).first()
)

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: `Page not found: ${route.path}`,
  })
}

useSeoMeta({
  title: post.value?.title,
  description: post.value?.description,
  ogType: 'article',
  ogTitle: `${post.value?.title} - Blueprint`,
  ogDescription: post.value?.description,
})
</script>
