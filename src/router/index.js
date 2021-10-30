import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import Login                        from "../views/Login.vue";
import ConfirmacionReservas         from "../views/ConfirmacionReservas.vue";
import ListadeReservas              from "../views/ListadeReservas.vue";
import Reservar                     from "../views/Reservar.vue";
import Error404                     from "../views/Error404.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/confirmacionreservas",
    name: "ConfirmacionReservas",
    component: ConfirmacionReservas,
  },
  {
    path: "*",
    name: "Error404",
    component: Error404,
  },
  {
    path: "/listadereservas",
    name: "ListadeReservas",
    component: ListadeReservas,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/reservar",
    name: "Reservar",
    component: Reservar,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
