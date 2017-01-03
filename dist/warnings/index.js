(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("vWarnings", [], factory);
	else if(typeof exports === 'object')
		exports["vWarnings"] = factory();
	else
		root["vWarnings"] = factory();
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
	exports.vWarnings = undefined;

	var _template = __webpack_require__(1);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_template2.default.install = function (Vue) {
	  Vue.component(_template2.default.name, _template2.default);
	};
	exports.vWarnings = _template2.default;

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
	var __vue_template__ = __webpack_require__(7)
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
	__vue_options__.__file = "/Users/oliver/DEV/yunkeji/yunyingbu/v2ui/src/components/warnings/template/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-609f4f07", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-609f4f07", __vue_options__)
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
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-609f4f07!./../../../../node_modules/sass-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-609f4f07!./../../../../node_modules/sass-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
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
	exports.push([module.id, "\n.mioss-alert {\n  position: relative;\n  padding: 8px 48px 8px 38px;\n  border-radius: 6px;\n  color: #666;\n  font-size: 12px;\n  line-height: 16px;\n  margin-bottom: 10px;\n}\n.mioss-alert.mioss-alert-no-icon {\n    padding: 8px 48px 8px 16px;\n}\n.mioss-alert-icon {\n    font-size: 14px;\n    top: 9px;\n    left: 16px;\n    position: absolute;\n}\n.mioss-alert-description {\n    font-size: 12px;\n    line-height: 21px;\n    display: none;\n}\n.mioss-alert-success {\n    border: 1px solid #e7f6e1;\n    background-color: #f3faf0;\n}\n.mioss-alert-success .mioss-alert-icon {\n      color: #87d068;\n}\n.mioss-alert-info {\n    border: 1px solid #d5f1fd;\n    background-color: #eaf8fe;\n}\n.mioss-alert-info .mioss-alert-icon {\n      color: #2db7f5;\n}\n.mioss-alert-warning {\n    border: 1px solid #ffeecc;\n    background-color: #fff7e6;\n}\n.mioss-alert-warning .mioss-alert-icon {\n      color: #fa0;\n}\n.mioss-alert-error {\n    border: 1px solid #ffddcc;\n    background-color: #ffeee6;\n}\n.mioss-alert-error .mioss-alert-icon {\n      color: #f50;\n}\n.mioss-alert-close-icon {\n    font-size: 12px;\n    position: absolute;\n    right: 16px;\n    top: 10px;\n    height: 12px;\n    line-height: 12px;\n    overflow: hidden;\n    cursor: pointer;\n}\n.mioss-alert-close-icon .mioss-icon-cross {\n      color: #999;\n      transition: color .3s ease;\n}\n.mioss-alert-close-icon .mioss-icon-cross:hover {\n        color: #404040;\n}\n.mioss-alert-close-text {\n    position: absolute;\n    right: 16px;\n}\n.mioss-alert-with-description {\n    padding: 16px 16px 16px 60px;\n    position: relative;\n    border-radius: 6px;\n    margin-bottom: 10px;\n    color: #666;\n    line-height: 1.5;\n}\n.mioss-alert-with-description.mioss-alert-no-icon {\n    padding: 16px;\n}\n.mioss-alert-with-description .mioss-alert-icon {\n    position: absolute;\n    top: 16px;\n    left: 20px;\n    font-size: 24px;\n}\n.mioss-alert-with-description .mioss-alert-close-icon {\n    position: absolute;\n    top: 16px;\n    right: 16px;\n    cursor: pointer;\n    font-size: 12px;\n}\n.mioss-alert-with-description .mioss-alert-message {\n    font-size: 14px;\n    color: #404040;\n    display: block;\n    margin-bottom: 4px;\n}\n.mioss-alert-with-description .mioss-alert-description {\n    display: block;\n}\n.mioss-alert.mioss-alert-close {\n    height: 0 !important;\n    margin: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n    transform-origin: 50% 0;\n}\n.mioss-alert-slide-up-leave {\n    animation: antAlertSlideUpOut 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n    animation-fill-mode: both;\n}\n.mioss-alert-banner {\n    border-radius: 0;\n    border: 0;\n    margin-bottom: 0;\n}\n@keyframes antAlertSlideUpIn {\n0% {\n    opacity: 0;\n    transform-origin: 0% 0%;\n    transform: scaleY(0);\n}\n100% {\n    opacity: 1;\n    transform-origin: 0% 0%;\n    transform: scaleY(1);\n}\n}\n@keyframes antAlertSlideUpOut {\n0% {\n    opacity: 1;\n    transform-origin: 0% 0%;\n    transform: scaleY(1);\n}\n100% {\n    opacity: 0;\n    transform-origin: 0% 0%;\n    transform: scaleY(0);\n}\n}\n", ""]);

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
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = {
	  name: 'vWarnings'
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', [_h('div', {
	    staticClass: "mioss-alert mioss-alert-success mioss-alert-no-icon",
	    attrs: {
	      "data-show": "true"
	    }
	  }, [_h('span', {
	    staticClass: "mioss-alert-message"
	  }, ["Success Text"]), _h('span', {
	    staticClass: "mioss-alert-description"
	  })]), _h('div', [_h('div', {
	    staticClass: "mioss-alert mioss-alert-warning mioss-alert-no-icon",
	    attrs: {
	      "data-show": "true"
	    }
	  }, [_h('span', {
	    staticClass: "mioss-alert-message"
	  }, ["Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"]), _h('span', {
	    staticClass: "mioss-alert-description"
	  }), _h('a', {
	    staticClass: "mioss-alert-close-icon"
	  }, [_h('i', {
	    staticClass: "mioss-icon mioss-icon-cross "
	  })])]), _h('div', {
	    staticClass: "mioss-alert mioss-alert-error mioss-alert-with-description mioss-alert-no-icon",
	    attrs: {
	      "data-show": "true"
	    }
	  }, [_h('span', {
	    staticClass: "mioss-alert-message"
	  }, ["Error Text"]), _h('span', {
	    staticClass: "mioss-alert-description"
	  }, ["Error Description Error Description Error Description Error Description Error Description Error Description"]), _h('a', {
	    staticClass: "mioss-alert-close-icon"
	  }, [_h('i', {
	    staticClass: "mioss-icon mioss-icon-cross "
	  })])])]), _h('div', [_h('div', {
	    staticClass: "mioss-alert mioss-alert-success",
	    attrs: {
	      "data-show": "true"
	    }
	  }, [_h('i', {
	    staticClass: "mioss-icon mioss-icon-check-circle mioss-alert-icon"
	  }), _h('span', {
	    staticClass: "mioss-alert-message"
	  }, ["Success Tips"]), _h('span', {
	    staticClass: "mioss-alert-description"
	  })]), _h('div', {
	    staticClass: "mioss-alert mioss-alert-info",
	    attrs: {
	      "data-show": "true"
	    }
	  }, [_h('i', {
	    staticClass: "mioss-icon mioss-icon-info-circle mioss-alert-icon"
	  }), _h('span', {
	    staticClass: "mioss-alert-message"
	  }, ["Informational Notes"]), _h('span', {
	    staticClass: "mioss-alert-description"
	  })]), _h('div', {
	    staticClass: "mioss-alert mioss-alert-warning",
	    attrs: {
	      "data-show": "true"
	    }
	  }, [_h('i', {
	    staticClass: "mioss-icon mioss-icon-exclamation-circle mioss-alert-icon"
	  }), _h('span', {
	    staticClass: "mioss-alert-message"
	  }, ["Warning"]), _h('span', {
	    staticClass: "mioss-alert-description"
	  })]), _h('div', {
	    staticClass: "mioss-alert mioss-alert-error",
	    attrs: {
	      "data-show": "true"
	    }
	  }, [_h('i', {
	    staticClass: "mioss-icon mioss-icon-cross-circle mioss-alert-icon"
	  }), _h('span', {
	    staticClass: "mioss-alert-message"
	  }, ["Error"]), _h('span', {
	    staticClass: "mioss-alert-description"
	  })]), _h('div', {
	    staticClass: "mioss-alert mioss-alert-success mioss-alert-with-description",
	    attrs: {
	      "data-show": "true"
	    }
	  }, [_h('i', {
	    staticClass: "mioss-icon mioss-icon-check-circle-o mioss-alert-icon"
	  }), _h('span', {
	    staticClass: "mioss-alert-message"
	  }, ["success tips"]), _h('span', {
	    staticClass: "mioss-alert-description"
	  }, ["Detailed description and advices about successful copywriting."])]), _h('div', {
	    staticClass: "mioss-alert mioss-alert-info mioss-alert-with-description",
	    attrs: {
	      "data-show": "true"
	    }
	  }, [_h('i', {
	    staticClass: "mioss-icon mioss-icon-info-circle-o mioss-alert-icon"
	  }), _h('span', {
	    staticClass: "mioss-alert-message"
	  }, ["Informational Notes"]), _h('span', {
	    staticClass: "mioss-alert-description"
	  }, ["Additional description and informations about copywriting."])]), _h('div', {
	    staticClass: "mioss-alert mioss-alert-warning mioss-alert-with-description",
	    attrs: {
	      "data-show": "true"
	    }
	  }, [_h('i', {
	    staticClass: "mioss-icon mioss-icon-exclamation-circle-o mioss-alert-icon"
	  }), _h('span', {
	    staticClass: "mioss-alert-message"
	  }, ["Warning"]), _h('span', {
	    staticClass: "mioss-alert-description"
	  }, ["This is a warning notice about copywriting."])]), _h('div', {
	    staticClass: "mioss-alert mioss-alert-error mioss-alert-with-description",
	    attrs: {
	      "data-show": "true"
	    }
	  }, [_h('i', {
	    staticClass: "mioss-icon mioss-icon-cross-circle-o mioss-alert-icon"
	  }), _h('span', {
	    staticClass: "mioss-alert-message"
	  }, ["Error"]), _h('span', {
	    staticClass: "mioss-alert-description"
	  }, ["This is an error message about copywriting."])])]), _h('div', [_h('div', {
	    staticClass: "mioss-alert mioss-alert-success mioss-alert-no-icon",
	    attrs: {
	      "data-show": "true"
	    }
	  }, [_h('span', {
	    staticClass: "mioss-alert-message"
	  }, ["Success Text"]), _h('span', {
	    staticClass: "mioss-alert-description"
	  })]), _h('div', {
	    staticClass: "mioss-alert mioss-alert-info mioss-alert-no-icon",
	    attrs: {
	      "data-show": "true"
	    }
	  }, [_h('span', {
	    staticClass: "mioss-alert-message"
	  }, ["Info Text"]), _h('span', {
	    staticClass: "mioss-alert-description"
	  })]), _h('div', {
	    staticClass: "mioss-alert mioss-alert-warning mioss-alert-no-icon",
	    attrs: {
	      "data-show": "true"
	    }
	  }, [_h('span', {
	    staticClass: "mioss-alert-message"
	  }, ["Warning Text"]), _h('span', {
	    staticClass: "mioss-alert-description"
	  })]), _h('div', {
	    staticClass: "mioss-alert mioss-alert-error mioss-alert-no-icon",
	    attrs: {
	      "data-show": "true"
	    }
	  }, [_h('span', {
	    staticClass: "mioss-alert-message"
	  }, ["Error Text"]), _h('span', {
	    staticClass: "mioss-alert-description"
	  })])]), _h('div', [_h('div', {
	    staticClass: "mioss-alert mioss-alert-success mioss-alert-with-description mioss-alert-no-icon",
	    attrs: {
	      "data-show": "true"
	    }
	  }, [_h('span', {
	    staticClass: "mioss-alert-message"
	  }, ["Success Text"]), _h('span', {
	    staticClass: "mioss-alert-description"
	  }, ["Success Description Success Description Success Description"])]), _h('div', {
	    staticClass: "mioss-alert mioss-alert-info mioss-alert-with-description mioss-alert-no-icon",
	    attrs: {
	      "data-show": "true"
	    }
	  }, [_h('span', {
	    staticClass: "mioss-alert-message"
	  }, ["Info Text"]), _h('span', {
	    staticClass: "mioss-alert-description"
	  }, ["Info Description Info Description Info Description Info Description"])]), _h('div', {
	    staticClass: "mioss-alert mioss-alert-warning mioss-alert-with-description mioss-alert-no-icon",
	    attrs: {
	      "data-show": "true"
	    }
	  }, [_h('span', {
	    staticClass: "mioss-alert-message"
	  }, ["Warning Text"]), _h('span', {
	    staticClass: "mioss-alert-description"
	  }, ["Warning Description Warning Description Warning Description Warning Description"])]), _h('div', {
	    staticClass: "mioss-alert mioss-alert-error mioss-alert-with-description mioss-alert-no-icon",
	    attrs: {
	      "data-show": "true"
	    }
	  }, [_h('span', {
	    staticClass: "mioss-alert-message"
	  }, ["Error Text"]), _h('span', {
	    staticClass: "mioss-alert-description"
	  }, ["Error Description Error Description Error Description Error Description"])])])])
	}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-609f4f07", module.exports)
	  }
	}

/***/ }
/******/ ])
});
;