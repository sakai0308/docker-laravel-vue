<template>
  <el-row>
    <el-col :gutter="24">
      <el-col :span="12" :offset="6">
        <el-col>
          <h3>ご注文内容の確認</h3>
          <h4>お届け先</h4>
          <el-row>
            <el-col :span="7" :offset="1">
              お名前
            </el-col>
            <el-col :span="14" :offset="2">
              {{ orderForm.name }}
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7" :offset="1">
              ご住所（都道府県）
            </el-col>
            <el-col :span="14" :offset="2">
              {{ orderForm.prefecture }}
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7" :offset="1">
              ご住所（市区町村）
            </el-col>
            <el-col :span="14" :offset="2">
              {{ orderForm.address }}
            </el-col>
          </el-row>
        </el-col>

        <el-col>
          <h4>ご注文内容</h4>
          <el-row>
            <el-col :span="7" :offset="1">
             商品名
            </el-col>
            <el-col :span="14" :offset="2">
              {{ orderForm.item_name}}
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7" :offset="1">
              数量
            </el-col>
            <el-col :span="14" :offset="2">
              {{ orderForm.itemNum }}
            </el-col>
          </el-row>
        </el-col>
        <el-button type="info" @click="executeOrder">購入を確定する</el-button>
        <el-button @click="back">戻る</el-button>
      </el-col>
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
<style>
 h3 {
   text-align: center;
   margin: 0 0 30px;
  }

  h4 {
    padding: 10px;
  }

  .el-button {
    margin-top: 22px;
  }
</style>
