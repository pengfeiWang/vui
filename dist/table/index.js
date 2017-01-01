(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("extend"));
	else if(typeof define === 'function' && define.amd)
		define("vTable", ["extend"], factory);
	else if(typeof exports === 'object')
		exports["vTable"] = factory(require("extend"));
	else
		root["vTable"] = factory(root["extend"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_18__) {
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
	exports.vTable = undefined;

	var _template = __webpack_require__(1);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_template2.default.install = function (Vue) {
	  Vue.component(_template2.default.name, _template2.default);
	};
	exports.vTable = _template2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader!vue-loader/lib/style-rewriter?id=data-v-0931c7e9!scss-loader!vue-loader/lib/selector?type=styles&index=0!./index.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))

	/* script */
	__vue_exports__ = __webpack_require__(2)

	/* template */
	var __vue_template__ = __webpack_require__(19)
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
	__vue_options__.__file = "/Users/oliver/DEV/yunkeji/yunyingbu/vue-components/src/components/table/template/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0931c7e9", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-0931c7e9", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _props = __webpack_require__(3);

	var _button = __webpack_require__(4);

	var _checkbox = __webpack_require__(13);

	var _tableHeader = __webpack_require__(17);

	var _tableHeader2 = _interopRequireDefault(_tableHeader);

	var _config = __webpack_require__(10);

	var _config2 = _interopRequireDefault(_config);

	var _extend = __webpack_require__(18);

	var _extend2 = _interopRequireDefault(_extend);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = _config2.default.prefix;

	exports.default = {
	  name: 'vTable',
	  data: function data() {
	    return {
	      selectCache: {
	        length: 0,
	        splice: [].splice
	      },
	      checkAll: false
	    };
	  },

	  props: (0, _props.defaultProps)({
	    prefixCls: prefixCls,
	    rowSelection: {
	      type: null,
	      default: false
	    },
	    animate: false,
	    animateMod: 'list',
	    animateTag: '',

	    size: {
	      type: String,
	      default: 'large'
	    },
	    dataSource: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    columns: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    fontSize: {
	      type: Number,
	      default: 12
	    },
	    expandIconAsCell: true,
	    onChange: function onChange() {},
	    onAction: function onAction() {},
	    useFixedHeader: false,
	    bordered: false,
	    bodyStyle: Object,
	    style: Object
	  }),

	  computed: {
	    tableClasses: function tableClasses() {
	      var _ref;

	      return _ref = {}, _ref[this.prefixCls + '-table'] = 1, _ref[this.prefixCls + '-table-scroll-position-left'] = 1, _ref[this.prefixCls + '-table-' + this.size] = this.size, _ref[this.prefixCls + '-table-font-' + this.fontSize] = this.fontSize, _ref;
	    },
	    isIndeterminate: function isIndeterminate() {
	      if (!this.rowSelection) {
	        return;
	      }
	      var selectLength = this.selectCache.length,
	          dataSourceLength = this.dataSource.length;

	      if (!selectLength || !dataSourceLength) {
	        this.checkAll = false;
	        return false;
	      }
	      this.checkAll = selectLength === dataSourceLength;
	      return !this.checkAll;
	    }
	  },

	  methods: {
	    renderColsText: function renderColsText(sourceIdx, colIdx) {
	      return this.dataSource[sourceIdx][this.columns[colIdx].prop];
	    },
	    handleChange: function handleChange() {
	      var _this = this;

	      if (!this.rowSelection) {
	        return;
	      }

	      for (var _len = arguments.length, obj = Array(_len), _key = 0; _key < _len; _key++) {
	        obj[_key] = arguments[_key];
	      }

	      var idx = obj[0],
	          checked = obj[1].checked;

	      if (idx === 'checkedAll') {
	        if (checked) {
	          this.dataSource.map(function (it, idx) {
	            _this.selectCache[idx] = (0, _extend2.default)({}, it);
	          });
	          this.selectCache.length = this.dataSource.length;
	          this.checkAll = true;
	        } else {
	          for (var i in this.selectCache) {
	            if (i === 'length' || i === 'solice') {
	              continue;
	            }
	            delete this.selectCache[i];
	          }
	          this.selectCache.length = 0;
	        }
	        this.checkAll = checked;
	      } else {
	        if (checked) {
	          this.selectCache[idx] = (0, _extend2.default)({}, this.dataSource[idx]);
	          this.selectCache.length++;
	        } else {
	          this.selectCache[idx] = null;
	          delete this.selectCache[idx];
	          this.selectCache.length--;
	        }
	      }
	      this.onChange(this.selectCache);
	    },
	    handleAction: function handleAction() {
	      this.onAction.apply(this, arguments);
	    }
	  },

	  components: { vButton: _button.vButton, tableHead: _tableHeader2.default, vCheckbox: _checkbox.vCheckbox }
	};

/***/ },
/* 3 */
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.vButton = undefined;

	var _button = __webpack_require__(5);

	var _button2 = _interopRequireDefault(_button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_button2.default.install = function (Vue) {
	  Vue.component(_button2.default.name, _button2.default);
	};
	exports.vButton = _button2.default;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader!vue-loader/lib/style-rewriter?id=data-v-35565755!scss-loader!vue-loader/lib/selector?type=styles&index=0!./button.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))

	/* script */
	__vue_exports__ = __webpack_require__(6)

	/* template */
	var __vue_template__ = __webpack_require__(12)
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
	__vue_options__.__file = "/Users/oliver/DEV/yunkeji/yunyingbu/vue-components/src/components/button/template/button.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-35565755", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-35565755", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] button.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _props = __webpack_require__(3);

	var _icon = __webpack_require__(7);

	var _config = __webpack_require__(10);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefix = _config2.default.prefix;

	var timeoutClicked = 10;
	var timeoutClick = 500;
	exports.default = {
	  name: 'vButton',
	  data: function data() {
	    return {
	      clickedTimeout: null,
	      timeout: null,
	      clsActive: false
	    };
	  },

	  props: (0, _props.defaultProps)({
	    prefixCls: prefix,
	    type: (0, _props.oneOf)(['primary', 'ghost', 'dashed', undefined, '']),
	    htmlType: 'button',
	    shape: (0, _props.oneOf)(['circle', 'circle-outline', undefined, '']),
	    size: (0, _props.oneOf)(['small', 'large', undefined]),
	    disabled: {
	      type: [Boolean, String],
	      default: false
	    },
	    loading: {
	      type: [Boolean, String],
	      default: ''
	    },
	    icon: String,
	    className: null,
	    class: null,
	    onClick: {
	      type: Function,
	      default: function _default() {}
	    }
	  }),

	  methods: {
	    clearButton: function clearButton() {
	      this.clsActive = false;
	    },
	    handleClick: function handleClick(event) {
	      var that = this;

	      this.clickedTimeout = setTimeout(function () {
	        that.clsActive = true;
	      }, timeoutClicked);
	      clearTimeout(this.timeout);
	      this.timeout = setTimeout(function () {
	        return that.clearButton();
	      }, timeoutClick);


	      this.$emit('click', { ev: event, rt: this.$refs.rt });
	    }
	  },
	  computed: {
	    isDisabled: function isDisabled() {
	      if (/disabled/.test(this.className)) {
	        return true;
	      }
	      return !!this.disabled;
	    },
	    isIcon: function isIcon() {
	      if (this.loading) {
	        return 'loading';
	      }
	      return this.icon;
	    },
	    btClasses: function btClasses() {
	      var _ref;

	      var sizeCls = {
	        'large': 'lg',
	        'small': 'sm'
	      }[this.size] || '';
	      return _ref = {}, _ref[this.prefixCls + '-btn'] = 1, _ref[this.prefixCls + '-btn-' + this.type] = !!this.type, _ref[this.prefixCls + '-btn-' + this.shape] = !!this.shape, _ref[this.prefixCls + '-btn-' + sizeCls] = !!sizeCls, _ref[this.prefixCls + '-btn-loading'] = this.loading, _ref[this.prefixCls + '-btn-clicked'] = this.clsActive, _ref;
	    }
	  },
	  components: { vIcon: _icon.vIcon }
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.vIcon = undefined;

	var _template = __webpack_require__(8);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_template2.default.install = function (Vue) {
	  Vue.component(_template2.default.name, _template2.default);
	};
	exports.vIcon = _template2.default;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader!vue-loader/lib/style-rewriter?id=data-v-09b0f518!scss-loader!vue-loader/lib/selector?type=styles&index=0!./index.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))

	/* script */
	__vue_exports__ = __webpack_require__(9)

	/* template */
	var __vue_template__ = __webpack_require__(11)
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
	__vue_options__.__file = "/Users/oliver/DEV/yunkeji/yunyingbu/vue-components/src/components/icon/template/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-09b0f518", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-09b0f518", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _props = __webpack_require__(3);

	var _config = __webpack_require__(10);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefix = _config2.default.prefix;
	exports.default = {
	  name: 'vIcon',
	  props: (0, _props.defaultProps)({
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
	    iconClasses: function iconClasses() {
	      var _ref;

	      return _ref = {}, _ref[this.className] = !!this.className, _ref[prefix + '-icon'] = 1, _ref[prefix + '-icon-spin'] = !!this.spin || this.type === 'loading', _ref[prefix + '-icon-' + this.type] = this.type, _ref;
	    }
	  }
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = {
	  prefix: 'mioss'
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('i', {
	    class: _vm.iconClasses
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-09b0f518", module.exports)
	  }
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('button', {
	    ref: "rt",
	    class: _vm.btClasses,
	    attrs: {
	      "type": _vm.htmlType || 'button',
	      "disabled": _vm.isDisabled
	    },
	    on: {
	      "click": _vm.handleClick
	    }
	  }, [(_vm.isIcon) ? _c('v-icon', {
	    attrs: {
	      "type": _vm.isIcon
	    }
	  }) : _vm._e(), _vm._v(" "), _vm._t("default")], 2)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-35565755", module.exports)
	  }
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.vCheckbox = undefined;

	var _checkbox = __webpack_require__(14);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_checkbox2.default.install = function (Vue) {
	  Vue.component(_checkbox2.default.name, _checkbox2.default);
	};
	exports.vCheckbox = _checkbox2.default;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader!vue-loader/lib/style-rewriter?id=data-v-7449d5b7!scss-loader!vue-loader/lib/selector?type=styles&index=0!./checkbox.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))

	/* script */
	__vue_exports__ = __webpack_require__(15)

	/* template */
	var __vue_template__ = __webpack_require__(16)
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
	__vue_options__.__file = "/Users/oliver/DEV/yunkeji/yunyingbu/vue-components/src/components/checkbox/template/checkbox.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-7449d5b7", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-7449d5b7", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] checkbox.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _props = __webpack_require__(3);

	var _config = __webpack_require__(10);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefix = _config2.default.prefix;
	exports.default = {
	  name: 'vCheckbox',
	  data: function data() {
	    return {
	      checked: !!this.defaultChecked,
	      cpType: this.type,
	      cpChecked: !!this.checked,
	      cpDisabled: !!this.disabled,
	      cpLabel: this.label,
	      cpIndeterminate: !!this.indeterminate
	    };
	  },

	  props: (0, _props.defaultProps)({
	    prefixCls: prefix + '-checkbox',
	    style: {},
	    value: null,
	    label: null,
	    name: '',
	    index: 0,
	    type: 'checkbox',
	    trueLabel: {
	      type: [String, Number],
	      default: ''
	    },
	    falseLabel: {
	      type: [String, Number],
	      default: ''
	    },
	    indeterminate: false,
	    className: '',
	    disabled: null,
	    defaultChecked: !1,
	    onChange: function onChange() {}
	  }),

	  computed: {
	    wrapClasses: function wrapClasses() {
	      var _ref;

	      return _ref = {}, _ref[this.className] = !!this.className, _ref[this.prefixCls + '-wrapper'] = 1, _ref;
	    },
	    ckClasses: function ckClasses() {
	      var _ref2;

	      return _ref2 = {}, _ref2[this.className] = !!this.className, _ref2['' + this.prefixCls] = 1, _ref2[this.prefixCls + '-checked'] = this.checked, _ref2[this.prefixCls + '-checked-' + (this.checked ? 1 : 0)] = this.checked, _ref2[this.prefixCls + '-disabled'] = !!this.cpDisabled, _ref2[this.prefixCls + '-indeterminate'] = this.cpIndeterminate, _ref2;
	    }
	  },
	  mounted: function mounted() {
	    this.checked = !!this.defaultChecked;
	    this.cpLabel = this.label;
	    if (!this.label) {
	      this.cpLabel = this.defaultChecked ? this.trueLabel : this.falseLabel;
	    }
	  },

	  watch: {
	    checked: function checked(v) {
	      if (v && this.trueLabel) {
	        this.cpLabel = this.trueLabel;
	      }
	      if (!v && this.falseLabel) {
	        this.cpLabel = this.falseLabel;
	      }
	    },
	    defaultChecked: function defaultChecked(v) {
	      this.checked = v;
	    },
	    indeterminate: function indeterminate(v) {
	      this.cpIndeterminate = v;
	    },
	    disabled: function disabled(v) {
	      this.cpDisabled = v;
	    }
	  },

	  methods: {
	    handleChange: function handleChange(e) {
	      this.$emit('change', {
	        el: this.$refs.rt,
	        ev: e,
	        index: this.index,
	        checked: this.checked,
	        disabled: this.cpDisabled,
	        name: this.name,
	        value: this.value
	      });
	    }
	  }
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('label', {
	    ref: "rt",
	    class: _vm.wrapClasses
	  }, [_c('span', {
	    class: _vm.ckClasses,
	    style: (_vm.style)
	  }, [_c('span', {
	    class: _vm.prefixCls + '-inner'
	  }), _vm._v(" "), _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.checked),
	      expression: "checked"
	    }],
	    class: _vm.prefixCls + '-input',
	    attrs: {
	      "type": "checkbox",
	      "disabled": _vm.cpDisabled,
	      "name": _vm.name
	    },
	    domProps: {
	      "value": _vm.value,
	      "checked": _vm.checked,
	      "checked": Array.isArray(_vm.checked) ? _vm._i(_vm.checked, _vm.value) > -1 : (_vm.checked)
	    },
	    on: {
	      "change": [function($event) {
	        var $$a = _vm.checked,
	          $$el = $event.target,
	          $$c = $$el.checked ? (true) : (false);
	        if (Array.isArray($$a)) {
	          var $$v = _vm.value,
	            $$i = _vm._i($$a, $$v);
	          if ($$c) {
	            $$i < 0 && (_vm.checked = $$a.concat($$v))
	          } else {
	            $$i > -1 && (_vm.checked = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
	          }
	        } else {
	          _vm.checked = $$c
	        }
	      }, _vm.handleChange]
	    }
	  })]), (_vm.$slots.default || _vm.cpLabel) ? _c('span', [_vm._t("default"), _vm._v(" "), (!_vm.$slots.default) ? [_vm._v(_vm._s(_vm.cpLabel))] : _vm._e()], 2) : _vm._e()])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-7449d5b7", module.exports)
	  }
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _props = __webpack_require__(3);

	var _checkbox = __webpack_require__(13);

	var _config = __webpack_require__(10);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = _config2.default.prefix;
	exports.default = {
	  data: function data() {
	    return {
	      prefixCls: prefixCls
	    };
	  },

	  props: (0, _props.defaultProps)({
	    columns: { type: Array, required: true },
	    rowSelection: null,
	    indeterminate: {
	      type: Boolean,
	      default: false
	    },
	    checked: {
	      type: Boolean,
	      default: false
	    },
	    onChange: function onChange() {}
	  }),
	  components: { vCheckbox: _checkbox.vCheckbox },
	  methods: {
	    rowSelectionChange: function rowSelectionChange() {
	      if (!this.rowSelection) {
	        return;
	      }
	      var o = arguments.length <= 0 ? undefined : arguments[0];
	      this.onChange('checkedAll', o);
	    }
	  },
	  render: function render(h) {
	    return h(
	      'thead',
	      { 'class': prefixCls + '-table-thead' },
	      [h(
	        'tr',
	        null,
	        [this.rowSelection ? h(
	          'th',
	          { 'class': prefixCls + '-table-selection-column' },
	          [h(
	            'vCheckbox',
	            {
	              attrs: {
	                type: 'checkbox',
	                defaultChecked: this.checked,

	                indeterminate: this.indeterminate },
	              on: {
	                'change': this.rowSelectionChange
	              }
	            },
	            []
	          )]
	        ) : '', this._l(this.columns, function (column, cellIndex) {
	          return h(
	            'th',
	            { 'class': '' },
	            [h(
	              'span',
	              null,
	              [column.label]
	            )]
	          );
	        })]
	      )]
	    );
	  }
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: _vm.tableClasses
	  }, [_c('div', {
	    staticClass: "mioss-table-content"
	  }, [_c('div', {
	    staticClass: "mioss-table-body"
	  }, [_c('table', {}, [_c('colgroup', [(_vm.rowSelection) ? _c('col') : _vm._e(), _vm._v(" "), _vm._l((_vm.columns), function(it) {
	    return _c('col', {
	      attrs: {
	        "width": it.width
	      }
	    })
	  })], 2), _vm._v(" "), _c('table-head', {
	    attrs: {
	      "checked": _vm.checkAll,
	      "indeterminate": _vm.isIndeterminate,
	      "default-checked": false,
	      "row-selection": _vm.rowSelection,
	      "columns": _vm.columns,
	      "on-change": _vm.handleChange
	    }
	  }), _vm._v(" "), _c('tbody', {
	    staticClass: "mioss-table-tbody"
	  }, _vm._l((_vm.dataSource), function(it, sIdx) {
	    return _c('tr', {
	      key: 'a' + sIdx + '-' + Math.random().toString(36).replace('0.', ''),
	      staticClass: "mioss-table-row mioss-table-row-level-0"
	    }, [(_vm.rowSelection) ? _c('td', {
	      class: _vm.prefixCls + '-table-selection-column'
	    }, [_c('v-checkbox', {
	      attrs: {
	        "type": "checkbox",
	        "default-checked": _vm.checkAll || !!_vm.selectCache[sIdx],
	        "on-change": _vm.handleChange.bind(null, sIdx)
	      }
	    })], 1) : _vm._e(), _vm._v(" "), _vm._l((_vm.columns), function(tdIt, idx) {
	      return (tdIt.actions) ? _c('td', {
	        key: sIdx + '-' + idx + '-actions',
	        class: tdIt.actions ? _vm.prefixCls + '-table-actions' : ''
	      }, _vm._l((tdIt.actions), function(acIt, acIdx) {
	        return _c('v-button', {
	          attrs: {
	            "size": "small",
	            "icon": acIt.icon
	          },
	          on: {
	            "click": function($event) {
	              _vm.handleAction(sIdx, acIt.action)
	            }
	          }
	        }, [_vm._v(_vm._s(acIt.label))])
	      })) : _c('td', [(tdIt.type && tdIt.type == 'img') ? [_c('img', {
	        attrs: {
	          "src": _vm.renderColsText(sIdx, idx),
	          "alt": ""
	        }
	      })] : [(tdIt.handle && typeof tdIt.handle === 'function') ? [_vm._v("\n                  " + _vm._s(tdIt.handle(it[tdIt.prop])) + "\n                ")] : [_vm._v(_vm._s(it[tdIt.prop]))]]], 2)
	    })], 2)
	  }))], 1)])])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-0931c7e9", module.exports)
	  }
	}

/***/ }
/******/ ])
});
;