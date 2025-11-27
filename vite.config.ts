import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'fs'
import { join } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-404',
      closeBundle() {
        // Copy index.html to 404.html for GitHub Pages SPA routing
        copyFileSync(
          join(__dirname, 'dist', 'index.html'),
          join(__dirname, 'dist', '404.html')
        )
      },
    },
  ],
  base: '/admin-v3/',
})
