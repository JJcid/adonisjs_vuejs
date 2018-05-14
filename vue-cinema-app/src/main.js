import Vue from 'vue'
import App from '@/App.vue'

//vue resource
import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.http.options.root = 'http://127.0.0.1:333/api/v1/';
Vue.http.interceptors.push((request, next) => {
  request.headers.set('Authorization', `Bearer ${window.localStorage.getItem('_token')}`);
  next();
});

//vuex
import Vuex from 'vuex';
Vue.use(Vuex);

//blockui
import BlockUI from 'vue-blockui';
Vue.use(BlockUI);

//módulos y tipos
import globalTypes from '@/types/global';

//vee-validate
import VeeValidate, {Validator} from 'vee-validate';
Vue.use(VeeValidate);
//TODO Validator con traducciones

//vue-tables-2
import {ClientTable} from 'vue-tables-2';
Vue.use(ClientTable, {}, false, 'boostrap3', 'default');

//Almacén global de datos con vuex
export const store = new Vuex.Store({
  state: {

  },
  actions: {

  },
  getters: {

  },
  mutations: {

  },
  modules: {

  }
});

new Vue({
  el: '#app',
  render: h => h(App),
  store
})
