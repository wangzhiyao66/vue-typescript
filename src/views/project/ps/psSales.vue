<template>
  <div class="pricer">
    <p class="title">PS Sales</p>
    <el-row>
      <el-col :span="24">
        <div class="left">
          <el-button type="primary" size="small" plain @click="onAdd()">添加收入项</el-button>
          <el-button type="primary" size="small" plain @click="onSave()">保存</el-button>
        </div>
      </el-col>
    </el-row>
    <div class="pricer-table">
      <table>
        <thead>
          <tr>
            <td>名称</td>
            <td style="width:100px;">单位</td>
            <td style="width:100px;">数量</td>
            <td style="width:100px;">单价</td>
            <td>含税金额</td>
            <td style="width:90px;">税率</td>
            <td>不含税金额</td>
            <td style="width:200px;">备注</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, index) in dataList" :key="data.name + index">
            <td><input class="input_name" type="text" maxlength="100" v-model="data.name" /></td>
            <td><input class="input_info" type="number" min="0" v-model="data.company" /></td>
            <td><input class="input_info" type="number" min="0" v-model="data.number" /></td>
            <td><input class="input_info" type="number" min="0" v-model="data.pricer" /></td>
            <td>{{ data.moneyY }} 元</td>
            <td><input class="input_info" type="number" min="0" v-model="data.taxRate" />%</td>
            <!-- <td><input class="input_info" type="number" v-model="data.projectGPPercentage" />%</td> -->
            <td>{{ data.moneyN }} 元</td>
            <td><input class="input_name" type="text" maxlength="100" v-model="data.remarks" /></td>
          </tr>
        </tbody>
      </table>
    </div>
    <el-row class="cost">
      <el-col :span="8">
        <div class="left">
          <p>项目总收入（不含税）： {{ this.prujectSUMN }} 元</p>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="left">
          <p>项目总收入（含税）： {{ this.prujectSUMY }} 元</p>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="left"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";

@Component({
  name: "psSales",
  components: {}
})
export default class extends Vue {
  private dataList = [
    {
      name: "搬迁服务项目",
      company: "包",
      number: 2,
      pricer: "60000",
      moneyY: 120000,
      taxRate: 6,
      moneyN: 100000,
      remarks: ""
    }
  ];
  private prujectSUMY = 120000;
  private prujectSUMN = 100000;
  private created(): void {
    // console.log('created')
  }

  private mounted() {}

  private onSave() {
    console.log("save");
  }
  private onAdd() {
    this.dataList.push({
      name: "搬迁服务项目",
      company: "包",
      number: 2,
      pricer: "60000",
      moneyY: 120000,
      taxRate: 6,
      moneyN: 100000,
      remarks: ""
    });
  }

  @Watch("dataList", { deep: true })
  changeTxt(newTxt: string, oldTxt: string) {
    let num = 0,
      num1 = 0;
    this.dataList.forEach(el => {
      if (typeof el.moneyY == "number") {
        num = num + Number(el.moneyY);
        num1 = num1 + Number(el.moneyN);
      }
    });
    this.prujectSUMY = num;
    this.prujectSUMN = num1;
    console.log("mounted", this.prujectSUMY, this.dataList.length);
  }
}
</script>

<style scoped lang="scss">
//组件样式
.left {
  text-align: left;
}

.right {
  text-align: right;
}
.pricer {
  width: 100%;
  height: 100%;
  padding: 24px;
  background: #fff;
}

.title {
  font-size: 16px;
  color: black;
  letter-spacing: 1px;
  text-align: left;
  margin-bottom: 20px;
}

.pricer-table {
  margin-top: 20px;

  table {
    width: 90%;
    tr {
      td {
        height: 35px;
        border: 1px solid #ddd;
      }
    }
    thead {
      tr {
        background: rgba($color: #000000, $alpha: 0.8);

        td {
          color: #fff;
          border: none;
          // border: 1px solid rgba($color: #000000, $alpha: 0.8);
        }
      }
    }
  }
}

.input_info,
.input_name {
  height: 26px;
  width: 70%;
  border: 1px solid #ddd;
  text-indent: 5px;
  margin-right: 5px;
}

.input_name {
  width: 95%;
}

.cost {
  margin-top: 10px;
  p {
    font-weight: bold;
    font-size: 16px;
  }
}
</style>

<style lang="scss">
//全局样式
</style>
