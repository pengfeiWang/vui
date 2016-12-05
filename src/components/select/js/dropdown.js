import Popper from 'utils/vue-popper';
export default {
  name: 'el-select-dropdown',

  componentName: 'select-dropdown',

  mixins: [Popper],

  props: {
    placement: {
      default: 'bottom-start'
    },

    boundariesPadding: {
      default: 0
    },

    options: {
      default () {
        return {
          forceAbsolute: true,
          gpuAcceleration: false
        };
      }
    },
    onUpdatePopper: null,
    onDestroyPopper: null
  },

  data () {
    return {
      minWidth: ''
    };
  },

  watch: {
    '$parent.wrapperWidth' () {
      this.minWidth = this.$parent.$el.getBoundingClientRect().width + 'px';
    },
    onUpdatePopper (v) {
      if (v) {
        this.updatePopper();
      }
    },
    onDestroyPopper (v) {
      if (v) {
        this.destroyPopper();
      }
    }
  },

  mounted () {
    this.minWidth = this.$parent.$el.getBoundingClientRect().width + 'px';
    this.referenceElm = this.$parent.$refs.reference;
    this.$parent.popperElm = this.popperElm = this.$el;
  }
};


