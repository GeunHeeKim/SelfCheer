import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Delete from '@/components/Delete'
import Add from '@/components/Add'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/delete',
      name: 'Delete',
      component: Delete
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    }
  ]
})
