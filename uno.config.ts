import { defineConfig, presetUno, presetIcons, presetAttributify } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetAttributify(),
  ],
  theme: {
    colors: {
      brand: 'var(--brand-color)',
      secondary: 'var(--secondary-color)',
    },
  },
})
