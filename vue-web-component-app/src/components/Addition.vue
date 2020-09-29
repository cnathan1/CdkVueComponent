<template>
  <div class="counter">
    <input type="number" v-model="number1" placeholder="edit me">
    <input type="number" v-model="number2" placeholder="edit me">
    <input id="addition" type="number" v-model="result" placeholder="edit me">
    <button @click="sum">Get Sum</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Addition extends Vue {
  private number1: number = 0 as number
  private number2: number = 0 as number
  private result: number = 0 as number

  private sum () {
    this.result = +this.number1 + +this.number2
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
