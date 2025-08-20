<template>
  <div>
    <div class="text-center mb-16 max-w-4xl mx-auto">
      <n-gradient-text type="primary" size="16" class="inline-flex items-center px-4 py-2 rounded-full
               bg-gray-100/80 dark:bg-gray-800/80
               border border-brand/30 text-sm font-medium backdrop-blur-sm">
        {{ tm('landingPage.letsCraft.vb') }}
      </n-gradient-text>

      <h1 class="text-4xl md:text-5xl font-bold mt-6 mb-4
               text-gray-900 dark:text-white leading-tight">
        {{ tm('landingPage.letsCraft.title') }}
      </h1>

      <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300
               max-w-2xl mx-auto">
        {{ tm('landingPage.letsCraft.description') }}
      </p>
    </div>

    <div class="flex flex-col md:flex-row gap-10 w-full items-start">
      <div class="flex flex-col justify-center gap-8 md:max-w-[30%]">
        <h2 class="text-3xl md:text-4xl font-bold
                 text-gray-900 dark:text-white leading-snug">
          {{ tm('landingPage.letsCraft.craft.title') }}
        </h2>

        <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300
                 max-w-lg">
          {{ tm('landingPage.letsCraft.craft.description') }}
        </p>
        <div class="flex flex-col gap-6">
          <div v-for="(b, index) in tm('landingPage.letsCraft.craft.us')" :key="index" class="flex flex-row items-start gap-3 border rounded-2xl
                   border-brand/30 p-5 bg-white/20 dark:bg-gray-700/20
                   backdrop-blur-sm hover:shadow-md transition">
            <component :is="icons[index]"
              class="w-8 h-8 bg-white/20 dark:bg-gray-900/20 text-brand shrink-0 border border-brand/30 rounded p-2" />

            <div class="flex flex-col gap-1 text-left">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                {{ b.t }}
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                {{ b.d }}
              </p>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                {{ b.c }}
              </p>
              <n-gradient-text class="text-sm font-semibold mt-1">
                {{ b.b }}
              </n-gradient-text>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <n-button class="!bg-brand hover:scale-101 rounded-md !text-black !font-semibold" type="default"
              size="large" block @click="handleResetClick">
              <template #icon>
                <NIcon>
                  <CalendarClearOutline />
                </NIcon>
              </template>
              {{ tm('landingPage.letsCraft.craft.buttons.0') }}
            </n-button>
            <n-button class=" hover:scale-101 rounded-md !text-black !font-semibold" type="default" size="large" block
              @click="handleResetClick">
              {{ tm('landingPage.letsCraft.craft.buttons.1') }}
              <template #icon>
                <NIcon>
                  <ChatbubbleOutline />
                </NIcon>
              </template>
            </n-button>
          </div>
        </div>
      </div>

      <InputForm />
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n"
const { tm } = useI18n()
import InputForm from "./InputForm.vue"
import { Location28Regular, Call28Regular, Clock28Regular } from "@vicons/fluent"
import { EnvelopeRegular } from "@vicons/fa"
import { CalendarClearOutline, ChatbubbleOutline } from "@vicons/ionicons5"

const icons = [
  Location28Regular, Call28Regular, EnvelopeRegular, Clock28Regular
]
</script>
