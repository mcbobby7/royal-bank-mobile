"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_login_login_module_ts"],{

/***/ 50556:
/*!*******************************************************!*\
  !*** ./src/app/modules/login/login-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginRoutingModule": () => (/* binding */ LoginRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ 60744);




const routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent,
        // children: [
        //   {
        //     path: 'tab1',
        //     loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
        //   },
        //   {
        //     path: 'tab2',
        //     loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
        //   },
        //   {
        //     path: 'tab3',
        //     loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
        //   },
        //   {
        //     path: '',
        //     redirectTo: '/tabs/tab1',
        //     pathMatch: 'full'
        //   }
        // ]
    },
];
let LoginRoutingModule = class LoginRoutingModule {
};
LoginRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginRoutingModule);



/***/ }),

/***/ 39758:
/*!***********************************************!*\
  !*** ./src/app/modules/login/login.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginModule": () => (/* binding */ LoginModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 50556);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);




// import { ComponentsModule } from '../../components/components.module';

let LoginModule = class LoginModule {
};
LoginModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginRoutingModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule],
    })
], LoginModule);



/***/ })

}]);
//# sourceMappingURL=src_app_modules_login_login_module_ts.js.map