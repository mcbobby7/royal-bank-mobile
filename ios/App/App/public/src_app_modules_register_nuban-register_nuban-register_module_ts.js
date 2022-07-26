"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_register_nuban-register_nuban-register_module_ts"],{

/***/ 81030:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/register/nuban-register/nuban-register-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NubanRegisterRoutingModule": () => (/* binding */ NubanRegisterRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _nuban_register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nuban-register.component */ 82017);




const routes = [
    {
        path: '',
        component: _nuban_register_component__WEBPACK_IMPORTED_MODULE_0__.NubanRegisterComponent,
    },
];
let NubanRegisterRoutingModule = class NubanRegisterRoutingModule {
};
NubanRegisterRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NubanRegisterRoutingModule);



/***/ }),

/***/ 2330:
/*!**************************************************************************!*\
  !*** ./src/app/modules/register/nuban-register/nuban-register.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NubanRegisterModule": () => (/* binding */ NubanRegisterModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _nuban_register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nuban-register-routing.module */ 81030);




let NubanRegisterModule = class NubanRegisterModule {
};
NubanRegisterModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _nuban_register_routing_module__WEBPACK_IMPORTED_MODULE_0__.NubanRegisterRoutingModule
        ]
    })
], NubanRegisterModule);



/***/ })

}]);
//# sourceMappingURL=src_app_modules_register_nuban-register_nuban-register_module_ts.js.map