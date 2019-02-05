import axios from 'axios'

/*
// 商品リストの配列
const database = [
  { id: 1, name: '商品A', price: 100, content: '商品A詳細' },
  { id: 2, name: '商品B', price: 200, content: '商品B詳細' },
  { id: 3, name: '商品C', price: 300, content: '商品C詳細' }
]
*/

export default {
  namespaced: true,
  state: {
    itemList: [],
    itemDetail: {}
  },
  getters: {
    itemList: state => state.itemList,
    itemDetail: state => state.itemDetail
  },
  mutations: {
    setItemList (state, { data }) {
      state.itemList = data
    },
    setItemDetail (state, { data }) {
      state.itemDetail = data
    }
  },
  actions: {
    getItemList ({ commit }) {
      axios.get('http://192.168.99.100:8000/api/items/')
        .then(response => {
          if (response.status === 200) {
            commit('setItemList', response)
          }
        })
    },
    getItemDetail ({ commit }, id) {
      axios.get(`http://192.168.99.100:8000/api/items/${id}`)
        .then(response => {
          if (response.status === 200) {
            commit('setItemDetail', response)
          }
        })
    }
  }
}
