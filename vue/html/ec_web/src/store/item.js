// TODO: 商品リストの配列(Laravel使わない時は一旦これで)
const itemList = [
  { id: 1, item_name: 'Tシャツ', price: 2980, description: 'ラウンドネックのTシャツです', image_filename: 't-shirt.png' },
  { id: 2, item_name: 'Yシャツ', price: 3980, description: '長袖のYシャツです。', image_filename: 'y-shirt.png' },
  { id: 3, item_name: 'ショートパンツ', price: 4980, description: 'ショート丈のパンツです。', image_filename: 's-pants.png' },
  { id: 4, item_name: 'ロングパンツ', price: 7980, description: 'ロング丈のパンツです。', image_filename: 'l-pants.png' },
  { id: 5, item_name: 'ハット', price: 3980, description: 'フリーサイズのハットです', image_filename: 'hat.png' },
  { id: 6, item_name: 'スニーカー', price: 7980, description: 'ローカットのスニーカーです。', image_filename: 'sneakers.png' }
]
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
    },
    resetItemDetail (state) {
      state.itemDetail = {}
    }
  },
  actions: {
    getItemList ({ commit }) {
      commit('setItemList', { data: itemList })
    },
    getItemDetail ({ commit }, id) {
      commit('resetItemDetail') // 事前にアイテム詳細データを初期化する
      const row = itemList.filter(item => item.id === id)[0]
      commit('setItemDetail', { data: row })
    }
  }
}
 