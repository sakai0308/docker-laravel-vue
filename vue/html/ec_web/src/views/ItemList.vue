<template>
  <el-row>
    <el-col :span="20" :offset="2">
      <h2 class="sub-title">商品一覧</h2>
      <template v-if="itemList.length">
        <el-row>
          <el-col :xs="24" :sm="8" v-for="itemDetail in itemList" :key="itemDetail.id">
            <div class="text-center">
              <img class="w-100" :src="'/static/images/' + itemDetail.image_filename">
              <p>{{ itemDetail.item_name }}</p>
              <p class="item-price">¥ {{ itemDetail.price.toLocaleString() }}</p>
              <p>
                <router-link :to="{ name: 'ItemDetail', params: { id: itemDetail.id }}">
                  <el-button type="round">詳細を見る</el-button>
                </router-link>
              </p>
            </div>
          </el-col>
        </el-row>
      </template>
      <template v-else>
        Loading...
      </template>
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
.item-price {
  font-size: 1.2em;
  font-weight: 700;
}
</style>
