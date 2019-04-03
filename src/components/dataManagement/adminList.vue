<template>
  <div>
    <my-bread breadOne="数据管理" breadTwo="管理员列表"></my-bread>
    <!-- 表格 -->
    <div class="table-box">
      <el-table
        class="my-table"
        :data="adminList"
        style="width: 100%"
        :header-cell-style="{background:'#eef1f6'}"
      >
        <el-table-column prop="user_name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="create_time" label="注册日期" width="180"></el-table-column>
        <el-table-column prop="city" label="地址"></el-table-column>
        <el-table-column prop="admin" label="权限"></el-table-column>
      </el-table>
      <!-- 页码 -->
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
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
      count:'',
      adminList: [],
      sendData: {
        limit: 20,
        offset: 0
      }
    };
  },
  methods: {
   async showData(){
     let res = await this.$axios.get('admin/all',{params:this.sendData})
    //  console.log(res);
    this.adminList=res.data.data;
       let rea = await this.$axios.get('admin/count')
     this.count=rea.data.count;
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

  created() {
    this.showData();
  },
};
</script>

<style lang="scss">
</style>
