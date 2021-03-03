/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
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
/************************************************************************/
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/Circle.js ***!
  \***********************/
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
/******/ })()
;