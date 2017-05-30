module.exports = {
  'extends': 'airbnb-base',
  'plugins': [
    'import',
    'vue',
    'html'
  ],
  rules: {
    'vue/jsx-uses-vars': 2,
  },
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'webpack.config.js'
      }
    }
  }
}