<template>
  <header 
    class="w-full text-gray-900 dark:text-[#EAEAEA] bg-transparent dark:bg-[#1A1A1A] transition-all duration-500 ease-in-out"
    :class="{
      'fixed top-0 left-0 right-0 z-50 shadow-sm backdrop-blur-md bg-white/80 dark:bg-[#1A1A1A]/90 border-b border-gray-200/50 dark:border-gray-700/30': isScrolled,
      'relative': !isScrolled
    }"
  >
    <div class="container mx-auto px-4 py-3 transition-all duration-300">
      <n-space 
        justify="space-between" 
        align="center"
        class="w-full transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
      >
        <Logo class="flex-shrink-0 transition-transform duration-300 hover:scale-105" />

        <n-tabs 
          type="line" 
          animated
          class="hidden md:flex transition-all duration-500"
        >
          <n-tab-pane
            v-for="tab in navLinks"
            :key="tab.name"
            :name="tab.name"
            :tab="tab.text"
            class="text-gray-700 dark:text-gray-300 hover:text-brand dark:hover:text-brand transition-all duration-300 transform hover:-translate-y-0.5 px-4 py-2"
          />
        </n-tabs>

        <div class="flex items-center gap-4 transition-all duration-300">
          <GetstartedButton 
            class="transition-all duration-300 hover:scale-105 hover:shadow-md" 
          />
          <transition
            enter-active-class="transition-opacity duration-300 ease-out"
            leave-active-class="transition-opacity duration-200 ease-in"
            enter-from-class="opacity-0"
            leave-to-class="opacity-0"
          >
            <GlobalCons 
              v-if="showGlobalCons"
              class="absolute right-4 top-16 z-50 transition-all duration-300"
            />
          </transition>
        </div>
      </n-space>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Logo from '../composables/Logo.vue'
import GetstartedButton from '../composables/GetstartedButton.vue'
import GlobalCons from '../composables/Globalcons.vue'

const { tm } = useI18n()
const showGlobalCons = ref(false)
const isScrolled = ref(false)

const navLinks = computed(() => [
  { to: '/home', text: tm('landingPage.navButtons')[0], name: 'Home' },
  { to: '/about', text: tm('landingPage.navButtons')[1], name: 'About' },
  { to: '/portfolio', text: tm('landingPage.navButtons')[2], name: 'Portfolio' },
  { to: '/services', text: tm('landingPage.navButtons')[3], name: 'Services' },
  { to: '/contact', text: tm('landingPage.navButtons')[4], name: 'Contact' }
])

const handleScroll = () => {
  requestAnimationFrame(() => {
    isScrolled.value = window.scrollY > 20
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>