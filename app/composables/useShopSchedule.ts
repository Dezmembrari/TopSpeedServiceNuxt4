import { ref, onMounted, onUnmounted } from 'vue'

export const useShopSchedule = () => {
  const isOpen = ref(false)
  const statusText = ref('Verificăm programul...')

  const checkSchedule = () => {
    const now = new Date()
    const day = now.getDay() // 0 = Sunday, 1 = Monday... 6 = Saturday
    const hour = now.getHours()
    const minute = now.getMinutes()
    const time = hour + minute / 60

    // Check if it's a weekday (Monday to Friday)
    if (day >= 1 && day <= 5) {
      if (time >= 8 && time < 17.5) {
        // We are currently within working hours
        isOpen.value = true
        statusText.value = 'Deschis Acum'
      } else if (time < 8) {
        // It's early morning on a weekday, before 08:00
        isOpen.value = false
        statusText.value = 'Închis • Deschidem Astăzi 08:00'
      } else {
        // It's past 17:30 on a weekday
        isOpen.value = false
        if (day === 5) {
          // If it's Friday evening, we open on Monday
          statusText.value = 'Închis • Deschidem Luni 08:00'
        } else {
          // If it's Mon-Thu evening, we open tomorrow
          statusText.value = 'Închis • Deschidem Mâine 08:00'
        }
      }
    } else {
      // It's the weekend (Saturday or Sunday)
      isOpen.value = false
      statusText.value = 'Închis • Deschidem Luni 08:00'
    }
  }

  let interval: NodeJS.Timeout

  onMounted(() => {
    checkSchedule()
    interval = setInterval(checkSchedule, 60000)
  })

  onUnmounted(() => {
    clearInterval(interval)
  })

  return { isOpen, statusText }
}
