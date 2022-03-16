// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import '@/helpers/request.js'
import store from './store'
import Util from '@/helpers/util'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'


Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.use(ElementUI)
Vue.use(Util)
Vue.use(mavonEditor)


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
