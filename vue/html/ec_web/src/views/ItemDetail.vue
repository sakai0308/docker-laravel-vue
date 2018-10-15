<template>
  <div class="hello">
    <h1>商品詳細</h1>
    <ul>
      <li>{{ itemDetail.item_name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    id: Number
  },
  computed: {
    ...mapGetters(
      'item', ['itemDetail']
    )
  },
  mounted () {
    this.$store.dispatch('item/getItemDetail', this.id)
  }
}
</script>
