import Vue from 'vue'
import wrap from '@vue/web-component-wrapper'
import CounterApp from './CounterApp.vue'
import AdditionApp from './AdditionApp.vue'

const WrappedElementCounter = wrap(Vue, CounterApp)
const WrappedElementAddition = wrap(Vue, AdditionApp)
window.customElements.define('counter-app', WrappedElementCounter)
window.customElements.define('addition-app', WrappedElementAddition)

Vue.config.productionTip = false
