<template>
  <el-row class="my-header">
    <!-- 面包屑导航开始 -->
    <el-col :span="23">
      <el-breadcrumb separator-class="el-icon-arrow-right" class="my-bread">
        <el-breadcrumb-item :to="{ path: 'manage.vue' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{breadOne}}</el-breadcrumb-item>
        <el-breadcrumb-item class="breadTow">{{breadTwo}}</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>

    <!-- 登出开始 -->
    <el-col :span="1">
      <el-button type="danger" icon="el-icon-arrow-right" circle @click="logout" class="logout"></el-button>
    </el-col>
    <!-- 登出结束 -->
  </el-row>
</template>

<script>
export default {
  name: "my-bread",
  props: ["breadOne", "breadTwo"],
  methods: {
    //退出
   logout(){
      window.sessionStorage.removeItem('token');
      this.$router.push('/login');
      this.$message.success('退出成功')
    }
  },
  beforeCreate() {
    if (!window.sessionStorage.getItem("token")) {
      this.$router.push("/login");
      this.$message.error("请先登入 再访问");
    }
  }
};
</script>

<style lang="scss">
.my-header {
  background-color: #eff2f7;
  height: 55px;
  margin-bottom: 15px;
  .my-bread {
    line-height: 55px;
    padding-left: 25px;
    font-size: 14px;

    .breadTow .el-breadcrumb__inner {
      color: #97a8be;
    }
  }
  .logout {
    margin-top: 7px;
  }
}
</style>
