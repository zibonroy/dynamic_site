import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base:'/dynamic_web/', // this allows the app to be deployed in a subdirectory
  plugins: [react(),tailwindcss()],
})
