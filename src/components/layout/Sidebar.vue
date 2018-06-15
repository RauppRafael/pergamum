<template>
  <div class="sidebar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
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
