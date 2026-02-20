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
    class="py-16 md:py-24 bg-gray-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300"
  >
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-150 bg-blue-500/10 dark:bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

    <UContainer class="max-w-5xl relative z-10">
      <div class="text-center mb-16 md:mb-24 px-4">
        <div class="inline-flex items-center justify-center px-6 py-2.5 mb-6 rounded-full border border-blue-200/50 dark:border-blue-800/50 bg-blue-50 dark:bg-blue-900/20 shadow-sm backdrop-blur-md">
          <span class="text-xs font-black text-blue-700 dark:text-blue-400 uppercase tracking-widest">
            Fără Stres, Fără Costuri
          </span>
        </div>

        <h2 class="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900 dark:text-white leading-tight">
          Procesul <span class="text-blue-700 dark:text-blue-500">Simplificat</span>
        </h2>
        <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium max-w-2xl mx-auto">
          De la accident la mașina reparată în <span class="text-gray-900 dark:text-gray-200 font-bold">5 pași simpli.</span>
        </p>
      </div>

      <div class="relative">
        <div class="hidden md:block absolute left-1/2 top-4 bottom-4 w-1 bg-linear-to-b from-blue-500 via-teal-400 to-green-500 -translate-x-1/2 rounded-full opacity-30 dark:opacity-50" />
        <div class="md:hidden absolute left-6 top-4 bottom-4 w-1 bg-linear-to-b from-blue-500 via-teal-400 to-green-500 rounded-full opacity-30 dark:opacity-50" />

        <div class="space-y-8 md:space-y-12">
          <div
            v-for="(step, index) in steps"
            :key="step.id"
            class="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 pl-16 md:pl-0 group"
          >
            <div class="absolute left-2 md:left-1/2 md:-translate-x-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white dark:bg-slate-900 border-4 border-gray-50 dark:border-slate-950 z-10 flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110">
              <span
                class="font-black text-lg md:text-xl"
                :class="index > 2 ? 'text-green-600 dark:text-green-500' : 'text-blue-600 dark:text-blue-500'"
              >
                {{ step.id }}
              </span>
            </div>

            <div
              class="w-full md:w-1/2 flex"
              :class="index % 2 === 0 ? 'md:justify-end md:pr-16' : 'md:justify-start md:pl-16 md:ml-auto'"
            >
              <div class="w-full bg-white/70 dark:bg-slate-900/60 backdrop-blur-2xl p-6 md:p-8 rounded-4xl border border-white/60 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-1 group-hover:border-blue-200 dark:group-hover:border-blue-800/50">
                <div class="flex items-center gap-4 mb-4">
                  <div
                    class="w-12 h-12 rounded-2xl flex items-center justify-center shadow-md border border-white/40 dark:border-white/10"
                    :class="index > 2 ? 'bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400' : 'bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400'"
                  >
                    <UIcon
                      :name="step.icon"
                      class="w-7 h-7"
                    />
                  </div>
                  <h3 class="text-xl md:text-2xl font-black text-gray-900 dark:text-white leading-tight">
                    {{ step.title }}
                  </h3>
                </div>

                <p class="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed font-medium">
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
