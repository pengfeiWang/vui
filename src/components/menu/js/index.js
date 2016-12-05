import { defaultProps } from 'utils/';
import cx from 'classnames';
import cfg from 'config';

const lineHeight = 42;

let prefixCls = cfg.prefix;
function isContainsKey (k) {
  var sts;
  var item = this.menus.find(it => {
    if (it.key === k) {return it;}
  });
  sts = item.item.find(it => {
    if (it.key === this.selectedKey) {return it;}
  });
  return sts;
}
function keyReg (k) {
  var reg = new RegExp('^' + k + '$', 'i');
  var bol = isContainsKey.call(this, k);
  return reg.test(this.selectedKey) || bol;
}
export default {
  data () {
    return {
      selectedIdx: '',
      selectedKey: this.defaultSelectedKeys,
      selectedItemKey: ''
    };
  },
  props: defaultProps({
    theme: 'light', // light|dark
    prefixCls: prefixCls,
    defaultSelectedKeys: {
      type: String,
      default: 'microApp'
    },
    selectedKeys: '',
    menus: {
      type: Array,
      default () {
        return [];
      }
    },
    onChange () {
      // do codeing
    }
  }),
  computed: {
    rootClasses () {
      return cx({
        [`${this.prefixCls}-menu ${this.prefixCls}-menu-inline ${this.prefixCls}-menu-root`]: 1,
        [`${this.prefixCls}-menu-${this.theme}`]: this.theme
      });
    },
    menuSubMenuClasses () {
      return cx({
        [`${this.prefixCls}-menu-submenu-inline ${this.prefixCls}-menu-submenu`]: 1
      });
    }
  },
  watch: {
    selectedKey (newVal, oldVal) {
      // console.log(newVal , oldVal)
      // console.log(newVal != '' && newVal != oldVal)
    },
    defaultSelectedKeys (newVal) {
      this.selectedKey = newVal;
    }
  },
  methods: {
    iconClasses (idx) {
      let item = this.menus[idx];
      return cx({
        [`${this.prefixCls}-icon`]: 1,
        [`${this.prefixCls}-icon-${item.icon}`]: item.icon
      });
    },
    setStyle (idx, key) {
      let bol = keyReg.call(this, key);
      if (bol) {
        return {height: this.menus[idx].item.length * lineHeight + 'px', overflow: 'hidden'};
      }
      return {height: 0, overflow: 'hidden'};
    },
    showMenu (key = this.defaultSelectedKeys) {
      this.selectedKey = key;
    },
    setMenuSubMenuOpenClasses (key) {
      let bol = keyReg.call(this, key);

      let cs = cx({
        [`${this.prefixCls}-menu-submenu-open ${this.prefixCls}-menu-submenu-selected`]: bol
      });

      return bol ? cs : ' ';
    },

    setMenuSubmenuItemSelectedClasses (idx, key, subIdx, subKey) {
      var bol = (this.selectedKey === subKey || this.selectedItemKey === key + ':' + subKey);
      return cx({
        [`${this.prefixCls}-menu-item-selected`]: bol
      });
    },
    handleClick (idx, key, e) {
      if (this.selectedKey === key) {
        this.selectedKey = '';
        return;
      }

      this.selectedKey = key;
    },
    handleItemClick (idx, subkey, subidx, event) {
      var d = this.menus[idx];
      var o = {
        parentIdx: idx,
        parentKey: d.key,
        parentTitle: d.title,
        subIdx: subidx,
        subKey: subkey,
        subTitle: d.item[subidx].title
      };

      this.onChange(o, event);

      this.selectedItemKey = this.selectedKey + ':' + subkey;
    }
  }
};
