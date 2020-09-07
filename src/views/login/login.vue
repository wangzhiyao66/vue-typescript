<template>
  <div class="login-box">
    <div class="form">
      <p class="title-text">请选择项目类型和角色</p>
      <el-form :label-position="labelPosition" status-icon ref="formLabelAlign" label-width="80px" :model="formLabelAlign">
        <el-form-item label="项目类型">
          <el-select
            style="width:270px;"
            v-model="formLabelAlign.type"
            clearable
            placeholder="请选择项目类型"
            @change="changeRole(formLabelAlign.type)"
          >
            <el-option label="PS" value="ps"></el-option>
            <el-option label="TSS" value="tss"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="角色类型">
          <el-select style="width:270px;" v-model="formLabelAlign.role" clearable placeholder="请选择角色类型">
            <el-option v-for="role in roleList" :label="role.label" :value="role.value" :key="role.label"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-btn" @click="submitForm('formLabelAlign')">进入项目池</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
@Component({
  name: "login",
  components: {}
})
export default class extends Vue {
  private labelPosition = "left";
  // 表单初始化
  private formLabelAlign = {
    name: "",
    password: "",
    type: "",
    role: ""
  };

  // 角色列表
  private roleList = [
    { label: "项目经理", value: "PM" },
    { label: "产品经理", value: "QA" },
    { label: "销售人员", value: "Sales" },
    { label: "Pricer", value: "Pricer" }
  ];

  /*---Lifecycle Start---*/
  private created(): void {
    // console.log('created')
  }

  private mounted() {
    // console.log('mounted')
  }

  private submitForm() {
    if (this.formLabelAlign.type && this.formLabelAlign.role) {
      this.$router.push("/project");
    } else {
      this.$message({
        message: "项目类型和角色类型是必选",
        type: "error"
      });
    }
  }

  // 根据类别给定不同角色列表
  private changeRole(val: string) {
    console.log("val =", val);
    if (val == "tss") {
      this.roleList = [
        { label: "项目经理", value: "PM" },
        { label: "产品经理", value: "QA" },
        { label: "销售人员", value: "Sales" },
        { label: "Pricer", value: "Pricer" }
      ];
    } else {
      this.roleList = [
        { label: "项目经理", value: "PM" },
        { label: "销售人员", value: "Sales" },
        { label: "Pricer", value: "Pricer" }
      ];
      if (this.formLabelAlign.role == "QA") {
        this.formLabelAlign.role = "";
      }
    }
  }
}
</script>

<style scoped lang="scss">
//组件样式
.login-box {
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.title-text {
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 5px;
  text-align: left;
  padding-left: 80px;
  margin: 0 0 30px 0;
}
.form {
  width: 350px;
  background: #fff;
  text-align: center;
}
.login-btn {
  width: 270px;
  letter-spacing: 3px;
  text-align: center;
}
</style>

<style lang="scss">
//全局样式
</style>
