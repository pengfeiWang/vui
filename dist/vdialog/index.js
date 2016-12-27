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
	__webpack_require__(2)
	__webpack_require__(6)

	/* script */
	__vue_exports__ = __webpack_require__(8)

	/* template */
	var __vue_template__ = __webpack_require__(23)
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
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-25436fb9!./../../../../node_modules/sass-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-25436fb9!./../../../../node_modules/sass-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
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
	exports.push([module.id, "\n.mioss-modal {\n  position: relative;\n  width: auto;\n  margin: 0 auto;\n  top: 100px;\n  padding-bottom: 24px;\n}\n.mioss-modal-wrap {\n    position: fixed;\n    overflow: auto;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1000;\n    -webkit-overflow-scrolling: touch;\n    outline: 0;\n    margin: 0 20px;\n}\n.mioss-modal-title {\n    margin: 0;\n    font-size: 14px;\n    line-height: 21px;\n    font-weight: bold;\n}\n.mioss-modal-content {\n    position: relative;\n    background-color: #fff;\n    border: 0;\n    border-radius: 6px;\n    background-clip: padding-box;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n}\n.mioss-modal-close {\n    cursor: pointer;\n    border: 0;\n    background: transparent;\n    position: absolute;\n    right: 18px;\n    top: 16px;\n    z-index: 10;\n    font-weight: 700;\n    line-height: 1;\n    text-decoration: none;\n    transition: color .3s ease;\n    color: #999;\n    outline: 0;\n}\n.mioss-modal-close-x {\n      display: block;\n      font-style: normal;\n      vertical-align: baseline;\n      text-align: center;\n      text-transform: none;\n      text-rendering: auto;\n      width: 14px;\n      height: 14px;\n      font-size: 14px;\n      line-height: 1;\n}\n.mioss-modal-close-x:before {\n        content: \"\\E633\";\n        display: block;\n        font-family: \"anticon\" !important;\n}\n.mioss-modal-close:focus, .mioss-modal-close:hover {\n      color: #444;\n      text-decoration: none;\n}\n.mioss-modal-header {\n    padding: 14px 16px;\n    border-radius: 6px 6px 0 0;\n    background: #fff;\n    color: #666;\n    border-bottom: 1px solid #e9e9e9;\n}\n.mioss-modal-body {\n    padding: 16px;\n    font-size: 12px;\n    line-height: 1.5;\n}\n.mioss-modal-footer {\n    border-top: 1px solid #e9e9e9;\n    padding: 10px 18px 10px 10px;\n    text-align: right;\n    border-radius: 0 0 6px 6px;\n}\n.mioss-modal-footer button + button {\n      margin-left: 8px;\n      margin-bottom: 0;\n}\n.mioss-modal.zoom-enter, .mioss-modal.zoom-appear {\n    animation-duration: 0.3s;\n    transform: none;\n    opacity: 0;\n}\n.mioss-modal-mask {\n    position: fixed;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    background-color: #373737;\n    background-color: rgba(55, 55, 55, 0.6);\n    height: 100%;\n    z-index: 1000;\n}\n.mioss-modal-mask-hidden {\n      display: none;\n}\n.mioss-modal-open {\n    overflow: hidden;\n}\n@media (max-width: 768px) {\n.mioss-modal {\n    width: auto !important;\n    margin: 10px;\n}\n.vertical-center-modal .mioss-modal {\n    -ms-flex: 1;\n        flex: 1;\n}\n}\n.mioss-confirm .mioss-modal-header {\n  display: none;\n}\n.mioss-confirm .mioss-modal-close {\n  display: none;\n}\n.mioss-confirm .mioss-modal-body {\n  padding: 30px 40px;\n}\n.mioss-confirm-body-wrapper {\n  zoom: 1;\n}\n.mioss-confirm-body-wrapper:before, .mioss-confirm-body-wrapper:after {\n    content: \" \";\n    display: table;\n}\n.mioss-confirm-body-wrapper:after {\n    clear: both;\n    visibility: hidden;\n    font-size: 0;\n    height: 0;\n}\n.mioss-confirm-body .mioss-confirm-title {\n  color: #666;\n  font-weight: bold;\n  font-size: 14px;\n}\n.mioss-confirm-body .mioss-confirm-content {\n  margin-left: 42px;\n  font-size: 12px;\n  color: #666;\n  margin-top: 8px;\n}\n.mioss-confirm-body > .mioss-icon {\n  font-size: 24px;\n  margin-right: 16px;\n  padding: 0 1px;\n  float: left;\n}\n.mioss-confirm .mioss-confirm-btns {\n  margin-top: 30px;\n  float: right;\n}\n.mioss-confirm .mioss-confirm-btns button + button {\n    margin-left: 10px;\n    margin-bottom: 0;\n}\n.mioss-confirm-error .mioss-confirm-body > .mioss-icon {\n  color: #f50;\n}\n.mioss-confirm-warning .mioss-confirm-body > .mioss-icon,\n.mioss-confirm-confirm .mioss-confirm-body > .mioss-icon {\n  color: #fa0;\n}\n.mioss-confirm-info .mioss-confirm-body > .mioss-icon {\n  color: #2db7f5;\n}\n.mioss-confirm-success .mioss-confirm-body > .mioss-icon {\n  color: #87d068;\n}\n", ""]);

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

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(7);
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.msgbox-fade-enter-active{animation:msgbox-fade-in .3s\n}\n.msgbox-fade-leave-active{animation:msgbox-fade-out .3s\n}\n@keyframes msgbox-fade-in{\n0%{transform:translate3d(0,-20px,0);opacity:0\n}\nto{transform:translateZ(0);opacity:1\n}\n}\n@keyframes msgbox-fade-out{\n0%{transform:translateZ(0);opacity:1\n}\nto{transform:translate3d(0,-20px,0);opacity:0\n}\n}\n.v-modal{\n    position:fixed;\n    left:0;top:0;width:100%;\n    height:100%;\n    opacity:.5;\n    background:#000\n}\n", ""]);

	// exports


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _props = __webpack_require__(9);

	var _button = __webpack_require__(10);

	var _config = __webpack_require__(20);

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
/* 9 */
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.vButton = undefined;

	var _button = __webpack_require__(11);

	var _button2 = _interopRequireDefault(_button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_button2.default.install = function (Vue) {
	  Vue.component(_button2.default.name, _button2.default);
	};
	exports.vButton = _button2.default;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(12)

	/* script */
	__vue_exports__ = __webpack_require__(14)

	/* template */
	var __vue_template__ = __webpack_require__(22)
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-35565755!./../../../../node_modules/sass-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./button.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-35565755!./../../../../node_modules/sass-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./button.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.mioss-btn {\n  display: inline-block;\n  margin-bottom: 0;\n  font-weight: 500;\n  text-align: center;\n  vertical-align: middle;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  line-height: 1.5;\n  padding: 4px 15px;\n  font-size: 12px;\n  border-radius: 6px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  position: relative;\n  color: #666;\n  background-color: #f7f7f7;\n  border-color: #d9d9d9;\n}\n.mioss-btn > .mioss-icon {\n    line-height: 1;\n}\n.mioss-btn, .mioss-btn:active, .mioss-btn:focus {\n    outline: 0;\n}\n.mioss-btn:not([disabled]):hover {\n    text-decoration: none;\n}\n.mioss-btn:not([disabled]):active {\n    outline: 0;\n    transition: none;\n}\n.mioss-btn.disabled, .mioss-btn[disabled] {\n    cursor: not-allowed;\n}\n.mioss-btn.disabled > *, .mioss-btn[disabled] > * {\n      pointer-events: none;\n}\n.mioss-btn-lg {\n    padding: 4px 15px 5px 15px;\n    font-size: 14px;\n    border-radius: 6px;\n}\n.mioss-btn-sm {\n    padding: 1px 7px;\n    font-size: 12px;\n    border-radius: 4px;\n}\n.mioss-btn > a:only-child {\n    color: currentColor;\n}\n.mioss-btn > a:only-child:after {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      background: transparent;\n}\n.mioss-btn:hover, .mioss-btn:focus {\n    color: #57c5f7;\n    background-color: #f7f7f7;\n    border-color: #57c5f7;\n}\n.mioss-btn:hover > a:only-child, .mioss-btn:focus > a:only-child {\n      color: currentColor;\n}\n.mioss-btn:hover > a:only-child:after, .mioss-btn:focus > a:only-child:after {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        background: transparent;\n}\n.mioss-btn:active, .mioss-btn.active {\n    color: #2baee9;\n    background-color: #f7f7f7;\n    border-color: #2baee9;\n}\n.mioss-btn:active > a:only-child, .mioss-btn.active > a:only-child {\n      color: currentColor;\n}\n.mioss-btn:active > a:only-child:after, .mioss-btn.active > a:only-child:after {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        background: transparent;\n}\n.mioss-btn.disabled, .mioss-btn.disabled:hover, .mioss-btn.disabled:focus, .mioss-btn.disabled:active, .mioss-btn.disabled.active, .mioss-btn[disabled], .mioss-btn[disabled]:hover, .mioss-btn[disabled]:focus, .mioss-btn[disabled]:active, .mioss-btn[disabled].active {\n    color: #ccc;\n    background-color: #f7f7f7;\n    border-color: #d9d9d9;\n}\n.mioss-btn.disabled > a:only-child, .mioss-btn.disabled:hover > a:only-child, .mioss-btn.disabled:focus > a:only-child, .mioss-btn.disabled:active > a:only-child, .mioss-btn.disabled.active > a:only-child, .mioss-btn[disabled] > a:only-child, .mioss-btn[disabled]:hover > a:only-child, .mioss-btn[disabled]:focus > a:only-child, .mioss-btn[disabled]:active > a:only-child, .mioss-btn[disabled].active > a:only-child {\n      color: currentColor;\n}\n.mioss-btn.disabled > a:only-child:after, .mioss-btn.disabled:hover > a:only-child:after, .mioss-btn.disabled:focus > a:only-child:after, .mioss-btn.disabled:active > a:only-child:after, .mioss-btn.disabled.active > a:only-child:after, .mioss-btn[disabled] > a:only-child:after, .mioss-btn[disabled]:hover > a:only-child:after, .mioss-btn[disabled]:focus > a:only-child:after, .mioss-btn[disabled]:active > a:only-child:after, .mioss-btn[disabled].active > a:only-child:after {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        background: transparent;\n}\n.mioss-btn:hover, .mioss-btn:focus, .mioss-btn:active, .mioss-btn.active {\n    background: #fff;\n}\n.mioss-btn-primary {\n  color: #fff;\n  background-color: #2db7f5;\n  border-color: #2db7f5;\n}\n.mioss-btn-primary > a:only-child {\n    color: currentColor;\n}\n.mioss-btn-primary > a:only-child:after {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      background: transparent;\n}\n.mioss-btn-primary:hover, .mioss-btn-primary:focus {\n    color: #fff;\n    background-color: #57c5f7;\n    border-color: #57c5f7;\n}\n.mioss-btn-primary:hover > a:only-child, .mioss-btn-primary:focus > a:only-child {\n      color: currentColor;\n}\n.mioss-btn-primary:hover > a:only-child:after, .mioss-btn-primary:focus > a:only-child:after {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        background: transparent;\n}\n.mioss-btn-primary:active, .mioss-btn-primary.active {\n    color: #fff;\n    background-color: #2baee9;\n    border-color: #2baee9;\n}\n.mioss-btn-primary:active > a:only-child, .mioss-btn-primary.active > a:only-child {\n      color: currentColor;\n}\n.mioss-btn-primary:active > a:only-child:after, .mioss-btn-primary.active > a:only-child:after {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        background: transparent;\n}\n.mioss-btn-primary.disabled, .mioss-btn-primary.disabled:hover, .mioss-btn-primary.disabled:focus, .mioss-btn-primary.disabled:active, .mioss-btn-primary.disabled.active, .mioss-btn-primary[disabled], .mioss-btn-primary[disabled]:hover, .mioss-btn-primary[disabled]:focus, .mioss-btn-primary[disabled]:active, .mioss-btn-primary[disabled].active {\n    color: #ccc;\n    background-color: #f7f7f7;\n    border-color: #d9d9d9;\n}\n.mioss-btn-primary.disabled > a:only-child, .mioss-btn-primary.disabled:hover > a:only-child, .mioss-btn-primary.disabled:focus > a:only-child, .mioss-btn-primary.disabled:active > a:only-child, .mioss-btn-primary.disabled.active > a:only-child, .mioss-btn-primary[disabled] > a:only-child, .mioss-btn-primary[disabled]:hover > a:only-child, .mioss-btn-primary[disabled]:focus > a:only-child, .mioss-btn-primary[disabled]:active > a:only-child, .mioss-btn-primary[disabled].active > a:only-child {\n      color: currentColor;\n}\n.mioss-btn-primary.disabled > a:only-child:after, .mioss-btn-primary.disabled:hover > a:only-child:after, .mioss-btn-primary.disabled:focus > a:only-child:after, .mioss-btn-primary.disabled:active > a:only-child:after, .mioss-btn-primary.disabled.active > a:only-child:after, .mioss-btn-primary[disabled] > a:only-child:after, .mioss-btn-primary[disabled]:hover > a:only-child:after, .mioss-btn-primary[disabled]:focus > a:only-child:after, .mioss-btn-primary[disabled]:active > a:only-child:after, .mioss-btn-primary[disabled].active > a:only-child:after {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        background: transparent;\n}\n.mioss-btn-group :not(:first-child):not(:last-child) {\n  border-right-color: shade(#2db7f5, 5%);\n  border-left-color: shade(#2db7f5, 5%);\n}\n.mioss-btn-group .mioss-btn-primary:first-child .mioss-btn-primary:not(:last-child) {\n  border-right-color: shade(#2db7f5, 5%);\n}\n.mioss-btn-group .mioss-btn-primary:first-child .mioss-btn-primary:not(:last-child) .mioss-btn-primary[disabled] {\n    border-right-color: #d9d9d9;\n}\n.mioss-btn-group .mioss-btn-primary:last-child:not(:first-child),\n.mioss-btn-group .mioss-btn-primary + .mioss-btn {\n  border-left-color: shade(#2db7f5, 5%);\n}\n.mioss-btn-group .mioss-btn-primary:last-child:not(:first-child) .mioss-btn-primary[disabled],\n  .mioss-btn-group .mioss-btn-primary + .mioss-btn .mioss-btn-primary[disabled] {\n    border-left-color: #d9d9d9;\n}\n.mioss-btn-ghost {\n  color: #666;\n  background-color: transparent;\n  border-color: #d9d9d9;\n}\n.mioss-btn-ghost > a:only-child {\n    color: currentColor;\n}\n.mioss-btn-ghost > a:only-child:after {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      background: transparent;\n}\n.mioss-btn-ghost:hover, .mioss-btn-ghost:focus {\n    color: #57c5f7;\n    background-color: transparent;\n    border-color: #57c5f7;\n}\n.mioss-btn-ghost:hover > a:only-child, .mioss-btn-ghost:focus > a:only-child {\n      color: currentColor;\n}\n.mioss-btn-ghost:hover > a:only-child:after, .mioss-btn-ghost:focus > a:only-child:after {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        background: transparent;\n}\n.mioss-btn-ghost:active, .mioss-btn-ghost.active {\n    color: #2baee9;\n    background-color: transparent;\n    border-color: #2baee9;\n}\n.mioss-btn-ghost:active > a:only-child, .mioss-btn-ghost.active > a:only-child {\n      color: currentColor;\n}\n.mioss-btn-ghost:active > a:only-child:after, .mioss-btn-ghost.active > a:only-child:after {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        background: transparent;\n}\n.mioss-btn-ghost.disabled, .mioss-btn-ghost.disabled:hover, .mioss-btn-ghost.disabled:focus, .mioss-btn-ghost.disabled:active, .mioss-btn-ghost.disabled.active, .mioss-btn-ghost[disabled], .mioss-btn-ghost[disabled]:hover, .mioss-btn-ghost[disabled]:focus, .mioss-btn-ghost[disabled]:active, .mioss-btn-ghost[disabled].active {\n    color: #ccc;\n    background-color: #f7f7f7;\n    border-color: #d9d9d9;\n}\n.mioss-btn-ghost.disabled > a:only-child, .mioss-btn-ghost.disabled:hover > a:only-child, .mioss-btn-ghost.disabled:focus > a:only-child, .mioss-btn-ghost.disabled:active > a:only-child, .mioss-btn-ghost.disabled.active > a:only-child, .mioss-btn-ghost[disabled] > a:only-child, .mioss-btn-ghost[disabled]:hover > a:only-child, .mioss-btn-ghost[disabled]:focus > a:only-child, .mioss-btn-ghost[disabled]:active > a:only-child, .mioss-btn-ghost[disabled].active > a:only-child {\n      color: currentColor;\n}\n.mioss-btn-ghost.disabled > a:only-child:after, .mioss-btn-ghost.disabled:hover > a:only-child:after, .mioss-btn-ghost.disabled:focus > a:only-child:after, .mioss-btn-ghost.disabled:active > a:only-child:after, .mioss-btn-ghost.disabled.active > a:only-child:after, .mioss-btn-ghost[disabled] > a:only-child:after, .mioss-btn-ghost[disabled]:hover > a:only-child:after, .mioss-btn-ghost[disabled]:focus > a:only-child:after, .mioss-btn-ghost[disabled]:active > a:only-child:after, .mioss-btn-ghost[disabled].active > a:only-child:after {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        background: transparent;\n}\n.mioss-btn-dashed {\n  color: #666;\n  background-color: transparent;\n  border-color: #d9d9d9;\n  border-style: dashed;\n}\n.mioss-btn-dashed > a:only-child {\n    color: currentColor;\n}\n.mioss-btn-dashed > a:only-child:after {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      background: transparent;\n}\n.mioss-btn-dashed:hover, .mioss-btn-dashed:focus {\n    color: #57c5f7;\n    background-color: transparent;\n    border-color: #57c5f7;\n}\n.mioss-btn-dashed:hover > a:only-child, .mioss-btn-dashed:focus > a:only-child {\n      color: currentColor;\n}\n.mioss-btn-dashed:hover > a:only-child:after, .mioss-btn-dashed:focus > a:only-child:after {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        background: transparent;\n}\n.mioss-btn-dashed:active, .mioss-btn-dashed.active {\n    color: #2baee9;\n    background-color: transparent;\n    border-color: #2baee9;\n}\n.mioss-btn-dashed:active > a:only-child, .mioss-btn-dashed.active > a:only-child {\n      color: currentColor;\n}\n.mioss-btn-dashed:active > a:only-child:after, .mioss-btn-dashed.active > a:only-child:after {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        background: transparent;\n}\n.mioss-btn-dashed.disabled, .mioss-btn-dashed.disabled:hover, .mioss-btn-dashed.disabled:focus, .mioss-btn-dashed.disabled:active, .mioss-btn-dashed.disabled.active, .mioss-btn-dashed[disabled], .mioss-btn-dashed[disabled]:hover, .mioss-btn-dashed[disabled]:focus, .mioss-btn-dashed[disabled]:active, .mioss-btn-dashed[disabled].active {\n    color: #ccc;\n    background-color: #f7f7f7;\n    border-color: #d9d9d9;\n}\n.mioss-btn-dashed.disabled > a:only-child, .mioss-btn-dashed.disabled:hover > a:only-child, .mioss-btn-dashed.disabled:focus > a:only-child, .mioss-btn-dashed.disabled:active > a:only-child, .mioss-btn-dashed.disabled.active > a:only-child, .mioss-btn-dashed[disabled] > a:only-child, .mioss-btn-dashed[disabled]:hover > a:only-child, .mioss-btn-dashed[disabled]:focus > a:only-child, .mioss-btn-dashed[disabled]:active > a:only-child, .mioss-btn-dashed[disabled].active > a:only-child {\n      color: currentColor;\n}\n.mioss-btn-dashed.disabled > a:only-child:after, .mioss-btn-dashed.disabled:hover > a:only-child:after, .mioss-btn-dashed.disabled:focus > a:only-child:after, .mioss-btn-dashed.disabled:active > a:only-child:after, .mioss-btn-dashed.disabled.active > a:only-child:after, .mioss-btn-dashed[disabled] > a:only-child:after, .mioss-btn-dashed[disabled]:hover > a:only-child:after, .mioss-btn-dashed[disabled]:focus > a:only-child:after, .mioss-btn-dashed[disabled]:active > a:only-child:after, .mioss-btn-dashed[disabled].active > a:only-child:after {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        background: transparent;\n}\n.mioss-btn-circle,\n.mioss-btn-circle-outline {\n  width: 28px;\n  height: 28px;\n  padding: 0;\n  font-size: 14px;\n  border-radius: 50%;\n}\n.mioss-btn-circle.mioss-btn-lg,\n  .mioss-btn-circle-outline.mioss-btn-lg {\n    width: 32px;\n    height: 32px;\n    padding: 0;\n    font-size: 16px;\n    border-radius: 50%;\n}\n.mioss-btn-circle.mioss-btn-sm,\n  .mioss-btn-circle-outline.mioss-btn-sm {\n    width: 22px;\n    height: 22px;\n    padding: 0;\n    font-size: 12px;\n    border-radius: 50%;\n}\n.mioss-btn:before {\n  position: absolute;\n  top: -1px;\n  left: -1px;\n  bottom: -1px;\n  right: -1px;\n  background: #fff;\n  opacity: 0.35;\n  content: '';\n  border-radius: inherit;\n  z-index: 1;\n  transition: opacity .2s;\n  pointer-events: none;\n  display: none;\n}\n.mioss-btn-loading {\n  padding-left: 29px;\n  pointer-events: none;\n  position: relative;\n}\n.mioss-btn-loading .mioss-icon {\n    margin-left: -14px;\n    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.mioss-btn-loading .mioss-btn:before {\n    display: block;\n}\n.mioss-btn-sm.mioss-btn-loading {\n  padding-left: 24px;\n}\n.mioss-btn-sm.mioss-btn-loading .mioss-icon {\n    margin-left: -17px;\n}\n.mioss-btn-group {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n.mioss-btn-group > .mioss-btn {\n    position: relative;\n    float: left;\n}\n.mioss-btn-group > .mioss-btn:hover, .mioss-btn-group > .mioss-btn:focus, .mioss-btn-group > .mioss-btn:active, .mioss-btn-group > .mioss-btn.active {\n      z-index: 2;\n}\n.mioss-btn-group-lg > .mioss-btn {\n    padding: 4px 15px 5px 15px;\n    font-size: 14px;\n    border-radius: 6px;\n}\n.mioss-btn-group-sm > .mioss-btn {\n    padding: 1px 7px;\n    font-size: 12px;\n    border-radius: 4px;\n}\n.mioss-btn-group-sm > .mioss-btn > .mioss-icon {\n      font-size: 12px;\n}\n.mioss-btn-group .mioss-btn + .mioss-btn,\n  .mioss-btn + .mioss-btn-group,\n  .mioss-btn-group + .mioss-btn,\n  .mioss-btn-group + .mioss-btn-group {\n    margin-left: -1px;\n}\n.mioss-btn-group .mioss-btn:not(:first-child):not(:last-child) {\n    border-radius: 0;\n    padding-left: 8px;\n    padding-right: 8px;\n}\n.mioss-btn-group > .mioss-btn:first-child {\n    margin-left: 0;\n}\n.mioss-btn-group > .mioss-btn:first-child:not(:last-child) {\n      border-bottom-right-radius: 0;\n      border-top-right-radius: 0;\n      padding-right: 8px;\n}\n.mioss-btn-group > .mioss-btn:last-child:not(:first-child) {\n    border-bottom-left-radius: 0;\n    border-top-left-radius: 0;\n    padding-left: 8px;\n}\n.mioss-btn-group > .mioss-btn-group {\n    float: left;\n}\n.mioss-btn-group > .mioss-btn-group:not(:first-child):not(:last-child) > .mioss-btn {\n    border-radius: 0;\n}\n.mioss-btn-group > .mioss-btn-group:first-child:not(:last-child) > .mioss-btn:last-child {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0;\n    padding-right: 8px;\n}\n.mioss-btn-group > .mioss-btn-group:last-child:not(:first-child) > .mioss-btn:first-child {\n    border-bottom-left-radius: 0;\n    border-top-left-radius: 0;\n    padding-left: 8px;\n}\n.mioss-btn:not(.mioss-btn-circle):not(.mioss-btn-circle-outline).mioss-btn-icon-only {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.mioss-btn > .mioss-icon + span,\n.mioss-btn > span + .mioss-icon {\n  margin-left: 0.5em;\n}\n.mioss-btn-clicked:after {\n  content: '';\n  position: absolute;\n  top: -1px;\n  left: -1px;\n  bottom: -1px;\n  right: -1px;\n  border-radius: inherit;\n  border: 0 solid #2db7f5;\n  opacity: 0.4;\n  animation: buttonEffect 0.36s ease-out forwards;\n  display: block;\n}\n@keyframes buttonEffect {\nto {\n    opacity: 0;\n    top: -6px;\n    left: -6px;\n    bottom: -6px;\n    right: -6px;\n    border-width: 6px;\n}\n}\n", ""]);

	// exports


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _props = __webpack_require__(9);

	var _icon = __webpack_require__(15);

	var _config = __webpack_require__(20);

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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.vIcon = undefined;

	var _template = __webpack_require__(16);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_template2.default.install = function (Vue) {
	  Vue.component(_template2.default.name, _template2.default);
	};
	exports.vIcon = _template2.default;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(17)

	/* script */
	__vue_exports__ = __webpack_require__(19)

	/* template */
	var __vue_template__ = __webpack_require__(21)
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(18);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-09b0f518!./../../../../node_modules/sass-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-09b0f518!./../../../../node_modules/sass-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n@font-face {\n  font-family: 'anticon';\n  src: url(\"https://at.alicdn.com/t/font_1473840929_824008.eot\");\n  /* IE9*/\n  src: url(\"https://at.alicdn.com/t/font_1473840929_824008.eot?#iefix\") format(\"embedded-opentype\"), url(\"https://at.alicdn.com/t/font_1473840929_824008.woff\") format(\"woff\"), url(\"https://at.alicdn.com/t/font_1473840929_824008.ttf\") format(\"truetype\"), url(\"https://at.alicdn.com/t/font_1473840929_824008.svg#iconfont\") format(\"svg\");\n  /* iOS 4.1- */\n}\n.mioss-icon {\n  display: inline-block;\n  font-style: normal;\n  vertical-align: baseline;\n  text-align: center;\n  text-transform: none;\n  text-rendering: auto;\n  line-height: 1;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.mioss-icon:before {\n    display: block;\n    font-family: \"anticon\" !important;\n}\n.mioss-icon-step-forward:before {\n  content: \"\\E600\";\n}\n.mioss-icon-step-backward:before {\n  content: \"\\E601\";\n}\n.mioss-icon-forward:before {\n  content: \"\\E602\";\n}\n.mioss-icon-backward:before {\n  content: \"\\E603\";\n}\n.mioss-icon-caret-right:before {\n  content: \"\\E604\";\n}\n.mioss-icon-caret-left:before {\n  content: \"\\E605\";\n}\n.mioss-icon-caret-down:before {\n  content: \"\\E606\";\n}\n.mioss-icon-caret-up:before {\n  content: \"\\E607\";\n}\n.mioss-icon-right-circle:before {\n  content: \"\\E608\";\n}\n.mioss-icon-circle-right:before {\n  content: \"\\E608\";\n}\n.mioss-icon-caret-circle-right:before {\n  content: \"\\E608\";\n}\n.mioss-icon-left-circle:before {\n  content: \"\\E609\";\n}\n.mioss-icon-circle-left:before {\n  content: \"\\E609\";\n}\n.mioss-icon-caret-circle-left:before {\n  content: \"\\E609\";\n}\n.mioss-icon-up-circle:before {\n  content: \"\\E60A\";\n}\n.mioss-icon-circle-up:before {\n  content: \"\\E60A\";\n}\n.mioss-icon-caret-circle-up:before {\n  content: \"\\E60A\";\n}\n.mioss-icon-down-circle:before {\n  content: \"\\E60B\";\n}\n.mioss-icon-circle-down:before {\n  content: \"\\E60B\";\n}\n.mioss-icon-caret-circle-down:before {\n  content: \"\\E60B\";\n}\n.mioss-icon-right-circle-o:before {\n  content: \"\\E60C\";\n}\n.mioss-icon-circle-o-right:before {\n  content: \"\\E60C\";\n}\n.mioss-icon-caret-circle-o-right:before {\n  content: \"\\E60C\";\n}\n.mioss-icon-left-circle-o:before {\n  content: \"\\E60D\";\n}\n.mioss-icon-circle-o-left:before {\n  content: \"\\E60D\";\n}\n.mioss-icon-caret-circle-o-left:before {\n  content: \"\\E60D\";\n}\n.mioss-icon-up-circle-o:before {\n  content: \"\\E60E\";\n}\n.mioss-icon-circle-o-up:before {\n  content: \"\\E60E\";\n}\n.mioss-icon-caret-circle-o-up:before {\n  content: \"\\E60E\";\n}\n.mioss-icon-down-circle-o:before {\n  content: \"\\E60F\";\n}\n.mioss-icon-circle-o-down:before {\n  content: \"\\E60F\";\n}\n.mioss-icon-caret-circle-o-down:before {\n  content: \"\\E60F\";\n}\n.mioss-icon-verticle-left:before {\n  content: \"\\E610\";\n}\n.mioss-icon-verticle-right:before {\n  content: \"\\E611\";\n}\n.mioss-icon-rollback:before {\n  content: \"\\E612\";\n}\n.mioss-icon-retweet:before {\n  content: \"\\E613\";\n}\n.mioss-icon-shrink:before {\n  content: \"\\E614\";\n}\n.mioss-icon-arrows-alt:before {\n  content: \"\\E615\";\n}\n.mioss-icon-arrow-salt:before {\n  content: \"\\E615\";\n}\n.mioss-icon-reload:before {\n  content: \"\\E616\";\n}\n.mioss-icon-double-right:before {\n  content: \"\\E617\";\n}\n.mioss-icon-double-left:before {\n  content: \"\\E618\";\n}\n.mioss-icon-arrow-down:before {\n  content: \"\\E619\";\n}\n.mioss-icon-arrow-up:before {\n  content: \"\\E61A\";\n}\n.mioss-icon-arrow-right:before {\n  content: \"\\E61B\";\n}\n.mioss-icon-arrow-left:before {\n  content: \"\\E61C\";\n}\n.mioss-icon-down:before {\n  content: \"\\E61D\";\n}\n.mioss-icon-up:before {\n  content: \"\\E61E\";\n}\n.mioss-icon-right:before {\n  content: \"\\E61F\";\n}\n.mioss-icon-left:before {\n  content: \"\\E620\";\n}\n.mioss-icon-minus-square-o:before {\n  content: \"\\E621\";\n}\n.mioss-icon-minus-circle:before {\n  content: \"\\E622\";\n}\n.mioss-icon-minus-circle-o:before {\n  content: \"\\E623\";\n}\n.mioss-icon-minus:before {\n  content: \"\\E624\";\n}\n.mioss-icon-plus-circle-o:before {\n  content: \"\\E625\";\n}\n.mioss-icon-plus-circle:before {\n  content: \"\\E626\";\n}\n.mioss-icon-plus:before {\n  content: \"\\E627\";\n}\n.mioss-icon-info-circle:before {\n  content: \"\\E628\";\n}\n.mioss-icon-info-circle-o:before {\n  content: \"\\E629\";\n}\n.mioss-icon-info:before {\n  content: \"\\E62A\";\n}\n.mioss-icon-exclamation:before {\n  content: \"\\E62B\";\n}\n.mioss-icon-exclamation-circle:before {\n  content: \"\\E62C\";\n}\n.mioss-icon-exclamation-circle-o:before {\n  content: \"\\E62D\";\n}\n.mioss-icon-close-circle:before {\n  content: \"\\E62E\";\n}\n.mioss-icon-cross-circle:before {\n  content: \"\\E62E\";\n}\n.mioss-icon-close-circle-o:before {\n  content: \"\\E62F\";\n}\n.mioss-icon-cross-circle-o:before {\n  content: \"\\E62F\";\n}\n.mioss-icon-check-circle:before {\n  content: \"\\E630\";\n}\n.mioss-icon-check-circle-o:before {\n  content: \"\\E631\";\n}\n.mioss-icon-check:before {\n  content: \"\\E632\";\n}\n.mioss-icon-close:before {\n  content: \"\\E633\";\n}\n.mioss-icon-cross:before {\n  content: \"\\E633\";\n}\n.mioss-icon-customer-service:before {\n  content: \"\\E634\";\n}\n.mioss-icon-customerservice:before {\n  content: \"\\E634\";\n}\n.mioss-icon-credit-card:before {\n  content: \"\\E635\";\n}\n.mioss-icon-code-o:before {\n  content: \"\\E636\";\n}\n.mioss-icon-book:before {\n  content: \"\\E637\";\n}\n.mioss-icon-bar-chart:before {\n  content: \"\\E638\";\n}\n.mioss-icon-bars:before {\n  content: \"\\E639\";\n}\n.mioss-icon-question:before {\n  content: \"\\E63A\";\n}\n.mioss-icon-question-circle:before {\n  content: \"\\E63B\";\n}\n.mioss-icon-question-circle-o:before {\n  content: \"\\E63C\";\n}\n.mioss-icon-pause:before {\n  content: \"\\E63D\";\n}\n.mioss-icon-pause-circle:before {\n  content: \"\\E63E\";\n}\n.mioss-icon-pause-circle-o:before {\n  content: \"\\E63F\";\n}\n.mioss-icon-clock-circle:before {\n  content: \"\\E640\";\n}\n.mioss-icon-clock-circle-o:before {\n  content: \"\\E641\";\n}\n.mioss-icon-swap:before {\n  content: \"\\E642\";\n}\n.mioss-icon-swap-left:before {\n  content: \"\\E643\";\n}\n.mioss-icon-swap-right:before {\n  content: \"\\E644\";\n}\n.mioss-icon-plus-square-o:before {\n  content: \"\\E645\";\n}\n.mioss-icon-frown:before {\n  content: \"\\E646\";\n}\n.mioss-icon-frown-circle:before {\n  content: \"\\E646\";\n}\n.mioss-icon-ellipsis:before {\n  content: \"\\E647\";\n}\n.mioss-icon-copy:before {\n  content: \"\\E648\";\n}\n.mioss-icon-menu-fold:before {\n  content: \"\\E658\";\n}\n.mioss-icon-mail:before {\n  content: \"\\E659\";\n}\n.mioss-icon-logout:before {\n  content: \"\\E65A\";\n}\n.mioss-icon-link:before {\n  content: \"\\E65B\";\n}\n.mioss-icon-area-chart:before {\n  content: \"\\E65C\";\n}\n.mioss-icon-line-chart:before {\n  content: \"\\E65D\";\n}\n.mioss-icon-home:before {\n  content: \"\\E65E\";\n}\n.mioss-icon-laptop:before {\n  content: \"\\E65F\";\n}\n.mioss-icon-star:before {\n  content: \"\\E660\";\n}\n.mioss-icon-star-o:before {\n  content: \"\\E661\";\n}\n.mioss-icon-folder:before {\n  content: \"\\E662\";\n}\n.mioss-icon-filter:before {\n  content: \"\\E663\";\n}\n.mioss-icon-file:before {\n  content: \"\\E664\";\n}\n.mioss-icon-exception:before {\n  content: \"\\E665\";\n}\n.mioss-icon-meh:before {\n  content: \"\\E666\";\n}\n.mioss-icon-meh-circle:before {\n  content: \"\\E666\";\n}\n.mioss-icon-meh-o:before {\n  content: \"\\E667\";\n}\n.mioss-icon-shopping-cart:before {\n  content: \"\\E668\";\n}\n.mioss-icon-save:before {\n  content: \"\\E669\";\n}\n.mioss-icon-user:before {\n  content: \"\\E66A\";\n}\n.mioss-icon-video-camera:before {\n  content: \"\\E66B\";\n}\n.mioss-icon-to-top:before {\n  content: \"\\E66C\";\n}\n.mioss-icon-team:before {\n  content: \"\\E66D\";\n}\n.mioss-icon-tablet:before {\n  content: \"\\E66E\";\n}\n.mioss-icon-solution:before {\n  content: \"\\E66F\";\n}\n.mioss-icon-search:before {\n  content: \"\\E670\";\n}\n.mioss-icon-share-alt:before {\n  content: \"\\E671\";\n}\n.mioss-icon-setting:before {\n  content: \"\\E672\";\n}\n.mioss-icon-poweroff:before {\n  content: \"\\E6D5\";\n}\n.mioss-icon-picture:before {\n  content: \"\\E674\";\n}\n.mioss-icon-phone:before {\n  content: \"\\E675\";\n}\n.mioss-icon-paper-clip:before {\n  content: \"\\E676\";\n}\n.mioss-icon-notification:before {\n  content: \"\\E677\";\n}\n.mioss-icon-mobile:before {\n  content: \"\\E678\";\n}\n.mioss-icon-menu-unfold:before {\n  content: \"\\E679\";\n}\n.mioss-icon-inbox:before {\n  content: \"\\E67A\";\n}\n.mioss-icon-lock:before {\n  content: \"\\E67B\";\n}\n.mioss-icon-qrcode:before {\n  content: \"\\E67C\";\n}\n.mioss-icon-play-circle:before {\n  content: \"\\E6D0\";\n}\n.mioss-icon-play-circle-o:before {\n  content: \"\\E6D1\";\n}\n.mioss-icon-tag:before {\n  content: \"\\E6D2\";\n}\n.mioss-icon-tag-o:before {\n  content: \"\\E6D3\";\n}\n.mioss-icon-tags:before {\n  content: \"\\E67D\";\n}\n.mioss-icon-tags-o:before {\n  content: \"\\E67E\";\n}\n.mioss-icon-cloud-o:before {\n  content: \"\\E67F\";\n}\n.mioss-icon-cloud:before {\n  content: \"\\E680\";\n}\n.mioss-icon-cloud-upload:before {\n  content: \"\\E681\";\n}\n.mioss-icon-cloud-download:before {\n  content: \"\\E682\";\n}\n.mioss-icon-cloud-download-o:before {\n  content: \"\\E683\";\n}\n.mioss-icon-cloud-upload-o:before {\n  content: \"\\E684\";\n}\n.mioss-icon-environment:before {\n  content: \"\\E685\";\n}\n.mioss-icon-environment-o:before {\n  content: \"\\E686\";\n}\n.mioss-icon-eye:before {\n  content: \"\\E687\";\n}\n.mioss-icon-eye-o:before {\n  content: \"\\E688\";\n}\n.mioss-icon-camera:before {\n  content: \"\\E689\";\n}\n.mioss-icon-camera-o:before {\n  content: \"\\E68A\";\n}\n.mioss-icon-windows:before {\n  content: \"\\E68B\";\n}\n.mioss-icon-apple:before {\n  content: \"\\E68C\";\n}\n.mioss-icon-apple-o:before {\n  content: \"\\E6D4\";\n}\n.mioss-icon-android:before {\n  content: \"\\E68D\";\n}\n.mioss-icon-aliwangwang:before {\n  content: \"\\E68E\";\n}\n.mioss-icon-aliwangwang-o:before {\n  content: \"\\E68F\";\n}\n.mioss-icon-export:before {\n  content: \"\\E691\";\n}\n.mioss-icon-edit:before {\n  content: \"\\E692\";\n}\n.mioss-icon-circle-down-o:before {\n  content: \"\\E693\";\n}\n.mioss-icon-circle-down-:before {\n  content: \"\\E694\";\n}\n.mioss-icon-appstore-o:before {\n  content: \"\\E695\";\n}\n.mioss-icon-appstore:before {\n  content: \"\\E696\";\n}\n.mioss-icon-scan:before {\n  content: \"\\E697\";\n}\n.mioss-icon-file-text:before {\n  content: \"\\E698\";\n}\n.mioss-icon-folder-open:before {\n  content: \"\\E699\";\n}\n.mioss-icon-hdd:before {\n  content: \"\\E69A\";\n}\n.mioss-icon-ie:before {\n  content: \"\\E69B\";\n}\n.mioss-icon-file-jpg:before {\n  content: \"\\E69C\";\n}\n.mioss-icon-like:before {\n  content: \"\\E69D\";\n}\n.mioss-icon-dislike:before {\n  content: \"\\E69E\";\n}\n.mioss-icon-delete:before {\n  content: \"\\E69F\";\n}\n.mioss-icon-enter:before {\n  content: \"\\E6A0\";\n}\n.mioss-icon-pushpin-o:before {\n  content: \"\\E6A1\";\n}\n.mioss-icon-pushpin:before {\n  content: \"\\E6A2\";\n}\n.mioss-icon-heart:before {\n  content: \"\\E6A3\";\n}\n.mioss-icon-heart-o:before {\n  content: \"\\E6A4\";\n}\n.mioss-icon-pay-circle:before {\n  content: \"\\E6A5\";\n}\n.mioss-icon-pay-circle-o:before {\n  content: \"\\E6A6\";\n}\n.mioss-icon-smile:before {\n  content: \"\\E6A7\";\n}\n.mioss-icon-smile-circle:before {\n  content: \"\\E6A7\";\n}\n.mioss-icon-smile-o:before {\n  content: \"\\E6A8\";\n}\n.mioss-icon-frown-o:before {\n  content: \"\\E6A9\";\n}\n.mioss-icon-calculator:before {\n  content: \"\\E6AA\";\n}\n.mioss-icon-message:before {\n  content: \"\\E6AB\";\n}\n.mioss-icon-chrome:before {\n  content: \"\\E6AC\";\n}\n.mioss-icon-github:before {\n  content: \"\\E6AD\";\n}\n.mioss-icon-file-unknown:before {\n  content: \"\\E6AF\";\n}\n.mioss-icon-file-excel:before {\n  content: \"\\E6B0\";\n}\n.mioss-icon-file-ppt:before {\n  content: \"\\E6B1\";\n}\n.mioss-icon-file-word:before {\n  content: \"\\E6B2\";\n}\n.mioss-icon-file-pdf:before {\n  content: \"\\E6B3\";\n}\n.mioss-icon-desktop:before {\n  content: \"\\E6B4\";\n}\n.mioss-icon-upload:before {\n  content: \"\\E6B6\";\n}\n.mioss-icon-download:before {\n  content: \"\\E6B7\";\n}\n.mioss-icon-pie-chart:before {\n  content: \"\\E6B8\";\n}\n.mioss-icon-unlock:before {\n  content: \"\\E6BA\";\n}\n.mioss-icon-calendar:before {\n  content: \"\\E6BB\";\n}\n.mioss-icon-windows-o:before {\n  content: \"\\E6BC\";\n}\n.mioss-icon-dot-chart:before {\n  content: \"\\E6BD\";\n}\n.mioss-icon-bar-chart:before {\n  content: \"\\E6BE\";\n}\n.mioss-icon-code:before {\n  content: \"\\E6BF\";\n}\n.mioss-icon-plus-square:before {\n  content: \"\\E6C0\";\n}\n.mioss-icon-minus-square:before {\n  content: \"\\E6C1\";\n}\n.mioss-icon-close-square:before {\n  content: \"\\E6C2\";\n}\n.mioss-icon-close-square-o:before {\n  content: \"\\E6C3\";\n}\n.mioss-icon-check-square:before {\n  content: \"\\E6C4\";\n}\n.mioss-icon-check-square-o:before {\n  content: \"\\E6C5\";\n}\n.mioss-icon-fast-backward:before {\n  content: \"\\E6C6\";\n}\n.mioss-icon-fast-forward:before {\n  content: \"\\E6C7\";\n}\n.mioss-icon-up-square:before {\n  content: \"\\E6C8\";\n}\n.mioss-icon-down-square:before {\n  content: \"\\E6C9\";\n}\n.mioss-icon-left-square:before {\n  content: \"\\E6CA\";\n}\n.mioss-icon-right-square:before {\n  content: \"\\E6CB\";\n}\n.mioss-icon-right-square-o:before {\n  content: \"\\E6CC\";\n}\n.mioss-icon-left-square-o:before {\n  content: \"\\E6CD\";\n}\n.mioss-icon-down-square-o:before {\n  content: \"\\E6CE\";\n}\n.mioss-icon-up-square-o:before {\n  content: \"\\E6CF\";\n}\n.mioss-icon-loading:before {\n  content: \"\\E6AE\";\n}\n.mioss-icon-spin {\n  display: inline-block;\n  animation: loadingCircle 1.6s infinite linear;\n}\n", ""]);

	// exports


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _props = __webpack_require__(9);

	var _config = __webpack_require__(20);

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
/* 20 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = {
	  prefix: 'mioss'
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('i', {
	    class: _vm.iconClasses
	  }, [_vm._t("default")])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-09b0f518", module.exports)
	  }
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('button', {
	    ref: "rt",
	    class: _vm.btClasses,
	    attrs: {
	      "type": _vm.htmlType || 'button',
	      "disabled": _vm.isDisabled
	    },
	    on: {
	      "click": _vm.handleClick
	    }
	  }, [(_vm.isIcon) ? _h('v-icon', {
	    attrs: {
	      "type": _vm.isIcon
	    }
	  }) : _vm._e(), _vm._t("default")])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-35565755", module.exports)
	  }
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('transition', {
	    attrs: {
	      "name": "msgbox-fade"
	    }
	  }, [(_vm.value) ? _h('div', {
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
	  }, [(_vm.modal) ? _h('div', {
	    class: [_vm.prefixCls + '-modal-mask']
	  }) : _vm._e(), _h('div', {
	    class: [_vm.prefixCls + '-modal-wrap']
	  }, [_h('div', {
	    class: [_vm.prefixCls + '-modal'],
	    style: (_vm.vstyle)
	  }, [_h('div', {
	    class: [_vm.prefixCls + '-modal-content']
	  }, [_h('button', {
	    class: [_vm.prefixCls + '-modal-close'],
	    on: {
	      "click": function($event) {
	        _vm.handleAction('cancel')
	      }
	    }
	  }, [_h('span', {
	    class: [_vm.prefixCls + '-modal-close-x']
	  })]), (!!_vm.title) ? _h('div', {
	    class: [_vm.prefixCls + '-modal-header']
	  }, [_h('div', {
	    class: [_vm.prefixCls + '-modal-title']
	  }, [_vm._s(_vm.title)])]) : _vm._e(), _h('div', {
	    class: [_vm.prefixCls + '-modal-body']
	  }, [_vm._t("default")]), _h('div', {
	    class: [_vm.prefixCls + '-modal-footer']
	  }, [(_vm.isShowCancel) ? _h('v-button', {
	    attrs: {
	      "size": "large"
	    },
	    on: {
	      "click": function($event) {
	        _vm.handleAction('cancel')
	      }
	    }
	  }, [_h('span', ["取消"])]) : _vm._e(), _h('v-button', {
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
	  }, [_h('span', ["确认"])])])])])])]) : _vm._e()])
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