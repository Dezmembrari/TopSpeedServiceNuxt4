<script setup lang="ts">
// Tap into the global state created by the FunnelDocumentsSection.
const hideFloatingBar = useState('hideFloatingBar', () => false)
</script>

<template>
  <div
    class="fixed bottom-6 left-4 right-4 z-50 flex gap-3 p-2 bg-white/60 dark:bg-slate-900/65 backdrop-blur-xl border border-gray-200 dark:border-slate-700 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] md:hidden transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
    :class="hideFloatingBar ? 'translate-y-[150%] opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'"
  >
    <UButton
      block
      size="xl"
      color="neutral"
      variant="soft"
      icon="i-line-md-chat"
      class="flex-1 rounded-xl text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20"
      to="https://wa.me/40788990011"
      aria-label="Scrie-ne pe WhatsApp"
      target="_blank"
    />
    <UButton
      block
      size="xl"
      class="bg-green-700 hover:bg-green-600 text-white flex-2 font-bold shadow-lg rounded-xl transition-transform active:scale-95"
      icon="i-line-md-phone-call-loop"
      to="tel:+40788990011"
    >
      Sună Acum
    </UButton>
  </div>
</template>
