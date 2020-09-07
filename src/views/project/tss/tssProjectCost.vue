<template>
  <div class="pricer">
    <p class="title">TSS Cost</p>
    <el-row>
      <el-col :span="24">
        <div class="left">
          <el-button type="primary" size="small" plain @click="onAdd()">添加收入项</el-button>
          <el-button type="primary" size="small" plain @click="onSave()">保存</el-button>
        </div>
      </el-col>
    </el-row>
    <div class="pricer-table">
      <el-table :data="dataList" :border="true" style="width: 100%" :height="250" class="cost_table">
        <el-table-column prop="externalMining" label="成本类型" width="90" :resizable="false">
          <template slot-scope="scope">
            <el-select v-model="scope.row.externalMining" placeholder="请选择" size="mini">
              <el-option v-for="item in externalMiningList" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="成本名称" :resizable="false">
          <template slot-scope="scope">
            <input class="input_name" type="text" maxlength="100" v-model="scope.row.name" />
          </template>
        </el-table-column>
        <el-table-column prop="company" label="单位" width="100" :resizable="false">
          <template slot-scope="scope">
            <el-select v-model="scope.row.company" placeholder="请选择" size="mini">
              <el-option v-for="item in companyList" :key="item.value" :label="item.label" :value="item.value"> </el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="number" label="数量" width="140" :resizable="false">
          <template slot-scope="scope">
            <input class="input_name" type="number" min="0" v-model="scope.row.number" />
          </template>
        </el-table-column>
        <el-table-column prop="pricer" label="税率" width="140" :resizable="false">
          <template slot-scope="scope">
            <input class="input_name" type="number" min="0" v-model="scope.row.pricer" />
          </template>
        </el-table-column>
        <el-table-column prop="money" label="单位成本(含税)" width="140" :resizable="false"> </el-table-column>
        <el-table-column prop="money" label="单位成本(不含税)" width="140" :resizable="false"> </el-table-column>
        <el-table-column prop="money" label="成本合计(不含税)" width="140" :resizable="false"> </el-table-column>
        <el-table-column prop="remarks" label="备注" :resizable="false">
          <template slot-scope="scope">
            <input class="input_name" type="text" maxlength="100" v-model="scope.row.remarks" />
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-row class="cost">
      <el-col :span="24">
        <div class="left">
          <p>成本项共 {{ dataList.length }} 条 , 成本项总计： {{ this.prujectSUM }} 元</p>
        </div>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <div class="params">
      <p class="title">成本参数</p>
      <div class="param-table">
        <table>
          <thead>
            <tr>
              <td style="width:130px;">类别</td>
              <td style="width:40%;">参数</td>
              <td style="width:130px;">成本</td>
              <td>备注</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>风险金</td>
              <td class="params-text">
                <el-row>
                  <el-col :span="12">
                    <div class="left">
                      风险概率：
                      <input class="input_info" type="number" min="0" v-model="data.taxRate" />
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="left">
                      严重性：
                      <input class="input_info" type="number" min="0" v-model="data.taxRate" />
                    </div>
                  </el-col>
                </el-row>
                <el-row style="margin-top:10px">
                  <el-col :span="12">
                    <div class="left">
                      默认风险金比率：
                      <input class="input_info" type="number" min="0" v-model="data.taxRate" />%
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="left">
                      自定义风险金比率：
                      <input class="input_info" type="number" min="0" v-model="data.taxRate" />%
                    </div>
                  </el-col>
                </el-row>
              </td>
              <td>0</td>
              <td><input class="input_name" type="text" min="0" v-model="data.remarks" /></td>
            </tr>

            <tr>
              <td>资金占用成本</td>
              <td class="params-text">
                <el-row>
                  <el-col :span="8">
                    <div class="left">
                      WACC：
                      <input class="input_info" type="number" min="0" v-model="data.taxRate" />%
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="center">
                      资金占用：
                      <input class="input_info" type="number" min="0" v-model="data.taxRate" />元
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="right">
                      占用天数：
                      <input class="input_info" type="number" min="0" v-model="data.taxRate" />天
                    </div>
                  </el-col>
                </el-row>
              </td>
              <td>0</td>
              <td><input class="input_name" type="text" min="0" v-model="data.remarks" /></td>
            </tr>
            <tr>
              <td>通货膨胀成本</td>
              <td class="params-text">
                <el-row>
                  <el-col :span="12">
                    <div class="left">
                      通货膨胀率
                      <input class="input_info" type="number" min="0" v-model="data.taxRate" />%
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="right">
                      一年以上人天成本：
                      <input class="input_info" type="number" min="0" v-model="data.taxRate" />元
                    </div>
                  </el-col>
                </el-row>
              </td>
              <td>0</td>
              <td><input class="input_name" type="text" min="0" v-model="data.remarks" /></td>
            </tr>
            <tr>
              <td>管理系数</td>
              <td class="params-text"><input class="input_info" type="number" min="0" v-model="data.taxRate" />元</td>
              <td>0</td>
              <td><input class="input_name" type="text" min="0" v-model="data.remarks" /></td>
            </tr>
          </tbody>
        </table>
      </div>
      <el-row class="cost">
        <el-col :span="24">
          <div class="left">
            <p>成本项总计（不含税）： {{ this.prujectSUM }} 元</p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";

@Component({
  name: "tssProjectCost",
  components: {}
})
export default class extends Vue {
  private dataList = [
    {
      externalMining: "",
      type: "",
      name: "搬迁服务项目",
      company: "",
      number: 2,
      pricer: "60000",
      money: 120000,
      remarks: "",
      operation: ""
    }
  ];
  private prujectSUM = 120000;
  private externalMiningList = [
    {
      value: "01",
      label: "自有"
    },
    {
      value: "02",
      label: "外采"
    }
  ];
  private typeList = [
    {
      value: "01",
      label: "硬件"
    },
    {
      value: "02",
      label: "软件"
    },
    {
      value: "03",
      label: "服务"
    }
  ];
  private companyList = [
    {
      value: "01",
      label: "人/天"
    },
    {
      value: "02",
      label: "只"
    },
    {
      value: "03",
      label: "包"
    },
    {
      value: "04",
      label: "次"
    },
    {
      value: "05",
      label: "场"
    }
  ];
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
  private value1 = "";
  private date = "";

  private created(): void {
    // console.log('created')
  }

  private mounted() {}

  private onSave() {
    console.log("save");
  }
  private onAdd() {
    this.dataList.push({
      externalMining: "",
      type: "",
      name: "搬迁服务项目",
      company: "",
      number: 2,
      pricer: "60000",
      money: 120000,
      remarks: "",
      operation: ""
    });
  }
  private delect(index: number) {
    this.dataList.splice(index, 1);
  }

  // 数据监听
  @Watch("dataList", { deep: true })
  changeTxt(newTxt: string, oldTxt: string) {
    let num = 0,
      num1 = 0;
    this.dataList.forEach(el => {
      if (typeof el.money == "number") {
        num = num + Number(el.money);
      }
    });
    this.prujectSUM = num;
    console.log("mounted", this.prujectSUM, this.dataList.length);
  }
}
</script>
<style scoped lang="scss">
//组件样式
.left {
  text-align: left;
}

.center {
  text-align: center;
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
}

.input_info,
.input_name {
  height: 26px;
  width: 45px;
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
.param-table {
  width: 100%;
  margin-top: 20px;

  table {
    width: 100%;
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

.params-text {
  text-align: left;
  padding: 6px 10px;

  .open {
    color: blue;
    padding-right: 6px;
    cursor: pointer;
  }
}
</style>

<style lang="scss">
@import "../../../sass/truncate";
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
