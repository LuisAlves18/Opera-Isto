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
    meta:{
      title:"Home",
    }
  },
  {
    path: "/companhia",
    name: "Companhia",
    component: Companhia,
    meta:{
      title:"Companhia"
    }
  },
  {
    path: "/marioJoaoAlves",
    name: "MarioJoaoAlves",
    component: MarioJoaoAlves,
    meta:{
      title:"Mario Joao Alves"
    }
  },
  {
    path: "/equipa",
    name: "Equipa",
    component: Equipa,
    meta:{
      title:"Equipa"
    }
  },
  {
    path: "/agenda",
    name: "Agenda",
    component: Agenda,
    meta:{
      title:"Agenda"
    }
  },
  {
    path: "/invencoes",
    name: "Invencoes",
    component: Invencoes,
    meta:{
      title:"Invenções"
    }
  },
  {
    path: "/contactos",
    name: "Contactos",
    component: Contactos,
    meta:{
      title:"Contactos"
    }
  },

  {
    path: "/blog",
    name: "Blog",
    component: Blog,
    meta:{
      title:"Blog"
    }
  },
];

const router = new VueRouter({
  routes,
});

export default router;
