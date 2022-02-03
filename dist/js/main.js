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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/render */ \"./modules/render.js\");\n/* harmony import */ var _modules_addUsers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addUsers */ \"./modules/addUsers.js\");\n/* harmony import */ var _modules_userService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/userService */ \"./modules/userService.js\");\n/* harmony import */ var _modules_removeUsers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/removeUsers */ \"./modules/removeUsers.js\");\n/* harmony import */ var _modules_changePermissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/changePermissions */ \"./modules/changePermissions.js\");\n/* harmony import */ var _modules_editUsers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/editUsers */ \"./modules/editUsers.js\");\n/* harmony import */ var _modules_filterUsers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/filterUsers */ \"./modules/filterUsers.js\");\n/* harmony import */ var _modules_sortUsers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sortUsers */ \"./modules/sortUsers.js\");\n/* harmony import */ var _modules_searchUsers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/searchUsers */ \"./modules/searchUsers.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.userService = new _modules_userService__WEBPACK_IMPORTED_MODULE_2__.UserService;\r\n\r\nuserService.getUsers().then(data => {\r\n   (0,_modules_render__WEBPACK_IMPORTED_MODULE_0__.render)(data)\r\n});\r\n\r\n(0,_modules_addUsers__WEBPACK_IMPORTED_MODULE_1__.addUsers)();\r\n(0,_modules_removeUsers__WEBPACK_IMPORTED_MODULE_3__.removeUsers)();\r\n(0,_modules_changePermissions__WEBPACK_IMPORTED_MODULE_4__.changePermissions)();\r\n(0,_modules_editUsers__WEBPACK_IMPORTED_MODULE_5__.editUsers)();\r\n(0,_modules_filterUsers__WEBPACK_IMPORTED_MODULE_6__.filterUsers)();\r\n(0,_modules_sortUsers__WEBPACK_IMPORTED_MODULE_7__.sortUsers)();\r\n(0,_modules_searchUsers__WEBPACK_IMPORTED_MODULE_8__.searchUsers)();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/addUsers.js":
/*!*****************************!*\
  !*** ./modules/addUsers.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addUsers\": () => (/* binding */ addUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./modules/render.js\");\n\r\n\r\nconst addUsers = () => {\r\n   const form = document.querySelector('form')\r\n   const nameInput = form.querySelector('#form-name');\r\n   const emailInput = form.querySelector('#form-email');\r\n   const childrenInput = form.querySelector('#form-children');\r\n\r\n   form.addEventListener('submit', (e) => {\r\n      e.preventDefault();\r\n\r\n      if (!form.dataset.method) {\r\n         const user = {\r\n            name: nameInput.value,\r\n            email: emailInput.value,\r\n            children: childrenInput.checked,\r\n            permissions: false\r\n         }\r\n         userService.addUser(user).then(() => {\r\n            userService.getUsers().then(users => {\r\n               ;(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users);\r\n               form.reset();\r\n            });\r\n         });\r\n      };\r\n\r\n   });\r\n};\n\n//# sourceURL=webpack:///./modules/addUsers.js?");

/***/ }),

/***/ "./modules/changePermissions.js":
/*!**************************************!*\
  !*** ./modules/changePermissions.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changePermissions\": () => (/* binding */ changePermissions)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./modules/render.js\");\n\r\nconst changePermissions = () => {\r\n   const tbody = document.getElementById('table-body');\r\n\r\n   tbody.addEventListener('click', (event) => {\r\n      if (event.target.closest('input[type=checkbox]')) {\r\n         const tr = event.target.closest('tr')\r\n         const input = tr.querySelector('input[type=checkbox]')\r\n         const id = tr.dataset.key\r\n\r\n         userService.changeUser(id, {\r\n            permissions: input.checked\r\n         }).then(res => {\r\n            userService.getUsers().then(users => {\r\n               ;(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users);\r\n            })\r\n         })\r\n      }\r\n   })\r\n}\n\n//# sourceURL=webpack:///./modules/changePermissions.js?");

/***/ }),

/***/ "./modules/editUsers.js":
/*!******************************!*\
  !*** ./modules/editUsers.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"editUsers\": () => (/* binding */ editUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./modules/render.js\");\n\r\n\r\nconst editUsers = () => {\r\n   const tbody = document.getElementById('table-body');\r\n   const form = document.querySelector('form')\r\n   const nameInput = form.querySelector('#form-name');\r\n   const emailInput = form.querySelector('#form-email');\r\n   const childrenInput = form.querySelector('#form-children');\r\n\r\n   tbody.addEventListener('click', (e) => {\r\n      if (e.target.closest('.btn-edit')) {\r\n         const tr = e.target.closest('tr');\r\n         const id = tr.dataset.key\r\n\r\n         userService.getUser(id).then(user => {\r\n            nameInput.value = user.name;\r\n            emailInput.value = user.email;\r\n            childrenInput.checked = user.children;\r\n\r\n            form.dataset.method = id;\r\n         })\r\n      }\r\n   })\r\n   form.addEventListener('submit', (e) => {\r\n      e.preventDefault();\r\n\r\n      if (form.dataset.method) {\r\n         const id = form.dataset.method;\r\n         const user = {\r\n            name: nameInput.value,\r\n            email: emailInput.value,\r\n            children: childrenInput.checked,\r\n            permissions: false\r\n         }\r\n\r\n         userService.editUser(id, user).then(() => {\r\n            userService.getUsers().then(users => {\r\n               ;(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users);\r\n               form.reset();\r\n               form.removeAttribute('data-method')\r\n            });\r\n         });\r\n      };\r\n\r\n   });\r\n}\n\n//# sourceURL=webpack:///./modules/editUsers.js?");

/***/ }),

/***/ "./modules/filterUsers.js":
/*!********************************!*\
  !*** ./modules/filterUsers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filterUsers\": () => (/* binding */ filterUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./modules/render.js\");\n\r\nconst filterUsers = () => {\r\n   const btnIsChildren = document.getElementById('btn-isChildren');\r\n   const btnIsPermissions = document.getElementById('btn-isPermissions');\r\n   const btnIsAll = document.getElementById('btn-isAll');\r\n\r\n   btnIsChildren.addEventListener('click', () => {\r\n      userService.filterUsers('children').then(users => {\r\n         (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users);\r\n      })\r\n   })\r\n\r\n   btnIsPermissions.addEventListener('click', () => {\r\n      userService.filterUsers('permissions').then(users => {\r\n         ;(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users);\r\n      })\r\n   })\r\n\r\n   btnIsAll.addEventListener('click', () => {\r\n      userService.getUsers().then(users => {\r\n         ;(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users);\r\n      })\r\n   })\r\n}\n\n//# sourceURL=webpack:///./modules/filterUsers.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"debounce\": () => (/* binding */ debounce)\n/* harmony export */ });\nconst debounce = (func, ms = 300) => {\r\n   let timer\r\n   return (...args) => {\r\n      clearTimeout(timer)\r\n      timer = setTimeout(() => {\r\n         func.apply(undefined, args)\r\n      }, ms)\r\n   }\r\n\r\n}\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/removeUsers.js":
/*!********************************!*\
  !*** ./modules/removeUsers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removeUsers\": () => (/* binding */ removeUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./modules/render.js\");\n\r\nconst removeUsers = () => {\r\n   const tbody = document.getElementById('table-body');\r\n\r\n   tbody.addEventListener('click', (event) => {\r\n      if (event.target.closest('.btn-remove')) {\r\n         const tr = event.target.closest('tr')\r\n         const id = tr.dataset.key\r\n\r\n         userService.removeUser(id).then(() => {\r\n            userService.getUsers().then(users => {\r\n               ;(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users);\r\n            })\r\n         })\r\n      }\r\n   })\r\n}\n\n//# sourceURL=webpack:///./modules/removeUsers.js?");

/***/ }),

/***/ "./modules/render.js":
/*!***************************!*\
  !*** ./modules/render.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\nconst render = (users) => {\r\n   const tbody = document.getElementById('table-body');\r\n   tbody.innerHTML = '';\r\n\r\n   users.forEach(user => {\r\n      tbody.insertAdjacentHTML('beforeend', `\r\n            <tr data-key=\"${user.id}\">\r\n            <th scope=\"row\">${user.id}</th>\r\n            <td>${user.name}</td>\r\n            <td>${user.email}</td>\r\n            <td>${user.children ? 'Есть' : 'Нет'}</td>\r\n            <td>\r\n                <div class=\"form-check form-switch\">\r\n                    <input class=\"form-check-input\" type=\"checkbox\" role=\"switch\"\r\n                        id=\"form-children\" ${user.permissions ? 'checked' : ''}>\r\n                </div>\r\n            </td>\r\n            <td>\r\n                <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Basic example\">\r\n                    <button type=\"button\" class=\"btn btn-warning btn-edit\">\r\n                        <i class=\"bi-pencil-square\"></i>\r\n                    </button>\r\n                    <button type=\"button\" class=\"btn btn-danger btn-remove\">\r\n                        <i class=\"bi-person-x\"></i>\r\n                    </button>\r\n                </div>\r\n            </td>\r\n            </tr>\r\n        `)\r\n   });\r\n};\n\n//# sourceURL=webpack:///./modules/render.js?");

/***/ }),

/***/ "./modules/searchUsers.js":
/*!********************************!*\
  !*** ./modules/searchUsers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchUsers\": () => (/* binding */ searchUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./modules/render.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\n\r\nconst searchUsers = () => {\r\n   const input = document.getElementById('search-input');\r\n\r\n   const debounceSearch = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.debounce)(() => {\r\n      userService.getSearchUsers(input.value).then(users => {\r\n         (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users);\r\n         (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.debounce)()\r\n      }, 500)\r\n   })\r\n\r\n   input.addEventListener('input', debounceSearch)\r\n}\n\n//# sourceURL=webpack:///./modules/searchUsers.js?");

/***/ }),

/***/ "./modules/sortUsers.js":
/*!******************************!*\
  !*** ./modules/sortUsers.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sortUsers\": () => (/* binding */ sortUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./modules/render.js\");\n\r\n\r\nconst sortUsers = () => {\r\n   const headerSortIsChildren = document.getElementById('sort-is-children');\r\n\r\n   let isSort = false\r\n\r\n   headerSortIsChildren.style.cursor = 'pointer';\r\n   //getSortUsers\r\n   headerSortIsChildren.addEventListener('click', () => {\r\n      userService.getSortUsers({\r\n         name: 'children',\r\n         value: isSort ? 'asc' : 'desc'\r\n      }).then(users => {\r\n         (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users);\r\n      })\r\n      isSort = !isSort\r\n\r\n   })\r\n}\n\n//# sourceURL=webpack:///./modules/sortUsers.js?");

/***/ }),

/***/ "./modules/userService.js":
/*!********************************!*\
  !*** ./modules/userService.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserService\": () => (/* binding */ UserService)\n/* harmony export */ });\nclass UserService {\r\n   getUsers() {\r\n      return fetch('http://localhost:4545/users')\r\n         .then(res => res.json())\r\n   }\r\n   addUser(user) {\r\n      return fetch('http://localhost:4545/users', {\r\n         method: 'POST',\r\n         headers: {\r\n            \"Content-Type\": \"application/json\",\r\n         },\r\n         body: JSON.stringify(user)\r\n      }).then(res => res.json())\r\n   };\r\n   removeUser(id) {\r\n      return fetch(`http://localhost:4545/users/${id}`, {\r\n         method: 'DELETE'\r\n      }).then(res => res.json())\r\n   };\r\n   changeUser(id, data) {\r\n      return fetch(`http://localhost:4545/users/${id}`, {\r\n         method: 'PATCH',\r\n         body: JSON.stringify(data),\r\n         headers: {\r\n            \"Content-Type\": \"application/json\",\r\n         },\r\n      }).then(res => res.json())\r\n   }\r\n   getUser(id) {\r\n      return fetch(`http://localhost:4545/users/${id}`)\r\n         .then(res => res.json())\r\n   }\r\n   editUser(id, user) {\r\n      return fetch(`http://localhost:4545/users/${id}`, {\r\n         method: 'PUT',\r\n         body: JSON.stringify(user),\r\n         headers: {\r\n            \"Content-Type\": \"application/json\",\r\n         },\r\n      }).then(res => res.json())\r\n   }\r\n   filterUsers(filterOption) {\r\n      return fetch(`http://localhost:4545/users?${filterOption}=true`)\r\n         .then(res => res.json())\r\n   }\r\n   getSortUsers(sortOption) {\r\n      return fetch(`http://localhost:4545/users?_sort=${sortOption.name}&_order=${sortOption.value}`)\r\n         .then(res => res.json())\r\n   }\r\n   getSearchUsers(str) {\r\n      return fetch(`http://localhost:4545/users?name_like=${str}`)\r\n         .then(res => res.json())\r\n   }\r\n}\n\n//# sourceURL=webpack:///./modules/userService.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;