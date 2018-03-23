import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)
Vue.config.devtools = true
const store = new Vuex.Store({
  strict: Vue.config.devtools,
  middlewares: Vue.config.devtools ? [createLogger()] : [],
  state: {
    user: null
  },
  actions: {
    getUserDetail ({commit}) {
      // 测试数据
      const data = {
        rightList: ['RIGHT_PAGE_1', 'RIGHT_PAGE_3', 'RIGHT_PAGE_5'],
        userLoaded: true
      }
      commit('GET_USER_DETAIL', data)
    }
  },
  mutations: {
    GET_USER_DETAIL: (state, data) => {
      state.user = data
    }
  }
})

export default store
