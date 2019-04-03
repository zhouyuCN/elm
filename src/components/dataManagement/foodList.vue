<template>
  <div>
    <my-bread breadOne="数据管理" breadTwo="食品列表"></my-bread>
    <!-- 表格 -->
    <div class="table-box">
      <el-table :data="foodList" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="食品名称">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="餐馆名称">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="食品 ID">
                <span>{{ props.row.category }}</span>
              </el-form-item>
              <el-form-item label="餐馆 ID">
                <span>{{ props.row.item_id }}</span>
              </el-form-item>
              <el-form-item label="食品介绍">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="餐馆地址">
                <span></span>
              </el-form-item>
              <el-form-item label="食品评分">
                <span>{{ props.row.rating }}</span>
              </el-form-item>
              <el-form-item label="食品分类">
                <span></span>
              </el-form-item>
              <el-form-item label="月销量">
                <span>{{ props.row.rating_count }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="食品名称" prop="name"></el-table-column>
        <el-table-column label="食品介绍" prop="pinyin_name"></el-table-column>
        <el-table-column label="评分" prop="rating"></el-table-column>
        <el-table-column label="操作" prop="desc" width="300">
          <el-button size="mini" type="success">编辑</el-button>
          <el-button size="mini" type="danger">删除</el-button>
        </el-table-column>
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
  name: "shopLsit",
  data() {
    return {
      foodList: [],
      sendData: {
        limit: 20,
        offset: 0,
        restaurant_id:''
      },
      count: ""
    };
  },
  methods: {
    async showData() {
      //数据获取
      let res = await this.$axios.get("shopping/v2/foods", {
        params: this.sendData
      });
      // console.log(res);
      this.foodList = res.data;
      //总页数
      let rea = await this.$axios.get("shopping/v2/foods/count");
      // console.log(rea);
      this.count = rea.data.count;
    },
    handleSizeChange(size) {
      this.sendData.limit = size;
      this.showData();
    },
    handleCurrentChange(num) {
      if (num > 1) {
        this.sendData.offset = num * 20;
      } else this.sendData.offset = 20;

      this.showData();
    }
  },
  async created() {
    this.showData();
  }
};
</script>

<style lang="scss">
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
