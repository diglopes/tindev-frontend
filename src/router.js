import Vue from "vue";
import Router from "vue-router";

import Login from "@/views/Login";
import Home from "@/views/Home";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/dev",
      name: "home",
      component: Home
    }
  ]
});
