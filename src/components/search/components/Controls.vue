<template>
  <div>
    <div class="row">

      <div class="col-md-6">
        <label for="search">Busca</label>
        <div class="input-group">
          <input type="text" class="form-control" id="search">
          <div class="input-group-append">
            <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">Dropdown
            </button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
              <div role="separator" class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Separated link</a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <label>Buscar por</label>
        <select class="form-control">
          <option value="all">Tudo</option>
          <option value="title">Titulo</option>
          <option value="author">Autor</option>
          <option value="subject">Assunto</option>
        </select>
      </div>

      <div class="col-md-3">
        <label>Ordenação</label>
        <app-select :data-search="false">
          <option value="titulo">Titulo</option>
          <option value="ano">Ano de publicação</option>
          <option value="codigo">Código de acervo</option>
          <option value="tipo">Tipo de obra</option>
          <option value="idioma">Idioma</option>
          <option value="descricao">Descrição física</option>
        </app-select>
      </div>

      <template v-if="showAdditionalFilters">
        <div class="col-md-3">
          <div class="form-group">
            <label for="">Unidade</label>
            <input type="text" class="form-control" id="unity">
          </div>
        </div>

        <div class="col-md-3">
          <div class="form-group">
            <label for="">Tipo</label>
            <input type="text" class="form-control" id="type">
          </div>
        </div>

        <div class="col-md-3">
          <div class="form-group">
            <label for="">Coleção</label>
            <input type="text" class="form-control" id="collection">
          </div>
        </div>
      </template>

      <div class="col-md-3">
        <div class="form-group">
          <label for="ano">Ano de publição</label>
          <input type="text" class="form-control" id="ano">
        </div>
      </div>

    </div>
  </div>
</template>

<!--<div class="col-md-12">
  <div class="form-group" style="padding-top: 1.25rem;">
	<button class="btn btn-default btn-lg btn-block"
			@click="showAdditionalFilters = !showAdditionalFilters">
	  Mais filtros
	</button>
  </div>
</div>-->

<script>
  import AppSelect from '../../general/Select'

  export default {
    components: {
      AppSelect,
    },

    data() {
      return {
        showAdditionalFilters: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  $padding: 1.25rem;
  div[class*="col-"] {
    padding-top: $padding;

    &:last-child {
      padding-bottom: $padding;
    }
  }
</style>
