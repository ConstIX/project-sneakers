import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      md1: { max: '1240px' },
      md2: { max: '992.98px' },
      md3: { max: '767.98px' },
      md4: { max: '530px' }
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
