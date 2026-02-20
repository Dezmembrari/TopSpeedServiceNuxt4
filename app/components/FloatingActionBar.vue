<template>
  <div class="fixed bottom-6 left-4 right-4 z-50 flex gap-3 p-2 bg-white/60 dark:bg-slate-900/65 backdrop-blur-xl border border-gray-200 dark:border-slate-700 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] md:hidden">
    <UButton
      block
      size="xl"
      color="neutral"
      variant="soft"
      icon="i-line-md-email"
      class="flex-1 rounded-xl"
      to="mailto:office@topspeedservice.eu"
    />
    <UButton
      block
      size="xl"
      class="bg-green-700 text-white flex-2 font-bold shadow-lg rounded-xl"
      icon="i-line-md-phone-call-loop"
      to="tel:+40788990011"
    >
      Sună Acum
    </UButton>
  </div>
</template>
