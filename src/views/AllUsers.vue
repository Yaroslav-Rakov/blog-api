<template>
  <div>
    <h2>Users</h2>
    <div>
      <div class="mb-3">
      </div>
        <b-card title="">
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
              {{ item.dateCreated.substring(0, item.dateCreated.indexOf("T")) }}
              <template v-if="item.avatar !== undefined">
                <br /><strong>Avatar: </strong> {{ item.avatar }}
              </template>
            </b-list-group-item>
          </b-list-group>
        </b-card>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      getUsers: this.getUsers,
    };
  },

  created () {

      axios
        .get("https://nodejs-test-api-blog.herokuapp.com/api/v1/users")
        .then((response) => (this.getUsers = response.data));

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