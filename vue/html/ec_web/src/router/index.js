import Vue from 'vue'
import Router from 'vue-router'
import ItemList from '@/views/ItemList'
import ItemDetail from '@/views/ItemDetail'
import Order from '@/views/Order'
import OrderConfirm from '@/views/OrderConfirm'
import OrderDone from '@/views/OrderDone'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: ItemList
    },
    {
      path: '/item/:id',
      component: ItemDetail,
      props: route => ({
        id: Number(route.params.id)
      })
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/order/confirm',
      component: OrderConfirm
    },
    {
      path: '/order/done',
      component: OrderDone
    }
  ]
})
