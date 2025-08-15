import { ref, onMounted, onBeforeUnmount } from 'vue'
const isMobile = ref(window.innerWidth < 768)

export const useIsMobile = () => {
  const checkIsMobile = () => {
    isMobile.value = window.innerWidth < 768
  }

  onMounted(() => {
    window.addEventListener('resize', checkIsMobile)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', checkIsMobile)
  })

  return isMobile
}
