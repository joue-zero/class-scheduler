import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
      react(),
      tailwindcss()
  ],
    // base: '/class-scheduler/',
    // build: {
    //     outDir: './dist'
    // }
    base: '/class-scheduler',
})
