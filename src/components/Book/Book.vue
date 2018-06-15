<template>
  <div class="app">

    <app-sidebar>
      <book-sidebar v-model="tab"></book-sidebar>
    </app-sidebar>

    <div class="book">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/search">Busca</router-link></li>
          <li class="breadcrumb-item active"><a href="javascript:void(0)">Nome do livro</a></li>
        </ol>
      </nav>

      <h1>Nome do livro
        <button class="btn btn-primary" @click="tab = 'reservation'">Reservar</button>
      </h1>
      <h5 style="color: grey;">Autor: Rafael Raupp</h5>
      <h5>Resumo</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aut beatae dicta dolore doloremque
        ducimus, earum est eveniet harum id, ipsa iste itaque, labore libero possimus qui ut voluptate?</p>

      <table class="table table-bordered" v-if="tab === 'info'">
        <tbody>
        <tr>
          <th>Localizaçao</th>
          <td>{{lorem}}</td>
        </tr>
        <tr>
          <th>Notas locais</th>
          <td>{{lorem}}</td>
        </tr>
        <tr>
          <th>Assuntos</th>
          <td>{{lorem}}</td>
        </tr>
        <tr>
          <th>Número de chamada</th>
          <td>{{lorem}}</td>
        </tr>
        </tbody>
      </table>

      <app-reservation v-else></app-reservation>

    </div>
  </div>
</template>

<script>
  import AppSidebar from 'components/layout/Sidebar'
  import BookSidebar from 'components/Book/BookSidebar'
  import AppReservation from './Reservation'

  export default {
    components: {
      AppSidebar,
      BookSidebar,
      AppReservation,
    },
    data() {
      return {
        lorem: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, assumenda cumque illo inventore iste laboriosam? Alias consequatur, deserunt non nostrum pariatur perferendis provident! Atque id molestiae nobis, quasi vel voluptas.",
        tab: 'info'
      }
    },
  }
</script>

<style lang="scss" scoped>
  .book {
    padding: 0 20px;

    .reservation-tab {
      width: 100%;
      /*border: 1px solid grey;*/
    }
  }
</style>
