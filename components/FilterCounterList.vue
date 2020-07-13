<template>
  <input v-model="search" class="custom-input-1" type="text" placeholder="Busqueda por Nombre" @input="filter" />
</template>

<script>
export default {
  data() {
    return {
      search: this.$store.getters.filters.searchTerm || null,
    }
  },

  methods: {
    filter() {
      this.$store.commit('filterSearch', this.search)
    },
  },
}
</script>

<style></style>
