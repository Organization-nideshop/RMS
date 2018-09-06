<template>
  <Form ref="loginForm" :model="form" :rules="rules" @keydown.enter.native="handleSubmit">
    <!-- 登录 -->
    <template v-if="seen">
      <FormItem prop="userName">
      <Input v-model="form.userName" placeholder="请输入账号">
        <span slot="prepend">
          <Icon :size="24" color="#fff" type="ios-person"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem prop="password">
      <Input type="password" v-model="form.password" placeholder="请输入密码">
        <span slot="prepend">
          <Icon :size="22" color="#fff" type="ios-lock"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem prop="verifyCode">
      <Input class="code_input" v-model="form.verifyCode" v-on:input ="change1" placeholder="请输入验证码"></Input>
      <div class="code" @click="refreshCode">
        <s-identify :identifyCode="identifyCode"></s-identify>
      </div>
      <div v-if="isErrCode" class="ivu-form-item-error-tip">验证码输入错误！</div>
    </FormItem>
    <FormItem prop="checkBox">
      <Checkbox label="remember" v-model="form.remember"></Checkbox><span class="check">记住密码</span>
    </FormItem>
    <FormItem>
      <Button class="login-btn" @click="handleSubmit" long>登录</Button>
    </FormItem>
    </template>
    <!-- 找回密码 -->
    <template v-else>
      <FormItem prop="userName">
        <Input v-model="form.userName" placeholder="请输入账号">
          <span slot="prepend">
            <Icon :size="24" color="#fff" type="ios-person"></Icon>
          </span>
        </Input>
      </FormItem>
      <FormItem prop="mail">
        <Input v-model="form.mail" placeholder="请输入邮箱" v-on:input ="change1">
          <span slot="prepend">
            <Icon :size="24" color="#fff" type="ios-mail"></Icon>
          </span>
        </Input>
        <div v-if="isErrMail" class="ivu-form-item-error-tip">请输入有效的邮箱！</div>
      </FormItem>
      <FormItem prop="mobile">
        <Input v-model="form.mobile" placeholder="请输入手机号" v-on:input ="change1">
          <span slot="prepend">
            <Icon :size="24" color="#fff" type="ios-call"></Icon>
          </span>
        </Input>
        <div v-if="isErrMobile" class="ivu-form-item-error-tip">请输入有效的手机号！</div>
      </FormItem>
      <FormItem prop="_verifyCode">
        <Input class="code_input" v-model="form._verifyCode" placeholder="请输入验证码"></Input>
        <div class="code_btn">获取验证码</div>
      </FormItem>
      <FormItem>
        <Button class="login-btn" @click="handleReset" long>找回密码</Button>
      </FormItem>
    </template>
  </Form>
</template>
<script>
import SIdentify from "../identify/identify";
export default {
  name: "LoginForm",
  components: {
    SIdentify
  },
  props: {
    userNameRules: {
      type: Array,
      default: () => {
        return [{ required: true, message: "账号不能为空", trigger: "blur" }];
      }
    },
    passwordRules: {
      type: Array,
      default: () => {
        return [{ required: true, message: "密码不能为空", trigger: "blur" }];
      }
    },
    verifyCodeRules: {
      type: Array,
      default: () => {
        return [{ required: true, message: "验证码不能为空", trigger: "blur" }];
      }
    },
    _verifyCodeRules: {
      type: Array,
      default: () => {
        return [{ required: true, message: "验证码不能为空", trigger: "blur" }];
      }
    },
    mobileRules: {
      type: Array,
      default: () => {
        return [{ required: true, message: "手机号不能为空", trigger: "blur" }];
      }
    },
    mailRules: {
      type: Array,
      default: () => {
        return [{ required: true, message: "邮箱不能为空", trigger: "blur" }];
      }
    },
    seen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      form: {
        userName: "",
        password: "",
        mail: "",
        verifyCode: "",
        _verifyCode: "",
        mobile: "",
        remember: ""
      },
      identifyCodes: "1234567890",
      identifyCode: "",
      isErrCode: false,
      isErrMobile: false,
      isErrMail: false
    };
  },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  computed: {
    rules() {
      return {
        userName: this.userNameRules,
        password: this.passwordRules,
        verifyCode: this.verifyCodeRules,
        _verifyCode: this._verifyCodeRules,
        mobile: this.mobileRules,
        mail: this.mailRules
      };
    }
  },
  methods: {
    
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
      console.log(this.identifyCode);
    },
    change1() {
      this.isErrCode = false;
      this.isErrMobile = false;
      this.isErrMail = false;
    },
    handleSubmit() {
      var inputCode = this.form.verifyCode;
      var verifyCode = this.identifyCode;
      console.log(verifyCode);
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          if (inputCode != verifyCode) {
            this.isErrCode = true;
          }else{
            this.$emit("on-success-valid", {
              userName: this.form.userName,
              password: this.form.password,
              verifyCode: this.form.verifyCode,
              remember: this.form.remember,
            });
          }
        }
      })
      console.log(this.form.verifyCode);
      console.log(this.form.remember);
    },
    handleReset() {
      var mobile = this.form.mobile;
      var mail = this.form.mail;
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          if(!(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(mail))){
            this.isErrMail = true;
            return false;
          }else if(!(/^1[345789]\d{9}$/.test(mobile))){
            this.isErrMobile = true;
            return false; 
          } else {
            this.$emit("on-success-valid", {
              userName: this.form.userName,
              mail: this.form.mail,
              _verifyCode: this.form.verifyCode,
              mobile: this.form.mobile
            });
          }
        }
      })
      console.log(this.form.verifyCode);
      console.log(this.form.remember);
    },
  }
};
</script>
