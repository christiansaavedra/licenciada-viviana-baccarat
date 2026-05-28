import { defineConfig } from 'vite'
import vike from 'vike/plugin'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vike()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'react',
  },
})
