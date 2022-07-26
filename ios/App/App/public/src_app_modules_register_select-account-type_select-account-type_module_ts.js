"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_register_select-account-type_select-account-type_module_ts"],{

/***/ 52493:
/*!********************************************************************************************!*\
  !*** ./src/app/modules/register/select-account-type/select-account-type-routing.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectAccountTypeRoutingModule": () => (/* binding */ SelectAccountTypeRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _select_account_type_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-account-type.component */ 98984);




const routes = [
    {
        path: '',
        component: _select_account_type_component__WEBPACK_IMPORTED_MODULE_0__.SelectAccountTypeComponent,
    },
];
let SelectAccountTypeRoutingModule = class SelectAccountTypeRoutingModule {
};
SelectAccountTypeRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SelectAccountTypeRoutingModule);



/***/ }),

/***/ 7026:
/*!************************************************************************************!*\
  !*** ./src/app/modules/register/select-account-type/select-account-type.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectAccountTypeModule": () => (/* binding */ SelectAccountTypeModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _select_account_type_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-account-type-routing.module */ 52493);




let SelectAccountTypeModule = class SelectAccountTypeModule {
};
SelectAccountTypeModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _select_account_type_routing_module__WEBPACK_IMPORTED_MODULE_0__.SelectAccountTypeRoutingModule
        ]
    })
], SelectAccountTypeModule);



/***/ })

}]);
//# sourceMappingURL=src_app_modules_register_select-account-type_select-account-type_module_ts.js.map