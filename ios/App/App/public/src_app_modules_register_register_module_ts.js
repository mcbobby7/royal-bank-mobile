"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_register_register_module_ts"],{

/***/ 71419:
/*!*************************************************************!*\
  !*** ./src/app/modules/register/register-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterRoutingModule": () => (/* binding */ RegisterRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component */ 80280);




const routes = [
    {
        path: '',
        component: _register_component__WEBPACK_IMPORTED_MODULE_0__.RegisterComponent,
        children: [],
    },
    {
        path: 'become-royalty',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_register_become-royalty_become-royalty_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./become-royalty/become-royalty.module */ 19363)).then((m) => m.BecomeRoyaltyModule),
    },
    {
        path: 'nuban',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_register_nuban-register_nuban-register_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./nuban-register/nuban-register.module */ 2330)).then((m) => m.NubanRegisterModule),
    },
    {
        path: 'select-account',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_register_select-account-type_select-account-type_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./select-account-type/select-account-type.module */ 7026)).then((m) => m.SelectAccountTypeModule),
    },
    {
        path: 'bvn/:mode',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_register_verify-bvn_verify-bvn_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./verify-bvn/verify-bvn.module */ 21246)).then((m) => m.VerifyBvnModule),
    },
    {
        path: 'bvn-success/:mode',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_register_bvn-success_bvn-success_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./bvn-success/bvn-success.module */ 83895)).then((m) => m.BvnSuccessModule),
    },
    {
        path: 'phone/:number/:mode',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_register_verify-phone_verify-phone_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./verify-phone/verify-phone.module */ 59326)).then((m) => m.VerifyPhoneModule),
    },
    {
        path: 'account',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_register_create-account_create-account_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./create-account/create-account.module */ 98335)).then((m) => m.CreateAccountModule),
    },
    {
        path: 'details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_register_details_details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./details/details.module */ 80727)).then((m) => m.DetailsModule),
    },
    {
        path: 'royal-setup',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_register_royal-setup_royal-setup_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./royal-setup/royal-setup.module */ 15455)).then((m) => m.RoyalSetupModule),
    },
    {
        path: 'cop-details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_register_co-operatre-details_co-operatre-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./co-operatre-details/co-operatre-details.module */ 76996)).then((m) => m.CoOperatreDetailsModule),
    },
    {
        path: 'email/:mode',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_register_verify-email_verify-email_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./verify-email/verify-email.module */ 77194)).then((m) => m.VerifyEmailModule),
    },
    {
        path: 'image',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_register_image_image_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./image/image.module */ 72899)).then((m) => m.ImageModule),
    },
    {
        path: 'image-done',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_register_image-done_image-done_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./image-done/image-done.module */ 10631)).then((m) => m.ImageDoneModule),
    },
    {
        path: 'done',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_register_done_done_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./done/done.module */ 28311)).then((m) => m.DoneModule),
    },
];
let RegisterRoutingModule = class RegisterRoutingModule {
};
RegisterRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterRoutingModule);



/***/ }),

/***/ 51965:
/*!*****************************************************!*\
  !*** ./src/app/modules/register/register.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterModule": () => (/* binding */ RegisterModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 71419);




let RegisterModule = class RegisterModule {
};
RegisterModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterRoutingModule],
    })
], RegisterModule);



/***/ })

}]);
//# sourceMappingURL=src_app_modules_register_register_module_ts.js.map