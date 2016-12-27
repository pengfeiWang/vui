import { defaultProps } from '../../../utils/props';
import cfg from '../../../config';
var {prefix} = cfg;


export default {
  name: 'vCheckbox',
  data () {

    /*
      cp = computed
    */
    return {
      checked: !!this.defaultChecked,
      cpType: this.type,
      cpChecked: !!this.checked,
      cpDisabled: !!this.disabled,
      cpLabel: this.label,
      cpIndeterminate: !!this.indeterminate
    };
  },
  props: defaultProps({
    prefixCls: prefix + '-checkbox',
    style: {},
    value: null,
    label: null,
    name: '',
    index: 0,
    type: 'checkbox',
    trueLabel: {
      type: [String, Number],
      default: ''
    },
    falseLabel: {
      type: [String, Number],
      default: ''
    },
    indeterminate: false,
    className: '',
    disabled: null,
    defaultChecked: !1,
    onChange () {
      // do codeing
    }
  }),

  computed: {
    wrapClasses () {
      return {
        [this.className]: !!this.className,
        [`${this.prefixCls}-wrapper`]: 1
      };
    },

    ckClasses () {
      return {
        [this.className]: !!this.className,
        [`${this.prefixCls}`]: 1,
        [`${this.prefixCls}-checked`]: this.checked,
        [`${this.prefixCls}-checked-${this.checked ? 1 : 0}`]: this.checked,
        [`${this.prefixCls}-disabled`]: !!this.cpDisabled,
        [`${this.prefixCls}-indeterminate`]: this.cpIndeterminate
      };
    }
  },
  mounted () {
    this.checked = !!this.defaultChecked;
    this.cpLabel = this.label;
    if (!this.label) {
      this.cpLabel = this.defaultChecked ? this.trueLabel : this.falseLabel;
    }
  },
  watch: {
    checked (v) {
      if (v && this.trueLabel) {
        this.cpLabel = this.trueLabel;
      }
      if (!v && this.falseLabel) {
        this.cpLabel = this.falseLabel;
      }
    },
    defaultChecked (v) {
      this.checked = v;
    },
    indeterminate (v) {
      this.cpIndeterminate = v;
    },
    disabled (v) {
      this.cpDisabled = v;
    }
  },

  methods: {
    handleChange (e) {
      // this.onChange({
      //   ev: e,
      //   index: this.index,
      //   checked: this.checked,
      //   disabled: this.cpDisabled,
      //   name: this.name,
      //   value: this.value
      // });
      this.$emit('change', {
        el: this.$refs.rt,
        ev: e,
        index: this.index,
        checked: this.checked,
        disabled: this.cpDisabled,
        name: this.name,
        value: this.value
      });
    }
  }
};
