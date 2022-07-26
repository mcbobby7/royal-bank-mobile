"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_register_image_image_module_ts"],{

/***/ 56242:
/*!****************************************************************!*\
  !*** ./src/app/modules/register/image/image-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageRoutingModule": () => (/* binding */ ImageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _image_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image.component */ 15334);




const routes = [
    {
        path: '',
        component: _image_component__WEBPACK_IMPORTED_MODULE_0__.ImageComponent,
    },
];
let ImageRoutingModule = class ImageRoutingModule {
};
ImageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ImageRoutingModule);



/***/ }),

/***/ 72899:
/*!********************************************************!*\
  !*** ./src/app/modules/register/image/image.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageModule": () => (/* binding */ ImageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _image_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-routing.module */ 56242);




let ImageModule = class ImageModule {
};
ImageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _image_routing_module__WEBPACK_IMPORTED_MODULE_0__.ImageRoutingModule
        ]
    })
], ImageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_modules_register_image_image_module_ts.js.map