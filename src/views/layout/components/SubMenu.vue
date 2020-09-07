<template>
  <div class="sub_menu_box">
    <template>
      <el-menu-item @click="showSubMenu()">
        <i :class="ItemData.icon"></i>
        <span slot="title">{{ ItemData.title }}</span>

        <span style="float: right; margin-right: 20px">
          <i class="el-icon-caret-top" v-if="showChild"></i>
          <i class="el-icon-caret-bottom" v-else></i>
        </span>
      </el-menu-item>
    </template>
    <template v-if="showChild">
      <el-menu-item-group v-for="item in ItemData.children" :key="'menu_' + item.title">
        <SubMenu v-if="item.children" :ItemData="item" :key="'menu_' + item.title" :name="item.title">
          <el-menu-item></el-menu-item>
        </SubMenu>

        <el-menu-item v-else :key="item.title" :index="item.title + '_item'">
          <i :class="item.icon"></i>
          <span slot="title">{{ item.title }}</span>
          <!-- <span style="float: right; margin-right: 20px;visibility: hidden;">
            <i class="el-icon-caret-top"></i>
          </span> -->
        </el-menu-item>
      </el-menu-item-group>
    </template>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";

@Component({
  name: "SubMenu",
  components: {}
})
export default class extends Vue {
  @Prop({ default: {}, required: true }) ItemData: object | undefined;
  public showChild: boolean = false;
  private created(): void {
    // console.log("created");
  }

  private mounted() {
    // console.log("mounted");
  }

  public showSubMenu() {
    this.showChild = !this.showChild;
  }
}
</script>

<style scoped lang="scss">
//组件样式
.sub_menu_box {
  width: 100%;
  height: 100%;
  // border: 1px solid red;
  margin-left: 20px;
}
</style>

<style lang="scss">
//全局样式
</style>
