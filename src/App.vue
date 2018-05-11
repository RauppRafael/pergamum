<template>
  <div id="app">
    <app-header></app-header>

    <app-search></app-search>
  </div>
</template>

<script>
  import AppHeader from './components/layout/Header'
  import AppSearch from './components/search/Search'

  export default {
    components: {
      AppHeader,
      AppSearch
    }
  }
</script>

<style lang="scss">
</style>
