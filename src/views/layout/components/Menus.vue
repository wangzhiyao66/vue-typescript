<template>
  <div class="menu-box">
    <h5>自定义颜色</h5>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <template v-for="item in menuList">
        <div :key="'menu_' + item.title">
          <!-- <el-submenu v-if="item.children.length > 0" :key="item.title" :index="item.title + '_submenu'"> </el-submenu> -->
          <SubMenu v-if="item.children.length > 0" :ItemData="item" :key="'menu_' + item.title" :name="'menu_' + item.title">
            <el-menu-item></el-menu-item>
          </SubMenu>
          <el-menu-item v-else :key="item.title" :index="item.title + '_item'">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
            <!-- <span style="float: right; margin-right: 20px;visibility: hidden;">
              <i class="el-icon-caret-top"></i>
            </span> -->
          </el-menu-item>
        </div>
      </template>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import SubMenu from "./SubMenu.vue";
@Component({
  name: "Menus",
  components: {
    SubMenu
  }
})
export default class extends Vue {
  // @Prop({ default: [], required: true }) data: Array<any> | undefined;
  public menuList = [
    {
      title: "1111",
      icon: "el-icon-location",
      children: [
        { title: "11-11", icon: "el-icon-location" },
        { title: "11-22", icon: "el-icon-location" },
        { title: "11-33", icon: "el-icon-location" }
      ]
    },
    {
      title: "2222",
      icon: "el-icon-menu",
      children: [
        { title: "22-11", icon: "el-icon-menu" },
        {
          title: "22-22",
          icon: "el-icon-edit",
          children: [
            { title: "22-22-11", icon: "el-icon-edit" },
            { title: "22-22-22", icon: "el-icon-edit" },
            { title: "22-22-33", icon: "el-icon-edit" }
          ]
        }
      ]
    },
    {
      title: "3333",
      icon: "el-icon-document",
      children: [
        { title: "33-11", icon: "el-icon-document" },
        {
          title: "33-22",
          icon: "el-icon-document",
          children: [
            { title: "33-22-11", icon: "el-icon-edit", children: [{ title: "33-22-11-11", icon: "el-icon-edit" }] },
            { title: "33-22-22", icon: "el-icon-edit" },
            { title: "33-22-33", icon: "el-icon-edit" }
          ]
        }
      ]
    },
    { title: "4444", icon: "el-icon-setting", children: [] }
  ];

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
.menu-box {
  width: 100%;
  height: 100%;
  // background-color: peru;
}
</style>

<style lang="scss">
//全局样式
</style>
