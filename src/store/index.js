/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        spetacles: [{
            id: 1,
            name_id: 5,
            location: "PORTO, Salta Folhinhas",
            date: "14 Março 2020, 17:30",

        }, {
            id: 2,
            name_id: 5,
            location: "PORTO, Salta Folhinhas",
            date: "14 Março 2020, 17:30",

        }, {
            id: 3,
            name_id: 5,
            location: "PORTO, Salta Folhinhas",
            date: "14 Março 2020, 17:30",
        }],
        shows: [{
                id: 1,
                name: "O que é uma Ária?"
            }, {
                id: 2,
                name: "Alibábá e as 40 Canções"
            }, {
                id: 3,
                name: "To be or not to Britten"
            }, {
                id: 4,
                name: "A Rolha da Garrafa do Rei D’Aonde?"
            }, {
                id: 5,
                name: "A Flauta Mágica vista da Lua"
            }, {
                id: 6,
                name: "Pica-Pau Amarelo"
            }, {
                id: 7,
                name: "O Olho Esquerdo de Júlio Verne"
            },
            {
                id: 8,
                name: "Serena Serenata"
            }
        ],
        workshops: [{
            id: 1,
            name: "ISTO DAVA UMA ÓPERA?",
            location: "VILA REAL, Teatro Municipal",
            date: "30, 31 Janeiro 2020, 1 Fevereiro"
        }]
    },
    mutations: {},
    actions: {},
    modules: {}
});