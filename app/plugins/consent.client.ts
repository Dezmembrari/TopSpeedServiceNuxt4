// plugins/consent.client.ts
import { defineNuxtPlugin } from '#app'

interface ConsentState {
  analytics: boolean
  marketing: boolean
  necessary: boolean
  hasDecided: boolean
}

export default defineNuxtPlugin(() => {
  // 1. Initialize the state globally
  const consentState = useState<ConsentState>('cookie-consent', () => ({
    analytics: false,
    marketing: false,
    necessary: true,
    hasDecided: false
  }))

  // 2. Read from localStorage on boot
  const saved = localStorage.getItem('cookie-consent')
  if (saved) {
    try {
      const parsed = JSON.parse(saved)
      consentState.value = { ...consentState.value, ...parsed, hasDecided: true }

      // If they already accepted, load scripts immediately on boot
      applyScripts(consentState.value)
    } catch {
      // Ignore corrupted JSON
    }
  }

  // 3. The Function that actually loads the scripts based on consent
  function applyScripts(state: ConsentState) {
    // --- ANALYTICS (GA4 & Clarity) ---
    if (state.analytics) {
      // Google Analytics
      const { load: loadGA } = useScriptGoogleAnalytics({
        id: 'G-LH0W4L7HMT',
        scriptOptions: { trigger: 'manual' }
      })
      loadGA()

      // Microsoft Clarity
      const { load: loadClarity } = useScriptClarity({
        id: 'vm1lzae1ur', // Your extracted Clarity ID
        scriptOptions: { trigger: 'manual' }
      })
      loadClarity()
    }

    // --- MARKETING (Meta Pixel) ---
    if (state.marketing) {
      const { load: loadMeta } = useScriptMetaPixel({
        id: '25869407186057481', // Your exact Pixel ID
        scriptOptions: { trigger: 'manual' }
      })
      loadMeta()
    }
  }

  // 4. Expose an update function to the rest of the app (like your banner)
  const updateConsent = (newChoices: { analytics: boolean, marketing: boolean }) => {
    const newState = {
      analytics: newChoices.analytics,
      marketing: newChoices.marketing,
      necessary: true,
      hasDecided: true
    }

    // Save to local storage
    localStorage.setItem('cookie-consent', JSON.stringify(newState))

    // Update the Vue state
    consentState.value = newState

    // Fire the scripts
    applyScripts(newState)
  }

  return {
    provide: {
      consentManager: {
        state: consentState,
        update: updateConsent
      }
    }
  }
})
