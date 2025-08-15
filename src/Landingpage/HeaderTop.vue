<template>
  <div class="flex flex-col md:flex-row w-full items-center justify-between p-8 gap-8">
    <div class="flex flex-col items-center text-center w-full md:w-1/2">
      <n-gradient-text class="flex items-center gap-2 text-lg">
        <n-icon :size="22" :component="SparklesOutline" class="text-brand" />
        {{ tm('landingPage.headerTop.vb') }}
      </n-gradient-text>

      <div class="mt-4">
        <n-gradient-text class="text-4xl font-bold leading-tight">
          {{ tm('landingPage.headerTop.title') }}
        </n-gradient-text>
        <p class="mt-3 text-gray-600 text-lg">
          {{ tm('landingPage.headerTop.subtitle') }}
        </p>
      </div>

      <n-space class="mt-6" :size="20">
        <n-button type="primary" round size="large">
          {{ tm('landingPage.headerTop.buttons.0') }}
        </n-button>
        <n-button type="tertiary" round size="large">
          {{ tm('landingPage.headerTop.buttons.1') }}
        </n-button>
      </n-space>

      <n-divider class="w-full max-w-lg my-6" />

      <div class="grid grid-cols-3 gap-5 w-full max-w-lg">
        <div 
          v-for="(item, index) in achievements" 
          :key="index"
          class="flex flex-col items-center py-4  rounded-xl"
        >
          <div class="text-3xl font-bold text-brand">{{ item.value }}</div>
          <n-gradient-text class="mt-2 text-sm font-medium">
            {{ item.text }}
          </n-gradient-text>
        </div>
      </div>
    </div>

    <div class="w-full md:w-1/2 h-full p-6 border border-brand/20 rounded-2xl shadow-lg">
      <n-image 
        :src="ongoingProjectLink" 
        preview-disabled 
        class="rounded-2xl w-full h-full object-cover shadow-lg "
      />
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { SparklesOutline } from '@vicons/ionicons5'
import { computed } from 'vue'

const ongoingProjectLink = "https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"

const { tm } = useI18n()

const achievements = computed(() => [
  {
    text: tm('landingPage.headerTop.achievements')[0],
    value: '500+'
  },
  {
    text: tm('landingPage.headerTop.achievements')[1],
    value: '300+'
  },
  {
    text: tm('landingPage.headerTop.achievements')[2],
    value: '150+'
  }
])
</script>