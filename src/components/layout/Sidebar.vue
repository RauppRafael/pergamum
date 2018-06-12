<template>
  <div class="sidebar">
    <!--<SearchSidebar></SearchSidebar>-->
    <BookSidebar></BookSidebar>
  </div>
</template>

<script>
  import SearchSidebar from './sidebars/SearchSidebar'
  import BookSidebar from './sidebars/BookSidebar'

  export default {
    components: {
      SearchSidebar,
      BookSidebar
    },
  }
</script>

<style lang="scss" scoped>
  .sidebar {
    margin-top: -20px;
    padding: 15px;
    background-color: lightgrey;
    flex: 0 0 300px;
  }
</style>
