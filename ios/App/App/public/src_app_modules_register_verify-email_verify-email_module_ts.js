"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_register_verify-email_verify-email_module_ts"],{

/***/ 89796:
/*!******************************************************************************!*\
  !*** ./src/app/modules/register/verify-email/verify-email-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyEmailRoutingModule": () => (/* binding */ VerifyEmailRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _verify_email_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-email.component */ 28568);




const routes = [
    {
        path: '',
        component: _verify_email_component__WEBPACK_IMPORTED_MODULE_0__.VerifyEmailComponent,
    },
];
let VerifyEmailRoutingModule = class VerifyEmailRoutingModule {
};
VerifyEmailRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VerifyEmailRoutingModule);



/***/ }),

/***/ 77194:
/*!**********************************************************************!*\
  !*** ./src/app/modules/register/verify-email/verify-email.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyEmailModule": () => (/* binding */ VerifyEmailModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _verify_email_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-email-routing.module */ 89796);




let VerifyEmailModule = class VerifyEmailModule {
};
VerifyEmailModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _verify_email_routing_module__WEBPACK_IMPORTED_MODULE_0__.VerifyEmailRoutingModule
        ]
    })
], VerifyEmailModule);



/***/ })

}]);
//# sourceMappingURL=src_app_modules_register_verify-email_verify-email_module_ts.js.map