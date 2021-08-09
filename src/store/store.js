import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'



Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        userDataVuex: {},
        test: 'test123'

    },
    mutations: {
        SET_POSTS(state, posts) {
            state.userDataVuex = posts
        }

        // authData(state) {
        //     if (localStorage.token) {
        //         this.token = localStorage.token;
        //         axios.defaults.headers.common["Authorization"] = localStorage.token;

        //         this.$http.get('auth/user', {
        //             headers: { authorization: localStorage.token },
        //         }).then(response => state.userDataVuex = response.data)
        //     }
        // }

    },
    actions: {
        authData({commit}) {
            if (localStorage.token) {
                this.token = localStorage.token;
                axios.defaults.headers.common["Authorization"] = localStorage.token;

                this.$http.get('auth/user', {
                    headers: { authorization: localStorage.token },
                }).then(response => {commit('SET_POSTS', response.data)})
            }
        }

        // authData(context) {
        //     context.commit('authData')
        // }
    },
    modules: {},
});