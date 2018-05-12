<template>
  <div class="container">
    <div class="card">

      <div class="card-header">
        <h2>Pesquisa Geral</h2>
      </div>

      <div class="card-body">
        <app-controls></app-controls>
      </div>

      <div class="card-footer">
        <button class="btn btn-default">Limpar</button>
        <button class="btn btn-primary">Buscar</button>
      </div>

    </div>
  </div>
</template>

<script>
  import AppSelect from '../general/Select'
  import AppControls from './components/Controls'

  export default {
    components: {
      AppSelect,
      AppControls
    }
  }
</script>

<style lang="scss" scoped>
  .card {

    .card-body {
      padding: 0 1.25rem;
    }

    .card-footer {
      display: flex;
      justify-content: flex-end;

      .btn {
        margin: 0 0 0 1.25rem;
      }
    }
  }
</style>
