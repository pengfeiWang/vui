(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("vRadio", [], factory);
	else if(typeof exports === 'object')
		exports["vRadio"] = factory();
	else
		root["vRadio"] = factory();
})(this, function() {
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
	exports.vRadio = undefined;

	var _radio = __webpack_require__(1);

	var _radio2 = _interopRequireDefault(_radio);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_radio2.default.install = function (Vue) {
	  Vue.component(_radio2.default.name, _radio2.default);
	};
	exports.vRadio = _radio2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader!vue-loader/lib/style-rewriter?id=data-v-09e26576!scss-loader!vue-loader/lib/selector?type=styles&index=0!./radio.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))

	/* script */
	__vue_exports__ = __webpack_require__(2)

	/* template */
	var __vue_template__ = __webpack_require__(5)
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
	__vue_options__.__file = "/Users/oliver/DEV/yunkeji/yunyingbu/vue-components/src/components/radio/template/radio.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-09e26576", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-09e26576", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] radio.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _props = __webpack_require__(3);

	var _config = __webpack_require__(4);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefix = _config2.default.prefix;
	exports.default = {
	  name: 'vRadio',
	  props: (0, _props.defaultProps)({
	    prefixCls: prefix,
	    type: 'radio',
	    value: (0, _props.oneOfType)([String, Number, Boolean]),
	    label: '',
	    name: null,
	    disabled: !1,
	    defaultChecked: !1,
	    onChange: function onChange() {}
	  }),
	  data: function data() {
	    return {
	      checked: !!this.defaultChecked,
	      cpLabel: this.label,
	      cpDisabled: !!this.disabled
	    };
	  },

	  computed: {
	    buttonClasses: function buttonClasses() {
	      if (this.type === 'button') {
	        return this.prefixCls + '-radio-button';
	      }
	      return this.prefixCls + '-radio';
	    },
	    wrapClasses: function wrapClasses() {
	      var _ref;

	      return _ref = {}, _ref[this.buttonClasses + '-wrapper'] = 1, _ref[this.buttonClasses + '-wrapper-disabled'] = this.disabled, _ref[this.buttonClasses + '-wrapper-checked'] = this.checked, _ref;
	    },
	    cpClasses: function cpClasses() {
	      var _ref2;

	      return _ref2 = {}, _ref2['' + this.buttonClasses] = 1, _ref2[this.buttonClasses + '-disabled'] = this.disabled, _ref2[this.buttonClasses + '-checked'] = this.checked, _ref2;
	    }
	  },
	  watch: {
	    defaultChecked: function defaultChecked(v) {
	      this.checked = !!v;
	    },
	    disabled: function disabled(v) {
	      this.cpDisabled = v;
	    }
	  },
	  methods: {
	    handleChange: function handleChange(e) {
	      this.$emit('change', {
	        ev: e,
	        el: this.$refs.rt,
	        name: this.name,
	        value: this.value,
	        disabled: this.cpDisabled,
	        checked: !!('' + this.checked).trim(),
	        label: this.cpLabel
	      });
	    }
	  }
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
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = {
	  prefix: 'mioss'
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('label', {
	    ref: "rt",
	    class: _vm.wrapClasses
	  }, [_c('span', {
	    class: _vm.cpClasses
	  }, [_c('span', {
	    class: _vm.buttonClasses + '-inner'
	  }), _vm._v(" "), _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.checked),
	      expression: "checked"
	    }],
	    class: _vm.buttonClasses + '-input',
	    attrs: {
	      "type": "radio",
	      "name": _vm.name,
	      "disabled": _vm.cpDisabled
	    },
	    domProps: {
	      "value": _vm.value,
	      "checked": _vm.checked,
	      "checked": _vm._q(_vm.checked, _vm.value)
	    },
	    on: {
	      "change": [function($event) {
	        _vm.checked = _vm.value
	      }, _vm.handleChange]
	    }
	  })]), (_vm.$slots.default || _vm.cpLabel) ? _c('span', [_vm._t("default"), _vm._v(" "), (!_vm.$slots.default) ? [_vm._v(_vm._s(_vm.cpLabel))] : _vm._e()], 2) : _vm._e()])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-09e26576", module.exports)
	  }
	}

/***/ }
/******/ ])
});
;