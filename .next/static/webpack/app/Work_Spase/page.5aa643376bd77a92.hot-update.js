"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Work_Spase/page",{

/***/ "(app-pages-browser)/./app/Work_Spase/work_spase.tsx":
/*!***************************************!*\
  !*** ./app/Work_Spase/work_spase.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ElementContext: function() { return /* binding */ ElementContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _workSpas_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./workSpas.css */ \"(app-pages-browser)/./app/Work_Spase/workSpas.css\");\n/* harmony import */ var _CreatEle_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CreatEle.css */ \"(app-pages-browser)/./app/Work_Spase/CreatEle.css\");\n/* harmony import */ var _Components_stopWatch_stopWatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/stopWatch/stopWatch */ \"(app-pages-browser)/./app/Components/stopWatch/stopWatch.jsx\");\n/* harmony import */ var _Components_Note_Note__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/Note/Note */ \"(app-pages-browser)/./app/Components/Note/Note.jsx\");\n/* harmony import */ var _Components_To_Do_List_ToDoList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/To-Do-List/ToDoList */ \"(app-pages-browser)/./app/Components/To-Do-List/ToDoList.jsx\");\n/* harmony import */ var _helper_DragDrop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helper/DragDrop */ \"(app-pages-browser)/./app/helper/DragDrop.jsx\");\n/* harmony import */ var _Components_Timer_Timer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Components/Timer/Timer */ \"(app-pages-browser)/./app/Components/Timer/Timer.jsx\");\n/* __next_internal_client_entry_do_not_use__ ElementContext,default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst ElementContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    ele: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n    num: 0\n});\nconst WorkSpase = ()=>{\n    _s();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"none\");\n    const [components, setComponents] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleOpen = ()=>{\n        setOpen((prevOpen)=>prevOpen === \"none\" ? \"flex\" : \"none\");\n    };\n    const handleOpt = (e)=>{\n        const option = e.currentTarget.innerHTML;\n        let component = null;\n        switch(option){\n            case \"Stopwatch\":\n                component = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_stopWatch_stopWatch__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ali Elsisi\\\\Desktop\\\\Ali Elsisi\\\\Task_Manger\\\\app\\\\Work_Spase\\\\work_spase.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 21\n                }, undefined);\n                break;\n            case \"Quick note\":\n                component = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Note_Note__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ali Elsisi\\\\Desktop\\\\Ali Elsisi\\\\Task_Manger\\\\app\\\\Work_Spase\\\\work_spase.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 21\n                }, undefined);\n                break;\n            case \"To Do List\":\n                component = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_To_Do_List_ToDoList__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ali Elsisi\\\\Desktop\\\\Ali Elsisi\\\\Task_Manger\\\\app\\\\Work_Spase\\\\work_spase.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 21\n                }, undefined);\n                break;\n            case \"Timer\":\n                component = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Timer_Timer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ali Elsisi\\\\Desktop\\\\Ali Elsisi\\\\Task_Manger\\\\app\\\\Work_Spase\\\\work_spase.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 21\n                }, undefined);\n                break;\n            default:\n                break;\n        }\n        if (component) {\n            setComponents((prevComponents)=>[\n                    ...prevComponents,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ElementContext.Provider, {\n                        value: {\n                            ele: component,\n                            num: prevComponents.length\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_helper_DragDrop__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Ali Elsisi\\\\Desktop\\\\Ali Elsisi\\\\Task_Manger\\\\app\\\\Work_Spase\\\\work_spase.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, undefined)\n                    }, prevComponents.length, false, {\n                        fileName: \"C:\\\\Users\\\\Ali Elsisi\\\\Desktop\\\\Ali Elsisi\\\\Task_Manger\\\\app\\\\Work_Spase\\\\work_spase.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined)\n                ]);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"work\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"new-Component\",\n                children: components\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ali Elsisi\\\\Desktop\\\\Ali Elsisi\\\\Task_Manger\\\\app\\\\Work_Spase\\\\work_spase.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"contOpt\",\n                style: {\n                    margin: \"10px\",\n                    border: \"solid 1px\",\n                    minWidth: \"10%\",\n                    position: \"fixed\",\n                    bottom: \"25vh\",\n                    right: \"20px\",\n                    textAlign: \"center\",\n                    zIndex: 2,\n                    backgroundColor: \"hsla(0, 0%, 0%, 0.8)\",\n                    color: \"hsl(223, 47%, 47%)\",\n                    borderRadius: \"10px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(motion.div, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ali Elsisi\\\\Desktop\\\\Ali Elsisi\\\\Task_Manger\\\\app\\\\Work_Spase\\\\work_spase.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        style: {\n                            margin: \"5px\",\n                            display: open,\n                            justifyContent: \"center\",\n                            alignItems: \"center\",\n                            flexDirection: \"column\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                onClick: handleOpt,\n                                children: \"Stopwatch\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ali Elsisi\\\\Desktop\\\\Ali Elsisi\\\\Task_Manger\\\\app\\\\Work_Spase\\\\work_spase.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                onClick: handleOpt,\n                                children: \"Quick note\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ali Elsisi\\\\Desktop\\\\Ali Elsisi\\\\Task_Manger\\\\app\\\\Work_Spase\\\\work_spase.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                onClick: handleOpt,\n                                children: \"To Do List\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ali Elsisi\\\\Desktop\\\\Ali Elsisi\\\\Task_Manger\\\\app\\\\Work_Spase\\\\work_spase.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                onClick: handleOpt,\n                                children: \"Timer\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ali Elsisi\\\\Desktop\\\\Ali Elsisi\\\\Task_Manger\\\\app\\\\Work_Spase\\\\work_spase.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Ali Elsisi\\\\Desktop\\\\Ali Elsisi\\\\Task_Manger\\\\app\\\\Work_Spase\\\\work_spase.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleOpen,\n                        style: {\n                            border: \"solid 1px\",\n                            width: \"20px\",\n                            height: \"20px\"\n                        },\n                        children: \"^\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ali Elsisi\\\\Desktop\\\\Ali Elsisi\\\\Task_Manger\\\\app\\\\Work_Spase\\\\work_spase.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Ali Elsisi\\\\Desktop\\\\Ali Elsisi\\\\Task_Manger\\\\app\\\\Work_Spase\\\\work_spase.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Ali Elsisi\\\\Desktop\\\\Ali Elsisi\\\\Task_Manger\\\\app\\\\Work_Spase\\\\work_spase.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, undefined);\n};\n_s(WorkSpase, \"Lh5Ak6b0CWJ4mx/ETfXcX8ObEn4=\");\n_c = WorkSpase;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WorkSpase);\nvar _c;\n$RefreshReg$(_c, \"WorkSpase\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Xb3JrX1NwYXNlL3dvcmtfc3Bhc2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDdUQ7QUFDL0I7QUFDQTtBQUNrQztBQUNmO0FBQ2M7QUFDTDtBQUNOO0FBQ3ZDLE1BQU1RLCtCQUFpQk4sb0RBQWFBLENBQUM7SUFBRU8sbUJBQUs7SUFBT0MsS0FBSztBQUFFLEdBQUc7QUFDcEUsTUFBTUMsWUFBc0I7O0lBQzFCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNhLFlBQVlDLGNBQWMsR0FBR2QsK0NBQVFBLENBQWdCLEVBQUU7SUFFOUQsTUFBTWUsYUFBYTtRQUNqQkgsUUFBUSxDQUFDSSxXQUFjQSxhQUFhLFNBQVMsU0FBUztJQUN4RDtJQUVBLE1BQU1DLFlBQVksQ0FBQ0M7UUFDakIsTUFBTUMsU0FBU0QsRUFBRUUsYUFBYSxDQUFDQyxTQUFTO1FBRXhDLElBQUlDLFlBQVk7UUFDaEIsT0FBUUg7WUFDTixLQUFLO2dCQUNIRywwQkFBWSw4REFBQ3BCLHVFQUFTQTs7Ozs7Z0JBQ3RCO1lBQ0YsS0FBSztnQkFDSG9CLDBCQUFZLDhEQUFDbkIsNkRBQUlBOzs7OztnQkFDakI7WUFDRixLQUFLO2dCQUNIbUIsMEJBQVksOERBQUNsQix1RUFBUUE7Ozs7O2dCQUNyQjtZQUNGLEtBQUs7Z0JBQ0hrQiwwQkFBWSw4REFBQ2hCLCtEQUFLQTs7Ozs7Z0JBQ2xCO1lBQ0Y7Z0JBQ0U7UUFDSjtRQUVBLElBQUlnQixXQUFXO1lBQ2JSLGNBQWMsQ0FBQ1MsaUJBQW1CO3VCQUM3QkE7a0NBQ0gsOERBQUNoQixlQUFlaUIsUUFBUTt3QkFDdEJDLE9BQU87NEJBQUVqQixLQUFLYzs0QkFBV2IsS0FBS2MsZUFBZUcsTUFBTTt3QkFBQztrQ0FHcEQsNEVBQUNyQix3REFBa0JBOzs7Ozt1QkFGZGtCLGVBQWVHLE1BQU07Ozs7O2lCQUk3QjtRQUNIO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUFpQmY7Ozs7OzswQkFDaEMsOERBQUNjO2dCQUNDQyxXQUFVO2dCQUNWQyxPQUFPO29CQUNMQyxRQUFRO29CQUNSQyxRQUFRO29CQUNSQyxVQUFVO29CQUNWQyxVQUFVO29CQUNWQyxRQUFRO29CQUNSQyxPQUFPO29CQUNQQyxXQUFXO29CQUNYQyxRQUFRO29CQUNSQyxpQkFBaUI7b0JBQ2pCQyxPQUFPO29CQUNQQyxjQUFjO2dCQUNoQjs7a0NBRUEsOERBQUNDLE9BQU9kLEdBQUc7Ozs7O2tDQUNYLDhEQUFDZTt3QkFDQ2IsT0FBTzs0QkFDTEMsUUFBUTs0QkFDUmEsU0FBU2hDOzRCQUNUaUMsZ0JBQWdCOzRCQUNoQkMsWUFBWTs0QkFDWkMsZUFBZTt3QkFDakI7OzBDQUVBLDhEQUFDQztnQ0FBR0MsU0FBUy9COzBDQUFXOzs7Ozs7MENBQ3hCLDhEQUFDOEI7Z0NBQUdDLFNBQVMvQjswQ0FBVzs7Ozs7OzBDQUN4Qiw4REFBQzhCO2dDQUFHQyxTQUFTL0I7MENBQVc7Ozs7OzswQ0FDeEIsOERBQUM4QjtnQ0FBR0MsU0FBUy9COzBDQUFXOzs7Ozs7Ozs7Ozs7a0NBRTFCLDhEQUFDZ0M7d0JBQ0NELFNBQVNqQzt3QkFDVGMsT0FBTzs0QkFBRUUsUUFBUTs0QkFBYW1CLE9BQU87NEJBQVFDLFFBQVE7d0JBQU87a0NBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVDtHQXJGTXpDO0tBQUFBO0FBdUZOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9Xb3JrX1NwYXNlL3dvcmtfc3Bhc2UudHN4P2M4YmEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgXCIuL3dvcmtTcGFzLmNzc1wiO1xyXG5pbXBvcnQgXCIuL0NyZWF0RWxlLmNzc1wiO1xyXG5pbXBvcnQgU3RvcFdhdGNoIGZyb20gXCIuLi9Db21wb25lbnRzL3N0b3BXYXRjaC9zdG9wV2F0Y2hcIjtcclxuaW1wb3J0IE5vdGUgZnJvbSBcIi4uL0NvbXBvbmVudHMvTm90ZS9Ob3RlXCI7XHJcbmltcG9ydCBUb0RvTGlzdCBmcm9tIFwiLi4vQ29tcG9uZW50cy9Uby1Eby1MaXN0L1RvRG9MaXN0XCI7XHJcbmltcG9ydCBEcmFnZ2FibGVDb250YWluZXIgZnJvbSBcIi4uL2hlbHBlci9EcmFnRHJvcFwiO1xyXG5pbXBvcnQgVGltZXIgZnJvbSBcIi4uL0NvbXBvbmVudHMvVGltZXIvVGltZXJcIjtcclxuZXhwb3J0IGNvbnN0IEVsZW1lbnRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7IGVsZTogPD48Lz4sIG51bTogMCB9KTtcclxuY29uc3QgV29ya1NwYXNlOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShcIm5vbmVcIik7XHJcbiAgY29uc3QgW2NvbXBvbmVudHMsIHNldENvbXBvbmVudHNdID0gdXNlU3RhdGU8SlNYLkVsZW1lbnRbXT4oW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbigocHJldk9wZW4pID0+IChwcmV2T3BlbiA9PT0gXCJub25lXCIgPyBcImZsZXhcIiA6IFwibm9uZVwiKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3B0ID0gKGU6IHsgY3VycmVudFRhcmdldDogeyBpbm5lckhUTUw6IGFueSB9IH0pID0+IHtcclxuICAgIGNvbnN0IG9wdGlvbiA9IGUuY3VycmVudFRhcmdldC5pbm5lckhUTUw7XHJcblxyXG4gICAgbGV0IGNvbXBvbmVudCA9IG51bGw7XHJcbiAgICBzd2l0Y2ggKG9wdGlvbikge1xyXG4gICAgICBjYXNlIFwiU3RvcHdhdGNoXCI6XHJcbiAgICAgICAgY29tcG9uZW50ID0gPFN0b3BXYXRjaCAvPjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIlF1aWNrIG5vdGVcIjpcclxuICAgICAgICBjb21wb25lbnQgPSA8Tm90ZSAvPjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIlRvIERvIExpc3RcIjpcclxuICAgICAgICBjb21wb25lbnQgPSA8VG9Eb0xpc3QgLz47XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJUaW1lclwiOlxyXG4gICAgICAgIGNvbXBvbmVudCA9IDxUaW1lciAvPjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY29tcG9uZW50KSB7XHJcbiAgICAgIHNldENvbXBvbmVudHMoKHByZXZDb21wb25lbnRzKSA9PiBbXHJcbiAgICAgICAgLi4ucHJldkNvbXBvbmVudHMsXHJcbiAgICAgICAgPEVsZW1lbnRDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgICAgICB2YWx1ZT17eyBlbGU6IGNvbXBvbmVudCwgbnVtOiBwcmV2Q29tcG9uZW50cy5sZW5ndGggfX1cclxuICAgICAgICAgIGtleT17cHJldkNvbXBvbmVudHMubGVuZ3RofVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxEcmFnZ2FibGVDb250YWluZXIgLz5cclxuICAgICAgICA8L0VsZW1lbnRDb250ZXh0LlByb3ZpZGVyPixcclxuICAgICAgXSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwid29ya1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ldy1Db21wb25lbnRcIj57Y29tcG9uZW50c308L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImNvbnRPcHRcIlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBtYXJnaW46IFwiMTBweFwiLFxyXG4gICAgICAgICAgYm9yZGVyOiBcInNvbGlkIDFweFwiLFxyXG4gICAgICAgICAgbWluV2lkdGg6IFwiMTAlXCIsXHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gICAgICAgICAgYm90dG9tOiBcIjI1dmhcIixcclxuICAgICAgICAgIHJpZ2h0OiBcIjIwcHhcIixcclxuICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgIHpJbmRleDogMixcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJoc2xhKDAsIDAlLCAwJSwgMC44KVwiLFxyXG4gICAgICAgICAgY29sb3I6IFwiaHNsKDIyMywgNDclLCA0NyUpXCIsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8bW90aW9uLmRpdj48L21vdGlvbi5kaXY+XHJcbiAgICAgICAgPHVsXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBtYXJnaW46IFwiNXB4XCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG9wZW4sXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8bGkgb25DbGljaz17aGFuZGxlT3B0fT5TdG9wd2F0Y2g8L2xpPlxyXG4gICAgICAgICAgPGxpIG9uQ2xpY2s9e2hhbmRsZU9wdH0+UXVpY2sgbm90ZTwvbGk+XHJcbiAgICAgICAgICA8bGkgb25DbGljaz17aGFuZGxlT3B0fT5UbyBEbyBMaXN0PC9saT5cclxuICAgICAgICAgIDxsaSBvbkNsaWNrPXtoYW5kbGVPcHR9PlRpbWVyPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU9wZW59XHJcbiAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwic29saWQgMXB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgaGVpZ2h0OiBcIjIwcHhcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIF5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV29ya1NwYXNlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZUNvbnRleHQiLCJTdG9wV2F0Y2giLCJOb3RlIiwiVG9Eb0xpc3QiLCJEcmFnZ2FibGVDb250YWluZXIiLCJUaW1lciIsIkVsZW1lbnRDb250ZXh0IiwiZWxlIiwibnVtIiwiV29ya1NwYXNlIiwib3BlbiIsInNldE9wZW4iLCJjb21wb25lbnRzIiwic2V0Q29tcG9uZW50cyIsImhhbmRsZU9wZW4iLCJwcmV2T3BlbiIsImhhbmRsZU9wdCIsImUiLCJvcHRpb24iLCJjdXJyZW50VGFyZ2V0IiwiaW5uZXJIVE1MIiwiY29tcG9uZW50IiwicHJldkNvbXBvbmVudHMiLCJQcm92aWRlciIsInZhbHVlIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJtYXJnaW4iLCJib3JkZXIiLCJtaW5XaWR0aCIsInBvc2l0aW9uIiwiYm90dG9tIiwicmlnaHQiLCJ0ZXh0QWxpZ24iLCJ6SW5kZXgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJvcmRlclJhZGl1cyIsIm1vdGlvbiIsInVsIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJsaSIsIm9uQ2xpY2siLCJidXR0b24iLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Work_Spase/work_spase.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/helper/DragDrop.jsx":
/*!*********************************!*\
  !*** ./app/helper/DragDrop.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DraggableContainer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var _Dreg_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dreg.css */ \"(app-pages-browser)/./app/helper/Dreg.css\");\n/* harmony import */ var _Work_Spase_work_spase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Work_Spase/work_spase */ \"(app-pages-browser)/./app/Work_Spase/work_spase.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction DraggableContainer() {\n    _s();\n    let ele = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Work_Spase_work_spase__WEBPACK_IMPORTED_MODULE_3__.ElementContext);\n    const handleClose = (event)=>{\n        const container = event.target.closest(\".conteiner\");\n        if (container) {\n            container.remove();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n            className: \"conteiner\",\n            drag: true,\n            dragMomentum: false,\n            style: {\n                position: \"relative\",\n                cursor: \"grab\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"close-note\",\n                    onClick: handleClose,\n                    children: \"X\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ali Elsisi\\\\Desktop\\\\Ali Elsisi\\\\Task_Manger\\\\app\\\\helper\\\\DragDrop.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this),\n                ele.ele\n            ]\n        }, ele.num, true, {\n            fileName: \"C:\\\\Users\\\\Ali Elsisi\\\\Desktop\\\\Ali Elsisi\\\\Task_Manger\\\\app\\\\helper\\\\DragDrop.jsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(DraggableContainer, \"FsN3BJ/MXvWz0ayrFXiO0+aFviE=\");\n_c = DraggableContainer;\nvar _c;\n$RefreshReg$(_c, \"DraggableContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9oZWxwZXIvRHJhZ0Ryb3AuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUMwQztBQUNIO0FBQ25CO0FBQ3NDO0FBRTNDLFNBQVNJOztJQUN0QixJQUFJQyxNQUFNSixpREFBVUEsQ0FBQ0Usa0VBQWNBO0lBRW5DLE1BQU1HLGNBQWMsQ0FBQ0M7UUFDbkIsTUFBTUMsWUFBWUQsTUFBTUUsTUFBTSxDQUFDQyxPQUFPLENBQUM7UUFDdkMsSUFBSUYsV0FBVztZQUNiQSxVQUFVRyxNQUFNO1FBQ2xCO0lBQ0Y7SUFFQSxxQkFDRTtrQkFDRSw0RUFBQ1QsaURBQU1BLENBQUNVLEdBQUc7WUFFVEMsV0FBVTtZQUNWQyxJQUFJO1lBQ0pDLGNBQWM7WUFDZEMsT0FBTztnQkFDTEMsVUFBVTtnQkFDVkMsUUFBUTtZQUNWOzs4QkFFQSw4REFBQ0M7b0JBQU9OLFdBQVU7b0JBQWFPLFNBQVNkOzhCQUFhOzs7Ozs7Z0JBR3BERCxJQUFJQSxHQUFHOztXQVpIQSxJQUFJZ0IsR0FBRzs7Ozs7O0FBZ0JwQjtHQTdCd0JqQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvaGVscGVyL0RyYWdEcm9wLmpzeD85NzY1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgXCIuL0RyZWcuY3NzXCI7XHJcbmltcG9ydCB7IEVsZW1lbnRDb250ZXh0IH0gZnJvbSBcIi4uL1dvcmtfU3Bhc2Uvd29ya19zcGFzZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJhZ2dhYmxlQ29udGFpbmVyKCkge1xyXG4gIGxldCBlbGUgPSB1c2VDb250ZXh0KEVsZW1lbnRDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLmNvbnRlaW5lclwiKTtcclxuICAgIGlmIChjb250YWluZXIpIHtcclxuICAgICAgY29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgIGtleT17ZWxlLm51bX1cclxuICAgICAgICBjbGFzc05hbWU9XCJjb250ZWluZXJcIlxyXG4gICAgICAgIGRyYWdcclxuICAgICAgICBkcmFnTW9tZW50dW09e2ZhbHNlfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgY3Vyc29yOiBcImdyYWJcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjbG9zZS1ub3RlXCIgb25DbGljaz17aGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgWFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIHtlbGUuZWxlfVxyXG4gICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJtb3Rpb24iLCJFbGVtZW50Q29udGV4dCIsIkRyYWdnYWJsZUNvbnRhaW5lciIsImVsZSIsImhhbmRsZUNsb3NlIiwiZXZlbnQiLCJjb250YWluZXIiLCJ0YXJnZXQiLCJjbG9zZXN0IiwicmVtb3ZlIiwiZGl2IiwiY2xhc3NOYW1lIiwiZHJhZyIsImRyYWdNb21lbnR1bSIsInN0eWxlIiwicG9zaXRpb24iLCJjdXJzb3IiLCJidXR0b24iLCJvbkNsaWNrIiwibnVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/helper/DragDrop.jsx\n"));

/***/ })

});