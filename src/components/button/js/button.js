import { defaultProps, oneOf } from '../../../utils/props';
import {vIcon} from '../../icon';
import cfg from '../../../config';
let {prefix} = cfg;
const timeoutClicked = 10;
const timeoutClick = 500;
export default {
  name: 'vButton',
  data () {
    return {
      clickedTimeout: null,
      timeout: null,
      clsActive: false
    };
  },
  props: defaultProps({
    prefixCls: prefix,
    type: oneOf(['primary', 'ghost', 'dashed', undefined, '']),
    htmlType: 'button',
    shape: oneOf(['circle', 'circle-outline', undefined, '']),
    size: oneOf(['small', 'large', undefined]),
    disabled: Boolean,
    loading: Boolean,
    icon: String,
    className: null,
    class: null,
    onClick: {
      type: Function,
      default () {
        // do nothing
      }
    }
  }),

  methods: {
    clearButton () {
      this.clsActive = false;
    },
    handleClick (event) {
      let that = this;

      this.clickedTimeout = setTimeout(() => {that.clsActive = true;}, timeoutClicked);
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => that.clearButton(), timeoutClick);
      // this.onClick(event);

      this.$emit('click', {ev: event, rt: this.$refs.rt });
    }
  },
  computed: {
    isDisabled () {
      
      if (/disabled/.test(this.className)) {
        return true;
      }
      return !!this.disabled;
    },

    isIcon () {
      if (this.loading) {
        return 'loading';
      }
      return this.icon;
    },

    btClasses () {
      const sizeCls = ({
        'large': 'lg',
        'small': 'sm'
      })[this.size] || '';
      return {
        [`${this.prefixCls}-btn`]: 1,
        [`${this.prefixCls}-btn-${this.type}`]: !!this.type,
        [`${this.prefixCls}-btn-${this.shape}`]: !!this.shape,
        [`${this.prefixCls}-btn-${sizeCls}`]: !!sizeCls,
        [`${this.prefixCls}-btn-loading`]: this.loading,
        [`${this.prefixCls}-btn-clicked`]: this.clsActive
        // ,
        // [this.className]: !!this.className
      };
    }
  },
  components: {vIcon}
};

