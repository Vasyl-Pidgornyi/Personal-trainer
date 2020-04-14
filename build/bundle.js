/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/header.js */ "./src/js/header.js");
/* harmony import */ var _js_trainerBooking_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/trainerBooking.js */ "./src/js/trainerBooking.js");
/* harmony import */ var _js_beginnerOrPro_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/beginnerOrPro.js */ "./src/js/beginnerOrPro.js");
/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sass/index.scss */ "./src/sass/index.scss");
/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sass_index_scss__WEBPACK_IMPORTED_MODULE_3__);




var pageContainer = document.querySelector(".page-container");
var pageHeader = new _js_header_js__WEBPACK_IMPORTED_MODULE_0__["Header"](pageContainer);
pageHeader.render();
var bookTrainer = new _js_trainerBooking_js__WEBPACK_IMPORTED_MODULE_1__["trainerBooking"](pageContainer);
bookTrainer.render();
var beginnerOrPro = new _js_beginnerOrPro_js__WEBPACK_IMPORTED_MODULE_2__["noobOrPro"](pageContainer);
beginnerOrPro.render();

/***/ }),

/***/ "./src/js/beginnerOrPro.js":
/*!*********************************!*\
  !*** ./src/js/beginnerOrPro.js ***!
  \*********************************/
/*! exports provided: noobOrPro */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noobOrPro", function() { return noobOrPro; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var noobOrPro = /*#__PURE__*/function () {
  function noobOrPro(rootElement) {
    _classCallCheck(this, noobOrPro);

    this.rootElement = rootElement;
  }

  _createClass(noobOrPro, [{
    key: "render",
    value: function render() {
      var leftSideLink = "#";
      this.contentCoverDiv = document.createElement("div");
      this.contentCoverDiv.classList.add("beginnerOrPro-cover");
      this.rootElement.append(this.contentCoverDiv); // Left side content

      this.contentDivLeft = document.createElement("div"); //left side div

      this.contentDivLeft.classList.add("beginnerOrPro-cover__content", "left-background");
      this.contentCoverDiv.append(this.contentDivLeft);
      this.descriptionBox = document.createElement("div"); //description content cover

      this.descriptionBox.classList.add("beginnerOrPro-cover__content_description-cover");
      this.contentDivLeft.append(this.descriptionBox);
      this.leftDescription = document.createElement("a"); //left side description text

      this.leftDescription.classList.add("beginnerOrPro-cover__content_description-cover_description");
      this.leftDescription.textContent = "beginners";
      this.leftDescription.href = leftSideLink;
      this.descriptionBox.append(this.leftDescription);
      this.leftLinkIcon = document.createElement("a"); //left side description image

      this.leftLinkIcon.classList.add("beginnerOrPro-cover__content_description-cover_image");
      this.leftLinkIcon.href = leftSideLink;
      this.descriptionBox.append(this.leftLinkIcon);
      this.backgroundTransitionLeft = document.createElement("a"); //left side background transition

      this.backgroundTransitionLeft.classList.add("beginnerOrPro-cover__content_background-transition");
      this.contentDivLeft.append(this.backgroundTransitionLeft); // Right side content

      this.contentDivRight = document.createElement("div"); //right side div

      this.contentDivRight.classList.add("beginnerOrPro-cover__content", "right-background");
      this.contentCoverDiv.append(this.contentDivRight);
      this.backgroundTransitionRight = document.createElement("a"); //right side background transition

      this.backgroundTransitionRight.classList.add("beginnerOrPro-cover__content_background-transition");
      this.contentDivRight.append(this.backgroundTransitionRight);
    }
  }]);

  return noobOrPro;
}();

/***/ }),

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Header = /*#__PURE__*/function () {
  function Header(rootElement) {
    _classCallCheck(this, Header);

    this.rootElement = rootElement;
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      this.headerDiv = document.createElement("div");
      this.headerDiv.classList.add("page-header");
      this.rootElement.append(this.headerDiv);
      var navButtons = ["home", "traning", "about", "winnings", "the studio", "book online", "plans", "contact"];

      for (var i = 0; i < navButtons.length; i++) {
        this.navRefference = document.createElement("a");
        this.navRefference.classList.add("page-header__nav");
        this.navRefference.href = "#";
        this.navRefference.innerText = navButtons[i];
        this.headerDiv.append(this.navRefference);
      }

      this.logInContainer = document.createElement("div");
      this.logInContainer.classList.add("page-header__logIn");
      this.logInImage = document.createElement("img");
      this.logInImage.classList.add("page-header__logIn_icon");
      this.logInImage.src = "../src/assets/images/svg/login_icon2.svg";
      this.logInText = document.createElement("p");
      this.logInText.classList.add("page-header__logIn_text");
      this.logInText.textContent = "Log In";
      this.logInLink = document.createElement("a");
      this.logInLink.classList.add("page-header__logIn_link");
      this.logInLink.href = "#";
      this.headerDiv.append(this.logInContainer);
      this.logInContainer.append(this.logInImage);
      this.logInContainer.append(this.logInText);
      this.logInContainer.append(this.logInLink);
    }
  }]);

  return Header;
}();

/***/ }),

/***/ "./src/js/trainerBooking.js":
/*!**********************************!*\
  !*** ./src/js/trainerBooking.js ***!
  \**********************************/
/*! exports provided: trainerBooking */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trainerBooking", function() { return trainerBooking; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var trainerBooking = /*#__PURE__*/function () {
  function trainerBooking(rootElement) {
    _classCallCheck(this, trainerBooking);

    this.rootElement = rootElement;
  }

  _createClass(trainerBooking, [{
    key: "render",
    value: function render() {
      this.pageContentDiv = document.createElement("div");
      this.pageContentDiv.classList.add("trainerBooking-continer");
      this.rootElement.append(this.pageContentDiv);
      this.trainerHeader = document.createElement("h1");
      this.trainerDescription = document.createElement("p");
      this.bookButton = document.createElement("a");
      this.trainerHeader.classList.add("trainerBooking-continer__header");
      this.trainerDescription.classList.add("trainerBooking-continer__description");
      this.bookButton.classList.add("trainerBooking-continer__btn");
      this.trainerHeader.textContent = "JOEY DIXON";
      this.trainerDescription.textContent = "training with a world champion";
      this.bookButton.textContent = "Book Now";
      this.bookButton.href = "#";
      this.pageContentDiv.append(this.trainerHeader);
      this.pageContentDiv.append(this.trainerDescription);
      this.pageContentDiv.append(this.bookButton);
    }
  }]);

  return trainerBooking;
}();

/***/ }),

/***/ "./src/sass/index.scss":
/*!*****************************!*\
  !*** ./src/sass/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map