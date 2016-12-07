import { defaultProps, oneOf, Popper } from '../../../utils';
import Clickoutside from '../../../utils/clickoutside';
import {addResizeListener, removeResizeListener} from '../../../utils/resize-event';
import cfg from '../../../config';
import selectMenu from '../template/dropdown';
var {prefix} = cfg;
export default {
  name: 'vSelect',
  data () {
    return {
      ariaExpanded: false,
      hidden: false,
      isOpen: false,
      selectDown: '',
      selectElem: '',
      selectValue: this.defaultValue,
      selectLabel: '',
      updatePopper: false,
      destroyPopper: false,
      wrapperWidth: 0
    };
  },
  mixins: [Popper],

  props: defaultProps({
    prefixCls: prefix,
    size: oneOf(['small', 'large', undefined]),
    keyLabel: 'label',
    keyValue: 'value',
    selects: {
      type: Array,
      default () {
        return [
          {
            label: '',
            value: ''
          }
        ];
      }
    },
    style: '',
    disabled: null,
    defaultValue: null,
    multiple: null,
    placeholder: {
      type: String,
      default: '请选择'
    },
    onChange: () => {
      // do codeing
    }
  }),
  computed: {

    wrapClasses () {
      const sizeCls = ({
        'large': 'lg',
        'small': 'sm'
      })[this.size] || '';
      return {
        [`${this.prefixCls}-select`]: 1,
        [`${this.prefixCls}-select-open`]: this.isOpen,
        [`${this.prefixCls}-select-disabled`]: this.disabled !== null,
        [`${this.prefixCls}-select-${sizeCls}`]: sizeCls
      };
    },

    selectionClasses () {
      return {
        [`${this.prefixCls}-select-selection`]: 1,
        [`${this.prefixCls}-select-selection-${this.multiple !== null ? '-multiple' : '-single'}`]: 1
      };
    },

    selectionDropdownClasses () {
      return {
        [`${this.prefixCls}-select-dropdown`]: 1,
        [`${this.prefixCls}-select-dropdown-${this.multiple !== null ? '-multiple' : '-single'}`]: 1,
        [`${this.prefixCls}-select-dropdown-placement-bottomLeft`]: 1

      };
    }
  },

  watch: {
    defaultValue (v) {
      this.selectValue = v;
      this.setSelectLabel();
    },
    isOpen (v) {
      if (v) {
        this.updatePopper = true;
        this.destroyPopper = false;
      } else {
        this.updatePopper = false;
        this.destroyPopper = true;
      }
    }
  },

  methods: {
    doDestroy () {
      this.$refs.popper.doDestroy();
    },

    handleClose () {
      if (!this.isOpen) {
        return;
      }
      this.isOpen = false;
    },
    defaultSelectItem (value) {
      var cls = {
        [`${this.prefixCls}-select-dropdown-menu-item-selected`]: 1
      };
      if (this.setSelectItem(value)) {
        return cls;
      }
      return '';
    },

    isDisabled () {
      // do
    },
    setSelectItem (value) {
      if (value === this.selectValue) {
        return true;
      }
      return false;
    },

    setSelectLabel (v) {
      var val = v || this.defaultValue;
      // if (v) {this.selectLabel = v;}
      // if (this.defaultValue) {

        this.selects.find(item => {
          if (item.disabled) {
            return;
          }
          if (item.value === val) {
            this.selectLabel = item.label;
          }
        });
        // return;
      // }
      // this.selectLabel = this.placeholder;
    },
    hanbleFocus (e) {
      if (this.disabled !== null) {return;}
      this.selectElem = e.target;
      this.isOpen = true;
    },

    handleBlur (e) {
      this.isOpen = false;
    },

    itemClick (item, index, event) {
      if (event.target.getAttribute('disabled')) {
        return;
      }
      if (this.multiple) {
        this.handleMultipleChange(item, index, event);
      } else {
        this.selectValue = item.value;
        this.handleSingleChange(item, index, event);
      }
    },

    handleSingleChange (item, index, event) {
      this.handleBlur();
      this.selectElem.blur();
      this.selectLabel = item.label;
      this.selectValue = item.value;
      // this.onChange(item.value, item.label, event);
      this.$emit('change', {
        item: item,
        index: index,
        ev: event
      });
    },

    handleMultipleChange (item, index, event) {
      // this.onChange(item.value, item.label, event);
      this.$emit('change', {
        item: item,
        index: index,
        ev: event
      });
    },
    resetWidth () {
      this.wrapperWidth = this.$refs.reference.$el.getBoundingClientRect().width;
    }
  },

  components: {
    selectMenu
  },
  directives: { Clickoutside },
  mounted () {
    this.setSelectLabel();
  }
};
