import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

const messages = {
  zh: {
    menu: {
      menu: '菜单',
      main: '主页',
      works: '作品',
      about: '关于'
    },

  },
  en: {
    menu: {
      menu: 'menu',
      main: 'Main',
      works: 'Works',
      about: 'About'
    },

  }
}

export default new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
})