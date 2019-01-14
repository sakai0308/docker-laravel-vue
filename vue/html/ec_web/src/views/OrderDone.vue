<template>
  <el-row class="order_done">
    <el-col :gutter="24">
      <el-col :span="12" :offset="6">
          <el-col>
            <h3>ご注文が確定しました</h3>
            <el-col :span="12" :offset="8">
            <p>下記の注文番号をお控えください。</p>
            <p>
              注文番号 :{{ orderForm.id }}
            </p>
            <p>ご利用ありがとうございました。</p>
              <el-col :span="12" :offset="2">
                <el-button disabled>
                <router-link class="to_top_btn" :to="{ name: 'ItemList' }">
                  トップページへ戻る
                </router-link>
                </el-button>
              </el-col>
              </el-col>
          </el-col>
      </el-col>
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
.order_done {
  vertical-align: middle;
}

h3 {
   text-align: center;
   margin: 0 0 30px;
  }
  .to_top_btn {
  color: black;
}

p {
  padding: 10px;
}

.el-col .el-button {
  margin-top: 60px;
}
</style>
