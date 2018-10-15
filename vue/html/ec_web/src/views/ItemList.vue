<template>
  <div class="hello">
    <h1>商品一覧</h1>
    <ul>
      <li v-for="itemDetail in itemList" :key="itemDetail.id">
        {{itemDetail.item_name}}
      </li>
    </ul>
    <router-link to="/order">
      order
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(
      'item', ['itemList']
    )
  },
  mounted () {
    this.$store.dispatch('item/getItemList')
  }
}
</script>
