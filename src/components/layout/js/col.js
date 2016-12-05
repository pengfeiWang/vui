import { defaultProps, oneOfType } from 'utils';
import cx from 'classnames';
import cfg from 'config';
var {prefix} = cfg;

export default {
  props: defaultProps({
    span: oneOfType([String, Number]),
    order: oneOfType([String, Number]),
    offset: oneOfType([String, Number]),
    push: oneOfType([String, Number]),
    pull: oneOfType([String, Number])
  }),

  computed: {
    wrapClasses () {
      var as = cx({
        [`${prefix}-col`]: 1,
        [`${prefix}-col-${this.span}`]: this.span,
        [`${prefix}-col-order-${this.order}`]: this.order,
        [`${prefix}-col-offset-${this.offset}`]: this.offset,
        [`${prefix}-col-push-${this.push}`]: this.push,
        [`${prefix}-col-pull-${this.pull}`]: this.pull
      });
      return as;
    }
  }
};
