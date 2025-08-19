import { defineConfig, presetUno, presetIcons, presetAttributify } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetAttributify(),
  ],
theme: {
  colors: {
    brand: 'rgb(var(--brand-color) / <alpha-value>)',
    secondary: 'rgb(var(--secondary-color) / <alpha-value>)',
  },
}

})
