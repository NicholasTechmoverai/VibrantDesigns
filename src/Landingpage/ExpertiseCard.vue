<template>
  <div class="max-w-6xl mx-auto px-6 py-12">
    <div class="text-center mb-12">
      <n-gradient-text class="inline-flex items-center px-4 py-2 rounded-full bg-gray-100/80 dark:bg-gray-800/80 border border-brand/30 text-sm font-medium backdrop-blur-sm">
        {{ tm('landingPage.expertiseCard.vb') }}
      </n-gradient-text>
      <h1 class="text-3xl md:text-4xl font-bold mt-4 mb-3 text-gray-900 dark:text-white">
        {{ tm('landingPage.expertiseCard.title') }}
      </h1>
      <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        {{ tm('landingPage.expertiseCard.description') }}
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      <div 
        v-for="(service, index) in tm('landingPage.expertiseCard.services')" 
        :key="index"
        class="border border-brand/10 dark:border-brand/20 rounded-xl p-6 hover:shadow-lg transition-all duration-300  inset-0 z-10 bg-white/70 dark:bg-gray-900/10 backdrop-blur-sm"
      >
        <div class="flex items-center mb-4">
          <component 
            :is="icons[index]" 
            class="w-10 h-10 p-2 rounded-lg border border-brand/20 dark:border-brand/30 text-brand dark:text-brand/90  "
          />
          <h2 class="text-xl font-bold ml-3 text-gray-800 dark:text-gray-100">
            {{ tm(`landingPage.expertiseCard.services.${index}.title`) }}
          </h2>
        </div>
        
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          {{ tm(`landingPage.expertiseCard.services.${index}.description`) }}
        </p>
        
        <ul class="space-y-2">
          <li 
            v-for="(feature, fIndex) in tm(`landingPage.expertiseCard.services.${index}.features`)"
            :key="fIndex"
            class="flex items-start"
          >
            <span class="bg-brand/90 dark:bg-brand/80 size-2 min-h-2 min-w-2 rounded-full mt-2 mr-2"></span>
            <span class="text-gray-700 dark:text-gray-200">{{ feature }}</span>

          </li>
        </ul>
        
            <n-button type="primary" size="small" class="my-5 w-full">
                {{ tm('landingPage.expertiseCard.lm') }}
            </n-button>
      </div>
    </div>

    <div class="text-center rounded-2xl p-8 border border-brand/30 dark:border-brand/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg">
      <h2 class="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
        {{ tm('landingPage.expertiseCard.footer.title') }}
      </h2>
      <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
        {{ tm('landingPage.expertiseCard.footer.subtitle') }}
      </p>
      <div class="flex flex-wrap justify-center gap-4">
        <n-button type="primary" size="large" class="px-6 rounded-md bg-brand">
          {{ tm('landingPage.expertiseCard.footer.buttons.0') }}
        </n-button>
        <n-button type="tertiary" size="large" class="px-6 rounded-md">
          {{ tm('landingPage.expertiseCard.footer.buttons.1') }}
        </n-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { 
  Cookies20Filled, 
  Globe24Regular, 
  Phone20Regular, 
  Video16Regular, 
  Box24Regular, 
  ArrowTrending24Filled 
} from '@vicons/fluent'

const { tm } = useI18n()

const icons = [
  Cookies20Filled, 
  Globe24Regular, 
  Phone20Regular, 
  Video16Regular, 
  Box24Regular, 
  ArrowTrending24Filled
]
</script>