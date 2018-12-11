<template>
  <div class="hello">
    <h1>商品一覧</h1>
    <el-row>
      <el-col :span="8" v-for="itemDetail in itemList" :key="itemDetail.id">
        <el-card>
          <img :src="'/static/images/' + itemDetail.image_filename" class="image">
          <div>
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
  }
}
</script>

<style>
 .hello {
   min-height: 100vh;
   padding-top: 100px; 
 }

.image {
  width: 100px;
  height: 100px;
  margin: 0%;
}



.el-card {
  width: 40%;
  height: 250px;
  margin: 0 auto;
}

.el-card:hover {
  width: 40%;
  height: 250px;
  margin: 0 auto;
}

.el-button {  
  border: solid 1px black;
  padding: 5px;
  color: black;
  font-size: 12px;
}

.el-button:hover {  
  border: solid 1px black;
  padding: 5px;
  color: black;
  font-size: 12px;
}
 
</style>

