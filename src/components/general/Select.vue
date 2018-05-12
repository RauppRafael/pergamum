<template>
  <select ref="select" data-class="form-control" data-style="form-control" :class="dataClass" :disabled="dataDisabled">
    <slot></slot>
  </select>
</template>

<script>
  import 'bootstrap/dist/js/bootstrap.min.js'
  import 'bootstrap-select/dist/css/bootstrap-select.min.css'
  import 'bootstrap-select/dist/js/bootstrap-select.min.js'

  export default {

    props: {
      dataWidth: {required: false},
      dataSelected: {required: false},
      dataSearch: {required: false, default: true, type: Boolean},
      dataClass: {required: false, default: ''},
      dataDisabled: {required: false, default: false},
    },

    data() {
      return {
        select: null
      }
    },

    computed: {

      width() {
        return this.dataWidth || '100%'
      },

      selected() {
        return this.dataSelected || ''
      },
    },

    methods: {

      init() {
        this.select = $(this.$refs.select)

        this.select.selectpicker({
          width: this.width,
          liveSearch: this.dataSearch,
          class: 'form-control'
        })

        this.select.on('changed.bs.select', (e) => {
          this.propagate()
        })

        this.setValue(this.selected)
      },

      setValue(v) {
        this.select.selectpicker('val', v)
      },

      render() {
        this.select.selectpicker('render')
        this.select.selectpicker('refresh')
      },

      propagate() {
        this.$emit('update', this.select.val())
      },

    },

    mounted() {
      this.init()
    },

    watch: {

      dataSelected(o) {
        this.setValue(o)
      },

      dataDisabled(o) {
        this.dataDisabled = o
        this.$nextTick(() => this.render())
      }
    }
  }
</script>

<style lang="scss">
  .bootstrap-select.show > .dropdown-menu > .dropdown-menu {
    display: block;
  }

  .bootstrap-select > .dropdown-menu > .dropdown-menu li.hidden {
    display: none;
  }

  .bootstrap-select > .dropdown-menu > .dropdown-menu li a {
    display: block;
    width: 100%;
    padding: 3px 1.5rem;
    clear: both;
    font-weight: 400;
    /*color: #292b2c;*/
    text-align: inherit;
    white-space: nowrap;
    background: 0 0;
    /*border: 0;*/
  }
</style>
