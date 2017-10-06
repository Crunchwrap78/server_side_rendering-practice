webpackHotUpdate(0,{

/***/ 367:
/*!****************************************!*\
  !*** ./src/components/ContentList.jsx ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 52);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ContentList = function (_Component) {\n  _inherits(ContentList, _Component);\n\n  function ContentList() {\n    _classCallCheck(this, ContentList);\n\n    return _possibleConstructorReturn(this, (ContentList.__proto__ || Object.getPrototypeOf(ContentList)).apply(this, arguments));\n  }\n\n  _createClass(ContentList, [{\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\n        \"section\",\n        { id: \"content-list\" },\n        _react2.default.createElement(\n          \"section\",\n          { className: \"search-area\" },\n          _react2.default.createElement(\"input\", { type: \"text\", name: \"search\" })\n        ),\n        _react2.default.createElement(\n          \"section\",\n          { className: \"sortby-area\" },\n          _react2.default.createElement(\n            \"div\",\n            { className: \"results\" },\n            \"390 results found\"\n          ),\n          _react2.default.createElement(\n            \"div\",\n            { className: \"sort-options\" },\n            _react2.default.createElement(\n              \"select\",\n              { className: \"sortby\" },\n              _react2.default.createElement(\n                \"option\",\n                null,\n                \"Highest Price\"\n              ),\n              _react2.default.createElement(\n                \"option\",\n                null,\n                \"Lowest Price\"\n              )\n            ),\n            _react2.default.createElement(\n              \"div\",\n              { className: \"view\" },\n              _react2.default.createElement(\"i\", { className: \"fa fa-th-list\", \"aria-hidden\": \"true\" }),\n              _react2.default.createElement(\"i\", { className: \"fa fa-th\", \"aria-hidden\": \"true\" })\n            )\n          )\n        ),\n        _react2.default.createElement(\n          \"section\",\n          { className: \"listings-results\" },\n          _react2.default.createElement(\n            \"div\",\n            { className: \"listing\" },\n            _react2.default.createElement(\n              \"div\",\n              { className: \"listing-img\" },\n              _react2.default.createElement(\n                \"span\",\n                { className: \"Address\" },\n                \"Address\"\n              ),\n              _react2.default.createElement(\n                \"div\",\n                { className: \"details\" },\n                _react2.default.createElement(\n                  \"div\",\n                  { className: \"col-md-3\" },\n                  _react2.default.createElement(\"div\", { className: \"user-img\" })\n                ),\n                _react2.default.createElement(\n                  \"div\",\n                  { className: \"col-md-9\" },\n                  _react2.default.createElement(\n                    \"div\",\n                    { className: \"user-details\" },\n                    _react2.default.createElement(\n                      \"span\",\n                      { className: \"user-name\" },\n                      \"Nina Smith\"\n                    ),\n                    _react2.default.createElement(\n                      \"span\",\n                      { className: \"post-date\" },\n                      \"05/02/2017\"\n                    )\n                  ),\n                  _react2.default.createElement(\n                    \"div\",\n                    { className: \"listing-details\" },\n                    _react2.default.createElement(\n                      \"div\",\n                      { className: \"floor-space\" },\n                      _react2.default.createElement(\"i\", { className: \"fa fa-square-o\", \"aria-hidden\": \"true\" }),\n                      _react2.default.createElement(\n                        \"span\",\n                        null,\n                        \"1000 ft\\xB2\"\n                      )\n                    ),\n                    _react2.default.createElement(\n                      \"div\",\n                      { className: \"bedrooms\" },\n                      _react2.default.createElement(\"i\", { className: \"fa fa-bed\", \"aria-hidden\": \"true\" }),\n                      _react2.default.createElement(\n                        \"span\",\n                        null,\n                        \"3 bedrooms\"\n                      )\n                    )\n                  ),\n                  _react2.default.createElement(\n                    \"div\",\n                    { className: \"view-btn\" },\n                    \"View Listing\"\n                  )\n                )\n              )\n            ),\n            _react2.default.createElement(\n              \"div\",\n              { className: \"bottom-info\" },\n              _react2.default.createElement(\n                \"span\",\n                null,\n                \"$1000 / month\"\n              ),\n              _react2.default.createElement(\n                \"span\",\n                null,\n                _react2.default.createElement(\"i\", { className: \"fa fa-map-marker\" }),\n                \"Ridgewood, NY \"\n              )\n            )\n          )\n        ),\n        _react2.default.createElement(\n          \"section\",\n          { className: \"pagination\" },\n          _react2.default.createElement(\n            \"ul\",\n            { className: \"pagination-nums\" },\n            _react2.default.createElement(\n              \"li\",\n              null,\n              \"Prev\"\n            ),\n            _react2.default.createElement(\n              \"li\",\n              null,\n              \"1\"\n            ),\n            _react2.default.createElement(\n              \"li\",\n              null,\n              \"2\"\n            ),\n            _react2.default.createElement(\n              \"li\",\n              null,\n              \"3\"\n            ),\n            _react2.default.createElement(\n              \"li\",\n              null,\n              \"4\"\n            ),\n            _react2.default.createElement(\n              \"li\",\n              null,\n              \"5\"\n            ),\n            _react2.default.createElement(\n              \"li\",\n              null,\n              \"Next\"\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return ContentList;\n}(_react.Component);\n\nexports.default = ContentList;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzY3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0NvbnRlbnRMaXN0LmpzeD8xNjIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBpZD1cImNvbnRlbnQtbGlzdFwiPlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlYXJjaC1hcmVhXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic2VhcmNoXCIvPlxuICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNvcnRieS1hcmVhXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdHNcIj4zOTAgcmVzdWx0cyBmb3VuZDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb3J0LW9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJzb3J0YnlcIj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPkhpZ2hlc3QgUHJpY2U8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPkxvd2VzdCBQcmljZTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWV3XCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdGgtbGlzdFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10aFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJsaXN0aW5ncy1yZXN1bHRzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nLWltZ1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIkFkZHJlc3NcIj5BZGRyZXNzPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtM1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItaW1nXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1c2VyLW5hbWVcIj5OaW5hIFNtaXRoPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvc3QtZGF0ZVwiPjA1LzAyLzIwMTc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmctZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvb3Itc3BhY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNxdWFyZS1vXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+MTAwMCBmdCZzdXAyOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJlZHJvb21zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1iZWRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4zIGJlZHJvb21zPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWV3LWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgIFZpZXcgTGlzdGluZ1xuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b20taW5mb1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuPiQxMDAwIC8gbW9udGg8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+PGkgY2xhc3NOYW1lPVwiZmEgZmEtbWFwLW1hcmtlclwiPjwvaT5SaWRnZXdvb2QsIE5ZIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBhZ2luYXRpb24tbnVtc1wiPlxuICAgICAgICAgICAgICA8bGk+UHJldjwvbGk+XG4gICAgICAgICAgICAgIDxsaT4xPC9saT5cbiAgICAgICAgICAgICAgPGxpPjI8L2xpPlxuICAgICAgICAgICAgICA8bGk+MzwvbGk+XG4gICAgICAgICAgICAgIDxsaT40PC9saT5cbiAgICAgICAgICAgICAgPGxpPjU8L2xpPlxuICAgICAgICAgICAgICA8bGk+TmV4dDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvQ29udGVudExpc3QuanN4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFMQTtBQUZBO0FBY0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUxBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWZBO0FBSkE7QUFGQTtBQTJCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUE1QkE7QUFEQTtBQW1DQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEE7QUFEQTtBQXREQTtBQW1FQTs7Ozs7O0FBdEVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///367\n");

/***/ })

})