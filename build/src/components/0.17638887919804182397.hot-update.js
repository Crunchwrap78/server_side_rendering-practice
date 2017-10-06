webpackHotUpdate(0,{

/***/ 364:
/*!********************************!*\
  !*** ./src/components/App.jsx ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 52);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Header = __webpack_require__(/*! ./Header */ 365);\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _Sidebar = __webpack_require__(/*! ./Sidebar */ 366);\n\nvar _Sidebar2 = _interopRequireDefault(_Sidebar);\n\nvar _ContentList = __webpack_require__(/*! ./ContentList */ 367);\n\nvar _ContentList2 = _interopRequireDefault(_ContentList);\n\nvar _listings = __webpack_require__(/*! ../data/listings.js */ 368);\n\nvar _listings2 = _interopRequireDefault(_listings);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_Component) {\n  _inherits(App, _Component);\n\n  function App(props) {\n    _classCallCheck(this, App);\n\n    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n    _this.state = {\n      listingsData: _listings2.default,\n      min_price: 0,\n      max_price: 10000000,\n      min_floor_space: 0,\n      max_floor_space: 4000,\n      elevator: false,\n      basement: false,\n      swimming_pool: false,\n      gym: false\n    };\n\n    _this.handleChange = _this.handleChange.bind(_this);\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: 'handleChange',\n    value: function handleChange(event) {\n      var _this2 = this;\n\n      var name = event.target.name;\n      var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;\n      this.setState(_defineProperty({}, name, value), function () {\n        console.log(_this2.state);\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_Header2.default, null),\n        _react2.default.createElement(\n          'section',\n          { id: 'content-area' },\n          _react2.default.createElement(_Sidebar2.default, {\n            handleChange: this.handleChange,\n            globalState: this.state\n          }),\n          _react2.default.createElement(_ContentList2.default, {\n            listingsData: this.state.listingsData,\n            globalState: this.state\n          })\n        )\n      );\n    }\n  }]);\n\n  return App;\n}(_react.Component);\n\nexports.default = App;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzY0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0FwcC5qc3g/Zjg4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL1NpZGViYXInO1xuaW1wb3J0IENvbnRlbnRMaXN0IGZyb20gJy4vQ29udGVudExpc3QnO1xuaW1wb3J0IGxpc3RpbmdzRGF0YSBmcm9tICcuLi9kYXRhL2xpc3RpbmdzLmpzJ1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gIFx0c3VwZXIocHJvcHMpO1xuICBcdHRoaXMuc3RhdGUgPSB7XG4gICAgICBsaXN0aW5nc0RhdGEsXG4gICAgICBtaW5fcHJpY2U6IDAsXG4gICAgICBtYXhfcHJpY2U6IDEwMDAwMDAwLFxuICAgICAgbWluX2Zsb29yX3NwYWNlOiAwLFxuICAgICAgbWF4X2Zsb29yX3NwYWNlOiA0MDAwLFxuICAgICAgZWxldmF0b3I6IGZhbHNlLFxuICAgICAgYmFzZW1lbnQ6IGZhbHNlLFxuICAgICAgc3dpbW1pbmdfcG9vbDogZmFsc2UsXG4gICAgICBneW06IGZhbHNlXG4gICAgfTtcblxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zdCBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWVcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC50eXBlID09PSAnY2hlY2tib3gnID8gZXZlbnQudGFyZ2V0LmNoZWNrZWQgOiBldmVudC50YXJnZXQudmFsdWVcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFsgbmFtZSBdOiB2YWx1ZVxuICAgIH0sICgpPT4ge1xuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8c2VjdGlvbiBpZD1cImNvbnRlbnQtYXJlYVwiPlxuICAgICAgICAgIDxTaWRlYmFyXG4gICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgZ2xvYmFsU3RhdGU9e3RoaXMuc3RhdGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q29udGVudExpc3RcbiAgICAgICAgICAgIGxpc3RpbmdzRGF0YT17dGhpcy5zdGF0ZS5saXN0aW5nc0RhdGF9XG4gICAgICAgICAgICBnbG9iYWxTdGF0ZT17dGhpcy5zdGF0ZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQUNBO0FBV0E7QUFkQTtBQWVBO0FBQ0E7OztBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFMQTtBQUZBO0FBY0E7Ozs7OztBQUdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///364\n");

/***/ })

})