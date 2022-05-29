const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@container': path.join(path.resolve(__dirname, './src/container')),
      '@component': path.join(path.resolve(__dirname, './src/components')),
    },
  }
}
