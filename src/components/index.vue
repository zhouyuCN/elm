<template>
  <el-container class="my-container">
    <el-header class="my-header">
      <el-row>
        <el-col :span="4">
          <img src="../assets/images/logo.png" alt>
        </el-col>
        <el-col :span="16">
          <h2>大麦后台系统</h2>
        </el-col>
        <el-col :span="4">
          <el-button type="danger" round class="logout">登出</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <!-- 导航区域 -->
      <el-aside width="200px" class="my-aside">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item-group>
             <el-menu-item index="1-1"> <i class=" el-icon-menu"></i> <span> 用户列表</span></el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="my-main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "index"
};
</script>


<style  lang="scss">
.my-container {
  height: 100%;
  .my-header {
    background-color: #fff;
    box-shadow: 0 1px 3px #ccc;
    h2 {
      text-align: center;
      line-height: 60px;
      margin: 0;
    }
    .logout {
      margin: 10px 0 0 220px;
    }
  }
  .my-aside {
    background-color: #545c64;
  }
  .my-main {
    background-color: pink;
  }
}
</style>
