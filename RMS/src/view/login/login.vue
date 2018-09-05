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
      <div class="form-con">
        <div class="table" v-if="seen">
          <div class="table_title">账号登录</div>
          <login-form @on-success-valid="handleSubmit"></login-form>
          <div class="remember_psw">
              <p class="login-tip">忘记密码</p>
              <p class="login-tip">免费注册</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '_c/login-form'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      seen: true,
      show: false
    }
  },
  components: {
    LoginForm
  },
  methods: {
    ...mapActions(['handleLogin', 'getUserInfo']),
    handleSubmit ({ userName, password }) {
      this.handleLogin({ userName, password }).then(res => {
        this.getUserInfo().then(res => {
          this.$router.push({
            name: 'home'
          })
        })
      })
    },
    showCodeImg () {
      this.seen = !this.seen
    }
  }
}
</script>

<style>
</style>
