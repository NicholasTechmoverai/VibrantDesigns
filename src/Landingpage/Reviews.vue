<template>
    <div>
        <div class="max-w-6xl mx-auto text-center">
            <n-gradient-text type="primary" size="16" class="inline-flex items-center px-4 py-2 rounded-full 
          bg-gray-100/80 dark:bg-gray-800/80 border border-brand/30 
          text-sm font-medium backdrop-blur-sm">
                {{ tm('landingPage.reviews.vb') }}
            </n-gradient-text>

            <h1 class="text-4xl md:text-5xl font-bold mt-6 mb-4 
          text-gray-900 dark:text-white leading-tight">
                {{ tm('landingPage.reviews.title') }}
            </h1>

            <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 
          max-w-3xl mx-auto mb-12">
                {{ tm('landingPage.reviews.description') }}
            </p>
        </div>

        <div class="flex justify-center">
            <n-carousel show-arrow autoplay class="rounded-2xl overflow-hidden shadow-2xl
           border border-brand/20 dark:border-brand/30 
           w-full md:max-w-4xl h-fit md:h-[340px]  backdrop-blur-sm">
                <div v-for="(review, index) in reviews" :key="index"
                    class="flex flex-col md:flex-row items-center justify-center h-full w-full md:gap-8 p-6 md:p-8">
                    <n-image :src="review.image" preview-disabled
                        class="w-28 h-28 md:w-[40%] md:h-full rounded-full md:rounded-2xl object-cover shadow-md" />

                    <div
                        class="flex flex-col items-center md:items-start justify-center w-full md:w-[60%] space-y-4 text-center md:text-left">
                        <QuoteRight class="w-7 h-7 text-brand opacity-80" />

                        <p
                            class="text-base md:text-lg italic text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl">
                            “{{ review.feedback }}”
                        </p>

                        <n-rate size="small" readonly value="5" class="text-brand" />

                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            {{ review.name }}
                        </h3>
                    </div>
                </div>

                <template #arrow="{ prev, next }">
                    <div class="flex gap-3 absolute bottom-4 right-4">
                        <n-button quaternary circle size="small"
                            class="bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm" @click="prev">
                            <n-icon>
                                <ArrowBack />
                            </n-icon>
                        </n-button>
                        <n-button quaternary circle size="small"
                            class="bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm" @click="next">
                            <n-icon>
                                <ArrowForward />
                            </n-icon>
                        </n-button>
                    </div>
                </template>

                <template #dots="{ total, currentIndex, to }">
                    <ul class="flex gap-2 absolute bottom-4 left-4">
                        <li v-for="index of total" :key="index" class="h-1.5 rounded-full transition-all cursor-pointer"
                            :class="currentIndex === index - 1
                                ? 'w-8 bg-white shadow-md'
                                : 'w-3 bg-white/40'" @click="to(index - 1)" />
                    </ul>
                </template>
            </n-carousel>
        </div>

    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { ArrowBack, ArrowForward } from '@vicons/ionicons5'
import { QuoteRight } from '@vicons/fa'

const { tm } = useI18n()

const reviews = computed(() =>
    [0, 1, 2].map(i => ({
        name: tm(`landingPage.reviews.testimonials.${i}.client`),
        feedback: tm(`landingPage.reviews.testimonials.${i}.feedback`),
        image: `https://randomuser.me/api/portraits/${i === 0 ? 'men' : 'women'}/${i + 1}.jpg`
    }))
)
</script>
