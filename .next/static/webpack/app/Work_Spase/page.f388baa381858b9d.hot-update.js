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

/***/ "(app-pages-browser)/./app/helper/DragDrop.tsx":
/*!*********************************!*\
  !*** ./app/helper/DragDrop.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DraggableContainer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Dreg_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dreg.css */ \"(app-pages-browser)/./app/helper/Dreg.css\");\n/* harmony import */ var _Work_Spase_work_spase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Work_Spase/work_spase */ \"(app-pages-browser)/./app/Work_Spase/work_spase.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction DraggableContainer() {\n    _s();\n    let ele = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Work_Spase_work_spase__WEBPACK_IMPORTED_MODULE_3__.ElementContext);\n    const [isDragging, setIsDragging] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [initialX, setInitialX] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [initialY, setInitialY] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [translateX, setTranslateX] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [translateY, setTranslateY] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleMouseDown = (e)=>{\n        setIsDragging(true);\n        setInitialX(e.clientX);\n        setInitialY(e.clientY);\n    };\n    const handleMouseMove = (e)=>{\n        if (!isDragging) return;\n        const deltaX = e.clientX - initialX;\n        const deltaY = e.clientY - initialY;\n        setTranslateX(translateX + deltaX);\n        setTranslateY(translateY + deltaY);\n        setInitialX(e.clientX);\n        setInitialY(e.clientY);\n    };\n    const handleMouseUp = ()=>{\n        setIsDragging(false);\n    };\n    const handleClose = (event)=>{\n        const container = event.target.closest(\".conteiner\");\n        if (container) {\n            container.remove();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"conteiner\",\n            style: {\n                position: \"relative\",\n                cursor: isDragging ? \"grabbing\" : \"grab\",\n                transform: \"translate(\".concat(translateX, \"px, \").concat(translateY, \"px)\")\n            },\n            onMouseDown: handleMouseDown,\n            onMouseMove: handleMouseMove,\n            onMouseUp: handleMouseUp,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"close-note\",\n                    onClick: (event)=>handleClose(event),\n                    children: \"X\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ali Elsisi\\\\Desktop\\\\Ali Elsisi\\\\Task_Manger\\\\app\\\\helper\\\\DragDrop.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this),\n                ele.ele\n            ]\n        }, ele.num, true, {\n            fileName: \"C:\\\\Users\\\\Ali Elsisi\\\\Desktop\\\\Ali Elsisi\\\\Task_Manger\\\\app\\\\helper\\\\DragDrop.tsx\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(DraggableContainer, \"NRsrn5A19R1popo3Uolt32Bheok=\");\n_c = DraggableContainer;\nvar _c;\n$RefreshReg$(_c, \"DraggableContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9oZWxwZXIvRHJhZ0Ryb3AudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ29EO0FBRWhDO0FBQ3NDO0FBQzNDLFNBQVNJOztJQUN0QixJQUFJQyxNQUFNSCxpREFBVUEsQ0FBQ0Msa0VBQWNBO0lBQ25DLE1BQU0sQ0FBQ0csWUFBWUMsY0FBYyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNPLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDUyxVQUFVQyxZQUFZLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1csWUFBWUMsY0FBYyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNhLFlBQVlDLGNBQWMsR0FBR2QsK0NBQVFBLENBQUM7SUFFN0MsTUFBTWUsa0JBQWtCLENBQUNDO1FBSXZCVixjQUFjO1FBQ2RFLFlBQVlRLEVBQUVDLE9BQU87UUFDckJQLFlBQVlNLEVBQUVFLE9BQU87SUFDdkI7SUFFQSxNQUFNQyxrQkFBa0IsQ0FBQ0g7UUFDdkIsSUFBSSxDQUFDWCxZQUFZO1FBQ2pCLE1BQU1lLFNBQVNKLEVBQUVDLE9BQU8sR0FBR1Y7UUFDM0IsTUFBTWMsU0FBU0wsRUFBRUUsT0FBTyxHQUFHVDtRQUMzQkcsY0FBY0QsYUFBYVM7UUFDM0JOLGNBQWNELGFBQWFRO1FBQzNCYixZQUFZUSxFQUFFQyxPQUFPO1FBQ3JCUCxZQUFZTSxFQUFFRSxPQUFPO0lBQ3ZCO0lBRUEsTUFBTUksZ0JBQWdCO1FBQ3BCaEIsY0FBYztJQUNoQjtJQUVBLE1BQU1pQixjQUFjLENBQ2xCQztRQUVBLE1BQU1DLFlBQVksTUFBT0MsTUFBTSxDQUFpQkMsT0FBTyxDQUFDO1FBRXhELElBQUlGLFdBQVc7WUFDYkEsVUFBVUcsTUFBTTtRQUNsQjtJQUNGO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNDO1lBRUNDLFdBQVU7WUFDVkMsT0FBTztnQkFDTEMsVUFBVTtnQkFDVkMsUUFBUTVCLGFBQWEsYUFBYTtnQkFDbEM2QixXQUFXLGFBQThCckIsT0FBakJGLFlBQVcsUUFBaUIsT0FBWEUsWUFBVztZQUN0RDtZQUNBc0IsYUFBYXBCO1lBQ2JxQixhQUFhakI7WUFDYmtCLFdBQVdmOzs4QkFFWCw4REFBQ2dCO29CQUFPUixXQUFVO29CQUFhUyxTQUFTLENBQUNmLFFBQVVELFlBQVlDOzhCQUFROzs7Ozs7Z0JBR3RFcEIsSUFBSUEsR0FBRzs7V0FkSEEsSUFBSW9DLEdBQUc7Ozs7OztBQWtCcEI7R0E5RHdCckM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2hlbHBlci9EcmFnRHJvcC50c3g/OTMxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgXCIuL0RyZWcuY3NzXCI7XHJcbmltcG9ydCB7IEVsZW1lbnRDb250ZXh0IH0gZnJvbSBcIi4uL1dvcmtfU3Bhc2Uvd29ya19zcGFzZVwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEcmFnZ2FibGVDb250YWluZXIoKSB7XHJcbiAgbGV0IGVsZSA9IHVzZUNvbnRleHQoRWxlbWVudENvbnRleHQpO1xyXG4gIGNvbnN0IFtpc0RyYWdnaW5nLCBzZXRJc0RyYWdnaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaW5pdGlhbFgsIHNldEluaXRpYWxYXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtpbml0aWFsWSwgc2V0SW5pdGlhbFldID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3RyYW5zbGF0ZVgsIHNldFRyYW5zbGF0ZVhdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3RyYW5zbGF0ZVksIHNldFRyYW5zbGF0ZVldID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vdXNlRG93biA9IChlOiB7XHJcbiAgICBjbGllbnRYOiBSZWFjdC5TZXRTdGF0ZUFjdGlvbjxudW1iZXI+O1xyXG4gICAgY2xpZW50WTogUmVhY3QuU2V0U3RhdGVBY3Rpb248bnVtYmVyPjtcclxuICB9KSA9PiB7XHJcbiAgICBzZXRJc0RyYWdnaW5nKHRydWUpO1xyXG4gICAgc2V0SW5pdGlhbFgoZS5jbGllbnRYKTtcclxuICAgIHNldEluaXRpYWxZKGUuY2xpZW50WSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XHJcbiAgICBpZiAoIWlzRHJhZ2dpbmcpIHJldHVybjtcclxuICAgIGNvbnN0IGRlbHRhWCA9IGUuY2xpZW50WCAtIGluaXRpYWxYO1xyXG4gICAgY29uc3QgZGVsdGFZID0gZS5jbGllbnRZIC0gaW5pdGlhbFk7XHJcbiAgICBzZXRUcmFuc2xhdGVYKHRyYW5zbGF0ZVggKyBkZWx0YVgpO1xyXG4gICAgc2V0VHJhbnNsYXRlWSh0cmFuc2xhdGVZICsgZGVsdGFZKTtcclxuICAgIHNldEluaXRpYWxYKGUuY2xpZW50WCk7XHJcbiAgICBzZXRJbml0aWFsWShlLmNsaWVudFkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vdXNlVXAgPSAoKSA9PiB7XHJcbiAgICBzZXRJc0RyYWdnaW5nKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9IChcclxuICAgIGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50LCBNb3VzZUV2ZW50PlxyXG4gICkgPT4ge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xvc2VzdChcIi5jb250ZWluZXJcIik7XHJcblxyXG4gICAgaWYgKGNvbnRhaW5lcikge1xyXG4gICAgICBjb250YWluZXIucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBrZXk9e2VsZS5udW19IC8vIFVzZSB0aGUgaW5kZXggYXMgdGhlIGtleVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImNvbnRlaW5lclwiXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICBjdXJzb3I6IGlzRHJhZ2dpbmcgPyBcImdyYWJiaW5nXCIgOiBcImdyYWJcIixcclxuICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgke3RyYW5zbGF0ZVh9cHgsICR7dHJhbnNsYXRlWX1weClgLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgb25Nb3VzZURvd249e2hhbmRsZU1vdXNlRG93bn1cclxuICAgICAgICBvbk1vdXNlTW92ZT17aGFuZGxlTW91c2VNb3ZlfVxyXG4gICAgICAgIG9uTW91c2VVcD17aGFuZGxlTW91c2VVcH1cclxuICAgICAgPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY2xvc2Utbm90ZVwiIG9uQ2xpY2s9eyhldmVudCkgPT4gaGFuZGxlQ2xvc2UoZXZlbnQpfT5cclxuICAgICAgICAgIFhcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICB7ZWxlLmVsZX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsIkVsZW1lbnRDb250ZXh0IiwiRHJhZ2dhYmxlQ29udGFpbmVyIiwiZWxlIiwiaXNEcmFnZ2luZyIsInNldElzRHJhZ2dpbmciLCJpbml0aWFsWCIsInNldEluaXRpYWxYIiwiaW5pdGlhbFkiLCJzZXRJbml0aWFsWSIsInRyYW5zbGF0ZVgiLCJzZXRUcmFuc2xhdGVYIiwidHJhbnNsYXRlWSIsInNldFRyYW5zbGF0ZVkiLCJoYW5kbGVNb3VzZURvd24iLCJlIiwiY2xpZW50WCIsImNsaWVudFkiLCJoYW5kbGVNb3VzZU1vdmUiLCJkZWx0YVgiLCJkZWx0YVkiLCJoYW5kbGVNb3VzZVVwIiwiaGFuZGxlQ2xvc2UiLCJldmVudCIsImNvbnRhaW5lciIsInRhcmdldCIsImNsb3Nlc3QiLCJyZW1vdmUiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsInBvc2l0aW9uIiwiY3Vyc29yIiwidHJhbnNmb3JtIiwib25Nb3VzZURvd24iLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VVcCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJudW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/helper/DragDrop.tsx\n"));

/***/ })

});