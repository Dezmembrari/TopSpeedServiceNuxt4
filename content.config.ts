import { defineContentConfig, defineCollection, z } from '@nuxt/content'
import { asSitemapCollection } from '@nuxtjs/sitemap/content' // <-- The modern Nuxt 4 helper

export default defineContentConfig({
  collections: {
    // 1. The Insurance Funnel Collection
    asigurari: defineCollection(
      asSitemapCollection({
        type: 'page',
        source: 'asigurari/*.md',
        schema: z.object({
          title: z.string(),
          description: z.string(),
          insurerName: z.string(),
          insurerLogo: z.string(),
          themeColor: z.enum(['blue', 'green', 'red', 'yellow', 'gray']).optional(),
          accentText: z.string().optional()
        })
      })
    ),

    // 2. The Location Funnel Collection
    locatii: defineCollection(
      asSitemapCollection({
        type: 'page',
        source: 'locatii/*.md',
        schema: z.object({
          title: z.string(),
          description: z.string(),
          cityName: z.string(),
          neighborhoods: z.string(),
          driveTime: z.string(),
          routeHighlight: z.string(),
          heroBadge: z.string()
        })
      })
    )
  }
})
