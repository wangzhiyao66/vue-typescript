<template>
  <!--外层容器-->
  <el-container class="app-container">
    <div class="left-menu">
      <Sidebar></Sidebar>
      <!-- <SubMenu></SubMenu> -->
      <!-- <Menus></Menus> -->
    </div>
    <div class="content">
      <app-main></app-main>
    </div>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppMain from "./components/AppMain.vue";
import Sidebar from "./components/Sidebar.vue";
import Menus from "./components/Menus.vue";
@Component({
  name: "layout",
  components: {
    Sidebar,
    AppMain,
    Menus
  }
})
export default class Layout extends Vue {}
</script>
<style scoped lang="scss">
@import "../../sass/mixin";
.app-container {
  width: 100%;
  height: 100%;

  .left-menu {
    height: 100%;
    width: 208px;
    // width: 40%;
    float: left;
    @include clearfix();
    overflow-x: hidden;
    overflow-y: auto;
  }

  .content {
    float: left;
    width: calc(100% - 210px);
    // width: 60%;
    @include clearfix();
  }
}
</style>
<style lang="scss"></style>
