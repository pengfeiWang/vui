(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue-popup"));
	else if(typeof define === 'function' && define.amd)
		define("vSelect", ["vue-popup"], factory);
	else if(typeof exports === 'object')
		exports["vSelect"] = factory(require("vue-popup"));
	else
		root["vSelect"] = factory(root["vue-popup"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_94__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.vSelect = undefined;

	var _template = __webpack_require__(1);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_template2.default.install = function (Vue) {
	  Vue.component(_template2.default.name, _template2.default);
	};
	exports.vSelect = _template2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader!vue-loader/lib/style-rewriter?id=data-v-74fd8f16!scss-loader!vue-loader/lib/selector?type=styles&index=0!./index.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))

	/* script */
	__vue_exports__ = __webpack_require__(2)

	/* template */
	var __vue_template__ = __webpack_require__(96)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/oliver/DEV/yunkeji/yunyingbu/vue-components/src/components/select/template/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-74fd8f16", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-74fd8f16", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(3);

	var _clickoutside = __webpack_require__(85);

	var _clickoutside2 = _interopRequireDefault(_clickoutside);

	var _resizeEvent = __webpack_require__(87);

	var _config = __webpack_require__(88);

	var _config2 = _interopRequireDefault(_config);

	var _debounce = __webpack_require__(89);

	var _debounce2 = _interopRequireDefault(_debounce);

	var _dropdown = __webpack_require__(91);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefix = _config2.default.prefix;

	var queryNumber = 0;
	var itemHover = '-select-dropdown-menu-item-hover';
	var labels = [];

	function replaceQuery(s) {
	  if (!s) {
	    return;
	  }
	  return s.replace(/(\^|\(|\)|\[|\]|\$|\*|\+|\.|\?|\\|\{|\}|\|)/g, '\\$1');
	}

	function filterNext(direction) {
	  var isQuery = this.queryItem(this.selects[this.keyIndex][this.keyLabel]);
	  var len = this.selects.length;
	  var isHidden = this.hiddens.indexOf(this.keyIndex);

	  if (this.create && this.isFilter && this.isTags && this.value) {
	    len += 1;
	  }
	  var isInHiddens = function isInHiddens() {
	    var isHidden = this.hiddens.indexOf(this.keyIndex);
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

	function renderSize(elem) {
	  if (!elem) {
	    return '';
	  }
	  return elem.getBoundingClientRect();
	}

	exports.default = {
	  name: 'vSelect2',
	  mixins: [_utils.Popper],
	  props: (0, _utils.defaultProps)({
	    prefixCls: prefix,

	    size: (0, _utils.oneOf)(['small', 'large', undefined]),

	    keyLabel: 'label',
	    keyValue: 'value',

	    selects: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },

	    style: {},

	    width: '200px',

	    disabled: Boolean,

	    defaultValue: null,

	    multiple: Boolean,

	    filter: Boolean,

	    create: Boolean,

	    hideSelectedItem: Boolean,

	    tags: Boolean,
	    placeholder: {
	      type: String,
	      default: '请选择'
	    },

	    inputWidth: '44px',
	    minWidth: '14px'
	  }),
	  data: function data() {
	    return {
	      isOpen: false,
	      currentPlaceholder: '',

	      selectValue: [],

	      selectLabel: '',
	      noAutoTahLabel: '',

	      value: '',

	      selecteds: [],

	      tagsList: [],

	      updatePopper: false,
	      destroyPopper: false,

	      wrapperWidth: 0,

	      renderedHeight: 'auto',

	      searchValue: '',
	      isSearch: false,

	      emptyText: false,

	      hoverIndex: '',

	      keyIndex: '',

	      newOptions: [],

	      isShowNewLabel: false,

	      isInputIng: false,

	      tagsIndex: '',

	      cpInputWidth: this.inputWidth,
	      cpInputHeight: '',
	      hiddens: []
	    };
	  },

	  computed: {
	    wrapClasses: function wrapClasses() {
	      var _ref;

	      var sizeCls = {
	        'large': 'lg',
	        'small': 'sm'
	      }[this.size] || '';
	      return _ref = {}, _ref[this.prefixCls + '-select'] = 1, _ref[this.prefixCls + '-select-open'] = this.isOpen, _ref[this.prefixCls + '-select-disabled'] = this.disabled !== null, _ref[this.prefixCls + '-select-' + sizeCls] = sizeCls, _ref;
	    },
	    selectionClasses: function selectionClasses() {
	      var _ref2;

	      return _ref2 = {}, _ref2[this.prefixCls + '-select-selection'] = 1, _ref2[this.prefixCls + '-select-selection-' + (this.multiple !== null ? '-multiple' : '-single')] = 1, _ref2;
	    },
	    selectionDropdownClasses: function selectionDropdownClasses() {
	      var _ref3;

	      return _ref3 = {}, _ref3[this.prefixCls + '-select-dropdown'] = 1, _ref3[this.prefixCls + '-select-dropdown-' + (this.multiple !== null ? '-multiple' : '-single')] = 1, _ref3[this.prefixCls + '-select-dropdown-placement-bottomLeft'] = 1, _ref3;
	    },
	    isPlaceholder: function isPlaceholder() {
	      var res = !(this.selecteds.length || this.tagsList.length || this.value || this.isInputIng);

	      return res;
	    },
	    isFilter: function isFilter() {
	      if (this.create) {
	        return true;
	      }
	      return this.filter;
	    },
	    isTags: function isTags() {
	      if (this.isFilter || this.create) {
	        return true;
	      }
	      return this.tags;
	    },
	    isInput: function isInput() {
	      var create = this.create,
	          isFilter = this.isFilter;

	      return create || isFilter;
	    },
	    nodeTagsLabel: function nodeTagsLabel() {
	      var _this = this;

	      var tmp = [],
	          str = '';
	      if (!this.tagsList.length) {
	        return this.currentPlaceholder;
	      }
	      this.tagsList.map(function (it) {
	        tmp.push(it[_this.keyLabel]);
	      });

	      str = tmp.join(', ');
	      str = str.trim().replace(/,$/, '');
	      return str;
	    }
	  },

	  watch: {
	    isOpen: function isOpen(v) {
	      if (v) {
	        this.updatePopper = true;
	        this.destroyPopper = false;
	      } else {
	        this.updatePopper = false;
	        this.destroyPopper = true;

	        this.setBlur();
	      }
	    },
	    searchValue: function searchValue(v) {
	      var reg = new RegExp(replaceQuery(v));

	      this.handleChange();
	    },
	    hoverIndex: function hoverIndex(v) {
	      if (v === '') {
	        this.keyIndex = -1;
	        return;
	      }
	      this.keyIndex = v;
	    },
	    tagsList: function tagsList(v, ov) {
	      if (this.isOpen && v.length !== ov.lenght) {
	        this.updatePopper = Math.random() + 1;
	      }
	    },
	    selecteds: function selecteds(v) {
	      var _this2 = this;

	      var tmp = [];
	      if (this.hideSelectedItem) {
	        this.selects.map(function (it, i) {
	          v.find(function (sit, idx) {
	            if (it[_this2.keyValue] === sit[_this2.keyValue]) {
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
	    doDestroy: function doDestroy() {
	      this.$refs.popper.doDestroy();
	    },
	    handleClose: function handleClose() {
	      if (!this.isOpen) {
	        return;
	      }
	      this.isOpen = false;
	    },
	    handleFocus: function handleFocus(event) {
	      var _this3 = this;

	      if (this.disabled) {
	        return;
	      }
	      var target = event.target;
	      var tagName = target.tagName.toLowerCase();
	      if (tagName !== 'input') {
	        this.$nextTick(function () {
	          _this3.setFocus();
	          _this3.updatePopper = Math.random() + 1;
	        });
	      }

	      this.searchValue = '';

	      this.isOpen = true;

	      if (this.filter) {
	        this.cpInputWidth = this.inputWidth;
	      }
	    },
	    handleBlur: function handleBlur() {
	      this.isInputIng = false;
	    },
	    handleInputChange: function handleInputChange() {
	      var _this4 = this;

	      var v = this.value;
	      if (this.isFilter) {
	        this.isInputIng = true;
	        this.setSize();

	        (0, _debounce2.default)(300, function () {
	          _this4.searchValue = _this4.value;
	          _this4.updatePopper = Math.random() + 1;
	        })();
	      }
	    },
	    handleChange: function handleChange() {
	      var _this5 = this;

	      var create = this.create,
	          value = this.value,
	          keyLabel = this.keyLabel,
	          selects = this.selects,
	          selecteds = this.selecteds,
	          newOptions = this.newOptions,
	          isTags = this.isTags;

	      var o = {},
	          isInsert = void 0,
	          index = void 0,
	          reg = new RegExp('^' + replaceQuery(value) + '$');

	      selects.find(function (it, idx) {
	        if (reg.test(it[keyLabel])) {
	          isInsert = true;
	          return true;
	        }
	      });

	      newOptions.find(function (it) {
	        if (reg.test(it[keyLabel])) {
	          isInsert = true;
	          return true;
	        }
	      });

	      if (create && !isInsert && isTags && value) {
	        this.$nextTick(function () {
	          var reg = new RegExp(replaceQuery(value));
	          labels.find(function (it, idx) {
	            if (reg.test(it)) {
	              index = idx;
	              return true;
	            }
	          });

	          _this5.isShowNewLabel = true;

	          if (index === undefined) {
	            index = _this5.$refs.itembox.children.length - 1;
	          }

	          _this5.hoverIndex = _this5.keyIndex = index;
	        });
	      } else {
	        this.isShowNewLabel = false;
	      }
	    },
	    handleEnter: function handleEnter(event) {
	      var _this6 = this;

	      var keyCode = event.keyCode;
	      var type = event.type;
	      var o = {},
	          arr = void 0,
	          isInsert = void 0;

	      var reg = new RegExp('^' + replaceQuery(this.value) + '$');

	      if ((!this.create || !this.filter) && this.keyIndex === '') {
	        return;
	      }
	      this.newOptions.find(function (it) {
	        if (reg.test(it[_this6.keyLabel])) {
	          isInsert = true;
	          return true;
	        }
	      });

	      if (this.keyIndex === this.selects.length && this.searchValue && (this.create || this.isFilter || this.isTags) && !isInsert) {
	        o[this.keyLabel] = this.value;
	        this.newOptions.push(o);
	        this.tagsList.push(o);
	      }

	      this.value = '';


	      if (this.keyIndex !== '' && this.keyIndex > -1) {
	        this.selectItem(this.selects[this.keyIndex], this.keyIndex, {
	          target: this.$refs.itembox.children[this.keyIndex],
	          type: type,
	          keyCode: keyCode
	        });
	      } else {}
	    },
	    selectItem: function selectItem() {
	      var _this7 = this;

	      for (var _len = arguments.length, ags = Array(_len), _key = 0; _key < _len; _key++) {
	        ags[_key] = arguments[_key];
	      }

	      var item = ags[0],
	          index = ags[1],
	          event = ags[2];
	      var target = event.target;


	      if (target && target.getAttribute('disabled')) {
	        return;
	      }

	      this.isShowNewLabel = false;

	      this.tagsIndex = '';

	      this.$nextTick(function () {
	        _this7.searchValue = '';
	      });

	      if (this.multiple) {
	        this.handleMultipleChange.apply(this, ags);
	      } else {
	        this.handleSingleChange.apply(this, ags);
	      }

	      this.setFocus();
	    },
	    handleMultipleChange: function handleMultipleChange() {
	      var _this8 = this;

	      for (var _len2 = arguments.length, ags = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        ags[_key2] = arguments[_key2];
	      }

	      var item = ags[0],
	          index = ags[1],
	          event = ags[2];

	      var arrIndexOf = item ? this.selectValue.indexOf(item[this.keyValue]) : -1;

	      var tmp = '';

	      if (item) {
	        if (arrIndexOf > -1) {
	          (function () {
	            _this8.selectValue.splice(arrIndexOf, 1);
	            _this8.selecteds.splice(arrIndexOf, 1);

	            var label = item[_this8.keyLabel];
	            var idx = void 0;

	            _this8.tagsList.find(function (it, i) {
	              if (it[_this8.keyLabel] === label) {
	                idx = i;
	                return true;
	              }
	            });

	            if (idx !== undefined) {
	              _this8.tagsList.splice(idx, 1);
	            }
	          })();
	        } else {
	          this.selecteds.push(item);
	          this.selectValue.push(item[this.keyValue]);
	          this.tagsList.push(item);
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
	    handleSingleChange: function handleSingleChange() {
	      for (var _len3 = arguments.length, ags = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	        ags[_key3] = arguments[_key3];
	      }

	      var item = ags[0],
	          index = ags[1],
	          event = ags[2];


	      if (item) {
	        this.selectValue.splice(0, 1, item[this.keyValue]);
	        this.selecteds.splice(0, 1, item);
	        this.tagsList.splice(0, 1, item);
	      }

	      this.value = '';
	      this.isOpen = false;

	      this.handleLabel();
	      this.$emit('change', {
	        item: item,
	        index: index,
	        selecteds: this.selecteds,
	        newOptions: this.newOptions,
	        ev: event
	      });
	    },
	    handleLabel: function handleLabel() {
	      var tmp = [];
	      var keyLabel = this.keyLabel,
	          tagsList = this.tagsList;


	      tagsList.map(function (it, idx) {
	        tmp.push(it[keyLabel]);
	      });

	      var len = tagsList.length;

	      if (len) {
	        this.currentPlaceholder = '';
	      } else {
	        this.currentPlaceholder = this.placeholder;
	      }
	    },
	    queryItem: function queryItem(v) {
	      if (!this.isFilter) {
	        return true;
	      }
	      if (!this.searchValue.trim()) {
	        return true;
	      }
	      var reg = new RegExp(replaceQuery(this.searchValue));
	      return reg.test(v);
	    },
	    hideSelected: function hideSelected(it, index) {
	      var _this9 = this;

	      var tmp = [];
	      if (this.hideSelectedItem) {
	        return this.selecteds.find(function (sit, sidx) {
	          if (sit[_this9.keyValue] === it[_this9.keyValue]) {
	            return it;
	          }
	        });
	      } else {
	        return false;
	      }
	    },
	    hoverItem: function hoverItem() {
	      for (var _len4 = arguments.length, ags = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	        ags[_key4] = arguments[_key4];
	      }

	      var index = ags[0],
	          event = ags[1];

	      if (event.target.getAttribute('disabled')) {
	        return;
	      }
	      this.hoverIndex = index;
	    },
	    leaveItem: function leaveItem() {
	      this.hoverIndex = '';
	    },
	    defaultSelectItem: function defaultSelectItem(value) {
	      var cls = this.prefixCls + '-select-dropdown-menu-item-selected';

	      if (this.selectValue.indexOf(value) > -1) {
	        return cls;
	      }
	      return '';
	    },
	    deleteEvent: function deleteEvent() {
	      var _this10 = this;

	      var len = void 0,
	          item = void 0,
	          selectIdx = void 0,
	          newOptionsIndex = void 0;

	      if (this.tagsIndex < 0) {
	        return;
	      }
	      if (this.tagsIndex !== '') {
	        item = this.tagsList.splice(this.tagsIndex, 1)[0];

	        selectIdx = this.selectValue.indexOf(item[this.keyValue]);

	        this.newOptions.find(function (it, idx) {
	          if (item[_this10.keyLabel] === it[_this10.keyLabel]) {
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
	          ev: { type: 'delete' }
	        });
	      }
	      if (this.isFilter) {
	        this.setSize();
	      }


	      if (!this.value && this.tagsList.length) {
	        this.tagsIndex = this.tagsList.length - 1;
	      } else {
	        this.tagsIndex = '';
	      }
	    },
	    handleEsc: function handleEsc() {
	      var _this11 = this;

	      this.isOpen = false;
	      this.handleLabel();
	      this.$nextTick(function () {
	        _this11.setSize();
	      });
	    },
	    navigateOptions: function navigateOptions(direction) {
	      var create = this.create,
	          isFilter = this.isFilter,
	          isTags = this.isTags,
	          value = this.value,
	          selects = this.selects,
	          keyIndex = this.keyIndex,
	          tagsIndex = this.tagsIndex;

	      var len = selects.length,
	          iLen = this.tagsList.length;

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
	    setFocus: function setFocus() {
	      if (this.$refs.input) {
	        this.$refs.input.focus();
	      }
	    },
	    setBlur: function setBlur() {
	      this.value = '';
	      if (this.$refs.input) {
	        this.$refs.input.blur();
	        this.setSize();
	      }
	    },
	    setSize: function setSize() {
	      var _this12 = this;

	      var v = this.value;
	      var renderRect = renderSize(this.$refs.rendered);
	      var renderedW = renderRect.width;
	      if (!v && !this.tagsList.length) {
	        this.cpInputWidth = this.inputWidth;
	      } else {

	        this.$nextTick(function () {
	          if (_this12.$refs.input && _this12.$refs.search__field__mirror && _this12.filter) {
	            var iRect = renderSize(_this12.$refs.search__field__mirror),
	                iW = iRect ? iRect.width : _this12.minWidth;

	            if (renderedW <= iW) {
	              _this12.cpInputWidth = renderedW - 5 + 'px';
	            } else {
	              _this12.cpInputWidth = _this12.value.length <= 1 ? _this12.minWidth : iW + 'px';
	            }
	          } else {
	            _this12.cpInputWidth = _this12.minWidth;
	          }
	        });
	      }
	    },
	    tagsDelete: function tagsDelete(it, idx) {
	      this.tagsIndex = idx;
	      this.deleteEvent();
	    }
	  },

	  components: {
	    selectMenu: _dropdown2.default
	  },
	  directives: { Clickoutside: _clickoutside2.default },
	  created: function created() {
	    var _this13 = this;

	    var defaultValIsArray = Array.isArray(this.defaultValue);

	    this.selects.map(function (it) {
	      labels.push(it[_this13.keyLabel]);
	    });

	    if (this.defaultValue === null) {
	      this.currentPlaceholder = this.placeholder;
	    } else {

	      if (this.multiple && defaultValIsArray) {
	        this.selects.map(function (it) {
	          labels.push(it[_this13.keyLabel]);
	          _this13.defaultValue.map(function (sIt) {
	            if (sIt === it[_this13.keyValue]) {
	              _this13.selecteds.push(it);
	            }
	          });
	        });
	      } else {
	        this.selects.map(function (it) {
	          labels.push(it[_this13.keyLabel]);
	          if (_this13.defaultValue === it[_this13.keyValue]) {
	            _this13.selecteds.push(it);
	          }
	        });
	      }

	      this.selecteds.map(function (it) {
	        _this13.selectValue.push(it[_this13.keyValue]);
	      });

	      this.selecteds.map(function (it) {
	        _this13.tagsList.push(it);
	      });

	      if (this.tagsList.length) {
	        this.currentPlaceholder = '';
	      } else {
	        this.currentPlaceholder = this.placeholder;
	      }
	    }

	    if (this.filter) {
	      var rect = renderSize(this.$refs.search__field__mirror);
	      if (this.tagsList.length) {
	        this.cpInputWidth = this.minWidth;
	      } else {
	        this.cpInputWidth = rect ? rect.width + 'px' : this.inputWidth;
	      }
	    }

	    this.handleLabel();
	  },
	  mounted: function mounted() {}
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.any = exports.oneOf = exports.Popper = exports.oneOfType = exports.defaultProps = undefined;

	var _popper = __webpack_require__(4);

	var _popper2 = _interopRequireDefault(_popper);

	var _props = __webpack_require__(84);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.defaultProps = _props.defaultProps;
	exports.oneOfType = _props.oneOfType;
	exports.Popper = _popper2.default;
	exports.oneOf = _props.oneOf;
	exports.any = _props.any;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _getOwnPropertyDescriptor = __webpack_require__(5);

	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

	var _keys = __webpack_require__(31);

	var _keys2 = _interopRequireDefault(_keys);

	var _assign = __webpack_require__(45);

	var _assign2 = _interopRequireDefault(_assign);

	var _typeof2 = __webpack_require__(50);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @fileOverview Kickass library to create and place poppers near their reference elements.
	 * @version 0.6.4
	 * @license
	 * link https://github.com/FezVrasta/popper.js
	 * Copyright (c) 2016 Federico Zivolo and contributors
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in all
	 * copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	 * SOFTWARE.
	 */

	(function (root, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ((typeof module === 'undefined' ? 'undefined' : (0, _typeof3.default)(module)) === 'object' && module.exports) {
	    module.exports = factory();
	  } else {
	    root.Popper = factory();
	  }
	})(undefined, function () {

	  'use strict';

	  var root = window;

	  var DEFAULTS = {
	    placement: 'bottom',

	    gpuAcceleration: true,

	    offset: 0,

	    boundariesElement: 'viewport',

	    boundariesPadding: 5,

	    preventOverflowOrder: ['left', 'right', 'top', 'bottom'],

	    flipBehavior: 'flip',

	    arrowElement: '[x-arrow]',

	    modifiers: ['shift', 'offset', 'preventOverflow', 'keepTogether', 'arrow', 'flip', 'applyStyle'],

	    modifiersIgnored: []
	  };

	  function Popper(reference, popper, options) {
	    this._reference = reference.jquery ? reference[0] : reference;
	    this.state = { onCreateCalled: false };

	    var isNotDefined = typeof popper === 'undefined' || popper === null;
	    var isConfig = popper && Object.prototype.toString.call(popper) === '[object Object]';
	    if (isNotDefined || isConfig) {
	      this._popper = this.parse(isConfig ? popper : {});
	    } else {
	      this._popper = popper.jquery ? popper[0] : popper;
	    }

	    this._options = (0, _assign2.default)({}, DEFAULTS, options);

	    this._options.modifiers = this._options.modifiers.map(function (modifier) {
	      if (this._options.modifiersIgnored.indexOf(modifier) !== -1) {
	        return;
	      }

	      if (modifier === 'applyStyle') {
	        this._popper.setAttribute('x-placement', this._options.placement);
	      }

	      return this.modifiers[modifier] || modifier;
	    }.bind(this));

	    this.state.position = this._getPosition(this._popper, this._reference);
	    setStyle(this._popper, { position: this.state.position });

	    this.state.isParentTransformed = this._getIsParentTransformed(this._popper);

	    this.update();

	    this._setupEventListeners();
	    return this;
	  }

	  Popper.prototype.destroy = function () {
	    this._popper.removeAttribute('x-placement');
	    this._popper.style.left = '';
	    this._popper.style.position = '';
	    this._popper.style.top = '';
	    this._popper.style[getSupportedPropertyName('transform')] = '';
	    this._removeEventListeners();

	    if (this._options.removeOnDestroy) {
	      this._popper.parentNode.removeChild(this._popper);
	    }
	    return this;
	  };

	  Popper.prototype.update = function () {
	    var data = { instance: this, styles: {} };

	    this.state.position = this._getPosition(this._popper, this._reference);
	    setStyle(this._popper, { position: this.state.position });

	    root.requestAnimationFrame(function () {
	      var now = root.performance.now();
	      if (now - this.state.lastFrame <= 16) {
	        return;
	      }
	      this.state.lastFrame = now;

	      data.placement = this._options.placement;
	      data._originalPlacement = this._options.placement;

	      data.offsets = this._getOffsets(this._popper, this._reference, data.placement);

	      data.boundaries = this._getBoundaries(data, this._options.boundariesPadding, this._options.boundariesElement);

	      data = this.runModifiers(data, this._options.modifiers);

	      if (!isFunction(this.state.createCalback)) {
	        this.state.onCreateCalled = true;
	      }
	      if (!this.state.onCreateCalled) {
	        this.state.onCreateCalled = true;
	        if (isFunction(this.state.createCalback)) {
	          this.state.createCalback(this);
	        }
	      } else if (isFunction(this.state.updateCallback)) {
	        this.state.updateCallback(data);
	      }
	    }.bind(this));
	  };

	  Popper.prototype.onCreate = function (callback) {
	    this.state.createCalback = callback;
	    return this;
	  };

	  Popper.prototype.onUpdate = function (callback) {
	    this.state.updateCallback = callback;
	    return this;
	  };

	  Popper.prototype.parse = function (config) {
	    var defaultConfig = {
	      tagName: 'div',
	      classNames: ['popper'],
	      attributes: [],
	      parent: root.document.body,
	      content: '',
	      contentType: 'text',
	      arrowTagName: 'div',
	      arrowClassNames: ['popper__arrow'],
	      arrowAttributes: ['x-arrow']
	    };
	    config = (0, _assign2.default)({}, defaultConfig, config);

	    var d = root.document;

	    var popper = d.createElement(config.tagName);
	    addClassNames(popper, config.classNames);
	    addAttributes(popper, config.attributes);
	    if (config.contentType === 'node') {
	      popper.appendChild(config.content.jquery ? config.content[0] : config.content);
	    } else if (config.contentType === 'html') {
	      popper.innerHTML = config.content;
	    } else {
	      popper.textContent = config.content;
	    }

	    if (config.arrowTagName) {
	      var arrow = d.createElement(config.arrowTagName);
	      addClassNames(arrow, config.arrowClassNames);
	      addAttributes(arrow, config.arrowAttributes);
	      popper.appendChild(arrow);
	    }

	    var parent = config.parent.jquery ? config.parent[0] : config.parent;

	    if (typeof parent === 'string') {
	      parent = d.querySelectorAll(config.parent);
	      if (parent.length > 1) {
	        console.warn('WARNING: the given `parent` query(' + config.parent + ') matched more than one element, the first one will be used');
	      }
	      if (parent.length === 0) {
	        throw 'ERROR: the given `parent` doesn\'t exists!';
	      }
	      parent = parent[0];
	    }

	    if (parent.length > 1 && parent instanceof Element === false) {
	      console.warn('WARNING: you have passed as parent a list of elements, the first one will be used');
	      parent = parent[0];
	    }

	    parent.appendChild(popper);

	    return popper;

	    function addClassNames(element, classNames) {
	      classNames.forEach(function (className) {
	        element.classList.add(className);
	      });
	    }

	    function addAttributes(element, attributes) {
	      attributes.forEach(function (attribute) {
	        element.setAttribute(attribute.split(':')[0], attribute.split(':')[1] || '');
	      });
	    }
	  };

	  Popper.prototype._getPosition = function (popper, reference) {
	    var container = getOffsetParent(reference);

	    var isParentFixed = isFixed(container);
	    return isParentFixed ? 'fixed' : 'absolute';
	  };

	  Popper.prototype._getIsParentTransformed = function (popper) {
	    return isTransformed(popper.parentNode);
	  };

	  Popper.prototype._getOffsets = function (popper, reference, placement) {
	    placement = placement.split('-')[0];
	    var popperOffsets = {};

	    popperOffsets.position = this.state.position;
	    var isParentFixed = popperOffsets.position === 'fixed';

	    var isParentTransformed = this.state.isParentTransformed;

	    var offsetParent = isParentFixed && isParentTransformed ? getOffsetParent(reference) : getOffsetParent(popper);
	    var referenceOffsets = getOffsetRectRelativeToCustomParent(reference, offsetParent, isParentFixed, isParentTransformed);

	    var popperRect = getOuterSizes(popper);

	    if (['right', 'left'].indexOf(placement) !== -1) {
	      popperOffsets.top = referenceOffsets.top + referenceOffsets.height / 2 - popperRect.height / 2;
	      if (placement === 'left') {
	        popperOffsets.left = referenceOffsets.left - popperRect.width;
	      } else {
	        popperOffsets.left = referenceOffsets.right;
	      }
	    } else {
	      popperOffsets.left = referenceOffsets.left + referenceOffsets.width / 2 - popperRect.width / 2;
	      if (placement === 'top') {
	        popperOffsets.top = referenceOffsets.top - popperRect.height;
	      } else {
	        popperOffsets.top = referenceOffsets.bottom;
	      }
	    }

	    popperOffsets.width = popperRect.width;
	    popperOffsets.height = popperRect.height;

	    return {
	      popper: popperOffsets,
	      reference: referenceOffsets
	    };
	  };

	  Popper.prototype._setupEventListeners = function () {
	    this.state.updateBound = this.update.bind(this);
	    root.addEventListener('resize', this.state.updateBound);

	    if (this._options.boundariesElement !== 'window') {
	      var target = getScrollParent(this._reference);

	      if (target === root.document.body || target === root.document.documentElement) {
	        target = root;
	      }
	      target.addEventListener('scroll', this.state.updateBound);
	    }
	  };

	  Popper.prototype._removeEventListeners = function () {
	    root.removeEventListener('resize', this.state.updateBound);
	    if (this._options.boundariesElement !== 'window') {
	      var target = getScrollParent(this._reference);

	      if (target === root.document.body || target === root.document.documentElement) {
	        target = root;
	      }
	      target.removeEventListener('scroll', this.state.updateBound);
	    }
	    this.state.updateBound = null;
	  };

	  Popper.prototype._getBoundaries = function (data, padding, boundariesElement) {
	    var boundaries = {};
	    var width, height;
	    if (boundariesElement === 'window') {
	      var body = root.document.body,
	          html = root.document.documentElement;

	      height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
	      width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);

	      boundaries = {
	        top: 0,
	        right: width,
	        bottom: height,
	        left: 0
	      };
	    } else if (boundariesElement === 'viewport') {
	      var offsetParent = getOffsetParent(this._popper);
	      var scrollParent = getScrollParent(this._popper);
	      var offsetParentRect = getOffsetRect(offsetParent);

	      var scrollTop = data.offsets.popper.position === 'fixed' ? 0 : scrollParent.scrollTop;
	      var scrollLeft = data.offsets.popper.position === 'fixed' ? 0 : scrollParent.scrollLeft;

	      boundaries = {
	        top: 0 - (offsetParentRect.top - scrollTop),
	        right: root.document.documentElement.clientWidth - (offsetParentRect.left - scrollLeft),
	        bottom: root.document.documentElement.clientHeight - (offsetParentRect.top - scrollTop),
	        left: 0 - (offsetParentRect.left - scrollLeft)
	      };
	    } else {
	      if (getOffsetParent(this._popper) === boundariesElement) {
	        boundaries = {
	          top: 0,
	          left: 0,
	          right: boundariesElement.clientWidth,
	          bottom: boundariesElement.clientHeight
	        };
	      } else {
	        boundaries = getOffsetRect(boundariesElement);
	      }
	    }
	    boundaries.left += padding;
	    boundaries.right -= padding;
	    boundaries.top = boundaries.top + padding;
	    boundaries.bottom = boundaries.bottom - padding;
	    return boundaries;
	  };

	  Popper.prototype.runModifiers = function (data, modifiers, ends) {
	    var modifiersToRun = modifiers.slice();
	    if (ends !== undefined) {
	      modifiersToRun = this._options.modifiers.slice(0, getArrayKeyIndex(this._options.modifiers, ends));
	    }

	    modifiersToRun.forEach(function (modifier) {
	      if (isFunction(modifier)) {
	        data = modifier.call(this, data);
	      }
	    }.bind(this));

	    return data;
	  };

	  Popper.prototype.isModifierRequired = function (requesting, requested) {
	    var index = getArrayKeyIndex(this._options.modifiers, requesting);
	    return !!this._options.modifiers.slice(0, index).filter(function (modifier) {
	      return modifier === requested;
	    }).length;
	  };

	  Popper.prototype.modifiers = {};

	  Popper.prototype.modifiers.applyStyle = function (data) {
	    var styles = {
	      position: data.offsets.popper.position
	    };

	    var left = Math.round(data.offsets.popper.left);
	    var top = Math.round(data.offsets.popper.top);

	    var prefixedProperty;
	    if (this._options.gpuAcceleration && (prefixedProperty = getSupportedPropertyName('transform'))) {
	      styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
	      styles.top = 0;
	      styles.left = 0;
	    } else {
	      styles.left = left;
	      styles.top = top;
	    }

	    (0, _assign2.default)(styles, data.styles);

	    setStyle(this._popper, styles);

	    this._popper.setAttribute('x-placement', data.placement);

	    if (data.offsets.arrow) {
	      setStyle(data.arrowElement, data.offsets.arrow);
	    }

	    return data;
	  };

	  Popper.prototype.modifiers.shift = function (data) {
	    var placement = data.placement;
	    var basePlacement = placement.split('-')[0];
	    var shiftVariation = placement.split('-')[1];

	    if (shiftVariation) {
	      var reference = data.offsets.reference;
	      var popper = getPopperClientRect(data.offsets.popper);

	      var shiftOffsets = {
	        y: {
	          start: { top: reference.top },
	          end: { top: reference.top + reference.height - popper.height }
	        },
	        x: {
	          start: { left: reference.left },
	          end: { left: reference.left + reference.width - popper.width }
	        }
	      };

	      var axis = ['bottom', 'top'].indexOf(basePlacement) !== -1 ? 'x' : 'y';

	      data.offsets.popper = (0, _assign2.default)(popper, shiftOffsets[axis][shiftVariation]);
	    }

	    return data;
	  };

	  Popper.prototype.modifiers.preventOverflow = function (data) {
	    var order = this._options.preventOverflowOrder;
	    var popper = getPopperClientRect(data.offsets.popper);

	    var check = {
	      left: function left() {
	        var left = popper.left;
	        if (popper.left < data.boundaries.left) {
	          left = Math.max(popper.left, data.boundaries.left);
	        }
	        return { left: left };
	      },
	      right: function right() {
	        var left = popper.left;
	        if (popper.right > data.boundaries.right) {
	          left = Math.min(popper.left, data.boundaries.right - popper.width);
	        }
	        return { left: left };
	      },
	      top: function top() {
	        var top = popper.top;
	        if (popper.top < data.boundaries.top) {
	          top = Math.max(popper.top, data.boundaries.top);
	        }
	        return { top: top };
	      },
	      bottom: function bottom() {
	        var top = popper.top;
	        if (popper.bottom > data.boundaries.bottom) {
	          top = Math.min(popper.top, data.boundaries.bottom - popper.height);
	        }
	        return { top: top };
	      }
	    };

	    order.forEach(function (direction) {
	      data.offsets.popper = (0, _assign2.default)(popper, check[direction]());
	    });

	    return data;
	  };

	  Popper.prototype.modifiers.keepTogether = function (data) {
	    var popper = getPopperClientRect(data.offsets.popper);
	    var reference = data.offsets.reference;
	    var f = Math.floor;

	    if (popper.right < f(reference.left)) {
	      data.offsets.popper.left = f(reference.left) - popper.width;
	    }
	    if (popper.left > f(reference.right)) {
	      data.offsets.popper.left = f(reference.right);
	    }
	    if (popper.bottom < f(reference.top)) {
	      data.offsets.popper.top = f(reference.top) - popper.height;
	    }
	    if (popper.top > f(reference.bottom)) {
	      data.offsets.popper.top = f(reference.bottom);
	    }

	    return data;
	  };

	  Popper.prototype.modifiers.flip = function (data) {
	    if (!this.isModifierRequired(this.modifiers.flip, this.modifiers.preventOverflow)) {
	      console.warn('WARNING: preventOverflow modifier is required by flip modifier in order to work, be sure to include it before flip!');
	      return data;
	    }

	    if (data.flipped && data.placement === data._originalPlacement) {
	      return data;
	    }

	    var placement = data.placement.split('-')[0];
	    var placementOpposite = getOppositePlacement(placement);
	    var variation = data.placement.split('-')[1] || '';

	    var flipOrder = [];
	    if (this._options.flipBehavior === 'flip') {
	      flipOrder = [placement, placementOpposite];
	    } else {
	      flipOrder = this._options.flipBehavior;
	    }

	    flipOrder.forEach(function (step, index) {
	      if (placement !== step || flipOrder.length === index + 1) {
	        return;
	      }

	      placement = data.placement.split('-')[0];
	      placementOpposite = getOppositePlacement(placement);

	      var popperOffsets = getPopperClientRect(data.offsets.popper);

	      var a = ['right', 'bottom'].indexOf(placement) !== -1;

	      if (a && Math.floor(data.offsets.reference[placement]) > Math.floor(popperOffsets[placementOpposite]) || !a && Math.floor(data.offsets.reference[placement]) < Math.floor(popperOffsets[placementOpposite])) {
	        data.flipped = true;
	        data.placement = flipOrder[index + 1];
	        if (variation) {
	          data.placement += '-' + variation;
	        }
	        data.offsets.popper = this._getOffsets(this._popper, this._reference, data.placement).popper;

	        data = this.runModifiers(data, this._options.modifiers, this._flip);
	      }
	    }.bind(this));
	    return data;
	  };

	  Popper.prototype.modifiers.offset = function (data) {
	    var offset = this._options.offset;
	    var popper = data.offsets.popper;

	    if (data.placement.indexOf('left') !== -1) {
	      popper.top -= offset;
	    } else if (data.placement.indexOf('right') !== -1) {
	      popper.top += offset;
	    } else if (data.placement.indexOf('top') !== -1) {
	      popper.left -= offset;
	    } else if (data.placement.indexOf('bottom') !== -1) {
	      popper.left += offset;
	    }
	    return data;
	  };

	  Popper.prototype.modifiers.arrow = function (data) {
	    var arrow = this._options.arrowElement;

	    if (typeof arrow === 'string') {
	      arrow = this._popper.querySelector(arrow);
	    }

	    if (!arrow) {
	      return data;
	    }

	    if (!this._popper.contains(arrow)) {
	      console.warn('WARNING: `arrowElement` must be child of its popper element!');
	      return data;
	    }

	    if (!this.isModifierRequired(this.modifiers.arrow, this.modifiers.keepTogether)) {
	      console.warn('WARNING: keepTogether modifier is required by arrow modifier in order to work, be sure to include it before arrow!');
	      return data;
	    }

	    var arrowStyle = {};
	    var placement = data.placement.split('-')[0];
	    var popper = getPopperClientRect(data.offsets.popper);
	    var reference = data.offsets.reference;
	    var isVertical = ['left', 'right'].indexOf(placement) !== -1;

	    var len = isVertical ? 'height' : 'width';
	    var side = isVertical ? 'top' : 'left';
	    var altSide = isVertical ? 'left' : 'top';
	    var opSide = isVertical ? 'bottom' : 'right';
	    var arrowSize = getOuterSizes(arrow)[len];

	    if (reference[opSide] - arrowSize < popper[side]) {
	      data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowSize);
	    }

	    if (reference[side] + arrowSize > popper[opSide]) {
	      data.offsets.popper[side] += reference[side] + arrowSize - popper[opSide];
	    }

	    var center = reference[side] + reference[len] / 2 - arrowSize / 2;

	    var sideValue = center - getPopperClientRect(data.offsets.popper)[side];

	    sideValue = Math.max(Math.min(popper[len] - arrowSize, sideValue), 0);
	    arrowStyle[side] = sideValue;
	    arrowStyle[altSide] = '';

	    data.offsets.arrow = arrowStyle;
	    data.arrowElement = arrow;

	    return data;
	  };

	  function getOuterSizes(element) {
	    var _display = element.style.display,
	        _visibility = element.style.visibility;
	    element.style.display = 'block';element.style.visibility = 'hidden';
	    var calcWidthToForceRepaint = element.offsetWidth;

	    var styles = root.getComputedStyle(element);
	    var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
	    var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
	    var result = { width: element.offsetWidth + y, height: element.offsetHeight + x };

	    element.style.display = _display;element.style.visibility = _visibility;
	    return result;
	  }

	  function getOppositePlacement(placement) {
	    var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
	    return placement.replace(/left|right|bottom|top/g, function (matched) {
	      return hash[matched];
	    });
	  }

	  function getPopperClientRect(popperOffsets) {
	    var offsets = (0, _assign2.default)({}, popperOffsets);
	    offsets.right = offsets.left + offsets.width;
	    offsets.bottom = offsets.top + offsets.height;
	    return offsets;
	  }

	  function getArrayKeyIndex(arr, keyToFind) {
	    var i = 0,
	        key;
	    for (key in arr) {
	      if (arr[key] === keyToFind) {
	        return i;
	      }
	      i++;
	    }
	    return null;
	  }

	  function getStyleComputedProperty(element, property) {
	    var css = root.getComputedStyle(element, null);
	    return css[property];
	  }

	  function getOffsetParent(element) {
	    var offsetParent = element.offsetParent;
	    return offsetParent === root.document.body || !offsetParent ? root.document.documentElement : offsetParent;
	  }

	  function getScrollParent(element) {
	    if (element === root.document) {
	      if (root.document.body.scrollTop) {
	        return root.document.body;
	      } else {
	        return root.document.documentElement;
	      }
	    }

	    if (['scroll', 'auto'].indexOf(getStyleComputedProperty(element, 'overflow')) !== -1 || ['scroll', 'auto'].indexOf(getStyleComputedProperty(element, 'overflow-x')) !== -1 || ['scroll', 'auto'].indexOf(getStyleComputedProperty(element, 'overflow-y')) !== -1) {
	      return element === root.document.body ? getScrollParent(element.parentNode) : element;
	    }
	    return element.parentNode ? getScrollParent(element.parentNode) : element;
	  }

	  function isFixed(element) {
	    if (element === root.document.body || element.nodeName === 'HTML') {
	      return false;
	    }
	    if (getStyleComputedProperty(element, 'position') === 'fixed') {
	      return true;
	    }
	    return element.parentNode ? isFixed(element.parentNode) : element;
	  }

	  function isTransformed(element) {
	    if (element === root.document.body) {
	      return false;
	    }
	    if (getStyleComputedProperty(element, 'transform') !== 'none') {
	      return true;
	    }
	    return element.parentNode ? isTransformed(element.parentNode) : element;
	  }

	  function setStyle(element, styles) {
	    function is_numeric(n) {
	      return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
	    }
	    (0, _keys2.default)(styles).forEach(function (prop) {
	      var unit = '';

	      if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && is_numeric(styles[prop])) {
	        unit = 'px';
	      }
	      element.style[prop] = styles[prop] + unit;
	    });
	  }

	  function isFunction(functionToCheck) {
	    var getType = {};
	    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
	  }

	  function getOffsetRect(element) {
	    var elementRect = {
	      width: element.offsetWidth,
	      height: element.offsetHeight,
	      left: element.offsetLeft,
	      top: element.offsetTop
	    };

	    elementRect.right = elementRect.left + elementRect.width;
	    elementRect.bottom = elementRect.top + elementRect.height;

	    return elementRect;
	  }

	  function getBoundingClientRect(element) {
	    var rect = element.getBoundingClientRect();
	    return {
	      left: rect.left,
	      top: rect.top,
	      right: rect.right,
	      bottom: rect.bottom,
	      width: rect.right - rect.left,
	      height: rect.bottom - rect.top
	    };
	  }

	  function getOffsetRectRelativeToCustomParent(element, parent, fixed, transformed) {
	    var elementRect = getBoundingClientRect(element);
	    var parentRect = getBoundingClientRect(parent);

	    if (fixed && !transformed) {
	      var scrollParent = getScrollParent(parent);
	      parentRect.top += scrollParent.scrollTop;
	      parentRect.bottom += scrollParent.scrollTop;
	      parentRect.left += scrollParent.scrollLeft;
	      parentRect.right += scrollParent.scrollLeft;
	    }

	    var rect = {
	      top: elementRect.top - parentRect.top,
	      left: elementRect.left - parentRect.left,
	      bottom: elementRect.top - parentRect.top + elementRect.height,
	      right: elementRect.left - parentRect.left + elementRect.width,
	      width: elementRect.width,
	      height: elementRect.height
	    };
	    return rect;
	  }

	  function getSupportedPropertyName(property) {
	    var prefixes = ['', 'ms', 'webkit', 'moz', 'o'];

	    for (var i = 0; i < prefixes.length; i++) {
	      var toCheck = prefixes[i] ? prefixes[i] + property.charAt(0).toUpperCase() + property.slice(1) : property;
	      if (typeof root.document.body.style[toCheck] !== 'undefined') {
	        return toCheck;
	      }
	    }
	    return null;
	  }

	  if (!_assign2.default) {
	    Object.defineProperty(Object, 'assign', {
	      enumerable: false,
	      configurable: true,
	      writable: true,
	      value: function value(target) {
	        if (target === undefined || target === null) {
	          throw new TypeError('Cannot convert first argument to object');
	        }

	        var to = Object(target);
	        for (var i = 1; i < arguments.length; i++) {
	          var nextSource = arguments[i];
	          if (nextSource === undefined || nextSource === null) {
	            continue;
	          }
	          nextSource = Object(nextSource);

	          var keysArray = (0, _keys2.default)(nextSource);
	          for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
	            var nextKey = keysArray[nextIndex];
	            var desc = (0, _getOwnPropertyDescriptor2.default)(nextSource, nextKey);
	            if (desc !== undefined && desc.enumerable) {
	              to[nextKey] = nextSource[nextKey];
	            }
	          }
	        }
	        return to;
	      }
	    });
	  }

	  if (!root.requestAnimationFrame) {
	    var lastTime = 0;
	    var vendors = ['ms', 'moz', 'webkit', 'o'];
	    for (var x = 0; x < vendors.length && !root.requestAnimationFrame; ++x) {
	      root.requestAnimationFrame = root[vendors[x] + 'RequestAnimationFrame'];
	      root.cancelAnimationFrame = root[vendors[x] + 'CancelAnimationFrame'] || root[vendors[x] + 'CancelRequestAnimationFrame'];
	    }

	    if (!root.requestAnimationFrame) {
	      root.requestAnimationFrame = function (callback, element) {
	        var currTime = new Date().getTime();
	        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
	        var id = root.setTimeout(function () {
	          callback(currTime + timeToCall);
	        }, timeToCall);
	        lastTime = currTime + timeToCall;
	        return id;
	      };
	    }

	    if (!root.cancelAnimationFrame) {
	      root.cancelAnimationFrame = function (id) {
	        clearTimeout(id);
	      };
	    }
	  }

	  return Popper;
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(6), __esModule: true };

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(7);
	var $Object = __webpack_require__(25).Object;
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $Object.getOwnPropertyDescriptor(it, key);
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(8)
	  , $getOwnPropertyDescriptor = __webpack_require__(12).f;

	__webpack_require__(23)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(9)
	  , defined = __webpack_require__(11);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(10);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(13)
	  , createDesc     = __webpack_require__(14)
	  , toIObject      = __webpack_require__(8)
	  , toPrimitive    = __webpack_require__(15)
	  , has            = __webpack_require__(17)
	  , IE8_DOM_DEFINE = __webpack_require__(18)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(19) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(16);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(19) && !__webpack_require__(20)(function(){
	  return Object.defineProperty(__webpack_require__(21)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(20)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(16)
	  , document = __webpack_require__(22).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(24)
	  , core    = __webpack_require__(25)
	  , fails   = __webpack_require__(20);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(22)
	  , core      = __webpack_require__(25)
	  , ctx       = __webpack_require__(26)
	  , hide      = __webpack_require__(28)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 25 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(27);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(29)
	  , createDesc = __webpack_require__(14);
	module.exports = __webpack_require__(19) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(30)
	  , IE8_DOM_DEFINE = __webpack_require__(18)
	  , toPrimitive    = __webpack_require__(15)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(19) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(16);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(32), __esModule: true };

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(33);
	module.exports = __webpack_require__(25).Object.keys;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(34)
	  , $keys    = __webpack_require__(35);

	__webpack_require__(23)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(11);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(36)
	  , enumBugKeys = __webpack_require__(44);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(17)
	  , toIObject    = __webpack_require__(8)
	  , arrayIndexOf = __webpack_require__(37)(false)
	  , IE_PROTO     = __webpack_require__(41)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(8)
	  , toLength  = __webpack_require__(38)
	  , toIndex   = __webpack_require__(40);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(39)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(39)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(42)('keys')
	  , uid    = __webpack_require__(43);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(22)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(46), __esModule: true };

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(47);
	module.exports = __webpack_require__(25).Object.assign;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(24);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(48)});

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(35)
	  , gOPS     = __webpack_require__(49)
	  , pIE      = __webpack_require__(13)
	  , toObject = __webpack_require__(34)
	  , IObject  = __webpack_require__(9)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(20)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 49 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(51);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(71);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(52), __esModule: true };

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(53);
	__webpack_require__(66);
	module.exports = __webpack_require__(70).f('iterator');

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(54)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(55)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(39)
	  , defined   = __webpack_require__(11);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(56)
	  , $export        = __webpack_require__(24)
	  , redefine       = __webpack_require__(57)
	  , hide           = __webpack_require__(28)
	  , has            = __webpack_require__(17)
	  , Iterators      = __webpack_require__(58)
	  , $iterCreate    = __webpack_require__(59)
	  , setToStringTag = __webpack_require__(63)
	  , getPrototypeOf = __webpack_require__(65)
	  , ITERATOR       = __webpack_require__(64)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(28);

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(60)
	  , descriptor     = __webpack_require__(14)
	  , setToStringTag = __webpack_require__(63)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(28)(IteratorPrototype, __webpack_require__(64)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(30)
	  , dPs         = __webpack_require__(61)
	  , enumBugKeys = __webpack_require__(44)
	  , IE_PROTO    = __webpack_require__(41)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(21)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(62).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(29)
	  , anObject = __webpack_require__(30)
	  , getKeys  = __webpack_require__(35);

	module.exports = __webpack_require__(19) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(22).document && document.documentElement;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(29).f
	  , has = __webpack_require__(17)
	  , TAG = __webpack_require__(64)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(42)('wks')
	  , uid        = __webpack_require__(43)
	  , Symbol     = __webpack_require__(22).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(17)
	  , toObject    = __webpack_require__(34)
	  , IE_PROTO    = __webpack_require__(41)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(67);
	var global        = __webpack_require__(22)
	  , hide          = __webpack_require__(28)
	  , Iterators     = __webpack_require__(58)
	  , TO_STRING_TAG = __webpack_require__(64)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(68)
	  , step             = __webpack_require__(69)
	  , Iterators        = __webpack_require__(58)
	  , toIObject        = __webpack_require__(8);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(55)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(64);

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(72), __esModule: true };

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(73);
	__webpack_require__(81);
	__webpack_require__(82);
	__webpack_require__(83);
	module.exports = __webpack_require__(25).Symbol;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(22)
	  , has            = __webpack_require__(17)
	  , DESCRIPTORS    = __webpack_require__(19)
	  , $export        = __webpack_require__(24)
	  , redefine       = __webpack_require__(57)
	  , META           = __webpack_require__(74).KEY
	  , $fails         = __webpack_require__(20)
	  , shared         = __webpack_require__(42)
	  , setToStringTag = __webpack_require__(63)
	  , uid            = __webpack_require__(43)
	  , wks            = __webpack_require__(64)
	  , wksExt         = __webpack_require__(70)
	  , wksDefine      = __webpack_require__(75)
	  , keyOf          = __webpack_require__(76)
	  , enumKeys       = __webpack_require__(77)
	  , isArray        = __webpack_require__(78)
	  , anObject       = __webpack_require__(30)
	  , toIObject      = __webpack_require__(8)
	  , toPrimitive    = __webpack_require__(15)
	  , createDesc     = __webpack_require__(14)
	  , _create        = __webpack_require__(60)
	  , gOPNExt        = __webpack_require__(79)
	  , $GOPD          = __webpack_require__(12)
	  , $DP            = __webpack_require__(29)
	  , $keys          = __webpack_require__(35)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(80).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(13).f  = $propertyIsEnumerable;
	  __webpack_require__(49).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(56)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(28)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(43)('meta')
	  , isObject = __webpack_require__(16)
	  , has      = __webpack_require__(17)
	  , setDesc  = __webpack_require__(29).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(20)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(22)
	  , core           = __webpack_require__(25)
	  , LIBRARY        = __webpack_require__(56)
	  , wksExt         = __webpack_require__(70)
	  , defineProperty = __webpack_require__(29).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(35)
	  , toIObject = __webpack_require__(8);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(35)
	  , gOPS    = __webpack_require__(49)
	  , pIE     = __webpack_require__(13);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(10);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(8)
	  , gOPN      = __webpack_require__(80).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(36)
	  , hiddenKeys = __webpack_require__(44).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 81 */
/***/ function(module, exports) {

	

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(75)('asyncIterator');

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(75)('observable');

/***/ },
/* 84 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.defaultProps = defaultProps;
	exports.oneOfType = oneOfType;
	exports.oneOf = oneOf;
	var toString = Object.prototype.toString;

	function defaultProps(props) {
	  for (var i in props) {
	    if (props.hasOwnProperty(i)) {
	      var _ret = function () {
	        var defaultValue = props[i];

	        if (defaultValue && defaultValue.name && window[defaultValue.name] === defaultValue) {
	          props[i] = {
	            type: defaultValue,
	            default: null
	          };

	          return 'continue';
	        }

	        var type = toString.call(defaultValue).replace('[object ', '').replace(']', '');

	        if (type === 'Object') {
	          if (defaultValue.type !== null || defaultValue.default !== null || defaultValue.validator !== null || defaultValue.twoWay !== null || defaultValue.required !== null) {
	            return 'continue';
	          }
	        }

	        if (type === 'Array' || type === 'Object') {
	          props[i] = {
	            type: window[type],
	            default: function _default() {
	              return defaultValue;
	            }
	          };
	          return 'continue';
	        }

	        props[i] = {
	          type: window[type],
	          default: defaultValue
	        };
	      }();

	      if (_ret === 'continue') continue;
	    }
	  }

	  return props;
	}

	function oneOfType(validList, defaultValue) {
	  var validaObj = {};

	  validaObj.default = defaultValue;
	  validaObj.validator = function (value) {
	    if (value === null) {
	      return true;
	    }

	    for (var j = 0; j < validList.length; j++) {
	      var currentValid = validList[j];
	      var validName = void 0;
	      if (typeof currentValid === 'string') {
	        validName = currentValid;
	      } else {
	        validName = currentValid.name;
	      }
	      if (toString.call(value).indexOf(validName) > -1) {
	        return true;
	      }
	    }
	    return false;
	  };

	  return validaObj;
	}

	function oneOf(validList, defaultValue) {
	  var validaObj = {};

	  validaObj.default = defaultValue;
	  validaObj.validator = function (value) {
	    if (value === null) {
	      return true;
	    }

	    for (var j = 0; j < validList.length; j++) {
	      if (value === validList[j]) {
	        return true;
	      }
	    }
	    return false;
	  };

	  return validaObj;
	}

	var any = exports.any = {
	  validator: function validator(value) {
	    return true;
	  }
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _event = __webpack_require__(86);

	var nodeList = [];
	var ctx = '@@clickoutsideContext';

	(0, _event.on)(document, 'click', function (e) {
	  nodeList.forEach(function (node) {
	    return node[ctx].documentHandler(e);
	  });
	});

	exports.default = {
	  bind: function bind(el, binding, vnode) {
	    var id = nodeList.push(el) - 1;
	    var documentHandler = function documentHandler(e) {
	      if (!vnode.context || el.contains(e.target) || vnode.context.popperElm && vnode.context.popperElm.contains(e.target)) {
	        return;
	      }

	      if (binding.expression) {
	        el[ctx].methodName && vnode.context[el[ctx].methodName] && vnode.context[el[ctx].methodName]();
	      } else {
	        el[ctx].bindingFn && el[ctx].bindingFn();
	      }
	    };
	    el[ctx] = {
	      id: id,
	      documentHandler: documentHandler,
	      methodName: binding.expression,
	      bindingFn: binding.value
	    };
	  },
	  update: function update(el, binding) {
	    el[ctx].methodName = binding.expression;
	    el[ctx].bindingFn = binding.value;
	  },
	  unbind: function unbind(el) {
	    var len = nodeList.length;

	    for (var i = 0; i < len; i++) {
	      if (nodeList[i][ctx].id === el[ctx].id) {
	        nodeList.splice(i, 1);
	        break;
	      }
	    }
	  }
	};

/***/ },
/* 86 */
/***/ function(module, exports) {

	var bindEvent = (function() {
	  if(document.addEventListener) {
	    return function(element, event, handler) {
	      if (element && event && handler) {
	        element.addEventListener(event, handler, false);
	      }
	    };
	  } else {
	    return function(element, event, handler) {
	      if (element && event && handler) {
	        element.attachEvent('on' + event, handler);
	      }
	    };
	  }
	})();

	var unbindEvent = (function() {
	  if(document.removeEventListener) {
	    return function(element, event, handler) {
	      if (element && event) {
	        element.removeEventListener(event, handler, false);
	      }
	    };
	  } else {
	    return function(element, event, handler) {
	      if (element && event) {
	        element.detachEvent('on' + event, handler);
	      }
	    };
	  }
	})();

	var bindOnce = function(el, event, fn) {
	  var listener = function() {
	    if (fn) {
	      fn.apply(this, arguments);
	    }
	    unbindEvent(el, event, listener);
	  };
	  bindEvent(el, event, listener);
	};

	module.exports = {
	  on: bindEvent,
	  off: unbindEvent,
	  once: bindOnce
	};

/***/ },
/* 87 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	var requestFrame = function () {
	  var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (fn) {
	    return window.setTimeout(fn, 20);
	  };
	  return function (fn) {
	    return raf(fn);
	  };
	}();

	var cancelFrame = function () {
	  var cancel = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout;
	  return function (id) {
	    return cancel(id);
	  };
	}();

	var resetTrigger = function resetTrigger(element) {
	  var trigger = element.__resizeTrigger__;
	  var expand = trigger.firstElementChild;
	  var contract = trigger.lastElementChild;
	  var expandChild = expand.firstElementChild;

	  contract.scrollLeft = contract.scrollWidth;
	  contract.scrollTop = contract.scrollHeight;
	  expandChild.style.width = expand.offsetWidth + 1 + 'px';
	  expandChild.style.height = expand.offsetHeight + 1 + 'px';
	  expand.scrollLeft = expand.scrollWidth;
	  expand.scrollTop = expand.scrollHeight;
	};

	var checkTriggers = function checkTriggers(element) {
	  return element.offsetWidth !== element.__resizeLast__.width || element.offsetHeight !== element.__resizeLast__.height;
	};

	var scrollListener = function scrollListener(event) {
	  var _this = this;

	  resetTrigger(this);
	  if (this.__resizeRAF__) {
	    cancelFrame(this.__resizeRAF__);
	  }
	  this.__resizeRAF__ = requestFrame(function () {
	    if (checkTriggers(_this)) {
	      _this.__resizeLast__.width = _this.offsetWidth;
	      _this.__resizeLast__.height = _this.offsetHeight;
	      _this.__resizeListeners__.forEach(function (fn) {
	        fn.call(_this, event);
	      });
	    }
	  });
	};

	var attachEvent = document.attachEvent;
	var DOM_PREFIXES = 'Webkit Moz O ms'.split(' ');
	var START_EVENTS = 'webkitAnimationStart animationstart oAnimationStart MSAnimationStart'.split(' ');
	var RESIZE_ANIMATION_NAME = 'resizeanim';
	var animation = false;
	var keyFramePrefix = '';
	var animationStartEvent = 'animationstart';

	if (!attachEvent) {
	  var testElement = document.createElement('fakeelement');
	  if (testElement.style.animationName !== undefined) {
	    animation = true;
	  }

	  if (animation === false) {
	    var prefix = '';
	    for (var i = 0; i < DOM_PREFIXES.length; i++) {
	      if (testElement.style[DOM_PREFIXES[i] + 'AnimationName'] !== undefined) {
	        prefix = DOM_PREFIXES[i];
	        keyFramePrefix = '-' + prefix.toLowerCase() + '-';
	        animationStartEvent = START_EVENTS[i];
	        animation = true;
	        break;
	      }
	    }
	  }
	}

	var stylesCreated = false;

	var createStyles = function createStyles() {
	  if (!stylesCreated) {
	    var animationKeyframes = '@' + keyFramePrefix + 'keyframes ' + RESIZE_ANIMATION_NAME + ' { from { opacity: 0; } to { opacity: 0; } } ';
	    var animationStyle = keyFramePrefix + 'animation: 1ms ' + RESIZE_ANIMATION_NAME + ';';

	    var css = animationKeyframes + '\n      .resize-triggers { ' + animationStyle + ' visibility: hidden; opacity: 0; }\n      .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; }\n      .resize-triggers > div { background: #eee; overflow: auto; }\n      .contract-trigger:before { width: 200%; height: 200%; }';

	    var head = document.head || document.getElementsByTagName('head')[0];
	    var style = document.createElement('style');

	    style.type = 'text/css';
	    if (style.styleSheet) {
	      style.styleSheet.cssText = css;
	    } else {
	      style.appendChild(document.createTextNode(css));
	    }

	    head.appendChild(style);
	    stylesCreated = true;
	  }
	};

	var addResizeListener = exports.addResizeListener = function addResizeListener(element, fn) {
	  if (attachEvent) {
	    element.attachEvent('onresize', fn);
	  } else {
	    if (!element.__resizeTrigger__) {
	      if (getComputedStyle(element).position === 'static') {
	        element.style.position = 'relative';
	      }
	      createStyles();
	      element.__resizeLast__ = {};
	      element.__resizeListeners__ = [];

	      var resizeTrigger = element.__resizeTrigger__ = document.createElement('div');
	      resizeTrigger.className = 'resize-triggers';
	      resizeTrigger.innerHTML = '<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>';
	      element.appendChild(resizeTrigger);

	      resetTrigger(element);
	      element.addEventListener('scroll', scrollListener, true);

	      if (animationStartEvent) {
	        resizeTrigger.addEventListener(animationStartEvent, function (event) {
	          if (event.animationName === RESIZE_ANIMATION_NAME) {
	            resetTrigger(element);
	          }
	        });
	      }
	    }
	    element.__resizeListeners__.push(fn);
	  }
	};

	var removeResizeListener = exports.removeResizeListener = function removeResizeListener(element, fn) {
	  if (attachEvent) {
	    element.detachEvent('onresize', fn);
	  } else {
	    element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
	    if (!element.__resizeListeners__.length) {
	      element.removeEventListener('scroll', scrollListener);
	      element.__resizeTrigger__ = !element.removeChild(element.__resizeTrigger__);
	    }
	  }
	};

/***/ },
/* 88 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = {
	  prefix: 'mioss'
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	/* eslint-disable no-undefined */

	var throttle = __webpack_require__(90);

	/**
	 * Debounce execution of a function. Debouncing, unlike throttling,
	 * guarantees that a function is only executed a single time, either at the
	 * very beginning of a series of calls, or at the very end.
	 *
	 * @param  {Number}   delay         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
	 * @param  {Boolean}  atBegin       Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
	 *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
	 *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
	 * @param  {Function} callback      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
	 *                                  to `callback` when the debounced-function is executed.
	 *
	 * @return {Function} A new, debounced function.
	 */
	module.exports = function ( delay, atBegin, callback ) {
		return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
	};


/***/ },
/* 90 */
/***/ function(module, exports) {

	/* eslint-disable no-undefined,no-param-reassign,no-shadow */

	/**
	 * Throttle execution of a function. Especially useful for rate limiting
	 * execution of handlers on events like resize and scroll.
	 *
	 * @param  {Number}    delay          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
	 * @param  {Boolean}   noTrailing     Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
	 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
	 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
	 *                                    the internal counter is reset)
	 * @param  {Function}  callback       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
	 *                                    to `callback` when the throttled-function is executed.
	 * @param  {Boolean}   debounceMode   If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
	 *                                    schedule `callback` to execute after `delay` ms.
	 *
	 * @return {Function}  A new, throttled, function.
	 */
	module.exports = function ( delay, noTrailing, callback, debounceMode ) {

		// After wrapper has stopped being called, this timeout ensures that
		// `callback` is executed at the proper times in `throttle` and `end`
		// debounce modes.
		var timeoutID;

		// Keep track of the last time `callback` was executed.
		var lastExec = 0;

		// `noTrailing` defaults to falsy.
		if ( typeof noTrailing !== 'boolean' ) {
			debounceMode = callback;
			callback = noTrailing;
			noTrailing = undefined;
		}

		// The `wrapper` function encapsulates all of the throttling / debouncing
		// functionality and when executed will limit the rate at which `callback`
		// is executed.
		function wrapper () {

			var self = this;
			var elapsed = Number(new Date()) - lastExec;
			var args = arguments;

			// Execute `callback` and update the `lastExec` timestamp.
			function exec () {
				lastExec = Number(new Date());
				callback.apply(self, args);
			}

			// If `debounceMode` is true (at begin) this is used to clear the flag
			// to allow future `callback` executions.
			function clear () {
				timeoutID = undefined;
			}

			if ( debounceMode && !timeoutID ) {
				// Since `wrapper` is being called for the first time and
				// `debounceMode` is true (at begin), execute `callback`.
				exec();
			}

			// Clear any existing timeout.
			if ( timeoutID ) {
				clearTimeout(timeoutID);
			}

			if ( debounceMode === undefined && elapsed > delay ) {
				// In throttle mode, if `delay` time has been exceeded, execute
				// `callback`.
				exec();

			} else if ( noTrailing !== true ) {
				// In trailing throttle mode, since `delay` time has not been
				// exceeded, schedule `callback` to execute `delay` ms after most
				// recent execution.
				//
				// If `debounceMode` is true (at begin), schedule `clear` to execute
				// after `delay` ms.
				//
				// If `debounceMode` is false (at end), schedule `callback` to
				// execute after `delay` ms.
				timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
			}

		}

		// Return the wrapper function.
		return wrapper;

	};


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(92)

	/* template */
	var __vue_template__ = __webpack_require__(95)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/oliver/DEV/yunkeji/yunyingbu/vue-components/src/components/select/template/dropdown.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-35d4b03e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-35d4b03e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] dropdown.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _vuePopper = __webpack_require__(93);

	var _vuePopper2 = _interopRequireDefault(_vuePopper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'el-select-dropdown',

	  componentName: 'select-dropdown',

	  mixins: [_vuePopper2.default],

	  props: {
	    placement: {
	      default: 'bottom-start'
	    },

	    boundariesPadding: {
	      default: 0
	    },

	    options: {
	      default: function _default() {
	        return {
	          forceAbsolute: true,
	          gpuAcceleration: false
	        };
	      }
	    },
	    onUpdatePopper: null,
	    onDestroyPopper: null
	  },

	  data: function data() {
	    return {
	      minWidth: ''
	    };
	  },


	  watch: {
	    '$parent.wrapperWidth': function $parentWrapperWidth() {
	      this.minWidth = this.$parent.$el.getBoundingClientRect().width + 'px';
	    },
	    onUpdatePopper: function onUpdatePopper(v) {
	      if (v) {
	        this.updatePopper();
	      }
	    },
	    onDestroyPopper: function onDestroyPopper(v) {
	      if (v) {
	        this.destroyPopper();
	      }
	    }
	  },

	  mounted: function mounted() {
	    this.minWidth = this.$parent.$el.getBoundingClientRect().width + 'px';
	    this.referenceElm = this.$parent.$refs.reference;
	    this.$parent.popperElm = this.popperElm = this.$el;
	  }
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _popper = __webpack_require__(4);

	var _popper2 = _interopRequireDefault(_popper);

	var _vuePopup = __webpack_require__(94);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  props: {
	    placement: {
	      type: String,
	      default: 'bottom'
	    },
	    boundariesPadding: {
	      type: Number,
	      default: 5
	    },
	    reference: {},
	    popper: {},
	    offset: {
	      default: 0
	    },
	    value: Boolean,
	    visibleArrow: Boolean,
	    transition: String,
	    appendToBody: {
	      type: Boolean,
	      default: true
	    },
	    options: {
	      type: Object,
	      default: function _default() {
	        return {
	          gpuAcceleration: false
	        };
	      }
	    }
	  },

	  data: function data() {
	    return {
	      showPopper: false
	    };
	  },


	  watch: {
	    value: {
	      immediate: true,
	      handler: function handler(val) {
	        this.showPopper = val;
	        this.$emit('input', val);
	      }
	    },

	    showPopper: function showPopper(val) {
	      val ? this.updatePopper() : this.destroyPopper();
	      this.$emit('input', val);
	    }
	  },

	  methods: {
	    createPopper: function createPopper() {
	      var _this = this;

	      if (!/^(top|bottom|left|right)(-start|-end)?$/g.test(this.placement)) {
	        return;
	      }

	      var options = this.options;
	      var popper = this.popperElm = this.popperElm || this.popper || this.$refs.popper;
	      var reference = this.referenceElm = this.referenceElm || this.reference || this.$refs.reference;

	      if (!reference && this.$slots.reference && this.$slots.reference[0]) {
	        reference = this.referenceElm = this.$slots.reference[0].elm;
	      }
	      if (!popper || !reference) {
	        return;
	      }
	      if (this.visibleArrow) {
	        this.appendArrow(popper);
	      }
	      if (this.appendToBody) {
	        document.body.appendChild(this.popperElm);
	      }
	      if (this.popperJS && this.popperJS.destroy) {
	        this.popperJS.destroy();
	      }

	      options.placement = this.placement;
	      options.offset = this.offset;
	      this.popperJS = new _popper2.default(reference, popper, options);
	      this.popperJS.onCreate(function (_) {
	        _this.$emit('created', _this);
	        _this.resetTransformOrigin();
	        _this.$nextTick(_this.updatePopper);
	      });
	      this.popperJS._popper.style.zIndex = _vuePopup.PopupManager.nextZIndex();
	    },
	    updatePopper: function updatePopper() {
	      this.popperJS ? this.popperJS.update() : this.createPopper();
	    },
	    doDestroy: function doDestroy() {
	      if (this.showPopper || !this.popperJS) {
	        return;
	      }
	      this.popperJS.destroy();
	      this.popperJS = null;
	    },
	    destroyPopper: function destroyPopper() {
	      if (this.popperJS) {
	        this.resetTransformOrigin();
	      }
	    },
	    resetTransformOrigin: function resetTransformOrigin() {
	      var placementMap = { top: 'bottom', bottom: 'top', left: 'right', right: 'left' };
	      var placement = this.popperJS._popper.getAttribute('x-placement').split('-')[0];
	      var origin = placementMap[placement];
	      this.popperJS._popper.style.transformOrigin = ['top', 'bottom'].indexOf(placement) > -1 ? 'center ' + origin : origin + ' center';
	    },
	    appendArrow: function appendArrow(element) {
	      var hash = void 0;
	      if (this.appended) {
	        return;
	      }

	      this.appended = true;

	      for (var item in element.attributes) {
	        if (/^_v-/.test(element.attributes[item].name)) {
	          hash = element.attributes[item].name;
	          break;
	        }
	      }

	      var arrow = document.createElement('div');

	      if (hash) {
	        arrow.setAttribute(hash, '');
	      }
	      arrow.setAttribute('x-arrow', '');
	      arrow.className = 'popper__arrow';
	      element.appendChild(arrow);
	    }
	  },

	  beforeDestroy: function beforeDestroy() {
	    this.doDestroy();
	    this.popperElm && this.popperElm.parentNode === document.body && document.body.removeChild(this.popperElm);
	  },
	  deactivated: function deactivated() {
	    this.$options.beforeDestroy[0].call(this);
	  }
	};

/***/ },
/* 94 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_94__;

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    class: {
	      'is-multiple': _vm.$parent.multiple
	    },
	    style: ({
	      width: _vm.minWidth
	    })
	  }, [_vm._t("default")])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-35d4b03e", module.exports)
	  }
	}

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  var _obj;
	  return _h('div', {
	    directives: [{
	      name: "clickoutside",
	      rawName: "v-clickoutside",
	      value: (_vm.handleClose),
	      expression: "handleClose"
	    }],
	    ref: "reference",
	    class: _vm.wrapClasses,
	    style: ({
	      width: _vm.width
	    })
	  }, [_h('div', {
	    class: _vm.selectionClasses,
	    on: {
	      "click": _vm.handleFocus
	    }
	  }, [_h('div', {
	    ref: "rendered",
	    class: _vm.prefixCls + '-select-selection__rendered',
	    style: ({
	      height: _vm.renderedHeight
	    })
	  }, [_h('span', {
	    class: [
	      'select-result', {
	        'placeholder': _vm.isPlaceholder,
	        'select-result-notags': !_vm.isTags
	      },
	      _vm.prefixCls + '-select-selection-selected-value'
	    ]
	  }, [(_vm.isTags) ? [_vm._l((_vm.tagsList), function(tagsIt, tagsIdx) {
	    return _h('span', {
	      class: [
	        'tags', {
	          'tags-active': _vm.tagsIndex === tagsIdx
	        }
	      ],
	      on: {
	        "click": function($event) {
	          _vm.tagsDelete(tagsIt, tagsIdx)
	        }
	      }
	    }, [_vm._s(tagsIt[_vm.keyLabel]) + "\n            ", _h('i', {
	      class: _vm.prefixCls + '-icon ' + _vm.prefixCls + '-icon-close'
	    })])
	  }), " ", (_vm.isTags && (_vm.create || _vm.filter)) ? _h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.value),
	      expression: "value"
	    }],
	    ref: "input",
	    staticClass: "input",
	    style: ({
	      'width': _vm.cpInputWidth
	    }),
	    attrs: {
	      "placeholder": _vm.currentPlaceholder,
	      "readonly": !_vm.isInput
	    },
	    domProps: {
	      "value": _vm._s(_vm.value)
	    },
	    on: {
	      "input": [function($event) {
	        if ($event.target.composing) { return; }
	        _vm.value = $event.target.value
	      }, _vm.handleInputChange],
	      "keydown": [function($event) {
	        if (_vm._k($event.keyCode, "down", 40)) { return; }
	        $event.preventDefault();
	        _vm.navigateOptions('next')
	      }, function($event) {
	        if (_vm._k($event.keyCode, "up", 38)) { return; }
	        $event.preventDefault();
	        _vm.navigateOptions('prev')
	      }, function($event) {
	        if (_vm._k($event.keyCode, "left", 37)) { return; }
	        $event.preventDefault();
	        _vm.navigateOptions('left')
	      }, function($event) {
	        if (_vm._k($event.keyCode, "right", 39)) { return; }
	        $event.preventDefault();
	        _vm.navigateOptions('right')
	      }, function($event) {
	        if (_vm._k($event.keyCode, "delete", [8, 46])) { return; }
	        _vm.deleteEvent($event)
	      }, function($event) {
	        if (_vm._k($event.keyCode, "enter", 13)) { return; }
	        $event.preventDefault();
	        _vm.handleEnter($event)
	      }, function($event) {
	        if (_vm._k($event.keyCode, "esc", 27)) { return; }
	        _vm.handleEsc($event)
	      }],
	      "blur": _vm.handleBlur
	    }
	  }) : _vm._e()] : ["\n          " + _vm._s(_vm.nodeTagsLabel) + "\n        "], " ", " ", (_vm.filter) ? _h('span', {
	    ref: "search__field__mirror",
	    class: _vm.prefixCls + '-select-search__field__mirror'
	  }, [_vm._s(_vm.value ? _vm.value : _vm.currentPlaceholder)]) : _vm._e()])]), " ", _h('span', {
	    class: _vm.prefixCls + '-select-arrow'
	  }, [_h('b')]), " ", _h('transition', {
	    attrs: {
	      "name": "zoom-in-top"
	    },
	    on: {
	      "after-leave": _vm.doDestroy
	    }
	  }, [_h('select-menu', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.isOpen),
	      expression: "isOpen"
	    }],
	    ref: "popper",
	    class: _vm.selectionDropdownClasses,
	    attrs: {
	      "on-update-popper": _vm.updatePopper,
	      "on-destroy-popper": _vm.destroyPopper
	    }
	  }, [_h('ul', {
	    ref: "itembox",
	    class: [
	      _vm.prefixCls + '-select-dropdown-menu',
	      _vm.prefixCls + '-select-dropdown-menu-vertical',
	      _vm.prefixCls + '-select-dropdown-menu-root'
	    ]
	  }, [_vm._l((_vm.selects), function(it, index) {
	    var _obj;
	    return _h('li', {
	      directives: [{
	        name: "show",
	        rawName: "v-show",
	        value: (_vm.queryItem(it[_vm.keyLabel])),
	        expression: "queryItem(it[keyLabel])"
	      }],
	      ref: "select_item",
	      refInFor: true,
	      class: [
	        _vm.defaultSelectItem(it[_vm.keyValue]),
	        _vm.prefixCls + '-select-dropdown-menu-item', ( _obj = {}, _obj[(_vm.prefixCls + "-select-dropdown-menu-item-active")] = index === _vm.keyIndex, _obj[(_vm.prefixCls + "-select-dropdown-menu-item-none")] = _vm.hideSelected(it, index), _obj[(_vm.prefixCls + "-select-dropdown-menu-item-disabled")] = it.disabled, _obj )
	      ],
	      attrs: {
	        "data-key": _vm.keyIndex,
	        "data-idx": index,
	        "disabled": it.disabled
	      },
	      on: {
	        "click": function($event) {
	          _vm.selectItem(it, index, $event)
	        },
	        "mouseenter": function($event) {
	          _vm.hoverItem(index, $event)
	        },
	        "mouseleave": function($event) {
	          _vm.leaveItem(index, $event)
	        }
	      }
	    }, [_vm._s(it[_vm.keyLabel])])
	  }), " ", _h('li', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.isShowNewLabel),
	      expression: "isShowNewLabel"
	    }],
	    ref: "create_select_item",
	    class: [
	      _vm.prefixCls + '-select-dropdown-menu-item', ( _obj = {}, _obj[(_vm.prefixCls + "-select-dropdown-menu-item-active")] = _vm.selects.length === _vm.keyIndex, _obj )
	    ],
	    on: {
	      "click": function($event) {
	        _vm.selectItem(null, _vm.selects.length, $event)
	      },
	      "mouseenter": function($event) {
	        _vm.hoverItem(_vm.selects.length, $event)
	      },
	      "mouseleave": function($event) {
	        _vm.leaveItem(_vm.selects.length, $event)
	      }
	    }
	  }, ["\n            " + _vm._s(_vm.value) + "\n          "])])])])])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-74fd8f16", module.exports)
	  }
	}

/***/ }
/******/ ])
});
;