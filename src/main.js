/* eslint-disable */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "animate.css";
import AOS from 'aos'
import 'aos/dist/aos.css' 
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
    router,
    store,
    render: h => h(App),
    mounted() {
        AOS.init()
      },
}).$mount("#app");