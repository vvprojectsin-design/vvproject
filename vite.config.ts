import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: [
        { find: '@', replacement: path.resolve(__dirname, './src') },
        { find: /^@\/lib\/(.*)$/, replacement: path.resolve(__dirname, './lib/$1') },
        { find: /^@\/lib$/, replacement: path.resolve(__dirname, './lib') },
        // Force Vite to use CJS builds that actually exist in this install.
        { find: /^motion-dom$/, replacement: path.resolve(__dirname, './node_modules/motion-dom/dist/cjs/index.js') },
        { find: /^motion-utils$/, replacement: path.resolve(__dirname, './node_modules/motion-utils/dist/cjs/index.js') },
      ],
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
