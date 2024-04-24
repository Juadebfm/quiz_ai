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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _components_progressBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/progressBar */ \"(app-pages-browser)/./src/components/progressBar.tsx\");\n/* harmony import */ var _barrel_optimize_names_ChevronLeft_X_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronLeft,X!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-left.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronLeft_X_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronLeft,X!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/x.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst questions = [\n    {\n        questionText: \"What is React?\",\n        answers: [\n            {\n                answerText: \"A Library for building user interfaces\",\n                isCorrect: false,\n                id: 1\n            },\n            {\n                answerText: \"A Library for building user laptops\",\n                isCorrect: false,\n                id: 2\n            },\n            {\n                answerText: \"A Library for building user interfaces\",\n                isCorrect: true,\n                id: 3\n            },\n            {\n                answerText: \"A Library for building user interfaces\",\n                isCorrect: false,\n                id: 4\n            }\n        ]\n    },\n    {\n        questionText: \"What is HTML?\",\n        answers: [\n            {\n                answerText: \"Hyper Text Markup Language\",\n                isCorrect: false,\n                id: 1\n            },\n            {\n                answerText: \"Hypertext Markup Laptop\",\n                isCorrect: false,\n                id: 2\n            },\n            {\n                answerText: \"Hyper Tool Markup Language\",\n                isCorrect: true,\n                id: 3\n            },\n            {\n                answerText: \"Hyper Text Markup Laptop\",\n                isCorrect: false,\n                id: 4\n            }\n        ]\n    },\n    {\n        questionText: \"What is CSS?\",\n        answers: [\n            {\n                answerText: \"Cascading Style Sheets\",\n                isCorrect: false,\n                id: 1\n            },\n            {\n                answerText: \"Cascading Styling System\",\n                isCorrect: true,\n                id: 2\n            },\n            {\n                answerText: \"Cascading System Sheets\",\n                isCorrect: false,\n                id: 3\n            },\n            {\n                answerText: \"Cascading Style Software\",\n                isCorrect: false,\n                id: 4\n            }\n        ]\n    },\n    {\n        questionText: \"What is JavaScript?\",\n        answers: [\n            {\n                answerText: \"A programming language\",\n                isCorrect: true,\n                id: 1\n            },\n            {\n                answerText: \"A markup language\",\n                isCorrect: false,\n                id: 2\n            },\n            {\n                answerText: \"A styling language\",\n                isCorrect: false,\n                id: 3\n            },\n            {\n                answerText: \"A design language\",\n                isCorrect: false,\n                id: 4\n            }\n        ]\n    },\n    {\n        questionText: \"What is Node.js?\",\n        answers: [\n            {\n                answerText: \"A JavaScript runtime\",\n                isCorrect: false,\n                id: 1\n            },\n            {\n                answerText: \"A server-side language\",\n                isCorrect: false,\n                id: 2\n            },\n            {\n                answerText: \"A front-end framework\",\n                isCorrect: true,\n                id: 3\n            },\n            {\n                answerText: \"A database management system\",\n                isCorrect: false,\n                id: 4\n            }\n        ]\n    },\n    {\n        questionText: \"What is MongoDB?\",\n        answers: [\n            {\n                answerText: \"A NoSQL database\",\n                isCorrect: false,\n                id: 1\n            },\n            {\n                answerText: \"A relational database\",\n                isCorrect: true,\n                id: 2\n            },\n            {\n                answerText: \"A file storage system\",\n                isCorrect: false,\n                id: 3\n            },\n            {\n                answerText: \"A programming language\",\n                isCorrect: false,\n                id: 4\n            }\n        ]\n    }\n];\nfunction Home() {\n    _s();\n    const [started, setStarted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [currentQuestion, setCurrentQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleNext = ()=>{\n        if (!started) {\n            setStarted(true);\n            return;\n        }\n        if (currentQuestion < questions.length - 1) {\n            setCurrentQuestion(currentQuestion + 1);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col flex-1\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"position-sticky top-0 z-10 shadow-md py-4 w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                    className: \"grid grid-cols-[auto, 1fr, auto] grid-flow-col items-center justify-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            size: \"icon\",\n                            variant: \"outline\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronLeft_X_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            size: \"icon\",\n                            variant: \"outline\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronLeft_X_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_progressBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            value: currentQuestion / questions.length * 100\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex justify-center\",\n                children: !started ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl font-bold\",\n                    children: \"Welcome To The Quiz Page\"\n                }, void 0, false, {\n                    fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                    lineNumber: 110,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-3xl font-bold\",\n                            children: [\n                                questions[currentQuestion].questionText,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                            lineNumber: 113,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-1 gap-6 mt-6\",\n                            children: questions[currentQuestion].answers.map((answer)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                    variant: \"secondary\",\n                                    children: answer.answerText\n                                }, answer.id, false, {\n                                    fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                                    lineNumber: 119,\n                                    columnNumber: 19\n                                }, this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                    lineNumber: 112,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"footer pb-9 absolute bottom-0 mb-0 px-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    onClick: handleNext,\n                    children: !started ? \"Start\" : \"Next\"\n                }, void 0, false, {\n                    fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                    lineNumber: 129,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                lineNumber: 128,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n        lineNumber: 96,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"8L+4S1XDuyiRhs9/6UteIJmww+w=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcXVpei9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ2lDO0FBQ2U7QUFDRztBQUNMO0FBRTlDLE1BQU1LLFlBQVk7SUFDaEI7UUFDRUMsY0FBYztRQUNkQyxTQUFTO1lBQ1A7Z0JBQ0VDLFlBQVk7Z0JBQ1pDLFdBQVc7Z0JBQ1hDLElBQUk7WUFDTjtZQUNBO2dCQUNFRixZQUFZO2dCQUNaQyxXQUFXO2dCQUNYQyxJQUFJO1lBQ047WUFDQTtnQkFDRUYsWUFBWTtnQkFDWkMsV0FBVztnQkFDWEMsSUFBSTtZQUNOO1lBQ0E7Z0JBQ0VGLFlBQVk7Z0JBQ1pDLFdBQVc7Z0JBQ1hDLElBQUk7WUFDTjtTQUNEO0lBQ0g7SUFDQTtRQUNFSixjQUFjO1FBQ2RDLFNBQVM7WUFDUDtnQkFBRUMsWUFBWTtnQkFBOEJDLFdBQVc7Z0JBQU9DLElBQUk7WUFBRTtZQUNwRTtnQkFBRUYsWUFBWTtnQkFBMkJDLFdBQVc7Z0JBQU9DLElBQUk7WUFBRTtZQUNqRTtnQkFBRUYsWUFBWTtnQkFBOEJDLFdBQVc7Z0JBQU1DLElBQUk7WUFBRTtZQUNuRTtnQkFBRUYsWUFBWTtnQkFBNEJDLFdBQVc7Z0JBQU9DLElBQUk7WUFBRTtTQUNuRTtJQUNIO0lBQ0E7UUFDRUosY0FBYztRQUNkQyxTQUFTO1lBQ1A7Z0JBQUVDLFlBQVk7Z0JBQTBCQyxXQUFXO2dCQUFPQyxJQUFJO1lBQUU7WUFDaEU7Z0JBQUVGLFlBQVk7Z0JBQTRCQyxXQUFXO2dCQUFNQyxJQUFJO1lBQUU7WUFDakU7Z0JBQUVGLFlBQVk7Z0JBQTJCQyxXQUFXO2dCQUFPQyxJQUFJO1lBQUU7WUFDakU7Z0JBQUVGLFlBQVk7Z0JBQTRCQyxXQUFXO2dCQUFPQyxJQUFJO1lBQUU7U0FDbkU7SUFDSDtJQUNBO1FBQ0VKLGNBQWM7UUFDZEMsU0FBUztZQUNQO2dCQUFFQyxZQUFZO2dCQUEwQkMsV0FBVztnQkFBTUMsSUFBSTtZQUFFO1lBQy9EO2dCQUFFRixZQUFZO2dCQUFxQkMsV0FBVztnQkFBT0MsSUFBSTtZQUFFO1lBQzNEO2dCQUFFRixZQUFZO2dCQUFzQkMsV0FBVztnQkFBT0MsSUFBSTtZQUFFO1lBQzVEO2dCQUFFRixZQUFZO2dCQUFxQkMsV0FBVztnQkFBT0MsSUFBSTtZQUFFO1NBQzVEO0lBQ0g7SUFDQTtRQUNFSixjQUFjO1FBQ2RDLFNBQVM7WUFDUDtnQkFBRUMsWUFBWTtnQkFBd0JDLFdBQVc7Z0JBQU9DLElBQUk7WUFBRTtZQUM5RDtnQkFBRUYsWUFBWTtnQkFBMEJDLFdBQVc7Z0JBQU9DLElBQUk7WUFBRTtZQUNoRTtnQkFBRUYsWUFBWTtnQkFBeUJDLFdBQVc7Z0JBQU1DLElBQUk7WUFBRTtZQUM5RDtnQkFBRUYsWUFBWTtnQkFBZ0NDLFdBQVc7Z0JBQU9DLElBQUk7WUFBRTtTQUN2RTtJQUNIO0lBQ0E7UUFDRUosY0FBYztRQUNkQyxTQUFTO1lBQ1A7Z0JBQUVDLFlBQVk7Z0JBQW9CQyxXQUFXO2dCQUFPQyxJQUFJO1lBQUU7WUFDMUQ7Z0JBQUVGLFlBQVk7Z0JBQXlCQyxXQUFXO2dCQUFNQyxJQUFJO1lBQUU7WUFDOUQ7Z0JBQUVGLFlBQVk7Z0JBQXlCQyxXQUFXO2dCQUFPQyxJQUFJO1lBQUU7WUFDL0Q7Z0JBQUVGLFlBQVk7Z0JBQTBCQyxXQUFXO2dCQUFPQyxJQUFJO1lBQUU7U0FDakU7SUFDSDtDQUNEO0FBRWMsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHYiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNjLGlCQUFpQkMsbUJBQW1CLEdBQUdmLCtDQUFRQSxDQUFDO0lBRXZELE1BQU1nQixhQUFhO1FBQ2pCLElBQUksQ0FBQ0osU0FBUztZQUNaQyxXQUFXO1lBQ1g7UUFDRjtRQUVBLElBQUlDLGtCQUFrQlQsVUFBVVksTUFBTSxHQUFHLEdBQUc7WUFDMUNGLG1CQUFtQkQsa0JBQWtCO1FBQ3ZDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0k7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDQztvQkFBT0QsV0FBVTs7c0NBQ2hCLDhEQUFDbEIseURBQU1BOzRCQUFDb0IsTUFBSzs0QkFBT0MsU0FBUTtzQ0FDMUIsNEVBQUNuQix5RkFBV0E7Ozs7Ozs7Ozs7c0NBRWQsOERBQUNGLHlEQUFNQTs0QkFBQ29CLE1BQUs7NEJBQU9DLFNBQVE7c0NBQzFCLDRFQUFDbEIseUZBQUNBOzs7Ozs7Ozs7O3NDQUVKLDhEQUFDRiwrREFBV0E7NEJBQUNxQixPQUFPLGtCQUFtQmxCLFVBQVVZLE1BQU0sR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRy9ELDhEQUFDTztnQkFBS0wsV0FBVTswQkFDYixDQUFDUCx3QkFDQSw4REFBQ2E7b0JBQUdOLFdBQVU7OEJBQXFCOzs7Ozt5Q0FFbkMsOERBQUNEOztzQ0FDQyw4REFBQ1E7NEJBQUdQLFdBQVU7O2dDQUNYZCxTQUFTLENBQUNTLGdCQUFnQixDQUFDUixZQUFZO2dDQUFFOzs7Ozs7O3NDQUU1Qyw4REFBQ1k7NEJBQUlDLFdBQVU7c0NBQ1pkLFNBQVMsQ0FBQ1MsZ0JBQWdCLENBQUNQLE9BQU8sQ0FBQ29CLEdBQUcsQ0FBQyxDQUFDQztnQ0FDdkMscUJBQ0UsOERBQUMzQix5REFBTUE7b0NBQWlCcUIsU0FBUzs4Q0FDOUJNLE9BQU9wQixVQUFVO21DQURQb0IsT0FBT2xCLEVBQUU7Ozs7OzRCQUkxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS1IsOERBQUNtQjtnQkFBT1YsV0FBVTswQkFDaEIsNEVBQUNsQix5REFBTUE7b0JBQUM2QixTQUFTZDs4QkFBYSxDQUFDSixVQUFVLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTNEO0dBckR3QkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9xdWl6L3BhZ2UudHN4P2M2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFwiQC9jb21wb25lbnRzL3Byb2dyZXNzQmFyXCI7XG5pbXBvcnQgeyBDaGV2cm9uTGVmdCwgWCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcblxuY29uc3QgcXVlc3Rpb25zID0gW1xuICB7XG4gICAgcXVlc3Rpb25UZXh0OiBcIldoYXQgaXMgUmVhY3Q/XCIsXG4gICAgYW5zd2VyczogW1xuICAgICAge1xuICAgICAgICBhbnN3ZXJUZXh0OiBcIkEgTGlicmFyeSBmb3IgYnVpbGRpbmcgdXNlciBpbnRlcmZhY2VzXCIsXG4gICAgICAgIGlzQ29ycmVjdDogZmFsc2UsXG4gICAgICAgIGlkOiAxLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYW5zd2VyVGV4dDogXCJBIExpYnJhcnkgZm9yIGJ1aWxkaW5nIHVzZXIgbGFwdG9wc1wiLFxuICAgICAgICBpc0NvcnJlY3Q6IGZhbHNlLFxuICAgICAgICBpZDogMixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGFuc3dlclRleHQ6IFwiQSBMaWJyYXJ5IGZvciBidWlsZGluZyB1c2VyIGludGVyZmFjZXNcIixcbiAgICAgICAgaXNDb3JyZWN0OiB0cnVlLFxuICAgICAgICBpZDogMyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGFuc3dlclRleHQ6IFwiQSBMaWJyYXJ5IGZvciBidWlsZGluZyB1c2VyIGludGVyZmFjZXNcIixcbiAgICAgICAgaXNDb3JyZWN0OiBmYWxzZSxcbiAgICAgICAgaWQ6IDQsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBxdWVzdGlvblRleHQ6IFwiV2hhdCBpcyBIVE1MP1wiLFxuICAgIGFuc3dlcnM6IFtcbiAgICAgIHsgYW5zd2VyVGV4dDogXCJIeXBlciBUZXh0IE1hcmt1cCBMYW5ndWFnZVwiLCBpc0NvcnJlY3Q6IGZhbHNlLCBpZDogMSB9LFxuICAgICAgeyBhbnN3ZXJUZXh0OiBcIkh5cGVydGV4dCBNYXJrdXAgTGFwdG9wXCIsIGlzQ29ycmVjdDogZmFsc2UsIGlkOiAyIH0sXG4gICAgICB7IGFuc3dlclRleHQ6IFwiSHlwZXIgVG9vbCBNYXJrdXAgTGFuZ3VhZ2VcIiwgaXNDb3JyZWN0OiB0cnVlLCBpZDogMyB9LFxuICAgICAgeyBhbnN3ZXJUZXh0OiBcIkh5cGVyIFRleHQgTWFya3VwIExhcHRvcFwiLCBpc0NvcnJlY3Q6IGZhbHNlLCBpZDogNCB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBxdWVzdGlvblRleHQ6IFwiV2hhdCBpcyBDU1M/XCIsXG4gICAgYW5zd2VyczogW1xuICAgICAgeyBhbnN3ZXJUZXh0OiBcIkNhc2NhZGluZyBTdHlsZSBTaGVldHNcIiwgaXNDb3JyZWN0OiBmYWxzZSwgaWQ6IDEgfSxcbiAgICAgIHsgYW5zd2VyVGV4dDogXCJDYXNjYWRpbmcgU3R5bGluZyBTeXN0ZW1cIiwgaXNDb3JyZWN0OiB0cnVlLCBpZDogMiB9LFxuICAgICAgeyBhbnN3ZXJUZXh0OiBcIkNhc2NhZGluZyBTeXN0ZW0gU2hlZXRzXCIsIGlzQ29ycmVjdDogZmFsc2UsIGlkOiAzIH0sXG4gICAgICB7IGFuc3dlclRleHQ6IFwiQ2FzY2FkaW5nIFN0eWxlIFNvZnR3YXJlXCIsIGlzQ29ycmVjdDogZmFsc2UsIGlkOiA0IH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHF1ZXN0aW9uVGV4dDogXCJXaGF0IGlzIEphdmFTY3JpcHQ/XCIsXG4gICAgYW5zd2VyczogW1xuICAgICAgeyBhbnN3ZXJUZXh0OiBcIkEgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2VcIiwgaXNDb3JyZWN0OiB0cnVlLCBpZDogMSB9LFxuICAgICAgeyBhbnN3ZXJUZXh0OiBcIkEgbWFya3VwIGxhbmd1YWdlXCIsIGlzQ29ycmVjdDogZmFsc2UsIGlkOiAyIH0sXG4gICAgICB7IGFuc3dlclRleHQ6IFwiQSBzdHlsaW5nIGxhbmd1YWdlXCIsIGlzQ29ycmVjdDogZmFsc2UsIGlkOiAzIH0sXG4gICAgICB7IGFuc3dlclRleHQ6IFwiQSBkZXNpZ24gbGFuZ3VhZ2VcIiwgaXNDb3JyZWN0OiBmYWxzZSwgaWQ6IDQgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgcXVlc3Rpb25UZXh0OiBcIldoYXQgaXMgTm9kZS5qcz9cIixcbiAgICBhbnN3ZXJzOiBbXG4gICAgICB7IGFuc3dlclRleHQ6IFwiQSBKYXZhU2NyaXB0IHJ1bnRpbWVcIiwgaXNDb3JyZWN0OiBmYWxzZSwgaWQ6IDEgfSxcbiAgICAgIHsgYW5zd2VyVGV4dDogXCJBIHNlcnZlci1zaWRlIGxhbmd1YWdlXCIsIGlzQ29ycmVjdDogZmFsc2UsIGlkOiAyIH0sXG4gICAgICB7IGFuc3dlclRleHQ6IFwiQSBmcm9udC1lbmQgZnJhbWV3b3JrXCIsIGlzQ29ycmVjdDogdHJ1ZSwgaWQ6IDMgfSxcbiAgICAgIHsgYW5zd2VyVGV4dDogXCJBIGRhdGFiYXNlIG1hbmFnZW1lbnQgc3lzdGVtXCIsIGlzQ29ycmVjdDogZmFsc2UsIGlkOiA0IH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHF1ZXN0aW9uVGV4dDogXCJXaGF0IGlzIE1vbmdvREI/XCIsXG4gICAgYW5zd2VyczogW1xuICAgICAgeyBhbnN3ZXJUZXh0OiBcIkEgTm9TUUwgZGF0YWJhc2VcIiwgaXNDb3JyZWN0OiBmYWxzZSwgaWQ6IDEgfSxcbiAgICAgIHsgYW5zd2VyVGV4dDogXCJBIHJlbGF0aW9uYWwgZGF0YWJhc2VcIiwgaXNDb3JyZWN0OiB0cnVlLCBpZDogMiB9LFxuICAgICAgeyBhbnN3ZXJUZXh0OiBcIkEgZmlsZSBzdG9yYWdlIHN5c3RlbVwiLCBpc0NvcnJlY3Q6IGZhbHNlLCBpZDogMyB9LFxuICAgICAgeyBhbnN3ZXJUZXh0OiBcIkEgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2VcIiwgaXNDb3JyZWN0OiBmYWxzZSwgaWQ6IDQgfSxcbiAgICBdLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3N0YXJ0ZWQsIHNldFN0YXJ0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY3VycmVudFF1ZXN0aW9uLCBzZXRDdXJyZW50UXVlc3Rpb25dID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcbiAgICBpZiAoIXN0YXJ0ZWQpIHtcbiAgICAgIHNldFN0YXJ0ZWQodHJ1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRRdWVzdGlvbiA8IHF1ZXN0aW9ucy5sZW5ndGggLSAxKSB7XG4gICAgICBzZXRDdXJyZW50UXVlc3Rpb24oY3VycmVudFF1ZXN0aW9uICsgMSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGZsZXgtMVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1zdGlja3kgdG9wLTAgei0xMCBzaGFkb3ctbWQgcHktNCB3LWZ1bGxcIj5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy1bYXV0bywgMWZyLCBhdXRvXSBncmlkLWZsb3ctY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIiA+XG4gICAgICAgICAgPEJ1dHRvbiBzaXplPVwiaWNvblwiIHZhcmlhbnQ9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICA8Q2hldnJvbkxlZnQgLz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIHNpemU9XCJpY29uXCIgdmFyaWFudD1cIm91dGxpbmVcIj5cbiAgICAgICAgICAgIDxYIC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPFByb2dyZXNzQmFyIHZhbHVlPXsoY3VycmVudFF1ZXN0aW9uIC8gcXVlc3Rpb25zLmxlbmd0aCkgKiAxMDB9IC8+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgPC9kaXY+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIHshc3RhcnRlZCA/IChcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkXCI+V2VsY29tZSBUbyBUaGUgUXVpeiBQYWdlPC9oMT5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICB7cXVlc3Rpb25zW2N1cnJlbnRRdWVzdGlvbl0ucXVlc3Rpb25UZXh0fXtcIiBcIn1cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTYgbXQtNlwiPlxuICAgICAgICAgICAgICB7cXVlc3Rpb25zW2N1cnJlbnRRdWVzdGlvbl0uYW5zd2Vycy5tYXAoKGFuc3dlcikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGtleT17YW5zd2VyLmlkfSB2YXJpYW50PXtcInNlY29uZGFyeVwifT5cbiAgICAgICAgICAgICAgICAgICAge2Fuc3dlci5hbnN3ZXJUZXh0fVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyIHBiLTkgYWJzb2x1dGUgYm90dG9tLTAgbWItMCBweC02XCI+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlTmV4dH0+eyFzdGFydGVkID8gXCJTdGFydFwiIDogXCJOZXh0XCJ9PC9CdXR0b24+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIlByb2dyZXNzQmFyIiwiQ2hldnJvbkxlZnQiLCJYIiwicXVlc3Rpb25zIiwicXVlc3Rpb25UZXh0IiwiYW5zd2VycyIsImFuc3dlclRleHQiLCJpc0NvcnJlY3QiLCJpZCIsIkhvbWUiLCJzdGFydGVkIiwic2V0U3RhcnRlZCIsImN1cnJlbnRRdWVzdGlvbiIsInNldEN1cnJlbnRRdWVzdGlvbiIsImhhbmRsZU5leHQiLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJzaXplIiwidmFyaWFudCIsInZhbHVlIiwibWFpbiIsImgxIiwiaDIiLCJtYXAiLCJhbnN3ZXIiLCJmb290ZXIiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/quiz/page.tsx\n"));

/***/ })

});