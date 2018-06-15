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
          <a class="dropdown-item" href="#">Renovação</a>
          <a class="dropdown-item" href="#">Reservas</a>
          <a class="dropdown-item" href="#">Historico</a>
          <a class="dropdown-item" href="#">Débito</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Material Pendente</a>
          <a class="dropdown-item" href="#">Declaração de Nada Consta</a>
        </div>
      </div>

    </div>

    <div class="search-bar">
      <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>

    <div style=" width: 400px; text-align: right;">
      <h3>user menu</h3>
    </div>
  </nav>
</template>

<script>
  export default {}
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
