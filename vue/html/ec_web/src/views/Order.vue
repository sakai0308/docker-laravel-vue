<template>
  <el-row>
    <el-col :gutter="20">
        <el-col :span="12" :offset="6">
          <el-form ref="refOrderForm" :model="orderForm" :rules="rulesOrderForm" label-width="160px">
            <h3>ご購入手続き</h3>
            <el-form-item label="お名前" prop="name">
              <el-input v-model="orderForm.name"></el-input>
            </el-form-item>
            <el-form-item label="ご住所（都道府県）" prop="prefecture">
              <el-select v-model="orderForm.prefecture" placeholder="都道府県を選択してください">
                <el-option label="Zone one" value="shanghai"></el-option>
                <el-option label="Zone two" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="ご住所（市区町村）" prop="address">
              <el-input v-model="orderForm.address"></el-input>
            </el-form-item>
            <el-button type="info" @click="submitForm">購入手続きへ</el-button>
            <el-button @click="back">キャンセル</el-button>
          </el-form>
        </el-col>
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
      }
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
<style>
 h3 {
  text-align: center;
 }
</style>
