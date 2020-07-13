<template>
  <div class="footer">
    <div class="footer-right">
      <span style="color: white; font-size: 18px;">TOTAL</span>
      <b style="color: white; font-size: 28px; margin: auto 10px;">∑</b>
      <input v-model="sum" disabled class="custom-input-2" style="width: 100px; margin-right: 50px;" />
      <button v-if="counters.length < 20" class="custom-button-1" @click.stop="show = true">Agregar Nuevo Contador</button>
    </div>
    <Modal :show="show" @close="show = false" />
  </div>
</template>

<script>
import Modal from './Modal'

export default {
  components: {
    Modal,
  },

  data() {
    return {
      show: false,
    }
  },

  computed: {
    counters() {
      return this.$store.getters.counters
    },
    sum() {
      return this.$store.getters.counterSum
    },
  },
}
</script>

<style>
.footer {
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: #45289f;
  bottom: 0;
}

.footer-right {
  padding-top: 10px;
  float: right;
}

@media screen and (max-width: 500px) {
  .footer-right {
    float: none;
    padding-top: 20px;
  }
}
</style>
