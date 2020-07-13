<template>
  <div class="header">
    <SortCounterList />
    <div class="header-right">
      <b style="color: white; font-size: 28px;">≥</b>
      <GreaterOrEqualFilter />
      <FilterCounterList />
    </div>
  </div>
</template>

<script>
import SortCounterList from './SortCounterList'
import GreaterOrEqualFilter from './GreaterOrEqualFilter'
import FilterCounterList from './FilterCounterList'

export default {
  components: {
    SortCounterList,
    GreaterOrEqualFilter,
    FilterCounterList,
  },
}
</script>

<style>
.header {
  position: fixed;
  width: 100%;
  overflow: hidden;
  background-color: #45289f;
  padding: 20px 20px;
}

.header-right {
  float: right;
}

@media screen and (max-width: 500px) {
  .header-right {
    float: none;
    padding-top: 20px;
  }
}
</style>
