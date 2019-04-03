<template>
  <div>
    <my-bread breadOne="数据管理" breadTwo="用户列表"></my-bread>
    <!-- 表格 -->
    <div class="table-box">
      <el-table
        class="my-table"
        :data="usersList"
        style="width: 100%"
        :header-cell-style="{background:'#eef1f6'}"
      >
        <el-table-column type="index" label="#" width="100"></el-table-column>
        <el-table-column prop="registe_time" label="注册日期" width="300"></el-table-column>
        <el-table-column prop="username" label="用户姓名" width="300"></el-table-column>
        <el-table-column prop="city" label="注册地址"></el-table-column>
      </el-table>
      <!-- 页码 -->
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
     
        :page-size="sendData.limit"
        layout="total, prev, pager, next"
        :total="count"
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
      usersList: [],
      count: 0,
      pageSize: "",
      sendData: {
        limit: 20,
        offset: 0
      }
    };
  },
  methods: {
    async showData(){
   //数据获取
    let res = await this.$axios.get("v1/users/list",{params:this.sendData} );
    // console.log(res);
    this.usersList = res.data;
    //总页数
    let rea = await this.$axios.get("v1/users/count");
    // console.log(rea);
    this.count = rea.data.count;
    },
    handleSizeChange(size) {
     this.sendData.limit=size;
      this.showData();
    },
    handleCurrentChange(num) {
      if(num>1){
    this.sendData.offset=num*20
      }else(
        this.sendData.offset=20
      )
 
       this.showData();
    }
  },
  async created() {
   this.showData();
 
  }
};
</script>

<style lang="scss">
.table-box {
  padding: 0 20px;
  .my-table {
    border: 1px solid #eee;
    color: black;
    .cell {
      color: black;
    }
  }
  .my-page {
    margin-top: 20px;
  }
}
</style>
