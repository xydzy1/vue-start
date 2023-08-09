// main.js
import Vue from "vue";
import VueRouter from 'vue-router'
import router from './router'
import App from "./App.vue"
import axios from 'axios'
import './style/tailwind.css'
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
import './assets/part1.css'



Vue.use(ElementUI)
Vue.use(VueRouter);

new Vue({
   router,
   el: "#app",
   render: (h) => h(App)
}).$mount();
