<template>
  <el-row>
    <el-col :span="24">
      <h1>{{ itemDetail.item_name }}</h1>
      <img src="@/assets/logo.png" class="image">
      <div>{{itemDetail.price}}円</div>
      <div>{{itemDetail.description}}</div>
      <router-link :to="{ name: 'Order' }">
        <el-button type="text" class="button">購入する</el-button>
      </router-link>
    </el-col>
  </el-row>
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
