"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_register_create-account_create-account_module_ts"],{

/***/ 82323:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/register/create-account/create-account-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateAccountRoutingModule": () => (/* binding */ CreateAccountRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _create_account_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-account.component */ 57948);




const routes = [
    {
        path: '',
        component: _create_account_component__WEBPACK_IMPORTED_MODULE_0__.CreateAccountComponent,
    },
];
let CreateAccountRoutingModule = class CreateAccountRoutingModule {
};
CreateAccountRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CreateAccountRoutingModule);



/***/ }),

/***/ 98335:
/*!**************************************************************************!*\
  !*** ./src/app/modules/register/create-account/create-account.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateAccountModule": () => (/* binding */ CreateAccountModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _create_account_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-account-routing.module */ 82323);




let CreateAccountModule = class CreateAccountModule {
};
CreateAccountModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _create_account_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreateAccountRoutingModule],
    })
], CreateAccountModule);



/***/ })

}]);
//# sourceMappingURL=src_app_modules_register_create-account_create-account_module_ts.js.map