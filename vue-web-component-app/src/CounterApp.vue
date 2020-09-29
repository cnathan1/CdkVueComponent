<template>
  <div id="counter">
    <h2>Counter App</h2>
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Counter from './components/Counter.vue'
import { Component } from 'vue-property-decorator'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Counter',
    component: Counter
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '',
  routes
})

@Component({
  name: 'counter-app',
  router: router
})
export default class CounterApp extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
