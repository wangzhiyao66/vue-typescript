<template>
  <div class="project">
    <el-row type="flex" class="row-bg" justify="space-between">
      <el-col :span="12">
        <div class="grid-content left">
          <el-button type="primary" size="small" plain @click="newProject()">新增</el-button>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content right">
          <span class="role-label">项目角色：</span>
          <el-select v-model="setlectRole" size="small" clearable placeholder="请选择">
            <el-option v-for="item in RoleOptions" :key="item.value" :label="item.label" :value="item.value"> </el-option>
          </el-select>
        </div>
      </el-col>
    </el-row>
    <div class="p-table">
      <el-table :data="tableData" max-height="80%" border style="width: 100%" class="cost_table">
        <el-table-column prop="name" label="项目名称" width="180">
          <template slot-scope="scope">
            <span class="title">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="创建时间" width="180"> </el-table-column>
        <el-table-column prop="address" label="类别"> </el-table-column>
        <el-table-column prop="address" label="创建人"> </el-table-column>
      </el-table>
    </div>
    <!-- 新增弹窗 -->
    <el-dialog title="新建项目" :visible.sync="dialogVisible" width="30%" center :close-on-click-modal="false">
      <el-form ref="form" :model="createform" label-width="80px">
        <el-form-item label="项目名称">
          <el-input v-model="createform.name"></el-input>
        </el-form-item>
        <el-form-item label="项目类型">
          <el-select v-model="createform.type" placeholder="请选择活动区域">
            <el-option label="PS" value="PS"></el-option>
            <el-option label="TSS" value="TSS"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="项目经理">
          <el-input v-model="createform.author"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button size="medium" @click="cancle()">取 消</el-button>
        <el-button size="medium" type="primary" @click="onSure()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";

@Component({
  name: "project",
  components: {}
})
export default class extends Vue {
  private tableData: any = [
    {
      date: "2016-05-03",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    },
    {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    },
    {
      date: "2016-05-04",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    },
    {
      date: "2016-05-01",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    },
    {
      date: "2016-05-08",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    },
    {
      date: "2016-05-06",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    },
    {
      date: "2016-05-07",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    }
  ];
  private RoleOptions = [
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
  ];
  public setlectRole: string = ""; // 选择的项目角色
  private dialogVisible: boolean = false; // 新增弹窗
  private createform = {
    name: "",
    type: "",
    author: ""
  };

  private created(): void {
    // console.log('created')
  }

  private mounted() {
    // console.log('mounted')
  }
  // 打开新增弹窗
  private newProject() {
    this.dialogVisible = true;
  }

  private handleClose() {
    // this.dialogVisible = false;
  }

  // 取消新增
  private cancle() {
    this.dialogVisible = false;
  }

  // 确认新建项目
  private onSure() {
    console.log("123", this.createform);
    this.dialogVisible = false;
  }
}
</script>

<style scoped lang="scss">
@import "../../sass/common";
//组件样式
.project {
  padding: pxToRem(24);

  .role-label {
    padding-right: pxToRem(10);
  }

  .p-table {
    margin-top: pxToRem(20);
  }

  .title {
    color: blue;
    cursor: pointer;
  }
}
</style>

<style lang="scss">
@import "../../sass/truncate";
//全局样式
.cost_table {
  .el-table__header-wrapper tr {
    background: #3f4659 !important;
    height: 32px !important;
    font-size: 14px;
    td,
    th {
      background: #3f4659 !important;
      padding: 0px !important;
      font-family: MicrosoftYaHeiUI;
      font-size: 14px;
      color: #ffffff;
      letter-spacing: 0;
      @include truncate();
      // 不换行
      div {
        text-align: center;
        @include truncate();
      }
    }
  }
  tbody tr {
    td,
    th {
      padding: 0px !important;
      font-family: MicrosoftYaHeiUI;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.9);
      letter-spacing: 0;
      height: 35px;
      line-height: 35px;
      @include truncate();
      // 不换行
      div {
        height: 35px !important;
        line-height: 35px !important;
        width: 100%;
        text-align: center;
        @include truncate();
      }
    }
  }
}
// 表格边框颜色
.el-table--border td,
.el-table--border th,
.el-table__body-wrapper .el-table--border.is-scrolling-left ~ .el-table__fixed {
  border-right: 1px solid rgba($color: #949eb6, $alpha: 0.25);
}

// 表格边框颜色
.ltbpredicton td,
.ltbpredicton th.is-leaf {
  border-bottom: 1px solid rgba($color: #949eb6, $alpha: 0.25);
}
</style>
