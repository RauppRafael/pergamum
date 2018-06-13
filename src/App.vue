<template>
  <div id="app">
    <app-header></app-header>

    <div class="app">
      <app-sidebar></app-sidebar>

      <!--<app-search></app-search>-->
      <!--<app-book></app-book>-->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import AppHeader from './components/layout/Header'
  import AppSearch from './components/search/Search'
  import AppSidebar from './components/layout/Sidebar'
  import AppBook from './components/Book'

  export default {
    components: {
      AppHeader,
      AppSearch,
      AppSidebar,
      AppBook,
    },
  }
</script>

<style lang="scss">
  @import './assets/sass/app.scss';

  .app {
    display: flex;
    /*align-items: stretch;*/
  }
</style>
