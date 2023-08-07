// main.js
import Vue from "vue";
import App from "./App.vue"
import './style/tailwind.css'

new Vue({
   el: "#app",
   render: (h) => h(App)
}).$mount();
