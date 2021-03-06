import axios from 'axios'

export default {
  namespaced: true,
  state: {
    orderForm: {
      id: '',
      itemId: '',
      itemNum: '',
      name: '',
      prefecture: '',
      address: ''
    }
  },
  getters: {
    orderForm: state => state.orderForm
  },
  actions: {
    postOrder ({ state, commit }) {
      return axios.post(`${process.env.API_ENDPOINT}/api/orders/`,
        {
          itemId: state.orderForm.itemId,
          itemNum: state.orderForm.itemNum,
          name: state.orderForm.name,
          prefecture: state.orderForm.prefecture,
          address: state.orderForm.address
        })
    }
  }
}
