import { defaultProps, oneOf, Popper } from '../../../utils/';
import Clickoutside from '../../../utils/clickoutside';
import {addResizeListener, removeResizeListener} from '../../../utils/resize-event';
import cfg from '../../../config';
import debounce from 'throttle-debounce/debounce';
import selectMenu from '../template/dropdown';
let {prefix} = cfg;
let queryNumber = 0;
let itemHover = '-select-dropdown-menu-item-hover';
let labels = [];

/**
 * 转换特殊字符
 * @param  {[string]} s 
 * @return {[string regexp]}
 */
function replaceQuery (s) {
  if (!s) {
    return;
  }
  return s.replace(/(\^|\(|\)|\[|\]|\$|\*|\+|\.|\?|\\|\{|\}|\|)/g, '\\$1');
}

/**
 * 过滤隐藏项, 重新计算索引
 * @param  {[string]} direction 键盘方向
 * @return {[type]}
 */
function filterNext (direction) {
  let isQuery = this.queryItem(this.selects[this.keyIndex][this.keyLabel]);
  let len = this.selects.length;
  let isHidden = this.hiddens.indexOf(this.keyIndex);

  if (this.create && this.isFilter && this.isTags && this.value) {
    len += 1;
  }
  let isInHiddens = function () {
    let isHidden = this.hiddens.indexOf(this.keyIndex);
    if (this.hideSelectedItem) {
      if (isHidden > -1) {
        if (direction === 'prev') {
          this.keyIndex -= 1;
        } else if (direction === 'next') {
          this.keyIndex += 1;
        }
        filterNext.call(this, direction);
        return;
      }
    }
  };
  if (isHidden > -1) {
    isInHiddens.call(this, direction);
    return;
  }
  
  queryNumber++;

  if (!isQuery) {

    if (direction === 'next') {
      this.keyIndex++;
      if (this.keyIndex === len) {
        this.keyIndex = 0;
      }
      if (isHidden > -1) {
        this.keyIndex += 1;
      }
    } else if (direction === 'prev') {
      this.keyIndex--;
      if (this.keyIndex < 0) {
        this.keyIndex = len - 1;
      }
    }
    if (len <= queryNumber) {
      queryNumber = 0;
      return;
    }


    filterNext.call(this, direction);
  } else {
    if (len <= queryNumber) {
      queryNumber = 0;
      return;
    }

    queryNumber = 0;
  }
}

function renderSize (elem) {
  if (!elem) {
    return '';
  }
  return elem.getBoundingClientRect();
}

export default {
  name: 'vSelect2',
  mixins: [Popper],
  props: defaultProps({

    /**
     * css 前缀
     * @type {[type]}
     */
    prefixCls: prefix,

    /**
     * 尺寸
     * @type {[type]}
     */
    size: oneOf(['small', 'large', undefined]),

    /**
     * 数据项中的 key value
     * @type {String}
     */
    keyLabel: 'label',
    keyValue: 'value',

    /**
     * 数据项
     * @type {Object}
     */
    selects: {
      type: Array,
      default () {
        return [];
      }
    },

    style: {},

    width: '200px',

    /**
     * 禁用
     * @type {[type]}
     */
    disabled: Boolean,

    /**
     * 默认值, null 任意类型
     * @type {[type]}
     */
    defaultValue: null,

    /**
     * 多选
     * @type {[type]}
     */
    multiple: Boolean,

    /**
     * 过滤
     * @type {[type]}
     */
    filter: Boolean,

    /**
     * 创建
     * @type {[type]}
     */
    create: Boolean,

    /**
     * 是否显示选中的列表项
     * @type {[type]}
     */
    hideSelectedItem: Boolean,
    

    /**
     * 自动输出 tag
     * @type {[type]}
     */
    tags: Boolean,
    placeholder: {
      type: String,
      default: '请选择'
    },
    
    inputWidth: '44px',
    minWidth: '14px'
  }),
  data () {
    return {
      isOpen: false,
      currentPlaceholder: '',

      /**
       * 选中的 valeue
       * @type {Array}
       */
      selectValue: [],

      /**
       * 选中的 label
       * @type {String}
       */
      selectLabel: '',
      noAutoTahLabel: '',

      /**
       * input value
       * @type {String}
       */
      value: '',

      /**
       * 选中项
       * @type {Array}
       */
      selecteds: [],

      tagsList: [],

      /**
       * 更新 popper 用于 watch, 只要值改变即可
       * @type {Boolean}
       */
      updatePopper: false,
      destroyPopper: false,

      /**
       * select 容器
       * @type {Number}
       */
      wrapperWidth: 0,

      /**
       * 输入框 box 高度
       * @type {String}
       */
      renderedHeight: 'auto',

      /**
       * 过滤条件
       * @type {String}
       */
      searchValue: '',
      isSearch: false,

      /**
       * 是否搜索到
       * @type {Boolean}
       */
      emptyText: false,

      /**
       * hover item 保存 index
       * @type {String}
       */
      hoverIndex: '',

      /**
       * key 切换列表的 index 默认值
       * @type {String}
       */
      keyIndex: '',

      /**
       * 新建的项 ['string',]
       * @type {Array}
       */
      newOptions: [],

      /**
       * 是否显示新建项
       * @type {Boolean}
       */
      isShowNewLabel: false,

      /**
       * 输入中
       * @type {Boolean}
       */
      isInputIng: false,

      /**
       * 选中的 tags index
       * @type {String}
       */
      tagsIndex: '',

      cpInputWidth: this.inputWidth,
      cpInputHeight: '',
      hiddens: []
    };
  },
  computed: {

    wrapClasses () {
      const sizeCls = ({
        'large': 'lg',
        'small': 'sm'
      })[this.size] || '';
      return {
        [`${this.prefixCls}-select`]: 1,
        [`${this.prefixCls}-select-open`]: this.isOpen,
        [`${this.prefixCls}-select-disabled`]: this.disabled !== null,
        [`${this.prefixCls}-select-${sizeCls}`]: sizeCls
      };
    },

    selectionClasses () {
      return {
        [`${this.prefixCls}-select-selection`]: 1,
        [`${this.prefixCls}-select-selection-${this.multiple !== null ? '-multiple' : '-single'}`]: 1
      };
    },

    selectionDropdownClasses () {
      return {
        [`${this.prefixCls}-select-dropdown`]: 1,
        [`${this.prefixCls}-select-dropdown-${this.multiple !== null ? '-multiple' : '-single'}`]: 1,
        [`${this.prefixCls}-select-dropdown-placement-bottomLeft`]: 1

      };
    },

    isPlaceholder () {
      let res = !(this.selecteds.length || this.tagsList.length || this.value || this.isInputIng);


      return res;
    },
    isFilter () {
      if (this.create) {
        return true;
      }
      return this.filter;
    },

    isTags () {
      if (this.isFilter || this.create) {
        return true;
      }
      return this.tags;
    },

    // isMultiple () {},
    /**
     * 是否允许输入, 控制只读比较方便, 逻辑相对少一点
     * @return {Boolean} [description]
     */
    isInput () {
      let {create, isFilter} = this;
      // do
      return (create || isFilter);
    },
    nodeTagsLabel () {
      let tmp = [], str = '';
      if (!this.tagsList.length) {
        return this.currentPlaceholder;
      }
      this.tagsList.map(it => {
        tmp.push(it[this.keyLabel]);
      });

      str = tmp.join(', ');
      str = str.trim().replace(/,$/, '');
      return str;
    }
  },

  watch: {


    /**
     * 监听 isOpen
     */
    isOpen (v) {

      /**
       * 改变 updatePopper, destroyPopper 来让 popper 来执行监听动作
       * @param  {[type]} v [description]
       * @return {[type]}   [description]
       */
      if (v) {
        this.updatePopper = true;
        this.destroyPopper = false;
      } else {
        this.updatePopper = false;
        this.destroyPopper = true;

        /**
         * 设置 input 失去焦点
         * 在 handleFocus 中已经设置过获取焦点
         */
        this.setBlur();
      }
    },

    /**
     * 监听过滤条件
     * @return {[type]} [description]
     */
    searchValue (v) {
      let reg = new RegExp(replaceQuery(v));
      // 当初很多逻辑来的, 现在看起来没什么作用的了
      // 暂时保留, 想不起来了....
      // let item = this.selects.find(it => {
      //   if (reg.test(it[this.keyLabel])) {
      //     return it;
      //   }
      // });
      this.handleChange();
    },

    /**
     * 监听当前滑入的索引, 保存到 keyIndex 
     */
    hoverIndex (v) {
      if (v === '') {
        this.keyIndex = -1;
        return;
      }
      this.keyIndex = v;
    },

    /**
     * 监听 tag 列表, 主要用于 选中列表的变化处理列表定位
     * @return {[type]} [description]
     */
    tagsList (v, ov) {

      /**
       * 还可以进一步优化, 保存旧的尺寸, 来与新的尺寸来做判断, 不比每次都更新 Popper
       * 暂时先这样
       */
      if (this.isOpen && v.length !== ov.lenght) {
        this.updatePopper = Math.random() + 1;
      }
    },
    
    selecteds (v) {
      let tmp = [];
      if (this.hideSelectedItem) {
        this.selects.map((it, i) => {
          v.find((sit, idx) => {
            if (it[this.keyValue] === sit[this.keyValue]) {
              tmp.push(i);
              return sit;
            }
          });          
        });

        this.hiddens = tmp;
      }
    }
  },

  methods: {
    doDestroy () {
      this.$refs.popper.doDestroy();
    },

    /**
     * 关闭
     * @return {[type]} [description]
     */
    handleClose () {
      if (!this.isOpen) {
        return;
      }
      this.isOpen = false;
    },

    /**
     * 获取焦点, 弹出菜单
     * 真正的 input 设定焦点
     * @param  {[type]} event [description]
     * @return {[type]}       [description]
     */
    handleFocus (event) {
      if (this.disabled) {
        return;
      }
      let target = event.target;
      let tagName = target.tagName.toLowerCase();
      if (tagName !== 'input') {
        this.$nextTick(() => {
          this.setFocus();
          this.updatePopper = Math.random() + 1;
        });
      }
      // 每次弹出菜单先清空过滤条件
      this.searchValue = '';
      // 弹出
      this.isOpen = true;

      if (this.filter) {
        this.cpInputWidth = this.inputWidth;
      }
    },

    handleBlur () {
      this.isInputIng = false;
    },

    handleInputChange () {
      let v = this.value;
      if (this.isFilter) {
        this.isInputIng = true;
        this.setSize();
        // let {filter, create} = this;
        // 截流, 作用没那么明显, 搜索的话可以, 本地过滤可以取消掉截流
        debounce(300, () => {
          this.searchValue = this.value;
          this.updatePopper = Math.random() + 1;
        })();          
      }
    },

    /**
     * 输入框变化处理
     * @return {[type]} [description]
     */
    handleChange () {
      let {
        create,
        value,
        keyLabel,
        selects,
        selecteds,
        newOptions,
        isTags
      } = this;
      let o = {}, 
        isInsert,
        index,
        reg = new RegExp('^' + replaceQuery(value) + '$');
      

      /**
       * 需要判断 当前 value 在否存在列表项中, 并与其中项完全相等
       */
      selects.find((it, idx) => {
        if (reg.test(it[keyLabel])) {
          isInsert = true;
          return true;
        }
      });

      newOptions.find(it => {
        if (reg.test(it[keyLabel])) {
          isInsert = true;
          return true;
        }
      });


      if (create && !isInsert && isTags && value) {
        this.$nextTick(() => {
          let reg = new RegExp(replaceQuery(value));
          labels.find((it, idx) => {
            if (reg.test(it)) {
              index = idx;
              return true;
            }
          });

          this.isShowNewLabel = true;
          
          if (index === undefined) {
            index = this.$refs.itembox.children.length - 1;
          }
          // else {
          //   this.hoverIndex = this.keyIndex = index;
          // }
          this.hoverIndex = this.keyIndex = index;
        });
      } else {
        this.isShowNewLabel = false;
      }


    },

    /**
     * 回车事件处理
     * @return {[type]} [description]
     */
    handleEnter (event) {
      let keyCode = event.keyCode;
      let type = event.type;
      let o = {}, arr, isInsert;
     
      let reg = new RegExp('^' + replaceQuery(this.value) + '$');

      if ((!this.create || !this.filter) && this.keyIndex === '') {
        return;
      }
      this.newOptions.find(it => {
        if (reg.test(it[this.keyLabel])) {
          isInsert = true;
          return true;
        }
      }); 

      if (this.keyIndex === this.selects.length && this.searchValue && 
        ((this.create || this.isFilter || this.isTags) && !isInsert)) {
        o[this.keyLabel] = this.value;
        this.newOptions.push(o);
        this.tagsList.push(o);
      }


      
      this.value = '';
      // this.searchValue = '';

      if (this.keyIndex !== '' && this.keyIndex > -1) {
        this.selectItem(this.selects[this.keyIndex], this.keyIndex, {
          target: this.$refs.itembox.children[this.keyIndex],
          type: type,
          keyCode: keyCode
        });
      } else {
        // this.handleChange();
      }     
    },

    /**
     * 列表选择
     * @return {[type]} [description]
     */
    selectItem (...ags) {
      let [item, index, event] = ags;
      let {target} = event;

      if (target && target.getAttribute('disabled')) {
        return;
      }



      this.isShowNewLabel = false;

      this.tagsIndex = '';

      this.$nextTick(() => {
        this.searchValue = '';
      });

      /**
       * 多选
       */
      if (this.multiple) {
        this.handleMultipleChange(...ags);
      } else {

        /**
         * 单选
         */
        this.handleSingleChange(...ags);
      }

      /**
       * 设置 input 失去焦点
       * 在 handleFocus 中已经设置过获取焦点
       */
      this.setFocus();
    },
    
    /**
     * 多选处理
     * @return {[type]} [description]
     */
    handleMultipleChange (...ags) {

      let [item, index, event] = ags;

      // 多选首先要清空 选中的 label

      // if (this.tags) {
      //   // 如果是自动输出 tags, 还需要清空默认的占位
      //   this.currentPlaceholder = '';
      // }
      
      /**
       * 判断选中的 value 中是否存在当前所选择的 value,
       * 存在 返回 所在位置, 不存在 返回 -1;
       * @type { Number }
       */
      let arrIndexOf = item ? this.selectValue.indexOf(item[this.keyValue]) : -1;

      let tmp = '';

      
      /**
       * 已经选中的...
       * 1. 设置反选
       * 2. 删除 selectValue 与 selecteds 中的对应项
       */
      
      if (item) {
        if (arrIndexOf > -1) {

          /**
           * 如果选中的只有一项, 并且要执行反选操作, 直接弹出此项
           */
          this.selectValue.splice(arrIndexOf, 1);
          this.selecteds.splice(arrIndexOf, 1);

          let label = item[this.keyLabel];
          let idx;

          this.tagsList.find((it, i) => {
            if (it[this.keyLabel] === label) {
              idx = i;
              return true;
            }
          });

          if (idx !== undefined) {
            this.tagsList.splice(idx, 1);
          }

        } else {
          this.selecteds.push(item);
          this.selectValue.push(item[this.keyValue]);
          this.tagsList.push(item);
          //  忘记当初要做什么了...???
          //  删除会用到, 选中的 tag
          // this.tagsIndex = this.tagsList.length - 1;
        }
      } 
      this.handleLabel();

      this.$emit('change', {
        item: item,
        index: index,
        selecteds: this.selecteds,
        newOptions: this.newOptions,
        ev: event
      });
    },
    
    /**
     * 单选处理
     * @return {[type]} [description]
     */
    handleSingleChange (...ags) {
      let [item, index, event] = ags;

      if (item) {
        this.selectValue.splice(0, 1, item[this.keyValue]);
        this.selecteds.splice(0, 1, item);
        this.tagsList.splice(0, 1, item);        
      }

      this.value = '';
      this.isOpen = false;
      // 选中的 tag
      // this.tagsIndex = this.tagsList.length - 1;
      this.handleLabel();
      this.$emit('change', {
        item: item,
        index: index,
        selecteds: this.selecteds,
        newOptions: this.newOptions,
        ev: event
      });      
    },

    handleLabel () {
      let tmp = [];
      let {
        keyLabel,
        tagsList
      } = this;

      tagsList.map((it, idx) => {
        tmp.push(it[keyLabel]);
      });

      let len = tagsList.length;


      /**
       * 作用貌似不大, 后续可以删除这个函数
       */

      /**
       * 有选中项
       */
      if (len) {
        this.currentPlaceholder = '';

      } else {
        this.currentPlaceholder = this.placeholder;
      }
        
    },

    /**
     * 查询列表
     * @param  {[string]} v 
     * @return {[type]}
     */
    queryItem (v) {
      // do
      if (!this.isFilter) {
        return true;
      }
      if (!this.searchValue.trim()) {
        return true;
      }
      let reg = new RegExp(replaceQuery(this.searchValue));
      return reg.test(v);
    },

    hideSelected (it, index) {
      let tmp = [];
      if (this.hideSelectedItem) {
        return this.selecteds.find((sit, sidx) => {
          if (sit[this.keyValue] === it[this.keyValue]) {
            return it;
          }
        });
      } else {
        return false;
      }
    },

    /**
     * 滑入列表项, 列表项添加样式, 并缓存当前项索引
     */
    hoverItem (...ags) {
      let [index, event] = ags;
      if (event.target.getAttribute('disabled')) {
        return;
      }
      this.hoverIndex = index;
    },

    /**
     * 离开列表项, 清除索引值
     */
    leaveItem (...ags) {
      this.hoverIndex = '';
    },

    /**
     * 默认选中项的样式处理
     * @param  {[type]} value [description]
     * @return {[type]}       [description]
     */
    defaultSelectItem (value) {
      var cls = `${this.prefixCls}-select-dropdown-menu-item-selected`;

      if (this.selectValue.indexOf(value) > -1) {
        return cls;
      }
      return '';
    },


    /**
     * 删除键处理
     * @return {[type]} [description]
     */
    deleteEvent () {
      let len, item, selectIdx, newOptionsIndex;

      if (this.tagsIndex < 0) {
        return;
      }
      if (this.tagsIndex !== '') {
        // this.selectItem(null, this.tagsIndex, {type: 'delete'});
        item = this.tagsList.splice(this.tagsIndex, 1)[0];
        
        selectIdx = this.selectValue.indexOf(item[this.keyValue]);
        
        this.newOptions.find((it, idx) => {
          if (item[this.keyLabel] === it[this.keyLabel]) {
            newOptionsIndex = idx;
            return true;
          }
        });
        if (selectIdx > -1) {
          this.selectValue.splice(selectIdx, 1);
          this.selecteds.splice(selectIdx, 1);
        }
        if (newOptionsIndex !== undefined && newOptionsIndex > -1) {
          this.newOptions.splice(newOptionsIndex, 1);
        }
        this.handleLabel();

        this.$emit('change', {
          item: item,
          index: this.tagsIndex,
          selecteds: this.selecteds,
          newOptions: this.newOptions,
          ev: {type: 'delete'}
        });

        
      }
      if (this.isFilter) {
        this.setSize();
      }      
      // if (this.isTags) {
      //   this.updatePopper = Math.random() + 1;
      // }


      if (!this.value && this.tagsList.length) {
        // this.tagsIndex === '';
        this.tagsIndex = this.tagsList.length - 1;
        // if (this.tagsIndex === '') {
        //   len = this.tagsList.length - 1;
        //   // console.log(len);
        //   if (len <= 0) {
        //     len = 0;
        //   }
        //   console.log(len);
        //   this.tagsIndex = len;
        // }
      } else {
        this.tagsIndex = '';
      }
    },

    /**
     * 反选 删除处理
     * @return {[type]} [description]
     */
    handleEsc () {
      //do
      this.isOpen = false;
      this.handleLabel();
      this.$nextTick(() => {
        this.setSize();
      });
    },

    /**
     * 键盘翻页处理 上 下 左 右
     */
    navigateOptions (direction) {
      let {
        create,
        isFilter,
        isTags,
        value,
        selects,
        keyIndex,
        tagsIndex
      } = this;
      let len = selects.length, iLen = this.tagsList.length;

      if (!len) {
        return;
      }
      if (this.keyIndex === '') {
        this.keyIndex = -1;
      }

      if (create && isFilter && isTags && value) {
        len += 1;
      }
      if (this.isTags && iLen) {
        // tagsIndex
        if (direction === 'left') {
          if (tagsIndex === '' || tagsIndex >= iLen || tagsIndex < 0) {
            this.tagsIndex = iLen;
          }
          this.tagsIndex--;
        } else if (direction === 'right') {
          if (tagsIndex < 0 || tagsIndex === '' || tagsIndex >= iLen) {
            this.tagsIndex = -1;
          }
          
          this.tagsIndex++;
        }
      }
      if (direction === 'next') {
        this.keyIndex++;

        if (this.keyIndex >= len) {
          this.keyIndex = 0;
        }
      } else if (direction === 'prev') {
        this.keyIndex--;
        if (this.keyIndex < 0) {
          this.keyIndex = len - 1;
        }
      }
      filterNext.call(this, direction);
    },
    setFocus () {
      if (this.$refs.input) {
        this.$refs.input.focus();
      }
    },
    setBlur () {
      this.value = '';
      if (this.$refs.input) {
        this.$refs.input.blur();
        this.setSize();
      }
    },
    setSize () {
      let v = this.value;
      let renderRect = renderSize(this.$refs.rendered);
      let renderedW = renderRect.width;
      if (!v && !this.tagsList.length) {
        this.cpInputWidth = this.inputWidth;
      } else {
        
        this.$nextTick(() => {
          if (this.$refs.input && 
            this.$refs.search__field__mirror && this.filter) {
            let iRect = renderSize(this.$refs.search__field__mirror),
            iW = iRect ? iRect.width : this.minWidth;
          // .getBoundingClientRect().width;
            if (renderedW <= iW) {
              this.cpInputWidth = renderedW - 5 + 'px';
            } else {
              this.cpInputWidth = this.value.length <= 1 ? this.minWidth : iW + 'px';
            }
          } else {
            this.cpInputWidth = this.minWidth;
          }           
        });
      }
    },
    tagsDelete (it, idx) {
      this.tagsIndex = idx;
      this.deleteEvent();
    }
  },

  components: {
    selectMenu
  },
  directives: { Clickoutside },
  created () {
    let defaultValIsArray = Array.isArray(this.defaultValue);
    // do
    // 设置 emptyText 文本, 根据 选中项
    // if (!this.selects.length) {
    //   this.emptyText = '无数据';
    // }
    this.selects.map(it => {
      labels.push(it[this.keyLabel]);
    });
    // 没有传递默认显示项 defaultValue
    // 设置默认显示文字为 placeholder
    if (this.defaultValue === null) {
      this.currentPlaceholder = this.placeholder;
    } else {
      
      
      /**
       * 有传递默认显示项
       */
      /**
 
      /**
       * 设置显示文本
       * 多选, default-value 必须数组
       */
      
      if (this.multiple && defaultValIsArray) {
        this.selects.map(it => {
          labels.push(it[this.keyLabel]);
          this.defaultValue.map(sIt => {
            if (sIt === it[this.keyValue]) {
              this.selecteds.push(it);
            }
          });
        });
      } else {
        this.selects.map(it => {
          labels.push(it[this.keyLabel]);
          if (this.defaultValue === it[this.keyValue]) {
            this.selecteds.push(it);
          }
        });
      }


      this.selecteds.map(it => {
        this.selectValue.push(it[this.keyValue]);
      });

      this.selecteds.map(it => {
        this.tagsList.push(it);
      });

      if (this.tagsList.length) {
        this.currentPlaceholder = '';
      } else {
        this.currentPlaceholder = this.placeholder;
      }
    }

    if (this.filter) {
      let rect = renderSize(this.$refs.search__field__mirror);
      if (this.tagsList.length) {
        this.cpInputWidth = this.minWidth;
      } else {
        this.cpInputWidth = rect ? rect.width + 'px' : this.inputWidth;
      }
    }

    this.handleLabel();
  },
  mounted () {
    // do
  }
};
