<template>
  <div class="flex flex-col w-full   text-[#EAEAEA] dark:bg-[#1A1A1A] relative">
    <n-space
      justify="space-between"
      class="p-4 border-b border-brand fixed top-0 z-100 h-fit bg-gray-100/50 dark:bg-gray-400/20 inset-0 backdrop-blur-lg backdrop-filter"
    >
      <Logo />

      <n-space>
        <n-tabs type="line" animated>
          <n-tab-pane
            v-for="tab in navLinks"
            :key="tab.name"
            :name="tab.name"
            :tab="tab.text"
            class="text-brand"
          />
        </n-tabs>
      </n-space>
      <GetstartedButton />
      <div class="absolute" v-if="showGlobalCons">
      <GlobalCons />
      </div>
    </n-space>

  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import Logo from '../composables/Logo.vue'
import GetstartedButton from '../composables/GetstartedButton.vue'
import GlobalCons from '../composables/Globalcons.vue'
import { useI18n } from 'vue-i18n'

const showGlobalCons = ref(false)
const { tm } = useI18n()

const navLinks = computed(() => [
    { to: '/home', text: tm('landingPage.navButtons')[0] ,name:'Home'},
    { to: '/about', text: tm('landingPage.navButtons')[1] ,name:'About'},
    { to: '/portfolio', text: tm('landingPage.navButtons')[2] ,name:'Portfolio'},
    { to: '/services', text: tm('landingPage.navButtons')[3] ,name:'Services'},
    { to: '/contact', text: tm('landingPage.navButtons')[4] ,name:'Contact'}
])


</script>