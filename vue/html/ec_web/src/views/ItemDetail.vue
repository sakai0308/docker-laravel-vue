<template>
  <el-row>
    <el-col :span="24">
      <h1>{{ itemDetail.item_name }}</h1>
      <img src="@/assets/logo.png" class="image">
      <div>{{ itemDetail.price }}円</div>
      <div>{{ itemDetail.description }}</div>
      <el-col :span="18" :offset="3">
        <el-form ref="refOrderForm" :model="orderForm" :rules="rulesOrderForm" label-width="160px">
          <el-form-item label="購入個数" prop="itemNum">
            <el-input v-model="orderForm.itemNum"></el-input>
          </el-form-item>
          <el-button type="primary" @click="submitForm">購入する</el-button>
        </el-form>
      </el-col>
    </el-col>
  </el-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    id: Number
  },
  data () {
    return {
      rulesOrderForm: {
        itemNum: [
          { required: true, message: '購入個数を入力してください', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    ...mapGetters('item', ['itemDetail']),
    ...mapGetters('order', ['orderForm'])
  },
  mounted () {
    this.$store.dispatch('item/getItemDetail', this.id)
  },
  methods: {
    submitForm () {
      this.$refs['refOrderForm'].validate((valid) => {
        if (valid) {
          this.orderForm.itemId = this.id
          this.$router.push({ name: 'Order' })
        } else {
          return false
        }
      })
    }
  }
}
</script>
