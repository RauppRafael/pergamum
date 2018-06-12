<template>
  <div class="book">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Busca</a></li>
        <li class="breadcrumb-item active"><a href="#">Nome do livro</a></li>
        <!--<li class="breadcrumb-item active" aria-current="page">Data</li>-->
      </ol>
    </nav>

    <h1>Nome do livro <button class="btn btn-primary">Reservar</button></h1>
    <h5 style="color: grey;">Autor: Rafael Raupp</h5>
    <h5>Resumo</h5>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aut beatae dicta dolore doloremque ducimus, earum est eveniet harum id, ipsa iste itaque, labore libero possimus qui ut voluptate?</p>
  </div>
</template>

<script>
  export default {
    name: "Book"
  }
</script>

<style lang="scss" scoped>
  .book {
    padding: 0 20px;
  }
</style>
