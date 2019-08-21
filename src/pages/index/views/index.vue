<template>
  <div id="index">
    <el-row>
      <el-col :span="24" class="top">
        <div class="w_1200">
          <el-col :span="17" class="topLeft">
            <el-image style="width: 440px; height: 70px" :src="urllogo"></el-image>
            <el-image style="width: 70px; height: 70px;margin:0 0 0 30px;" :src="urlerweima"></el-image>
          </el-col>
          <el-col :span="7" class="topRight">
            <el-col :span="8">
              <el-link :underline="false">
                <i class="el-icon-user"></i>
                <p>学生登录</p>
              </el-link>
            </el-col>
            <el-col :span="8">
              <el-link :underline="false">
                <i class="el-icon-user"></i>
                <p>单位登录/注册</p>
              </el-link>
            </el-col>
            <el-col :span="8">
              <el-link :underline="false">
                <i class="el-icon-user"></i>
                <p>企业登录</p>
              </el-link>
            </el-col>
          </el-col>
        </div>
      </el-col>
      <el-col :span="24">
        <div class="w_1200">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" text-color="#333">
            <el-submenu index="1">
              <template slot="title">
                新闻公告
              </template>
              <el-menu-item index="1-1">通知公告</el-menu-item>
              <el-menu-item index="1-2">就业快讯</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                学生导航
              </template>
              <el-menu-item index="2-1">毕业生签约流程</el-menu-item>
              <el-menu-item index="2-2">三方协议违约说明</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                学子风采
              </template>
              <el-menu-item index="3-1">学子风采</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                企业服务
              </template>
              <el-menu-item index="4-1">院系公告</el-menu-item>
              <el-menu-item index="4-2">生源信息</el-menu-item>
              <el-menu-item index="4-3">入校招聘流程</el-menu-item>
              <el-menu-item index="4-4">宣讲会预约</el-menu-item>
              <el-menu-item index="4-5">双选会预约</el-menu-item>
              <el-menu-item index="4-6">校园地图</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                就业服务
              </template>
              <el-menu-item index="5-1">求职之路</el-menu-item>
              <el-menu-item index="5-2">国内求学</el-menu-item>
              <el-menu-item index="5-3">出国留学</el-menu-item>
              <el-menu-item index="5-4">创新创业</el-menu-item>
              <el-menu-item index="5-5">留言咨询</el-menu-item>
              <el-menu-item index="5-6">预约指导</el-menu-item>
            </el-submenu>
            <el-menu-item index="6">联系我们</el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="24">
        <div class="w_1200">
          <div class="block">
            <el-carousel :autoplay="true">
              <el-carousel-item v-for="(item, index) in imgList" :key="index">
                <img :src="item.url" class="imgList" />
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </el-col>
      <el-col :span="24" class="main">
        <div class="w_1200">
          <el-col :span="6" class="mainLeft">
            <el-calendar v-model="value"> </el-calendar>
          </el-col>
          <el-col :span="18" class="mainRight">
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
              <el-tab-pane label="宣讲会" name="first">宣讲会</el-tab-pane>
              <el-tab-pane label="双选会" name="second">双选会</el-tab-pane>
              <el-tab-pane label="就业活动" name="third">就业活动</el-tab-pane>
              <el-tab-pane label="在线招聘" name="fourth">在线招聘</el-tab-pane>
              <el-tab-pane label="招聘信息" name="fifth">招聘信息</el-tab-pane>
              <el-tab-pane label="国际组织/联合国" name="sixth">国际组织/联合国</el-tab-pane>
            </el-tabs>
            <a href="" class="tabsMore" target="_blank" title="更多">MORE</a>
          </el-col>
        </div>
      </el-col>
      <el-col :span="24">
        <div class="w_1200">
          <h3>专题网站</h3>
          <el-col :span="24">
            <el-col :span="4" v-for="(item, index) in listZhuan" :key="index">
              <el-image style="width: 100%; height: 60px" :src="item.url"></el-image>
              <p>{{ item.name }}</p>
            </el-col>
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
    urllogo: require('@/assets/logo.png'),
    urlerweima: require('@/assets/erweima.png'),
    activeIndex: '1',
    imgList: [
      { url: require('@/assets/lun1.jpg') },
      { url: require('@/assets/lun2.jpg') },
      { url: require('@/assets/lun3.jpg') },
      { url: require('@/assets/lun4.jpg') },
      { url: require('@/assets/lun5.jpg') },
      { url: require('@/assets/lun6.jpg') },
    ],
    value: new Date(),
    activeName: 'first',
    listZhuan: [
      { url: require('@/assets/zhuanti1.jpg'), name: '国际组织实习任职服务平台' },
      { url: require('@/assets/zhuanti2.jpg'), name: '新职业网' },
      { url: require('@/assets/zhuanti3.jpg'), name: '学信网' },
      { url: require('@/assets/zhuanti4.jpg'), name: '中国留学网' },
      { url: require('@/assets/zhuanti5.jpg'), name: '全国大学生就业一站式服务系统' },
      { url: require('@/assets/zhuanti6.jpg'), name: '广东省就业指导中心' },
    ],
  }),
  created() {},
  computed: {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style lang="scss" scoped>
.w_1200 {
  margin: 0 auto;
  width: 1200px;
}
p {
  margin: 0;
  padding: 0;
}
.top {
  background-color: #008bd5;
  padding: 40px 0;
}
.topRight {
  text-align: center;
  color: #fff;
}
/deep/.topRight .el-link {
  color: #fff;
  font-size: 15px;
}
/deep/.topRight i {
  font-size: 24px;
}
/deep/.el-menu.el-menu--horizontal {
  border-bottom: none;
}
/deep/.el-submenu__title {
  padding: 0 59px;
}
/deep/.el-menu-item {
  padding: 0 59px;
}
/deep/.el-carousel__container {
  height: 350px;
}
.imgList {
  width: 100%;
  height: 100%;
}
.main {
  height: 397px;
  margin-top: 20px;
}
.mainLeft {
  background: #e5e5e5;
  height: 397px;
}
/deep/.el-calendar {
  background-color: #e5e5e5;
}
/deep/.el-calendar__body {
  padding: 0;
}
/deep/.el-calendar-table .el-calendar-day {
  height: 49px;
}
/deep/.el-button--mini {
  padding: 7px 9px;
}
.mainRight {
  background: url(../../../assets/c_bj4.png) repeat;
  height: 397px;
}
.tabsMore {
  position: relative;
  top: -4.0625rem;
  float: right;
  right: 10px;
  color: #858585;
  font-size: 12px;
  text-decoration: none;
}
</style>
