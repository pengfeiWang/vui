// import { defaultProps, oneOfType } from '../../../utils/props';
import cfg from '../../../config';
var {prefix} = cfg;

export default {
  name: 'vCol',
  props: {
    span: [String, Number],
    order: [String, Number],
    offset: [String, Number],
    push: [String, Number],
    pull: [String, Number]
  },

  computed: {
    wrapClasses () {
      var as = {
        [`${prefix}-col`]: 1,
        [`${prefix}-col-${this.span}`]: this.span,
        [`${prefix}-col-order-${this.order}`]: this.order,
        [`${prefix}-col-offset-${this.offset}`]: this.offset,
        [`${prefix}-col-push-${this.push}`]: this.push,
        [`${prefix}-col-pull-${this.pull}`]: this.pull
      };
      return as;
    }
  }
};
