<template>
  <div id="app">
    <div id="nav" class="bg-dark">
      <!-- <router-link to="/">Home</router-link> | -->
        <div>
            <router-link to="/dashboard">Dashboard</router-link>
            <router-link to="/sign-up">Sign Up</router-link>
            <router-link to="/login">Login</router-link>
            <!-- <router-link v-if="!this.$store.state.userDataVuex._id" to="/login">Login</router-link>
            <router-link v-if="this.$store.state.userDataVuex._id" :to="{name: 'Login', params: localStorage.token='' }">Logout</router-link> -->
            <router-link to="/allUsers">Users</router-link>
            <router-link to="/posts">Posts</router-link>
            <router-link to="/my-posts">My Posts</router-link>
        </div>
    </div>
    <router-view class="p-top" />
  </div>
</template>

<style lang="scss">
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

.margin-auto {
    margin: 0 auto;

}

.p-top {

    padding-top: 100px;
}
</style>
