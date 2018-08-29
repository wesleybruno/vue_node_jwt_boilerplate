import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router'

import routes from './routes'
import 'font-awesome/css/font-awesome.min.css'
import locale from 'element-ui/lib/locale/lang/pt-br'

Vue.use(ElementUI, { locale })
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.path == '/login') {
//     sessionStorage.removeItem('user');
//   }
//   let user = JSON.parse(sessionStorage.getItem('user'));
//   if (!user && to.path != '/login') {
//     next({ path: '/login' })
//   } else {
//     next()
//   }
// })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

