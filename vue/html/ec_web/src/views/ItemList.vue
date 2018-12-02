<template>
  <div class="hello">
    <h1>商品一覧</h1>
    <el-row>
      <el-col :span="8" v-for="itemDetail in itemList" :key="itemDetail.id">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="'../assets/images/' + image_filename" class="image">
          <div style="padding: 14px;">
            <div>{{itemDetail.item_name}}</div>
            <div>{{itemDetail.price}}円</div>
            <div class="bottom clearfix">
              <router-link :to="{ name: 'ItemDetail', params: { id: itemDetail.id }}">
                <el-button type="text" class="button">詳細を見る</el-button>
              </router-link>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('item', ['itemList'])
  },
  mounted () {
    this.$store.dispatch('item/getItemList')
  },
      data () {
        return {
            image_filename: require(itemList.itemDetail.image_filename) 
        }
    }
}
</script>

<style>
 .hello {
   min-height: 100vh;
   padding-top: 100px; 
 }
</style>

