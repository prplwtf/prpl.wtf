import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        tags: z.array(z.string()),
        image: z.string(),
        date: z.date(),
        unlisted: z.boolean().optional().default(false),
      }),
    }),
  },
})
