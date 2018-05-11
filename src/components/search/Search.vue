<template>
  <div class="container">
    <div class="card">

      <div class="card-header">
        <h2>Pesquisa Geral</h2>
      </div>

      <div class="card-body">

        <div class="row">

          <div class="col-md-6">
            <label for="">&nbsp;</label>
            <div class="form-group">
              <input type="text" class="form-control">
            </div>
          </div>

          <div class="col-md-3">
            <label>Ordenação</label>
            <app-select data-search="false">
              <option value="">Titulo</option>
              <option value="">Ano de publicação</option>
              <option value="">Código de acervo</option>
              <option value="">Tipo de obra</option>
              <option value="">Idioma</option>
              <option value="">Descrição física</option>
            </app-select>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import AppSelect from '../general/Select'
  export default {
    components: {
      AppSelect
    }
  }
</script>

<style scoped>

</style>
