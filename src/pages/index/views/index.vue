<template lang="html">
  <div id="index">
    <el-row>
      <el-col :span="24" class="top">
        <div class="w_1200">
          <el-col :span="8">
            <el-link :underline="false" href="" target="_blank"><i class="el-icon-s-home"></i>首页</el-link>
          </el-col>
          <el-col :span="11" class="topTit">
            <el-link :underline="false" href="" target="_blank"><i class="el-icon-s-home"></i>收藏</el-link>
            <el-dropdown>
              <span class="el-dropdown-link"
                ><i class="el-icon-s-home el-icon--left"></i>微信公众号
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item class="topErweima">二维码</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown>
              <span class="el-dropdown-link"
                ><i class="el-icon-s-home el-icon--left"></i>登录
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item class="topLogin">
                  <i class="el-icon-s-home"></i>
                  <span>学生登录</span>
                </el-dropdown-item>
                <el-dropdown-item class="topLogin">
                  <i class="el-icon-s-home"></i>
                  <span>企业登录</span>
                </el-dropdown-item>
                <el-dropdown-item class="topLogin">
                  <i class="el-icon-s-home"></i>
                  <span>教师登录</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-link :underline="false" href="" target="_blank"><i class="el-icon-s-home"></i>企业注册</el-link>
            <el-link :underline="false" href="" target="_blank"><i class="el-icon-s-home"></i>国际组织实习任职</el-link>
          </el-col>
          <el-col :span="5" class="topSearch">
            <el-col :span="19"><el-input v-model="input" placeholder="搜索你感兴趣的问题"></el-input></el-col>
            <el-col :span="3"><el-button type="primary" icon="el-icon-search"></el-button></el-col>
          </el-col>
        </div>
      </el-col>
      <el-col :span="24" class="banner">
        <div class="block">
          <el-carousel :autoplay="true">
            <el-carousel-item v-for="(item, index) in imgList" :key="index">
              <img :src="item.url" class="imgList" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
      <el-col :span="24" class="down">
        <div class="w_1200">
          <el-col :span="24" class="downTit">
            <span class="text">长春大学版权所有</span>
            <span class="line">|</span>
            <span class="text">域名备案信息：吉ICP备05001994号-6</span> |
            <span class="text">
              <el-link :underline="false" href="http://www.bibibi.net" target="_blank">技术支持：云研科技</el-link>
            </span>
          </el-col>
          <el-col :span="24" class="downTit">
            <span class="text" style="font-size: 16;font-weight: bold;">联系我们</span>
            <span class="text">联系地址：吉林省长春市朝阳区卫星路6543号，综合楼C区203室</span>
            <span class="text">邮政编码：130022</span>
            <span class="text">服务热线：0431-85250035/26</span>
            <span class="text" style="float: right;">浏览量：今日943 / 共计1564546</span>
          </el-col>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: {},
  components: {},
  data: () => ({
    input: '',
    imgList: [{ url: require('@/assets/banner.jpg') }, { url: require('@/assets/banner2.jpg') }, { url: require('@/assets/banner3.jpg') }],
  }),
  created() {},
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.w_1200 {
  margin: 0 auto;
  width: 1200px;
}
.top {
  position: relative;
  height: 40px;
  line-height: 40px;
  background: #cccccc;
}
/deep/.el-link--inner {
  margin: -3px 0 0 0;
}
.topTit {
  height: 40px;
  line-height: 40px;
}
.el-link {
  color: #003264;
}
.topTit .el-link {
  margin: 0 20px 0 0;
}
.el-dropdown {
  margin: 0 20px 0 0;
  color: #003264;
}
.el-dropdown:hover {
  color: #409eff;
}
.topErweima {
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
}
.topLogin {
  float: left;
  width: 100px;
  height: 80px;
  text-align: center;
  padding: 10px 0;
}
.topLogin i {
  width: 100%;
  font-size: 50px;
  color: #850000;
}
.topLogin span {
  width: 100%;
  height: 20px;
  text-align: center;
  line-height: 20px;
}
.topLogin:hover span {
  color: #850000;
}
/deep/.topSearch .el-input__inner {
  height: 30px;
  border-radius: 0;
}
.topSearch .el-button {
  padding: 6px 15px;
  border-radius: 0;
  background: #003264;
  border-color: #003264;
}
.banner {
  width: 100%;
  position: relative;
}
/deep/.el-carousel__container {
  min-height: 100vh;
}
.imgList {
  width: 100%;
  height: 100%;
}
/deep/.el-carousel__indicators--horizontal {
  display: none;
}
.down {
  position: relative;
  bottom: 0;
  width: 100%;
  height: 80px;
  padding: 15px 0;
  background: #cccccc;
  color: #003264;
  text-align: left;
}
.down .text {
  font-size: 14px;
  margin: 0 10px 0 10px;
}
.downTit {
  margin: 0 0 5px 0;
}
</style>
