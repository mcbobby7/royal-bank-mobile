"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_choose-signin_choose-signin_module_ts"],{

/***/ 14786:
/*!***********************************************************************!*\
  !*** ./src/app/modules/choose-signin/choose-signin-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChooseSigninRoutingModule": () => (/* binding */ ChooseSigninRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _choose_signin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./choose-signin.component */ 88525);




const routes = [
    {
        path: '',
        component: _choose_signin_component__WEBPACK_IMPORTED_MODULE_0__.ChooseSigninComponent,
    },
];
let ChooseSigninRoutingModule = class ChooseSigninRoutingModule {
};
ChooseSigninRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChooseSigninRoutingModule);



/***/ }),

/***/ 87410:
/*!***************************************************************!*\
  !*** ./src/app/modules/choose-signin/choose-signin.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChooseSigninModule": () => (/* binding */ ChooseSigninModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _choose_signin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./choose-signin-routing.module */ 14786);




let ChooseSigninModule = class ChooseSigninModule {
};
ChooseSigninModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _choose_signin_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChooseSigninRoutingModule
        ]
    })
], ChooseSigninModule);



/***/ })

}]);
//# sourceMappingURL=src_app_modules_choose-signin_choose-signin_module_ts.js.map