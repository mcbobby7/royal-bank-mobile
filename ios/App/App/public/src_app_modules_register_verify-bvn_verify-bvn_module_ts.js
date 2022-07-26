"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_register_verify-bvn_verify-bvn_module_ts"],{

/***/ 6049:
/*!**************************************************************************!*\
  !*** ./src/app/modules/register/verify-bvn/verify-bvn-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyBvnRoutingModule": () => (/* binding */ VerifyBvnRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _verify_bvn_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-bvn.component */ 1917);




const routes = [
    {
        path: '',
        component: _verify_bvn_component__WEBPACK_IMPORTED_MODULE_0__.VerifyBvnComponent,
    },
];
let VerifyBvnRoutingModule = class VerifyBvnRoutingModule {
};
VerifyBvnRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VerifyBvnRoutingModule);



/***/ }),

/***/ 21246:
/*!******************************************************************!*\
  !*** ./src/app/modules/register/verify-bvn/verify-bvn.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyBvnModule": () => (/* binding */ VerifyBvnModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _verify_bvn_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-bvn-routing.module */ 6049);




let VerifyBvnModule = class VerifyBvnModule {
};
VerifyBvnModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _verify_bvn_routing_module__WEBPACK_IMPORTED_MODULE_0__.VerifyBvnRoutingModule
        ]
    })
], VerifyBvnModule);



/***/ })

}]);
//# sourceMappingURL=src_app_modules_register_verify-bvn_verify-bvn_module_ts.js.map