import { defaultProps } from '../../../utils/props';
import {vButton} from '../../button';
import cfg from '../../../config';
var {prefix} = cfg;


export default {
  name: 'vDialog',
  props: defaultProps({
    title: '提示 ',
    modal: {
      type: Boolean,
      default: true
    },
    isShowCancel: true,
    isShow: false,
    loading: false,
    vstyle: {
      type: Object,
      default () {
        return {};
      }
    },
    disabled: false,
    onDialog () {
      // do codeing
    }
  }),
  components: {
    vButton
  },
  computed: {
    btnLoading () {
      return this.loading;
    },
    value () {
      return this.isShow;
    }
  },
  watch: {
  },
  methods: {

    /* 按钮点击 实际业务处理 */
    handleAction (action) {
      this.onDialog(action, this);
    }
  },
  data () {
    return {
      value: this.isShow,
      btnLoading: this.loading,
      prefixCls: prefix
    };
  }
};
