<template>
  <n-config-provider :theme="resolvedTheme" :theme-overrides="themeOverrides">
    <n-loading-bar-provider>
      <n-message-provider>
        <n-notification-provider>
          <n-dialog-provider>
            <RouterView/>
          </n-dialog-provider>
        </n-notification-provider>
      </n-message-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>


<script setup>
import { computed,ref } from 'vue'
import { darkTheme } from 'naive-ui'
import { useUserStore } from './stateStore/user'

const userStore  = useUserStore()
const resolvedTheme = computed(() =>
  userStore.theme === 'dark' ? darkTheme : null
)
const colors = ['#18a058', '#4cafef', '#ffd700']
const index = 2

const themeOverrides = ref({
  common: {
    primaryColor: colors[index],
    primaryColorHover: colors[index],
    primaryColorPressed: colors[index],
  }
})

</script>
