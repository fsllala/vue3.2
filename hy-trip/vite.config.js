import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';

import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import pxtovw from 'postcss-px-to-viewport'
const loder_pxtovw = pxtovw({
  unitToConvert: 'px', // 需要转换的单位，默认为"px"
  viewportWidth: 414, // 视窗的宽度，对应设计稿的宽度 (一般来说是375,我开发的时候用的xr 414的......)
  viewportUnit: 'vw', // 指定需要转
  fontViewportUnit: 'vw', // 字体使用的视口单位
  unitPrecision: 13 // 指定`px`转换为视窗单位值的小数后 x位数
})
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  Components({
    resolvers: [VantResolver()],
  }),],
  css: {
    postcss: {
      plugins: [loder_pxtovw]
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
