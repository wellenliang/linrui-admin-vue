import { defineConfig, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss';

export default defineConfig({
  content: {
    pipeline: {
      exclude: ['node_modules', 'dist']
    },
  },
  theme:{},
  transformers:[ transformerDirectives(), transformerVariantGroup()],
  presets:[presetUno({dark: 'class'})]
})
