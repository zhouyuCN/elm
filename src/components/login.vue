<template>
  <div class="loginBox">
    <transition name="el-zoom-in-center">
      <div class="loginForm" v-show="show">
        <h2>elm后台管理系统</h2>
        <el-form
          :label-position="labelPosition"
          label-width="80px"
          :rules="rules"
          ref="userlist"
          :model="userlist"
        >
          <el-form-item label="用户名称" prop="username">
            <el-input v-model="userlist.username"></el-input>
          </el-form-item>
          <el-form-item label="登入密码" prop="password">
            <el-input v-model="userlist.password"></el-input>
          </el-form-item>
          <el-form-item class="login-btn">
            <el-button type="primary" @click="userLogin('userlist')">登入</el-button>
            <el-button type="danger" @click="resetForm('userlist')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      //表单显示方式
      labelPosition: "top",
      show: false,
      userlist: {
        username: "",
        password: ""
      },
      // 表单验证
      rules: {
        username: [
          { required: true, message: " 请输入用户名", trigger: "blur" },
          { min: 4, max: 16, message: "长度在4-16个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: " 密码不能为空", trigger: "blur" },
          { min: 6, max: 16, message: "长度在6-16个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    async userLogin() {
      let res = await this.$axios.post("login", this.userlist);
      if (res.data.meta.status == 200) {
        this.$message.success(res.data.meta.msg);
        window.sessionStorage.setItem("token", res.data.data.token);
        this.$router.push("/");
      } else {
        this.$message.error(res.data.meta.msg);
      }
    },
    resetForm(userlist) {
      this.$refs[userlist].resetFields();
    }
  },
  mounted() {
    this.show = true;
  }
};
</script>

<style lang="scss">
.loginBox {
  height: 100%;
  background: url("../assets/images/beijing.jpg") no-repeat center;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .loginForm {
    width: 300px;
    height: 360px;
    background-color: rgba($color: #fff, $alpha: 0.3);
    box-shadow: 0 0 5px #fff;
    padding: 20px 70px;
    .el-form-item__label {
      color: #333;
    }
    .login-btn {
      margin-top: 30px;
    }
    h2 {
      text-align: center;
      color: #333;
    }
  }
}
</style>
