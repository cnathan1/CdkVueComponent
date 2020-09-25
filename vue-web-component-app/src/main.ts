import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import App from './App.vue';

const WrappedElement = wrap(Vue, App);
window.customElements.define('hierarchy-builder', WrappedElement);

Vue.config.productionTip = false;