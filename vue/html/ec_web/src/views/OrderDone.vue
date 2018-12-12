<template>
  <el-row>
    <el-col :span="24">
      <el-card>
      <h1>ご注文完了</h1>
      <div>
        ご注文番号は {{ orderForm.id }} です。ご利用ありがとうございました。
      </div>
      <router-link :to="{ name: 'ItemList' }">
        商品一覧へ
      </router-link>
      </el-card>
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
