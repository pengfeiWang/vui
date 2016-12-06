import { defaultProps } from 'utils';
import cx from 'classnames';
import cfg from 'config';
var {prefix} = cfg;

export default {
  name: 'vRow',
  props: defaultProps({
    type: String,
    align: String,
    justify: String
  }),
  computed: {
    wrapClasses () {
      var as = cx({
        [`${prefix}-row`]: 1,
        [`${prefix}-row-${this.type}`]: this.type,
        [`${prefix}-row-${this.type}-align-${this.align}`]: this.align,
        [`${prefix}-row-${this.type}-justify-${this.justify}`]: this.justify
      });
      return as;
    }
  }
};
