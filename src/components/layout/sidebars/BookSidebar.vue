<template>
  <div>

    <div>
      <img src="https://loremflickr.com/300/425/paris,girl/all" alt="" class="img-fluid">
    </div>

    <div>
      <ul class="list-group-flush">
        <li class="list-group-item active">Dados do Acervo</li>
        <li class="list-group-item">Referencia</li>
        <li class="list-group-item">Reservar</li>
        <li class="list-group-item">Exemplar</li>
        <li class="list-group-item">Marc</li>
        <!--<li class="list-group-item">Solicitações de emprestimo entre biblioteca</li>-->
      </ul>
    </div>

  </div>
</template>

<script>
  export default {
    name: "BookSidebar"
  }
</script>

<style lang="scss" scoped>
  .list-group-flush {
    padding: 0;
    margin-top: 10px;

    > * {
      /*background-color: transparent;*/
    }
  }
</style>
