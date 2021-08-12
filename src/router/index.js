import Vue from "vue";
import VueRouter from "vue-router";
import createWebHistory from "vue-router";
import Home from "../views/Home.vue";
 import store from '../store/store.js'
// import login from '../views/Login.vue'

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

    {
        path: "/account",
        name: "Account",
    
        component: () =>
            import(/* webpackChunkName: "Account" */ "../views/Account.vue"),
    
    
        },

 
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
    console.log('from router store.state.test', store.state.test);
    const redirect = to.matched.some(record => record.meta.requiresAuth) && !store.state.token?
        { name: "Login" }: undefined;

    console.log('redirect', redirect);
    next(redirect);
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
