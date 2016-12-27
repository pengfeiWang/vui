import { defaultProps } from '../../../utils/props';
import {vButton} from '../../button';
import {vCheckbox} from '../../checkbox';
import tableHead from './table-header.js';
import cfg from '../../../config';
import extend from 'extend';

const prefixCls = cfg.prefix;


export default {
  name: 'vTable',
  data () {
    return {
      selectCache: {
        length: 0,
        splice: [].splice
      },
      checkAll: false
    };
  },
  props: defaultProps({
    prefixCls: prefixCls,
    rowSelection: {
      type: null,
      default: false
    },
    animate: false,
    animateMod: 'list',
    animateTag: '',
    // pagination: Object,
    size: {
      type: String,
      default: 'large'
    },
    dataSource: {
      type: Array,
      // required: true,
      default () {
        return [];
      }
    },
    columns: {
      type: Array,
      // required: true,
      default () {
        return [];
      }
    },
    fontSize: {
      type: Number,
      default: 12
    },
    expandIconAsCell: true,
    onChange: () => {
      // do codeing
    },
    onAction: () => {
      // do codeing
    },
    useFixedHeader: false,
    bordered: false,
    bodyStyle: Object,
    style: Object
  }),

  computed: {
    tableClasses () {
      return {
        [`${this.prefixCls}-table`]: 1,
        [`${this.prefixCls}-table-scroll-position-left`]: 1,
        [`${this.prefixCls}-table-${this.size}`]: this.size,
        [`${this.prefixCls}-table-font-${this.fontSize}`]: this.fontSize
      };
    },

    isIndeterminate () {
      if (!this.rowSelection) {return;}
      let selectLength = this.selectCache.length,
        dataSourceLength = this.dataSource.length;

      if (!selectLength || !dataSourceLength) {
        this.checkAll = false;
        return false;
      }
      this.checkAll = (selectLength === dataSourceLength);
      return !this.checkAll;
    }
  },

  methods: {
    renderColsText (sourceIdx, colIdx) {
      return this.dataSource[sourceIdx][this.columns[colIdx].prop];
    },
    handleChange (...obj) {
      if (!this.rowSelection) {return;}

      let [idx, {checked}] = obj;
      if (idx === 'checkedAll') {
        if (checked) {
          this.dataSource.map((it, idx) => {
            this.selectCache[idx] = extend({}, it);
          });
          this.selectCache.length = this.dataSource.length;
          this.checkAll = true;
        } else {
          for (var i in this.selectCache) {
            if (i === 'length' || i === 'solice') {continue;}
            delete this.selectCache[i];
          }
          this.selectCache.length = 0;
        }
        this.checkAll = checked;
      } else {
        if (checked) {
          this.selectCache[idx] = extend({}, this.dataSource[idx]);
          this.selectCache.length++;
        } else {
          this.selectCache[idx] = null;
          delete this.selectCache[idx];
          this.selectCache.length--;
        }
      }
      this.onChange(this.selectCache);
    },
    handleAction (...ags) {
      this.onAction(...ags);
    }
  },

  components: {vButton, tableHead, vCheckbox}
};
