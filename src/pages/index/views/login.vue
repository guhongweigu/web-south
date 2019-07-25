<template lang="html">
  <div id="login">
    <div class="w_0100 login">
      <div class="w_1200" style="height: 100vh;">
        <el-col :span="24" class="loginTit">
          <el-col :span="24" class="text">
            <h1>绩效评价指标系统</h1>
            <h3>账号登陆</h3>
          </el-col>
          <el-form ref="form" :model="form" label-width="120px" class="form">
            <el-col :span="24" style="margin-top:3%;">
              <el-form-item prop="login_id">
                <el-col :span="15"><el-input v-model="form.login_id" placeholder="用户名"></el-input></el-col>
              </el-form-item>
              <el-form-item prop="password">
                <el-col :span="15"><el-input v-model="form.password" placeholder="密码" type="password" @keyup.enter.native="toLogin()"></el-input></el-col>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-col :span="6">&nbsp;</el-col>
              <el-col :span="5"><el-button type="primary">注册</el-button></el-col>
              <el-col :span="5"><el-button type="primary" @click="onSubmit">登录</el-button></el-col>
              <el-col :span="6">&nbsp;</el-col>
            </el-col>
          </el-form>
        </el-col>
      </div>
      <div class="w_0100 down ">
        <div class="w_1200">
          <el-col :span="24" class="downTit">
            <p>地址：吉林省长春市前进大街1244号</p>
            <p>邮箱：123456 电话：123456 传真：123456</p>
            <p>版权所有：吉林省计算中心</p>
          </el-col>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  props: {},
  components: {},
  data: () => ({
    form: {},
    rules: {
      name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
      pw: [{ required: true, message: '请输入密码', trigger: 'blur' }],
    },
  }),
  created() {},
  computed: {},
  methods: {
    onSubmit() {
      console.log('submit!');
    },
  },
};
</script>

<style lang="scss" scoped>
.w_0100 {
  float: left;
  width: 100%;
}
.w_1200 {
  margin: 0 auto;
  width: 1200px;
}
p {
  margin: 0;
  padding: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}
.login {
  position: relative;
  width: 100%;
  height: 100vh;
  background: url(/img/login.046b46da.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
}
.loginTit {
  width: 480px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 3px;
  left: 35%;
  top: 10%;
  height: 400px;
  position: fixed;
}
.text {
  height: 112px;
  text-align: center;
  padding: 20px 0 0 0;
}
.text h1 {
  font-size: 30px;
  font-weight: 900;
  color: #00ced1;
  letter-spacing: 1px;
}
.text h3 {
  color: #dce8f4;
  letter-spacing: 1px;
  padding-top: 20px;
}
.form {
  text-align: center;
}
/deep/.el-input__inner {
  background: rgba(255, 255, 255, 0);
}
.down {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
  background: rgba(0, 0, 0, 0.6);
}
.downTit {
  text-align: center;
  color: #ccc;
  font-size: 12px;
}
.downTit p {
  padding: 3px 0;
}
</style>
