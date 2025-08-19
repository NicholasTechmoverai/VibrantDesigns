<template>
    <section class="relative py-20 px-6 lg:px-12">
        <div class="max-w-6xl mx-auto text-center">
            <n-gradient-text type="primary" size="16" class="inline-flex items-center px-4 py-2 rounded-full 
               bg-gray-100/80 dark:bg-gray-800/80 border border-brand/30 
               text-sm font-medium backdrop-blur-sm">
                {{ tm('landingPage.about.vb') }}
            </n-gradient-text>

            <h1 class="text-4xl md:text-5xl font-bold mt-6 mb-4 
               text-gray-900 dark:text-white leading-tight">
                {{ tm('landingPage.about.title') }}
            </h1>

            <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 
               max-w-3xl mx-auto mb-12">
                {{ tm('landingPage.about.description') }}
            </p>
        </div>

        <div class="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
            <div class="flex-1 text-left">
                <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                    {{ tm('landingPage.about.story.header') }}
                </h3>
                <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {{ tm('landingPage.about.story.content') }}
                </p>

                <div class="mt-6 flex flex-wrap gap-4">
                    <n-button v-for="(b, index) in tm('landingPage.about.buttons')" :key="b"
                        :type="index === 0 ? 'primary' : 'default'" size="large"
                        class="px-6 rounded-xl shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98]">
                        {{ b }}
                    </n-button>
                </div>
            </div>

            <div class="flex-1 w-full md:w-1/2 h-full p-4 
               border border-brand/20 rounded-2xl shadow-lg">
                <n-image :src="ongoingProjectLink" preview-disabled
                    class="rounded-2xl w-full h-full object-cover shadow-lg" />
            </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto mt-16">
            <div v-for="(s, index) in tm('landingPage.about.scale')" :key="s"
                class="flex flex-col items-center border border-brand/10 dark:border-brand/20 rounded-xl p-2 hover:shadow-lg transition-all duration-300 bg-white/70 dark:bg-gray-900/10 backdrop-blur-sm">
                <n-gradient-text class="text-3xl font-bold text-brand mb-2">
                    {{ scale[index] }}
                </n-gradient-text>
                <p class=" text-gray-700 dark:text-gray-200">
                    {{ s }}
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { tm } = useI18n()

const ongoingProjectLink =
    "https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"

const scale = ['8+', '500+', '200+', '50+']
</script>
