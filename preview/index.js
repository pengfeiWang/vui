import Vue from 'vue';
import App from './views/app.vue';
import * as v2ui from '../dist/v2ui';
Vue.use(v2ui);
new Vue({
  el: '#vm-root',
  render: h => h(App)
});

