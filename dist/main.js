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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(http://fonts.cdnfonts.com/css/poppins);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\r\\n::after,\\r\\n::before {\\r\\n    box-sizing: border-box;\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n    -webkit-box-sizing: border-box;\\r\\n    font-family: 'Poppins', sans-serif;\\r\\n}\\r\\n\\r\\nul li {\\r\\n    list-style: none;\\r\\n}\\r\\n\\r\\nh1,\\r\\nh1 span,\\r\\nh2,\\r\\nh3,\\r\\nh4,\\r\\nh5,\\r\\nh6,\\r\\n.btn {\\r\\n    font-family: 'Poppins', sans-serif;\\r\\n}\\r\\n\\r\\nbody {\\r\\n    background: #383a59;\\r\\n}\\r\\n\\r\\n.meal-details {\\r\\n    position: fixed;\\r\\n    top: 50%;\\r\\n    left: 50%;\\r\\n    transform: translate(-50%, -50%);\\r\\n    color: #000;\\r\\n    background: bisque;\\r\\n    width: 50%;\\r\\n    height: 100%;\\r\\n    overflow-y: scroll;\\r\\n    border-radius: 0.2rem;\\r\\n    text-align: center;\\r\\n    padding: 2rem 0;\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n.meal-details-resevation {\\r\\n    position: fixed;\\r\\n    top: 50%;\\r\\n    left: 50%;\\r\\n    transform: translate(-50%, -50%);\\r\\n    color: #000;\\r\\n    background: bisque;\\r\\n    width: 50%;\\r\\n    height: 100%;\\r\\n    overflow-y: scroll;\\r\\n    border-radius: 0.2rem;\\r\\n    text-align: center;\\r\\n    padding: 2rem 0;\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n.meal-details::-webkit-scrollbar {\\r\\n    width: 10px;\\r\\n}\\r\\n\\r\\n.meal-details::-webkit-scrollbar-thumb {\\r\\n    background: #fff;\\r\\n    border-radius: 2rem;\\r\\n}\\r\\n\\r\\n.meal-details-resevation::-webkit-scrollbar {\\r\\n    width: 10px;\\r\\n}\\r\\n\\r\\n.meal-details-resevation::-webkit-scrollbar-thumb {\\r\\n    background: #fff;\\r\\n    border-radius: 2rem;\\r\\n}\\r\\n\\r\\n.showComment {\\r\\n    display: block;\\r\\n    height: 100%;\\r\\n    overflow: scroll;\\r\\n}\\r\\n\\r\\n.meal-details-content {\\r\\n    margin: 2rem;\\r\\n}\\r\\n\\r\\n.close-btn {\\r\\n    position: absolute;\\r\\n    right: 2rem;\\r\\n    top: 2rem;\\r\\n    font-size: 1.8rem;\\r\\n    background: #fff;\\r\\n    border: none;\\r\\n    width: 35px;\\r\\n    height: 35px;\\r\\n    border-radius: 50%;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n}\\r\\n\\r\\n.meal-img {\\r\\n    height: 250px;\\r\\n    overflow: hidden;\\r\\n}\\r\\n\\r\\n.meal-img img {\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\n.recipe-meal-img img {\\r\\n    width: 150px;\\r\\n    height: 150px;\\r\\n    border-radius: 50%;\\r\\n    margin: 0 auto;\\r\\n    display: block;\\r\\n}\\r\\n\\r\\n::placeholder {\\r\\n    font-style: italic;\\r\\n}\\r\\n\\r\\n.like-btn {\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.navbar {\\r\\n    background-color: #eeeed6;\\r\\n    font-size: 24px;\\r\\n    font-family: 'Poppins', sans-serif;\\r\\n}\\r\\n\\r\\n.nav-link:hover {\\r\\n    text-decoration: underline;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n    position: fixed;\\r\\n    left: 0;\\r\\n    bottom: 0;\\r\\n    width: 100%;\\r\\n    text-align: center;\\r\\n    background-color: #eeeed6;\\r\\n    padding: 20px;\\r\\n}\\r\\n\\r\\n.footer a {\\r\\n    text-decoration: none;\\r\\n    font-style: italic;\\r\\n}\\r\\n\\r\\n.footer a:hover {\\r\\n    cursor: pointer;\\r\\n    font-size: 18px;\\r\\n}\\r\\n\\r\\n.recipe-title,\\r\\n.recipe-instruct h4,\\r\\n.comment-count,\\r\\n.addComment,\\r\\n.recipe-category {\\r\\n    color: #383a59;\\r\\n}\\r\\n\\r\\n.commentBtn {\\r\\n    margin-bottom: 30px;\\r\\n}\\r\\n\\r\\n.showResevation {\\r\\n    display: block;\\r\\n    height: 100%;\\r\\n    overflow: scroll;\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 768px) {\\r\\n    footer {\\r\\n        font-size: 18px;\\r\\n    }\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/createMealLike.js":
/*!*******************************!*\
  !*** ./src/createMealLike.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createLike = async (mealId) => {\r\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8WhiXHgGMaGrsfo6vYsR/likes', {\r\n    method: 'POST',\r\n    body: JSON.stringify({\r\n      item_id: mealId,\r\n    }),\r\n    headers: {\r\n      'Content-type': 'application/json; charset=UTF-8',\r\n    },\r\n  });\r\n  return response.text();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createLike);\r\n\n\n//# sourceURL=webpack://webpack/./src/createMealLike.js?");

/***/ }),

/***/ "./src/getMealLikes.js":
/*!*****************************!*\
  !*** ./src/getMealLikes.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getMealLikes = async () => {\r\n  const response = await fetch(\r\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8WhiXHgGMaGrsfo6vYsR/likes',\r\n  );\r\n  return response.json();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMealLikes);\r\n\n\n//# sourceURL=webpack://webpack/./src/getMealLikes.js?");

/***/ }),

/***/ "./src/getMeals.js":
/*!*************************!*\
  !*** ./src/getMeals.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getMeals = async () => {\r\n  const response = await fetch(\r\n    'https://www.themealdb.com/api/json/v1/1/filter.php?a=Jamaican',\r\n  );\r\n  const result = await response.json();\r\n  return result.meals;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMeals);\r\n\n\n//# sourceURL=webpack://webpack/./src/getMeals.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _getMeals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getMeals.js */ \"./src/getMeals.js\");\n/* harmony import */ var _mealList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mealList.js */ \"./src/mealList.js\");\n\r\n\r\n\r\n\r\nwindow.addEventListener('load', async () => {\r\n  (0,_mealList_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( await (0,_getMeals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n});\r\n\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ }),

/***/ "./src/mealCommentCounter.js":
/*!***********************************!*\
  !*** ./src/mealCommentCounter.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentCounter = (myComment) => {\r\n  const count = myComment.length ? myComment.length : 0;\r\n  return count;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);\n\n//# sourceURL=webpack://webpack/./src/mealCommentCounter.js?");

/***/ }),

/***/ "./src/mealList.js":
/*!*************************!*\
  !*** ./src/mealList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createMealLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createMealLike.js */ \"./src/createMealLike.js\");\n/* harmony import */ var _getMealLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getMealLikes.js */ \"./src/getMealLikes.js\");\n/* harmony import */ var _mealCommentCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mealCommentCounter.js */ \"./src/mealCommentCounter.js\");\n/* harmony import */ var _mealRecipeCount_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mealRecipeCount.js */ \"./src/mealRecipeCount.js\");\n/* harmony import */ var _resevationCounter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resevationCounter.js */ \"./src/resevationCounter.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst mainDiv = document.querySelector('#meal-items');\r\nconst btnClose = document.querySelector('.close-btn');\r\n\r\nconst mealRecipeDetails = document.querySelector('.meal-recipe');\r\nconst mealReseverDetails = document.querySelector('.meal-recipe-rs');\r\nconst btnCloseRS = document.querySelector('.close-btn-rs');\r\n\r\n\r\n// const mainDivRs = document.querySelector('#meal-items-resevation');\r\n// const mainDivRs = document.querySelector('#meal-details-resevation');\r\n\r\nconst mealResevationDetail = document.querySelector('.meal-recipe-rs')\r\n\r\nconst mealLikesCount = (target, mealLikesArray, numOfLikes) => {\r\n    mealLikesArray.forEach((obj) => {\r\n        if (obj.item_id === target.id) {\r\n            numOfLikes.innerHTML = `${obj.likes} likes `;\r\n        }\r\n    });\r\n};\r\nconst mealList = async(data) => {\r\n    for (let i = 0; i <= data.length - 1; i += 1) {\r\n        const foodDiv = document.createElement('div');\r\n        foodDiv.classList.add('col-lg-4');\r\n\r\n        const listItem = document.createElement('div');\r\n        listItem.id = data[i].idMeal;\r\n        foodDiv.setAttribute('data-id', `${data[i].idMeal}`);\r\n        listItem.classList.add('meal-item', 'text-center', 'card', 'shadow', 'mb-4', 'border-0');\r\n\r\n        const itemImage = document.createElement('div');\r\n        itemImage.classList.add('meal-img');\r\n\r\n        const image = document.createElement('img');\r\n        image.src = data[i].strMealThumb;\r\n\r\n        itemImage.appendChild(image);\r\n        listItem.appendChild(itemImage);\r\n\r\n        const itemText = document.createElement('div');\r\n        itemText.classList.add('meal-name', 'd-flex', 'pt-3', 'justify-content-center', 'align-items-center');\r\n\r\n        const mealName = document.createElement('h3');\r\n        mealName.classList.add('fs-6', 'me-2', 'pt-1');\r\n        mealName.innerHTML = data[i].strMeal;\r\n\r\n        const likeBtn = document.createElement('i');\r\n        likeBtn.classList.add('bi', 'bi-heart', 'like-btn', 'text-danger');\r\n        likeBtn.id = data[i].idMeal;\r\n\r\n        itemText.appendChild(mealName);\r\n        itemText.appendChild(likeBtn);\r\n        listItem.appendChild(itemText);\r\n\r\n        const mealLikes = document.createElement('div');\r\n        const numOfLikes = document.createElement('small');\r\n        numOfLikes.innerHTML = '0 likes';\r\n        mealLikes.appendChild(numOfLikes);\r\n        listItem.appendChild(mealLikes);\r\n\r\n        const commentContainer = document.createElement('div');\r\n        commentContainer.classList.add('comment', 'mb-4', 'mt-2');\r\n\r\n        // modal content button container\r\n        const cmtButton = document.createElement('button');\r\n        cmtButton.classList.add('btn', 'btn-secondary', 'rounded-pill', 'px-4', 'shadow', 'comment-btn');\r\n        cmtButton.setAttribute('id', `${data[i].idMeal}`);\r\n        cmtButton.setAttribute('type', 'button');\r\n        cmtButton.setAttribute('data-bs-toggle', 'modal');\r\n        cmtButton.setAttribute('data-bs-target', '#staticBackdrop');\r\n        cmtButton.innerHTML = 'comments';\r\n\r\n        commentContainer.appendChild(cmtButton);\r\n        listItem.appendChild(commentContainer);\r\n\r\n        // Reservation button\r\n        const resevationContainer = document.createElement('div');\r\n        resevationContainer.classList.add('comment', 'mb-4', 'mt-2');\r\n\r\n        const rsvButton = document.createElement('button');\r\n        rsvButton.classList.add('btn', 'btn-secondary', 'rounded-pill', 'px-4', 'shadow', 'reservation-btn');\r\n        rsvButton.setAttribute('id', `${data[i].idMeal}`);\r\n        rsvButton.setAttribute('type', 'button');\r\n        rsvButton.setAttribute('data-bs-toggle', 'modal');\r\n        rsvButton.setAttribute('data-bs-target', '#staticBackdrop');\r\n        rsvButton.innerHTML = 'reservation';\r\n\r\n        resevationContainer.appendChild(rsvButton);\r\n        listItem.appendChild(resevationContainer);\r\n\r\n        foodDiv.appendChild(listItem);\r\n        mainDiv.appendChild(foodDiv);\r\n\r\n        const foodDivRs = document.createElement('div');\r\n        foodDivRs.classList.add('col-lg-4');\r\n        foodDivRs.setAttribute('data-id', `${data[i].idMeal}`);\r\n        foodDivRs.appendChild(listItem);\r\n        mainDiv.appendChild(foodDivRs);\r\n\r\n\r\n        // eslint-disable-next-line no-await-in-loop\r\n        const mealLikesArray = await (0,_getMealLikes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n        mealLikesCount(likeBtn, mealLikesArray, numOfLikes);\r\n\r\n        likeBtn.addEventListener('click', async(e) => {\r\n            await (0,_createMealLike_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(likeBtn.id);\r\n            const newMealLikes = await (0,_getMealLikes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n            mealLikesCount(e.target, newMealLikes, numOfLikes);\r\n        });\r\n    }\r\n\r\n    const mealCount = document.querySelector('#meal-count');\r\n    mealCount.innerHTML = (0,_mealRecipeCount_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(data);\r\n};\r\n\r\n// post a comment for the meal\r\nconst postComment = async(data) => {\r\n    const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8WhiXHgGMaGrsfo6vYsR/comments';\r\n    const response = await fetch(url, {\r\n        method: 'POST',\r\n        headers: {\r\n            'Content-type': 'application/json',\r\n        },\r\n        body: JSON.stringify(data),\r\n    });\r\n    return response.ok;\r\n};\r\n\r\n\r\nconst getMealComment = async(item) => {\r\n    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8WhiXHgGMaGrsfo6vYsR/comments?item_id=${item.idMeal}`;\r\n    let myComment = await fetch(url).then((response) => response.json());\r\n    const ul = document.querySelector('#list-comment');\r\n    ul.innerHTML = '';\r\n    const h3 = document.querySelector('.comment-count');\r\n    h3.innerHTML = `Comments(${(0,_mealCommentCounter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(myComment)})`;\r\n    if (!myComment.length) myComment = [];\r\n    myComment.forEach((comment) => {\r\n        ul.innerHTML += `\r\n      <li class=\"d-flex justify-content-start align-items-center\">\r\n        <p class=\"me-3\">${comment.creation_date}</p>\r\n        <p class=\"me-3\">${comment.username}</p>\r\n        <p>${comment.comment}</p>\r\n      </li>\r\n    `;\r\n    });\r\n};\r\n\r\n\r\n\r\n// Meal comments section\r\nconst mealModal = async(meal) => {\r\n    [meal] = meal;\r\n    mealRecipeDetails.innerHTML = `\r\n    <h2 class = \"recipe-title\">${meal.strMeal}</h2>\r\n    <div class = \"recipe-meal-img\">\r\n      <img src = \"${meal.strMealThumb}\" alt = \"\">\r\n    </div>\r\n    <div class = \"recipe-instruct\">\r\n      <h4>Instructions for making</h4>\r\n    <h4 class = \"recipe-category\">${meal.strCategory}</h4>\r\n      <p class=\"text-center mx-5\">${meal.strInstructions}</p>\r\n    </div>\r\n    \r\n    <h3 class=\"m-3 comment-count\"></h3>\r\n    <div class=\"d-flex justify-content-center align-items-center\">\r\n\r\n      <ul id=\"list-comment\" class=\"list-unstyled\">\r\n      </ul>\r\n    </div>\r\n    <h3 class=\"m-3 addComment\">Add a comment</h3>\r\n    <form autocomplete=\"off\" class=\"w-50 mx-auto\">\r\n <ul>\r\n  <li>\r\n      <input type=\"text\" class=\"form-control mb-2\" id=\"commentator\" placeholder=\"Your name\">\r\n</li>\r\n<li>\r\n      <textarea id=\"comment\" name=\"comment\" placeholder=\"Your comment...\"  rows=\"4\" cols=\"45\"></textarea>\r\n</li>\r\n<li>\r\n      <button type=\"button\" class=\"btn btn-secondary commentBtn\">Comment</button>\r\n </li>\r\n</ul>\r\n    </form>\r\n  `;\r\n    mealRecipeDetails.parentElement.classList.add('showComment');\r\n    const commentBtn = document.querySelector('.commentBtn');\r\n    commentBtn.addEventListener('click', () => {\r\n        const username = document.querySelector('#commentator').value;\r\n        const comment = document.querySelector('#comment').value;\r\n        const itemId = meal.idMeal;\r\n        const newData = {\r\n            item_id: itemId,\r\n            username,\r\n            comment,\r\n        };\r\n        postComment(newData);\r\n        document.querySelector('#commentator').value = '';\r\n        document.querySelector('#comment').value = '';\r\n        setTimeout(() => {\r\n            getMealComment(meal);\r\n        }, 1000);\r\n    });\r\n    getMealComment(meal);\r\n};\r\nconst getMeal = async(e) => {\r\n    e.preventDefault();\r\n    if (e.target.classList.contains('comment-btn')) {\r\n        const mealItem = e.target.parentElement.parentElement.parentElement;\r\n        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`;\r\n        const response = await fetch(url).then((response) => response.json()).then((data) => data);\r\n        mealModal(response.meals);\r\n    }\r\n};\r\n\r\nmainDiv.addEventListener('click', getMeal);\r\nbtnClose.addEventListener('click', () => {\r\n    mealRecipeDetails.parentElement.classList.remove('showComment');\r\n});\r\n\r\n\r\n///////////////////////////////////////\r\n// resevation from\\\r\n\r\n// post a reservation for the meal\r\nconst postResevation = async(data) => {\r\n    const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/l35PAuerIZ0jKQQ35zG1/reservations';\r\n    const response = await fetch(url, {\r\n        method: 'POST',\r\n        headers: {\r\n            'Content-type': 'application/json',\r\n        },\r\n        body: JSON.stringify(data),\r\n    });\r\n    return response.ok;\r\n};\r\nconst getMealResvation = async(item) => {\r\n    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/l35PAuerIZ0jKQQ35zG1/reservations?item_id=${item.idMeal}`;\r\n    let myResevation = await fetch(url).then((response) => response.json());\r\n    const ulR = document.querySelector('#list-resevation');\r\n    ulR.innerHTML = '';\r\n    console.log(myResevation);\r\n    // the resevation part is fixed here\r\n\r\n    const h3 = document.querySelector('.reservation-count');\r\n    h3.innerHTML = `Resevation(${(0,_resevationCounter_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(myResevation)})`;\r\n    if (!myResevation.length) myResevation = [];\r\n    myResevation.forEach((resevation) => {\r\n        ulR.innerHTML += `\r\n      <li class=\"d-flex justify-content-start align-items-center\">\r\n        <p class=\"me-3\">${resevation.date_start}</p>\r\n        <p class=\"me-3\">${resevation.username}</p>\r\n        <p>${resevation.date_end}</p>\r\n      </li>\r\n    `;\r\n    });\r\n};\r\n\r\nconst mealReseved = async(meal) => {\r\n    [meal] = meal;\r\n    mealReseverDetails.innerHTML = `\r\n<h2>${meal.strMeal}</h2>\r\n<div class = \"recipe-meal-img\">\r\n      <img src = \"${meal.strMealThumb}\" alt = \"\">\r\n</div>\r\n    <div class = \"recipe-instruct\">\r\n    <h4 class = \"recipe-title\">Recipe Details</h4>\r\n      <p class=\"text-center mx-5\">${meal.strInstructions}</p>\r\n    </div>\r\n    <h3 class=\"m-3 reservation-count\"></h3>\r\n    <div class=\"d-flex justify-content-center align-items-center\">\r\n      <ul id=\"list-resevation\" class=\"list-unstyled\">\r\n      </ul>\r\n    </div>\r\n    <h3 class=\"m-3 addComment\">Add a Resevation</h3>\r\n    <form autocomplete=\"off\" class=\"w-50 mx-auto\">\r\n <ul>\r\n  <li>\r\n      <input type=\"text\" class=\"form-control mb-2\" id=\"commentator\" placeholder=\"Your name\">\r\n</li>\r\n<li>\r\n<input type=\"date\" placeholder=\"Start Date\" class=\"form-control my-2\" id=\"Startdate\" >\r\n </li>\r\n<li>\r\n<input type=\"date\" placeholder=\"End Date\" class=\"form-control\" id=\"Enddate\" >\r\n</li>\r\n\r\n<li>\r\n      <button type=\"button\" class=\"btn btn-secondary reservationBtn  my-2\">Reseve</button>\r\n </li>\r\n</ul>\r\n    </form>\r\n  `;\r\n    mealReseverDetails.parentElement.classList.add('showResevation');\r\n    const commentBtn = document.querySelector('.reservationBtn');\r\n    commentBtn.addEventListener('click', () => {\r\n        const username = document.querySelector('#commentator').value;\r\n        const date_start=document.querySelector('#Startdate').value;\r\n        const date_end=document.querySelector('#Enddate').value;\r\n        const itemId = meal.idMeal;\r\n        const newData = {\r\n            item_id: itemId,\r\n            username,\r\n            date_start,\r\n            date_end,\r\n        };\r\n        postResevation(newData);\r\n        username = document.querySelector('#commentator').value=\"\";\r\n        start_date=document.querySelector('#Startdate').value=\"\";\r\n       end_date=document.querySelector('#Enddate').value=\"\";\r\n        setTimeout(() => {\r\n            getMealResvation(meal);\r\n        }, 1000);\r\n    });\r\n    getMealResvation(meal);\r\n};\r\nconst getMealRs = async(e) => {\r\n    e.preventDefault();\r\n    if (e.target.classList.contains('reservation-btn')) {\r\n        const mealItem = e.target.parentElement.parentElement.parentElement;\r\n        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`;\r\n        const response = await fetch(url).then((response) => response.json()).then((data) => data);\r\n        mealReseved(response.meals);\r\n    }\r\n};\r\n// console.log(mainDivRs);\r\n\r\nmainDiv.addEventListener('click', getMealRs);\r\nbtnCloseRS.addEventListener('click', () => {\r\n    mealReseverDetails.parentElement.classList.remove('showResevation');\r\n});\r\n///////////////////////////////////////////\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mealList);\n\n//# sourceURL=webpack://webpack/./src/mealList.js?");

/***/ }),

/***/ "./src/mealRecipeCount.js":
/*!********************************!*\
  !*** ./src/mealRecipeCount.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mealCount = (mealData) => mealData.length;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mealCount);\n\n//# sourceURL=webpack://webpack/./src/mealRecipeCount.js?");

/***/ }),

/***/ "./src/resevationCounter.js":
/*!**********************************!*\
  !*** ./src/resevationCounter.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst resevationCounter = (myReservation) => {\r\n  const count = myReservation.length ? myReservation.length : 0;\r\n  return count;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resevationCounter);\n\n//# sourceURL=webpack://webpack/./src/resevationCounter.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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