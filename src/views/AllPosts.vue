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
            <b-link @click="ACTION_POST_DATA(index), toggleItem(item._id)"
              >See more...</b-link
            >
            <div v-if="storePost">
              <ul v-if="item.isActive" :class="{ active: item.isActive }">
                <li class="light-blue t-align margin-auto-50">
                  <strong>Id: </strong>{{ storePosts[index]._id }}
                </li>
                <li class="light-blue t-align margin-auto-50">
                  <strong>Title: </strong>{{ storePosts[index].title }}
                </li>
                <li class="light-blue t-align margin-auto-50">
                  <strong>Full Text: </strong>{{ storePost.fullText }}
                </li>
                <li class="light-blue t-align margin-auto-50">
                  <strong>Description: </strong
                  >{{ storePosts[index].description }}
                </li>
                <li class="light-blue t-align margin-auto-50">
                  <strong>Date: </strong
                  >{{
                    storePost.dateCreated.substring(
                      0,
                      storePost.dateCreated.indexOf("T")
                    )
                  }}
                </li>
                <li class="light-blue t-align margin-auto-50">
                  <strong>Posted by: </strong>{{ storePosts[index].postedBy }}
                </li>
                <li class="light-blue t-align margin-auto-50">
                  <strong>Likes: </strong>{{ storePost.likes.length }}
                </li>
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
    ...mapGetters(["GETTER_POSTS_DATA", "GETTER_POST_DATA"]),

    storePosts() {
      return this.GETTER_POSTS_DATA;
    },
    storePost() {
      return this.GETTER_POST_DATA;
    },
  },

  created() {
    this.ACTION_POSTS_DATA();
    // this.ACTION_POST_DATA(index);
  },
  methods: {
    ...mapActions(["ACTION_POSTS_DATA", "ACTION_POST_DATA"]),

    async getPostClick(index) {
      const response = await this.$http.get(
        "/posts/" + this.getPosts[index]._id
      );
      this.getPost = response.data;

      this.getPosts[index].fullText = response.data.fullText;
    },

    toggleItem(id) {
      console.log("toggleItem");
      this.storePosts = this.storePosts.map((item) => {
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