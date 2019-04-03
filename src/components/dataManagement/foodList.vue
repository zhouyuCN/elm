<template>
  <div>
    <my-bread breadOne="数据管理" breadTwo="食品列表"></my-bread>
    <!-- 表格 -->
    <div class="table-box">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="食品名称">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="餐馆名称">
                <span>{{ props.row.shop }}</span>
              </el-form-item>
              <el-form-item label="食品 ID">
                <span>{{ props.row.id }}</span>
              </el-form-item>
              <el-form-item label="餐馆 ID">
                <span>{{ props.row.shopId }}</span>
              </el-form-item>
              <el-form-item label="食品介绍">
                <span>{{ props.row.category }}</span>
              </el-form-item>
              <el-form-item label="餐馆地址">
                <span>{{ props.row.address }}</span>
              </el-form-item>
              <el-form-item label="食品评分">
                <span>{{ props.row.desc }}</span>
              </el-form-item>
              <el-form-item label="食品分类">
                <span>{{ props.row.desc }}</span>
              </el-form-item>
              <el-form-item label="月销量">
                <span>{{ props.row.desc }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="食品名称" prop="id"></el-table-column>
        <el-table-column label="食品介绍" prop="name"></el-table-column>
        <el-table-column label="评分" prop="desc"></el-table-column>
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
  name: "shopLsit",
  data() {
    return {
      tableData: [
        {
          id: "12987122",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        },
        {
          id: "12987123",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        },
        {
          id: "12987125",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        },
        {
          id: "12987126",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        }
      ]
    };
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
