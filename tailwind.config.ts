import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      md1: { max: '1200px' },
      md2: { max: '992.98px' },
      md3: { max: '767.98px' },
      md4: { max: '479.98px' }
    },
    container: {
      center: true,
      padding: '10px',
      screens: {
        md1: '970px',
        md2: '750px',
        md3: '100%',
        md4: '100%'
      }
    },
    extend: {}
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.btn': {
          display: 'inline-block',
          padding: '10px 20px',
          fontSize: '14px',
          borderRadius: '10px',
          transition: 'all .3s ease 0s'
        }
      })
    })
  ]
} satisfies Config
