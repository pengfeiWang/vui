import { defaultProps, oneOfType } from 'utils';
import cx from 'classnames';
import cfg from 'config';
var {prefix} = cfg;

export default {
  props: defaultProps({
    prefixCls: prefix,
    type: 'radio',
    value: oneOfType([String, Number, Boolean]),
    label: '',
    name: null,
    disabled: !1,
    defaultChecked: !1,
    onChange: () => {
      // do codeing
    }
  }),
  data () {
    return {
      checked: !!this.defaultChecked,
      cpLabel: this.label,
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
      return cx({
        [`${this.buttonClasses}-wrapper`]: 1,
        [`${this.buttonClasses}-wrapper-disabled`]: this.disabled,
        [`${this.buttonClasses}-wrapper-checked`]: this.checked
      });
    },
    cpClasses () {
      return cx({
        [`${this.buttonClasses}`]: 1,
        [`${this.buttonClasses}-disabled`]: this.disabled,
        [`${this.buttonClasses}-checked`]: this.checked
      });
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
