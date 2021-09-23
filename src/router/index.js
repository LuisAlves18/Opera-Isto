import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";

import Companhia from "@/views/Companhia.vue";
import MarioJoaoAlves from "@/views/MarioJoaoAlves.vue";
import Equipa from "@/views/Equipa.vue";

import Agenda from "@/views/Agenda.vue";

import Invencoes from "@/views/Invencoes.vue";

import Contactos from "@/views/Contactos.vue";

import Blog from "@/views/Blog.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/companhia",
    name: "Companhia",
    component: Companhia,
  },
  {
    path: "/marioJoaoAlves",
    name: "MarioJoaoAlves",
    component: MarioJoaoAlves,
  },
  {
    path: "/equipa",
    name: "Equipa",
    component: Equipa,
  },
  {
    path: "/agenda",
    name: "Agenda",
    component: Agenda,
  },
  {
    path: "/invencoes",
    name: "Invencoes",
    component: Invencoes,
  },
  {
    path: "/contactos",
    name: "Contactos",
    component: Contactos,
  },

  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
