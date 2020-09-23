import Http from './index'
import config from '@/config/index'

// API接口列表
// key: 输出接口名称，value: 源接口名称
const mxgAPIList = [
  { key: 'getTodayInHistory', value: 'lishijr' },
  { key: 'getQQInfo', value: 'QqInfo' }
]

const openAPIList = [
  { key: 'getJoke', value: 'getJoke' }, // 获取段子列表
  { key: 'getJokeDetail', value: 'getSingleJoke' } // 获取段子详情
]

const MXG_API = setAPI(mxgAPIList, config.MXG_URL)
const OPEN_API = setAPI(openAPIList, config.OPEN_URL)

/**
 * @desc 生成 API 列表对象
 * @date 2020-9-23
 * @param {source} API 源列表
 * @param {url} API url
 */
function setAPI(source, url) {
  const storage = {}
  source.forEach((item) => {
    storage[item.key] = (data, method = 'get') => {
      const param = {
        url: `${url}/${item.value}`,
        method,
        params: data
      }
      if (method.toUpperCase() === 'POST') {
        param.data = data
        delete param.params
      }
      return Http(param)
    }
  })
  return storage
}

export { MXG_API, OPEN_API }
