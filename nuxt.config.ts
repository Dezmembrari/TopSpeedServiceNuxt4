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

  app: {
    head: {
      link: [
        // 1. Preload your Hero Image (The LCP Fix we discussed)
        {
          rel: 'preload',
          as: 'image',
          href: '/_ipx/w_1280&f_avif&q_80/hero.webp',
          fetchpriority: 'high'
        }
        // 2. Preload Inter Bold (For your big H1 headings)
        // {
        //   rel: 'preload',
        //   as: 'font',
        //   type: 'font/woff2',
        //   href: '/_fonts/google-inter-700-normal.woff2', // Standard Nuxt Fonts path
        //   crossorigin: 'anonymous'
        // },
        // // 3. Preload Inter Regular (For your body text)
        // {
        //   rel: 'preload',
        //   as: 'font',
        //   type: 'font/woff2',
        //   href: '/_fonts/google-inter-400-normal.woff2',
        //   crossorigin: 'anonymous'
        // }
      ]
    }
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
    '/asigurari/**': { swr: true },
    '/locatii/**': { swr: true },
    '/servicii/**': { swr: true },
    // Cache all public images for one year (immutable) -- STATIC FILES ONLY, NOT DYNAMICALLY GENERATED ON THE FLY
    '/**/*.{png,jpg,jpeg,svg,gif,webp,avif,ico}': {
      headers: {
        'cache-control': 'public, max-age=31536000, immutable'
      }
    },

    // This fixes the "Serve static assets with an efficient cache policy" error -- files served by Nitro's image optimization endpoint should also be cached aggressively
    '/_ipx/**': {
      headers: { 'cache-control': 'public, max-age=31536000, immutable' }
    },

    // Redirecționări 301 (Permanent Redirect) pentru SEO
    '/privacy': { redirect: { to: '/politica-de-confidentialitate', statusCode: 301 } },
    '/cookies': { redirect: { to: '/termeni-si-conditii', statusCode: 301 } },
    '/despre_noi': { redirect: { to: '/#despre-noi', statusCode: 301 } },
    '/servicii': { redirect: { to: '/#services', statusCode: 301 } },
    '/contact': { redirect: { to: '/#contact', statusCode: 301 } }
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
      crawlLinks: true, // Automatically discover and prerender linked pages
      concurrency: 10, // Speeds up the process on multi-core CPUs
      // FIX 2: Tell Nitro NOT to try saving image files to disk during build
      // This prevents the Windows "https:" filename error
      // ignore: ['/_ipx', '/_payload.js', '/_payload.json'],
      // ignore: ['/_ipx'], // Ignore all image optimization routes
      failOnError: false, // Don't fail the build if a route fails to prerender (useful for dynamic routes)
      routes: ['/sitemap.xml', '/robots.txt', '/'] // Pre-render these routes for better SEO and performance
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
    }

    // experimental: {
    //   processCSSVariables: true
    // }
  },

  icon: {
    serverBundle: {
      collections: ['heroicons', 'line-md', 'logos'] // Only bundle what you actually use
    }
  },

  image: {
    domains: ['images.unsplash.com', 'unsplash.com'], // Allow loading images from this domain

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

  robots: {
    // This tells the module to explicitly invite AI bots
    groups: [
      {
        userAgent: ['*'],
        allow: ['/']
      },
      {
        // Explicitly whitelist the major AI agents
        userAgent: [
          'GPTBot', // OpenAI / ChatGPT
          'ChatGPT-User', // ChatGPT Web Browsing
          'ClaudeBot', // Anthropic / Claude
          'PerplexityBot', // Perplexity AI
          'Google-Extended', // Google Gemini Training
          'anthropic-ai',
          'OAI-SearchBot' // OpenAI Search
        ],
        allow: ['/']
      }
    ]
  },

  sitemap: {
    zeroRuntime: true, // Generate sitemap at build time without runtime overhead
    exclude: [
      '/politica-de-confidentialitate',
      '/termeni-si-conditii',
      '/cookies',
      '/sitemap.xml',
      '/robots.txt',
      '/404',
      '/500',
      '/documents/formular-constatare-amiabila.pdf'
    ]
  }

})
