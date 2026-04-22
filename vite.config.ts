import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'cleanup-copy-files',
      apply: 'build',
      enforce: 'pre',
      async buildStart() {
        const publicDir = path.resolve(__dirname, 'public');
        const files = fs.readdirSync(publicDir);
        files.forEach(file => {
          if (file.includes('copy')) {
            try {
              fs.unlinkSync(path.join(publicDir, file));
            } catch (e) {
              // ignore
            }
          }
        });
      }
    }
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
