"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/quiz/page",{

/***/ "(app-pages-browser)/./src/app/quiz/ResultCard.tsx":
/*!*************************************!*\
  !*** ./src/app/quiz/ResultCard.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ResultCard = (props)=>{\n    const { isCorrect } = props;\n    if (isCorrect === null) {\n        return null;\n    }\n    const text = isCorrect ? \"Correct\" : \"Incorrect! The correct answer is: \" + props.correctAnswer;\n    const borderClasses = isCo;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: text\n    }, void 0, false, {\n        fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/ResultCard.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ResultCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ResultCard);\nvar _c;\n$RefreshReg$(_c, \"ResultCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcXVpei9SZXN1bHRDYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUF5QjtBQU96QixNQUFNQyxhQUFhLENBQUNDO0lBQ2hCLE1BQU0sRUFBQ0MsU0FBUyxFQUFDLEdBQUdEO0lBQ3BCLElBQUdDLGNBQWMsTUFBTTtRQUNuQixPQUFPO0lBQ1g7SUFFQSxNQUFNQyxPQUFPRCxZQUFZLFlBQVksdUNBQXVDRCxNQUFNRyxhQUFhO0lBRS9GLE1BQU1DLGdCQUFnQkM7SUFDeEIscUJBQ0UsOERBQUNDO2tCQUFLSjs7Ozs7O0FBRVY7S0FaTUg7QUFjTiwrREFBZUEsVUFBVUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3F1aXovUmVzdWx0Q2FyZC50c3g/ZDQwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgaXNDb3JyZWN0OmJvb2xlYW4gfCBudWxsLFxuICAgIGNvcnJlY3RBbnN3ZXI6IHN0cmluZyxcbn1cblxuY29uc3QgUmVzdWx0Q2FyZCA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgICBjb25zdCB7aXNDb3JyZWN0fSA9IHByb3BzO1xuICAgIGlmKGlzQ29ycmVjdCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB0ZXh0ID0gaXNDb3JyZWN0ID8gXCJDb3JyZWN0XCIgOiBcIkluY29ycmVjdCEgVGhlIGNvcnJlY3QgYW5zd2VyIGlzOiBcIiArIHByb3BzLmNvcnJlY3RBbnN3ZXI7XG5cbiAgICBjb25zdCBib3JkZXJDbGFzc2VzID0gaXNDb1xuICByZXR1cm4gKFxuICAgIDxkaXY+e3RleHR9PC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0Q2FyZCJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlc3VsdENhcmQiLCJwcm9wcyIsImlzQ29ycmVjdCIsInRleHQiLCJjb3JyZWN0QW5zd2VyIiwiYm9yZGVyQ2xhc3NlcyIsImlzQ28iLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/quiz/ResultCard.tsx\n"));

/***/ })

});