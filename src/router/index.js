import Vue from "vue";
import VueRouter from "vue-router";
import createWebHistory from "vue-router";
import Home from "../views/Home.vue";
 import store from '../store/store.js'

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

        component: () =>
            import(/* webpackChunkName: "Dashboard" */ "../views/Dashboard.vue"),
    },

    {
        path: "/sign-up",
        name: "Sign-up",

        component: () =>
            import(/* webpackChunkName: "Register" */ "../views/Register.vue"),
    },

    {
        path: "/login",
        name: "Login",

        component: () =>
            import(/* webpackChunkName: "Login" */ "../views/Login.vue"),
    },

    {
        path: "/allUsers",
        name: "Users",

        component: () =>
            import(/* webpackChunkName: "AllUsers" */ "../views/AllUsers.vue"),


    },

    {
        path: "/posts",
        name: "Posts",

        component: () =>
            import(/* webpackChunkName: "AllPosts" */ "../views/AllPosts.vue"),
        meta: { requiresAuth: true }

  },

  {
    path: "/my-posts",
    name: "MyPosts",
 
    component: () =>
        import(/* webpackChunkName: "MyPosts" */ "../views/MyPosts.vue"),


  },

  {
    path: "/create-post",
    name: "CreatePost",

    component: () =>
        import(/* webpackChunkName: "CreatePost" */ "../views/CreatePost.vue"),


    },

 
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        //  let test = window.localStorage.token;
        if (!store.state.token) {
            next({ name: "Login" });
        } else {
            next();
        }
    }
    else {
        next();
    }


})

/* router.onReady(router.push({ name: "Posts" })) */

/*router.afterEach((to) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.state.authToken) {
            router.push({name: "Posts"});
        }
    }
}) */

export default router;
