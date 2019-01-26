<template>
  <el-row>
    <el-col :span="20" :offset="2">
      <h1>商品一覧</h1>
      <el-col :xs="24" :sm="8" v-for="itemDetail in itemList" :key="itemDetail.id">
        <div class="item">
          <img :src="'/static/images/' + itemDetail.image_filename" class="image">
          <p>{{ itemDetail.item_name }}</p>
          <p class="price">¥ {{ itemDetail.price.toLocaleString() }}</p>
          <p>
            <router-link :to="{ name: 'ItemDetail', params: { id: itemDetail.id }}">
              <el-button type="round">詳細を見る</el-button>
            </router-link>
          </p>
        </div>
      </el-col>
    </el-col>
  </el-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('item', ['itemList'])
  },
  mounted () {
    this.$store.dispatch('item/getItemList')
  }
}
</script>

<style scoped>
.image {
  width: 100%;
}
.item {
  text-align: center;
}
.price {
  font-size: 1.2em;
  font-weight: 700;
}
</style>
