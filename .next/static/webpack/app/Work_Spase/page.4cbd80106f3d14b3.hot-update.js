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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DraggableContainer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var _Dreg_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dreg.css */ \"(app-pages-browser)/./app/helper/Dreg.css\");\n/* harmony import */ var _Work_Spase_work_spase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Work_Spase/work_spase */ \"(app-pages-browser)/./app/Work_Spase/work_spase.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction DraggableContainer() {\n    _s();\n    let ele = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Work_Spase_work_spase__WEBPACK_IMPORTED_MODULE_3__.ElementContext);\n    const handleClose = (event)=>{\n        const container = event.target.closest(\".conteiner\");\n        if (container) {\n            container.remove();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n            className: \"conteiner\",\n            drag: true,\n            dragMomentum: false,\n            style: {\n                position: \"relative\",\n                cursor: \"grab\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"close-note\",\n                    onClick: handleClose,\n                    children: \"X\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ali Elsisi\\\\Desktop\\\\Ali Elsisi\\\\Task_Manger\\\\app\\\\helper\\\\DragDrop.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this),\n                ele.ele\n            ]\n        }, ele.num, true, {\n            fileName: \"C:\\\\Users\\\\Ali Elsisi\\\\Desktop\\\\Ali Elsisi\\\\Task_Manger\\\\app\\\\helper\\\\DragDrop.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(DraggableContainer, \"FsN3BJ/MXvWz0ayrFXiO0+aFviE=\");\n_c = DraggableContainer;\nvar _c;\n$RefreshReg$(_c, \"DraggableContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9oZWxwZXIvRHJhZ0Ryb3AudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUMwQztBQUNIO0FBQ25CO0FBQ3NDO0FBRTNDLFNBQVNJOztJQUN0QixJQUFJQyxNQUFNSixpREFBVUEsQ0FBQ0Usa0VBQWNBO0lBRW5DLE1BQU1HLGNBQWMsQ0FBQ0M7UUFDbkIsTUFBTUMsWUFBWUQsTUFBTUUsTUFBTSxDQUFDQyxPQUFPLENBQUM7UUFDdkMsSUFBSUYsV0FBVztZQUNiQSxVQUFVRyxNQUFNO1FBQ2xCO0lBQ0Y7SUFFQSxxQkFDRTtrQkFDRSw0RUFBQ1QsaURBQU1BLENBQUNVLEdBQUc7WUFFVEMsV0FBVTtZQUNWQyxJQUFJO1lBQ0pDLGNBQWM7WUFDZEMsT0FBTztnQkFDTEMsVUFBVTtnQkFDVkMsUUFBUTtZQUNWOzs4QkFFQSw4REFBQ0M7b0JBQU9OLFdBQVU7b0JBQWFPLFNBQVNkOzhCQUFhOzs7Ozs7Z0JBR3BERCxJQUFJQSxHQUFHOztXQVpIQSxJQUFJZ0IsR0FBRzs7Ozs7O0FBZ0JwQjtHQTdCd0JqQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvaGVscGVyL0RyYWdEcm9wLnRzeD85MzEwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgXCIuL0RyZWcuY3NzXCI7XHJcbmltcG9ydCB7IEVsZW1lbnRDb250ZXh0IH0gZnJvbSBcIi4uL1dvcmtfU3Bhc2Uvd29ya19zcGFzZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJhZ2dhYmxlQ29udGFpbmVyKCkge1xyXG4gIGxldCBlbGUgPSB1c2VDb250ZXh0KEVsZW1lbnRDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLmNvbnRlaW5lclwiKTtcclxuICAgIGlmIChjb250YWluZXIpIHtcclxuICAgICAgY29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgIGtleT17ZWxlLm51bX1cclxuICAgICAgICBjbGFzc05hbWU9XCJjb250ZWluZXJcIlxyXG4gICAgICAgIGRyYWdcclxuICAgICAgICBkcmFnTW9tZW50dW09e2ZhbHNlfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgY3Vyc29yOiBcImdyYWJcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjbG9zZS1ub3RlXCIgb25DbGljaz17aGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgWFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIHtlbGUuZWxlfVxyXG4gICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJtb3Rpb24iLCJFbGVtZW50Q29udGV4dCIsIkRyYWdnYWJsZUNvbnRhaW5lciIsImVsZSIsImhhbmRsZUNsb3NlIiwiZXZlbnQiLCJjb250YWluZXIiLCJ0YXJnZXQiLCJjbG9zZXN0IiwicmVtb3ZlIiwiZGl2IiwiY2xhc3NOYW1lIiwiZHJhZyIsImRyYWdNb21lbnR1bSIsInN0eWxlIiwicG9zaXRpb24iLCJjdXJzb3IiLCJidXR0b24iLCJvbkNsaWNrIiwibnVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/helper/DragDrop.tsx\n"));

/***/ })

});