<template>
  <el-row type="flex" justify="end">
    <el-col :span="12">
      <img :src="'/static/images/' + itemDetail.image_filename" class="image">
    </el-col>
    <el-col :span="12">
      <el-card>
        <h1 class="imtem_name">{{ itemDetail.item_name }}</h1>
        <p class="price">{{ itemDetail.price }}円</p>
        <p class="description">{{ itemDetail.description }}</p>
        <el-form ref="refOrderForm" :model="orderForm" :rules="rulesOrderForm" label-width="160px">
          <el-form-item label="購入個数" prop="itemNum">
            <el-input v-model="orderForm.itemNum"></el-input>
          </el-form-item>
          <el-button type="round" @click="submitForm" icon="el-icon-goods">購入する</el-button>
        </el-form>
      </el-card>
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

<style>
.el-row {
  min-height: 95vh;
}

.el-col {
  padding: 10%;
  text-align: center;
}

.image {
  width: 500px;
  height: 500px;
}
</style>
