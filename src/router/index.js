import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Agenda from "@/views/Agenda.vue";
import Edicoes from "@/views/Edicoes.vue";
import Educacao from "@/views/Educacao.vue";
import Espetaculos from "@/views/Espetaculos.vue";


Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/agenda",
        name: "Agenda",
        component: Agenda
    },
    {
        path: "/edicoes",
        name: "Edicoes",
        component: Edicoes
    },
    {
        path: "/educacao",
        name: "Educacao",
        component: Educacao
    },
    {
        path: "/espetaculos",
        name: "Espetaculos",
        component: Espetaculos
    }

];

const router = new VueRouter({
    routes
});

export default router;