<template>
    <section class="py-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <div class="text-center mb-12">
            <n-gradient-text type="primary" size="16" class="inline-flex items-center px-4 py-2 rounded-full 
               bg-gray-100/80 dark:bg-gray-800/80 border border-brand/30 
               text-sm font-medium backdrop-blur-sm">
                {{ tm('landingPage.team.title') }}
            </n-gradient-text>

            <p class="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {{ tm('landingPage.team.description') }}
            </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <n-card v-for="member in teamMembers" :key="member.name"
                class="rounded-2xl shadow-md !border !border-brand/30 transition-all hover:shadow-xl hover:scale-[1.02]">
                <template #cover>
                    <n-image :src="member.image" class="w-full h-48 object-fit rounded-t-2xl" preview-disabled />
                </template>

                <div class="space-y-2">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        {{ member.name }}
                    </h3>
                    <n-tag type="info" class="border border-brand/50 bg-brand/20 text-brand font-medium px-3 py-1 rounded-md">
                        {{ member.role }}
                    </n-tag>
                    <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {{ member.bio }}
                    </p>
                </div>
            </n-card>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { tm } = useI18n()

const teamMembers = computed(() => [
    {
        name: tm('landingPage.team.members.0.name'),
        role: tm('landingPage.team.members.0.role'),
        bio: tm('landingPage.team.members.0.bio'),
        image: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
        name: tm('landingPage.team.members.1.name'),
        role: tm('landingPage.team.members.1.role'),
        bio: tm('landingPage.team.members.1.bio'),
        image: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
        name: tm('landingPage.team.members.2.name'),
        role: tm('landingPage.team.members.2.role'),
        bio: tm('landingPage.team.members.2.bio'),
        image: 'https://randomuser.me/api/portraits/women/2.jpg'
    }
])
</script>
