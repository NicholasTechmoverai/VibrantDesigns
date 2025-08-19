<template>
    <div>
        <div class="max-w-6xl mx-auto text-center my-10">
            <n-gradient-text type="primary" size="16" class="inline-flex items-center px-4 py-2 rounded-full 
          bg-gray-100/80 dark:bg-gray-800/80 border border-brand/30 
          text-sm font-medium backdrop-blur-sm">
                {{ tm('landingPage.trustee.title') }}
            </n-gradient-text>

            <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 
          max-w-3xl mx-auto mb-12">
                {{ tm('landingPage.trustee.description') }}
            </p>
        </div>
        <div class="inline-block overflow-x-auto whitespace-nowrap">
            <div v-for="brand in brands" :key="brand.url"
                class="inline-block mx-2 mb-4 rounded-3xl border border-brand/30 px-2">
                <n-image width="100" :src="brand.url">
                    <template #error>
                        <n-icon :size="100" color="lightGrey">
                            <ImageOutline />
                        </n-icon>
                    </template>
                </n-image>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { ImageOutline } from "@vicons/ionicons5"

const { tm } = useI18n()

const brands = [
    {
        name: 'Brand 1',
        url: 'https://via.placeholder.com/100'
    }, {
        name: 'Brand 2',
        url: 'https://via.placeholder.com/100'
    }, {
        name: 'Brand 3',
        url: 'https://via.placeholder.com/100'
    }, {
        name: 'Brand 1',
        url: 'https://via.placeholder.com/100'
    }, {
        name: 'Brand 2',
        url: 'https://via.placeholder.com/100'
    }, {
        name: 'Brand 3',
        url: 'https://via.placeholder.com/100'
    },
    {
        name: 'Brand 1',
        url: 'https://via.placeholder.com/100'
    }, {
        name: 'Brand 2',
        url: 'https://via.placeholder.com/100'
    }, {
        name: 'Brand 3',
        url: 'https://via.placeholder.com/100'
    }]

</script>
