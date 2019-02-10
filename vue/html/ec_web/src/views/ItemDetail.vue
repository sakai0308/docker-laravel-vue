<template>
  <el-row>
    <el-col :span="20" :offset="2">
      <template v-if="Object.keys(itemDetail).length">
        <el-col :xs="24" :sm="12">
          <img class="w-100" :src="'/static/images/' + itemDetail.image_filename">
        </el-col>
        <el-col :xs="24" :sm="12">
          <h3>{{ itemDetail.item_name }}</h3>
          <section>
            <h4>商品説明</h4>
            <p>{{ itemDetail.description }}</p>
            <p class="item-price">¥ {{ itemDetail.price.toLocaleString() }}</p>
          </section>
          <el-form class="text-center" ref="refOrderForm" :model="orderForm" :rules="rulesOrderForm">
            <el-form-item label="数量" prop="itemNum">
              <el-input v-model="orderForm.itemNum"></el-input>
            </el-form-item>
            <el-button type="round" @click="submitForm" icon="el-icon-goods">購入する</el-button>
          </el-form>
        </el-col>
      </template>
      <template v-else>
        Loading...
      </template>
    </el-col>
  </el-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    id: Number,
    required: true
  },
  data () {
    return {
      rulesOrderForm: {
        itemNum: [
          { required: true, message: '数量を入力してください', trigger: 'blur' }
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
          this.orderForm.itemName = this.itemDetail.item_name
          this.$router.push({ name: 'Order' })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
.item-price {
  font-size: 1.2em;
  font-weight: 700;
}
</style>
