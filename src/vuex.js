import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuState: false
  },
  mutations: {
    handleMenuState: (state, status) => {
      state.menuState = status;
    }
  },
  actions: {

  }
});
