<template>
    <div class="Dashboard">
        <h1>API app</h1><br /><br />
        <div>
            <h2>Get user by ID ({{getUser._id}}): </h2>
            <ul>
                <li v-for="(item, value) in getUser" :key="item">
                    {{value + ': '+item}}
                </li>
            </ul>
        </div>
        <div>
            <h2>Get last 10 posts: </h2>
            <div id="event-handling">
                <button v-on:click="getPostsClick">Get Posts</button>
            </div>
            <ul>
                <li v-for="(item, index) in getPosts" :key="item">
                    <br /><strong>{{"Post #"+parseInt(index+1)}}</strong>
                    <br />{{'id: ' +item._id }}<br />
                    {{'title: ' +item.title}}<br />
                    {{'description: ' +item.description}}<br />
                </li>
            </ul>
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
                    .then(response => this.getPosts = response.data);

            }
        }



    }


</script>

<style>

    ul {

        list-style: none;
    }

</style>