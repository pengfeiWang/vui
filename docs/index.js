import Vue from 'vue';
import App from './views/app.vue';
import * as v2ui from '../dist/v2ui.common.js';
console.log(v2ui);
Vue.use(v2ui);
new Vue({
  el: '#root',
  render: h => h(App)
});

