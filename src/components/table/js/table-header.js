import { defaultProps } from 'utils';
import {vCheckbox} from 'components/checkbox';
import cfg from 'config';

const prefixCls = cfg.prefix;
export default {
  data () {
    return {
      prefixCls: prefixCls
    };
  },
  props: defaultProps({
    columns: {type: Array, required: true},
    rowSelection: null,
    indeterminate: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    },
    onChange () {
      // do codeing
    }
  }),
  components: {vCheckbox},
  methods: {
    rowSelectionChange (...ags) {
      if (!this.rowSelection) {return;}
      var o = ags[0];
      this.onChange('checkedAll', o);
    }
  },
  render (h) {
    return (
      <thead class={prefixCls + '-table-thead'}>
        <tr>
          {
            this.rowSelection ?
              <th class={prefixCls + '-table-selection-column'}>
                <vCheckbox
                type="checkbox"
                defaultChecked={this.checked}
                onChange={this.rowSelectionChange}
                indeterminate={this.indeterminate} />
              </th> : ''
          }
          {
            this._l(this.columns, (column, cellIndex) =>
              <th class="">
                <span>
                  { column.label }
                </span>
              </th>
            )
          }
        </tr>
      </thead>
    );
  }
};


