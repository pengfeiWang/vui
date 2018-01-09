import {defaultProps, oneOf} from '../../../utils/props';
import calculateNodeHeight from './calculateNodeHeight.js';
// import extend from 'extend';
import cfg from '../../../config';
let {prefix} = cfg;
export default {
  name: 'vInput',
  data () {
    return {
      cPvalue: '',
      textareaStyles: {
        height: '',
        maxHeight: '',
        minHeight: ''
      }
    };
  },
  props: defaultProps({
    prefixCls: prefix,
    size: oneOf(['small', 'large', undefined]),
    type: 'text',
    style: null,
    value: null,
    defaultValue: null,
    name: null,
    disabled: null,
    max: null,
    min: null,
    readonly: Boolean,
    autosize: {
      type: [Object, Boolean],
      default: false
    },
    className: null,
    placeholder: '请输入'
  }),
  computed: {
    classes () {
      const sizeCls = ({
        'large': 'lg',
        'small': 'sm'
      })[this.size] || '';
      return {
        [`${this.prefixCls}-input`]: 1,
        [`${this.prefixCls}-input-${sizeCls}`]: !!sizeCls,
        [`${this.className}`]: this.className
      };
    }
  },
  watch: {
    defaultValue (v) {
      this.cPvalue = v;
      this.resizeTextarea();
    }
  },
  methods: {
    handleInputChange (e) {
      if (this.type === 'number') {
        if (+(this.cPvalue) > this.max) {
          this.cPvalue = this.max;
        }
        if (+(this.cPvalue) < this.min) {
          this.cPvalue = this.min;
        }
      }
      // this.onChange(this.value, e);
      this.$emit('input', {
        ev: e,
        el: this.$refs.rt,
        input: this.$refs.input,
        value: this.cPvalue,
        name: this.name
      });
    },

    handleTextareaChange (e) {
      if (this.type !== 'password') {
        this.resizeTextarea(e);
      }

      // this.onChange(this.value, e);
      this.$emit('input', {
        ev: e,
        el: this.$refs.rt,
        input: this.$refs.input,
        value: this.cPvalue,
        name: this.name
      });
    },
    handleFocus (e) {
      this.$emit('focus', {
        ev: e,
        el: this.$refs.rt,
        input: this.$refs.input,
        value: this.cPvalue,
        name: this.name
      });
    },
    handleBlur (e) {
      this.$emit('blur', {
        ev: e,
        el: this.$refs.rt,
        input: this.$refs.input,
        value: this.cPvalue,
        name: this.name
      });
    },
    resizeTextarea (e) {
      const { autosize } = this;
      if (!autosize) {return;}
      var styleObject = {position: 'static'};

      if (typeof autosize === 'object') {

        styleObject = Object.assign({}, calculateNodeHeight(this.$refs.input, false, autosize.minRows, autosize.maxRows));

      } else {

        styleObject = Object.assign({}, calculateNodeHeight(this.$refs.input, false, 1, null));
      }

      const {height, minHeight, maxHeight} = styleObject;

      this.textareaStyles = {
        height: height + 'px',
        minHeight: minHeight + 'px',
        maxHeight: maxHeight + 'px',
        position: 'static'
      };

    },

    handleEnter (e) {
      this.$emit('enter', {
        ev: e,
        el: this.$refs.rt,
        input: this.$refs.input,
        value: this.cPvalue,
        name: this.name
      });
    },

    handleDelete (e) {
      this.$emit('delete', {
        ev: e,
        el: this.$refs.rt,
        input: this.$refs.input,
        value: this.cPvalue,
        name: this.name
      });
    }
  },

  mounted () {

    if (this.defaultValue) {
      this.cPvalue = this.defaultValue;
    }
    if (this.value) {
      this.cPvalue = this.value;
    }
    this.resizeTextarea();
  }
};
