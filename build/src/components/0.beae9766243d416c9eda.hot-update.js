webpackHotUpdate(0,{

/***/ 367:
/*!****************************************!*\
  !*** ./src/components/ContentList.jsx ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 52);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ContentList = function (_Component) {\n  _inherits(ContentList, _Component);\n\n  function ContentList() {\n    _classCallCheck(this, ContentList);\n\n    return _possibleConstructorReturn(this, (ContentList.__proto__ || Object.getPrototypeOf(ContentList)).apply(this, arguments));\n  }\n\n  _createClass(ContentList, [{\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\n        \"section\",\n        { className: \"content-list\" },\n        _react2.default.createElement(\n          \"section\",\n          { className: \"search-area\" },\n          _react2.default.createElement(\"input\", { type: \"text\", name: \"search\" })\n        ),\n        _react2.default.createElement(\n          \"section\",\n          { className: \"sortby-area\" },\n          _react2.default.createElement(\n            \"div\",\n            null,\n            \"390 results found\"\n          ),\n          _react2.default.createElement(\n            \"div\",\n            { className: \"sort-options\" },\n            _react2.default.createElement(\n              \"select\",\n              { className: \"sortby\" },\n              _react2.default.createElement(\"option\", null),\n              _react2.default.createElement(\"option\", null)\n            ),\n            _react2.default.createElement(\n              \"div\",\n              { className: \"view\" },\n              _react2.default.createElement(\"i\", { className: \"fa fa-th-list\", \"aria-hidden\": \"true\" }),\n              _react2.default.createElement(\"i\", { className: \"fa fa-th\", \"aria-hidden\": \"true\" })\n            )\n          )\n        ),\n        _react2.default.createElement(\n          \"section\",\n          { className: \"listings-results\" },\n          _react2.default.createElement(\n            \"div\",\n            { className: \"listing\" },\n            _react2.default.createElement(\n              \"div\",\n              { className: \"listing-img\" },\n              _react2.default.createElement(\n                \"span\",\n                { className: \"Address\" },\n                \"Address\"\n              ),\n              _react2.default.createElement(\n                \"div\",\n                { className: \"details\" },\n                _react2.default.createElement(\"div\", { className: \"user-img\" }),\n                _react2.default.createElement(\n                  \"div\",\n                  { className: \"user-details\" },\n                  _react2.default.createElement(\n                    \"span\",\n                    { className: \"user-name\" },\n                    \"Nina Smith\"\n                  ),\n                  _react2.default.createElement(\n                    \"span\",\n                    { className: \"post-date\" },\n                    \"05/02/2017\"\n                  )\n                ),\n                _react2.default.createElement(\n                  \"div\",\n                  { className: \"listing-details\" },\n                  _react2.default.createElement(\n                    \"div\",\n                    { className: \"floor-space\" },\n                    _react2.default.createElement(\"i\", { className: \"fa fa-square-o\", \"aria-hidden\": \"true\" }),\n                    _react2.default.createElement(\n                      \"span\",\n                      null,\n                      \"1000 ft\\xB2\"\n                    )\n                  ),\n                  _react2.default.createElement(\n                    \"div\",\n                    { className: \"bedrooms\" },\n                    _react2.default.createElement(\"i\", { className: \"fa fa-bed\", \"aria-hidden\": \"true\" }),\n                    _react2.default.createElement(\n                      \"span\",\n                      null,\n                      \"3 bedrooms\"\n                    )\n                  )\n                )\n              )\n            )\n          )\n        ),\n        _react2.default.createElement(\"section\", { className: \"pagination\" })\n      );\n    }\n  }]);\n\n  return ContentList;\n}(_react.Component);\n\nexports.default = ContentList;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzY3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0NvbnRlbnRMaXN0LmpzeD8xNjIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250ZW50LWxpc3RcIj5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWFyY2gtYXJlYVwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInNlYXJjaFwiLz5cbiAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzb3J0YnktYXJlYVwiPlxuICAgICAgICAgICAgPGRpdj4zOTAgcmVzdWx0cyBmb3VuZDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb3J0LW9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJzb3J0YnlcIj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24+PC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZXdcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10aC1saXN0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRoXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImxpc3RpbmdzLXJlc3VsdHNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmctaW1nXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiQWRkcmVzc1wiPkFkZHJlc3M8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItaW1nXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1c2VyLW5hbWVcIj5OaW5hIFNtaXRoPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb3N0LWRhdGVcIj4wNS8wMi8yMDE3PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmctZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb29yLXNwYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3F1YXJlLW9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+MTAwMCBmdCZzdXAyOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmVkcm9vbXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1iZWRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+MyBiZWRyb29tczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxuXG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICApO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9Db250ZW50TGlzdC5qc3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBTEE7QUFGQTtBQWNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBTEE7QUFOQTtBQUZBO0FBREE7QUFEQTtBQXdCQTtBQTNDQTtBQWdEQTs7Ozs7O0FBbkRBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///367\n");

/***/ })

})