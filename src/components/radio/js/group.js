import { defaultProps, oneOf, any } from 'utils';
import cx from 'classnames';
import vRadio from '../template/radio.vue';
import cfg from 'config';
var {prefix} = cfg;

export default {
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
      return cx({
        [`${this.prefixCls}-group`]: 1,
        [`${this.prefixCls}-group-${this.size}`]: this.size && this.type === 'button',
        [this.className]: this.className
      });
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
