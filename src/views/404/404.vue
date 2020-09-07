<template>
  <div>
    <h1>404</h1>
    <div>{{ data }}</div>
  </div>
</template>
<style scoped lang="scss"></style>
<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";

@Component({
  name: "404",
  components: {}
})
export default class extends Vue {
  // @Prop({ default: "" }) prop: any;
  /*---Data Start---*/
  private data: any = "未找到页面";
  /*---Data End---*/

  /*---Lifecycle Start---*/
  private created(): void {
    // console.log('created')
  }

  private mounted() {
    // console.log('mounted')
  }
  /*---Lifecycle End---*/

  /*---Action Start---*/
  // private changeData() {
  //   this.data += 1;
  // }

  // /*---Action End---*/

  // get dataAdd() {
  //   return this.data + 1;
  // }

  // @Watch("data")
  // changeTxt(newTxt: string, oldTxt: string) {
  //   console.log(`change data: ${oldTxt} to ${newTxt}`);
  // }
}
</script>

<style scoped lang="scss">
//组件样式
</style>

<style lang="scss">
//全局样式
</style>
