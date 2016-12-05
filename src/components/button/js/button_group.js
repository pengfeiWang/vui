import { defaultProps, oneOf } from 'utils';
import cx from 'classnames';
import cfg from 'config';
var {prefix} = cfg;
export default {
  props: defaultProps({
    prefixCls: prefix,
    size: oneOf(['large', 'small', undefined]),
    className: ''
  }),
  computed: {
    btgClasses () {
      const sizeCls = ({
        'large': 'lg',
        'small': 'sm'
      })[this.size] || '';

      return cx({
        [`${this.prefixCls}-btn-group`]: 1,
        [`${this.prefixCls}-btn-group-${sizeCls}`]: !!sizeCls,
        [this.className]: this.className
      });
    }
  }
};
