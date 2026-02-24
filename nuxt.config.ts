// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/seo',
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/scripts',
    '@pinia/nuxt',
    '@nuxt/content'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  site: {
    url: 'https://topspeedservice.eu',
    name: 'Top Speed Service Auto'
  },

  content: {

  },

  // Enable experimental component detection for Nuxt UI
  ui: {
    experimental: {
      componentDetection: true // or ['Modal', 'Dropdown']
    }
  },

  routeRules: {
    '/': { prerender: true },
    // Cache all public images for one year (immutable) -- STATIC FILES ONLY, NOT DYNAMICALLY GENERATED ON THE FLY
    '/**/*.{png,jpg,jpeg,svg,gif,webp,avif,ico}': {
      headers: {
        'cache-control': 'public, max-age=31536000, immutable'
      }
    },

    // This fixes the "Serve static assets with an efficient cache policy" error -- files served by Nitro's image optimization endpoint should also be cached aggressively
    '/_ipx/**': {
      headers: { 'cache-control': 'public, max-age=31536000, immutable' }
    }
  },

  features: {
    inlineStyles: true
  },

  // Enable experimental payload extraction for faster hydration
  experimental: {
    payloadExtraction: false, // Reduces JS execution time on true, but may cause issues with some dynamic content
    renderJsonPayloads: false, // Speeds up hydration on true, but may break some features that rely on the full payload
    componentIslands: true // Only hydrate interactive components, leaving static content as plain HTML for faster load times
  },

  compatibilityDate: '2025-01-15',

  nitro: {
    prerender: {
      crawlLinks: false,
      concurrency: 10, // Speeds up the process on multi-core CPUs
      // FIX 2: Tell Nitro NOT to try saving image files to disk during build
      // This prevents the Windows "https:" filename error
      ignore: ['/_ipx']
    }
  },

  vite: {
    optimizeDeps: {
      include: ['@nuxt/ui']
    },

    build: {

      // Manual chunking to separate Vue and UI libraries for better caching
      // rollupOptions: {
      //   output: {
      //     manualChunks: (id) => {
      //       if (id.includes('node_modules/vue') || id.includes('node_modules/@vue')) {
      //         return 'vue-core'
      //       }
      //       if (id.includes('node_modules/@headlessui') || id.includes('node_modules/@nuxt/ui')) {
      //         return 'ui-vendor'
      //       }
      //     }
      //   }
      // }
    }
  },

  eslint: {
    config: {
      // standalone: false, // Keeps it integrated with Nuxt's strict rules
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  fonts: {
    // 2. Default options for font families
    defaults: {
      weights: [400, 700],
      styles: ['normal', 'italic'],
      subsets: ['latin-ext', 'latin'],
      preload: true
    },

    experimental: {
      processCSSVariables: true
    }
  },

  icon: {
    serverBundle: {
      collections: ['heroicons', 'line-md', 'logos'] // Only bundle what you actually use
    }
  },

  image: {
    domains: ['images.unsplash.com', 'unsplash.com', 'cdn.brandfetch.io'], // Allow loading images from this domain

    presets: {
      thumbnail: {
        modifiers: {
          width: 150,
          height: 150,
          fit: 'cover'
        }
      }
    }
  },

  sitemap: {
    zeroRuntime: true
  }
})
