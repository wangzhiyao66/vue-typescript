import Vue from 'vue'
import Vuex from 'vuex'

// 保证vuex数据刷新不消失（默认刷新会消失）
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

// export interface IRootState {
//   //
// }


// export default new Vuex.Store<IRootState>({
//   modules: {

//   },
//   plugins: [createPersistedState({ storage: window.localStorage })]
// })


