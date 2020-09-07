import Vue from 'vue'
import ElementUI from 'element-ui'
// import '@/styles/element-variables.scss'
import 'element-ui/lib/theme-chalk/index.css'
// import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import elTableInfiniteScroll from 'el-table-infinite-scroll'
import locale from 'element-ui/lib/locale'

Vue.use(ElementUI)
locale.use(zhLocale)
Vue.use(elTableInfiniteScroll)
