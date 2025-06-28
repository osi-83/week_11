import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/week_11/',
  resolve: {
    alias: {
      "@": "/src", // Opcional: atalho para importar mais fácil
    },
  },
});