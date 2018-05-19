import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'

//vue resource
import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.http.options.root = 'http://127.0.0.1:3333/api/v1/';
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
import authModule from '@/modules/auth';

//vee-validate
import VeeValidate, {Validator} from 'vee-validate';
import validatorEs from '@/validator/es';
import validatorEn from '@/validator/en';
Validator.localize('es', validatorEs);
Vue.use(VeeValidate);
//TODO Validator con traducciones

//vue-tables-2
import {ClientTable} from 'vue-tables-2';
Vue.use(ClientTable, {}, false, 'bootstrap3', 'default');

//Almacén global de datos con vuex
export const store = new Vuex.Store({
  state: {
    processing: false,
    language: 'es'
  },
  actions: {
    [globalTypes.actions.changeLanguage]: ({commit}, lang) => {
      commit(globalTypes.mutations.setLanguage, lang);
      switch (lang){
        case 'en': {
          Validator.localize('en', validatorEn);
          break;
        }
        case 'es': {
          Validator.localize('es', validatorEs);
          break;
        }
      }
    }
  },
  getters: {
    [globalTypes.getters.processing]: state => state.processing,
    [globalTypes.getters.language]: state => state.language,
  },
  mutations: {
    [globalTypes.mutations.stopProcessing] (state) {
      state.processing = false;
    },
    [globalTypes.mutations.startProcessing] (state) {
      state.processing = true;
    },
    [globalTypes.mutations.setLanguage] (state, data) {
      state.language = lang;
    }
  },
  modules: {
    authModule,
  }
});

//vue traducciones
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);
import messages from '@/translations';
const i18n = new VueI18n({
  locale: store.state.language,
  messages
})

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  i18n,
  router
})
