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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _components_progressBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/progressBar */ \"(app-pages-browser)/./src/components/progressBar.tsx\");\n/* harmony import */ var _barrel_optimize_names_ChevronLeft_X_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronLeft,X!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-left.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronLeft_X_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronLeft,X!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/x.js\");\n/* harmony import */ var _ResultCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ResultCard */ \"(app-pages-browser)/./src/app/quiz/ResultCard.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst questions = [\n    {\n        questionText: \"What is React?\",\n        answers: [\n            {\n                answerText: \"A Library for building user faces\",\n                isCorrect: false,\n                id: 1\n            },\n            {\n                answerText: \"A Library for building user laptops\",\n                isCorrect: false,\n                id: 2\n            },\n            {\n                answerText: \"A Library for building user interfaces\",\n                isCorrect: true,\n                id: 3\n            },\n            {\n                answerText: \"A Library for building user cars\",\n                isCorrect: false,\n                id: 4\n            }\n        ]\n    },\n    {\n        questionText: \"What is HTML?\",\n        answers: [\n            {\n                answerText: \"Hyper Text Markup Language\",\n                isCorrect: true,\n                id: 1\n            },\n            {\n                answerText: \"Hypertext Markup Laptop\",\n                isCorrect: false,\n                id: 2\n            },\n            {\n                answerText: \"Hyper Tool Markup Language\",\n                isCorrect: false,\n                id: 3\n            },\n            {\n                answerText: \"Hyper Text Markup Laptop\",\n                isCorrect: false,\n                id: 4\n            }\n        ]\n    },\n    {\n        questionText: \"What is CSS?\",\n        answers: [\n            {\n                answerText: \"Cascading Style Sheets\",\n                isCorrect: true,\n                id: 1\n            },\n            {\n                answerText: \"Cascading Styling System\",\n                isCorrect: false,\n                id: 2\n            },\n            {\n                answerText: \"Cascading System Sheets\",\n                isCorrect: false,\n                id: 3\n            },\n            {\n                answerText: \"Cascading Style Software\",\n                isCorrect: false,\n                id: 4\n            }\n        ]\n    },\n    {\n        questionText: \"What is JavaScript?\",\n        answers: [\n            {\n                answerText: \"A programming language\",\n                isCorrect: true,\n                id: 1\n            },\n            {\n                answerText: \"A markup language\",\n                isCorrect: false,\n                id: 2\n            },\n            {\n                answerText: \"A styling language\",\n                isCorrect: false,\n                id: 3\n            },\n            {\n                answerText: \"A design language\",\n                isCorrect: false,\n                id: 4\n            }\n        ]\n    },\n    {\n        questionText: \"What is Node.js?\",\n        answers: [\n            {\n                answerText: \"A JavaScript runtime\",\n                isCorrect: true,\n                id: 1\n            },\n            {\n                answerText: \"A server-side language\",\n                isCorrect: false,\n                id: 2\n            },\n            {\n                answerText: \"A front-end framework\",\n                isCorrect: false,\n                id: 3\n            },\n            {\n                answerText: \"A database management system\",\n                isCorrect: false,\n                id: 4\n            }\n        ]\n    },\n    {\n        questionText: \"What is MongoDB?\",\n        answers: [\n            {\n                answerText: \"A NoSQL database\",\n                isCorrect: false,\n                id: 1\n            },\n            {\n                answerText: \"A relational database\",\n                isCorrect: true,\n                id: 2\n            },\n            {\n                answerText: \"A file storage system\",\n                isCorrect: false,\n                id: 3\n            },\n            {\n                answerText: \"A programming language\",\n                isCorrect: false,\n                id: 4\n            }\n        ]\n    }\n];\nfunction Home() {\n    var _questions_currentQuestion_answers_find;\n    _s();\n    const [started, setStarted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [currentQuestion, setCurrentQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [selectedAnswer, setSelectedAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isCorrect, setIsCorrect] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleNext = ()=>{\n        if (!started) {\n            setStarted(true);\n            return;\n        }\n        if (currentQuestion < questions.length - 1) {\n            setCurrentQuestion(currentQuestion + 1);\n        }\n        setSelectedAnswer(null);\n        setIsCorrect(null);\n    };\n    const handleAnswer = (answer)=>{\n        setSelectedAnswer(answer.id);\n        const isCurrentCorrect = answer.isCorrect;\n        if (isCurrentCorrect) {\n            setScore(score + 1);\n        }\n        setIsCorrect(isCurrentCorrect);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col flex-1\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"position-sticky top-0 z-10 shadow-md py-4 w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                    className: \"grid grid-cols-[auto,1fr,auto] grid-flow-col items-center justify-between gap-2 py-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            size: \"icon\",\n                            variant: \"outline\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronLeft_X_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                                lineNumber: 116,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                            lineNumber: 115,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_progressBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            value: currentQuestion / questions.length * 100\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                            lineNumber: 118,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            size: \"icon\",\n                            variant: \"outline\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronLeft_X_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                                lineNumber: 121,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                            lineNumber: 120,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                    lineNumber: 114,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex justify-center\",\n                children: !started ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl font-bold\",\n                    children: \"Welcome To The Quiz Page\"\n                }, void 0, false, {\n                    fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                    lineNumber: 127,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-3xl font-bold\",\n                            children: [\n                                questions[currentQuestion].questionText,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                            lineNumber: 130,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-1 gap-6 mt-6\",\n                            children: questions[currentQuestion].answers.map((answer)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                    variant: \"secondary\",\n                                    onClick: ()=>handleAnswer(answer),\n                                    children: answer.answerText\n                                }, answer.id, false, {\n                                    fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                                    lineNumber: 136,\n                                    columnNumber: 19\n                                }, this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                            lineNumber: 133,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                    lineNumber: 129,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                lineNumber: 125,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"footer pb-9 absolute bottom-0 mb-0 px-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ResultCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        isCorrect: isCorrect,\n                        correctAnswer: (_questions_currentQuestion_answers_find = questions[currentQuestion].answers.find((answer)=>answer.isCorrect === true)) === null || _questions_currentQuestion_answers_find === void 0 ? void 0 : _questions_currentQuestion_answers_find.answerText\n                    }, void 0, false, {\n                        fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                        lineNumber: 150,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        vari: true,\n                        onClick: handleNext,\n                        children: !started ? \"Start\" : \"Next\"\n                    }, void 0, false, {\n                        fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                        lineNumber: 158,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n                lineNumber: 149,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/apple/Documents/GitHub/quiz_ai/src/app/quiz/page.tsx\",\n        lineNumber: 112,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"Hgs5URJj6REHRR7YgSbe65i7gjI=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcXVpei9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNpQztBQUNlO0FBQ0c7QUFDTDtBQUNSO0FBRXRDLE1BQU1NLFlBQVk7SUFDaEI7UUFDRUMsY0FBYztRQUNkQyxTQUFTO1lBQ1A7Z0JBQ0VDLFlBQVk7Z0JBQ1pDLFdBQVc7Z0JBQ1hDLElBQUk7WUFDTjtZQUNBO2dCQUNFRixZQUFZO2dCQUNaQyxXQUFXO2dCQUNYQyxJQUFJO1lBQ047WUFDQTtnQkFDRUYsWUFBWTtnQkFDWkMsV0FBVztnQkFDWEMsSUFBSTtZQUNOO1lBQ0E7Z0JBQ0VGLFlBQVk7Z0JBQ1pDLFdBQVc7Z0JBQ1hDLElBQUk7WUFDTjtTQUNEO0lBQ0g7SUFDQTtRQUNFSixjQUFjO1FBQ2RDLFNBQVM7WUFDUDtnQkFBRUMsWUFBWTtnQkFBOEJDLFdBQVc7Z0JBQU1DLElBQUk7WUFBRTtZQUNuRTtnQkFBRUYsWUFBWTtnQkFBMkJDLFdBQVc7Z0JBQU9DLElBQUk7WUFBRTtZQUNqRTtnQkFBRUYsWUFBWTtnQkFBOEJDLFdBQVc7Z0JBQU9DLElBQUk7WUFBRTtZQUNwRTtnQkFBRUYsWUFBWTtnQkFBNEJDLFdBQVc7Z0JBQU9DLElBQUk7WUFBRTtTQUNuRTtJQUNIO0lBQ0E7UUFDRUosY0FBYztRQUNkQyxTQUFTO1lBQ1A7Z0JBQUVDLFlBQVk7Z0JBQTBCQyxXQUFXO2dCQUFNQyxJQUFJO1lBQUU7WUFDL0Q7Z0JBQUVGLFlBQVk7Z0JBQTRCQyxXQUFXO2dCQUFPQyxJQUFJO1lBQUU7WUFDbEU7Z0JBQUVGLFlBQVk7Z0JBQTJCQyxXQUFXO2dCQUFPQyxJQUFJO1lBQUU7WUFDakU7Z0JBQUVGLFlBQVk7Z0JBQTRCQyxXQUFXO2dCQUFPQyxJQUFJO1lBQUU7U0FDbkU7SUFDSDtJQUNBO1FBQ0VKLGNBQWM7UUFDZEMsU0FBUztZQUNQO2dCQUFFQyxZQUFZO2dCQUEwQkMsV0FBVztnQkFBTUMsSUFBSTtZQUFFO1lBQy9EO2dCQUFF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OzhDQUUzQkEsT0FBT2hCLFVBQVU7bUNBSmJnQixPQUFPZCxFQUFFOzs7Ozs0QkFPcEI7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtSLDhEQUFDMkI7Z0JBQU9WLFdBQVU7O2tDQUNoQiw4REFBQ3ZCLG1EQUFVQTt3QkFDVEssV0FBV0E7d0JBQ1g2QixhQUFhLEdBQ1hqQywwQ0FBQUEsU0FBUyxDQUFDUyxnQkFBZ0IsQ0FBQ1AsT0FBTyxDQUFDZ0MsSUFBSSxDQUNyQyxDQUFDZixTQUFXQSxPQUFPZixTQUFTLEtBQUssbUJBRG5DSiw4REFBQUEsd0NBRUdHLFVBQVU7Ozs7OztrQ0FHakIsOERBQUNSLHlEQUFNQTt3QkFBQ3dDLElBQUk7d0JBQUNKLFNBQVNmO2tDQUFhLENBQUNULFVBQVUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWhFO0dBakZ3QkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9xdWl6L3BhZ2UudHN4P2M2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFwiQC9jb21wb25lbnRzL3Byb2dyZXNzQmFyXCI7XG5pbXBvcnQgeyBDaGV2cm9uTGVmdCwgWCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCBSZXN1bHRDYXJkIGZyb20gXCIuL1Jlc3VsdENhcmRcIjtcblxuY29uc3QgcXVlc3Rpb25zID0gW1xuICB7XG4gICAgcXVlc3Rpb25UZXh0OiBcIldoYXQgaXMgUmVhY3Q/XCIsXG4gICAgYW5zd2VyczogW1xuICAgICAge1xuICAgICAgICBhbnN3ZXJUZXh0OiBcIkEgTGlicmFyeSBmb3IgYnVpbGRpbmcgdXNlciBmYWNlc1wiLFxuICAgICAgICBpc0NvcnJlY3Q6IGZhbHNlLFxuICAgICAgICBpZDogMSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGFuc3dlclRleHQ6IFwiQSBMaWJyYXJ5IGZvciBidWlsZGluZyB1c2VyIGxhcHRvcHNcIixcbiAgICAgICAgaXNDb3JyZWN0OiBmYWxzZSxcbiAgICAgICAgaWQ6IDIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBhbnN3ZXJUZXh0OiBcIkEgTGlicmFyeSBmb3IgYnVpbGRpbmcgdXNlciBpbnRlcmZhY2VzXCIsXG4gICAgICAgIGlzQ29ycmVjdDogdHJ1ZSxcbiAgICAgICAgaWQ6IDMsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBhbnN3ZXJUZXh0OiBcIkEgTGlicmFyeSBmb3IgYnVpbGRpbmcgdXNlciBjYXJzXCIsXG4gICAgICAgIGlzQ29ycmVjdDogZmFsc2UsXG4gICAgICAgIGlkOiA0LFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgcXVlc3Rpb25UZXh0OiBcIldoYXQgaXMgSFRNTD9cIixcbiAgICBhbnN3ZXJzOiBbXG4gICAgICB7IGFuc3dlclRleHQ6IFwiSHlwZXIgVGV4dCBNYXJrdXAgTGFuZ3VhZ2VcIiwgaXNDb3JyZWN0OiB0cnVlLCBpZDogMSB9LFxuICAgICAgeyBhbnN3ZXJUZXh0OiBcIkh5cGVydGV4dCBNYXJrdXAgTGFwdG9wXCIsIGlzQ29ycmVjdDogZmFsc2UsIGlkOiAyIH0sXG4gICAgICB7IGFuc3dlclRleHQ6IFwiSHlwZXIgVG9vbCBNYXJrdXAgTGFuZ3VhZ2VcIiwgaXNDb3JyZWN0OiBmYWxzZSwgaWQ6IDMgfSxcbiAgICAgIHsgYW5zd2VyVGV4dDogXCJIeXBlciBUZXh0IE1hcmt1cCBMYXB0b3BcIiwgaXNDb3JyZWN0OiBmYWxzZSwgaWQ6IDQgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgcXVlc3Rpb25UZXh0OiBcIldoYXQgaXMgQ1NTP1wiLFxuICAgIGFuc3dlcnM6IFtcbiAgICAgIHsgYW5zd2VyVGV4dDogXCJDYXNjYWRpbmcgU3R5bGUgU2hlZXRzXCIsIGlzQ29ycmVjdDogdHJ1ZSwgaWQ6IDEgfSxcbiAgICAgIHsgYW5zd2VyVGV4dDogXCJDYXNjYWRpbmcgU3R5bGluZyBTeXN0ZW1cIiwgaXNDb3JyZWN0OiBmYWxzZSwgaWQ6IDIgfSxcbiAgICAgIHsgYW5zd2VyVGV4dDogXCJDYXNjYWRpbmcgU3lzdGVtIFNoZWV0c1wiLCBpc0NvcnJlY3Q6IGZhbHNlLCBpZDogMyB9LFxuICAgICAgeyBhbnN3ZXJUZXh0OiBcIkNhc2NhZGluZyBTdHlsZSBTb2Z0d2FyZVwiLCBpc0NvcnJlY3Q6IGZhbHNlLCBpZDogNCB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBxdWVzdGlvblRleHQ6IFwiV2hhdCBpcyBKYXZhU2NyaXB0P1wiLFxuICAgIGFuc3dlcnM6IFtcbiAgICAgIHsgYW5zd2VyVGV4dDogXCJBIHByb2dyYW1taW5nIGxhbmd1YWdlXCIsIGlzQ29ycmVjdDogdHJ1ZSwgaWQ6IDEgfSxcbiAgICAgIHsgYW5zd2VyVGV4dDogXCJBIG1hcmt1cCBsYW5ndWFnZVwiLCBpc0NvcnJlY3Q6IGZhbHNlLCBpZDogMiB9LFxuICAgICAgeyBhbnN3ZXJUZXh0OiBcIkEgc3R5bGluZyBsYW5ndWFnZVwiLCBpc0NvcnJlY3Q6IGZhbHNlLCBpZDogMyB9LFxuICAgICAgeyBhbnN3ZXJUZXh0OiBcIkEgZGVzaWduIGxhbmd1YWdlXCIsIGlzQ29ycmVjdDogZmFsc2UsIGlkOiA0IH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHF1ZXN0aW9uVGV4dDogXCJXaGF0IGlzIE5vZGUuanM/XCIsXG4gICAgYW5zd2VyczogW1xuICAgICAgeyBhbnN3ZXJUZXh0OiBcIkEgSmF2YVNjcmlwdCBydW50aW1lXCIsIGlzQ29ycmVjdDogdHJ1ZSwgaWQ6IDEgfSxcbiAgICAgIHsgYW5zd2VyVGV4dDogXCJBIHNlcnZlci1zaWRlIGxhbmd1YWdlXCIsIGlzQ29ycmVjdDogZmFsc2UsIGlkOiAyIH0sXG4gICAgICB7IGFuc3dlclRleHQ6IFwiQSBmcm9udC1lbmQgZnJhbWV3b3JrXCIsIGlzQ29ycmVjdDogZmFsc2UsIGlkOiAzIH0sXG4gICAgICB7IGFuc3dlclRleHQ6IFwiQSBkYXRhYmFzZSBtYW5hZ2VtZW50IHN5c3RlbVwiLCBpc0NvcnJlY3Q6IGZhbHNlLCBpZDogNCB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBxdWVzdGlvblRleHQ6IFwiV2hhdCBpcyBNb25nb0RCP1wiLFxuICAgIGFuc3dlcnM6IFtcbiAgICAgIHsgYW5zd2VyVGV4dDogXCJBIE5vU1FMIGRhdGFiYXNlXCIsIGlzQ29ycmVjdDogZmFsc2UsIGlkOiAxIH0sXG4gICAgICB7IGFuc3dlclRleHQ6IFwiQSByZWxhdGlvbmFsIGRhdGFiYXNlXCIsIGlzQ29ycmVjdDogdHJ1ZSwgaWQ6IDIgfSxcbiAgICAgIHsgYW5zd2VyVGV4dDogXCJBIGZpbGUgc3RvcmFnZSBzeXN0ZW1cIiwgaXNDb3JyZWN0OiBmYWxzZSwgaWQ6IDMgfSxcbiAgICAgIHsgYW5zd2VyVGV4dDogXCJBIHByb2dyYW1taW5nIGxhbmd1YWdlXCIsIGlzQ29ycmVjdDogZmFsc2UsIGlkOiA0IH0sXG4gICAgXSxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtzdGFydGVkLCBzZXRTdGFydGVkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW2N1cnJlbnRRdWVzdGlvbiwgc2V0Q3VycmVudFF1ZXN0aW9uXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG4gIGNvbnN0IFtzY29yZSwgc2V0U2NvcmVdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcbiAgY29uc3QgW3NlbGVjdGVkQW5zd2VyLCBzZXRTZWxlY3RlZEFuc3dlcl0gPSB1c2VTdGF0ZTxudW1iZXIgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2lzQ29ycmVjdCwgc2V0SXNDb3JyZWN0XSA9IHVzZVN0YXRlPGJvb2xlYW4gfCBudWxsPihudWxsKTtcblxuICBjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4ge1xuICAgIGlmICghc3RhcnRlZCkge1xuICAgICAgc2V0U3RhcnRlZCh0cnVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY3VycmVudFF1ZXN0aW9uIDwgcXVlc3Rpb25zLmxlbmd0aCAtIDEpIHtcbiAgICAgIHNldEN1cnJlbnRRdWVzdGlvbihjdXJyZW50UXVlc3Rpb24gKyAxKTtcbiAgICB9XG5cbiAgICBzZXRTZWxlY3RlZEFuc3dlcihudWxsKTtcbiAgICBzZXRJc0NvcnJlY3QobnVsbCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQW5zd2VyID0gKGFuc3dlcikgPT4ge1xuICAgIHNldFNlbGVjdGVkQW5zd2VyKGFuc3dlci5pZCk7XG4gICAgY29uc3QgaXNDdXJyZW50Q29ycmVjdCA9IGFuc3dlci5pc0NvcnJlY3Q7XG4gICAgaWYgKGlzQ3VycmVudENvcnJlY3QpIHtcbiAgICAgIHNldFNjb3JlKHNjb3JlICsgMSk7XG4gICAgfVxuICAgIHNldElzQ29ycmVjdChpc0N1cnJlbnRDb3JyZWN0KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBmbGV4LTFcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tc3RpY2t5IHRvcC0wIHotMTAgc2hhZG93LW1kIHB5LTQgdy1mdWxsXCI+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtW2F1dG8sMWZyLGF1dG9dIGdyaWQtZmxvdy1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtMiBweS0yXCI+XG4gICAgICAgICAgPEJ1dHRvbiBzaXplPVwiaWNvblwiIHZhcmlhbnQ9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICA8Q2hldnJvbkxlZnQgLz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8UHJvZ3Jlc3NCYXIgdmFsdWU9eyhjdXJyZW50UXVlc3Rpb24gLyBxdWVzdGlvbnMubGVuZ3RoKSAqIDEwMH0gLz5cblxuICAgICAgICAgIDxCdXR0b24gc2l6ZT1cImljb25cIiB2YXJpYW50PVwib3V0bGluZVwiPlxuICAgICAgICAgICAgPFggLz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgeyFzdGFydGVkID8gKFxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGRcIj5XZWxjb21lIFRvIFRoZSBRdWl6IFBhZ2U8L2gxPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgIHtxdWVzdGlvbnNbY3VycmVudFF1ZXN0aW9uXS5xdWVzdGlvblRleHR9e1wiIFwifVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAtNiBtdC02XCI+XG4gICAgICAgICAgICAgIHtxdWVzdGlvbnNbY3VycmVudFF1ZXN0aW9uXS5hbnN3ZXJzLm1hcCgoYW5zd2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAga2V5PXthbnN3ZXIuaWR9XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9e1wic2Vjb25kYXJ5XCJ9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFuc3dlcihhbnN3ZXIpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7YW5zd2VyLmFuc3dlclRleHR9XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9tYWluPlxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJmb290ZXIgcGItOSBhYnNvbHV0ZSBib3R0b20tMCBtYi0wIHB4LTZcIj5cbiAgICAgICAgPFJlc3VsdENhcmRcbiAgICAgICAgICBpc0NvcnJlY3Q9e2lzQ29ycmVjdH1cbiAgICAgICAgICBjb3JyZWN0QW5zd2VyPXtcbiAgICAgICAgICAgIHF1ZXN0aW9uc1tjdXJyZW50UXVlc3Rpb25dLmFuc3dlcnMuZmluZChcbiAgICAgICAgICAgICAgKGFuc3dlcikgPT4gYW5zd2VyLmlzQ29ycmVjdCA9PT0gdHJ1ZVxuICAgICAgICAgICAgKT8uYW5zd2VyVGV4dFxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgICAgPEJ1dHRvbiB2YXJpIG9uQ2xpY2s9e2hhbmRsZU5leHR9Pnshc3RhcnRlZCA/IFwiU3RhcnRcIiA6IFwiTmV4dFwifTwvQnV0dG9uPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJCdXR0b24iLCJQcm9ncmVzc0JhciIsIkNoZXZyb25MZWZ0IiwiWCIsIlJlc3VsdENhcmQiLCJxdWVzdGlvbnMiLCJxdWVzdGlvblRleHQiLCJhbnN3ZXJzIiwiYW5zd2VyVGV4dCIsImlzQ29ycmVjdCIsImlkIiwiSG9tZSIsInN0YXJ0ZWQiLCJzZXRTdGFydGVkIiwiY3VycmVudFF1ZXN0aW9uIiwic2V0Q3VycmVudFF1ZXN0aW9uIiwic2NvcmUiLCJzZXRTY29yZSIsInNlbGVjdGVkQW5zd2VyIiwic2V0U2VsZWN0ZWRBbnN3ZXIiLCJzZXRJc0NvcnJlY3QiLCJoYW5kbGVOZXh0IiwibGVuZ3RoIiwiaGFuZGxlQW5zd2VyIiwiYW5zd2VyIiwiaXNDdXJyZW50Q29ycmVjdCIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsInNpemUiLCJ2YXJpYW50IiwidmFsdWUiLCJtYWluIiwiaDEiLCJoMiIsIm1hcCIsIm9uQ2xpY2siLCJmb290ZXIiLCJjb3JyZWN0QW5zd2VyIiwiZmluZCIsInZhcmkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/quiz/page.tsx\n"));

/***/ })

});