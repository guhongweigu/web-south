<template>
  <div id="register">
    <el-row>
      <div class="w_0100 top">
        <div class="w_1200">
          <el-col :span="24"><el-image style="width:443px;height:68px;padding: 20px 0;" :src="url"></el-image></el-col>
        </div>
      </div>
      <div class="w_0100 main">
        <div class="w_1200">
          <el-col :span="8">&nbsp;</el-col>
          <el-col :span="8" class="mainTit">
            <h3>账号注册</h3>
            <el-form ref="form" :model="form">
              <el-form-item label="">
                <el-input v-model="form.name" placeholder="用户名" prefix-icon="el-icon-user-solid"></el-input>
              </el-form-item>
              <el-form-item label="">
                <el-input v-model="form.password" type="password" placeholder="密码" prefix-icon="el-icon-lock"></el-input>
              </el-form-item>
              <el-form-item label="">
                <el-input v-model="form.passwords" type="password" placeholder="确认密码" prefix-icon="el-icon-lock"></el-input>
              </el-form-item>
              <el-form-item label="">
                <el-input v-model="form.shenfen" placeholder="身份证号" prefix-icon="el-icon-edit"></el-input>
              </el-form-item>
              <el-form-item label="">
                <el-input v-model="form.phone" placeholder="联系电话" prefix-icon="el-icon-phone"></el-input>
              </el-form-item>
              <el-form-item label="">
                <el-input v-model="form.address" placeholder="地址" prefix-icon="el-icon-location"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">注册</el-button>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="8">&nbsp;</el-col>
        </div>
      </div>
      <div class="w_0100 down">
        <div class="w_1200">
          <el-col :span="24" class="downTit">
            <p>版权所有：123455 技术支持：12345</p>
            <p>地址：吉林省产业技术创新联盟管理平台 电话：12345678</p>
          </el-col>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'register',
  props: {},
  components: {},
  data: () => ({
    url: require('@/assets/logo.jpg'),
    form: {
      name: '',
      password: '',
      passwords: '',
      shenfen: '',
      phone: '',
      address: '',
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
.top {
  width: 100%;
  height: 110px;
  background: #fff;
}
.main {
  width: 100%;
  height: 750px;
  background: url(../../../assets/1.jpg) center no-repeat;
  background-size: 100%;
}
.mainTit {
  height: 550px;
  margin: 100px 0;
  background: #fff;
  border-radius: 10px;
  padding: 30px 50px;
}
.mainTit h3 {
  width: 100%;
  height: 26px;
  text-align: center;
  line-height: 26px;
  color: #999999;
  font-size: 24px;
  margin: 20px 0 18px;
}
.el-form-item__content .el-button {
  width: 100%;
  height: 34px;
  line-height: 10px;
  background: #3378b7;
}

.down {
  width: 100%;
  height: 44px;
  padding: 30px 0;
}
.downTit {
  width: 100%;
  height: 44px;
  text-align: center;
}
.downTit p {
  width: 100;
  height: 17px;
  line-height: 17px;
  text-align: center;
  margin: 0 0 10px 0;
  font-size: 12px;
  color: #999;
}
</style>
