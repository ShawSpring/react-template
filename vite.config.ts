import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
// import ViteSvgSpriteWrapper from 'vite-svg-sprite-wrapper';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // ViteSvgSpriteWrapper({
    //   icons: 'src/assets/icons/*.svg',
    //   outputDir: 'public/assets',
    // }),
  ],

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
