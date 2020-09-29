<template>
  <div id="addition">
    <h2>Addition App</h2>
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Addition from './components/Addition.vue'
import { Component } from 'vue-property-decorator'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Addition',
    component: Addition
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '',
  routes
})

@Component({
  name: 'addition-app',
  router: router
})
export default class AdditionApp extends Vue {}
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
