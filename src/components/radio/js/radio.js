import { defaultProps, oneOfType } from '../../../utils/props';
import cfg from '../../../config';
var {prefix} = cfg;

export default {
  name: 'vRadio',
  props: defaultProps({
    prefixCls: prefix,
    type: 'radio',
    value: {
      type: [String, Number, Boolean],
      default: 'on'
    },
    label: null,
    name: null,
    icon: '',
    disabled: Boolean,
    defaultChecked: Boolean,
    onChange: () => {
      // do codeing
    }
  }),
  data () {
    return {
      checked: !!this.defaultChecked,
      // cpLabel: this.label,
      cpDisabled: !!this.disabled
    };
  },
  computed: {
    buttonClasses () {
      if (this.type === 'button') {
        return this.prefixCls + '-radio-button';
      }
      return this.prefixCls + '-radio';
    },
    wrapClasses () {
      return {
        [`${this.buttonClasses}-wrapper`]: 1,
        [`${this.buttonClasses}-wrapper-disabled`]: this.disabled,
        [`${this.buttonClasses}-wrapper-checked`]: this.checked
      };
    },
    cpClasses () {
      return {
        [`${this.buttonClasses}`]: 1,
        [`${this.buttonClasses}-disabled`]: this.disabled,
        [`${this.buttonClasses}-checked`]: this.checked
      };
    },
    isIcon () {
      return {
        [`${this.prefixCls}-icon ${this.prefixCls}-icon-${this.icon}`]: this.icon
      };
    },
    cpLabel () {
      return this.label;
    }
  },
  watch: {
    defaultChecked (v) {
      this.checked = !!v;
    },
    disabled (v) {
      this.cpDisabled = v;
    }
  },
  methods: {
    handleChange (e) {
      // this.onChange(e);
      this.$emit('change', {
        ev: e,
        el: this.$refs.rt,
        name: this.name,
        value: this.value,
        disabled: this.cpDisabled,
        checked: !!('' + this.checked).trim(),
        label: this.cpLabel
      });
    }
  }
};
