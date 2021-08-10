<template>
  <div>
    <h2>Posts</h2>
    <b-form-input
      class="m-bot margin-auto-70"
      v-model="postById"
      placeholder="Type ID"
    ></b-form-input>
    <div class="mb-3"></div>

    <b-card title="">
      <b-list-group>
        <b-list-group-item
          class="margin-auto-70 light-blue t-align"
          v-for="(item, index) in storePosts"
          :key="index"
        >
          <!-- <br /><strong>{{"Post #"+parseInt(index+1)}}</strong> -->
          <h5 style="text-align: center">{{ item.title }}</h5>
          <br />
          {{ item.description }}
          <div class="mb-3">
            <b-link v-on:click="getPostClick(index), toggleItem(item._id)"
              >See more...</b-link
            >
            <!--<div v-if="getPost && getPost._id === getPosts[index]._id || toggle.includes(getPosts[index]._id)">
                <b-list-group-item class="light-blue t-align margin-auto-70"><strong>Title: </strong>{{getPost.title}}</b-list-group-item>
                <b-list-group-item class="light-blue t-align margin-auto-70"><strong>Full Text: </strong>{{getPost.fullText}}</b-list-group-item>
                <b-list-group-item class="light-blue t-align margin-auto-70"><strong>Description: </strong>{{getPost.description}}</b-list-group-item>-->
            <!-- <b-list-group-item class="light-blue t-align margin-auto-70"><strong>Date: </strong>{{getPost.dateCreated.substring(0, getPost.dateCreated.indexOf('T'))}}</b-list-group-item> -->
            <!--<b-list-group-item class="light-blue t-align margin-auto-70"><strong>Posted by: </strong>{{getPost.postedBy}}</b-list-group-item>-->
            <!-- <b-list-group-item class="light-blue t-align margin-auto-70"><strong>Likes: </strong>{{getPost.likes.length}}</b-list-group-item> -->

            <!--</div>-->

            <div v-if="getPost">
              <ul v-if="item.isActive" :class="{ active: item.isActive }">
                <li class="light-blue t-align margin-auto-50">
                  <strong>Id: </strong>{{ getPosts[index]._id }}
                </li>
                <li class="light-blue t-align margin-auto-50">
                  <strong>Title: </strong>{{ getPosts[index].title }}
                </li>
                <li class="light-blue t-align margin-auto-50">
                  <strong>Full Text: </strong>{{ getPosts[index].fullText }}
                </li>
                <li class="light-blue t-align margin-auto-50">
                  <strong>Description: </strong
                  >{{ getPosts[index].description }}
                </li>
                <!-- <b-list-group-item class="light-blue t-align margin-auto-70"><strong>Date: </strong>{{getPost.dateCreated.substring(0, getPost.dateCreated.indexOf('T'))}}</b-list-group-item> -->
                <li class="light-blue t-align margin-auto-50">
                  <strong>Posted by: </strong>{{ getPosts[index].postedBy }}
                </li>
                <!-- <b-list-group-item class="light-blue t-align margin-auto-70"><strong>Likes: </strong>{{getPost.likes.length}}</b-list-group-item> -->
              </ul>
            </div>
          </div>
        </b-list-group-item>
      </b-list-group>
    </b-card>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
// import axios from "axios";

export default {
  data() {
    return {
      getPost: this.getPost,
      postById: null,
      toggle: [],
      postLength: 0,
    };
  },
  computed: {
    ...mapGetters(["GETTER_POSTS_DATA"]),

    storePosts() {
        return this.GETTER_POSTS_DATA;
    },
  },

  created() {
    this.ACTION_POSTS_DATA();

    // this.$http.get('/posts?limit=10000').then((response) => (this.getPosts = response.data, response.data = response.data.map(item => {
    //         item.isActive = false
    //         return item
    //     }) ));

    // axios
    //   .get("https://nodejs-test-api-blog.herokuapp.com/api/v1/posts?limit=10000")
    // .then((response) => (this.getPosts = response.data, response.data = response.data.map(item => {
    //     item.isActive = false
    //     return item
    // }) ));
  },
  methods: {
    ...mapActions(["ACTION_POSTS_DATA"]),

    async getPostClick(index) {
      // axios.get("https://nodejs-test-api-blog.herokuapp.com/api/v1/posts/" + this.getPosts[index]._id).then((response) => (this.getPost = response.data));

      // GET request using axios with async/await
      const response = await this.$http.get(
        "/posts/" + this.getPosts[index]._id
      );
      this.getPost = response.data;
      //    this.getPosts[index].isActive = false
      //      this.toggle = Array.from(this.getPosts);

      this.getPosts[index].fullText = response.data.fullText;

      // var element = document.getElementById("toggl");
      // element.classList.toggle("d-none");

      //   this.toggle[index].fullText = window.$vm0.getPost;

      //   this.postLength = this.getPosts.length

      //   this.toggle = new Array(this.itemLength).fill('');

      //    this.toggle.splice(index, 1, this.getPost);
    },

    toggleItem(id) {
      console.log("it works");
      this.getPosts = this.getPosts.map((item) => {
        if (item._id === id) {
          item.isActive = !item.isActive;
        }
        return item;
      });
    },

    itemsLength() {
      return this.getPosts.length;
    },
  },
};
</script>

<style>
.d-none {
  display: none;
}

.d-none-o {
  display: none;
}

.margin-auto-20 {
  margin: 0 auto;
  width: 20%;
}

.margin-auto-70 {
  margin: 0 auto;
  width: 30rem;
}

.margin-auto-50 {
  margin: 0 auto;
  width: 20rem;
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