<template>
  <input
    id="greaterOrEqualTo"
    v-model="greaterOrEqualTo"
    class="custom-input-2"
    type="text"
    placeholder="0"
    style="width: 100px; margin-right: 20px;"
    @input="filter"
  />
</template>

<script>
export default {
  data() {
    return {
      greaterOrEqualTo: this.$store.getters.filters.greaterOrEqualTo || null,
    }
  },

  methods: {
    filter() {
      this.$store.commit('filterGreaterOrEqualTo', this.greaterOrEqualTo)
    },
  },
}
</script>

<style>
input[id='greaterOrEqualTo']::placeholder {
  color: grey;
}
</style>
