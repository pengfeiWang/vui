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
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader!vue-loader/lib/style-rewriter?id=data-v-0cef540c!scss-loader!vue-loader/lib/selector?type=styles&index=0!./index.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))

	/* script */
	__vue_exports__ = __webpack_require__(2)

	/* template */
	var __vue_template__ = __webpack_require__(3)
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
	__vue_options__.__file = "/Users/oliver/DEV/yunkeji/yunyingbu/vue-components/src/components/warnings/template/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0cef540c", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-0cef540c", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = {
	  name: 'vWarnings'
	};

/***/ },
/* 3 */
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
	  })]), " ", _h('div', [_h('div', {
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
	  })])])]), " ", _h('div', [_h('div', {
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
	  }, ["This is an error message about copywriting."])])]), " ", _h('div', [_h('div', {
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
	  })])]), " ", _h('div', [_h('div', {
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
	     require("vue-hot-reload-api").rerender("data-v-0cef540c", module.exports)
	  }
	}

/***/ }
/******/ ])
});
;