<template>
  <div>
    <my-bread breadOne="数据管理" breadTwo="管理员列表"></my-bread>
    <!-- 表格 -->
    <div class="table-box">
      <el-table
        class="my-table"
        :data="tableData"
        style="width: 100%"
        :header-cell-style="{background:'#eef1f6'}"
      >
        <el-table-column prop="date" label="姓名" width="180"></el-table-column>
        <el-table-column prop="name" label="注册日期" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column prop="address" label="权限"></el-table-column>
      </el-table>
      <!-- 页码 -->
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="100"
        layout="total, prev, pager, next"
        :total="1000"
        class="my-page"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "userList",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
</style>
