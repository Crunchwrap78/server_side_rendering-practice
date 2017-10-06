webpackHotUpdate(0,{

/***/ 367:
/*!****************************************!*\
  !*** ./src/components/ContentList.jsx ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 49);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ContentList = function (_Component) {\n  _inherits(ContentList, _Component);\n\n  function ContentList() {\n    _classCallCheck(this, ContentList);\n\n    return _possibleConstructorReturn(this, (ContentList.__proto__ || Object.getPrototypeOf(ContentList)).apply(this, arguments));\n  }\n\n  _createClass(ContentList, [{\n    key: \"render\",\n    value: function render() {\n      var listingsData = this.props.listingsData;\n\n      var content = listingsData.map(function (housing, index) {\n        return _react2.default.createElement(\n          \"div\",\n          { className: \"col-md-4\", key: index },\n          _react2.default.createElement(\n            \"div\",\n            { className: \"listing\" },\n            _react2.default.createElement(\n              \"div\",\n              { className: \"listing-img\", style: { background: \"url(\\\"\" + housing.image + \"\\\") no-repeat center center\" } },\n              _react2.default.createElement(\n                \"span\",\n                { className: \"address\" },\n                housing.address\n              ),\n              _react2.default.createElement(\n                \"div\",\n                { className: \"details\" },\n                _react2.default.createElement(\n                  \"div\",\n                  { className: \"col-md-3\" },\n                  _react2.default.createElement(\"div\", { className: \"user-img\" })\n                ),\n                _react2.default.createElement(\n                  \"div\",\n                  { className: \"col-md-9\" },\n                  _react2.default.createElement(\n                    \"div\",\n                    { className: \"user-details\" },\n                    _react2.default.createElement(\n                      \"span\",\n                      { className: \"user-name\" },\n                      \"Nina Smith\"\n                    ),\n                    _react2.default.createElement(\n                      \"span\",\n                      { className: \"post-date\" },\n                      \"05/02/2017\"\n                    )\n                  ),\n                  _react2.default.createElement(\n                    \"div\",\n                    { className: \"listing-details\" },\n                    _react2.default.createElement(\n                      \"div\",\n                      { className: \"floor-space\" },\n                      _react2.default.createElement(\"i\", { className: \"fa fa-square-o\", \"aria-hidden\": \"true\" }),\n                      _react2.default.createElement(\n                        \"span\",\n                        null,\n                        housing.floorSpace,\n                        \" ft\\xB2\"\n                      )\n                    ),\n                    _react2.default.createElement(\n                      \"div\",\n                      { className: \"bedrooms\" },\n                      _react2.default.createElement(\"i\", { className: \"fa fa-bed\", \"aria-hidden\": \"true\" }),\n                      _react2.default.createElement(\n                        \"span\",\n                        null,\n                        housing.rooms,\n                        \" bedrooms\"\n                      )\n                    )\n                  ),\n                  _react2.default.createElement(\n                    \"div\",\n                    { className: \"view-btn\" },\n                    \"View Listing\"\n                  )\n                )\n              )\n            ),\n            _react2.default.createElement(\n              \"div\",\n              { className: \"bottom-info\" },\n              _react2.default.createElement(\n                \"span\",\n                { className: \"price\" },\n                \"$\",\n                housing.price\n              ),\n              _react2.default.createElement(\n                \"span\",\n                { className: \"location\" },\n                _react2.default.createElement(\"i\", { className: \"fa fa-map-marker\" }),\n                housing.city,\n                \" \",\n                housing.state,\n                \" \"\n              )\n            )\n          )\n        );\n      });\n      if (listingsData == undefined || listingsData.length == 0) {\n        var _listings = \"Sorry your filter did not match any listing\";\n      } else {\n        var _listings2 = _listings2;\n      }\n\n      return _react2.default.createElement(\n        \"section\",\n        { id: \"content-list\" },\n        _react2.default.createElement(\n          \"section\",\n          { className: \"search-area\" },\n          _react2.default.createElement(\"input\", { type: \"text\", name: \"search\" })\n        ),\n        _react2.default.createElement(\n          \"section\",\n          { className: \"sortby-area\" },\n          _react2.default.createElement(\n            \"div\",\n            { className: \"results\" },\n            listingsData.length,\n            \" results found\"\n          ),\n          _react2.default.createElement(\n            \"div\",\n            { className: \"sort-options\" },\n            _react2.default.createElement(\n              \"select\",\n              { name: \"sortby\", className: \"sortby\", onChange: this.props.handleChange },\n              _react2.default.createElement(\n                \"option\",\n                { value: \"price-asc\" },\n                \"Highest Price\"\n              ),\n              _react2.default.createElement(\n                \"option\",\n                { value: \"\" },\n                \"Lowest Price\"\n              )\n            ),\n            _react2.default.createElement(\n              \"div\",\n              { className: \"view\" },\n              _react2.default.createElement(\"i\", { className: \"fa fa-th-list\", \"aria-hidden\": \"true\" }),\n              _react2.default.createElement(\"i\", { className: \"fa fa-th\", \"aria-hidden\": \"true\" })\n            )\n          )\n        ),\n        _react2.default.createElement(\n          \"section\",\n          { className: \"listings-results\" },\n          listings\n        ),\n        _react2.default.createElement(\n          \"section\",\n          { id: \"pagination\" },\n          _react2.default.createElement(\n            \"ul\",\n            { className: \"pages\" },\n            _react2.default.createElement(\n              \"li\",\n              null,\n              \"Prev\"\n            ),\n            _react2.default.createElement(\n              \"li\",\n              { className: \"active\" },\n              \"1\"\n            ),\n            _react2.default.createElement(\n              \"li\",\n              null,\n              \"2\"\n            ),\n            _react2.default.createElement(\n              \"li\",\n              null,\n              \"3\"\n            ),\n            _react2.default.createElement(\n              \"li\",\n              null,\n              \"4\"\n            ),\n            _react2.default.createElement(\n              \"li\",\n              null,\n              \"5\"\n            ),\n            _react2.default.createElement(\n              \"li\",\n              null,\n              \"Next\"\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return ContentList;\n}(_react.Component);\n\nexports.default = ContentList;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzY3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0NvbnRlbnRMaXN0LmpzeD8xNjIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7IGxpc3RpbmdzRGF0YSB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBsaXN0aW5nc0RhdGEubWFwKChob3VzaW5nLCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZy1pbWdcIiBzdHlsZT17e2JhY2tncm91bmQ6IGB1cmwoXCIke2hvdXNpbmcuaW1hZ2V9XCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyYH19PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFkZHJlc3NcIj57aG91c2luZy5hZGRyZXNzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWltZ1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC05XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidXNlci1uYW1lXCI+TmluYSBTbWl0aDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb3N0LWRhdGVcIj4wNS8wMi8yMDE3PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb29yLXNwYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zcXVhcmUtb1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntob3VzaW5nLmZsb29yU3BhY2V9IGZ0JnN1cDI7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmVkcm9vbXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWJlZFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntob3VzaW5nLnJvb21zfSBiZWRyb29tczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlldy1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICBWaWV3IExpc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tLWluZm9cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcmljZVwiPiR7aG91c2luZy5wcmljZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9jYXRpb25cIj48aSBjbGFzc05hbWU9XCJmYSBmYS1tYXAtbWFya2VyXCI+PC9pPntob3VzaW5nLmNpdHl9IHtob3VzaW5nLnN0YXRlfSA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH0pO1xuICAgICAgaWYobGlzdGluZ3NEYXRhID09IHVuZGVmaW5lZCB8fCBsaXN0aW5nc0RhdGEubGVuZ3RoID09IDApIHtcbiAgICAgICAgY29uc3QgbGlzdGluZ3MgPSBcIlNvcnJ5IHlvdXIgZmlsdGVyIGRpZCBub3QgbWF0Y2ggYW55IGxpc3RpbmdcIlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbGlzdGluZ3MgPSBsaXN0aW5ncztcbiAgICAgIH1cblxuXG5cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJjb250ZW50LWxpc3RcIj5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWFyY2gtYXJlYVwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInNlYXJjaFwiLz5cbiAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzb3J0YnktYXJlYVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRzXCI+e2xpc3RpbmdzRGF0YS5sZW5ndGh9IHJlc3VsdHMgZm91bmQ8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29ydC1vcHRpb25zXCI+XG4gICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInNvcnRieVwiIGNsYXNzTmFtZT1cInNvcnRieVwiIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmhhbmRsZUNoYW5nZX0+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInByaWNlLWFzY1wiPkhpZ2hlc3QgUHJpY2U8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+TG93ZXN0IFByaWNlPC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZXdcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10aC1saXN0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRoXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJsaXN0aW5ncy1yZXN1bHRzXCI+XG4gICAgICAgICAgICB7bGlzdGluZ3N9XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDxzZWN0aW9uIGlkPVwicGFnaW5hdGlvblwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBhZ2VzXCI+XG4gICAgICAgICAgICAgIDxsaT5QcmV2PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFjdGl2ZVwiPjE8L2xpPlxuICAgICAgICAgICAgICA8bGk+MjwvbGk+XG4gICAgICAgICAgICAgIDxsaT4zPC9saT5cbiAgICAgICAgICAgICAgPGxpPjQ8L2xpPlxuICAgICAgICAgICAgICA8bGk+NTwvbGk+XG4gICAgICAgICAgICAgIDxsaT5OZXh0PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9zZWN0aW9uPilcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL0NvbnRlbnRMaXN0LmpzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFMQTtBQVVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFmQTtBQUpBO0FBRkE7QUEyQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUE1QkE7QUFEQTtBQW9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBTEE7QUFGQTtBQWFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEE7QUFEQTtBQXJCQTtBQWlDQTs7Ozs7O0FBckZBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///367\n");

/***/ })

})