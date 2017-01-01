(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("vDialog", [], factory);
	else if(typeof exports === 'object')
		exports["vDialog"] = factory();
	else
		root["vDialog"] = factory();
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
	exports.vDialog = undefined;

	var _template = __webpack_require__(1);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_template2.default.install = function (Vue) {
	  Vue.component(_template2.default.name, _template2.default);
	};
	exports.vDialog = _template2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader!vue-loader/lib/style-rewriter?id=data-v-25436fb9!scss-loader!vue-loader/lib/selector?type=styles&index=0!./index.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	__webpack_require__(2)

	/* script */
	__vue_exports__ = __webpack_require__(6)

	/* template */
	var __vue_template__ = __webpack_require__(17)
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
	__vue_options__.__file = "/Users/oliver/DEV/yunkeji/yunyingbu/vue-components/src/components/vdialog/template/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-25436fb9", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-25436fb9", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-25436fb9!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./index.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-25436fb9!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.msgbox-fade-enter-active{animation:msgbox-fade-in .3s\n}\n.msgbox-fade-leave-active{animation:msgbox-fade-out .3s\n}\n@keyframes msgbox-fade-in{\n0%{transform:translate3d(0,-20px,0);opacity:0\n}\nto{transform:translateZ(0);opacity:1\n}\n}\n@keyframes msgbox-fade-out{\n0%{transform:translateZ(0);opacity:1\n}\nto{transform:translate3d(0,-20px,0);opacity:0\n}\n}\n.v-modal{\n    position:fixed;\n    left:0;top:0;width:100%;\n    height:100%;\n    opacity:.5;\n    background:#000\n}\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _props = __webpack_require__(7);

	var _button = __webpack_require__(8);

	var _config = __webpack_require__(14);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefix = _config2.default.prefix;
	exports.default = {
	  name: 'vDialog',
	  props: (0, _props.defaultProps)({
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
	      default: function _default() {
	        return {};
	      }
	    },
	    disabled: false,
	    onDialog: function onDialog() {}
	  }),
	  components: {
	    vButton: _button.vButton
	  },
	  computed: {
	    btnLoading: function btnLoading() {
	      return this.loading;
	    },
	    value: function value() {
	      return this.isShow;
	    }
	  },
	  watch: {},
	  methods: {
	    handleAction: function handleAction(action) {
	      this.onDialog(action, this);
	    }
	  },
	  data: function data() {
	    return {
	      value: this.isShow,
	      btnLoading: this.loading,
	      prefixCls: prefix
	    };
	  }
	};

/***/ },
/* 7 */
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.vButton = undefined;

	var _button = __webpack_require__(9);

	var _button2 = _interopRequireDefault(_button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_button2.default.install = function (Vue) {
	  Vue.component(_button2.default.name, _button2.default);
	};
	exports.vButton = _button2.default;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader!vue-loader/lib/style-rewriter?id=data-v-35565755!scss-loader!vue-loader/lib/selector?type=styles&index=0!./button.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))

	/* script */
	__vue_exports__ = __webpack_require__(10)

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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _props = __webpack_require__(7);

	var _icon = __webpack_require__(11);

	var _config = __webpack_require__(14);

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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.vIcon = undefined;

	var _template = __webpack_require__(12);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_template2.default.install = function (Vue) {
	  Vue.component(_template2.default.name, _template2.default);
	};
	exports.vIcon = _template2.default;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader!vue-loader/lib/style-rewriter?id=data-v-09b0f518!scss-loader!vue-loader/lib/selector?type=styles&index=0!./index.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))

	/* script */
	__vue_exports__ = __webpack_require__(13)

	/* template */
	var __vue_template__ = __webpack_require__(15)
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _props = __webpack_require__(7);

	var _config = __webpack_require__(14);

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
/* 14 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = {
	  prefix: 'mioss'
	};

/***/ },
/* 15 */
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
/* 16 */
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('transition', {
	    attrs: {
	      "name": "msgbox-fade"
	    }
	  }, [(_vm.value) ? _c('div', {
	    staticStyle: {
	      "position": "fixed",
	      "top": "0",
	      "left": "0",
	      "right": "0",
	      "bottom": "0",
	      "width": "100%",
	      "height": "100%",
	      "z-index": "9999"
	    }
	  }, [(_vm.modal) ? _c('div', {
	    class: [_vm.prefixCls + '-modal-mask']
	  }) : _vm._e(), _vm._v(" "), _c('div', {
	    class: [_vm.prefixCls + '-modal-wrap']
	  }, [_c('div', {
	    class: [_vm.prefixCls + '-modal'],
	    style: (_vm.vstyle)
	  }, [_c('div', {
	    class: [_vm.prefixCls + '-modal-content']
	  }, [_c('button', {
	    class: [_vm.prefixCls + '-modal-close'],
	    on: {
	      "click": function($event) {
	        _vm.handleAction('cancel')
	      }
	    }
	  }, [_c('span', {
	    class: [_vm.prefixCls + '-modal-close-x']
	  })]), _vm._v(" "), (!!_vm.title) ? _c('div', {
	    class: [_vm.prefixCls + '-modal-header']
	  }, [_c('div', {
	    class: [_vm.prefixCls + '-modal-title']
	  }, [_vm._v(_vm._s(_vm.title))])]) : _vm._e(), _vm._v(" "), _c('div', {
	    class: [_vm.prefixCls + '-modal-body']
	  }, [_vm._t("default")], 2), _vm._v(" "), _c('div', {
	    class: [_vm.prefixCls + '-modal-footer']
	  }, [(_vm.isShowCancel) ? _c('v-button', {
	    attrs: {
	      "size": "large"
	    },
	    on: {
	      "click": function($event) {
	        _vm.handleAction('cancel')
	      }
	    }
	  }, [_c('span', [_vm._v("取消")])]) : _vm._e(), _vm._v(" "), _c('v-button', {
	    attrs: {
	      "type": "primary",
	      "size": "large",
	      "loading": _vm.btnLoading
	    },
	    on: {
	      "click": function($event) {
	        _vm.handleAction('confirm')
	      }
	    }
	  }, [_c('span', [_vm._v("确认")])])], 1)])])])]) : _vm._e()])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-25436fb9", module.exports)
	  }
	}

/***/ }
/******/ ])
});
;