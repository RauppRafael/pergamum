<template>
  <div class="container">
    <div class="row">

      <div class="col-sm-3" v-for="n in 10">
        <div class="card" >
          <img class="card-img-top" src="https://loremflickr.com/320/240" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
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
  margin: 15px;
}
</style>
