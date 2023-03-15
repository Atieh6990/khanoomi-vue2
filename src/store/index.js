import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authToken: ''
  },
  getters: {
    getAuthToken (state) {
      return state.authToken
    }
  },
  mutations: {
    setAuthToken (state, payload) {
      state.authToken = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
