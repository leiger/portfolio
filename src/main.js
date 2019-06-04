import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuex from './vuex';
import i18n from './i18n';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'animate.css/animate.min.css';
import './assets/tech-font/iconfont.css'
import './assets/variables.scss';

Vue.config.productionTip = false

new Vue({
  router,
  store: vuex,
  i18n,
  render: h => h(App)
}).$mount('#app')
