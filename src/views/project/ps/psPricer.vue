<template>
  <div class="pricer">
    <p class="title">PS Pricer</p>
    <div class="pricer-table">
      <table>
        <thead>
          <tr>
            <td>项目名称</td>
            <td>项目总收入(含税)</td>
            <td>项目总收入(不含税)</td>
            <td>项目总成本(不含税)</td>
            <td>项目GP</td>
            <td>项目GP%</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ data.name }}</td>
            <td>{{ data.priceIncludedY }}</td>
            <td>{{ data.priceIncludedN }}</td>
            <td>{{ data.projectCost }}</td>
            <td>{{ data.projectGP }}</td>
            <td>{{ data.projectGPPercentage }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "psPricer",
  components: {}
})
export default class extends Vue {
  private data = {
    name: "搬迁服务项目",
    priceIncludedY: "100000",
    priceIncludedN: "92000",
    projectCost: "80000",
    projectGP: "20000",
    projectGPPercentage: "12%"
  };

  private created(): void {
    // console.log('created')
  }

  private mounted() {
    // console.log('mounted')
  }
}
</script>

<style scoped lang="scss">
//组件样式
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
</style>

<style lang="scss">
//全局样式
</style>
