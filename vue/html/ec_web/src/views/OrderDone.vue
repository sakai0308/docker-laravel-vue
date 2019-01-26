<template>
  <el-row class="order-done">
    <el-col :span="12" :offset="6">
      <h3 class="order-done-title">ご注文が確定しました</h3>
      <p>下記の注文番号をお控えください。</p>
      <p>注文番号 :{{ orderForm.id }}</p>
      <p>ご利用ありがとうございました。</p>
      <router-link :to="{ name: 'ItemList' }">
        <el-button type="round">トップページへ戻る</el-button>
      </router-link>
    </el-col>
  </el-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('order', ['orderForm'])
  }
}
</script>
<style>
.order-done {
  text-align: center;
}
.order-done-title {
  text-align: center;
  margin: 0 0 30px;
}
.el-col .el-button {
  margin-top: 60px;
}
</style>
