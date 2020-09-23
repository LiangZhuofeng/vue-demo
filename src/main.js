import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import Auth from './directive/auth'
import Authority from '@/components/Authority/Authority'

Vue.config.productionTip = false

Vue.use(Auth)

Vue.component('authority', Authority)

new Vue({
  render: h => h(App)
}).$mount('#app')
