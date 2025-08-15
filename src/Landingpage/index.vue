<template>
  <div
    class="flex flex-col w-full min-h-screen items-center bg-[#F9F9F9] text-[#1A1A1A] dark:bg-[#1A1A1A] dark:text-[#EAEAEA] "
  >
    <Header class="w-full" />
    <main class="flex flex-col items-center w-full px-4 sm:px-8 py-6">
      <HeaderTop />
      <ExpertiseCard />
    </main>
  </div>
</template>

<script setup>
import Header from './Header.vue'
import HeaderTop from './HeaderTop.vue'
import ExpertiseCard from './ExpertiseCard.vue'
</script>
