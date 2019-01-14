<template>
  <el-row>
    <el-col :span="20" :offset="2">
      <el-col :xs="24" :sm="12">
        <img :src="'/static/images/' + itemDetail.image_filename" class="image">
      </el-col>
      <el-col :xs="24" :sm="12">
        <el-card>
          <h3 class="imtem_name">{{ itemDetail.item_name }}</h3>
          <div class="description">
            <h4 class="description-label">商品説明</h4>
            <p>{{ itemDetail.description }}</p>
          </div>
          <p class="price">¥ {{ itemDetail.price.toLocaleString() }}</p>
          <el-form ref="refOrderForm" :model="orderForm" :rules="rulesOrderForm">
            <el-form-item label="数量" prop="itemNum">
              <el-input v-model="orderForm.itemNum"></el-input>
            </el-form-item>
            <el-button type="round" @click="submitForm" icon="el-icon-goods">購入する</el-button>
          </el-form>
        </el-card>
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
.image {
  width: 100%;
}

.price {
  font-size: 1.4em;
  font-weight: 700;
}

.description-label {
  font-size: 1.2em;
  font-weight: 700;
}

.el-form {
  text-align: center;
}
</style>
