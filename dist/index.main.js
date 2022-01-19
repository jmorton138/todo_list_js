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
___CSS_LOADER_EXPORT___.push([module.id, "html, body {\n    min-height: 100%;\n}\n* {\n    /* border: 1px solid red; */\n    color: #434544;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    font-weight: 100;\n    \n}\nbody {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    background: linear-gradient(to bottom left, cyan, magenta);\n    background-size: cover; \n    background-position: bottom;\n    background-repeat: no-repeat;   \n}\nnav {\n    /* background: linear-gradient(to left, cyan, magenta); */\n    padding: 20px;\n    width: 200px;\n    margin: auto;\n    margin-top: 50px;\n    border-radius: 50px;\n    background: rgba(241, 235, 245, 0.4);\n    text-align: center;\n\n}\n\nnav div {\n    display: inline-block;\n    background: rgba(241, 235, 245, 0.6);\n    padding: 20px;\n    border-radius: 50px;\n    width: 45px;\n    text-align: center;\n\n\n\n}\n\nnav div:hover {\n    background: rgba(241, 235, 245, 0.8);\n\n}\n\n#content {\n    margin: auto;\n    margin-top: 30px;\n    width: 70%;\n\n    padding: 20px;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    position: relative;\n    background: rgba(241, 235, 245, 0.5);\n    border-radius: 40px;\n}\n\nfooter {\n    height: 500px;\n    margin-top: 300px;\n}\n.list-name {\n    text-align: center;\n    background: rgba(241, 235, 245, 0.6);\n    border-radius: 30px;\n    width: 50%;\n    margin: auto;\n    padding: 20px;\n}\n\n.new-project-form {\n    overflow: auto;\n    width: 70%;\n    padding: 100px;\n    position: absolute;\n    display: none;\n    top: 70px;\n    justify-self: center;\n    border-radius: 40px;\n    grid-template-rows: 1fr 1fr;\n    align-content: space-around;\n\n    align-content: center;\n    grid-gap: 15px;\n    -webkit-animation: fadeIn 1s;\n    animation: fadeIn 1s;\n    background-color: rgba(241, 235, 245);\n    box-shadow: -10px 10px 20px grey;\n\n\n}\n\ninput, select {\n    border-radius: 20px;\n    height: 50px;\n    padding-left: 20px;\n    font-size: 30px;\n    border: 1px solid grey;\n}\ninput[type=date], select {\n    width: 60%;\n}\n\n.edit-item-form {\n    display: grid;\n}\n\n.add-item-form {\n    display: none;\n\n}\n\n.add-item-form, .edit-item-form {\n    margin: auto;\n    padding: 150px;\n    padding-bottom: 100px;\n    position: absolute;\n    top: 40px;\n    justify-self: center;\n    border-radius: 40px;\n    grid-template-rows: repeat(5, 1fr);\n    grid-gap: 15px;\n    -webkit-animation: fadeIn 1s;\n    animation: fadeIn 1s;\n    background-color: rgba(241, 235, 245);\n    box-shadow: -10px 10px 20px grey;\n}\n\n.add-item-btn, .edit-form-btn, .new-project-btn {\n    padding: 10px;\n    border-radius: 30px;\n    background: rgba(0, 255, 255, .5);\n    font-size: large;\n    border: none;\n\n}\n\n.new-project-btn {\n    padding: 20px;\n}\n.add-item-btn:hover, .edit-form-btn:hover, .new-project-btn:hover {\n    background: rgba(0, 255, 255, .7);\n}\n\n.close-popup {\n    border: none;\n    align-self: start;\n    justify-self: end;\n    position: absolute;\n    border-radius: 50%;\n    right: 20px;\n    top: 20px;\n}\n.close-popup:hover {\n    color:grey;\n}\n\n.item-expand {\n    margin: auto;\n    padding: 100px 150px;\n    width: 100%;\n    position: absolute;\n    top: 70px;\n    justify-self: center;\n    display: grid;\n    grid-template-columns: 3fr 5fr 2fr 1fr;\n    justify-content: space-between;\n    grid-gap: 23px;\n    -webkit-animation: fadeIn 1s;\n    animation: fadeIn 1s;\n    background-color: rgba(241, 235, 245);\n    box-shadow: -10px 10px 20px grey;\n    border-radius: 40px;\n    font-size: large;\n\n\n}\n\n.item-section-wrapper div {\n    margin-top: 10px;\n}\n.item-section-wrapper label {\n    font-weight: bold;\n}\n.form-section-wrapper {\n    display: grid;\n    grid-template-columns: 1fr;\n}\n/* Add animation (fade in the popup) */\n@-webkit-keyframes fadeIn {\n    from {opacity: 0;}\n    to {opacity: 1;}\n  }\n  \n  @keyframes fadeIn {\n    from {opacity: 0;}\n    to {opacity:1 ;}\n  }\n\n\n.item-form label {\n    margin-top: 10px;\n    margin-bottom: 5px;\n}\n/* .item-form  input[type=date] {\n} */\n.item-form select {\n    margin-bottom: 10px;\n}\n\n.projects {\n    align-self: start;\n\n}\n.projects h2 {\n    background: rgba(241, 235, 245, 0.7);\n    border-radius: 30px;\n    padding: 20px 40px;\n    font-size: 30px;\n    text-align: center;\n    margin-top: 0;\n    margin-bottom: 15px;\n    width: 50%;\n}\n\n.project {\n    margin: 10px 0px;\n    background: rgba(241, 235, 245, 0.5);\n    border-radius: 30px;\n    padding: 20px 30px;\n    width: fit-content;\n\n\n}\n.project:hover {\n    background: rgba(241, 235, 245, 0.7);\n\n}\n.list {\n    display: grid;\n    grid-template-columns: 1fr;\n    padding: 0;\n}\n.list-item {\n    margin: 0px 10px 20px 10px;\n    /* margin-bottom: 20px; */\n    display: grid;\n    align-items: center;\n    grid-gap: 20px;\n    grid-template-columns: 1fr 1fr 5fr 1fr 1fr;\n    justify-content: space-between;\n    padding: 30px;\n    background: rgba(241, 235, 245, 0.7);\n    border-radius: 30px;\n    animation: fadeIn 1s;\n    overflow: auto;\n}\n\n.list-item:hover {\n    background: rgba(241, 235, 245, 0.9);\n\n}\n.list-container {\n    overflow: auto;\n}\n\n@media (max-width: 1250px) {\n\n    .task-body {\n        text-align: center;\n        padding-left: 10px;\n    }\n\n\n    #content {\n        width: 90%;\n\n\n\n    }\n    .add-project-popup {\n        width: 45px;\n\n    }\n    .add-item-popup {\n        width: 45px;\n\n\n    }\n    .add-item-form {\n        padding-top: 50px;\n        padding-left: 20px;\n        padding-right: 20px;\n        padding-bottom: 20px;\n\n    }\n\n}\n@media (max-width: 750px) {\n    .new-project-form {\n        padding-left: 20px;\n        padding-right: 20px;\n        padding-bottom: 20px;\n    }\n    .list-name {\n        width: 80%;\n    }\n\n\n}\n\n@media (max-width: 700px)  {\n    #content {\n        grid-template-columns: 1fr;\n        padding: 5px;\n        margin: 10px;\n\n    }\n    .list-item {\n        margin-left: 0;\n        margin-right: 0;\n        grid-template-columns: 1fr 3fr;\n        align-items: start;\n    }\n    .priority-circle, .edit-btn, .expand-btn   {\n        display: none !important;\n    }\n    .task-body {\n        padding-top: 10px;\n        padding-bottom: 10px;\n    }\n    .projects {\n        margin-top: 50px;\n        order: 1;\n        text-align: center;\n    }\n    .projects h2 {\n        margin: auto;\n    }\n    .project {\n        display: inline-block;\n        margin-left: 3px;\n        margin-right: 3px;\n        margin-bottom: 0px;\n    }\n    .checkmark {\n        transform: scale(1.7) !important;\n        top: 10px !important;\n    }\n\n    .new-project-form input {\n        width: 90%;\n\n    }\n    .add-item-form input {\n        width: 90%;\n    }\n    \n}\n\n.edit-btn {\n    align-self: start;\n    justify-self: end;\n    border-radius: 10px;\n    padding: 10px;\n    border: none;\n    background:none;\n}\n.edit-btn:hover, .expand-btn:hover {\n    color:darkmagenta;\n}\n.expand-btn {\n    background: none;\n    border: none;\n}\n.check-container {\n    align-self: start;\n    display: block;\n    position: relative;\n    padding-left: 35px;\n    margin-bottom: 12px;\n    cursor: pointer;\n    font-size: 22px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    \n  }\n  \n  /* Hide the browser's default checkbox */\n  .check-container input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n  }\n  \n  /* Create a custom checkbox */\n  .checkmark {\n    position: absolute;\n    left: 10px;\n    top: 20px;\n    height: 25px;\n    width: 25px;\n    background-color: #eee;\n    transform: scale(2.3);\n    border-radius: 15px;\n    border: 3px solid darkcyan;\n\n  }\n  \n  /* On mouse-over, add a grey background color */\n  .check-container:hover input ~ .checkmark {\n    background-color: #ccc;\n  }\n  \n  /* When the checkbox is checked, add a blue background */\n  .check-container input:checked ~ .checkmark {\n    background-color: #eee;\n  }\n\n.checkmark:after {\n    content: \"\";\n    position: absolute;\n    display: none;\n  }\n  \n  /* Show the checkmark when checked */\n  .check-container input:checked ~ .checkmark:after {\n    display: block;\n  }\n  \n  /* Style the checkmark/indicator */\n  .check-container .checkmark:after {\n    left: 9px;\n    top: 5px;\n    width: 5px;\n    height: 10px;\n    border: solid #02f70b;\n    border-width: 0 3px 3px 0;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n  }\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html, body {\n    min-height: 100%;\n}\n* {\n    /* border: 1px solid red; */\n    color: #434544;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    font-weight: 100;\n    \n}\nbody {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    background: linear-gradient(to bottom left, cyan, magenta);\n    background-size: cover; \n    background-position: bottom;\n    background-repeat: no-repeat;   \n}\nnav {\n    /* background: linear-gradient(to left, cyan, magenta); */\n    padding: 20px;\n    width: 200px;\n    margin: auto;\n    margin-top: 50px;\n    border-radius: 50px;\n    background: rgba(241, 235, 245, 0.4);\n    text-align: center;\n\n}\n\nnav div {\n    display: inline-block;\n    background: rgba(241, 235, 245, 0.6);\n    padding: 20px;\n    border-radius: 50px;\n    width: 45px;\n    text-align: center;\n\n\n\n}\n\nnav div:hover {\n    background: rgba(241, 235, 245, 0.8);\n\n}\n\n#content {\n    margin: auto;\n    margin-top: 30px;\n    width: 70%;\n\n    padding: 20px;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    position: relative;\n    background: rgba(241, 235, 245, 0.5);\n    border-radius: 40px;\n}\n\nfooter {\n    height: 500px;\n    margin-top: 300px;\n}\n.list-name {\n    text-align: center;\n    background: rgba(241, 235, 245, 0.6);\n    border-radius: 30px;\n    width: 50%;\n    margin: auto;\n    padding: 20px;\n}\n\n.new-project-form {\n    overflow: auto;\n    width: 70%;\n    padding: 100px;\n    position: absolute;\n    display: none;\n    top: 70px;\n    justify-self: center;\n    border-radius: 40px;\n    grid-template-rows: 1fr 1fr;\n    align-content: space-around;\n\n    align-content: center;\n    grid-gap: 15px;\n    -webkit-animation: fadeIn 1s;\n    animation: fadeIn 1s;\n    background-color: rgba(241, 235, 245);\n    box-shadow: -10px 10px 20px grey;\n\n\n}\n\ninput, select {\n    border-radius: 20px;\n    height: 50px;\n    padding-left: 20px;\n    font-size: 30px;\n    border: 1px solid grey;\n}\ninput[type=date], select {\n    width: 60%;\n}\n\n.edit-item-form {\n    display: grid;\n}\n\n.add-item-form {\n    display: none;\n\n}\n\n.add-item-form, .edit-item-form {\n    margin: auto;\n    padding: 150px;\n    padding-bottom: 100px;\n    position: absolute;\n    top: 40px;\n    justify-self: center;\n    border-radius: 40px;\n    grid-template-rows: repeat(5, 1fr);\n    grid-gap: 15px;\n    -webkit-animation: fadeIn 1s;\n    animation: fadeIn 1s;\n    background-color: rgba(241, 235, 245);\n    box-shadow: -10px 10px 20px grey;\n}\n\n.add-item-btn, .edit-form-btn, .new-project-btn {\n    padding: 10px;\n    border-radius: 30px;\n    background: rgba(0, 255, 255, .5);\n    font-size: large;\n    border: none;\n\n}\n\n.new-project-btn {\n    padding: 20px;\n}\n.add-item-btn:hover, .edit-form-btn:hover, .new-project-btn:hover {\n    background: rgba(0, 255, 255, .7);\n}\n\n.close-popup {\n    border: none;\n    align-self: start;\n    justify-self: end;\n    position: absolute;\n    border-radius: 50%;\n    right: 20px;\n    top: 20px;\n}\n.close-popup:hover {\n    color:grey;\n}\n\n.item-expand {\n    margin: auto;\n    padding: 100px 150px;\n    width: 100%;\n    position: absolute;\n    top: 70px;\n    justify-self: center;\n    display: grid;\n    grid-template-columns: 3fr 5fr 2fr 1fr;\n    justify-content: space-between;\n    grid-gap: 23px;\n    -webkit-animation: fadeIn 1s;\n    animation: fadeIn 1s;\n    background-color: rgba(241, 235, 245);\n    box-shadow: -10px 10px 20px grey;\n    border-radius: 40px;\n    font-size: large;\n\n\n}\n\n.item-section-wrapper div {\n    margin-top: 10px;\n}\n.item-section-wrapper label {\n    font-weight: bold;\n}\n.form-section-wrapper {\n    display: grid;\n    grid-template-columns: 1fr;\n}\n/* Add animation (fade in the popup) */\n@-webkit-keyframes fadeIn {\n    from {opacity: 0;}\n    to {opacity: 1;}\n  }\n  \n  @keyframes fadeIn {\n    from {opacity: 0;}\n    to {opacity:1 ;}\n  }\n\n\n.item-form label {\n    margin-top: 10px;\n    margin-bottom: 5px;\n}\n/* .item-form  input[type=date] {\n} */\n.item-form select {\n    margin-bottom: 10px;\n}\n\n.projects {\n    align-self: start;\n\n}\n.projects h2 {\n    background: rgba(241, 235, 245, 0.7);\n    border-radius: 30px;\n    padding: 20px 40px;\n    font-size: 30px;\n    text-align: center;\n    margin-top: 0;\n    margin-bottom: 15px;\n    width: 50%;\n}\n\n.project {\n    margin: 10px 0px;\n    background: rgba(241, 235, 245, 0.5);\n    border-radius: 30px;\n    padding: 20px 30px;\n    width: fit-content;\n\n\n}\n.project:hover {\n    background: rgba(241, 235, 245, 0.7);\n\n}\n.list {\n    display: grid;\n    grid-template-columns: 1fr;\n    padding: 0;\n}\n.list-item {\n    margin: 0px 10px 20px 10px;\n    /* margin-bottom: 20px; */\n    display: grid;\n    align-items: center;\n    grid-gap: 20px;\n    grid-template-columns: 1fr 1fr 5fr 1fr 1fr;\n    justify-content: space-between;\n    padding: 30px;\n    background: rgba(241, 235, 245, 0.7);\n    border-radius: 30px;\n    animation: fadeIn 1s;\n    overflow: auto;\n}\n\n.list-item:hover {\n    background: rgba(241, 235, 245, 0.9);\n\n}\n.list-container {\n    overflow: auto;\n}\n\n@media (max-width: 1250px) {\n\n    .task-body {\n        text-align: center;\n        padding-left: 10px;\n    }\n\n\n    #content {\n        width: 90%;\n\n\n\n    }\n    .add-project-popup {\n        width: 45px;\n\n    }\n    .add-item-popup {\n        width: 45px;\n\n\n    }\n    .add-item-form {\n        padding-top: 50px;\n        padding-left: 20px;\n        padding-right: 20px;\n        padding-bottom: 20px;\n\n    }\n\n}\n@media (max-width: 750px) {\n    .new-project-form {\n        padding-left: 20px;\n        padding-right: 20px;\n        padding-bottom: 20px;\n    }\n    .list-name {\n        width: 80%;\n    }\n\n\n}\n\n@media (max-width: 700px)  {\n    #content {\n        grid-template-columns: 1fr;\n        padding: 5px;\n        margin: 10px;\n\n    }\n    .list-item {\n        margin-left: 0;\n        margin-right: 0;\n        grid-template-columns: 1fr 3fr;\n        align-items: start;\n    }\n    .priority-circle, .edit-btn, .expand-btn   {\n        display: none !important;\n    }\n    .task-body {\n        padding-top: 10px;\n        padding-bottom: 10px;\n    }\n    .projects {\n        margin-top: 50px;\n        order: 1;\n        text-align: center;\n    }\n    .projects h2 {\n        margin: auto;\n    }\n    .project {\n        display: inline-block;\n        margin-left: 3px;\n        margin-right: 3px;\n        margin-bottom: 0px;\n    }\n    .checkmark {\n        transform: scale(1.7) !important;\n        top: 10px !important;\n    }\n\n    .new-project-form input {\n        width: 90%;\n\n    }\n    .add-item-form input {\n        width: 90%;\n    }\n    \n}\n\n.edit-btn {\n    align-self: start;\n    justify-self: end;\n    border-radius: 10px;\n    padding: 10px;\n    border: none;\n    background:none;\n}\n.edit-btn:hover, .expand-btn:hover {\n    color:darkmagenta;\n}\n.expand-btn {\n    background: none;\n    border: none;\n}\n.check-container {\n    align-self: start;\n    display: block;\n    position: relative;\n    padding-left: 35px;\n    margin-bottom: 12px;\n    cursor: pointer;\n    font-size: 22px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    \n  }\n  \n  /* Hide the browser's default checkbox */\n  .check-container input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n  }\n  \n  /* Create a custom checkbox */\n  .checkmark {\n    position: absolute;\n    left: 10px;\n    top: 20px;\n    height: 25px;\n    width: 25px;\n    background-color: #eee;\n    transform: scale(2.3);\n    border-radius: 15px;\n    border: 3px solid darkcyan;\n\n  }\n  \n  /* On mouse-over, add a grey background color */\n  .check-container:hover input ~ .checkmark {\n    background-color: #ccc;\n  }\n  \n  /* When the checkbox is checked, add a blue background */\n  .check-container input:checked ~ .checkmark {\n    background-color: #eee;\n  }\n\n.checkmark:after {\n    content: \"\";\n    position: absolute;\n    display: none;\n  }\n  \n  /* Show the checkmark when checked */\n  .check-container input:checked ~ .checkmark:after {\n    display: block;\n  }\n  \n  /* Style the checkmark/indicator */\n  .check-container .checkmark:after {\n    left: 9px;\n    top: 5px;\n    width: 5px;\n    height: 10px;\n    border: solid #02f70b;\n    border-width: 0 3px 3px 0;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n  }\n\n"],"sourceRoot":""}]);
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
    input.required = "true";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxlQUFlLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksWUFBWSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsZUFBZSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGVBQWUsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLFlBQVksTUFBTSxvQkFBb0IscUJBQXFCLE9BQU8sS0FBSyxvQkFBb0IscUJBQXFCLFFBQVEsS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsZUFBZSxNQUFNLEtBQUssYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxhQUFhLE1BQU0sS0FBSyxVQUFVLE9BQU8sTUFBTSxLQUFLLFlBQVksYUFBYSxRQUFRLEtBQUssYUFBYSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssWUFBWSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLE9BQU8sTUFBTSxLQUFLLEtBQUssWUFBWSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxjQUFjLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxZQUFZLE1BQU0sVUFBVSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFB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RUFBZSxRQUFROzs7Ozs7VUNYdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTm1DO0FBQ2Q7QUFDc0I7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQywyREFBVztBQUM1QztBQUNBLG9DQUFvQywyREFBVzs7O0FBRy9DO0FBQ0EsSUFBSSx1REFBTzs7QUFFWCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL3NyYy9hZGRJdGVtRm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9zcmMvY29sbGFwc2VJdGVtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL3NyYy9jcmVhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL3NyYy9kZWxldGVJdGVtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL3NyYy9kaXNwbGF5Rm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9zcmMvZGlzcGxheUl0ZW1NaW4uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vc3JjL2Rpc3BsYXlMaXN0LmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL3NyYy9kaXNwbGF5UHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vc3JjL2VkaXRJdGVtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL3NyYy9lZGl0SXRlbUZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vc3JjL2V4cGFuZEl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vc3JjL2hvbWVEb20uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vc3JjL2l0ZW1Gb3JtUGFydGlhbC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9zcmMvbmV3UHJvamVjdEZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vc3JjL3NhdmVJdGVtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuKiB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG4gICAgY29sb3I6ICM0MzQ1NDQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgXFxufVxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgY3lhbiwgbWFnZW50YSk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7ICAgXFxufVxcbm5hdiB7XFxuICAgIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCBjeWFuLCBtYWdlbnRhKTsgKi9cXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyMzUsIDI0NSwgMC40KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbn1cXG5cXG5uYXYgZGl2IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MSwgMjM1LCAyNDUsIDAuNik7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIHdpZHRoOiA0NXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuXFxuXFxufVxcblxcbm5hdiBkaXY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MSwgMjM1LCAyNDUsIDAuOCk7XFxuXFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICB3aWR0aDogNzAlO1xcblxcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDEsIDIzNSwgMjQ1LCAwLjUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAzMDBweDtcXG59XFxuLmxpc3QtbmFtZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDEsIDIzNSwgMjQ1LCAwLjYpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5uZXctcHJvamVjdC1mb3JtIHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIHBhZGRpbmc6IDEwMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHRvcDogNzBweDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdyaWQtZ2FwOiAxNXB4O1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDFzO1xcbiAgICBhbmltYXRpb246IGZhZGVJbiAxcztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDIzNSwgMjQ1KTtcXG4gICAgYm94LXNoYWRvdzogLTEwcHggMTBweCAyMHB4IGdyZXk7XFxuXFxuXFxufVxcblxcbmlucHV0LCBzZWxlY3Qge1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbn1cXG5pbnB1dFt0eXBlPWRhdGVdLCBzZWxlY3Qge1xcbiAgICB3aWR0aDogNjAlO1xcbn1cXG5cXG4uZWRpdC1pdGVtLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uYWRkLWl0ZW0tZm9ybSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuXFxufVxcblxcbi5hZGQtaXRlbS1mb3JtLCAuZWRpdC1pdGVtLWZvcm0ge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDE1MHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA0MHB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgZ3JpZC1nYXA6IDE1cHg7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gMXM7XFxuICAgIGFuaW1hdGlvbjogZmFkZUluIDFzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjM1LCAyNDUpO1xcbiAgICBib3gtc2hhZG93OiAtMTBweCAxMHB4IDIwcHggZ3JleTtcXG59XFxuXFxuLmFkZC1pdGVtLWJ0biwgLmVkaXQtZm9ybS1idG4sIC5uZXctcHJvamVjdC1idG4ge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDI1NSwgMjU1LCAuNSk7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIGJvcmRlcjogbm9uZTtcXG5cXG59XFxuXFxuLm5ldy1wcm9qZWN0LWJ0biB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcbi5hZGQtaXRlbS1idG46aG92ZXIsIC5lZGl0LWZvcm0tYnRuOmhvdmVyLCAubmV3LXByb2plY3QtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAyNTUsIDI1NSwgLjcpO1xcbn1cXG5cXG4uY2xvc2UtcG9wdXAge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHJpZ2h0OiAyMHB4O1xcbiAgICB0b3A6IDIwcHg7XFxufVxcbi5jbG9zZS1wb3B1cDpob3ZlciB7XFxuICAgIGNvbG9yOmdyZXk7XFxufVxcblxcbi5pdGVtLWV4cGFuZCB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcGFkZGluZzogMTAwcHggMTUwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNzBweDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDVmciAyZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdyaWQtZ2FwOiAyM3B4O1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDFzO1xcbiAgICBhbmltYXRpb246IGZhZGVJbiAxcztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDIzNSwgMjQ1KTtcXG4gICAgYm94LXNoYWRvdzogLTEwcHggMTBweCAyMHB4IGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuXFxuXFxufVxcblxcbi5pdGVtLXNlY3Rpb24td3JhcHBlciBkaXYge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG4uaXRlbS1zZWN0aW9uLXdyYXBwZXIgbGFiZWwge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmZvcm0tc2VjdGlvbi13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxufVxcbi8qIEFkZCBhbmltYXRpb24gKGZhZGUgaW4gdGhlIHBvcHVwKSAqL1xcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICBmcm9tIHtvcGFjaXR5OiAwO31cXG4gICAgdG8ge29wYWNpdHk6IDE7fVxcbiAgfVxcbiAgXFxuICBAa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAgIGZyb20ge29wYWNpdHk6IDA7fVxcbiAgICB0byB7b3BhY2l0eToxIDt9XFxuICB9XFxuXFxuXFxuLml0ZW0tZm9ybSBsYWJlbCB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuLyogLml0ZW0tZm9ybSAgaW5wdXRbdHlwZT1kYXRlXSB7XFxufSAqL1xcbi5pdGVtLWZvcm0gc2VsZWN0IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuXFxufVxcbi5wcm9qZWN0cyBoMiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyMzUsIDI0NSwgMC43KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBtYXJnaW46IDEwcHggMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MSwgMjM1LCAyNDUsIDAuNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcblxcblxcbn1cXG4ucHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyMzUsIDI0NSwgMC43KTtcXG5cXG59XFxuLmxpc3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuLmxpc3QtaXRlbSB7XFxuICAgIG1hcmdpbjogMHB4IDEwcHggMjBweCAxMHB4O1xcbiAgICAvKiBtYXJnaW4tYm90dG9tOiAyMHB4OyAqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLWdhcDogMjBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDVmciAxZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyMzUsIDI0NSwgMC43KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMXM7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4ubGlzdC1pdGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDEsIDIzNSwgMjQ1LCAwLjkpO1xcblxcbn1cXG4ubGlzdC1jb250YWluZXIge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEyNTBweCkge1xcblxcbiAgICAudGFzay1ib2R5IHtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgfVxcblxcblxcbiAgICAjY29udGVudCB7XFxuICAgICAgICB3aWR0aDogOTAlO1xcblxcblxcblxcbiAgICB9XFxuICAgIC5hZGQtcHJvamVjdC1wb3B1cCB7XFxuICAgICAgICB3aWR0aDogNDVweDtcXG5cXG4gICAgfVxcbiAgICAuYWRkLWl0ZW0tcG9wdXAge1xcbiAgICAgICAgd2lkdGg6IDQ1cHg7XFxuXFxuXFxuICAgIH1cXG4gICAgLmFkZC1pdGVtLWZvcm0ge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuXFxuICAgIH1cXG5cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxuICAgIC5uZXctcHJvamVjdC1mb3JtIHtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gICAgfVxcbiAgICAubGlzdC1uYW1lIHtcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxuICAgIH1cXG5cXG5cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSAge1xcbiAgICAjY29udGVudCB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICAgIG1hcmdpbjogMTBweDtcXG5cXG4gICAgfVxcbiAgICAubGlzdC1pdGVtIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICB9XFxuICAgIC5wcmlvcml0eS1jaXJjbGUsIC5lZGl0LWJ0biwgLmV4cGFuZC1idG4gICB7XFxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxuICAgIH1cXG4gICAgLnRhc2stYm9keSB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICB9XFxuICAgIC5wcm9qZWN0cyB7XFxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICAgICAgb3JkZXI6IDE7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLnByb2plY3RzIGgyIHtcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgfVxcbiAgICAucHJvamVjdCB7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBtYXJnaW4tbGVmdDogM3B4O1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICAgIH1cXG4gICAgLmNoZWNrbWFyayB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNykgIWltcG9ydGFudDtcXG4gICAgICAgIHRvcDogMTBweCAhaW1wb3J0YW50O1xcbiAgICB9XFxuXFxuICAgIC5uZXctcHJvamVjdC1mb3JtIGlucHV0IHtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuXFxuICAgIH1cXG4gICAgLmFkZC1pdGVtLWZvcm0gaW5wdXQge1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgfVxcbiAgICBcXG59XFxuXFxuLmVkaXQtYnRuIHtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6bm9uZTtcXG59XFxuLmVkaXQtYnRuOmhvdmVyLCAuZXhwYW5kLWJ0bjpob3ZlciB7XFxuICAgIGNvbG9yOmRhcmttYWdlbnRhO1xcbn1cXG4uZXhwYW5kLWJ0biB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuLmNoZWNrLWNvbnRhaW5lciB7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBcXG4gIH1cXG4gIFxcbiAgLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgY2hlY2tib3ggKi9cXG4gIC5jaGVjay1jb250YWluZXIgaW5wdXQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICB3aWR0aDogMDtcXG4gIH1cXG4gIFxcbiAgLyogQ3JlYXRlIGEgY3VzdG9tIGNoZWNrYm94ICovXFxuICAuY2hlY2ttYXJrIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAxMHB4O1xcbiAgICB0b3A6IDIwcHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMi4zKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgZGFya2N5YW47XFxuXFxuICB9XFxuICBcXG4gIC8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciAqL1xcbiAgLmNoZWNrLWNvbnRhaW5lcjpob3ZlciBpbnB1dCB+IC5jaGVja21hcmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbiAgfVxcbiAgXFxuICAvKiBXaGVuIHRoZSBjaGVja2JveCBpcyBjaGVja2VkLCBhZGQgYSBibHVlIGJhY2tncm91bmQgKi9cXG4gIC5jaGVjay1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgfVxcblxcbi5jaGVja21hcms6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgXFxuICAvKiBTaG93IHRoZSBjaGVja21hcmsgd2hlbiBjaGVja2VkICovXFxuICAuY2hlY2stY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuICBcXG4gIC8qIFN0eWxlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yICovXFxuICAuY2hlY2stY29udGFpbmVyIC5jaGVja21hcms6YWZ0ZXIge1xcbiAgICBsZWZ0OiA5cHg7XFxuICAgIHRvcDogNXB4O1xcbiAgICB3aWR0aDogNXB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlcjogc29saWQgIzAyZjcwYjtcXG4gICAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIH1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsY0FBYztJQUNkLHdFQUF3RTtJQUN4RSxnQkFBZ0I7O0FBRXBCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7SUFDVCwwREFBMEQ7SUFDMUQsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLHlEQUF5RDtJQUN6RCxhQUFhO0lBQ2IsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxrQkFBa0I7Ozs7QUFJdEI7O0FBRUE7SUFDSSxvQ0FBb0M7O0FBRXhDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixVQUFVOztJQUVWLGFBQWE7SUFDYixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFVBQVU7SUFDVixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixTQUFTO0lB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O0lBQ3RCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsMEJBQTBCOztFQUU1Qjs7RUFFQSwrQ0FBK0M7RUFDL0M7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUEsd0RBQXdEO0VBQ3hEO0lBQ0Usc0JBQXNCO0VBQ3hCOztBQUVGO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0VBQ2Y7O0VBRUEsb0NBQW9DO0VBQ3BDO0lBQ0UsY0FBYztFQUNoQjs7RUFFQSxrQ0FBa0M7RUFDbEM7SUFDRSxTQUFTO0lBQ1QsUUFBUTtJQUNSLFVBQVU7SUFDVixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixnQ0FBZ0M7SUFDaEMsNEJBQTRCO0lBQzVCLHdCQUF3QjtFQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLCBib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuKiB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG4gICAgY29sb3I6ICM0MzQ1NDQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgXFxufVxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgY3lhbiwgbWFnZW50YSk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7ICAgXFxufVxcbm5hdiB7XFxuICAgIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCBjeWFuLCBtYWdlbnRhKTsgKi9cXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyMzUsIDI0NSwgMC40KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbn1cXG5cXG5uYXYgZGl2IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MSwgMjM1LCAyNDUsIDAuNik7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIHdpZHRoOiA0NXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuXFxuXFxufVxcblxcbm5hdiBkaXY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MSwgMjM1LCAyNDUsIDAuOCk7XFxuXFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICB3aWR0aDogNzAlO1xcblxcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDEsIDIzNSwgMjQ1LCAwLjUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAzMDBweDtcXG59XFxuLmxpc3QtbmFtZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDEsIDIzNSwgMjQ1LCAwLjYpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5uZXctcHJvamVjdC1mb3JtIHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIHBhZGRpbmc6IDEwMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHRvcDogNzBweDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdyaWQtZ2FwOiAxNXB4O1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDFzO1xcbiAgICBhbmltYXRpb246IGZhZGVJbiAxcztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDIzNSwgMjQ1KTtcXG4gICAgYm94LXNoYWRvdzogLTEwcHggMTBweCAyMHB4IGdyZXk7XFxuXFxuXFxufVxcblxcbmlucHV0LCBzZWxlY3Qge1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbn1cXG5pbnB1dFt0eXBlPWRhdGVdLCBzZWxlY3Qge1xcbiAgICB3aWR0aDogNjAlO1xcbn1cXG5cXG4uZWRpdC1pdGVtLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uYWRkLWl0ZW0tZm9ybSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuXFxufVxcblxcbi5hZGQtaXRlbS1mb3JtLCAuZWRpdC1pdGVtLWZvcm0ge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDE1MHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA0MHB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgZ3JpZC1nYXA6IDE1cHg7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gMXM7XFxuICAgIGFuaW1hdGlvbjogZmFkZUluIDFzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjM1LCAyNDUpO1xcbiAgICBib3gtc2hhZG93OiAtMTBweCAxMHB4IDIwcHggZ3JleTtcXG59XFxuXFxuLmFkZC1pdGVtLWJ0biwgLmVkaXQtZm9ybS1idG4sIC5uZXctcHJvamVjdC1idG4ge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDI1NSwgMjU1LCAuNSk7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIGJvcmRlcjogbm9uZTtcXG5cXG59XFxuXFxuLm5ldy1wcm9qZWN0LWJ0biB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcbi5hZGQtaXRlbS1idG46aG92ZXIsIC5lZGl0LWZvcm0tYnRuOmhvdmVyLCAubmV3LXByb2plY3QtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAyNTUsIDI1NSwgLjcpO1xcbn1cXG5cXG4uY2xvc2UtcG9wdXAge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHJpZ2h0OiAyMHB4O1xcbiAgICB0b3A6IDIwcHg7XFxufVxcbi5jbG9zZS1wb3B1cDpob3ZlciB7XFxuICAgIGNvbG9yOmdyZXk7XFxufVxcblxcbi5pdGVtLWV4cGFuZCB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcGFkZGluZzogMTAwcHggMTUwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNzBweDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDVmciAyZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdyaWQtZ2FwOiAyM3B4O1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDFzO1xcbiAgICBhbmltYXRpb246IGZhZGVJbiAxcztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDIzNSwgMjQ1KTtcXG4gICAgYm94LXNoYWRvdzogLTEwcHggMTBweCAyMHB4IGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuXFxuXFxufVxcblxcbi5pdGVtLXNlY3Rpb24td3JhcHBlciBkaXYge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG4uaXRlbS1zZWN0aW9uLXdyYXBwZXIgbGFiZWwge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmZvcm0tc2VjdGlvbi13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxufVxcbi8qIEFkZCBhbmltYXRpb24gKGZhZGUgaW4gdGhlIHBvcHVwKSAqL1xcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICBmcm9tIHtvcGFjaXR5OiAwO31cXG4gICAgdG8ge29wYWNpdHk6IDE7fVxcbiAgfVxcbiAgXFxuICBAa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAgIGZyb20ge29wYWNpdHk6IDA7fVxcbiAgICB0byB7b3BhY2l0eToxIDt9XFxuICB9XFxuXFxuXFxuLml0ZW0tZm9ybSBsYWJlbCB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuLyogLml0ZW0tZm9ybSAgaW5wdXRbdHlwZT1kYXRlXSB7XFxufSAqL1xcbi5pdGVtLWZvcm0gc2VsZWN0IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuXFxufVxcbi5wcm9qZWN0cyBoMiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyMzUsIDI0NSwgMC43KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBtYXJnaW46IDEwcHggMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MSwgMjM1LCAyNDUsIDAuNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcblxcblxcbn1cXG4ucHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyMzUsIDI0NSwgMC43KTtcXG5cXG59XFxuLmxpc3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuLmxpc3QtaXRlbSB7XFxuICAgIG1hcmdpbjogMHB4IDEwcHggMjBweCAxMHB4O1xcbiAgICAvKiBtYXJnaW4tYm90dG9tOiAyMHB4OyAqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLWdhcDogMjBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDVmciAxZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyMzUsIDI0NSwgMC43KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMXM7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4ubGlzdC1pdGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDEsIDIzNSwgMjQ1LCAwLjkpO1xcblxcbn1cXG4ubGlzdC1jb250YWluZXIge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEyNTBweCkge1xcblxcbiAgICAudGFzay1ib2R5IHtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgfVxcblxcblxcbiAgICAjY29udGVudCB7XFxuICAgICAgICB3aWR0aDogOTAlO1xcblxcblxcblxcbiAgICB9XFxuICAgIC5hZGQtcHJvamVjdC1wb3B1cCB7XFxuICAgICAgICB3aWR0aDogNDVweDtcXG5cXG4gICAgfVxcbiAgICAuYWRkLWl0ZW0tcG9wdXAge1xcbiAgICAgICAgd2lkdGg6IDQ1cHg7XFxuXFxuXFxuICAgIH1cXG4gICAgLmFkZC1pdGVtLWZvcm0ge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuXFxuICAgIH1cXG5cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxuICAgIC5uZXctcHJvamVjdC1mb3JtIHtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gICAgfVxcbiAgICAubGlzdC1uYW1lIHtcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxuICAgIH1cXG5cXG5cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSAge1xcbiAgICAjY29udGVudCB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICAgIG1hcmdpbjogMTBweDtcXG5cXG4gICAgfVxcbiAgICAubGlzdC1pdGVtIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICB9XFxuICAgIC5wcmlvcml0eS1jaXJjbGUsIC5lZGl0LWJ0biwgLmV4cGFuZC1idG4gICB7XFxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxuICAgIH1cXG4gICAgLnRhc2stYm9keSB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICB9XFxuICAgIC5wcm9qZWN0cyB7XFxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICAgICAgb3JkZXI6IDE7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLnByb2plY3RzIGgyIHtcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgfVxcbiAgICAucHJvamVjdCB7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBtYXJnaW4tbGVmdDogM3B4O1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICAgIH1cXG4gICAgLmNoZWNrbWFyayB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNykgIWltcG9ydGFudDtcXG4gICAgICAgIHRvcDogMTBweCAhaW1wb3J0YW50O1xcbiAgICB9XFxuXFxuICAgIC5uZXctcHJvamVjdC1mb3JtIGlucHV0IHtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuXFxuICAgIH1cXG4gICAgLmFkZC1pdGVtLWZvcm0gaW5wdXQge1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgfVxcbiAgICBcXG59XFxuXFxuLmVkaXQtYnRuIHtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6bm9uZTtcXG59XFxuLmVkaXQtYnRuOmhvdmVyLCAuZXhwYW5kLWJ0bjpob3ZlciB7XFxuICAgIGNvbG9yOmRhcmttYWdlbnRhO1xcbn1cXG4uZXhwYW5kLWJ0biB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuLmNoZWNrLWNvbnRhaW5lciB7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBcXG4gIH1cXG4gIFxcbiAgLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgY2hlY2tib3ggKi9cXG4gIC5jaGVjay1jb250YWluZXIgaW5wdXQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICB3aWR0aDogMDtcXG4gIH1cXG4gIFxcbiAgLyogQ3JlYXRlIGEgY3VzdG9tIGNoZWNrYm94ICovXFxuICAuY2hlY2ttYXJrIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAxMHB4O1xcbiAgICB0b3A6IDIwcHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMi4zKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgZGFya2N5YW47XFxuXFxuICB9XFxuICBcXG4gIC8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciAqL1xcbiAgLmNoZWNrLWNvbnRhaW5lcjpob3ZlciBpbnB1dCB+IC5jaGVja21hcmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbiAgfVxcbiAgXFxuICAvKiBXaGVuIHRoZSBjaGVja2JveCBpcyBjaGVja2VkLCBhZGQgYSBibHVlIGJhY2tncm91bmQgKi9cXG4gIC5jaGVjay1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgfVxcblxcbi5jaGVja21hcms6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgXFxuICAvKiBTaG93IHRoZSBjaGVja21hcmsgd2hlbiBjaGVja2VkICovXFxuICAuY2hlY2stY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuICBcXG4gIC8qIFN0eWxlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yICovXFxuICAuY2hlY2stY29udGFpbmVyIC5jaGVja21hcms6YWZ0ZXIge1xcbiAgICBsZWZ0OiA5cHg7XFxuICAgIHRvcDogNXB4O1xcbiAgICB3aWR0aDogNXB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlcjogc29saWQgIzAyZjcwYjtcXG4gICAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIH1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBzYXZlSXRlbSBmcm9tIFwiLi9zYXZlSXRlbS5qc1wiO1xuaW1wb3J0IGl0ZW1Gb3JtUGFydGlhbCBmcm9tIFwiLi9pdGVtRm9ybVBhcnRpYWwuanNcIjtcbmltcG9ydCBkaXNwbGF5Rm9ybUNvbnRyb2xsZXIgZnJvbSBcIi4vZGlzcGxheUZvcm0uanNcIjtcbmltcG9ydCBkaXNwbGF5TGlzdCBmcm9tIFwiLi9kaXNwbGF5TGlzdC5qc1wiO1xuXG5jb25zdCBhZGRJdGVtRm9ybSA9IChsaXN0KSA9PiB7XG4gICAgY29uc3QgcGFydGlhbCA9IGl0ZW1Gb3JtUGFydGlhbCgnYWRkJyk7XG4gICAgdmFyIGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLXRpdGxlJyk7XG4gICAgdmFyIGRlc2NyaXB0aW9uID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzay1kZXNjJyk7XG4gICAgdmFyIGR1ZURhdGUgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLWRhdGUnKTtcbiAgICB2YXIgcHJpb3JpdHkgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLXByaW9yaXR5Jyk7XG5cbiAgICBjb25zdCBhZGRJdGVtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkSXRlbUJ0bi5jbGFzc05hbWUgPSBcImFkZC1pdGVtLWJ0blwiO1xuICAgIGFkZEl0ZW1CdG4udGV4dENvbnRlbnQgPSBcIkFkZCBhIHRhc2tcIjtcbiAgICBhZGRJdGVtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IHtcbiAgICAgICAgICAgIHRpdGxlOiBpbnB1dC52YWx1ZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgICAgICAgIGR1ZURhdGU6IGR1ZURhdGUudmFsdWUsXG4gICAgICAgICAgICBwcmlvcml0eTogcHJpb3JpdHkudmFsdWVcbiAgICAgICAgfVxuICAgICAgICBzYXZlSXRlbShuZXdUYXNrLCBsaXN0LmlkKTtcbiAgICAgICAgZGlzcGxheUxpc3QobGlzdC5pZCk7XG4gICAgICAgIGRpc3BsYXlGb3JtQ29udHJvbGxlcigpO1xuICAgICAgICBcbiAgICB9KTtcbiAgICBjb25zdCBpdGVtRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtaXRlbS1mb3JtJyk7XG4gICAgaXRlbUZvcm0uYXBwZW5kQ2hpbGQoYWRkSXRlbUJ0bik7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgYWRkSXRlbUZvcm07IiwiaW1wb3J0IGV4cGFuZEl0ZW0gZnJvbSBcIi4vZXhwYW5kSXRlbVwiO1xuXG5jb25zdCBjb2xsYXBzZUl0ZW0gPSAodGFzaywgZXZlbnQpID0+IHtcbiAgICBjb25zb2xlLmxvZyh0YXNrKVxuICAgIHZhciBlbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gYHRpdGxlOiAke3Rhc2sudGl0bGV9YDtcbiAgICBlbGVtZW50Lm9uY2xpY2sgPSAoZXZlbnQpID0+IGV4cGFuZEl0ZW0odGFzaywgZXZlbnQpO1xuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29sbGFwc2VJdGVtOyIsImNvbnN0IGNyZWF0ZVByb2plY3QgPSAoaW5wdXQpID0+IHtcbiAgICBsZXQgdGFza3MgPSBbXVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGlucHV0LCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQcm9qZWN0OyIsImltcG9ydCBkaXNwbGF5TGlzdCBmcm9tIFwiLi9kaXNwbGF5TGlzdC5qc1wiO1xuY29uc3QgZGVsZXRlSXRlbSA9IChsaXN0LCBpbmRleCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICB2YXIgaXRlbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxpc3QpKTtcbiAgICBpdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGl0ZW1zID0gSlNPTi5zdHJpbmdpZnkoaXRlbXMpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGxpc3QsIGl0ZW1zKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge2Rpc3BsYXlMaXN0KGxpc3QpfSwgMTAwMCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlbGV0ZUl0ZW07IiwiaW1wb3J0IGVkaXRJdGVtRm9ybSBmcm9tIFwiLi9lZGl0SXRlbUZvcm1cIlxuXG5jb25zdCBkaXNwbGF5Rm9ybUNvbnRyb2xsZXIgPSAoYWN0aW9uKSA9PiB7XG4gICAgY29uc3QgaXRlbWZvcm0gPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1pdGVtLWZvcm0nKTtcbiAgICBjb25zdCBwcm9qZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdC1mb3JtJyk7XG4gICAgY29uc3QgZWRpdGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1pdGVtLWZvcm0nKTtcbiAgICBjb25zdCBpdGVtZXhwYW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW0tZXhwYW5kJyk7XG5cbiAgICBpZiAoZWRpdGZvcm0gIT09IG51bGwpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQtaXRlbS1mb3JtJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgZWxlbWVudC5vdXRlckhUTUwgPSBcIlwiOyBcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChpdGVtZXhwYW5kICE9PSBudWxsKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pdGVtLWV4cGFuZCcpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgIGVsZW1lbnQub3V0ZXJIVE1MID0gXCJcIjsgXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24gPT09ICdlZGl0Jykge1xuICAgICAgICBwcm9qZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGl0ZW1mb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgIH0gZWxzZSBpZiAoYWN0aW9uID09PSAnYWRkLWl0ZW0nKSB7XG4gICAgICAgIGl0ZW1mb3JtLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbiAgICAgICAgcHJvamZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgfSBlbHNlIGlmIChhY3Rpb24gPT09ICdhZGQtcHJvamVjdCcpIHtcbiAgICAgICAgcHJvamZvcm0uc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xuICAgICAgICBpdGVtZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJvamZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBpdGVtZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5Rm9ybUNvbnRyb2xsZXI7IiwiaW1wb3J0IGRlbGV0ZUl0ZW0gZnJvbSBcIi4vZGVsZXRlSXRlbS5qc1wiO1xuaW1wb3J0IGRpc3BsYXlGb3JtQ29udHJvbGxlciBmcm9tIFwiLi9kaXNwbGF5Rm9ybS5qc1wiO1xuaW1wb3J0IGVkaXRJdGVtRm9ybSBmcm9tIFwiLi9lZGl0SXRlbUZvcm0uanNcIjtcbmltcG9ydCBleHBhbmRJdGVtIGZyb20gXCIuL2V4cGFuZEl0ZW0uanNcIjtcblxuY29uc3QgZGlzcGxheUl0ZW1NaW4gPSAobGlzdE5hbWUsIGluZGV4KSA9PiB7XG4gICAgdmFyIGl0ZW1zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsaXN0TmFtZSkpO1xuICAgIGNvbnN0IHRhc2sgPSBpdGVtc1tpbmRleF07XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRleHQudGV4dENvbnRlbnQgPSBgJHt0YXNrLnRpdGxlfWA7XG4gICAgdGV4dC5jbGFzc05hbWUgPSBcInRhc2stYm9keVwiO1xuICAgIGRpdi5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICAgIGNvbnN0IHByaW9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJpb3IuY2xhc3NOYW1lID0gXCJmYXMgZmEtY2lyY2xlIHByaW9yaXR5LWNpcmNsZVwiO1xuICAgIGlmICh0YXNrLnByaW9yaXR5ID09PSBcIkhpZ2hcIikge1xuICAgICAgICBwcmlvci5zdHlsZS5jb2xvciA9IFwicmVkXCI7XG4gICAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09PSBcIk1pZFwiKSB7XG4gICAgICAgIHByaW9yLnN0eWxlLmNvbG9yID0gXCJkYXJrb3JhbmdlXCI7XG4gICAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09PSBcIkxvd1wiKSB7XG4gICAgICAgIHByaW9yLnN0eWxlLmNvbG9yID0gXCJncmVlblwiO1xuICAgIH1cbiAgICBcblxuICAgIGNvbnN0IGNoZWNrbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNoZWNrbGFiZWwuY2xhc3NOYW1lID0gXCJjaGVjay1jb250YWluZXJcIjtcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRlbGV0ZUJ0bi50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIGNoZWNrbGFiZWwuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgICAvLyBkZWxldGVCdG4udGV4dENvbnRlbnQgPSBcIkRFTEVURUQhXCI7XG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzcGFuLmNsYXNzTmFtZSA9IFwiY2hlY2ttYXJrXCI7XG4gICAgY2hlY2tsYWJlbC5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICBkZWxldGVCdG4ub25jbGljayA9ICgpID0+IGRlbGV0ZUl0ZW0obGlzdE5hbWUsIGluZGV4KTtcbiAgICBkaXYucHJlcGVuZChjaGVja2xhYmVsKTtcbiAgICBkaXYucHJlcGVuZChwcmlvcik7XG5cbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZWRpdEJ0bi5jbGFzc05hbWUgPSBcImVkaXQtYnRuIGZhcyBmYS1lZGl0IGZhLTJ4XCI7XG4gICAgZWRpdEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBkaXNwbGF5Rm9ybUNvbnRyb2xsZXIoJ2VkaXQnKTtcbiAgICAgICAgZWRpdEl0ZW1Gb3JtKGxpc3ROYW1lLCBpbmRleCk7XG4gICAgfTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG5cbiAgICBjb25zdCBleHBhbmRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBleHBhbmRCdG4uY2xhc3NOYW1lID0gXCJleHBhbmQtYnRuIGZhcyBmYS1lbGxpcHNpcy1oIGZhLTJ4XCI7XG4gICAgZGl2LmFwcGVuZENoaWxkKGV4cGFuZEJ0bik7XG4gICAgZXhwYW5kQnRuLm9uY2xpY2sgPSAoKSA9PiBleHBhbmRJdGVtKHRhc2spO1xuXG4gICAgcmV0dXJuIGRpdlxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUl0ZW1NaW47IiwiaW1wb3J0IGV4cGFuZEl0ZW0gZnJvbSBcIi4vZXhwYW5kSXRlbS5qc1wiO1xuaW1wb3J0IGRlbGV0ZUl0ZW0gZnJvbSBcIi4vZGVsZXRlSXRlbS5qc1wiO1xuaW1wb3J0IGVkaXRJdGVtRm9ybSBmcm9tIFwiLi9lZGl0SXRlbUZvcm0uanNcIjtcbmltcG9ydCBkaXNwbGF5SXRlbU1pbiBmcm9tIFwiLi9kaXNwbGF5SXRlbU1pbi5qc1wiO1xuXG5jb25zdCBkaXNwbGF5TGlzdCA9IChsaXN0TmFtZSkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0JykuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtbmFtZScpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBgJHtsaXN0TmFtZX0gVG8gRG8nc2A7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJyk7XG4gICAgbGlzdC5pZCA9IGxpc3ROYW1lO1xuICAgIGNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsaXN0TmFtZSkpO1xuICAgIGlmICh0YXNrcyAhPT0gbnVsbCkge1xuICAgICAgICB0YXNrcy5mb3JFYWNoKCAodGFzaywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkaXNwbGF5SXRlbU1pbihsaXN0TmFtZSwgaW5kZXgpO1xuICAgICAgICAgICAgaXRlbS5jbGFzc05hbWUgPSBcImxpc3QtaXRlbVwiO1xuICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgfSlcblxuICAgIH1cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlMaXN0OyIsImltcG9ydCBkaXNwbGF5TGlzdCBmcm9tIFwiLi9kaXNwbGF5TGlzdFwiO1xuXG5jb25zdCBkaXNwbGF5UHJvamVjdHMgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgdmFyIGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuICAgIGlmIChsaXN0ID09PSBudWxsKSB7XG4gICAgICAgIGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGlzdC5jbGFzc05hbWUgPSBcInByb2plY3RzXCI7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICBsaXN0LmlubmVySFRNTCA9IFwiXCI7XG4gICAgfVxuXG5cbiBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gbG9jYWxTdG9yYWdlLmtleShpKTtcbiAgICAgICAgICAgIGxpLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICAgICAgICAgIGxpLmNsYXNzTmFtZSA9IFwicHJvamVjdFwiO1xuICAgICAgICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheUxpc3QobmFtZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgIH1cbiAgICAgICAgbGlzdC5wcmVwZW5kKGhlYWRpbmcpO1xuICAgICAgICBjb250ZW50LnByZXBlbmQobGlzdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlQcm9qZWN0czsiLCJjb25zdCBlZGl0SXRlbSA9IChsaXN0LCBlZGl0ZWRJbmZvLCBpbmRleCkgPT4ge1xuICAgIHZhciBpdGVtcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obGlzdCkpO1xuICAgIGl0ZW1zW2luZGV4XSA9IGVkaXRlZEluZm87XG4gICAgaXRlbXMgPSBKU09OLnN0cmluZ2lmeShpdGVtcyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obGlzdCwgaXRlbXMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBlZGl0SXRlbTsiLCJpbXBvcnQgaXRlbUZvcm1QYXJ0aWFsIGZyb20gXCIuL2l0ZW1Gb3JtUGFydGlhbC5qc1wiO1xuaW1wb3J0IGVkaXRJdGVtIGZyb20gXCIuL2VkaXRJdGVtLmpzXCI7XG5pbXBvcnQgZGlzcGxheUxpc3QgZnJvbSBcIi4vZGlzcGxheUxpc3QuanNcIjtcbmltcG9ydCBkaXNwbGF5Rm9ybUNvbnRyb2xsZXIgZnJvbSBcIi4vZGlzcGxheUZvcm0uanNcIjtcblxuY29uc3QgZWRpdEl0ZW1Gb3JtID0gKGxpc3QsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFydGlhbCA9IGl0ZW1Gb3JtUGFydGlhbCgnZWRpdCcpO1xuICAgIC8vcmV0cmVpdmUgdGFzayBmcm9tIHN0b3JhZ2VcbiAgICB2YXIgaXRlbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxpc3QpKTtcbiAgICBjb25zdCB0YXNrID0gaXRlbXNbaW5kZXhdO1xuICAgIC8vIGZpbGwgZWRpdCBmb3JtIHdpdGggdGFzaydzIGRhdGFcbiAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLXRpdGxlJyk7XG4gICAgdmFyIGRlc2NyaXB0aW9uID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stZGVzYycpO1xuICAgIHZhciBkdWVEYXRlID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stZGF0ZScpO1xuICAgIHZhciBwcmlvcml0eSA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLXByaW9yaXR5Jyk7XG4gICAgaW5wdXQudmFsdWUgPSB0YXNrLnRpdGxlO1xuICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICBkdWVEYXRlLnZhbHVlID0gdGFzay5kdWVEYXRlO1xuICAgIHByaW9yaXR5LnZhbHVlID0gdGFzay5wcmlvcml0eTtcbiAgICBcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZWRpdEJ0bi5jbGFzc05hbWUgPVwiZWRpdC1mb3JtLWJ0blwiO1xuICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSBcIlN1Ym1pdCBlZGl0c1wiO1xuICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0YXNrRWRpdHMgPSB7XG4gICAgICAgICAgICB0aXRsZTogaW5wdXQudmFsdWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24udmFsdWUsXG4gICAgICAgICAgICBkdWVEYXRlOiBkdWVEYXRlLnZhbHVlLFxuICAgICAgICAgICAgcHJpb3JpdHk6IHByaW9yaXR5LnZhbHVlXG4gICAgICAgIH1cbiAgICAgICAgZWRpdEl0ZW0obGlzdCwgdGFza0VkaXRzLCBpbmRleCk7XG4gICAgICAgIGRpc3BsYXlMaXN0KGxpc3QpO1xuICAgICAgICBkaXNwbGF5Rm9ybUNvbnRyb2xsZXIoKTtcbiAgICAgICAgXG4gICAgfSk7XG4gICAgLy8gZm9ybS5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgICAvLyBkaXYuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgcGFydGlhbC5hcHBlbmQoZWRpdEJ0bik7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZWRpdEl0ZW1Gb3JtOyIsImltcG9ydCBjb2xsYXBzZUl0ZW0gZnJvbSBcIi4vY29sbGFwc2VJdGVtXCI7XG5pbXBvcnQgZGlzcGxheUZvcm1Db250cm9sbGVyIGZyb20gXCIuL2Rpc3BsYXlGb3JtXCI7XG5cbmNvbnN0IGV4cGFuZEl0ZW0gPSAodGFzaykgPT4ge1xuICAgIGRpc3BsYXlGb3JtQ29udHJvbGxlcigpXG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc05hbWUgPVwiaXRlbS1leHBhbmRcIjtcblxuICAgIGNvbnN0IGNsb3NlUG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjbG9zZVBvcHVwLmNsYXNzTmFtZSA9IFwiZmFzIGZhLXRpbWVzIGNsb3NlLXBvcHVwIGZhLTJ4XCI7XG4gICAgY2xvc2VQb3B1cC5vbmNsaWNrID0gKCkgPT4gZGlzcGxheUZvcm1Db250cm9sbGVyKCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNsb3NlUG9wdXApO1xuXG4gICAgY29uc3QgdGl0bGV3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGV3cmFwcGVyLmNsYXNzTmFtZSA9IFwiaXRlbS1zZWN0aW9uLXdyYXBwZXJcIjtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlLmlkID0gXCJ0YXNrLXRpdGxlXCI7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBgJHt0YXNrLnRpdGxlfWA7XG4gICAgdmFyIGl0ZW1MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgaXRlbUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCB0aXRsZS5pZCk7XG4gICAgaXRlbUxhYmVsLmlubmVySFRNTCA9IFwiVGFza1wiO1xuICAgIHRpdGxld3JhcHBlci5hcHBlbmRDaGlsZChpdGVtTGFiZWwpO1xuICAgIHRpdGxld3JhcHBlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHRpdGxld3JhcHBlcik7XG4gICAgXG4gICAgY29uc3QgZGVzY3JpcHRpb253cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY3JpcHRpb253cmFwcGVyLmNsYXNzTmFtZSA9IFwiaXRlbS1zZWN0aW9uLXdyYXBwZXJcIjtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc2NyaXB0aW9uLmlkID0gXCJ0YXNrLWRlc2NyaXB0aW9uXCI7XG5cbiAgICBpZiAodGFzay5kZXNjcmlwdGlvbiA9PT0gXCJcIikge1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiTi9BXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgJHt0YXNrLmRlc2NyaXB0aW9ufWA7XG4gICAgfVxuICAgIHZhciBpdGVtTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGl0ZW1MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgZGVzY3JpcHRpb24uaWQpO1xuICAgIGl0ZW1MYWJlbC5pbm5lckhUTUwgPSBcIkRldGFpbHNcIjtcbiAgICBkZXNjcmlwdGlvbndyYXBwZXIuYXBwZW5kQ2hpbGQoaXRlbUxhYmVsKTtcbiAgICBkZXNjcmlwdGlvbndyYXBwZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIGRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbndyYXBwZXIpO1xuXG4gICAgY29uc3QgZHVlRGF0ZXdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkdWVEYXRld3JhcHBlci5jbGFzc05hbWUgPSBcIml0ZW0tc2VjdGlvbi13cmFwcGVyXCI7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGR1ZURhdGUuaWQgPSBcInRhc2stZHVlZGF0ZVwiO1xuICAgIGlmICh0YXNrLmR1ZURhdGUgPT09IFwiXCIpIHtcbiAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IFwiTi9BXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IGAke3Rhc2suZHVlRGF0ZX1gO1xuICAgIH1cbiAgICB2YXIgaXRlbUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBpdGVtTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGR1ZURhdGUuaWQpO1xuICAgIGl0ZW1MYWJlbC5pbm5lckhUTUwgPSBcIkR1ZSBkYXRlXCI7XG4gICAgZHVlRGF0ZXdyYXBwZXIuYXBwZW5kQ2hpbGQoaXRlbUxhYmVsKTtcbiAgICBkdWVEYXRld3JhcHBlci5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZXdyYXBwZXIpO1xuXG4gICAgY29uc3QgcHJpb3JpdHl3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJpb3JpdHl3cmFwcGVyLmNsYXNzTmFtZSA9IFwiaXRlbS1zZWN0aW9uLXdyYXBwZXJcIjtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByaW9yaXR5LmlkID0gXCJ0YXNrLXByaW9yaXR5XCI7XG4gICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSBgJHt0YXNrLnByaW9yaXR5fWA7XG4gICAgdmFyIGl0ZW1MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgaXRlbUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBwcmlvcml0eS5pZCk7XG4gICAgaXRlbUxhYmVsLmlubmVySFRNTCA9IFwiUHJpb3JpdHlcIjtcbiAgICBwcmlvcml0eXdyYXBwZXIuYXBwZW5kQ2hpbGQoaXRlbUxhYmVsKTtcbiAgICBwcmlvcml0eXdyYXBwZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChwcmlvcml0eXdyYXBwZXIpO1xuICAgIFxuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkaXYpO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGV4cGFuZEl0ZW07IiwiaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSBcIi4vY3JlYXRlUHJvamVjdC5qc1wiO1xuaW1wb3J0IGRpc3BsYXlMaXN0IGZyb20gXCIuL2Rpc3BsYXlMaXN0LmpzXCI7XG5pbXBvcnQgc2F2ZUl0ZW0gZnJvbSBcIi4vc2F2ZUl0ZW0uanNcIjtcbmltcG9ydCBkaXNwbGF5UHJvamVjdHMgZnJvbSBcIi4vZGlzcGxheVByb2plY3RzLmpzXCI7XG5pbXBvcnQgYWRkSXRlbUZvcm0gZnJvbSBcIi4vYWRkSXRlbUZvcm0uanNcIjtcbmltcG9ydCBuZXdQcm9qZWN0Rm9ybSBmcm9tIFwiLi9uZXdQcm9qZWN0Rm9ybS5qc1wiO1xuXG5jb25zdCBIb21lRE9NID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc05hbWUgPVwibGlzdC1jb250YWluZXJcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdik7XG5cbiAgICAvL3JlbmRlciBoZWFkaW5nXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGluZy5jbGFzc05hbWUgPSBcImxpc3QtbmFtZVwiO1xuICAgIGRpdi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICAgIC8vcmVuZGVyIGxpc3RcbiAgICB2YXIgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgbGlzdC5jbGFzc05hbWUgPSAnbGlzdCc7XG4gICAgbGlzdC5pZCA9IFwiTWFpblwiO1xuICAgIGRpdi5hcHBlbmRDaGlsZChsaXN0KTtcblxuICAgIGFkZEl0ZW1Gb3JtKGxpc3QpO1xuICAgIG5ld1Byb2plY3RGb3JtKCk7XG4gICAgXG4gICAgZGlzcGxheUxpc3QobGlzdC5pZCk7XG4gICAgZGlzcGxheVByb2plY3RzKCk7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZURPTTsiLCJpbXBvcnQgZGlzcGxheUZvcm1Db250cm9sbGVyIGZyb20gXCIuL2Rpc3BsYXlGb3JtXCI7XG5cbmNvbnN0IGl0ZW1Gb3JtUGFydGlhbCA9IChhY3Rpb24pID0+IHtcblxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybS5jbGFzc05hbWUgPSBgJHthY3Rpb259LWl0ZW0tZm9ybWA7XG4gICAgY29uc3QgY2xvc2VQb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNsb3NlUG9wdXAuY2xhc3NOYW1lID0gXCJmYXMgZmEtdGltZXMgY2xvc2UtcG9wdXBcIjtcbiAgICBjbG9zZVBvcHVwLm9uY2xpY2sgPSAoKSA9PiBkaXNwbGF5Rm9ybUNvbnRyb2xsZXIoKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNsb3NlUG9wdXApO1xuXG4gICAgY29uc3QgaW5wdXR3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5wdXR3cmFwcGVyLmNsYXNzTmFtZSA9IFwiZm9ybS1zZWN0aW9uLXdyYXBwZXJcIjtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIGlucHV0LnBsYWNlaG9sZGVyID0gXCJUYXNrIG5hbWVcIjtcbiAgICBpbnB1dC5pZCA9IGAke2FjdGlvbn0tdGFzay10aXRsZWA7XG4gICAgaW5wdXQucmVxdWlyZWQgPSBcInRydWVcIjtcbiAgICB2YXIgaXRlbUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBpdGVtTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGlucHV0LmlkKTtcbiAgICBpdGVtTGFiZWwuaW5uZXJIVE1MID0gXCJUYXNrIG5hbWVcIjtcbiAgICBpbnB1dHdyYXBwZXIuYXBwZW5kQ2hpbGQoaXRlbUxhYmVsKTtcbiAgICBpbnB1dHdyYXBwZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXR3cmFwcGVyKTtcbiAgICBcbiAgICBjb25zdCBkZXNjd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc2N3cmFwcGVyLmNsYXNzTmFtZSA9IFwiZm9ybS1zZWN0aW9uLXdyYXBwZXJcIjtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGVzY3JpcHRpb24udHlwZSA9IFwidGV4dFwiO1xuICAgIGRlc2NyaXB0aW9uLnBsYWNlaG9sZGVyID0gXCJEZXNjcmlwdGlvblwiO1xuICAgIGRlc2NyaXB0aW9uLmlkID1gJHthY3Rpb259LXRhc2stZGVzY2A7XG4gICAgdmFyIGRlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGVzY0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBkZXNjcmlwdGlvbi5pZCk7XG4gICAgZGVzY0xhYmVsLmlubmVySFRNTCA9IFwiRGVzY3JpcHRpb25cIjtcbiAgICBkZXNjd3JhcHBlci5hcHBlbmRDaGlsZChkZXNjTGFiZWwpO1xuICAgIGRlc2N3cmFwcGVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2N3cmFwcGVyKTtcbiAgICBcbiAgICBjb25zdCBkYXRld3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRhdGV3cmFwcGVyLmNsYXNzTmFtZSA9IFwiZm9ybS1zZWN0aW9uLXdyYXBwZXJcIjtcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkdWVEYXRlLnR5cGUgPSBcImRhdGVcIjtcbiAgICBkdWVEYXRlLmlkID0gYCR7YWN0aW9ufS10YXNrLWRhdGVgO1xuICAgIHZhciBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgZHVlRGF0ZS5pZCk7XG4gICAgZGF0ZUxhYmVsLmlubmVySFRNTCA9IFwiIER1ZSBkYXRlXCI7XG4gICAgZGF0ZXdyYXBwZXIuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgICBkYXRld3JhcHBlci5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGV3cmFwcGVyKTtcblxuICAgIGNvbnN0IHByaW9yd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByaW9yd3JhcHBlci5jbGFzc05hbWUgPSBcImZvcm0tc2VjdGlvbi13cmFwcGVyXCI7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBwcmlvcml0eS5jbGFzc05hbWUgPSBcInByaW9yaXR5LXNlbGVjdFwiO1xuICAgIHByaW9yaXR5LmlkID0gYCR7YWN0aW9ufS10YXNrLXByaW9yaXR5YDtcbiAgICB2YXIgb3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uMSk7XG4gICAgdmFyIG9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbjIpO1xuICAgIHZhciBvcHRpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb24zKTtcbiAgICBvcHRpb24xLnZhbHVlID0gXCJIaWdoXCI7XG4gICAgb3B0aW9uMS50ZXh0ID0gXCJIaWdoXCI7XG4gICAgb3B0aW9uMi52YWx1ZSA9IFwiTWlkXCI7XG4gICAgb3B0aW9uMi50ZXh0ID0gXCJNaWRcIjtcbiAgICBvcHRpb24zLnZhbHVlID0gXCJMb3dcIjtcbiAgICBvcHRpb24zLnRleHQgPSBcIkxvd1wiO1xuICAgIHZhciBwcmlvckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwcmlvckxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBwcmlvcml0eS5pZCk7XG4gICAgcHJpb3JMYWJlbC5pbm5lckhUTUwgPSBcIlByaW9yaXR5XCI7XG4gICAgcHJpb3J3cmFwcGVyLmFwcGVuZENoaWxkKHByaW9yTGFiZWwpO1xuICAgIHByaW9yd3JhcHBlci5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcndyYXBwZXIpO1xuICAgIFxuICAgIGRpdi5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICByZXR1cm4gZm9ybVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGl0ZW1Gb3JtUGFydGlhbDsiLCJpbXBvcnQgY3JlYXRlUHJvamVjdCBmcm9tIFwiLi9jcmVhdGVQcm9qZWN0LmpzXCI7XG5pbXBvcnQgZGlzcGxheUZvcm1Db250cm9sbGVyIGZyb20gXCIuL2Rpc3BsYXlGb3JtLmpzXCI7XG5pbXBvcnQgZGlzcGxheVByb2plY3RzIGZyb20gXCIuL2Rpc3BsYXlQcm9qZWN0cy5qc1wiO1xuXG5jb25zdCBuZXdQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3UHJvamVjdEZvcm0uY2xhc3NOYW1lID0gXCJuZXctcHJvamVjdC1mb3JtXCI7XG5cbiAgICBjb25zdCBjbG9zZVBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2xvc2VQb3B1cC5jbGFzc05hbWUgPSBcImZhcyBmYS10aW1lcyBjbG9zZS1wb3B1cCBmYS0yeFwiO1xuICAgIGNsb3NlUG9wdXAub25jbGljayA9ICgpID0+IGRpc3BsYXlGb3JtQ29udHJvbGxlcigpO1xuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKGNsb3NlUG9wdXApO1xuXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb2plY3ROYW1lLnR5cGUgPSBcInRleHRcIjtcbiAgICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSlcbiAgXG4gICAgY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5ld1Byb2plY3RCdG4uY2xhc3NOYW1lID0gXCJuZXctcHJvamVjdC1idG5cIjtcbiAgICBuZXdQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gXCJDcmVhdGUgcHJvamVjdFwiO1xuICAgIG5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUudmFsdWUpO1xuICAgICAgICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgICAgICAgZGlzcGxheUZvcm1Db250cm9sbGVyKCk7XG4gICAgfSlcbiAgICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0QnRuKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBuZXdQcm9qZWN0Rm9ybTsiLCJjb25zdCBzYXZlSXRlbSA9IChuZXdUYXNrLCBsaXN0TmFtZSkgPT4ge1xuICAgIGxldCBsaXN0O1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsaXN0TmFtZSkgPT09IG51bGwpIHtcbiAgICAgICAgbGlzdCA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxpc3ROYW1lKSk7XG4gICAgfVxuICAgIGxpc3QucHVzaChuZXdUYXNrKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsaXN0TmFtZSwgSlNPTi5zdHJpbmdpZnkobGlzdCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzYXZlSXRlbTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEhvbWVET00gZnJvbSAnLi9ob21lRG9tLmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGRpc3BsYXlGb3JtIGZyb20gXCIuL2Rpc3BsYXlGb3JtLmpzXCI7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgIC8vbmF2YmFyXG4gICAgY29uc3QgYWRkSXRlbVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1pdGVtLXBvcHVwJyk7XG4gICAgYWRkSXRlbVBvcHVwLm9uY2xpY2sgPSAoKSA9PiBkaXNwbGF5Rm9ybShcImFkZC1pdGVtXCIpO1xuICAgIGNvbnN0IGFkZFByb2plY3RQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1wb3B1cCcpO1xuICAgIGFkZFByb2plY3RQb3B1cC5vbmNsaWNrID0gKCkgPT4gZGlzcGxheUZvcm0oJ2FkZC1wcm9qZWN0Jyk7XG5cblxuICAgIC8vbG9hZCBob21lcGFnZVxuICAgIEhvbWVET00oKTtcblxufSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==