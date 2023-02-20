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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initial_page_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial-page-loader */ \"./src/initial-page-loader.js\");\n\n\n(0,_initial_page_loader__WEBPACK_IMPORTED_MODULE_0__.initialPageLoader)()\n\n\n//# sourceURL=webpack://resturant-page/./src/index.js?");

/***/ }),

/***/ "./src/initial-page-loader.js":
/*!************************************!*\
  !*** ./src/initial-page-loader.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialPageLoader\": () => (/* binding */ initialPageLoader)\n/* harmony export */ });\nfunction initialPageLoader () {\n  const contentID = document.getElementById('content')\n  // Making the navigation bar\n  const navigationContainer = document.createElement('div')\n  navigationContainer.classList.add('nav')\n  // Nav elements gonna be flexed upon\n  const navigationLogo = document.createElement('div')\n  navigationLogo.classList.add('logo')\n  const img = document.createElement('img')\n\n  navigationLogo.appendChild(img)\n  const navigationLinks = document.createElement('div')\n  navigationLinks.classList.add('navigation-options')\n  const navigationList = document.createElement('ul')\n\n  const navigationLineHome = document.createElement('li')\n  const navigationLinksHome = document.createElement('a')\n  navigationLinksHome.href = '#'\n  navigationLinksHome.textContent = 'Home'\n  navigationLineHome.appendChild(navigationLinksHome)\n\n  const navigationLineMenu = document.createElement('li')\n  const navigationLinksMenu = document.createElement('a')\n  navigationLinksMenu.href = '#'\n  navigationLinksMenu.textContent = 'Menu'\n  navigationLineMenu.appendChild(navigationLinksMenu)\n\n  const navigationLineContact = document.createElement('li')\n  const navigationLinksContact = document.createElement('a')\n  navigationLinksContact.href = '#'\n  navigationLinksContact.textContent = 'Contact'\n  navigationLineContact.appendChild(navigationLinksContact)\n\n  navigationList.appendChild(navigationLineHome)\n  navigationList.appendChild(navigationLineMenu)\n  navigationList.appendChild(navigationLineContact)\n\n  navigationLinks.appendChild(navigationList)\n\n  navigationContainer.appendChild(navigationLogo)\n  navigationContainer.appendChild(navigationLinks)\n  contentID.appendChild(navigationContainer)\n  // ----------------------------------------------------\n\n  const mainContent = document.createElement('main')\n  mainContent.classList.add('main-text')\n  const mainContentDiv = document.createElement('div')\n  const headerTitle = document.createElement('h1')\n  headerTitle.textContent = 'Title'\n  const headerSubtitle = document.createElement('h3')\n  headerSubtitle.textContent = 'Subtitle'\n\n  mainContentDiv.appendChild(headerTitle)\n  mainContentDiv.appendChild(headerSubtitle)\n  mainContent.appendChild(mainContentDiv)\n  contentID.appendChild(mainContent)\n}\n\n\n//# sourceURL=webpack://resturant-page/./src/initial-page-loader.js?");

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