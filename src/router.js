import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Book from 'components/Book.vue'
import Search from 'components/search/Search.vue'

const router = new VueRouter({

    mode: 'history',

    routes: [
      {path: '/search', component: Search},
      {path: '/book', component: Book},
      {path: '*', redirect: '/search'},
    ]

  }
)

export default router
