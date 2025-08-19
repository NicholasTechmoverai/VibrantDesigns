<template>
    <div>
        <div class="max-w-6xl mx-auto text-center">
            <n-gradient-text type="primary" size="16" class="inline-flex items-center px-4 py-2 rounded-full 
               bg-gray-100/80 dark:bg-gray-800/80 border border-brand/30 
               text-sm font-medium backdrop-blur-sm">
                {{ tm('landingPage.values.vb') }}
            </n-gradient-text>

            <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 
               max-w-3xl mx-auto mb-12">
                {{ tm('landingPage.values.description') }}
            </p>
        </div>

        <div class="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div v-for="(value, index) in tm('landingPage.values.list')" :key="value.title"
                class="border border-brand/10 dark:border-brand/20 rounded-xl p-6 hover:shadow-lg transition-all duration-300 bg-white/70 dark:bg-gray-900/10 backdrop-blur-sm text-center flex flex-col items-center gap-3">
                <component :is="icons[index]"
                    class="w-10 h-10 p-2 rounded-lg border border-brand/20 dark:border-brand/30 text-brand dark:text-brand/90  " />
                <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                    {{ value.title }}
                </h3>
                <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {{ value.description }}
                </p>
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