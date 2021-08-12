<template>
  <div class="container margin-auto">
    <b-card
      title="My Profile"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-card-text>
        <br><div><strong>Name: </strong>{{ this.GET_AUTH_DATA.name }}</div><br>
        <div><strong>Email: </strong>{{ this.GET_AUTH_DATA.email }}</div>

      </b-card-text>

      <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
    </b-card>
  </div>
</template>
<script>
// import store from "../store/store.js";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
    };
  },

  created() {
    this.ACTION_AUTH_DATA();
  },
  computed: mapGetters(["GET_AUTH_DATA"]),

  methods: {
    ...mapActions(["ACTION_AUTH_DATA"]),
  },
};
</script>
<style>
.margin-auto {
  margin: 0 auto;
  width: 30%;
}
</style>