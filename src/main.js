import Vue from 'vue'
import App from './App.vue'

import store from './store'

// import general js
import 'popper.js/dist/popper.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// import general css
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

// import store from './store'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
