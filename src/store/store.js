import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    menu: [
      {
        name: 'Kuma Nabe',
        description: `Rilakkuma's famous hot pot with cabbage, bear meat, egg, and more!`,
        ingredients: ['egg', 'tofu', 'cabbage', 'kuma meat', 'shiitake', 'enoki', 'thiny sliced pork', 'quail egg']
      },
      {
        name: 'Boss Kuma Croissant',
        description: `Boss Kuma's delicate, fluffy, light pastry with chocolate`,
        ingredients: ['almond flour', 'butter', 'chocolate']
      }
    ]
  },
  mutations: {
    add(state, newItem) {
      console.log('adding new item to menu ', newItem)
      state.menu.push(newItem)
    }
  },
  getters: {
    menu: state => {
      console.log('state ', state.menu)
      return state.menu
    }
  }
})
