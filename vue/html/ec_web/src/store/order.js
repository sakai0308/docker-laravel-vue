// import axios from 'axios'

export default {
  namespaced: true,
  state: {
    orderForm: {
      name: '',
      prefecture: '',
      address: ''
    }
  },
  getters: {
    orderForm: state => state.orderForm
  // },
  // mutations: {
  //   setItemList (state, { data }) {
  //     state.itemList = data
  //   },
  //   setItemDetail (state, { data }) {
  //     state.itemDetail = data
  //   }
  // },
  // actions: {
  //   getItemList ({ commit }) {
  //     axios.get('http://localhost:8000/api/items/')
  //       .then(response => {
  //         if (response.status === 200) {
  //           commit('setItemList', response)
  //         }
  //       })
  //   },
  //   getItemDetail ({ commit }, id) {
  //     axios.get(`http://localhost:8000/api/items/${id}`)
  //       .then(response => {
  //         if (response.status === 200) {
  //           commit('setItemDetail', response)
  //         }
  //       })
  //   }
  }
}
