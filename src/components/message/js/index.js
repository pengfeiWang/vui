import cfg from '../../../config';
import {vIcon} from '../../icon/';
import {defaultProps} from '../../../utils';
let {prefix} = cfg;
var typeArr = ['info', 'success', 'error', 'warning'];
export default {
  data () {
    return {
      visible: false,
      message: '',
      duration: 3000,
      type: 'info',
      onClose: null,
      showClose: false,
      closed: false,
      timer: null,
      prefixCls: prefix
    };
  },

  computed: {
    cpClass () {
      return {
        [`${this.prefixCls}-message-${this.type}`]: (typeArr.indexOf(this.type) >= 0)
      };
    }
  },

  watch: {
    closed (newVal) {
      if (newVal) {
        this.visible = false;
        this.$el.addEventListener('transitionend', this.destroyElement);
      }
    }
  },

  methods: {
    destroyElement () {
      this.$el.removeEventListener('transitionend', this.destroyElement);
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },

    handleClose () {
      this.closed = true;
      if (typeof this.onClose === 'function') {
        this.onClose(this);
      }
    },

    clearTimer () {
      clearTimeout(this.timer);
    },

    startTimer () {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.handleClose();
          }
        }, this.duration);
      }
    }
  },
  components: {vIcon},
  mounted () {
    this.startTimer();
  }
};
