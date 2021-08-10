import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'



Vue.use(Vuex)

// export default new Vuex.Store({

//     state: {
//         userDataVuex: {},
//         test: 'test123'

//     },
//     mutations: {
//         SET_POSTS(state, response) {
//             state.userDataVuex = response
//         }

//         // authData(state) {
//         //     if (localStorage.token) {
//         //         this.token = localStorage.token;
//         //         axios.defaults.headers.common["Authorization"] = localStorage.token;

//         //         this.$http.get('auth/user', {
//         //             headers: { authorization: localStorage.token },
//         //         }).then(response => state.userDataVuex = response.data)
//         //     }
//         // }

//     },
//     actions: {
//         authData({ commit }) {
//             console.log('authData works');
//             if (localStorage.token) {
//                 this.token = localStorage.token;
//                 axios.defaults.headers.common["Authorization"] = localStorage.token;

//                 this.$http.get('/auth/user', {
//                     headers: { authorization: localStorage.token },
//                 }).then(response => { commit('SET_POSTS', response.data) })
//             }
//         }

//         // authData(context) {
//         //     context.commit('authData')
//         // }
//     },
//     modules: {},

//     getters: {

//         USER_DATA_VUEX(state) {
//             return state.userDataVuex;
//         }

//     }
// });



export default new Vuex.Store({

    state: {
        userDataVuex: {},
        getPosts: {},
        test: 'test123'

    },
    mutations: {
        SET_USER_DATA_VUEX(state, response) {
            state.userDataVuex = response
        },

        SET_POSTS(state, response) {
            state.getPosts = response
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
        GET_AUTH_DATA({ commit }) {
            console.log('GET_AUTH_DATA works');
            // if (localStorage.token) {
            // this.token = localStorage.token;
            axios.defaults.headers.common["Authorization"] = localStorage.token;

            axios.get('https://nodejs-test-api-blog.herokuapp.com/api/v1/auth/user', {
                headers: { authorization: localStorage.token },
            }).then(response => { commit('SET_USER_DATA_VUEX', response.data) })

            // return axios('https://nodejs-test-api-blog.herokuapp.com/api/v1/auth/user', {
            //     method: "GET"
            // })
            //     .then((response) => {
            //         commit('SET_USER_DATA_VUEX', response.data);
            //         return response;
            //     })
            //     .catch((error) => {
            //         console.log(error)
            //         return error;
            //     })

            // }




        },


        GET_POSTS({ commit }) {
            console.log('GET_POSTS works');
            // if (localStorage.token) {
            // this.token = localStorage.token;
            // axios.defaults.headers.common["Authorization"] = localStorage.token;

            // this.$http.get('auth/user', {
            //     headers: { authorization: localStorage.token },
            // }).then(response => { commit('SET_POSTS', response.data) })

            
            this.$http.get('/posts?limit=10000').then((response) => { commit('SET_POSTS', response.data) } );

            // }




        }

        // authData(context) {
        //     context.commit('authData')
        // }
    },
    modules: {},

    getters: {
        USER_DATA_VUEX(state) {
            return state.userDataVuex;

        }
    },


});

// export default store;