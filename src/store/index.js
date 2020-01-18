import Vue from 'vue'
import Vuex from 'vuex'
import * as authStore from './modules/auth'
import * as resumeStore from './modules/resume'
import * as usersStore from './modules/users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    loaderMessage: ''
  },
  mutations: {
    START_LOADING(state, message) {
      state.loaderMessage = message
      state.loading = true
    },
    FINISH_LOADING(state) {
      state.loaderMessage = ''
      state.loading = false
    }
  },
  actions: {
    
  },
  getters: {
    
  },
  modules: {
    authStore,
    resumeStore,
    usersStore
  }
})
