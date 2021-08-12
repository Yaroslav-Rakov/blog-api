<template>
  <div>
    <h2>Posts</h2>

    <div class="mb-3"></div>

    <b-list-group>
      <b-list-group-item
        class="margin-auto-70 t-align"
        v-for="(item, index) in GET_POSTS_DATA"
        :key="index"
        ><div v-if="GET_POSTS_DATA[index]._id == GET_AUTH_DATA._id ">
          <h5 style="text-align: center">{{ GET_POSTS_DATA[index].title }}</h5>
          <br />
          {{ item.description }}
          <div class="mb-3">
            <div v-if="GET_POST_DATA">
              <div v-if="item.isActive" :class="{ active: item.isActive }">
                <p class="t-align margin-auto-70">
                  <br />{{ GET_POSTS_DATA[index].fullText }}
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
                      GET_POSTS_DATA[index].dateCreated.substring(
                        0,
                        GET_POSTS_DATA[index].dateCreated.indexOf("T")
                      ) + ", "
                    }}
                  </span>
                  <span class="t-align margin-auto-70">
                    <strong>Published by: </strong
                    >{{ GET_POSTS_DATA[index].name + ", " }}
                  </span>

                  <span class="t-align margin-auto-70">
                    <strong>Likes: </strong
                    >{{ GET_POSTS_DATA[index].likes.length }}
                  </span>
                  <br />
                </div>
              </div>
              <b-link
                @click="
                  // toggle(item._id, index)
                  //   ACTION_POST_DATA(index),
                  //    ACTION_USER_DATA(index),
                  toggleItem(item._id, index)
                "
                ><span v-if="!GET_POSTS_DATA[index].isActive">See more...</span
                ><span v-else>See less...</span></b-link
              >
            </div>
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
    return {};
  },
  computed: {
    ...mapGetters([
      "GET_POSTS_DATA",
      "GET_POST_DATA",
      "GET_USER_DATA",
      "GET_AUTH_DATA",
    ]),

    // storePosts() {
    //   return this.GET_POSTS_DATA;
    // },
  },

  created() {
    this.ACTION_AUTH_DATA();
    this.ACTION_POSTS_DATA();
    //  this.ACTION_POST_DATA();
    // await this.ACTION_USER_DATA();
  },
  methods: {
    ...mapActions([
      "ACTION_POSTS_DATA",
      "ACTION_POST_DATA",
      "ACTION_USER_DATA",
      "ACTION_AUTH_DATA",
    ]),

    toggle(id) {
      console.log("toggle inside");
      this.GET_POSTS_DATA = this.GET_POSTS_DATA.map((item) => {
        if (item._id === id) {
          item.isActive = !item.isActive;
        }
        return item;
      });
    },

    //     async function toggle(id) {
    //       let user = await getUser(100);
    //       let services = await getServices(user);
    //       let cost = await getServiceCost(services);
    //       console.log(`The service cost is ${cost}`);
    // }

    toggleItem(id, index) {
      console.log("toggleItem inside");
      this.ACTION_POST_DATA(index);
      console.log("ACTION_POST_DATA done");

      //  this.ACTION_USER_DATA(index);
      // console.log('ACTION_USER_DATA done');

      this.toggle(id);
    },

    //     toggleItem(id, index) {
    //   this.ACTION_POST_DATA(index);
    //   this.ACTION_USER_DATA(index);
    //   this.toggle(id);
    // },
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