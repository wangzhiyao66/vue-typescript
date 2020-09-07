<template>
  <div class="sidebar-box">
    <el-row class="tac">
      <el-col :span="24" class="tac_menu">
        <!-- <h5>自定义颜色</h5> -->
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="0">
            <!-- <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">项目池</span>
            </template> -->
            <router-link to="/project"><span class="text">项目池</span></router-link>
          </el-menu-item>
          -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>PS 模型</span>
            </template>

            <el-menu-item-group>
              <!-- <template slot="title">分组一</template> -->
              <el-menu-item index="1-1">
                <router-link to="/PS-Cost"><span class="text">成本项</span></router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link to="/PS-Sales"><span class="text">项目Sales</span></router-link>
              </el-menu-item>
              <el-menu-item index="1-3">
                <router-link to="/PS-Pricer"><span class="text">项目总计</span></router-link>
              </el-menu-item>
              <!-- <el-menu-item index="1-1">成本项</el-menu-item> -->
              <!-- <el-menu-item index="1-2">项目GP</el-menu-item> -->
              <!-- <el-menu-item index="1-3">项目总计</el-menu-item> -->
            </el-menu-item-group>
            <!-- <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group> -->
            <!-- <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu> -->
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>TSS模型</span>
            </template>

            <el-menu-item-group>
              <el-menu-item index="2-1">
                <router-link to="/TSS-Cost"><span class="text">成本项</span></router-link>
              </el-menu-item>
              <el-menu-item index="2-2">
                <router-link to="/TSS-PM"><span class="text">PM</span></router-link>
              </el-menu-item>
              <el-menu-item index="2-3">
                <router-link to="/TSS-Sales"><span class="text">项目Sales</span></router-link>
              </el-menu-item>
              <el-menu-item index="2-4">
                <router-link to="/TSS-Pricer"><span class="text">项目总计</span></router-link>
              </el-menu-item>
              <!-- <template slot="title">分组一</template> -->
              <!-- <el-menu-item index="2-1">成本项</el-menu-item>
              <el-menu-item index="2-2">项目GP</el-menu-item>
              <el-menu-item index="2-3">项目总计</el-menu-item> -->
            </el-menu-item-group>
          </el-submenu>

          <!-- <el-menu-item index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">TSS模型</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-menu-item> -->
          <!-- <el-menu-item index="3">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </template>
          </el-menu-item>
          <el-menu-item index="4">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </template>
          </el-menu-item> -->
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  name: "Sidebar",
  components: {}
})
export default class extends Vue {
  private data: string = "";

  private created(): void {
    // console.log("created");
  }
  private mounted() {
    // console.log("mounted");
  }
  public handleOpen(key: any, keyPath: any) {
    console.log(key, keyPath);
  }
  public handleClose(key: any, keyPath: any) {
    console.log(key, keyPath);
  }
}
</script>

<style scoped lang="scss">
//组件样式
.sidebar-box {
  width: 100%;
  height: 100%;
  background-color: rgb(84, 92, 100);

  .tac,
  .tac_menu,
  .el-menu-vertical-demo {
    height: 100%;
  }
}

.text {
  color: #fff;
}
</style>

<style lang="scss">
//全局样式
</style>
