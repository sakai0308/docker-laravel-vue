<template>
  <el-row :gutter="20">
    <el-col :xs="{span: 20, offset: 2}" :sm="{span: 12, offset: 6}">
      <h2 class="sub-title">ご注文内容の確認</h2>
      <section>
        <h3>お届け先</h3>
        <el-row>
          <el-col :span="10">
            お名前
          </el-col>
          <el-col :span="14">
            {{ orderForm.name }}
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            ご住所<br>（都道府県）
          </el-col>
          <el-col :span="14">
            {{ orderForm.prefecture }}
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            ご住所<br>（市区町村）
          </el-col>
          <el-col :span="14">
            {{ orderForm.address }}
          </el-col>
        </el-row>
      </section>
      <section>
        <h3>ご注文内容</h3>
        <el-row>
          <el-col :span="10">
            商品名
          </el-col>
          <el-col :span="14">
            {{ orderForm.itemName }}
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            数量
          </el-col>
          <el-col :span="14">
            {{ orderForm.itemNum }}
          </el-col>
        </el-row>
      </section>
      <section class="order-confirm-buttons">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-button class="w-100" type="info" @click="executeOrder">購入を確定する</el-button>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-button class="w-100" @click="back">戻る</el-button>
          </el-col>
        </el-row>
      </section>
    </el-col>
  </el-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('order', ['orderForm'])
  },
  methods: {
    executeOrder () {
      this.$store.dispatch('order/postOrder')
        .then(response => {
          if (response.status === 201) {
            this.orderForm.id = response.data.id
            this.$router.push({ name: 'OrderDone' })
          }
        })
    },
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.order-confirm-buttons .el-col {
  padding-bottom: 20px;
}
</style>
