<template>
  <div>
    <h2>Posts</h2>
              <b-form-input
            class="m-bot margin-auto-70"
            v-model="postById"
            placeholder="Type ID"
          ></b-form-input>
    <div class="mb-3">
    </div>

    <b-card title="">
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
            <div class="mb-3">
            <b-button v-on:click="getPostClick(index)">Try it</b-button>
            <div v-if="getPost && getPost._id === getPosts[index]._id">
              <b-list-group-item class="light-blue t-align margin-auto-70"><strong>Title: </strong>{{getPost.title}}</b-list-group-item>
              <b-list-group-item class="light-blue t-align margin-auto-70"><strong>Full Text: </strong>{{getPost.fullText}}</b-list-group-item>
              <b-list-group-item class="light-blue t-align margin-auto-70"><strong>Description: </strong>{{getPost.description}}</b-list-group-item>
              <!-- <b-list-group-item class="light-blue t-align margin-auto-70"><strong>Date: </strong>{{getPost.dateCreated.substring(0, getPost.dateCreated.indexOf('T'))}}</b-list-group-item> -->
              <b-list-group-item class="light-blue t-align margin-auto-70"><strong>Posted by: </strong>{{getPost.postedBy}}</b-list-group-item>
              <!-- <b-list-group-item class="light-blue t-align margin-auto-70"><strong>Likes: </strong>{{getPost.likes.length}}</b-list-group-item> -->
            
            </div>
          </div>
        </b-list-group-item>
      </b-list-group>
    </b-card>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      getPosts: this.getPosts,
      getPost: this.getPost,
    };
  },

  created() {
      axios
        .get("https://nodejs-test-api-blog.herokuapp.com/api/v1/posts?limit=10000")
        .then((response) => (this.getPosts = response.data));
  },
  methods: {

    getPostClick(index) {
      axios
        .get(
          "https://nodejs-test-api-blog.herokuapp.com/api/v1/posts/"+this.getPosts[index]._id
        )
        .then((response) => (this.getPost = response.data));
    },

  }
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