<template >
  <div class="all" >
  <p class="login">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="登录" name="first">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="名称" prop="name"><el-input v-model="ruleForm.name"></el-input></el-form-item>
          <el-form-item label="密码" prop="pass"><el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input></el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
            <el-button @click="goback">返回主页</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="注册" name="second">
        <Register></Register>
      </el-tab-pane>
    </el-tabs>
  </p>
  </div>
</template>

<script>
import Register from './Register.vue'

export default {
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }

    return {
      activeName: 'first',
      ruleForm: {
        name: '',
        pass: '',
        checkPass: ''
      },
      rules: {
        name: [{ required: true, message: '请输入您的名称', trigger: 'blur' }, { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }],
        pass: [{ required: true, validator: validatePass, trigger: 'blur' }]
      },
      backgroundDiv: {
        backgroundImage: 'url(' + require('../assets/demo1.jpg') + ')'
      }
    }
  },

  methods: {
    // 选项卡切换
    handleClick (tab, event) {},
    // 重置表单
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    // 提交表单
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message({
            type: 'success',
            message: '登录成功'
          })
          this.$router.push('home')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 返回上一页
    goback () {
      this.$router.go(-1)
    }
  },
  components: {
    Register
  }
}
</script>

<style lang="scss">
.all{
  background-size: 100% 100%;
  height: 100%;
  position: fixed;
  width: 99%;
  background-image: url("../assets/background2.png");
  opacity: 0.85;//透明度为85%
  filter: alpha(opacity=85);
}
.login {
  height: 100%;
  width: 500px;
  margin: 0px auto;
  padding-top: 200px;
}
.el-tabsitem {
  text-align: center;
  width: 60px;
}
</style>
