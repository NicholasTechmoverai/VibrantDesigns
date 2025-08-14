<template>
            <n-switch v-model:value="isDark" size="large" :round="false" class="-rotate-90">
            <template #checked-icon>
                <span class="rotate-90 p-1">
                    On
                </span>
            </template>
            <template #unchecked-icon >
                <span class="rotate-90 p-1">
                    Off
                </span>
            </template>
        </n-switch>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useUserStore } from '../stateStore/user'

const userStore = useUserStore()
const isDark = ref(userStore.theme === 'dark')
watch(isDark, (val) => {
    userStore.setTheme(val ? 'dark' : 'light')
})
</script>