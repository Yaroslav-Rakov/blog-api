import Vue from "vue";
import VueRouter from "vue-router";
import createWebHistory from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);
Vue.use(createWebHistory);    

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import(/* webpackChunkName: "Dashboard" */ "../views/Dashboard.vue"),
  },

  {
    path: "/sign-up",
    name: "Sign-up",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import(/* webpackChunkName: "Register" */ "../views/Register.vue"),
  },

  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import(/* webpackChunkName: "Login" */ "../views/Login.vue"),
  },

  {
    path: "/allUsers",
    name: "Users",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import(/* webpackChunkName: "AllUsers" */ "../views/AllUsers.vue"),


  },

  {
    path: "/posts",
    name: "Posts",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import(/* webpackChunkName: "AllPosts" */ "../views/AllPosts.vue"),


  },

  {
    path: "/my-posts",
    name: "My Posts",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import(/* webpackChunkName: "MyPosts" */ "../views/MyPosts.vue"),


  }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
