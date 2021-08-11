<template>
  <div>
    <h2>Posts</h2>

    <div class="mb-3"></div>

    <b-list-group>
      <b-list-group-item
        class="margin-auto-70 t-align"
        v-for="(item, index) in storePosts"
        :key="index"
      >
        <h5 style="text-align: center">{{ storePosts[index].title }}</h5>
        <br />
        {{ item.description }}
        <div class="mb-3">
          <div v-if="storePost">
            <div v-if="item.isActive" :class="{ active: item.isActive }">

              <p class="t-align margin-auto-70">
                <br />{{ storePosts[index].fullText }}
              </p>
              <br />
              <!-- <p class=" t-align margin-auto-70">
                  <strong>Description: </strong
                  >{{ storePosts[index].description }}
                </p> -->
              <div class="f-right">
                <span class="t-align margin-auto-70">
                  <strong>Posting date: </strong
                  >{{
                    storePosts[index].dateCreated.substring(
                      0,
                      storePosts[index].dateCreated.indexOf("T")
                    ) + ", "
                  }}
                </span>
                <span
                  class="t-align margin-auto-70"
                >
                  <strong>Published by: </strong
                  >{{ storePosts[index].name + ", " }}
                </span>
              
                <span class="t-align margin-auto-70">
                  <strong>Likes: </strong>{{ storePosts[index].likes.length }}
                </span>
                <br />
              </div>
            </div>
            <b-link
              @click="
                ACTION_POST_DATA(index),
                 ACTION_USER_DATA(index),
                  toggleItem(item._id)
              "
              ><span v-if="!storePosts[index].isActive">See more...</span
              ><span v-else>See less...</span></b-link
            >
          </div>
        </div>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
// import axios from "axios";

export default {
  data() {
    return {
      toggle: [],
    };
  },
  computed: {
    ...mapGetters(["GET_POSTS_DATA", "GET_POST_DATA", "GET_USER_DATA"]),

    storePosts() {
      return this.GET_POSTS_DATA;
    },
    storePost() {
      return this.GET_POST_DATA;
    },
  },

  async created() {
    await this.ACTION_POSTS_DATA();
    await this.ACTION_USER_DATA();
  },
  methods: {
    ...mapActions([
      "ACTION_POSTS_DATA",
      "ACTION_POST_DATA",
      "ACTION_USER_DATA",
    ]),

    toggleItem(id) {
      console.log("toggleItem");
      this.storePosts = this.storePosts.map((item) => {
        if (item._id === id) {
          item.isActive = !item.isActive;
        }
        return item;
      });
    },
  },
};
</script>

<style lang="scss">
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
  width: 60rem;
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

body {
  background: #eee;
}

.f-right {
  float: right;
}
</style>