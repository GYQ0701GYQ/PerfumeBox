<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="用户名" prop="name"><el-input v-model="ruleForm.name"></el-input></el-form-item>
    <el-form-item label="密码" prop="pass"><el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input></el-form-item>
    <el-form-item label="确认密码" prop="checkPass"><el-input type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input></el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
      <el-button @click="goback">返回</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data () {
    var validatePass = (rule, value, callback) => {
      const reg =/^[_a-zA-Z0-9]+$/;
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (reg.test(value)){
          callback();
        } else {
          callback(new Error('密码仅由英文字母，数字以及下划线组成'));
        }
      }
    }

    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }

    return {
      activeName: 'second',
      ruleForm: {
        name: '',
        pass: '',
        checkPass: ''
      },
      rules: {
        name: [{ required: true, message: '请输入您的名称(2-10字符)', trigger: 'blur' }, { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }],
        pass: [{ required: true, message: '请输入您的密码(2-18位，仅由字母数字下划线组成)', validator: validatePass, trigger: 'blur' } ,{ min: 2, max: 18, message: '长度在 2 到 18 位', trigger: 'blur' }],
        checkPass: [{ required: true, validator: validatePass2, trigger: 'blur' }]
      }
    }
  },

  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$api.get('/url/api/user_register', {
            user_name: this.ruleForm.name,
            user_password:this.ruleForm.pass
          }, response => {
            var ses = window.sessionStorage
            if (response.status >= 200 && response.status < 300 && response.data['error_num']===0) {
              // 把标记放在sessionStorage中
              ses.setItem('data', '1');
              ses.setItem('user',this.ruleForm.name)
              // console.log('ses',ses)
              this.$message.success(response.data['msg'])
              this.$router.go(-1)
            } else if(response.data['error_num']===2){
              this.$message.error(response.data['msg'])
            }else {
              this.$message.error('用户名含有特殊字符或服务器暂无响应，请重试')
              console.log(response);//请求失败，response为失败信息
            }
          });
        } else {
          this.$message.error('输入不规范，请重试')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    // 返回上一页
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>
