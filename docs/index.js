import Vue from 'vue';
import App from './views/app.vue';

import {vButton} from '../src/components/button';
// import {vButtonGroup} from '../src/components/button-group';
// import {vCheckbox} from '../src/components/checkbox';
// import {vCheckboxGroup} from '../src/components/checkbox-group';
// import {vIcon} from '../src/components/icon';
// import {vInput} from '../src/components/input';
// import {vRadio} from '../src/components/radio';
// import {vRadioGroup} from '../src/components/radio-group';



new Vue({
  el: '#root',
  components: {
    vButton
  },
  render: h => h(App)
});

