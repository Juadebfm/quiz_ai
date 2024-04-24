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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _components_progressBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/progressBar */ \"(app-pages-browser)/./src/components/progressBar.tsx\");\n/* harmony import */ var _barrel_optimize_names_ChevronLeft_X_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronLeft,X!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-left.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronLeft_X_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronLeft,X!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/x.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst questions = [\n    {\n        questionText: \"What is React?\",\n        answers: [\n            {\n                answerText: \"A Library for building user interfaces\",\n                isCorrect: false,\n                id: 1\n            },\n            {\n                answerText: \"A Library for building user laptops\",\n                isCorrect: false,\n                id: 2\n            },\n            {\n                answerText: \"A Library for building user interfaces\",\n                isCorrect: true,\n                id: 3\n            },\n            {\n                answerText: \"A Library for building user interfaces\",\n                isCorrect: false,\n                id: 4\n            }\n        ]\n    },\n    {\n        questionText: \"What is HTML?\",\n        answers: [\n            {\n                answerText: \"Hyper Text Markup Language\",\n                isCorrect: false,\n                id: 1\n            },\n            {\n                answerText: \"Hypertext Markup Laptop\",\n                isCorrect: false,\n                id: 2\n            },\n            {\n                answerText: \"Hyper Tool Markup Language\",\n                isCorrect: true,\n                id: 3\n            },\n            {\n                answerText: \"Hyper Text Markup Laptop\",\n                isCorrect: false,\n                id: 4\n            }\n        ]\n    },\n    {\n        questionText: \"What is CSS?\",\n        answers: [\n            {\n                answerText: \"Cascading Style Sheets\",\n                isCorrect: false,\n                id: 1\n            },\n            {\n                answerText: \"Cascading Styling System\",\n                isCorrect: true,\n                id: 2\n            },\n            {\n                answerText: \"Cascading System Sheets\",\n                isCorrect: false,\n                id: 3\n            },\n            {\n                answerText: \"Cascading Style Software\",\n                isCorrect: false,\n                id: 4\n            }\n        ]\n    },\n    {\n        questionText: \"What is JavaScript?\",\n        answers: [\n            {\n                answerText: \"A programming language\",\n                isCorrect: true,\n                id: 1\n            },\n            {\n                answerText: \"A markup language\",\n                isCorrect: false,\n                id: 2\n            },\n            {\n                answerText: \"A styling language\",\n                isCorrect: false,\n                id: 3\n            },\n            {\n                answerText: \"A design language\",\n                isCorrect: false,\n                id: 4\n            }\n        ]\n    },\n    {\n        questionText: \"What is Node.js?\",\n        answers: [\n            {\n                answerText: \"A JavaScript runtime\",\n                isCorrect: false,\n                id: 1\n            },\n            {\n                answerText: \"A server-side language\",\n                isCorrect: false,\n                id: 2\n            },\n            {\n                answerText: \"A front-end framework\",\n                isCorrect: true,\n                id: 3\n            },\n            {\n                answerText: \"A database management system\",\n                isCorrect: false,\n                id: 4\n            }\n        ]\n    },\n    {\n        questionText: \"What is MongoDB?\",\n        answers: [\n            {\n                answerText: \"A NoSQL database\",\n                isCorrect: false,\n                id: 1\n            },\n            {\n                answerText: \"A relational database\",\n                isCorrect: true,\n                id: 2\n            },\n            {\n                answerText: \"A file storage system\",\n                isCorrect: false,\n                id: 3\n            },\n            {\n                answerText: \"A programming language\",\n                isCorrect: false,\n                id: 4\n            }\n        ]\n    }\n];\nfunction Home() {\n    _s();\n    const [started, setStarted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [currentQuestion, setCurrentQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [selectedAnswer, setSelectedAnswer] = react__WEBPACK_IMPORTED_MODULE_1__.useState;\n    const handleNext = ()=>{\n        if (!started) {\n            setStarted(true);\n            return;\n        }\n        if (currentQuestion < questions.length - 1) {\n            setCurrentQuestion(currentQuestion + 1);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col flex-1\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"position-sticky top-0 z-10 shadow-md py-4 w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                    className: \"grid grid-cols-[auto,1fr,auto] grid-flow-col items-center justify-between gap-2 py-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            size: \"icon\",\n                            variant: \"outline\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronLeft_X_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_progressBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            value: currentQuestion / questions.length * 100\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            size: \"icon\",\n                            variant: \"outline\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronLeft_X_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                            lineNumber: 106,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                    lineNumber: 100,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex justify-center\",\n                children: !started ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl font-bold\",\n                    children: \"Welcome To The Quiz Page\"\n                }, void 0, false, {\n                    fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                    lineNumber: 113,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-3xl font-bold\",\n                            children: [\n                                questions[currentQuestion].questionText,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-1 gap-6 mt-6\",\n                            children: questions[currentQuestion].answers.map((answer)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                    variant: \"secondary\",\n                                    children: answer.answerText\n                                }, answer.id, false, {\n                                    fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                                    lineNumber: 122,\n                                    columnNumber: 19\n                                }, this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                            lineNumber: 119,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                    lineNumber: 115,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"footer pb-9 absolute bottom-0 mb-0 px-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    onClick: handleNext,\n                    children: !started ? \"Start\" : \"Next\"\n                }, void 0, false, {\n                    fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                    lineNumber: 132,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                lineNumber: 131,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n        lineNumber: 98,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"iHLZSoKQ+BcPdfO2sB8KlYyXJ8s=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcXVpei9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ2lDO0FBQ2U7QUFDRztBQUNMO0FBRTlDLE1BQU1LLFlBQVk7SUFDaEI7UUFDRUMsY0FBYztRQUNkQyxTQUFTO1lBQ1A7Z0JBQ0VDLFlBQVk7Z0JBQ1pDLFdBQVc7Z0JBQ1hDLElBQUk7WUFDTjtZQUNBO2dCQUNFRixZQUFZO2dCQUNaQyxXQUFXO2dCQUNYQyxJQUFJO1lBQ047WUFDQTtnQkFDRUYsWUFBWTtnQkFDWkMsV0FBVztnQkFDWEMsSUFBSTtZQUNOO1lBQ0E7Z0JBQ0VGLFlBQVk7Z0JBQ1pDLFdBQVc7Z0JBQ1hDLElBQUk7WUFDTjtTQUNEO0lBQ0g7SUFDQTtRQUNFSixjQUFjO1FBQ2RDLFNBQVM7WUFDUDtnQkFBRUMsWUFBWTtnQkFBOEJDLFdBQVc7Z0JBQU9DLElBQUk7WUFBRTtZQUNwRTtnQkFBRUYsWUFBWTtnQkFBMkJDLFdBQVc7Z0JBQU9DLElBQUk7WUFBRTtZQUNqRTtnQkFBRUYsWUFBWTtnQkFBOEJDLFdBQVc7Z0JBQU1DLElBQUk7WUFBRTtZQUNuRTtnQkFBRUYsWUFBWTtnQkFBNEJDLFdBQVc7Z0JBQU9DLElBQUk7WUFBRTtTQUNuRTtJQUNIO0lBQ0E7UUFDRUosY0FBYztRQUNkQyxTQUFTO1lBQ1A7Z0JBQUVDLFlBQVk7Z0JBQTBCQyxXQUFXO2dCQUFPQyxJQUFJO1lBQUU7WUFDaEU7Z0JBQUVGLFlBQVk7Z0JBQTRCQyxXQUFXO2dCQUFNQyxJQUFJO1lBQUU7WUFDakU7Z0JBQUVGLFlBQVk7Z0JBQTJCQyxXQUFXO2dCQUFPQyxJQUFJO1lBQUU7WUFDakU7Z0JBQUVGLFlBQVk7Z0JBQTRCQyxXQUFXO2dCQUFPQyxJQUFJO1lBQUU7U0FDbkU7SUFDSDtJQUNBO1FBQ0VKLGNBQWM7UUFDZEMsU0FBUztZQUNQO2dCQUFFQyxZQUFZO2dCQUEwQkMsV0FBVztnQkFBTUMsSUFBSTtZQUFFO1lBQy9EO2dCQUFFRixZQUFZO2dCQUFxQkMsV0FBVztnQkFBT0MsSUFBSTtZQUFFO1lBQzNEO2dCQUFFRixZQUFZO2dCQUFzQkMsV0FBVztnQkFBT0MsSUFBSTtZQUFFO1lBQzVEO2dCQUFFRixZQUFZO2dCQUFxQkMsV0FBVztnQkFBT0MsSUFBSTtZQUFFO1NBQzVEO0lBQ0g7SUFDQTtRQUNFSixjQUFjO1FBQ2RDLFNBQVM7WUFDUDtnQkFBRUMsWUFBWTtnQkFBd0JDLFdBQVc7Z0JBQU9DLElBQUk7WUFBRTtZQUM5RDtnQkFBRUYsWUFBWTtnQkFBMEJDLFdBQVc7Z0JBQU9DLElBQUk7WUFBRTtZQUNoRTtnQkFBRUYsWUFBWTtnQkFBeUJDLFdBQVc7Z0JBQU1DLElBQUk7WUFBRTtZQUM5RDtnQkFBRUYsWUFBWTtnQkFBZ0NDLFdBQVc7Z0JBQU9DLElBQUk7WUFBRTtTQUN2RTtJQUNIO0lBQ0E7UUFDRUosY0FBYztRQUNkQyxTQUFTO1lBQ1A7Z0JBQUVDLFlBQVk7Z0JBQW9CQyxXQUFXO2dCQUFPQyxJQUFJO1lBQUU7WUFDMUQ7Z0JBQUVGLFlBQVk7Z0JBQXlCQyxXQUFXO2dCQUFNQyxJQUFJO1lBQUU7WUFDOUQ7Z0JBQUVGLFlBQVk7Z0JBQXlCQyxXQUFXO2dCQUFPQyxJQUFJO1lBQUU7WUFDL0Q7Z0JBQUVGLFlBQVk7Z0JBQTBCQyxXQUFXO2dCQUFPQyxJQUFJO1lBQUU7U0FDakU7SUFDSDtDQUNEO0FBRWMsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHYiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNjLGlCQUFpQkMsbUJBQW1CLEdBQUdmLCtDQUFRQSxDQUFDO0lBQ3ZELE1BQU0sQ0FBQ2dCLE9BQU1DLFNBQVMsR0FBQ2pCLCtDQUFRQSxDQUFDO0lBQ2hDLE1BQU0sQ0FBQ2tCLGdCQUFnQkMsa0JBQWtCLEdBQUduQiwyQ0FBUUE7SUFFcEQsTUFBTW9CLGFBQWE7UUFDakIsSUFBSSxDQUFDUixTQUFTO1lBQ1pDLFdBQVc7WUFDWDtRQUNGO1FBRUEsSUFBSUMsa0JBQWtCVCxVQUFVZ0IsTUFBTSxHQUFHLEdBQUc7WUFDMUNOLG1CQUFtQkQsa0JBQWtCO1FBQ3ZDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ1E7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDQztvQkFBT0QsV0FBVTs7c0NBQ2hCLDhEQUFDdEIseURBQU1BOzRCQUFDd0IsTUFBSzs0QkFBT0MsU0FBUTtzQ0FDMUIsNEVBQUN2Qix5RkFBV0E7Ozs7Ozs7Ozs7c0NBRWQsOERBQUNELCtEQUFXQTs0QkFBQ3lCLE9BQU8sa0JBQW1CdEIsVUFBVWdCLE1BQU0sR0FBSTs7Ozs7O3NDQUUzRCw4REFBQ3BCLHlEQUFNQTs0QkFBQ3dCLE1BQUs7NEJBQU9DLFNBQVE7c0NBQzFCLDRFQUFDdEIseUZBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSVIsOERBQUN3QjtnQkFBS0wsV0FBVTswQkFDYixDQUFDWCx3QkFDQSw4REFBQ2lCO29CQUFHTixXQUFVOzhCQUFxQjs7Ozs7eUNBRW5DLDhEQUFDRDs7c0NBQ0MsOERBQUNROzRCQUFHUCxXQUFVOztnQ0FDWGxCLFNBQVMsQ0FBQ1MsZ0JBQWdCLENBQUNSLFlBQVk7Z0NBQUU7Ozs7Ozs7c0NBRTVDLDhEQUFDZ0I7NEJBQUlDLFdBQVU7c0NBQ1psQixTQUFTLENBQUNTLGdCQUFnQixDQUFDUCxPQUFPLENBQUN3QixHQUFHLENBQUMsQ0FBQ0M7Z0NBQ3ZDLHFCQUNFLDhEQUFDL0IseURBQU1BO29DQUFpQnlCLFNBQVM7OENBQzlCTSxPQUFPeEIsVUFBVTttQ0FEUHdCLE9BQU90QixFQUFFOzs7Ozs0QkFJMUI7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtSLDhEQUFDdUI7Z0JBQU9WLFdBQVU7MEJBQ2hCLDRFQUFDdEIseURBQU1BO29CQUFDaUMsU0FBU2Q7OEJBQWEsQ0FBQ1IsVUFBVSxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztBQUkzRDtHQXhEd0JEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcXVpei9wYWdlLnRzeD9jNjAzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcIkAvY29tcG9uZW50cy9wcm9ncmVzc0JhclwiO1xuaW1wb3J0IHsgQ2hldnJvbkxlZnQsIFggfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5cbmNvbnN0IHF1ZXN0aW9ucyA9IFtcbiAge1xuICAgIHF1ZXN0aW9uVGV4dDogXCJXaGF0IGlzIFJlYWN0P1wiLFxuICAgIGFuc3dlcnM6IFtcbiAgICAgIHtcbiAgICAgICAgYW5zd2VyVGV4dDogXCJBIExpYnJhcnkgZm9yIGJ1aWxkaW5nIHVzZXIgaW50ZXJmYWNlc1wiLFxuICAgICAgICBpc0NvcnJlY3Q6IGZhbHNlLFxuICAgICAgICBpZDogMSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGFuc3dlclRleHQ6IFwiQSBMaWJyYXJ5IGZvciBidWlsZGluZyB1c2VyIGxhcHRvcHNcIixcbiAgICAgICAgaXNDb3JyZWN0OiBmYWxzZSxcbiAgICAgICAgaWQ6IDIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBhbnN3ZXJUZXh0OiBcIkEgTGlicmFyeSBmb3IgYnVpbGRpbmcgdXNlciBpbnRlcmZhY2VzXCIsXG4gICAgICAgIGlzQ29ycmVjdDogdHJ1ZSxcbiAgICAgICAgaWQ6IDMsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBhbnN3ZXJUZXh0OiBcIkEgTGlicmFyeSBmb3IgYnVpbGRpbmcgdXNlciBpbnRlcmZhY2VzXCIsXG4gICAgICAgIGlzQ29ycmVjdDogZmFsc2UsXG4gICAgICAgIGlkOiA0LFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgcXVlc3Rpb25UZXh0OiBcIldoYXQgaXMgSFRNTD9cIixcbiAgICBhbnN3ZXJzOiBbXG4gICAgICB7IGFuc3dlclRleHQ6IFwiSHlwZXIgVGV4dCBNYXJrdXAgTGFuZ3VhZ2VcIiwgaXNDb3JyZWN0OiBmYWxzZSwgaWQ6IDEgfSxcbiAgICAgIHsgYW5zd2VyVGV4dDogXCJIeXBlcnRleHQgTWFya3VwIExhcHRvcFwiLCBpc0NvcnJlY3Q6IGZhbHNlLCBpZDogMiB9LFxuICAgICAgeyBhbnN3ZXJUZXh0OiBcIkh5cGVyIFRvb2wgTWFya3VwIExhbmd1YWdlXCIsIGlzQ29ycmVjdDogdHJ1ZSwgaWQ6IDMgfSxcbiAgICAgIHsgYW5zd2VyVGV4dDogXCJIeXBlciBUZXh0IE1hcmt1cCBMYXB0b3BcIiwgaXNDb3JyZWN0OiBmYWxzZSwgaWQ6IDQgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgcXVlc3Rpb25UZXh0OiBcIldoYXQgaXMgQ1NTP1wiLFxuICAgIGFuc3dlcnM6IFtcbiAgICAgIHsgYW5zd2VyVGV4dDogXCJDYXNjYWRpbmcgU3R5bGUgU2hlZXRzXCIsIGlzQ29ycmVjdDogZmFsc2UsIGlkOiAxIH0sXG4gICAgICB7IGFuc3dlclRleHQ6IFwiQ2FzY2FkaW5nIFN0eWxpbmcgU3lzdGVtXCIsIGlzQ29ycmVjdDogdHJ1ZSwgaWQ6IDIgfSxcbiAgICAgIHsgYW5zd2VyVGV4dDogXCJDYXNjYWRpbmcgU3lzdGVtIFNoZWV0c1wiLCBpc0NvcnJlY3Q6IGZhbHNlLCBpZDogMyB9LFxuICAgICAgeyBhbnN3ZXJUZXh0OiBcIkNhc2NhZGluZyBTdHlsZSBTb2Z0d2FyZVwiLCBpc0NvcnJlY3Q6IGZhbHNlLCBpZDogNCB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBxdWVzdGlvblRleHQ6IFwiV2hhdCBpcyBKYXZhU2NyaXB0P1wiLFxuICAgIGFuc3dlcnM6IFtcbiAgICAgIHsgYW5zd2VyVGV4dDogXCJBIHByb2dyYW1taW5nIGxhbmd1YWdlXCIsIGlzQ29ycmVjdDogdHJ1ZSwgaWQ6IDEgfSxcbiAgICAgIHsgYW5zd2VyVGV4dDogXCJBIG1hcmt1cCBsYW5ndWFnZVwiLCBpc0NvcnJlY3Q6IGZhbHNlLCBpZDogMiB9LFxuICAgICAgeyBhbnN3ZXJUZXh0OiBcIkEgc3R5bGluZyBsYW5ndWFnZVwiLCBpc0NvcnJlY3Q6IGZhbHNlLCBpZDogMyB9LFxuICAgICAgeyBhbnN3ZXJUZXh0OiBcIkEgZGVzaWduIGxhbmd1YWdlXCIsIGlzQ29ycmVjdDogZmFsc2UsIGlkOiA0IH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHF1ZXN0aW9uVGV4dDogXCJXaGF0IGlzIE5vZGUuanM/XCIsXG4gICAgYW5zd2VyczogW1xuICAgICAgeyBhbnN3ZXJUZXh0OiBcIkEgSmF2YVNjcmlwdCBydW50aW1lXCIsIGlzQ29ycmVjdDogZmFsc2UsIGlkOiAxIH0sXG4gICAgICB7IGFuc3dlclRleHQ6IFwiQSBzZXJ2ZXItc2lkZSBsYW5ndWFnZVwiLCBpc0NvcnJlY3Q6IGZhbHNlLCBpZDogMiB9LFxuICAgICAgeyBhbnN3ZXJUZXh0OiBcIkEgZnJvbnQtZW5kIGZyYW1ld29ya1wiLCBpc0NvcnJlY3Q6IHRydWUsIGlkOiAzIH0sXG4gICAgICB7IGFuc3dlclRleHQ6IFwiQSBkYXRhYmFzZSBtYW5hZ2VtZW50IHN5c3RlbVwiLCBpc0NvcnJlY3Q6IGZhbHNlLCBpZDogNCB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBxdWVzdGlvblRleHQ6IFwiV2hhdCBpcyBNb25nb0RCP1wiLFxuICAgIGFuc3dlcnM6IFtcbiAgICAgIHsgYW5zd2VyVGV4dDogXCJBIE5vU1FMIGRhdGFiYXNlXCIsIGlzQ29ycmVjdDogZmFsc2UsIGlkOiAxIH0sXG4gICAgICB7IGFuc3dlclRleHQ6IFwiQSByZWxhdGlvbmFsIGRhdGFiYXNlXCIsIGlzQ29ycmVjdDogdHJ1ZSwgaWQ6IDIgfSxcbiAgICAgIHsgYW5zd2VyVGV4dDogXCJBIGZpbGUgc3RvcmFnZSBzeXN0ZW1cIiwgaXNDb3JyZWN0OiBmYWxzZSwgaWQ6IDMgfSxcbiAgICAgIHsgYW5zd2VyVGV4dDogXCJBIHByb2dyYW1taW5nIGxhbmd1YWdlXCIsIGlzQ29ycmVjdDogZmFsc2UsIGlkOiA0IH0sXG4gICAgXSxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtzdGFydGVkLCBzZXRTdGFydGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2N1cnJlbnRRdWVzdGlvbiwgc2V0Q3VycmVudFF1ZXN0aW9uXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc2NvcmUsc2V0U2NvcmVdPXVzZVN0YXRlKDApO1xuICBjb25zdCBbc2VsZWN0ZWRBbnN3ZXIsIHNldFNlbGVjdGVkQW5zd2VyXSA9IHVzZVN0YXRlXG5cbiAgY29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcbiAgICBpZiAoIXN0YXJ0ZWQpIHtcbiAgICAgIHNldFN0YXJ0ZWQodHJ1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRRdWVzdGlvbiA8IHF1ZXN0aW9ucy5sZW5ndGggLSAxKSB7XG4gICAgICBzZXRDdXJyZW50UXVlc3Rpb24oY3VycmVudFF1ZXN0aW9uICsgMSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGZsZXgtMVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1zdGlja3kgdG9wLTAgei0xMCBzaGFkb3ctbWQgcHktNCB3LWZ1bGxcIj5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy1bYXV0bywxZnIsYXV0b10gZ3JpZC1mbG93LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0yIHB5LTJcIj5cbiAgICAgICAgICA8QnV0dG9uIHNpemU9XCJpY29uXCIgdmFyaWFudD1cIm91dGxpbmVcIj5cbiAgICAgICAgICAgIDxDaGV2cm9uTGVmdCAvPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxQcm9ncmVzc0JhciB2YWx1ZT17KGN1cnJlbnRRdWVzdGlvbiAvIHF1ZXN0aW9ucy5sZW5ndGgpICogMTAwfSAvPlxuXG4gICAgICAgICAgPEJ1dHRvbiBzaXplPVwiaWNvblwiIHZhcmlhbnQ9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICA8WCAvPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgIDwvZGl2PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICB7IXN0YXJ0ZWQgPyAoXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZFwiPldlbGNvbWUgVG8gVGhlIFF1aXogUGFnZTwvaDE+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAge3F1ZXN0aW9uc1tjdXJyZW50UXVlc3Rpb25dLnF1ZXN0aW9uVGV4dH17XCIgXCJ9XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdhcC02IG10LTZcIj5cbiAgICAgICAgICAgICAge3F1ZXN0aW9uc1tjdXJyZW50UXVlc3Rpb25dLmFuc3dlcnMubWFwKChhbnN3ZXIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9e2Fuc3dlci5pZH0gdmFyaWFudD17XCJzZWNvbmRhcnlcIn0+XG4gICAgICAgICAgICAgICAgICAgIHthbnN3ZXIuYW5zd2VyVGV4dH1cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L21haW4+XG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlciBwYi05IGFic29sdXRlIGJvdHRvbS0wIG1iLTAgcHgtNlwiPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU5leHR9Pnshc3RhcnRlZCA/IFwiU3RhcnRcIiA6IFwiTmV4dFwifTwvQnV0dG9uPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJCdXR0b24iLCJQcm9ncmVzc0JhciIsIkNoZXZyb25MZWZ0IiwiWCIsInF1ZXN0aW9ucyIsInF1ZXN0aW9uVGV4dCIsImFuc3dlcnMiLCJhbnN3ZXJUZXh0IiwiaXNDb3JyZWN0IiwiaWQiLCJIb21lIiwic3RhcnRlZCIsInNldFN0YXJ0ZWQiLCJjdXJyZW50UXVlc3Rpb24iLCJzZXRDdXJyZW50UXVlc3Rpb24iLCJzY29yZSIsInNldFNjb3JlIiwic2VsZWN0ZWRBbnN3ZXIiLCJzZXRTZWxlY3RlZEFuc3dlciIsImhhbmRsZU5leHQiLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJzaXplIiwidmFyaWFudCIsInZhbHVlIiwibWFpbiIsImgxIiwiaDIiLCJtYXAiLCJhbnN3ZXIiLCJmb290ZXIiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/quiz/page.tsx\n"));

/***/ })

});