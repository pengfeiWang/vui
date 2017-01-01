import Vue from 'vue';
import App from './views/app.vue';
<<<<<<< HEAD

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
=======
// import * as v2ui from '../dist/v2ui';
// Vue.use(v2ui);
import '../src/components/style/index.scss';
import { vButton } from '../src/components/button/index.js';
import { vButtonGroup } from '../src/components/button-group/index.js';
import { vCheckbox } from '../src/components/checkbox/index.js';
import { vCheckboxGroup } from '../src/components/checkbox-group/index.js';
import { vIcon } from '../src/components/icon/index.js';
import { vInput } from '../src/components/input/index.js';
import { vRow } from '../src/components/row/index.js';
import { vCol } from '../src/components/col/index.js';
import { vSelect } from '../src/components/select/index.js';
import { vRadio } from '../src/components/radio/index.js';
import { vRadioGroup } from '../src/components/radio-group/index.js';
import { vTable } from '../src/components/table/index.js';
import { vMenu } from '../src/components/menu/index.js';
import { vDialog } from '../src/components/vdialog/index.js';
import { vWarnings } from '../src/components/warnings/index.js';
import { Message } from '../src/components/message/index.js';
import { Modal } from '../src/components/modal/index.js';

  Vue.prototype.$modal = Modal;
  Vue.prototype.$alert = Modal.alert;
  Vue.prototype.$confirm = Modal.confirm;
  Vue.prototype.$prompt = Modal.prompt;
  Vue.prototype.$message = Message;

    Vue.use(vButton);
    Vue.use(vButtonGroup);
    Vue.use(vCheckbox);
    Vue.use(vCheckboxGroup);
    Vue.use(vIcon);
    Vue.use(vInput);
    Vue.use(vRow);
    Vue.use(vCol);
    Vue.use(vSelect);
    Vue.use(vRadio);
    Vue.use(vRadioGroup);
    Vue.use(vTable);
    Vue.use(vMenu);
    Vue.use(vDialog);
    Vue.use(vWarnings);

new Vue({
  el: '#vm-root',
  components: {
>>>>>>> 2017-1-1
  },
  render: h => h(App)
});

