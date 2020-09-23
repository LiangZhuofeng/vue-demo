import { Loading } from 'element-ui'

const $loading = {
  instance: null,
  show() {
    this.instance = Loading.service({
      text: '加载中...',
      fullscreen: true,
      background: 'rgba(0, 0, 0, .9 )'
    })
  },
  hide() {
    this.instance.close()
  }
}

export default $loading
