"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_document-upload_document-upload_module_ts"],{

/***/ 99764:
/*!***************************************************************************!*\
  !*** ./src/app/modules/document-upload/document-upload-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentUploadRoutingModule": () => (/* binding */ DocumentUploadRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _document_upload_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./document-upload.component */ 33552);




const routes = [
    {
        path: '',
        component: _document_upload_component__WEBPACK_IMPORTED_MODULE_0__.DocumentUploadComponent,
    },
];
let DocumentUploadRoutingModule = class DocumentUploadRoutingModule {
};
DocumentUploadRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DocumentUploadRoutingModule);



/***/ }),

/***/ 48606:
/*!*******************************************************************!*\
  !*** ./src/app/modules/document-upload/document-upload.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentUploadModule": () => (/* binding */ DocumentUploadModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _document_upload_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./document-upload-routing.module */ 99764);




let DocumentUploadModule = class DocumentUploadModule {
};
DocumentUploadModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _document_upload_routing_module__WEBPACK_IMPORTED_MODULE_0__.DocumentUploadRoutingModule],
    })
], DocumentUploadModule);



/***/ })

}]);
//# sourceMappingURL=src_app_modules_document-upload_document-upload_module_ts.js.map