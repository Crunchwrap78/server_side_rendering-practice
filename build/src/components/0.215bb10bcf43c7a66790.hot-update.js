webpackHotUpdate(0,{

/***/ 364:
/*!********************************!*\
  !*** ./src/components/App.jsx ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 52);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Header = __webpack_require__(/*! ./Header */ 365);\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _Sidebar = __webpack_require__(/*! ./Sidebar */ 366);\n\nvar _Sidebar2 = _interopRequireDefault(_Sidebar);\n\nvar _ContentList = __webpack_require__(/*! ./ContentList */ 367);\n\nvar _ContentList2 = _interopRequireDefault(_ContentList);\n\nvar _listings = __webpack_require__(/*! ../data/listings.js */ 368);\n\nvar _listings2 = _interopRequireDefault(_listings);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_Component) {\n  _inherits(App, _Component);\n\n  function App(props) {\n    _classCallCheck(this, App);\n\n    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n    _this.state = {\n      listingsData: _listings2.default,\n      min_price: 0,\n      max_price: 10000000,\n      min_floor_space: 0,\n      max_floor_space: 4000,\n      elevator: false,\n      basement: false,\n      swimming_pool: false,\n      gym: false,\n      filteredData: _listings2.default\n    };\n\n    _this.handleChange = _this.handleChange.bind(_this);\n    _this.filterData = _this.filterData.bind(_this);\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: 'handleChange',\n    value: function handleChange(event) {\n      var _this2 = this;\n\n      var name = event.target.name;\n      var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;\n      this.setState(_defineProperty({}, name, value), function () {\n        console.log(_this2.state);\n        _this2.filterData();\n      });\n    }\n  }, {\n    key: 'filterData',\n    value: function filterData() {\n      var _this3 = this;\n\n      var newData = this.state.listingsData.filter(function (item) {\n        return item.price >= _this3.state.min_price && item.price <= _this3.state.max_price && item.floorSpace >= _this3.state.min_floor_space && item.floorSpace <= _this3.state.max_floor_space;\n      });\n\n      this.setState({ filteredData: newData });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_Header2.default, null),\n        _react2.default.createElement(\n          'section',\n          { id: 'content-area' },\n          _react2.default.createElement(_Sidebar2.default, {\n            handleChange: this.handleChange,\n            globalState: this.state\n          }),\n          _react2.default.createElement(_ContentList2.default, {\n            listingsData: this.state.filteredData,\n            globalState: this.state\n          })\n        )\n      );\n    }\n  }]);\n\n  return App;\n}(_react.Component);\n\nexports.default = App;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzY0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0FwcC5qc3g/Zjg4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL1NpZGViYXInO1xuaW1wb3J0IENvbnRlbnRMaXN0IGZyb20gJy4vQ29udGVudExpc3QnO1xuaW1wb3J0IGxpc3RpbmdzRGF0YSBmcm9tICcuLi9kYXRhL2xpc3RpbmdzLmpzJ1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gIFx0c3VwZXIocHJvcHMpO1xuICBcdHRoaXMuc3RhdGUgPSB7XG4gICAgICBsaXN0aW5nc0RhdGEsXG4gICAgICBtaW5fcHJpY2U6IDAsXG4gICAgICBtYXhfcHJpY2U6IDEwMDAwMDAwLFxuICAgICAgbWluX2Zsb29yX3NwYWNlOiAwLFxuICAgICAgbWF4X2Zsb29yX3NwYWNlOiA0MDAwLFxuICAgICAgZWxldmF0b3I6IGZhbHNlLFxuICAgICAgYmFzZW1lbnQ6IGZhbHNlLFxuICAgICAgc3dpbW1pbmdfcG9vbDogZmFsc2UsXG4gICAgICBneW06IGZhbHNlLFxuICAgICAgZmlsdGVyZWREYXRhOiBsaXN0aW5nc0RhdGFcbiAgICB9O1xuXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZmlsdGVyRGF0YSA9IHRoaXMuZmlsdGVyRGF0YS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgY29uc3QgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lXG4gICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudHlwZSA9PT0gJ2NoZWNrYm94JyA/IGV2ZW50LnRhcmdldC5jaGVja2VkIDogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbIG5hbWUgXTogdmFsdWVcbiAgICB9LCAoKT0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICAgICAgdGhpcy5maWx0ZXJEYXRhKClcbiAgICB9KVxuXG4gIH1cblxuICBmaWx0ZXJEYXRhKCkge1xuICAgIGxldCBuZXdEYXRhID0gdGhpcy5zdGF0ZS5saXN0aW5nc0RhdGEuZmlsdGVyKGl0ZW0gPT5cbiAgICAgIGl0ZW0ucHJpY2UgPj0gdGhpcy5zdGF0ZS5taW5fcHJpY2UgJiYgaXRlbS5wcmljZSA8PSB0aGlzLnN0YXRlLm1heF9wcmljZSAmJiBpdGVtLmZsb29yU3BhY2UgPj0gdGhpcy5zdGF0ZS5taW5fZmxvb3Jfc3BhY2UgJiYgaXRlbS5mbG9vclNwYWNlIDw9IHRoaXMuc3RhdGUubWF4X2Zsb29yX3NwYWNlXG4gICAgKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe2ZpbHRlcmVkRGF0YTogbmV3RGF0YX0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxzZWN0aW9uIGlkPVwiY29udGVudC1hcmVhXCI+XG4gICAgICAgICAgPFNpZGViYXJcbiAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBnbG9iYWxTdGF0ZT17dGhpcy5zdGF0ZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxDb250ZW50TGlzdFxuICAgICAgICAgICAgbGlzdGluZ3NEYXRhPXt0aGlzLnN0YXRlLmZpbHRlcmVkRGF0YX1cbiAgICAgICAgICAgIGdsb2JhbFN0YXRlPXt0aGlzLnN0YXRlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvQXBwLmpzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFDQTtBQVlBO0FBQ0E7QUFoQkE7QUFpQkE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFMQTtBQUZBO0FBY0E7Ozs7OztBQUdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///364\n");

/***/ })

})