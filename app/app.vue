<script lang="ts" setup>
// --- 2. Head Configuration ---
useHead({
  titleTemplate: '%s | Top Speed Service Bragadiru', // %s is replaced by the page title
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'format-detection', content: 'telephone=no' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'ro'
  }
})

useSeoMeta({
  ogType: 'website',
  ogSiteName: 'Top Speed Service Auto',
  ogImage: 'https://topspeedservice.eu/service.jpeg', // Make sure to add this image!
  ogUrl: 'https://topspeedservice.eu',
  twitterCard: 'summary_large_image'
})

useSchemaOrg([
  {
    '@type': ['AutoRepair', 'LocalBusiness'],
    '@id': 'https://topspeedservice.eu/#localbusiness',
    'name': 'Top Speed Service',
    'description': 'Service auto premium în Bragadiru, Ilfov. Oferim servicii complete de mecanică, diagnoză auto, tinichigerie, vopsitorie la cuptor, încărcare freon și tractare. Decontare directă a daunelor auto pe polițe RCA și CASCO, platformă auto și mașină la schimb gratuită pe durata reparației.',
    'url': 'https://topspeedservice.eu',
    // 'logo': 'https://topspeedservice.eu/logo.png',
    'image': 'https://topspeedservice.eu/service.jpeg',
    'telephone': '+40788990011',
    'email': 'office@topspeedservice.eu',
    'priceRange': '$$',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Șoseaua Clinceni, DJ401A, Nr. 6',
      'addressLocality': 'Bragadiru',
      'addressRegion': 'Ilfov',
      'postalCode': '077025',
      'addressCountry': 'RO'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 44.3658915,
      'longitude': 25.9697562
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.5',
      'reviewCount': '76',
      'bestRating': '5',
      'worstRating': '1'
    },
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        'opens': '08:00',
        'closes': '17:00'
      }
    ],
    // Optimizare pentru a indica faptul că același număr este folosit pentru suport/rezervări
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+40788990011',
      'contactType': 'Reservations',
      'availableLanguage': ['Romanian', 'English']
    },
    'isAccessibleForFree': true,
    'currenciesAccepted': 'RON, EUR',
    'paymentAccepted': 'Cash, Credit Card, Bank Transfer',
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Servicii Auto',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Constatare Daune Auto și Decontare RCA/CASCO'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Platformă Tractare Auto (Decontată pe Asigurare)'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Mașină la Schimb Gratuită'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Tinichigerie Auto'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Vopsitorie Auto la Cuptor'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Mecanică Auto și Revizii'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Diagnoză Auto Computerizată (Tester Multimarcă)'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Încărcare Freon Auto / Service AC (R134a și R1234yf)'
          }
        }
      ]
    },
    'sameAs': [
      'https://facebook.com/TopSpeedRomania/',
      'https://www.google.com/maps/place/Top+Speed+Service+S.R.L./@44.3658915,25.9697562,17z/data=!3m1!4b1!4m6!3m5!1s0x40b1ffdbe2537def:0xb5be45e52dd86aef!8m2!3d44.3658915!4d25.9697562!16s%2Fg%2F1tj5rns2',
      'https://wa.me/40788990011' // LINK-UL DE WHATSAPP ADAUGAT AICI
    ]
  }
])
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <LazyCookieBanner />
</template>
