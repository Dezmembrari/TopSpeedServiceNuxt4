declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    clarity?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
  }
}

export function useTracking() {
  const { $consentManager } = useNuxtApp()

  // We pass the "method" (e.g., 'whatsapp', 'phone', 'email')
  const trackLead = (method: string) => {
    // Safety check: Don't run on the server
    if (typeof window === 'undefined') return

    const state = $consentManager.state.value

    // 1. Send to Google Analytics (GA4)
    if (state.analytics && window.gtag) {
      window.gtag('event', 'generate_lead', {
        event_category: 'Contact',
        event_label: method
        // value: 1 // Optional: assign a dummy value to the lead
      })
    }

    // 2. Send to Microsoft Clarity
    if (state.analytics && window.clarity) {
      window.clarity('set', 'Lead_Attempt', method)
    }

    // 3. Send to Meta / Facebook Pixel
    if (state.marketing && window.fbq) {
      // 'Contact' is a standard Meta event
      window.fbq('track', 'Contact', {
        content_name: method
      })
    }

    // console.log(`[Tracking] Lead fired for: ${method}`) // Helpful for your debugging!
  }

  return { trackLead }
}
