import Vue from 'vue'
import Vuex from 'vuex'
import item from '@/store/item.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    item
  }
})
