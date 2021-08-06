<template>
  <div>
    <h1>API app</h1>
    <br /><br />
    <b-container class="bv-example-row">
      <b-row>
        <b-col class="border p-bot p-top">
          <h2>Get user data by ID:</h2>
          <b-form-input
            class="m-bot margin-auto-70"
            v-model="userById"
            placeholder="Type ID"
          ></b-form-input>
          <div class="mb-3">
            <b-button v-on:click="getUserClick">Try it</b-button>
          </div>
            <div v-if="getUser">
              <b-list-group-item class="light-blue t-align margin-auto-70"><strong>Name: </strong>{{getUser.name}}</b-list-group-item>
              <b-list-group-item class="light-blue t-align margin-auto-70"><strong>Email: </strong>{{getUser.email}}</b-list-group-item>
              <b-list-group-item class="light-blue t-align margin-auto-70"><strong>Registration: </strong>{{getUser.dateCreated.substring(0, getUser.dateCreated.indexOf('T'))}}</b-list-group-item>
            </div>
          <!-- <b-list-group-item
            class="light-blue t-align margin-auto-70"
            v-for="(item, value, index) in getUser"
            :key="index"
          >
            {{ value + ": " + item }}
          </b-list-group-item> -->
          </b-col
        >
        <b-col class="border p-bot p-top">
          <h2>Get post data by ID:</h2>
          <b-form-input
            class="m-bot margin-auto-70"
            v-model="postById"
            placeholder="Type ID"
          ></b-form-input>
          <div class="mb-3">
            <b-button v-on:click="getPostClick">Try it</b-button>
          </div>
          <div v-if="getPost">
              <b-list-group-item class="light-blue t-align margin-auto-70"><strong>Title: </strong>{{getPost.title}}</b-list-group-item>
              <b-list-group-item class="light-blue t-align margin-auto-70"><strong>Full Text: </strong>{{getPost.fullText}}</b-list-group-item>
              <b-list-group-item class="light-blue t-align margin-auto-70"><strong>Description: </strong>{{getPost.description}}</b-list-group-item>
              <b-list-group-item class="light-blue t-align margin-auto-70"><strong>Date: </strong>{{getPost.dateCreated.substring(0, getPost.dateCreated.indexOf('T'))}}</b-list-group-item>
              <b-list-group-item class="light-blue t-align margin-auto-70"><strong>Posted by: </strong>{{getPost.postedBy}}</b-list-group-item>
              <b-list-group-item class="light-blue t-align margin-auto-70"><strong>Likes: </strong>{{getPost.likes.length}}</b-list-group-item>
              
            </div>
          <!-- <b-list-group-item
            class="light-blue t-align margin-auto-70"
            v-for="(item, value, index) in getPost"
            :key="index"
          >
            {{ value + ": " + item }}
          </b-list-group-item> -->
          </b-col
        >
      </b-row>
    </b-container>

    <b-container class="bv-example-row m-top">
      <b-row>
        <b-col class="border">
          <h2>Get all users:</h2>
          <div>
            <div class="mb-3">
              <b-button v-b-toggle.my-collapse-users v-on:click="getUsersClick"
                >Try it</b-button
              >
            </div>
            <b-collapse id="my-collapse-users">
              <b-card title="Response">
                <b-list-group>
                  <b-list-group-item
                    class="t-align margin-auto-70 light-blue"
                    v-for="(item, index) in getUsers"
                    :key="index"
                  >
                    <!-- <strong>{{"User #"+parseInt(index+1)}}</strong> -->
                    <strong>Email:</strong> {{ item.email }} <br /><strong
                      >Name:</strong
                    >
                    {{ item.name }} <br /><strong>Registration:</strong>
                    {{ item.dateCreated.substring(0, item.dateCreated.indexOf('T')) }}
                    <template v-if="item.avatar !== undefined">
                      <br /><strong>Avatar: </strong> {{ item.avatar }}
                    </template>
                  </b-list-group-item>
                </b-list-group>
              </b-card>
            </b-collapse>
          </div></b-col
        >
        <b-col class="border">
          <h2>Get all posts:</h2>
          <div class="mb-3">
            <b-button v-b-toggle.my-collapse-posts v-on:click="getPostsClick"
              >Try it</b-button
            >
          </div>
          <b-collapse id="my-collapse-posts">
            <b-card title="Response:">
              <b-list-group>
                <b-list-group-item
                  class="margin-auto-70 light-blue t-align"
                  v-for="(item, index) in getPosts"
                  :key="index"
                >
                  <!-- <br /><strong>{{"Post #"+parseInt(index+1)}}</strong> -->
                  <h5 style="text-align: center">{{ item.title }}</h5>
                  <br />
                  {{ item.description }}
                </b-list-group-item>
              </b-list-group>
            </b-card>
          </b-collapse></b-col
        >
      </b-row>
    </b-container>

    <div>
      <br />
      <div></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      getUser: this.getUser,
      getPost: this.getPost,
      getPosts: this.getPosts,
      getUsers: this.getUsers,
      postById: null,
      userById: null,
    };
  },

  created() {
    // axios.get("https://nodejs-test-api-blog.herokuapp.com/api/v1/users/610a7aba8cad1a00152cce77")
    //     .then(response => this.getUser = response.data);
    //         axios.get("https://nodejs-test-api-blog.herokuapp.com/api/v1/posts")
    //       .then(response => this.getPosts = response.data);
  },

  methods: {
    getPostsClick() {
      axios
        .get("https://nodejs-test-api-blog.herokuapp.com/api/v1/posts?limit=10000")
        .then((response) => (this.getPosts = response.data));
    },
    getPostClick() {
      axios
        .get(
          "https://nodejs-test-api-blog.herokuapp.com/api/v1/posts/" +
            this.postById
        )
        .then((response) => (this.getPost = response.data));
    },

    getUsersClick() {
      axios
        .get("https://nodejs-test-api-blog.herokuapp.com/api/v1/users")
        .then((response) => (this.getUsers = response.data));
    },

    getUserClick() {
      axios
        .get(
          "https://nodejs-test-api-blog.herokuapp.com/api/v1/users/" +
            this.userById
        )
        .then((response) => (this.getUser = response.data));
    },
    
  },
};
</script>

<style>
.margin-auto-20 {
  margin: 0 auto;
  width: 20%;
}

.margin-auto-70 {
  margin: 0 auto;
  width: 30rem;
}

.margin-auto {
  margin: 0 auto;
  width: 30%;
}

ul {
  list-style: none;
}

.m-bot {
  margin-bottom: 10px;
}

.m-top {
  margin-top: 20px;
}

.p-bot {
    padding-bottom: 20px;
}

.p-top {
    padding-top: 20px;
}

.light-blue {
  background-color: #f0f8ff;
}

.t-align {
  text-align: left;
}
</style>