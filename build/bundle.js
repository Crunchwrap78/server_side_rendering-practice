/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(3);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var express = __webpack_require__(4);
var fs = __webpack_require__(5);
var template = __webpack_require__(6);

var server = express();
server.use('/', express.static('public'));
server.get('*', function (req, res) {
  return res.send(template);
});
server.listen(3000, function () {
  console.log('Server running on port 3000.');
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(7);

__webpack_require__(8);

var _App = __webpack_require__(14);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var content = (0, _server.renderToString)(_react2.default.createElement(_App2.default, null));

var jsPath = 'bundle.js';

var template = '\n<!DOCTYPE html>\n<html lang="en">\n    <head>\n        <meta charset="utf-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1">\n        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">\n        <link rel="stylesheet" href="/styles/index.css">\n            <title>My Universal React App</title>\n    </head>\n    <body>\n        <div id="app">' + content + '</div>\n        <script type="text/javascript" src="' + jsPath + '"></script>\n    </body>\n</html>\n';

module.exports = template;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(9);
    var insertCss = __webpack_require__(11);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/sass-loader/lib/loader.js?sourceMap!./index.scss", function() {
        content = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/sass-loader/lib/loader.js?sourceMap!./index.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(true);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700);", ""]);

// module
exports.push([module.i, "header {\n  background: #0C002B;\n  color: #FFF;\n  overflow: auto;\n  padding: 25px 15px; }\n  header .logo {\n    float: left; }\n  header nav {\n    float: right; }\n    header nav a {\n      color: #FFF;\n      text-decoration: none;\n      padding: 7px 20px;\n      text-transform: capitalize;\n      font-weight: 300;\n      font-size: 0.9rem; }\n      header nav a:hover {\n        color: #FF718E; }\n      header nav a.register-btn {\n        background: #FF718E;\n        padding: 7px 25px;\n        text-align: center;\n        color: #FFF;\n        border-radius: 5px; }\n\n#sidebar {\n  background: #FAF7F5;\n  width: 30%;\n  max-width: 300px;\n  display: inline-block;\n  float: left; }\n  #sidebar .inside {\n    padding: 20px;\n    max-width: 300px; }\n  #sidebar h4 {\n    font-size: 0.9rem;\n    margin-bottom: 25px;\n    font-weight: 500px;\n    text-transform: uppercase; }\n  #sidebar select {\n    background: transparent;\n    padding: 10px;\n    font-size: 14px;\n    font-weight: 500;\n    color: #1b1b1b;\n    display: block;\n    margin-bottom: 25px;\n    width: 100%; }\n  #sidebar .filters .title {\n    font-size: 0.9rem;\n    display: block;\n    margin-bottom: 1rem;\n    color: #ADA8AA; }\n  #sidebar .filters input[type=\"text\"] {\n    border-radius: 5px;\n    font-size: 1rem;\n    padding: 0.4rem;\n    width: 45%;\n    display: inline-block;\n    margin-right: 2.5%;\n    margin-bottom: 1rem; }\n  #sidebar .filters.extras label {\n    display: block;\n    width: 100%;\n    padding: 10px 0; }\n    #sidebar .filters.extras label input[type=\"checkbox\"] {\n      float: right; }\n\n#content-area {\n  overflow: auto;\n  width: 100%;\n  min-height: 100vh; }\n\n#content-list {\n  width: 70%;\n  float: left;\n  display: inline-block;\n  padding: 15px;\n  background: #FFFEFF; }\n  #content-list .search-area input[type=\"text\"] {\n    width: 70%;\n    background: transparent;\n    font-size: 2rem;\n    border: none;\n    border-bottom: 1px solid #ADA8AA;\n    margin-bottom: 20px;\n    font-weight: 100;\n    color: #D1CBCD; }\n  #content-list .sortby-area {\n    margin-bottom: 20px; }\n    #content-list .sortby-area .results {\n      color: #ADA8AA;\n      font-size: 0.8rem;\n      display: inline-block; }\n    #content-list .sortby-area .sort-options {\n      float: right; }\n      #content-list .sortby-area .sort-options select {\n        font-size: 0.9rem;\n        font-weight: 300;\n        border: 1px solid #D1CBCD;\n        background: transparent;\n        padding: 20px;\n        display: inline-block;\n        margin-right: 15px;\n        vertical-align: top; }\n      #content-list .sortby-area .sort-options .view {\n        display: inline-block; }\n        #content-list .sortby-area .sort-options .view .fa {\n          margin-right: 15px;\n          font-size: 1.5rem; }\n  #content-list .listings-results {\n    margin-bottom: 60px; }\n    #content-list .listings-results .listing {\n      background: #fff;\n      border-radius: 5px;\n      -webkit-box-shadow: 0 9px 54px -4px #e0e0e0;\n      -moz-box-shadow: 0 9px 54px -4px #e0e0e0;\n      box-shadow: 0 9px 54px -4px #e0e0e0; }\n    #content-list .listings-results .listing-img {\n      color: white;\n      padding: 15px;\n      position: relative;\n      background: url(\"http://cdn.freshome.com/wp-content/uploads/2014/04/Gorgeous-evening-view-of-Russet-Residence--1025x450.jpg\") no-repeat center center;\n      -webkit-background-size: cover;\n      -moz-background-size: cover;\n      -o-background-size: cover;\n      background-size: cover;\n      min-height: 200px;\n      -webkit-border-top-left-radius: 5px;\n      -webkit-border-top-right-radius: 5px;\n      -moz-border-radius-topleft: 5px;\n      -moz-border-radius-topright: 5px;\n      border-top-left-radius: 5px;\n      border-top-right-radius: 5px; }\n      #content-list .listings-results .listing-img:hover .details {\n        opacity: 1; }\n      #content-list .listings-results .listing-img:hover .address {\n        opacity: 0; }\n      #content-list .listings-results .listing-img .address {\n        font-size: 1.3rem;\n        text-transform: capitalize;\n        position: absolute;\n        bottom: 20px;\n        opacity: 1;\n        transition: all 0.4s ease-in-out;\n        text-shadow: 0 1px 4px #5b5b5b; }\n      #content-list .listings-results .listing-img .details {\n        transition: all 0.4s ease-in-out;\n        opacity: 0;\n        padding: 30px;\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        -webkit-border-top-left-radius: 5px;\n        -webkit-border-top-right-radius: 5px;\n        -moz-border-radius-topleft: 5px;\n        -moz-border-radius-topright: 5px;\n        border-top-left-radius: 5px;\n        border-top-right-radius: 5px;\n        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#4e02e5+0,9d1ced+100 */\n        background: rgba(78, 2, 229, 0.8);\n        /* Old browsers */\n        background: -moz-linear-gradient(-45deg, rgba(78, 2, 229, 0.8) 0%, rgba(157, 28, 237, 0.8) 100%);\n        /* FF3.6-15 */\n        background: -webkit-linear-gradient(-45deg, rgba(78, 2, 229, 0.8) 0%, rgba(157, 28, 237, 0.8) 100%);\n        /* Chrome10-25,Safari5.1-6 */\n        background: linear-gradient(135deg, rgba(78, 2, 229, 0.8) 0%, rgba(157, 28, 237, 0.8) 100%);\n        /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=  '#4e02e5', endColorstr='#9d1ced',GradientType=1 );\n        /* IE6-9 fallback on horizontal gradient */ }\n        #content-list .listings-results .listing-img .details .user-img {\n          width: 35px;\n          height: 35px;\n          border-radius: 50%;\n          border: 2px solid white;\n          display: inline-block;\n          background: url(\"http://cdn.freshome.com/wp-content/uploads/2014/04/Gorgeous-evening-view-of-Russet-Residence--1025x450.jpg\") no-repeat center center;\n          -webkit-background-size: cover;\n          -moz-background-size: cover;\n          -o-background-size: cover;\n          background-size: cover; }\n        #content-list .listings-results .listing-img .details .user-details {\n          vertical-align: top;\n          display: inline-block; }\n          #content-list .listings-results .listing-img .details .user-details .user-name {\n            font-weight: 300;\n            font-size: 0.9rem;\n            display: block;\n            color: white;\n            margin-top: 3px;\n            margin-bottom: 5px; }\n          #content-list .listings-results .listing-img .details .user-details .post-date {\n            font-size: 0.9rem;\n            display: block;\n            color: rgba(255, 255, 255, 0.7); }\n        #content-list .listings-results .listing-img .details .listing-details {\n          margin-top: 20px;\n          margin-bottom: 10px; }\n          #content-list .listings-results .listing-img .details .listing-details .fa {\n            display: inline-block;\n            font-size: 20px;\n            margin-right: 15px; }\n          #content-list .listings-results .listing-img .details .listing-details span {\n            font-weight: 300;\n            font-size: 0.8rem;\n            display: inline-block;\n            vertical-align: top;\n            position: relative;\n            top: 3px; }\n          #content-list .listings-results .listing-img .details .listing-details .floor-space {\n            margin-bottom: 10px; }\n    #content-list .listings-results .bottom-info {\n      padding: 20px 15px; }\n      #content-list .listings-results .bottom-info .price {\n        font-size: 1rem;\n        display: block;\n        margin-bottom: 10px;\n        color: #ADA8AA; }\n      #content-list .listings-results .bottom-info .location {\n        font-size: 1.2rem;\n        display: block;\n        color: #D1CBCD; }\n\n.view-btn {\n  background: black;\n  padding: 8px;\n  font-size: 0.9rem;\n  border-radius: 5px;\n  text-align: center;\n  max-width: 150px;\n  transition: background 0.3s ease-in-out; }\n  .view-btn:hover {\n    background: #FF718E;\n    cursor: pointer; }\n\n.col-md-3 {\n  width: 25%;\n  display: inline-block;\n  vertical-align: top; }\n\n.col-md-9 {\n  width: 75%;\n  display: inline-block; }\n\n.col-md-4 {\n  width: 25%;\n  padding: 0 15px;\n  display: inline-block;\n  vertical-align: top; }\n\n#pagination {\n  width: 100%;\n  display: block;\n  text-align: center; }\n  #pagination .pages {\n    padding-left: 0px;\n    margin: 0 auto;\n    display: inline-block;\n    background: #FFF;\n    -webkit-box-shadow: 0 9px 54px -4px #e0e0e0;\n    -moz-box-shadow: 0 9px 54px -4px #e0e0e0;\n    box-shadow: 0 9px 54px -4px #e0e0e0; }\n    #pagination .pages li {\n      padding: 20px 30px;\n      display: inline-block; }\n      #pagination .pages li.active, #pagination .pages li:hover {\n        color: white;\n        font-weight: 700;\n        background: #FF718E;\n        cursor: pointer; }\n\n*,\nbody,\nhtml {\n  font-family: 'Roboto', sans-serif;\n  margin: 0px; }\n", "", {"version":3,"sources":["/Users/Crunchwrap78/wdi/extras/react/server_side_rendering-practice/src/styles/src/styles/_listings.scss","/Users/Crunchwrap78/wdi/extras/react/server_side_rendering-practice/src/styles/src/styles/_variables.scss","/Users/Crunchwrap78/wdi/extras/react/server_side_rendering-practice/src/styles/src/styles/_filter.scss","/Users/Crunchwrap78/wdi/extras/react/server_side_rendering-practice/src/styles/src/styles/_content.scss","/Users/Crunchwrap78/wdi/extras/react/server_side_rendering-practice/src/styles/src/styles/index.scss"],"names":[],"mappings":"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","file":"index.scss","sourcesContent":["@import \"variables\";\nheader {\n  background: #0C002B;\n  color: #FFF;\n  overflow: auto;\n  padding: 25px 15px;\n\n  .logo {\n    float: left;\n  }\n  nav {\n    float: right;\n\n    a{\n      color: #FFF;\n      text-decoration: none;\n      padding: 7px 20px;\n      text-transform: capitalize;\n      font-weight: 300;\n      font-size: 0.9rem;\n\n      &:hover {\n        color: #FF718E;\n      }\n\n      &.register-btn {\n        background: $pink;\n        padding: 7px 25px;\n        text-align: center;\n        color: #FFF;\n        border-radius: 5px;\n      }\n    }\n  }\n}\n","$darkpurple: #0c002B;\n$grey: #FAF7F5;\n$offwhite: #FFFEFF;\n$pink: #FF718E;\n$darkgrey: #ADA8AA;\n$lightgrey: #D1CBCD;\n$grid-columns: 12;\n$grid-max-width: 1200px; //breakpoint-small\n$breakpoint-small: \"only screen and (min-width: 0px)\";\n$breakpoint-medium: \"only screen and (min-width: 768px)\";\n$breakpoint-large: \"only screen and (min-width: 1008px)\";\n$breakpoint-xl: \"only screen and (min-width: 1300px)\";\n","@import \"variables\";\n\n#sidebar {\n  background: $grey;\n  width: 30%;\n  max-width: 300px;\n  display: inline-block;\n  float: left;\n\n  .inside {\n    padding: 20px;\n    max-width: 300px;\n  }\n\n  h4 {\n    font-size: 0.9rem;\n    margin-bottom: 25px;\n    font-weight: 500px;\n    text-transform: uppercase;\n  }\n\n  select {\n    background: transparent;\n    padding: 10px;\n    font-size: 14px;\n    font-weight: 500;\n    color: #1b1b1b;\n    display: block;\n    margin-bottom: 25px;\n    width: 100%;\n  }\n\n  .filters {\n    .title {\n      font-size: 0.9rem;\n      display: block;\n      margin-bottom: 1rem;\n      color: $darkgrey;\n    }\n\n    input[type=\"text\"] {\n      border-radius: 5px;\n      font-size: 1rem;\n      padding: 0.4rem;\n      width: 45%;\n      display: inline-block;\n      margin-right: 2.5%;\n      margin-bottom: 1rem;\n    }\n\n    &.extras {\n      label {\n        display: block;\n        width: 100%;\n        padding: 10px 0;\n\n        input[type=\"checkbox\"] {\n          float: right;\n        }\n      }\n    }\n  }\n}\n","@import \"variables\";\n\n#content-area {\n  overflow: auto;\n  width: 100%;\n  min-height: 100vh;\n}\n\n#content-list {\n  width: 70%;\n  float: left;\n  display: inline-block;\n  padding: 15px;\n  background: $offwhite;\n\n  .search-area {\n    input[type=\"text\"] {\n      width: 70%;\n      background: transparent;\n      font-size: 2rem;\n      border: none;\n      border-bottom: 1px solid $darkgrey;\n      margin-bottom: 20px;\n      font-weight: 100;\n      color: $lightgrey;\n    }\n  }\n\n  .sortby-area {\n    margin-bottom: 20px;\n\n    .results {\n      color: $darkgrey;\n      font-size: 0.8rem;\n      display: inline-block;\n    }\n\n    .sort-options {\n      float: right;\n\n      select {\n        font-size: 0.9rem;\n        font-weight: 300;\n        border: 1px solid $lightgrey;\n        background: transparent;\n        padding: 20px;\n        display: inline-block;\n        margin-right: 15px;\n        vertical-align: top;\n      }\n\n      .view {\n        display: inline-block;\n\n        .fa {\n          margin-right: 15px;\n          font-size: 1.5rem;\n        }\n      }\n    }\n  }\n\n  .listings-results {\n    margin-bottom: 60px;\n\n    .listing {\n      background: #fff;\n      border-radius: 5px;\n      -webkit-box-shadow: 0 9px 54px -4px rgba(224,224,224,1);\n      -moz-box-shadow: 0 9px 54px -4px rgba(224,224,224,1);\n      box-shadow: 0 9px 54px -4px rgba(224,224,224,1);\n    }\n\n    .listing-img {\n      color: white;\n      padding: 15px;\n      position: relative;\n      background: url(\"http://cdn.freshome.com/wp-content/uploads/2014/04/Gorgeous-evening-view-of-Russet-Residence--1025x450.jpg\") no-repeat center center;\n      -webkit-background-size: cover;\n      -moz-background-size: cover;\n      -o-background-size: cover;\n      background-size: cover;\n      min-height: 200px;\n      -webkit-border-top-left-radius: 5px;\n      -webkit-border-top-right-radius: 5px;\n      -moz-border-radius-topleft: 5px;\n      -moz-border-radius-topright: 5px;\n      border-top-left-radius: 5px;\n      border-top-right-radius: 5px;\n\n      &:hover {\n        .details {\n          opacity: 1;\n        }\n\n        .address {\n          opacity: 0;\n        }\n      }\n\n      .address {\n        font-size: 1.3rem;\n        text-transform: capitalize;\n        position: absolute;\n        bottom: 20px;\n        opacity: 1;\n        transition: all 0.4s ease-in-out;\n        text-shadow: 0 1px 4px rgba(91, 91, 91, 1);\n      }\n\n      .details {\n        transition: all 0.4s ease-in-out;\n        opacity: 0;\n        padding: 30px;\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        -webkit-border-top-left-radius: 5px;\n        -webkit-border-top-right-radius: 5px;\n        -moz-border-radius-topleft: 5px;\n        -moz-border-radius-topright: 5px;\n        border-top-left-radius: 5px;\n        border-top-right-radius: 5px;\n        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#4e02e5+0,9d1ced+100 */\n        background: rgba(78,2,229,.8);\n        /* Old browsers */\n        background: -moz-linear-gradient(-45deg, rgba(78,2,229,.8) 0%, rgba(157,28,237,.8) 100%);\n        /* FF3.6-15 */\n        background: -webkit-linear-gradient(-45deg, rgba(78,2,229,.8) 0%,rgba(157,28,237,.8) 100%);\n        /* Chrome10-25,Safari5.1-6 */\n        background: linear-gradient(135deg, rgba(78,2,229,.8) 0%,rgba(157,28,237,.8) 100%);\n        /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=  '#4e02e5', endColorstr='#9d1ced',GradientType=1 );\n        /* IE6-9 fallback on horizontal gradient */\n        .user-img {\n          width: 35px;\n          height: 35px;\n          border-radius: 50%;\n          border: 2px solid white;\n          display: inline-block;\n          background: url(\"http://cdn.freshome.com/wp-content/uploads/2014/04/Gorgeous-evening-view-of-Russet-Residence--1025x450.jpg\") no-repeat center center;\n          -webkit-background-size: cover;\n          -moz-background-size: cover;\n          -o-background-size: cover;\n          background-size: cover;\n        }\n\n        .user-details {\n          vertical-align: top;\n          display: inline-block;\n\n          .user-name {\n            font-weight: 300;\n            font-size: 0.9rem;\n            display: block;\n            color: rgba(255,255,255, 1);\n            margin-top: 3px;\n            margin-bottom: 5px;\n          }\n\n          .post-date {\n            font-size: 0.9rem;\n            display: block;\n            color: rgba(255,255,255, .7);\n          }\n        }\n\n        .listing-details {\n          margin-top: 20px;\n          margin-bottom: 10px;\n\n          .fa {\n            display: inline-block;\n            font-size: 20px;\n            margin-right: 15px;\n          }\n\n          span {\n            font-weight: 300;\n            font-size: 0.8rem;\n            display: inline-block;\n            vertical-align: top;\n            position: relative;\n            top: 3px;\n          }\n\n          .floor-space {\n            margin-bottom: 10px;\n          }\n        }\n      }\n    }\n\n    .bottom-info {\n      padding: 20px 15px;\n\n      .price {\n        font-size: 1rem;\n        display: block;\n        margin-bottom: 10px;\n        color: $darkgrey;\n      }\n\n      .location {\n        font-size: 1.2rem;\n        display: block;\n        color: $lightgrey;\n      }\n    }\n  }\n}\n\n.view-btn {\n  background: black;\n  padding: 8px;\n  font-size: 0.9rem;\n  border-radius: 5px;\n  text-align: center;\n  max-width: 150px;\n  transition: background 0.3s ease-in-out;\n\n  &:hover {\n    background: $pink;\n    cursor: pointer;\n  }\n}\n\n.col-md-3 {\n  width: 25%;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.col-md-9 {\n  width: 75%;\n  display: inline-block;\n}\n\n.col-md-4 {\n  width: 25%;\n  padding: 0 15px;\n  display: inline-block;\n  vertical-align: top;\n}\n\n#pagination {\n  width: 100%;\n  display: block;\n  text-align: center;\n\n  .pages {\n    padding-left: 0px;\n    margin: 0 auto;\n    display: inline-block;\n    background: #FFF;\n    -webkit-box-shadow: 0 9px 54px -4px rgba(224,224,224,1);\n    -moz-box-shadow: 0 9px 54px -4px rgba(224,224,224,1);\n    box-shadow: 0 9px 54px -4px rgba(224,224,224,1);\n    li {\n      padding: 20px 30px;\n      display: inline-block;\n\n      &.active,\n      &:hover {\n        color: white;\n        font-weight: 700;\n        background: $pink;\n        cursor: pointer;\n      }\n    }\n  }\n}\n","@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700');\n@import \"listings\";\n@import \"variables\";\n@import \"filter\";\n@import \"content\";\n\n\n*,\nbody,\nhtml {\n  font-family: 'Roboto', sans-serif;\n  margin: 0px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(12);

var _stringify2 = _interopRequireDefault(_stringify);

var _slicedToArray2 = __webpack_require__(13);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Isomorphic CSS style loader for Webpack
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

var prefix = 's';
var inserted = {};

// Base64 encoding and decoding - The "Unicode Problem"
// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode('0x' + p1);
  }));
}

/**
 * Remove style/link elements for specified node IDs
 * if they are no longer referenced by UI components.
 */
function removeCss(ids) {
  ids.forEach(function (id) {
    if (--inserted[id] <= 0) {
      var elem = document.getElementById(prefix + id);
      if (elem) {
        elem.parentNode.removeChild(elem);
      }
    }
  });
}

/**
 * Example:
 *   // Insert CSS styles object generated by `css-loader` into DOM
 *   var removeCss = insertCss([[1, 'body { color: red; }']]);
 *
 *   // Remove it from the DOM
 *   removeCss();
 */
function insertCss(styles) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$replace = _ref.replace,
      replace = _ref$replace === undefined ? false : _ref$replace,
      _ref$prepend = _ref.prepend,
      prepend = _ref$prepend === undefined ? false : _ref$prepend;

  var ids = [];
  for (var i = 0; i < styles.length; i++) {
    var _styles$i = (0, _slicedToArray3.default)(styles[i], 4),
        moduleId = _styles$i[0],
        css = _styles$i[1],
        media = _styles$i[2],
        sourceMap = _styles$i[3];

    var id = moduleId + '-' + i;

    ids.push(id);

    if (inserted[id]) {
      if (!replace) {
        inserted[id]++;
        continue;
      }
    }

    inserted[id] = 1;

    var elem = document.getElementById(prefix + id);
    var create = false;

    if (!elem) {
      create = true;

      elem = document.createElement('style');
      elem.setAttribute('type', 'text/css');
      elem.id = prefix + id;

      if (media) {
        elem.setAttribute('media', media);
      }
    }

    var cssText = css;
    if (sourceMap && typeof btoa === 'function') {
      // skip IE9 and below, see http://caniuse.com/atob-btoa
      cssText += '\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';
      cssText += '\n/*# sourceURL=' + sourceMap.file + '?' + id + '*/';
    }

    if ('textContent' in elem) {
      elem.textContent = cssText;
    } else {
      elem.styleSheet.cssText = cssText;
    }

    if (create) {
      if (prepend) {
        document.head.insertBefore(elem, document.head.childNodes[0]);
      } else {
        document.head.appendChild(elem);
      }
    }
  }

  return removeCss.bind(null, ids);
}

module.exports = insertCss;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(15);

var _Header2 = _interopRequireDefault(_Header);

var _Sidebar = __webpack_require__(16);

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _ContentList = __webpack_require__(17);

var _ContentList2 = _interopRequireDefault(_ContentList);

var _listings = __webpack_require__(18);

var _listings2 = _interopRequireDefault(_listings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      city: 'All',
      rooms: 0,
      listingsData: _listings2.default,
      homeType: 'All',
      min_price: 0,
      max_price: 10000000,
      min_floor_space: 0,
      max_floor_space: 4000,
      elevator: false,
      basement: false,
      swimming_pool: false,
      gym: false,
      filteredData: _listings2.default,
      populateDropDown: '',
      sortby: 'price-dsc',
      search: '',
      view: 'long'
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.filterData = _this.filterData.bind(_this);
    _this.populateOptions = _this.populateOptions.bind(_this);
    _this.changeView = _this.changeView.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var listingsData = this.state.listingsData.sort(function (a, b) {
        return a.price - b.price;
      });
      this.setState({
        listingsData: listingsData
      });
    }
  }, {
    key: 'changeView',
    value: function changeView(viewName) {
      this.setState({
        view: viewName
      });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      var _this2 = this;

      var name = event.target.name;
      var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
      this.setState(_defineProperty({}, name, value), function () {
        _this2.filterData();
      });
    }
  }, {
    key: 'filterData',
    value: function filterData() {
      var _this3 = this;

      var newData = this.state.listingsData.filter(function (item) {
        return item.price >= _this3.state.min_price && item.price <= _this3.state.max_price && item.floorSpace >= _this3.state.min_floor_space && item.floorSpace <= _this3.state.max_floor_space && item.rooms >= _this3.state.rooms;
      });

      if (this.state.city !== 'All') {
        newData = newData.filter(function (item) {
          return item.city === _this3.state.city;
        });
      }

      if (this.state.homeType !== 'All') {
        newData = newData.filter(function (item) {
          return item.homeType === _this3.state.homeType;
        });
      }

      if (this.state.sortby == 'price-dsc') {
        newData.sort(function (a, b) {
          return b.price - a.price;
        });
      }

      if (this.state.sortby == 'price-asc') {
        newData.sort(function (a, b) {
          return a.price - b.price;
        });
      }

      if (this.state.search != '') {
        newData = newData.filter(function (item) {
          var city = item.city.toLowerCase();
          var searchText = _this3.state.search.toLowerCase();
          var n = city.match(searchText);

          if (n != null) {
            return true;
          }
        });
      }

      this.setState({ filteredData: newData });
    }
  }, {
    key: 'populateOptions',
    value: function populateOptions() {
      var cities = this.state.listingsData.map(function (item) {
        return item.city;
      });
      cities = new Set(cities);
      cities = [].concat(_toConsumableArray(cities));

      var homeTypes = this.state.listingsData.map(function (item) {
        return item.homeType;
      });
      homeTypes = new Set(homeTypes);
      homeTypes = [].concat(_toConsumableArray(homeTypes));

      var numOfRooms = this.state.listingsData.map(function (item) {
        return item.rooms;
      });
      numOfRooms = new Set(numOfRooms);
      numOfRooms = [].concat(_toConsumableArray(numOfRooms));
      numOfRooms.sort();

      this.setState({
        populateDropDown: {
          homeTypes: homeTypes,
          numOfRooms: numOfRooms,
          cities: cities
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'section',
          { id: 'content-area' },
          _react2.default.createElement(_Sidebar2.default, {
            handleChange: this.handleChange,
            globalState: this.state,
            populateOption: this.populateOptions
          }),
          _react2.default.createElement(_ContentList2.default, {
            handleChange: this.handleChange,
            listingsData: this.state.filteredData,
            globalState: this.state,
            changeView: this.changeView
          })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "header",
                null,
                _react2.default.createElement(
                    "div",
                    { className: "logo" },
                    "Logo"
                ),
                _react2.default.createElement(
                    "nav",
                    null,
                    _react2.default.createElement(
                        "a",
                        { href: "#" },
                        "Create Ads "
                    ),
                    _react2.default.createElement(
                        "a",
                        { href: "#" },
                        "About Us "
                    ),
                    _react2.default.createElement(
                        "a",
                        { href: "#" },
                        "Log In "
                    ),
                    _react2.default.createElement(
                        "a",
                        { href: "#", className: "register-btn" },
                        "Register"
                    )
                )
            );
        }
    }]);

    return Header;
}(_react.Component);

exports.default = Header;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sidebar = function (_Component) {
  _inherits(Sidebar, _Component);

  function Sidebar() {
    _classCallCheck(this, Sidebar);

    var _this = _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call(this));

    _this.cities = _this.cities.bind(_this);
    _this.homeTypes = _this.homeTypes.bind(_this);
    _this.bedrooms = _this.bedrooms.bind(_this);
    return _this;
  }

  _createClass(Sidebar, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.populateOption();
    }
  }, {
    key: "cities",
    value: function cities() {
      if (this.props.globalState.populateDropDown.cities != undefined) {
        var cities = this.props.globalState.populateDropDown.cities;

        return cities.map(function (item) {
          return _react2.default.createElement(
            "option",
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: "homeTypes",
    value: function homeTypes() {
      if (this.props.globalState.populateDropDown.homeTypes != undefined) {
        var homeTypes = this.props.globalState.populateDropDown.homeTypes;

        return homeTypes.map(function (item) {
          return _react2.default.createElement(
            "option",
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: "bedrooms",
    value: function bedrooms() {
      if (this.props.globalState.populateDropDown.numOfRooms != undefined) {
        var numOfRooms = this.props.globalState.populateDropDown.numOfRooms;

        return numOfRooms.map(function (item) {
          return _react2.default.createElement(
            "option",
            { key: item, value: item },
            item,
            " bedrooms "
          );
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "sidebar" },
        _react2.default.createElement(
          "div",
          { className: "inside" },
          _react2.default.createElement(
            "h4",
            null,
            "Filter"
          ),
          _react2.default.createElement(
            "select",
            { name: "city", className: "filters neighborhood", onChange: this.props.handleChange },
            _react2.default.createElement(
              "option",
              null,
              "All"
            ),
            this.cities()
          ),
          _react2.default.createElement(
            "select",
            { name: "homeType", className: "filters housetype", onChange: this.props.handleChange },
            _react2.default.createElement(
              "option",
              null,
              "All"
            ),
            this.homeTypes()
          ),
          _react2.default.createElement(
            "select",
            { name: "rooms", className: "filters bedrooms", onChange: this.props.handleChange },
            this.bedrooms()
          ),
          _react2.default.createElement(
            "div",
            { className: "filters price" },
            _react2.default.createElement(
              "span",
              { className: "title" },
              "Price"
            ),
            _react2.default.createElement("input", { type: "text", name: "min_price", className: "min-price", onChange: this.props.handleChange, value: this.props.globalState.min_price }),
            _react2.default.createElement("input", { type: "text", name: "max_price", className: "max-price", onChange: this.props.handleChange, value: this.props.globalState.max_price })
          ),
          _react2.default.createElement(
            "div",
            { className: "filters floor-space" },
            _react2.default.createElement(
              "span",
              { className: "title" },
              "Floor Space "
            ),
            _react2.default.createElement("input", { type: "text", name: "min_floor_space", className: "min-floor-space", onChange: this.props.handleChange, value: this.props.globalState.min_floor_space }),
            _react2.default.createElement("input", { type: "text", name: "max_floor_space", className: "max-floor-space", onChange: this.props.handleChange, value: this.props.globalState.max_floor_space })
          ),
          _react2.default.createElement(
            "div",
            { className: "filters extras" },
            _react2.default.createElement(
              "span",
              { className: "title" },
              "Extras"
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "extras" },
              _react2.default.createElement(
                "span",
                null,
                "Elevators"
              ),
              _react2.default.createElement("input", { name: "elevator", value: "elevator", type: "checkbox", onChange: this.props.handleChange })
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "extras" },
              _react2.default.createElement(
                "span",
                null,
                "Swimming Pool"
              ),
              _react2.default.createElement("input", { name: "swimming_pool", value: "swimming_pool", type: "checkbox", onChange: this.props.handleChange })
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "extras" },
              _react2.default.createElement(
                "span",
                null,
                "Basement"
              ),
              _react2.default.createElement("input", { name: "basement", value: "basement", type: "checkbox", onChange: this.props.handleChange })
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "extras" },
              _react2.default.createElement(
                "span",
                null,
                "Gym"
              ),
              _react2.default.createElement("input", { name: "gym", value: "gym", type: "checkbox", onChange: this.props.handleChange })
            )
          )
        )
      );
    }
  }]);

  return Sidebar;
}(_react.Component);

exports.default = Sidebar;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContentList = function (_Component) {
  _inherits(ContentList, _Component);

  function ContentList() {
    _classCallCheck(this, ContentList);

    var _this = _possibleConstructorReturn(this, (ContentList.__proto__ || Object.getPrototypeOf(ContentList)).call(this));

    _this.listContent = _this.listContent.bind(_this);
    return _this;
  }

  _createClass(ContentList, [{
    key: 'listContent',
    value: function listContent() {
      var _this2 = this;

      var listingsData = this.props.listingsData;


      if (listingsData == undefined || listingsData.length == 0) {
        return "Sorry your filter did not match any listing";
      }

      return listingsData.map(function (listing, index) {
        if (_this2.props.globalState.view == 'box') {
          return _react2.default.createElement(
            'div',
            { className: 'col-md-4', key: index },
            _react2.default.createElement(
              'div',
              { className: 'listing' },
              _react2.default.createElement(
                'div',
                { className: 'listing-img', style: { background: 'url("' + listing.image + '") no-repeat center center' } },
                _react2.default.createElement(
                  'span',
                  { className: 'address' },
                  listing.address
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'details' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-3' },
                    _react2.default.createElement(
                      'div',
                      { className: 'user-img' },
                      ' '
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-9' },
                    _react2.default.createElement(
                      'div',
                      { className: 'user-details' },
                      _react2.default.createElement(
                        'span',
                        { className: 'user-name' },
                        'Nina Smith'
                      ),
                      _react2.default.createElement(
                        'span',
                        { className: 'post-date' },
                        '05/05/2017'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'listing-details' },
                      _react2.default.createElement(
                        'div',
                        { className: 'floor-space' },
                        _react2.default.createElement('i', { className: 'fa fa-square-o', 'aria-hidden': 'true' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.floorSpace,
                          ' ft\xB2'
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'bedrooms' },
                        _react2.default.createElement('i', { className: 'fa fa-bed', 'aria-hidden': 'true' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.rooms,
                          ' bedrooms'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'view-btn' },
                      'View Listing'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'bottom-info' },
                _react2.default.createElement(
                  'span',
                  { className: 'price' },
                  '$',
                  listing.price
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'location' },
                  _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true' }),
                  ' ',
                  listing.city,
                  ', ',
                  listing.state,
                  ' '
                )
              )
            )
          );
        } else {
          // THIS IS LONG VIEW
          return _react2.default.createElement(
            'div',
            { className: 'col-md-12 col-lg-6', key: index },
            _react2.default.createElement(
              'div',
              { className: 'listing' },
              _react2.default.createElement(
                'div',
                { className: 'listing-img', style: { background: 'url("' + listing.image + '") no-repeat center center' } },
                _react2.default.createElement(
                  'span',
                  { className: 'address' },
                  listing.address
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'details' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-3' },
                    _react2.default.createElement(
                      'div',
                      { className: 'user-img' },
                      ' '
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-9' },
                    _react2.default.createElement(
                      'div',
                      { className: 'user-details' },
                      _react2.default.createElement(
                        'span',
                        { className: 'user-name' },
                        'Nina Smith'
                      ),
                      _react2.default.createElement(
                        'span',
                        { className: 'post-date' },
                        '05/05/2017'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'listing-details' },
                      _react2.default.createElement(
                        'div',
                        { className: 'floor-space' },
                        _react2.default.createElement('i', { className: 'fa fa-square-o', 'aria-hidden': 'true' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.floorSpace,
                          ' ft\xB2'
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'bedrooms' },
                        _react2.default.createElement('i', { className: 'fa fa-bed', 'aria-hidden': 'true' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.rooms,
                          ' bedrooms'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'view-btn' },
                      'View Listing'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'bottom-info' },
                _react2.default.createElement(
                  'span',
                  { className: 'price' },
                  '$',
                  listing.price
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'location' },
                  _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true' }),
                  ' ',
                  listing.city,
                  ', ',
                  listing.state,
                  ' '
                )
              )
            )
          );
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'section',
        { id: 'content-list' },
        _react2.default.createElement(
          'section',
          { className: 'search-area' },
          _react2.default.createElement('input', { type: 'text', name: 'search', onChange: this.props.handleChange })
        ),
        _react2.default.createElement(
          'section',
          { className: 'sortby-area' },
          _react2.default.createElement(
            'div',
            { className: 'results' },
            this.props.globalState.filteredData.length,
            ' results found'
          ),
          _react2.default.createElement(
            'div',
            { className: 'sort-options' },
            _react2.default.createElement(
              'select',
              { name: 'sortby', className: 'sortby', onChange: this.props.handleChange },
              _react2.default.createElement(
                'option',
                { value: 'price-asc' },
                'Highest Price'
              ),
              _react2.default.createElement(
                'option',
                { value: '' },
                'Lowest Price'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'view' },
              _react2.default.createElement('i', { className: 'fa fa-th-list', 'aria-hidden': 'true', onClick: function onClick() {
                  return _this3.props.changeView("long");
                } }),
              _react2.default.createElement('i', { className: 'fa fa-th', 'aria-hidden': 'true', onClick: function onClick() {
                  return _this3.props.changeView("box");
                } })
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'listings-results' },
          this.listContent()
        ),
        _react2.default.createElement(
          'section',
          { id: 'pagination' },
          _react2.default.createElement(
            'ul',
            { className: 'pages' },
            _react2.default.createElement(
              'li',
              null,
              'Prev'
            ),
            _react2.default.createElement(
              'li',
              { className: 'active' },
              '1'
            ),
            _react2.default.createElement(
              'li',
              null,
              '2'
            ),
            _react2.default.createElement(
              'li',
              null,
              '3'
            ),
            _react2.default.createElement(
              'li',
              null,
              '4'
            ),
            _react2.default.createElement(
              'li',
              null,
              '5'
            ),
            _react2.default.createElement(
              'li',
              null,
              'Next'
            )
          )
        )
      );
    }
  }]);

  return ContentList;
}(_react.Component);

exports.default = ContentList;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var listingsData = [{
  address: '20-34 grand ave',
  city: 'Ridgewood',
  state: 'NY',
  rooms: 3,
  price: 220000,
  floorSpace: 2000,
  extras: ['elevator', 'gym'],
  homeType: 'Apartment',
  image: 'http://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_1920,h_1080/q_80/4206-28/the-kelvin-apartments-exterior.jpg'
}, {
  address: '3 universal st',
  city: 'Miami',
  state: 'FL',
  rooms: 2,
  price: 24666,
  floorSpace: 1430,
  extras: ['elevator', 'gym'],
  homeType: 'Condo',
  image: 'https://www.adinahotels.com/wp-content/uploads/sites/4/2016/07/adina-melbourne-flinders-street-apartment-hotel-one-and-two-bedroom-apartment-2-2013.jpg'
}, {
  address: '1 president plaza',
  city: 'Richmond',
  state: 'VA',
  rooms: 1,
  price: 345355,
  floorSpace: 2400,
  extras: ['elevator', 'gym'],
  homeType: 'Single Home',
  image: 'https://c.o0bg.com/rf/image_960w/Boston/2011-2020/2017/01/09/BostonGlobe.com/Lifestyle/Images/doherty_10names04_liv.jpg'
}, {
  address: '889 beemore st',
  city: 'Newark',
  state: 'NJ',
  rooms: 0,
  price: 80000,
  floorSpace: 1000,
  extras: ['elevator', 'gym'],
  homeType: 'Studio',
  image: 'http://media.equityapartments.com/images/q_50/f_auto/fl_lossy/685-28/oak-park-apartment-homes-kitchen'
}, {
  address: '43 hollywood blvd',
  city: 'Los Angeles',
  state: 'CA',
  rooms: 3,
  price: 603000,
  floorSpace: 3000,
  extras: ['elevator', 'gym'],
  homeType: 'Condo',
  image: 'http://cdn.freshome.com/wp-content/uploads/2016/02/design-modern-apartment-1-1025x450.jpg'
}, {
  address: '2 main st',
  city: 'Bedstuy',
  state: 'NY',
  rooms: 2,
  price: 220000,
  floorSpace: 2000,
  extras: ['elevator', 'pool'],
  homeType: 'Multi Home',
  image: 'http://www.theproserve.com/wp-content/uploads/2013/03/apartment-complex-insurance.jpg'
}, {
  address: '730 gates ave',
  city: 'Springfield',
  state: 'IN',
  rooms: 1,
  price: 150000,
  floorSpace: 2000,
  extras: ['elevator', 'gym'],
  homeType: 'Room',
  image: 'http://www.carolinacouture.com/wood/wp-content/uploads/2014/09/apartment-contemporary-apartment-in-taiwan-by-fertility-design-and-mirror-glass-accent-stylish-and-elegant-apartment-designs-tiny-ass-apartment-design-ideas-apartment-interior.jpg'
}];

exports.default = listingsData;

/***/ })
/******/ ]);