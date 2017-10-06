webpackHotUpdate(0,{

/***/ 364:
/*!********************************!*\
  !*** ./src/components/App.jsx ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 52);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Header = __webpack_require__(/*! ./Header */ 365);\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _Sidebar = __webpack_require__(/*! ./Sidebar */ 366);\n\nvar _Sidebar2 = _interopRequireDefault(_Sidebar);\n\nvar _ContentList = __webpack_require__(/*! ./ContentList */ 367);\n\nvar _ContentList2 = _interopRequireDefault(_ContentList);\n\nvar _listings = __webpack_require__(/*! ../data/listings.js */ 368);\n\nvar _listings2 = _interopRequireDefault(_listings);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_Component) {\n  _inherits(App, _Component);\n\n  function App(props) {\n    _classCallCheck(this, App);\n\n    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n    _this.state = {\n      city: 'All',\n      rooms: 0,\n      listingsData: _listings2.default,\n      homeType: 'All',\n      min_price: 0,\n      max_price: 10000000,\n      min_floor_space: 0,\n      max_floor_space: 4000,\n      elevator: false,\n      basement: false,\n      swimming_pool: false,\n      gym: false,\n      filteredData: _listings2.default,\n      populateDropDown: ''\n    };\n\n    _this.handleChange = _this.handleChange.bind(_this);\n    _this.filterData = _this.filterData.bind(_this);\n    _this.populateOptions = _this.populateOptions.bind(_this);\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: 'handleChange',\n    value: function handleChange(event) {\n      var _this2 = this;\n\n      var name = event.target.name;\n      var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;\n      this.setState(_defineProperty({}, name, value), function () {\n        console.log(_this2.state);\n        _this2.filterData();\n      });\n    }\n  }, {\n    key: 'filterData',\n    value: function filterData() {\n      var _this3 = this;\n\n      var newData = this.state.listingsData.filter(function (item) {\n        return item.price >= _this3.state.min_price && item.price <= _this3.state.max_price && item.floorSpace >= _this3.state.min_floor_space && item.floorSpace <= _this3.state.max_floor_space && item.rooms >= _this3.state.rooms;\n      });\n\n      if (this.state.city !== 'All') {\n        newData = newData.filter(function (item) {\n          return item.city === _this3.state.city;\n        });\n      }\n\n      if (this.state.homeType !== 'All') {\n        newData = newData.filter(function (item) {\n          return item.homeType === _this3.state.homeType;\n        });\n      }\n\n      this.setState({ filteredData: newData });\n    }\n  }, {\n    key: 'populateOptions',\n    value: function populateOptions() {\n      var _this4 = this;\n\n      var cities = this.state.listingsData.map(function (item) {\n        return item.city;\n      });\n      cities = new Set(cities);\n      cities = [].concat(_toConsumableArray(cities));\n\n      var homeTypes = this.state.listingsData.map(function (item) {\n        return item.homeType;\n      });\n      homeTypes = new Set(homeTypes);\n      homeTypes = [].concat(_toConsumableArray(homeTypes));\n\n      var numOfRooms = this.state.listingsData.map(function (item) {\n        return item.rooms;\n      });\n      numOfRooms = new Set(numOfRooms);\n      numOfRooms = [].concat(_toConsumableArray(numOfRooms));\n\n      this.setState({\n        populateDropDown: {\n          homeTypes: homeTypes,\n          bedrooms: bedrooms,\n          cities: cities\n        }\n      }, function () {\n        console.log(_this4.state);\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_Header2.default, null),\n        _react2.default.createElement(\n          'section',\n          { id: 'content-area' },\n          _react2.default.createElement(_Sidebar2.default, {\n            handleChange: this.handleChange,\n            globalState: this.state,\n            populateOption: this.populateOptions\n          }),\n          _react2.default.createElement(_ContentList2.default, {\n            listingsData: this.state.filteredData,\n            globalState: this.state\n          })\n        )\n      );\n    }\n  }]);\n\n  return App;\n}(_react.Component);\n\nexports.default = App;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzY0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0FwcC5qc3g/Zjg4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL1NpZGViYXInO1xuaW1wb3J0IENvbnRlbnRMaXN0IGZyb20gJy4vQ29udGVudExpc3QnO1xuaW1wb3J0IGxpc3RpbmdzRGF0YSBmcm9tICcuLi9kYXRhL2xpc3RpbmdzLmpzJ1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gIFx0c3VwZXIocHJvcHMpO1xuICBcdHRoaXMuc3RhdGUgPSB7XG4gICAgICBjaXR5OiAnQWxsJyxcbiAgICAgIHJvb21zOiAwLFxuICAgICAgbGlzdGluZ3NEYXRhLFxuICAgICAgaG9tZVR5cGU6ICdBbGwnLFxuICAgICAgbWluX3ByaWNlOiAwLFxuICAgICAgbWF4X3ByaWNlOiAxMDAwMDAwMCxcbiAgICAgIG1pbl9mbG9vcl9zcGFjZTogMCxcbiAgICAgIG1heF9mbG9vcl9zcGFjZTogNDAwMCxcbiAgICAgIGVsZXZhdG9yOiBmYWxzZSxcbiAgICAgIGJhc2VtZW50OiBmYWxzZSxcbiAgICAgIHN3aW1taW5nX3Bvb2w6IGZhbHNlLFxuICAgICAgZ3ltOiBmYWxzZSxcbiAgICAgIGZpbHRlcmVkRGF0YTogbGlzdGluZ3NEYXRhLFxuICAgICAgcG9wdWxhdGVEcm9wRG93bjogJydcbiAgICB9O1xuXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZmlsdGVyRGF0YSA9IHRoaXMuZmlsdGVyRGF0YS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucG9wdWxhdGVPcHRpb25zID0gdGhpcy5wb3B1bGF0ZU9wdGlvbnMuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIGNvbnN0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZVxuICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnR5cGUgPT09ICdjaGVja2JveCcgPyBldmVudC50YXJnZXQuY2hlY2tlZCA6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgWyBuYW1lIF06IHZhbHVlXG4gICAgfSwgKCk9PiB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgICAgIHRoaXMuZmlsdGVyRGF0YSgpXG4gICAgfSlcblxuICB9XG5cbiAgZmlsdGVyRGF0YSgpIHtcbiAgICBsZXQgbmV3RGF0YSA9IHRoaXMuc3RhdGUubGlzdGluZ3NEYXRhLmZpbHRlcihpdGVtID0+XG4gICAgICBpdGVtLnByaWNlID49IHRoaXMuc3RhdGUubWluX3ByaWNlICYmIGl0ZW0ucHJpY2UgPD0gdGhpcy5zdGF0ZS5tYXhfcHJpY2UgJiYgaXRlbS5mbG9vclNwYWNlID49IHRoaXMuc3RhdGUubWluX2Zsb29yX3NwYWNlICYmIGl0ZW0uZmxvb3JTcGFjZSA8PSB0aGlzLnN0YXRlLm1heF9mbG9vcl9zcGFjZSAmJiBpdGVtLnJvb21zID49IHRoaXMuc3RhdGUucm9vbXNcbiAgICApO1xuXG4gICAgaWYodGhpcy5zdGF0ZS5jaXR5ICE9PSAnQWxsJykge1xuICAgICAgbmV3RGF0YSA9IG5ld0RhdGEuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jaXR5ID09PSB0aGlzLnN0YXRlLmNpdHkpXG4gICAgfVxuXG4gICAgaWYodGhpcy5zdGF0ZS5ob21lVHlwZSAhPT0gJ0FsbCcpIHtcbiAgICAgIG5ld0RhdGEgPSBuZXdEYXRhLmZpbHRlcihpdGVtID0+IGl0ZW0uaG9tZVR5cGUgPT09IHRoaXMuc3RhdGUuaG9tZVR5cGUpXG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7ZmlsdGVyZWREYXRhOiBuZXdEYXRhfSk7XG4gIH1cblxuICBwb3B1bGF0ZU9wdGlvbnMoKSB7XG4gICAgbGV0IGNpdGllcyA9IHRoaXMuc3RhdGUubGlzdGluZ3NEYXRhLm1hcChpdGVtID0+IGl0ZW0uY2l0eSk7XG4gICAgY2l0aWVzID0gbmV3IFNldChjaXRpZXMpO1xuICAgIGNpdGllcyA9IFsuLi5jaXRpZXNdO1xuXG4gICAgbGV0IGhvbWVUeXBlcyA9IHRoaXMuc3RhdGUubGlzdGluZ3NEYXRhLm1hcChpdGVtID0+IGl0ZW0uaG9tZVR5cGUpO1xuICAgIGhvbWVUeXBlcyA9IG5ldyBTZXQoaG9tZVR5cGVzKTtcbiAgICBob21lVHlwZXMgPSBbLi4uaG9tZVR5cGVzXTtcblxuICAgIGxldCBudW1PZlJvb21zID0gdGhpcy5zdGF0ZS5saXN0aW5nc0RhdGEubWFwKGl0ZW0gPT4gaXRlbS5yb29tcyk7XG4gICAgbnVtT2ZSb29tcyA9IG5ldyBTZXQobnVtT2ZSb29tcyk7XG4gICAgbnVtT2ZSb29tcyA9IFsuLi5udW1PZlJvb21zXTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcG9wdWxhdGVEcm9wRG93bjoge1xuICAgICAgICBob21lVHlwZXMsXG4gICAgICAgIGJlZHJvb21zLFxuICAgICAgICBjaXRpZXNcbiAgICAgIH1cbiAgICB9LCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJjb250ZW50LWFyZWFcIj5cbiAgICAgICAgICA8U2lkZWJhclxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIGdsb2JhbFN0YXRlPXt0aGlzLnN0YXRlfVxuICAgICAgICAgICAgcG9wdWxhdGVPcHRpb249e3RoaXMucG9wdWxhdGVPcHRpb25zfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENvbnRlbnRMaXN0XG4gICAgICAgICAgICBsaXN0aW5nc0RhdGE9e3RoaXMuc3RhdGUuZmlsdGVyZWREYXRhfVxuICAgICAgICAgICAgZ2xvYmFsU3RhdGU9e3RoaXMuc3RhdGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9BcHAuanN4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7QUFyQkE7QUFzQkE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFOQTtBQUZBO0FBZUE7Ozs7OztBQUdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///364\n");

/***/ })

})