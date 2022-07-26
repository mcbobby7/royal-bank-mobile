"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_register_royal-setup_royal-setup_module_ts"],{

/***/ 20382:
/*!****************************************************************************!*\
  !*** ./src/app/modules/register/royal-setup/royal-setup-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoyalSetupRoutingModule": () => (/* binding */ RoyalSetupRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _royal_setup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./royal-setup.component */ 49594);




const routes = [
    {
        path: '',
        component: _royal_setup_component__WEBPACK_IMPORTED_MODULE_0__.RoyalSetupComponent,
    },
];
let RoyalSetupRoutingModule = class RoyalSetupRoutingModule {
};
RoyalSetupRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RoyalSetupRoutingModule);



/***/ }),

/***/ 15455:
/*!********************************************************************!*\
  !*** ./src/app/modules/register/royal-setup/royal-setup.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoyalSetupModule": () => (/* binding */ RoyalSetupModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _royal_setup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./royal-setup-routing.module */ 20382);




let RoyalSetupModule = class RoyalSetupModule {
};
RoyalSetupModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _royal_setup_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoyalSetupRoutingModule
        ]
    })
], RoyalSetupModule);



/***/ })

}]);
//# sourceMappingURL=src_app_modules_register_royal-setup_royal-setup_module_ts.js.map