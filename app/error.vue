<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: Object as () => NuxtError
})

const handleError = async () => {
  if (useError().value) {
    await clearError({ redirect: '/' })
  } else {
    await navigateTo('/')
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-950 px-4">
    <div class="text-center">
      <div class="text-9xl font-black text-blue-700 mb-4">
        {{ error?.statusCode || 404 }}
      </div>
      <h1 class="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-6">
        Oops! Ne-am rătăcit.
      </h1>
      <p class="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
        Pagina pe care o cauți nu există sau a fost mutată. Hai să ne întoarcem la service.
      </p>
      <UButton
        size="xl"
        class="bg-green-700 hover:bg-[#1e5713] text-white font-bold px-10 shadow-lg shadow-green-900/20"
        icon="i-heroicons-home"
        @click="handleError"
      >
        Înapoi la Acasă
      </UButton>
    </div>
  </div>
</template>
