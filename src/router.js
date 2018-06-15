import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Book from 'components/Book/Book.vue'
import Search from 'components/search/Search.vue'
import Lending from 'components/lending/Lending.vue'

const router = new VueRouter({

    mode: 'history',

    routes: [
      {path: '/book', component: Book},
      {path: '/search', component: Search},
      {path: '/lending', component: Lending},
      {path: '*', redirect: '/search'},
    ]

  }
)

export default router
