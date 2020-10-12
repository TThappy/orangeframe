<template>
  <div class="container">
    <div class="login-box">
      <h2>管理系统</h2>
      <form>
        <div class="login-field">
          <input type="text" v-model="param.username" required="">
          <label>账号</label>
        </div>
        <div class="login-field">
          <input type="password" v-model="param.password" required="">
          <label>密码</label>
        </div>
        <a-button type="primary" :loading="loginLoading" @click="login">
          登录
        </a-button>
      </form>
    </div>
  </div>


</template>

<script>

import { login } from "@/api/user";
import Cookies from 'js-cookie';
export default {
  name: "Login",

  data() {
    return {
      param: {
        username: "",
        password: "",
      },
      loginLoading: false,
    }
  },
  methods: {
    async login() {
      this.loginLoading = !this.loginLoading
      this.param.password = this.$encrypt(this.param.password)
      let res = await login(this.param)
      if (res.success) {
        this.$ms("登录成功", () => {
          console.log(res.token)
          Cookies.set("authToken",res.token)
          this.$router.push('/')
        })
      } else {
        this.$mw(res.msg)
      }

      this.loginLoading = !this.loginLoading
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: url(~@/assets/images/bg.png);
  background-size: cover;
  height: 100vh;
  width: 100vw;
}

.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  padding: 40px;
  background: rgba(0, 0, 0, .8);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, .5);
  border-radius: 10px;
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  text-align: center;
  color: #fff;
}

.login-box .login-field {
  position: relative;

}

.login-box .login-field input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}

.login-box .login-field label {
  position: absolute;
  top: 0;
  left: 0;
  letter-spacing: 1px;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: .5s;
}

.login-box .login-field input:focus ~ label,
.login-box .login-field input:valid ~ label {
  top: -23px;
  left: 0;
  color: aqua;
  font-size: 12px;
}

</style>
