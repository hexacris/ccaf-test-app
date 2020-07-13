<template>
  <div class="container">
    <CounterList />
  </div>
</template>

<script>
import CounterList from '../components/CounterList'

export default {
  components: {
    CounterList,
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  padding-top: 100px;
}

.custom-input-1 {
  min-height: 50px;
  background-color: #5e6ac0;
  border-radius: 10px;
  border: 0;
  box-shadow: none;
  color: white;
  padding: 10px;
  font-size: 18px;
}

.custom-input-2 {
  min-height: 50px;
  background-color: white;
  border-radius: 10px;
  border: 0;
  box-shadow: none;
  color: grey;
  font-weight: bold;
  padding: 10px;
  font-size: 18px;
}

.circle-button {
  border: 0;
  box-shadow: none;
  background-color: white;
  border-radius: 50%;
  font-size: 24px;
  padding: 10;
}

.custom-button-1 {
  min-height: 50px;
  background-color: #5e6ac0;
  border-radius: 10px;
  border: 0;
  box-shadow: none;
  color: white;
  padding: 10px;
  margin: auto 20px;
  font-size: 18px;
}

::placeholder {
  color: white;
  opacity: 0.5;
}
</style>
