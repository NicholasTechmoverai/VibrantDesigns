<template>
    <div>
        <div
            class="flex items-center justify-center rounded flex-row gap-1 [&span]:size-[10px] bg-gray-200/90 dark:bg-gray-500/90 rounded-2xl p-2 w-fit">
            <span v-for="color in colors" :key="color.value" :class="color.color"
                class="rounded-full border size-[15px] cursor-pointer"></span>
        </div>
    </div>
    <div>
        <n-gradient-text type="success">
            {{ t('landingPage.header.title') }}
        </n-gradient-text>
        <n-gradient-text type="info">
            {{ t('landingPage.header.subtitle') }}
        </n-gradient-text>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const colors = [
    { value: 'blue', color: 'bg-[blue]' },
    { value: 'red', color: 'bg-[red]' },
    { value: 'green', color: 'bg-[green]' },
    { value: 'yellow', color: 'bg-[yellow]' },
    { value: 'purple', color: 'bg-[purple]' },
]
</script>