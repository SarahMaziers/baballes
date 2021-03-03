/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Circle.js":
/*!***********************!*\
  !*** ./src/Circle.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Circle = /*#__PURE__*/function () {
  function Circle(animation) {
    _classCallCheck(this, Circle);

    //canvas,ctx,mouse
    this.mouse = animation.mouse;
    this.ctx = animation.ctx;
    this.canvas = animation.canvas;
    this.speed = {
      x: 2,
      y: 2
    };
    this.radius = 5 + Math.random() * 5; //entre 5 et 10

    this.minRadius = this.radius; //taille de départ et donc minimum

    this.position = {
      x: this.radius + Math.random() * (this.canvas.width - 2 * this.radius),
      y: this.radius + Math.random() * (this.canvas.height - 2 * this.radius)
    };
    this.color = Circle.colors.sort(function () {
      return 0.5 - Math.random();
    })[0]; //moyen de tirer un evaleur aléatoire dans un array

    this.update();
  }

  _createClass(Circle, [{
    key: "draw",
    value: function draw() {
      this.ctx.fillstyle = this.color;
      this.ctx.beginPath();
      this.ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
      this.ctx.fill();
    }
  }, {
    key: "update",
    value: function update() {
      if (this.position.y + this.radius > this.canvas.height || this.position.y - this.radius < 0) {
        this.speed.y = -this.speed.y;
      }

      if (this.position.x + this.radius > this.canvas.width || this.position.x - this.radius < 0) {
        this.speed.x = -this.speed.x;
      }

      this.position.y += this.speed.y;
      this.position.x += this.speed.x; //interact with the mouse

      if (this.position.y >= this.mouse.y - this.mouse.zoneSize / 2 && this.position.y <= this.mouse.y + this.mouse.zoneSize / 2 && this.position.x > this.mouse.x - this.mouse.zoneSize / 2 && this.position.x < this.mouse.x + this.mouse.zoneSize / 2 && this.radius < Circle.maxRadius) {
        this.radius += 1;
      } else if (this.radius > this.minRadius) {
        this.radius -= 1;
      }

      this.draw();
    }
  }], [{
    key: "colors",
    get: function get() {
      return ['#40A497', 'black', 'red'];
    }
  }, {
    key: "maxRadius",
    get: function get() {
      return 30;
    }
  }]);

  return Circle;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Circle);

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Circle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Circle */ "./src/Circle.js");

var animation = {
  canvas: document.querySelector('canvas'),
  circles: [],
  circlesCount: 20,
  ctx: null,
  //car on peut pas faire référence à d'autres propriétés lors de la déclaration
  mouse: {
    x: undefined,
    y: undefined,
    zoneSize: 50
  },
  init: function init() {
    var _this = this;

    this.ctx = this.canvas.getContext('2d'); //this car on fait référence aux propriétés de l'objet

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    for (var i = 0; i < this.circlesCount; i++) {
      this.circles.push(new _Circle__WEBPACK_IMPORTED_MODULE_0__.default(animation)); //this.canvas, this.ctx,this.mouse

      window.addEventListener('resize', function () {
        _this.canvas.width = window.innerWidth;
        _this.canvas.height = window.innerHeight;
      });
      this.animate();
    }
  },
  animate: function animate() {
    var _this2 = this;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.circles.forEach(function (circle) {
      return circle.update();
    }); //dire à chacun de nos cercles de se mettre à jour

    window.requestAnimationFrame(function () {
      _this2.animate();
    }); // la prochaine fois que tu rafraichis le code, c-a-d 60x/seconde, appelle cette fonction

    window.addEventListener('mousemove', function (e) {
      _this2.mouse.x = e.x;
      console.log('uhuhuhu');
      _this2.mouse.y = e.y; //on utilise les coordonnées de l'évènement
    });
  }
};
animation.init(); //ctx.fillstyle=circle.colors.sort(()=>0.5-Math.random()); //moyen de tirer un evaleur aléatoire dans un array
//function animate(){
//  if(circle.position.y + radius > canvas.height || circle.position.y - radius < 0){
//  circle.speed.y=-circle.speed.y
//  }
//   if(circle.position.x + radius > canvas.width || circle.position.x - radius < 0){
//  circle.speed.x=-circle.speed.x
//  }
// circle.position.y+=circle.speed.y
// circle.position.x+=circle.speed.x
//  ctx.clearRect(0,0,canvas.width,canvas.height) //on demande à Canvas de s'effacer sinon les cercles vont se dessiner les uns sur les autres
//draw();
// window.requestAnimationFrame(animate);
//}
//draw()
//animate()

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
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