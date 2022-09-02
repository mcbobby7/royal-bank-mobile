"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_account-info_account-info_module_ts"],{

/***/ 98010:
/*!*********************************************************************!*\
  !*** ./src/app/modules/account-info/account-info-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountInfoPageRoutingModule": () => (/* binding */ AccountInfoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _account_info_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-info.page */ 9054);
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password/change-password.component */ 32406);
/* harmony import */ var _limit_limit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./limit/limit.component */ 40995);
/* harmony import */ var _reset_pin_reset_pin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset-pin/reset-pin.component */ 28229);
/* harmony import */ var _request_card_request_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./request-card/request-card.component */ 90201);
/* harmony import */ var _upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./upload-image/upload-image.component */ 84648);









const routes = [
    {
        path: '',
        component: _account_info_page__WEBPACK_IMPORTED_MODULE_0__.AccountInfoPage,
    },
    {
        path: 'change-password',
        component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__.ChangePasswordComponent,
    },
    {
        path: 'reset-pin',
        component: _reset_pin_reset_pin_component__WEBPACK_IMPORTED_MODULE_3__.ResetPinComponent,
    },
    {
        path: 'limit',
        component: _limit_limit_component__WEBPACK_IMPORTED_MODULE_2__.LimitComponent,
    },
    {
        path: 'request-card',
        component: _request_card_request_card_component__WEBPACK_IMPORTED_MODULE_4__.RequestCardComponent,
    },
    {
        path: 'profile-image',
        component: _upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_5__.UploadImageComponent,
    },
];
let AccountInfoPageRoutingModule = class AccountInfoPageRoutingModule {
};
AccountInfoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule],
    })
], AccountInfoPageRoutingModule);



/***/ }),

/***/ 42250:
/*!*************************************************************!*\
  !*** ./src/app/modules/account-info/account-info.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountInfoPageModule": () => (/* binding */ AccountInfoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _account_info_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-info-routing.module */ 98010);






let AccountInfoPageModule = class AccountInfoPageModule {
};
AccountInfoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _account_info_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountInfoPageRoutingModule,
        ],
        declarations: [],
    })
], AccountInfoPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_modules_account-info_account-info_module_ts.js.map