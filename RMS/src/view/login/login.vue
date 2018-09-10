<style lang="less">
@import "./login.less";
</style>

<template>
  <div class="login">
    <!-- <div class="login-top">
      <span>尊敬的用户，欢迎来到商家管理后台，为保证您的账号安全，请更改登录名、密码！</span>
      <span>我们希望赋能每位商家，让商家实现自主化经营管理，摆脱平台束缚。本系统将给你带来智能化全新互联网+实体经营管理体验。</span>
    </div> -->
    <div class="login_title">
      <img src="../../assets/images/logo-long.png"/>
    </div>
    <div class="login-con">
      <Row type="flex" align="middle" class="code-row-bg">
        <Col :xs="2" :sm="4" :md="6" :lg="8">Col</Col>
        <Col :xs="2" :sm="4" :md="6" :lg="8">Col</Col>
        <Col :xs="20" :sm="16" :md="12" :lg="8">
          <div class="form-con">
            <!-- 登录 -->
            <div class="table" v-if="seen">
              <div class="table_title">账号登录</div>
              <login-form @on-success-valid="handleSubmit" seen></login-form>
              <div class="remember_psw">
                <p class="login-tip" @click="resetOrLogin">忘记密码</p>
                <p class="login-tip">免费注册</p>
              </div>
            </div>
            <!-- 找回密码 -->
            <div class="table" v-else>
              <div class="table_title">找回密码</div>
              <login-form @on-success-valid="handleReset"></login-form>
              <div class="remember_psw">
                <p class="login-tip" @click="resetOrLogin">返回登录</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      
    </div>
  </div>
</template>

<script>
import LoginForm from '_c/login-form'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      seen:true
    }
  },
  components: {
    LoginForm
  },
  methods: {
    ...mapActions(['handleLogin', 'getUserInfo']),
    handleSubmit ({ userName, password,verifyCode,remember }) {
      this.handleLogin({ userName, password,verifyCode,remember }).then(res => {
        this.getUserInfo().then(res => {
          this.$router.push({
            name: 'home'
          })
        })
      })
    },
    handleReset (){

    },
    resetOrLogin (){
      this.seen = !this.seen;
    }
  }
}
</script>

<style>
</style>
