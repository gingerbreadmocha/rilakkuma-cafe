import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Menu from '@/components/Menu'
import AddItem from '@/components/AddItem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/addItem',
      name: 'AddItem',
      component: AddItem
    }
  ]
})
