import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuex from './vuex';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'animate.css/animate.min.css';
import './assets/variables.scss';

Vue.config.productionTip = false

new Vue({
  router,
  store: vuex,
  render: h => h(App)
}).$mount('#app')
