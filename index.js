/*  */

import './src/components/style/index.scss';
import { vButton } from './src/components/button/index.js';
import { vButtonGroup } from './src/components/button-group/index.js';
import { vCheckbox } from './src/components/checkbox/index.js';
import { vCheckboxGroup } from './src/components/checkbox-group/index.js';
import { vIcon } from './src/components/icon/index.js';
import { vInput } from './src/components/input/index.js';
import { vRow } from './src/components/row/index.js';
import { vCol } from './src/components/col/index.js';
import { vSelect } from './src/components/select/index.js';
import { vRadio } from './src/components/radio/index.js';
import { vRadioGroup } from './src/components/radio-group/index.js';
import { vTable } from './src/components/table/index.js';
import { vMenu } from './src/components/menu/index.js';
import { vDialog } from './src/components/vdialog/index.js';
import { vWarnings } from './src/components/warnings/index.js';
import { Message } from './src/components/message/index.js';
import { Modal } from './src/components/modal/index.js';

const install = function (Vue, opts = {}) {

  if (install.installed) {
    return;
  }

  Vue.component(vButton.name, vButton);
  Vue.component(vButtonGroup.name, vButtonGroup);
  Vue.component(vCheckbox.name, vCheckbox);
  Vue.component(vCheckboxGroup.name, vCheckboxGroup);
  Vue.component(vIcon.name, vIcon);
  Vue.component(vInput.name, vInput);
  Vue.component(vRow.name, vRow);
  Vue.component(vCol.name, vCol);
  Vue.component(vSelect.name, vSelect);
  Vue.component(vRadio.name, vRadio);
  Vue.component(vRadioGroup.name, vRadioGroup);
  Vue.component(vTable.name, vTable);
  Vue.component(vMenu.name, vMenu);
  Vue.component(vDialog.name, vDialog);
  Vue.component(vWarnings.name, vWarnings);


  Vue.prototype.$modal = Modal;
  Vue.prototype.$alert = Modal.alert;
  Vue.prototype.$confirm = Modal.confirm;
  Vue.prototype.$prompt = Modal.prompt;
  Vue.prototype.$message = Message;

};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = {
  install,
  vButton,
  vButtonGroup,
  vCheckbox,
  vCheckboxGroup,
  vIcon,
  vInput,
  vRow,
  vCol,
  vSelect,
  vRadio,
  vRadioGroup,
  vTable,
  vMenu,
  vDialog,
  vWarnings,
  Message,
  Modal
};
