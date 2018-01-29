import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Input from '@/components/InputTest'
import oComp from '@/components/oComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/input',
      name: 'input',
      component: Input
    },
    {
      path: '/',
      name: 'oComp',
      component: oComp
    }
  ]
})
