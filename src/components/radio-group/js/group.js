import { defaultProps, oneOf, any } from '../../../utils/props';
import cfg from '../../../config';
import {vRadio} from '../../radio';
var {prefix} = cfg;

export default {
  name: 'vRadioGroup',
  data () {
    return {
      value: this.defaultValue,
      checkedIndex: ''
    };
  },
  props: defaultProps({
    prefixCls: prefix + '-radio',
    type: {
      type: String,
      default: 'radio'
    },
    radios: {
      type: Array,
      default: []
    },
    keyLabel: 'label',
    keyValue: 'value',
    name: null,
    disabled: Boolean,
    size: oneOf(['small', 'large', undefined]),
    defaultValue: any,
    onChange: () => {
      // do codeing
    }
  }),
  computed: {
    groupWapperClass () {
      return {
        [`${this.prefixCls}-group`]: 1,
        [`${this.prefixCls}-group-${this.size}`]: this.size && this.type === 'button',
        [this.className]: this.className
      };
    }
  },
  watch: {
    defaultValue (v) {
      this.value = v;
      this.resetChecked();
    }
  },
  methods: {
    isEmptyItem (item) {
      var i;
      for (i in item) {
        return !!i;
      }
      return !i;
    },
    resetChecked () {
      if (this.value !== null || this.value !== undefined) {
        this.radios.find((it, idx) => {
          //
          if (it[this.keyValue] === this.value) {
            this.checkedIndex = idx;
            return true;
          }
        });
      } else {
        this.radios.find((it, idx) => {
          //
          if (it.checked) {
            this.checkedIndex = idx;
            return true;
          }
        });
      }
    },
    handleChange (ags) {
      let {value} = ags;
      this.value = value;
      this.resetChecked();
      ags.groupEl = this.$refs.group_rt;
      this.$emit('change', ags);
    }
  },
  mounted () {
    this.value = this.defaultValue;

    this.resetChecked();
  },
  components: {vRadio}
};
