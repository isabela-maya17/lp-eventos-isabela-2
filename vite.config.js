import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Certifique-se de que esta linha existe

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // O plugin precisa ser chamado aqui dentro
  ],
})