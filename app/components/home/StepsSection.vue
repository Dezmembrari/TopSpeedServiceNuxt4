<script setup lang="ts">
const steps = [
  { id: 1, title: 'Contactați-ne', description: 'Sunați-ne imediat după accident. Vă ghidăm pas cu pas prin procesul de constatare.', icon: 'i-line-md-phone-call-loop' },
  { id: 2, title: 'Transport & Mașină', description: 'Trimitem platforma să ridice mașina avariată și vă livrăm mașina la schimb pe loc.', icon: 'i-line-md-upload-loop' },
  { id: 3, title: 'Constatare & Amiabilă', description: 'Vă asistăm la completarea amiabilei și efectuăm constatarea daunelor în centrul nostru autorizat.', icon: 'i-line-md-clipboard-check' },
  { id: 4, title: 'Gestionare Dosar', description: 'Noi comunicăm cu asiguratorul. Dumneavoastră nu pierdeți timp la cozi sau la telefon.', icon: 'i-line-md-email-opened-twotone' },
  { id: 5, title: 'Reparație & Livrare', description: 'Reparăm mașina folosind piese originale și v-o returnăm ca nouă!', icon: 'i-line-md-star-pulsating-loop' }
]
</script>

<template>
  <section
    id="steps"
    class="py-16 md:py-24 bg-white dark:bg-slate-900 relative"
  >
    <UContainer class="max-w-5xl">
      <div class="text-center mb-12 md:mb-20 px-4">
        <h2 class="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Procesul Simplificat
        </h2>
        <p class="text-gray-500 text-xl">
          De la accident la mașina reparată în 5 pași simpli
        </p>
      </div>

      <div class="relative">
        <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-slate-800 -translate-x-1/2" />
        <div class="md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-slate-800" />

        <div class="space-y-8 md:space-y-0">
          <div
            v-for="(step, index) in steps"
            :key="step.id"
            class="relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0 pl-12 md:pl-0"
          >
            <!-- Timeline Dot with Inset Shadow (No Border) -->
            <div class="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 md:w-12 md:h-12 rounded-full bg-blue-700 z-10 flex items-center justify-center text-white font-bold text-sm md:text-lg shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),0_4px_8px_rgba(0,0,0,0.3)]">
              {{ step.id }}
            </div>

            <div
              class="w-full md:w-1/2 flex"
              :class="index % 2 === 0 ? 'md:justify-end md:pr-16' : 'md:justify-start md:pl-16 md:ml-auto'"
            >
              <div class="w-full bg-white dark:bg-slate-950 p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-slate-800 hover:border-green-700/30 transition-colors shadow-xl dark:shadow-none">
                <div class="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <UIcon
                    :name="step.icon"
                    class="w-8 h-8 md:w-10 md:h-10 text-green-700"
                  />
                  <h3 class="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                    {{ step.title }}
                  </h3>
                </div>
                <p class="text-gray-900 dark:text-gray-300 text-lg leading-relaxed font-medium">
                  {{ step.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
