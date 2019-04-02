<template>
  <div class="loginBox">
    <div class="loginForm">
        <h2>用户登入</h2>
      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-form-item label="用户名称">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="登入密码">
          <el-input v-model="formLabelAlign.region"></el-input>
        </el-form-item>
        <el-form-item class="login-btn">
          <el-button type="primary">登入</el-button>
          <el-button type="danger">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      labelPosition: "top",
      formLabelAlign: {
        name: "",
        region: "",
        type: ""
      }
    };
  }
};
</script>

<style lang="scss">
.loginBox{
    height: 100%;
    background: url('../assets/images/beijing.jpg') no-repeat center ;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .loginForm{
        width: 300px;
        height: 360px;
        background-color:rgba($color: #fff, $alpha: .3);
           box-shadow:  0 0 5px #fff;
        padding: 20px 70px;
        .el-form-item__label{
            color: #333;
        }
        .login-btn{
            margin-top: 30px;
        }
        h2 {
            text-align: center;
            color: #333;
        }

    }
}
</style>
