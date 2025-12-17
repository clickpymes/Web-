import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: './', // Esto hace que las rutas sean relativas y funcionen siempre
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
})
