<template>
  <div>
    <!-- 面包屑 -->
    <my-bread breadOne="添加数据" breadTwo="添加商铺"></my-bread>
    <!-- 表格 -->
    <el-row>

      <el-col :span="14" :offset="3">
        <div class="tibleBox">
          <el-form ref="addShopFrom" :model="addShopFrom" label-width="140px">
            <el-form-item label="店铺名称">
              <el-input v-model="addShopFrom.name"></el-input>
            </el-form-item>

            <el-form-item label="详细地址">
              <el-input v-model="addShopFrom.name"></el-input>
            </el-form-item>

            <el-form-item label="联系电话">
              <el-input v-model="addShopFrom.name"></el-input>
            </el-form-item>

            <el-form-item label="店铺简介">
              <el-input v-model="addShopFrom.name"></el-input>
            </el-form-item>

            <el-form-item label="店铺标语">
              <el-input v-model="addShopFrom.name"></el-input>
            </el-form-item>

            <el-form-item label="店铺特点">
              <span>品牌</span>
              <el-switch v-model="addShopFrom.delivery"></el-switch>

              <span>蜂鸟专送</span>
              <el-switch v-model="addShopFrom.delivery"></el-switch>

              <span>新开店铺</span>
              <el-switch v-model="addShopFrom.delivery"></el-switch>

              <span>外卖保</span>
              <el-switch v-model="addShopFrom.delivery"></el-switch>

              <span>准时达</span>
              <el-switch v-model="addShopFrom.delivery"></el-switch>

              <span>开发票</span>
              <el-switch v-model="addShopFrom.delivery"></el-switch>
            </el-form-item>

            <el-form-item label="配送费">
              <el-input-number controls-position="right" v-model="num4"></el-input-number>
            </el-form-item>

            <el-form-item label="起送价">
              <el-input-number controls-position="right" v-model="num4"></el-input-number>
            </el-form-item>

            <el-form-item label="营业时间">
              <el-col :span="11">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="addShopFrom.date1"
                  style="width: 100%;"
                ></el-date-picker>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-time-picker placeholder="选择时间" v-model="addShopFrom.date2" style="width: 100%;"></el-time-picker>
              </el-col>
            </el-form-item>

            <el-form-item label="上传店铺头像">
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>

            <el-form-item label="上传营业执照">
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>

            <el-form-item label="上传餐饮服务许可证">
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>

            <el-form-item label="优惠活动">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>

            <el-table
              class="my-table"
              :data="tableData"
              style="width: 100%"
              :header-cell-style="{background:'#eef1f6'}"
            >
              <el-table-column prop="date" label="活动标题" width="180"></el-table-column>
              <el-table-column prop="name" label="活动名称" width="180"></el-table-column>
              <el-table-column prop="address" label="活动详情"></el-table-column>
              <el-table-column prop="address" label="操作"></el-table-column>
            </el-table>

            <el-form-item class="my-btn">
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>

    </el-row>
  </div>
</template>

<script>
export default {
  name: "addStop",
  data() {
    return {
      //表单数据
      addShopFrom: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        //计数器
        num4: 1,
        //图片路径
        imageUrl: ""
      },
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "选项4"
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },

    //上传
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
    //******************************************** */
  }
};
</script>

<style lang="scss">
.colBox{
    width: 200px;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  .el-upload:hover {
    border-color: #409eff;
  }
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
