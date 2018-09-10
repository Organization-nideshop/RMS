<template>
  <Form ref="loginForm" :model="form" @keydown.enter.native="handleSubmit">
    <!-- 登录 -->
    <template v-if="seen">
      <FormItem prop="userName">
      <Input v-model="form.userName" placeholder="请输入账号" v-on:input="judge"></Input>
    </FormItem>
    <FormItem prop="password">
      <Input type="password" v-model="form.password" placeholder="请输入密码" v-on:input="judge"></Input>
    </FormItem>
    <FormItem prop="verifyCode">
      <Input class="code_input" v-model="form.verifyCode" placeholder="请输入验证码" v-on:input="judge"></Input>
      <div class="code" @click="refreshCode">
        <s-identify :identifyCode="identifyCode"></s-identify>
      </div>
    </FormItem>
    <FormItem prop="checkBox">
      <Checkbox label="remember" v-model="form.remember"></Checkbox><span class="check">记住密码</span>
    </FormItem>
    <FormItem>
      <Button class="login-btn" v-bind:disabled="dis" @click="handleSubmit" long>登录</Button>
    </FormItem>
    </template>
    <!-- 找回密码 -->
    <template v-else>
      <FormItem prop="userName">
        <Input v-model="form.userName" placeholder="请输入账号" v-on:input="reset"></Input>
      </FormItem>
      <FormItem prop="mail">
        <Input v-model="form.mail" placeholder="请输入邮箱" v-on:input="reset"></Input>
      </FormItem>
      <FormItem prop="mobile">
        <Input v-model="form.mobile" placeholder="请输入手机号" v-on:input="reset"></Input>
      </FormItem>
      <FormItem prop="_verifyCode">
        <Input class="code_input" v-model="form._verifyCode" placeholder="请输入验证码" v-on:input="reset"></Input>
        <div class="code_btn">获取验证码</div>
      </FormItem>
      <FormItem>
        <Button class="login-btn" v-bind:disabled="_dis" @click="handleReset" long>找回密码</Button>
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
      dis:false,
      _dis:false,
      tipsContent:''
    };
  },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
    this.$Message.config({
      top:200
    });
    this.judge();
    this.reset();
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
    handleSubmit() {
      var inputCode = this.form.verifyCode;
      var verifyCode = this.identifyCode;
      console.log(verifyCode);
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          if (inputCode != verifyCode&&inputCode!='') {
            this.tip("验证码输入错误！");  
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
            this.tip("请输入有效的邮箱！"); 
            return false;
          }else if(!(/^1[345789]\d{9}$/.test(mobile))){
            this.tip("请输入有效的手机号！"); 
            return false; 
          } else {
            this.tip("");
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
    //没有填写信息时按钮为禁用状态
    judge(){
      console.log(2222222)
      var userName = this.form.userName;
      var password = this.form.password;
      var verifyCode = this.form.verifyCode;

      if(userName==''||password==''||verifyCode==''){
        console.log(this.dis)
        this.dis = true
      }else{
        this.dis = false
      }
    },
    reset(){
      console.log(333333)
      var userName = this.form.userName;
      var mail = this.form.mail;
      var mobile = this.form.mobile;
      var _verifyCode = this.form._verifyCode;
      if(userName==''||mail==''||mobile==''||_verifyCode==''){
        console.log(this._dis)
        this._dis = true
      }else{
        this._dis = false
      }
    },
    tip:function(data){
      this.$emit("tips",data);
    }
  }
};
</script>
