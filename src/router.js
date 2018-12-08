import Vue from 'vue'
import Router from 'vue-router'
import Library from './components/Library.vue'
import About from './components/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'library',
      component: Library
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})