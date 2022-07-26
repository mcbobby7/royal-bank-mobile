"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_register_done_done_module_ts"],{

/***/ 71353:
/*!**************************************************************!*\
  !*** ./src/app/modules/register/done/done-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoneRoutingModule": () => (/* binding */ DoneRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _done_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./done.component */ 55213);




const routes = [
    {
        path: '',
        component: _done_component__WEBPACK_IMPORTED_MODULE_0__.DoneComponent,
    },
];
let DoneRoutingModule = class DoneRoutingModule {
};
DoneRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DoneRoutingModule);



/***/ }),

/***/ 28311:
/*!******************************************************!*\
  !*** ./src/app/modules/register/done/done.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoneModule": () => (/* binding */ DoneModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _done_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./done-routing.module */ 71353);




let DoneModule = class DoneModule {
};
DoneModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _done_routing_module__WEBPACK_IMPORTED_MODULE_0__.DoneRoutingModule
        ]
    })
], DoneModule);



/***/ })

}]);
//# sourceMappingURL=src_app_modules_register_done_done_module_ts.js.map