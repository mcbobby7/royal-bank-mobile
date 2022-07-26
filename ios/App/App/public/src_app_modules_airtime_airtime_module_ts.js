"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_airtime_airtime_module_ts"],{

/***/ 18692:
/*!***********************************************************!*\
  !*** ./src/app/modules/airtime/airtime-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AirtimeRoutingModule": () => (/* binding */ AirtimeRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _airtime_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./airtime.component */ 36225);




const routes = [
    {
        path: '',
        component: _airtime_component__WEBPACK_IMPORTED_MODULE_0__.AirtimeComponent
    }
];
let AirtimeRoutingModule = class AirtimeRoutingModule {
};
AirtimeRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AirtimeRoutingModule);



/***/ }),

/***/ 57447:
/*!***************************************************!*\
  !*** ./src/app/modules/airtime/airtime.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AirtimeModule": () => (/* binding */ AirtimeModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _airtime_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./airtime-routing.module */ 18692);




let AirtimeModule = class AirtimeModule {
};
AirtimeModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _airtime_routing_module__WEBPACK_IMPORTED_MODULE_0__.AirtimeRoutingModule
        ]
    })
], AirtimeModule);



/***/ })

}]);
//# sourceMappingURL=src_app_modules_airtime_airtime_module_ts.js.map