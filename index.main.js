/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n#content {\n    display: grid;\n    grid-template-columns: 3fr 1fr;\n    position: relative;\n}\n\n\n\n* {\n    border: 1px solid red;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    font-weight: 100;\n}\n\n.new-project-form {\n    position: absolute;\n    display: none;\n    -webkit-animation: fadeIn 1s;\n    animation: fadeIn 1s;\n}\n\n.add-item-form {\n    position: absolute;\n    display: none;\n    grid-template-columns: 50%;\n    -webkit-animation: fadeIn 1s;\n    animation: fadeIn 1s;\n    background-color: aqua;\n}\n\n/* Add animation (fade in the popup) */\n@-webkit-keyframes fadeIn {\n    from {opacity: 0;}\n    to {opacity: 1;}\n  }\n  \n  @keyframes fadeIn {\n    from {opacity: 0;}\n    to {opacity:1 ;}\n  }\n\n\n.item-form label {\n    margin-top: 10px;\n    margin-bottom: 5px;\n}\n.item-form  input[type=date] {\n    width: 200px;\n}\n.item-form select {\n    width: 100px;\n    margin-bottom: 10px;\n}\n\n.projects {\n    justify-self: end;\n}\n.projects h2 {\n    font-size: 30px;\n}\n\n.list {\n    display: grid;\n    grid-template-columns: 1fr;\n    padding: 0;\n}\n.list-item {\n    margin: 0;\n    margin-bottom: 20px;\n    display: grid;\n    grid-gap: 10px;\n    grid-template-columns: 1fr 4fr 1fr;\n    justify-content: space-between;\n    padding: 15px;\n    \n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,kBAAkB;AACtB;;;;AAIA;IACI,qBAAqB;IACrB,wEAAwE;IACxE,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,4BAA4B;IAC5B,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,0BAA0B;IAC1B,4BAA4B;IAC5B,oBAAoB;IACpB,sBAAsB;AAC1B;;AAEA,sCAAsC;AACtC;IACI,MAAM,UAAU,CAAC;IACjB,IAAI,UAAU,CAAC;EACjB;;EAEA;IACE,MAAM,UAAU,CAAC;IACjB,IAAI,UAAU,CAAC;EACjB;;;AAGF;IACI,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;AACA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,0BAA0B;IAC1B,UAAU;AACd;AACA;IACI,SAAS;IACT,mBAAmB;IACnB,aAAa;IACb,cAAc;IACd,kCAAkC;IAClC,8BAA8B;IAC9B,aAAa;;AAEjB","sourcesContent":["\n#content {\n    display: grid;\n    grid-template-columns: 3fr 1fr;\n    position: relative;\n}\n\n\n\n* {\n    border: 1px solid red;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    font-weight: 100;\n}\n\n.new-project-form {\n    position: absolute;\n    display: none;\n    -webkit-animation: fadeIn 1s;\n    animation: fadeIn 1s;\n}\n\n.add-item-form {\n    position: absolute;\n    display: none;\n    grid-template-columns: 50%;\n    -webkit-animation: fadeIn 1s;\n    animation: fadeIn 1s;\n    background-color: aqua;\n}\n\n/* Add animation (fade in the popup) */\n@-webkit-keyframes fadeIn {\n    from {opacity: 0;}\n    to {opacity: 1;}\n  }\n  \n  @keyframes fadeIn {\n    from {opacity: 0;}\n    to {opacity:1 ;}\n  }\n\n\n.item-form label {\n    margin-top: 10px;\n    margin-bottom: 5px;\n}\n.item-form  input[type=date] {\n    width: 200px;\n}\n.item-form select {\n    width: 100px;\n    margin-bottom: 10px;\n}\n\n.projects {\n    justify-self: end;\n}\n.projects h2 {\n    font-size: 30px;\n}\n\n.list {\n    display: grid;\n    grid-template-columns: 1fr;\n    padding: 0;\n}\n.list-item {\n    margin: 0;\n    margin-bottom: 20px;\n    display: grid;\n    grid-gap: 10px;\n    grid-template-columns: 1fr 4fr 1fr;\n    justify-content: space-between;\n    padding: 15px;\n    \n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/addItem.js":
/*!************************!*\
  !*** ./src/addItem.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const addItemToList = (input) => {
    const list = document.querySelector('.list')
    const listItem = document.createElement('li');
    listItem.textContent = input;
    list.appendChild(listItem);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addItemToList);

/***/ }),

/***/ "./src/addItemForm.js":
/*!****************************!*\
  !*** ./src/addItemForm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _saveItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saveItem.js */ "./src/saveItem.js");
/* harmony import */ var _addItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addItem.js */ "./src/addItem.js");
/* harmony import */ var _itemFormPartial_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./itemFormPartial.js */ "./src/itemFormPartial.js");




const addItemForm = (list) => {
    const partial = (0,_itemFormPartial_js__WEBPACK_IMPORTED_MODULE_2__["default"])('add');
    var input = document.querySelector('#task-title');
    var description =  document.querySelector('#task-desc');
    var dueDate =  document.querySelector('#task-date');
    var priority =  document.querySelector('#task-priority');

    const addItemBtn = document.createElement('button');
    addItemBtn.className = "add-item-btn";
    addItemBtn.textContent = "Add a task";
    addItemBtn.addEventListener('click', () => {
        
        const newTask = {
            title: input.value,
            description: description.value,
            dueDate: dueDate.value,
            priority: priority.value
        }
        ;(0,_saveItem_js__WEBPACK_IMPORTED_MODULE_0__["default"])(newTask, list.id);
        (0,_addItem_js__WEBPACK_IMPORTED_MODULE_1__["default"])(newTask.title);
        input.value= "";
        
    });
    const itemForm = document.querySelector('.add-item-form');
    itemForm.appendChild(addItemBtn);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addItemForm);

/***/ }),

/***/ "./src/collapseItem.js":
/*!*****************************!*\
  !*** ./src/collapseItem.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _expandItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expandItem */ "./src/expandItem.js");


const collapseItem = (task, event) => {
    console.log(task)
    var element = event.target;
    element.innerHTML = `title: ${task.title}`;
    element.onclick = (event) => (0,_expandItem__WEBPACK_IMPORTED_MODULE_0__["default"])(task, event);


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (collapseItem);

/***/ }),

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createProject = (input) => {
    let tasks = []
    localStorage.setItem(input, JSON.stringify(tasks));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProject);

/***/ }),

/***/ "./src/deleteItem.js":
/*!***************************!*\
  !*** ./src/deleteItem.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const deleteItem = (list, index) => {
    var items = JSON.parse(localStorage.getItem(list));
    items.splice(index, 1);
    items = JSON.stringify(items);
    localStorage.setItem(list, items);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteItem);

/***/ }),

/***/ "./src/displayForm.js":
/*!****************************!*\
  !*** ./src/displayForm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _editItemForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editItemForm */ "./src/editItemForm.js");


const displayFormController = (action) => {
    const itemform =  document.querySelector('.add-item-form');
    const projform = document.querySelector('.new-project-form');
    const editform = document.querySelector('.edit-item-form');
    if (action === 'edit') {
        if (editform !== null) {
            document.querySelectorAll('.edit-item-form').forEach(element => {
               element.innerHTML = ""; 
            });
        }
        projform.style.display = "none";
        itemform.style.display = "none";

    }
    if (action === 'add-item') {
        if (editform !== null) {
            document.querySelectorAll('.edit-item-form').forEach(element => {
               element.innerHTML = ""; 
            });
        }
        itemform.style.display = "grid";
        projform.style.display = "none";

    }

    if (action === 'add-project') {
        if (editform !== null) {
            document.querySelectorAll('.edit-item-form').forEach(element => {
               element.innerHTML = ""; 
            });
        }
        projform.style.display = "grid";
        itemform.style.display = "none";
    }
    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayFormController);

/***/ }),

/***/ "./src/displayItemMin.js":
/*!*******************************!*\
  !*** ./src/displayItemMin.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _deleteItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteItem.js */ "./src/deleteItem.js");
/* harmony import */ var _displayForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayForm.js */ "./src/displayForm.js");
/* harmony import */ var _editItemForm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editItemForm.js */ "./src/editItemForm.js");




const displayItemMin = (listName, index) => {
    var items = JSON.parse(localStorage.getItem(listName));
    const task = items[index];
    const div = document.createElement('div');
    const text = document.createElement('div');
    text.textContent = `${task.title}`;
    text.className = "task-body";
    div.appendChild(text);

    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "DELETED!";
    deleteBtn.onclick = () => (0,_deleteItem_js__WEBPACK_IMPORTED_MODULE_0__["default"])(listName, index);
    div.prepend(deleteBtn)

    const editBtn = document.createElement('button');
    editBtn.textContent = "Edit task";
    editBtn.onclick = () => {
        (0,_displayForm_js__WEBPACK_IMPORTED_MODULE_1__["default"])('edit');
        (0,_editItemForm_js__WEBPACK_IMPORTED_MODULE_2__["default"])(listName, index);
    };

    div.appendChild(editBtn);
    // div.onclick = (event) => expandItem(task, event);

    return div


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayItemMin);

/***/ }),

/***/ "./src/displayList.js":
/*!****************************!*\
  !*** ./src/displayList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _expandItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expandItem.js */ "./src/expandItem.js");
/* harmony import */ var _deleteItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteItem.js */ "./src/deleteItem.js");
/* harmony import */ var _editItemForm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editItemForm.js */ "./src/editItemForm.js");
/* harmony import */ var _displayItemMin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayItemMin.js */ "./src/displayItemMin.js");





const displayList = (listName) => {
    document.querySelector('.list').innerHTML = "";
    const heading = document.querySelector('.list-name');
    heading.textContent = `${listName} To Do's`;
    const list = document.querySelector('ul');
    list.id = listName;
    const tasks = JSON.parse(localStorage.getItem(listName));
    tasks.forEach( (task, index) => {
        const item = (0,_displayItemMin_js__WEBPACK_IMPORTED_MODULE_3__["default"])(listName, index);
        item.className = "list-item";
        list.appendChild(item);
    })

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayList);

/***/ }),

/***/ "./src/displayProjects.js":
/*!********************************!*\
  !*** ./src/displayProjects.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _displayList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayList */ "./src/displayList.js");


const displayProjects = () => {
    const content = document.getElementById('content');
    var list = document.querySelector('.projects');
    const heading = document.createElement('h2');
    heading.textContent = "Projects";
    if (list === null) {
        list = document.createElement('div');
        list.className = "projects";
    } else {
        list.innerHTML = "";
    }


 
        for (let i = 0; i < localStorage.length; i++) {
            const li = document.createElement('div');
            const name = localStorage.key(i);
            li.textContent = name;
            li.addEventListener('click', () => {
                (0,_displayList__WEBPACK_IMPORTED_MODULE_0__["default"])(name);
            })
            list.appendChild(li);
        }
        list.prepend(heading);
        content.appendChild(list);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayProjects);

/***/ }),

/***/ "./src/editItem.js":
/*!*************************!*\
  !*** ./src/editItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const editItem = (list, editedInfo, index) => {
    var items = JSON.parse(localStorage.getItem(list));
    items[index] = editedInfo;
    items = JSON.stringify(items);
    localStorage.setItem(list, items);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editItem);

/***/ }),

/***/ "./src/editItemForm.js":
/*!*****************************!*\
  !*** ./src/editItemForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _itemFormPartial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./itemFormPartial.js */ "./src/itemFormPartial.js");
/* harmony import */ var _editItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editItem.js */ "./src/editItem.js");



const editItemForm = (list, index) => {
    const partial = (0,_itemFormPartial_js__WEBPACK_IMPORTED_MODULE_0__["default"])('edit');
    //retreive task from storage
    var items = JSON.parse(localStorage.getItem(list));
    const task = items[index];
    // fill edit form with task's data
    var input = document.querySelector('#edit-task-title');
    var description =  document.querySelector('#edit-task-desc');
    var dueDate =  document.querySelector('#edit-task-date');
    var priority =  document.querySelector('#edit-task-priority');
    input.value = task.title;
    description.value = task.description;
    dueDate.value = task.dueDate;
    priority.value = task.priority;
    
    const editBtn = document.createElement('button');
    editBtn.className ="edit-btn";
    editBtn.textContent = "Submit edits";
    editBtn.addEventListener('click', () => {
        
        const taskEdits = {
            title: input.value,
            description: description.value,
            dueDate: dueDate.value,
            priority: priority.value
        }
        ;(0,_editItem_js__WEBPACK_IMPORTED_MODULE_1__["default"])(list, taskEdits, index);
        
    });
    // form.appendChild(editBtn);
    // div.appendChild(form);
    partial.append(editBtn);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editItemForm);

/***/ }),

/***/ "./src/expandItem.js":
/*!***************************!*\
  !*** ./src/expandItem.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _collapseItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collapseItem */ "./src/collapseItem.js");


const expandItem = (task, event) => {
    var element = event.target;
    element.innerHTML = `title: ${task.title},description: ${task.description}, due: ${task.dueDate}, priority: ${task.priority}`;
    element.onclick = (event) => (0,_collapseItem__WEBPACK_IMPORTED_MODULE_0__["default"])(task, event);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (expandItem);

/***/ }),

/***/ "./src/homeDom.js":
/*!************************!*\
  !*** ./src/homeDom.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addItem.js */ "./src/addItem.js");
/* harmony import */ var _createProject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProject.js */ "./src/createProject.js");
/* harmony import */ var _displayList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayList.js */ "./src/displayList.js");
/* harmony import */ var _saveItem_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saveItem.js */ "./src/saveItem.js");
/* harmony import */ var _displayProjects_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displayProjects.js */ "./src/displayProjects.js");
/* harmony import */ var _addItemForm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addItemForm.js */ "./src/addItemForm.js");
/* harmony import */ var _newProjectForm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newProjectForm.js */ "./src/newProjectForm.js");








const HomeDOM = () => {
    const content = document.getElementById('content');
    const div = document.createElement('div');
    div.className ="list-container";
    content.appendChild(div);

    //render heading
    const heading = document.createElement('h1');
    heading.className = "list-name";
    div.appendChild(heading);

    //render list
    var list = document.createElement('ul');
    list.className = 'list';
    list.id = "Main";
    div.appendChild(list);

    (0,_addItemForm_js__WEBPACK_IMPORTED_MODULE_5__["default"])(list);
    (0,_newProjectForm_js__WEBPACK_IMPORTED_MODULE_6__["default"])();
    
    (0,_displayList_js__WEBPACK_IMPORTED_MODULE_2__["default"])(list.id);
    (0,_displayProjects_js__WEBPACK_IMPORTED_MODULE_4__["default"])();

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeDOM);

/***/ }),

/***/ "./src/itemFormPartial.js":
/*!********************************!*\
  !*** ./src/itemFormPartial.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const itemFormPartial = (action) => {

    const div = document.querySelector('#content');

    const form = document.createElement('div');
    form.className = `${action}-item-form`;

    const input = document.createElement('input');
    input.type = "text";
    input.placeholder = "Task name";
    input.id = `${action}-task-title`;
    var itemLabel = document.createElement('label');
    itemLabel.setAttribute("for", input.id);
    itemLabel.innerHTML = "Task name";
    form.appendChild(itemLabel);
    form.appendChild(input);

    const description = document.createElement('input');
    description.type = "text";
    description.placeholder = "Description";
    description.id =`${action}-task-desc`;
    var descLabel = document.createElement('label');
    descLabel.setAttribute("for", description.id);
    descLabel.innerHTML = "Description";
    form.appendChild(descLabel);
    form.appendChild(description);

    const dueDate = document.createElement('input');
    dueDate.type = "date";
    dueDate.id = `${action}-task-date`;
    var dateLabel = document.createElement('label');
    dateLabel.setAttribute("for", dueDate.id);
    dateLabel.innerHTML = " Due date";
    form.appendChild(dateLabel);
    form.appendChild(dueDate);

    const priority = document.createElement('select');
    priority.className = "priority-select";
    priority.id = `${action}-task-priority`;
    var option1 = document.createElement("option");
    priority.appendChild(option1);
    var option2 = document.createElement("option");
    priority.appendChild(option2);
    var option3 = document.createElement("option");
    priority.appendChild(option3);
    option1.value = "High";
    option1.text = "High";
    option2.value = "Mid";
    option2.text = "Mid";
    option3.value = "Low";
    option3.text = "Low";
    var priorLabel = document.createElement('label');
    priorLabel.setAttribute("for", priority.id);
    priorLabel.innerHTML = "Priority";
    form.appendChild(priorLabel);
    form.appendChild(priority);
    div.appendChild(form);
    return form

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemFormPartial);

/***/ }),

/***/ "./src/newProjectForm.js":
/*!*******************************!*\
  !*** ./src/newProjectForm.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createProject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject.js */ "./src/createProject.js");
/* harmony import */ var _displayProjects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayProjects.js */ "./src/displayProjects.js");



const newProjectForm = () => {
    const content = document.getElementById('content');

    const newProjectForm = document.createElement('div');
    newProjectForm.className = "new-project-form";
    const projectName = document.createElement('input');
    projectName.type = "text";
    newProjectForm.appendChild(projectName)
  
    const newProjectBtn = document.createElement('button');
    newProjectBtn.className = "new-project-btn";
    newProjectBtn.textContent = "Create new project";
    newProjectBtn.addEventListener('click', () => {
        (0,_createProject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(projectName.value);
        (0,_displayProjects_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
        projectName.value = "";
    })
    newProjectForm.appendChild(newProjectBtn)
    content.appendChild(newProjectForm);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newProjectForm);

/***/ }),

/***/ "./src/saveItem.js":
/*!*************************!*\
  !*** ./src/saveItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const saveItem = (newTask, listName) => {
    let list;
    if (localStorage.getItem(listName) === null) {
        list = [];
    } else {
        list = JSON.parse(localStorage.getItem(listName));
    }
    list.push(newTask);
    localStorage.setItem(listName, JSON.stringify(list));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (saveItem);

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homeDom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeDom.js */ "./src/homeDom.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _displayForm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayForm.js */ "./src/displayForm.js");




window.addEventListener('load', () => {
    //navbar
    const addItemPopup = document.querySelector('.add-item-popup');
    addItemPopup.onclick = () => (0,_displayForm_js__WEBPACK_IMPORTED_MODULE_2__["default"])("add-item");
    const addProjectPopup = document.querySelector('.add-project-popup');
    addProjectPopup.onclick = () => (0,_displayForm_js__WEBPACK_IMPORTED_MODULE_2__["default"])('add-project');


    //load homepage
    (0,_homeDom_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTm1DO0FBQ2Q7QUFDc0I7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQywyREFBVztBQUM1QztBQUNBLG9DQUFvQywyREFBVzs7O0FBRy9DO0FBQ0EsSUFBSSx1REFBTzs7QUFFWCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL3NyYy9hZGRJdGVtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL3NyYy9hZGRJdGVtRm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9zcmMvY29sbGFwc2VJdGVtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL3NyYy9jcmVhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL3NyYy9kZWxldGVJdGVtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL3NyYy9kaXNwbGF5Rm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9zcmMvZGlzcGxheUl0ZW1NaW4uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vc3JjL2Rpc3BsYXlMaXN0LmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL3NyYy9kaXNwbGF5UHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vc3JjL2VkaXRJdGVtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL3NyYy9lZGl0SXRlbUZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vc3JjL2V4cGFuZEl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vc3JjL2hvbWVEb20uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vc3JjL2l0ZW1Gb3JtUGFydGlhbC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9zcmMvbmV3UHJvamVjdEZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vc3JjL3NhdmVJdGVtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5cXG5cXG4qIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcblxcbi5uZXctcHJvamVjdC1mb3JtIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDFzO1xcbiAgICBhbmltYXRpb246IGZhZGVJbiAxcztcXG59XFxuXFxuLmFkZC1pdGVtLWZvcm0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDFzO1xcbiAgICBhbmltYXRpb246IGZhZGVJbiAxcztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG59XFxuXFxuLyogQWRkIGFuaW1hdGlvbiAoZmFkZSBpbiB0aGUgcG9wdXApICovXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAgIGZyb20ge29wYWNpdHk6IDA7fVxcbiAgICB0byB7b3BhY2l0eTogMTt9XFxuICB9XFxuICBcXG4gIEBrZXlmcmFtZXMgZmFkZUluIHtcXG4gICAgZnJvbSB7b3BhY2l0eTogMDt9XFxuICAgIHRvIHtvcGFjaXR5OjEgO31cXG4gIH1cXG5cXG5cXG4uaXRlbS1mb3JtIGxhYmVsIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG4uaXRlbS1mb3JtICBpbnB1dFt0eXBlPWRhdGVdIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbn1cXG4uaXRlbS1mb3JtIHNlbGVjdCB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcbi5wcm9qZWN0cyBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLmxpc3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuLmxpc3QtaXRlbSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1nYXA6IDEwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmciAxZnI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgXFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixrQkFBa0I7QUFDdEI7Ozs7QUFJQTtJQUNJLHFCQUFxQjtJQUNyQix3RUFBd0U7SUFDeEUsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQixzQkFBc0I7QUFDMUI7O0FBRUEsc0NBQXNDO0FBQ3RDO0lBQ0ksTUFBTSxVQUFVLENBQUM7SUFDakIsSUFBSSxVQUFVLENBQUM7RUFDakI7O0VBRUE7SUFDRSxNQUFNLFVBQVUsQ0FBQztJQUNqQixJQUFJLFVBQVUsQ0FBQztFQUNqQjs7O0FBR0Y7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGNBQWM7SUFDZCxrQ0FBa0M7SUFDbEMsOEJBQThCO0lBQzlCLGFBQWE7O0FBRWpCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcblxcblxcbioge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWZvcm0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gMXM7XFxuICAgIGFuaW1hdGlvbjogZmFkZUluIDFzO1xcbn1cXG5cXG4uYWRkLWl0ZW0tZm9ybSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCU7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gMXM7XFxuICAgIGFuaW1hdGlvbjogZmFkZUluIDFzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbn1cXG5cXG4vKiBBZGQgYW5pbWF0aW9uIChmYWRlIGluIHRoZSBwb3B1cCkgKi9cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcXG4gICAgZnJvbSB7b3BhY2l0eTogMDt9XFxuICAgIHRvIHtvcGFjaXR5OiAxO31cXG4gIH1cXG4gIFxcbiAgQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICBmcm9tIHtvcGFjaXR5OiAwO31cXG4gICAgdG8ge29wYWNpdHk6MSA7fVxcbiAgfVxcblxcblxcbi5pdGVtLWZvcm0gbGFiZWwge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcbi5pdGVtLWZvcm0gIGlucHV0W3R5cGU9ZGF0ZV0ge1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcbi5pdGVtLWZvcm0gc2VsZWN0IHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuLnByb2plY3RzIGgyIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4ubGlzdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG4ubGlzdC1pdGVtIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWdhcDogMTBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyIDFmcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBhZGRJdGVtVG9MaXN0ID0gKGlucHV0KSA9PiB7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0JylcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGlzdEl0ZW0udGV4dENvbnRlbnQgPSBpbnB1dDtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWRkSXRlbVRvTGlzdDsiLCJpbXBvcnQgc2F2ZUl0ZW0gZnJvbSBcIi4vc2F2ZUl0ZW0uanNcIjtcbmltcG9ydCBhZGRJdGVtVG9MaXN0IGZyb20gXCIuL2FkZEl0ZW0uanNcIjtcbmltcG9ydCBpdGVtRm9ybVBhcnRpYWwgZnJvbSBcIi4vaXRlbUZvcm1QYXJ0aWFsLmpzXCI7XG5cbmNvbnN0IGFkZEl0ZW1Gb3JtID0gKGxpc3QpID0+IHtcbiAgICBjb25zdCBwYXJ0aWFsID0gaXRlbUZvcm1QYXJ0aWFsKCdhZGQnKTtcbiAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay10aXRsZScpO1xuICAgIHZhciBkZXNjcmlwdGlvbiA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kZXNjJyk7XG4gICAgdmFyIGR1ZURhdGUgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGF0ZScpO1xuICAgIHZhciBwcmlvcml0eSA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1wcmlvcml0eScpO1xuXG4gICAgY29uc3QgYWRkSXRlbUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZEl0ZW1CdG4uY2xhc3NOYW1lID0gXCJhZGQtaXRlbS1idG5cIjtcbiAgICBhZGRJdGVtQnRuLnRleHRDb250ZW50ID0gXCJBZGQgYSB0YXNrXCI7XG4gICAgYWRkSXRlbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSB7XG4gICAgICAgICAgICB0aXRsZTogaW5wdXQudmFsdWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24udmFsdWUsXG4gICAgICAgICAgICBkdWVEYXRlOiBkdWVEYXRlLnZhbHVlLFxuICAgICAgICAgICAgcHJpb3JpdHk6IHByaW9yaXR5LnZhbHVlXG4gICAgICAgIH1cbiAgICAgICAgc2F2ZUl0ZW0obmV3VGFzaywgbGlzdC5pZCk7XG4gICAgICAgIGFkZEl0ZW1Ub0xpc3QobmV3VGFzay50aXRsZSk7XG4gICAgICAgIGlucHV0LnZhbHVlPSBcIlwiO1xuICAgICAgICBcbiAgICB9KTtcbiAgICBjb25zdCBpdGVtRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtaXRlbS1mb3JtJyk7XG4gICAgaXRlbUZvcm0uYXBwZW5kQ2hpbGQoYWRkSXRlbUJ0bik7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgYWRkSXRlbUZvcm07IiwiaW1wb3J0IGV4cGFuZEl0ZW0gZnJvbSBcIi4vZXhwYW5kSXRlbVwiO1xuXG5jb25zdCBjb2xsYXBzZUl0ZW0gPSAodGFzaywgZXZlbnQpID0+IHtcbiAgICBjb25zb2xlLmxvZyh0YXNrKVxuICAgIHZhciBlbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gYHRpdGxlOiAke3Rhc2sudGl0bGV9YDtcbiAgICBlbGVtZW50Lm9uY2xpY2sgPSAoZXZlbnQpID0+IGV4cGFuZEl0ZW0odGFzaywgZXZlbnQpO1xuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29sbGFwc2VJdGVtOyIsImNvbnN0IGNyZWF0ZVByb2plY3QgPSAoaW5wdXQpID0+IHtcbiAgICBsZXQgdGFza3MgPSBbXVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGlucHV0LCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQcm9qZWN0OyIsImNvbnN0IGRlbGV0ZUl0ZW0gPSAobGlzdCwgaW5kZXgpID0+IHtcbiAgICB2YXIgaXRlbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxpc3QpKTtcbiAgICBpdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGl0ZW1zID0gSlNPTi5zdHJpbmdpZnkoaXRlbXMpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGxpc3QsIGl0ZW1zKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVsZXRlSXRlbTsiLCJpbXBvcnQgZWRpdEl0ZW1Gb3JtIGZyb20gXCIuL2VkaXRJdGVtRm9ybVwiXG5cbmNvbnN0IGRpc3BsYXlGb3JtQ29udHJvbGxlciA9IChhY3Rpb24pID0+IHtcbiAgICBjb25zdCBpdGVtZm9ybSA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWl0ZW0tZm9ybScpO1xuICAgIGNvbnN0IHByb2pmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0LWZvcm0nKTtcbiAgICBjb25zdCBlZGl0Zm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWl0ZW0tZm9ybScpO1xuICAgIGlmIChhY3Rpb24gPT09ICdlZGl0Jykge1xuICAgICAgICBpZiAoZWRpdGZvcm0gIT09IG51bGwpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0LWl0ZW0tZm9ybScpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IFwiXCI7IFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvamZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBpdGVtZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICB9XG4gICAgaWYgKGFjdGlvbiA9PT0gJ2FkZC1pdGVtJykge1xuICAgICAgICBpZiAoZWRpdGZvcm0gIT09IG51bGwpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0LWl0ZW0tZm9ybScpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IFwiXCI7IFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaXRlbWZvcm0uc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xuICAgICAgICBwcm9qZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uID09PSAnYWRkLXByb2plY3QnKSB7XG4gICAgICAgIGlmIChlZGl0Zm9ybSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQtaXRlbS1mb3JtJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjsgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBwcm9qZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XG4gICAgICAgIGl0ZW1mb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlGb3JtQ29udHJvbGxlcjsiLCJpbXBvcnQgZGVsZXRlSXRlbSBmcm9tIFwiLi9kZWxldGVJdGVtLmpzXCI7XG5pbXBvcnQgZGlzcGxheUZvcm1Db250cm9sbGVyIGZyb20gXCIuL2Rpc3BsYXlGb3JtLmpzXCI7XG5pbXBvcnQgZWRpdEl0ZW1Gb3JtIGZyb20gXCIuL2VkaXRJdGVtRm9ybS5qc1wiO1xuXG5jb25zdCBkaXNwbGF5SXRlbU1pbiA9IChsaXN0TmFtZSwgaW5kZXgpID0+IHtcbiAgICB2YXIgaXRlbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxpc3ROYW1lKSk7XG4gICAgY29uc3QgdGFzayA9IGl0ZW1zW2luZGV4XTtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGV4dC50ZXh0Q29udGVudCA9IGAke3Rhc2sudGl0bGV9YDtcbiAgICB0ZXh0LmNsYXNzTmFtZSA9IFwidGFzay1ib2R5XCI7XG4gICAgZGl2LmFwcGVuZENoaWxkKHRleHQpO1xuXG4gICAgXG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCJERUxFVEVEIVwiO1xuICAgIGRlbGV0ZUJ0bi5vbmNsaWNrID0gKCkgPT4gZGVsZXRlSXRlbShsaXN0TmFtZSwgaW5kZXgpO1xuICAgIGRpdi5wcmVwZW5kKGRlbGV0ZUJ0bilcblxuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gXCJFZGl0IHRhc2tcIjtcbiAgICBlZGl0QnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGRpc3BsYXlGb3JtQ29udHJvbGxlcignZWRpdCcpO1xuICAgICAgICBlZGl0SXRlbUZvcm0obGlzdE5hbWUsIGluZGV4KTtcbiAgICB9O1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICAgIC8vIGRpdi5vbmNsaWNrID0gKGV2ZW50KSA9PiBleHBhbmRJdGVtKHRhc2ssIGV2ZW50KTtcblxuICAgIHJldHVybiBkaXZcblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlJdGVtTWluOyIsImltcG9ydCBleHBhbmRJdGVtIGZyb20gXCIuL2V4cGFuZEl0ZW0uanNcIjtcbmltcG9ydCBkZWxldGVJdGVtIGZyb20gXCIuL2RlbGV0ZUl0ZW0uanNcIjtcbmltcG9ydCBlZGl0SXRlbUZvcm0gZnJvbSBcIi4vZWRpdEl0ZW1Gb3JtLmpzXCI7XG5pbXBvcnQgZGlzcGxheUl0ZW1NaW4gZnJvbSBcIi4vZGlzcGxheUl0ZW1NaW4uanNcIjtcblxuY29uc3QgZGlzcGxheUxpc3QgPSAobGlzdE5hbWUpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdCcpLmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LW5hbWUnKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gYCR7bGlzdE5hbWV9IFRvIERvJ3NgO1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCcpO1xuICAgIGxpc3QuaWQgPSBsaXN0TmFtZTtcbiAgICBjb25zdCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obGlzdE5hbWUpKTtcbiAgICB0YXNrcy5mb3JFYWNoKCAodGFzaywgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGRpc3BsYXlJdGVtTWluKGxpc3ROYW1lLCBpbmRleCk7XG4gICAgICAgIGl0ZW0uY2xhc3NOYW1lID0gXCJsaXN0LWl0ZW1cIjtcbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICB9KVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlMaXN0OyIsImltcG9ydCBkaXNwbGF5TGlzdCBmcm9tIFwiLi9kaXNwbGF5TGlzdFwiO1xuXG5jb25zdCBkaXNwbGF5UHJvamVjdHMgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgdmFyIGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuICAgIGlmIChsaXN0ID09PSBudWxsKSB7XG4gICAgICAgIGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGlzdC5jbGFzc05hbWUgPSBcInByb2plY3RzXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIH1cblxuXG4gXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XG4gICAgICAgICAgICBsaS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgICAgICAgICBsaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5TGlzdChuYW1lKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgfVxuICAgICAgICBsaXN0LnByZXBlbmQoaGVhZGluZyk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobGlzdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlQcm9qZWN0czsiLCJjb25zdCBlZGl0SXRlbSA9IChsaXN0LCBlZGl0ZWRJbmZvLCBpbmRleCkgPT4ge1xuICAgIHZhciBpdGVtcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obGlzdCkpO1xuICAgIGl0ZW1zW2luZGV4XSA9IGVkaXRlZEluZm87XG4gICAgaXRlbXMgPSBKU09OLnN0cmluZ2lmeShpdGVtcyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obGlzdCwgaXRlbXMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBlZGl0SXRlbTsiLCJpbXBvcnQgaXRlbUZvcm1QYXJ0aWFsIGZyb20gXCIuL2l0ZW1Gb3JtUGFydGlhbC5qc1wiO1xuaW1wb3J0IGVkaXRJdGVtIGZyb20gXCIuL2VkaXRJdGVtLmpzXCI7XG5cbmNvbnN0IGVkaXRJdGVtRm9ybSA9IChsaXN0LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhcnRpYWwgPSBpdGVtRm9ybVBhcnRpYWwoJ2VkaXQnKTtcbiAgICAvL3JldHJlaXZlIHRhc2sgZnJvbSBzdG9yYWdlXG4gICAgdmFyIGl0ZW1zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsaXN0KSk7XG4gICAgY29uc3QgdGFzayA9IGl0ZW1zW2luZGV4XTtcbiAgICAvLyBmaWxsIGVkaXQgZm9ybSB3aXRoIHRhc2sncyBkYXRhXG4gICAgdmFyIGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay10aXRsZScpO1xuICAgIHZhciBkZXNjcmlwdGlvbiA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLWRlc2MnKTtcbiAgICB2YXIgZHVlRGF0ZSA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLWRhdGUnKTtcbiAgICB2YXIgcHJpb3JpdHkgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay1wcmlvcml0eScpO1xuICAgIGlucHV0LnZhbHVlID0gdGFzay50aXRsZTtcbiAgICBkZXNjcmlwdGlvbi52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgZHVlRGF0ZS52YWx1ZSA9IHRhc2suZHVlRGF0ZTtcbiAgICBwcmlvcml0eS52YWx1ZSA9IHRhc2sucHJpb3JpdHk7XG4gICAgXG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGVkaXRCdG4uY2xhc3NOYW1lID1cImVkaXQtYnRuXCI7XG4gICAgZWRpdEJ0bi50ZXh0Q29udGVudCA9IFwiU3VibWl0IGVkaXRzXCI7XG4gICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRhc2tFZGl0cyA9IHtcbiAgICAgICAgICAgIHRpdGxlOiBpbnB1dC52YWx1ZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgICAgICAgIGR1ZURhdGU6IGR1ZURhdGUudmFsdWUsXG4gICAgICAgICAgICBwcmlvcml0eTogcHJpb3JpdHkudmFsdWVcbiAgICAgICAgfVxuICAgICAgICBlZGl0SXRlbShsaXN0LCB0YXNrRWRpdHMsIGluZGV4KTtcbiAgICAgICAgXG4gICAgfSk7XG4gICAgLy8gZm9ybS5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgICAvLyBkaXYuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgcGFydGlhbC5hcHBlbmQoZWRpdEJ0bik7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZWRpdEl0ZW1Gb3JtOyIsImltcG9ydCBjb2xsYXBzZUl0ZW0gZnJvbSBcIi4vY29sbGFwc2VJdGVtXCI7XG5cbmNvbnN0IGV4cGFuZEl0ZW0gPSAodGFzaywgZXZlbnQpID0+IHtcbiAgICB2YXIgZWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGB0aXRsZTogJHt0YXNrLnRpdGxlfSxkZXNjcmlwdGlvbjogJHt0YXNrLmRlc2NyaXB0aW9ufSwgZHVlOiAke3Rhc2suZHVlRGF0ZX0sIHByaW9yaXR5OiAke3Rhc2sucHJpb3JpdHl9YDtcbiAgICBlbGVtZW50Lm9uY2xpY2sgPSAoZXZlbnQpID0+IGNvbGxhcHNlSXRlbSh0YXNrLCBldmVudCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGV4cGFuZEl0ZW07IiwiaW1wb3J0IGFkZEl0ZW1Ub0xpc3QgZnJvbSBcIi4vYWRkSXRlbS5qc1wiO1xuaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSBcIi4vY3JlYXRlUHJvamVjdC5qc1wiO1xuaW1wb3J0IGRpc3BsYXlMaXN0IGZyb20gXCIuL2Rpc3BsYXlMaXN0LmpzXCI7XG5pbXBvcnQgc2F2ZUl0ZW0gZnJvbSBcIi4vc2F2ZUl0ZW0uanNcIjtcbmltcG9ydCBkaXNwbGF5UHJvamVjdHMgZnJvbSBcIi4vZGlzcGxheVByb2plY3RzLmpzXCI7XG5pbXBvcnQgYWRkSXRlbUZvcm0gZnJvbSBcIi4vYWRkSXRlbUZvcm0uanNcIjtcbmltcG9ydCBuZXdQcm9qZWN0Rm9ybSBmcm9tIFwiLi9uZXdQcm9qZWN0Rm9ybS5qc1wiO1xuXG5jb25zdCBIb21lRE9NID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc05hbWUgPVwibGlzdC1jb250YWluZXJcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdik7XG5cbiAgICAvL3JlbmRlciBoZWFkaW5nXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGluZy5jbGFzc05hbWUgPSBcImxpc3QtbmFtZVwiO1xuICAgIGRpdi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICAgIC8vcmVuZGVyIGxpc3RcbiAgICB2YXIgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgbGlzdC5jbGFzc05hbWUgPSAnbGlzdCc7XG4gICAgbGlzdC5pZCA9IFwiTWFpblwiO1xuICAgIGRpdi5hcHBlbmRDaGlsZChsaXN0KTtcblxuICAgIGFkZEl0ZW1Gb3JtKGxpc3QpO1xuICAgIG5ld1Byb2plY3RGb3JtKCk7XG4gICAgXG4gICAgZGlzcGxheUxpc3QobGlzdC5pZCk7XG4gICAgZGlzcGxheVByb2plY3RzKCk7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZURPTTsiLCJjb25zdCBpdGVtRm9ybVBhcnRpYWwgPSAoYWN0aW9uKSA9PiB7XG5cbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm0uY2xhc3NOYW1lID0gYCR7YWN0aW9ufS1pdGVtLWZvcm1gO1xuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBpbnB1dC5wbGFjZWhvbGRlciA9IFwiVGFzayBuYW1lXCI7XG4gICAgaW5wdXQuaWQgPSBgJHthY3Rpb259LXRhc2stdGl0bGVgO1xuICAgIHZhciBpdGVtTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGl0ZW1MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgaW5wdXQuaWQpO1xuICAgIGl0ZW1MYWJlbC5pbm5lckhUTUwgPSBcIlRhc2sgbmFtZVwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaXRlbUxhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkZXNjcmlwdGlvbi50eXBlID0gXCJ0ZXh0XCI7XG4gICAgZGVzY3JpcHRpb24ucGxhY2Vob2xkZXIgPSBcIkRlc2NyaXB0aW9uXCI7XG4gICAgZGVzY3JpcHRpb24uaWQgPWAke2FjdGlvbn0tdGFzay1kZXNjYDtcbiAgICB2YXIgZGVzY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkZXNjTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGRlc2NyaXB0aW9uLmlkKTtcbiAgICBkZXNjTGFiZWwuaW5uZXJIVE1MID0gXCJEZXNjcmlwdGlvblwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY0xhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGR1ZURhdGUudHlwZSA9IFwiZGF0ZVwiO1xuICAgIGR1ZURhdGUuaWQgPSBgJHthY3Rpb259LXRhc2stZGF0ZWA7XG4gICAgdmFyIGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGF0ZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBkdWVEYXRlLmlkKTtcbiAgICBkYXRlTGFiZWwuaW5uZXJIVE1MID0gXCIgRHVlIGRhdGVcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcblxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgcHJpb3JpdHkuY2xhc3NOYW1lID0gXCJwcmlvcml0eS1zZWxlY3RcIjtcbiAgICBwcmlvcml0eS5pZCA9IGAke2FjdGlvbn0tdGFzay1wcmlvcml0eWA7XG4gICAgdmFyIG9wdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbjEpO1xuICAgIHZhciBvcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb24yKTtcbiAgICB2YXIgb3B0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uMyk7XG4gICAgb3B0aW9uMS52YWx1ZSA9IFwiSGlnaFwiO1xuICAgIG9wdGlvbjEudGV4dCA9IFwiSGlnaFwiO1xuICAgIG9wdGlvbjIudmFsdWUgPSBcIk1pZFwiO1xuICAgIG9wdGlvbjIudGV4dCA9IFwiTWlkXCI7XG4gICAgb3B0aW9uMy52YWx1ZSA9IFwiTG93XCI7XG4gICAgb3B0aW9uMy50ZXh0ID0gXCJMb3dcIjtcbiAgICB2YXIgcHJpb3JMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJpb3JMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgcHJpb3JpdHkuaWQpO1xuICAgIHByaW9yTGFiZWwuaW5uZXJIVE1MID0gXCJQcmlvcml0eVwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JMYWJlbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIHJldHVybiBmb3JtXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgaXRlbUZvcm1QYXJ0aWFsOyIsImltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gXCIuL2NyZWF0ZVByb2plY3QuanNcIjtcbmltcG9ydCBkaXNwbGF5UHJvamVjdHMgZnJvbSBcIi4vZGlzcGxheVByb2plY3RzLmpzXCI7XG5cbmNvbnN0IG5ld1Byb2plY3RGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdQcm9qZWN0Rm9ybS5jbGFzc05hbWUgPSBcIm5ldy1wcm9qZWN0LWZvcm1cIjtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJvamVjdE5hbWUudHlwZSA9IFwidGV4dFwiO1xuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKVxuICBcbiAgICBjb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmV3UHJvamVjdEJ0bi5jbGFzc05hbWUgPSBcIm5ldy1wcm9qZWN0LWJ0blwiO1xuICAgIG5ld1Byb2plY3RCdG4udGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBuZXcgcHJvamVjdFwiO1xuICAgIG5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUudmFsdWUpO1xuICAgICAgICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgICAgICAgcHJvamVjdE5hbWUudmFsdWUgPSBcIlwiO1xuICAgIH0pXG4gICAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQobmV3UHJvamVjdEJ0bilcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5ld1Byb2plY3RGb3JtKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3UHJvamVjdEZvcm07IiwiY29uc3Qgc2F2ZUl0ZW0gPSAobmV3VGFzaywgbGlzdE5hbWUpID0+IHtcbiAgICBsZXQgbGlzdDtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0obGlzdE5hbWUpID09PSBudWxsKSB7XG4gICAgICAgIGxpc3QgPSBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsaXN0TmFtZSkpO1xuICAgIH1cbiAgICBsaXN0LnB1c2gobmV3VGFzayk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obGlzdE5hbWUsIEpTT04uc3RyaW5naWZ5KGxpc3QpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2F2ZUl0ZW07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBIb21lRE9NIGZyb20gJy4vaG9tZURvbS5qcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBkaXNwbGF5Rm9ybSBmcm9tIFwiLi9kaXNwbGF5Rm9ybS5qc1wiO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAvL25hdmJhclxuICAgIGNvbnN0IGFkZEl0ZW1Qb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtaXRlbS1wb3B1cCcpO1xuICAgIGFkZEl0ZW1Qb3B1cC5vbmNsaWNrID0gKCkgPT4gZGlzcGxheUZvcm0oXCJhZGQtaXRlbVwiKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtcG9wdXAnKTtcbiAgICBhZGRQcm9qZWN0UG9wdXAub25jbGljayA9ICgpID0+IGRpc3BsYXlGb3JtKCdhZGQtcHJvamVjdCcpO1xuXG5cbiAgICAvL2xvYWQgaG9tZXBhZ2VcbiAgICBIb21lRE9NKCk7XG5cbn0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=