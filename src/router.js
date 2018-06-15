import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Book from 'components/Book/Book.vue'
import Search from 'components/search/Search.vue'

const router = new VueRouter({

    mode: 'history',

    routes: [
      {path: '/search', component: Search},
      // {path: '/book', redirect: '/book/info'},
      {path: '/book', component: Book},
      {path: '*', redirect: '/search'},
    ]

  }
)

export default router
