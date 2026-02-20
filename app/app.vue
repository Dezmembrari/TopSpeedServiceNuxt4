<script lang="ts" setup>
// We don't need to explicitly import from #imports in Nuxt, it's auto-imported.
// But keeping it specific doesn't hurt.

// --- 1. Schema.org (SEO) ---
useSchemaOrg([
  {
    '@type': 'AutoRepair',
    'name': 'Top Speed Service',
    'url': 'https://topspeedservice.eu',
    'telephone': '+40788990011',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Sos. Clinceni, DJ401A 6',
      'addressLocality': 'Bragadiru',
      'postalCode': '077025',
      'addressCountry': 'RO'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 44.37006664441284,
      'longitude': 25.96906184733097
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.4',
      'reviewCount': '76'
    },
    'openingHours': 'Mo,Tu,We,Th,Fr 08:00-17:30', // Updated to match your site text
    'priceRange': '$$', // Recommended for AutoRepair
    'currenciesAccepted': 'RON,EUR',
    'paymentAccepted': 'Cash, Credit Card',
    'sameAs': [
      'https://facebook.com/TopSpeedRomania/'
    ]
  }
])

// --- 2. Head Configuration ---
useHead({
  title: 'Top Speed Service | Service Auto Bragadiru',
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
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
