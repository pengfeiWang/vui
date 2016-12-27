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
	__webpack_require__(2)

	/* script */
	__vue_exports__ = __webpack_require__(6)

	/* template */
	var __vue_template__ = __webpack_require__(9)
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
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-ef52931c!./../../../../node_modules/sass-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-ef52931c!./../../../../node_modules/sass-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
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
	exports.push([module.id, "\n.menu-slide-active {\n  transform-origin: 0% 0%;\n  transition: height 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.mioss-menu {\n  outline: none;\n  margin-bottom: 0;\n  padding-left: 0;\n  list-style: none;\n  z-index: 1050;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);\n  color: #666;\n  background: #fff;\n  line-height: 46px;\n}\n.mioss-menu-hidden {\n    display: none;\n}\n.mioss-menu-item-group-list {\n    margin: 0;\n    padding: 0;\n}\n.mioss-menu-item-group-title {\n    color: #999;\n    font-size: 12px;\n    line-height: 1.5;\n    padding: 8px 16px;\n}\n.mioss-menu-item, .mioss-menu-submenu, .mioss-menu-submenu-title {\n    cursor: pointer;\n    transition: all 0.3s ease;\n}\n.mioss-menu-submenu .mioss-menu-sub {\n    cursor: initial;\n}\n.mioss-menu-item > a {\n    display: block;\n    color: #666;\n}\n.mioss-menu-item > a:hover {\n      color: #666;\n}\n.mioss-menu-item > a:before {\n      position: absolute;\n      background-color: transparent;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      content: '';\n}\n.mioss-menu-item:hover, .mioss-menu-item-active, .mioss-menu-submenu-active, .mioss-menu-submenu-title:hover {\n    background-color: #eaf8fe;\n}\n.mioss-menu-horizontal .mioss-menu-item,\n  .mioss-menu-horizontal .mioss-menu-submenu {\n    margin-top: -1px;\n}\n.mioss-menu-horizontal > .mioss-menu-item:hover,\n  .mioss-menu-horizontal > .mioss-menu-item-active,\n  .mioss-menu-horizontal > .mioss-menu-submenu .mioss-menu-submenu-title:hover {\n    background-color: transparent;\n}\n.mioss-menu-item-selected {\n    color: #2db7f5;\n}\n.mioss-menu-item-selected > a,\n    .mioss-menu-item-selected > a:hover {\n      color: #2db7f5;\n}\n.mioss-menu-horizontal, .mioss-menu-inline, .mioss-menu-vertical {\n    z-index: auto;\n}\n.mioss-menu-inline, .mioss-menu-vertical {\n    border-right: 1px solid #e9e9e9;\n}\n.mioss-menu-inline .mioss-menu-item, .mioss-menu-vertical .mioss-menu-item {\n      border-right: 1px solid #e9e9e9;\n      margin-left: -1px;\n      left: 1px;\n      position: relative;\n      z-index: 1;\n}\n.mioss-menu-vertical .mioss-menu-sub {\n    border-right: 0;\n}\n.mioss-menu-vertical .mioss-menu-sub .mioss-menu-item {\n      border-right: 0;\n}\n.mioss-menu-inline .mioss-menu-selected,\n  .mioss-menu-inline .mioss-menu-item-selected {\n    border-right: 2px solid #2db7f5;\n}\n.mioss-menu-submenu-horizontal > .mioss-menu {\n    top: 100%;\n    left: 0;\n    position: absolute;\n    min-width: 100%;\n    margin-top: 7px;\n    z-index: 1050;\n}\n.mioss-menu-submenu-vertical {\n    z-index: 1;\n}\n.mioss-menu-submenu-vertical > .mioss-menu {\n    top: 0;\n    left: 100%;\n    position: absolute;\n    min-width: 160px;\n    margin-left: 4px;\n    z-index: 1050;\n}\n.mioss-menu-item, .mioss-menu-submenu-title {\n    margin: 0;\n    padding: 0 20px;\n    position: relative;\n    display: block;\n    white-space: nowrap;\n}\n.mioss-menu-item.mioss-menu-item-disabled, .mioss-menu-item.mioss-menu-submenu-disabled, .mioss-menu-submenu-title.mioss-menu-item-disabled, .mioss-menu-submenu-title.mioss-menu-submenu-disabled {\n      color: #999 !important;\n      cursor: not-allowed;\n      background: none;\n}\n.mioss-menu-item.mioss-menu-item-disabled > a, .mioss-menu-item.mioss-menu-submenu-disabled > a, .mioss-menu-submenu-title.mioss-menu-item-disabled > a, .mioss-menu-submenu-title.mioss-menu-submenu-disabled > a {\n        color: #999 !important;\n        pointer-events: none;\n}\n.mioss-menu-item .mioss-icon, .mioss-menu-submenu-title .mioss-icon {\n      min-width: 14px;\n      margin-right: 8px;\n}\n.mioss-menu > .mioss-menu-item-divider {\n    height: 1px;\n    margin: 1px 0;\n    overflow: hidden;\n    padding: 0;\n    line-height: 0;\n    background-color: #e5e5e5;\n}\n.mioss-menu-submenu {\n    position: relative;\n}\n.mioss-menu-submenu > .mioss-menu {\n      background-color: #fff;\n      border-radius: 4px;\n}\n.mioss-menu-submenu-vertical > .mioss-menu-submenu-title:after {\n      font-family: \"anticon\" !important;\n      font-style: normal;\n      vertical-align: baseline;\n      text-align: center;\n      text-transform: none;\n      text-rendering: auto;\n      position: absolute;\n      transition: transform .3s ease;\n      content: \"\\E61D\";\n      right: 16px;\n      transform: rotate(270deg) scale(0.75);\n}\n.mioss-menu-submenu-inline > .mioss-menu-submenu-title:after {\n      font-family: \"anticon\" !important;\n      font-style: normal;\n      vertical-align: baseline;\n      text-align: center;\n      text-transform: none;\n      text-rendering: auto;\n      position: absolute;\n      transition: transform .3s ease;\n      content: \"\\E61D\";\n      right: 16px;\n      top: 0;\n      display: inline-block;\n      font-size: 12px;\n      transform: scale(0.66667) rotate(0deg);\n}\n:root .mioss-menu-submenu-inline > .mioss-menu-submenu-title:after {\n        font-size: 12px;\n}\n.mioss-menu-submenu-open.mioss-menu-submenu-inline > .mioss-menu-submenu-title:after {\n      transform: rotate(180deg) scale(0.75);\n}\n.mioss-menu-vertical .mioss-menu-submenu-selected {\n    color: #2db7f5;\n}\n.mioss-menu-vertical .mioss-menu-submenu-selected > a {\n      color: #2db7f5;\n}\n.mioss-menu-horizontal {\n    border: 0;\n    border-bottom: 1px solid #e9e9e9;\n    box-shadow: none;\n    z-index: 0;\n}\n.mioss-menu-horizontal > .mioss-menu-item,\n    .mioss-menu-horizontal > .mioss-menu-submenu {\n      position: relative;\n      top: 1px;\n      float: left;\n      border-bottom: 2px solid transparent;\n}\n.mioss-menu-horizontal > .mioss-menu-item:hover, .mioss-menu-horizontal > .mioss-menu-item-active, .mioss-menu-horizontal > .mioss-menu-item-selected,\n      .mioss-menu-horizontal > .mioss-menu-submenu:hover,\n      .mioss-menu-horizontal > .mioss-menu-submenu-active,\n      .mioss-menu-horizontal > .mioss-menu-submenu-selected {\n        border-bottom: 2px solid #2db7f5;\n        color: #2db7f5;\n}\n.mioss-menu-horizontal > .mioss-menu-item > a,\n      .mioss-menu-horizontal > .mioss-menu-submenu > a {\n        display: block;\n        color: #666;\n}\n.mioss-menu-horizontal > .mioss-menu-item > a:hover,\n        .mioss-menu-horizontal > .mioss-menu-submenu > a:hover {\n          color: #2db7f5;\n}\n.mioss-menu-horizontal:after {\n      content: \" \";\n      display: block;\n      height: 0;\n      clear: both;\n}\n.mioss-menu-vertical > .mioss-menu-item,\n  .mioss-menu-vertical > .mioss-menu-submenu > .mioss-menu-submenu-title, .mioss-menu-inline > .mioss-menu-item,\n  .mioss-menu-inline > .mioss-menu-submenu > .mioss-menu-submenu-title, .mioss-menu-item-group-list > .mioss-menu-item,\n  .mioss-menu-item-group-list > .mioss-menu-submenu > .mioss-menu-submenu-title {\n    padding: 0px 16px 0 28px;\n    font-size: 14px;\n    line-height: 42px;\n    height: 42px;\n}\n.mioss-menu-vertical.mioss-menu-sub {\n    padding: 0;\n    transform-origin: 0 0;\n}\n.mioss-menu-vertical.mioss-menu-sub > .mioss-menu-item,\n    .mioss-menu-vertical.mioss-menu-sub > .mioss-menu-submenu {\n      transform-origin: 0 0;\n}\n.mioss-menu-root.mioss-menu-vertical, .mioss-menu-root.mioss-menu-inline {\n    box-shadow: none;\n}\n.mioss-menu-sub.mioss-menu-inline {\n    padding: 0;\n    border: 0;\n    box-shadow: none;\n    border-radius: 0;\n}\n.mioss-menu-sub.mioss-menu-inline > .mioss-menu-item,\n    .mioss-menu-sub.mioss-menu-inline > .mioss-menu-submenu > .mioss-menu-submenu-title {\n      line-height: 42px;\n      height: 42px;\n      list-style-type: disc;\n      list-style-position: inside;\n}\n.mioss-menu-sub.mioss-menu-inline .mioss-menu-item-group-title {\n      padding-left: 32px;\n}\n.mioss-menu-dark,\n.mioss-menu-dark .mioss-menu-sub {\n  color: #999;\n  background: #404040;\n}\n.mioss-menu-dark .mioss-menu-inline.mioss-menu-sub {\n  background: #333;\n}\n.mioss-menu-dark.mioss-menu-horizontal {\n  border-bottom-color: #404040;\n}\n.mioss-menu-dark.mioss-menu-horizontal > .mioss-menu-item,\n.mioss-menu-dark.mioss-menu-horizontal > .mioss-menu-submenu {\n  border-color: #404040;\n  border-bottom: 0;\n  top: 0;\n}\n.mioss-menu-dark .mioss-menu-item,\n.mioss-menu-dark .mioss-menu-item > a {\n  color: #999;\n}\n.mioss-menu-dark.mioss-menu-inline, .mioss-menu-dark.mioss-menu-vertical {\n  border-right: 0;\n}\n.mioss-menu-dark.mioss-menu-inline .mioss-menu-item,\n.mioss-menu-dark.mioss-menu-vertical .mioss-menu-item {\n  border-right: 0;\n  margin-left: 0;\n  left: 0;\n}\n.mioss-menu-dark .mioss-menu-item:hover,\n.mioss-menu-dark .mioss-menu-item-active,\n.mioss-menu-dark .mioss-menu-submenu-active,\n.mioss-menu-dark .mioss-menu-submenu-selected,\n.mioss-menu-dark .mioss-menu-submenu:hover,\n.mioss-menu-dark .mioss-menu-submenu-title:hover {\n  background-color: transparent;\n  color: #fff;\n}\n.mioss-menu-dark .mioss-menu-item:hover > a,\n  .mioss-menu-dark .mioss-menu-item-active > a,\n  .mioss-menu-dark .mioss-menu-submenu-active > a,\n  .mioss-menu-dark .mioss-menu-submenu-selected > a,\n  .mioss-menu-dark .mioss-menu-submenu:hover > a,\n  .mioss-menu-dark .mioss-menu-submenu-title:hover > a {\n    color: #fff;\n}\n.mioss-menu-dark .mioss-menu-item-selected {\n  border-right: 0;\n  color: #fff;\n}\n.mioss-menu-dark .mioss-menu-item-selected > a,\n  .mioss-menu-dark .mioss-menu-item-selected > a:hover {\n    color: #fff;\n}\n.mioss-menu-dark.mioss-menu-inline .mioss-menu-item-selected {\n  background-color: #2db7f5;\n}\n", ""]);

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

	var _config = __webpack_require__(8);

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
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = {
	  prefix: 'mioss'
	};

/***/ },
/* 9 */
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
	    }) : _vm._e(), _h('span', [_vm._s(it.title)])])]), _h('ul', {
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