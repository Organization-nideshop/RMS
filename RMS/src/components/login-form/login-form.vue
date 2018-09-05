<template>
  <Form ref="loginForm" :model="form" :rules="rules" @keydown.enter.native="handleSubmit">
     <FormItem prop="userName">
      <Input v-model="form.userName" placeholder="请输入账号">
        <span slot="prepend">
          <Icon :size="24" type="ios-person"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem prop="password">
      <Input type="password" v-model="form.password" placeholder="请输入密码">
        <span slot="prepend">
          <Icon :size="22" type="ios-lock"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem prop="verifyCode">
      <Input class="code_input" v-model="form.verifyCode" placeholder="请输入验证码"></Input>
      <!-- <canvas>图片验证码</canvas> -->
      <div class="code" @click="refreshCode">
        <s-identify :identifyCode="identifyCode"></s-identify>
      </div>
    </FormItem>
    <FormItem prop="checkBox">
      <Checkbox label="remember"></Checkbox>记住密码
    </FormItem>
    <FormItem>
      <Button class="login-btn" @click="handleSubmit" type="primary" long>登录</Button>
    </FormItem>
  </Form>
</template>
<script>
import SIdentify from '../identify/identify'
export default {
  name: 'LoginForm',
  components: {
    SIdentify
  },
  props: {
    userNameRules: {
      type: Array,
      default: () => {
        return [{ required: true, message: '账号不能为空', trigger: 'blur' }]
      }
    },
    passwordRules: {
      type: Array,
      default: () => {
        return [{ required: true, message: '密码不能为空', trigger: 'blur' }]
      }
    },
    verifyCodeRules: {
      type: Array,
      default: () => {
        return [{ required: true, message: '验证码不能为空', trigger: 'blur' }]
      }
    }
  },
  data () {
    return {
      form: {
        userName: '',
        password: '',
        verifyCode: '',
        checkBox: ''
      },
      identifyCodes: '1234567890',
      identifyCode: ''
    }
  },
  mounted () {
    this.identifyCode = ''
    this.makeCode(this.identifyCodes, 4)
  },
  computed: {
    rules () {
      return {
        userName: this.userNameRules,
        password: this.passwordRules,
        verifyCode: this.verifyCode,
        checkBox: this.checkBox
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$emit('on-success-valid', {
            userName: this.form.userName,
            password: this.form.password,
            verifyCode: this.form.verifyCode,
            checkBox: this.form.checkBox
          })
        }
      })
    },
    randomNum (min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
    refreshCode () {
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 4)
    },
    makeCode (o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[this.randomNum(0, this.identifyCodes.length)]
      }
      console.log(this.identifyCode)
    }
  }
}
</script>
