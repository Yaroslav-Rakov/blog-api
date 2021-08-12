<template>
  <div class="container">
    <div class="row">
      <b-card class="col-md-12 margin-auto-70">
        <h1>Create post</h1>

        <form>
          <div class="form-group">
            <label for="title">Title</label>
            <input
              type="text"
              class="form-control"
              name="title"
              v-model="createPost.title"
            />
          </div>
          <br />

          <div class="form-group">
            <label for="description">Full text</label>
            <textarea
              rows="5"
              class="form-control"
              name="fullText"
              v-model="createPost.fullText"
            ></textarea>
          </div>
          <br />

          <div class="form-group">
            <label for="description">Description</label>
            <textarea
              rows="5"
              class="form-control"
              name="description"
              v-model="createPost.description"
            ></textarea>
          </div>
          <br />

          <div class="form-group">
            <button
              type="submit"
              class="btn btn-primary"
              @click.prevent="createP()"
            >
              Create
            </button>
            <!-- <button class="btn btn-danger">
    		            Cancel
    		        </button> -->
          </div>
        </form>
      </b-card>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      createPost: {
        title: "",
        fullText: "",
        description: "",
      },

      createPostResponse: {},
    };
  },

  computed: {
    ...mapGetters(["GET_CREATED_POST"]),

    // title: {
    //   get() {
    //     return this.$store.state.createPost.title;
    //   },
    //   set(value) {
    //     this.$store.state.createPost.title = this.$store.commit(
    //       "SET_TITLE",
    //       value
    //     );
    //   },
    // },
    // fullText: {
    //   get() {
    //     return this.$store.state.createPost.fullText;
    //   },
    //   set(value) {
    //     this.$store.state.createPost.fullText = this.$store.commit(
    //       "SET_FULLTEXT",
    //       value
    //     );
    //   },
    // },
    // description: {
    //   get() {
    //     return this.$store.state.createPost.description;
    //   },
    //   set(value) {
    //     this.$store.state.createPost.description = this.$store.commit(
    //       "SET_DESCRIPTION",
    //       value
    //     );
    //   },
    // },
  },

  created() {
    // this.ACTION_CREATE_POST();
  },

  methods: {
    ...mapActions(["ACTION_CREATE_POST"]),

createP() {
	this.$store.commit("SET_CREATE_POST",this.createPost)

  this.ACTION_CREATE_POST()

}
  },
};
</script>

<style>
.margin-auto-70 {
  margin: 0 auto;
  width: 60rem;
}

body {
  background: #eee;
}
</style>