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
___CSS_LOADER_EXPORT___.push([module.id, "html {\n    height: 100%;\n}\n* {\n    /* border: 1px solid red; */\n    color: #434544;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    font-weight: 100;\n    \n}\nbody {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    background: linear-gradient(to bottom left, cyan, magenta);\n    background-size: cover; \n    background-position: bottom;   \n}\nnav {\n    /* background: linear-gradient(to left, cyan, magenta); */\n    padding: 20px;\n    width: 20%;\n    margin: auto;\n    margin-top: 30px;\n    border-radius: 50px;\n    background: rgba(241, 235, 245, 0.4);\n\n}\n\nnav div {\n    display: inline-block;\n    background: rgba(241, 235, 245, 0.6);\n    padding: 20px;\n    border-radius: 50px;\n    width: 18%;\n    text-align: center;\n\n\n\n}\n\n#content {\n    margin: auto;\n    margin-top: 30px;\n    width: 70%;\n\n    padding: 20px;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    position: relative;\n    background: rgba(241, 235, 245, 0.5);\n    border-radius: 40px;\n}\n\n.list-name {\n    text-align: center;\n    background: rgba(241, 235, 245, 0.6);\n    border-radius: 30px;\n    width: 50%;\n    margin: auto;\n    padding: 20px;\n}\n\n\n\n\n\n\n.new-project-form {\n    padding: 30px;\n    position: absolute;\n    display: none;\n    top: 70px;\n    justify-self: center;\n    grid-template-columns: 2fr 1fr;\n    grid-gap: 15px;\n    -webkit-animation: fadeIn 1s;\n    animation: fadeIn 1s;\n    background-color: aqua;\n\n}\n\n.edit-item-form {\n    display: grid;\n}\n\n.add-item-form {\n    display: none;\n\n}\n\n.add-item-form, .edit-item-form {\n    margin: auto;\n    padding: 30px;\n    position: absolute;\n    top: 70px;\n    justify-self: center;\n    grid-template-columns: repeat(5, 1fr);\n    grid-gap: 15px;\n    -webkit-animation: fadeIn 1s;\n    animation: fadeIn 1s;\n    background-color: aqua;\n}\n\n.form-section-wrapper {\n    display: grid;\n    grid-template-columns: 1fr;\n}\n/* Add animation (fade in the popup) */\n@-webkit-keyframes fadeIn {\n    from {opacity: 0;}\n    to {opacity: 1;}\n  }\n  \n  @keyframes fadeIn {\n    from {opacity: 0;}\n    to {opacity:1 ;}\n  }\n\n\n.item-form label {\n    margin-top: 10px;\n    margin-bottom: 5px;\n}\n/* .item-form  input[type=date] {\n} */\n.item-form select {\n    margin-bottom: 10px;\n}\n\n.projects {\n    align-self: start;\n\n}\n.projects h2 {\n    background: rgba(241, 235, 245, 0.7);\n    border-radius: 30px;\n    padding: 20px 40px;\n    font-size: 30px;\n    text-align: center;\n    margin-top: 0;\n    margin-bottom: 15px;\n}\n\n.project {\n    margin: 10px 0px;\n    background: rgba(241, 235, 245, 0.5);\n    border-radius: 30px;\n    padding: 20px 30px;\n    width: fit-content;\n\n\n}\n.project:hover {\n    background: rgba(241, 235, 245, 0.7);\n\n}\n.list {\n    display: grid;\n    grid-template-columns: 1fr;\n    padding: 0;\n}\n.list-item {\n    margin: 0px 10px 20px 10px;\n    /* margin-bottom: 20px; */\n    display: grid;\n    align-items: center;\n    grid-gap: 10px;\n    grid-template-columns: 1fr 4fr 1fr;\n    justify-content: space-between;\n    padding: 30px;\n    background: rgba(241, 235, 245, 0.7);\n    border-radius: 30px;\n    animation: fadeIn 1s;\n\n\n    \n}\n\n.check-container {\n    align-self: start;\n    display: block;\n    position: relative;\n    padding-left: 35px;\n    margin-bottom: 12px;\n    cursor: pointer;\n    font-size: 22px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    \n  }\n  \n  /* Hide the browser's default checkbox */\n  .check-container input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n  }\n  \n  /* Create a custom checkbox */\n  .checkmark {\n    position: absolute;\n    left: 10px;\n    top: 0;\n    height: 25px;\n    width: 25px;\n    background-color: #eee;\n    transform: scale(2.3);\n    border-radius: 15px;\n  }\n  \n  /* On mouse-over, add a grey background color */\n  .check-container:hover input ~ .checkmark {\n    background-color: #ccc;\n  }\n  \n  /* When the checkbox is checked, add a blue background */\n  .check-container input:checked ~ .checkmark {\n    background-color: #eee;\n  }\n\n.checkmark:after {\n    content: \"\";\n    position: absolute;\n    display: none;\n  }\n  \n  /* Show the checkmark when checked */\n  .check-container input:checked ~ .checkmark:after {\n    display: block;\n  }\n  \n  /* Style the checkmark/indicator */\n  .check-container .checkmark:after {\n    left: 9px;\n    top: 5px;\n    width: 5px;\n    height: 10px;\n    border: solid #02f70b;\n    border-width: 0 3px 3px 0;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n  }\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,YAAY;AAChB;AACA;IACI,2BAA2B;IAC3B,cAAc;IACd,wEAAwE;IACxE,gBAAgB;;AAEpB;AACA;IACI,WAAW;IACX,YAAY;IACZ,SAAS;IACT,0DAA0D;IAC1D,sBAAsB;IACtB,2BAA2B;AAC/B;AACA;IACI,yDAAyD;IACzD,aAAa;IACb,UAAU;IACV,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;IACnB,oCAAoC;;AAExC;;AAEA;IACI,qBAAqB;IACrB,oCAAoC;IACpC,aAAa;IACb,mBAAmB;IACnB,UAAU;IACV,kBAAkB;;;;AAItB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,UAAU;;IAEV,aAAa;IACb,aAAa;IACb,8BAA8B;IAC9B,kBAAkB;IAClB,oCAAoC;IACpC,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,oCAAoC;IACpC,mBAAmB;IACnB,UAAU;IACV,YAAY;IACZ,aAAa;AACjB;;;;;;;AAOA;IACI,aAAa;IACb,kBAAkB;IAClB,aAAa;IACb,SAAS;IACT,oBAAoB;IACpB,8BAA8B;IAC9B,cAAc;IACd,4BAA4B;IAC5B,oBAAoB;IACpB,sBAAsB;;AAE1B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;;AAEjB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,SAAS;IACT,oBAAoB;IACpB,qCAAqC;IACrC,cAAc;IACd,4BAA4B;IAC5B,oBAAoB;IACpB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,0BAA0B;AAC9B;AACA,sCAAsC;AACtC;IACI,MAAM,UAAU,CAAC;IACjB,IAAI,UAAU,CAAC;EACjB;;EAEA;IACE,MAAM,UAAU,CAAC;IACjB,IAAI,UAAU,CAAC;EACjB;;;AAGF;IACI,gBAAgB;IAChB,kBAAkB;AACtB;AACA;GACG;AACH;IACI,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;;AAErB;AACA;IACI,oCAAoC;IACpC,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,oCAAoC;IACpC,mBAAmB;IACnB,kBAAkB;IAClB,kBAAkB;;;AAGtB;AACA;IACI,oCAAoC;;AAExC;AACA;IACI,aAAa;IACb,0BAA0B;IAC1B,UAAU;AACd;AACA;IACI,0BAA0B;IAC1B,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,cAAc;IACd,kCAAkC;IAClC,8BAA8B;IAC9B,aAAa;IACb,oCAAoC;IACpC,mBAAmB;IACnB,oBAAoB;;;;AAIxB;;AAEA;IACI,iBAAiB;IACjB,cAAc;IACd,kBAAkB;IAClB,kBAAkB;IAClB,mBAAmB;IACnB,eAAe;IACf,eAAe;IACf,yBAAyB;IACzB,sBAAsB;IACtB,qBAAqB;IACrB,iBAAiB;;EAEnB;;EAEA,wCAAwC;EACxC;IACE,kBAAkB;IAClB,UAAU;IACV,eAAe;IACf,SAAS;IACT,QAAQ;EACV;;EAEA,6BAA6B;EAC7B;IACE,kBAAkB;IAClB,UAAU;IACV,MAAM;IACN,YAAY;IACZ,WAAW;IACX,sBAAsB;IACtB,qBAAqB;IACrB,mBAAmB;EACrB;;EAEA,+CAA+C;EAC/C;IACE,sBAAsB;EACxB;;EAEA,wDAAwD;EACxD;IACE,sBAAsB;EACxB;;AAEF;IACI,WAAW;IACX,kBAAkB;IAClB,aAAa;EACf;;EAEA,oCAAoC;EACpC;IACE,cAAc;EAChB;;EAEA,kCAAkC;EAClC;IACE,SAAS;IACT,QAAQ;IACR,UAAU;IACV,YAAY;IACZ,qBAAqB;IACrB,yBAAyB;IACzB,gCAAgC;IAChC,4BAA4B;IAC5B,wBAAwB;EAC1B","sourcesContent":["html {\n    height: 100%;\n}\n* {\n    /* border: 1px solid red; */\n    color: #434544;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    font-weight: 100;\n    \n}\nbody {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    background: linear-gradient(to bottom left, cyan, magenta);\n    background-size: cover; \n    background-position: bottom;   \n}\nnav {\n    /* background: linear-gradient(to left, cyan, magenta); */\n    padding: 20px;\n    width: 20%;\n    margin: auto;\n    margin-top: 30px;\n    border-radius: 50px;\n    background: rgba(241, 235, 245, 0.4);\n\n}\n\nnav div {\n    display: inline-block;\n    background: rgba(241, 235, 245, 0.6);\n    padding: 20px;\n    border-radius: 50px;\n    width: 18%;\n    text-align: center;\n\n\n\n}\n\n#content {\n    margin: auto;\n    margin-top: 30px;\n    width: 70%;\n\n    padding: 20px;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    position: relative;\n    background: rgba(241, 235, 245, 0.5);\n    border-radius: 40px;\n}\n\n.list-name {\n    text-align: center;\n    background: rgba(241, 235, 245, 0.6);\n    border-radius: 30px;\n    width: 50%;\n    margin: auto;\n    padding: 20px;\n}\n\n\n\n\n\n\n.new-project-form {\n    padding: 30px;\n    position: absolute;\n    display: none;\n    top: 70px;\n    justify-self: center;\n    grid-template-columns: 2fr 1fr;\n    grid-gap: 15px;\n    -webkit-animation: fadeIn 1s;\n    animation: fadeIn 1s;\n    background-color: aqua;\n\n}\n\n.edit-item-form {\n    display: grid;\n}\n\n.add-item-form {\n    display: none;\n\n}\n\n.add-item-form, .edit-item-form {\n    margin: auto;\n    padding: 30px;\n    position: absolute;\n    top: 70px;\n    justify-self: center;\n    grid-template-columns: repeat(5, 1fr);\n    grid-gap: 15px;\n    -webkit-animation: fadeIn 1s;\n    animation: fadeIn 1s;\n    background-color: aqua;\n}\n\n.form-section-wrapper {\n    display: grid;\n    grid-template-columns: 1fr;\n}\n/* Add animation (fade in the popup) */\n@-webkit-keyframes fadeIn {\n    from {opacity: 0;}\n    to {opacity: 1;}\n  }\n  \n  @keyframes fadeIn {\n    from {opacity: 0;}\n    to {opacity:1 ;}\n  }\n\n\n.item-form label {\n    margin-top: 10px;\n    margin-bottom: 5px;\n}\n/* .item-form  input[type=date] {\n} */\n.item-form select {\n    margin-bottom: 10px;\n}\n\n.projects {\n    align-self: start;\n\n}\n.projects h2 {\n    background: rgba(241, 235, 245, 0.7);\n    border-radius: 30px;\n    padding: 20px 40px;\n    font-size: 30px;\n    text-align: center;\n    margin-top: 0;\n    margin-bottom: 15px;\n}\n\n.project {\n    margin: 10px 0px;\n    background: rgba(241, 235, 245, 0.5);\n    border-radius: 30px;\n    padding: 20px 30px;\n    width: fit-content;\n\n\n}\n.project:hover {\n    background: rgba(241, 235, 245, 0.7);\n\n}\n.list {\n    display: grid;\n    grid-template-columns: 1fr;\n    padding: 0;\n}\n.list-item {\n    margin: 0px 10px 20px 10px;\n    /* margin-bottom: 20px; */\n    display: grid;\n    align-items: center;\n    grid-gap: 10px;\n    grid-template-columns: 1fr 4fr 1fr;\n    justify-content: space-between;\n    padding: 30px;\n    background: rgba(241, 235, 245, 0.7);\n    border-radius: 30px;\n    animation: fadeIn 1s;\n\n\n    \n}\n\n.check-container {\n    align-self: start;\n    display: block;\n    position: relative;\n    padding-left: 35px;\n    margin-bottom: 12px;\n    cursor: pointer;\n    font-size: 22px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    \n  }\n  \n  /* Hide the browser's default checkbox */\n  .check-container input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n  }\n  \n  /* Create a custom checkbox */\n  .checkmark {\n    position: absolute;\n    left: 10px;\n    top: 0;\n    height: 25px;\n    width: 25px;\n    background-color: #eee;\n    transform: scale(2.3);\n    border-radius: 15px;\n  }\n  \n  /* On mouse-over, add a grey background color */\n  .check-container:hover input ~ .checkmark {\n    background-color: #ccc;\n  }\n  \n  /* When the checkbox is checked, add a blue background */\n  .check-container input:checked ~ .checkmark {\n    background-color: #eee;\n  }\n\n.checkmark:after {\n    content: \"\";\n    position: absolute;\n    display: none;\n  }\n  \n  /* Show the checkmark when checked */\n  .check-container input:checked ~ .checkmark:after {\n    display: block;\n  }\n  \n  /* Style the checkmark/indicator */\n  .check-container .checkmark:after {\n    left: 9px;\n    top: 5px;\n    width: 5px;\n    height: 10px;\n    border: solid #02f70b;\n    border-width: 0 3px 3px 0;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n  }\n\n"],"sourceRoot":""}]);
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
        content.prepend(list);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05tQztBQUNkO0FBQ3NCOztBQUUzQztBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsMkRBQVc7QUFDNUM7QUFDQSxvQ0FBb0MsMkRBQVc7OztBQUcvQztBQUNBLElBQUksdURBQU87O0FBRVgsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9zcmMvYWRkSXRlbUZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vc3JjL2NvbGxhcHNlSXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9zcmMvY3JlYXRlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9zcmMvZGVsZXRlSXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9zcmMvZGlzcGxheUZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vc3JjL2Rpc3BsYXlJdGVtTWluLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL3NyYy9kaXNwbGF5TGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9zcmMvZGlzcGxheVByb2plY3RzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL3NyYy9lZGl0SXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9zcmMvZWRpdEl0ZW1Gb3JtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL3NyYy9leHBhbmRJdGVtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL3NyYy9ob21lRG9tLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL3NyYy9pdGVtRm9ybVBhcnRpYWwuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vc3JjL25ld1Byb2plY3RGb3JtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL3NyYy9zYXZlSXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9fbGlzdF9qcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuKiB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG4gICAgY29sb3I6ICM0MzQ1NDQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgXFxufVxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgY3lhbiwgbWFnZW50YSk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207ICAgXFxufVxcbm5hdiB7XFxuICAgIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCBjeWFuLCBtYWdlbnRhKTsgKi9cXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MSwgMjM1LCAyNDUsIDAuNCk7XFxuXFxufVxcblxcbm5hdiBkaXYge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyMzUsIDI0NSwgMC42KTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgd2lkdGg6IDE4JTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcblxcblxcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgd2lkdGg6IDcwJTtcXG5cXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyMzUsIDI0NSwgMC41KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXG59XFxuXFxuLmxpc3QtbmFtZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDEsIDIzNSwgMjQ1LCAwLjYpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcblxcblxcblxcblxcblxcbi5uZXctcHJvamVjdC1mb3JtIHtcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB0b3A6IDcwcHg7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxuICAgIGdyaWQtZ2FwOiAxNXB4O1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDFzO1xcbiAgICBhbmltYXRpb246IGZhZGVJbiAxcztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG5cXG59XFxuXFxuLmVkaXQtaXRlbS1mb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmFkZC1pdGVtLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcblxcbn1cXG5cXG4uYWRkLWl0ZW0tZm9ybSwgLmVkaXQtaXRlbS1mb3JtIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNzBweDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICAgIGdyaWQtZ2FwOiAxNXB4O1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDFzO1xcbiAgICBhbmltYXRpb246IGZhZGVJbiAxcztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG59XFxuXFxuLmZvcm0tc2VjdGlvbi13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxufVxcbi8qIEFkZCBhbmltYXRpb24gKGZhZGUgaW4gdGhlIHBvcHVwKSAqL1xcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICBmcm9tIHtvcGFjaXR5OiAwO31cXG4gICAgdG8ge29wYWNpdHk6IDE7fVxcbiAgfVxcbiAgXFxuICBAa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAgIGZyb20ge29wYWNpdHk6IDA7fVxcbiAgICB0byB7b3BhY2l0eToxIDt9XFxuICB9XFxuXFxuXFxuLml0ZW0tZm9ybSBsYWJlbCB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuLyogLml0ZW0tZm9ybSAgaW5wdXRbdHlwZT1kYXRlXSB7XFxufSAqL1xcbi5pdGVtLWZvcm0gc2VsZWN0IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuXFxufVxcbi5wcm9qZWN0cyBoMiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyMzUsIDI0NSwgMC43KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBtYXJnaW46IDEwcHggMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MSwgMjM1LCAyNDUsIDAuNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcblxcblxcbn1cXG4ucHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyMzUsIDI0NSwgMC43KTtcXG5cXG59XFxuLmxpc3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuLmxpc3QtaXRlbSB7XFxuICAgIG1hcmdpbjogMHB4IDEwcHggMjBweCAxMHB4O1xcbiAgICAvKiBtYXJnaW4tYm90dG9tOiAyMHB4OyAqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLWdhcDogMTBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyIDFmcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MSwgMjM1LCAyNDUsIDAuNyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGFuaW1hdGlvbjogZmFkZUluIDFzO1xcblxcblxcbiAgICBcXG59XFxuXFxuLmNoZWNrLWNvbnRhaW5lciB7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBcXG4gIH1cXG4gIFxcbiAgLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgY2hlY2tib3ggKi9cXG4gIC5jaGVjay1jb250YWluZXIgaW5wdXQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICB3aWR0aDogMDtcXG4gIH1cXG4gIFxcbiAgLyogQ3JlYXRlIGEgY3VzdG9tIGNoZWNrYm94ICovXFxuICAuY2hlY2ttYXJrIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAxMHB4O1xcbiAgICB0b3A6IDA7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMi4zKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIH1cXG4gIFxcbiAgLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yICovXFxuICAuY2hlY2stY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICB9XFxuICBcXG4gIC8qIFdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xcbiAgLmNoZWNrLWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuICB9XFxuXFxuLmNoZWNrbWFyazphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICBcXG4gIC8qIFNob3cgdGhlIGNoZWNrbWFyayB3aGVuIGNoZWNrZWQgKi9cXG4gIC5jaGVjay1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gIFxcbiAgLyogU3R5bGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKi9cXG4gIC5jaGVjay1jb250YWluZXIgLmNoZWNrbWFyazphZnRlciB7XFxuICAgIGxlZnQ6IDlweDtcXG4gICAgdG9wOiA1cHg7XFxuICAgIHdpZHRoOiA1cHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgYm9yZGVyOiBzb2xpZCAjMDJmNzBiO1xcbiAgICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgfVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsY0FBYztJQUNkLHdFQUF3RTtJQUN4RSxnQkFBZ0I7O0FBRXBCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7SUFDVCwwREFBMEQ7SUFDMUQsc0JBQXNCO0lBQ3RCLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0kseURBQXlEO0lBQ3pELGFBQWE7SUFDYixVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsb0NBQW9DOztBQUV4Qzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1Ysa0JBQWtCOzs7O0FBSXRCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdC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XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG4gICAgY29sb3I6ICM0MzQ1NDQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgXFxufVxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgY3lhbiwgbWFnZW50YSk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207ICAgXFxufVxcbm5hdiB7XFxuICAgIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCBjeWFuLCBtYWdlbnRhKTsgKi9cXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MSwgMjM1LCAyNDUsIDAuNCk7XFxuXFxufVxcblxcbm5hdiBkaXYge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyMzUsIDI0NSwgMC42KTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgd2lkdGg6IDE4JTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcblxcblxcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgd2lkdGg6IDcwJTtcXG5cXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyMzUsIDI0NSwgMC41KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXG59XFxuXFxuLmxpc3QtbmFtZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDEsIDIzNSwgMjQ1LCAwLjYpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcblxcblxcblxcblxcblxcbi5uZXctcHJvamVjdC1mb3JtIHtcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB0b3A6IDcwcHg7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxuICAgIGdyaWQtZ2FwOiAxNXB4O1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDFzO1xcbiAgICBhbmltYXRpb246IGZhZGVJbiAxcztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG5cXG59XFxuXFxuLmVkaXQtaXRlbS1mb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmFkZC1pdGVtLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcblxcbn1cXG5cXG4uYWRkLWl0ZW0tZm9ybSwgLmVkaXQtaXRlbS1mb3JtIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNzBweDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICAgIGdyaWQtZ2FwOiAxNXB4O1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDFzO1xcbiAgICBhbmltYXRpb246IGZhZGVJbiAxcztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG59XFxuXFxuLmZvcm0tc2VjdGlvbi13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxufVxcbi8qIEFkZCBhbmltYXRpb24gKGZhZGUgaW4gdGhlIHBvcHVwKSAqL1xcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICBmcm9tIHtvcGFjaXR5OiAwO31cXG4gICAgdG8ge29wYWNpdHk6IDE7fVxcbiAgfVxcbiAgXFxuICBAa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAgIGZyb20ge29wYWNpdHk6IDA7fVxcbiAgICB0byB7b3BhY2l0eToxIDt9XFxuICB9XFxuXFxuXFxuLml0ZW0tZm9ybSBsYWJlbCB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuLyogLml0ZW0tZm9ybSAgaW5wdXRbdHlwZT1kYXRlXSB7XFxufSAqL1xcbi5pdGVtLWZvcm0gc2VsZWN0IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuXFxufVxcbi5wcm9qZWN0cyBoMiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyMzUsIDI0NSwgMC43KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBtYXJnaW46IDEwcHggMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MSwgMjM1LCAyNDUsIDAuNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcblxcblxcbn1cXG4ucHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyMzUsIDI0NSwgMC43KTtcXG5cXG59XFxuLmxpc3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuLmxpc3QtaXRlbSB7XFxuICAgIG1hcmdpbjogMHB4IDEwcHggMjBweCAxMHB4O1xcbiAgICAvKiBtYXJnaW4tYm90dG9tOiAyMHB4OyAqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLWdhcDogMTBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyIDFmcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MSwgMjM1LCAyNDUsIDAuNyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGFuaW1hdGlvbjogZmFkZUluIDFzO1xcblxcblxcbiAgICBcXG59XFxuXFxuLmNoZWNrLWNvbnRhaW5lciB7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBcXG4gIH1cXG4gIFxcbiAgLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgY2hlY2tib3ggKi9cXG4gIC5jaGVjay1jb250YWluZXIgaW5wdXQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICB3aWR0aDogMDtcXG4gIH1cXG4gIFxcbiAgLyogQ3JlYXRlIGEgY3VzdG9tIGNoZWNrYm94ICovXFxuICAuY2hlY2ttYXJrIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAxMHB4O1xcbiAgICB0b3A6IDA7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMi4zKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIH1cXG4gIFxcbiAgLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yICovXFxuICAuY2hlY2stY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICB9XFxuICBcXG4gIC8qIFdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xcbiAgLmNoZWNrLWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuICB9XFxuXFxuLmNoZWNrbWFyazphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICBcXG4gIC8qIFNob3cgdGhlIGNoZWNrbWFyayB3aGVuIGNoZWNrZWQgKi9cXG4gIC5jaGVjay1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gIFxcbiAgLyogU3R5bGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKi9cXG4gIC5jaGVjay1jb250YWluZXIgLmNoZWNrbWFyazphZnRlciB7XFxuICAgIGxlZnQ6IDlweDtcXG4gICAgdG9wOiA1cHg7XFxuICAgIHdpZHRoOiA1cHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgYm9yZGVyOiBzb2xpZCAjMDJmNzBiO1xcbiAgICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgfVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHNhdmVJdGVtIGZyb20gXCIuL3NhdmVJdGVtLmpzXCI7XG5pbXBvcnQgaXRlbUZvcm1QYXJ0aWFsIGZyb20gXCIuL2l0ZW1Gb3JtUGFydGlhbC5qc1wiO1xuaW1wb3J0IGRpc3BsYXlGb3JtQ29udHJvbGxlciBmcm9tIFwiLi9kaXNwbGF5Rm9ybS5qc1wiO1xuaW1wb3J0IGRpc3BsYXlMaXN0IGZyb20gXCIuL2Rpc3BsYXlMaXN0LmpzXCI7XG5cbmNvbnN0IGFkZEl0ZW1Gb3JtID0gKGxpc3QpID0+IHtcbiAgICBjb25zdCBwYXJ0aWFsID0gaXRlbUZvcm1QYXJ0aWFsKCdhZGQnKTtcbiAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2stdGl0bGUnKTtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLWRlc2MnKTtcbiAgICB2YXIgZHVlRGF0ZSA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2stZGF0ZScpO1xuICAgIHZhciBwcmlvcml0eSA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2stcHJpb3JpdHknKTtcblxuICAgIGNvbnN0IGFkZEl0ZW1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRJdGVtQnRuLmNsYXNzTmFtZSA9IFwiYWRkLWl0ZW0tYnRuXCI7XG4gICAgYWRkSXRlbUJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIGEgdGFza1wiO1xuICAgIGFkZEl0ZW1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBuZXdUYXNrID0ge1xuICAgICAgICAgICAgdGl0bGU6IGlucHV0LnZhbHVlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgICAgICAgZHVlRGF0ZTogZHVlRGF0ZS52YWx1ZSxcbiAgICAgICAgICAgIHByaW9yaXR5OiBwcmlvcml0eS52YWx1ZVxuICAgICAgICB9XG4gICAgICAgIHNhdmVJdGVtKG5ld1Rhc2ssIGxpc3QuaWQpO1xuICAgICAgICBkaXNwbGF5TGlzdChsaXN0LmlkKTtcbiAgICAgICAgZGlzcGxheUZvcm1Db250cm9sbGVyKCk7XG4gICAgICAgIFxuICAgIH0pO1xuICAgIGNvbnN0IGl0ZW1Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1pdGVtLWZvcm0nKTtcbiAgICBpdGVtRm9ybS5hcHBlbmRDaGlsZChhZGRJdGVtQnRuKTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBhZGRJdGVtRm9ybTsiLCJpbXBvcnQgZXhwYW5kSXRlbSBmcm9tIFwiLi9leHBhbmRJdGVtXCI7XG5cbmNvbnN0IGNvbGxhcHNlSXRlbSA9ICh0YXNrLCBldmVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHRhc2spXG4gICAgdmFyIGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBgdGl0bGU6ICR7dGFzay50aXRsZX1gO1xuICAgIGVsZW1lbnQub25jbGljayA9IChldmVudCkgPT4gZXhwYW5kSXRlbSh0YXNrLCBldmVudCk7XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBjb2xsYXBzZUl0ZW07IiwiY29uc3QgY3JlYXRlUHJvamVjdCA9IChpbnB1dCkgPT4ge1xuICAgIGxldCB0YXNrcyA9IFtdXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oaW5wdXQsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVByb2plY3Q7IiwiaW1wb3J0IGRpc3BsYXlMaXN0IGZyb20gXCIuL2Rpc3BsYXlMaXN0LmpzXCI7XG5jb25zdCBkZWxldGVJdGVtID0gKGxpc3QsIGluZGV4KSA9PiB7XG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgIHZhciBpdGVtcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obGlzdCkpO1xuICAgIGl0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgaXRlbXMgPSBKU09OLnN0cmluZ2lmeShpdGVtcyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obGlzdCwgaXRlbXMpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7ZGlzcGxheUxpc3QobGlzdCl9LCAxMDAwKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVsZXRlSXRlbTsiLCJpbXBvcnQgZWRpdEl0ZW1Gb3JtIGZyb20gXCIuL2VkaXRJdGVtRm9ybVwiXG5cbmNvbnN0IGRpc3BsYXlGb3JtQ29udHJvbGxlciA9IChhY3Rpb24pID0+IHtcbiAgICBjb25zdCBpdGVtZm9ybSA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWl0ZW0tZm9ybScpO1xuICAgIGNvbnN0IHByb2pmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0LWZvcm0nKTtcbiAgICBjb25zdCBlZGl0Zm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWl0ZW0tZm9ybScpO1xuICAgIGlmIChhY3Rpb24gPT09ICdlZGl0Jykge1xuICAgICAgICBpZiAoZWRpdGZvcm0gIT09IG51bGwpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0LWl0ZW0tZm9ybScpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICBlbGVtZW50Lm91dGVySFRNTCA9IFwiXCI7IFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvamZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBpdGVtZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PT0gJ2FkZC1pdGVtJykge1xuICAgICAgICBpZiAoZWRpdGZvcm0gIT09IG51bGwpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0LWl0ZW0tZm9ybScpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICBlbGVtZW50Lm91dGVySFRNTCA9IFwiXCI7IFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaXRlbWZvcm0uc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xuICAgICAgICBwcm9qZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PT0gJ2FkZC1wcm9qZWN0Jykge1xuICAgICAgICBpZiAoZWRpdGZvcm0gIT09IG51bGwpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0LWl0ZW0tZm9ybScpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICBlbGVtZW50Lm91dGVySFRNTCA9IFwiXCI7IFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvamZvcm0uc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xuICAgICAgICBpdGVtZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGVkaXRmb3JtICE9PSBudWxsKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdC1pdGVtLWZvcm0nKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgZWxlbWVudC5vdXRlckhUTUwgPSBcIlwiOyBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHByb2pmb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgaXRlbWZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUZvcm1Db250cm9sbGVyOyIsImltcG9ydCBkZWxldGVJdGVtIGZyb20gXCIuL2RlbGV0ZUl0ZW0uanNcIjtcbmltcG9ydCBkaXNwbGF5Rm9ybUNvbnRyb2xsZXIgZnJvbSBcIi4vZGlzcGxheUZvcm0uanNcIjtcbmltcG9ydCBlZGl0SXRlbUZvcm0gZnJvbSBcIi4vZWRpdEl0ZW1Gb3JtLmpzXCI7XG5cbmNvbnN0IGRpc3BsYXlJdGVtTWluID0gKGxpc3ROYW1lLCBpbmRleCkgPT4ge1xuICAgIHZhciBpdGVtcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obGlzdE5hbWUpKTtcbiAgICBjb25zdCB0YXNrID0gaXRlbXNbaW5kZXhdO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gYCR7dGFzay50aXRsZX1gO1xuICAgIHRleHQuY2xhc3NOYW1lID0gXCJ0YXNrLWJvZHlcIjtcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgICBjb25zdCBjaGVja2xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjaGVja2xhYmVsLmNsYXNzTmFtZSA9IFwiY2hlY2stY29udGFpbmVyXCI7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkZWxldGVCdG4udHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBjaGVja2xhYmVsLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgLy8gZGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCJERUxFVEVEIVwiO1xuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc3Bhbi5jbGFzc05hbWUgPSBcImNoZWNrbWFya1wiO1xuICAgIGNoZWNrbGFiZWwuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgZGVsZXRlQnRuLm9uY2xpY2sgPSAoKSA9PiBkZWxldGVJdGVtKGxpc3ROYW1lLCBpbmRleCk7XG4gICAgZGl2LnByZXBlbmQoY2hlY2tsYWJlbCk7XG5cbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZWRpdEJ0bi50ZXh0Q29udGVudCA9IFwiRWRpdCB0YXNrXCI7XG4gICAgZWRpdEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBkaXNwbGF5Rm9ybUNvbnRyb2xsZXIoJ2VkaXQnKTtcbiAgICAgICAgZWRpdEl0ZW1Gb3JtKGxpc3ROYW1lLCBpbmRleCk7XG4gICAgfTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgICAvLyBkaXYub25jbGljayA9IChldmVudCkgPT4gZXhwYW5kSXRlbSh0YXNrLCBldmVudCk7XG5cbiAgICByZXR1cm4gZGl2XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5SXRlbU1pbjsiLCJpbXBvcnQgZXhwYW5kSXRlbSBmcm9tIFwiLi9leHBhbmRJdGVtLmpzXCI7XG5pbXBvcnQgZGVsZXRlSXRlbSBmcm9tIFwiLi9kZWxldGVJdGVtLmpzXCI7XG5pbXBvcnQgZWRpdEl0ZW1Gb3JtIGZyb20gXCIuL2VkaXRJdGVtRm9ybS5qc1wiO1xuaW1wb3J0IGRpc3BsYXlJdGVtTWluIGZyb20gXCIuL2Rpc3BsYXlJdGVtTWluLmpzXCI7XG5cbmNvbnN0IGRpc3BsYXlMaXN0ID0gKGxpc3ROYW1lKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QnKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1uYW1lJyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IGAke2xpc3ROYW1lfSBUbyBEbydzYDtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwnKTtcbiAgICBsaXN0LmlkID0gbGlzdE5hbWU7XG4gICAgY29uc3QgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxpc3ROYW1lKSk7XG4gICAgdGFza3MuZm9yRWFjaCggKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkaXNwbGF5SXRlbU1pbihsaXN0TmFtZSwgaW5kZXgpO1xuICAgICAgICBpdGVtLmNsYXNzTmFtZSA9IFwibGlzdC1pdGVtXCI7XG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgfSlcblxufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5TGlzdDsiLCJpbXBvcnQgZGlzcGxheUxpc3QgZnJvbSBcIi4vZGlzcGxheUxpc3RcIjtcblxuY29uc3QgZGlzcGxheVByb2plY3RzID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIHZhciBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcbiAgICBpZiAobGlzdCA9PT0gbnVsbCkge1xuICAgICAgICBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxpc3QuY2xhc3NOYW1lID0gXCJwcm9qZWN0c1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG5cblxuIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xuICAgICAgICAgICAgbGkudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgICAgICAgICAgbGkuY2xhc3NOYW1lID0gXCJwcm9qZWN0XCI7XG4gICAgICAgICAgICBsaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5TGlzdChuYW1lKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgfVxuICAgICAgICBsaXN0LnByZXBlbmQoaGVhZGluZyk7XG4gICAgICAgIGNvbnRlbnQucHJlcGVuZChsaXN0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheVByb2plY3RzOyIsImNvbnN0IGVkaXRJdGVtID0gKGxpc3QsIGVkaXRlZEluZm8sIGluZGV4KSA9PiB7XG4gICAgdmFyIGl0ZW1zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsaXN0KSk7XG4gICAgaXRlbXNbaW5kZXhdID0gZWRpdGVkSW5mbztcbiAgICBpdGVtcyA9IEpTT04uc3RyaW5naWZ5KGl0ZW1zKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsaXN0LCBpdGVtcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGVkaXRJdGVtOyIsImltcG9ydCBpdGVtRm9ybVBhcnRpYWwgZnJvbSBcIi4vaXRlbUZvcm1QYXJ0aWFsLmpzXCI7XG5pbXBvcnQgZWRpdEl0ZW0gZnJvbSBcIi4vZWRpdEl0ZW0uanNcIjtcbmltcG9ydCBkaXNwbGF5TGlzdCBmcm9tIFwiLi9kaXNwbGF5TGlzdC5qc1wiO1xuaW1wb3J0IGRpc3BsYXlGb3JtQ29udHJvbGxlciBmcm9tIFwiLi9kaXNwbGF5Rm9ybS5qc1wiO1xuXG5jb25zdCBlZGl0SXRlbUZvcm0gPSAobGlzdCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXJ0aWFsID0gaXRlbUZvcm1QYXJ0aWFsKCdlZGl0Jyk7XG4gICAgLy9yZXRyZWl2ZSB0YXNrIGZyb20gc3RvcmFnZVxuICAgIHZhciBpdGVtcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obGlzdCkpO1xuICAgIGNvbnN0IHRhc2sgPSBpdGVtc1tpbmRleF07XG4gICAgLy8gZmlsbCBlZGl0IGZvcm0gd2l0aCB0YXNrJ3MgZGF0YVxuICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stdGl0bGUnKTtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay1kZXNjJyk7XG4gICAgdmFyIGR1ZURhdGUgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay1kYXRlJyk7XG4gICAgdmFyIHByaW9yaXR5ID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stcHJpb3JpdHknKTtcbiAgICBpbnB1dC52YWx1ZSA9IHRhc2sudGl0bGU7XG4gICAgZGVzY3JpcHRpb24udmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgIGR1ZURhdGUudmFsdWUgPSB0YXNrLmR1ZURhdGU7XG4gICAgcHJpb3JpdHkudmFsdWUgPSB0YXNrLnByaW9yaXR5O1xuICAgIFxuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlZGl0QnRuLmNsYXNzTmFtZSA9XCJlZGl0LWJ0blwiO1xuICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSBcIlN1Ym1pdCBlZGl0c1wiO1xuICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0YXNrRWRpdHMgPSB7XG4gICAgICAgICAgICB0aXRsZTogaW5wdXQudmFsdWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24udmFsdWUsXG4gICAgICAgICAgICBkdWVEYXRlOiBkdWVEYXRlLnZhbHVlLFxuICAgICAgICAgICAgcHJpb3JpdHk6IHByaW9yaXR5LnZhbHVlXG4gICAgICAgIH1cbiAgICAgICAgZWRpdEl0ZW0obGlzdCwgdGFza0VkaXRzLCBpbmRleCk7XG4gICAgICAgIGRpc3BsYXlMaXN0KGxpc3QpO1xuICAgICAgICBkaXNwbGF5Rm9ybUNvbnRyb2xsZXIoKTtcbiAgICAgICAgXG4gICAgfSk7XG4gICAgLy8gZm9ybS5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgICAvLyBkaXYuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgcGFydGlhbC5hcHBlbmQoZWRpdEJ0bik7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZWRpdEl0ZW1Gb3JtOyIsImltcG9ydCBjb2xsYXBzZUl0ZW0gZnJvbSBcIi4vY29sbGFwc2VJdGVtXCI7XG5cbmNvbnN0IGV4cGFuZEl0ZW0gPSAodGFzaywgZXZlbnQpID0+IHtcbiAgICB2YXIgZWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGB0aXRsZTogJHt0YXNrLnRpdGxlfSxkZXNjcmlwdGlvbjogJHt0YXNrLmRlc2NyaXB0aW9ufSwgZHVlOiAke3Rhc2suZHVlRGF0ZX0sIHByaW9yaXR5OiAke3Rhc2sucHJpb3JpdHl9YDtcbiAgICBlbGVtZW50Lm9uY2xpY2sgPSAoZXZlbnQpID0+IGNvbGxhcHNlSXRlbSh0YXNrLCBldmVudCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGV4cGFuZEl0ZW07IiwiaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSBcIi4vY3JlYXRlUHJvamVjdC5qc1wiO1xuaW1wb3J0IGRpc3BsYXlMaXN0IGZyb20gXCIuL2Rpc3BsYXlMaXN0LmpzXCI7XG5pbXBvcnQgc2F2ZUl0ZW0gZnJvbSBcIi4vc2F2ZUl0ZW0uanNcIjtcbmltcG9ydCBkaXNwbGF5UHJvamVjdHMgZnJvbSBcIi4vZGlzcGxheVByb2plY3RzLmpzXCI7XG5pbXBvcnQgYWRkSXRlbUZvcm0gZnJvbSBcIi4vYWRkSXRlbUZvcm0uanNcIjtcbmltcG9ydCBuZXdQcm9qZWN0Rm9ybSBmcm9tIFwiLi9uZXdQcm9qZWN0Rm9ybS5qc1wiO1xuXG5jb25zdCBIb21lRE9NID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc05hbWUgPVwibGlzdC1jb250YWluZXJcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdik7XG5cbiAgICAvL3JlbmRlciBoZWFkaW5nXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGluZy5jbGFzc05hbWUgPSBcImxpc3QtbmFtZVwiO1xuICAgIGRpdi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICAgIC8vcmVuZGVyIGxpc3RcbiAgICB2YXIgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgbGlzdC5jbGFzc05hbWUgPSAnbGlzdCc7XG4gICAgbGlzdC5pZCA9IFwiTWFpblwiO1xuICAgIGRpdi5hcHBlbmRDaGlsZChsaXN0KTtcblxuICAgIGFkZEl0ZW1Gb3JtKGxpc3QpO1xuICAgIG5ld1Byb2plY3RGb3JtKCk7XG4gICAgXG4gICAgZGlzcGxheUxpc3QobGlzdC5pZCk7XG4gICAgZGlzcGxheVByb2plY3RzKCk7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZURPTTsiLCJjb25zdCBpdGVtRm9ybVBhcnRpYWwgPSAoYWN0aW9uKSA9PiB7XG5cbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm0uY2xhc3NOYW1lID0gYCR7YWN0aW9ufS1pdGVtLWZvcm1gO1xuXG4gICAgY29uc3QgaW5wdXR3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5wdXR3cmFwcGVyLmNsYXNzTmFtZSA9IFwiZm9ybS1zZWN0aW9uLXdyYXBwZXJcIjtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIGlucHV0LnBsYWNlaG9sZGVyID0gXCJUYXNrIG5hbWVcIjtcbiAgICBpbnB1dC5pZCA9IGAke2FjdGlvbn0tdGFzay10aXRsZWA7XG4gICAgdmFyIGl0ZW1MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgaXRlbUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBpbnB1dC5pZCk7XG4gICAgaXRlbUxhYmVsLmlubmVySFRNTCA9IFwiVGFzayBuYW1lXCI7XG4gICAgaW5wdXR3cmFwcGVyLmFwcGVuZENoaWxkKGl0ZW1MYWJlbCk7XG4gICAgaW5wdXR3cmFwcGVyLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0d3JhcHBlcik7XG4gICAgXG4gICAgY29uc3QgZGVzY3dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjd3JhcHBlci5jbGFzc05hbWUgPSBcImZvcm0tc2VjdGlvbi13cmFwcGVyXCI7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRlc2NyaXB0aW9uLnR5cGUgPSBcInRleHRcIjtcbiAgICBkZXNjcmlwdGlvbi5wbGFjZWhvbGRlciA9IFwiRGVzY3JpcHRpb25cIjtcbiAgICBkZXNjcmlwdGlvbi5pZCA9YCR7YWN0aW9ufS10YXNrLWRlc2NgO1xuICAgIHZhciBkZXNjTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRlc2NMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgZGVzY3JpcHRpb24uaWQpO1xuICAgIGRlc2NMYWJlbC5pbm5lckhUTUwgPSBcIkRlc2NyaXB0aW9uXCI7XG4gICAgZGVzY3dyYXBwZXIuYXBwZW5kQ2hpbGQoZGVzY0xhYmVsKTtcbiAgICBkZXNjd3JhcHBlci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjd3JhcHBlcik7XG4gICAgXG4gICAgY29uc3QgZGF0ZXdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkYXRld3JhcHBlci5jbGFzc05hbWUgPSBcImZvcm0tc2VjdGlvbi13cmFwcGVyXCI7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZHVlRGF0ZS50eXBlID0gXCJkYXRlXCI7XG4gICAgZHVlRGF0ZS5pZCA9IGAke2FjdGlvbn0tdGFzay1kYXRlYDtcbiAgICB2YXIgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGR1ZURhdGUuaWQpO1xuICAgIGRhdGVMYWJlbC5pbm5lckhUTUwgPSBcIiBEdWUgZGF0ZVwiO1xuICAgIGRhdGV3cmFwcGVyLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgZGF0ZXdyYXBwZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkYXRld3JhcHBlcik7XG5cbiAgICBjb25zdCBwcmlvcndyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcmlvcndyYXBwZXIuY2xhc3NOYW1lID0gXCJmb3JtLXNlY3Rpb24td3JhcHBlclwiO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgcHJpb3JpdHkuY2xhc3NOYW1lID0gXCJwcmlvcml0eS1zZWxlY3RcIjtcbiAgICBwcmlvcml0eS5pZCA9IGAke2FjdGlvbn0tdGFzay1wcmlvcml0eWA7XG4gICAgdmFyIG9wdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbjEpO1xuICAgIHZhciBvcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb24yKTtcbiAgICB2YXIgb3B0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uMyk7XG4gICAgb3B0aW9uMS52YWx1ZSA9IFwiSGlnaFwiO1xuICAgIG9wdGlvbjEudGV4dCA9IFwiSGlnaFwiO1xuICAgIG9wdGlvbjIudmFsdWUgPSBcIk1pZFwiO1xuICAgIG9wdGlvbjIudGV4dCA9IFwiTWlkXCI7XG4gICAgb3B0aW9uMy52YWx1ZSA9IFwiTG93XCI7XG4gICAgb3B0aW9uMy50ZXh0ID0gXCJMb3dcIjtcbiAgICB2YXIgcHJpb3JMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJpb3JMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgcHJpb3JpdHkuaWQpO1xuICAgIHByaW9yTGFiZWwuaW5uZXJIVE1MID0gXCJQcmlvcml0eVwiO1xuICAgIHByaW9yd3JhcHBlci5hcHBlbmRDaGlsZChwcmlvckxhYmVsKTtcbiAgICBwcmlvcndyYXBwZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3J3cmFwcGVyKTtcbiAgICBcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgcmV0dXJuIGZvcm1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBpdGVtRm9ybVBhcnRpYWw7IiwiaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSBcIi4vY3JlYXRlUHJvamVjdC5qc1wiO1xuaW1wb3J0IGRpc3BsYXlGb3JtQ29udHJvbGxlciBmcm9tIFwiLi9kaXNwbGF5Rm9ybS5qc1wiO1xuaW1wb3J0IGRpc3BsYXlQcm9qZWN0cyBmcm9tIFwiLi9kaXNwbGF5UHJvamVjdHMuanNcIjtcblxuY29uc3QgbmV3UHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1Byb2plY3RGb3JtLmNsYXNzTmFtZSA9IFwibmV3LXByb2plY3QtZm9ybVwiO1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBwcm9qZWN0TmFtZS50eXBlID0gXCJ0ZXh0XCI7XG4gICAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpXG4gIFxuICAgIGNvbnN0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuZXdQcm9qZWN0QnRuLmNsYXNzTmFtZSA9IFwibmV3LXByb2plY3QtYnRuXCI7XG4gICAgbmV3UHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIG5ldyBwcm9qZWN0XCI7XG4gICAgbmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZS52YWx1ZSk7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0cygpO1xuICAgICAgICBkaXNwbGF5Rm9ybUNvbnRyb2xsZXIoKTtcbiAgICB9KVxuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdG4pXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Rm9ybSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ld1Byb2plY3RGb3JtOyIsImNvbnN0IHNhdmVJdGVtID0gKG5ld1Rhc2ssIGxpc3ROYW1lKSA9PiB7XG4gICAgbGV0IGxpc3Q7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxpc3ROYW1lKSA9PT0gbnVsbCkge1xuICAgICAgICBsaXN0ID0gW107XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obGlzdE5hbWUpKTtcbiAgICB9XG4gICAgbGlzdC5wdXNoKG5ld1Rhc2spO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGxpc3ROYW1lLCBKU09OLnN0cmluZ2lmeShsaXN0KSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNhdmVJdGVtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgSG9tZURPTSBmcm9tICcuL2hvbWVEb20uanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgZGlzcGxheUZvcm0gZnJvbSBcIi4vZGlzcGxheUZvcm0uanNcIjtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgLy9uYXZiYXJcbiAgICBjb25zdCBhZGRJdGVtUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWl0ZW0tcG9wdXAnKTtcbiAgICBhZGRJdGVtUG9wdXAub25jbGljayA9ICgpID0+IGRpc3BsYXlGb3JtKFwiYWRkLWl0ZW1cIik7XG4gICAgY29uc3QgYWRkUHJvamVjdFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LXBvcHVwJyk7XG4gICAgYWRkUHJvamVjdFBvcHVwLm9uY2xpY2sgPSAoKSA9PiBkaXNwbGF5Rm9ybSgnYWRkLXByb2plY3QnKTtcblxuXG4gICAgLy9sb2FkIGhvbWVwYWdlXG4gICAgSG9tZURPTSgpO1xuXG59KVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9