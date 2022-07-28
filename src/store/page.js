import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    currentScrollY: 0,
    isShowHeader: true
  },

  getters: {
    currentScrollY: s => s.currentScrollY,
    isShowHeader: s => s.isShowHeader
  },

  actions: {
    setCurrentScrollY ({ commit }, y) {
      commit('setCurrentScrollY', {y});  
    },
    setIsShowHeader({commit}, direct) {
      commit('setIsShowHeader', {direct});
    }
  },
  mutations: {
    setCurrentScrollY(s, {y}) {
      s.currentScrollY = y;
    },
    setIsShowHeader(s, {direct}) {
      s.isShowHeader = direct;
    }
  }
});

export default store;