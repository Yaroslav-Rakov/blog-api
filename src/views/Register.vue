<template>
<div id="app">
  <div class="container">
    <form>
      <div class="row margin-auto">
        <div class="for-group">

          <h1>Signup</h1>
          <div class="form-group">
            <label for="firstName">First Name</label>
            <input type="text" id="firstName" class="form-control" v-model="userData.name">
          </div>
          <!-- <div class="form-group">
            <label for="lastName">Last Name</label>
            <input type="text" id="lastName" class="form-control" v-model="userData.lastName">
          </div> -->
          <div class="form-group">
            <label for="email">Mail</label>
            <input type="text" id="email" class="form-control" v-model="userData.email">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" class="form-control" v-model="userData.password">
            <p>
              <!-- {{ userData.password }} -->
            </p>
          </div>

        </div>
      </div>
      <div class="row">
        <div class="">
          <button class="btn btn-primary" @click.prevent="createUser">Submit!
          </button>
        </div>
      </div>

      <div class="row m-top">
          <div ></div>
          <div v-if="!this.userDataResponse._id">{{err}}</div>
          <div v-else>{{pushToLogin()}} </div>
      </div>
    </form>

  </div>
</div>

    
</template>

<script>
    import axios from "axios"

    export default {
        data() {
    return {
      userData: {
        name: '',
        email: '',
        password: ''
      },

    userDataResponse: {
        name: '',
        email: '',
        password: ''
      },

      err: ''
    
    }
        },

        created() {

            // axios.get("https://nodejs-test-api-blog.herokuapp.com/api/v1/users/610a7aba8cad1a00152cce77")
            //     .then(response => this.getUser = response.data);

   //         axios.get("https://nodejs-test-api-blog.herokuapp.com/api/v1/posts")
         //       .then(response => this.getPosts = response.data);

        },

        computed: {

 


        },

methods: {
    createUser (){

          const user =  this.userData;
            axios.post("https://nodejs-test-api-blog.herokuapp.com/api/v1/users", user)
            .then(response => this.userDataResponse = response.data).catch(error => {
      this.err = error.message;
      console.error("There was an error!", error);

    });



    },

               pushToLogin() {

                return this.$router.push({name: "Login"})

            },

            checkUser(){

                if (!this.userDataResponse._id){
                    return 'Signup failed! Some fields are empty or this user already exists.'

                } else {

                    return this.$router.push({name: "Login"})
                }

            }
  }



    }


</script>

<style>

.margin-auto {
        margin: 0 auto;
        width:30%
}

.light-blue {
  background-color: #F0F8FF;
    }
.m-top {

    margin-top: 20px;

}

</style>