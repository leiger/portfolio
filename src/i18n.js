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
    works: {
      joyReserve: {
        name: '乐享其约',
        type: '大学生创新创业项目',
        desc: '最方便的微信预约系统',
        position: '职位',
        position_desc: '前端负责人',
        time: '时间',
        time_desc: '2016年6月 - 2017年9月',
        website: '网址',
        details: {
          title: '基于微信公众号的预约系统展示',
          desc: [
            '实时预约',
            '短信和微信预提醒',
            '灵活的支付方式',
            '浏览网站查看更多信息!'
          ]
        }
      },
      vmall: {
        name: 'Vmall',
        type: '类型',
        type_desc: '个人项目',
        desc: '基于Vue的电子商务系统',
        time: '时间',
        time_desc: '2017年10月 - 现在',
        primary_tech: '主要技术',
        site_new: '网址（新）',
        site_old: '网址（旧）',
        vmall1: [
          '前后端分离的全栈项目',
          '响应式页面设计',
          '支持https',
        ],
        vmall2: [
          '基于Vmall1',
          '全新的页面设计',
          'Restful Api设计',
          '轻松更改网站风格',
          '后台管理系统(基于React)',
          '更多功能敬请期待'
        ]
      },
      ruishen: {
        name: '瑞森豆九',
        type: '大学生创新创业项目',
        desc: '年轻化的，有自己粉丝的特产品牌',
        position: '职位',
        position_desc: '网站负责人',
        time: '时间',
        time_desc: '2015年9月 - 2016年5月',
        details: {
          title: '关于豆九',
          desc: [
            '这是我在大学本科中的第一个创新创业项目，我们当时的目标是在自己的网站上卖江西萍乡的一种辣条',
            '下面是我们产品的展示',
            '豆九是我们创建的卡通形象，也是我们的吉祥物嘿嘿'
          ]
        }
      },
      portfolio: {

      }
    }

  },
  en: {
    menu: {
      menu: 'menu',
      main: 'Main',
      works: 'Works',
      about: 'About'
    },
    works: {
      joyReserve: {
        name: 'JoyReserve',
        type: 'StartUp',
        desc: 'A Convenient Reservation System',
        position: 'Position',
        position_desc: 'Co-founder',
        time: 'Time',
        time_desc: 'Jun 2016 - Sep 2017',
        website: 'Website',
        details: {
          title: 'Mobile Reservation System for customers based on Wechat Official Account',
          desc: [
            'Real-time Reservation',
            'Text and Wechat Pre Notification',
            'Flexable payment',
            'More on the website!'
          ]
        }
      },
      vmall: {
        name: 'Vmall',
        type: 'Type',
        type_desc: 'Personal Project',
        desc: 'Open Source, New E-commerce site',
        time: 'time',
        time_desc: 'Oct 2017 - Present',
        primary_tech: 'Primary Tech',
        site_new: 'Site (new)',
        site_old: 'Site (old)',
        vmall1: [
          'Full Stack Project',
          'Responsive Design',
          'Https support',
        ],
        vmall2: [
          'Based on Vmall1',
          'New Design',
          'Restful Api',
          'Easily change web Style(based on less)',
          'Admin Manage System (React)',
          'More Functions Coming soon!'
        ]
      },
      ruishen: {
        name: 'Ruishen \nTechnology',
        desc: 'The birth of dou9',
        position: 'Position',
        position_desc: 'Co-founder',
        time: 'Time',
        time_desc: 'Sep 2015 - May 2016',
        details: {
          title: 'About dou9.',
          desc: [
            'This is my first startup project. Our goal was to sell a local snack food online.',
            'And below is our product.',
            'dou9 was born as our brand character as well as our mascot.'
          ]
        }
      },
      portfolio: {

      }
    }
  }
}

export default new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
})