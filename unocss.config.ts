import {
  defineConfig,
  presetAttributify,
  presetIcons,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import {
  presetApplet,
  presetRemToRpx,
  transformerApplet,
  transformerAttributify,
} from 'unocss-applet'

const isH5 = process.env.UNI_PLATFORM === 'h5'

const courseColors = ['rose', 'pink', 'fuchsia', 'purple', 'violet', 'indigo', 'blue', 'cyan', 'teal', 'emerald', 'green', 'lime', 'yellow', 'amber', 'orange', 'red']

// const imgTypeReg = /(http|https):\/\/([\w.]+\/?)\S*/

export default defineConfig({
  shortcuts: {
    'bg-base': 'bg-[url(https://p0.meituan.net/csc/62c0341f39e1f4b62bcf6346bed54b02534135.png)] bg-cover bg-center dark:bg-dark',
    'bg-co': 'bg-gradient-to-r from-indigo-500 hover:from-violet-400 hover:to-teal-400 dark:bg-dark',
    'bg-base-second': 'bg-white dark:bg-dark-50',
    'color-base': 'text-black dark:text-white/60',
    'color-base-second': 'text-purple-500 dark:text-gray-500/60',
    'border-base': 'border border-gray-50 dark:border-gray/50',
    'bg-primary': 'bg-light-blue-500 dark:bg-light-blue-600/80',
  },
  // rules: [
  //   ...[/^bgi-\[([\w\W]+)\]$/, ([, d]) => {
  //     // '/assets' is the location of dest in your plugin configuration(dest: 'assets').
  //     const path = `${imgTypeReg.test(d) ? '' : '/assets/'}`
  //     return ({ 'background-image': `url('${path}${d}')` })
  //   }],
  // ],
  presets: [
    presetIcons({
      scale: 1.2,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    /**
     * you can add `presetAttributify()` here to enable unocss attributify mode prompt
     * although preset is not working for applet, but will generate useless css
     */
    presetApplet({ enable: !isH5 }),
    presetAttributify(),
    presetRemToRpx({ enable: !isH5 }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    // Don't change the following order
    transformerAttributify(),
    transformerApplet(),
  ],
  rules: [
    [
      'p-safe',
      {
        padding:
          'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)',
      },
    ],
    ['pt-safe', { 'padding-top': 'env(safe-area-inset-top)' }],
    ['pb-safe', { 'padding-bottom': 'env(safe-area-inset-bottom)' }],
  ],
  safelist: [
    ...courseColors.map(c => `bg-${c}`),
    ...courseColors.map(c => `bg-${c}-3`),
    ...courseColors.map(c => `text-${c}-5`),
  ],
})
