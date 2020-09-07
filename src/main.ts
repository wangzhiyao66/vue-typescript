import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import API from './config/api' // API 集成
import { ApiConfig } from './config/Apiconfig'
import './plugins/element.js'    // element组件注入
import '@/sass/index.scss'     // 全局样式主入口
import '@/utils/autoRem.ts' // 动态计算 页面大小
import Clickoutside from "element-ui/src/utils/clickoutside";

// Vue 原型上 做内容扩展
declare module 'vue/types/vue' {
  interface Vue {
    $api: ApiConfig,
  }
}
Vue.prototype.$api = API;

// ----  end -------
Vue.config.productionTip = false;

// 注册 全局指令
Vue.directive("Clickoutside", Clickoutside);

// 清除 console 语句
if (process.env.NODE_ENV === 'production') {
  ['log', 'warn', 'info', 'table', 'group', 'time', 'timeEnd'].map((x: string) => {
    (console as any)[x] = function () { };
  });
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
