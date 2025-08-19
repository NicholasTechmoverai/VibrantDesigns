<template>
    <div class="container mx-auto px-4 py-12 flex flex-col items-center gap-10">
        <!-- Header Section -->
        <div class="text-center mb-16 max-w-4xl mx-auto">
            <n-gradient-text type="primary" size="16"
                class="inline-flex items-center px-4 py-2 rounded-full bg-gray-100/80 dark:bg-gray-800/80 border border-brand/30 text-sm font-medium backdrop-blur-sm">
                {{ tm('landingPage.creativity.vb') }}
            </n-gradient-text>

            <h1 class="text-4xl md:text-5xl font-bold mt-6 mb-4 text-gray-900 dark:text-white leading-tight">
                {{ tm('landingPage.creativity.title') }}
            </h1>

            <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 mx-auto">
                {{ tm('landingPage.creativity.subtitle') }}
            </p>

            <n-button-group class="mt-8">
                <n-button v-for="(b, index) in tm('landingPage.creativity.buttons')" :key="b"
                    :type="index === 0 ? 'primary' : 'default'" size="large" class="px-6">
                    {{ b }}
                </n-button>
            </n-button-group>
        </div>

        <!-- Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            <n-card v-for="(card, i) in tm('landingPage.creativity.cards')" :key="i" hoverable
                class="transition-all duration-300 hover:shadow-lg dark:border-brand rounded-2xl min-w-[350px] overflow-hidden hover:scale-[1.01] relative"
                :content-style="{ padding: 0 }">
                <div class="overflow-hidden">
                    <n-image width="100%" height="200" object-fit="cover" lazy :src="srcList[i]"
                        class="w-full hover:scale-[1.01]">
                        <template #placeholder>
                            <div class="w-full h-[200px] flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                                <n-spin size="small" />
                            </div>
                        </template>
                        <template #fallback>
                            <div
                                class="w-full h-[200px] flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-400">
                                <n-icon size="30" :component="ImageOutline" />
                            </div>
                        </template>
                    </n-image>
                </div>

                <div class="bg-brand rounded-2xl text-black px-2 absolute top-1 right-1">
                    {{ card.year }}
                </div>

                <div class="p-6">
                    <n-gradient-text class="text-sm font-semibold mb-2">
                        {{ card.tp }}
                    </n-gradient-text>
                    <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                        {{ card.title }}
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400">
                        {{ card.subtitle }}
                    </p>

                    <n-button type="primary" text class="mt-4 pl-0" :focusable="false">
                        Learn more
                        <template #icon>
                            <n-icon :component="ArrowForward" />
                        </template>
                    </n-button>
                </div>
            </n-card>
        </div>

      <!-- Footer Button -->
<n-button
  type="primary"
  size="large"
  strong
  class="group w-fit min-w-[180px] rounded-xl transition-all duration-300 ease-out
         bg-brand hover:bg-brand-600 dark:bg-brand-500 dark:hover:bg-brand-400
         transform hover:scale-[1.02] active:scale-[0.98]
         shadow-md hover:shadow-lg"
>
  <div class="flex items-center justify-center gap-2 px-6 py-3">
    <span class="font-semibold text-white dark:text-gray-100">
      {{ tm('landingPage.creativity.footerButton') }}
    </span>
    <n-icon
      :component="ArrowForward"
      class="transition-transform duration-300 group-hover:translate-x-1"
    />
  </div>
</n-button>

    </div>
</template>

<script setup>
import { useI18n } from "vue-i18n"
import { ArrowForward, ImageOutline } from "@vicons/ionicons5"

const { tm } = useI18n()

const srcList = [
    'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
]
</script>

<style scoped>
.n-card {
    --n-border-radius: 16px;
}

.n-button-group .n-button:not(:first-child) {
    margin-left: 12px;
}
</style>