const AUTH_LIST = ['auth']

function checkAuth(auths) {
  return AUTH_LIST.some(item => auths.includes(item))
}

function install(Vue, options = {}) {
  Vue.directive('auth', {
    inserted(el, binding) {
      if (!checkAuth(binding.value)) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    }
  })
}

export default { install }
