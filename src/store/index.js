import Vue from 'vue'
import Vuex from 'vuex'
import * as authStore from './modules/auth'
import * as resumeStore from './modules/resume'
import * as usersStore from './modules/users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false
  },
  mutations: {
    
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
