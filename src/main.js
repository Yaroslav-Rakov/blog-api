import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import axios from 'axios'
import VueAxios from 'vue-axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vuelidate from 'vuelidate'
//  import login from './views/Login.vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

axios.defaults.baseURL = `https://nodejs-test-api-blog.herokuapp.com/api/v1`
axios.defaults.headers.common["Authorization"] = localStorage.token;

const authInstance = axios.create({
  baseURL: 'https://nodejs-test-api-blog.herokuapp.com/api/v1'
})

Vue.prototype.$auth = authInstance

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(Vuelidate)

Vue.use(VueAxios, axios)

Vue.config.productionTip = false;

new Vue({
  router,
    store,
  //  beforeCreate() { this.$store.state.test = window.localStorage.token; },
    beforeCreate() { 
    //   let user = {email: "yaroslav@gmail.com", password: "123456"}
    //  this.$store.commit("SET_LOGIN", user)
      
    //   this.$store.dispatch("ACTION_LOGIN") 
    
    },

  //  created() { this.$store.state.test = window.localStorage.token; },
   // beforeUpdate() { this.$store.commit('initialiseStore'); },
  //  beforeCreate() { this.$store.dispatch("ACTION_LOGIN") },

  render: (h) => h(App),
}).$mount("#app");
