console.log('log========process')
console.log(process.env)
const environment = process.env.NODE_ENV
const config = {
  MXG_URL: environment === 'development' ? '/mxgApi' : 'https://api.muxiaoguo.cn/api',
  OPEN_URL: environment === 'development' ? '/openApi' : 'https://api.apiopen.top'
}

export default config
