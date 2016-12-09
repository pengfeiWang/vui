import './src/components/style/index.scss';
import {
  vButton,
  vButtonGroup
} from './src/components/button';
import {
  vCheckbox,
  vCheckboxGroup
} from './src/components/checkbox';
import {vIcon} from './src/components/icon';
import {vInput} from './src/components/input';
import {vRow, vCol} from './src/components/layout';
import {vSelect} from './src/components/select';

// /**
//   简单实现
// */
import {vMenu} from './src/components/menu';

import {
  vRadio,
  vRadioGroup
} from './src/components/radio';
import {vTable} from './src/components/table';

// /**
//  * 临时
//  */
import {vDialog} from './src/components/vdialog';

// /**
//  * 临时
//  */
import {vWarnings} from './src/components/warnings';


import {Message} from './src/components/message';
import {Modal} from './src/components/modal';
const epts = {
  install,
  vButton,
  vButtonGroup,
  vCheckbox,
  vCheckboxGroup,
  vIcon,
  vInput,
  vRow,
  vCol,
  vRadio,
  vRadioGroup,
  vTable,
  vDialog,
  vWarnings,
  vSelect,
  Message,
  Modal
};
const install = (Vue, options) => {
  Object.keys(epts).forEach((key) => {
    Vue.component(key, epts[key]);
  });

  Vue.prototype.$msgbox = Modal;
  Vue.prototype.$alert = Modal.alert;
  Vue.prototype.$confirm = Modal.confirm;
  Vue.prototype.$prompt = Modal.prompt;
  Vue.prototype.$message = Message;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}


module.exports = Object.assign(epts, {install});

window.v2ui = epts;
// exports.v2ui = epts;
// module.exports = epts;


