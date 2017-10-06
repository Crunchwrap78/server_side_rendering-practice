webpackHotUpdate(0,{

/***/ 367:
/*!****************************************!*\
  !*** ./src/components/ContentList.jsx ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 52);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ContentList = function (_Component) {\n  _inherits(ContentList, _Component);\n\n  function ContentList() {\n    _classCallCheck(this, ContentList);\n\n    return _possibleConstructorReturn(this, (ContentList.__proto__ || Object.getPrototypeOf(ContentList)).apply(this, arguments));\n  }\n\n  _createClass(ContentList, [{\n    key: \"render\",\n    value: function render() {\n      var listingsData = this.props.listingsData;\n\n      var listings = listingsData.map(function (housing, index) {\n        return _react2.default.createElement(\n          \"div\",\n          { className: \"col-md-4\", key: index },\n          _react2.default.createElement(\n            \"div\",\n            { className: \"listing\" },\n            _react2.default.createElement(\n              \"div\",\n              { className: \"listing-img\", style: { background: \"url(\\\"\" + housing.image + \"\\\") no-repeat center center\" } },\n              _react2.default.createElement(\n                \"span\",\n                { className: \"address\" },\n                housing.address\n              ),\n              _react2.default.createElement(\n                \"div\",\n                { className: \"details\" },\n                _react2.default.createElement(\n                  \"div\",\n                  { className: \"col-md-3\" },\n                  _react2.default.createElement(\"div\", { className: \"user-img\" })\n                ),\n                _react2.default.createElement(\n                  \"div\",\n                  { className: \"col-md-9\" },\n                  _react2.default.createElement(\n                    \"div\",\n                    { className: \"user-details\" },\n                    _react2.default.createElement(\n                      \"span\",\n                      { className: \"user-name\" },\n                      \"Nina Smith\"\n                    ),\n                    _react2.default.createElement(\n                      \"span\",\n                      { className: \"post-date\" },\n                      \"05/02/2017\"\n                    )\n                  ),\n                  _react2.default.createElement(\n                    \"div\",\n                    { className: \"listing-details\" },\n                    _react2.default.createElement(\n                      \"div\",\n                      { className: \"floor-space\" },\n                      _react2.default.createElement(\"i\", { className: \"fa fa-square-o\", \"aria-hidden\": \"true\" }),\n                      _react2.default.createElement(\n                        \"span\",\n                        null,\n                        housing.floorSpace,\n                        \" ft\\xB2\"\n                      )\n                    ),\n                    _react2.default.createElement(\n                      \"div\",\n                      { className: \"bedrooms\" },\n                      _react2.default.createElement(\"i\", { className: \"fa fa-bed\", \"aria-hidden\": \"true\" }),\n                      _react2.default.createElement(\n                        \"span\",\n                        null,\n                        housing.rooms,\n                        \" bedrooms\"\n                      )\n                    )\n                  ),\n                  _react2.default.createElement(\n                    \"div\",\n                    { className: \"view-btn\" },\n                    \"View Listing\"\n                  )\n                )\n              )\n            ),\n            _react2.default.createElement(\n              \"div\",\n              { className: \"bottom-info\" },\n              _react2.default.createElement(\n                \"span\",\n                { className: \"price\" },\n                \"$\",\n                housing.price\n              ),\n              _react2.default.createElement(\n                \"span\",\n                { className: \"location\" },\n                _react2.default.createElement(\"i\", { className: \"fa fa-map-marker\" }),\n                housing.city,\n                \" \",\n                housing.state,\n                \" \"\n              )\n            )\n          )\n        );\n      });\n\n      if (listingsData === undefined || listingsData.length === 0) {\n        return \"Sorry your filter did not match any listings\";\n      } else {\n        return _react2.default.createElement(\n          \"section\",\n          { id: \"content-list\" },\n          _react2.default.createElement(\n            \"section\",\n            { className: \"search-area\" },\n            _react2.default.createElement(\"input\", { type: \"text\", name: \"search\" })\n          ),\n          _react2.default.createElement(\n            \"section\",\n            { className: \"sortby-area\" },\n            _react2.default.createElement(\n              \"div\",\n              { className: \"results\" },\n              \"390 results found\"\n            ),\n            _react2.default.createElement(\n              \"div\",\n              { className: \"sort-options\" },\n              _react2.default.createElement(\n                \"select\",\n                { className: \"sortby\" },\n                _react2.default.createElement(\n                  \"option\",\n                  null,\n                  \"Highest Price\"\n                ),\n                _react2.default.createElement(\n                  \"option\",\n                  null,\n                  \"Lowest Price\"\n                )\n              ),\n              _react2.default.createElement(\n                \"div\",\n                { className: \"view\" },\n                _react2.default.createElement(\"i\", { className: \"fa fa-th-list\", \"aria-hidden\": \"true\" }),\n                _react2.default.createElement(\"i\", { className: \"fa fa-th\", \"aria-hidden\": \"true\" })\n              )\n            )\n          ),\n          _react2.default.createElement(\n            \"section\",\n            { className: \"listings-results\" },\n            listings\n          ),\n          _react2.default.createElement(\n            \"section\",\n            { id: \"pagination\" },\n            _react2.default.createElement(\n              \"ul\",\n              { className: \"pages\" },\n              _react2.default.createElement(\n                \"li\",\n                null,\n                \"Prev\"\n              ),\n              _react2.default.createElement(\n                \"li\",\n                { className: \"active\" },\n                \"1\"\n              ),\n              _react2.default.createElement(\n                \"li\",\n                null,\n                \"2\"\n              ),\n              _react2.default.createElement(\n                \"li\",\n                null,\n                \"3\"\n              ),\n              _react2.default.createElement(\n                \"li\",\n                null,\n                \"4\"\n              ),\n              _react2.default.createElement(\n                \"li\",\n                null,\n                \"5\"\n              ),\n              _react2.default.createElement(\n                \"li\",\n                null,\n                \"Next\"\n              )\n            )\n          )\n        );\n      }\n    }\n  }]);\n\n  return ContentList;\n}(_react.Component);\n\nexports.default = ContentList;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzY3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0NvbnRlbnRMaXN0LmpzeD8xNjIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7IGxpc3RpbmdzRGF0YSB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IGxpc3RpbmdzID0gbGlzdGluZ3NEYXRhLm1hcCgoaG91c2luZywgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmctaW1nXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOiBgdXJsKFwiJHtob3VzaW5nLmltYWdlfVwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcmB9fT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhZGRyZXNzXCI+e2hvdXNpbmcuYWRkcmVzc308L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1pbWdcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVzZXItbmFtZVwiPk5pbmEgU21pdGg8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9zdC1kYXRlXCI+MDUvMDIvMjAxNzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZy1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9vci1zcGFjZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3F1YXJlLW9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aG91c2luZy5mbG9vclNwYWNlfSBmdCZzdXAyOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJlZHJvb21zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1iZWRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aG91c2luZy5yb29tc30gYmVkcm9vbXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZXctYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgVmlldyBMaXN0aW5nXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbS1pbmZvXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJpY2VcIj4ke2hvdXNpbmcucHJpY2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvY2F0aW9uXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtbWFwLW1hcmtlclwiPjwvaT57aG91c2luZy5jaXR5fSB7aG91c2luZy5zdGF0ZX0gPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9KVxuXG4gICAgICBpZiAobGlzdGluZ3NEYXRhID09PSB1bmRlZmluZWQgfHwgbGlzdGluZ3NEYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gXCJTb3JyeSB5b3VyIGZpbHRlciBkaWQgbm90IG1hdGNoIGFueSBsaXN0aW5nc1wiXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKDxzZWN0aW9uIGlkPVwiY29udGVudC1saXN0XCI+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VhcmNoLWFyZWFcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzZWFyY2hcIi8+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic29ydGJ5LWFyZWFcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0c1wiPjM5MCByZXN1bHRzIGZvdW5kPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvcnQtb3B0aW9uc1wiPlxuICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInNvcnRieVwiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24+SGlnaGVzdCBQcmljZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24+TG93ZXN0IFByaWNlPC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZXdcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10aC1saXN0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRoXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJsaXN0aW5ncy1yZXN1bHRzXCI+XG4gICAgICAgICAgICB7bGlzdGluZ3N9XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDxzZWN0aW9uIGlkPVwicGFnaW5hdGlvblwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBhZ2VzXCI+XG4gICAgICAgICAgICAgIDxsaT5QcmV2PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFjdGl2ZVwiPjE8L2xpPlxuICAgICAgICAgICAgICA8bGk+MjwvbGk+XG4gICAgICAgICAgICAgIDxsaT4zPC9saT5cbiAgICAgICAgICAgICAgPGxpPjQ8L2xpPlxuICAgICAgICAgICAgICA8bGk+NTwvbGk+XG4gICAgICAgICAgICAgIDxsaT5OZXh0PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L3NlY3Rpb24+KVxuICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9Db250ZW50TGlzdC5qc3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBTEE7QUFVQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZkE7QUFKQTtBQUZBO0FBMkJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBNUJBO0FBREE7QUFvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUxBO0FBRkE7QUFhQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBBO0FBREE7QUFyQkE7QUFpQ0E7QUFDQTs7Ozs7O0FBaEZBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///367\n");

/***/ })

})