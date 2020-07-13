<template>
  <div class="flex-container">
    <div style="flex-grow: 7; text-align: left;">
      <h4>{{ item.name }}</h4>
    </div>
    <div style="flex-grow: 3;">
      <button class="circle-button" @click.stop="decreaseCounter(item)">
        <fa color="red" :icon="['fas', 'minus']" />
      </button>
      <input class="custom-input-2" disabled style="width: 80px;" type="text" :value="item.counter" />
      <button class="circle-button" @click.stop="incrementCounter(item)">
        <fa color="green" :icon="['fas', 'plus']" />
      </button>
    </div>
    <div style="flex-grow: 2;">
      <button class="circle-button" @click.stop="removeCounter(item)">
        <fa color="black" :icon="['fas', 'trash']" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  methods: {
    async incrementCounter(counter) {
      await this.$store.dispatch('incrementCounter', { counter })
    },
    async decreaseCounter(counter) {
      await this.$store.dispatch('decreaseCounter', { counter })
    },
    async removeCounter(counter) {
      await this.$store.dispatch('removeCounter', { counter })
    },
  },
}
</script>

<style>
.flex-container {
  display: flex;
  align-items: stretch;
  min-height: 50px;
  background-color: #a5d6a7d2;
  border-radius: 10px;
  color: #fff;
  padding: 10px;
  margin: 20px 40px;
  font-size: 18px;
}

.flex-container > div {
  color: white;
  margin: 10px;
  text-align: center;
  font-size: 30px;
}
</style>
