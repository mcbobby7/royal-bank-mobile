"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_register_become-royalty_become-royalty_module_ts"],{

/***/ 2476:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/register/become-royalty/become-royalty-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BecomeRoyaltyRoutingModule": () => (/* binding */ BecomeRoyaltyRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _become_royalty_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./become-royalty.component */ 52514);




const routes = [
    {
        path: '',
        component: _become_royalty_component__WEBPACK_IMPORTED_MODULE_0__.BecomeRoyaltyComponent,
    },
];
let BecomeRoyaltyRoutingModule = class BecomeRoyaltyRoutingModule {
};
BecomeRoyaltyRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BecomeRoyaltyRoutingModule);



/***/ }),

/***/ 19363:
/*!**************************************************************************!*\
  !*** ./src/app/modules/register/become-royalty/become-royalty.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BecomeRoyaltyModule": () => (/* binding */ BecomeRoyaltyModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _become_royalty_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./become-royalty-routing.module */ 2476);




let BecomeRoyaltyModule = class BecomeRoyaltyModule {
};
BecomeRoyaltyModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _become_royalty_routing_module__WEBPACK_IMPORTED_MODULE_0__.BecomeRoyaltyRoutingModule
        ]
    })
], BecomeRoyaltyModule);



/***/ })

}]);
//# sourceMappingURL=src_app_modules_register_become-royalty_become-royalty_module_ts.js.map