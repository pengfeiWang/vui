import { defaultProps } from '../../../utils';

import cfg from '../../../config';
var {prefix} = cfg;

export default {
  name: 'vIcon',
  props: defaultProps({
    className: '',
    type: {
      type: String,
      require: true
    },
    spin: {
      type: Boolean,
      default: false
    }
  }),

  computed: {
    iconClasses () {
      return {
        [this.className]: !!this.className,
        [`${prefix}-icon`]: 1,
        [`${prefix}-icon-spin`]: !!this.spin || this.type === 'loading',
        [`${prefix}-icon-${this.type}`]: this.type
      };
    }
  }
};
