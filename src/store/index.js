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
                name: "O que é uma Ária?",
                ativo: true,
            }, {
                id: 2,
                name: "Alibábá e as 40 Canções",
                ativo: true,
            }, {
                id: 3,
                name: "To be or not to Britten",
                ativo: true,
            }, {
                id: 4,
                name: "A Rolha da Garrafa do Rei D’Aonde?",
                ativo: true,
            }, {
                id: 5,
                name: "A Flauta Mágica vista da Lua",
                ativo: true,
            }, {
                id: 6,
                name: "Pica-Pau Amarelo",
                ativo: true,
            }, {
                id: 7,
                name: "O Olho Esquerdo de Júlio Verne",
                ativo: true,
            },
            {
                id: 8,
                name: "Serena Serenata",
                ativo: true,
            }
        ],
        workshops: [{
            id: 1,
            name: "ISTO DAVA UMA ÓPERA?",
            location: "VILA REAL, Teatro Municipal",
            date: "30, 31 Janeiro 2020, 1 Fevereiro"
        }],
        team: [{
            id: 1,
            nome: 'Alexandre Reis',
            photoName: 'alexandre-reis',
            funcao: 'Flautista',
            bio: "",
        }, {
            id: 2,
            nome: 'Ângela Alves',
            photoName: 'angela-alves',
            funcao: 'Cantora',
            bio: "",
        }, {
            id: 3,
            nome: 'Ângela Marques',
            photoName: 'angela-marques',
            funcao: 'Cantora',
            bio: "",
        }, {
            id: 4,
            nome: 'David Lloyd',
            photoName: 'david-lloyd',
            funcao: 'Violinista',
            bio: "",
        }, {
            id: 5,
            nome: 'Gabriel Neves',
            photoName: 'gabriel-neves',
            funcao: 'Cantor',
            bio: "",
        }, {
            id: 6,
            nome: 'João Tiago',
            photoName: 'joao-tiago',
            funcao: 'Pianista',
            bio: "",
        }, {
            id: 7,
            nome: 'Mário Alves',
            photoName: 'maria-alves',
            funcao: 'Cantor',
            bio: "",
        }, {
            id: 8,
            nome: 'Miguel Reis',
            photoName: 'miguel-reis',
            funcao: 'Cantor',
            bio: "",
        }, {
            id: 9,
            nome: 'Paulina Machado',
            photoName: 'paulina-machado',
            funcao: 'cantora',

        }, {
            id: 10,
            nome: 'Ângela Alves',
            photoName: 'angela-alves',
            funcao: 'cantora',
            bio: "",
        }, {
            id: 11,
            nome: 'Ângela Alves',
            photoName: 'angela-alves',
            funcao: 'cantora',
            bio: "",
        }, {
            id: 12,
            nome: 'Ângela Alves',
            photoName: 'angela-alves',
            funcao: 'cantora',
            bio: "",
        }, ]
    },

    mutations: {},
    actions: {},
    modules: {}
});