import { defaultProps } from 'utils';
import vCheckbox from '../template/checkbox';
import cx from 'classnames';
import extend from 'extend';

import cfg from 'config';
let {prefix} = cfg;
let selectArr = [];
export default {
  name: 'vCheckboxGroup',
  data () {
    return {
      prefixCls: prefix
    };
  },
  props: defaultProps({
    keyWord: 'value',
    keyValue: 'label',
    items: {
      type: Array,
      default: []
    },
    name: '',
    onChange () {
      // do conding
    }
  }),
  computed: {
    groupClasses () {
      return cx({
        [this.className]: !!this.className,
        [`${this.prefixCls}-group`]: 1
      });
    }
  },
  methods: {
    renderRandom () {
      return Math.random().toString(16).substring(2);
    },
    isEmptyItem (item) {
      var i;
      for (i in item) {
        return !!i;
      }
      return !i;
    },
    handleChange (ags) {
      let {checked, index, value} = ags;

      if (checked) {
        selectArr.push(extend({index: index}, this.items[index]));
      } else {
        selectArr.splice(index, 1);
      }
      ags.selected = selectArr;
      ags.groupEl = this.$refs.gp_rt;
      // this.onChange(ags);
      this.$emit('change', ags);
    }
  },
  components: {vCheckbox}
};
