webpackHotUpdate(0,{

/***/ 367:
/*!****************************************!*\
  !*** ./src/components/ContentList.jsx ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 49);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ContentList = function (_Component) {\n  _inherits(ContentList, _Component);\n\n  function ContentList() {\n    _classCallCheck(this, ContentList);\n\n    return _possibleConstructorReturn(this, (ContentList.__proto__ || Object.getPrototypeOf(ContentList)).apply(this, arguments));\n  }\n\n  _createClass(ContentList, [{\n    key: \"render\",\n    value: function render() {\n      var listingsData = this.props.listingsData;\n\n      var content = listingsData.map(function (housing, index) {\n        return _react2.default.createElement(\n          \"div\",\n          { className: \"col-md-4\", key: index },\n          _react2.default.createElement(\n            \"div\",\n            { className: \"listing\" },\n            _react2.default.createElement(\n              \"div\",\n              { className: \"listing-img\", style: { background: \"url(\\\"\" + housing.image + \"\\\") no-repeat center center\" } },\n              _react2.default.createElement(\n                \"span\",\n                { className: \"address\" },\n                housing.address\n              ),\n              _react2.default.createElement(\n                \"div\",\n                { className: \"details\" },\n                _react2.default.createElement(\n                  \"div\",\n                  { className: \"col-md-3\" },\n                  _react2.default.createElement(\"div\", { className: \"user-img\" })\n                ),\n                _react2.default.createElement(\n                  \"div\",\n                  { className: \"col-md-9\" },\n                  _react2.default.createElement(\n                    \"div\",\n                    { className: \"user-details\" },\n                    _react2.default.createElement(\n                      \"span\",\n                      { className: \"user-name\" },\n                      \"Nina Smith\"\n                    ),\n                    _react2.default.createElement(\n                      \"span\",\n                      { className: \"post-date\" },\n                      \"05/02/2017\"\n                    )\n                  ),\n                  _react2.default.createElement(\n                    \"div\",\n                    { className: \"listing-details\" },\n                    _react2.default.createElement(\n                      \"div\",\n                      { className: \"floor-space\" },\n                      _react2.default.createElement(\"i\", { className: \"fa fa-square-o\", \"aria-hidden\": \"true\" }),\n                      _react2.default.createElement(\n                        \"span\",\n                        null,\n                        housing.floorSpace,\n                        \" ft\\xB2\"\n                      )\n                    ),\n                    _react2.default.createElement(\n                      \"div\",\n                      { className: \"bedrooms\" },\n                      _react2.default.createElement(\"i\", { className: \"fa fa-bed\", \"aria-hidden\": \"true\" }),\n                      _react2.default.createElement(\n                        \"span\",\n                        null,\n                        housing.rooms,\n                        \" bedrooms\"\n                      )\n                    )\n                  ),\n                  _react2.default.createElement(\n                    \"div\",\n                    { className: \"view-btn\" },\n                    \"View Listing\"\n                  )\n                )\n              )\n            ),\n            _react2.default.createElement(\n              \"div\",\n              { className: \"bottom-info\" },\n              _react2.default.createElement(\n                \"span\",\n                { className: \"price\" },\n                \"$\",\n                housing.price\n              ),\n              _react2.default.createElement(\n                \"span\",\n                { className: \"location\" },\n                _react2.default.createElement(\"i\", { className: \"fa fa-map-marker\" }),\n                housing.city,\n                \" \",\n                housing.state,\n                \" \"\n              )\n            )\n          )\n        );\n      });\n      if (listingsData == undefined || listingsData.length == 0) {\n        var _listings = \"Sorry your filter did not match any listing\";\n      } else {\n        var _listings2 = content;\n      }\n\n      return _react2.default.createElement(\n        \"section\",\n        { id: \"content-list\" },\n        _react2.default.createElement(\n          \"section\",\n          { className: \"search-area\" },\n          _react2.default.createElement(\"input\", { type: \"text\", name: \"search\" })\n        ),\n        _react2.default.createElement(\n          \"section\",\n          { className: \"sortby-area\" },\n          _react2.default.createElement(\n            \"div\",\n            { className: \"results\" },\n            listingsData.length,\n            \" results found\"\n          ),\n          _react2.default.createElement(\n            \"div\",\n            { className: \"sort-options\" },\n            _react2.default.createElement(\n              \"select\",\n              { name: \"sortby\", className: \"sortby\", onChange: this.props.handleChange },\n              _react2.default.createElement(\n                \"option\",\n                { value: \"price-asc\" },\n                \"Highest Price\"\n              ),\n              _react2.default.createElement(\n                \"option\",\n                { value: \"\" },\n                \"Lowest Price\"\n              )\n            ),\n            _react2.default.createElement(\n              \"div\",\n              { className: \"view\" },\n              _react2.default.createElement(\"i\", { className: \"fa fa-th-list\", \"aria-hidden\": \"true\" }),\n              _react2.default.createElement(\"i\", { className: \"fa fa-th\", \"aria-hidden\": \"true\" })\n            )\n          )\n        ),\n        _react2.default.createElement(\n          \"section\",\n          { className: \"listings-results\" },\n          listings\n        ),\n        _react2.default.createElement(\n          \"section\",\n          { id: \"pagination\" },\n          _react2.default.createElement(\n            \"ul\",\n            { className: \"pages\" },\n            _react2.default.createElement(\n              \"li\",\n              null,\n              \"Prev\"\n            ),\n            _react2.default.createElement(\n              \"li\",\n              { className: \"active\" },\n              \"1\"\n            ),\n            _react2.default.createElement(\n              \"li\",\n              null,\n              \"2\"\n            ),\n            _react2.default.createElement(\n              \"li\",\n              null,\n              \"3\"\n            ),\n            _react2.default.createElement(\n              \"li\",\n              null,\n              \"4\"\n            ),\n            _react2.default.createElement(\n              \"li\",\n              null,\n              \"5\"\n            ),\n            _react2.default.createElement(\n              \"li\",\n              null,\n              \"Next\"\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return ContentList;\n}(_react.Component);\n\nexports.default = ContentList;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzY3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0NvbnRlbnRMaXN0LmpzeD8xNjIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7IGxpc3RpbmdzRGF0YSB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBsaXN0aW5nc0RhdGEubWFwKChob3VzaW5nLCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZy1pbWdcIiBzdHlsZT17e2JhY2tncm91bmQ6IGB1cmwoXCIke2hvdXNpbmcuaW1hZ2V9XCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyYH19PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFkZHJlc3NcIj57aG91c2luZy5hZGRyZXNzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWltZ1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC05XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidXNlci1uYW1lXCI+TmluYSBTbWl0aDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb3N0LWRhdGVcIj4wNS8wMi8yMDE3PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb29yLXNwYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zcXVhcmUtb1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntob3VzaW5nLmZsb29yU3BhY2V9IGZ0JnN1cDI7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmVkcm9vbXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWJlZFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntob3VzaW5nLnJvb21zfSBiZWRyb29tczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlldy1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICBWaWV3IExpc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tLWluZm9cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcmljZVwiPiR7aG91c2luZy5wcmljZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9jYXRpb25cIj48aSBjbGFzc05hbWU9XCJmYSBmYS1tYXAtbWFya2VyXCI+PC9pPntob3VzaW5nLmNpdHl9IHtob3VzaW5nLnN0YXRlfSA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH0pO1xuICAgICAgaWYobGlzdGluZ3NEYXRhID09IHVuZGVmaW5lZCB8fCBsaXN0aW5nc0RhdGEubGVuZ3RoID09IDApIHtcbiAgICAgICAgbGV0IGxpc3RpbmdzID0gXCJTb3JyeSB5b3VyIGZpbHRlciBkaWQgbm90IG1hdGNoIGFueSBsaXN0aW5nXCJcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBsaXN0aW5ncyA9IGNvbnRlbnQ7XG4gICAgICB9XG5cblxuXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGlkPVwiY29udGVudC1saXN0XCI+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VhcmNoLWFyZWFcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzZWFyY2hcIi8+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic29ydGJ5LWFyZWFcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0c1wiPntsaXN0aW5nc0RhdGEubGVuZ3RofSByZXN1bHRzIGZvdW5kPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvcnQtb3B0aW9uc1wiPlxuICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJzb3J0YnlcIiBjbGFzc05hbWU9XCJzb3J0YnlcIiBvbkNoYW5nZT17dGhpcy5wcm9wcy5oYW5kbGVDaGFuZ2V9PlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwcmljZS1hc2NcIj5IaWdoZXN0IFByaWNlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkxvd2VzdCBQcmljZTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWV3XCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdGgtbGlzdFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10aFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibGlzdGluZ3MtcmVzdWx0c1wiPlxuICAgICAgICAgICAge2xpc3RpbmdzfVxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8c2VjdGlvbiBpZD1cInBhZ2luYXRpb25cIj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwYWdlc1wiPlxuICAgICAgICAgICAgICA8bGk+UHJldjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhY3RpdmVcIj4xPC9saT5cbiAgICAgICAgICAgICAgPGxpPjI8L2xpPlxuICAgICAgICAgICAgICA8bGk+MzwvbGk+XG4gICAgICAgICAgICAgIDxsaT40PC9saT5cbiAgICAgICAgICAgICAgPGxpPjU8L2xpPlxuICAgICAgICAgICAgICA8bGk+TmV4dDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvc2VjdGlvbj4pXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9Db250ZW50TGlzdC5qc3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBTEE7QUFVQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZkE7QUFKQTtBQUZBO0FBMkJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBNUJBO0FBREE7QUFvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUxBO0FBRkE7QUFhQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBBO0FBREE7QUFyQkE7QUFpQ0E7Ozs7OztBQXJGQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///367\n");

/***/ })

})