"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_bills-payments_bills-payments_module_ts"],{

/***/ 14396:
/*!*************************************************************************!*\
  !*** ./src/app/modules/bills-payments/bills-payments-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillsPaymentsPageRoutingModule": () => (/* binding */ BillsPaymentsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _bills_payments_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bills-payments.page */ 4524);
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products/products.component */ 73871);





const routes = [
    {
        path: '',
        component: _bills_payments_page__WEBPACK_IMPORTED_MODULE_0__.BillsPaymentsPage
    },
    {
        path: 'products',
        component: _products_products_component__WEBPACK_IMPORTED_MODULE_1__.ProductsComponent
    },
];
let BillsPaymentsPageRoutingModule = class BillsPaymentsPageRoutingModule {
};
BillsPaymentsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], BillsPaymentsPageRoutingModule);



/***/ }),

/***/ 95818:
/*!*****************************************************************!*\
  !*** ./src/app/modules/bills-payments/bills-payments.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillsPaymentsPageModule": () => (/* binding */ BillsPaymentsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _bills_payments_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bills-payments-routing.module */ 14396);






let BillsPaymentsPageModule = class BillsPaymentsPageModule {
};
BillsPaymentsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _bills_payments_routing_module__WEBPACK_IMPORTED_MODULE_0__.BillsPaymentsPageRoutingModule,
        ],
        declarations: [],
    })
], BillsPaymentsPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_modules_bills-payments_bills-payments_module_ts.js.map