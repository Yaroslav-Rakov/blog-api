<template>
    <div>
        <h1>API app</h1><br /><br />
    <div>
    <div class="margin-auto-20">
            <h2>Get user by ID: </h2>
         <b-form-input class="m-bot" v-model="userById" placeholder="Type ID"></b-form-input>
            <div class="mb-3">
                    <b-button v-on:click="getUserClick">Try it</b-button>
            </div>
                <b-card class="" v-for="(item, value) in getUser" :key="item">
                    {{value + ': '+item}}
                </b-card>

  </div>

        <div class="margin-auto-20">
            <h2>Get post by ID: </h2>
         <b-form-input class="m-bot" v-model="postById" placeholder="Type ID"></b-form-input>
            <div class="mb-3">
                    <b-button v-on:click="getPostClick">Try it</b-button>
            </div>
                <b-card class="" v-for="(item, value) in getPost" :key="item">
                    {{value + ': '+item}}
                </b-card>

        </div>
 
        </div>
        <div>
            <h2>Get all users: </h2>
            <div>
                <div class="mb-3">
                    <b-button v-b-toggle.my-collapse-users v-on:click="getUsersClick">Try it</b-button>
                </div>
                <b-collapse id="my-collapse-users">
                    <b-card title="Response">
                        <b-list-group>
                            <b-list-group-item class="margin-auto light-blue" v-for="(item, index) in getUsers" :key="item">
                                <br /><strong>{{"User #"+parseInt(index+1)}}</strong>
                                <br />{{'id: ' +item._id }}<br />
                                {{'email: ' +item.email}}<br />
                                {{'name: ' +item.name}}<br />
                                {{'dateCreated: ' +item.dateCreated}}<br />
                                <template v-if="item.avatar !== undefined">
                                {{'avatar: ' +item.avatar}}<br />
                                </template>
                            </b-list-group-item>
                        </b-list-group>
                    </b-card>
                </b-collapse>

                <h2>Get last 10 posts: </h2>
                <div class="mb-3">
                    <b-button v-b-toggle.my-collapse-posts v-on:click="getPostsClick">Try it</b-button>
                </div>
                <b-collapse id="my-collapse-posts">
                    <b-card title="Response:">
                        <b-list-group>
                            <b-list-group-item class="margin-auto light-blue" v-for="(item, index) in getPosts" :key="item">
                                <br /><strong>{{"Post #"+parseInt(index+1)}}</strong>
                                <br />{{'id: ' +item._id }}<br />
                                {{'title: ' +item.title}}<br />
                                {{'description: ' +item.description}}<br />
                            </b-list-group-item>
                        </b-list-group>
                    </b-card>
                </b-collapse>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios"

    export default {

        data() {
            return {
                getUser: this.getUser,
                getPost: this.getPost,
                getPosts: this.getPosts,
                getUsers: this.getUsers,
            }
        },

        created() {

            // axios.get("https://nodejs-test-api-blog.herokuapp.com/api/v1/users/610a7aba8cad1a00152cce77")
            //     .then(response => this.getUser = response.data);

   //         axios.get("https://nodejs-test-api-blog.herokuapp.com/api/v1/posts")
         //       .then(response => this.getPosts = response.data);

        },

        methods: {
            getPostsClick() {
                axios.get("https://nodejs-test-api-blog.herokuapp.com/api/v1/posts")
                    .then(response => this.getPosts = response.data)
            },
            getPostClick() {
                axios.get("https://nodejs-test-api-blog.herokuapp.com/api/v1/posts/"+this.postById)
                    .then(response => this.getPost = response.data)
            },

             getUsersClick() {
                axios.get("https://nodejs-test-api-blog.herokuapp.com/api/v1/users")
                    .then(response => this.getUsers = response.data)
            },

            getUserClick() {
                axios.get("https://nodejs-test-api-blog.herokuapp.com/api/v1/users/"+this.userById)
                .then(response => this.getUser = response.data);
            }

  
        }



    }


</script>

<style>
    .margin-auto-20 {
        margin: 0 auto;
        width: 20%
    }

    .margin-auto {
        margin: 0 auto;
        width:30%
    }

    ul {

        list-style: none;
    }

    .m-bot {

        margin-bottom: 10px;

    }

    .light-blue {
        background-color: #F0F8FF;
    }

</style>