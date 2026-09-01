<template>
  <div class="mb-10 space-y-2 px-4">
    <h2>
      {{ post.title }}
    </h2>
    <p class="text-mist-400">
      {{ post.description }}
    </p>
  </div>

  <div class="overflow-hidden rounded-2xl bg-mist-900">
    <div class="bg-mist-800/60 p-4">
      <ContentRenderer :value="post" class="prose-content space-y-3" />
    </div>
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
