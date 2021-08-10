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
        getPost: {},
        test: 'test123'

    },
    mutations: {
        SET_AUTH_DATA(state, response) {
            state.userDataVuex = response
        },
        SET_POSTS_DATA(state, response) {
            state.getPosts = response
            state.getPosts = response.map(item => {
                item.isActive = false
                return item
            })
        },
        SET_POST_DATA(state, response) {
            state.getPost = response
            // state.getPosts.fullText = response.fullText
        }

    },
    actions: {
        ACTION_AUTH_DATA({ commit }) {
            console.log('ACTION_AUTH_DATA works');
            if (localStorage.token) {
                axios.defaults.headers.common["Authorization"] = localStorage.token;
                console.log('Token: ' + axios.defaults.headers.common["Authorization"]);

                axios.get('https://nodejs-test-api-blog.herokuapp.com/api/v1/auth/user', {
                    headers: { authorization: localStorage.token },
                }).then(response => { commit('SET_AUTH_DATA', response.data) })
            }
        },
        ACTION_POSTS_DATA({ commit }) {
            console.log('ACTION_POSTS_DATA works');
            axios.get("https://nodejs-test-api-blog.herokuapp.com/api/v1/posts?limit=10000")
            .then((response) => { commit('SET_POSTS_DATA', response.data) });
        },
        ACTION_POST_DATA({ commit, state }, index) {
            console.log('ACTION_POST_DATA works');
            axios.get("https://nodejs-test-api-blog.herokuapp.com/api/v1/posts/" + state.getPosts[index]._id)
            .then((response) => { commit('SET_POST_DATA', response.data) });
        }


    },
    modules: {},

    getters: {
        GETTER_AUTH_DATA(state) {
            console.log(state.userDataVuex);
            return state.userDataVuex;
        },
        GETTER_POSTS_DATA(state) {
            console.log(state.getPosts);
            return state.getPosts;
        },
        GETTER_POST_DATA(state) {
            console.log(state.getPost);
            return state.getPost;
        }
    },


});

// export default store;