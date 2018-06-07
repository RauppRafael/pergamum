<template>
  <div id="app">
    <app-header></app-header>

    <div class="app">
      <app-sidebar></app-sidebar>

      <app-search></app-search>
    </div>
  </div>
</template>

<script>
  import AppHeader from './components/layout/Header'
  import AppSearch from './components/search/Search'
  import AppSidebar from './components/layout/Sidebar'

  export default {
    components: {
      AppHeader,
      AppSearch,
      AppSidebar
    }
  }
</script>

<style lang="scss">
  @import './assets/sass/app.scss';

  .app {
    display: flex;
    align-items: stretch;
  }
</style>
