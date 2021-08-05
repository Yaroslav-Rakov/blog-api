<template>
<div id="app">
  <div class="container ">
    <form>
      <div class="row margin-auto">
        <div class="for-group">

          <h1>Signup</h1>
          <div class="form-group">
            <label for="firstName">Name</label>
            <input type="text" id="firstName" class="form-control" placeholder="Enter name" v-model="userData.name">
          </div>
          <!-- <div class="form-group">
            <label for="lastName">Last Name</label>
            <input type="text" id="lastName" class="form-control" v-model="userData.lastName">
          </div> -->
          <div class="form-group">
            <label for="email">Email</label>
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
          <div>{{errName}}</div>
          <div v-if="!this.userDataResponse._id">{{err}}</div>
          <div v-else>{{pushToLogin()}} </div>
      </div>
    </form>

  </div>
</div>

    
</template>

<script>
    import axios from "axios"
    import { required, minLength } from 'vuelidate/lib/validators'


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

      err: '',
      errName: ''
    
    }
        },

    validations: {
    name: {
      required,
      minLength: minLength(1)
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
      
      console.error("There was an error!", error);

      if (!this.userData.name | !this.userData.email | !this.userData.password) {

          this.errName = "All fields must be filled in!"

      } else {

          this.errName = '';
          this.err = error.message;
      }

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
        margin: 10% auto;
        width: 30%;
}

.light-blue {
  background-color: #F0F8FF;
    }
.m-top {

    margin-top: 20px;

}

.vertical {
    margin-bottom: 50%;
}

</style>