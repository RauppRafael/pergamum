<template>
  <div>

    <div>
      <img src="https://loremflickr.com/300/425/paris,girl/all" alt="" class="img-fluid">
    </div>

    <div>
      <ul class="list-group-flush">
        <li class="list-group-item"
            :class="{active: active('info')}"
            @click="tab = 'info'">Dados do Acervo
        </li>
        <li class="list-group-item">Referencia</li>
        <li class="list-group-item"
            :class="{active: active('reservation')}"
            @click="tab = 'reservation'">Reservar
        </li>
        <li class="list-group-item">Exemplar</li>
        <li class="list-group-item">Marc</li>
      </ul>
    </div>

  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: String,
        required: true
      }
    },

    computed: {
      tab: {
        get() {
          return this.value
        },
        set(value) {
          this.$emit('input', value)
        }
      }
    },

    methods: {
      active(tab) {
        return this.tab === tab
      }
    }
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
