import {defaultProps, oneOf} from '../../../utils';
import calculateNodeHeight from './calculateNodeHeight.js';
import extend from 'extend';
import cfg from '../../../config';
let {prefix} = cfg;
export default {
  name: 'vInput',
  data () {
    return {
      text: '',
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
    name: null,
    disabled: '',
    max: null,
    min: null,
    readonly: Boolean,
    autosize: {
      type: [Object, Boolean],
      default: false
    },
    className: null,
    placeholder: '请输入',
    onPressEnter () {
      // do codeing
    },
    onKeyDown () {
      // do codeing
    },
    onChange () {
      // do codeing
    },
    onBlur () {
      // do codeing
    },
    onFocus () {
      // do codeing
    }
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
    value (v) {
      this.text = v;
      this.resizeTextarea();
    }
  },
  methods: {
    handleInputChange (e) {
      if (this.type === 'number') {
        if (+(this.text) > this.max) {
          this.text = this.max;
        }
        if (+(this.text) < this.min) {
          this.text = this.min;
        }
      }
      // this.onChange(this.text, e);
      this.$emit('input', {
        ev: e,
        el: this.$refs.rt,
        input: this.$refs.input,
        value: this.text,
        name: this.name
      });
    },

    handleTextareaChange (e) {
      if (this.type !== 'password') {
        this.resizeTextarea(e);
      }

      // this.onChange(this.text, e);
      this.$emit('input', {
        ev: e,
        el: this.$refs.rt,
        input: this.$refs.input,
        value: this.text,
        name: this.name
      });
    },
    handleFocus (e) {
      this.onFocus(this.text, e);
    },
    handleBlur (e) {
      this.onBlur(this.text, e);
    },
    resizeTextarea (e) {
      const { autosize } = this;
      if (!autosize) {return;}
      var styleObject = {position: 'static'};

      if (typeof autosize === 'object') {

        styleObject = extend({}, calculateNodeHeight(this.$refs.input, false, autosize.minRows, autosize.maxRows));

      } else {

        styleObject = extend({}, calculateNodeHeight(this.$refs.input, false, 1, null));
      }

      const {height, minHeight, maxHeight} = styleObject;

      this.textareaStyles = {
        height: height + 'px',
        minHeight: minHeight + 'px',
        maxHeight: maxHeight + 'px',
        position: 'static'
      };

    },

    handleKeyDown (e) {
      const { onPressEnter, onKeyDown } = this;
      if (onPressEnter) {
        onPressEnter(this.text, e);
      }
      if (onKeyDown) {
        onKeyDown(this.text, e);
      }
    }
  },

  mounted () {

    if (this.value) {
      this.text = this.value;
    }
    this.resizeTextarea();
  }
};
