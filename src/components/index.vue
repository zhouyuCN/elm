<template>
  <el-container class="my-container">
    <el-container>
      <!-- 导航区域 -->
      <el-aside width="320px" class="my-aside">
        <el-row>
          <el-col :span="24">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#324157"
              text-color="#fff"
              active-text-color="#ffd04b"
              router
            >
              <!-- 首页 -->
              <el-menu-item index="manage">
                <i class="el-icon-location"></i>
                <span>首页</span>
              </el-menu-item>
              <!-- 数据管理 -->
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>数据管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="userList">
                    <i class="el-icon-menu"></i>
                    <span>用户列表</span>
                  </el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                  <el-menu-item index="shopList">
                    <i class="el-icon-menu"></i>
                    <span>商家列表</span>
                  </el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                  <el-menu-item index="foodList">
                    <i class="el-icon-menu"></i>
                    <span>食品列表</span>
                  </el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                  <el-menu-item index="orderList">
                    <i class="el-icon-menu"></i>
                    <span>订单列表</span>
                  </el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                  <el-menu-item index="adminList">
                    <i class="el-icon-menu"></i>
                    <span>管理员列表</span>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <!-- 添加数据 -->
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>添加数据</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="addStop">
                    <i class="el-icon-menu"></i>
                    <span>添加店铺</span>
                  </el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                  <el-menu-item index="2-1">
                    <i class="el-icon-menu"></i>
                    <span>添加商品</span>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <!-- 图表 -->
              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>图表</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="4-1">
                    <i class="el-icon-menu"></i>
                    <span>用户分析</span>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <!-- 编辑 -->
              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>编辑</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="4-1">
                    <i class="el-icon-menu"></i>
                    <span>文本编辑</span>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <!-- 设置 -->
              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>设置</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="4-1">
                    <i class="el-icon-menu"></i>
                    <span>管理员设置</span>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <!-- 说明 -->
              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>说明</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="4-1">
                    <i class="el-icon-menu"></i>
                    <span>说明</span>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main class="my-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "index",

};
</script>


<style  lang="scss">
.my-container {
  height: 100%;

  .my-aside {
    width: 320px;
    background-color: #324157;
  }
  //实现滚动条隐藏
  .my-aside::-webkit-scrollbar {
    display: none;
  }
  .my-main {
    padding: 0;
  }
  .my-main::-webkit-scrollbar {
    display: none;
  }
}
</style>
