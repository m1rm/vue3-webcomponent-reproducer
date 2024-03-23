import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('test-button')
        }
      }
    })
  ],
  build: {
    lib: {
      entry: './src/main.ce.js',
      name: 'test-button',
      fileName: 'test-button'
    }
  }
})
