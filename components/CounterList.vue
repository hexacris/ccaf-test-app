<template>
  <div id="counter-list">
    <template v-if="filteredCounters.length">
      <div v-for="(counter, index) in filteredCounters" :key="index" class="list">
        <Counter :item="counter" />
      </div>
    </template>
    <template v-else-if="$store.getters.searchTerm">
      <template v-if="filteredCounters.length">
        <div v-for="(counter, index) in filteredCounters" :key="index" class="list">
          <Counter :item="counter" />
        </div>
      </template>
      <template v-else>
        <h3>La busqueda no contiene resultados, intenta con otros parametros</h3>
      </template>
    </template>
    <template v-else>
      <h3>Listado de contadores vacios, por favor ingrese un contador nuevo</h3>
    </template>
  </div>
</template>

<script>
import Counter from './Counter'

export default {
  components: {
    Counter,
  },

  computed: {
    filteredCounters() {
      const counters = this.$store.getters.counters
      const searchTerm = this.$store.getters.searchTerm
      const greaterOrEqualTo = this.$store.getters.greaterOrEqualTo
      const filterTerm = this.$store.getters.filterTerm

      // SUM
      if (counters.length) {
        const sum = counters
          .map((item) => item.counter)
          .reduce((a, b) => {
            return a + b
          })

        this.$store.commit('counterSum', sum)
      }

      // FILTERS
      return counters
        .filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter((item) => item.counter >= greaterOrEqualTo)
        .sort((a, b) => {
          switch (filterTerm) {
            case 'name':
              return ('' + a.name).localeCompare(b.name)

            case 'counter':
              return a.counter - b.counter
          }
        })
    },
  },

  watch: {
    filteredCounters() {
      if (this.filteredCounters.length) {
        const sum = this.filteredCounters
          .map((item) => item.counter)
          .reduce((a, b) => {
            return a + b
          })

        this.$store.commit('counterSum', sum)
      } else {
        this.$store.commit('counterSum', 0)
      }
    },
  },

  created() {
    if (this.filteredCounters.length) {
      const sum = this.filteredCounters
        .map((item) => item.counter)
        .reduce((a, b) => {
          return a + b
        })

      this.$store.commit('counterSum', sum)
    }
  },
}
</script>

<style scoped lang="scss">
#counter-list {
  width: 100%;
}

ul {
  margin: 0;
  padding: 0;
}

h3 {
  text-align: center;
  font-size: 32px;
  color: white;
  padding-top: 50px;
}
</style>
