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
___CSS_LOADER_EXPORT___.push([module.id, "html, body {\n    min-height: 100%;\n    overflow: auto;\n}\n* {\n    border: 1px solid red;\n    color: #434544;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    font-weight: 100;\n    \n}\nbody {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    background: linear-gradient(to bottom left, cyan, magenta);\n    background-size: cover; \n    background-position: bottom;\n    background-repeat: no-repeat;   \n}\nnav {\n    /* background: linear-gradient(to left, cyan, magenta); */\n    padding: 20px;\n    width: 200px;\n    margin: auto;\n    margin-top: 50px;\n    border-radius: 50px;\n    background: rgba(241, 235, 245, 0.4);\n    text-align: center;\n\n}\n\nnav div {\n    display: inline-block;\n    background: rgba(241, 235, 245, 0.6);\n    padding: 20px;\n    border-radius: 50px;\n    width: 45px;\n    text-align: center;\n\n\n\n}\n\nnav div:hover {\n    background: rgba(241, 235, 245, 0.8);\n\n}\n\n#content {\n    margin: auto;\n    margin-top: 30px;\n    width: 70%;\n\n    padding: 20px;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    position: relative;\n    background: rgba(241, 235, 245, 0.5);\n    border-radius: 40px;\n    overflow: auto;\n}\n\nfooter {\n    height: 100px;\n    margin-top: 300px;\n}\n.list-name {\n    text-align: center;\n    background: rgba(241, 235, 245, 0.6);\n    border-radius: 30px;\n    width: 50%;\n    margin: auto;\n    padding: 20px;\n}\n\n.new-project-form {\n    overflow: auto;\n    width: 70%;\n    padding: 100px;\n    position: absolute;\n    display: none;\n    top: 70px;\n    justify-self: center;\n    border-radius: 40px;\n    grid-template-rows: 1fr 1fr;\n    align-content: space-around;\n\n    align-content: center;\n    grid-gap: 15px;\n    -webkit-animation: fadeIn 1s;\n    animation: fadeIn 1s;\n    background-color: rgba(241, 235, 245);\n    box-shadow: -10px 10px 20px grey;\n\n\n}\n\ninput, select {\n    border-radius: 20px;\n    height: 50px;\n    padding-left: 20px;\n    font-size: 30px;\n    border: 1px solid grey;\n}\ninput[type=date], select {\n    width: 60%;\n}\n\n.edit-item-form {\n    display: grid;\n}\n\n.add-item-form {\n    display: none;\n\n}\n\n.add-item-form, .edit-item-form {\n    margin: auto;\n    overflow: auto;\n    padding: 150px;\n    position: absolute;\n    top: 70px;\n    justify-self: center;\n    border-radius: 40px;\n    grid-template-rows: repeat(5, 1fr);\n    grid-gap: 15px;\n    -webkit-animation: fadeIn 1s;\n    animation: fadeIn 1s;\n    background-color: rgba(241, 235, 245);\n    box-shadow: -10px 10px 20px grey;\n}\n\n.add-item-btn, .edit-form-btn, .new-project-btn {\n    padding: 10px;\n    border-radius: 30px;\n    background: rgba(0, 255, 255, .5);\n    font-size: large;\n    border: none;\n\n}\n\n.new-project-btn {\n    padding: 20px;\n}\n.add-item-btn:hover, .edit-form-btn:hover, .new-project-btn:hover {\n    background: rgba(0, 255, 255, .7);\n}\n\n.close-popup {\n    border: none;\n    align-self: start;\n    justify-self: end;\n    position: absolute;\n    border-radius: 50%;\n    right: 20px;\n    top: 20px;\n}\n.close-popup:hover {\n    color:grey;\n}\n\n.item-expand {\n    margin: auto;\n    padding: 100px 150px;\n    width: 100%;\n    position: absolute;\n    top: 70px;\n    justify-self: center;\n    display: grid;\n    grid-template-columns: 3fr 5fr 2fr 1fr;\n    justify-content: space-between;\n    grid-gap: 23px;\n    -webkit-animation: fadeIn 1s;\n    animation: fadeIn 1s;\n    background-color: rgba(241, 235, 245);\n    box-shadow: -10px 10px 20px grey;\n    border-radius: 40px;\n    font-size: large;\n\n\n}\n\n.item-section-wrapper div {\n    margin-top: 10px;\n}\n.item-section-wrapper label {\n    font-weight: bold;\n}\n.form-section-wrapper {\n    display: grid;\n    grid-template-columns: 1fr;\n}\n/* Add animation (fade in the popup) */\n@-webkit-keyframes fadeIn {\n    from {opacity: 0;}\n    to {opacity: 1;}\n  }\n  \n  @keyframes fadeIn {\n    from {opacity: 0;}\n    to {opacity:1 ;}\n  }\n\n\n.item-form label {\n    margin-top: 10px;\n    margin-bottom: 5px;\n}\n/* .item-form  input[type=date] {\n} */\n.item-form select {\n    margin-bottom: 10px;\n}\n\n.projects {\n    align-self: start;\n\n}\n.projects h2 {\n    background: rgba(241, 235, 245, 0.7);\n    border-radius: 30px;\n    padding: 20px 40px;\n    font-size: 30px;\n    text-align: center;\n    margin-top: 0;\n    margin-bottom: 15px;\n    width: 50%;\n}\n\n.project {\n    margin: 10px 0px;\n    background: rgba(241, 235, 245, 0.5);\n    border-radius: 30px;\n    padding: 20px 30px;\n    width: fit-content;\n\n\n}\n.project:hover {\n    background: rgba(241, 235, 245, 0.7);\n\n}\n.list {\n    display: grid;\n    grid-template-columns: 1fr;\n    padding: 0;\n}\n.list-item {\n    margin: 0px 10px 20px 10px;\n    /* margin-bottom: 20px; */\n    display: grid;\n    align-items: center;\n    grid-gap: 20px;\n    grid-template-columns: 1fr 1fr 5fr 1fr 1fr;\n    justify-content: space-between;\n    padding: 30px;\n    background: rgba(241, 235, 245, 0.7);\n    border-radius: 30px;\n    animation: fadeIn 1s;\n    overflow: auto;\n}\n\n.list-item:hover {\n    background: rgba(241, 235, 245, 0.9);\n\n}\n.list-container {\n    overflow: auto;\n}\n\n@media (max-width: 1250px) {\n\n    .task-body {\n        text-align: center;\n        padding-left: 10px;\n    }\n\n\n    #content {\n        width: 90%;\n\n\n\n    }\n    .add-project-popup {\n        width: 45px;\n\n    }\n    .add-item-popup {\n        width: 45px;\n\n\n    }\n    .add-item-form {\n        padding-top: 50px;\n        padding-left: 20px;\n        padding-right: 20px;\n        padding-bottom: 20px;\n\n    }\n\n}\n@media (max-width: 750px) {\n    .new-project-form {\n        padding-left: 20px;\n        padding-right: 20px;\n        padding-bottom: 20px;\n    }\n    .list-name {\n        width: 80%;\n    }\n\n\n}\n\n@media (max-width: 700px)  {\n    #content {\n        grid-template-columns: 1fr;\n        padding: 5px;\n        margin: 10px;\n\n    }\n    .list-item {\n        margin-left: 0;\n        margin-right: 0;\n        grid-template-columns: 1fr 3fr;\n        align-items: start;\n    }\n    .priority-circle, .edit-btn, .expand-btn   {\n        display: none !important;\n    }\n    .task-body {\n        padding-top: 10px;\n        padding-bottom: 10px;\n    }\n    .projects {\n        margin-top: 50px;\n        order: 1;\n        text-align: center;\n    }\n    .projects h2 {\n        margin: auto;\n    }\n    .project {\n        display: inline-block;\n        margin-left: 3px;\n        margin-right: 3px;\n        margin-bottom: 0px;\n    }\n    .checkmark {\n        transform: scale(1.7) !important;\n        top: 10px !important;\n    }\n\n    .new-project-form input {\n        width: 90%;\n\n    }\n    .add-item-form input {\n        width: 90%;\n    }\n    \n}\n\n.edit-btn {\n    align-self: start;\n    justify-self: end;\n    border-radius: 10px;\n    padding: 10px;\n    border: none;\n    background:none;\n}\n.edit-btn:hover, .expand-btn:hover {\n    color:darkmagenta;\n}\n.expand-btn {\n    background: none;\n    border: none;\n}\n.check-container {\n    align-self: start;\n    display: block;\n    position: relative;\n    padding-left: 35px;\n    margin-bottom: 12px;\n    cursor: pointer;\n    font-size: 22px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    \n  }\n  \n  /* Hide the browser's default checkbox */\n  .check-container input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n  }\n  \n  /* Create a custom checkbox */\n  .checkmark {\n    position: absolute;\n    left: 10px;\n    top: 20px;\n    height: 25px;\n    width: 25px;\n    background-color: #eee;\n    transform: scale(2.3);\n    border-radius: 15px;\n    border: 3px solid darkcyan;\n\n  }\n  \n  /* On mouse-over, add a grey background color */\n  .check-container:hover input ~ .checkmark {\n    background-color: #ccc;\n  }\n  \n  /* When the checkbox is checked, add a blue background */\n  .check-container input:checked ~ .checkmark {\n    background-color: #eee;\n  }\n\n.checkmark:after {\n    content: \"\";\n    position: absolute;\n    display: none;\n  }\n  \n  /* Show the checkmark when checked */\n  .check-container input:checked ~ .checkmark:after {\n    display: block;\n  }\n  \n  /* Style the checkmark/indicator */\n  .check-container .checkmark:after {\n    left: 9px;\n    top: 5px;\n    width: 5px;\n    height: 10px;\n    border: solid #02f70b;\n    border-width: 0 3px 3px 0;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n  }\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html, body {\n    min-height: 100%;\n    overflow: auto;\n}\n* {\n    border: 1px solid red;\n    color: #434544;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    font-weight: 100;\n    \n}\nbody {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    background: linear-gradient(to bottom left, cyan, magenta);\n    background-size: cover; \n    background-position: bottom;\n    background-repeat: no-repeat;   \n}\nnav {\n    /* background: linear-gradient(to left, cyan, magenta); */\n    padding: 20px;\n    width: 200px;\n    margin: auto;\n    margin-top: 50px;\n    border-radius: 50px;\n    background: rgba(241, 235, 245, 0.4);\n    text-align: center;\n\n}\n\nnav div {\n    display: inline-block;\n    background: rgba(241, 235, 245, 0.6);\n    padding: 20px;\n    border-radius: 50px;\n    width: 45px;\n    text-align: center;\n\n\n\n}\n\nnav div:hover {\n    background: rgba(241, 235, 245, 0.8);\n\n}\n\n#content {\n    margin: auto;\n    margin-top: 30px;\n    width: 70%;\n\n    padding: 20px;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    position: relative;\n    background: rgba(241, 235, 245, 0.5);\n    border-radius: 40px;\n    overflow: auto;\n}\n\nfooter {\n    height: 100px;\n    margin-top: 300px;\n}\n.list-name {\n    text-align: center;\n    background: rgba(241, 235, 245, 0.6);\n    border-radius: 30px;\n    width: 50%;\n    margin: auto;\n    padding: 20px;\n}\n\n.new-project-form {\n    overflow: auto;\n    width: 70%;\n    padding: 100px;\n    position: absolute;\n    display: none;\n    top: 70px;\n    justify-self: center;\n    border-radius: 40px;\n    grid-template-rows: 1fr 1fr;\n    align-content: space-around;\n\n    align-content: center;\n    grid-gap: 15px;\n    -webkit-animation: fadeIn 1s;\n    animation: fadeIn 1s;\n    background-color: rgba(241, 235, 245);\n    box-shadow: -10px 10px 20px grey;\n\n\n}\n\ninput, select {\n    border-radius: 20px;\n    height: 50px;\n    padding-left: 20px;\n    font-size: 30px;\n    border: 1px solid grey;\n}\ninput[type=date], select {\n    width: 60%;\n}\n\n.edit-item-form {\n    display: grid;\n}\n\n.add-item-form {\n    display: none;\n\n}\n\n.add-item-form, .edit-item-form {\n    margin: auto;\n    overflow: auto;\n    padding: 150px;\n    position: absolute;\n    top: 70px;\n    justify-self: center;\n    border-radius: 40px;\n    grid-template-rows: repeat(5, 1fr);\n    grid-gap: 15px;\n    -webkit-animation: fadeIn 1s;\n    animation: fadeIn 1s;\n    background-color: rgba(241, 235, 245);\n    box-shadow: -10px 10px 20px grey;\n}\n\n.add-item-btn, .edit-form-btn, .new-project-btn {\n    padding: 10px;\n    border-radius: 30px;\n    background: rgba(0, 255, 255, .5);\n    font-size: large;\n    border: none;\n\n}\n\n.new-project-btn {\n    padding: 20px;\n}\n.add-item-btn:hover, .edit-form-btn:hover, .new-project-btn:hover {\n    background: rgba(0, 255, 255, .7);\n}\n\n.close-popup {\n    border: none;\n    align-self: start;\n    justify-self: end;\n    position: absolute;\n    border-radius: 50%;\n    right: 20px;\n    top: 20px;\n}\n.close-popup:hover {\n    color:grey;\n}\n\n.item-expand {\n    margin: auto;\n    padding: 100px 150px;\n    width: 100%;\n    position: absolute;\n    top: 70px;\n    justify-self: center;\n    display: grid;\n    grid-template-columns: 3fr 5fr 2fr 1fr;\n    justify-content: space-between;\n    grid-gap: 23px;\n    -webkit-animation: fadeIn 1s;\n    animation: fadeIn 1s;\n    background-color: rgba(241, 235, 245);\n    box-shadow: -10px 10px 20px grey;\n    border-radius: 40px;\n    font-size: large;\n\n\n}\n\n.item-section-wrapper div {\n    margin-top: 10px;\n}\n.item-section-wrapper label {\n    font-weight: bold;\n}\n.form-section-wrapper {\n    display: grid;\n    grid-template-columns: 1fr;\n}\n/* Add animation (fade in the popup) */\n@-webkit-keyframes fadeIn {\n    from {opacity: 0;}\n    to {opacity: 1;}\n  }\n  \n  @keyframes fadeIn {\n    from {opacity: 0;}\n    to {opacity:1 ;}\n  }\n\n\n.item-form label {\n    margin-top: 10px;\n    margin-bottom: 5px;\n}\n/* .item-form  input[type=date] {\n} */\n.item-form select {\n    margin-bottom: 10px;\n}\n\n.projects {\n    align-self: start;\n\n}\n.projects h2 {\n    background: rgba(241, 235, 245, 0.7);\n    border-radius: 30px;\n    padding: 20px 40px;\n    font-size: 30px;\n    text-align: center;\n    margin-top: 0;\n    margin-bottom: 15px;\n    width: 50%;\n}\n\n.project {\n    margin: 10px 0px;\n    background: rgba(241, 235, 245, 0.5);\n    border-radius: 30px;\n    padding: 20px 30px;\n    width: fit-content;\n\n\n}\n.project:hover {\n    background: rgba(241, 235, 245, 0.7);\n\n}\n.list {\n    display: grid;\n    grid-template-columns: 1fr;\n    padding: 0;\n}\n.list-item {\n    margin: 0px 10px 20px 10px;\n    /* margin-bottom: 20px; */\n    display: grid;\n    align-items: center;\n    grid-gap: 20px;\n    grid-template-columns: 1fr 1fr 5fr 1fr 1fr;\n    justify-content: space-between;\n    padding: 30px;\n    background: rgba(241, 235, 245, 0.7);\n    border-radius: 30px;\n    animation: fadeIn 1s;\n    overflow: auto;\n}\n\n.list-item:hover {\n    background: rgba(241, 235, 245, 0.9);\n\n}\n.list-container {\n    overflow: auto;\n}\n\n@media (max-width: 1250px) {\n\n    .task-body {\n        text-align: center;\n        padding-left: 10px;\n    }\n\n\n    #content {\n        width: 90%;\n\n\n\n    }\n    .add-project-popup {\n        width: 45px;\n\n    }\n    .add-item-popup {\n        width: 45px;\n\n\n    }\n    .add-item-form {\n        padding-top: 50px;\n        padding-left: 20px;\n        padding-right: 20px;\n        padding-bottom: 20px;\n\n    }\n\n}\n@media (max-width: 750px) {\n    .new-project-form {\n        padding-left: 20px;\n        padding-right: 20px;\n        padding-bottom: 20px;\n    }\n    .list-name {\n        width: 80%;\n    }\n\n\n}\n\n@media (max-width: 700px)  {\n    #content {\n        grid-template-columns: 1fr;\n        padding: 5px;\n        margin: 10px;\n\n    }\n    .list-item {\n        margin-left: 0;\n        margin-right: 0;\n        grid-template-columns: 1fr 3fr;\n        align-items: start;\n    }\n    .priority-circle, .edit-btn, .expand-btn   {\n        display: none !important;\n    }\n    .task-body {\n        padding-top: 10px;\n        padding-bottom: 10px;\n    }\n    .projects {\n        margin-top: 50px;\n        order: 1;\n        text-align: center;\n    }\n    .projects h2 {\n        margin: auto;\n    }\n    .project {\n        display: inline-block;\n        margin-left: 3px;\n        margin-right: 3px;\n        margin-bottom: 0px;\n    }\n    .checkmark {\n        transform: scale(1.7) !important;\n        top: 10px !important;\n    }\n\n    .new-project-form input {\n        width: 90%;\n\n    }\n    .add-item-form input {\n        width: 90%;\n    }\n    \n}\n\n.edit-btn {\n    align-self: start;\n    justify-self: end;\n    border-radius: 10px;\n    padding: 10px;\n    border: none;\n    background:none;\n}\n.edit-btn:hover, .expand-btn:hover {\n    color:darkmagenta;\n}\n.expand-btn {\n    background: none;\n    border: none;\n}\n.check-container {\n    align-self: start;\n    display: block;\n    position: relative;\n    padding-left: 35px;\n    margin-bottom: 12px;\n    cursor: pointer;\n    font-size: 22px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    \n  }\n  \n  /* Hide the browser's default checkbox */\n  .check-container input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n  }\n  \n  /* Create a custom checkbox */\n  .checkmark {\n    position: absolute;\n    left: 10px;\n    top: 20px;\n    height: 25px;\n    width: 25px;\n    background-color: #eee;\n    transform: scale(2.3);\n    border-radius: 15px;\n    border: 3px solid darkcyan;\n\n  }\n  \n  /* On mouse-over, add a grey background color */\n  .check-container:hover input ~ .checkmark {\n    background-color: #ccc;\n  }\n  \n  /* When the checkbox is checked, add a blue background */\n  .check-container input:checked ~ .checkmark {\n    background-color: #eee;\n  }\n\n.checkmark:after {\n    content: \"\";\n    position: absolute;\n    display: none;\n  }\n  \n  /* Show the checkmark when checked */\n  .check-container input:checked ~ .checkmark:after {\n    display: block;\n  }\n  \n  /* Style the checkmark/indicator */\n  .check-container .checkmark:after {\n    left: 9px;\n    top: 5px;\n    width: 5px;\n    height: 10px;\n    border: solid #02f70b;\n    border-width: 0 3px 3px 0;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n  }\n\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsZUFBZSxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFlBQVksVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsZUFBZSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGVBQWUsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLFlBQVksTUFBTSxvQkFBb0IscUJBQXFCLE9BQU8sS0FBSyxvQkFBb0IscUJBQXFCLFFBQVEsS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsZUFBZSxNQUFNLEtBQUssYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxhQUFhLE1BQU0sS0FBSyxVQUFVLE9BQU8sTUFBTSxLQUFLLFlBQVksYUFBYSxRQUFRLEtBQUssYUFBYSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssWUFBWSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLE9BQU8sTUFBTSxLQUFLLEtBQUssWUFBWSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxjQUFjLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxZQUFZLE1BQU0sVUFBVSxPQUFPLFlBQVksTUFBTSxVQUFV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Q0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVE7Ozs7OztVQ1h2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNObUM7QUFDZDtBQUNzQjs7QUFFM0M7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLDJEQUFXO0FBQzVDO0FBQ0Esb0NBQW9DLDJEQUFXOzs7QUFHL0M7QUFDQSxJQUFJLHVEQUFPOztBQUVYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vc3JjL2FkZEl0ZW1Gb3JtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL3NyYy9jb2xsYXBzZUl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vc3JjL2NyZWF0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vc3JjL2RlbGV0ZUl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vc3JjL2Rpc3BsYXlGb3JtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL3NyYy9kaXNwbGF5SXRlbU1pbi5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9zcmMvZGlzcGxheUxpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vc3JjL2Rpc3BsYXlQcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9zcmMvZWRpdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vc3JjL2VkaXRJdGVtRm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9zcmMvZXhwYW5kSXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9zcmMvaG9tZURvbS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9zcmMvaXRlbUZvcm1QYXJ0aWFsLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL3NyYy9uZXdQcm9qZWN0Rm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9zcmMvc2F2ZUl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuKiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG4gICAgY29sb3I6ICM0MzQ1NDQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgXFxufVxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgY3lhbiwgbWFnZW50YSk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7ICAgXFxufVxcbm5hdiB7XFxuICAgIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCBjeWFuLCBtYWdlbnRhKTsgKi9cXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyMzUsIDI0NSwgMC40KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbn1cXG5cXG5uYXYgZGl2IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MSwgMjM1LCAyNDUsIDAuNik7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIHdpZHRoOiA0NXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuXFxuXFxufVxcblxcbm5hdiBkaXY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MSwgMjM1LCAyNDUsIDAuOCk7XFxuXFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICB3aWR0aDogNzAlO1xcblxcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDEsIDIzNSwgMjQ1LCAwLjUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgbWFyZ2luLXRvcDogMzAwcHg7XFxufVxcbi5saXN0LW5hbWUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyMzUsIDI0NSwgMC42KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4ubmV3LXByb2plY3QtZm9ybSB7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBwYWRkaW5nOiAxMDBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB0b3A6IDcwcHg7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG5cXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLWdhcDogMTVweDtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiAxcztcXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMXM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyMzUsIDI0NSk7XFxuICAgIGJveC1zaGFkb3c6IC0xMHB4IDEwcHggMjBweCBncmV5O1xcblxcblxcbn1cXG5cXG5pbnB1dCwgc2VsZWN0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG59XFxuaW5wdXRbdHlwZT1kYXRlXSwgc2VsZWN0IHtcXG4gICAgd2lkdGg6IDYwJTtcXG59XFxuXFxuLmVkaXQtaXRlbS1mb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmFkZC1pdGVtLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcblxcbn1cXG5cXG4uYWRkLWl0ZW0tZm9ybSwgLmVkaXQtaXRlbS1mb3JtIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgcGFkZGluZzogMTUwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA3MHB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgZ3JpZC1nYXA6IDE1cHg7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gMXM7XFxuICAgIGFuaW1hdGlvbjogZmFkZUluIDFzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjM1LCAyNDUpO1xcbiAgICBib3gtc2hhZG93OiAtMTBweCAxMHB4IDIwcHggZ3JleTtcXG59XFxuXFxuLmFkZC1pdGVtLWJ0biwgLmVkaXQtZm9ybS1idG4sIC5uZXctcHJvamVjdC1idG4ge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDI1NSwgMjU1LCAuNSk7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIGJvcmRlcjogbm9uZTtcXG5cXG59XFxuXFxuLm5ldy1wcm9qZWN0LWJ0biB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcbi5hZGQtaXRlbS1idG46aG92ZXIsIC5lZGl0LWZvcm0tYnRuOmhvdmVyLCAubmV3LXByb2plY3QtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAyNTUsIDI1NSwgLjcpO1xcbn1cXG5cXG4uY2xvc2UtcG9wdXAge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHJpZ2h0OiAyMHB4O1xcbiAgICB0b3A6IDIwcHg7XFxufVxcbi5jbG9zZS1wb3B1cDpob3ZlciB7XFxuICAgIGNvbG9yOmdyZXk7XFxufVxcblxcbi5pdGVtLWV4cGFuZCB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcGFkZGluZzogMTAwcHggMTUwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNzBweDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDVmciAyZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdyaWQtZ2FwOiAyM3B4O1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDFzO1xcbiAgICBhbmltYXRpb246IGZhZGVJbiAxcztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDIzNSwgMjQ1KTtcXG4gICAgYm94LXNoYWRvdzogLTEwcHggMTBweCAyMHB4IGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuXFxuXFxufVxcblxcbi5pdGVtLXNlY3Rpb24td3JhcHBlciBkaXYge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG4uaXRlbS1zZWN0aW9uLXdyYXBwZXIgbGFiZWwge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmZvcm0tc2VjdGlvbi13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxufVxcbi8qIEFkZCBhbmltYXRpb24gKGZhZGUgaW4gdGhlIHBvcHVwKSAqL1xcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICBmcm9tIHtvcGFjaXR5OiAwO31cXG4gICAgdG8ge29wYWNpdHk6IDE7fVxcbiAgfVxcbiAgXFxuICBAa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAgIGZyb20ge29wYWNpdHk6IDA7fVxcbiAgICB0byB7b3BhY2l0eToxIDt9XFxuICB9XFxuXFxuXFxuLml0ZW0tZm9ybSBsYWJlbCB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuLyogLml0ZW0tZm9ybSAgaW5wdXRbdHlwZT1kYXRlXSB7XFxufSAqL1xcbi5pdGVtLWZvcm0gc2VsZWN0IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuXFxufVxcbi5wcm9qZWN0cyBoMiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyMzUsIDI0NSwgMC43KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBtYXJnaW46IDEwcHggMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MSwgMjM1LCAyNDUsIDAuNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcblxcblxcbn1cXG4ucHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyMzUsIDI0NSwgMC43KTtcXG5cXG59XFxuLmxpc3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuLmxpc3QtaXRlbSB7XFxuICAgIG1hcmdpbjogMHB4IDEwcHggMjBweCAxMHB4O1xcbiAgICAvKiBtYXJnaW4tYm90dG9tOiAyMHB4OyAqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLWdhcDogMjBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDVmciAxZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyMzUsIDI0NSwgMC43KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMXM7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4ubGlzdC1pdGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDEsIDIzNSwgMjQ1LCAwLjkpO1xcblxcbn1cXG4ubGlzdC1jb250YWluZXIge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEyNTBweCkge1xcblxcbiAgICAudGFzay1ib2R5IHtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgfVxcblxcblxcbiAgICAjY29udGVudCB7XFxuICAgICAgICB3aWR0aDogOTAlO1xcblxcblxcblxcbiAgICB9XFxuICAgIC5hZGQtcHJvamVjdC1wb3B1cCB7XFxuICAgICAgICB3aWR0aDogNDVweDtcXG5cXG4gICAgfVxcbiAgICAuYWRkLWl0ZW0tcG9wdXAge1xcbiAgICAgICAgd2lkdGg6IDQ1cHg7XFxuXFxuXFxuICAgIH1cXG4gICAgLmFkZC1pdGVtLWZvcm0ge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuXFxuICAgIH1cXG5cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxuICAgIC5uZXctcHJvamVjdC1mb3JtIHtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gICAgfVxcbiAgICAubGlzdC1uYW1lIHtcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxuICAgIH1cXG5cXG5cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSAge1xcbiAgICAjY29udGVudCB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICAgIG1hcmdpbjogMTBweDtcXG5cXG4gICAgfVxcbiAgICAubGlzdC1pdGVtIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICB9XFxuICAgIC5wcmlvcml0eS1jaXJjbGUsIC5lZGl0LWJ0biwgLmV4cGFuZC1idG4gICB7XFxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxuICAgIH1cXG4gICAgLnRhc2stYm9keSB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICB9XFxuICAgIC5wcm9qZWN0cyB7XFxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICAgICAgb3JkZXI6IDE7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLnByb2plY3RzIGgyIHtcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgfVxcbiAgICAucHJvamVjdCB7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBtYXJnaW4tbGVmdDogM3B4O1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICAgIH1cXG4gICAgLmNoZWNrbWFyayB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNykgIWltcG9ydGFudDtcXG4gICAgICAgIHRvcDogMTBweCAhaW1wb3J0YW50O1xcbiAgICB9XFxuXFxuICAgIC5uZXctcHJvamVjdC1mb3JtIGlucHV0IHtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuXFxuICAgIH1cXG4gICAgLmFkZC1pdGVtLWZvcm0gaW5wdXQge1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgfVxcbiAgICBcXG59XFxuXFxuLmVkaXQtYnRuIHtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6bm9uZTtcXG59XFxuLmVkaXQtYnRuOmhvdmVyLCAuZXhwYW5kLWJ0bjpob3ZlciB7XFxuICAgIGNvbG9yOmRhcmttYWdlbnRhO1xcbn1cXG4uZXhwYW5kLWJ0biB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuLmNoZWNrLWNvbnRhaW5lciB7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBcXG4gIH1cXG4gIFxcbiAgLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgY2hlY2tib3ggKi9cXG4gIC5jaGVjay1jb250YWluZXIgaW5wdXQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICB3aWR0aDogMDtcXG4gIH1cXG4gIFxcbiAgLyogQ3JlYXRlIGEgY3VzdG9tIGNoZWNrYm94ICovXFxuICAuY2hlY2ttYXJrIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAxMHB4O1xcbiAgICB0b3A6IDIwcHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMi4zKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgZGFya2N5YW47XFxuXFxuICB9XFxuICBcXG4gIC8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciAqL1xcbiAgLmNoZWNrLWNvbnRhaW5lcjpob3ZlciBpbnB1dCB+IC5jaGVja21hcmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbiAgfVxcbiAgXFxuICAvKiBXaGVuIHRoZSBjaGVja2JveCBpcyBjaGVja2VkLCBhZGQgYSBibHVlIGJhY2tncm91bmQgKi9cXG4gIC5jaGVjay1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgfVxcblxcbi5jaGVja21hcms6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgXFxuICAvKiBTaG93IHRoZSBjaGVja21hcmsgd2hlbiBjaGVja2VkICovXFxuICAuY2hlY2stY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuICBcXG4gIC8qIFN0eWxlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yICovXFxuICAuY2hlY2stY29udGFpbmVyIC5jaGVja21hcms6YWZ0ZXIge1xcbiAgICBsZWZ0OiA5cHg7XFxuICAgIHRvcDogNXB4O1xcbiAgICB3aWR0aDogNXB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlcjogc29saWQgIzAyZjcwYjtcXG4gICAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIH1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2Qsd0VBQXdFO0lBQ3hFLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osU0FBUztJQUNULDBEQUEwRDtJQUMxRCxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0kseURBQXlEO0lBQ3pELGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGtCQUFrQjs7OztBQUl0Qjs7QUFFQTtJQUNJLG9DQUFvQzs7QUFFeEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFVBQVU7O0lBRVYsYUFBYTtJQUNiLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtBQUNq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RUFDN0I7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLDBCQUEwQjs7RUFFNUI7O0VBRUEsK0NBQStDO0VBQy9DO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBLHdEQUF3RDtFQUN4RDtJQUNFLHNCQUFzQjtFQUN4Qjs7QUFFRjtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtFQUNmOztFQUVBLG9DQUFvQztFQUNwQztJQUNFLGNBQWM7RUFDaEI7O0VBRUEsa0NBQWtDO0VBQ2xDO0lBQ0UsU0FBUztJQUNULFFBQVE7SUFDUixVQUFVO0lBQ1YsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtJQUM1Qix3QkFBd0I7RUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCwgYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG4qIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgICBjb2xvcjogIzQzNDU0NDtcXG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBcXG59XFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSBsZWZ0LCBjeWFuLCBtYWdlbnRhKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgICBcXG59XFxubmF2IHtcXG4gICAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIGN5YW4sIG1hZ2VudGEpOyAqL1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDEsIDIzNSwgMjQ1LCAwLjQpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxufVxcblxcbm5hdiBkaXYge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyMzUsIDI0NSwgMC42KTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgd2lkdGg6IDQ1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG5cXG5cXG59XFxuXFxubmF2IGRpdjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyMzUsIDI0NSwgMC44KTtcXG5cXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIHdpZHRoOiA3MCU7XFxuXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MSwgMjM1LCAyNDUsIDAuNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAzMDBweDtcXG59XFxuLmxpc3QtbmFtZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDEsIDIzNSwgMjQ1LCAwLjYpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5uZXctcHJvamVjdC1mb3JtIHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIHBhZGRpbmc6IDEwMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHRvcDogNzBweDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdyaWQtZ2FwOiAxNXB4O1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDFzO1xcbiAgICBhbmltYXRpb246IGZhZGVJbiAxcztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDIzNSwgMjQ1KTtcXG4gICAgYm94LXNoYWRvdzogLTEwcHggMTBweCAyMHB4IGdyZXk7XFxuXFxuXFxufVxcblxcbmlucHV0LCBzZWxlY3Qge1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbn1cXG5pbnB1dFt0eXBlPWRhdGVdLCBzZWxlY3Qge1xcbiAgICB3aWR0aDogNjAlO1xcbn1cXG5cXG4uZWRpdC1pdGVtLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uYWRkLWl0ZW0tZm9ybSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuXFxufVxcblxcbi5hZGQtaXRlbS1mb3JtLCAuZWRpdC1pdGVtLWZvcm0ge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBwYWRkaW5nOiAxNTBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDcwcHg7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICBncmlkLWdhcDogMTVweDtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiAxcztcXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMXM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyMzUsIDI0NSk7XFxuICAgIGJveC1zaGFkb3c6IC0xMHB4IDEwcHggMjBweCBncmV5O1xcbn1cXG5cXG4uYWRkLWl0ZW0tYnRuLCAuZWRpdC1mb3JtLWJ0biwgLm5ldy1wcm9qZWN0LWJ0biB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMjU1LCAyNTUsIC41KTtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgYm9yZGVyOiBub25lO1xcblxcbn1cXG5cXG4ubmV3LXByb2plY3QtYnRuIHtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuLmFkZC1pdGVtLWJ0bjpob3ZlciwgLmVkaXQtZm9ybS1idG46aG92ZXIsIC5uZXctcHJvamVjdC1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDI1NSwgMjU1LCAuNyk7XFxufVxcblxcbi5jbG9zZS1wb3B1cCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgcmlnaHQ6IDIwcHg7XFxuICAgIHRvcDogMjBweDtcXG59XFxuLmNsb3NlLXBvcHVwOmhvdmVyIHtcXG4gICAgY29sb3I6Z3JleTtcXG59XFxuXFxuLml0ZW0tZXhwYW5kIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBwYWRkaW5nOiAxMDBweCAxNTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA3MHB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgNWZyIDJmciAxZnI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ3JpZC1nYXA6IDIzcHg7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gMXM7XFxuICAgIGFuaW1hdGlvbjogZmFkZUluIDFzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjM1LCAyNDUpO1xcbiAgICBib3gtc2hhZG93OiAtMTBweCAxMHB4IDIwcHggZ3JleTtcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG5cXG5cXG59XFxuXFxuLml0ZW0tc2VjdGlvbi13cmFwcGVyIGRpdiB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcbi5pdGVtLXNlY3Rpb24td3JhcHBlciBsYWJlbCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uZm9ybS1zZWN0aW9uLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG59XFxuLyogQWRkIGFuaW1hdGlvbiAoZmFkZSBpbiB0aGUgcG9wdXApICovXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAgIGZyb20ge29wYWNpdHk6IDA7fVxcbiAgICB0byB7b3BhY2l0eTogMTt9XFxuICB9XFxuICBcXG4gIEBrZXlmcmFtZXMgZmFkZUluIHtcXG4gICAgZnJvbSB7b3BhY2l0eTogMDt9XFxuICAgIHRvIHtvcGFjaXR5OjEgO31cXG4gIH1cXG5cXG5cXG4uaXRlbS1mb3JtIGxhYmVsIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG4vKiAuaXRlbS1mb3JtICBpbnB1dFt0eXBlPWRhdGVdIHtcXG59ICovXFxuLml0ZW0tZm9ybSBzZWxlY3Qge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG5cXG59XFxuLnByb2plY3RzIGgyIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDEsIDIzNSwgMjQ1LCAwLjcpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIG1hcmdpbjogMTBweCAwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyMzUsIDI0NSwgMC41KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgcGFkZGluZzogMjBweCAzMHB4O1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuXFxuXFxufVxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDEsIDIzNSwgMjQ1LCAwLjcpO1xcblxcbn1cXG4ubGlzdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG4ubGlzdC1pdGVtIHtcXG4gICAgbWFyZ2luOiAwcHggMTBweCAyMHB4IDEwcHg7XFxuICAgIC8qIG1hcmdpbi1ib3R0b206IDIwcHg7ICovXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtZ2FwOiAyMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgNWZyIDFmciAxZnI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDEsIDIzNSwgMjQ1LCAwLjcpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBhbmltYXRpb246IGZhZGVJbiAxcztcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5saXN0LWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MSwgMjM1LCAyNDUsIDAuOSk7XFxuXFxufVxcbi5saXN0LWNvbnRhaW5lciB7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTI1MHB4KSB7XFxuXFxuICAgIC50YXNrLWJvZHkge1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICB9XFxuXFxuXFxuICAgICNjb250ZW50IHtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuXFxuXFxuXFxuICAgIH1cXG4gICAgLmFkZC1wcm9qZWN0LXBvcHVwIHtcXG4gICAgICAgIHdpZHRoOiA0NXB4O1xcblxcbiAgICB9XFxuICAgIC5hZGQtaXRlbS1wb3B1cCB7XFxuICAgICAgICB3aWR0aDogNDVweDtcXG5cXG5cXG4gICAgfVxcbiAgICAuYWRkLWl0ZW0tZm9ybSB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG5cXG4gICAgfVxcblxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcXG4gICAgLm5ldy1wcm9qZWN0LWZvcm0ge1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbiAgICB9XFxuICAgIC5saXN0LW5hbWUge1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgfVxcblxcblxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpICB7XFxuICAgICNjb250ZW50IHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xcblxcbiAgICB9XFxuICAgIC5saXN0LWl0ZW0ge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICAgICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIH1cXG4gICAgLnByaW9yaXR5LWNpcmNsZSwgLmVkaXQtYnRuLCAuZXhwYW5kLWJ0biAgIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgfVxcbiAgICAudGFzay1ib2R5IHtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIH1cXG4gICAgLnByb2plY3RzIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgICAgICBvcmRlcjogMTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgICAucHJvamVjdHMgaDIge1xcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICB9XFxuICAgIC5wcm9qZWN0IHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzcHg7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG4gICAgfVxcbiAgICAuY2hlY2ttYXJrIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS43KSAhaW1wb3J0YW50O1xcbiAgICAgICAgdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XFxuICAgIH1cXG5cXG4gICAgLm5ldy1wcm9qZWN0LWZvcm0gaW5wdXQge1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG5cXG4gICAgfVxcbiAgICAuYWRkLWl0ZW0tZm9ybSBpbnB1dCB7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICB9XFxuICAgIFxcbn1cXG5cXG4uZWRpdC1idG4ge1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDpub25lO1xcbn1cXG4uZWRpdC1idG46aG92ZXIsIC5leHBhbmQtYnRuOmhvdmVyIHtcXG4gICAgY29sb3I6ZGFya21hZ2VudGE7XFxufVxcbi5leHBhbmQtYnRuIHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG4uY2hlY2stY29udGFpbmVyIHtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmctbGVmdDogMzVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIFxcbiAgfVxcbiAgXFxuICAvKiBIaWRlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCBjaGVja2JveCAqL1xcbiAgLmNoZWNrLWNvbnRhaW5lciBpbnB1dCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHdpZHRoOiAwO1xcbiAgfVxcbiAgXFxuICAvKiBDcmVhdGUgYSBjdXN0b20gY2hlY2tib3ggKi9cXG4gIC5jaGVja21hcmsge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDEwcHg7XFxuICAgIHRvcDogMjBweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyLjMpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBkYXJrY3lhbjtcXG5cXG4gIH1cXG4gIFxcbiAgLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yICovXFxuICAuY2hlY2stY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICB9XFxuICBcXG4gIC8qIFdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xcbiAgLmNoZWNrLWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuICB9XFxuXFxuLmNoZWNrbWFyazphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICBcXG4gIC8qIFNob3cgdGhlIGNoZWNrbWFyayB3aGVuIGNoZWNrZWQgKi9cXG4gIC5jaGVjay1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gIFxcbiAgLyogU3R5bGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKi9cXG4gIC5jaGVjay1jb250YWluZXIgLmNoZWNrbWFyazphZnRlciB7XFxuICAgIGxlZnQ6IDlweDtcXG4gICAgdG9wOiA1cHg7XFxuICAgIHdpZHRoOiA1cHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgYm9yZGVyOiBzb2xpZCAjMDJmNzBiO1xcbiAgICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgfVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHNhdmVJdGVtIGZyb20gXCIuL3NhdmVJdGVtLmpzXCI7XG5pbXBvcnQgaXRlbUZvcm1QYXJ0aWFsIGZyb20gXCIuL2l0ZW1Gb3JtUGFydGlhbC5qc1wiO1xuaW1wb3J0IGRpc3BsYXlGb3JtQ29udHJvbGxlciBmcm9tIFwiLi9kaXNwbGF5Rm9ybS5qc1wiO1xuaW1wb3J0IGRpc3BsYXlMaXN0IGZyb20gXCIuL2Rpc3BsYXlMaXN0LmpzXCI7XG5cbmNvbnN0IGFkZEl0ZW1Gb3JtID0gKGxpc3QpID0+IHtcbiAgICBjb25zdCBwYXJ0aWFsID0gaXRlbUZvcm1QYXJ0aWFsKCdhZGQnKTtcbiAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2stdGl0bGUnKTtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLWRlc2MnKTtcbiAgICB2YXIgZHVlRGF0ZSA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2stZGF0ZScpO1xuICAgIHZhciBwcmlvcml0eSA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2stcHJpb3JpdHknKTtcblxuICAgIGNvbnN0IGFkZEl0ZW1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRJdGVtQnRuLmNsYXNzTmFtZSA9IFwiYWRkLWl0ZW0tYnRuXCI7XG4gICAgYWRkSXRlbUJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIGEgdGFza1wiO1xuICAgIGFkZEl0ZW1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBuZXdUYXNrID0ge1xuICAgICAgICAgICAgdGl0bGU6IGlucHV0LnZhbHVlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgICAgICAgZHVlRGF0ZTogZHVlRGF0ZS52YWx1ZSxcbiAgICAgICAgICAgIHByaW9yaXR5OiBwcmlvcml0eS52YWx1ZVxuICAgICAgICB9XG4gICAgICAgIHNhdmVJdGVtKG5ld1Rhc2ssIGxpc3QuaWQpO1xuICAgICAgICBkaXNwbGF5TGlzdChsaXN0LmlkKTtcbiAgICAgICAgZGlzcGxheUZvcm1Db250cm9sbGVyKCk7XG4gICAgICAgIFxuICAgIH0pO1xuICAgIGNvbnN0IGl0ZW1Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1pdGVtLWZvcm0nKTtcbiAgICBpdGVtRm9ybS5hcHBlbmRDaGlsZChhZGRJdGVtQnRuKTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBhZGRJdGVtRm9ybTsiLCJpbXBvcnQgZXhwYW5kSXRlbSBmcm9tIFwiLi9leHBhbmRJdGVtXCI7XG5cbmNvbnN0IGNvbGxhcHNlSXRlbSA9ICh0YXNrLCBldmVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHRhc2spXG4gICAgdmFyIGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBgdGl0bGU6ICR7dGFzay50aXRsZX1gO1xuICAgIGVsZW1lbnQub25jbGljayA9IChldmVudCkgPT4gZXhwYW5kSXRlbSh0YXNrLCBldmVudCk7XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBjb2xsYXBzZUl0ZW07IiwiY29uc3QgY3JlYXRlUHJvamVjdCA9IChpbnB1dCkgPT4ge1xuICAgIGxldCB0YXNrcyA9IFtdXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oaW5wdXQsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVByb2plY3Q7IiwiaW1wb3J0IGRpc3BsYXlMaXN0IGZyb20gXCIuL2Rpc3BsYXlMaXN0LmpzXCI7XG5jb25zdCBkZWxldGVJdGVtID0gKGxpc3QsIGluZGV4KSA9PiB7XG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgIHZhciBpdGVtcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obGlzdCkpO1xuICAgIGl0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgaXRlbXMgPSBKU09OLnN0cmluZ2lmeShpdGVtcyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obGlzdCwgaXRlbXMpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7ZGlzcGxheUxpc3QobGlzdCl9LCAxMDAwKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVsZXRlSXRlbTsiLCJpbXBvcnQgZWRpdEl0ZW1Gb3JtIGZyb20gXCIuL2VkaXRJdGVtRm9ybVwiXG5cbmNvbnN0IGRpc3BsYXlGb3JtQ29udHJvbGxlciA9IChhY3Rpb24pID0+IHtcbiAgICBjb25zdCBpdGVtZm9ybSA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWl0ZW0tZm9ybScpO1xuICAgIGNvbnN0IHByb2pmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0LWZvcm0nKTtcbiAgICBjb25zdCBlZGl0Zm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWl0ZW0tZm9ybScpO1xuICAgIGNvbnN0IGl0ZW1leHBhbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1leHBhbmQnKTtcblxuICAgIGlmIChlZGl0Zm9ybSAhPT0gbnVsbCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdC1pdGVtLWZvcm0nKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICBlbGVtZW50Lm91dGVySFRNTCA9IFwiXCI7IFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGl0ZW1leHBhbmQgIT09IG51bGwpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLml0ZW0tZXhwYW5kJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgZWxlbWVudC5vdXRlckhUTUwgPSBcIlwiOyBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbiA9PT0gJ2VkaXQnKSB7XG4gICAgICAgIHByb2pmb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgaXRlbWZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgfSBlbHNlIGlmIChhY3Rpb24gPT09ICdhZGQtaXRlbScpIHtcbiAgICAgICAgaXRlbWZvcm0uc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xuICAgICAgICBwcm9qZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PT0gJ2FkZC1wcm9qZWN0Jykge1xuICAgICAgICBwcm9qZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XG4gICAgICAgIGl0ZW1mb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwcm9qZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGl0ZW1mb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlGb3JtQ29udHJvbGxlcjsiLCJpbXBvcnQgZGVsZXRlSXRlbSBmcm9tIFwiLi9kZWxldGVJdGVtLmpzXCI7XG5pbXBvcnQgZGlzcGxheUZvcm1Db250cm9sbGVyIGZyb20gXCIuL2Rpc3BsYXlGb3JtLmpzXCI7XG5pbXBvcnQgZWRpdEl0ZW1Gb3JtIGZyb20gXCIuL2VkaXRJdGVtRm9ybS5qc1wiO1xuaW1wb3J0IGV4cGFuZEl0ZW0gZnJvbSBcIi4vZXhwYW5kSXRlbS5qc1wiO1xuXG5jb25zdCBkaXNwbGF5SXRlbU1pbiA9IChsaXN0TmFtZSwgaW5kZXgpID0+IHtcbiAgICB2YXIgaXRlbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxpc3ROYW1lKSk7XG4gICAgY29uc3QgdGFzayA9IGl0ZW1zW2luZGV4XTtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGV4dC50ZXh0Q29udGVudCA9IGAke3Rhc2sudGl0bGV9YDtcbiAgICB0ZXh0LmNsYXNzTmFtZSA9IFwidGFzay1ib2R5XCI7XG4gICAgZGl2LmFwcGVuZENoaWxkKHRleHQpO1xuXG4gICAgY29uc3QgcHJpb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcmlvci5jbGFzc05hbWUgPSBcImZhcyBmYS1jaXJjbGUgcHJpb3JpdHktY2lyY2xlXCI7XG4gICAgaWYgKHRhc2sucHJpb3JpdHkgPT09IFwiSGlnaFwiKSB7XG4gICAgICAgIHByaW9yLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcbiAgICB9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT09IFwiTWlkXCIpIHtcbiAgICAgICAgcHJpb3Iuc3R5bGUuY29sb3IgPSBcImRhcmtvcmFuZ2VcIjtcbiAgICB9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT09IFwiTG93XCIpIHtcbiAgICAgICAgcHJpb3Iuc3R5bGUuY29sb3IgPSBcImdyZWVuXCI7XG4gICAgfVxuICAgIFxuXG4gICAgY29uc3QgY2hlY2tsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY2hlY2tsYWJlbC5jbGFzc05hbWUgPSBcImNoZWNrLWNvbnRhaW5lclwiO1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGVsZXRlQnRuLnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgY2hlY2tsYWJlbC5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICAgIC8vIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9IFwiREVMRVRFRCFcIjtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNwYW4uY2xhc3NOYW1lID0gXCJjaGVja21hcmtcIjtcbiAgICBjaGVja2xhYmVsLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIGRlbGV0ZUJ0bi5vbmNsaWNrID0gKCkgPT4gZGVsZXRlSXRlbShsaXN0TmFtZSwgaW5kZXgpO1xuICAgIGRpdi5wcmVwZW5kKGNoZWNrbGFiZWwpO1xuICAgIGRpdi5wcmVwZW5kKHByaW9yKTtcblxuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlZGl0QnRuLmNsYXNzTmFtZSA9IFwiZWRpdC1idG4gZmFzIGZhLWVkaXQgZmEtMnhcIjtcbiAgICBlZGl0QnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGRpc3BsYXlGb3JtQ29udHJvbGxlcignZWRpdCcpO1xuICAgICAgICBlZGl0SXRlbUZvcm0obGlzdE5hbWUsIGluZGV4KTtcbiAgICB9O1xuICAgIGRpdi5hcHBlbmRDaGlsZChlZGl0QnRuKTtcblxuICAgIGNvbnN0IGV4cGFuZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGV4cGFuZEJ0bi5jbGFzc05hbWUgPSBcImV4cGFuZC1idG4gZmFzIGZhLWVsbGlwc2lzLWggZmEtMnhcIjtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZXhwYW5kQnRuKTtcbiAgICBleHBhbmRCdG4ub25jbGljayA9ICgpID0+IGV4cGFuZEl0ZW0odGFzayk7XG5cbiAgICByZXR1cm4gZGl2XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5SXRlbU1pbjsiLCJpbXBvcnQgZXhwYW5kSXRlbSBmcm9tIFwiLi9leHBhbmRJdGVtLmpzXCI7XG5pbXBvcnQgZGVsZXRlSXRlbSBmcm9tIFwiLi9kZWxldGVJdGVtLmpzXCI7XG5pbXBvcnQgZWRpdEl0ZW1Gb3JtIGZyb20gXCIuL2VkaXRJdGVtRm9ybS5qc1wiO1xuaW1wb3J0IGRpc3BsYXlJdGVtTWluIGZyb20gXCIuL2Rpc3BsYXlJdGVtTWluLmpzXCI7XG5cbmNvbnN0IGRpc3BsYXlMaXN0ID0gKGxpc3ROYW1lKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QnKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1uYW1lJyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IGAke2xpc3ROYW1lfSBUbyBEbydzYDtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwnKTtcbiAgICBsaXN0LmlkID0gbGlzdE5hbWU7XG4gICAgY29uc3QgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxpc3ROYW1lKSk7XG4gICAgdGFza3MuZm9yRWFjaCggKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkaXNwbGF5SXRlbU1pbihsaXN0TmFtZSwgaW5kZXgpO1xuICAgICAgICBpdGVtLmNsYXNzTmFtZSA9IFwibGlzdC1pdGVtXCI7XG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgfSlcblxufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5TGlzdDsiLCJpbXBvcnQgZGlzcGxheUxpc3QgZnJvbSBcIi4vZGlzcGxheUxpc3RcIjtcblxuY29uc3QgZGlzcGxheVByb2plY3RzID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIHZhciBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcbiAgICBpZiAobGlzdCA9PT0gbnVsbCkge1xuICAgICAgICBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxpc3QuY2xhc3NOYW1lID0gXCJwcm9qZWN0c1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG5cblxuIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xuICAgICAgICAgICAgbGkudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgICAgICAgICAgbGkuY2xhc3NOYW1lID0gXCJwcm9qZWN0XCI7XG4gICAgICAgICAgICBsaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5TGlzdChuYW1lKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgfVxuICAgICAgICBsaXN0LnByZXBlbmQoaGVhZGluZyk7XG4gICAgICAgIGNvbnRlbnQucHJlcGVuZChsaXN0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheVByb2plY3RzOyIsImNvbnN0IGVkaXRJdGVtID0gKGxpc3QsIGVkaXRlZEluZm8sIGluZGV4KSA9PiB7XG4gICAgdmFyIGl0ZW1zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsaXN0KSk7XG4gICAgaXRlbXNbaW5kZXhdID0gZWRpdGVkSW5mbztcbiAgICBpdGVtcyA9IEpTT04uc3RyaW5naWZ5KGl0ZW1zKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsaXN0LCBpdGVtcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGVkaXRJdGVtOyIsImltcG9ydCBpdGVtRm9ybVBhcnRpYWwgZnJvbSBcIi4vaXRlbUZvcm1QYXJ0aWFsLmpzXCI7XG5pbXBvcnQgZWRpdEl0ZW0gZnJvbSBcIi4vZWRpdEl0ZW0uanNcIjtcbmltcG9ydCBkaXNwbGF5TGlzdCBmcm9tIFwiLi9kaXNwbGF5TGlzdC5qc1wiO1xuaW1wb3J0IGRpc3BsYXlGb3JtQ29udHJvbGxlciBmcm9tIFwiLi9kaXNwbGF5Rm9ybS5qc1wiO1xuXG5jb25zdCBlZGl0SXRlbUZvcm0gPSAobGlzdCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXJ0aWFsID0gaXRlbUZvcm1QYXJ0aWFsKCdlZGl0Jyk7XG4gICAgLy9yZXRyZWl2ZSB0YXNrIGZyb20gc3RvcmFnZVxuICAgIHZhciBpdGVtcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obGlzdCkpO1xuICAgIGNvbnN0IHRhc2sgPSBpdGVtc1tpbmRleF07XG4gICAgLy8gZmlsbCBlZGl0IGZvcm0gd2l0aCB0YXNrJ3MgZGF0YVxuICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stdGl0bGUnKTtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay1kZXNjJyk7XG4gICAgdmFyIGR1ZURhdGUgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay1kYXRlJyk7XG4gICAgdmFyIHByaW9yaXR5ID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stcHJpb3JpdHknKTtcbiAgICBpbnB1dC52YWx1ZSA9IHRhc2sudGl0bGU7XG4gICAgZGVzY3JpcHRpb24udmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgIGR1ZURhdGUudmFsdWUgPSB0YXNrLmR1ZURhdGU7XG4gICAgcHJpb3JpdHkudmFsdWUgPSB0YXNrLnByaW9yaXR5O1xuICAgIFxuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlZGl0QnRuLmNsYXNzTmFtZSA9XCJlZGl0LWZvcm0tYnRuXCI7XG4gICAgZWRpdEJ0bi50ZXh0Q29udGVudCA9IFwiU3VibWl0IGVkaXRzXCI7XG4gICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRhc2tFZGl0cyA9IHtcbiAgICAgICAgICAgIHRpdGxlOiBpbnB1dC52YWx1ZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgICAgICAgIGR1ZURhdGU6IGR1ZURhdGUudmFsdWUsXG4gICAgICAgICAgICBwcmlvcml0eTogcHJpb3JpdHkudmFsdWVcbiAgICAgICAgfVxuICAgICAgICBlZGl0SXRlbShsaXN0LCB0YXNrRWRpdHMsIGluZGV4KTtcbiAgICAgICAgZGlzcGxheUxpc3QobGlzdCk7XG4gICAgICAgIGRpc3BsYXlGb3JtQ29udHJvbGxlcigpO1xuICAgICAgICBcbiAgICB9KTtcbiAgICAvLyBmb3JtLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICAgIC8vIGRpdi5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICBwYXJ0aWFsLmFwcGVuZChlZGl0QnRuKTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBlZGl0SXRlbUZvcm07IiwiaW1wb3J0IGNvbGxhcHNlSXRlbSBmcm9tIFwiLi9jb2xsYXBzZUl0ZW1cIjtcbmltcG9ydCBkaXNwbGF5Rm9ybUNvbnRyb2xsZXIgZnJvbSBcIi4vZGlzcGxheUZvcm1cIjtcblxuY29uc3QgZXhwYW5kSXRlbSA9ICh0YXNrKSA9PiB7XG4gICAgZGlzcGxheUZvcm1Db250cm9sbGVyKClcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTmFtZSA9XCJpdGVtLWV4cGFuZFwiO1xuXG4gICAgY29uc3QgY2xvc2VQb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNsb3NlUG9wdXAuY2xhc3NOYW1lID0gXCJmYXMgZmEtdGltZXMgY2xvc2UtcG9wdXAgZmEtMnhcIjtcbiAgICBjbG9zZVBvcHVwLm9uY2xpY2sgPSAoKSA9PiBkaXNwbGF5Rm9ybUNvbnRyb2xsZXIoKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY2xvc2VQb3B1cCk7XG5cbiAgICBjb25zdCB0aXRsZXdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZXdyYXBwZXIuY2xhc3NOYW1lID0gXCJpdGVtLXNlY3Rpb24td3JhcHBlclwiO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUuaWQgPSBcInRhc2stdGl0bGVcIjtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGAke3Rhc2sudGl0bGV9YDtcbiAgICB2YXIgaXRlbUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBpdGVtTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIHRpdGxlLmlkKTtcbiAgICBpdGVtTGFiZWwuaW5uZXJIVE1MID0gXCJUYXNrXCI7XG4gICAgdGl0bGV3cmFwcGVyLmFwcGVuZENoaWxkKGl0ZW1MYWJlbCk7XG4gICAgdGl0bGV3cmFwcGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGl0bGV3cmFwcGVyKTtcbiAgICBcbiAgICBjb25zdCBkZXNjcmlwdGlvbndyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjcmlwdGlvbndyYXBwZXIuY2xhc3NOYW1lID0gXCJpdGVtLXNlY3Rpb24td3JhcHBlclwiO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY3JpcHRpb24uaWQgPSBcInRhc2stZGVzY3JpcHRpb25cIjtcblxuICAgIGlmICh0YXNrLmRlc2NyaXB0aW9uID09PSBcIlwiKSB7XG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJOL0FcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGAke3Rhc2suZGVzY3JpcHRpb259YDtcbiAgICB9XG4gICAgdmFyIGl0ZW1MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgaXRlbUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBkZXNjcmlwdGlvbi5pZCk7XG4gICAgaXRlbUxhYmVsLmlubmVySFRNTCA9IFwiRGV0YWlsc1wiO1xuICAgIGRlc2NyaXB0aW9ud3JhcHBlci5hcHBlbmRDaGlsZChpdGVtTGFiZWwpO1xuICAgIGRlc2NyaXB0aW9ud3JhcHBlci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9ud3JhcHBlcik7XG5cbiAgICBjb25zdCBkdWVEYXRld3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGR1ZURhdGV3cmFwcGVyLmNsYXNzTmFtZSA9IFwiaXRlbS1zZWN0aW9uLXdyYXBwZXJcIjtcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHVlRGF0ZS5pZCA9IFwidGFzay1kdWVkYXRlXCI7XG4gICAgaWYgKHRhc2suZHVlRGF0ZSA9PT0gXCJcIikge1xuICAgICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gXCJOL0FcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gYCR7dGFzay5kdWVEYXRlfWA7XG4gICAgfVxuICAgIHZhciBpdGVtTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGl0ZW1MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgZHVlRGF0ZS5pZCk7XG4gICAgaXRlbUxhYmVsLmlubmVySFRNTCA9IFwiRHVlIGRhdGVcIjtcbiAgICBkdWVEYXRld3JhcHBlci5hcHBlbmRDaGlsZChpdGVtTGFiZWwpO1xuICAgIGR1ZURhdGV3cmFwcGVyLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChkdWVEYXRld3JhcHBlcik7XG5cbiAgICBjb25zdCBwcmlvcml0eXdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcmlvcml0eXdyYXBwZXIuY2xhc3NOYW1lID0gXCJpdGVtLXNlY3Rpb24td3JhcHBlclwiO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJpb3JpdHkuaWQgPSBcInRhc2stcHJpb3JpdHlcIjtcbiAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IGAke3Rhc2sucHJpb3JpdHl9YDtcbiAgICB2YXIgaXRlbUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBpdGVtTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIHByaW9yaXR5LmlkKTtcbiAgICBpdGVtTGFiZWwuaW5uZXJIVE1MID0gXCJQcmlvcml0eVwiO1xuICAgIHByaW9yaXR5d3JhcHBlci5hcHBlbmRDaGlsZChpdGVtTGFiZWwpO1xuICAgIHByaW9yaXR5d3JhcHBlci5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHByaW9yaXR5d3JhcHBlcik7XG4gICAgXG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdik7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZXhwYW5kSXRlbTsiLCJpbXBvcnQgY3JlYXRlUHJvamVjdCBmcm9tIFwiLi9jcmVhdGVQcm9qZWN0LmpzXCI7XG5pbXBvcnQgZGlzcGxheUxpc3QgZnJvbSBcIi4vZGlzcGxheUxpc3QuanNcIjtcbmltcG9ydCBzYXZlSXRlbSBmcm9tIFwiLi9zYXZlSXRlbS5qc1wiO1xuaW1wb3J0IGRpc3BsYXlQcm9qZWN0cyBmcm9tIFwiLi9kaXNwbGF5UHJvamVjdHMuanNcIjtcbmltcG9ydCBhZGRJdGVtRm9ybSBmcm9tIFwiLi9hZGRJdGVtRm9ybS5qc1wiO1xuaW1wb3J0IG5ld1Byb2plY3RGb3JtIGZyb20gXCIuL25ld1Byb2plY3RGb3JtLmpzXCI7XG5cbmNvbnN0IEhvbWVET00gPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTmFtZSA9XCJsaXN0LWNvbnRhaW5lclwiO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAgIC8vcmVuZGVyIGhlYWRpbmdcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkaW5nLmNsYXNzTmFtZSA9IFwibGlzdC1uYW1lXCI7XG4gICAgZGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG4gICAgLy9yZW5kZXIgbGlzdFxuICAgIHZhciBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBsaXN0LmNsYXNzTmFtZSA9ICdsaXN0JztcbiAgICBsaXN0LmlkID0gXCJNYWluXCI7XG4gICAgZGl2LmFwcGVuZENoaWxkKGxpc3QpO1xuXG4gICAgYWRkSXRlbUZvcm0obGlzdCk7XG4gICAgbmV3UHJvamVjdEZvcm0oKTtcbiAgICBcbiAgICBkaXNwbGF5TGlzdChsaXN0LmlkKTtcbiAgICBkaXNwbGF5UHJvamVjdHMoKTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lRE9NOyIsImltcG9ydCBkaXNwbGF5Rm9ybUNvbnRyb2xsZXIgZnJvbSBcIi4vZGlzcGxheUZvcm1cIjtcblxuY29uc3QgaXRlbUZvcm1QYXJ0aWFsID0gKGFjdGlvbikgPT4ge1xuXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtLmNsYXNzTmFtZSA9IGAke2FjdGlvbn0taXRlbS1mb3JtYDtcbiAgICBjb25zdCBjbG9zZVBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2xvc2VQb3B1cC5jbGFzc05hbWUgPSBcImZhcyBmYS10aW1lcyBjbG9zZS1wb3B1cFwiO1xuICAgIGNsb3NlUG9wdXAub25jbGljayA9ICgpID0+IGRpc3BsYXlGb3JtQ29udHJvbGxlcigpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2xvc2VQb3B1cCk7XG5cbiAgICBjb25zdCBpbnB1dHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbnB1dHdyYXBwZXIuY2xhc3NOYW1lID0gXCJmb3JtLXNlY3Rpb24td3JhcHBlclwiO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgaW5wdXQucGxhY2Vob2xkZXIgPSBcIlRhc2sgbmFtZVwiO1xuICAgIGlucHV0LmlkID0gYCR7YWN0aW9ufS10YXNrLXRpdGxlYDtcbiAgICB2YXIgaXRlbUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBpdGVtTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGlucHV0LmlkKTtcbiAgICBpdGVtTGFiZWwuaW5uZXJIVE1MID0gXCJUYXNrIG5hbWVcIjtcbiAgICBpbnB1dHdyYXBwZXIuYXBwZW5kQ2hpbGQoaXRlbUxhYmVsKTtcbiAgICBpbnB1dHdyYXBwZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXR3cmFwcGVyKTtcbiAgICBcbiAgICBjb25zdCBkZXNjd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc2N3cmFwcGVyLmNsYXNzTmFtZSA9IFwiZm9ybS1zZWN0aW9uLXdyYXBwZXJcIjtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGVzY3JpcHRpb24udHlwZSA9IFwidGV4dFwiO1xuICAgIGRlc2NyaXB0aW9uLnBsYWNlaG9sZGVyID0gXCJEZXNjcmlwdGlvblwiO1xuICAgIGRlc2NyaXB0aW9uLmlkID1gJHthY3Rpb259LXRhc2stZGVzY2A7XG4gICAgdmFyIGRlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGVzY0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBkZXNjcmlwdGlvbi5pZCk7XG4gICAgZGVzY0xhYmVsLmlubmVySFRNTCA9IFwiRGVzY3JpcHRpb25cIjtcbiAgICBkZXNjd3JhcHBlci5hcHBlbmRDaGlsZChkZXNjTGFiZWwpO1xuICAgIGRlc2N3cmFwcGVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2N3cmFwcGVyKTtcbiAgICBcbiAgICBjb25zdCBkYXRld3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRhdGV3cmFwcGVyLmNsYXNzTmFtZSA9IFwiZm9ybS1zZWN0aW9uLXdyYXBwZXJcIjtcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkdWVEYXRlLnR5cGUgPSBcImRhdGVcIjtcbiAgICBkdWVEYXRlLmlkID0gYCR7YWN0aW9ufS10YXNrLWRhdGVgO1xuICAgIHZhciBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgZHVlRGF0ZS5pZCk7XG4gICAgZGF0ZUxhYmVsLmlubmVySFRNTCA9IFwiIER1ZSBkYXRlXCI7XG4gICAgZGF0ZXdyYXBwZXIuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgICBkYXRld3JhcHBlci5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGV3cmFwcGVyKTtcblxuICAgIGNvbnN0IHByaW9yd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByaW9yd3JhcHBlci5jbGFzc05hbWUgPSBcImZvcm0tc2VjdGlvbi13cmFwcGVyXCI7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBwcmlvcml0eS5jbGFzc05hbWUgPSBcInByaW9yaXR5LXNlbGVjdFwiO1xuICAgIHByaW9yaXR5LmlkID0gYCR7YWN0aW9ufS10YXNrLXByaW9yaXR5YDtcbiAgICB2YXIgb3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uMSk7XG4gICAgdmFyIG9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbjIpO1xuICAgIHZhciBvcHRpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb24zKTtcbiAgICBvcHRpb24xLnZhbHVlID0gXCJIaWdoXCI7XG4gICAgb3B0aW9uMS50ZXh0ID0gXCJIaWdoXCI7XG4gICAgb3B0aW9uMi52YWx1ZSA9IFwiTWlkXCI7XG4gICAgb3B0aW9uMi50ZXh0ID0gXCJNaWRcIjtcbiAgICBvcHRpb24zLnZhbHVlID0gXCJMb3dcIjtcbiAgICBvcHRpb24zLnRleHQgPSBcIkxvd1wiO1xuICAgIHZhciBwcmlvckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwcmlvckxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBwcmlvcml0eS5pZCk7XG4gICAgcHJpb3JMYWJlbC5pbm5lckhUTUwgPSBcIlByaW9yaXR5XCI7XG4gICAgcHJpb3J3cmFwcGVyLmFwcGVuZENoaWxkKHByaW9yTGFiZWwpO1xuICAgIHByaW9yd3JhcHBlci5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcndyYXBwZXIpO1xuICAgIFxuICAgIGRpdi5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICByZXR1cm4gZm9ybVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGl0ZW1Gb3JtUGFydGlhbDsiLCJpbXBvcnQgY3JlYXRlUHJvamVjdCBmcm9tIFwiLi9jcmVhdGVQcm9qZWN0LmpzXCI7XG5pbXBvcnQgZGlzcGxheUZvcm1Db250cm9sbGVyIGZyb20gXCIuL2Rpc3BsYXlGb3JtLmpzXCI7XG5pbXBvcnQgZGlzcGxheVByb2plY3RzIGZyb20gXCIuL2Rpc3BsYXlQcm9qZWN0cy5qc1wiO1xuXG5jb25zdCBuZXdQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3UHJvamVjdEZvcm0uY2xhc3NOYW1lID0gXCJuZXctcHJvamVjdC1mb3JtXCI7XG5cbiAgICBjb25zdCBjbG9zZVBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2xvc2VQb3B1cC5jbGFzc05hbWUgPSBcImZhcyBmYS10aW1lcyBjbG9zZS1wb3B1cCBmYS0yeFwiO1xuICAgIGNsb3NlUG9wdXAub25jbGljayA9ICgpID0+IGRpc3BsYXlGb3JtQ29udHJvbGxlcigpO1xuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKGNsb3NlUG9wdXApO1xuXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb2plY3ROYW1lLnR5cGUgPSBcInRleHRcIjtcbiAgICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSlcbiAgXG4gICAgY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5ld1Byb2plY3RCdG4uY2xhc3NOYW1lID0gXCJuZXctcHJvamVjdC1idG5cIjtcbiAgICBuZXdQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gXCJDcmVhdGUgcHJvamVjdFwiO1xuICAgIG5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUudmFsdWUpO1xuICAgICAgICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgICAgICAgZGlzcGxheUZvcm1Db250cm9sbGVyKCk7XG4gICAgfSlcbiAgICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0QnRuKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBuZXdQcm9qZWN0Rm9ybTsiLCJjb25zdCBzYXZlSXRlbSA9IChuZXdUYXNrLCBsaXN0TmFtZSkgPT4ge1xuICAgIGxldCBsaXN0O1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsaXN0TmFtZSkgPT09IG51bGwpIHtcbiAgICAgICAgbGlzdCA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxpc3ROYW1lKSk7XG4gICAgfVxuICAgIGxpc3QucHVzaChuZXdUYXNrKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsaXN0TmFtZSwgSlNPTi5zdHJpbmdpZnkobGlzdCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzYXZlSXRlbTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEhvbWVET00gZnJvbSAnLi9ob21lRG9tLmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGRpc3BsYXlGb3JtIGZyb20gXCIuL2Rpc3BsYXlGb3JtLmpzXCI7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgIC8vbmF2YmFyXG4gICAgY29uc3QgYWRkSXRlbVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1pdGVtLXBvcHVwJyk7XG4gICAgYWRkSXRlbVBvcHVwLm9uY2xpY2sgPSAoKSA9PiBkaXNwbGF5Rm9ybShcImFkZC1pdGVtXCIpO1xuICAgIGNvbnN0IGFkZFByb2plY3RQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1wb3B1cCcpO1xuICAgIGFkZFByb2plY3RQb3B1cC5vbmNsaWNrID0gKCkgPT4gZGlzcGxheUZvcm0oJ2FkZC1wcm9qZWN0Jyk7XG5cblxuICAgIC8vbG9hZCBob21lcGFnZVxuICAgIEhvbWVET00oKTtcblxufSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==