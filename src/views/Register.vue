<template>
<div id="app">
    <div class="container ">
        <form>
            <div class="row margin-auto">
                <div class="for-group">

                    <h1>Signup</h1>
                    <div class="form-group m-top">
                        <label for="firstName">Name</label>
                        <input type="text" id="firstName" class="form-control" placeholder="Enter name" v-model.lazy="$v.userData.name.$model" @blur="$v.userData.name.$touch()">
                        <p class="error" v-if="$v.userData.name.$error">This field is required!</p>
                    </div>
                    <!-- <div class="form-group">
                  <label for="lastName">Last Name</label>
                  <input type="text" id="lastName" class="form-control" v-model="userData.lastName">
                </div> -->
                    <div class="form-group m-top">
                        <label for="email">Email</label>
                        <input type="text" id="email" class="form-control" placeholder="Enter email" v-model="$v.userData.email.$model" @blur="$v.userData.email.$touch()">
                        <p class="error" v-if="$v.userData.email.$dirty && !$v.userData.email.required">This field is required!</p>
                        <p class="error" v-if="$v.userData.email.$dirty && !$v.userData.email.email">Please type a valid email</p>
                        
                          <!-- <p v-if="errors.length">
                        <b>Please correct the following error(s):</b>
                        <ul>
                          <li v-for="error in errors" :key="error">{{ error }}</li>
                        </ul>
                      </p> -->
                         
                    </div>
                    <div class="form-group m-top">
                        <label for="password">Password</label>
                        <input type="password" id="password" class="form-control" placeholder="Enter password" v-model.lazy="$v.userData.password.$model" @blur="$v.userData.password.$touch()">
                        <p class="error" v-if="$v.userData.password.$error">Minimum 6 characters needed!</p>
                        <p>
                            <!-- {{ userData.password }} -->
                        </p>
                    </div>

                </div>
                
                <div class="row">
                    
                    <div class="">
                        <button class="btn btn-primary" @click.prevent="createUser">
                            Submit!
                        </button>
                    </div>
                </div>
                <div class="row m-top">
                    <div class="error">{{errName}}</div>
                    <div v-if="!this.userDataResponse._id">{{err}}</div>
                    <div v-else>{{pushToLogin()}} </div>
                </div>


            </div>
        </form>



    </div>
</div>

    
</template>

<script>
// import Vuex from 'vuex'
import { required, minLength, email } from "vuelidate/lib/validators";

//     const store = new Vuex.Store({
//     state: {
//       count: 0
//     },
//     mutations: {
//       increment (state) {
//         state.count++
//       }
//     },
//     actions: {
//     increment (context) {
//       context.commit('increment')
//     }
//   }
//   })

//   store.dispatch('increment')

export default {
  data() {
    return {
      errors: [],
      userData: {
        name: "",
        email: "",
        password: "",
      },

      userDataResponse: {
        name: "",
        email: "",
        password: "",
      },

      err: "",
      errName: "",
    };
  },

  validations: {
    userData: {
      name: {
        required,
      },
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6),
      },
    },
  },

  created() {
    // axios.get("https://nodejs-test-api-blog.herokuapp.com/api/v1/users/610a7aba8cad1a00152cce77")
    //     .then(response => this.getUser = response.data);
    //         axios.get("https://nodejs-test-api-blog.herokuapp.com/api/v1/posts")
    //       .then(response => this.getPosts = response.data);
  },

  computed: {},

  methods: {
    createUser() {
      const user = this.userData;
      this.$http
        .post("/users", user)
        .then((response) => (this.userDataResponse = response.data))
        .catch((error) => {
          console.error("There was an error!", error);

          if (
            this.userData.name.length == 0 ||
            this.userData.email.length == 0 ||
            this.userData.password.length == 0
          ) {
            this.errName = "All fields must be filled in!";
          }
            else {

                this.errName = '';
                // this.err = error.message;

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

    pushToLogin() {
      return this.$router.push({ name: "Login" });
    },

    checkUser() {
      if (!this.userDataResponse._id) {
        return "Signup failed! Some fields are empty or this user already exists.";
      } else {
        return this.$router.push({ name: "Login" });
      }
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

/*.vertical {
    margin-bottom: 50%;
} */
</style>