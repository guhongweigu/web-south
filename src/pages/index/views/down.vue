<template>
  <div id="down">
    <el-row>
      <el-col :span="24" class="down">
        <el-col :span="24" class="downTit">
          <p>地址：吉林省长春市朝阳区前进大街1244号</p>
          <p>邮编：123456 电话：123456789 传真：239823982 邮箱：1243456@163.com</p>
          <p>版权所有：吉林省计算中心</p>
          <p>技术支持：吉林省计算中心</p>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'down',
  props: {},
  components: {},
  data: () => ({}),
  created() {},
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.down {
  width: 100%;
  height: 148px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 15px 0;
  color: #fff;
  font-size: 12px;
}
.downTit {
  min-width: 1200px;
  text-align: center;
}
</style>
