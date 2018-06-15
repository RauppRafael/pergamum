<template>
  <div>

    <h4>Filtros</h4>

    <div>
      <span class="badge badge-primary"
            style="margin-right: 5px;">
        Titulo da sua busca &times;
      </span>
      <span class="badge badge-primary"
            style="margin-right: 5px;"
            v-for="n in 3">
        Primary &times;
      </span>
    </div>

    <div class="filters">

      <div>
        <h6>Tipo de obra</h6>
        <ul>
          <li><a href="javascript:void(0)">Livro</a></li>
          <li><a href="javascript:void(0)">Artigo</a></li>
          <li><a href="javascript:void(0)">Etc</a></li>
          <li><a href="javascript:void(0)">Outro</a></li>
        </ul>
      </div>

      <div>
        <h6>Unidade de informação</h6>
        <ul>
          <li><a href="javascript:void(0)">Biblioteca Central</a></li>
          <li v-for="n in 3"><a href="javascript:void(0)">Biblioteca ....</a></li>
        </ul>
      </div>

      <div>
        <h6>Data de publicação</h6>
        <ul>
          <li v-for="n in 5"><a href="javascript:void(0)">{{ 2012 - n}}</a></li>
        </ul>
      </div>

      <div>
        <h6>Assunto</h6>
        <ul>
          <li v-for="n in 3"><a href="javascript:void(0)">Assunto {{n}}</a></li>
        </ul>
      </div>

    </div>
  </div>

</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>
  .filters {
    margin-top: 20px;

    ul {
      list-style-type: none;
      padding-left: 15px;
    }
  }
</style>
