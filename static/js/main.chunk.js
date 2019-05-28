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

/***/ "./src/components/Bullet/Bullet.js":
/*!*****************************************!*\
  !*** ./src/components/Bullet/Bullet.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/components/Bullet/Bullet.js";

function _templateObject3() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      border-color: black;\n    "]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border: none;\n  margin: 0;\n  padding: 0;\n  background-color: transparent;\n\n  width: calc(var(--lem) * 2);\n  height: calc(var(--lem) / 3);\n  border-bottom: calc(var(--lem) / 3) solid lightgrey;\n\n  margin-right: var(--lem);\n  cursor: pointer;\n\n  ", ";\n"]);

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



const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li(_templateObject());
const Button = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button(_templateObject2(), props => props.className === "active" && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject3()));

const Bullet = props => {
  const className = props.className,
        bulletClickHandler = props.bulletClickHandler,
        index = props.index;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {
    className: className,
    onClick: () => bulletClickHandler(index),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "\xA0"));
};

/* harmony default export */ __webpack_exports__["default"] = (Bullet);

/***/ }),

/***/ "./src/components/Bullet/index.js":
/*!****************************************!*\
  !*** ./src/components/Bullet/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Bullet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bullet */ "./src/components/Bullet/Bullet.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Bullet__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Bullets/Bullets.js":
/*!*******************************************!*\
  !*** ./src/components/Bullets/Bullets.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Bullet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Bullet */ "./src/components/Bullet/index.js");
/* harmony import */ var _Repeat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Repeat */ "./src/components/Repeat/index.js");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../List */ "./src/components/List/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers */ "./src/helpers/index.js");

var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/components/Bullets/Bullets.js";

function _templateObject() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  margin-top: var(--lem);\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}







const Container = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_List__WEBPACK_IMPORTED_MODULE_5__["default"])(_templateObject());

const Bullets = props => {
  const numberOfSlides = props.numberOfSlides,
        activeBullet = props.activeBullet,
        bulletClickHandler = props.bulletClickHandler;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Repeat__WEBPACK_IMPORTED_MODULE_4__["default"], {
    numberOfTimes: numberOfSlides,
    startAt: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, i => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Bullet__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["setClassName"])({
      target: activeBullet,
      index: i
    }),
    key: i,
    index: i,
    bulletClickHandler: bulletClickHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Bullets);

/***/ }),

/***/ "./src/components/Bullets/index.js":
/*!*****************************************!*\
  !*** ./src/components/Bullets/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Bullets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bullets */ "./src/components/Bullets/Bullets.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Bullets__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../hooks */ "./src/hooks/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers */ "./src/helpers/index.js");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../List */ "./src/components/List/index.js");

var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/components/Categories/Categories.js";

function _templateObject15() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query Categories($hideEmpty: Boolean) {\n    categories(where: { hideEmpty: $hideEmpty }) {\n      edges {\n        node {\n          id\n          categoryId\n          name\n        }\n      }\n    }\n  }\n"]);

  _templateObject15 = function () {
    return data;
  };

  return data;
}

function _templateObject14() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      display: flex;\n    "]);

  _templateObject14 = function () {
    return data;
  };

  return data;
}

function _templateObject13() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: none;\n  align-items: center;\n  cursor: pointer;\n\n  ", ";\n"]);

  _templateObject13 = function () {
    return data;
  };

  return data;
}

function _templateObject12() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-left: var(--lem);\n  margin-top: calc(var(--lem) / 3);\n"]);

  _templateObject12 = function () {
    return data;
  };

  return data;
}

function _templateObject11() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 1.333em;\n  cursor: pointer;\n  width: 100%;\n\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject11 = function () {
    return data;
  };

  return data;
}

function _templateObject10() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      font-style: italic;\n    "]);

  _templateObject10 = function () {
    return data;
  };

  return data;
}

function _templateObject9() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", ";\n"]);

  _templateObject9 = function () {
    return data;
  };

  return data;
}

function _templateObject8() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      margin-bottom: calc(var(--lem) / 2);\n      border-bottom: 1px solid lightgray;\n\n      &:hover {\n        font-style: italic;\n      }\n    "]);

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
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      display: flex;\n      cursor: default;\n    "]);

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
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      display: none;\n    "]);

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
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

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








const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].nav(_templateObject());
const ListContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_List__WEBPACK_IMPORTED_MODULE_7__["default"])(_templateObject2()); // Hide inactive items

const ListItemHideInactive = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject3(), props => props.hideInactive === "active" && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject4())); // Style the active item

const ListItemStyleActive = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject5(), props => props.className === "active" && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject6())); // The style of items when all of them are displayed

const ListItemShowInactive = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject7(), props => props.hideInactive === "inactive" && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject8())); // The style of the active item when all items are displayed

const ListItemStyleActiveWhenShowInactive = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject9(), props => props.hideInactive === "inactive" && props.className === "active" && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject10()));
const ListItem = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li(_templateObject11(), ListItemHideInactive, ListItemStyleActive, ListItemShowInactive, ListItemStyleActiveWhenShowInactive);
const Icons = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject12());
const Icon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject13(), props => props.className === "active" && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject14()));
const query = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject15());

const markup = (data, props) => {
  const activeCategory = props.activeCategory,
        categoryClickHandler = props.categoryClickHandler,
        activeCategoryIcon = props.activeCategoryIcon,
        categoryIconClickHandler = props.categoryIconClickHandler; // Icon and menu statuses

  const hideInactive = Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["setClassName"])({
    target: true,
    index: activeCategoryIcon
  }); // Parse categories into a list

  const items = data.categories.edges.map(edge => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ListItem, {
    key: edge.node.id,
    className: Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["setClassName"])({
      target: activeCategory,
      index: edge.node.categoryId
    }),
    hideInactive: hideInactive,
    onClick: () => categoryClickHandler(edge.node.categoryId),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, edge.node.name)); // Make sure the first category is marked active at the first load

  if (activeCategory === 0) {
    categoryClickHandler(data.categories.edges[0].node.categoryId);
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ListContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  }, items), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icons, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon, {
    className: hideInactive,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiChevronDown"], {
    onClick: () => categoryIconClickHandler(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon, {
    className: Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["setClassName"])({
      target: false,
      index: activeCategoryIcon
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiChevronUp"], {
    onClick: () => categoryIconClickHandler(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiList"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiSun"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  }));
};

const Categories = props => {
  const variables = {
    hideEmpty: true
  };
  return Object(_hooks__WEBPACK_IMPORTED_MODULE_5__["useQuery"])(query, markup, variables, props);
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

/***/ "./src/components/Description/Description.js":
/*!***************************************************!*\
  !*** ./src/components/Description/Description.js ***!
  \***************************************************/
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

var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/components/Description/Description.js";

function _templateObject2() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 100%;\n  font-weight: normal;\n  color: #666;\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query siteDescription {\n    generalSettings {\n      description\n    }\n  }\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}





const query = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
const H2 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2(_templateObject2());

const markup = data => {
  const description = data.generalSettings.description;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(H2, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, description);
};

const Description = () => {
  return Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(query, markup);
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
/* harmony import */ var _Reset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Reset */ "./src/components/Reset/index.js");
/* harmony import */ var _TypographicGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../TypographicGrid */ "./src/components/TypographicGrid/index.js");
/* harmony import */ var _Spacing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Spacing */ "./src/components/Spacing/index.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Logo */ "./src/components/Logo/index.js");
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Line */ "./src/components/Line/index.js");
/* harmony import */ var _Categories__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Categories */ "./src/components/Categories/index.js");
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Slider */ "./src/components/Slider/index.js");


var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/components/Home/Home.js";

function _templateObject() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  font-family: \"Quicksand\", sans-serif;\n  display: flex;\n  flex-wrap: wrap;\n\n  ", "\n"]);

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
const Container = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject(), Object(_Spacing__WEBPACK_IMPORTED_MODULE_8__["default"])({
  property: "padding"
}));

const Home = () => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
        _useState2 = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        activeCategory = _useState2[0],
        setActiveCategory = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
        _useState4 = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
        activeBullet = _useState4[0],
        setActiveBullet = _useState4[1];

  const _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
        _useState6 = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
        activeCategoryIcon = _useState6[0],
        setActiveCategoryIcon = _useState6[1];

  const categoryClickHandler = index => {
    setActiveCategory(index);
    setActiveBullet(0);
    setActiveCategoryIcon(true);
  };

  const categoryIconClickHandler = () => {
    setActiveCategoryIcon(!activeCategoryIcon);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Reset__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TypographicGrid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    displayVerticalRhytm: false,
    displayHorizontalRhytm: false,
    numberOfHorizontalLines: 100,
    numberOfVerticalLines: 100,
    lineColor: "#666",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Line__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Categories__WEBPACK_IMPORTED_MODULE_11__["default"], {
    activeCategory: activeCategory,
    categoryClickHandler: categoryClickHandler,
    activeCategoryIcon: activeCategoryIcon,
    categoryIconClickHandler: categoryIconClickHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Slider__WEBPACK_IMPORTED_MODULE_12__["default"], {
    width: "90vw",
    category: activeCategory,
    activeBullet: activeBullet,
    setActiveBullet: setActiveBullet,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  })));
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
/* harmony import */ var react_progressive_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-progressive-image */ "./node_modules/react-progressive-image/dist.js");
/* harmony import */ var react_progressive_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_progressive_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/components/Image/Image.js";

function _templateObject() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  max-width: 80vw;\n  max-height: 70vh;\n  width: auto;\n  height: auto;\n  cursor: pointer;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}




const placeholder = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  style: {
    backgroundColor: "#000",
    height: 300,
    width: 500
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
});
const Img = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img(_templateObject());

const Image = props => {
  const title = props.title,
        src = props.src;
  const _props$props = props.props,
        imageClickHandler = _props$props.imageClickHandler,
        index = _props$props.index,
        numberOfSlides = _props$props.numberOfSlides;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_progressive_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
    src: src,
    placeholder: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, (src, loading) => {
    return loading ? placeholder : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Img, {
      src: src,
      alt: title,
      onClick: () => imageClickHandler(index, numberOfSlides),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: undefined
    });
  });
};

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
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 10em;\n  border-bottom: 1px solid;\n  transform: rotate(-65deg);\n"]);

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

const Logo = () => {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Description__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
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
        width = props.width;
  const title = node.title;
  const src = node.featuredImage.sourceUrl;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Article, {
    width: width,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: title,
    src: src,
    props: props,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }));
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
/* harmony import */ var flatted__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flatted */ "./node_modules/flatted/esm/index.js");
/* harmony import */ var _Spacing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Spacing */ "./src/components/Spacing/index.js");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../List */ "./src/components/List/index.js");
/* harmony import */ var _Slide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Slide */ "./src/components/Slide/index.js");
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Post */ "./src/components/Post/index.js");
/* harmony import */ var _Bullets__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Bullets */ "./src/components/Bullets/index.js");

var _jsxFileName = "/home/cs/work/inu-v2/react-src/src/components/Slider/Slider.js";

function _templateObject4() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query posts($first: Int, $category: Int) {\n    posts(first: $first, where: { categoryId: $category }) {\n      edges {\n        node {\n          id\n          title\n          featuredImage {\n            id\n            sourceUrl\n          }\n        }\n      }\n    }\n  }\n"]);

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
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n  ", "\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}











const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section(_templateObject(), Object(_Spacing__WEBPACK_IMPORTED_MODULE_6__["default"])({
  property: "margin-top"
}), props => props.width && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject2(), props.width)); // Original idea:
// - https://nolanlawson.com/2019/02/10/building-a-modern-carousel-with-css-scroll-snap-smooth-scrolling-and-pinch-zoom/

const Slides = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_List__WEBPACK_IMPORTED_MODULE_7__["default"])(_templateObject3());
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
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Slide__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: edge.node.id,
      ref: ref,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Post__WEBPACK_IMPORTED_MODULE_9__["default"], {
      node: edge.node // Click handling **MUST** go down to the smallest component, ie <img/>
      ,
      index: index,
      imageClickHandler: imageClickHandler,
      numberOfSlides: numberOfSlides,
      width: width,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: undefined
    }));
  });
  return {
    slides,
    numberOfSlides
  };
};

const Slider = props => {
  const width = props.width,
        category = props.category,
        activeBullet = props.activeBullet,
        setActiveBullet = props.setActiveBullet; //
  // 1. Vars needed by all things below
  //
  // We need to have a `ref` associated which each slide to be able to scroll to

  let refs = []; //
  // 2. Hooks
  //
  // State hooks are first.
  // All things below need to know abut `activeBullet`
  //const [activeBullet, setActiveBullet] = useState(0);
  //
  // `activeBullet` state was lifted up to be reset when a new category is clicked
  // This was the only way to make it work
  // Without `useEffect` we can't properly have access to `activeBullet`
  // Even more when state changes this handles the
  // Perhaps every state hook has and effect hook associated
  //
  // - `useEffect` is associated to state, so it should immediately follow in code
  // - Otherwise and error message will be shown
  // - See: https://reactjs.org/docs/hooks-effect.html

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (refs && refs[activeBullet] && refs[activeBullet].current) {
      refs[activeBullet].current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }, [activeBullet, refs]); // Touch scroll event handler
  // Attached to an event listener hook

  const touchScrollHandler = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    const visibleRef = refs.findIndex(ref => {
      const left = ref.current.getBoundingClientRect().left;
      const right = ref.current.getBoundingClientRect().right;
      return left >= -window.innerWidth / 2 && left <= window.innerWidth && right > 0 && right <= window.innerWidth * 1.5;
    });
    setActiveBullet(visibleRef);
  }, [refs, setActiveBullet]); // The event listener hook

  Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useEventListener"])("touchend", touchScrollHandler); //
  // 3. Data hooks
  //
  // The image needs to be clicked so it comes after the state hook and before the data hook
  //
  // The image click handler

  const imageClickHandler = (index, numberOfSlides) => {
    if (index + 1 < numberOfSlides) {
      setActiveBullet(index + 1);
    } else {
      setActiveBullet(0);
    }
  }; // The data hook
  // - we can't return an array which later will be processed like Bullets
  // - the returned array is first empty then only later becomes populated
  // - therefore we return the processed info inside `slides`


  const variables = {
    first: 10,
    category: category
  };
  const queryProps = {
    refs: refs,
    imageClickHandler: imageClickHandler,
    width: width
  };

  const _useQuery = Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(query, markup, variables, queryProps),
        slides = _useQuery.slides,
        numberOfSlides = _useQuery.numberOfSlides; //
  // 4. Other hooks
  //
  //
  // 5. Regular stuff
  //
  // The bullet click handler


  const bulletClickHandler = index => {
    setActiveBullet(index);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    width: width,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Slides, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: undefined
  }, slides), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Bullets__WEBPACK_IMPORTED_MODULE_10__["default"], {
    numberOfSlides: numberOfSlides,
    activeBullet: activeBullet,
    bulletClickHandler: bulletClickHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: undefined
  }));
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
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["", ": calc(var(--lem) * 4);"]);

  _templateObject5 = function () {
    return data;
  };

  return data;
}

function _templateObject4() {
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["", ": calc(var(--lem) * 3);"]);

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
  const data = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 1.5em;\n  font-weight: normal;\n"]);

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

const markup = data => {
  const title = data.generalSettings.title;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(H1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, title);
};

const Title = () => {
  return Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(query, markup);
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
const setClassName = props => {
  const target = props.target,
        index = props.index;
  return index === target ? "active" : "inactive";
};

/* harmony default export */ __webpack_exports__["default"] = (setClassName);

/***/ }),

/***/ "./src/hooks/index.js":
/*!****************************!*\
  !*** ./src/hooks/index.js ***!
  \****************************/
/*! exports provided: useQuery, useKeyPress, useEventListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useQuery */ "./src/hooks/useQuery.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useQuery", function() { return _useQuery__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _useKeyPress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useKeyPress */ "./src/hooks/useKeyPress.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useKeyPress", function() { return _useKeyPress__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _useEventListener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useEventListener */ "./src/hooks/useEventListener.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEventListener", function() { return _useEventListener__WEBPACK_IMPORTED_MODULE_2__["default"]; });





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

/***/ "./src/hooks/useKeyPress.js":
/*!**********************************!*\
  !*** ./src/hooks/useKeyPress.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const useKeyPress = targetKey => {
  // State for keeping track of whether key is pressed
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        _useState2 = Object(_home_cs_work_inu_v2_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        keyPressed = _useState2[0],
        setKeyPressed = _useState2[1]; // Add event listeners


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    // If pressed key is our target key then set to true
    function downHandler({
      key
    }) {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    } // If released key is our target key then set to false


    const upHandler = ({
      key
    }) => {
      if (key === targetKey) {
        setKeyPressed(false);
      }
    };

    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler); // Remove event listeners on cleanup

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [targetKey]); // Empty array ensures that effect is only run on mount and unmount

  return keyPressed;
};

/* harmony default export */ __webpack_exports__["default"] = (useKeyPress);

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

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/cs/work/inu-v2/react-src/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map