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

/***/ "(app-pages-browser)/./src/app/quiz/page.tsx":
/*!*******************************!*\
  !*** ./src/app/quiz/page.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst questions = [\n    {\n        questionText: \"What is React?\",\n        answers: [\n            {\n                answerText: \"A Library for building user interfaces\",\n                isCorrect: false,\n                id: 1\n            },\n            {\n                answerText: \"A Library for building user laptops\",\n                isCorrect: false,\n                id: 2\n            },\n            {\n                answerText: \"A Library for building user interfaces\",\n                isCorrect: true,\n                id: 3\n            },\n            {\n                answerText: \"A Library for building user interfaces\",\n                isCorrect: false,\n                id: 4\n            }\n        ]\n    },\n    {\n        questionText: \"What is HTML?\",\n        answers: [\n            {\n                answerText: \"Hyper Text Markup Language\",\n                isCorrect: false,\n                id: 1\n            },\n            {\n                answerText: \"Hypertext Markup Laptop\",\n                isCorrect: false,\n                id: 2\n            },\n            {\n                answerText: \"Hyper Tool Markup Language\",\n                isCorrect: true,\n                id: 3\n            },\n            {\n                answerText: \"Hyper Text Markup Laptop\",\n                isCorrect: false,\n                id: 4\n            }\n        ]\n    },\n    {\n        questionText: \"What is CSS?\",\n        answers: [\n            {\n                answerText: \"Cascading Style Sheets\",\n                isCorrect: false,\n                id: 1\n            },\n            {\n                answerText: \"Cascading Styling System\",\n                isCorrect: true,\n                id: 2\n            },\n            {\n                answerText: \"Cascading System Sheets\",\n                isCorrect: false,\n                id: 3\n            },\n            {\n                answerText: \"Cascading Style Software\",\n                isCorrect: false,\n                id: 4\n            }\n        ]\n    },\n    {\n        questionText: \"What is JavaScript?\",\n        answers: [\n            {\n                answerText: \"A programming language\",\n                isCorrect: true,\n                id: 1\n            },\n            {\n                answerText: \"A markup language\",\n                isCorrect: false,\n                id: 2\n            },\n            {\n                answerText: \"A styling language\",\n                isCorrect: false,\n                id: 3\n            },\n            {\n                answerText: \"A design language\",\n                isCorrect: false,\n                id: 4\n            }\n        ]\n    },\n    {\n        questionText: \"What is Node.js?\",\n        answers: [\n            {\n                answerText: \"A JavaScript runtime\",\n                isCorrect: false,\n                id: 1\n            },\n            {\n                answerText: \"A server-side language\",\n                isCorrect: false,\n                id: 2\n            },\n            {\n                answerText: \"A front-end framework\",\n                isCorrect: true,\n                id: 3\n            },\n            {\n                answerText: \"A database management system\",\n                isCorrect: false,\n                id: 4\n            }\n        ]\n    },\n    {\n        questionText: \"What is MongoDB?\",\n        answers: [\n            {\n                answerText: \"A NoSQL database\",\n                isCorrect: false,\n                id: 1\n            },\n            {\n                answerText: \"A relational database\",\n                isCorrect: true,\n                id: 2\n            },\n            {\n                answerText: \"A file storage system\",\n                isCorrect: false,\n                id: 3\n            },\n            {\n                answerText: \"A programming language\",\n                isCorrect: false,\n                id: 4\n            }\n        ]\n    }\n];\nfunction Home() {\n    _s();\n    const [started, setStarted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [currentQuestion, setCurrentQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleNext = ()=>{\n        setStarted(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col flex-1\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex justify-center\",\n                children: !started ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl font-bold\",\n                    children: \"Welcome To The Quiz Page\"\n                }, void 0, false, {\n                    fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                    lineNumber: 90,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-3xl font-bold\",\n                            children: [\n                                questions[currentQuestion].questionText,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-1 gap-6 mt-6\",\n                            children: questions\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                    lineNumber: 92,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"footer pb-9 absolute bottom-0 mb-0 px-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    onClick: handleNext,\n                    children: !started ? \"Start\" : \"Next\"\n                }, void 0, false, {\n                    fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                    lineNumber: 105,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n        lineNumber: 87,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"8L+4S1XDuyiRhs9/6UteIJmww+w=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcXVpei9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ2lDO0FBQ2U7QUFFaEQsTUFBTUUsWUFBWTtJQUNoQjtRQUNFQyxjQUFjO1FBQ2RDLFNBQVM7WUFDUDtnQkFDRUMsWUFBWTtnQkFDWkMsV0FBVztnQkFDWEMsSUFBSTtZQUNOO1lBQ0E7Z0JBQ0VGLFlBQVk7Z0JBQ1pDLFdBQVc7Z0JBQ1hDLElBQUk7WUFDTjtZQUNBO2dCQUNFRixZQUFZO2dCQUNaQyxXQUFXO2dCQUNYQyxJQUFJO1lBQ047WUFDQTtnQkFDRUYsWUFBWTtnQkFDWkMsV0FBVztnQkFDWEMsSUFBSTtZQUNOO1NBQ0Q7SUFDSDtJQUNBO1FBQ0VKLGNBQWM7UUFDZEMsU0FBUztZQUNQO2dCQUFFQyxZQUFZO2dCQUE4QkMsV0FBVztnQkFBT0MsSUFBSTtZQUFFO1lBQ3BFO2dCQUFFRixZQUFZO2dCQUEyQkMsV0FBVztnQkFBT0MsSUFBSTtZQUFFO1lBQ2pFO2dCQUFFRixZQUFZO2dCQUE4QkMsV0FBVztnQkFBTUMsSUFBSTtZQUFFO1lBQ25FO2dCQUFFRixZQUFZO2dCQUE0QkMsV0FBVztnQkFBT0MsSUFBSTtZQUFFO1NBQ25FO0lBQ0g7SUFDQTtRQUNFSixjQUFjO1FBQ2RDLFNBQVM7WUFDUDtnQkFBRUMsWUFBWTtnQkFBMEJDLFdBQVc7Z0JBQU9DLElBQUk7WUFBRTtZQUNoRTtnQkFBRUYsWUFBWTtnQkFBNEJDLFdBQVc7Z0JBQU1DLElBQUk7WUFBRTtZQUNqRTtnQkFBRUYsWUFBWTtnQkFBMkJDLFdBQVc7Z0JBQU9DLElBQUk7WUFBRTtZQUNqRTtnQkFBRUYsWUFBWTtnQkFBNEJDLFdBQVc7Z0JBQU9DLElBQUk7WUFBRTtTQUNuRTtJQUNIO0lBQ0E7UUFDRUosY0FBYztRQUNkQyxTQUFTO1lBQ1A7Z0JBQUVDLFlBQVk7Z0JBQTBCQyxXQUFXO2dCQUFNQyxJQUFJO1lBQUU7WUFDL0Q7Z0JBQUVGLFlBQVk7Z0JBQXFCQyxXQUFXO2dCQUFPQyxJQUFJO1lBQUU7WUFDM0Q7Z0JBQUVGLFlBQVk7Z0JBQXNCQyxXQUFXO2dCQUFPQyxJQUFJO1lBQUU7WUFDNUQ7Z0JBQUVGLFlBQVk7Z0JBQXFCQyxXQUFXO2dCQUFPQyxJQUFJO1lBQUU7U0FDNUQ7SUFDSDtJQUNBO1FBQ0VKLGNBQWM7UUFDZEMsU0FBUztZQUNQO2dCQUFFQyxZQUFZO2dCQUF3QkMsV0FBVztnQkFBT0MsSUFBSTtZQUFFO1lBQzlEO2dCQUFFRixZQUFZO2dCQUEwQkMsV0FBVztnQkFBT0MsSUFBSTtZQUFFO1lBQ2hFO2dCQUFFRixZQUFZO2dCQUF5QkMsV0FBVztnQkFBTUMsSUFBSTtZQUFFO1lBQzlEO2dCQUFFRixZQUFZO2dCQUFnQ0MsV0FBVztnQkFBT0MsSUFBSTtZQUFFO1NBQ3ZFO0lBQ0g7SUFDQTtRQUNFSixjQUFjO1FBQ2RDLFNBQVM7WUFDUDtnQkFBRUMsWUFBWTtnQkFBb0JDLFdBQVc7Z0JBQU9DLElBQUk7WUFBRTtZQUMxRDtnQkFBRUYsWUFBWTtnQkFBeUJDLFdBQVc7Z0JBQU1DLElBQUk7WUFBRTtZQUM5RDtnQkFBRUYsWUFBWTtnQkFBeUJDLFdBQVc7Z0JBQU9DLElBQUk7WUFBRTtZQUMvRDtnQkFBRUYsWUFBWTtnQkFBMEJDLFdBQVc7Z0JBQU9DLElBQUk7WUFBRTtTQUNqRTtJQUNIO0NBQ0Q7QUFFYyxTQUFTQzs7SUFDdEIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1csaUJBQWlCQyxtQkFBbUIsR0FBR1osK0NBQVFBLENBQUM7SUFFdkQsTUFBTWEsYUFBYTtRQUNqQkgsV0FBVztJQUNiO0lBRUEscUJBQ0UsOERBQUNJO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBS0QsV0FBVTswQkFDYixDQUFDTix3QkFDQSw4REFBQ1E7b0JBQUdGLFdBQVU7OEJBQXFCOzs7Ozt5Q0FFbkMsOERBQUNEOztzQ0FDQyw4REFBQ0k7NEJBQUdILFdBQVU7O2dDQUNYYixTQUFTLENBQUNTLGdCQUFnQixDQUFDUixZQUFZO2dDQUFFOzs7Ozs7O3NDQUU1Qyw4REFBQ1c7NEJBQUlDLFdBQVU7c0NBRVhiOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFNViw4REFBQ2lCO2dCQUFPSixXQUFVOzBCQUNoQiw0RUFBQ2QseURBQU1BO29CQUFDbUIsU0FBU1A7OEJBQWEsQ0FBQ0osVUFBVSxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztBQUkzRDtHQS9Cd0JEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcXVpei9wYWdlLnRzeD9jNjAzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5cbmNvbnN0IHF1ZXN0aW9ucyA9IFtcbiAge1xuICAgIHF1ZXN0aW9uVGV4dDogXCJXaGF0IGlzIFJlYWN0P1wiLFxuICAgIGFuc3dlcnM6IFtcbiAgICAgIHtcbiAgICAgICAgYW5zd2VyVGV4dDogXCJBIExpYnJhcnkgZm9yIGJ1aWxkaW5nIHVzZXIgaW50ZXJmYWNlc1wiLFxuICAgICAgICBpc0NvcnJlY3Q6IGZhbHNlLFxuICAgICAgICBpZDogMSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGFuc3dlclRleHQ6IFwiQSBMaWJyYXJ5IGZvciBidWlsZGluZyB1c2VyIGxhcHRvcHNcIixcbiAgICAgICAgaXNDb3JyZWN0OiBmYWxzZSxcbiAgICAgICAgaWQ6IDIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBhbnN3ZXJUZXh0OiBcIkEgTGlicmFyeSBmb3IgYnVpbGRpbmcgdXNlciBpbnRlcmZhY2VzXCIsXG4gICAgICAgIGlzQ29ycmVjdDogdHJ1ZSxcbiAgICAgICAgaWQ6IDMsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBhbnN3ZXJUZXh0OiBcIkEgTGlicmFyeSBmb3IgYnVpbGRpbmcgdXNlciBpbnRlcmZhY2VzXCIsXG4gICAgICAgIGlzQ29ycmVjdDogZmFsc2UsXG4gICAgICAgIGlkOiA0LFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgcXVlc3Rpb25UZXh0OiBcIldoYXQgaXMgSFRNTD9cIixcbiAgICBhbnN3ZXJzOiBbXG4gICAgICB7IGFuc3dlclRleHQ6IFwiSHlwZXIgVGV4dCBNYXJrdXAgTGFuZ3VhZ2VcIiwgaXNDb3JyZWN0OiBmYWxzZSwgaWQ6IDEgfSxcbiAgICAgIHsgYW5zd2VyVGV4dDogXCJIeXBlcnRleHQgTWFya3VwIExhcHRvcFwiLCBpc0NvcnJlY3Q6IGZhbHNlLCBpZDogMiB9LFxuICAgICAgeyBhbnN3ZXJUZXh0OiBcIkh5cGVyIFRvb2wgTWFya3VwIExhbmd1YWdlXCIsIGlzQ29ycmVjdDogdHJ1ZSwgaWQ6IDMgfSxcbiAgICAgIHsgYW5zd2VyVGV4dDogXCJIeXBlciBUZXh0IE1hcmt1cCBMYXB0b3BcIiwgaXNDb3JyZWN0OiBmYWxzZSwgaWQ6IDQgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgcXVlc3Rpb25UZXh0OiBcIldoYXQgaXMgQ1NTP1wiLFxuICAgIGFuc3dlcnM6IFtcbiAgICAgIHsgYW5zd2VyVGV4dDogXCJDYXNjYWRpbmcgU3R5bGUgU2hlZXRzXCIsIGlzQ29ycmVjdDogZmFsc2UsIGlkOiAxIH0sXG4gICAgICB7IGFuc3dlclRleHQ6IFwiQ2FzY2FkaW5nIFN0eWxpbmcgU3lzdGVtXCIsIGlzQ29ycmVjdDogdHJ1ZSwgaWQ6IDIgfSxcbiAgICAgIHsgYW5zd2VyVGV4dDogXCJDYXNjYWRpbmcgU3lzdGVtIFNoZWV0c1wiLCBpc0NvcnJlY3Q6IGZhbHNlLCBpZDogMyB9LFxuICAgICAgeyBhbnN3ZXJUZXh0OiBcIkNhc2NhZGluZyBTdHlsZSBTb2Z0d2FyZVwiLCBpc0NvcnJlY3Q6IGZhbHNlLCBpZDogNCB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBxdWVzdGlvblRleHQ6IFwiV2hhdCBpcyBKYXZhU2NyaXB0P1wiLFxuICAgIGFuc3dlcnM6IFtcbiAgICAgIHsgYW5zd2VyVGV4dDogXCJBIHByb2dyYW1taW5nIGxhbmd1YWdlXCIsIGlzQ29ycmVjdDogdHJ1ZSwgaWQ6IDEgfSxcbiAgICAgIHsgYW5zd2VyVGV4dDogXCJBIG1hcmt1cCBsYW5ndWFnZVwiLCBpc0NvcnJlY3Q6IGZhbHNlLCBpZDogMiB9LFxuICAgICAgeyBhbnN3ZXJUZXh0OiBcIkEgc3R5bGluZyBsYW5ndWFnZVwiLCBpc0NvcnJlY3Q6IGZhbHNlLCBpZDogMyB9LFxuICAgICAgeyBhbnN3ZXJUZXh0OiBcIkEgZGVzaWduIGxhbmd1YWdlXCIsIGlzQ29ycmVjdDogZmFsc2UsIGlkOiA0IH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHF1ZXN0aW9uVGV4dDogXCJXaGF0IGlzIE5vZGUuanM/XCIsXG4gICAgYW5zd2VyczogW1xuICAgICAgeyBhbnN3ZXJUZXh0OiBcIkEgSmF2YVNjcmlwdCBydW50aW1lXCIsIGlzQ29ycmVjdDogZmFsc2UsIGlkOiAxIH0sXG4gICAgICB7IGFuc3dlclRleHQ6IFwiQSBzZXJ2ZXItc2lkZSBsYW5ndWFnZVwiLCBpc0NvcnJlY3Q6IGZhbHNlLCBpZDogMiB9LFxuICAgICAgeyBhbnN3ZXJUZXh0OiBcIkEgZnJvbnQtZW5kIGZyYW1ld29ya1wiLCBpc0NvcnJlY3Q6IHRydWUsIGlkOiAzIH0sXG4gICAgICB7IGFuc3dlclRleHQ6IFwiQSBkYXRhYmFzZSBtYW5hZ2VtZW50IHN5c3RlbVwiLCBpc0NvcnJlY3Q6IGZhbHNlLCBpZDogNCB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBxdWVzdGlvblRleHQ6IFwiV2hhdCBpcyBNb25nb0RCP1wiLFxuICAgIGFuc3dlcnM6IFtcbiAgICAgIHsgYW5zd2VyVGV4dDogXCJBIE5vU1FMIGRhdGFiYXNlXCIsIGlzQ29ycmVjdDogZmFsc2UsIGlkOiAxIH0sXG4gICAgICB7IGFuc3dlclRleHQ6IFwiQSByZWxhdGlvbmFsIGRhdGFiYXNlXCIsIGlzQ29ycmVjdDogdHJ1ZSwgaWQ6IDIgfSxcbiAgICAgIHsgYW5zd2VyVGV4dDogXCJBIGZpbGUgc3RvcmFnZSBzeXN0ZW1cIiwgaXNDb3JyZWN0OiBmYWxzZSwgaWQ6IDMgfSxcbiAgICAgIHsgYW5zd2VyVGV4dDogXCJBIHByb2dyYW1taW5nIGxhbmd1YWdlXCIsIGlzQ29ycmVjdDogZmFsc2UsIGlkOiA0IH0sXG4gICAgXSxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtzdGFydGVkLCBzZXRTdGFydGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2N1cnJlbnRRdWVzdGlvbiwgc2V0Q3VycmVudFF1ZXN0aW9uXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XG4gICAgc2V0U3RhcnRlZCh0cnVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBmbGV4LTFcIj5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgeyFzdGFydGVkID8gKFxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGRcIj5XZWxjb21lIFRvIFRoZSBRdWl6IFBhZ2U8L2gxPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgIHtxdWVzdGlvbnNbY3VycmVudFF1ZXN0aW9uXS5xdWVzdGlvblRleHR9e1wiIFwifVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAtNiBtdC02XCI+XG4gICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHF1ZXN0aW9uc1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9tYWluPlxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJmb290ZXIgcGItOSBhYnNvbHV0ZSBib3R0b20tMCBtYi0wIHB4LTZcIj5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVOZXh0fT57IXN0YXJ0ZWQgPyBcIlN0YXJ0XCIgOiBcIk5leHRcIn08L0J1dHRvbj5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQnV0dG9uIiwicXVlc3Rpb25zIiwicXVlc3Rpb25UZXh0IiwiYW5zd2VycyIsImFuc3dlclRleHQiLCJpc0NvcnJlY3QiLCJpZCIsIkhvbWUiLCJzdGFydGVkIiwic2V0U3RhcnRlZCIsImN1cnJlbnRRdWVzdGlvbiIsInNldEN1cnJlbnRRdWVzdGlvbiIsImhhbmRsZU5leHQiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwiaDEiLCJoMiIsImZvb3RlciIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/quiz/page.tsx\n"));

/***/ })

});