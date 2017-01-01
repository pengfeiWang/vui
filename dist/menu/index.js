(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("vMenu", [], factory);
	else if(typeof exports === 'object')
		exports["vMenu"] = factory();
	else
		root["vMenu"] = factory();
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
	exports.vMenu = undefined;

	var _template = __webpack_require__(1);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_template2.default.install = function (Vue) {
	  Vue.component(_template2.default.name, _template2.default);
	};
	exports.vMenu = _template2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader!vue-loader/lib/style-rewriter?id=data-v-ef52931c!scss-loader!vue-loader/lib/selector?type=styles&index=0!./index.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))

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
	__vue_options__.__file = "/Users/oliver/DEV/yunkeji/yunyingbu/vue-components/src/components/menu/template/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-ef52931c", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-ef52931c", __vue_options__)
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

	var _config = __webpack_require__(4);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var lineHeight = 42;

	var prefixCls = _config2.default.prefix;
	function isContainsKey(k) {
	  var _this = this;

	  var sts;
	  var item = this.menus.find(function (it) {
	    if (it.key === k) {
	      return it;
	    }
	  });
	  sts = item.item.find(function (it) {
	    if (it.key === _this.selectedKey) {
	      return it;
	    }
	  });
	  return sts;
	}
	function keyReg(k) {
	  var reg = new RegExp('^' + k + '$', 'i');
	  var bol = isContainsKey.call(this, k);
	  return reg.test(this.selectedKey) || bol;
	}
	exports.default = {
	  name: 'vMenu',
	  data: function data() {
	    return {
	      selectedIdx: '',
	      selectedKey: this.defaultSelectedKeys,
	      selectedItemKey: ''
	    };
	  },

	  props: (0, _props.defaultProps)({
	    theme: 'light',
	    prefixCls: prefixCls,
	    defaultSelectedKeys: {
	      type: String,
	      default: 'microApp'
	    },
	    selectedKeys: '',
	    menus: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    onChange: function onChange() {}
	  }),
	  computed: {
	    rootClasses: function rootClasses() {
	      var _ref;

	      return _ref = {}, _ref[this.prefixCls + '-menu ' + this.prefixCls + '-menu-inline ' + this.prefixCls + '-menu-root'] = 1, _ref[this.prefixCls + '-menu-' + this.theme] = this.theme, _ref;
	    },
	    menuSubMenuClasses: function menuSubMenuClasses() {
	      var _ref2;

	      return _ref2 = {}, _ref2[this.prefixCls + '-menu-submenu-inline ' + this.prefixCls + '-menu-submenu'] = 1, _ref2;
	    }
	  },
	  watch: {
	    selectedKey: function selectedKey(newVal, oldVal) {},
	    defaultSelectedKeys: function defaultSelectedKeys(newVal) {
	      this.selectedKey = newVal;
	    }
	  },
	  methods: {
	    iconClasses: function iconClasses(idx) {
	      var _ref3;

	      var item = this.menus[idx];
	      return _ref3 = {}, _ref3[this.prefixCls + '-icon'] = 1, _ref3[this.prefixCls + '-icon-' + item.icon] = item.icon, _ref3;
	    },
	    setStyle: function setStyle(idx, key) {
	      var bol = keyReg.call(this, key);
	      if (bol) {
	        return { height: this.menus[idx].item.length * lineHeight + 'px', overflow: 'hidden' };
	      }
	      return { height: 0, overflow: 'hidden' };
	    },
	    showMenu: function showMenu() {
	      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.defaultSelectedKeys;

	      this.selectedKey = key;
	    },
	    setMenuSubMenuOpenClasses: function setMenuSubMenuOpenClasses(key) {
	      var _cs;

	      var bol = keyReg.call(this, key);

	      var cs = (_cs = {}, _cs[this.prefixCls + '-menu-submenu-open ' + this.prefixCls + '-menu-submenu-selected'] = bol, _cs);

	      return bol ? cs : ' ';
	    },
	    setMenuSubmenuItemSelectedClasses: function setMenuSubmenuItemSelectedClasses(idx, key, subIdx, subKey) {
	      var _ref4;

	      var bol = this.selectedKey === subKey || this.selectedItemKey === key + ':' + subKey;
	      return _ref4 = {}, _ref4[this.prefixCls + '-menu-item-selected'] = bol, _ref4;
	    },
	    handleClick: function handleClick(idx, key, e) {
	      if (this.selectedKey === key) {
	        this.selectedKey = '';
	        return;
	      }

	      this.selectedKey = key;
	    },
	    handleItemClick: function handleItemClick(idx, subkey, subidx, event) {
	      var d = this.menus[idx];
	      var o = {
	        parentIdx: idx,
	        parentKey: d.key,
	        parentTitle: d.title,
	        subIdx: subidx,
	        subKey: subkey,
	        subTitle: d.item[subidx].title
	      };

	      this.onChange(o, event);

	      this.selectedItemKey = this.selectedKey + ':' + subkey;
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

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', [_h('ul', {
	    class: _vm.rootClasses
	  }, [_vm._l((_vm.menus), function(it, idx) {
	    return _h('li', {
	      class: [
	        _vm.menuSubMenuClasses,
	        _vm.setMenuSubMenuOpenClasses(it.key)
	      ],
	      attrs: {
	        "data-key": it.key,
	        "data-idx": idx
	      }
	    }, [_h('div', {
	      staticClass: "mioss-menu-submenu-title",
	      staticStyle: {
	        "padding-left": "24px"
	      },
	      on: {
	        "click": function($event) {
	          _vm.handleClick(idx, it.key, $event)
	        }
	      }
	    }, [_h('span', [(it.icon) ? _h('i', {
	      class: _vm.iconClasses(idx)
	    }) : _vm._e(), " ", _h('span', [_vm._s(it.title)])])]), " ", _h('ul', {
	      staticClass: "mioss-menu mioss-menu-inline mioss-menu-sub menu-slide-active",
	      style: (_vm.setStyle(idx, it.key))
	    }, [_vm._l((it.item), function(subit, subidx) {
	      return _h('li', {
	        class: ["mioss-menu-item", _vm.setMenuSubmenuItemSelectedClasses(idx, it.key, subidx, subit.key)],
	        staticStyle: {
	          "padding-left": "50px"
	        },
	        on: {
	          "click": function($event) {
	            _vm.handleItemClick(idx, subit.key, subidx, $event)
	          }
	        }
	      }, [_vm._s(subit.title)])
	    })])])
	  })])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-ef52931c", module.exports)
	  }
	}

/***/ }
/******/ ])
});
;