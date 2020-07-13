import Vuex from 'vuex'

export const state = () => ({
  /*
  counterList: [
    {
      name: 'Counter D',
      counter: 10,
    },
    {
      name: 'Counter B',
      counter: 20,
    },
    {
      name: 'Counter C',
      counter: 5,
    },
  ],
  */
  counterList: JSON.parse(localStorage.getItem('counters')) || [],
  filters: JSON.parse(sessionStorage.getItem('filters')) || {
    greaterOrEqualTo: 0,
    searchTerm: '',
    filterTerm: '',
  },
  counterSum: 0,
})

export const getters = {
  counters(state) {
    return state.counterList
  },
  filters(state) {
    return state.filters
  },
  searchTerm(state) {
    return state.filters.searchTerm
  },
  greaterOrEqualTo(state) {
    return state.filters.greaterOrEqualTo
  },
  filterTerm(state) {
    return state.filters.filterTerm
  },
  counterSum(state) {
    return state.counterSum
  },
}

export const actions = {
  createCounter({ commit }, { counterName }) {
    commit('create', counterName)
  },
  removeCounter({ commit }, { counter }) {
    commit('remove', counter)
  },
  incrementCounter({ commit }, { counter }) {
    commit('add', counter)
  },
  decreaseCounter({ commit }, { counter }) {
    commit('substract', counter)
  },
}

export const mutations = {
  create(state, counterName) {
    state.counterList.push({
      name: counterName,
      counter: 0,
    })
    localStorage.setItem('counters', JSON.stringify(state.counterList))
  },

  remove(state, counter) {
    const counters = state.counterList
    counters.splice(counters.indexOf(counter), 1)
    localStorage.setItem('counters', JSON.stringify(state.counterList))
  },

  add(state, counter) {
    const counters = state.counterList
    if (counters[counters.indexOf(counter)].counter < 20) {
      state.counterList[counters.indexOf(counter)].counter++
    }
    localStorage.setItem('counters', JSON.stringify(state.counterList))
  },

  substract(state, counter) {
    const counters = state.counterList
    if (counters[counters.indexOf(counter)].counter > 0) {
      state.counterList[counters.indexOf(counter)].counter--
    }
    localStorage.setItem('counters', JSON.stringify(state.counterList))
  },

  filterGreaterOrEqualTo(state, greaterOrEqualTo) {
    state.filters.greaterOrEqualTo = greaterOrEqualTo
    sessionStorage.setItem('filters', JSON.stringify(state.filters))
  },

  filterSearch(state, search) {
    state.filters.searchTerm = search
    sessionStorage.setItem('filters', JSON.stringify(state.filters))
  },

  filterTerm(state, filter) {
    state.filters.filterTerm = filter
    sessionStorage.setItem('filters', JSON.stringify(state.filters))
  },

  counterSum(state, sum) {
    state.counterSum = sum
  },
}

export const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})
