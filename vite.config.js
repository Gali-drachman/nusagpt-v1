import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx', // Tambahkan ini
    include: /src\/.*\.js$/, // Pastikan semua file JS di dalam src bisa menggunakan JSX
  },
  server: {
    host: '0.0.0.0', // Biarkan server bisa diakses dari luar
    port: 5173, // Gunakan port default Vite
    strictPort: true, // Pastikan hanya pakai port ini
  },
});