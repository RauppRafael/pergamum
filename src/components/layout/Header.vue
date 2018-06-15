<template>
  <nav class="nav navbar-light bg-light">

    <div style="display: flex; align-items: center; width: 400px">
      <h3 class="logo">UFSC</h3>

      <div>
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
           aria-haspopup="true" aria-expanded="false">
          Empréstimos
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <router-link to="/lending" class="dropdown-item">Renovação</router-link>
          <router-link to="/lending" class="dropdown-item">Reservas</router-link>
          <router-link to="/lending" class="dropdown-item">Historico</router-link>
          <router-link to="/lending" class="dropdown-item">Débito</router-link>
          <div class="dropdown-divider"></div>
          <router-link to="/lending" class="dropdown-item">Material Pendente</router-link>
          <router-link to="/lending" class="dropdown-item">Declaração de Nada Consta</router-link>
        </div>
      </div>

    </div>

    <div class="search-bar">
      <div class="form-inline">
        <input class="form-control mr-sm-2" type="search"
               placeholder="Search" aria-label="Search" v-model="search">
        <router-link class="btn btn-outline-success my-2 my-sm-0"
                     :to="{path: '/search', query: {search: search}}">Search
        </router-link>
      </div>
    </div>

    <div style=" width: 400px; text-align: right;">
      <h3>user menu</h3>
    </div>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        search: ''
      }
    }
  }
</script>

<style lang="scss" scoped>

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 20px;
    width: 100%;

    > * {
      margin: 5px;
    }

    .logo {
      padding: 5px;
      margin: 0;
      justify-self: flex-start;
    }

    .search-bar {
      margin: auto;
    }
  }

</style>
