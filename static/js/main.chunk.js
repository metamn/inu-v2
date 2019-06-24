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
/*! exports provided: getListItemVisibility, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListItemVisibility", function() { return getListItemVisibility; });
/* harmony import */ var _home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../hooks */ "./src/hooks/index.js");
/* harmony import */ var _Cursor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Cursor */ "./src/components/Cursor/index.js");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../List */ "./src/components/List/index.js");
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ListItem */ "./src/components/ListItem/index.js");

var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/components/Categories/Categories.js";

function _templateObject2() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query Categories($hideEmpty: Boolean) {\n    categories(where: { hideEmpty: $hideEmpty, orderby: TERM_ORDER }) {\n      edges {\n        node {\n          id\n          categoryId\n          name\n        }\n      }\n    }\n  }\n"]);

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








const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].nav(_templateObject(), _Cursor__WEBPACK_IMPORTED_MODULE_5__["CursorDefault"]); // The query definition

const query = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject2()); // Decides if a List item (category) is visible or note
// - when the mobile menu is active returns always `visible`

const getListItemVisibility = (activeMenuToggleIcon, activeCategoryIcon) => {
  return activeMenuToggleIcon ? Object(_ListItem__WEBPACK_IMPORTED_MODULE_7__["setListItemVisibility"])({
    target: false,
    index: activeCategoryIcon
  }) : "visible";
}; // Putting together the markup to be rendered

const markup = (data, props) => {
  const activeCategory = props.activeCategory,
        categoryClickHandler = props.categoryClickHandler,
        activeCategoryIcon = props.activeCategoryIcon,
        activeMenuToggleIcon = props.activeMenuToggleIcon; // Parse categories into a list

  const items = data.categories.edges.map(edge => {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ListItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: edge.node.id,
      className: Object(_ListItem__WEBPACK_IMPORTED_MODULE_7__["setListItemActive"])({
        target: activeCategory,
        index: edge.node.categoryId
      }),
      visibility: getListItemVisibility(activeMenuToggleIcon, activeCategoryIcon),
      onClick: () => categoryClickHandler(edge.node.categoryId),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: undefined
    }, edge.node.name);
  }); // Make sure the first category is marked active at the first load

  if (activeCategory === 0) {
    categoryClickHandler(data.categories.edges[0].node.categoryId);
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_List__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
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
/*! exports provided: default, getListItemVisibility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Categories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Categories */ "./src/components/Categories/Categories.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Categories__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getListItemVisibility", function() { return _Categories__WEBPACK_IMPORTED_MODULE_0__["getListItemVisibility"]; });




/***/ }),

/***/ "./src/components/Contact/Contact.js":
/*!*******************************************!*\
  !*** ./src/components/Contact/Contact.js ***!
  \*******************************************/
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
/* harmony import */ var _themes_default_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../themes/default.js */ "./src/themes/default.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../hooks */ "./src/hooks/index.js");
/* harmony import */ var _Spacing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Spacing */ "./src/components/Spacing/index.js");


var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/components/Contact/Contact.js";

function _templateObject4() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  query page($first: Int, $where: RootQueryToPageConnectionWhereArgs!) {\n    pages(first: $first, where: $where) {\n      edges {\n        node {\n          id\n          title\n          content\n        }\n      }\n    }\n  }\n"]);

  _templateObject4 = function () {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\t      background: ", "\n\t\t  color: ", "\n\t    "]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n      background: ", "\n\t  color: ", "\n    "]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  width: 100%;\n  font-size: 1.33em;\n  margin: calc(var(--lem) * 3) 0;\n  ", "\n\n  ", ";\n\n  h1,\n  h2,\n  p {\n    margin-bottom: calc(var(--lem) * 2);\n  }\n\n  h2 {\n    font-weight: bold;\n    letter-spacing: calc(var(--lem) / 3);\n    word-wrap: break-word;\n  }\n\n  a {\n    padding: calc(var(--lem) / 2);\n    display: inline-block;\n\n    ", ";\n  }\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}







const Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].section(_templateObject(), Object(_Spacing__WEBPACK_IMPORTED_MODULE_7__["default"])({
  property: "padding"
}), props => props.theme.colors && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject2(), props.theme.colors.text, props.theme.colors.background), props => props.theme.colors && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject3(), props.theme.colors.background, props.theme.colors.text)); // The query definition

const query = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject4()); // Putting together the markup to be rendered

const markup = (data, props) => {
  const content = data.pages.edges[0].node.content;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, Object.assign({
    dangerouslySetInnerHTML: {
      __html: content
    }
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }));
};

const Contact = props => {
  const themeContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_themes_default_js__WEBPACK_IMPORTED_MODULE_5__["ThemeContext"]);
  const theme = themeContext.theme;
  const variables = {
    first: 1,
    where: {
      title: "Contact"
    }
  };

  const newProps = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
    theme: theme
  }, props);

  return Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useQuery"])(query, markup, variables, newProps);
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

/***/ "./src/components/Cursor/Cursor.js":
/*!*****************************************!*\
  !*** ./src/components/Cursor/Cursor.js ***!
  \*****************************************/
/*! exports provided: CursorDefault, CursorPointer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursorDefault", function() { return CursorDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursorPointer", function() { return CursorPointer; });
/* harmony import */ var _home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject2() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  &:hover {\n    cursor: url(\"/react-wp/wp-content/themes/inu-v2/arrow-right.png\") 16 0,\n      pointer;\n  }\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  cursor: url(\"/react-wp/wp-content/themes/inu-v2/brutalist_line_SVGicon_cursor2.png\")\n      31 0,\n    default;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}


const CursorDefault = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject());
const CursorPointer = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2());

/***/ }),

/***/ "./src/components/Cursor/index.js":
/*!****************************************!*\
  !*** ./src/components/Cursor/index.js ***!
  \****************************************/
/*! exports provided: CursorDefault, CursorPointer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Cursor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cursor */ "./src/components/Cursor/Cursor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CursorDefault", function() { return _Cursor__WEBPACK_IMPORTED_MODULE_0__["CursorDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CursorPointer", function() { return _Cursor__WEBPACK_IMPORTED_MODULE_0__["CursorPointer"]; });



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
/* harmony import */ var _Cursor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Cursor */ "./src/components/Cursor/index.js");


var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/components/Description/Description.js";

function _templateObject3() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n      color: ", ";\n    "]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  font-size: 100%;\n  font-weight: normal;\n  letter-spacing: 1px;\n\n  ", "\n\n  ", ";\n"]);

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
const H2 = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h2(_templateObject2(), _Cursor__WEBPACK_IMPORTED_MODULE_7__["CursorDefault"], props => props.theme.colors.gray && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject3(), props.theme.colors.gray));

const markup = (data, queryProps) => {
  const description = data.generalSettings.description;
  const theme = queryProps.theme,
        logoClickHandler = queryProps.logoClickHandler;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(H2, {
    theme: theme,
    onClick: () => logoClickHandler(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
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
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Logo */ "./src/components/Logo/index.js");
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Line */ "./src/components/Line/index.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Menu */ "./src/components/Menu/index.js");
/* harmony import */ var _IconToggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../IconToggle */ "./src/components/IconToggle/index.js");
/* harmony import */ var _HeaderIcons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../HeaderIcons */ "./src/components/HeaderIcons/index.js");
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Media */ "./src/components/Media/index.js");

var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/components/Header/Header.js";

function _templateObject11() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["display: none"]);

  _templateObject11 = function () {
    return data;
  };

  return data;
}

function _templateObject10() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["display: flex"]);

  _templateObject10 = function () {
    return data;
  };

  return data;
}

function _templateObject9() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n  ", "\n"]);

  _templateObject9 = function () {
    return data;
  };

  return data;
}

function _templateObject8() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\t  width: auto;\n\t  display: flex;\n\t  flex-direction: row;\n\t  margin-top: calc(var(--lem) * 3);\n\t  "]);

  _templateObject8 = function () {
    return data;
  };

  return data;
}

function _templateObject7() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        display: flex;\n      "]);

  _templateObject7 = function () {
    return data;
  };

  return data;
}

function _templateObject6() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        display: none;\n      "]);

  _templateObject6 = function () {
    return data;
  };

  return data;
}

function _templateObject5() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\t  width: 100%;\n\t  flex-direction: column;\n\t  margin-top: calc(var(--lem) * 2);\n\n\t  ", ";\n\n\t  ", ";\n\t"]);

  _templateObject5 = function () {
    return data;
  };

  return data;
}

function _templateObject4() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n\n  ", "\n"]);

  _templateObject4 = function () {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\t  \tflex-wrap: nowrap;\n\t  \tjustify-content: flex-start;\n\t  \t"]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\t  flex-wrap: wrap;\n\t  justify-content: space-between;\n\t  "]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  display: flex;\n  align-items: flex-start;\n\n  ", "\n\n  ", "\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}










const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].header(_templateObject(), _Media__WEBPACK_IMPORTED_MODULE_9__["default"].mobile(_templateObject2()), _Media__WEBPACK_IMPORTED_MODULE_9__["default"].tablet(_templateObject3()));
const ContainerMenu = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject4(), _Media__WEBPACK_IMPORTED_MODULE_9__["default"].mobile(_templateObject5(), props => props.activeMenuToggleIcon === true && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject6()), props => props.activeMenuToggleIcon === false && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject7())), _Media__WEBPACK_IMPORTED_MODULE_9__["default"].tablet(_templateObject8()));
const IconToggleContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject9(), _Media__WEBPACK_IMPORTED_MODULE_9__["default"].mobile(_templateObject10()), _Media__WEBPACK_IMPORTED_MODULE_9__["default"].tablet(_templateObject11()));

const Header = props => {
  const logoClickHandler = props.logoClickHandler,
        activeMenuToggleIcon = props.activeMenuToggleIcon,
        menuToggleIconClickHandler = props.menuToggleIconClickHandler;
  const icon1 = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiMenu"], {
    onClick: () => menuToggleIconClickHandler(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  });
  const icon2 = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiX"], {
    onClick: () => menuToggleIconClickHandler(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    logoClickHandler: logoClickHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Line__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IconToggleContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_IconToggle__WEBPACK_IMPORTED_MODULE_7__["default"], {
    setClassNameCondition: activeMenuToggleIcon,
    icon1: icon1,
    icon2: icon2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContainerMenu, {
    activeMenuToggleIcon: activeMenuToggleIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderIcons__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }))));
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
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Icon */ "./src/components/Icon/index.js");
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Media */ "./src/components/Media/index.js");

var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/components/HeaderIcons/HeaderIcons.js";

function _templateObject4() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\t  margin-left: var(--lem);\n\t  margin-right: 0;\n\t  margin-bottom: 0;\n\t  "]);

  _templateObject4 = function () {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tmargin-right: var(--lem);\n\tmargin-bottom: calc(var(--lem) * 2);\n\t"]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", ";\n  ", ";\n"]);

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
const HeaderIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_Icon__WEBPACK_IMPORTED_MODULE_5__["default"])(_templateObject2(), _Media__WEBPACK_IMPORTED_MODULE_6__["default"].mobile(_templateObject3()), _Media__WEBPACK_IMPORTED_MODULE_6__["default"].tablet(_templateObject4()));

const HeaderIcons = props => {
  const thumbIconClickHandler = props.thumbIconClickHandler,
        sunIconClickHandler = props.sunIconClickHandler;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeaderIcon, {
    size: 1.25,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_4__["MdApps"], {
    onClick: () => thumbIconClickHandler(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeaderIcon, {
    size: 1.25,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiSun"], {
    onClick: () => sunIconClickHandler(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
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
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_5__);
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
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  background: ", ";\n  color: ", ";\n  font-family: ", ";\n\n  display: flex;\n  flex-direction: column;\n\n  min-height: 100vh;\n\n  ", "\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}














webfontloader__WEBPACK_IMPORTED_MODULE_3___default.a.load({
  google: {
    families: ["Major+Mono+Display"]
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
  // - true: ChevronDown


  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
        _useState4 = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
        activeCategoryIcon = _useState4[0],
        setActiveCategoryIcon = _useState4[1]; // Which menu toggle icon is active
  // - true: Menu


  const _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
        _useState6 = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
        activeMenuToggleIcon = _useState6[0],
        setActiveMenuToggleIcon = _useState6[1]; // Which slide is active


  const _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
        _useState8 = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
        activeSlide = _useState8[0],
        setActiveSlide = _useState8[1]; // How to display images


  const _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
        _useState10 = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState9, 2),
        displayMode = _useState10[0],
        setDisplayMode = _useState10[1]; // Previous image display mode
  // - this is used in the category icon click
  // - if restores either the thumb view or the slider view ...
  // - ...as it were before the click


  const _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
        _useState12 = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState11, 2),
        previousDisplayMode = _useState12[0],
        setPreviousDisplayMode = _useState12[1]; // Theming


  const themeContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_themes_default_js__WEBPACK_IMPORTED_MODULE_6__["ThemeContext"]);

  const _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(themeContext),
        _useState14 = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState13, 2),
        currentTheme = _useState14[0],
        setCurrentTheme = _useState14[1]; // Click on a category


  const categoryClickHandler = index => {
    setActiveCategory(index);
    setActiveCategoryIcon(true);
    setActiveMenuToggleIcon(true);
    setPreviousDisplayMode(0);

    if (index === -2) {
      setDisplayMode(-2);
    } else {
      setActiveSlide(0);
      setDisplayMode(0);
    }
  }; // Click on the category dropdown icon


  const categoryIconClickHandler = () => {
    setActiveCategoryIcon(!activeCategoryIcon);

    if (activeCategoryIcon) {
      // ChevronDown clicked ...
      setDisplayMode(2);
    } else {
      // ChevronUp clicked ...
      setDisplayMode(previousDisplayMode);
    }
  }; // Click on the thumbnails icon


  const thumbIconClickHandler = () => {
    // On `Contact` we don't handle this click
    if (displayMode === -2) return; // Change the display mode

    const newDisplayMode = displayMode === 1 ? 0 : 1;
    setDisplayMode(newDisplayMode); // ???

    setActiveMenuToggleIcon(true); // Save the current display mode

    setPreviousDisplayMode(newDisplayMode);
    console.log("newDisplayMode:" + newDisplayMode);
  }; // Click on a thumbnail


  const thumbClickHandler = index => {
    setDisplayMode(0);
    setActiveSlide(index);
    setPreviousDisplayMode(0);
  }; // Click on the theme icon


  const toggleTheme = () => {
    const newTheme = Object(_themes_default_js__WEBPACK_IMPORTED_MODULE_6__["switchThemeFrom"])(currentTheme.mode);
    setCurrentTheme(newTheme);

    if (!activeMenuToggleIcon) {
      setActiveMenuToggleIcon(true);
      setDisplayMode(0);
    }
  }; // Click on the logo


  const logoClickHandler = () => {
    setActiveCategory(0);
    setActiveSlide(0);
    setDisplayMode(0);
  }; // Click on the menu toggle icon


  const menuToggleIconClickHandler = () => {
    setActiveMenuToggleIcon(!activeMenuToggleIcon);

    if (activeMenuToggleIcon) {
      setDisplayMode(3);
    } else {
      setDisplayMode(0);
    }
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
            lineNumber: 151
          },
          __self: undefined
        });

      case 1:
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Thumbs__WEBPACK_IMPORTED_MODULE_12__["default"], {
          category: activeCategory,
          activeSlide: activeSlide,
          thumbClickHandler: thumbClickHandler,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161
          },
          __self: undefined
        });

      case -2:
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Contact__WEBPACK_IMPORTED_MODULE_14__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168
          },
          __self: undefined
        });

      case 2:
      default:
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Blank__WEBPACK_IMPORTED_MODULE_13__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 171
          },
          __self: undefined
        });
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Reset__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
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
      lineNumber: 178
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_5__["Helmet"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "description",
    content: "Portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_themes_default_js__WEBPACK_IMPORTED_MODULE_6__["ThemeContext"].Provider, {
    value: currentTheme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, {
    theme: currentTheme.theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
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
    activeMenuToggleIcon: activeMenuToggleIcon,
    menuToggleIconClickHandler: menuToggleIconClickHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Display, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
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
/* harmony import */ var _themes_default_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../themes/default.js */ "./src/themes/default.js");
/* harmony import */ var _Cursor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Cursor */ "./src/components/Cursor/index.js");


var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/components/Icon/Icon.js";

function _templateObject5() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n      display: none;\n    "]);

  _templateObject5 = function () {
    return data;
  };

  return data;
}

function _templateObject4() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n      color: ", ";\n    "]);

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
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  ", "\n\n  ", "\n\n  ", ";\n\n  ", ";\n\n  ", ";\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}





const Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject(), _Cursor__WEBPACK_IMPORTED_MODULE_5__["CursorDefault"], props => props.size && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject2(), props.size, props.size, props.size), props => props.className === "active" && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject3()), props => props.className === "inactive" && props.theme.colors.inactive && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject4(), props.theme.colors.inactive), props => props.className === "hidden" && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject5()));

const Icon = props => {
  const defaults = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
    size: 1.5
  }, props);

  const children = defaults.children,
        className = defaults.className,
        size = defaults.size;
  const themeContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_themes_default_js__WEBPACK_IMPORTED_MODULE_4__["ThemeContext"]);
  const theme = themeContext.theme;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, {
    size: size,
    className: className,
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
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

/***/ "./src/components/IconToggle/IconToggle.js":
/*!*************************************************!*\
  !*** ./src/components/IconToggle/IconToggle.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Icon */ "./src/components/Icon/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers */ "./src/helpers/index.js");

var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/components/IconToggle/IconToggle.js";

function _templateObject() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject = function () {
    return data;
  };

  return data;
}





const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());

const IconToggle = props => {
  const setClassNameCondition = props.setClassNameCondition,
        icon1 = props.icon1,
        icon2 = props.icon2;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["setClassName"])(true, setClassNameCondition, "active", "hidden"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, icon1), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["setClassName"])(false, setClassNameCondition, "active", "hidden"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, icon2));
};

/* harmony default export */ __webpack_exports__["default"] = (IconToggle);

/***/ }),

/***/ "./src/components/IconToggle/index.js":
/*!********************************************!*\
  !*** ./src/components/IconToggle/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IconToggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IconToggle */ "./src/components/IconToggle/IconToggle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _IconToggle__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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
/* harmony import */ var _Placeholder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Placeholder */ "./src/components/Placeholder/index.js");

var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/components/ImageResponsive/ImageResponsive.js";

function _templateObject4() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      max-height: ", ";\n    "]);

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
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      color: ", ";\n    "]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: auto;\n  height: auto;\n\n  // A custom cursor blinks when clicking the image\n  // So we use the normal cursor ...\n  cursor: pointer;\n\n  // Do not show the alt title while loading the image\n  ", ";\n\n  ", ";\n\n  ", ";\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}






const Image = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img(_templateObject(), props => props.color && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject2(), props.color), props => props.width && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject3(), props.width), props => props.height && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject4(), props.height));

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
      lineNumber: 59
    },
    __self: undefined
  }, (src, loading, srcSetData) => {
    return loading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Placeholder__WEBPACK_IMPORTED_MODULE_5__["default"], {
      type: "box",
      width: width,
      height: height,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: undefined
    }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Image, {
      src: src,
      srcSet: srcSetData.srcSet,
      alt: title,
      width: width,
      height: height,
      color: backgroundColor,
      onClick: () => imageClickHandler(index, numberOfSlides),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
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
/* harmony import */ var _themes_default_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../themes/default.js */ "./src/themes/default.js");
/* harmony import */ var _Placeholder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Placeholder */ "./src/components/Placeholder/index.js");
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Media */ "./src/components/Media/index.js");
/* harmony import */ var _Cursor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Cursor */ "./src/components/Cursor/index.js");

var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/components/ImageThumb/ImageThumb.js";

function _templateObject8() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      ", "\n      cursor: default;\n    "]);

  _templateObject8 = function () {
    return data;
  };

  return data;
}

function _templateObject7() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\t\t  width: calc(", " + var(--lem) * 2 + 2px);\n\t\t  height: calc(", " + var(--lem) * 2 + 2px)\n\t\t  "]);

  _templateObject7 = function () {
    return data;
  };

  return data;
}

function _templateObject6() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  \t  \twidth: ", ";\n\t\theight: ", ";\n  \t  "]);

  _templateObject6 = function () {
    return data;
  };

  return data;
}

function _templateObject5() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      ", ";\n      ", ";\n    "]);

  _templateObject5 = function () {
    return data;
  };

  return data;
}

function _templateObject4() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      color: ", ";\n    "]);

  _templateObject4 = function () {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  height: auto;\n\n  ", "\n\n  padding: calc(var(--lem) / 1);\n  border: 1px solid transparent;\n  margin-right: 3px;\n\n  // Do not show the alt title while loading the image\n  ", ";\n\n  ", "\n\n  &:hover {\n    ", "\n  }\n\n  ", "\n"]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      border: 1px solid ", ";\n    "]);

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








const ImageActive = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject(), props => props.theme.colors.text && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject2(), props.theme.colors.text));
const Image = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject3(), _Cursor__WEBPACK_IMPORTED_MODULE_7__["CursorDefault"], props => props.theme.colors.background && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject4(), props.theme.colors.background), props => props.size && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject5(), _Media__WEBPACK_IMPORTED_MODULE_6__["default"].mobile(_templateObject6(), props.size, props.size), _Media__WEBPACK_IMPORTED_MODULE_6__["default"].tablet(_templateObject7(), props.size, props.size)), ImageActive, props => props.isActive && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject8(), ImageActive));

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
  const thumbSize = thumb.width ? thumb.width + "px" : "calc(var(--lem) * 15)";
  const thumbisActive = index === activeSlide;
  const themeContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_themes_default_js__WEBPACK_IMPORTED_MODULE_4__["ThemeContext"]);
  const theme = themeContext.theme;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_progressive_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
    src: thumbSrc,
    placeholder: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, (thumbSrc, loading) => {
    return loading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Placeholder__WEBPACK_IMPORTED_MODULE_5__["default"], {
      type: "image",
      width: thumbSize,
      height: thumbSize,
      color: theme.colors.background,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: undefined
    }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Image, {
      src: thumbSrc,
      alt: title,
      size: thumbSize,
      theme: theme,
      onClick: () => thumbClickHandler(index),
      isActive: thumbisActive,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
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
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Media */ "./src/components/Media/index.js");


function _templateObject3() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["display: flex"]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["display: none"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: calc(var(--lem) * 8);\n  height: var(--lem);\n  border-bottom: 1px solid;\n  transform: rotate(-65deg) translateX(calc(var(--lem) * -2));\n\n  ", "\n  ", "\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}



const Line = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), _Media__WEBPACK_IMPORTED_MODULE_2__["default"].mobile(_templateObject2()), _Media__WEBPACK_IMPORTED_MODULE_2__["default"].tablet(_templateObject3()));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _themes_default_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../themes/default.js */ "./src/themes/default.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers */ "./src/helpers/index.js");
/* harmony import */ var _Cursor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Cursor */ "./src/components/Cursor/index.js");

var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/components/ListItem/ListItem.js";

function _templateObject12() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 1.333em;\n  width: 100%;\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject12 = function () {
    return data;
  };

  return data;
}

function _templateObject11() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      margin-top: calc(var(--lem) * 1.5);\n    "]);

  _templateObject11 = function () {
    return data;
  };

  return data;
}

function _templateObject10() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", ";\n"]);

  _templateObject10 = function () {
    return data;
  };

  return data;
}

function _templateObject9() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      font-style: italic;\n    "]);

  _templateObject9 = function () {
    return data;
  };

  return data;
}

function _templateObject8() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", ";\n"]);

  _templateObject8 = function () {
    return data;
  };

  return data;
}

function _templateObject7() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n          border-bottom: 1px solid ", ";\n        "]);

  _templateObject7 = function () {
    return data;
  };

  return data;
}

function _templateObject6() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      margin-bottom: calc(var(--lem) / 2);\n      padding-bottom: calc(var(--lem) / 2);\n      ", ";\n\n      &:hover {\n        font-style: italic;\n      }\n    "]);

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
  return Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["setClassName"])(target, index);
}; // Sets the visbility of a list item


const setListItemVisibility = props => {
  const target = props.target,
        index = props.index;
  return Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["setClassName"])(target, index, "visible", "invisible");
}; // Hide invisible items


const ListItemHideInvisible = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject(), props => props.visibility === "invisible" && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject2())); // Style the active item

const ListItemStyleActive = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject3(), props => props.className === "active" && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject4())); // The style of items when all of them are displayed

const ListItemStyleAll = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject5(), props => props.visibility === "visible" && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject6(), props => props.theme.colors.borderColor && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject7(), props.theme.colors.borderColor))); // The style of the active item when all items are displayed

const ListItemStyleActiveWhenAllVisible = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject8(), props => props.visibility === "visible" && props.className === "active" && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject9())); // Adds a top margin to a list item
// - usually for `Random` and `Contact`

const ListItemAddTopMargin = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject10(), props => props.visibility === "visible" && props.topMargin && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject11())); // The style of the items

const ListItemStyle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li(_templateObject12(), _Cursor__WEBPACK_IMPORTED_MODULE_5__["CursorDefault"], ListItemHideInvisible, ListItemStyleActive, ListItemStyleAll, ListItemStyleActiveWhenAllVisible, ListItemAddTopMargin); // The List Item component

const ListItem = props => {
  const children = props.children;
  const themeContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_themes_default_js__WEBPACK_IMPORTED_MODULE_3__["ThemeContext"]);
  const theme = themeContext.theme;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ListItemStyle, Object.assign({
    theme: theme
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }), children);
};

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
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var _Categories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Categories */ "./src/components/Categories/index.js");
/* harmony import */ var _MenuItemCustom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MenuItemCustom */ "./src/components/MenuItemCustom/index.js");
/* harmony import */ var _IconToggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../IconToggle */ "./src/components/IconToggle/index.js");
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Media */ "./src/components/Media/index.js");

var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/components/Menu/Menu.js";

function _templateObject4() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject4 = function () {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\t  \tmargin-bottom: 0;\n\t  \t"]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\t  margin-bottom: calc(var(--lem) * 2);\n\t  "]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-wrap: nowrap;\n\n  ", ";\n\n  ", ";\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}








const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section(_templateObject(), _Media__WEBPACK_IMPORTED_MODULE_7__["default"].mobile(_templateObject2()), _Media__WEBPACK_IMPORTED_MODULE_7__["default"].tablet(_templateObject3()));
const MenuItems = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section(_templateObject4());

const Menu = props => {
  const categoryIconClickHandler = props.categoryIconClickHandler,
        activeCategoryIcon = props.activeCategoryIcon;
  const icon1 = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiChevronDown"], {
    onClick: () => categoryIconClickHandler(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  });
  const icon2 = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiChevronUp"], {
    onClick: () => categoryIconClickHandler(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Categories__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MenuItemCustom__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({
    index: -1,
    menuItemText: "random"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MenuItemCustom__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({
    index: -2,
    menuItemText: "contact"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_IconToggle__WEBPACK_IMPORTED_MODULE_6__["default"], {
    setClassNameCondition: activeCategoryIcon,
    icon1: icon1,
    icon2: icon2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }));
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
/* harmony import */ var _Categories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Categories */ "./src/components/Categories/index.js");

var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/components/MenuItemCustom/MenuItemCustom.js";

function _templateObject() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject = function () {
    return data;
  };

  return data;
}






const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].nav(_templateObject()); // Adds top margin for custom list items
// NOTE: This is a Styled component bug
// When `<ListItemCustom>` is used instead of `<ListItem>` the active item name is not displayed
// The margin top therefore is moved into the `ListItem` component

/*
const ListItemCustom = styled(ListItem)`
  ${props =>
    props.className === "inactive" &&
    css`
      margin-top: calc(var(--lem) * 1.5);
    `};
`;
*/

const MenuItemCustom = props => {
  const index = props.index,
        menuItemText = props.menuItemText,
        activeCategory = props.activeCategory,
        activeCategoryIcon = props.activeCategoryIcon,
        categoryClickHandler = props.categoryClickHandler,
        activeMenuToggleIcon = props.activeMenuToggleIcon;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: menuItemText,
    topMargin: true,
    className: Object(_ListItem__WEBPACK_IMPORTED_MODULE_4__["setListItemActive"])({
      target: activeCategory,
      index: index
    }),
    visibility: Object(_Categories__WEBPACK_IMPORTED_MODULE_5__["getListItemVisibility"])(activeMenuToggleIcon, activeCategoryIcon),
    onClick: () => categoryClickHandler(index),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
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

/***/ "./src/components/Placeholder/Placeholder.js":
/*!***************************************************!*\
  !*** ./src/components/Placeholder/Placeholder.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _themes_default_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../themes/default.js */ "./src/themes/default.js");

var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/components/Placeholder/Placeholder.js";

function _templateObject10() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n  ", "\n"]);

  _templateObject10 = function () {
    return data;
  };

  return data;
}

function _templateObject9() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n  ", "\n"]);

  _templateObject9 = function () {
    return data;
  };

  return data;
}

function _templateObject8() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      background-color: ", ";\n    "]);

  _templateObject8 = function () {
    return data;
  };

  return data;
}

function _templateObject7() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      background-color: ", ";\n    "]);

  _templateObject7 = function () {
    return data;
  };

  return data;
}

function _templateObject6() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", ";\n\n  ", ";\n"]);

  _templateObject6 = function () {
    return data;
  };

  return data;
}

function _templateObject5() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      height: ", ";\n      min-height: ", ";\n    "]);

  _templateObject5 = function () {
    return data;
  };

  return data;
}

function _templateObject4() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      width: ", ";\n      min-width: ", ";\n    "]);

  _templateObject4 = function () {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", ";\n\n  ", ";\n"]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      background: ", ";\n    "]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  height: var(--lem);\n  background: lightgray;\n\n  ", ";\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}




const Text = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), props => props.theme.colors.placeholder && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject2(), props.theme.colors.placeholder));
const BoxDimensions = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject3(), props => props.width && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject4(), props.width, props.width), props => props.height && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject5(), props.height, props.height));
const BoxColors = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject6(), props => props.theme.colors.placeholder && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject7(), props.theme.colors.placeholder), props => props.color && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject8(), props.color));
const Box = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject9(), BoxDimensions, BoxColors); // For images thi seems to be better ...

const Image = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject10(), BoxDimensions, BoxColors);

const Placeholder = props => {
  const type = props.type;
  const themeContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_themes_default_js__WEBPACK_IMPORTED_MODULE_3__["ThemeContext"]);
  const theme = themeContext.theme;

  switch (type) {
    case "text":
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, {
        theme: theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: undefined
      });

    case "box":
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Box, Object.assign({
        theme: theme
      }, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: undefined
      }));

    case "image":
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Image, Object.assign({
        theme: theme
      }, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: undefined
      }));

    default:
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: undefined
      }, "Loading...");
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Placeholder);

/***/ }),

/***/ "./src/components/Placeholder/index.js":
/*!*********************************************!*\
  !*** ./src/components/Placeholder/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Placeholder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Placeholder */ "./src/components/Placeholder/Placeholder.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Placeholder__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Image */ "./src/components/Image/index.js");

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




const Article = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].article(_templateObject(), props => props.width && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject2(), props.width));
const Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h3(_templateObject3());

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
      lineNumber: 34
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({
    title: title,
    src: src,
    imageType: imageType
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
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
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n\n  article {\n    opacity: 0;\n    transform: translateX(100vw);\n    // On Random this transition effect is not visible since there are many images and the scrollintoview process takes more than 500ms, even more then 1500ms\n    transition: all 500ms;\n  }\n\n  &.active {\n    article {\n      opacity: 1;\n      transform: translateX(0px);\n    }\n  }\n\n  @supports (scroll-snap-align: start) {\n    /* modern scroll snap points */\n    scroll-snap-align: center;\n  }\n\n  @supports not (scroll-snap-align: start) {\n    /* old scroll snap points spec */\n    scroll-snap-coordinate: 0 0;\n  }\n"]);

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
      lineNumber: 35
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








const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].main(_templateObject(), props => props.width && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject2(), props.width)); // Original idea:
// - https://nolanlawson.com/2019/02/10/building-a-modern-carousel-with-css-scroll-snap-smooth-scrolling-and-pinch-zoom/

const Slides = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_List__WEBPACK_IMPORTED_MODULE_5__["default"])(_templateObject3()); // The query

const query = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject4());

const markup = (data, queryProps) => {
  const refs = queryProps.refs,
        imageClickHandler = queryProps.imageClickHandler;
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
      node: edge.node,
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
  // scrollTo:
  // - ???
  //
  // scrollIntoView:
  // - when `behavior` == 'smooth' things get tricky:
  //  - indifferent how you set `block` or `inline` the slider sometimes is flicking sometimes is not
  //  - on Chrome works differently than in Firefox
  //  - it is better to use 'auto' instead of 'smooth'
  //  - and do the animation in the image / placeholder
  //  - ... in other words scrollIntoView is not yet ready for prime time

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (refs && refs[activeSlide] && refs[activeSlide].current) {
      refs[activeSlide].current.className += " active";
      refs[activeSlide].current.scrollIntoView({
        behavior: "auto",
        block: "start",
        inline: "nearest"
      });
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
  // Bullets are not displayed now ...

  /*
  const bulletClickHandler = index => {
    setActiveSlide(index);
  };
  */
  // The data hook


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
        slides = _useQuery.slides;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    width: width,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Slides, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
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
/* harmony import */ var _Cursor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Cursor */ "./src/components/Cursor/index.js");
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Post */ "./src/components/Post/index.js");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Image */ "./src/components/Image/index.js");


var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/components/Thumbs/Thumbs.js";

function _templateObject2() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  query postsForThumbs($first: Int, $category: Int) {\n    posts(first: $first, where: { categoryId: $category }) {\n      edges {\n        node {\n          id\n          title\n          featuredImage {\n            id\n            sourceUrl\n            ...ImageMediaDetails\n          }\n        }\n      }\n    }\n  }\n  ", "\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  width: 100%;\n  margin-top: calc(var(--lem) * 3);\n\n  display: flex;\n  flex-wrap: wrap;\n\n  ", "\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}








const Container = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].section(_templateObject(), _Cursor__WEBPACK_IMPORTED_MODULE_6__["CursorDefault"]);
const query = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject2(), _Image__WEBPACK_IMPORTED_MODULE_8__["default"].fragments.mediaDetails);

const markup = (data, queryProps) => {
  const postType = queryProps.postType;
  const postsWithImage = data.posts.edges.filter(edge => edge.node.featuredImage);
  const posts = postsWithImage.map((edge, index) => {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Post__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({
      key: index,
      index: index,
      node: edge.node,
      postType: postType
    }, queryProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
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
      lineNumber: 75
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
/* harmony import */ var _Cursor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Cursor */ "./src/components/Cursor/index.js");

var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/components/Title/Title.js";

function _templateObject2() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 1.5em;\n  font-weight: normal;\n\n  ", "\n"]);

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
const H1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1(_templateObject2(), _Cursor__WEBPACK_IMPORTED_MODULE_5__["CursorDefault"]);

const markup = (data, queryProps) => {
  const title = data.generalSettings.title;
  const logoClickHandler = queryProps.logoClickHandler;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(H1, {
    onClick: () => logoClickHandler(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
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
/* harmony import */ var _components_Placeholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Placeholder */ "./src/components/Placeholder/index.js");
var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/hooks/useQuery.js";




const useQuery = (query, markup, variables = {}, queryProps = {}) => {
  const _useQueryApollo = Object(react_apollo_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(query, {
    variables: variables
  }),
        data = _useQueryApollo.data,
        error = _useQueryApollo.error,
        loading = _useQueryApollo.loading;

  if (loading) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Placeholder__WEBPACK_IMPORTED_MODULE_2__["default"], {
      type: "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: undefined
    });
  }

  if (error) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
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





if (true) {
  var axe = __webpack_require__(/*! react-axe */ "./node_modules/react-axe/index.js");

  axe(react__WEBPACK_IMPORTED_MODULE_0___default.a, react_dom__WEBPACK_IMPORTED_MODULE_1___default.a, 1000);
}

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
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
    placeholder: white,
    borderColor: black,
    cursor: "brutalist_line_SVGicon_cursor2.png",
    inactive: lightgray
  },
  dark: {
    text: white,
    background: black,
    gray: lightgray,
    placeholder: black,
    borderColor: white,
    cursor: "brutalist_line_SVGicon_cursor2-black.png",
    inactive: darkgray
  }
};

const getThemeColors = mode => mode === "light" ? themeColors.light : themeColors.dark; // When changing font also the `WebFont.load` has to be updated


const getTheme = mode => {
  return {
    colors: getThemeColors(mode),
    fonts: {
      default: "'Major Mono Display', sans-serif;"
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