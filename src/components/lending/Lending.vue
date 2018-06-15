<template>
  <div class="app">
    <app-sidebar>
      <lending-sidebar></lending-sidebar>
    </app-sidebar>

    <div class="lending container">

      <div class="card">
        <div class="card-header">
          <h3>Renovação</h3>
        </div>

        <div class="card-body">
          <table class="table table-striped">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome do Livro</th>
              <th scope="col">Data do Emprestimo</th>
              <th scope="col">Data do Vencimento</th>
              <th scope="col">Renovar</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="n in 5">
              <th scope="row">{{n}}</th>
              <td>
                <router-link to="/book">Livro {{n*2+2}}</router-link>
              </td>
              <td>{{n+3}}/{{n*2}}/2018</td>
              <td>{{n+25}}/{{n*2}}/2018</td>
              <td>
                <button class="btn btn-primary"
                        data-toggle="modal"
                        data-target="#modal">Renovar</button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h3>Histórico de renovações</h3>
        </div>

        <div class="card-body">
          <table class="table table-striped">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome do Livro</th>
              <th scope="col">Renovado em</th>
              <th scope="col">Renovado até</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="n in 3">
              <th scope="row">{{n}}</th>
              <td>Livro {{n*2+2}}</td>
              <td>{{n+3}}/{{n*2}}/2018</td>
              <td>{{n+25}}/{{n*2}}/2018</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>

    <app-modal></app-modal>
  </div>
</template>

<script>
  import AppSidebar from 'components/layout/Sidebar'
  import LendingSidebar from './LendingSidebar'
  import AppModal from './Modal'

  export default {
    components: {
      AppSidebar,
      LendingSidebar,
      AppModal,
    },

    data() {
      return {
        showModal: false,
      }
    },
  }
</script>

<style scoped>
  .card {
    margin-bottom: 35px;
  }

  .card-body {
    padding: 0;
  }
</style>
