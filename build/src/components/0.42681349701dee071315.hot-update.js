webpackHotUpdate(0,{

/***/ 364:
/*!********************************!*\
  !*** ./src/components/App.jsx ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 52);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Header = __webpack_require__(/*! ./Header */ 365);\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _Sidebar = __webpack_require__(/*! ./Sidebar */ 366);\n\nvar _Sidebar2 = _interopRequireDefault(_Sidebar);\n\nvar _ContentList = __webpack_require__(/*! ./ContentList */ 367);\n\nvar _ContentList2 = _interopRequireDefault(_ContentList);\n\nvar _listings = __webpack_require__(/*! ../data/listings.js */ 368);\n\nvar _listings2 = _interopRequireDefault(_listings);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_Component) {\n  _inherits(App, _Component);\n\n  function App(props) {\n    _classCallCheck(this, App);\n\n    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n    _this.state = {\n      city: 'All',\n      rooms: 0,\n      listingsData: _listings2.default,\n      homeType: 'All',\n      min_price: 0,\n      max_price: 10000000,\n      min_floor_space: 0,\n      max_floor_space: 4000,\n      elevator: false,\n      basement: false,\n      swimming_pool: false,\n      gym: false,\n      filteredData: _listings2.default,\n      populateDropDown: '',\n      sortby: 'price-dsc'\n    };\n\n    _this.handleChange = _this.handleChange.bind(_this);\n    _this.filterData = _this.filterData.bind(_this);\n    _this.populateOptions = _this.populateOptions.bind(_this);\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: 'componentWillMount',\n    value: function componentWillMount() {\n      var listingsData = this.state.listingsData.sort(function (a, b) {\n        return a.price - b.price;\n      });\n      this.setState({\n        listingsData: listingsData\n      });\n    }\n  }, {\n    key: 'handleChange',\n    value: function handleChange(event) {\n      var _this2 = this;\n\n      var name = event.target.name;\n      var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;\n      this.setState(_defineProperty({}, name, value), function () {\n        console.log(_this2.state);\n        _this2.filterData();\n      });\n    }\n  }, {\n    key: 'filterData',\n    value: function filterData() {\n      var _this3 = this;\n\n      var newData = this.state.listingsData.filter(function (item) {\n        return item.price >= _this3.state.min_price && item.price <= _this3.state.max_price && item.floorSpace >= _this3.state.min_floor_space && item.floorSpace <= _this3.state.max_floor_space && item.rooms >= _this3.state.rooms;\n      });\n\n      if (this.state.city !== 'All') {\n        newData = newData.filter(function (item) {\n          return item.city === _this3.state.city;\n        });\n      }\n\n      if (this.state.homeType !== 'All') {\n        newData = newData.filter(function (item) {\n          return item.homeType === _this3.state.homeType;\n        });\n      }\n\n      if (this.state.sortby == 'price-asc') {\n        newData.sort(function (a, b) {\n          return b.price - a.price;\n        });\n      }\n\n      if (this.state.sortby == 'price-dsc') {\n        newData.sort(function (a, b) {\n          return a.price - b.price;\n        });\n      }\n\n      this.setState({ filteredData: newData });\n    }\n  }, {\n    key: 'populateOptions',\n    value: function populateOptions() {\n      var _this4 = this;\n\n      var cities = this.state.listingsData.map(function (item) {\n        return item.city;\n      });\n      cities = new Set(cities);\n      cities = [].concat(_toConsumableArray(cities));\n\n      var homeTypes = this.state.listingsData.map(function (item) {\n        return item.homeType;\n      });\n      homeTypes = new Set(homeTypes);\n      homeTypes = [].concat(_toConsumableArray(homeTypes));\n\n      var numOfRooms = this.state.listingsData.map(function (item) {\n        return item.rooms;\n      });\n      numOfRooms = new Set(numOfRooms);\n      numOfRooms = [].concat(_toConsumableArray(numOfRooms));\n\n      this.setState({\n        populateDropDown: {\n          homeTypes: homeTypes,\n          numOfRooms: numOfRooms,\n          cities: cities\n        }\n      }, function () {\n        console.log(_this4.state, \"coll\");\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_Header2.default, null),\n        _react2.default.createElement(\n          'section',\n          { id: 'content-area' },\n          _react2.default.createElement(_Sidebar2.default, {\n            handleChange: this.handleChange,\n            globalState: this.state,\n            populateOption: this.populateOptions\n          }),\n          _react2.default.createElement(_ContentList2.default, {\n            handleChange: this.handleChange,\n            listingsData: this.state.filteredData,\n            globalState: this.state\n          })\n        )\n      );\n    }\n  }]);\n\n  return App;\n}(_react.Component);\n\nexports.default = App;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzY0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0FwcC5qc3g/Zjg4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL1NpZGViYXInO1xuaW1wb3J0IENvbnRlbnRMaXN0IGZyb20gJy4vQ29udGVudExpc3QnO1xuaW1wb3J0IGxpc3RpbmdzRGF0YSBmcm9tICcuLi9kYXRhL2xpc3RpbmdzLmpzJ1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gIFx0c3VwZXIocHJvcHMpO1xuICBcdHRoaXMuc3RhdGUgPSB7XG4gICAgICBjaXR5OiAnQWxsJyxcbiAgICAgIHJvb21zOiAwLFxuICAgICAgbGlzdGluZ3NEYXRhLFxuICAgICAgaG9tZVR5cGU6ICdBbGwnLFxuICAgICAgbWluX3ByaWNlOiAwLFxuICAgICAgbWF4X3ByaWNlOiAxMDAwMDAwMCxcbiAgICAgIG1pbl9mbG9vcl9zcGFjZTogMCxcbiAgICAgIG1heF9mbG9vcl9zcGFjZTogNDAwMCxcbiAgICAgIGVsZXZhdG9yOiBmYWxzZSxcbiAgICAgIGJhc2VtZW50OiBmYWxzZSxcbiAgICAgIHN3aW1taW5nX3Bvb2w6IGZhbHNlLFxuICAgICAgZ3ltOiBmYWxzZSxcbiAgICAgIGZpbHRlcmVkRGF0YTogbGlzdGluZ3NEYXRhLFxuICAgICAgcG9wdWxhdGVEcm9wRG93bjogJycsXG4gICAgICBzb3J0Ynk6ICdwcmljZS1kc2MnXG4gICAgfTtcblxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmZpbHRlckRhdGEgPSB0aGlzLmZpbHRlckRhdGEuYmluZCh0aGlzKTtcbiAgICB0aGlzLnBvcHVsYXRlT3B0aW9ucyA9IHRoaXMucG9wdWxhdGVPcHRpb25zLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKXtcbiAgICB2YXIgbGlzdGluZ3NEYXRhID0gdGhpcy5zdGF0ZS5saXN0aW5nc0RhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGEucHJpY2UgLSBiLnByaWNlXG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBsaXN0aW5nc0RhdGFcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIGNvbnN0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZVxuICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnR5cGUgPT09ICdjaGVja2JveCcgPyBldmVudC50YXJnZXQuY2hlY2tlZCA6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgWyBuYW1lIF06IHZhbHVlXG4gICAgfSwgKCk9PiB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgICAgIHRoaXMuZmlsdGVyRGF0YSgpXG4gICAgfSlcblxuICB9XG5cbiAgZmlsdGVyRGF0YSgpIHtcbiAgICBsZXQgbmV3RGF0YSA9IHRoaXMuc3RhdGUubGlzdGluZ3NEYXRhLmZpbHRlcihpdGVtID0+XG4gICAgICBpdGVtLnByaWNlID49IHRoaXMuc3RhdGUubWluX3ByaWNlICYmIGl0ZW0ucHJpY2UgPD0gdGhpcy5zdGF0ZS5tYXhfcHJpY2UgJiYgaXRlbS5mbG9vclNwYWNlID49IHRoaXMuc3RhdGUubWluX2Zsb29yX3NwYWNlICYmIGl0ZW0uZmxvb3JTcGFjZSA8PSB0aGlzLnN0YXRlLm1heF9mbG9vcl9zcGFjZSAmJiBpdGVtLnJvb21zID49IHRoaXMuc3RhdGUucm9vbXNcbiAgICApO1xuXG4gICAgaWYodGhpcy5zdGF0ZS5jaXR5ICE9PSAnQWxsJykge1xuICAgICAgbmV3RGF0YSA9IG5ld0RhdGEuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jaXR5ID09PSB0aGlzLnN0YXRlLmNpdHkpXG4gICAgfVxuXG4gICAgaWYodGhpcy5zdGF0ZS5ob21lVHlwZSAhPT0gJ0FsbCcpIHtcbiAgICAgIG5ld0RhdGEgPSBuZXdEYXRhLmZpbHRlcihpdGVtID0+IGl0ZW0uaG9tZVR5cGUgPT09IHRoaXMuc3RhdGUuaG9tZVR5cGUpXG4gICAgfVxuXG4gICAgaWYodGhpcy5zdGF0ZS5zb3J0YnkgPT0gJ3ByaWNlLWFzYycpIHtcbiAgICAgIG5ld0RhdGEuc29ydCgoYSwgYikgPT4gYi5wcmljZSAtIGEucHJpY2UpO1xuICAgIH1cblxuICAgIGlmKHRoaXMuc3RhdGUuc29ydGJ5ID09ICdwcmljZS1kc2MnKSB7XG4gICAgICBuZXdEYXRhLnNvcnQoKGEsIGIpID0+IGEucHJpY2UgLSBiLnByaWNlKTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtmaWx0ZXJlZERhdGE6IG5ld0RhdGF9KTtcbiAgfVxuXG4gIHBvcHVsYXRlT3B0aW9ucygpIHtcbiAgICB2YXIgY2l0aWVzID0gdGhpcy5zdGF0ZS5saXN0aW5nc0RhdGEubWFwKGl0ZW0gPT4gaXRlbS5jaXR5ICk7XG4gICAgY2l0aWVzID0gbmV3IFNldChjaXRpZXMpO1xuICAgIGNpdGllcyA9IFsuLi5jaXRpZXNdO1xuXG4gICAgdmFyIGhvbWVUeXBlcyA9IHRoaXMuc3RhdGUubGlzdGluZ3NEYXRhLm1hcChpdGVtID0+IGl0ZW0uaG9tZVR5cGUpO1xuICAgIGhvbWVUeXBlcyA9IG5ldyBTZXQoaG9tZVR5cGVzKTtcbiAgICBob21lVHlwZXMgPSBbLi4uaG9tZVR5cGVzXTtcblxuICAgIHZhciBudW1PZlJvb21zID0gdGhpcy5zdGF0ZS5saXN0aW5nc0RhdGEubWFwKGl0ZW0gPT4gaXRlbS5yb29tcyk7XG4gICAgbnVtT2ZSb29tcyA9IG5ldyBTZXQobnVtT2ZSb29tcyk7XG4gICAgbnVtT2ZSb29tcyA9IFsuLi5udW1PZlJvb21zXTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcG9wdWxhdGVEcm9wRG93bjoge1xuICAgICAgICBob21lVHlwZXMsXG4gICAgICAgIG51bU9mUm9vbXMsXG4gICAgICAgIGNpdGllc1xuICAgICAgfVxuICAgIH0sICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUsIFwiY29sbFwiKVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxzZWN0aW9uIGlkPVwiY29udGVudC1hcmVhXCI+XG4gICAgICAgICAgPFNpZGViYXJcbiAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBnbG9iYWxTdGF0ZT17dGhpcy5zdGF0ZX1cbiAgICAgICAgICAgIHBvcHVsYXRlT3B0aW9uPXt0aGlzLnBvcHVsYXRlT3B0aW9uc31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxDb250ZW50TGlzdFxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIGxpc3RpbmdzRGF0YT17dGhpcy5zdGF0ZS5maWx0ZXJlZERhdGF9XG4gICAgICAgICAgICBnbG9iYWxTdGF0ZT17dGhpcy5zdGF0ZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBQ0E7QUFpQkE7QUFDQTtBQUNBO0FBdEJBO0FBdUJBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFOQTtBQUZBO0FBZ0JBOzs7Ozs7QUFHQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///364\n");

/***/ })

})