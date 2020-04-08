<template >
  <div class="all" >
    <div id="banner_line1">
      <div id="xinshougroup">
        <img class="sameline" src="../assets/xinshou.png" alt="新手提示" height="30px" @click="goto_NewMemberGuide">
        <table class="sameline" @click="goto_NewMemberGuide"><b>新手入门</b></table>
      </div>
      <img id="perfumebox_logo" src="../assets/perfumebox-logo-18.png" alt="logo图片" width="115px" >
      <div id="logingroup">
        <img class="sameline" src="../assets/home-8a8a8a.png" alt="返回主页" height="25px" @click="goto_Home">
        <table class="sameline" @click="goto_Home"><b>返回主页</b></table>
      </div>
    </div>
  <p class="login">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="登录" name="first">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="名称" prop="name"><el-input v-model="ruleForm.name"></el-input></el-form-item>
          <el-form-item label="密码" prop="pass"><el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input></el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
            <el-button @click="goback">返回</el-button>
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
          this.$api.get('/url/api/user_login', {
            user_name: this.ruleForm.name,
            user_password:this.ruleForm.pass
          }, response => {
            var ses = window.sessionStorage
            console.log('ses',ses)
            if (response.status >= 200 && response.status < 300 && response.data['error_num']===0) {
              // 把token放在sessionStorage中
              ses.setItem('data', '1');
              console.log('ses',ses)
              this.$router.push({path: '/Home'})
              // this.$parent.$data.userTitle = res[index].usertitle;
              console.log('调用搜索成功');//请求成功，response为成功信息参数
            } else if(response.data['error_num']===2){
              this.$message.error('用户名或密码错误，请重试')
            }else {
              console.log(response);//请求失败，response为失败信息
            }
          });
        } else {
          console.log('error submit!!')
          return false
        }
      })

    },
    // 返回上一页
    goback () {
      this.$router.go(-1)
    },
    goto_NewMemberGuide () {
      const guide = this.$router.resolve({path: '/NewMemberGuide'})
      window.open(guide.href, '_blank')
    },
    goto_Home () {
      this.$router.push({path: '/Home'})
    },
  },
  components: {
    Register
  }
}
</script>

<style lang="scss" scoped>
.all{
  background-size: 100% 100%;
  height: 100%;
  position: fixed;
  width: 99%;
  background-image: url("../assets/login6.png");
  opacity: 0.85;//透明度为85%
  filter: alpha(opacity=85);
}
.login {
  height: 45%;
  width: 500px;
  margin-left: 300px;
  margin-top: 10px;
  padding: 20px;
  /*border: solid lightgrey 2px;*/
  /*border-radius: 5px;*/
  /*mso-border-shadow: yes;*/
}
.el-tabsitem {
  text-align: center;
  width: 60px;
}

#banner_line1{
  height: 100px;
  background: center;
  background-size: 100% 100%;
  text-align: center;
  border-bottom: 1.5px solid lightgrey;
  /*background: linear-gradient(180deg, #DFF7FD, white);*/
}
#xinshougroup{
  padding:30px 15px;
  width: 120px;
  font-family: 'Microsoft YaHei';
  font-size: 22px;
  float: left;
  color: #707070;
  cursor: pointer;
}
.sameline{
  display: inline;
  vertical-align: middle;
  font-size: 14px;
  font-weight: 200;
  color: dimgrey;
}
#logingroup{
  padding:30px 15px;
  width: 120px;
  font-family: 'Microsoft YaHei';
  font-size: 22px;
  float: right;
  color: #707070;
  cursor: pointer;
}
#perfumebox_logo{
  padding:0px ;
  display: inline;
}
</style>
