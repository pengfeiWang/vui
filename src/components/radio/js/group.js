import { defaultProps, oneOf, any } from '../../../utils';
import cfg from '../../../config';
import vRadio from '../template/radio.vue';
var {prefix} = cfg;

export default {
  name: 'vRadioGroup',
  data () {
    return {
      value: this.defaultValue
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
    name: null,
    disabled: null,
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
    handleChange (ags) {
      let {value} = ags;
      this.value = value;
      ags.groupEl = this.$refs.group_rt;
      this.$emit('change', ags);
    }
  },
  components: {vRadio}
};
