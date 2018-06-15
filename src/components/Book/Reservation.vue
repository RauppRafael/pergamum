<template>
  <div class="card">
    <div class="card-header">
      <h3>Reservar</h3>
    </div>

    <div class="card-body">
      <div class="row">

        <div class="col-sm-4">
          <div class="form-group">
            <label for="">Volume</label>
            <select class="form-control">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>

        <div class="col-sm-4">
          <div class="form-group">
            <label for="">Tema</label>
            <select class="form-control">
              <option value="Unico">Unico</option>
            </select>
          </div>
        </div>

        <div class="col-sm-4">
          <div class="form-group">
            <label for="">Unidade de informação</label>
            <select class="form-control">
              <option value="Biblioteca Central">Biblioteca Central</option>
              <option value="Biblioteca Dois">Biblioteca Dois</option>
              <option value="Biblioteca Três">Biblioteca Três</option>
            </select>
          </div>
        </div>

        <div class="col-sm-4">
          <div class="form-group">
            <label for="">Parte</label>
            <select class="form-control">
              <option value="">Unica</option>
            </select>
          </div>
        </div>

        <div class="col-sm-4">
          <div class="form-group">
            <label for="">???</label>
            <select class="form-control">
              <option value=""></option>
            </select>
          </div>
        </div>

        <div class="col-sm-4">
          <div class="form-group">
            <label for="">Localização</label>
            <select class="form-control">
              <option value="Todas">Todas</option>
            </select>
          </div>
        </div>

      </div>
    </div>

    <div class="card-footer">
      <button class="btn btn-primary pull-right">Reservar</button>
      <button class="btn btn-default pull-right"
              style="margin-right: 15px"
              @click="$emit('cancel')">Cancelar
      </button>
    </div>

  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  label {
    font-weight: 400;
  }
</style>
