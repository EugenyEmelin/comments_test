import Vue            from 'vue'
import App            from './App.vue'
import router         from './router'
import store          from './store/index'

import 'normalize.css/normalize.css'
import './assets/styles/main.less'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})