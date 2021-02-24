/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/sarahmaziers/Desktop/Infographie 2e/Vilain - Multimedia/baballes 2/src/app.js: Unexpected token, expected \")\" (22:43)\n\n\u001b[0m \u001b[90m 20 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 21 |\u001b[39m \u001b[36mfunction\u001b[39m animate(){\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 22 |\u001b[39m     \u001b[36mif\u001b[39m(position\u001b[33m.\u001b[39my \u001b[33m+\u001b[39m radius \u001b[33m>\u001b[39m canvas\u001b[33m.\u001b[39mheight \u001b[33mOR\u001b[39m position\u001b[33m.\u001b[39my \u001b[33m-\u001b[39m radius \u001b[33m<\u001b[39m \u001b[35m0\u001b[39m){\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                                            \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 23 |\u001b[39m         ySpeed\u001b[33m=\u001b[39m\u001b[33m-\u001b[39mySpeed\u001b[0m\n\u001b[0m \u001b[90m 24 |\u001b[39m     }\u001b[0m\n\u001b[0m \u001b[90m 25 |\u001b[39m     position\u001b[33m.\u001b[39my\u001b[33m+=\u001b[39mySpeed\u001b[0m\n    at Parser._raise (/Users/sarahmaziers/Desktop/Infographie 2e/Vilain - Multimedia/baballes 2/node_modules/@babel/parser/lib/index.js:776:17)\n    at Parser.raiseWithData (/Users/sarahmaziers/Desktop/Infographie 2e/Vilain - Multimedia/baballes 2/node_modules/@babel/parser/lib/index.js:769:17)\n    at Parser.raise (/Users/sarahmaziers/Desktop/Infographie 2e/Vilain - Multimedia/baballes 2/node_modules/@babel/parser/lib/index.js:737:17)\n    at Parser.unexpected (/Users/sarahmaziers/Desktop/Infographie 2e/Vilain - Multimedia/baballes 2/node_modules/@babel/parser/lib/index.js:9675:16)\n    at Parser.expect (/Users/sarahmaziers/Desktop/Infographie 2e/Vilain - Multimedia/baballes 2/node_modules/@babel/parser/lib/index.js:9661:28)\n    at Parser.parseHeaderExpression (/Users/sarahmaziers/Desktop/Infographie 2e/Vilain - Multimedia/baballes 2/node_modules/@babel/parser/lib/index.js:12467:10)\n    at Parser.parseIfStatement (/Users/sarahmaziers/Desktop/Infographie 2e/Vilain - Multimedia/baballes 2/node_modules/@babel/parser/lib/index.js:12548:22)\n    at Parser.parseStatementContent (/Users/sarahmaziers/Desktop/Infographie 2e/Vilain - Multimedia/baballes 2/node_modules/@babel/parser/lib/index.js:12240:21)\n    at Parser.parseStatement (/Users/sarahmaziers/Desktop/Infographie 2e/Vilain - Multimedia/baballes 2/node_modules/@babel/parser/lib/index.js:12195:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/sarahmaziers/Desktop/Infographie 2e/Vilain - Multimedia/baballes 2/node_modules/@babel/parser/lib/index.js:12777:25)");

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {};
/************************************************************************/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./src/app.js"],
/******/ 			["./src/main.scss"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbaballes"] = self["webpackChunkbaballes"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;