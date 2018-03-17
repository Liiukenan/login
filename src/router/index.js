import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login.vue'
Vue.use(VueRouter)

export default new VueRouter({
  mode:'hash',
  routes: [
    {
      path: '/',
      redirect:'/login',
      component:login
    },
    {
			path:'/login',
			component:login
		},
  ]
})
