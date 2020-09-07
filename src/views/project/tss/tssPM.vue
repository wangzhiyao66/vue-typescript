<template>
  <div class="pricer">
    <p class="title">TSS PM</p>
    <el-row>
      <el-col :span="24">
        <div class="left">
          <el-button type="primary" size="small" plain @click="onSave()">保存</el-button>
        </div>
      </el-col>
    </el-row>
    <div class="pricer-table">
      <table>
        <thead>
          <tr>
            <td>项目名称</td>
            <td>单位</td>
            <td>数量</td>
            <td>项目总成本(不含税)</td>
            <td>项目GP%</td>
            <td>产品经理价(不含税)</td>
            <td>税率</td>
            <td>产品经理价(含税)</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ data.name }}</td>
            <td>{{ data.company }}</td>
            <td>{{ data.number }}</td>
            <td>{{ data.projectCost }} 元</td>
            <td><input class="input_info" type="number" min="0" v-model="data.projectGPPercentage" />%</td>
            <td>{{ data.pricerPMN }} 元</td>
            <td><input class="input_info" type="number" min="0" v-model="data.taxRate" />%</td>
            <td>{{ data.pricerPMY }} 元</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "tssPM",
  components: {}
})
export default class extends Vue {
  private data = {
    name: "搬迁服务项目",
    company: "包",
    number: 4,
    projectCost: "80000",
    projectGPPercentage: 12,
    pricerPMN: "20000",
    taxRate: 6,
    pricerPMY: "30000"
  };

  private created(): void {
    // console.log('created')
  }

  private mounted() {
    // console.log('mounted')
  }

  private onSave() {
    console.log("save");
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
    width: 80%;
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

.input_info {
  height: 26px;
  width: 45px;
  border: 1px solid #ddd;
  text-indent: 5px;
  margin-right: 5px;
}
</style>

<style lang="scss">
//全局样式
</style>
