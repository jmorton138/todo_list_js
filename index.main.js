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
___CSS_LOADER_EXPORT___.push([module.id, "html, body {\n    min-height: 100%;\n    overflow: auto;\n}\n* {\n    border: 1px solid red;\n    color: #434544;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    font-weight: 100;\n    \n}\nbody {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    background: linear-gradient(to bottom left, cyan, magenta);\n    background-size: cover; \n    background-position: bottom;\n    background-repeat: no-repeat;   \n}\nnav {\n    /* background: linear-gradient(to left, cyan, magenta); */\n    padding: 20px;\n    width: 200px;\n    margin: auto;\n    margin-top: 50px;\n    border-radius: 50px;\n    background: rgba(241, 235, 245, 0.4);\n    text-align: center;\n\n}\n\nnav div {\n    display: inline-block;\n    background: rgba(241, 235, 245, 0.6);\n    padding: 20px;\n    border-radius: 50px;\n    width: 45px;\n    text-align: center;\n\n\n\n}\n\nnav div:hover {\n    background: rgba(241, 235, 245, 0.8);\n\n}\n\n#content {\n    margin: auto;\n    margin-top: 30px;\n    width: 70%;\n\n    padding: 20px;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    position: relative;\n    background: rgba(241, 235, 245, 0.5);\n    border-radius: 40px;\n}\n\nfooter {\n    height: 100px;\n    margin-top: 300px;\n}\n.list-name {\n    text-align: center;\n    background: rgba(241, 235, 245, 0.6);\n    border-radius: 30px;\n    width: 50%;\n    margin: auto;\n    padding: 20px;\n}\n\n.new-project-form {\n    overflow: auto;\n    width: 70%;\n    padding: 100px;\n    position: absolute;\n    display: none;\n    top: 70px;\n    justify-self: center;\n    border-radius: 40px;\n    grid-template-rows: 1fr 1fr;\n    align-content: space-around;\n\n    align-content: center;\n    grid-gap: 15px;\n    -webkit-animation: fadeIn 1s;\n    animation: fadeIn 1s;\n    background-color: rgba(241, 235, 245);\n    box-shadow: -10px 10px 20px grey;\n\n\n}\n\ninput, select {\n    border-radius: 20px;\n    height: 50px;\n    padding-left: 20px;\n    font-size: 30px;\n    border: 1px solid grey;\n}\ninput[type=date], select {\n    width: 60%;\n}\n\n.edit-item-form {\n    display: grid;\n}\n\n.add-item-form {\n    display: none;\n\n}\n\n.add-item-form, .edit-item-form {\n    margin: auto;\n    padding: 150px;\n    position: absolute;\n    top: 70px;\n    justify-self: center;\n    border-radius: 40px;\n    grid-template-rows: repeat(5, 1fr);\n    grid-gap: 15px;\n    -webkit-animation: fadeIn 1s;\n    animation: fadeIn 1s;\n    background-color: rgba(241, 235, 245);\n    box-shadow: -10px 10px 20px grey;\n}\n\n.add-item-btn, .edit-form-btn, .new-project-btn {\n    padding: 10px;\n    border-radius: 30px;\n    background: rgba(0, 255, 255, .5);\n    font-size: large;\n    border: none;\n\n}\n\n.new-project-btn {\n    padding: 20px;\n}\n.add-item-btn:hover, .edit-form-btn:hover, .new-project-btn:hover {\n    background: rgba(0, 255, 255, .7);\n}\n\n.close-popup {\n    border: none;\n    align-self: start;\n    justify-self: end;\n    position: absolute;\n    border-radius: 50%;\n    right: 20px;\n    top: 20px;\n}\n.close-popup:hover {\n    color:grey;\n}\n\n.item-expand {\n    margin: auto;\n    padding: 100px 150px;\n    width: 100%;\n    position: absolute;\n    top: 70px;\n    justify-self: center;\n    display: grid;\n    grid-template-columns: 3fr 5fr 2fr 1fr;\n    justify-content: space-between;\n    grid-gap: 23px;\n    -webkit-animation: fadeIn 1s;\n    animation: fadeIn 1s;\n    background-color: rgba(241, 235, 245);\n    box-shadow: -10px 10px 20px grey;\n    border-radius: 40px;\n    font-size: large;\n\n\n}\n\n.item-section-wrapper div {\n    margin-top: 10px;\n}\n.item-section-wrapper label {\n    font-weight: bold;\n}\n.form-section-wrapper {\n    display: grid;\n    grid-template-columns: 1fr;\n}\n/* Add animation (fade in the popup) */\n@-webkit-keyframes fadeIn {\n    from {opacity: 0;}\n    to {opacity: 1;}\n  }\n  \n  @keyframes fadeIn {\n    from {opacity: 0;}\n    to {opacity:1 ;}\n  }\n\n\n.item-form label {\n    margin-top: 10px;\n    margin-bottom: 5px;\n}\n/* .item-form  input[type=date] {\n} */\n.item-form select {\n    margin-bottom: 10px;\n}\n\n.projects {\n    align-self: start;\n\n}\n.projects h2 {\n    background: rgba(241, 235, 245, 0.7);\n    border-radius: 30px;\n    padding: 20px 40px;\n    font-size: 30px;\n    text-align: center;\n    margin-top: 0;\n    margin-bottom: 15px;\n    width: 50%;\n}\n\n.project {\n    margin: 10px 0px;\n    background: rgba(241, 235, 245, 0.5);\n    border-radius: 30px;\n    padding: 20px 30px;\n    width: fit-content;\n\n\n}\n.project:hover {\n    background: rgba(241, 235, 245, 0.7);\n\n}\n.list {\n    display: grid;\n    grid-template-columns: 1fr;\n    padding: 0;\n}\n.list-item {\n    margin: 0px 10px 20px 10px;\n    /* margin-bottom: 20px; */\n    display: grid;\n    align-items: center;\n    grid-gap: 20px;\n    grid-template-columns: 1fr 1fr 5fr 1fr 1fr;\n    justify-content: space-between;\n    padding: 30px;\n    background: rgba(241, 235, 245, 0.7);\n    border-radius: 30px;\n    animation: fadeIn 1s;\n    overflow: auto;\n}\n\n.list-item:hover {\n    background: rgba(241, 235, 245, 0.9);\n\n}\n.list-container {\n    overflow: auto;\n}\n\n@media (max-width: 1250px) {\n\n    .task-body {\n        text-align: center;\n        padding-left: 10px;\n    }\n\n\n    #content {\n        width: 90%;\n\n\n\n    }\n    .add-project-popup {\n        width: 45px;\n\n    }\n    .add-item-popup {\n        width: 45px;\n\n\n    }\n    .add-item-form {\n        padding-top: 50px;\n        padding-left: 20px;\n        padding-right: 20px;\n        padding-bottom: 20px;\n\n    }\n\n}\n@media (max-width: 750px) {\n    .new-project-form {\n        padding-left: 20px;\n        padding-right: 20px;\n        padding-bottom: 20px;\n    }\n    .list-name {\n        width: 80%;\n    }\n\n\n}\n\n@media (max-width: 700px)  {\n    #content {\n        grid-template-columns: 1fr;\n        padding: 5px;\n        margin: 10px;\n\n    }\n    .list-item {\n        margin-left: 0;\n        margin-right: 0;\n        grid-template-columns: 1fr 3fr;\n        align-items: start;\n    }\n    .priority-circle, .edit-btn, .expand-btn   {\n        display: none !important;\n    }\n    .task-body {\n        padding-top: 10px;\n        padding-bottom: 10px;\n    }\n    .projects {\n        margin-top: 50px;\n        order: 1;\n        text-align: center;\n    }\n    .projects h2 {\n        margin: auto;\n    }\n    .project {\n        display: inline-block;\n        margin-left: 3px;\n        margin-right: 3px;\n        margin-bottom: 0px;\n    }\n    .checkmark {\n        transform: scale(1.7) !important;\n        top: 10px !important;\n    }\n\n    .new-project-form input {\n        width: 90%;\n\n    }\n    .add-item-form input {\n        width: 90%;\n    }\n    \n}\n\n.edit-btn {\n    align-self: start;\n    justify-self: end;\n    border-radius: 10px;\n    padding: 10px;\n    border: none;\n    background:none;\n}\n.edit-btn:hover, .expand-btn:hover {\n    color:darkmagenta;\n}\n.expand-btn {\n    background: none;\n    border: none;\n}\n.check-container {\n    align-self: start;\n    display: block;\n    position: relative;\n    padding-left: 35px;\n    margin-bottom: 12px;\n    cursor: pointer;\n    font-size: 22px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    \n  }\n  \n  /* Hide the browser's default checkbox */\n  .check-container input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n  }\n  \n  /* Create a custom checkbox */\n  .checkmark {\n    position: absolute;\n    left: 10px;\n    top: 20px;\n    height: 25px;\n    width: 25px;\n    background-color: #eee;\n    transform: scale(2.3);\n    border-radius: 15px;\n    border: 3px solid darkcyan;\n\n  }\n  \n  /* On mouse-over, add a grey background color */\n  .check-container:hover input ~ .checkmark {\n    background-color: #ccc;\n  }\n  \n  /* When the checkbox is checked, add a blue background */\n  .check-container input:checked ~ .checkmark {\n    background-color: #eee;\n  }\n\n.checkmark:after {\n    content: \"\";\n    position: absolute;\n    display: none;\n  }\n  \n  /* Show the checkmark when checked */\n  .check-container input:checked ~ .checkmark:after {\n    display: block;\n  }\n  \n  /* Style the checkmark/indicator */\n  .check-container .checkmark:after {\n    left: 9px;\n    top: 5px;\n    width: 5px;\n    height: 10px;\n    border: solid #02f70b;\n    border-width: 0 3px 3px 0;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n  }\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html, body {\n    min-height: 100%;\n    overflow: auto;\n}\n* {\n    border: 1px solid red;\n    color: #434544;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    font-weight: 100;\n    \n}\nbody {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    background: linear-gradient(to bottom left, cyan, magenta);\n    background-size: cover; \n    background-position: bottom;\n    background-repeat: no-repeat;   \n}\nnav {\n    /* background: linear-gradient(to left, cyan, magenta); */\n    padding: 20px;\n    width: 200px;\n    margin: auto;\n    margin-top: 50px;\n    border-radius: 50px;\n    background: rgba(241, 235, 245, 0.4);\n    text-align: center;\n\n}\n\nnav div {\n    display: inline-block;\n    background: rgba(241, 235, 245, 0.6);\n    padding: 20px;\n    border-radius: 50px;\n    width: 45px;\n    text-align: center;\n\n\n\n}\n\nnav div:hover {\n    background: rgba(241, 235, 245, 0.8);\n\n}\n\n#content {\n    margin: auto;\n    margin-top: 30px;\n    width: 70%;\n\n    padding: 20px;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    position: relative;\n    background: rgba(241, 235, 245, 0.5);\n    border-radius: 40px;\n}\n\nfooter {\n    height: 100px;\n    margin-top: 300px;\n}\n.list-name {\n    text-align: center;\n    background: rgba(241, 235, 245, 0.6);\n    border-radius: 30px;\n    width: 50%;\n    margin: auto;\n    padding: 20px;\n}\n\n.new-project-form {\n    overflow: auto;\n    width: 70%;\n    padding: 100px;\n    position: absolute;\n    display: none;\n    top: 70px;\n    justify-self: center;\n    border-radius: 40px;\n    grid-template-rows: 1fr 1fr;\n    align-content: space-around;\n\n    align-content: center;\n    grid-gap: 15px;\n    -webkit-animation: fadeIn 1s;\n    animation: fadeIn 1s;\n    background-color: rgba(241, 235, 245);\n    box-shadow: -10px 10px 20px grey;\n\n\n}\n\ninput, select {\n    border-radius: 20px;\n    height: 50px;\n    padding-left: 20px;\n    font-size: 30px;\n    border: 1px solid grey;\n}\ninput[type=date], select {\n    width: 60%;\n}\n\n.edit-item-form {\n    display: grid;\n}\n\n.add-item-form {\n    display: none;\n\n}\n\n.add-item-form, .edit-item-form {\n    margin: auto;\n    padding: 150px;\n    position: absolute;\n    top: 70px;\n    justify-self: center;\n    border-radius: 40px;\n    grid-template-rows: repeat(5, 1fr);\n    grid-gap: 15px;\n    -webkit-animation: fadeIn 1s;\n    animation: fadeIn 1s;\n    background-color: rgba(241, 235, 245);\n    box-shadow: -10px 10px 20px grey;\n}\n\n.add-item-btn, .edit-form-btn, .new-project-btn {\n    padding: 10px;\n    border-radius: 30px;\n    background: rgba(0, 255, 255, .5);\n    font-size: large;\n    border: none;\n\n}\n\n.new-project-btn {\n    padding: 20px;\n}\n.add-item-btn:hover, .edit-form-btn:hover, .new-project-btn:hover {\n    background: rgba(0, 255, 255, .7);\n}\n\n.close-popup {\n    border: none;\n    align-self: start;\n    justify-self: end;\n    position: absolute;\n    border-radius: 50%;\n    right: 20px;\n    top: 20px;\n}\n.close-popup:hover {\n    color:grey;\n}\n\n.item-expand {\n    margin: auto;\n    padding: 100px 150px;\n    width: 100%;\n    position: absolute;\n    top: 70px;\n    justify-self: center;\n    display: grid;\n    grid-template-columns: 3fr 5fr 2fr 1fr;\n    justify-content: space-between;\n    grid-gap: 23px;\n    -webkit-animation: fadeIn 1s;\n    animation: fadeIn 1s;\n    background-color: rgba(241, 235, 245);\n    box-shadow: -10px 10px 20px grey;\n    border-radius: 40px;\n    font-size: large;\n\n\n}\n\n.item-section-wrapper div {\n    margin-top: 10px;\n}\n.item-section-wrapper label {\n    font-weight: bold;\n}\n.form-section-wrapper {\n    display: grid;\n    grid-template-columns: 1fr;\n}\n/* Add animation (fade in the popup) */\n@-webkit-keyframes fadeIn {\n    from {opacity: 0;}\n    to {opacity: 1;}\n  }\n  \n  @keyframes fadeIn {\n    from {opacity: 0;}\n    to {opacity:1 ;}\n  }\n\n\n.item-form label {\n    margin-top: 10px;\n    margin-bottom: 5px;\n}\n/* .item-form  input[type=date] {\n} */\n.item-form select {\n    margin-bottom: 10px;\n}\n\n.projects {\n    align-self: start;\n\n}\n.projects h2 {\n    background: rgba(241, 235, 245, 0.7);\n    border-radius: 30px;\n    padding: 20px 40px;\n    font-size: 30px;\n    text-align: center;\n    margin-top: 0;\n    margin-bottom: 15px;\n    width: 50%;\n}\n\n.project {\n    margin: 10px 0px;\n    background: rgba(241, 235, 245, 0.5);\n    border-radius: 30px;\n    padding: 20px 30px;\n    width: fit-content;\n\n\n}\n.project:hover {\n    background: rgba(241, 235, 245, 0.7);\n\n}\n.list {\n    display: grid;\n    grid-template-columns: 1fr;\n    padding: 0;\n}\n.list-item {\n    margin: 0px 10px 20px 10px;\n    /* margin-bottom: 20px; */\n    display: grid;\n    align-items: center;\n    grid-gap: 20px;\n    grid-template-columns: 1fr 1fr 5fr 1fr 1fr;\n    justify-content: space-between;\n    padding: 30px;\n    background: rgba(241, 235, 245, 0.7);\n    border-radius: 30px;\n    animation: fadeIn 1s;\n    overflow: auto;\n}\n\n.list-item:hover {\n    background: rgba(241, 235, 245, 0.9);\n\n}\n.list-container {\n    overflow: auto;\n}\n\n@media (max-width: 1250px) {\n\n    .task-body {\n        text-align: center;\n        padding-left: 10px;\n    }\n\n\n    #content {\n        width: 90%;\n\n\n\n    }\n    .add-project-popup {\n        width: 45px;\n\n    }\n    .add-item-popup {\n        width: 45px;\n\n\n    }\n    .add-item-form {\n        padding-top: 50px;\n        padding-left: 20px;\n        padding-right: 20px;\n        padding-bottom: 20px;\n\n    }\n\n}\n@media (max-width: 750px) {\n    .new-project-form {\n        padding-left: 20px;\n        padding-right: 20px;\n        padding-bottom: 20px;\n    }\n    .list-name {\n        width: 80%;\n    }\n\n\n}\n\n@media (max-width: 700px)  {\n    #content {\n        grid-template-columns: 1fr;\n        padding: 5px;\n        margin: 10px;\n\n    }\n    .list-item {\n        margin-left: 0;\n        margin-right: 0;\n        grid-template-columns: 1fr 3fr;\n        align-items: start;\n    }\n    .priority-circle, .edit-btn, .expand-btn   {\n        display: none !important;\n    }\n    .task-body {\n        padding-top: 10px;\n        padding-bottom: 10px;\n    }\n    .projects {\n        margin-top: 50px;\n        order: 1;\n        text-align: center;\n    }\n    .projects h2 {\n        margin: auto;\n    }\n    .project {\n        display: inline-block;\n        margin-left: 3px;\n        margin-right: 3px;\n        margin-bottom: 0px;\n    }\n    .checkmark {\n        transform: scale(1.7) !important;\n        top: 10px !important;\n    }\n\n    .new-project-form input {\n        width: 90%;\n\n    }\n    .add-item-form input {\n        width: 90%;\n    }\n    \n}\n\n.edit-btn {\n    align-self: start;\n    justify-self: end;\n    border-radius: 10px;\n    padding: 10px;\n    border: none;\n    background:none;\n}\n.edit-btn:hover, .expand-btn:hover {\n    color:darkmagenta;\n}\n.expand-btn {\n    background: none;\n    border: none;\n}\n.check-container {\n    align-self: start;\n    display: block;\n    position: relative;\n    padding-left: 35px;\n    margin-bottom: 12px;\n    cursor: pointer;\n    font-size: 22px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    \n  }\n  \n  /* Hide the browser's default checkbox */\n  .check-container input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n  }\n  \n  /* Create a custom checkbox */\n  .checkmark {\n    position: absolute;\n    left: 10px;\n    top: 20px;\n    height: 25px;\n    width: 25px;\n    background-color: #eee;\n    transform: scale(2.3);\n    border-radius: 15px;\n    border: 3px solid darkcyan;\n\n  }\n  \n  /* On mouse-over, add a grey background color */\n  .check-container:hover input ~ .checkmark {\n    background-color: #ccc;\n  }\n  \n  /* When the checkbox is checked, add a blue background */\n  .check-container input:checked ~ .checkmark {\n    background-color: #eee;\n  }\n\n.checkmark:after {\n    content: \"\";\n    position: absolute;\n    display: none;\n  }\n  \n  /* Show the checkmark when checked */\n  .check-container input:checked ~ .checkmark:after {\n    display: block;\n  }\n  \n  /* Style the checkmark/indicator */\n  .check-container .checkmark:after {\n    left: 9px;\n    top: 5px;\n    width: 5px;\n    height: 10px;\n    border: solid #02f70b;\n    border-width: 0 3px 3px 0;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n  }\n\n"],"sourceRoot":""}]);
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
    const itemexpand = document.querySelector('.item-expand');

    if (editform !== null) {
        document.querySelectorAll('.edit-item-form').forEach(element => {
           element.outerHTML = ""; 
        });
    }
    if (itemexpand !== null) {
        document.querySelectorAll('.item-expand').forEach(element => {
           element.outerHTML = ""; 
        });
    }

    if (action === 'edit') {
        projform.style.display = "none";
        itemform.style.display = "none";

    } else if (action === 'add-item') {
        itemform.style.display = "grid";
        projform.style.display = "none";

    } else if (action === 'add-project') {
        projform.style.display = "grid";
        itemform.style.display = "none";
    } else {
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
/* harmony import */ var _expandItem_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expandItem.js */ "./src/expandItem.js");





const displayItemMin = (listName, index) => {
    var items = JSON.parse(localStorage.getItem(listName));
    const task = items[index];
    const div = document.createElement('div');
    const text = document.createElement('div');
    text.textContent = `${task.title}`;
    text.className = "task-body";
    div.appendChild(text);

    const prior = document.createElement('div');
    prior.className = "fas fa-circle priority-circle";
    if (task.priority === "High") {
        prior.style.color = "red";
    } else if (task.priority === "Mid") {
        prior.style.color = "darkorange";
    } else if (task.priority === "Low") {
        prior.style.color = "green";
    }
    

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
    div.prepend(prior);

    const editBtn = document.createElement('button');
    editBtn.className = "edit-btn fas fa-edit fa-2x";
    editBtn.onclick = () => {
        (0,_displayForm_js__WEBPACK_IMPORTED_MODULE_1__["default"])('edit');
        (0,_editItemForm_js__WEBPACK_IMPORTED_MODULE_2__["default"])(listName, index);
    };
    div.appendChild(editBtn);

    const expandBtn = document.createElement('button');
    expandBtn.className = "expand-btn fas fa-ellipsis-h fa-2x";
    div.appendChild(expandBtn);
    expandBtn.onclick = () => (0,_expandItem_js__WEBPACK_IMPORTED_MODULE_3__["default"])(task);

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
    console.log(listName)
    document.querySelector('.list').innerHTML = "";
    const heading = document.querySelector('.list-name');
    heading.textContent = `${listName} To Do's`;
    const list = document.querySelector('ul');
    list.id = listName;
    const tasks = JSON.parse(localStorage.getItem(listName));
    if (tasks !== null) {
        tasks.forEach( (task, index) => {
            const item = (0,_displayItemMin_js__WEBPACK_IMPORTED_MODULE_3__["default"])(listName, index);
            item.className = "list-item";
            list.appendChild(item);
        })

    }


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
        console.log('null projects list');

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
    editBtn.className ="edit-form-btn";
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
/* harmony import */ var _displayForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayForm */ "./src/displayForm.js");



const expandItem = (task) => {
    (0,_displayForm__WEBPACK_IMPORTED_MODULE_1__["default"])()
    var div = document.createElement('div');
    div.className ="item-expand";

    const closePopup = document.createElement('button');
    closePopup.className = "fas fa-times close-popup fa-2x";
    closePopup.onclick = () => (0,_displayForm__WEBPACK_IMPORTED_MODULE_1__["default"])();
    div.appendChild(closePopup);

    const titlewrapper = document.createElement('div');
    titlewrapper.className = "item-section-wrapper";
    const title = document.createElement('div');
    title.id = "task-title";
    title.textContent = `${task.title}`;
    var itemLabel = document.createElement('label');
    itemLabel.setAttribute("for", title.id);
    itemLabel.innerHTML = "Task";
    titlewrapper.appendChild(itemLabel);
    titlewrapper.appendChild(title);
    div.appendChild(titlewrapper);
    
    const descriptionwrapper = document.createElement('div');
    descriptionwrapper.className = "item-section-wrapper";
    const description = document.createElement('div');
    description.id = "task-description";

    if (task.description === "") {
        description.textContent = "N/A";
    } else {
        description.textContent = `${task.description}`;
    }
    var itemLabel = document.createElement('label');
    itemLabel.setAttribute("for", description.id);
    itemLabel.innerHTML = "Details";
    descriptionwrapper.appendChild(itemLabel);
    descriptionwrapper.appendChild(description);
    div.appendChild(descriptionwrapper);

    const dueDatewrapper = document.createElement('div');
    dueDatewrapper.className = "item-section-wrapper";
    const dueDate = document.createElement('div');
    dueDate.id = "task-duedate";
    if (task.dueDate === "") {
        dueDate.textContent = "N/A";
    } else {
        dueDate.textContent = `${task.dueDate}`;
    }
    var itemLabel = document.createElement('label');
    itemLabel.setAttribute("for", dueDate.id);
    itemLabel.innerHTML = "Due date";
    dueDatewrapper.appendChild(itemLabel);
    dueDatewrapper.appendChild(dueDate);
    div.appendChild(dueDatewrapper);

    const prioritywrapper = document.createElement('div');
    prioritywrapper.className = "item-section-wrapper";
    const priority = document.createElement('div');
    priority.id = "task-priority";
    priority.textContent = `${task.priority}`;
    var itemLabel = document.createElement('label');
    itemLabel.setAttribute("for", priority.id);
    itemLabel.innerHTML = "Priority";
    prioritywrapper.appendChild(itemLabel);
    prioritywrapper.appendChild(priority);
    div.appendChild(prioritywrapper);
    

    const content = document.querySelector('#content');
    content.appendChild(div);

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
/* harmony import */ var _displayForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayForm */ "./src/displayForm.js");


const itemFormPartial = (action) => {

    const div = document.querySelector('#content');

    const form = document.createElement('div');
    form.className = `${action}-item-form`;
    const closePopup = document.createElement('button');
    closePopup.className = "fas fa-times close-popup";
    closePopup.onclick = () => (0,_displayForm__WEBPACK_IMPORTED_MODULE_0__["default"])();
    form.appendChild(closePopup);

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

    const closePopup = document.createElement('button');
    closePopup.className = "fas fa-times close-popup fa-2x";
    closePopup.onclick = () => (0,_displayForm_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    newProjectForm.appendChild(closePopup);

    const projectName = document.createElement('input');
    projectName.type = "text";
    newProjectForm.appendChild(projectName)
  
    const newProjectBtn = document.createElement('button');
    newProjectBtn.className = "new-project-btn";
    newProjectBtn.textContent = "Create project";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLGVBQWUsT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxZQUFZLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxjQUFjLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxlQUFlLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGVBQWUsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLFlBQVksTUFBTSxvQkFBb0IscUJBQXFCLE9BQU8sS0FBSyxvQkFBb0IscUJBQXFCLFFBQVEsS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsZUFBZSxNQUFNLEtBQUssYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxhQUFhLE1BQU0sS0FBSyxVQUFVLE9BQU8sTUFBTSxLQUFLLFlBQVksYUFBYSxRQUFRLEtBQUssYUFBYSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssWUFBWSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLE9BQU8sTUFBTSxLQUFLLEtBQUssWUFBWSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxjQUFjLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxZQUFZLE1BQU0sVUFBVSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFB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QUVBLGlFQUFlLFFBQVE7Ozs7OztVQ1h2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNObUM7QUFDZDtBQUNzQjs7QUFFM0M7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLDJEQUFXO0FBQzVDO0FBQ0Esb0NBQW9DLDJEQUFXOzs7QUFHL0M7QUFDQSxJQUFJLHVEQUFPOztBQUVYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vc3JjL2FkZEl0ZW1Gb3JtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL3NyYy9jb2xsYXBzZUl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vc3JjL2NyZWF0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vc3JjL2RlbGV0ZUl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vc3JjL2Rpc3BsYXlGb3JtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL3NyYy9kaXNwbGF5SXRlbU1pbi5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9zcmMvZGlzcGxheUxpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vc3JjL2Rpc3BsYXlQcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9zcmMvZWRpdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vc3JjL2VkaXRJdGVtRm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9zcmMvZXhwYW5kSXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9zcmMvaG9tZURvbS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9zcmMvaXRlbUZvcm1QYXJ0aWFsLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL3NyYy9uZXdQcm9qZWN0Rm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9zcmMvc2F2ZUl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuKiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG4gICAgY29sb3I6ICM0MzQ1NDQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgXFxufVxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgY3lhbiwgbWFnZW50YSk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7ICAgXFxufVxcbm5hdiB7XFxuICAgIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCBjeWFuLCBtYWdlbnRhKTsgKi9cXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyMzUsIDI0NSwgMC40KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbn1cXG5cXG5uYXYgZGl2IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MSwgMjM1LCAyNDUsIDAuNik7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIHdpZHRoOiA0NXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuXFxuXFxufVxcblxcbm5hdiBkaXY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MSwgMjM1LCAyNDUsIDAuOCk7XFxuXFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICB3aWR0aDogNzAlO1xcblxcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDEsIDIzNSwgMjQ1LCAwLjUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAzMDBweDtcXG59XFxuLmxpc3QtbmFtZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDEsIDIzNSwgMjQ1LCAwLjYpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5uZXctcHJvamVjdC1mb3JtIHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIHBhZGRpbmc6IDEwMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHRvcDogNzBweDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdyaWQtZ2FwOiAxNXB4O1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDFzO1xcbiAgICBhbmltYXRpb246IGZhZGVJbiAxcztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDIzNSwgMjQ1KTtcXG4gICAgYm94LXNoYWRvdzogLTEwcHggMTBweCAyMHB4IGdyZXk7XFxuXFxuXFxufVxcblxcbmlucHV0LCBzZWxlY3Qge1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbn1cXG5pbnB1dFt0eXBlPWRhdGVdLCBzZWxlY3Qge1xcbiAgICB3aWR0aDogNjAlO1xcbn1cXG5cXG4uZWRpdC1pdGVtLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uYWRkLWl0ZW0tZm9ybSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuXFxufVxcblxcbi5hZGQtaXRlbS1mb3JtLCAuZWRpdC1pdGVtLWZvcm0ge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDE1MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNzBweDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XFxuICAgIGdyaWQtZ2FwOiAxNXB4O1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDFzO1xcbiAgICBhbmltYXRpb246IGZhZGVJbiAxcztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDIzNSwgMjQ1KTtcXG4gICAgYm94LXNoYWRvdzogLTEwcHggMTBweCAyMHB4IGdyZXk7XFxufVxcblxcbi5hZGQtaXRlbS1idG4sIC5lZGl0LWZvcm0tYnRuLCAubmV3LXByb2plY3QtYnRuIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAyNTUsIDI1NSwgLjUpO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuXFxufVxcblxcbi5uZXctcHJvamVjdC1idG4ge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG4uYWRkLWl0ZW0tYnRuOmhvdmVyLCAuZWRpdC1mb3JtLWJ0bjpob3ZlciwgLm5ldy1wcm9qZWN0LWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMjU1LCAyNTUsIC43KTtcXG59XFxuXFxuLmNsb3NlLXBvcHVwIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICByaWdodDogMjBweDtcXG4gICAgdG9wOiAyMHB4O1xcbn1cXG4uY2xvc2UtcG9wdXA6aG92ZXIge1xcbiAgICBjb2xvcjpncmV5O1xcbn1cXG5cXG4uaXRlbS1leHBhbmQge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDEwMHB4IDE1MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDcwcHg7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciA1ZnIgMmZyIDFmcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBncmlkLWdhcDogMjNweDtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiAxcztcXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMXM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyMzUsIDI0NSk7XFxuICAgIGJveC1zaGFkb3c6IC0xMHB4IDEwcHggMjBweCBncmV5O1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcblxcblxcbn1cXG5cXG4uaXRlbS1zZWN0aW9uLXdyYXBwZXIgZGl2IHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuLml0ZW0tc2VjdGlvbi13cmFwcGVyIGxhYmVsIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5mb3JtLXNlY3Rpb24td3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbn1cXG4vKiBBZGQgYW5pbWF0aW9uIChmYWRlIGluIHRoZSBwb3B1cCkgKi9cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcXG4gICAgZnJvbSB7b3BhY2l0eTogMDt9XFxuICAgIHRvIHtvcGFjaXR5OiAxO31cXG4gIH1cXG4gIFxcbiAgQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICBmcm9tIHtvcGFjaXR5OiAwO31cXG4gICAgdG8ge29wYWNpdHk6MSA7fVxcbiAgfVxcblxcblxcbi5pdGVtLWZvcm0gbGFiZWwge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcbi8qIC5pdGVtLWZvcm0gIGlucHV0W3R5cGU9ZGF0ZV0ge1xcbn0gKi9cXG4uaXRlbS1mb3JtIHNlbGVjdCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcblxcbn1cXG4ucHJvamVjdHMgaDIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MSwgMjM1LCAyNDUsIDAuNyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDEsIDIzNSwgMjQ1LCAwLjUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG5cXG5cXG59XFxuLnByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MSwgMjM1LCAyNDUsIDAuNyk7XFxuXFxufVxcbi5saXN0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcbi5saXN0LWl0ZW0ge1xcbiAgICBtYXJnaW46IDBweCAxMHB4IDIwcHggMTBweDtcXG4gICAgLyogbWFyZ2luLWJvdHRvbTogMjBweDsgKi9cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC1nYXA6IDIwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciA1ZnIgMWZyIDFmcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MSwgMjM1LCAyNDUsIDAuNyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGFuaW1hdGlvbjogZmFkZUluIDFzO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLmxpc3QtaXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyMzUsIDI0NSwgMC45KTtcXG5cXG59XFxuLmxpc3QtY29udGFpbmVyIHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjUwcHgpIHtcXG5cXG4gICAgLnRhc2stYm9keSB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIH1cXG5cXG5cXG4gICAgI2NvbnRlbnQge1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG5cXG5cXG5cXG4gICAgfVxcbiAgICAuYWRkLXByb2plY3QtcG9wdXAge1xcbiAgICAgICAgd2lkdGg6IDQ1cHg7XFxuXFxuICAgIH1cXG4gICAgLmFkZC1pdGVtLXBvcHVwIHtcXG4gICAgICAgIHdpZHRoOiA0NXB4O1xcblxcblxcbiAgICB9XFxuICAgIC5hZGQtaXRlbS1mb3JtIHtcXG4gICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcblxcbiAgICB9XFxuXFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xcbiAgICAubmV3LXByb2plY3QtZm9ybSB7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICAgIH1cXG4gICAgLmxpc3QtbmFtZSB7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICB9XFxuXFxuXFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkgIHtcXG4gICAgI2NvbnRlbnQge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICBtYXJnaW46IDEwcHg7XFxuXFxuICAgIH1cXG4gICAgLmxpc3QtaXRlbSB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgfVxcbiAgICAucHJpb3JpdHktY2lyY2xlLCAuZWRpdC1idG4sIC5leHBhbmQtYnRuICAge1xcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbiAgICB9XFxuICAgIC50YXNrLWJvZHkge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgfVxcbiAgICAucHJvamVjdHMge1xcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgICAgIG9yZGVyOiAxO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuICAgIC5wcm9qZWN0cyBoMiB7XFxuICAgICAgICBtYXJnaW46IGF1dG87XFxuICAgIH1cXG4gICAgLnByb2plY3Qge1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDNweDtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbiAgICB9XFxuICAgIC5jaGVja21hcmsge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjcpICFpbXBvcnRhbnQ7XFxuICAgICAgICB0b3A6IDEwcHggIWltcG9ydGFudDtcXG4gICAgfVxcblxcbiAgICAubmV3LXByb2plY3QtZm9ybSBpbnB1dCB7XFxuICAgICAgICB3aWR0aDogOTAlO1xcblxcbiAgICB9XFxuICAgIC5hZGQtaXRlbS1mb3JtIGlucHV0IHtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgIH1cXG4gICAgXFxufVxcblxcbi5lZGl0LWJ0biB7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XFxufVxcbi5lZGl0LWJ0bjpob3ZlciwgLmV4cGFuZC1idG46aG92ZXIge1xcbiAgICBjb2xvcjpkYXJrbWFnZW50YTtcXG59XFxuLmV4cGFuZC1idG4ge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbi5jaGVjay1jb250YWluZXIge1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgXFxuICB9XFxuICBcXG4gIC8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IGNoZWNrYm94ICovXFxuICAuY2hlY2stY29udGFpbmVyIGlucHV0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGhlaWdodDogMDtcXG4gICAgd2lkdGg6IDA7XFxuICB9XFxuICBcXG4gIC8qIENyZWF0ZSBhIGN1c3RvbSBjaGVja2JveCAqL1xcbiAgLmNoZWNrbWFyayB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMTBweDtcXG4gICAgdG9wOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIuMyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGRhcmtjeWFuO1xcblxcbiAgfVxcbiAgXFxuICAvKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgKi9cXG4gIC5jaGVjay1jb250YWluZXI6aG92ZXIgaW5wdXQgfiAuY2hlY2ttYXJrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gIH1cXG4gIFxcbiAgLyogV2hlbiB0aGUgY2hlY2tib3ggaXMgY2hlY2tlZCwgYWRkIGEgYmx1ZSBiYWNrZ3JvdW5kICovXFxuICAuY2hlY2stY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gIH1cXG5cXG4uY2hlY2ttYXJrOmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLyogU2hvdyB0aGUgY2hlY2ttYXJrIHdoZW4gY2hlY2tlZCAqL1xcbiAgLmNoZWNrLWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbiAgXFxuICAvKiBTdHlsZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAqL1xcbiAgLmNoZWNrLWNvbnRhaW5lciAuY2hlY2ttYXJrOmFmdGVyIHtcXG4gICAgbGVmdDogOXB4O1xcbiAgICB0b3A6IDVweDtcXG4gICAgd2lkdGg6IDVweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXI6IHNvbGlkICMwMmY3MGI7XFxuICAgIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICB9XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLHdFQUF3RTtJQUN4RSxnQkFBZ0I7O0FBRXBCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7SUFDVCwwREFBMEQ7SUFDMUQsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLHlEQUF5RDtJQUN6RCxhQUFhO0lBQ2IsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxrQkFBa0I7Ozs7QUFJdEI7O0FBRUE7SUFDSSxvQ0FBb0M7O0FBRXhDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixVQUFVOztJQUVWLGFBQWE7SUFDYixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFVBQVU7SUFDVixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixTQUFT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QXFCO0lBQ3JCLG1CQUFtQjtJQUNuQiwwQkFBMEI7O0VBRTVCOztFQUVBLCtDQUErQztFQUMvQztJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQSx3REFBd0Q7RUFDeEQ7SUFDRSxzQkFBc0I7RUFDeEI7O0FBRUY7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7RUFDZjs7RUFFQSxvQ0FBb0M7RUFDcEM7SUFDRSxjQUFjO0VBQ2hCOztFQUVBLGtDQUFrQztFQUNsQztJQUNFLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtJQUNWLFlBQVk7SUFDWixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGdDQUFnQztJQUNoQyw0QkFBNEI7SUFDNUIsd0JBQXdCO0VBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsIGJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuKiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG4gICAgY29sb3I6ICM0MzQ1NDQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgXFxufVxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgY3lhbiwgbWFnZW50YSk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7ICAgXFxufVxcbm5hdiB7XFxuICAgIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCBjeWFuLCBtYWdlbnRhKTsgKi9cXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyMzUsIDI0NSwgMC40KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbn1cXG5cXG5uYXYgZGl2IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MSwgMjM1LCAyNDUsIDAuNik7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIHdpZHRoOiA0NXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuXFxuXFxufVxcblxcbm5hdiBkaXY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MSwgMjM1LCAyNDUsIDAuOCk7XFxuXFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICB3aWR0aDogNzAlO1xcblxcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDEsIDIzNSwgMjQ1LCAwLjUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAzMDBweDtcXG59XFxuLmxpc3QtbmFtZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDEsIDIzNSwgMjQ1LCAwLjYpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5uZXctcHJvamVjdC1mb3JtIHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIHBhZGRpbmc6IDEwMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHRvcDogNzBweDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdyaWQtZ2FwOiAxNXB4O1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDFzO1xcbiAgICBhbmltYXRpb246IGZhZGVJbiAxcztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDIzNSwgMjQ1KTtcXG4gICAgYm94LXNoYWRvdzogLTEwcHggMTBweCAyMHB4IGdyZXk7XFxuXFxuXFxufVxcblxcbmlucHV0LCBzZWxlY3Qge1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbn1cXG5pbnB1dFt0eXBlPWRhdGVdLCBzZWxlY3Qge1xcbiAgICB3aWR0aDogNjAlO1xcbn1cXG5cXG4uZWRpdC1pdGVtLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uYWRkLWl0ZW0tZm9ybSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuXFxufVxcblxcbi5hZGQtaXRlbS1mb3JtLCAuZWRpdC1pdGVtLWZvcm0ge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDE1MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNzBweDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XFxuICAgIGdyaWQtZ2FwOiAxNXB4O1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDFzO1xcbiAgICBhbmltYXRpb246IGZhZGVJbiAxcztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDIzNSwgMjQ1KTtcXG4gICAgYm94LXNoYWRvdzogLTEwcHggMTBweCAyMHB4IGdyZXk7XFxufVxcblxcbi5hZGQtaXRlbS1idG4sIC5lZGl0LWZvcm0tYnRuLCAubmV3LXByb2plY3QtYnRuIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAyNTUsIDI1NSwgLjUpO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuXFxufVxcblxcbi5uZXctcHJvamVjdC1idG4ge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG4uYWRkLWl0ZW0tYnRuOmhvdmVyLCAuZWRpdC1mb3JtLWJ0bjpob3ZlciwgLm5ldy1wcm9qZWN0LWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMjU1LCAyNTUsIC43KTtcXG59XFxuXFxuLmNsb3NlLXBvcHVwIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICByaWdodDogMjBweDtcXG4gICAgdG9wOiAyMHB4O1xcbn1cXG4uY2xvc2UtcG9wdXA6aG92ZXIge1xcbiAgICBjb2xvcjpncmV5O1xcbn1cXG5cXG4uaXRlbS1leHBhbmQge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDEwMHB4IDE1MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDcwcHg7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciA1ZnIgMmZyIDFmcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBncmlkLWdhcDogMjNweDtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiAxcztcXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMXM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyMzUsIDI0NSk7XFxuICAgIGJveC1zaGFkb3c6IC0xMHB4IDEwcHggMjBweCBncmV5O1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcblxcblxcbn1cXG5cXG4uaXRlbS1zZWN0aW9uLXdyYXBwZXIgZGl2IHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuLml0ZW0tc2VjdGlvbi13cmFwcGVyIGxhYmVsIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5mb3JtLXNlY3Rpb24td3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbn1cXG4vKiBBZGQgYW5pbWF0aW9uIChmYWRlIGluIHRoZSBwb3B1cCkgKi9cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcXG4gICAgZnJvbSB7b3BhY2l0eTogMDt9XFxuICAgIHRvIHtvcGFjaXR5OiAxO31cXG4gIH1cXG4gIFxcbiAgQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICBmcm9tIHtvcGFjaXR5OiAwO31cXG4gICAgdG8ge29wYWNpdHk6MSA7fVxcbiAgfVxcblxcblxcbi5pdGVtLWZvcm0gbGFiZWwge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcbi8qIC5pdGVtLWZvcm0gIGlucHV0W3R5cGU9ZGF0ZV0ge1xcbn0gKi9cXG4uaXRlbS1mb3JtIHNlbGVjdCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcblxcbn1cXG4ucHJvamVjdHMgaDIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MSwgMjM1LCAyNDUsIDAuNyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDEsIDIzNSwgMjQ1LCAwLjUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG5cXG5cXG59XFxuLnByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MSwgMjM1LCAyNDUsIDAuNyk7XFxuXFxufVxcbi5saXN0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcbi5saXN0LWl0ZW0ge1xcbiAgICBtYXJnaW46IDBweCAxMHB4IDIwcHggMTBweDtcXG4gICAgLyogbWFyZ2luLWJvdHRvbTogMjBweDsgKi9cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC1nYXA6IDIwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciA1ZnIgMWZyIDFmcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MSwgMjM1LCAyNDUsIDAuNyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGFuaW1hdGlvbjogZmFkZUluIDFzO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLmxpc3QtaXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyMzUsIDI0NSwgMC45KTtcXG5cXG59XFxuLmxpc3QtY29udGFpbmVyIHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjUwcHgpIHtcXG5cXG4gICAgLnRhc2stYm9keSB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIH1cXG5cXG5cXG4gICAgI2NvbnRlbnQge1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG5cXG5cXG5cXG4gICAgfVxcbiAgICAuYWRkLXByb2plY3QtcG9wdXAge1xcbiAgICAgICAgd2lkdGg6IDQ1cHg7XFxuXFxuICAgIH1cXG4gICAgLmFkZC1pdGVtLXBvcHVwIHtcXG4gICAgICAgIHdpZHRoOiA0NXB4O1xcblxcblxcbiAgICB9XFxuICAgIC5hZGQtaXRlbS1mb3JtIHtcXG4gICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcblxcbiAgICB9XFxuXFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xcbiAgICAubmV3LXByb2plY3QtZm9ybSB7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICAgIH1cXG4gICAgLmxpc3QtbmFtZSB7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICB9XFxuXFxuXFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkgIHtcXG4gICAgI2NvbnRlbnQge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICBtYXJnaW46IDEwcHg7XFxuXFxuICAgIH1cXG4gICAgLmxpc3QtaXRlbSB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgfVxcbiAgICAucHJpb3JpdHktY2lyY2xlLCAuZWRpdC1idG4sIC5leHBhbmQtYnRuICAge1xcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbiAgICB9XFxuICAgIC50YXNrLWJvZHkge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgfVxcbiAgICAucHJvamVjdHMge1xcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgICAgIG9yZGVyOiAxO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuICAgIC5wcm9qZWN0cyBoMiB7XFxuICAgICAgICBtYXJnaW46IGF1dG87XFxuICAgIH1cXG4gICAgLnByb2plY3Qge1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDNweDtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbiAgICB9XFxuICAgIC5jaGVja21hcmsge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjcpICFpbXBvcnRhbnQ7XFxuICAgICAgICB0b3A6IDEwcHggIWltcG9ydGFudDtcXG4gICAgfVxcblxcbiAgICAubmV3LXByb2plY3QtZm9ybSBpbnB1dCB7XFxuICAgICAgICB3aWR0aDogOTAlO1xcblxcbiAgICB9XFxuICAgIC5hZGQtaXRlbS1mb3JtIGlucHV0IHtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgIH1cXG4gICAgXFxufVxcblxcbi5lZGl0LWJ0biB7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XFxufVxcbi5lZGl0LWJ0bjpob3ZlciwgLmV4cGFuZC1idG46aG92ZXIge1xcbiAgICBjb2xvcjpkYXJrbWFnZW50YTtcXG59XFxuLmV4cGFuZC1idG4ge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbi5jaGVjay1jb250YWluZXIge1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgXFxuICB9XFxuICBcXG4gIC8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IGNoZWNrYm94ICovXFxuICAuY2hlY2stY29udGFpbmVyIGlucHV0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGhlaWdodDogMDtcXG4gICAgd2lkdGg6IDA7XFxuICB9XFxuICBcXG4gIC8qIENyZWF0ZSBhIGN1c3RvbSBjaGVja2JveCAqL1xcbiAgLmNoZWNrbWFyayB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMTBweDtcXG4gICAgdG9wOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIuMyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGRhcmtjeWFuO1xcblxcbiAgfVxcbiAgXFxuICAvKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgKi9cXG4gIC5jaGVjay1jb250YWluZXI6aG92ZXIgaW5wdXQgfiAuY2hlY2ttYXJrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gIH1cXG4gIFxcbiAgLyogV2hlbiB0aGUgY2hlY2tib3ggaXMgY2hlY2tlZCwgYWRkIGEgYmx1ZSBiYWNrZ3JvdW5kICovXFxuICAuY2hlY2stY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gIH1cXG5cXG4uY2hlY2ttYXJrOmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLyogU2hvdyB0aGUgY2hlY2ttYXJrIHdoZW4gY2hlY2tlZCAqL1xcbiAgLmNoZWNrLWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbiAgXFxuICAvKiBTdHlsZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAqL1xcbiAgLmNoZWNrLWNvbnRhaW5lciAuY2hlY2ttYXJrOmFmdGVyIHtcXG4gICAgbGVmdDogOXB4O1xcbiAgICB0b3A6IDVweDtcXG4gICAgd2lkdGg6IDVweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXI6IHNvbGlkICMwMmY3MGI7XFxuICAgIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICB9XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgc2F2ZUl0ZW0gZnJvbSBcIi4vc2F2ZUl0ZW0uanNcIjtcbmltcG9ydCBpdGVtRm9ybVBhcnRpYWwgZnJvbSBcIi4vaXRlbUZvcm1QYXJ0aWFsLmpzXCI7XG5pbXBvcnQgZGlzcGxheUZvcm1Db250cm9sbGVyIGZyb20gXCIuL2Rpc3BsYXlGb3JtLmpzXCI7XG5pbXBvcnQgZGlzcGxheUxpc3QgZnJvbSBcIi4vZGlzcGxheUxpc3QuanNcIjtcblxuY29uc3QgYWRkSXRlbUZvcm0gPSAobGlzdCkgPT4ge1xuICAgIGNvbnN0IHBhcnRpYWwgPSBpdGVtRm9ybVBhcnRpYWwoJ2FkZCcpO1xuICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzay10aXRsZScpO1xuICAgIHZhciBkZXNjcmlwdGlvbiA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2stZGVzYycpO1xuICAgIHZhciBkdWVEYXRlID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzay1kYXRlJyk7XG4gICAgdmFyIHByaW9yaXR5ID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzay1wcmlvcml0eScpO1xuXG4gICAgY29uc3QgYWRkSXRlbUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZEl0ZW1CdG4uY2xhc3NOYW1lID0gXCJhZGQtaXRlbS1idG5cIjtcbiAgICBhZGRJdGVtQnRuLnRleHRDb250ZW50ID0gXCJBZGQgYSB0YXNrXCI7XG4gICAgYWRkSXRlbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSB7XG4gICAgICAgICAgICB0aXRsZTogaW5wdXQudmFsdWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24udmFsdWUsXG4gICAgICAgICAgICBkdWVEYXRlOiBkdWVEYXRlLnZhbHVlLFxuICAgICAgICAgICAgcHJpb3JpdHk6IHByaW9yaXR5LnZhbHVlXG4gICAgICAgIH1cbiAgICAgICAgc2F2ZUl0ZW0obmV3VGFzaywgbGlzdC5pZCk7XG4gICAgICAgIGRpc3BsYXlMaXN0KGxpc3QuaWQpO1xuICAgICAgICBkaXNwbGF5Rm9ybUNvbnRyb2xsZXIoKTtcbiAgICAgICAgXG4gICAgfSk7XG4gICAgY29uc3QgaXRlbUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWl0ZW0tZm9ybScpO1xuICAgIGl0ZW1Gb3JtLmFwcGVuZENoaWxkKGFkZEl0ZW1CdG4pO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFkZEl0ZW1Gb3JtOyIsImltcG9ydCBleHBhbmRJdGVtIGZyb20gXCIuL2V4cGFuZEl0ZW1cIjtcblxuY29uc3QgY29sbGFwc2VJdGVtID0gKHRhc2ssIGV2ZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2codGFzaylcbiAgICB2YXIgZWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGB0aXRsZTogJHt0YXNrLnRpdGxlfWA7XG4gICAgZWxlbWVudC5vbmNsaWNrID0gKGV2ZW50KSA9PiBleHBhbmRJdGVtKHRhc2ssIGV2ZW50KTtcblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbGxhcHNlSXRlbTsiLCJjb25zdCBjcmVhdGVQcm9qZWN0ID0gKGlucHV0KSA9PiB7XG4gICAgbGV0IHRhc2tzID0gW11cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShpbnB1dCwgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJvamVjdDsiLCJpbXBvcnQgZGlzcGxheUxpc3QgZnJvbSBcIi4vZGlzcGxheUxpc3QuanNcIjtcbmNvbnN0IGRlbGV0ZUl0ZW0gPSAobGlzdCwgaW5kZXgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgdmFyIGl0ZW1zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsaXN0KSk7XG4gICAgaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBpdGVtcyA9IEpTT04uc3RyaW5naWZ5KGl0ZW1zKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsaXN0LCBpdGVtcyk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtkaXNwbGF5TGlzdChsaXN0KX0sIDEwMDApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWxldGVJdGVtOyIsImltcG9ydCBlZGl0SXRlbUZvcm0gZnJvbSBcIi4vZWRpdEl0ZW1Gb3JtXCJcblxuY29uc3QgZGlzcGxheUZvcm1Db250cm9sbGVyID0gKGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IGl0ZW1mb3JtID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtaXRlbS1mb3JtJyk7XG4gICAgY29uc3QgcHJvamZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtZm9ybScpO1xuICAgIGNvbnN0IGVkaXRmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtaXRlbS1mb3JtJyk7XG4gICAgY29uc3QgaXRlbWV4cGFuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLWV4cGFuZCcpO1xuXG4gICAgaWYgKGVkaXRmb3JtICE9PSBudWxsKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0LWl0ZW0tZm9ybScpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgIGVsZW1lbnQub3V0ZXJIVE1MID0gXCJcIjsgXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoaXRlbWV4cGFuZCAhPT0gbnVsbCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaXRlbS1leHBhbmQnKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICBlbGVtZW50Lm91dGVySFRNTCA9IFwiXCI7IFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uID09PSAnZWRpdCcpIHtcbiAgICAgICAgcHJvamZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBpdGVtZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PT0gJ2FkZC1pdGVtJykge1xuICAgICAgICBpdGVtZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XG4gICAgICAgIHByb2pmb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgIH0gZWxzZSBpZiAoYWN0aW9uID09PSAnYWRkLXByb2plY3QnKSB7XG4gICAgICAgIHByb2pmb3JtLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbiAgICAgICAgaXRlbWZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2pmb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgaXRlbWZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUZvcm1Db250cm9sbGVyOyIsImltcG9ydCBkZWxldGVJdGVtIGZyb20gXCIuL2RlbGV0ZUl0ZW0uanNcIjtcbmltcG9ydCBkaXNwbGF5Rm9ybUNvbnRyb2xsZXIgZnJvbSBcIi4vZGlzcGxheUZvcm0uanNcIjtcbmltcG9ydCBlZGl0SXRlbUZvcm0gZnJvbSBcIi4vZWRpdEl0ZW1Gb3JtLmpzXCI7XG5pbXBvcnQgZXhwYW5kSXRlbSBmcm9tIFwiLi9leHBhbmRJdGVtLmpzXCI7XG5cbmNvbnN0IGRpc3BsYXlJdGVtTWluID0gKGxpc3ROYW1lLCBpbmRleCkgPT4ge1xuICAgIHZhciBpdGVtcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obGlzdE5hbWUpKTtcbiAgICBjb25zdCB0YXNrID0gaXRlbXNbaW5kZXhdO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gYCR7dGFzay50aXRsZX1gO1xuICAgIHRleHQuY2xhc3NOYW1lID0gXCJ0YXNrLWJvZHlcIjtcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgICBjb25zdCBwcmlvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByaW9yLmNsYXNzTmFtZSA9IFwiZmFzIGZhLWNpcmNsZSBwcmlvcml0eS1jaXJjbGVcIjtcbiAgICBpZiAodGFzay5wcmlvcml0eSA9PT0gXCJIaWdoXCIpIHtcbiAgICAgICAgcHJpb3Iuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICAgIH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PT0gXCJNaWRcIikge1xuICAgICAgICBwcmlvci5zdHlsZS5jb2xvciA9IFwiZGFya29yYW5nZVwiO1xuICAgIH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PT0gXCJMb3dcIikge1xuICAgICAgICBwcmlvci5zdHlsZS5jb2xvciA9IFwiZ3JlZW5cIjtcbiAgICB9XG4gICAgXG5cbiAgICBjb25zdCBjaGVja2xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjaGVja2xhYmVsLmNsYXNzTmFtZSA9IFwiY2hlY2stY29udGFpbmVyXCI7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkZWxldGVCdG4udHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBjaGVja2xhYmVsLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgLy8gZGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCJERUxFVEVEIVwiO1xuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc3Bhbi5jbGFzc05hbWUgPSBcImNoZWNrbWFya1wiO1xuICAgIGNoZWNrbGFiZWwuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgZGVsZXRlQnRuLm9uY2xpY2sgPSAoKSA9PiBkZWxldGVJdGVtKGxpc3ROYW1lLCBpbmRleCk7XG4gICAgZGl2LnByZXBlbmQoY2hlY2tsYWJlbCk7XG4gICAgZGl2LnByZXBlbmQocHJpb3IpO1xuXG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGVkaXRCdG4uY2xhc3NOYW1lID0gXCJlZGl0LWJ0biBmYXMgZmEtZWRpdCBmYS0yeFwiO1xuICAgIGVkaXRCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgZGlzcGxheUZvcm1Db250cm9sbGVyKCdlZGl0Jyk7XG4gICAgICAgIGVkaXRJdGVtRm9ybShsaXN0TmFtZSwgaW5kZXgpO1xuICAgIH07XG4gICAgZGl2LmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuXG4gICAgY29uc3QgZXhwYW5kQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZXhwYW5kQnRuLmNsYXNzTmFtZSA9IFwiZXhwYW5kLWJ0biBmYXMgZmEtZWxsaXBzaXMtaCBmYS0yeFwiO1xuICAgIGRpdi5hcHBlbmRDaGlsZChleHBhbmRCdG4pO1xuICAgIGV4cGFuZEJ0bi5vbmNsaWNrID0gKCkgPT4gZXhwYW5kSXRlbSh0YXNrKTtcblxuICAgIHJldHVybiBkaXZcblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlJdGVtTWluOyIsImltcG9ydCBleHBhbmRJdGVtIGZyb20gXCIuL2V4cGFuZEl0ZW0uanNcIjtcbmltcG9ydCBkZWxldGVJdGVtIGZyb20gXCIuL2RlbGV0ZUl0ZW0uanNcIjtcbmltcG9ydCBlZGl0SXRlbUZvcm0gZnJvbSBcIi4vZWRpdEl0ZW1Gb3JtLmpzXCI7XG5pbXBvcnQgZGlzcGxheUl0ZW1NaW4gZnJvbSBcIi4vZGlzcGxheUl0ZW1NaW4uanNcIjtcblxuY29uc3QgZGlzcGxheUxpc3QgPSAobGlzdE5hbWUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhsaXN0TmFtZSlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdCcpLmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LW5hbWUnKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gYCR7bGlzdE5hbWV9IFRvIERvJ3NgO1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCcpO1xuICAgIGxpc3QuaWQgPSBsaXN0TmFtZTtcbiAgICBjb25zdCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obGlzdE5hbWUpKTtcbiAgICBpZiAodGFza3MgIT09IG51bGwpIHtcbiAgICAgICAgdGFza3MuZm9yRWFjaCggKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gZGlzcGxheUl0ZW1NaW4obGlzdE5hbWUsIGluZGV4KTtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NOYW1lID0gXCJsaXN0LWl0ZW1cIjtcbiAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgIH0pXG5cbiAgICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5TGlzdDsiLCJpbXBvcnQgZGlzcGxheUxpc3QgZnJvbSBcIi4vZGlzcGxheUxpc3RcIjtcblxuY29uc3QgZGlzcGxheVByb2plY3RzID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIHZhciBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcbiAgICBpZiAobGlzdCA9PT0gbnVsbCkge1xuICAgICAgICBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxpc3QuY2xhc3NOYW1lID0gXCJwcm9qZWN0c1wiO1xuICAgICAgICBjb25zb2xlLmxvZygnbnVsbCBwcm9qZWN0cyBsaXN0Jyk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICBsaXN0LmlubmVySFRNTCA9IFwiXCI7XG4gICAgfVxuXG5cbiBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gbG9jYWxTdG9yYWdlLmtleShpKTtcbiAgICAgICAgICAgIGxpLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICAgICAgICAgIGxpLmNsYXNzTmFtZSA9IFwicHJvamVjdFwiO1xuICAgICAgICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheUxpc3QobmFtZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgIH1cbiAgICAgICAgbGlzdC5wcmVwZW5kKGhlYWRpbmcpO1xuICAgICAgICBjb250ZW50LnByZXBlbmQobGlzdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlQcm9qZWN0czsiLCJjb25zdCBlZGl0SXRlbSA9IChsaXN0LCBlZGl0ZWRJbmZvLCBpbmRleCkgPT4ge1xuICAgIHZhciBpdGVtcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obGlzdCkpO1xuICAgIGl0ZW1zW2luZGV4XSA9IGVkaXRlZEluZm87XG4gICAgaXRlbXMgPSBKU09OLnN0cmluZ2lmeShpdGVtcyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obGlzdCwgaXRlbXMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBlZGl0SXRlbTsiLCJpbXBvcnQgaXRlbUZvcm1QYXJ0aWFsIGZyb20gXCIuL2l0ZW1Gb3JtUGFydGlhbC5qc1wiO1xuaW1wb3J0IGVkaXRJdGVtIGZyb20gXCIuL2VkaXRJdGVtLmpzXCI7XG5pbXBvcnQgZGlzcGxheUxpc3QgZnJvbSBcIi4vZGlzcGxheUxpc3QuanNcIjtcbmltcG9ydCBkaXNwbGF5Rm9ybUNvbnRyb2xsZXIgZnJvbSBcIi4vZGlzcGxheUZvcm0uanNcIjtcblxuY29uc3QgZWRpdEl0ZW1Gb3JtID0gKGxpc3QsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFydGlhbCA9IGl0ZW1Gb3JtUGFydGlhbCgnZWRpdCcpO1xuICAgIC8vcmV0cmVpdmUgdGFzayBmcm9tIHN0b3JhZ2VcbiAgICB2YXIgaXRlbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxpc3QpKTtcbiAgICBjb25zdCB0YXNrID0gaXRlbXNbaW5kZXhdO1xuICAgIC8vIGZpbGwgZWRpdCBmb3JtIHdpdGggdGFzaydzIGRhdGFcbiAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLXRpdGxlJyk7XG4gICAgdmFyIGRlc2NyaXB0aW9uID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stZGVzYycpO1xuICAgIHZhciBkdWVEYXRlID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stZGF0ZScpO1xuICAgIHZhciBwcmlvcml0eSA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLXByaW9yaXR5Jyk7XG4gICAgaW5wdXQudmFsdWUgPSB0YXNrLnRpdGxlO1xuICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICBkdWVEYXRlLnZhbHVlID0gdGFzay5kdWVEYXRlO1xuICAgIHByaW9yaXR5LnZhbHVlID0gdGFzay5wcmlvcml0eTtcbiAgICBcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZWRpdEJ0bi5jbGFzc05hbWUgPVwiZWRpdC1mb3JtLWJ0blwiO1xuICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSBcIlN1Ym1pdCBlZGl0c1wiO1xuICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0YXNrRWRpdHMgPSB7XG4gICAgICAgICAgICB0aXRsZTogaW5wdXQudmFsdWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24udmFsdWUsXG4gICAgICAgICAgICBkdWVEYXRlOiBkdWVEYXRlLnZhbHVlLFxuICAgICAgICAgICAgcHJpb3JpdHk6IHByaW9yaXR5LnZhbHVlXG4gICAgICAgIH1cbiAgICAgICAgZWRpdEl0ZW0obGlzdCwgdGFza0VkaXRzLCBpbmRleCk7XG4gICAgICAgIGRpc3BsYXlMaXN0KGxpc3QpO1xuICAgICAgICBkaXNwbGF5Rm9ybUNvbnRyb2xsZXIoKTtcbiAgICAgICAgXG4gICAgfSk7XG4gICAgLy8gZm9ybS5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgICAvLyBkaXYuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgcGFydGlhbC5hcHBlbmQoZWRpdEJ0bik7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZWRpdEl0ZW1Gb3JtOyIsImltcG9ydCBjb2xsYXBzZUl0ZW0gZnJvbSBcIi4vY29sbGFwc2VJdGVtXCI7XG5pbXBvcnQgZGlzcGxheUZvcm1Db250cm9sbGVyIGZyb20gXCIuL2Rpc3BsYXlGb3JtXCI7XG5cbmNvbnN0IGV4cGFuZEl0ZW0gPSAodGFzaykgPT4ge1xuICAgIGRpc3BsYXlGb3JtQ29udHJvbGxlcigpXG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc05hbWUgPVwiaXRlbS1leHBhbmRcIjtcblxuICAgIGNvbnN0IGNsb3NlUG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjbG9zZVBvcHVwLmNsYXNzTmFtZSA9IFwiZmFzIGZhLXRpbWVzIGNsb3NlLXBvcHVwIGZhLTJ4XCI7XG4gICAgY2xvc2VQb3B1cC5vbmNsaWNrID0gKCkgPT4gZGlzcGxheUZvcm1Db250cm9sbGVyKCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNsb3NlUG9wdXApO1xuXG4gICAgY29uc3QgdGl0bGV3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGV3cmFwcGVyLmNsYXNzTmFtZSA9IFwiaXRlbS1zZWN0aW9uLXdyYXBwZXJcIjtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlLmlkID0gXCJ0YXNrLXRpdGxlXCI7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBgJHt0YXNrLnRpdGxlfWA7XG4gICAgdmFyIGl0ZW1MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgaXRlbUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCB0aXRsZS5pZCk7XG4gICAgaXRlbUxhYmVsLmlubmVySFRNTCA9IFwiVGFza1wiO1xuICAgIHRpdGxld3JhcHBlci5hcHBlbmRDaGlsZChpdGVtTGFiZWwpO1xuICAgIHRpdGxld3JhcHBlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHRpdGxld3JhcHBlcik7XG4gICAgXG4gICAgY29uc3QgZGVzY3JpcHRpb253cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY3JpcHRpb253cmFwcGVyLmNsYXNzTmFtZSA9IFwiaXRlbS1zZWN0aW9uLXdyYXBwZXJcIjtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc2NyaXB0aW9uLmlkID0gXCJ0YXNrLWRlc2NyaXB0aW9uXCI7XG5cbiAgICBpZiAodGFzay5kZXNjcmlwdGlvbiA9PT0gXCJcIikge1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiTi9BXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgJHt0YXNrLmRlc2NyaXB0aW9ufWA7XG4gICAgfVxuICAgIHZhciBpdGVtTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGl0ZW1MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgZGVzY3JpcHRpb24uaWQpO1xuICAgIGl0ZW1MYWJlbC5pbm5lckhUTUwgPSBcIkRldGFpbHNcIjtcbiAgICBkZXNjcmlwdGlvbndyYXBwZXIuYXBwZW5kQ2hpbGQoaXRlbUxhYmVsKTtcbiAgICBkZXNjcmlwdGlvbndyYXBwZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIGRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbndyYXBwZXIpO1xuXG4gICAgY29uc3QgZHVlRGF0ZXdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkdWVEYXRld3JhcHBlci5jbGFzc05hbWUgPSBcIml0ZW0tc2VjdGlvbi13cmFwcGVyXCI7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGR1ZURhdGUuaWQgPSBcInRhc2stZHVlZGF0ZVwiO1xuICAgIGlmICh0YXNrLmR1ZURhdGUgPT09IFwiXCIpIHtcbiAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IFwiTi9BXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IGAke3Rhc2suZHVlRGF0ZX1gO1xuICAgIH1cbiAgICB2YXIgaXRlbUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBpdGVtTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGR1ZURhdGUuaWQpO1xuICAgIGl0ZW1MYWJlbC5pbm5lckhUTUwgPSBcIkR1ZSBkYXRlXCI7XG4gICAgZHVlRGF0ZXdyYXBwZXIuYXBwZW5kQ2hpbGQoaXRlbUxhYmVsKTtcbiAgICBkdWVEYXRld3JhcHBlci5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZXdyYXBwZXIpO1xuXG4gICAgY29uc3QgcHJpb3JpdHl3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJpb3JpdHl3cmFwcGVyLmNsYXNzTmFtZSA9IFwiaXRlbS1zZWN0aW9uLXdyYXBwZXJcIjtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByaW9yaXR5LmlkID0gXCJ0YXNrLXByaW9yaXR5XCI7XG4gICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSBgJHt0YXNrLnByaW9yaXR5fWA7XG4gICAgdmFyIGl0ZW1MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgaXRlbUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBwcmlvcml0eS5pZCk7XG4gICAgaXRlbUxhYmVsLmlubmVySFRNTCA9IFwiUHJpb3JpdHlcIjtcbiAgICBwcmlvcml0eXdyYXBwZXIuYXBwZW5kQ2hpbGQoaXRlbUxhYmVsKTtcbiAgICBwcmlvcml0eXdyYXBwZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChwcmlvcml0eXdyYXBwZXIpO1xuICAgIFxuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkaXYpO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGV4cGFuZEl0ZW07IiwiaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSBcIi4vY3JlYXRlUHJvamVjdC5qc1wiO1xuaW1wb3J0IGRpc3BsYXlMaXN0IGZyb20gXCIuL2Rpc3BsYXlMaXN0LmpzXCI7XG5pbXBvcnQgc2F2ZUl0ZW0gZnJvbSBcIi4vc2F2ZUl0ZW0uanNcIjtcbmltcG9ydCBkaXNwbGF5UHJvamVjdHMgZnJvbSBcIi4vZGlzcGxheVByb2plY3RzLmpzXCI7XG5pbXBvcnQgYWRkSXRlbUZvcm0gZnJvbSBcIi4vYWRkSXRlbUZvcm0uanNcIjtcbmltcG9ydCBuZXdQcm9qZWN0Rm9ybSBmcm9tIFwiLi9uZXdQcm9qZWN0Rm9ybS5qc1wiO1xuXG5jb25zdCBIb21lRE9NID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc05hbWUgPVwibGlzdC1jb250YWluZXJcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdik7XG5cbiAgICAvL3JlbmRlciBoZWFkaW5nXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGluZy5jbGFzc05hbWUgPSBcImxpc3QtbmFtZVwiO1xuICAgIGRpdi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICAgIC8vcmVuZGVyIGxpc3RcbiAgICB2YXIgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgbGlzdC5jbGFzc05hbWUgPSAnbGlzdCc7XG4gICAgbGlzdC5pZCA9IFwiTWFpblwiO1xuICAgIGRpdi5hcHBlbmRDaGlsZChsaXN0KTtcblxuICAgIGFkZEl0ZW1Gb3JtKGxpc3QpO1xuICAgIG5ld1Byb2plY3RGb3JtKCk7XG4gICAgXG4gICAgZGlzcGxheUxpc3QobGlzdC5pZCk7XG4gICAgZGlzcGxheVByb2plY3RzKCk7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZURPTTsiLCJpbXBvcnQgZGlzcGxheUZvcm1Db250cm9sbGVyIGZyb20gXCIuL2Rpc3BsYXlGb3JtXCI7XG5cbmNvbnN0IGl0ZW1Gb3JtUGFydGlhbCA9IChhY3Rpb24pID0+IHtcblxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybS5jbGFzc05hbWUgPSBgJHthY3Rpb259LWl0ZW0tZm9ybWA7XG4gICAgY29uc3QgY2xvc2VQb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNsb3NlUG9wdXAuY2xhc3NOYW1lID0gXCJmYXMgZmEtdGltZXMgY2xvc2UtcG9wdXBcIjtcbiAgICBjbG9zZVBvcHVwLm9uY2xpY2sgPSAoKSA9PiBkaXNwbGF5Rm9ybUNvbnRyb2xsZXIoKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNsb3NlUG9wdXApO1xuXG4gICAgY29uc3QgaW5wdXR3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5wdXR3cmFwcGVyLmNsYXNzTmFtZSA9IFwiZm9ybS1zZWN0aW9uLXdyYXBwZXJcIjtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIGlucHV0LnBsYWNlaG9sZGVyID0gXCJUYXNrIG5hbWVcIjtcbiAgICBpbnB1dC5pZCA9IGAke2FjdGlvbn0tdGFzay10aXRsZWA7XG4gICAgdmFyIGl0ZW1MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgaXRlbUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBpbnB1dC5pZCk7XG4gICAgaXRlbUxhYmVsLmlubmVySFRNTCA9IFwiVGFzayBuYW1lXCI7XG4gICAgaW5wdXR3cmFwcGVyLmFwcGVuZENoaWxkKGl0ZW1MYWJlbCk7XG4gICAgaW5wdXR3cmFwcGVyLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0d3JhcHBlcik7XG4gICAgXG4gICAgY29uc3QgZGVzY3dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjd3JhcHBlci5jbGFzc05hbWUgPSBcImZvcm0tc2VjdGlvbi13cmFwcGVyXCI7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRlc2NyaXB0aW9uLnR5cGUgPSBcInRleHRcIjtcbiAgICBkZXNjcmlwdGlvbi5wbGFjZWhvbGRlciA9IFwiRGVzY3JpcHRpb25cIjtcbiAgICBkZXNjcmlwdGlvbi5pZCA9YCR7YWN0aW9ufS10YXNrLWRlc2NgO1xuICAgIHZhciBkZXNjTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRlc2NMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgZGVzY3JpcHRpb24uaWQpO1xuICAgIGRlc2NMYWJlbC5pbm5lckhUTUwgPSBcIkRlc2NyaXB0aW9uXCI7XG4gICAgZGVzY3dyYXBwZXIuYXBwZW5kQ2hpbGQoZGVzY0xhYmVsKTtcbiAgICBkZXNjd3JhcHBlci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjd3JhcHBlcik7XG4gICAgXG4gICAgY29uc3QgZGF0ZXdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkYXRld3JhcHBlci5jbGFzc05hbWUgPSBcImZvcm0tc2VjdGlvbi13cmFwcGVyXCI7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZHVlRGF0ZS50eXBlID0gXCJkYXRlXCI7XG4gICAgZHVlRGF0ZS5pZCA9IGAke2FjdGlvbn0tdGFzay1kYXRlYDtcbiAgICB2YXIgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGR1ZURhdGUuaWQpO1xuICAgIGRhdGVMYWJlbC5pbm5lckhUTUwgPSBcIiBEdWUgZGF0ZVwiO1xuICAgIGRhdGV3cmFwcGVyLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgZGF0ZXdyYXBwZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkYXRld3JhcHBlcik7XG5cbiAgICBjb25zdCBwcmlvcndyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcmlvcndyYXBwZXIuY2xhc3NOYW1lID0gXCJmb3JtLXNlY3Rpb24td3JhcHBlclwiO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgcHJpb3JpdHkuY2xhc3NOYW1lID0gXCJwcmlvcml0eS1zZWxlY3RcIjtcbiAgICBwcmlvcml0eS5pZCA9IGAke2FjdGlvbn0tdGFzay1wcmlvcml0eWA7XG4gICAgdmFyIG9wdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbjEpO1xuICAgIHZhciBvcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb24yKTtcbiAgICB2YXIgb3B0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uMyk7XG4gICAgb3B0aW9uMS52YWx1ZSA9IFwiSGlnaFwiO1xuICAgIG9wdGlvbjEudGV4dCA9IFwiSGlnaFwiO1xuICAgIG9wdGlvbjIudmFsdWUgPSBcIk1pZFwiO1xuICAgIG9wdGlvbjIudGV4dCA9IFwiTWlkXCI7XG4gICAgb3B0aW9uMy52YWx1ZSA9IFwiTG93XCI7XG4gICAgb3B0aW9uMy50ZXh0ID0gXCJMb3dcIjtcbiAgICB2YXIgcHJpb3JMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJpb3JMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgcHJpb3JpdHkuaWQpO1xuICAgIHByaW9yTGFiZWwuaW5uZXJIVE1MID0gXCJQcmlvcml0eVwiO1xuICAgIHByaW9yd3JhcHBlci5hcHBlbmRDaGlsZChwcmlvckxhYmVsKTtcbiAgICBwcmlvcndyYXBwZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3J3cmFwcGVyKTtcbiAgICBcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgcmV0dXJuIGZvcm1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBpdGVtRm9ybVBhcnRpYWw7IiwiaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSBcIi4vY3JlYXRlUHJvamVjdC5qc1wiO1xuaW1wb3J0IGRpc3BsYXlGb3JtQ29udHJvbGxlciBmcm9tIFwiLi9kaXNwbGF5Rm9ybS5qc1wiO1xuaW1wb3J0IGRpc3BsYXlQcm9qZWN0cyBmcm9tIFwiLi9kaXNwbGF5UHJvamVjdHMuanNcIjtcblxuY29uc3QgbmV3UHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1Byb2plY3RGb3JtLmNsYXNzTmFtZSA9IFwibmV3LXByb2plY3QtZm9ybVwiO1xuXG4gICAgY29uc3QgY2xvc2VQb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNsb3NlUG9wdXAuY2xhc3NOYW1lID0gXCJmYXMgZmEtdGltZXMgY2xvc2UtcG9wdXAgZmEtMnhcIjtcbiAgICBjbG9zZVBvcHVwLm9uY2xpY2sgPSAoKSA9PiBkaXNwbGF5Rm9ybUNvbnRyb2xsZXIoKTtcbiAgICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChjbG9zZVBvcHVwKTtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBwcm9qZWN0TmFtZS50eXBlID0gXCJ0ZXh0XCI7XG4gICAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpXG4gIFxuICAgIGNvbnN0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuZXdQcm9qZWN0QnRuLmNsYXNzTmFtZSA9IFwibmV3LXByb2plY3QtYnRuXCI7XG4gICAgbmV3UHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIHByb2plY3RcIjtcbiAgICBuZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lLnZhbHVlKTtcbiAgICAgICAgZGlzcGxheVByb2plY3RzKCk7XG4gICAgICAgIGRpc3BsYXlGb3JtQ29udHJvbGxlcigpO1xuICAgIH0pXG4gICAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQobmV3UHJvamVjdEJ0bilcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5ld1Byb2plY3RGb3JtKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3UHJvamVjdEZvcm07IiwiY29uc3Qgc2F2ZUl0ZW0gPSAobmV3VGFzaywgbGlzdE5hbWUpID0+IHtcbiAgICBsZXQgbGlzdDtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0obGlzdE5hbWUpID09PSBudWxsKSB7XG4gICAgICAgIGxpc3QgPSBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsaXN0TmFtZSkpO1xuICAgIH1cbiAgICBsaXN0LnB1c2gobmV3VGFzayk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obGlzdE5hbWUsIEpTT04uc3RyaW5naWZ5KGxpc3QpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2F2ZUl0ZW07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBIb21lRE9NIGZyb20gJy4vaG9tZURvbS5qcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBkaXNwbGF5Rm9ybSBmcm9tIFwiLi9kaXNwbGF5Rm9ybS5qc1wiO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAvL25hdmJhclxuICAgIGNvbnN0IGFkZEl0ZW1Qb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtaXRlbS1wb3B1cCcpO1xuICAgIGFkZEl0ZW1Qb3B1cC5vbmNsaWNrID0gKCkgPT4gZGlzcGxheUZvcm0oXCJhZGQtaXRlbVwiKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtcG9wdXAnKTtcbiAgICBhZGRQcm9qZWN0UG9wdXAub25jbGljayA9ICgpID0+IGRpc3BsYXlGb3JtKCdhZGQtcHJvamVjdCcpO1xuXG5cbiAgICAvL2xvYWQgaG9tZXBhZ2VcbiAgICBIb21lRE9NKCk7XG5cbn0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=