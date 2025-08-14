<template>
    <div class="dark:bg-[#1A1A1A] text-[#EAEAEA] flex flex-col  p-5 w-full h-screen">
        <n-space justify="space-between">
            <Logo />
            <GlobalCons />
        </n-space>
        <n-space vertical>
            <Header />
        </n-space>
    </div>
</template>
<script setup>
import { ref, watch } from 'vue'
import Logo from '../composables/Logo.vue'
import GlobalCons from '../composables/Globalcons.vue'
import Header from './Header.vue'

</script>