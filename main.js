/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\nfunction contact () {\n  const contentID = document.getElementById('content')\n\n  const contactFormContainer = document.createElement('div')\n  const phoneNumber = document.createElement('h1')\n  phoneNumber.textContent = 'Phone-Number: +880123456789'\n\n  const adressNumber = document.createElement('h2')\n  adressNumber.textContent = 'Hollywood Boulevard 42, Los Angeles, USA'\n\n  const locationImage = document.createElement('img')\n  locationImage.src = '/src/assets/restaurant-location.png'\n\n  contactFormContainer.appendChild(phoneNumber)\n  contactFormContainer.appendChild(adressNumber)\n  contactFormContainer.appendChild(locationImage)\n\n  contentID.appendChild(contactFormContainer)\n}\n\n\n//# sourceURL=webpack://resturant-page/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initial_page_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial-page-loader */ \"./src/initial-page-loader.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\n(0,_menu__WEBPACK_IMPORTED_MODULE_2__.menuPage)()\n\n//# sourceURL=webpack://resturant-page/./src/index.js?");

/***/ }),

/***/ "./src/initial-page-loader.js":
/*!************************************!*\
  !*** ./src/initial-page-loader.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialPageLoader\": () => (/* binding */ initialPageLoader)\n/* harmony export */ });\nfunction initialPageLoader () {\n  const contentID = document.getElementById('content')\n\n  const mainContent = document.createElement('main')\n  mainContent.classList.add('main-text')\n  const mainContentDiv = document.createElement('div')\n  const headerTitle = document.createElement('h1')\n  headerTitle.textContent = 'Title'\n  const headerSubtitle = document.createElement('h3')\n  headerSubtitle.textContent = 'Subtitle'\n\n  mainContentDiv.appendChild(headerTitle)\n  mainContentDiv.appendChild(headerSubtitle)\n  mainContent.appendChild(mainContentDiv)\n  contentID.appendChild(mainContent)\n}\n\n\n//# sourceURL=webpack://resturant-page/./src/initial-page-loader.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuPage\": () => (/* binding */ menuPage)\n/* harmony export */ });\nfunction menuPage () {\n  const contentID = document.getElementById('content')\n\n  const menuContainer = document.createElement('div')\n  menuContainer.classList.add('menu-container')\n\n  const biriyaniOneDiv = document.createElement('div')\n  biriyaniOneDiv.classList.add('biriyani')\n  const biriyaniOneImage = document.createElement('img')\n  biriyaniOneImage.src = '/src/assets/DALL·E 2023-02-17 14.52.47 - An image of a bengali biriyani with a dark background for the homepage of a resturent website. .png'\n  const biriyaniOneName = document.createElement('h2')\n  biriyaniOneName.textContent = 'Bengali Bashmoti Biriyani'\n  biriyaniOneDiv.appendChild(biriyaniOneImage)\n  biriyaniOneDiv.appendChild(biriyaniOneName)\n\n  const biriyaniTwoDiv = document.createElement('div')\n  biriyaniTwoDiv.classList.add('biriyani')\n  const biriyaniTwoImage = document.createElement('img')\n  biriyaniTwoImage.src = '/src/assets/DALL·E 2023-02-17 14.53.24 - An image of a bengali biriyani with a dark background for the homepage of a resturent website. .png'\n  const biriyaniTwoName = document.createElement('h2')\n  biriyaniTwoName.textContent = 'Chickhen Biriyani'\n  biriyaniTwoDiv.appendChild(biriyaniTwoImage)\n  biriyaniTwoDiv.appendChild(biriyaniTwoName)\n\n  const biriyaniThreeDiv = document.createElement('div')\n  biriyaniThreeDiv.classList.add('biriyani')\n  const biriyaniThreeImage = document.createElement('img')\n  biriyaniThreeImage.src = '/src/assets/DALL·E 2023-02-17 14.54.00 - An image of a bengali biriyani with a dark background for the homepage of a resturent website 4K.  .png'\n  const biriyaniThreeName = document.createElement('h2')\n  biriyaniThreeName.textContent = 'Premium Chickhen Biriyani'\n  biriyaniThreeDiv.appendChild(biriyaniThreeImage)\n  biriyaniThreeDiv.appendChild(biriyaniThreeName)\n\n  const biriyaniFourDiv = document.createElement('div')\n  biriyaniFourDiv.classList.add('biriyani')\n  const biriyaniFourImage = document.createElement('img')\n  biriyaniFourImage.src = '/src/assets/DALL·E 2023-02-17 14.57.43 - different styles of biriyani with bengali essence for resturant menu page presentation that will attract anyone.png'\n  const biriyaniFourName = document.createElement('h2')\n  biriyaniFourName.textContent = 'Bengali Khicuri'\n  biriyaniFourDiv.appendChild(biriyaniFourImage)\n  biriyaniFourDiv.appendChild(biriyaniFourName)\n\n  menuContainer.appendChild(biriyaniOneDiv)\n  menuContainer.appendChild(biriyaniTwoDiv)\n  menuContainer.appendChild(biriyaniThreeDiv)\n  menuContainer.appendChild(biriyaniFourDiv)\n\n  contentID.appendChild(menuContainer)\n\n}\n\n\n//# sourceURL=webpack://resturant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;