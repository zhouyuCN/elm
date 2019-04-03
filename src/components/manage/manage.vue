<template>
  <div>
    <el-row class="my-header">
      <!-- 面包屑导航开始 -->
      <el-col :span="23">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="my-bread">
          <el-breadcrumb-item :to="{ path: 'manage.vue' }">首页</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
      <!-- 面包屑导航结束 -->

      <!-- 登出开始 -->
      <el-col :span="1">
        <el-button type="danger" icon="el-icon-arrow-right" circle @click="logout" class="logout"></el-button>
      </el-col>
      <!-- 登出结束 -->
    </el-row>
    <!-- 数据统计开始 -->
    <div class="statistics">
      <h1>数据统计</h1>

      <ul class="dayData">
        <li class="list1">当日数据 :</li>
        <li>
          <span>0</span>
          <small>新增用户</small>
        </li>
        <li>
          <span>0</span>
          <small>新增订单</small>
        </li>
        <li>
          <span>0</span>
          <small>新增管理员</small>
        </li>
      </ul>

      <ul class="dayData">
        <li class="list2">总数据 :</li>
        <li>
          <span>0</span>
          <small>注册用户</small>
        </li>
        <li>
          <span>0</span>
          <small>订单</small>
        </li>
        <li>
          <span>0</span>
          <small>管理员</small>
        </li>
      </ul>
    </div>
    <!-- 数据统计结束 -->
  </div>
</template>

<script>
export default {
  name: "manage",
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

.statistics {
  height: 100px;
  display: flex;
  flex-direction: column;
  h1 {
    font-weight: normal;
    font-size: 30px;
    text-align: center;
    margin-bottom: -5px;
    margin-top: 0;
  }
  .dayData {
    display: block;
    padding: 0;
    margin: 15px 0 0 0;

    li {
      float: left;
      width: 244px;
      height: 35px;
      border-radius: 10px;
      background-color: #e5e9f2;
      margin-left: 20px;
      line-height: 35px;
      text-align: center;
      span {
          font-size: 28px;
      }
      small{
color: #666;
margin-left: 5px;
      }
    }
    .list1,
    .list2 {
      background-color: #ff9800;
      font-size: 24px;
      color: #fff;
    }
    .list2 {
      background-color: #20a0ff;
    }
  }
}
</style>
