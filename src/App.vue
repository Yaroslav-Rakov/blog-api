<template>
  <div id="app">
    <div v-if="this.$store.state.token" id="nav" class="bg-dark">
      <!-- <router-link to="/">Home</router-link> | -->
        <div>
            <!-- <router-link to="/dashboard">Dashboard</router-link> -->
            <!-- <router-link v-if="!this.$store.state.userDataVuex._id" to="/login">Login</router-link>
    <router-link v-if="this.$store.state.userDataVuex._id" :to="{name: 'Login', params: localStorage.token='' }">Logout</router-link> -->
            <router-link to="/allUsers">Users</router-link>
            <router-link to="/posts">Posts</router-link>
            <router-link to="/my-posts">My Posts</router-link>
            <router-link to="/create-post">Create Post</router-link>
            <router-link class="fl-right" @click.native="resetToken" to="/login">Log Out</router-link>
             <router-link class="fl-right" to="/account">Account</router-link>

        </div>
    </div>
    <div v-else-if="!this.$store.state.token" id="nav" class="bg-dark">
        <router-link to="/sign-up">Sign Up</router-link>
        <router-link to="/login">Login</router-link>

    </div>
    <router-view class="p-top" />
  </div>
</template>

<script>
export default {
data () {
  return {
    // token: localStorage.token,
    // isAuth: false
  }
},
computed: {

  // logOut: function() {

  //   return this.token ? this.resetToken() : this.saveToken()
  // }

},
created() {
  // this.token = localStorage.token

},
methods: {
  resetToken () {
    // this.$store.state.isAuth = false,
        this.$store.state.token = '',
        this.token = '',
    localStorage.token = ''
  },
  saveToken () {
      // this.$store.state.isAuth = true,
      this.token = localStorage.token
      this.$store.state.token = localStorage.token
      return this.$store.state.token
    },
    toPosts() {
           this.$router.push({ name: 'Posts'})
    }
}


}

</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #ffffff;
    margin-right: 20px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.fl-right{

  float: right;

}

body {
  background: #eee;
}

.margin-auto {
    margin: 0 auto;

}

.p-top {

    padding-top: 100px;
}
</style>
