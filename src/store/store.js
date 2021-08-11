import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'



Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        token: localStorage.token,
        // isAuth: false,
        userDataVuex: {},
        getPosts: {},
        getPost: {},
        getUser: {},
        createPost: {}
          

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
        },
        SET_USER_DATA(state, response) {
            state.getUser = response
        },
        SET_CREATE_POST(state, response) {
            state.createPost = response
        },
        // SET_TITLE(state) {
        //     state.createPost.title
        // },
        // SET_DESCRIPTION(state) {
        //     state.createPost.description
        // },
        // SET_FULLTEXT(state) {
        //     state.createPost.fullText
        // }

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
                .then((response) => { commit('SET_POSTS_DATA', response.data) 
                // state.getPosts.map(item =>{ item.name = response.data.postedBy}) 
                // = response.map(item => {
                //     item.name = 'test'
                //     return item
                // }) 
            });
         
        },
        async ACTION_POST_DATA({ commit, state }, index) {
            console.log('ACTION_POST_DATA works');
            await axios.get("https://nodejs-test-api-blog.herokuapp.com/api/v1/posts/" + state.getPosts[index]._id)
                .then((response) => { commit('SET_POST_DATA', response.data), state.getPosts[index].fullText = response.data.fullText, state.getPosts[index].dateCreated = response.data.dateCreated, state.getPosts[index].likes = response.data.likes });
        },
        async ACTION_USER_DATA({ commit, state }, index) {
            console.log('ACTION_USER_DATA works');
           await axios.get("https://nodejs-test-api-blog.herokuapp.com/api/v1/users/" + state.getPosts[index].postedBy)
                .then((response) => { commit('SET_USER_DATA', response.data), state.getPosts[index].name = response.data.name });
        },
        ACTION_CREATE_POST({ commit }) {
            console.log('ACTION_CREATE_POST works');
            // console.log(state.createPost.title)
            let postData = {
                title: "title UUUUUUUUUUU",
                fullText: "fullText GGGGGGGGGGGGG",
                description: "description FFFFFFFFFF"
            }
            axios.post("https://nodejs-test-api-blog.herokuapp.com/api/v1/posts", postData, {
                headers: { authorization: localStorage.token },
            }).then((response) => { commit('SET_CREATE_POST', response.data) });
        },


    },
    modules: {},

    getters: {
        GET_AUTH_DATA(state) {
            console.log(state.userDataVuex);
            return state.userDataVuex;
        },
        GET_POSTS_DATA(state) {
            console.log(state.getPosts);
            return state.getPosts;
        },
        GET_POST_DATA(state) {
            console.log(state.getPost);
            return state.getPost;
        },
        GET_USER_DATA(state) {
            console.log(state.getUser);
            return state.getUser;
        },
        GET_CREATED_POST(state) {
            console.log(state.createPost);
            return state.createPost;
        }
    },


});

// export default store;