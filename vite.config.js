import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/fsd-project-sem-2/', // <-- GitHub turns spaces into hyphens here
})