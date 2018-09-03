<style lang="less">
  @import './login.less';
</style>

<template>
  <div class="login">
    <!-- <div class="login-top">
      <span>尊敬的用户，欢迎来到商家管理后台，为保证您的账号安全，请更改登录名、密码！</span>
      <span>我们希望赋能每位商家，让商家实现自主化经营管理，摆脱平台束缚。本系统将给你带来智能化全新互联网+实体经营管理体验。</span>
    </div> -->
    <div class="login-con">
      <Card icon="log-in" title="账号登录" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
          <div class="remember_psw">
              <p class="login-tip">记住密码</p>
              <p class="login-tip">忘记密码</p>
          </div>
          <div class="remember_psw">
              <span class="login-tip">没有账号？</span>
              <button class="login-tip">立即注册>></button>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import LoginForm from '_c/login-form'
import { mapActions } from 'vuex'
export default {
  components: {
    LoginForm
  },
  methods: {
    ...mapActions([
      'handleLogin',
      'getUserInfo'
    ]),
    handleSubmit ({ userName, password }) {
      this.handleLogin({ userName, password }).then(res => {
        this.getUserInfo().then(res => {
          this.$router.push({
            name: 'home'
          })
        })
      })
    }
  }
}
</script>

<style>

</style>
