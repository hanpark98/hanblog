import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.hanpark.kr',        // ← 꼭 본인 도메인 주소로!
  integrations: [
    tailwind(),
    sitemap(),                           // ← 이 줄 추가
  ],
});
