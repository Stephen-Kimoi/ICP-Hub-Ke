"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/project",{

/***/ "./components/organisms/NavBar/index.tsx":
/*!***********************************************!*\
  !*** ./components/organisms/NavBar/index.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_atoms_NavBrand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/atoms/NavBrand */ \"./components/atoms/NavBrand/index.tsx\");\n/* harmony import */ var components_atoms_NavLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/atoms/NavLink */ \"./components/atoms/NavLink/index.tsx\");\n/* harmony import */ var components_atoms_Button_ButtonLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/atoms/Button/ButtonLink */ \"./components/atoms/Button/ButtonLink/index.tsx\");\n/* harmony import */ var components_templates_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/templates/Container */ \"./components/templates/Container/index.tsx\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var hooks_useMobileDetection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hooks/useMobileDetection */ \"./hooks/useMobileDetection.tsx\");\n/* harmony import */ var hooks_useGetBrowserName__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hooks/useGetBrowserName */ \"./hooks/useGetBrowserName.tsx\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar NavBar = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isOpen = ref[0], setIsOpen = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isScrolled = ref1[0], setIsScrolled = ref1[1];\n    var browserName = (0,hooks_useGetBrowserName__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n    var isMobile = (0,hooks_useMobileDetection__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.addEventListener(\"scroll\", function() {\n            if (window.scrollY > 150) {\n                setIsScrolled(true);\n            } else {\n                setIsScrolled(false);\n            }\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (isOpen) {\n            document.body.classList.add(\"h-screen\");\n            document.body.classList.add(\"overflow-y-hidden\");\n        } else {\n            document.body.classList.remove(\"h-screen\");\n            document.body.classList.remove(\"overflow-y-hidden\");\n        }\n    }, [\n        isOpen\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"pt-8 w-full top-0 left-0 z-30 \".concat(isScrolled ? \"fixed\" : \"absolute\"),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_templates_Container__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat(browserName == \"Firefox\" ? \"bg-gray-900\" : \"bg-light\", \" px-6 py-4 w-full rounded-md backdrop-blur-3xl \").concat(isScrolled || isOpen ? \"\" : \"lg:bg-transparent lg:px-0\"),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col lg:flex-row w-full place-content-between lg:place-items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full flex flex-row place-content-between place-items-center lg:w-fit\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_atoms_NavBrand__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/home/steve/ICP-Hub-Ke/components/organisms/NavBar/index.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"lg:hidden\",\n                                        onClick: function() {\n                                            return setIsOpen(!isOpen);\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-white text-2xl \".concat(isMobile ? \"cursor-default\" : \"cursor-pointer\"),\n                                            children: isOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_8__.FiX, {}, void 0, false, {\n                                                fileName: \"/home/steve/ICP-Hub-Ke/components/organisms/NavBar/index.tsx\",\n                                                lineNumber: 57,\n                                                columnNumber: 31\n                                            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_8__.FiMenu, {}, void 0, false, {\n                                                fileName: \"/home/steve/ICP-Hub-Ke/components/organisms/NavBar/index.tsx\",\n                                                lineNumber: 57,\n                                                columnNumber: 41\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/steve/ICP-Hub-Ke/components/organisms/NavBar/index.tsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 19\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/steve/ICP-Hub-Ke/components/organisms/NavBar/index.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/steve/ICP-Hub-Ke/components/organisms/NavBar/index.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat(isOpen ? \"\" : \"hidden \", \"space-y-5 mt-4 lg:mt-0 lg:space-y-0 lg:space-x-16 lg:flex lg:place-items-center\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_atoms_NavLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        href: \"/service\",\n                                        value: \"Services\",\n                                        canActive: true\n                                    }, void 0, false, {\n                                        fileName: \"/home/steve/ICP-Hub-Ke/components/organisms/NavBar/index.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_atoms_NavLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        // href=\"/how-we-work\"\n                                        href: \"/events\",\n                                        value: \"Events\",\n                                        canActive: true\n                                    }, void 0, false, {\n                                        fileName: \"/home/steve/ICP-Hub-Ke/components/organisms/NavBar/index.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_atoms_NavLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        href: \"/project\",\n                                        value: \"Project\",\n                                        canActive: true\n                                    }, void 0, false, {\n                                        fileName: \"/home/steve/ICP-Hub-Ke/components/organisms/NavBar/index.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_atoms_NavLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        href: \"/about\",\n                                        value: \"About\",\n                                        canActive: true\n                                    }, void 0, false, {\n                                        fileName: \"/home/steve/ICP-Hub-Ke/components/organisms/NavBar/index.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/steve/ICP-Hub-Ke/components/organisms/NavBar/index.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat(isOpen ? \"\" : \"hidden \", \"lg:block mt-5 lg:mt-0\"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_atoms_Button_ButtonLink__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    value: \"Contact\",\n                                    style: \"light\",\n                                    color: \"white\",\n                                    size: \"small\",\n                                    href: \"/contact\"\n                                }, void 0, false, {\n                                    fileName: \"/home/steve/ICP-Hub-Ke/components/organisms/NavBar/index.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/steve/ICP-Hub-Ke/components/organisms/NavBar/index.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/steve/ICP-Hub-Ke/components/organisms/NavBar/index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/steve/ICP-Hub-Ke/components/organisms/NavBar/index.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/steve/ICP-Hub-Ke/components/organisms/NavBar/index.tsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/home/steve/ICP-Hub-Ke/components/organisms/NavBar/index.tsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(NavBar, \"9UPPsR37VbF7cIiX2ndN40Qg5ww=\", false, function() {\n    return [\n        hooks_useGetBrowserName__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        hooks_useMobileDetection__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL29yZ2FuaXNtcy9OYXZCYXIvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUFrRDtBQUNGO0FBQ0Y7QUFDYTtBQUNMO0FBQ1Y7QUFFbUI7QUFDUjs7QUFDdkQsSUFBTVcsTUFBTSxHQUFHLFdBQU07O0lBQ25CLElBQTRCVCxHQUF3QixHQUF4QkEsK0NBQVEsQ0FBVSxLQUFLLENBQUMsRUFWdEQsTUFVZSxHQUFlQSxHQUF3QixHQUF2QyxFQVZmLFNBVTBCLEdBQUlBLEdBQXdCLEdBQTVCO0lBQ3hCLElBQW9DQSxJQUF3QixHQUF4QkEsK0NBQVEsQ0FBVSxLQUFLLENBQUMsRUFYOUQsVUFXbUIsR0FBbUJBLElBQXdCLEdBQTNDLEVBWG5CLGFBV2tDLEdBQUlBLElBQXdCLEdBQTVCO0lBQ2hDLElBQU1jLFdBQVcsR0FBR04sbUVBQWlCLEVBQUU7SUFDdkMsSUFBTU8sUUFBUSxHQUFHUixvRUFBd0IsRUFBRTtJQUMzQ1IsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RpQixNQUFNLENBQUNDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxXQUFNO1lBQ3RDLElBQUlELE1BQU0sQ0FBQ0UsT0FBTyxHQUFHLEdBQUcsRUFBRTtnQkFDeEJMLGFBQWEsQ0FBQyxJQUFJLENBQUM7YUFDcEIsTUFBTTtnQkFDTEEsYUFBYSxDQUFDLEtBQUssQ0FBQzthQUNyQjtTQUNGLENBQUM7S0FDSCxFQUFFLEVBQUUsQ0FBQztJQUNOZCxnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFJVyxNQUFNLEVBQUU7WUFDVlMsUUFBUSxDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztZQUN2Q0gsUUFBUSxDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixDQUFDO1NBQ2pELE1BQU07WUFDTEgsUUFBUSxDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUMxQ0osUUFBUSxDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLG1CQUFtQixDQUFDO1NBQ3BEO0tBQ0YsRUFBRTtRQUFDYixNQUFNO0tBQUMsQ0FBQztJQUNaLHFCQUNFO2tCQUNFLDRFQUFDYyxLQUFHO1lBQ0ZDLFNBQVMsRUFBRSxnQ0FBK0IsQ0FFekMsT0FEQ2IsVUFBVSxHQUFHLE9BQU8sR0FBRyxVQUFVLENBQ2pDO3NCQUVGLDRFQUFDUixzRUFBUzswQkFDUiw0RUFBQ3NCLEtBQUc7b0JBQ0ZELFNBQVMsRUFBRSxFQUFDLENBR1ZiLE1BQXVELENBRnZERSxXQUFXLElBQUksU0FBUyxHQUFHLGFBQWEsR0FBRyxVQUFVLEVBQ3RELGlEQUErQyxDQUU1RCxDQUFhLE9BRENGLFVBQVUsSUFBSUYsTUFBTSxHQUFHLEVBQUUsR0FBRywyQkFBMkIsQ0FDdkQ7OEJBRUYsNEVBQUNnQixLQUFHO3dCQUFDRCxTQUFTLEVBQUMsOEVBQThFOzswQ0FDM0YsOERBQUNDLEtBQUc7Z0NBQUNELFNBQVMsRUFBQyx3RUFBd0U7O2tEQUNyRiw4REFBQ3hCLGlFQUFROzs7OzZDQUFHO2tEQUNaLDhEQUFDeUIsS0FBRzt3Q0FBQ0QsU0FBUyxFQUFDLFdBQVc7d0NBQUNFLE9BQU8sRUFBRTttREFBTWhCLFNBQVMsQ0FBQyxDQUFDRCxNQUFNLENBQUM7eUNBQUE7a0RBQzFELDRFQUFDZ0IsS0FBRzs0Q0FDRkQsU0FBUyxFQUFFLHNCQUFxQixDQUUvQixPQURDVixRQUFRLEdBQUcsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQzlDO3NEQUVETCxNQUFNLGlCQUFHLDhEQUFDSiwrQ0FBRzs7OztxREFBRyxpQkFBRyw4REFBQ0Qsa0RBQU07Ozs7cURBQUc7Ozs7O2lEQUMxQjs7Ozs7NkNBQ0Y7Ozs7OztxQ0FDRjswQ0FDTiw4REFBQ3FCLEtBQUc7Z0NBQ0ZELFNBQVMsRUFBRSxFQUFDLENBRVgsTUFBK0UsQ0FEOUVmLE1BQU0sR0FBRyxFQUFFLEdBQUcsU0FBUyxFQUN4QixpRkFBK0UsQ0FBQzs7a0RBRWpGLDhEQUFDUixnRUFBTzt3Q0FBQzBCLElBQUksRUFBQyxVQUFVO3dDQUFDQyxLQUFLLEVBQUMsVUFBVTt3Q0FBQ0MsU0FBUyxFQUFFLElBQUk7Ozs7OzZDQUFJO2tEQUM3RCw4REFBQzVCLGdFQUFPO3dDQUNOLHNCQUFzQjt3Q0FDdEIwQixJQUFJLEVBQUMsU0FBUzt3Q0FDZEMsS0FBSyxFQUFDLFFBQVE7d0NBQ2RDLFNBQVMsRUFBRSxJQUFJOzs7Ozs2Q0FDZjtrREFDRiw4REFBQzVCLGdFQUFPO3dDQUFDMEIsSUFBSSxFQUFDLFVBQVU7d0NBQUNDLEtBQUssRUFBQyxTQUFTO3dDQUFDQyxTQUFTLEVBQUUsSUFBSTs7Ozs7NkNBQUk7a0RBQzVELDhEQUFDNUIsZ0VBQU87d0NBQUMwQixJQUFJLEVBQUMsUUFBUTt3Q0FBQ0MsS0FBSyxFQUFDLE9BQU87d0NBQUNDLFNBQVMsRUFBRSxJQUFJOzs7Ozs2Q0FBSTs7Ozs7O3FDQUNwRDswQ0FDTiw4REFBQ0osS0FBRztnQ0FDRkQsU0FBUyxFQUFFLEVBQUMsQ0FBMEIsTUFBcUIsQ0FBN0NmLE1BQU0sR0FBRyxFQUFFLEdBQUcsU0FBUyxFQUFDLHVCQUFxQixDQUFDOzBDQUU1RCw0RUFBQ1AsMEVBQVU7b0NBQ1QwQixLQUFLLEVBQUMsU0FBUztvQ0FDZkUsS0FBSyxFQUFDLE9BQU87b0NBQ2JDLEtBQUssRUFBQyxPQUFPO29DQUNiQyxJQUFJLEVBQUMsT0FBTztvQ0FDWkwsSUFBSSxFQUFDLFVBQVU7Ozs7O3lDQUNmOzs7OztxQ0FDRTs7Ozs7OzZCQUNGOzs7Ozt5QkFDRjs7Ozs7cUJBQ0k7Ozs7O2lCQUNSO3FCQUNMLENBQ0o7Q0FDRjtHQW5GS25CLE1BQU07O1FBR1VELCtEQUFpQjtRQUNwQkQsZ0VBQXdCOzs7QUFKckNFLEtBQUFBLE1BQU07QUFxRlosK0RBQWVBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvTmF2QmFyL2luZGV4LnRzeD9iMzU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTmF2QnJhbmQgZnJvbSAnY29tcG9uZW50cy9hdG9tcy9OYXZCcmFuZCdcbmltcG9ydCBOYXZMaW5rIGZyb20gJ2NvbXBvbmVudHMvYXRvbXMvTmF2TGluaydcbmltcG9ydCBCdXR0b25MaW5rIGZyb20gJ2NvbXBvbmVudHMvYXRvbXMvQnV0dG9uL0J1dHRvbkxpbmsnXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ2NvbXBvbmVudHMvdGVtcGxhdGVzL0NvbnRhaW5lcidcbmltcG9ydCB7IEZpTWVudSwgRmlYIH0gZnJvbSAncmVhY3QtaWNvbnMvZmknXG5pbXBvcnQgVUFQYXJzZXIgZnJvbSAndWEtcGFyc2VyLWpzJ1xuaW1wb3J0IHVzZU1vYmlsZURldmljZURldGVjdGlvbiBmcm9tICdob29rcy91c2VNb2JpbGVEZXRlY3Rpb24nXG5pbXBvcnQgdXNlR2V0QnJvd3Nlck5hbWUgZnJvbSAnaG9va3MvdXNlR2V0QnJvd3Nlck5hbWUnXG5jb25zdCBOYXZCYXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcbiAgY29uc3QgW2lzU2Nyb2xsZWQsIHNldElzU2Nyb2xsZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXG4gIGNvbnN0IGJyb3dzZXJOYW1lID0gdXNlR2V0QnJvd3Nlck5hbWUoKVxuICBjb25zdCBpc01vYmlsZSA9IHVzZU1vYmlsZURldmljZURldGVjdGlvbigpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDE1MCkge1xuICAgICAgICBzZXRJc1Njcm9sbGVkKHRydWUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRJc1Njcm9sbGVkKGZhbHNlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIFtdKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc09wZW4pIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnaC1zY3JlZW4nKVxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdvdmVyZmxvdy15LWhpZGRlbicpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaC1zY3JlZW4nKVxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyZmxvdy15LWhpZGRlbicpXG4gICAgfVxuICB9LCBbaXNPcGVuXSlcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG5hdlxuICAgICAgICBjbGFzc05hbWU9e2BwdC04IHctZnVsbCB0b3AtMCBsZWZ0LTAgei0zMCAke1xuICAgICAgICAgIGlzU2Nyb2xsZWQgPyAnZml4ZWQnIDogJ2Fic29sdXRlJ1xuICAgICAgICB9YH1cbiAgICAgID5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgICAgICBicm93c2VyTmFtZSA9PSAnRmlyZWZveCcgPyAnYmctZ3JheS05MDAnIDogJ2JnLWxpZ2h0J1xuICAgICAgICAgICAgfSBweC02IHB5LTQgdy1mdWxsIHJvdW5kZWQtbWQgYmFja2Ryb3AtYmx1ci0zeGwgJHtcbiAgICAgICAgICAgICAgaXNTY3JvbGxlZCB8fCBpc09wZW4gPyAnJyA6ICdsZzpiZy10cmFuc3BhcmVudCBsZzpweC0wJ1xuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IHctZnVsbCBwbGFjZS1jb250ZW50LWJldHdlZW4gbGc6cGxhY2UtaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggZmxleC1yb3cgcGxhY2UtY29udGVudC1iZXR3ZWVuIHBsYWNlLWl0ZW1zLWNlbnRlciBsZzp3LWZpdFwiPlxuICAgICAgICAgICAgICAgIDxOYXZCcmFuZCAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aGlkZGVuXCIgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pfT5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC13aGl0ZSB0ZXh0LTJ4bCAke1xuICAgICAgICAgICAgICAgICAgICAgIGlzTW9iaWxlID8gJ2N1cnNvci1kZWZhdWx0JyA6ICdjdXJzb3ItcG9pbnRlcidcbiAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtpc09wZW4gPyA8RmlYIC8+IDogPEZpTWVudSAvPn1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgICAgICAgICBpc09wZW4gPyAnJyA6ICdoaWRkZW4gJ1xuICAgICAgICAgICAgICAgIH1zcGFjZS15LTUgbXQtNCBsZzptdC0wIGxnOnNwYWNlLXktMCBsZzpzcGFjZS14LTE2IGxnOmZsZXggbGc6cGxhY2UtaXRlbXMtY2VudGVyYH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvc2VydmljZVwiIHZhbHVlPVwiU2VydmljZXNcIiBjYW5BY3RpdmU9e3RydWV9IC8+XG4gICAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICAgIC8vIGhyZWY9XCIvaG93LXdlLXdvcmtcIlxuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9ldmVudHNcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJFdmVudHNcIlxuICAgICAgICAgICAgICAgICAgY2FuQWN0aXZlPXt0cnVlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9wcm9qZWN0XCIgdmFsdWU9XCJQcm9qZWN0XCIgY2FuQWN0aXZlPXt0cnVlfSAvPlxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvYWJvdXRcIiB2YWx1ZT1cIkFib3V0XCIgY2FuQWN0aXZlPXt0cnVlfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aXNPcGVuID8gJycgOiAnaGlkZGVuICd9bGc6YmxvY2sgbXQtNSBsZzptdC0wYH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCdXR0b25MaW5rXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIkNvbnRhY3RcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9XCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICBocmVmPVwiL2NvbnRhY3RcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9uYXY+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk5hdkJyYW5kIiwiTmF2TGluayIsIkJ1dHRvbkxpbmsiLCJDb250YWluZXIiLCJGaU1lbnUiLCJGaVgiLCJ1c2VNb2JpbGVEZXZpY2VEZXRlY3Rpb24iLCJ1c2VHZXRCcm93c2VyTmFtZSIsIk5hdkJhciIsImlzT3BlbiIsInNldElzT3BlbiIsImlzU2Nyb2xsZWQiLCJzZXRJc1Njcm9sbGVkIiwiYnJvd3Nlck5hbWUiLCJpc01vYmlsZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwibmF2IiwiY2xhc3NOYW1lIiwiZGl2Iiwib25DbGljayIsImhyZWYiLCJ2YWx1ZSIsImNhbkFjdGl2ZSIsInN0eWxlIiwiY29sb3IiLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/organisms/NavBar/index.tsx\n");

/***/ })

});