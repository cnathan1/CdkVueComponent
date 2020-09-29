<template>
  <div class="counter">
    <input id="count" v-model="counter" placeholder="edit me">
    <button @click="increment">Add Counter</button>
    <button @click="decrement">Subtract Counter</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Counter extends Vue {
  private counter: number = 0 as number

  private increment () {
    this.counter++
  }

  private decrement () {
    this.counter--
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
