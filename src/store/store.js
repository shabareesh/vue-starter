import Vuex from 'vuex';
import Vue from 'vue';
import weatherList from './modules/weatherList/weatherListModule';


Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    weatherList,
  },
});

export default store;
