"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_register_verify-phone_verify-phone_module_ts"],{

/***/ 61137:
/*!******************************************************************************!*\
  !*** ./src/app/modules/register/verify-phone/verify-phone-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyPhoneRoutingModule": () => (/* binding */ VerifyPhoneRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _verify_phone_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-phone.component */ 23862);




const routes = [
    {
        path: '',
        component: _verify_phone_component__WEBPACK_IMPORTED_MODULE_0__.VerifyPhoneComponent,
    },
];
let VerifyPhoneRoutingModule = class VerifyPhoneRoutingModule {
};
VerifyPhoneRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VerifyPhoneRoutingModule);



/***/ }),

/***/ 59326:
/*!**********************************************************************!*\
  !*** ./src/app/modules/register/verify-phone/verify-phone.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyPhoneModule": () => (/* binding */ VerifyPhoneModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _verify_phone_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-phone-routing.module */ 61137);




let VerifyPhoneModule = class VerifyPhoneModule {
};
VerifyPhoneModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _verify_phone_routing_module__WEBPACK_IMPORTED_MODULE_0__.VerifyPhoneRoutingModule],
    })
], VerifyPhoneModule);



/***/ })

}]);
//# sourceMappingURL=src_app_modules_register_verify-phone_verify-phone_module_ts.js.map