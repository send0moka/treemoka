import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Optimasi untuk performa maksimal - menggunakan esbuild (default, lebih cepat)
    minify: 'terser',
    cssMinify: true,
    rollupOptions: {
      output: {
        // Code splitting untuk loading yang lebih cepat
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
    // Kompresi gzip untuk file yang lebih kecil
    reportCompressedSize: true,
    // Chunk size limit untuk optimasi
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
  },
  // Optimasi dev server
  server: {
    hmr: {
      overlay: false
    }
  },
  // CSS optimizations
  css: {
    devSourcemap: false
  }
})