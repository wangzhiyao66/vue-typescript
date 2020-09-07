<template>
  <div class="input-select"></div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";

@Component({
  name: "select",
  components: {}
})
export default class extends Vue {
  @Prop({ default: "", required: true }) value: string | undefined;

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
</style>

<style lang="scss">
//全局样式
</style>
