<template>
  <select v-model="term" style="width: 250px;" @change="filter">
    <option value="">Filtrar Por</option>
    <option value="name">Nombre</option>
    <option value="counter">Valor</option>
  </select>
</template>

<script>
export default {
  data() {
    return {
      term: this.$store.getters.filters.filterTerm || '',
    }
  },

  methods: {
    filter() {
      this.$store.commit('filterTerm', this.term)
    },
  },
}
</script>

<style>
.custom-select {
  position: relative;
  font-family: Arial;
}

select {
  min-height: 50px;
  background-color: #5e6ac0;
  border-radius: 10px;
  border: 0;
  box-shadow: none;
  color: #fff;
  padding: 10px;
  font-size: 18px;
}

.select-selected {
  background-color: DodgerBlue;
}

.select-selected:after {
  position: absolute;
  content: '';
  top: 14px;
  right: 10px;
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-color: #fff transparent transparent transparent;
}

.select-selected.select-arrow-active:after {
  border-color: transparent transparent #fff transparent;
  top: 7px;
}

.select-items div,
.select-selected {
  color: #ffffff;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
  cursor: pointer;
  user-select: none;
}

.select-items {
  position: absolute;
  background-color: DodgerBlue;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
}

.select-hide {
  display: none;
}

.select-items div:hover,
.same-as-selected {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
