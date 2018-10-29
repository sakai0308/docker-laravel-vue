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
      name: 'ItemList',
      component: ItemList
    },
    {
      path: '/item/:id',
      name: 'ItemDetail',
      component: ItemDetail,
      props: route => ({
        id: Number(route.params.id)
      })
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/order/confirm',
      name: 'OrderConfirm',
      component: OrderConfirm
    },
    {
      path: '/order/done',
      name: 'OrderDone',
      component: OrderDone
    }
  ]
})
