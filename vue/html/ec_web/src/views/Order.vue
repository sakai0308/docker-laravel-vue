<template>
  <el-row :gutter="20">
    <el-col :xs="{span: 20, offset: 2}" :sm="{span: 12, offset: 6}">
      <el-form class="text-center" ref="refOrderForm" :model="orderForm" :rules="rulesOrderForm">
        <h2 class="sub-title">ご購入手続き</h2>
        <el-form-item label="お名前" prop="name">
          <el-input v-model="orderForm.name"></el-input>
        </el-form-item>
        <el-form-item label="ご住所（都道府県）" prop="prefecture">
          <el-select class="w-100" v-model="orderForm.prefecture" placeholder="都道府県を選択してください">
            <el-option
              v-for="prefecture in prefectures"
              :key="prefecture.value"
              :label="prefecture.label"
              :value="prefecture.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="ご住所 (市区町村)" prop="address">
          <el-input v-model="orderForm.address"></el-input>
        </el-form-item>
        <section class="order-buttons">
          <el-row :gutter="20">
            <el-col :xs="24" :sm="12">
              <el-button class="w-100" type="info" @click="submitForm">注文内容を確認する</el-button>
            </el-col>
            <el-col :xs="24" :sm="12">
              <el-button class="w-100" @click="back">キャンセル</el-button>
            </el-col>
          </el-row>
        </section>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      rulesOrderForm: {
        name: [
          { required: true, message: 'お名前を入力してください', trigger: 'blur' }
        ],
        prefecture: [
          { required: true, message: 'ご住所（都道府県）を選択してください', trigger: 'change' }
        ],
        address: [
          { required: true, message: 'ご住所（市区町村）を入力してください', trigger: 'blur' }
        ]
      },
      prefectures: [{
        value: '北海道',
        label: '北海道'
      }, {
        value: '東京都',
        label: '東京都'
      }, {
        value: '愛知県',
        label: '愛知県'
      }, {
        value: '大阪府',
        label: '大阪府'
      }, {
        value: '福岡県',
        label: '福岡県'
      }, {
        value: '沖縄県',
        label: '沖縄県'
      }]
    }
  },
  computed: {
    ...mapGetters('order', ['orderForm'])
  },
  methods: {
    submitForm () {
      this.$refs['refOrderForm'].validate((valid) => {
        if (valid) {
          this.$router.push({ name: 'OrderConfirm' })
        } else {
          return false
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
.order-buttons .el-col {
  padding-bottom: 20px;
}
</style>
