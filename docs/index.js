import Vue from 'vue';
import App from './views/app.vue';
// import * as v2ui from '../dist/v2ui';

// console.log(v2ui);

import '../src/components/style/index.scss';

import {vButton} from '../dist/button/';
import {vButtonGroup} from '../dist/button-group/';
import {vIcon} from '../dist/icon/';

import {vRow} from '../dist/row/';
import {vCol} from '../dist/col/';

import {vCheckbox} from '../dist/checkbox/';
import {vCheckboxGroup} from '../dist/checkbox-group/';


import {vInput} from '../dist/input/';

import {vRadio} from '../dist/radio/';
import {vRadioGroup} from '../src/components/radio-group/';

import {vSelect} from '../src/components/select/';
import {vSelect2} from '../src/components/select2/';

import {Message} from '../src/components/message/';
import {Modal} from '../src/components/modal/';

var bo = true;
if (bo) {
  Vue.use(vButton);
  Vue.use(vButton);
  Vue.use(vButtonGroup);
  Vue.use(vIcon);
  Vue.use(vRow);
  Vue.use(vCol);
  Vue.use(vCheckbox);
  Vue.use(vCheckboxGroup);
  Vue.use(vInput);
  Vue.use(vRadio);
  Vue.use(vRadioGroup);
  Vue.use(vSelect);
  Vue.use(Message);
  Vue.use(Modal);
  Vue.use(vSelect2);
} else {
  // Vue.use(v2ui);
}

new Vue({
  el: '#vm-root',
  render: h => h(App)
});

