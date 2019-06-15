(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var react_apollo_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo-hooks */ "./node_modules/react-apollo-hooks/es/index.js");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Home */ "./src/components/Home/index.js");
var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/App.js";




const client = new apollo_boost__WEBPACK_IMPORTED_MODULE_1__["default"]({
  uri: "http://localhost/react-wp/graphql"
});

const App = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo_hooks__WEBPACK_IMPORTED_MODULE_2__["ApolloProvider"], {
  client: client,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Home__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/Blank/Blank.js":
/*!***************************************!*\
  !*** ./src/components/Blank/Blank.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const Blank = () => {
  return "";
};

/* harmony default export */ __webpack_exports__["default"] = (Blank);

/***/ }),

/***/ "./src/components/Blank/index.js":
/*!***************************************!*\
  !*** ./src/components/Blank/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Blank__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Blank */ "./src/components/Blank/Blank.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Blank__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Categories/Categories.js":
/*!*************************************************!*\
  !*** ./src/components/Categories/Categories.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../hooks */ "./src/hooks/index.js");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../List */ "./src/components/List/index.js");
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ListItem */ "./src/components/ListItem/index.js");

var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/components/Categories/Categories.js";

function _templateObject2() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query Categories($hideEmpty: Boolean) {\n    categories(where: { hideEmpty: $hideEmpty, orderby: TERM_ORDER }) {\n      edges {\n        node {\n          id\n          categoryId\n          name\n        }\n      }\n    }\n  }\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject = function () {
    return data;
  };

  return data;
}







const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].nav(_templateObject()); // The query definition

const query = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject2()); // Putting together the markup to be rendered

const markup = (data, props) => {
  const activeCategory = props.activeCategory,
        categoryClickHandler = props.categoryClickHandler,
        activeCategoryIcon = props.activeCategoryIcon,
        categoryIconClickHandler = props.categoryIconClickHandler; // Parse categories into a list

  const items = data.categories.edges.map(edge => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ListItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: edge.node.id,
    className: Object(_ListItem__WEBPACK_IMPORTED_MODULE_6__["setListItemActive"])({
      target: activeCategory,
      index: edge.node.categoryId
    }),
    visibility: Object(_ListItem__WEBPACK_IMPORTED_MODULE_6__["setListItemVisibility"])({
      target: false,
      index: activeCategoryIcon
    }),
    onClick: () => categoryClickHandler(edge.node.categoryId),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, edge.node.name)); // Make sure the first category is marked active at the first load

  if (activeCategory === 0) {
    categoryClickHandler(data.categories.edges[0].node.categoryId);
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_List__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, items));
};

const Categories = props => {
  const variables = {
    hideEmpty: true
  };
  return Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(query, markup, variables, props);
};

/* harmony default export */ __webpack_exports__["default"] = (Categories);

/***/ }),

/***/ "./src/components/Categories/index.js":
/*!********************************************!*\
  !*** ./src/components/Categories/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Categories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Categories */ "./src/components/Categories/Categories.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Categories__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Contact/Contact.js":
/*!*******************************************!*\
  !*** ./src/components/Contact/Contact.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../hooks */ "./src/hooks/index.js");

var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/components/Contact/Contact.js";

function _templateObject2() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query page($first: Int, $where: RootQueryToPageConnectionWhereArgs!) {\n    pages(first: $first, where: $where) {\n      edges {\n        node {\n          id\n          title\n          content\n        }\n      }\n    }\n  }\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject = function () {
    return data;
  };

  return data;
}





const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section(_templateObject()); // The query definition

const query = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject2()); // Putting together the markup to be rendered

const markup = (data, props) => {
  const content = data.pages.edges[0].node.content;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    dangerouslySetInnerHTML: {
      __html: content
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  });
};

const Contact = props => {
  const variables = {
    first: 1,
    where: {
      title: "Contact"
    }
  };
  return Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(query, markup, variables, props);
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./src/components/Contact/index.js":
/*!*****************************************!*\
  !*** ./src/components/Contact/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact */ "./src/components/Contact/Contact.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Contact__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Description/Description.js":
/*!***************************************************!*\
  !*** ./src/components/Description/Description.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../hooks */ "./src/hooks/index.js");
/* harmony import */ var _themes_default_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../themes/default.js */ "./src/themes/default.js");


var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/components/Description/Description.js";

function _templateObject3() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n      color: ", ";\n    "]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  font-size: 100%;\n  font-weight: normal;\n  cursor: pointer;\n\n  ", ";\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  query siteDescription {\n    generalSettings {\n      description\n    }\n  }\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}






const query = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());
const H2 = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h2(_templateObject2(), props => props.theme.colors.gray && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject3(), props.theme.colors.gray));

const markup = (data, queryProps) => {
  const description = data.generalSettings.description;
  const theme = queryProps.theme,
        logoClickHandler = queryProps.logoClickHandler;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(H2, {
    theme: theme,
    onClick: () => logoClickHandler(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, description);
};

const Description = props => {
  const themeContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_themes_default_js__WEBPACK_IMPORTED_MODULE_6__["ThemeContext"]);
  const theme = themeContext.theme;

  const queryProps = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
    theme: theme
  }, props);

  return Object(_hooks__WEBPACK_IMPORTED_MODULE_5__["useQuery"])(query, markup, {}, queryProps);
};

/* harmony default export */ __webpack_exports__["default"] = (Description);

/***/ }),

/***/ "./src/components/Description/index.js":
/*!*********************************************!*\
  !*** ./src/components/Description/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Description */ "./src/components/Description/Description.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Description__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Logo */ "./src/components/Logo/index.js");
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Line */ "./src/components/Line/index.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Menu */ "./src/components/Menu/index.js");
/* harmony import */ var _MenuIcons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../MenuIcons */ "./src/components/MenuIcons/index.js");
/* harmony import */ var _HeaderIcons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../HeaderIcons */ "./src/components/HeaderIcons/index.js");
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Media */ "./src/components/Media/index.js");

var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/components/Header/Header.js";

function _templateObject() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  align-items: flex-start;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}









const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].header(_templateObject());

const Header = props => {
  const thumbIconClickHandler = props.thumbIconClickHandler,
        sunIconClickHandler = props.sunIconClickHandler,
        logoClickHandler = props.logoClickHandler;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    logoClickHandler: logoClickHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Line__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MenuIcons__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderIcons__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./src/components/Header/Header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Header__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/HeaderIcons/HeaderIcons.js":
/*!***************************************************!*\
  !*** ./src/components/HeaderIcons/HeaderIcons.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Icon */ "./src/components/Icon/index.js");
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Media */ "./src/components/Media/index.js");

var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/components/HeaderIcons/HeaderIcons.js";

function _templateObject3() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["margin-top: calc(var(--lem) * 3);"]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-left: var(--lem);\n\n  ", "\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}






const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
const HeaderIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_Icon__WEBPACK_IMPORTED_MODULE_4__["default"])(_templateObject2(), _Media__WEBPACK_IMPORTED_MODULE_5__["default"].tablet(_templateObject3()));

const HeaderIcons = props => {
  const thumbIconClickHandler = props.thumbIconClickHandler,
        sunIconClickHandler = props.sunIconClickHandler;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeaderIcon, {
    size: 1.25,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiList"], {
    onClick: () => thumbIconClickHandler(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeaderIcon, {
    size: 1.25,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiSun"], {
    onClick: () => sunIconClickHandler(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderIcons);

/***/ }),

/***/ "./src/components/HeaderIcons/index.js":
/*!*********************************************!*\
  !*** ./src/components/HeaderIcons/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeaderIcons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderIcons */ "./src/components/HeaderIcons/HeaderIcons.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _HeaderIcons__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Home/Home.js":
/*!*************************************!*\
  !*** ./src/components/Home/Home.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webfontloader */ "./node_modules/webfontloader/webfontloader.js");
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webfontloader__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var flatted__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flatted */ "./node_modules/flatted/esm/index.js");
/* harmony import */ var _themes_default_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../themes/default.js */ "./src/themes/default.js");
/* harmony import */ var _Reset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Reset */ "./src/components/Reset/index.js");
/* harmony import */ var _TypographicGrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../TypographicGrid */ "./src/components/TypographicGrid/index.js");
/* harmony import */ var _Spacing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Spacing */ "./src/components/Spacing/index.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Header */ "./src/components/Header/index.js");
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Slider */ "./src/components/Slider/index.js");
/* harmony import */ var _Thumbs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Thumbs */ "./src/components/Thumbs/index.js");
/* harmony import */ var _Blank__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Blank */ "./src/components/Blank/index.js");
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Contact */ "./src/components/Contact/index.js");


var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/components/Home/Home.js";

function _templateObject() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  background: ", ";\n  color: ", ";\n  font-family: ", ";\n  display: flex;\n  flex-wrap: wrap;\n\n  ", "\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}














webfontloader__WEBPACK_IMPORTED_MODULE_3___default.a.load({
  google: {
    families: ["Quicksand"]
  }
});
const Container = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject(), props => props.theme.colors.background, props => props.theme.colors.text, props => props.theme.fonts.default, Object(_Spacing__WEBPACK_IMPORTED_MODULE_9__["default"])({
  property: "padding"
}));

const Home = () => {
  // Which category to display
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
        _useState2 = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        activeCategory = _useState2[0],
        setActiveCategory = _useState2[1]; // Which category dropdown icon is active


  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
        _useState4 = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
        activeCategoryIcon = _useState4[0],
        setActiveCategoryIcon = _useState4[1]; // Which slide is active


  const _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
        _useState6 = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
        activeSlide = _useState6[0],
        setActiveSlide = _useState6[1]; // How to display images


  const _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
        _useState8 = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
        displayMode = _useState8[0],
        setDisplayMode = _useState8[1]; // Theming


  const themeContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_themes_default_js__WEBPACK_IMPORTED_MODULE_6__["ThemeContext"]);

  const _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(themeContext),
        _useState10 = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState9, 2),
        currentTheme = _useState10[0],
        setCurrentTheme = _useState10[1]; // Click on a category


  const categoryClickHandler = index => {
    setActiveCategory(index);
    setActiveCategoryIcon(true);

    if (index === -2) {
      setDisplayMode(-2);
    } else {
      setActiveSlide(0);
      setDisplayMode(0);
    }
  }; // Click on the category icon


  const categoryIconClickHandler = () => {
    setActiveCategoryIcon(!activeCategoryIcon);
    setDisplayMode(2);
  }; // Click on the thumbnails icon


  const thumbIconClickHandler = () => {
    displayMode === 1 ? setDisplayMode(0) : setDisplayMode(1);
  }; // Click on the theme icon


  const toggleTheme = () => {
    const newTheme = Object(_themes_default_js__WEBPACK_IMPORTED_MODULE_6__["switchThemeFrom"])(currentTheme.mode);
    setCurrentTheme(newTheme);
  }; // Click on a thumbnail


  const thumbClickHandler = index => {
    setDisplayMode(0);
    setActiveSlide(index);
  }; // Click on the logo


  const logoClickHandler = () => {
    setActiveCategory(0);
    setActiveSlide(0);
    setDisplayMode(0);
  }; // The different display modes


  const Display = () => {
    switch (displayMode) {
      case 0:
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Slider__WEBPACK_IMPORTED_MODULE_11__["default"], {
          width: "90vw",
          height: "70vh",
          category: activeCategory,
          activeSlide: activeSlide,
          setActiveSlide: setActiveSlide,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: undefined
        });
        break;

      case 1:
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Thumbs__WEBPACK_IMPORTED_MODULE_12__["default"], {
          category: activeCategory,
          activeSlide: activeSlide,
          thumbClickHandler: thumbClickHandler,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: undefined
        });

      case -2:
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Contact__WEBPACK_IMPORTED_MODULE_14__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          },
          __self: undefined
        });

      case 2:
      default:
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Blank__WEBPACK_IMPORTED_MODULE_13__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          },
          __self: undefined
        });
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Reset__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TypographicGrid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    displayVerticalRhytm: false,
    displayHorizontalRhytm: false,
    numberOfHorizontalLines: 100,
    numberOfVerticalLines: 100,
    lineColor: "#666",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_themes_default_js__WEBPACK_IMPORTED_MODULE_6__["ThemeContext"].Provider, {
    value: currentTheme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, {
    theme: currentTheme.theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_10__["default"], {
    activeCategory: activeCategory,
    categoryClickHandler: categoryClickHandler,
    activeCategoryIcon: activeCategoryIcon,
    categoryIconClickHandler: categoryIconClickHandler,
    thumbIconClickHandler: thumbIconClickHandler,
    sunIconClickHandler: toggleTheme,
    logoClickHandler: logoClickHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Display, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/components/Home/index.js":
/*!**************************************!*\
  !*** ./src/components/Home/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ "./src/components/Home/Home.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Home__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Icon/Icon.js":
/*!*************************************!*\
  !*** ./src/components/Icon/Icon.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/components/Icon/Icon.js";

function _templateObject4() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n      display: none;\n    "]);

  _templateObject4 = function () {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n      display: flex;\n    "]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n      width: calc(var(--lem) * ", ");\n      height: calc(var(--lem) * ", ");\n\n      svg {\n        font-size: calc(var(--lem) * ", ");\n      }\n    "]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  cursor: pointer;\n\n  ", "\n\n  ", ";\n\n  ", ";\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}



const Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject(), props => props.size && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject2(), props.size, props.size, props.size), props => props.className === "active" && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject3()), props => props.className === "inactive" && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject4()));

const Icon = props => {
  const defaults = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
    size: 1.5
  }, props);

  const children = defaults.children,
        className = defaults.className,
        size = defaults.size;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, {
    size: size,
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "./src/components/Icon/index.js":
/*!**************************************!*\
  !*** ./src/components/Icon/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icon */ "./src/components/Icon/Icon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Icon__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Image/Image.js":
/*!***************************************!*\
  !*** ./src/components/Image/Image.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ImageThumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ImageThumb */ "./src/components/ImageThumb/index.js");
/* harmony import */ var _ImageResponsive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ImageResponsive */ "./src/components/ImageResponsive/index.js");

var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/components/Image/Image.js";

function _templateObject() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    fragment ImageMediaDetails on Posts {\n      mediaDetails {\n        file\n        height\n        width\n        sizes {\n          file\n          height\n          mimeType\n          name\n          sourceUrl\n          width\n        }\n      }\n    }\n  "]);

  _templateObject = function () {
    return data;
  };

  return data;
}





const fragment = {
  mediaDetails: graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject())
};

const Image = props => {
  const imageType = props.imageType;

  const Display = () => {
    switch (imageType) {
      case "thumb":
        return Object(_ImageThumb__WEBPACK_IMPORTED_MODULE_3__["default"])(props);

      case "responsive":
      default:
        return Object(_ImageResponsive__WEBPACK_IMPORTED_MODULE_4__["default"])(props);
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Display, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  });
};

Image.fragments = fragment;
/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/Image/index.js":
/*!***************************************!*\
  !*** ./src/components/Image/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Image */ "./src/components/Image/Image.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Image__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/ImagePlaceholder/ImagePlaceholder.js":
/*!*************************************************************!*\
  !*** ./src/components/ImagePlaceholder/ImagePlaceholder.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _themes_default_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../themes/default.js */ "./src/themes/default.js");

var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/components/ImagePlaceholder/ImagePlaceholder.js";

function _templateObject4() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      height: ", ";\n    "]);

  _templateObject4 = function () {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      width: ", ";\n    "]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      background-color: ", ";\n    "]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-color: lightgray;\n  width: 150px;\n  height: 150px;\n\n  ", ";\n\n  ", ";\n\n  ", ";\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}




const Placeholder = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), props => props.backgroundColor && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject2(), props.backgroundColor), props => props.width && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject3(), props.width), props => props.height && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject4(), props.height));

const ImagePlaceholder = props => {
  let backgroundColor = props.backgroundColor;

  if (!backgroundColor) {
    const themeContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_themes_default_js__WEBPACK_IMPORTED_MODULE_3__["ThemeContext"]);
    const theme = themeContext.theme;
    backgroundColor = theme.colors.placeholder;
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Placeholder, Object.assign({}, props, {
    backgroundColor: backgroundColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ImagePlaceholder);

/***/ }),

/***/ "./src/components/ImagePlaceholder/index.js":
/*!**************************************************!*\
  !*** ./src/components/ImagePlaceholder/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImagePlaceholder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImagePlaceholder */ "./src/components/ImagePlaceholder/ImagePlaceholder.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ImagePlaceholder__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/ImageResponsive/ImageResponsive.js":
/*!***********************************************************!*\
  !*** ./src/components/ImageResponsive/ImageResponsive.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_progressive_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-progressive-image */ "./node_modules/react-progressive-image/dist.js");
/* harmony import */ var react_progressive_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_progressive_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _themes_default_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../themes/default.js */ "./src/themes/default.js");
/* harmony import */ var _ImagePlaceholder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ImagePlaceholder */ "./src/components/ImagePlaceholder/index.js");

var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/components/ImageResponsive/ImageResponsive.js";

function _templateObject3() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      max-height: ", ";\n    "]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      max-width: ", ";\n    "]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: auto;\n  height: auto;\n  cursor: pointer;\n\n  ", ";\n\n  ", ";\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}






const Image = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img(_templateObject(), props => props.width && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject2(), props.width), props => props.height && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject3(), props.height));

const ImageResponsive = props => {
  const title = props.title,
        src = props.src,
        imageClickHandler = props.imageClickHandler,
        index = props.index,
        numberOfSlides = props.numberOfSlides,
        node = props.node,
        width = props.width,
        height = props.height;
  const featuredImage = node.featuredImage;
  const mediaDetails = featuredImage.mediaDetails;
  const sizes = mediaDetails.sizes;
  let srcSet = sizes.map(item => "".concat(item.sourceUrl, " ").concat(item.width, "w"));
  srcSet.push("".concat(featuredImage.sourceUrl, " ").concat(mediaDetails.width, "w"));
  const themeContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_themes_default_js__WEBPACK_IMPORTED_MODULE_4__["ThemeContext"]);
  const theme = themeContext.theme;
  const backgroundColor = theme.colors.background;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_progressive_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
    src: src,
    placeholder: "",
    srcSetData: {
      srcSet: srcSet
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, (src, loading, srcSetData) => {
    return loading ? // The placeholder size has to be the same as the slider size.
    // Otherwise the slider won't work
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ImagePlaceholder__WEBPACK_IMPORTED_MODULE_5__["default"], {
      width: width,
      height: height,
      backgroundColor: backgroundColor,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: undefined
    }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Image, {
      src: src,
      srcSet: srcSetData.srcSet,
      alt: title,
      width: width,
      height: height,
      onClick: () => imageClickHandler(index, numberOfSlides),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: undefined
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ImageResponsive);

/***/ }),

/***/ "./src/components/ImageResponsive/index.js":
/*!*************************************************!*\
  !*** ./src/components/ImageResponsive/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageResponsive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageResponsive */ "./src/components/ImageResponsive/ImageResponsive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ImageResponsive__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/ImageThumb/ImageThumb.js":
/*!*************************************************!*\
  !*** ./src/components/ImageThumb/ImageThumb.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_progressive_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-progressive-image */ "./node_modules/react-progressive-image/dist.js");
/* harmony import */ var react_progressive_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_progressive_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ImagePlaceholder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ImagePlaceholder */ "./src/components/ImagePlaceholder/index.js");

var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/components/ImageThumb/ImageThumb.js";

function _templateObject4() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      ", "\n      cursor: default;\n    "]);

  _templateObject4 = function () {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      max-width: ", ";\n    "]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  height: auto;\n  cursor: pointer;\n\n  padding: calc(var(--lem) / 1);\n  border: 1px solid transparent;\n\n  ", "\n\n  &:hover {\n    ", "\n  }\n\n  ", "\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border: 1px solid;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}





const ImageActive = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject());
const Image = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject2(), props => props.maxWidth && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject3(), props.maxWidth), ImageActive, props => props.isActive && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject4(), ImageActive));

const ImageThumb = props => {
  const title = props.title,
        src = props.src,
        node = props.node,
        thumbClickHandler = props.thumbClickHandler,
        index = props.index,
        activeSlide = props.activeSlide;
  const sizes = node.featuredImage.mediaDetails.sizes;
  const thumb = sizes.find(item => item.name === "thumbnail");
  const thumbSrc = thumb.sourceUrl ? thumb.sourceUrl : src;
  const thumbWidth = thumb.width ? thumb.width + "px" : "calc(var(--lem) * 15)";
  const thumbHeight = thumb.height ? thumb.height + "px" : "auto";
  const thumbisActive = index === activeSlide;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_progressive_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
    src: thumbSrc,
    placeholder: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, (thumbSrc, loading) => {
    return loading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ImagePlaceholder__WEBPACK_IMPORTED_MODULE_4__["default"], {
      width: thumbWidth,
      height: thumbHeight,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: undefined
    }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Image, {
      src: thumbSrc,
      alt: title,
      maxWidth: thumbWidth,
      onClick: () => thumbClickHandler(index),
      isActive: thumbisActive,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: undefined
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ImageThumb);

/***/ }),

/***/ "./src/components/ImageThumb/index.js":
/*!********************************************!*\
  !*** ./src/components/ImageThumb/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageThumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageThumb */ "./src/components/ImageThumb/ImageThumb.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ImageThumb__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Line/Line.js":
/*!*************************************!*\
  !*** ./src/components/Line/Line.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: calc(var(--lem) * 8);\n  height: var(--lem);\n  border-bottom: 1px solid;\n  transform: rotate(-65deg) translateX(calc(var(--lem) * -2));\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}


const Line = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (Line);

/***/ }),

/***/ "./src/components/Line/index.js":
/*!**************************************!*\
  !*** ./src/components/Line/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Line */ "./src/components/Line/Line.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Line__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/List/List.js":
/*!*************************************!*\
  !*** ./src/components/List/List.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}


const List = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "./src/components/List/index.js":
/*!**************************************!*\
  !*** ./src/components/List/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List */ "./src/components/List/List.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _List__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/ListItem/ListItem.js":
/*!*********************************************!*\
  !*** ./src/components/ListItem/ListItem.js ***!
  \*********************************************/
/*! exports provided: default, setListItemActive, setListItemVisibility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setListItemActive", function() { return setListItemActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setListItemVisibility", function() { return setListItemVisibility; });
/* harmony import */ var _home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers */ "./src/helpers/index.js");


function _templateObject9() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 1.333em;\n  cursor: pointer;\n  width: 100%;\n\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject9 = function () {
    return data;
  };

  return data;
}

function _templateObject8() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      font-style: italic;\n    "]);

  _templateObject8 = function () {
    return data;
  };

  return data;
}

function _templateObject7() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", ";\n"]);

  _templateObject7 = function () {
    return data;
  };

  return data;
}

function _templateObject6() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      margin-bottom: calc(var(--lem) / 2);\n      border-bottom: 1px solid lightgray;\n\n      &:hover {\n        font-style: italic;\n      }\n    "]);

  _templateObject6 = function () {
    return data;
  };

  return data;
}

function _templateObject5() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", ";\n"]);

  _templateObject5 = function () {
    return data;
  };

  return data;
}

function _templateObject4() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      display: flex;\n      cursor: default;\n    "]);

  _templateObject4 = function () {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", ";\n"]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      display: none;\n    "]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", ";\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}


 // Sets the `active` classname for a list item

const setListItemActive = props => {
  const target = props.target,
        index = props.index;
  return Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["setClassName"])(target, index);
}; // Sets the visbility of a list item


const setListItemVisibility = props => {
  const target = props.target,
        index = props.index;
  return Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["setClassName"])(target, index, "visible", "invisible");
}; // Hide invisible items


const ListItemHideInvisible = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject(), props => props.visibility === "invisible" && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2())); // Style the active item

const ListItemStyleActive = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3(), props => props.className === "active" && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4())); // The style of items when all of them are displayed

const ListItemStyleAll = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5(), props => props.visibility === "visible" && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6())); // The style of the active item when all items are displayed

const ListItemStyleActiveWhenAllVisible = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject7(), props => props.visibility === "visible" && props.className === "active" && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject8())); // The style of the items

const ListItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li(_templateObject9(), ListItemHideInvisible, ListItemStyleActive, ListItemStyleAll, ListItemStyleActiveWhenAllVisible);
/* harmony default export */ __webpack_exports__["default"] = (ListItem);


/***/ }),

/***/ "./src/components/ListItem/index.js":
/*!******************************************!*\
  !*** ./src/components/ListItem/index.js ***!
  \******************************************/
/*! exports provided: default, setListItemActive, setListItemVisibility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListItem */ "./src/components/ListItem/ListItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ListItem__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setListItemActive", function() { return _ListItem__WEBPACK_IMPORTED_MODULE_0__["setListItemActive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setListItemVisibility", function() { return _ListItem__WEBPACK_IMPORTED_MODULE_0__["setListItemVisibility"]; });





/***/ }),

/***/ "./src/components/Logo/Logo.js":
/*!*************************************!*\
  !*** ./src/components/Logo/Logo.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Title */ "./src/components/Title/index.js");
/* harmony import */ var _Description__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Description */ "./src/components/Description/index.js");

var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/components/Logo/Logo.js";

function _templateObject() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}





const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());

const Logo = props => {
  const logoClickHandler = props.logoClickHandler;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    logoClickHandler: logoClickHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Description__WEBPACK_IMPORTED_MODULE_4__["default"], {
    logoClickHandler: logoClickHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./src/components/Logo/index.js":
/*!**************************************!*\
  !*** ./src/components/Logo/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logo */ "./src/components/Logo/Logo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Logo__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Media/Media.js":
/*!***************************************!*\
  !*** ./src/components/Media/Media.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    @media (min-width: ", "em) {\n      ", "\n    }\n  "]);

  _templateObject = function () {
    return data;
  };

  return data;
}

// Inspiration: https://www.styled-components.com/docs/advanced/#media-templates
//

const Breakpoints = {
  mobile: 320,
  tablet: 768,
  laptop: 1280,
  desktop: 1440
};
const Media = Object.keys(Breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject(), Breakpoints[label] / 16, Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(...args));

  return acc;
}, {});
/* harmony default export */ __webpack_exports__["default"] = (Media);

/***/ }),

/***/ "./src/components/Media/index.js":
/*!***************************************!*\
  !*** ./src/components/Media/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Media */ "./src/components/Media/Media.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Media__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Menu/Menu.js":
/*!*************************************!*\
  !*** ./src/components/Menu/Menu.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Categories */ "./src/components/Categories/index.js");
/* harmony import */ var _MenuItemCustom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MenuItemCustom */ "./src/components/MenuItemCustom/index.js");
/* harmony import */ var _MenuItemsToggleIcons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MenuItemsToggleIcons */ "./src/components/MenuItemsToggleIcons/index.js");

var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/components/Menu/Menu.js";

function _templateObject2() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-wrap: nowrap;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}






const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section(_templateObject());
const MenuItems = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section(_templateObject2());

const Menu = props => {
  const categoryIconClickHandler = props.categoryIconClickHandler,
        activeCategoryIcon = props.activeCategoryIcon;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Categories__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MenuItemCustom__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({
    index: -1,
    menuItemText: "Random"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MenuItemCustom__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({
    index: -2,
    menuItemText: "Contact"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MenuItemsToggleIcons__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./src/components/Menu/index.js":
/*!**************************************!*\
  !*** ./src/components/Menu/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu */ "./src/components/Menu/Menu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Menu__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/MenuIcons/MenuIcons.js":
/*!***********************************************!*\
  !*** ./src/components/MenuIcons/MenuIcons.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Icon */ "./src/components/Icon/index.js");
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Media */ "./src/components/Media/index.js");

var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/components/MenuIcons/MenuIcons.js";

function _templateObject3() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["display: none"]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["display: flex"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n  ", "\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}






const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), _Media__WEBPACK_IMPORTED_MODULE_5__["default"].mobile(_templateObject2()), _Media__WEBPACK_IMPORTED_MODULE_5__["default"].tablet(_templateObject3()));

const MenuIcons = props => {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiMenu"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiX"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MenuIcons);

/***/ }),

/***/ "./src/components/MenuIcons/index.js":
/*!*******************************************!*\
  !*** ./src/components/MenuIcons/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MenuIcons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuIcons */ "./src/components/MenuIcons/MenuIcons.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _MenuIcons__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/MenuItemCustom/MenuItemCustom.js":
/*!*********************************************************!*\
  !*** ./src/components/MenuItemCustom/MenuItemCustom.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../List */ "./src/components/List/index.js");
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ListItem */ "./src/components/ListItem/index.js");

var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/components/MenuItemCustom/MenuItemCustom.js";

function _templateObject() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject = function () {
    return data;
  };

  return data;
}





const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].nav(_templateObject());

const MenuItemCustom = props => {
  const index = props.index,
        menuItemText = props.menuItemText,
        activeCategory = props.activeCategory,
        activeCategoryIcon = props.activeCategoryIcon,
        categoryClickHandler = props.categoryClickHandler;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: menuItemText,
    className: Object(_ListItem__WEBPACK_IMPORTED_MODULE_4__["setListItemActive"])({
      target: activeCategory,
      index: index
    }),
    visibility: Object(_ListItem__WEBPACK_IMPORTED_MODULE_4__["setListItemVisibility"])({
      target: false,
      index: activeCategoryIcon
    }),
    onClick: () => categoryClickHandler(index),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, menuItemText)));
};

/* harmony default export */ __webpack_exports__["default"] = (MenuItemCustom);

/***/ }),

/***/ "./src/components/MenuItemCustom/index.js":
/*!************************************************!*\
  !*** ./src/components/MenuItemCustom/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MenuItemCustom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuItemCustom */ "./src/components/MenuItemCustom/MenuItemCustom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _MenuItemCustom__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/MenuItemsToggleIcons/MenuItemsToggleIcons.js":
/*!*********************************************************************!*\
  !*** ./src/components/MenuItemsToggleIcons/MenuItemsToggleIcons.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Icon */ "./src/components/Icon/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers */ "./src/helpers/index.js");

var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/components/MenuItemsToggleIcons/MenuItemsToggleIcons.js";

function _templateObject2() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  align-items: center;\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-left: var(--lem);\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}






const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section(_templateObject());
const ChevronIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject2());

const MenuItemsToggleIcons = props => {
  const categoryIconClickHandler = props.categoryIconClickHandler,
        activeCategoryIcon = props.activeCategoryIcon;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    as: ChevronIcon,
    className: Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["setClassName"])(true, activeCategoryIcon),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiChevronDown"], {
    onClick: () => categoryIconClickHandler(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    as: ChevronIcon,
    className: Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["setClassName"])(false, activeCategoryIcon),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiChevronUp"], {
    onClick: () => categoryIconClickHandler(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MenuItemsToggleIcons);

/***/ }),

/***/ "./src/components/MenuItemsToggleIcons/index.js":
/*!******************************************************!*\
  !*** ./src/components/MenuItemsToggleIcons/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MenuItemsToggleIcons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuItemsToggleIcons */ "./src/components/MenuItemsToggleIcons/MenuItemsToggleIcons.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _MenuItemsToggleIcons__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Post/Post.js":
/*!*************************************!*\
  !*** ./src/components/Post/Post.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Image */ "./src/components/Image/index.js");

var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/components/Post/Post.js";

function _templateObject3() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: none;\n"]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      width: ", ";\n    "]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}





const Article = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].article(_templateObject(), props => props.width && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject2(), props.width));
const Title = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h3(_templateObject3());

const Post = props => {
  const node = props.node,
        width = props.width,
        postType = props.postType;
  const title = node.title;
  const src = node.featuredImage.sourceUrl;
  let imageType = "";

  switch (postType) {
    case "thumb":
      imageType = "thumb";
      break;

    default:
      imageType = "responsive";
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Article, {
    width: width,
    postType: postType,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({
    title: title,
    src: src,
    imageType: imageType
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "./src/components/Post/index.js":
/*!**************************************!*\
  !*** ./src/components/Post/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Post */ "./src/components/Post/Post.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Post__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Repeat/Repeat.js":
/*!*****************************************!*\
  !*** ./src/components/Repeat/Repeat.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Imitates the for loop inside JSX
 * - https://reactjs.org/docs/jsx-in-depth.html
 */
const Repeat = props => {
  let ret = [];
  let startAt = props.startAt;
  let endAt = startAt + props.numberOfTimes;

  for (let i = startAt; i < endAt; i++) {
    ret.push(props.children(i));
  }

  return ret;
};

/* harmony default export */ __webpack_exports__["default"] = (Repeat);

/***/ }),

/***/ "./src/components/Repeat/index.js":
/*!****************************************!*\
  !*** ./src/components/Repeat/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Repeat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Repeat */ "./src/components/Repeat/Repeat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Repeat__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Reset/Reset.js":
/*!***************************************!*\
  !*** ./src/components/Reset/Reset.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/components/Reset/Reset.js";

function _templateObject() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tbody {\n\t\t// Grid reset\n\t\t//\n\t\tbox-sizing: border-box;\n\n\t\t*,\n\t\t*::before,\n\t\t*::after {\n\t\t\tbox-sizing: inherit;\n\t\t}\n\n\t\t// Typography reset on top of Normalize.css\n\t\t//\n\t\th1,\n\t\th2,\n\t\th3,\n\t\th4,\n\t\th5,\n\t\th6 {\n\t\t\tfont-size: 1em;\n\t\t\tfont-weight: normal;\n\t\t\tmargin: 0;\n\t\t\tpadding: 0;\n\t\t}\n\n\t\tp,\n\t\tfigure,\n\t\tblockquote,\n\t\tul,\n\t\tol,\n\t\tli {\n\t\t\tmargin: 0;\n\t\t\tpadding: 0;\n\t\t}\n\n\t\t// Remove the extra bottom spacing for <img> inside <a>\n\t\t// unfortunatelly in WP it breaks the figcaption ...\n\t\tfigure a {\n\t\t\t// line-height: 0;\n\t\t\t// display: inline-block;\n\t\t}\n\n\t\ta {\n\t\t\tword-wrap: break-word;\n\t\t}\n\n\t\t// https://stackoverflow.com/questions/17838607/making-an-iframe-responsive\n\t\tiframe,\n\t\tobject,\n\t\tembed {\n\t\t\tmax-width: 100%;\n\t\t}\n\t}\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}




const GlobalReset = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["createGlobalStyle"])(_templateObject());

const Reset = () => {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GlobalReset, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Reset);

/***/ }),

/***/ "./src/components/Reset/index.js":
/*!***************************************!*\
  !*** ./src/components/Reset/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Reset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reset */ "./src/components/Reset/Reset.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Reset__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Slide/Slide.js":
/*!***************************************!*\
  !*** ./src/components/Slide/Slide.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/components/Slide/Slide.js";

function _templateObject() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n\n  @supports (scroll-snap-align: start) {\n    /* modern scroll snap points */\n    scroll-snap-align: center;\n  }\n\n  @supports not (scroll-snap-align: start) {\n    /* old scroll snap points spec */\n    scroll-snap-coordinate: 0 0;\n  }\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}



const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li(_templateObject());
const Slide = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef((props, ref) => {
  const children = props.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, children);
});
/* harmony default export */ __webpack_exports__["default"] = (Slide);

/***/ }),

/***/ "./src/components/Slide/index.js":
/*!***************************************!*\
  !*** ./src/components/Slide/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Slide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slide */ "./src/components/Slide/Slide.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Slide__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Slider/Slider.js":
/*!*****************************************!*\
  !*** ./src/components/Slider/Slider.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks */ "./src/hooks/index.js");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../List */ "./src/components/List/index.js");
/* harmony import */ var _Slide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Slide */ "./src/components/Slide/index.js");
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Post */ "./src/components/Post/index.js");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Image */ "./src/components/Image/index.js");

var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/components/Slider/Slider.js";

function _templateObject4() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query postsForSlider($first: Int, $category: Int) {\n    posts(first: $first, where: { categoryId: $category }) {\n      edges {\n        node {\n          id\n          title\n          featuredImage {\n            id\n            sourceUrl\n            mediaDetails {\n              file\n              height\n              width\n              sizes {\n                file\n                height\n                mimeType\n                name\n                sourceUrl\n                width\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]);

  _templateObject4 = function () {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  margin-top: var(--lem);\n\n  display: flex;\n  align-items: center;\n\n  overflow-x: auto;\n  overflow-y: hidden;\n\n  -webkit-overflow-scrolling: touch;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  @supports (scroll-snap-align: start) {\n    /* modern scroll snap points */\n    scroll-snap-type: x mandatory;\n  }\n\n  @supports not (scroll-snap-align: start) {\n    /* old scroll snap points spec */\n    scroll-snap-type: mandatory;\n    scroll-snap-destination: 0% center;\n    scroll-snap-points-x: repeat(100%);\n  }\n"]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      width: ", ";\n    "]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-top: calc(var(--lem) * 2);\n\n  ", "\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}









const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section(_templateObject(), props => props.width && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject2(), props.width)); // Original idea:
// - https://nolanlawson.com/2019/02/10/building-a-modern-carousel-with-css-scroll-snap-smooth-scrolling-and-pinch-zoom/

const Slides = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_List__WEBPACK_IMPORTED_MODULE_5__["default"])(_templateObject3());
const query = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject4());

const markup = (data, queryProps) => {
  const refs = queryProps.refs,
        imageClickHandler = queryProps.imageClickHandler,
        width = queryProps.width;
  const postsWithImage = data.posts.edges.filter(edge => edge.node.featuredImage);
  const numberOfSlides = postsWithImage.length;
  const slides = postsWithImage.map((edge, index) => {
    const ref = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    refs[index] = ref;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Slide__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: edge.node.id,
      ref: ref,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Post__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({
      node: edge.node // Click handling **MUST** go down to the smallest component, ie <img/>
      ,
      index: index,
      imageClickHandler: imageClickHandler,
      numberOfSlides: numberOfSlides
    }, queryProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: undefined
    })));
  });
  return {
    slides,
    numberOfSlides
  };
};

const Slider = props => {
  const width = props.width,
        height = props.height,
        category = props.category,
        activeSlide = props.activeSlide,
        setActiveSlide = props.setActiveSlide; // Refs to each slide

  let refs = []; // Scroll the active slide into the view

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (refs && refs[activeSlide] && refs[activeSlide].current) {
      refs[activeSlide].current.scrollIntoView();
    }
  }, [activeSlide, refs]); // Touch scroll event handler

  const touchScrollHandler = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    const visibleRef = refs.findIndex(ref => {
      const left = ref.current.getBoundingClientRect().left;
      const right = ref.current.getBoundingClientRect().right;
      return left >= -window.innerWidth / 2 && left <= window.innerWidth && right > 0 && right <= window.innerWidth * 1.5;
    });
    setActiveSlide(visibleRef);
  }, [refs, setActiveSlide]); // The touch event listener hook

  Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useEventListener"])("touchend", touchScrollHandler); // The image click handler

  const imageClickHandler = (index, numberOfSlides) => {
    if (index + 1 < numberOfSlides) {
      setActiveSlide(index + 1);
    } else {
      setActiveSlide(0);
    }
  }; // The bullet click handler


  const bulletClickHandler = index => {
    setActiveSlide(index);
  }; // The data hook


  const variables = category === -1 ? {
    first: 1000
  } : {
    first: 1000,
    category: category
  };
  const queryProps = {
    refs: refs,
    imageClickHandler: imageClickHandler,
    width: width,
    height: height
  };

  const _useQuery = Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(query, markup, variables, queryProps),
        slides = _useQuery.slides,
        numberOfSlides = _useQuery.numberOfSlides;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    width: width,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Slides, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: undefined
  }, slides));
};

/* harmony default export */ __webpack_exports__["default"] = (Slider);

/***/ }),

/***/ "./src/components/Slider/index.js":
/*!****************************************!*\
  !*** ./src/components/Slider/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slider */ "./src/components/Slider/Slider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Slider__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Spacing/Spacing.js":
/*!*******************************************!*\
  !*** ./src/components/Spacing/Spacing.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Media */ "./src/components/Media/index.js");


function _templateObject5() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["", ": calc(var(--lem) * 2) 10%;"]);

  _templateObject5 = function () {
    return data;
  };

  return data;
}

function _templateObject4() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["", ": calc(var(--lem) * 2) 10%;"]);

  _templateObject4 = function () {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["", ": calc(var(--lem) * 2);"]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["", ": var(--lem);"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    ", "\n    ", "\n\t", "\n\t", "\n  "]);

  _templateObject = function () {
    return data;
  };

  return data;
}




const Spacing = props => {
  const property = props.property;
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject(), _Media__WEBPACK_IMPORTED_MODULE_2__["default"].mobile(_templateObject2(), property), _Media__WEBPACK_IMPORTED_MODULE_2__["default"].tablet(_templateObject3(), property), _Media__WEBPACK_IMPORTED_MODULE_2__["default"].laptop(_templateObject4(), property), _Media__WEBPACK_IMPORTED_MODULE_2__["default"].desktop(_templateObject5(), property));
};

/* harmony default export */ __webpack_exports__["default"] = (Spacing);

/***/ }),

/***/ "./src/components/Spacing/index.js":
/*!*****************************************!*\
  !*** ./src/components/Spacing/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Spacing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Spacing */ "./src/components/Spacing/Spacing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Spacing__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Thumbs/Thumbs.js":
/*!*****************************************!*\
  !*** ./src/components/Thumbs/Thumbs.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks */ "./src/hooks/index.js");
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Post */ "./src/components/Post/index.js");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Image */ "./src/components/Image/index.js");


var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/components/Thumbs/Thumbs.js";

function _templateObject2() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  query postsForThumbs($first: Int, $category: Int) {\n    posts(first: $first, where: { categoryId: $category }) {\n      edges {\n        node {\n          id\n          title\n          featuredImage {\n            id\n            sourceUrl\n            ...ImageMediaDetails\n          }\n        }\n      }\n    }\n  }\n  ", "\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  width: 100%;\n  margin-top: calc(var(--lem) * 2);\n\n  display: flex;\n  flex-wrap: wrap;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}







const Container = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].section(_templateObject());
const query = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject2(), _Image__WEBPACK_IMPORTED_MODULE_7__["default"].fragments.mediaDetails);

const markup = (data, queryProps) => {
  const postType = queryProps.postType;
  const postsWithImage = data.posts.edges.filter(edge => edge.node.featuredImage);
  const posts = postsWithImage.map((edge, index) => {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Post__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({
      key: index,
      index: index,
      node: edge.node,
      postType: postType
    }, queryProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: undefined
    }));
  });
  return {
    posts
  };
};

const Thumbs = props => {
  const category = props.category;
  const variables = category === -1 ? {
    first: 1000
  } : {
    first: 1000,
    category: category
  };

  const queryProps = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
    postType: "thumb"
  }, props);

  const _useQuery = Object(_hooks__WEBPACK_IMPORTED_MODULE_5__["useQuery"])(query, markup, variables, queryProps),
        posts = _useQuery.posts;

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, posts);
};

/* harmony default export */ __webpack_exports__["default"] = (Thumbs);

/***/ }),

/***/ "./src/components/Thumbs/index.js":
/*!****************************************!*\
  !*** ./src/components/Thumbs/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Thumbs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Thumbs */ "./src/components/Thumbs/Thumbs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Thumbs__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Title/Title.js":
/*!***************************************!*\
  !*** ./src/components/Title/Title.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../hooks */ "./src/hooks/index.js");

var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/components/Title/Title.js";

function _templateObject2() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 1.5em;\n  font-weight: normal;\n  cursor: pointer;\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query siteTitle {\n    generalSettings {\n      title\n    }\n  }\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}





const query = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
const H1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1(_templateObject2());

const markup = (data, queryProps) => {
  const title = data.generalSettings.title;
  const logoClickHandler = queryProps.logoClickHandler;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(H1, {
    onClick: () => logoClickHandler(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, title);
};

const Title = props => {
  return Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(query, markup, {}, props);
};

/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./src/components/Title/index.js":
/*!***************************************!*\
  !*** ./src/components/Title/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Title */ "./src/components/Title/Title.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Title__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/TypographicGrid/TypographicGrid.js":
/*!***********************************************************!*\
  !*** ./src/components/TypographicGrid/TypographicGrid.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Repeat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Repeat */ "./src/components/Repeat/index.js");

var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/components/TypographicGrid/TypographicGrid.js";

function _templateObject8() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject8 = function () {
    return data;
  };

  return data;
}

function _templateObject7() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  height: var(--lem);\n  border-bottom-style: solid;\n"]);

  _templateObject7 = function () {
    return data;
  };

  return data;
}

function _templateObject6() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: var(--lem);\n  height: 100%;\n  border-right-style: solid;\n"]);

  _templateObject6 = function () {
    return data;
  };

  return data;
}

function _templateObject5() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  box-sizing: border-box;\n  border-color: ", ";\n  border-width: 1px;\n"]);

  _templateObject5 = function () {
    return data;
  };

  return data;
}

function _templateObject4() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: ", ";\n"]);

  _templateObject4 = function () {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: ", ";\n  flex-wrap: wrap;\n"]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tbody {\n\t\tfont-size: 100%;\n\t\tline-height: 1.25;\n\t\t--lem: 1.25em;\n\t}\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}




const GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["createGlobalStyle"])(_templateObject());
const Rhythm = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
const VerticalRhythm = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Rhythm)(_templateObject3(), props => props.displayVerticalRhytm ? "flex" : "none");
const HorizontalRhythm = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Rhythm)(_templateObject4(), props => props.displayHorizontalRhytm ? "block" : "none");
const Line = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject5(), props => props.lineColor ? props.lineColor : "transparent");
const VerticalRhythmLine = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Line)(_templateObject6());
const HorizontalRhythmLine = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Line)(_templateObject7());
const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject8());

const TypographicGrid = props => {
  const displayVerticalRhytm = props.displayVerticalRhytm,
        displayHorizontalRhytm = props.displayHorizontalRhytm,
        numberOfHorizontalLines = props.numberOfHorizontalLines,
        numberOfVerticalLines = props.numberOfVerticalLines,
        lineColor = props.lineColor;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GlobalStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }), (displayHorizontalRhytm || displayVerticalRhytm) && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    className: "typographic-grid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, displayHorizontalRhytm && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HorizontalRhythm, {
    className: "horizontal-lines",
    displayHorizontalRhytm: displayHorizontalRhytm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Repeat__WEBPACK_IMPORTED_MODULE_3__["default"], {
    numberOfTimes: numberOfHorizontalLines,
    startAt: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, i => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HorizontalRhythmLine, {
    key: i,
    lineColor: lineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }))), displayVerticalRhytm && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(VerticalRhythm, {
    className: "vertical-lines",
    displayVerticalRhytm: displayVerticalRhytm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Repeat__WEBPACK_IMPORTED_MODULE_3__["default"], {
    numberOfTimes: numberOfVerticalLines,
    startAt: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, i => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(VerticalRhythmLine, {
    key: i,
    lineColor: lineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (TypographicGrid);

/***/ }),

/***/ "./src/components/TypographicGrid/index.js":
/*!*************************************************!*\
  !*** ./src/components/TypographicGrid/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TypographicGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TypographicGrid */ "./src/components/TypographicGrid/TypographicGrid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TypographicGrid__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/*! exports provided: setClassName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setClassName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setClassName */ "./src/helpers/setClassName.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setClassName", function() { return _setClassName__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/helpers/setClassName.js":
/*!*************************************!*\
  !*** ./src/helpers/setClassName.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Sets a class name either to `active` or `inactive`
// ... or to anything specified by props
const setClassName = (target, index, activeClassName = "active", inactiveClassName = "inactive") => {
  return index === target ? activeClassName : inactiveClassName;
};

/* harmony default export */ __webpack_exports__["default"] = (setClassName);

/***/ }),

/***/ "./src/hooks/index.js":
/*!****************************!*\
  !*** ./src/hooks/index.js ***!
  \****************************/
/*! exports provided: useQuery, useEventListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useQuery */ "./src/hooks/useQuery.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useQuery", function() { return _useQuery__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _useEventListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useEventListener */ "./src/hooks/useEventListener.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEventListener", function() { return _useEventListener__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/hooks/useEventListener.js":
/*!***************************************!*\
  !*** ./src/hooks/useEventListener.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useEventListener(eventName, handler, element = global) {
  // Create a ref that stores handler
  const savedHandler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(); // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    savedHandler.current = handler;
  }, [handler]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // Make sure element supports addEventListener
    const isSupported = element && element.addEventListener;
    if (!isSupported) return; // Create event listener that calls handler function stored in ref

    const eventListener = event => savedHandler.current(event); // Add event listener


    element.addEventListener(eventName, eventListener); // Remove event listener on cleanup

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element] // Re-run if eventName or element changes
  );
}

/* harmony default export */ __webpack_exports__["default"] = (useEventListener);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/hooks/useQuery.js":
/*!*******************************!*\
  !*** ./src/hooks/useQuery.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo-hooks */ "./node_modules/react-apollo-hooks/es/index.js");
var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/hooks/useQuery.js";



const useQuery = (query, markup, variables = {}, queryProps = {}) => {
  const _useQueryApollo = Object(react_apollo_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(query, {
    variables: variables
  }),
        data = _useQueryApollo.data,
        error = _useQueryApollo.error,
        loading = _useQueryApollo.loading;

  if (loading) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: undefined
    }, "Loading...");
  }

  if (error) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: undefined
    }, "Error! ", error.message);
  } //console.log("useQuery:" + JSON.stringify(data));


  return markup(data, queryProps);
};

/* harmony default export */ __webpack_exports__["default"] = (useQuery);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/index.js";




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), document.getElementById("root")); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_3__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/themes/default.js":
/*!*******************************!*\
  !*** ./src/themes/default.js ***!
  \*******************************/
/*! exports provided: getTheme, switchThemeFrom, ThemeContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTheme", function() { return getTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchThemeFrom", function() { return switchThemeFrom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const white = "white";
const black = "black";
const gray = "#666";
const lightgray = "lightgray";
const darkgray = "#333";
const themeColors = {
  light: {
    text: black,
    background: white,
    gray: gray,
    placeholder: lightgray
  },
  dark: {
    text: white,
    background: black,
    gray: gray,
    placeholder: darkgray
  }
};

const getThemeColors = mode => mode === "light" ? themeColors.light : themeColors.dark;

const getTheme = mode => {
  return {
    colors: getThemeColors(mode),
    fonts: {
      default: "'Quicksand', sans-serif;"
    }
  };
};

const switchThemeFrom = mode => {
  return mode === "light" ? {
    mode: "dark",
    theme: getTheme("dark")
  } : {
    mode: "light",
    theme: getTheme("light")
  };
};

const ThemeContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(switchThemeFrom("dark"));


/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/cs/work/inu-v2/react-src/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map