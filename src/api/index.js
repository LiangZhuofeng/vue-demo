import Axios from 'axios'
import $loading from '@/plugins/loading'
import { Message } from 'element-ui'

const Http = Axios.create({
  timeout: 15000
})

Http.interceptors.request.use(
  (config) => {
    $loading.show()
    return config
  },
  (error) => {
    console.log('log========beforeRequest -> error')
    console.log(error)
    return Promise.reject(error)
  }
)

Http.interceptors.response.use(
  (response) => {
    console.log('log========response -> after')
    console.log(response)
    $loading.hide()
    const { data } = response
    const { code, msg } = data

    if (code === '200' && msg === 'success') {
      return Promise.resolve(data)
    } else {
      return Promise.reject(data)
    }
  },
  (error) => {
    $loading.hide()
    if (error.message.indexOf('timeout') !== -1) {
      Message({
        showClose: true,
        type: 'error',
        message: '请求超时，请重试'
      })
      return Promise.reject('请求超时，请重试')
    }
    if (error.message.indexOf('Network Error') !== -1) {
      Message({
        showClose: true,
        type: 'error',
        message: '网络错误，请检查网络'
      })
      return Promise.reject('网络错误，请检查网络')
    }
    return Promise.reject(error)
  }
)

export default Http
