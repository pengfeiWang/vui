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
const install = (Vue, options) => {
  Vue.component(vButton.name, vButton);
  Vue.component(vButtonGroup.name, vButtonGroup);
  Vue.component(vCheckbox.name, vCheckbox);
  Vue.component(vCheckboxGroup.name, vCheckboxGroup);
  Vue.component(vIcon.name, vIcon);
  Vue.component(vInput.name, vInput);
  Vue.component(vRow.name, vRow);
  Vue.component(vCol.name, vCol);
  Vue.component(vMenu.name, vMenu);
  Vue.component(vRadio.name, vRadio);
  Vue.component(vRadioGroup.name, vRadioGroup);
  Vue.component(vTable.name, vTable);
  Vue.component(vDialog.name, vDialog);
  Vue.component(vWarnings.name, vWarnings);
  Vue.component(vSelect.name, vSelect);

  Vue.prototype.$msgbox = Modal;
  Vue.prototype.$alert = Modal.alert;
  Vue.prototype.$confirm = Modal.confirm;
  Vue.prototype.$prompt = Modal.prompt;
  Vue.prototype.$message = Message;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export {
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


