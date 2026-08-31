<template>
  <div class="space-y-1">
    <h1 class="h2 italic">hi! i'm emma</h1>
    <p>
      i'm 17 years old and i build
      <a href="https://blueprint.zip">blueprint</a> for fun. i like taking
      pictures, hanging out with friends and going on walks.
    </p>
  </div>

  <UtilityMarquee :fade="true" :speed="20" class="my-5 w-full">
    <component
      v-for="button in buttons"
      :is="button.href ? 'a' : 'div'"
      :key="button.alt"
      v-bind="button.href ? { href: button.href, target: '_blank' } : {}"
      class="me-1 inline-block border border-white/20 bg-mist-950"
    >
      <img
        style="image-rendering: pixelated"
        :src="button.src"
        :alt="button.alt"
      />
    </component>
  </UtilityMarquee>

  <div class="flex gap-4 lg:justify-center">
    <NuxtLink href="https://linkedin.com/in/prplwtf" target="_blank">
      <Icon name="simple-icons:linkedin" size="20" />
    </NuxtLink>
    <NuxtLink href="https://bsky.app/profile/prpl.wtf" target="_blank">
      <Icon name="simple-icons:bluesky" size="20" />
    </NuxtLink>
    <NuxtLink href="https://github.com/prplwtf" target="_blank">
      <Icon name="simple-icons:github" size="20" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'polaroids',
})

const buttons = [
  {
    src: 'https://prpl.wtf/img/88x31/prpl_wtf.gif',
    alt: 'prpl.wtf',
    href: null,
  },
  {
    src: 'https://prpl.wtf/img/88x31/vvqb_dev.gif',
    alt: 'vvqb.dev',
    href: 'https://vvqb.dev',
  },
  {
    src: 'https://prpl.wtf/img/88x31/auri_lol.gif',
    alt: 'auri.lol',
    href: 'https://auri.lol',
  },
  {
    src: 'https://prpl.wtf/img/88x31/liv_town.gif',
    alt: 'liv.town',
    href: 'https://liv.town',
  },
  {
    src: 'https://prpl.wtf/img/88x31/circulars_dev.gif',
    alt: 'circulars.dev',
    href: 'https://circulars.dev',
  },
  {
    src: 'https://prpl.wtf/img/88x31/jos_gg.gif',
    alt: 'jos.gg',
    href: 'https://jos.gg',
  },
  {
    src: 'https://prpl.wtf/img/88x31/bad_cash.gif',
    alt: 'bad.cash',
    href: 'https://bad.cash',
  },
  {
    src: 'https://prpl.wtf/img/88x31/arcaege_dev.png',
    alt: 'arcaege.dev',
    href: 'https://arcaege.dev',
  },
  {
    src: 'https://prpl.wtf/img/88x31/noob-dev_fyi.gif',
    alt: 'noob-dev.fyi',
    href: 'https://noob-dev.fyi',
  },
  {
    src: 'https://prpl.wtf/img/88x31/senko_dev.gif',
    alt: 'senko.dev',
    href: 'https://senko.dev',
  },
]
</script>
