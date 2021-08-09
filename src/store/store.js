import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    
    state: {
        userDataVuex: {},
        test: 'test123'

      },
      mutations: {
        // authData (state) {
        //   this.$http.get('auth/user').then (response => state.userDataVuex = response.data)
        // }
      },
      actions: {
        authData (context) {
            context.commit('authData')
          }
        },
    modules: {},
  });