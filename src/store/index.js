import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        productos: {
            plantasInterior: [
                { name: 'Filodendro', img: 'https://images.pexels.com/photos/54323/rose-composites-flowers-spring-54323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', id: 1 },
                { name: 'Petunias', img: 'https://images.pexels.com/photos/3686216/pexels-photo-3686216.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', id: 2 },
                { name: 'Dolar', img: 'https://images.pexels.com/photos/1179863/pexels-photo-1179863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', id: 3 }
            ],
            plantasExterior: [
                { name: 'Gomero', img: 'https://images.pexels.com/photos/1477166/pexels-photo-1477166.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', id: 4 },
                { name: 'Maravilla', img: 'https://images.pexels.com/photos/46216/sunflower-flowers-bright-yellow-46216.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', id: 5 },
                { name: 'Rosa', img: 'https://images.pexels.com/photos/1369068/pexels-photo-1369068.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', id: 6 }
            ],
            arbol: [
                { name: 'Arbol Limon', img: 'https://images.pexels.com/photos/129574/pexels-photo-129574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', id: 7 },
                { name: 'Arbol Naranja', img: 'https://images.pexels.com/photos/3804878/pexels-photo-3804878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', id: 8 },
                { name: 'Arbol Maqui', img: 'https://images.pexels.com/photos/1587837/pexels-photo-1587837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', id: 9 }
            ]
        }
    },
    mutations: {},
    actions: {},
    modules: {}
})