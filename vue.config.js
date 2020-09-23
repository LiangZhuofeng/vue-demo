const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    port: '8080',
    // open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/mxgApi': {
        target: 'https://api.muxiaoguo.cn/api',
        changeOrigin: true,
        pathRewrite: {
          '^/mxgApi': ''
        },
        onProxyReq(proxyReq, req, res) {
          console.log('log========res')
          console.log(res)
        }
      },
      '/openApi': {
        target: 'https://api.apiopen.top',
        changeOrigin: true,
        pathRewrite: {
          '^/openApi': ''
        }
      }
    }
  },
  configureWebpack: (config) => {
    const newConfig = {
      resolve: {
        alias: {
          '@': resolve('src')
        }
      }
    }
    return newConfig
  }
}
