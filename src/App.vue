<template>
  <div id="app">
    <div id="nav" class="bg-dark">
      <!-- <router-link to="/">Home</router-link> | -->
        <div>
            <router-link class="" to="/dashboard">Dashboard</router-link>
            <router-link class="" to="/sign-up">Sign Up</router-link>
            <router-link class="" to="/login">Login</router-link>
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
