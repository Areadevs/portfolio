"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"2cc7a8c96d8b\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/ZTc1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjJjYzdhOGM5NmQ4YlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/navbar/Navbar.tsx":
/*!******************************************!*\
  !*** ./src/components/navbar/Navbar.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _navbar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar.module.css */ \"(app-pages-browser)/./src/components/navbar/navbar.module.css\");\n/* harmony import */ var _navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_navbar_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nconst links = [\n    {\n        id: 1,\n        title: \"Home\",\n        url: \"/\"\n    },\n    {\n        id: 2,\n        title: \"Portfolio\",\n        url: \"/portfolio\"\n    },\n    {\n        id: 3,\n        title: \"Blog\",\n        url: \"/blog\"\n    },\n    {\n        id: 4,\n        title: \"About\",\n        url: \"/about\"\n    },\n    {\n        id: 5,\n        title: \"Contact\",\n        url: \"/contact\"\n    },\n    {\n        id: 6,\n        title: \"Dashboard\",\n        url: \"/dashboard\"\n    }\n];\nconst Navbar = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/\",\n                className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().logo),\n                children: \"lamamia\"\n            }, void 0, false, {\n                fileName: \"/home/bruno/Desktop/my-app/src/components/navbar/Navbar.tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().links),\n                children: [\n                    links.map((link)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: link.url,\n                            styles: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().link),\n                            children: link.title\n                        }, link.id, false, {\n                            fileName: \"/home/bruno/Desktop/my-app/src/components/navbar/Navbar.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 25\n                        }, undefined)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>{\n                            console.log(\"logged out\");\n                        },\n                        className: StyleSheet.logout,\n                        children: \"Logout\"\n                    }, void 0, false, {\n                        fileName: \"/home/bruno/Desktop/my-app/src/components/navbar/Navbar.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/bruno/Desktop/my-app/src/components/navbar/Navbar.tsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/bruno/Desktop/my-app/src/components/navbar/Navbar.tsx\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL25hdmJhci9OYXZiYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUN5QjtBQUNHO0FBQ1k7QUFDeEMsTUFBTUcsUUFBUTtJQUNWO1FBQ0lDLElBQUk7UUFDSkMsT0FBTztRQUNQQyxLQUFLO0lBQ1Q7SUFDQTtRQUNJRixJQUFJO1FBQ0pDLE9BQU87UUFDUEMsS0FBSztJQUNUO0lBQ0E7UUFDSUYsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLEtBQUs7SUFDVDtJQUNBO1FBQ0lGLElBQUk7UUFDSkMsT0FBTztRQUNQQyxLQUFLO0lBQ1Q7SUFDQTtRQUNJRixJQUFJO1FBQ0pDLE9BQU87UUFDUEMsS0FBSztJQUNUO0lBQ0E7UUFDSUYsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLEtBQUs7SUFDVDtDQUNIO0FBRUQsTUFBTUMsU0FBUztJQUNYLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFXUCxxRUFBZ0I7OzBCQUM1Qiw4REFBQ0Qsa0RBQUlBO2dCQUFDVSxNQUFLO2dCQUFJRixXQUFXUCxnRUFBVzswQkFBRTs7Ozs7OzBCQUN2Qyw4REFBQ007Z0JBQUlDLFdBQVdQLGlFQUFZOztvQkFFcEJDLE1BQU1VLEdBQUcsQ0FBQ0MsQ0FBQUEscUJBQ04sOERBQUNiLGtEQUFJQTs0QkFBZVUsTUFBTUcsS0FBS1IsR0FBRzs0QkFBRUosUUFBUUEsZ0VBQVc7c0NBQUdZLEtBQUtULEtBQUs7MkJBQXpEUyxLQUFLVixFQUFFOzs7OztrQ0FHMUIsOERBQUNXO3dCQUFPQyxTQUFTOzRCQUNiQyxRQUFRQyxHQUFHLENBQUM7d0JBQ2hCO3dCQUFHVCxXQUFXVSxXQUFXQyxNQUFNO2tDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJakQ7S0FoQk1iO0FBa0JOLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL25hdmJhci9OYXZiYXIudHN4PzVhYzciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9uYXZiYXIubW9kdWxlLmNzcydcbmNvbnN0IGxpbmtzID0gW1xuICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIHRpdGxlOiBcIkhvbWVcIixcbiAgICAgICAgdXJsOiBcIi9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIHRpdGxlOiBcIlBvcnRmb2xpb1wiLFxuICAgICAgICB1cmw6IFwiL3BvcnRmb2xpb1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgdGl0bGU6IFwiQmxvZ1wiLFxuICAgICAgICB1cmw6IFwiL2Jsb2dcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDQsXG4gICAgICAgIHRpdGxlOiBcIkFib3V0XCIsXG4gICAgICAgIHVybDogXCIvYWJvdXRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDUsXG4gICAgICAgIHRpdGxlOiBcIkNvbnRhY3RcIixcbiAgICAgICAgdXJsOiBcIi9jb250YWN0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA2LFxuICAgICAgICB0aXRsZTogXCJEYXNoYm9hcmRcIixcbiAgICAgICAgdXJsOiBcIi9kYXNoYm9hcmRcIixcbiAgICB9LFxuXTtcblxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+bGFtYW1pYTwvTGluaz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlua3N9PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGlua3MubWFwKGxpbmsgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsga2V5PXtsaW5rLmlkfSBocmVmPXtsaW5rLnVybH0gc3R5bGVzPXtzdHlsZXMubGlua30+e2xpbmsudGl0bGV9PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2dnZWQgb3V0XCIpXG4gICAgICAgICAgICAgICAgfX0gY2xhc3NOYW1lPXtTdHlsZVNoZWV0LmxvZ291dH0+TG9nb3V0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXIiXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwic3R5bGVzIiwibGlua3MiLCJpZCIsInRpdGxlIiwidXJsIiwiTmF2YmFyIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaHJlZiIsImxvZ28iLCJtYXAiLCJsaW5rIiwiYnV0dG9uIiwib25DbGljayIsImNvbnNvbGUiLCJsb2ciLCJTdHlsZVNoZWV0IiwibG9nb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/navbar/Navbar.tsx\n"));

/***/ })

});