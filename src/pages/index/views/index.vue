<template>
  <div id="index">
    <el-row style="width:100%;height:100vh;overflow:hidden;">
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
      <el-col :span="24" class="menus">
        <div class="w_1200">
          <el-col :span="9" class="menusLeft">
            <el-image style="width: 450px; height: 112px;" :src="url"></el-image>
            <el-col :span="24" class="menusLeftTit"><span>东北高师就业联盟</span></el-col>
          </el-col>
          <el-col :span="15" class="menusRight">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
              <el-menu-item index="1"><i class="el-icon-s-home"></i>首页</el-menu-item>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-s-home"></i>
                  学生服务
                </template>
                <el-collapse>
                  <el-col :span="24" class="menuStu">
                    <el-col :span="5" class="menuStuTit">招聘信息</el-col>
                    <el-col :span="19" class="menuStuTxt">
                      <ul>
                        <li v-for="(tag, index) in tags" :key="index" :type="tag.type">
                          <el-link :underline="false">{{ tag.name }}</el-link>
                        </li>
                      </ul>
                    </el-col>
                    <el-col :span="5" class="menuStuTit">就业指导</el-col>
                    <el-col :span="19" class="menuStuTxt">
                      <ul>
                        <li v-for="(tag, index) in tags1" :key="index" :type="tag.type">
                          <el-link :underline="false">{{ tag.name }}</el-link>
                        </li>
                      </ul>
                    </el-col>
                    <el-col :span="5" class="menuStuTit">生涯服务</el-col>
                    <el-col :span="19" class="menuStuTxt">
                      <ul>
                        <li v-for="(tag, index) in tags2" :key="index" :type="tag.type">
                          <el-link :underline="false">{{ tag.name }}</el-link>
                        </li>
                      </ul>
                    </el-col>
                    <el-col :span="5" class="menuStuTit">校友动态</el-col>
                    <el-col :span="19" class="menuStuTxt">
                      <ul>
                        <li v-for="(tag, index) in tags3" :key="index" :type="tag.type">
                          <el-link :underline="false">{{ tag.name }}</el-link>
                        </li>
                      </ul>
                    </el-col>
                    <el-col :span="5" class="menuStuTit">&nbsp;</el-col>
                    <el-col :span="19" class="menuStuTxt menuStuBtn">
                      <el-button>学生服务登录</el-button>
                    </el-col>
                  </el-col>
                </el-collapse>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-s-home"></i>
                  招聘单位
                </template>
                <el-collapse>
                  <el-col :span="24" class="menuStu">
                    <el-col :span="5" class="menuStuTit">生源信息</el-col>
                    <el-col :span="19" class="menuStuTxt">
                      <ul>
                        <li v-for="(tag, index) in tags4" :key="index" :type="tag.type">
                          <el-link :underline="false">{{ tag.name }}</el-link>
                        </li>
                      </ul>
                    </el-col>
                    <el-col :span="5" class="menuStuTit">单位服务指南</el-col>
                    <el-col :span="19" class="menuStuTxt">
                      <ul>
                        <li v-for="(tag, index) in tags5" :key="index" :type="tag.type">
                          <el-link :underline="false">{{ tag.name }}</el-link>
                        </li>
                      </ul>
                    </el-col>
                    <el-col :span="5" class="menuStuTit">&nbsp;</el-col>
                    <el-col :span="19" class="menuStuTxt menuStuBtn">
                      <el-button>招聘单位登录</el-button>
                    </el-col>
                  </el-col>
                </el-collapse>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-s-home"></i>
                  就业部门
                </template>
                <el-collapse>
                  <el-col :span="24" class="menuStu">
                    <el-col :span="5" class="menuStuTit">信息发布</el-col>
                    <el-col :span="19" class="menuStuTxt">
                      <ul>
                        <li v-for="(tag, index) in tags6" :key="index" :type="tag.type">
                          <el-link :underline="false">{{ tag.name }}</el-link>
                        </li>
                      </ul>
                    </el-col>
                    <el-col :span="5" class="menuStuTit">服务指南</el-col>
                    <el-col :span="19" class="menuStuTxt">
                      <ul>
                        <li v-for="(tag, index) in tags7" :key="index" :type="tag.type">
                          <el-link :underline="false">{{ tag.name }}</el-link>
                        </li>
                      </ul>
                    </el-col>
                    <el-col :span="5" class="menuStuTit">关于我们</el-col>
                    <el-col :span="19" class="menuStuTxt">
                      <ul>
                        <li v-for="(tag, index) in tags8" :key="index" :type="tag.type">
                          <el-link :underline="false">{{ tag.name }}</el-link>
                        </li>
                      </ul>
                    </el-col>
                    <el-col :span="5" class="menuStuTit">&nbsp;</el-col>
                    <el-col :span="19" class="menuStuTxt menuStuBtn">
                      <el-button>就业部门登录</el-button>
                    </el-col>
                  </el-col>
                </el-collapse>
              </el-submenu>
            </el-menu>
          </el-col>
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
    url: require('@/assets/logo1.jpg'),
    activeIndex: '',
    tags: [{ name: '校内宣讲会' }, { name: '校外宣讲会' }, { name: '双选会' }, { name: '在线招聘' }],
    tags1: [
      { name: '就业指导' },
      { name: '培训与活动' },
      { name: '文档下载' },
      { name: '政策法规' },
      { name: '签约与权益' },
      { name: '离校手续' },
      { name: '改派迁移' },
      { name: '常用信息查询' },
    ],
    tags2: [{ name: '职业测评' }, { name: '生涯活动' }, { name: '创业指导' }, { name: '长大就业报' }],
    tags3: [{ name: '校友会' }],
    tags4: [{ name: '毕业生人数' }, { name: '专业介绍' }, { name: '毕业生生源' }],
    tags5: [{ name: 'CCUer大数据' }, { name: '联系我们' }],
    tags6: [{ name: '通知公告' }, { name: '就业新闻' }],
    tags7: [{ name: '下载专区' }, { name: '留言咨询' }],
    tags8: [{ name: '关于我们' }],
  }),
  created() {},
  computed: {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss" scoped>
.w_1200 {
  margin: 0 auto;
  width: 1200px;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
li {
  margin: 0;
  padding: 0;
}
.menus {
  position: relative;
  top: 50px;
  color: #fff;
  z-index: 999;
}
.menusLeft {
  height: 140px;
}
.menusLeftTit {
  height: 29px;
  background: #850000;
  text-align: right;
  line-height: 28px;
  margin: -4px 0 0 0;
}
.menusLeftTit span {
  display: inline-block;
  padding: 0 10px;
  font-size: 12px;
  background-color: rgba(169, 13, 13, 0.8);
}
/deep/.el-submenu__icon-arrow {
  display: none;
}
.menusRight {
  height: 80px;
  margin: 20px 0 0 0;
}
.el-menu-demo {
  background-color: rgba(133, 0, 0, 0.8);
  height: 80px;
  border-bottom: none;
}
.el-menu-item {
  height: 80px;
  line-height: 80px;
  padding: 0 30px;
  font-size: 18px;
  color: #fff;
}
.el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
.el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  background: #a90d0d;
}
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  color: #fff;
}

.el-menu-item .el-icon-s-home {
  width: 48px;
  height: 48px;
  background: #a90d0d;
  border-radius: 900px;
  line-height: 48px;
  text-align: center;
  font-size: 35px;
  color: #fff;
}
.el-submenu {
  height: 80px;
  line-height: 80px;
  font-size: 18px;
  color: #fff;
}
.el-submenu .el-icon-s-home {
  width: 48px;
  height: 48px;
  background: #a90d0d;
  border-radius: 900px;
  line-height: 48px;
  text-align: center;
  font-size: 35px;
  color: #fff;
}
/deep/.el-submenu__title {
  height: 80px !important;
  line-height: 80px !important;
  color: #fff !important;
  font-size: 18px;
}
.is-opened {
  background: #a90d0d;
}
/deep/.el-submenu__title:hover {
  background-color: #a90d0d !important;
}
/deep/.el-collapse {
  border-top: transparent;
  border-bottom: transparent;
}
.menuStu {
  width: 600px;
  background-color: rgba(169, 13, 13, 0.8);
  padding: 10px 0;
}
.menuStuTit {
  text-align: center;
  height: 33px;
  line-height: 33px;
  color: #fff;
}
.menuStuTxt {
  border-bottom: 1px dashed #fff;
}
.menuStuTxt ul li {
  float: left;
  padding: 8px 20px;
}
/deep/.menuStuTxt ul li .el-link {
  color: #fff;
}
.menuStuTxt ul li:hover {
  background-color: #850000;
}
.menuStuBtn {
  border-bottom: none;
}
.menuStuBtn .el-button {
  background-color: #850000;
  color: #fff;
  border: none;
  margin: 15px 0 0 0;
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
  position: absolute;
  top: 40px;
}
/deep/.el-carousel__container {
  min-height: 538px;
}
.imgList {
  width: 100%;
  height: 100%;
}
/deep/.el-carousel__indicators--horizontal {
  display: none;
}

.down {
  position: absolute;
  z-index: 999;
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
