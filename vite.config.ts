import path from 'path'
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
// import UnocssBgImg from 'vite-plugin-unocss-bgimg'

// https://vitejs.dev/config/
export default defineConfig({
  root: process.cwd(),
  publicDir: 'static',
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    uni(),
    // UnocssBgImg({
    //   src: './img', // The path where the background image is stored
    //   dest: 'assets', // The location where the background image is stored after packaging.(ex: ./dist/assets/xxx.png  => dest: 'assets')
    // }),
    // https://github.com/antfu/unocss

    // see unocss.config.ts for config
    UnoCSS(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'pinia',
        'uni-app',
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/composables',
        'src/stores',
      ],
      vueTemplate: true,
    }),
  ],
})
