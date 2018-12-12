<template>
  <el-row>
    <el-col :span="24">
      <el-card>
      <h1>ご注文内容の確認</h1>
      <h2>お届け先</h2>
      <el-row>
        <el-col :span="5" :offset="1">
          お名前
        </el-col>
        <el-col :span="18">
          {{ orderForm.name }}
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="5" :offset="1">
          ご住所（都道府県）
        </el-col>
        <el-col :span="18">
          {{ orderForm.prefecture }}
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="5" :offset="1">
          ご住所（市区町村）
        </el-col>
        <el-col :span="18">
          {{ orderForm.address }}
        </el-col>
      </el-row>
      <h2>ご注文内容</h2>
      <el-row>
        <el-col :span="5" :offset="1">
          商品ID
        </el-col>
        <el-col :span="18">
          {{ orderForm.itemId }}
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="5" :offset="1">
          購入個数
        </el-col>
        <el-col :span="18">
          {{ orderForm.itemNum }}
        </el-col>
      </el-row>
      <el-button type="primary" @click="executeOrder">購入を確定する</el-button>
      <el-button @click="back">戻る</el-button>
      </el-card>
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
