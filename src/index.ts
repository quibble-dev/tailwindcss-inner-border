import plugin from 'tailwindcss/plugin';

const innerBorderPlugin = plugin(function({ matchUtilities, theme }) {
  matchUtilities({
    'inner-border': (value) => ({
      outline: `${value} solid currentColor`,
      'outline-offset': `-${value}`
    })
  }, { values: theme('borderWidth') })

  matchUtilities({
    'inner-border': (color) => {
      if (typeof color === 'function') {
        return {
          'outline-color': color({ opacityValue: 1 })
        }
      }
      return {
        'outline-color': color
      }
    }
  }, { values: theme('colors'), type: 'color' })
})

export default innerBorderPlugin;

