import 'components/style/index.scss';

import {
  vButton,
  vButtonGroup
} from 'components/button';
import {
  vCheckbox,
  vCheckboxGroup
} from 'components/checkbox';

import {vIcon} from 'components/icon';
import {vInput} from 'components/input';
import {vRow, vCol} from 'components/layout';

/**
  简单实现
*/
import {vMenu} from 'components/menu';
import {Message} from 'components/message';
import {Modal} from 'components/modal';
import {
  vRadio,
  vRadioGroup
} from 'components/radio';
import {vTable} from 'components/table';

/**
 * 临时
 */
import {vDialog} from 'components/vdialog';

/**
 * 临时
 */
import {vWarnings} from 'components/warnings';

const install = (Vue) => {
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

  Vue.prototype.$msgbox = Modal;
  Vue.prototype.$alert = Modal.alert;
  Vue.prototype.$confirm = Modal.confirm;
  Vue.prototype.$prompt = Modal.prompt;
  Vue.prototype.$message = Message;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
const vui = {
  vButton,
  vButtonGroup,
  vCheckbox,
  vCheckboxGroup,
  vIcon,
  vInput,
  vRow,
  vCol,
  vMenu,
  Message,
  Modal,
  vRadio,
  vRadioGroup,
  vTable,
  vDialog,
  vWarnings
};
window.vui = vui;
export default vui;
export {vui};


