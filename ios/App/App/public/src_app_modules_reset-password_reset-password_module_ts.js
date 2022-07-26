"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_reset-password_reset-password_module_ts"],{

/***/ 58060:
/*!*************************************************************************!*\
  !*** ./src/app/modules/reset-password/reset-password-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordRoutingModule": () => (/* binding */ ResetPasswordRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _reset_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-password.component */ 50978);




const routes = [
    {
        path: '',
        component: _reset_password_component__WEBPACK_IMPORTED_MODULE_0__.ResetPasswordComponent,
    },
];
let ResetPasswordRoutingModule = class ResetPasswordRoutingModule {
};
ResetPasswordRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ResetPasswordRoutingModule);



/***/ }),

/***/ 99634:
/*!*****************************************************************!*\
  !*** ./src/app/modules/reset-password/reset-password.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordModule": () => (/* binding */ ResetPasswordModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-password-routing.module */ 58060);




let ResetPasswordModule = class ResetPasswordModule {
};
ResetPasswordModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResetPasswordRoutingModule
        ]
    })
], ResetPasswordModule);



/***/ })

}]);
//# sourceMappingURL=src_app_modules_reset-password_reset-password_module_ts.js.map