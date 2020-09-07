<template>
  <div>
    <h1>empty page</h1>
    <div>{{ data }}</div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";

@Component({
  name: "templatePage",
  components: {}
})
export default class extends Vue {
  @Prop({ default: "" }) prop: any;
  /*---Data Start---*/
  private data: any = "123";

  /*---Lifecycle Start---*/
  private created(): void {
    // console.log('created')
  }

  private mounted() {
    // console.log('mounted')
  }

  /*---Action Start---*/
  private changeData() {
    this.data += 1;
  }

  /*---Computed Start---*/
  get dataAdd() {
    return this.data + 1;
  }

  /*---Watch Start---*/
  @Watch("data")
  changeTxt(newTxt: string, oldTxt: string) {
    console.log(`change data: ${oldTxt} to ${newTxt}`);
  }
}
</script>

<style scoped lang="scss">
//组件样式
</style>

<style lang="scss">
//全局样式
</style>
