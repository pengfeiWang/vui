import {vCheckbox} from '../../checkbox';
import extend from 'extend';
import cfg from '../../../config';
let {prefix} = cfg;

export default {
  name: 'vCheckboxGroup',
  data () {
    return {
      prefixCls: prefix,
      selectArr: [],
      selectObj: {}
    };
  },
  props: {
    keyWord: {
      type: String,
      default: 'label'
    },
    keyValue: {
      type: String,
      default: 'value'
    },
    items: {
      type: Array,
      default: []
    },
    disabled: Boolean,
    defaultValue: null,
    name: '',
    onChange () {
      // do conding
    }
  },
  computed: {
    groupClasses () {
      return {
        [this.className]: !!this.className,
        [`${this.prefixCls}-group`]: 1
      };
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
    isChecked (it) {
      if (Array.isArray(this.defaultValue)) {
        return (this.defaultValue.indexOf(it[this.keyValue]) > -1) || !!it.defaultChecked || !!it.checked;
      } else {
        return (this.defaultValue !== null && this.defaultValue === it[this.keyValue]) || !!it.defaultChecked || !!it.checked;
      }
    },
    handleChange (ags) {
      let {checked, index, value} = ags;
      this.selectArr = [];


      if (checked) {
        this.selectObj[index] = extend({}, this.items[index], {defaultChecked: checked});
      } else {
        delete this.selectObj[index];
      }
      for (let [i, v] of Object.entries(this.selectObj)) {
        this.selectArr.push(v);
      }
      ags.selected = this.selectArr;
      ags.groupEl = this.$refs.gp_rt;
      this.$emit('change', ags);
    }
  },
  mounted () {
    for (let [i, v] of Array.entries(this.items)) {
      if (this.isChecked(v)) {
        this.selectObj[i] = extend({}, this.items[i], {defaultChecked: true});
      }
    }
  },
  components: {vCheckbox}
};
