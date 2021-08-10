<template>
    <div class="container">

          <form>
            <div class="row margin-auto">
                <div class="for-group">

                    <h1>Login</h1>
       
                    <div class="form-group m-top">
                        <label for="email">Email</label>
                        <input type="text" id="email" class="form-control" placeholder="Enter email" v-model="$v.userData.email.$model" @blur="$v.userData.email.$touch()">
                        <p class="error" v-if="$v.userData.email.$dirty && !$v.userData.email.required">This field is required!</p>
                        <p class="error" v-if="$v.userData.email.$dirty && !$v.userData.email.email">Please type a valid email</p>
                          <p v-if="errors.length">
                        <b>Please correct the following error(s):</b>
                        <ul>
                          <li v-for="error in errors" :key="error">{{ error }}</li>
                        </ul>
                      </p>
                         
                    </div>
                    <div class="form-group m-top">
                        <label for="password">Password</label>
                        <input type="password" id="password" class="form-control" placeholder="Enter password" v-model="$v.userData.password.$model" @blur="$v.userData.password.$touch()">
                        <p class="error" v-if="$v.userData.password.$error">Minimum 6 characters needed!</p>
                        <p>
                        </p>
                    </div>

                </div>
                
                <div class="row">
                    
                    <div class="">
                        <button class="btn btn-primary" @click.prevent="login">
                            Submit!
                        </button>
                    </div>
                </div>
                <div class="row m-top">
                    <div class="error">{{errName}}</div>
                    <div v-if="!this.userData._id">{{err}}</div>
                    <!-- <div v-else>{{pushToMyPosts()}} </div> -->
                </div>


            </div>
        </form>
        


    </div>
</template>
<script>
// import store from "../store/store.js";
import axios from "axios";
import {mapActions, mapGetters} from 'vuex'

import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      errors: [],
      token: "",
      userData: {
        email: "",
        password: "",
      },

      userDataResponse: {},

      err: "",
      errName: "",
    };
  },

  validations: {
    userData: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6),
      },
    },
  },
  created() {
    this.ACTION_AUTH_DATA()
  },

  computed: mapGetters(['GETTER_AUTH_DATA']),


  methods: {
     ...mapActions([
        'ACTION_AUTH_DATA'
      ]),

    login() {
      const user = this.userData;
      axios
        .post("https://nodejs-test-api-blog.herokuapp.com/api/v1/auth", user)
        .then((response) => (localStorage.token = response.data.token))
        .catch((error) => {
          console.error("There was an error!", error);

          if (
            !this.userData.name ||
            !this.userData.email ||
            !this.userData.password
          ) {
            this.errName = "All fields must be filled in!";
          } else {
            this.errName = "";
            this.err = error.message;
          }

          this.errors = [];
          if (
            !this.validEmail(this.userData.email) &&
            this.userData.email.length > 0
          ) {
            this.errors.push("Valid email required.");
          }
          if (!this.errors.length) return true;
        });
    },

    validEmail: function (email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },

    pushToMyPosts() {
      return this.$router.push({ name: "MyPosts" });
    },

    
  },
  
};
</script>
<style>
.margin-auto {
  margin: 0 auto;
  width: 30%;
}

.light-blue {
  background-color: #f0f8ff;
}
.m-top {
  margin-top: 20px;
}

.error {
  color: red;
}
</style>