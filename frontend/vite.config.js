import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/posts': {
        target: 'http://localhost:3000/api', // バックエンドサーバーのURL
        changeOrigin: true, // 必要に応じてリクエストのオリジンを変更
        secure: false, // HTTPSが必要ない場合
      },
    },
  },
});

