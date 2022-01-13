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
___CSS_LOADER_EXPORT___.push([module.id, "html {\n    height: 100%;\n}\n* {\n    border: 1px solid red;\n    color: #434544;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    font-weight: 100;\n    \n}\nbody {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    background: linear-gradient(to bottom left, cyan, magenta);\n    background-size: cover; \n    background-position: bottom;   \n}\nnav {\n    /* background: linear-gradient(to left, cyan, magenta); */\n    padding: 20px;\n    width: 20%;\n    margin: auto;\n    border-radius: 50px;\n    background: rgba(241, 235, 245, 0.4);\n\n}\n\nnav div {\n    display: inline-block;\n    background: rgba(241, 235, 245, 0.6);\n    padding: 20px;\n    border-radius: 50px;\n    width: 18%;\n    text-align: center;\n\n\n\n}\n\n#content {\n    margin: auto;\n    margin-top: 50px;\n    width: 70%;\n\n    padding: 20px;\n    display: grid;\n    grid-template-columns: 3fr 1fr;\n    position: relative;\n    background: rgba(241, 235, 245, 0.5);\n    border-radius: 40px;\n}\n\n.list-name {\n    text-align: center;\n    background: rgba(241, 235, 245, 0.6);\n    border-radius: 30px;\n    width: 50%;\n    margin: auto;\n    padding: 20px;\n}\n\n\n\n\n\n\n.new-project-form {\n    padding: 30px;\n    position: absolute;\n    display: none;\n    top: 70px;\n    justify-self: center;\n    grid-template-columns: 2fr 1fr;\n    grid-gap: 15px;\n    -webkit-animation: fadeIn 1s;\n    animation: fadeIn 1s;\n    background-color: aqua;\n\n}\n\n.edit-item-form {\n    display: grid;\n}\n\n.add-item-form {\n    display: none;\n\n}\n\n.add-item-form, .edit-item-form {\n    margin: auto;\n    padding: 30px;\n    position: absolute;\n    top: 70px;\n    justify-self: center;\n    grid-template-columns: repeat(5, 1fr);\n    grid-gap: 15px;\n    -webkit-animation: fadeIn 1s;\n    animation: fadeIn 1s;\n    background-color: aqua;\n}\n\n.form-section-wrapper {\n    display: grid;\n    grid-template-columns: 1fr;\n}\n/* Add animation (fade in the popup) */\n@-webkit-keyframes fadeIn {\n    from {opacity: 0;}\n    to {opacity: 1;}\n  }\n  \n  @keyframes fadeIn {\n    from {opacity: 0;}\n    to {opacity:1 ;}\n  }\n\n\n.item-form label {\n    margin-top: 10px;\n    margin-bottom: 5px;\n}\n/* .item-form  input[type=date] {\n} */\n.item-form select {\n    margin-bottom: 10px;\n}\n\n.projects {\n    justify-self: end;\n    align-self: start;\n    width: 100%;\n}\n.projects h2 {\n    background: rgba(241, 235, 245, 0.7);\n    border-radius: 30px;\n    padding: 20px 40px;\n    font-size: 30px;\n    text-align: center;\n    margin-top: 0;\n}\n\n.project {\n    margin: 10px 0px;\n    background: rgba(241, 235, 245, 0.5);\n    border-radius: 20px;\n    padding: 10px 40px;\n\n\n}\n.project:hover {\n    background: rgba(241, 235, 245, 0.7);\n\n}\n.list {\n    display: grid;\n    grid-template-columns: 1fr;\n    padding: 0;\n}\n.list-item {\n    margin: 0px 10px 20px 10px;\n    /* margin-bottom: 20px; */\n    display: grid;\n    align-items: center;\n    grid-gap: 10px;\n    grid-template-columns: 1fr 4fr 1fr;\n    justify-content: space-between;\n    padding: 30px;\n    background: rgba(241, 235, 245, 0.7);\n    border-radius: 30px;\n    animation: fadeIn 1s;\n\n\n    \n}\n\n.check-container {\n    align-self: start;\n    display: block;\n    position: relative;\n    padding-left: 35px;\n    margin-bottom: 12px;\n    cursor: pointer;\n    font-size: 22px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    \n  }\n  \n  /* Hide the browser's default checkbox */\n  .check-container input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n  }\n  \n  /* Create a custom checkbox */\n  .checkmark {\n    position: absolute;\n    left: 10px;\n    top: 0;\n    height: 25px;\n    width: 25px;\n    background-color: #eee;\n    transform: scale(2.3);\n    border-radius: 15px;\n  }\n  \n  /* On mouse-over, add a grey background color */\n  .check-container:hover input ~ .checkmark {\n    background-color: #ccc;\n  }\n  \n  /* When the checkbox is checked, add a blue background */\n  .check-container input:checked ~ .checkmark {\n    background-color: #eee;\n  }\n\n.checkmark:after {\n    content: \"\";\n    position: absolute;\n    display: none;\n  }\n  \n  /* Show the checkmark when checked */\n  .check-container input:checked ~ .checkmark:after {\n    display: block;\n  }\n  \n  /* Style the checkmark/indicator */\n  .check-container .checkmark:after {\n    left: 9px;\n    top: 5px;\n    width: 5px;\n    height: 10px;\n    border: solid #02f70b;\n    border-width: 0 3px 3px 0;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n  }\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html {\n    height: 100%;\n}\n* {\n    border: 1px solid red;\n    color: #434544;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    font-weight: 100;\n    \n}\nbody {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    background: linear-gradient(to bottom left, cyan, magenta);\n    background-size: cover; \n    background-position: bottom;   \n}\nnav {\n    /* background: linear-gradient(to left, cyan, magenta); */\n    padding: 20px;\n    width: 20%;\n    margin: auto;\n    border-radius: 50px;\n    background: rgba(241, 235, 245, 0.4);\n\n}\n\nnav div {\n    display: inline-block;\n    background: rgba(241, 235, 245, 0.6);\n    padding: 20px;\n    border-radius: 50px;\n    width: 18%;\n    text-align: center;\n\n\n\n}\n\n#content {\n    margin: auto;\n    margin-top: 50px;\n    width: 70%;\n\n    padding: 20px;\n    display: grid;\n    grid-template-columns: 3fr 1fr;\n    position: relative;\n    background: rgba(241, 235, 245, 0.5);\n    border-radius: 40px;\n}\n\n.list-name {\n    text-align: center;\n    background: rgba(241, 235, 245, 0.6);\n    border-radius: 30px;\n    width: 50%;\n    margin: auto;\n    padding: 20px;\n}\n\n\n\n\n\n\n.new-project-form {\n    padding: 30px;\n    position: absolute;\n    display: none;\n    top: 70px;\n    justify-self: center;\n    grid-template-columns: 2fr 1fr;\n    grid-gap: 15px;\n    -webkit-animation: fadeIn 1s;\n    animation: fadeIn 1s;\n    background-color: aqua;\n\n}\n\n.edit-item-form {\n    display: grid;\n}\n\n.add-item-form {\n    display: none;\n\n}\n\n.add-item-form, .edit-item-form {\n    margin: auto;\n    padding: 30px;\n    position: absolute;\n    top: 70px;\n    justify-self: center;\n    grid-template-columns: repeat(5, 1fr);\n    grid-gap: 15px;\n    -webkit-animation: fadeIn 1s;\n    animation: fadeIn 1s;\n    background-color: aqua;\n}\n\n.form-section-wrapper {\n    display: grid;\n    grid-template-columns: 1fr;\n}\n/* Add animation (fade in the popup) */\n@-webkit-keyframes fadeIn {\n    from {opacity: 0;}\n    to {opacity: 1;}\n  }\n  \n  @keyframes fadeIn {\n    from {opacity: 0;}\n    to {opacity:1 ;}\n  }\n\n\n.item-form label {\n    margin-top: 10px;\n    margin-bottom: 5px;\n}\n/* .item-form  input[type=date] {\n} */\n.item-form select {\n    margin-bottom: 10px;\n}\n\n.projects {\n    justify-self: end;\n    align-self: start;\n    width: 100%;\n}\n.projects h2 {\n    background: rgba(241, 235, 245, 0.7);\n    border-radius: 30px;\n    padding: 20px 40px;\n    font-size: 30px;\n    text-align: center;\n    margin-top: 0;\n}\n\n.project {\n    margin: 10px 0px;\n    background: rgba(241, 235, 245, 0.5);\n    border-radius: 20px;\n    padding: 10px 40px;\n\n\n}\n.project:hover {\n    background: rgba(241, 235, 245, 0.7);\n\n}\n.list {\n    display: grid;\n    grid-template-columns: 1fr;\n    padding: 0;\n}\n.list-item {\n    margin: 0px 10px 20px 10px;\n    /* margin-bottom: 20px; */\n    display: grid;\n    align-items: center;\n    grid-gap: 10px;\n    grid-template-columns: 1fr 4fr 1fr;\n    justify-content: space-between;\n    padding: 30px;\n    background: rgba(241, 235, 245, 0.7);\n    border-radius: 30px;\n    animation: fadeIn 1s;\n\n\n    \n}\n\n.check-container {\n    align-self: start;\n    display: block;\n    position: relative;\n    padding-left: 35px;\n    margin-bottom: 12px;\n    cursor: pointer;\n    font-size: 22px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    \n  }\n  \n  /* Hide the browser's default checkbox */\n  .check-container input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n  }\n  \n  /* Create a custom checkbox */\n  .checkmark {\n    position: absolute;\n    left: 10px;\n    top: 0;\n    height: 25px;\n    width: 25px;\n    background-color: #eee;\n    transform: scale(2.3);\n    border-radius: 15px;\n  }\n  \n  /* On mouse-over, add a grey background color */\n  .check-container:hover input ~ .checkmark {\n    background-color: #ccc;\n  }\n  \n  /* When the checkbox is checked, add a blue background */\n  .check-container input:checked ~ .checkmark {\n    background-color: #eee;\n  }\n\n.checkmark:after {\n    content: \"\";\n    position: absolute;\n    display: none;\n  }\n  \n  /* Show the checkmark when checked */\n  .check-container input:checked ~ .checkmark:after {\n    display: block;\n  }\n  \n  /* Style the checkmark/indicator */\n  .check-container .checkmark:after {\n    left: 9px;\n    top: 5px;\n    width: 5px;\n    height: 10px;\n    border: solid #02f70b;\n    border-width: 0 3px 3px 0;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n  }\n\n"],"sourceRoot":""}]);
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
/* harmony import */ var _itemFormPartial_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./itemFormPartial.js */ "./src/itemFormPartial.js");
/* harmony import */ var _displayForm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayForm.js */ "./src/displayForm.js");
/* harmony import */ var _displayList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayList.js */ "./src/displayList.js");





const addItemForm = (list) => {
    const partial = (0,_itemFormPartial_js__WEBPACK_IMPORTED_MODULE_1__["default"])('add');
    var input = document.querySelector('#add-task-title');
    var description =  document.querySelector('#add-task-desc');
    var dueDate =  document.querySelector('#add-task-date');
    var priority =  document.querySelector('#add-task-priority');

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
        (0,_displayList_js__WEBPACK_IMPORTED_MODULE_3__["default"])(list.id);
        (0,_displayForm_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
        
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
/* harmony import */ var _displayList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayList.js */ "./src/displayList.js");

const deleteItem = (list, index) => {
    console.log(event);
    var items = JSON.parse(localStorage.getItem(list));
    items.splice(index, 1);
    items = JSON.stringify(items);
    localStorage.setItem(list, items);
    setTimeout(function() {(0,_displayList_js__WEBPACK_IMPORTED_MODULE_0__["default"])(list)}, 1000);
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
               element.outerHTML = ""; 
            });
        }
        projform.style.display = "none";
        itemform.style.display = "none";

    } else if (action === 'add-item') {
        if (editform !== null) {
            document.querySelectorAll('.edit-item-form').forEach(element => {
               element.outerHTML = ""; 
            });
        }
        itemform.style.display = "grid";
        projform.style.display = "none";

    } else if (action === 'add-project') {
        if (editform !== null) {
            document.querySelectorAll('.edit-item-form').forEach(element => {
               element.outerHTML = ""; 
            });
        }
        projform.style.display = "grid";
        itemform.style.display = "none";
    } else {
        if (editform !== null) {
            document.querySelectorAll('.edit-item-form').forEach(element => {
               element.outerHTML = ""; 
            });
        }
        projform.style.display = "none";
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

    const checklabel = document.createElement('label');
    checklabel.className = "check-container";
    const deleteBtn = document.createElement('input');
    deleteBtn.type = "checkbox";
    checklabel.appendChild(deleteBtn);
    // deleteBtn.textContent = "DELETED!";
    const span = document.createElement('span');
    span.className = "checkmark";
    checklabel.appendChild(span);
    deleteBtn.onclick = () => (0,_deleteItem_js__WEBPACK_IMPORTED_MODULE_0__["default"])(listName, index);
    div.prepend(checklabel);

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
            li.className = "project";
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
/* harmony import */ var _displayList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayList.js */ "./src/displayList.js");
/* harmony import */ var _displayForm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayForm.js */ "./src/displayForm.js");





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
        (0,_displayList_js__WEBPACK_IMPORTED_MODULE_2__["default"])(list);
        (0,_displayForm_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
        
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
/* harmony import */ var _createProject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject.js */ "./src/createProject.js");
/* harmony import */ var _displayList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayList.js */ "./src/displayList.js");
/* harmony import */ var _saveItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saveItem.js */ "./src/saveItem.js");
/* harmony import */ var _displayProjects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayProjects.js */ "./src/displayProjects.js");
/* harmony import */ var _addItemForm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addItemForm.js */ "./src/addItemForm.js");
/* harmony import */ var _newProjectForm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./newProjectForm.js */ "./src/newProjectForm.js");







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

    (0,_addItemForm_js__WEBPACK_IMPORTED_MODULE_4__["default"])(list);
    (0,_newProjectForm_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
    
    (0,_displayList_js__WEBPACK_IMPORTED_MODULE_1__["default"])(list.id);
    (0,_displayProjects_js__WEBPACK_IMPORTED_MODULE_3__["default"])();

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

    const inputwrapper = document.createElement('div');
    inputwrapper.className = "form-section-wrapper";
    const input = document.createElement('input');
    input.type = "text";
    input.placeholder = "Task name";
    input.id = `${action}-task-title`;
    var itemLabel = document.createElement('label');
    itemLabel.setAttribute("for", input.id);
    itemLabel.innerHTML = "Task name";
    inputwrapper.appendChild(itemLabel);
    inputwrapper.appendChild(input);
    form.appendChild(inputwrapper);
    
    const descwrapper = document.createElement('div');
    descwrapper.className = "form-section-wrapper";
    const description = document.createElement('input');
    description.type = "text";
    description.placeholder = "Description";
    description.id =`${action}-task-desc`;
    var descLabel = document.createElement('label');
    descLabel.setAttribute("for", description.id);
    descLabel.innerHTML = "Description";
    descwrapper.appendChild(descLabel);
    descwrapper.appendChild(description);
    form.appendChild(descwrapper);
    
    const datewrapper = document.createElement('div');
    datewrapper.className = "form-section-wrapper";
    const dueDate = document.createElement('input');
    dueDate.type = "date";
    dueDate.id = `${action}-task-date`;
    var dateLabel = document.createElement('label');
    dateLabel.setAttribute("for", dueDate.id);
    dateLabel.innerHTML = " Due date";
    datewrapper.appendChild(dateLabel);
    datewrapper.appendChild(dueDate);
    form.appendChild(datewrapper);

    const priorwrapper = document.createElement('div');
    priorwrapper.className = "form-section-wrapper";
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
    priorwrapper.appendChild(priorLabel);
    priorwrapper.appendChild(priority);
    form.appendChild(priorwrapper);
    
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
/* harmony import */ var _displayForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayForm.js */ "./src/displayForm.js");
/* harmony import */ var _displayProjects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayProjects.js */ "./src/displayProjects.js");




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
        (0,_displayProjects_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
        (0,_displayForm_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTm1DO0FBQ2Q7QUFDc0I7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQywyREFBVztBQUM1QztBQUNBLG9DQUFvQywyREFBVzs7O0FBRy9DO0FBQ0EsSUFBSSx1REFBTzs7QUFFWCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL3NyYy9hZGRJdGVtRm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9zcmMvY29sbGFwc2VJdGVtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL3NyYy9jcmVhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL3NyYy9kZWxldGVJdGVtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL3NyYy9kaXNwbGF5Rm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9zcmMvZGlzcGxheUl0ZW1NaW4uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vc3JjL2Rpc3BsYXlMaXN0LmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL3NyYy9kaXNwbGF5UHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vc3JjL2VkaXRJdGVtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL3NyYy9lZGl0SXRlbUZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vc3JjL2V4cGFuZEl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vc3JjL2hvbWVEb20uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vc3JjL2l0ZW1Gb3JtUGFydGlhbC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9zcmMvbmV3UHJvamVjdEZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vc3JjL3NhdmVJdGVtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4qIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgICBjb2xvcjogIzQzNDU0NDtcXG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBcXG59XFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSBsZWZ0LCBjeWFuLCBtYWdlbnRhKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTsgICBcXG59XFxubmF2IHtcXG4gICAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIGN5YW4sIG1hZ2VudGEpOyAqL1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyMzUsIDI0NSwgMC40KTtcXG5cXG59XFxuXFxubmF2IGRpdiB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDEsIDIzNSwgMjQ1LCAwLjYpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICB3aWR0aDogMTglO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuXFxuXFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICB3aWR0aDogNzAlO1xcblxcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDEsIDIzNSwgMjQ1LCAwLjUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbn1cXG5cXG4ubGlzdC1uYW1lIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MSwgMjM1LCAyNDUsIDAuNik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuLm5ldy1wcm9qZWN0LWZvcm0ge1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHRvcDogNzBweDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXG4gICAgZ3JpZC1nYXA6IDE1cHg7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gMXM7XFxuICAgIGFuaW1hdGlvbjogZmFkZUluIDFzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcblxcbn1cXG5cXG4uZWRpdC1pdGVtLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uYWRkLWl0ZW0tZm9ybSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuXFxufVxcblxcbi5hZGQtaXRlbS1mb3JtLCAuZWRpdC1pdGVtLWZvcm0ge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA3MHB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgZ3JpZC1nYXA6IDE1cHg7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gMXM7XFxuICAgIGFuaW1hdGlvbjogZmFkZUluIDFzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbn1cXG5cXG4uZm9ybS1zZWN0aW9uLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG59XFxuLyogQWRkIGFuaW1hdGlvbiAoZmFkZSBpbiB0aGUgcG9wdXApICovXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAgIGZyb20ge29wYWNpdHk6IDA7fVxcbiAgICB0byB7b3BhY2l0eTogMTt9XFxuICB9XFxuICBcXG4gIEBrZXlmcmFtZXMgZmFkZUluIHtcXG4gICAgZnJvbSB7b3BhY2l0eTogMDt9XFxuICAgIHRvIHtvcGFjaXR5OjEgO31cXG4gIH1cXG5cXG5cXG4uaXRlbS1mb3JtIGxhYmVsIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG4vKiAuaXRlbS1mb3JtICBpbnB1dFt0eXBlPWRhdGVdIHtcXG59ICovXFxuLml0ZW0tZm9ybSBzZWxlY3Qge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4ucHJvamVjdHMgaDIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MSwgMjM1LCAyNDUsIDAuNyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDEsIDIzNSwgMjQ1LCAwLjUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHg7XFxuXFxuXFxufVxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDEsIDIzNSwgMjQ1LCAwLjcpO1xcblxcbn1cXG4ubGlzdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG4ubGlzdC1pdGVtIHtcXG4gICAgbWFyZ2luOiAwcHggMTBweCAyMHB4IDEwcHg7XFxuICAgIC8qIG1hcmdpbi1ib3R0b206IDIwcHg7ICovXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtZ2FwOiAxMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyMzUsIDI0NSwgMC43KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMXM7XFxuXFxuXFxuICAgIFxcbn1cXG5cXG4uY2hlY2stY29udGFpbmVyIHtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmctbGVmdDogMzVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIFxcbiAgfVxcbiAgXFxuICAvKiBIaWRlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCBjaGVja2JveCAqL1xcbiAgLmNoZWNrLWNvbnRhaW5lciBpbnB1dCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHdpZHRoOiAwO1xcbiAgfVxcbiAgXFxuICAvKiBDcmVhdGUgYSBjdXN0b20gY2hlY2tib3ggKi9cXG4gIC5jaGVja21hcmsge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDEwcHg7XFxuICAgIHRvcDogMDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyLjMpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgfVxcbiAgXFxuICAvKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgKi9cXG4gIC5jaGVjay1jb250YWluZXI6aG92ZXIgaW5wdXQgfiAuY2hlY2ttYXJrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gIH1cXG4gIFxcbiAgLyogV2hlbiB0aGUgY2hlY2tib3ggaXMgY2hlY2tlZCwgYWRkIGEgYmx1ZSBiYWNrZ3JvdW5kICovXFxuICAuY2hlY2stY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gIH1cXG5cXG4uY2hlY2ttYXJrOmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLyogU2hvdyB0aGUgY2hlY2ttYXJrIHdoZW4gY2hlY2tlZCAqL1xcbiAgLmNoZWNrLWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbiAgXFxuICAvKiBTdHlsZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAqL1xcbiAgLmNoZWNrLWNvbnRhaW5lciAuY2hlY2ttYXJrOmFmdGVyIHtcXG4gICAgbGVmdDogOXB4O1xcbiAgICB0b3A6IDVweDtcXG4gICAgd2lkdGg6IDVweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXI6IHNvbGlkICMwMmY3MGI7XFxuICAgIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICB9XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2Qsd0VBQXdFO0lBQ3hFLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osU0FBUztJQUNULDBEQUEwRDtJQUMxRCxzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSx5REFBeUQ7SUFDekQsYUFBYTtJQUNiLFVBQVU7SUFDVixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG9DQUFvQzs7QUFFeEM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGtCQUFrQjs7OztBQUl0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsVUFBVTs7SUFFVixhQUFhO0lBQ2IsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7Ozs7OztBQU9BO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsU0FBUztJQUNULG9CQUFvQjtJQUNwQiw4QkFBOEI7SUFDOUIsY0FBYztJQUNkLDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIsc0JBQXNCOztBQUUxQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhOztBQUVqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxvQkFBb0I7SUFDcEIscUNBQXFDO0lBQ3JDLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7QUFDOUI7QUFDQSxzQ0FBc0M7QUFDdEM7SUFDSSxNQUFNLFVBQVUsQ0FBQztJQUNqQixJQUFJLFVBQVUsQ0FBQztFQUNqQjs7RUFFQTtJQUNFLE1BQU0sVUFBVSxDQUFDO0lBQ2pCLElBQUksVUFBVSxDQUFDO0VBQ2pCOzs7QUFHRjtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtHQUNHO0FBQ0g7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsa0JBQWtCOzs7QUFHdEI7QUFDQTtJQUNJLG9DQUFvQzs7QUFFeEM7QUFDQTtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsVUFBVTtBQUNkO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGtDQUFrQztJQUNsQyw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsb0JBQW9COzs7O0FBSXhCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGlCQUFpQjs7RUFFbkI7O0VBRUEsd0NBQXdDO0VBQ3hDO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixlQUFlO0lBQ2YsU0FBUztJQUNULFFBQVE7RUFDVjs7RUFFQSw2QkFBNkI7RUFDN0I7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLE1BQU07SUFDTixZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsbUJBQW1CO0VBQ3JCOztFQUVBLCtDQUErQztFQUMvQztJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQSx3REFBd0Q7RUFDeEQ7SUFDRSxzQkFBc0I7RUFDeEI7O0FBRUY7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7RUFDZjs7RUFFQSxvQ0FBb0M7RUFDcEM7SUFDRSxjQUFjO0VBQ2hCOztFQUVBLGtDQUFrQztFQUNsQztJQUNFLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtJQUNWLFlBQVk7SUFDWixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGdDQUFnQztJQUNoQyw0QkFBNEI7SUFDNUIsd0JBQXdCO0VBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbioge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICAgIGNvbG9yOiAjNDM0NTQ0O1xcbiAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIFxcbn1cXG5ib2R5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIGxlZnQsIGN5YW4sIG1hZ2VudGEpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tOyAgIFxcbn1cXG5uYXYge1xcbiAgICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgY3lhbiwgbWFnZW50YSk7ICovXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDEsIDIzNSwgMjQ1LCAwLjQpO1xcblxcbn1cXG5cXG5uYXYgZGl2IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MSwgMjM1LCAyNDUsIDAuNik7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIHdpZHRoOiAxOCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG5cXG5cXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIHdpZHRoOiA3MCU7XFxuXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MSwgMjM1LCAyNDUsIDAuNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxufVxcblxcbi5saXN0LW5hbWUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyMzUsIDI0NSwgMC42KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG4ubmV3LXByb2plY3QtZm9ybSB7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgdG9wOiA3MHB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcbiAgICBncmlkLWdhcDogMTVweDtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiAxcztcXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMXM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxuXFxufVxcblxcbi5lZGl0LWl0ZW0tZm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5hZGQtaXRlbS1mb3JtIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG5cXG59XFxuXFxuLmFkZC1pdGVtLWZvcm0sIC5lZGl0LWl0ZW0tZm9ybSB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDcwcHg7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICBncmlkLWdhcDogMTVweDtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiAxcztcXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMXM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxufVxcblxcbi5mb3JtLXNlY3Rpb24td3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbn1cXG4vKiBBZGQgYW5pbWF0aW9uIChmYWRlIGluIHRoZSBwb3B1cCkgKi9cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcXG4gICAgZnJvbSB7b3BhY2l0eTogMDt9XFxuICAgIHRvIHtvcGFjaXR5OiAxO31cXG4gIH1cXG4gIFxcbiAgQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICBmcm9tIHtvcGFjaXR5OiAwO31cXG4gICAgdG8ge29wYWNpdHk6MSA7fVxcbiAgfVxcblxcblxcbi5pdGVtLWZvcm0gbGFiZWwge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcbi8qIC5pdGVtLWZvcm0gIGlucHV0W3R5cGU9ZGF0ZV0ge1xcbn0gKi9cXG4uaXRlbS1mb3JtIHNlbGVjdCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5wcm9qZWN0cyBoMiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyMzUsIDI0NSwgMC43KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBtYXJnaW46IDEwcHggMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MSwgMjM1LCAyNDUsIDAuNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggNDBweDtcXG5cXG5cXG59XFxuLnByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MSwgMjM1LCAyNDUsIDAuNyk7XFxuXFxufVxcbi5saXN0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcbi5saXN0LWl0ZW0ge1xcbiAgICBtYXJnaW46IDBweCAxMHB4IDIwcHggMTBweDtcXG4gICAgLyogbWFyZ2luLWJvdHRvbTogMjBweDsgKi9cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC1nYXA6IDEwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmciAxZnI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDEsIDIzNSwgMjQ1LCAwLjcpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBhbmltYXRpb246IGZhZGVJbiAxcztcXG5cXG5cXG4gICAgXFxufVxcblxcbi5jaGVjay1jb250YWluZXIge1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgXFxuICB9XFxuICBcXG4gIC8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IGNoZWNrYm94ICovXFxuICAuY2hlY2stY29udGFpbmVyIGlucHV0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGhlaWdodDogMDtcXG4gICAgd2lkdGg6IDA7XFxuICB9XFxuICBcXG4gIC8qIENyZWF0ZSBhIGN1c3RvbSBjaGVja2JveCAqL1xcbiAgLmNoZWNrbWFyayB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMTBweDtcXG4gICAgdG9wOiAwO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIuMyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB9XFxuICBcXG4gIC8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciAqL1xcbiAgLmNoZWNrLWNvbnRhaW5lcjpob3ZlciBpbnB1dCB+IC5jaGVja21hcmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbiAgfVxcbiAgXFxuICAvKiBXaGVuIHRoZSBjaGVja2JveCBpcyBjaGVja2VkLCBhZGQgYSBibHVlIGJhY2tncm91bmQgKi9cXG4gIC5jaGVjay1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgfVxcblxcbi5jaGVja21hcms6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgXFxuICAvKiBTaG93IHRoZSBjaGVja21hcmsgd2hlbiBjaGVja2VkICovXFxuICAuY2hlY2stY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuICBcXG4gIC8qIFN0eWxlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yICovXFxuICAuY2hlY2stY29udGFpbmVyIC5jaGVja21hcms6YWZ0ZXIge1xcbiAgICBsZWZ0OiA5cHg7XFxuICAgIHRvcDogNXB4O1xcbiAgICB3aWR0aDogNXB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlcjogc29saWQgIzAyZjcwYjtcXG4gICAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIH1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBzYXZlSXRlbSBmcm9tIFwiLi9zYXZlSXRlbS5qc1wiO1xuaW1wb3J0IGl0ZW1Gb3JtUGFydGlhbCBmcm9tIFwiLi9pdGVtRm9ybVBhcnRpYWwuanNcIjtcbmltcG9ydCBkaXNwbGF5Rm9ybUNvbnRyb2xsZXIgZnJvbSBcIi4vZGlzcGxheUZvcm0uanNcIjtcbmltcG9ydCBkaXNwbGF5TGlzdCBmcm9tIFwiLi9kaXNwbGF5TGlzdC5qc1wiO1xuXG5jb25zdCBhZGRJdGVtRm9ybSA9IChsaXN0KSA9PiB7XG4gICAgY29uc3QgcGFydGlhbCA9IGl0ZW1Gb3JtUGFydGlhbCgnYWRkJyk7XG4gICAgdmFyIGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLXRpdGxlJyk7XG4gICAgdmFyIGRlc2NyaXB0aW9uID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzay1kZXNjJyk7XG4gICAgdmFyIGR1ZURhdGUgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLWRhdGUnKTtcbiAgICB2YXIgcHJpb3JpdHkgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLXByaW9yaXR5Jyk7XG5cbiAgICBjb25zdCBhZGRJdGVtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkSXRlbUJ0bi5jbGFzc05hbWUgPSBcImFkZC1pdGVtLWJ0blwiO1xuICAgIGFkZEl0ZW1CdG4udGV4dENvbnRlbnQgPSBcIkFkZCBhIHRhc2tcIjtcbiAgICBhZGRJdGVtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IHtcbiAgICAgICAgICAgIHRpdGxlOiBpbnB1dC52YWx1ZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgICAgICAgIGR1ZURhdGU6IGR1ZURhdGUudmFsdWUsXG4gICAgICAgICAgICBwcmlvcml0eTogcHJpb3JpdHkudmFsdWVcbiAgICAgICAgfVxuICAgICAgICBzYXZlSXRlbShuZXdUYXNrLCBsaXN0LmlkKTtcbiAgICAgICAgZGlzcGxheUxpc3QobGlzdC5pZCk7XG4gICAgICAgIGRpc3BsYXlGb3JtQ29udHJvbGxlcigpO1xuICAgICAgICBcbiAgICB9KTtcbiAgICBjb25zdCBpdGVtRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtaXRlbS1mb3JtJyk7XG4gICAgaXRlbUZvcm0uYXBwZW5kQ2hpbGQoYWRkSXRlbUJ0bik7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgYWRkSXRlbUZvcm07IiwiaW1wb3J0IGV4cGFuZEl0ZW0gZnJvbSBcIi4vZXhwYW5kSXRlbVwiO1xuXG5jb25zdCBjb2xsYXBzZUl0ZW0gPSAodGFzaywgZXZlbnQpID0+IHtcbiAgICBjb25zb2xlLmxvZyh0YXNrKVxuICAgIHZhciBlbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gYHRpdGxlOiAke3Rhc2sudGl0bGV9YDtcbiAgICBlbGVtZW50Lm9uY2xpY2sgPSAoZXZlbnQpID0+IGV4cGFuZEl0ZW0odGFzaywgZXZlbnQpO1xuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29sbGFwc2VJdGVtOyIsImNvbnN0IGNyZWF0ZVByb2plY3QgPSAoaW5wdXQpID0+IHtcbiAgICBsZXQgdGFza3MgPSBbXVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGlucHV0LCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQcm9qZWN0OyIsImltcG9ydCBkaXNwbGF5TGlzdCBmcm9tIFwiLi9kaXNwbGF5TGlzdC5qc1wiO1xuY29uc3QgZGVsZXRlSXRlbSA9IChsaXN0LCBpbmRleCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICB2YXIgaXRlbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxpc3QpKTtcbiAgICBpdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGl0ZW1zID0gSlNPTi5zdHJpbmdpZnkoaXRlbXMpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGxpc3QsIGl0ZW1zKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge2Rpc3BsYXlMaXN0KGxpc3QpfSwgMTAwMCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlbGV0ZUl0ZW07IiwiaW1wb3J0IGVkaXRJdGVtRm9ybSBmcm9tIFwiLi9lZGl0SXRlbUZvcm1cIlxuXG5jb25zdCBkaXNwbGF5Rm9ybUNvbnRyb2xsZXIgPSAoYWN0aW9uKSA9PiB7XG4gICAgY29uc3QgaXRlbWZvcm0gPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1pdGVtLWZvcm0nKTtcbiAgICBjb25zdCBwcm9qZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdC1mb3JtJyk7XG4gICAgY29uc3QgZWRpdGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1pdGVtLWZvcm0nKTtcbiAgICBpZiAoYWN0aW9uID09PSAnZWRpdCcpIHtcbiAgICAgICAgaWYgKGVkaXRmb3JtICE9PSBudWxsKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdC1pdGVtLWZvcm0nKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgZWxlbWVudC5vdXRlckhUTUwgPSBcIlwiOyBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHByb2pmb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgaXRlbWZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgfSBlbHNlIGlmIChhY3Rpb24gPT09ICdhZGQtaXRlbScpIHtcbiAgICAgICAgaWYgKGVkaXRmb3JtICE9PSBudWxsKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdC1pdGVtLWZvcm0nKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgZWxlbWVudC5vdXRlckhUTUwgPSBcIlwiOyBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGl0ZW1mb3JtLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbiAgICAgICAgcHJvamZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgfSBlbHNlIGlmIChhY3Rpb24gPT09ICdhZGQtcHJvamVjdCcpIHtcbiAgICAgICAgaWYgKGVkaXRmb3JtICE9PSBudWxsKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdC1pdGVtLWZvcm0nKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgZWxlbWVudC5vdXRlckhUTUwgPSBcIlwiOyBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHByb2pmb3JtLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbiAgICAgICAgaXRlbWZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChlZGl0Zm9ybSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQtaXRlbS1mb3JtJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgIGVsZW1lbnQub3V0ZXJIVE1MID0gXCJcIjsgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBwcm9qZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGl0ZW1mb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlGb3JtQ29udHJvbGxlcjsiLCJpbXBvcnQgZGVsZXRlSXRlbSBmcm9tIFwiLi9kZWxldGVJdGVtLmpzXCI7XG5pbXBvcnQgZGlzcGxheUZvcm1Db250cm9sbGVyIGZyb20gXCIuL2Rpc3BsYXlGb3JtLmpzXCI7XG5pbXBvcnQgZWRpdEl0ZW1Gb3JtIGZyb20gXCIuL2VkaXRJdGVtRm9ybS5qc1wiO1xuXG5jb25zdCBkaXNwbGF5SXRlbU1pbiA9IChsaXN0TmFtZSwgaW5kZXgpID0+IHtcbiAgICB2YXIgaXRlbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxpc3ROYW1lKSk7XG4gICAgY29uc3QgdGFzayA9IGl0ZW1zW2luZGV4XTtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGV4dC50ZXh0Q29udGVudCA9IGAke3Rhc2sudGl0bGV9YDtcbiAgICB0ZXh0LmNsYXNzTmFtZSA9IFwidGFzay1ib2R5XCI7XG4gICAgZGl2LmFwcGVuZENoaWxkKHRleHQpO1xuXG4gICAgY29uc3QgY2hlY2tsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY2hlY2tsYWJlbC5jbGFzc05hbWUgPSBcImNoZWNrLWNvbnRhaW5lclwiO1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGVsZXRlQnRuLnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgY2hlY2tsYWJlbC5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICAgIC8vIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9IFwiREVMRVRFRCFcIjtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNwYW4uY2xhc3NOYW1lID0gXCJjaGVja21hcmtcIjtcbiAgICBjaGVja2xhYmVsLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIGRlbGV0ZUJ0bi5vbmNsaWNrID0gKCkgPT4gZGVsZXRlSXRlbShsaXN0TmFtZSwgaW5kZXgpO1xuICAgIGRpdi5wcmVwZW5kKGNoZWNrbGFiZWwpO1xuXG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSBcIkVkaXQgdGFza1wiO1xuICAgIGVkaXRCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgZGlzcGxheUZvcm1Db250cm9sbGVyKCdlZGl0Jyk7XG4gICAgICAgIGVkaXRJdGVtRm9ybShsaXN0TmFtZSwgaW5kZXgpO1xuICAgIH07XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gICAgLy8gZGl2Lm9uY2xpY2sgPSAoZXZlbnQpID0+IGV4cGFuZEl0ZW0odGFzaywgZXZlbnQpO1xuXG4gICAgcmV0dXJuIGRpdlxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUl0ZW1NaW47IiwiaW1wb3J0IGV4cGFuZEl0ZW0gZnJvbSBcIi4vZXhwYW5kSXRlbS5qc1wiO1xuaW1wb3J0IGRlbGV0ZUl0ZW0gZnJvbSBcIi4vZGVsZXRlSXRlbS5qc1wiO1xuaW1wb3J0IGVkaXRJdGVtRm9ybSBmcm9tIFwiLi9lZGl0SXRlbUZvcm0uanNcIjtcbmltcG9ydCBkaXNwbGF5SXRlbU1pbiBmcm9tIFwiLi9kaXNwbGF5SXRlbU1pbi5qc1wiO1xuXG5jb25zdCBkaXNwbGF5TGlzdCA9IChsaXN0TmFtZSkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0JykuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtbmFtZScpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBgJHtsaXN0TmFtZX0gVG8gRG8nc2A7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJyk7XG4gICAgbGlzdC5pZCA9IGxpc3ROYW1lO1xuICAgIGNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsaXN0TmFtZSkpO1xuICAgIHRhc2tzLmZvckVhY2goICh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gZGlzcGxheUl0ZW1NaW4obGlzdE5hbWUsIGluZGV4KTtcbiAgICAgICAgaXRlbS5jbGFzc05hbWUgPSBcImxpc3QtaXRlbVwiO1xuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgIH0pXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUxpc3Q7IiwiaW1wb3J0IGRpc3BsYXlMaXN0IGZyb20gXCIuL2Rpc3BsYXlMaXN0XCI7XG5cbmNvbnN0IGRpc3BsYXlQcm9qZWN0cyA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICB2YXIgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG4gICAgaWYgKGxpc3QgPT09IG51bGwpIHtcbiAgICAgICAgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsaXN0LmNsYXNzTmFtZSA9IFwicHJvamVjdHNcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsaXN0LmlubmVySFRNTCA9IFwiXCI7XG4gICAgfVxuXG5cbiBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gbG9jYWxTdG9yYWdlLmtleShpKTtcbiAgICAgICAgICAgIGxpLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICAgICAgICAgIGxpLmNsYXNzTmFtZSA9IFwicHJvamVjdFwiO1xuICAgICAgICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheUxpc3QobmFtZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgIH1cbiAgICAgICAgbGlzdC5wcmVwZW5kKGhlYWRpbmcpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGxpc3QpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5UHJvamVjdHM7IiwiY29uc3QgZWRpdEl0ZW0gPSAobGlzdCwgZWRpdGVkSW5mbywgaW5kZXgpID0+IHtcbiAgICB2YXIgaXRlbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxpc3QpKTtcbiAgICBpdGVtc1tpbmRleF0gPSBlZGl0ZWRJbmZvO1xuICAgIGl0ZW1zID0gSlNPTi5zdHJpbmdpZnkoaXRlbXMpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGxpc3QsIGl0ZW1zKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZWRpdEl0ZW07IiwiaW1wb3J0IGl0ZW1Gb3JtUGFydGlhbCBmcm9tIFwiLi9pdGVtRm9ybVBhcnRpYWwuanNcIjtcbmltcG9ydCBlZGl0SXRlbSBmcm9tIFwiLi9lZGl0SXRlbS5qc1wiO1xuaW1wb3J0IGRpc3BsYXlMaXN0IGZyb20gXCIuL2Rpc3BsYXlMaXN0LmpzXCI7XG5pbXBvcnQgZGlzcGxheUZvcm1Db250cm9sbGVyIGZyb20gXCIuL2Rpc3BsYXlGb3JtLmpzXCI7XG5cbmNvbnN0IGVkaXRJdGVtRm9ybSA9IChsaXN0LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhcnRpYWwgPSBpdGVtRm9ybVBhcnRpYWwoJ2VkaXQnKTtcbiAgICAvL3JldHJlaXZlIHRhc2sgZnJvbSBzdG9yYWdlXG4gICAgdmFyIGl0ZW1zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsaXN0KSk7XG4gICAgY29uc3QgdGFzayA9IGl0ZW1zW2luZGV4XTtcbiAgICAvLyBmaWxsIGVkaXQgZm9ybSB3aXRoIHRhc2sncyBkYXRhXG4gICAgdmFyIGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay10aXRsZScpO1xuICAgIHZhciBkZXNjcmlwdGlvbiA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLWRlc2MnKTtcbiAgICB2YXIgZHVlRGF0ZSA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLWRhdGUnKTtcbiAgICB2YXIgcHJpb3JpdHkgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay1wcmlvcml0eScpO1xuICAgIGlucHV0LnZhbHVlID0gdGFzay50aXRsZTtcbiAgICBkZXNjcmlwdGlvbi52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgZHVlRGF0ZS52YWx1ZSA9IHRhc2suZHVlRGF0ZTtcbiAgICBwcmlvcml0eS52YWx1ZSA9IHRhc2sucHJpb3JpdHk7XG4gICAgXG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGVkaXRCdG4uY2xhc3NOYW1lID1cImVkaXQtYnRuXCI7XG4gICAgZWRpdEJ0bi50ZXh0Q29udGVudCA9IFwiU3VibWl0IGVkaXRzXCI7XG4gICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRhc2tFZGl0cyA9IHtcbiAgICAgICAgICAgIHRpdGxlOiBpbnB1dC52YWx1ZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgICAgICAgIGR1ZURhdGU6IGR1ZURhdGUudmFsdWUsXG4gICAgICAgICAgICBwcmlvcml0eTogcHJpb3JpdHkudmFsdWVcbiAgICAgICAgfVxuICAgICAgICBlZGl0SXRlbShsaXN0LCB0YXNrRWRpdHMsIGluZGV4KTtcbiAgICAgICAgZGlzcGxheUxpc3QobGlzdCk7XG4gICAgICAgIGRpc3BsYXlGb3JtQ29udHJvbGxlcigpO1xuICAgICAgICBcbiAgICB9KTtcbiAgICAvLyBmb3JtLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICAgIC8vIGRpdi5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICBwYXJ0aWFsLmFwcGVuZChlZGl0QnRuKTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBlZGl0SXRlbUZvcm07IiwiaW1wb3J0IGNvbGxhcHNlSXRlbSBmcm9tIFwiLi9jb2xsYXBzZUl0ZW1cIjtcblxuY29uc3QgZXhwYW5kSXRlbSA9ICh0YXNrLCBldmVudCkgPT4ge1xuICAgIHZhciBlbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gYHRpdGxlOiAke3Rhc2sudGl0bGV9LGRlc2NyaXB0aW9uOiAke3Rhc2suZGVzY3JpcHRpb259LCBkdWU6ICR7dGFzay5kdWVEYXRlfSwgcHJpb3JpdHk6ICR7dGFzay5wcmlvcml0eX1gO1xuICAgIGVsZW1lbnQub25jbGljayA9IChldmVudCkgPT4gY29sbGFwc2VJdGVtKHRhc2ssIGV2ZW50KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZXhwYW5kSXRlbTsiLCJpbXBvcnQgY3JlYXRlUHJvamVjdCBmcm9tIFwiLi9jcmVhdGVQcm9qZWN0LmpzXCI7XG5pbXBvcnQgZGlzcGxheUxpc3QgZnJvbSBcIi4vZGlzcGxheUxpc3QuanNcIjtcbmltcG9ydCBzYXZlSXRlbSBmcm9tIFwiLi9zYXZlSXRlbS5qc1wiO1xuaW1wb3J0IGRpc3BsYXlQcm9qZWN0cyBmcm9tIFwiLi9kaXNwbGF5UHJvamVjdHMuanNcIjtcbmltcG9ydCBhZGRJdGVtRm9ybSBmcm9tIFwiLi9hZGRJdGVtRm9ybS5qc1wiO1xuaW1wb3J0IG5ld1Byb2plY3RGb3JtIGZyb20gXCIuL25ld1Byb2plY3RGb3JtLmpzXCI7XG5cbmNvbnN0IEhvbWVET00gPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTmFtZSA9XCJsaXN0LWNvbnRhaW5lclwiO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAgIC8vcmVuZGVyIGhlYWRpbmdcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkaW5nLmNsYXNzTmFtZSA9IFwibGlzdC1uYW1lXCI7XG4gICAgZGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG4gICAgLy9yZW5kZXIgbGlzdFxuICAgIHZhciBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBsaXN0LmNsYXNzTmFtZSA9ICdsaXN0JztcbiAgICBsaXN0LmlkID0gXCJNYWluXCI7XG4gICAgZGl2LmFwcGVuZENoaWxkKGxpc3QpO1xuXG4gICAgYWRkSXRlbUZvcm0obGlzdCk7XG4gICAgbmV3UHJvamVjdEZvcm0oKTtcbiAgICBcbiAgICBkaXNwbGF5TGlzdChsaXN0LmlkKTtcbiAgICBkaXNwbGF5UHJvamVjdHMoKTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lRE9NOyIsImNvbnN0IGl0ZW1Gb3JtUGFydGlhbCA9IChhY3Rpb24pID0+IHtcblxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybS5jbGFzc05hbWUgPSBgJHthY3Rpb259LWl0ZW0tZm9ybWA7XG5cbiAgICBjb25zdCBpbnB1dHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbnB1dHdyYXBwZXIuY2xhc3NOYW1lID0gXCJmb3JtLXNlY3Rpb24td3JhcHBlclwiO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgaW5wdXQucGxhY2Vob2xkZXIgPSBcIlRhc2sgbmFtZVwiO1xuICAgIGlucHV0LmlkID0gYCR7YWN0aW9ufS10YXNrLXRpdGxlYDtcbiAgICB2YXIgaXRlbUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBpdGVtTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGlucHV0LmlkKTtcbiAgICBpdGVtTGFiZWwuaW5uZXJIVE1MID0gXCJUYXNrIG5hbWVcIjtcbiAgICBpbnB1dHdyYXBwZXIuYXBwZW5kQ2hpbGQoaXRlbUxhYmVsKTtcbiAgICBpbnB1dHdyYXBwZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXR3cmFwcGVyKTtcbiAgICBcbiAgICBjb25zdCBkZXNjd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc2N3cmFwcGVyLmNsYXNzTmFtZSA9IFwiZm9ybS1zZWN0aW9uLXdyYXBwZXJcIjtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGVzY3JpcHRpb24udHlwZSA9IFwidGV4dFwiO1xuICAgIGRlc2NyaXB0aW9uLnBsYWNlaG9sZGVyID0gXCJEZXNjcmlwdGlvblwiO1xuICAgIGRlc2NyaXB0aW9uLmlkID1gJHthY3Rpb259LXRhc2stZGVzY2A7XG4gICAgdmFyIGRlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGVzY0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBkZXNjcmlwdGlvbi5pZCk7XG4gICAgZGVzY0xhYmVsLmlubmVySFRNTCA9IFwiRGVzY3JpcHRpb25cIjtcbiAgICBkZXNjd3JhcHBlci5hcHBlbmRDaGlsZChkZXNjTGFiZWwpO1xuICAgIGRlc2N3cmFwcGVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2N3cmFwcGVyKTtcbiAgICBcbiAgICBjb25zdCBkYXRld3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRhdGV3cmFwcGVyLmNsYXNzTmFtZSA9IFwiZm9ybS1zZWN0aW9uLXdyYXBwZXJcIjtcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkdWVEYXRlLnR5cGUgPSBcImRhdGVcIjtcbiAgICBkdWVEYXRlLmlkID0gYCR7YWN0aW9ufS10YXNrLWRhdGVgO1xuICAgIHZhciBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgZHVlRGF0ZS5pZCk7XG4gICAgZGF0ZUxhYmVsLmlubmVySFRNTCA9IFwiIER1ZSBkYXRlXCI7XG4gICAgZGF0ZXdyYXBwZXIuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgICBkYXRld3JhcHBlci5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGV3cmFwcGVyKTtcblxuICAgIGNvbnN0IHByaW9yd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByaW9yd3JhcHBlci5jbGFzc05hbWUgPSBcImZvcm0tc2VjdGlvbi13cmFwcGVyXCI7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBwcmlvcml0eS5jbGFzc05hbWUgPSBcInByaW9yaXR5LXNlbGVjdFwiO1xuICAgIHByaW9yaXR5LmlkID0gYCR7YWN0aW9ufS10YXNrLXByaW9yaXR5YDtcbiAgICB2YXIgb3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uMSk7XG4gICAgdmFyIG9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbjIpO1xuICAgIHZhciBvcHRpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb24zKTtcbiAgICBvcHRpb24xLnZhbHVlID0gXCJIaWdoXCI7XG4gICAgb3B0aW9uMS50ZXh0ID0gXCJIaWdoXCI7XG4gICAgb3B0aW9uMi52YWx1ZSA9IFwiTWlkXCI7XG4gICAgb3B0aW9uMi50ZXh0ID0gXCJNaWRcIjtcbiAgICBvcHRpb24zLnZhbHVlID0gXCJMb3dcIjtcbiAgICBvcHRpb24zLnRleHQgPSBcIkxvd1wiO1xuICAgIHZhciBwcmlvckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwcmlvckxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBwcmlvcml0eS5pZCk7XG4gICAgcHJpb3JMYWJlbC5pbm5lckhUTUwgPSBcIlByaW9yaXR5XCI7XG4gICAgcHJpb3J3cmFwcGVyLmFwcGVuZENoaWxkKHByaW9yTGFiZWwpO1xuICAgIHByaW9yd3JhcHBlci5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcndyYXBwZXIpO1xuICAgIFxuICAgIGRpdi5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICByZXR1cm4gZm9ybVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGl0ZW1Gb3JtUGFydGlhbDsiLCJpbXBvcnQgY3JlYXRlUHJvamVjdCBmcm9tIFwiLi9jcmVhdGVQcm9qZWN0LmpzXCI7XG5pbXBvcnQgZGlzcGxheUZvcm1Db250cm9sbGVyIGZyb20gXCIuL2Rpc3BsYXlGb3JtLmpzXCI7XG5pbXBvcnQgZGlzcGxheVByb2plY3RzIGZyb20gXCIuL2Rpc3BsYXlQcm9qZWN0cy5qc1wiO1xuXG5jb25zdCBuZXdQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3UHJvamVjdEZvcm0uY2xhc3NOYW1lID0gXCJuZXctcHJvamVjdC1mb3JtXCI7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb2plY3ROYW1lLnR5cGUgPSBcInRleHRcIjtcbiAgICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSlcbiAgXG4gICAgY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5ld1Byb2plY3RCdG4uY2xhc3NOYW1lID0gXCJuZXctcHJvamVjdC1idG5cIjtcbiAgICBuZXdQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gXCJDcmVhdGUgbmV3IHByb2plY3RcIjtcbiAgICBuZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lLnZhbHVlKTtcbiAgICAgICAgZGlzcGxheVByb2plY3RzKCk7XG4gICAgICAgIGRpc3BsYXlGb3JtQ29udHJvbGxlcigpO1xuICAgIH0pXG4gICAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQobmV3UHJvamVjdEJ0bilcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5ld1Byb2plY3RGb3JtKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3UHJvamVjdEZvcm07IiwiY29uc3Qgc2F2ZUl0ZW0gPSAobmV3VGFzaywgbGlzdE5hbWUpID0+IHtcbiAgICBsZXQgbGlzdDtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0obGlzdE5hbWUpID09PSBudWxsKSB7XG4gICAgICAgIGxpc3QgPSBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsaXN0TmFtZSkpO1xuICAgIH1cbiAgICBsaXN0LnB1c2gobmV3VGFzayk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obGlzdE5hbWUsIEpTT04uc3RyaW5naWZ5KGxpc3QpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2F2ZUl0ZW07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBIb21lRE9NIGZyb20gJy4vaG9tZURvbS5qcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBkaXNwbGF5Rm9ybSBmcm9tIFwiLi9kaXNwbGF5Rm9ybS5qc1wiO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAvL25hdmJhclxuICAgIGNvbnN0IGFkZEl0ZW1Qb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtaXRlbS1wb3B1cCcpO1xuICAgIGFkZEl0ZW1Qb3B1cC5vbmNsaWNrID0gKCkgPT4gZGlzcGxheUZvcm0oXCJhZGQtaXRlbVwiKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtcG9wdXAnKTtcbiAgICBhZGRQcm9qZWN0UG9wdXAub25jbGljayA9ICgpID0+IGRpc3BsYXlGb3JtKCdhZGQtcHJvamVjdCcpO1xuXG5cbiAgICAvL2xvYWQgaG9tZXBhZ2VcbiAgICBIb21lRE9NKCk7XG5cbn0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=