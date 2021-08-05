<template>
    <div class="Dashboard">
        <h1>API app</h1><br /><br />
        <div>
            <h2>Get user by ID ({{getUser._id}}): </h2>
            <b-list-group>
                <b-list-group-item class="margin-auto" v-for="(item, value) in getUser" :key="item">
                    {{value + ': '+item}}
                </b-list-group-item>
            </b-list-group>
        </div>
        <div>
            <h2>Get last 10 posts: </h2>
            <div>
                <div class="mb-3">
                    <b-button v-b-toggle.my-collapse v-on:click="getPostsClick">Toggle Collapse</b-button>
                </div>

                <b-collapse id="my-collapse">
                    <b-card title="Collapsible card">
                        <b-list-group>
                            <b-list-group-item class="margin-auto" v-for="(item, index) in getPosts" :key="item">
                                <br /><strong>{{"Post #"+parseInt(index+1)}}</strong>
                                <br />{{'id: ' +item._id }}<br />
                                {{'title: ' +item.title}}<br />
                                {{'description: ' +item.description}}<br />
                            </b-list-group-item>
                        </b-list-group>
                    </b-card>
                </b-collapse>
            </div>

            <!--            <div id="event-handling">
                    <button v-on:click="getPostsClick">Get Posts</button>
                </div>-->

        </div>
    </div>
</template>

<script>
    import axios from "axios"

    export default {

        data() {
            return {
                getUser: this.getUser,
                getPosts: this.getPosts,
                show: true
            }
        },

        created() {

            axios.get("https://nodejs-test-api-blog.herokuapp.com/api/v1/users/610a7aba8cad1a00152cce77")
                .then(response => this.getUser = response.data);

   //         axios.get("https://nodejs-test-api-blog.herokuapp.com/api/v1/posts")
         //       .then(response => this.getPosts = response.data);

        },

        methods: {
            getPostsClick() {
                axios.get("https://nodejs-test-api-blog.herokuapp.com/api/v1/posts")
                    .then(response => this.getPosts = response.data)
            },

            toggle() {
                    console.log('Toggle button clicked')
                    this.show = !this.show
                

            }
        }



    }


</script>

<style>

    .margin-auto {
        margin: 0 auto;
        width:20%
    }

    ul {

        list-style: none;
    }

</style>