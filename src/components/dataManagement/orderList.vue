<template>
  <div>
    <my-bread breadOne="数据管理" breadTwo="订单列表"></my-bread>
    <!-- 表格 -->
    <div class="table-box">
      <el-table :data="orderList" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="用户名">
                <span>{{ props.row.user_id }}</span>
              </el-form-item>
              <el-form-item label="店铺名称">
                <span>{{ props.row.restaurant_name }}</span>
              </el-form-item>
              <el-form-item label="收货地址">
                <span></span>
              </el-form-item>
              <el-form-item label="店铺 ID">
                <span>{{ props.row.restaurant_id }}</span>
              </el-form-item>
              <el-form-item label="店铺地址">
                <span></span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="订单ID" prop="unique_id"></el-table-column>
        <el-table-column label="总价格" prop="total_amount"></el-table-column>
        <el-table-column label="订单状态" prop="status_bar.title"></el-table-column>
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
      orderList: [],
        sendData: {
        limit: 20,
        offset: 0
      },
      count:''
    };
  },
  methods: {
    async showData() {
      //数据获取
      let res = await this.$axios.get("bos/orders", {
        params: this.sendData
      });
      // console.log(res);
      this.orderList = res.data;
      //总页数
      let rea = await this.$axios.get("bos/orders/count");
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
