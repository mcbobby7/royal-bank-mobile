"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_withdraw_withdraw_module_ts"],{

/***/ 70267:
/*!*****************************************************!*\
  !*** ./src/app/withdraw/withdraw-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WithdrawRoutingModule": () => (/* binding */ WithdrawRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _withdraw_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withdraw.component */ 87218);




const routes = [
    {
        path: '',
        component: _withdraw_component__WEBPACK_IMPORTED_MODULE_0__.WithdrawComponent,
    },
];
let WithdrawRoutingModule = class WithdrawRoutingModule {
};
WithdrawRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WithdrawRoutingModule);



/***/ }),

/***/ 11047:
/*!*********************************************!*\
  !*** ./src/app/withdraw/withdraw.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WithdrawModule": () => (/* binding */ WithdrawModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _withdraw_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withdraw-routing.module */ 70267);




let WithdrawModule = class WithdrawModule {
};
WithdrawModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _withdraw_routing_module__WEBPACK_IMPORTED_MODULE_0__.WithdrawRoutingModule
        ]
    })
], WithdrawModule);



/***/ })

}]);
//# sourceMappingURL=src_app_withdraw_withdraw_module_ts.js.map