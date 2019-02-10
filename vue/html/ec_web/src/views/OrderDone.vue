<template>
  <el-row class="text-center">
    <el-col :xs="{span: 20, offset: 2}" :sm="{span: 12, offset: 6}">
      <h2 class="sub-title">ご注文が確定しました</h2>
      <section>
        <p>下記の注文番号をお控えください。</p>
        <p class="order-number">注文番号 :<span>{{ orderForm.id }}</span></p>
        <p>ご利用ありがとうございました。</p>
      </section>
      <section>
        <router-link :to="{ name: 'ItemList' }">
          <el-button type="round">トップページへ戻る</el-button>
        </router-link>
      </section>
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

<style scoped>
.order-number span {
  color: red;
}
</style>
