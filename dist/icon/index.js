(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("vIcon", [], factory);
	else if(typeof exports === 'object')
		exports["vIcon"] = factory();
	else
		root["vIcon"] = factory();
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
	exports.vIcon = undefined;

	var _template = __webpack_require__(1);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_template2.default.install = function (Vue) {
	  Vue.component(_template2.default.name, _template2.default);
	};
	exports.vIcon = _template2.default;

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
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n@font-face {\n  font-family: 'anticon';\n  src: url(\"https://at.alicdn.com/t/font_1473840929_824008.eot\");\n  /* IE9*/\n  src: url(\"https://at.alicdn.com/t/font_1473840929_824008.eot?#iefix\") format(\"embedded-opentype\"), url(\"https://at.alicdn.com/t/font_1473840929_824008.woff\") format(\"woff\"), url(\"https://at.alicdn.com/t/font_1473840929_824008.ttf\") format(\"truetype\"), url(\"https://at.alicdn.com/t/font_1473840929_824008.svg#iconfont\") format(\"svg\");\n  /* iOS 4.1- */\n}\n.mioss-icon {\n  display: inline-block;\n  font-style: normal;\n  vertical-align: baseline;\n  text-align: center;\n  text-transform: none;\n  text-rendering: auto;\n  line-height: 1;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.mioss-icon:before {\n    display: block;\n    font-family: \"anticon\" !important;\n}\n.mioss-icon-step-forward:before {\n  content: \"\\E600\";\n}\n.mioss-icon-step-backward:before {\n  content: \"\\E601\";\n}\n.mioss-icon-forward:before {\n  content: \"\\E602\";\n}\n.mioss-icon-backward:before {\n  content: \"\\E603\";\n}\n.mioss-icon-caret-right:before {\n  content: \"\\E604\";\n}\n.mioss-icon-caret-left:before {\n  content: \"\\E605\";\n}\n.mioss-icon-caret-down:before {\n  content: \"\\E606\";\n}\n.mioss-icon-caret-up:before {\n  content: \"\\E607\";\n}\n.mioss-icon-right-circle:before {\n  content: \"\\E608\";\n}\n.mioss-icon-circle-right:before {\n  content: \"\\E608\";\n}\n.mioss-icon-caret-circle-right:before {\n  content: \"\\E608\";\n}\n.mioss-icon-left-circle:before {\n  content: \"\\E609\";\n}\n.mioss-icon-circle-left:before {\n  content: \"\\E609\";\n}\n.mioss-icon-caret-circle-left:before {\n  content: \"\\E609\";\n}\n.mioss-icon-up-circle:before {\n  content: \"\\E60A\";\n}\n.mioss-icon-circle-up:before {\n  content: \"\\E60A\";\n}\n.mioss-icon-caret-circle-up:before {\n  content: \"\\E60A\";\n}\n.mioss-icon-down-circle:before {\n  content: \"\\E60B\";\n}\n.mioss-icon-circle-down:before {\n  content: \"\\E60B\";\n}\n.mioss-icon-caret-circle-down:before {\n  content: \"\\E60B\";\n}\n.mioss-icon-right-circle-o:before {\n  content: \"\\E60C\";\n}\n.mioss-icon-circle-o-right:before {\n  content: \"\\E60C\";\n}\n.mioss-icon-caret-circle-o-right:before {\n  content: \"\\E60C\";\n}\n.mioss-icon-left-circle-o:before {\n  content: \"\\E60D\";\n}\n.mioss-icon-circle-o-left:before {\n  content: \"\\E60D\";\n}\n.mioss-icon-caret-circle-o-left:before {\n  content: \"\\E60D\";\n}\n.mioss-icon-up-circle-o:before {\n  content: \"\\E60E\";\n}\n.mioss-icon-circle-o-up:before {\n  content: \"\\E60E\";\n}\n.mioss-icon-caret-circle-o-up:before {\n  content: \"\\E60E\";\n}\n.mioss-icon-down-circle-o:before {\n  content: \"\\E60F\";\n}\n.mioss-icon-circle-o-down:before {\n  content: \"\\E60F\";\n}\n.mioss-icon-caret-circle-o-down:before {\n  content: \"\\E60F\";\n}\n.mioss-icon-verticle-left:before {\n  content: \"\\E610\";\n}\n.mioss-icon-verticle-right:before {\n  content: \"\\E611\";\n}\n.mioss-icon-rollback:before {\n  content: \"\\E612\";\n}\n.mioss-icon-retweet:before {\n  content: \"\\E613\";\n}\n.mioss-icon-shrink:before {\n  content: \"\\E614\";\n}\n.mioss-icon-arrows-alt:before {\n  content: \"\\E615\";\n}\n.mioss-icon-arrow-salt:before {\n  content: \"\\E615\";\n}\n.mioss-icon-reload:before {\n  content: \"\\E616\";\n}\n.mioss-icon-double-right:before {\n  content: \"\\E617\";\n}\n.mioss-icon-double-left:before {\n  content: \"\\E618\";\n}\n.mioss-icon-arrow-down:before {\n  content: \"\\E619\";\n}\n.mioss-icon-arrow-up:before {\n  content: \"\\E61A\";\n}\n.mioss-icon-arrow-right:before {\n  content: \"\\E61B\";\n}\n.mioss-icon-arrow-left:before {\n  content: \"\\E61C\";\n}\n.mioss-icon-down:before {\n  content: \"\\E61D\";\n}\n.mioss-icon-up:before {\n  content: \"\\E61E\";\n}\n.mioss-icon-right:before {\n  content: \"\\E61F\";\n}\n.mioss-icon-left:before {\n  content: \"\\E620\";\n}\n.mioss-icon-minus-square-o:before {\n  content: \"\\E621\";\n}\n.mioss-icon-minus-circle:before {\n  content: \"\\E622\";\n}\n.mioss-icon-minus-circle-o:before {\n  content: \"\\E623\";\n}\n.mioss-icon-minus:before {\n  content: \"\\E624\";\n}\n.mioss-icon-plus-circle-o:before {\n  content: \"\\E625\";\n}\n.mioss-icon-plus-circle:before {\n  content: \"\\E626\";\n}\n.mioss-icon-plus:before {\n  content: \"\\E627\";\n}\n.mioss-icon-info-circle:before {\n  content: \"\\E628\";\n}\n.mioss-icon-info-circle-o:before {\n  content: \"\\E629\";\n}\n.mioss-icon-info:before {\n  content: \"\\E62A\";\n}\n.mioss-icon-exclamation:before {\n  content: \"\\E62B\";\n}\n.mioss-icon-exclamation-circle:before {\n  content: \"\\E62C\";\n}\n.mioss-icon-exclamation-circle-o:before {\n  content: \"\\E62D\";\n}\n.mioss-icon-close-circle:before {\n  content: \"\\E62E\";\n}\n.mioss-icon-cross-circle:before {\n  content: \"\\E62E\";\n}\n.mioss-icon-close-circle-o:before {\n  content: \"\\E62F\";\n}\n.mioss-icon-cross-circle-o:before {\n  content: \"\\E62F\";\n}\n.mioss-icon-check-circle:before {\n  content: \"\\E630\";\n}\n.mioss-icon-check-circle-o:before {\n  content: \"\\E631\";\n}\n.mioss-icon-check:before {\n  content: \"\\E632\";\n}\n.mioss-icon-close:before {\n  content: \"\\E633\";\n}\n.mioss-icon-cross:before {\n  content: \"\\E633\";\n}\n.mioss-icon-customer-service:before {\n  content: \"\\E634\";\n}\n.mioss-icon-customerservice:before {\n  content: \"\\E634\";\n}\n.mioss-icon-credit-card:before {\n  content: \"\\E635\";\n}\n.mioss-icon-code-o:before {\n  content: \"\\E636\";\n}\n.mioss-icon-book:before {\n  content: \"\\E637\";\n}\n.mioss-icon-bar-chart:before {\n  content: \"\\E638\";\n}\n.mioss-icon-bars:before {\n  content: \"\\E639\";\n}\n.mioss-icon-question:before {\n  content: \"\\E63A\";\n}\n.mioss-icon-question-circle:before {\n  content: \"\\E63B\";\n}\n.mioss-icon-question-circle-o:before {\n  content: \"\\E63C\";\n}\n.mioss-icon-pause:before {\n  content: \"\\E63D\";\n}\n.mioss-icon-pause-circle:before {\n  content: \"\\E63E\";\n}\n.mioss-icon-pause-circle-o:before {\n  content: \"\\E63F\";\n}\n.mioss-icon-clock-circle:before {\n  content: \"\\E640\";\n}\n.mioss-icon-clock-circle-o:before {\n  content: \"\\E641\";\n}\n.mioss-icon-swap:before {\n  content: \"\\E642\";\n}\n.mioss-icon-swap-left:before {\n  content: \"\\E643\";\n}\n.mioss-icon-swap-right:before {\n  content: \"\\E644\";\n}\n.mioss-icon-plus-square-o:before {\n  content: \"\\E645\";\n}\n.mioss-icon-frown:before {\n  content: \"\\E646\";\n}\n.mioss-icon-frown-circle:before {\n  content: \"\\E646\";\n}\n.mioss-icon-ellipsis:before {\n  content: \"\\E647\";\n}\n.mioss-icon-copy:before {\n  content: \"\\E648\";\n}\n.mioss-icon-menu-fold:before {\n  content: \"\\E658\";\n}\n.mioss-icon-mail:before {\n  content: \"\\E659\";\n}\n.mioss-icon-logout:before {\n  content: \"\\E65A\";\n}\n.mioss-icon-link:before {\n  content: \"\\E65B\";\n}\n.mioss-icon-area-chart:before {\n  content: \"\\E65C\";\n}\n.mioss-icon-line-chart:before {\n  content: \"\\E65D\";\n}\n.mioss-icon-home:before {\n  content: \"\\E65E\";\n}\n.mioss-icon-laptop:before {\n  content: \"\\E65F\";\n}\n.mioss-icon-star:before {\n  content: \"\\E660\";\n}\n.mioss-icon-star-o:before {\n  content: \"\\E661\";\n}\n.mioss-icon-folder:before {\n  content: \"\\E662\";\n}\n.mioss-icon-filter:before {\n  content: \"\\E663\";\n}\n.mioss-icon-file:before {\n  content: \"\\E664\";\n}\n.mioss-icon-exception:before {\n  content: \"\\E665\";\n}\n.mioss-icon-meh:before {\n  content: \"\\E666\";\n}\n.mioss-icon-meh-circle:before {\n  content: \"\\E666\";\n}\n.mioss-icon-meh-o:before {\n  content: \"\\E667\";\n}\n.mioss-icon-shopping-cart:before {\n  content: \"\\E668\";\n}\n.mioss-icon-save:before {\n  content: \"\\E669\";\n}\n.mioss-icon-user:before {\n  content: \"\\E66A\";\n}\n.mioss-icon-video-camera:before {\n  content: \"\\E66B\";\n}\n.mioss-icon-to-top:before {\n  content: \"\\E66C\";\n}\n.mioss-icon-team:before {\n  content: \"\\E66D\";\n}\n.mioss-icon-tablet:before {\n  content: \"\\E66E\";\n}\n.mioss-icon-solution:before {\n  content: \"\\E66F\";\n}\n.mioss-icon-search:before {\n  content: \"\\E670\";\n}\n.mioss-icon-share-alt:before {\n  content: \"\\E671\";\n}\n.mioss-icon-setting:before {\n  content: \"\\E672\";\n}\n.mioss-icon-poweroff:before {\n  content: \"\\E6D5\";\n}\n.mioss-icon-picture:before {\n  content: \"\\E674\";\n}\n.mioss-icon-phone:before {\n  content: \"\\E675\";\n}\n.mioss-icon-paper-clip:before {\n  content: \"\\E676\";\n}\n.mioss-icon-notification:before {\n  content: \"\\E677\";\n}\n.mioss-icon-mobile:before {\n  content: \"\\E678\";\n}\n.mioss-icon-menu-unfold:before {\n  content: \"\\E679\";\n}\n.mioss-icon-inbox:before {\n  content: \"\\E67A\";\n}\n.mioss-icon-lock:before {\n  content: \"\\E67B\";\n}\n.mioss-icon-qrcode:before {\n  content: \"\\E67C\";\n}\n.mioss-icon-play-circle:before {\n  content: \"\\E6D0\";\n}\n.mioss-icon-play-circle-o:before {\n  content: \"\\E6D1\";\n}\n.mioss-icon-tag:before {\n  content: \"\\E6D2\";\n}\n.mioss-icon-tag-o:before {\n  content: \"\\E6D3\";\n}\n.mioss-icon-tags:before {\n  content: \"\\E67D\";\n}\n.mioss-icon-tags-o:before {\n  content: \"\\E67E\";\n}\n.mioss-icon-cloud-o:before {\n  content: \"\\E67F\";\n}\n.mioss-icon-cloud:before {\n  content: \"\\E680\";\n}\n.mioss-icon-cloud-upload:before {\n  content: \"\\E681\";\n}\n.mioss-icon-cloud-download:before {\n  content: \"\\E682\";\n}\n.mioss-icon-cloud-download-o:before {\n  content: \"\\E683\";\n}\n.mioss-icon-cloud-upload-o:before {\n  content: \"\\E684\";\n}\n.mioss-icon-environment:before {\n  content: \"\\E685\";\n}\n.mioss-icon-environment-o:before {\n  content: \"\\E686\";\n}\n.mioss-icon-eye:before {\n  content: \"\\E687\";\n}\n.mioss-icon-eye-o:before {\n  content: \"\\E688\";\n}\n.mioss-icon-camera:before {\n  content: \"\\E689\";\n}\n.mioss-icon-camera-o:before {\n  content: \"\\E68A\";\n}\n.mioss-icon-windows:before {\n  content: \"\\E68B\";\n}\n.mioss-icon-apple:before {\n  content: \"\\E68C\";\n}\n.mioss-icon-apple-o:before {\n  content: \"\\E6D4\";\n}\n.mioss-icon-android:before {\n  content: \"\\E68D\";\n}\n.mioss-icon-aliwangwang:before {\n  content: \"\\E68E\";\n}\n.mioss-icon-aliwangwang-o:before {\n  content: \"\\E68F\";\n}\n.mioss-icon-export:before {\n  content: \"\\E691\";\n}\n.mioss-icon-edit:before {\n  content: \"\\E692\";\n}\n.mioss-icon-circle-down-o:before {\n  content: \"\\E693\";\n}\n.mioss-icon-circle-down-:before {\n  content: \"\\E694\";\n}\n.mioss-icon-appstore-o:before {\n  content: \"\\E695\";\n}\n.mioss-icon-appstore:before {\n  content: \"\\E696\";\n}\n.mioss-icon-scan:before {\n  content: \"\\E697\";\n}\n.mioss-icon-file-text:before {\n  content: \"\\E698\";\n}\n.mioss-icon-folder-open:before {\n  content: \"\\E699\";\n}\n.mioss-icon-hdd:before {\n  content: \"\\E69A\";\n}\n.mioss-icon-ie:before {\n  content: \"\\E69B\";\n}\n.mioss-icon-file-jpg:before {\n  content: \"\\E69C\";\n}\n.mioss-icon-like:before {\n  content: \"\\E69D\";\n}\n.mioss-icon-dislike:before {\n  content: \"\\E69E\";\n}\n.mioss-icon-delete:before {\n  content: \"\\E69F\";\n}\n.mioss-icon-enter:before {\n  content: \"\\E6A0\";\n}\n.mioss-icon-pushpin-o:before {\n  content: \"\\E6A1\";\n}\n.mioss-icon-pushpin:before {\n  content: \"\\E6A2\";\n}\n.mioss-icon-heart:before {\n  content: \"\\E6A3\";\n}\n.mioss-icon-heart-o:before {\n  content: \"\\E6A4\";\n}\n.mioss-icon-pay-circle:before {\n  content: \"\\E6A5\";\n}\n.mioss-icon-pay-circle-o:before {\n  content: \"\\E6A6\";\n}\n.mioss-icon-smile:before {\n  content: \"\\E6A7\";\n}\n.mioss-icon-smile-circle:before {\n  content: \"\\E6A7\";\n}\n.mioss-icon-smile-o:before {\n  content: \"\\E6A8\";\n}\n.mioss-icon-frown-o:before {\n  content: \"\\E6A9\";\n}\n.mioss-icon-calculator:before {\n  content: \"\\E6AA\";\n}\n.mioss-icon-message:before {\n  content: \"\\E6AB\";\n}\n.mioss-icon-chrome:before {\n  content: \"\\E6AC\";\n}\n.mioss-icon-github:before {\n  content: \"\\E6AD\";\n}\n.mioss-icon-file-unknown:before {\n  content: \"\\E6AF\";\n}\n.mioss-icon-file-excel:before {\n  content: \"\\E6B0\";\n}\n.mioss-icon-file-ppt:before {\n  content: \"\\E6B1\";\n}\n.mioss-icon-file-word:before {\n  content: \"\\E6B2\";\n}\n.mioss-icon-file-pdf:before {\n  content: \"\\E6B3\";\n}\n.mioss-icon-desktop:before {\n  content: \"\\E6B4\";\n}\n.mioss-icon-upload:before {\n  content: \"\\E6B6\";\n}\n.mioss-icon-download:before {\n  content: \"\\E6B7\";\n}\n.mioss-icon-pie-chart:before {\n  content: \"\\E6B8\";\n}\n.mioss-icon-unlock:before {\n  content: \"\\E6BA\";\n}\n.mioss-icon-calendar:before {\n  content: \"\\E6BB\";\n}\n.mioss-icon-windows-o:before {\n  content: \"\\E6BC\";\n}\n.mioss-icon-dot-chart:before {\n  content: \"\\E6BD\";\n}\n.mioss-icon-bar-chart:before {\n  content: \"\\E6BE\";\n}\n.mioss-icon-code:before {\n  content: \"\\E6BF\";\n}\n.mioss-icon-plus-square:before {\n  content: \"\\E6C0\";\n}\n.mioss-icon-minus-square:before {\n  content: \"\\E6C1\";\n}\n.mioss-icon-close-square:before {\n  content: \"\\E6C2\";\n}\n.mioss-icon-close-square-o:before {\n  content: \"\\E6C3\";\n}\n.mioss-icon-check-square:before {\n  content: \"\\E6C4\";\n}\n.mioss-icon-check-square-o:before {\n  content: \"\\E6C5\";\n}\n.mioss-icon-fast-backward:before {\n  content: \"\\E6C6\";\n}\n.mioss-icon-fast-forward:before {\n  content: \"\\E6C7\";\n}\n.mioss-icon-up-square:before {\n  content: \"\\E6C8\";\n}\n.mioss-icon-down-square:before {\n  content: \"\\E6C9\";\n}\n.mioss-icon-left-square:before {\n  content: \"\\E6CA\";\n}\n.mioss-icon-right-square:before {\n  content: \"\\E6CB\";\n}\n.mioss-icon-right-square-o:before {\n  content: \"\\E6CC\";\n}\n.mioss-icon-left-square-o:before {\n  content: \"\\E6CD\";\n}\n.mioss-icon-down-square-o:before {\n  content: \"\\E6CE\";\n}\n.mioss-icon-up-square-o:before {\n  content: \"\\E6CF\";\n}\n.mioss-icon-loading:before {\n  content: \"\\E6AE\";\n}\n.mioss-icon-spin {\n  display: inline-block;\n  animation: loadingCircle 1.6s infinite linear;\n}\n", ""]);

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

/***/ }
/******/ ])
});
;