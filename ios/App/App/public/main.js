(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _components_pin_pin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/pin/pin.component */ 71536);
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/guards/auth.guard */ 27574);
/* harmony import */ var _core_templates_dashboard_template_dashboard_template_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/templates/dashboard-template/dashboard-template.component */ 14973);
/* harmony import */ var _core_templates_in_page_in_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/templates/in-page/in-page.component */ 16437);
/* harmony import */ var _modules_bills_payments_cabletv_cabletv_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/bills-payments/cabletv/cabletv.component */ 92073);
/* harmony import */ var _modules_support_support_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/support/support.component */ 32774);
/* harmony import */ var _modules_dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dashboard/dashboard.page */ 47920);










const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_welcome_welcome_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/welcome/welcome.module */ 52008)).then((m) => m.WelcomeModule),
    },
    {
        path: 'ds',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core_templates_dashboard-template_dashboard-template_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./core/templates/dashboard-template/dashboard-template.module */ 45106)).then((m) => m.DashboardTemplateModule),
    },
    {
        path: 'dashboard',
        canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
        component: _core_templates_dashboard_template_dashboard_template_component__WEBPACK_IMPORTED_MODULE_2__.DashboardTemplateComponent,
        children: [
            {
                path: '',
                component: _modules_dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_6__.DashboardPage,
            },
        ],
    },
    {
        path: 'action',
        // canActivate: [AuthGuard],
        component: _core_templates_in_page_in_page_component__WEBPACK_IMPORTED_MODULE_3__.InPageComponent,
        children: [
            {
                path: 'account-info',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_account-info_account-info_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/account-info/account-info.module */ 42250)).then((m) => m.AccountInfoPageModule),
            },
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/dashboard/dashboard.module */ 88757)).then((m) => m.DashboardPageModule),
            },
            {
                path: 'tab1',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_transfer_transfer_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../app/modules/transfer/transfer.module */ 91625)).then((m) => m.TransferPageModule),
            },
            {
                path: 'tab3',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_account-info_account-info_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../app/modules/account-info/account-info.module */ 42250)).then((m) => m.AccountInfoPageModule),
            },
            {
                path: 'profile',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/profile/profile.module */ 69267)).then((m) => m.ProfileModule),
            },
            {
                path: 'airtime',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_airtime_airtime_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/airtime/airtime.module */ 57447)).then((m) => m.AirtimeModule),
            },
            {
                path: 'history',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_history_history_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/history/history.module */ 93745)).then((m) => m.HistoryModule),
            },
            {
                path: 'upload-document',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_document-upload_document-upload_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/document-upload/document-upload.module */ 48606)).then((m) => m.DocumentUploadModule),
            },
            {
                path: 'loan',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_loan_loan_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/loan/loan.module */ 29127)).then((m) => m.LoanPageModule),
            },
            {
                path: 'cable-tv',
                component: _modules_bills_payments_cabletv_cabletv_component__WEBPACK_IMPORTED_MODULE_4__.CabletvComponent,
            },
            {
                path: 'transfer',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_transfer_transfer_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/transfer/transfer.module */ 91625)).then((m) => m.TransferPageModule),
            },
            {
                path: 'withdraw',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_withdraw_withdraw_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./withdraw/withdraw.module */ 11047)).then((m) => m.WithdrawModule),
            },
            {
                path: 'bills-payment',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_bills-payments_bills-payments_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/bills-payments/bills-payments.module */ 95818)).then((m) => m.BillsPaymentsPageModule),
            },
            {
                path: 'bills-payment',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_bills-payments_bills-payments_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/bills-payments/bills-payments.module */ 95818)).then((m) => m.BillsPaymentsPageModule),
            },
            {
                path: 'pin',
                component: _components_pin_pin_component__WEBPACK_IMPORTED_MODULE_0__.PinComponent,
            },
            {
                path: 'support',
                component: _modules_support_support_component__WEBPACK_IMPORTED_MODULE_5__.SupportComponent,
            },
        ],
    },
    {
        path: 'register',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_register_register_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/register/register.module */ 51965)).then((m) => m.RegisterModule),
    },
    {
        path: 'forgot-passowrd',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_reset-password_reset-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/reset-password/reset-password.module */ 99634)).then((m) => m.ResetPasswordModule),
    },
    // {
    //   path: 'select-account',
    //   loadChildren: () =>
    //   import('./modules/register/select-account-type/select-account-type.module').then((m) => m.SelectAccountTypeModule)
    // },
    {
        path: 'choose-signin',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_choose-signin_choose-signin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/choose-signin/choose-signin.module */ 87410)).then((m) => m.ChooseSigninModule),
    },
    {
        path: 'welcome',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_welcome_welcome_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/welcome/welcome.module */ 52008)).then((m) => m.WelcomeModule),
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/login/login.module */ 39758)).then((m) => m.LoginModule),
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_9__.PreloadAllModules }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 79259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/status-bar */ 19326);
/* harmony import */ var _ng_idle_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-idle/core */ 58653);
/* harmony import */ var _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-idle/keepalive */ 40576);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 37954);











let AppComponent = class AppComponent {
    constructor(idle, keepalive, router, toast, platform, splashScreen) {
        this.idle = idle;
        this.keepalive = keepalive;
        this.router = router;
        this.toast = toast;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.idleState = 'Not started.';
        this.timedOut = false;
        this.lastPing = null;
        this.platform.ready().then(() => {
            this.splashScreen.hide();
        });
        _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_2__.StatusBar.setOverlaysWebView({ overlay: false });
        const setStatusBarStyleDark = () => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_2__.StatusBar.setStyle({ style: _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_2__.Style.Light });
        });
        setStatusBarStyleDark();
        _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_2__.StatusBar.setBackgroundColor({
            color: '#ffffff',
        });
        // sets an idle timeout of 10 seconds.
        idle.setIdle(10);
        // sets a timeout period of 10 seconds. after 20 seconds of inactivity, the user will timed out.
        idle.setTimeout(20);
        // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
        idle.setInterrupts(_ng_idle_core__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_INTERRUPTSOURCES);
        idle.onIdleEnd.subscribe(() => (this.idleState = 'No longer idle.'));
        idle.onTimeout.subscribe(() => {
            this.idleState = 'Timed out!';
            this.timedOut = true;
            console.log('timed out');
            this.reset();
            if (this.user) {
                // this.logout();
                console.log('logout');
            }
        });
        idle.onIdleStart.subscribe(() => (this.idleState = 'idle state'));
        idle.onTimeoutWarning.subscribe((countdown) => (this.idleState = 'You will time out in ' + countdown + ' seconds!')); // sets the ping interval to 15 seconds
        keepalive.interval(15);
        this.reset();
    }
    reset() {
        this.idle.watch();
        this.idleState = 'Started.';
        this.timedOut = false;
    }
    ngOnInit() {
        this.reset();
        setInterval(() => {
            this.user = localStorage.getItem('token');
        }, 500);
    }
    logout() {
        localStorage.setItem('user', '');
        localStorage.setItem('token', '');
        this.router.navigate(['/login']);
        this.toast.error('Invalid session timed-out', 'Error');
    }
};
AppComponent.ctorParameters = () => [
    { type: _ng_idle_core__WEBPACK_IMPORTED_MODULE_3__.Idle },
    { type: _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_4__.Keepalive },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__.SplashScreen }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/components.module */ 45642);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ 73598);
/* harmony import */ var _modules_dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dashboard/dashboard.page */ 47920);
/* harmony import */ var _modules_transfer_transfer_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/transfer/transfer.page */ 13854);
/* harmony import */ var _withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./withdraw/withdraw.component */ 87218);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 37954);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _ionic_native_uid_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/uid/ngx */ 86649);
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ 61832);
/* harmony import */ var _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-idle/keepalive */ 40576);





















// import { Ng9PasswordStrengthBarModule } from 'ng9-password-strength-bar';
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__.AppComponent, _modules_dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.DashboardPage, _modules_transfer_transfer_page__WEBPACK_IMPORTED_MODULE_2__.TransferPage, _withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_3__.WithdrawComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicModule.forRoot(),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_14__.ToastrModule.forRoot(),
            _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule,
            // Ng9PasswordStrengthBarModule,
            // NgIdleModule.forRoot(),
            _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_9__.NgIdleKeepaliveModule.forRoot(),
        ],
        providers: [
            _ionic_native_uid_ngx__WEBPACK_IMPORTED_MODULE_7__.Uid,
            _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_8__.AndroidPermissions,
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__.SplashScreen,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicRouteStrategy },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 58126:
/*!***********************************************************!*\
  !*** ./src/app/components/add-fund/add-fund.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddFundComponent": () => (/* binding */ AddFundComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_fund_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-fund.component.html?ngResource */ 52869);
/* harmony import */ var _add_fund_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-fund.component.scss?ngResource */ 26912);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 34101);






let AddFundComponent = class AddFundComponent {
    constructor(toast) {
        this.toast = toast;
        this.done = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.loading = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.exit = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.user = JSON.parse(localStorage.getItem('user'));
    }
    ngOnInit() { }
    closeDraw() {
        this.exit.emit();
    }
};
AddFundComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService }
];
AddFundComponent.propDecorators = {
    done: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    loading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    exit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
AddFundComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-add-fund',
        template: _add_fund_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('slideInOut', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)(':enter', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({ transform: 'translateY(100%)' }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('500ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({ transform: 'translateY(-0%)' })),
                ]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)(':leave', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('200ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({ transform: 'translateY(-100%)' })),
                ]),
            ]),
        ],
        styles: [_add_fund_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddFundComponent);



/***/ }),

/***/ 22314:
/*!*********************************************************!*\
  !*** ./src/app/components/balance/balance.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BalanceComponent": () => (/* binding */ BalanceComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _balance_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./balance.component.html?ngResource */ 28558);
/* harmony import */ var _balance_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./balance.component.scss?ngResource */ 3933);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/http/services/auth.service */ 41194);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 34101);






let BalanceComponent = class BalanceComponent {
    constructor(auth, toast) {
        this.auth = auth;
        this.toast = toast;
        this.show = false;
        this.data = null;
    }
    ngOnInit() {
        console.log(this.user);
        const user = localStorage.getItem('user');
        const users = user ? JSON.parse(user) : null;
        this.user = users;
        setInterval(() => {
            this.getBalance();
        }, 60000);
        this.getBalance();
    }
    viewBalance() {
        this.show = !this.show;
    }
    getBalance() {
        var _a, _b, _c, _d;
        this.user = JSON.parse(localStorage.getItem('user'));
        if (((_b = (_a = this.user) === null || _a === void 0 ? void 0 : _a.accountNos) === null || _b === void 0 ? void 0 : _b.length) === 0) {
            return;
        }
        const data = {
            clientId: +((_d = (_c = this.user) === null || _c === void 0 ? void 0 : _c.accountNos[0]) === null || _d === void 0 ? void 0 : _d.clientId),
            accountId: null,
        };
        this.auth.post(data, 'Cba.BankingService.FetchAccount').subscribe((res) => {
            var _a, _b, _c, _d, _e;
            console.log(res);
            if (res.data.responseCode === '00') {
                this.data = res.data.data;
                for (let i = 0; i < ((_b = (_a = this.user) === null || _a === void 0 ? void 0 : _a.accountNos) === null || _b === void 0 ? void 0 : _b.length); i++) {
                    for (let j = 0; i < ((_c = this.data) === null || _c === void 0 ? void 0 : _c.length); j++) {
                        if (((_e = (_d = this.user) === null || _d === void 0 ? void 0 : _d.accountNos[i]) === null || _e === void 0 ? void 0 : _e.accountNo) === this.data[j].accountNo) {
                            console.log(this.user.accountNos[i].accountNo);
                            console.log(this.user.accountNos[i].accountBalance);
                            console.log(this.data[j].accountBalance);
                            this.user.accountNos[i].accountBalance =
                                this.data[j].accountBalance;
                            localStorage.setItem('user', JSON.stringify(this.user));
                            console.log(this.user);
                        }
                    }
                }
                // console.log(this.data);
                // console.log(res);
            }
            else {
                // console.log(res);
            }
        }, (err) => console.error(err.message));
    }
    copyMessage(val) {
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        this.toast.success('Account number', 'Copied to clipboard');
    }
};
BalanceComponent.ctorParameters = () => [
    { type: _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService }
];
BalanceComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-balance',
        template: _balance_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_balance_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BalanceComponent);



/***/ }),

/***/ 45642:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 43646);
/* harmony import */ var _modules_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/login/login.component */ 60744);
/* harmony import */ var _modules_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/register/register.component */ 80280);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _core_templates_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/templates/signup/signup.component */ 12283);
/* harmony import */ var _modules_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/welcome/welcome.component */ 11567);
/* harmony import */ var _modules_choose_signin_choose_signin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/choose-signin/choose-signin.component */ 88525);
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loader/loader.component */ 98868);
/* harmony import */ var _modules_register_verify_bvn_verify_bvn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/register/verify-bvn/verify-bvn.component */ 1917);
/* harmony import */ var _modules_register_verify_info_verify_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modules/register/verify-info/verify-info.component */ 62284);
/* harmony import */ var _modules_register_create_account_create_account_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modules/register/create-account/create-account.component */ 57948);
/* harmony import */ var _modules_register_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modules/register/verify-email/verify-email.component */ 28568);
/* harmony import */ var _modules_register_verify_phone_verify_phone_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../modules/register/verify-phone/verify-phone.component */ 23862);
/* harmony import */ var _modules_register_become_royalty_become_royalty_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../modules/register/become-royalty/become-royalty.component */ 52514);
/* harmony import */ var _modules_register_select_account_type_select_account_type_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../modules/register/select-account-type/select-account-type.component */ 98984);
/* harmony import */ var _modules_register_bvn_success_bvn_success_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../modules/register/bvn-success/bvn-success.component */ 41982);
/* harmony import */ var _modules_register_image_image_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../modules/register/image/image.component */ 15334);
/* harmony import */ var _modules_register_done_done_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../modules/register/done/done.component */ 55213);
/* harmony import */ var _modules_register_details_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../modules/register/details/details.component */ 69410);
/* harmony import */ var _modules_register_co_operatre_details_co_operatre_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../modules/register/co-operatre-details/co-operatre-details.component */ 43312);
/* harmony import */ var _modules_register_image_done_image_done_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../modules/register/image-done/image-done.component */ 21970);
/* harmony import */ var _modules_register_royal_setup_royal_setup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../modules/register/royal-setup/royal-setup.component */ 49594);
/* harmony import */ var _core_templates_dashboard_template_dashboard_template_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../core/templates/dashboard-template/dashboard-template.component */ 14973);
/* harmony import */ var _core_templates_in_page_in_page_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../core/templates/in-page/in-page.component */ 16437);
/* harmony import */ var _modules_profile_profile_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../modules/profile/profile.component */ 89852);
/* harmony import */ var _modules_history_history_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../modules/history/history.component */ 55025);
/* harmony import */ var _modules_airtime_airtime_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../modules/airtime/airtime.component */ 36225);
/* harmony import */ var _modules_bills_payments_cabletv_cabletv_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../modules/bills-payments/cabletv/cabletv.component */ 92073);
/* harmony import */ var _components_transaction_history_transaction_history_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../components/transaction-history/transaction-history.component */ 97420);
/* harmony import */ var _components_balance_balance_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../components/balance/balance.component */ 22314);
/* harmony import */ var _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../tabs/tabs.page */ 7942);
/* harmony import */ var _modules_account_info_limit_limit_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../modules/account-info/limit/limit.component */ 40995);
/* harmony import */ var _modules_bills_payments_products_products_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../modules/bills-payments/products/products.component */ 73871);
/* harmony import */ var _pin_pin_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pin/pin.component */ 71536);
/* harmony import */ var _modules_bills_payments_bills_payments_page__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../modules/bills-payments/bills-payments.page */ 4524);
/* harmony import */ var _components_add_fund_add_fund_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../components/add-fund/add-fund.component */ 58126);
/* harmony import */ var _modules_account_info_account_info_page__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../modules/account-info/account-info.page */ 9054);
/* harmony import */ var _modules_account_info_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../modules/account-info/change-password/change-password.component */ 32406);
/* harmony import */ var _modules_account_info_reset_pin_reset_pin_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../modules/account-info/reset-pin/reset-pin.component */ 28229);
/* harmony import */ var _modules_account_info_request_card_request_card_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../modules/account-info/request-card/request-card.component */ 90201);
/* harmony import */ var _modules_loan_loan_page__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../modules/loan/loan.page */ 43274);
/* harmony import */ var _modules_support_support_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../modules/support/support.component */ 32774);
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ngx-image-cropper */ 67545);
/* harmony import */ var _modules_register_nuban_register_nuban_register_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../modules/register/nuban-register/nuban-register.component */ 82017);
/* harmony import */ var _modules_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../modules/reset-password/reset-password.component */ 50978);
/* harmony import */ var _modules_document_upload_document_upload_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../modules/document-upload/document-upload.component */ 33552);





































// import { TransferPage } from '../modules/transfer/transfer.page';














const components = [
    _modules_support_support_component__WEBPACK_IMPORTED_MODULE_40__.SupportComponent,
    _modules_loan_loan_page__WEBPACK_IMPORTED_MODULE_39__.LoanPage,
    _modules_account_info_request_card_request_card_component__WEBPACK_IMPORTED_MODULE_38__.RequestCardComponent,
    _modules_account_info_reset_pin_reset_pin_component__WEBPACK_IMPORTED_MODULE_37__.ResetPinComponent,
    _modules_account_info_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_36__.ChangePasswordComponent,
    _modules_account_info_account_info_page__WEBPACK_IMPORTED_MODULE_35__.AccountInfoPage,
    _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_29__.TabsPage,
    _components_add_fund_add_fund_component__WEBPACK_IMPORTED_MODULE_34__.AddFundComponent,
    _components_balance_balance_component__WEBPACK_IMPORTED_MODULE_28__.BalanceComponent,
    _components_transaction_history_transaction_history_component__WEBPACK_IMPORTED_MODULE_27__.TransactionHistoryComponent,
    _modules_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent,
    _header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent,
    _modules_register_register_component__WEBPACK_IMPORTED_MODULE_2__.RegisterComponent,
    _core_templates_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__.SignupComponent,
    _modules_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__.WelcomeComponent,
    _modules_choose_signin_choose_signin_component__WEBPACK_IMPORTED_MODULE_5__.ChooseSigninComponent,
    _loader_loader_component__WEBPACK_IMPORTED_MODULE_6__.LoaderComponent,
    _modules_register_verify_bvn_verify_bvn_component__WEBPACK_IMPORTED_MODULE_7__.VerifyBvnComponent,
    _modules_register_verify_info_verify_info_component__WEBPACK_IMPORTED_MODULE_8__.VerifyInfoComponent,
    _modules_register_create_account_create_account_component__WEBPACK_IMPORTED_MODULE_9__.CreateAccountComponent,
    _modules_register_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_10__.VerifyEmailComponent,
    _modules_register_verify_phone_verify_phone_component__WEBPACK_IMPORTED_MODULE_11__.VerifyPhoneComponent,
    _modules_register_become_royalty_become_royalty_component__WEBPACK_IMPORTED_MODULE_12__.BecomeRoyaltyComponent,
    _modules_register_select_account_type_select_account_type_component__WEBPACK_IMPORTED_MODULE_13__.SelectAccountTypeComponent,
    _modules_register_bvn_success_bvn_success_component__WEBPACK_IMPORTED_MODULE_14__.BvnSuccessComponent,
    _modules_register_image_image_component__WEBPACK_IMPORTED_MODULE_15__.ImageComponent,
    _modules_register_done_done_component__WEBPACK_IMPORTED_MODULE_16__.DoneComponent,
    _modules_register_details_details_component__WEBPACK_IMPORTED_MODULE_17__.DetailsComponent,
    _modules_register_co_operatre_details_co_operatre_details_component__WEBPACK_IMPORTED_MODULE_18__.CoOperatreDetailsComponent,
    _modules_register_image_done_image_done_component__WEBPACK_IMPORTED_MODULE_19__.ImageDoneComponent,
    _modules_register_royal_setup_royal_setup_component__WEBPACK_IMPORTED_MODULE_20__.RoyalSetupComponent,
    _core_templates_dashboard_template_dashboard_template_component__WEBPACK_IMPORTED_MODULE_21__.DashboardTemplateComponent,
    _core_templates_in_page_in_page_component__WEBPACK_IMPORTED_MODULE_22__.InPageComponent,
    _modules_profile_profile_component__WEBPACK_IMPORTED_MODULE_23__.ProfileComponent,
    _modules_history_history_component__WEBPACK_IMPORTED_MODULE_24__.HistoryComponent,
    _modules_airtime_airtime_component__WEBPACK_IMPORTED_MODULE_25__.AirtimeComponent,
    _modules_bills_payments_cabletv_cabletv_component__WEBPACK_IMPORTED_MODULE_26__.CabletvComponent,
    _modules_account_info_limit_limit_component__WEBPACK_IMPORTED_MODULE_30__.LimitComponent,
    _modules_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_42__.ResetPasswordComponent,
    _modules_document_upload_document_upload_component__WEBPACK_IMPORTED_MODULE_43__.DocumentUploadComponent,
    // TransferPage,
    _modules_bills_payments_products_products_component__WEBPACK_IMPORTED_MODULE_31__.ProductsComponent,
    _pin_pin_component__WEBPACK_IMPORTED_MODULE_32__.PinComponent,
    _modules_bills_payments_bills_payments_page__WEBPACK_IMPORTED_MODULE_33__.BillsPaymentsPage,
    _modules_register_nuban_register_nuban_register_component__WEBPACK_IMPORTED_MODULE_41__.NubanRegisterComponent,
    _modules_register_create_account_create_account_component__WEBPACK_IMPORTED_MODULE_9__.CreateAccountComponent,
];
const materialModules = [_angular_router__WEBPACK_IMPORTED_MODULE_44__.RouterModule, ngx_image_cropper__WEBPACK_IMPORTED_MODULE_45__.ImageCropperModule];
let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_46__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_47__.NgModule)({
        declarations: [...components],
        entryComponents: [...components],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_48__.CommonModule,
            ...materialModules,
            _angular_forms__WEBPACK_IMPORTED_MODULE_49__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_49__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_50__.IonicModule.forRoot(),
        ],
        exports: [_angular_common__WEBPACK_IMPORTED_MODULE_48__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_50__.IonicModule, ...materialModules, ...components],
    })
], ComponentsModule);



/***/ }),

/***/ 43646:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component.html?ngResource */ 2011);
/* harmony import */ var _header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.scss?ngResource */ 75413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
        console.log('header');
    }
};
HeaderComponent.ctorParameters = () => [];
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-header',
        template: _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HeaderComponent);



/***/ }),

/***/ 98868:
/*!*******************************************************!*\
  !*** ./src/app/components/loader/loader.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderComponent": () => (/* binding */ LoaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _loader_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader.component.html?ngResource */ 96085);
/* harmony import */ var _loader_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.component.scss?ngResource */ 46089);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let LoaderComponent = class LoaderComponent {
    constructor() { }
    ngOnInit() { }
};
LoaderComponent.ctorParameters = () => [];
LoaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-loader',
        template: _loader_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_loader_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoaderComponent);



/***/ }),

/***/ 71536:
/*!*************************************************!*\
  !*** ./src/app/components/pin/pin.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PinComponent": () => (/* binding */ PinComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _pin_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pin.component.html?ngResource */ 99556);
/* harmony import */ var _pin_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pin.component.scss?ngResource */ 44224);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/http/services/auth.service */ 41194);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);








let PinComponent = class PinComponent {
    constructor(toast, auth, alertController) {
        this.toast = toast;
        this.auth = auth;
        this.alertController = alertController;
        this.done = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.loading = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.user = JSON.parse(localStorage.getItem('user'));
        this.transactionPin = [];
        this.err = '';
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Create Pin',
                message: 'Your must create a pin to make transactions, go to Dashbaord/Account and create pin to.',
                buttons: ['OK'],
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    presentAlertNertwor() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Error',
                message: this.err,
                buttons: ['OK'],
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    ngOnInit() {
        this.auth
            .post({ UserId: +this.user.userId, Pin: '0000' }, 'UserManager.UserService.FetchUserPin')
            .subscribe((res) => {
            console.log(res);
            if (res.data.data.status === true) {
                this.presentAlert();
                this.close.emit();
                this.loading.emit();
                return;
            }
        }, (err) => {
            this.err = 'Please check your network and try again';
            this.presentAlertNertwor();
            // this.close.emit();
            console.log('res');
            return;
        });
    }
    getPinValue(e) {
        if (e === 11) {
            this.transactionPin.pop();
            console.log(this.transactionPin);
        }
        else {
            this.transactionPin.push(e);
        }
        if (this.transactionPin.length === 4) {
            this.loading.emit();
            this.auth
                .post({ UserId: +this.user.userId, Pin: this.transactionPin.join('') }, 'UserManager.UserService.FetchUserPin')
                .subscribe((res) => {
                console.log(res);
                if (res.status === '00') {
                    // deal with register
                    console.log(res.data.data.status);
                    if (res.data.data.status === true) {
                        this.done.emit();
                    }
                    else {
                        this.toast.error('Invalid Pin', 'Error');
                        this.loading.emit();
                    }
                    this.transactionPin = [];
                }
                else {
                    this.toast.error(res.data.responseMessage, 'Error');
                    this.loading.emit();
                    console.log(res.data.responseMessage);
                    this.transactionPin = [];
                }
            }, (err) => {
                this.toast.error('Error try again', 'Error');
                this.loading.emit();
                this.transactionPin = [];
            });
        }
    }
    closeDraw() {
        this.close.emit();
    }
};
PinComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService },
    { type: _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
PinComponent.propDecorators = {
    done: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }],
    loading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }],
    close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
PinComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-pin',
        template: _pin_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('slideInOut', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)(':enter', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({ transform: 'translateY(100%)' }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('500ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({ transform: 'translateY(-0%)' })),
                ]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)(':leave', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('200ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({ transform: 'translateY(-100%)' })),
                ]),
            ]),
        ],
        styles: [_pin_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PinComponent);



/***/ }),

/***/ 97420:
/*!*********************************************************************************!*\
  !*** ./src/app/components/transaction-history/transaction-history.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionHistoryComponent": () => (/* binding */ TransactionHistoryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _transaction_history_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transaction-history.component.html?ngResource */ 36324);
/* harmony import */ var _transaction_history_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transaction-history.component.scss?ngResource */ 99710);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/http/services/auth.service */ 41194);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ 31631);







let TransactionHistoryComponent = class TransactionHistoryComponent {
    constructor(auth, toast) {
        this.auth = auth;
        this.toast = toast;
        this.show = false;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.data = [];
        this.loading = false;
        this.details = {};
        this.tran = {};
        this.visible = false;
    }
    ngOnInit() {
        setInterval(() => {
            this.getTransactions();
        }, 60000);
        this.getTransactions();
    }
    viewBalance() {
        this.show = !this.show;
    }
    getTransactions() {
        if (!this.user ||
            !this.user.accountNos ||
            this.user.accountNos.length === 0) {
            return;
        }
        const data = {
            accountId: +this.user.accountNos[0].accountId,
        };
        this.auth
            .post(data, 'Cba.BankingService.FetchAccountTransactions')
            .subscribe((res) => {
            console.log(res);
            this.loading = false;
            this.data = res.data.data;
            console.log(this.data);
            if (res.data.responseCode === '00') {
            }
            else {
                console.log(res);
            }
        }, (err) => {
            console.error(err.message);
            this.loading = false;
        });
    }
    setTrans(transaction) {
        this.loading = true;
        const payload = {
            accountId: +this.user.accountNos[0].accountId,
            transactionId: transaction.transactionId,
        };
        this.auth
            .post(payload, 'Cba.BankingService.FetchTransactionDetails')
            .subscribe((res) => {
            this.loading = false;
            console.log(res);
            if (res.data.responseCode === '00') {
                this.details = res.data.data;
                this.tran = transaction;
                this.setVissible();
            }
            else {
                this.toast.error(res.data.responseMessage, 'Error');
            }
        }, (err) => {
            this.toast.error('Failed to fetch transaction types', 'Error');
            // this.router.navigate(['/dashboard']);
            this.loading = false;
        });
        console.log(transaction);
    }
    setVissible() {
        this.visible = !this.visible;
    }
};
TransactionHistoryComponent.ctorParameters = () => [
    { type: _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService }
];
TransactionHistoryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-transaction-history',
        template: _transaction_history_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)('slideInOut', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)(':enter', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({ transform: 'translateY(100%)' }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('500ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({ transform: 'translateY(-0%)' })),
                ]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)(':leave', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('200ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({ transform: 'translateY(-100%)' })),
                ]),
            ]),
        ],
        styles: [_transaction_history_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TransactionHistoryComponent);



/***/ }),

/***/ 88951:
/*!*******************************************!*\
  !*** ./src/app/core/auth/auth.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let AuthService = class AuthService {
    constructor() {
        this.isAuthenticated$ = false;
        if (localStorage.getItem('token')) {
            this.isAuthenticated$ = true;
        }
    }
    getUserId() {
        return this.user;
    }
};
AuthService.ctorParameters = () => [];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root',
    })
], AuthService);



/***/ }),

/***/ 27574:
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/auth.service */ 88951);




let AuthGuard = class AuthGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate() {
        if (!this.auth.isAuthenticated$) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], AuthGuard);



/***/ }),

/***/ 41194:
/*!****************************************************!*\
  !*** ./src/app/core/http/services/auth.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _ionic_native_uid_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/uid/ngx */ 86649);
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ 61832);







let AuthService = class AuthService {
    constructor(uid, androidPermissions, httpClient) {
        this.uid = uid;
        this.androidPermissions = androidPermissions;
        this.httpClient = httpClient;
        this.baseUrl = 'https://bankingsandboxapi.azurewebsites.net/api/v1/proxy';
        this.fileUrl = 'https://fileservice01.azurewebsites.net/api/Files/Upload';
        this.notificationBaseUrl = 'https://notificationservice01.azurewebsites.net';
        this.headers = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
                /* eslint-disable camelcase */
                'Content-type': 'application/json',
                Tenant: 'REX',
                Authorization: !localStorage.getItem('token')
                    ? 'NotAvailable'
                    : localStorage.getItem('token'),
            }),
        };
        this.getImei();
    }
    // baseUrl = 'https://api.test.woodcoreapp.com/api/v1/clients';
    // handle error method
    handleError(errorRsponse) {
        if (errorRsponse.error instanceof ErrorEvent) {
            console.log('error from frontend', errorRsponse.error);
        }
        else {
            console.log('error from server', errorRsponse);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => errorRsponse);
    }
    // onboarding service
    sendEmail(subject, messageBody, receiver, cc) {
        const data = {
            subject,
            messageBody,
            receiver,
            cc,
        };
        console.log(data);
        return this.httpClient
            .post(this.notificationBaseUrl +
            '/notificationservice/api/notification/sendmails', data, this.headers)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    // login service
    post(data, action) {
        const payload = {
            tenant: 'REX',
            channel: 'MobileApp',
            channelIdentified: this.imei ? this.imei : '12345',
            action,
            data,
        };
        console.log(payload);
        console.log('return', this.uid.IMEI);
        console.log('state', this.imei);
        return this.httpClient
            .post(this.baseUrl, payload, this.headers)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    fileUpload(data) {
        console.log(data);
        return this.httpClient
            .post(this.fileUrl, data, this.headers)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    getImei() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const { hasPermission } = yield this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_PHONE_STATE);
            if (!hasPermission) {
                const result = yield this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_PHONE_STATE);
                if (!result.hasPermission) {
                    throw new Error('Permissions required');
                }
                // ok, a user gave us permission, we can get him identifiers after restart app
                return;
            }
            this.imei = this.uid.IMEI;
            return this.uid.IMEI;
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _ionic_native_uid_ngx__WEBPACK_IMPORTED_MODULE_0__.Uid },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_1__.AndroidPermissions },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root',
    })
], AuthService);



/***/ }),

/***/ 26094:
/*!************************************************!*\
  !*** ./src/app/core/services/photo.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoService": () => (/* binding */ PhotoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/filesystem */ 91662);




let PhotoService = class PhotoService {
    constructor() {
        this.photos = [];
        this.selectedImage = '';
        this.convertBlobToBase64 = (blob) => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onerror = reject;
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.readAsDataURL(blob);
        });
    }
    addNewToGallery() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            // Take a photo
            const capturedPhoto = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.Camera.getPhoto({
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.CameraResultType.Uri,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.CameraSource.Camera,
                quality: 100,
            });
            console.log('capturedPhoto', capturedPhoto);
            const savedImageFile = yield this.savePicture(capturedPhoto);
            console.log('savedImageFile', savedImageFile);
            this.photos.unshift(savedImageFile);
            return yield this.savePicture(capturedPhoto);
        });
    }
    savePicture(photo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const base64Data = yield this.readAsBase64(photo);
            // Write the file to the data directory
            const fileName = new Date().getTime() + '.jpeg';
            const savedFile = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Filesystem.writeFile({
                path: fileName,
                data: base64Data,
                directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Directory.Data,
            });
            // Use webPath to display the new image instead of base64 since it's
            // already loaded into memory
            return {
                filepath: fileName,
                webviewPath: photo.webPath,
            };
        });
    }
    readAsBase64(photo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            // Fetch the photo, read as a blob, then convert to base64 format
            const response = yield fetch(photo.webPath);
            const blob = yield response.blob();
            // console.log((await this.convertBlobToBase64(blob)) as string);
            this.selectedImage = (yield this.convertBlobToBase64(blob));
            return (yield this.convertBlobToBase64(blob));
        });
    }
};
PhotoService.ctorParameters = () => [];
PhotoService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], PhotoService);



/***/ }),

/***/ 14973:
/*!***********************************************************************************!*\
  !*** ./src/app/core/templates/dashboard-template/dashboard-template.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardTemplateComponent": () => (/* binding */ DashboardTemplateComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _dashboard_template_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-template.component.html?ngResource */ 71090);
/* harmony import */ var _dashboard_template_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-template.component.scss?ngResource */ 53792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/status-bar */ 19326);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 34101);




// import { MenuController } from '@ionic/angular';
// import { Component } from '@angular/core';



let DashboardTemplateComponent = class DashboardTemplateComponent {
    constructor(router, toast) {
        this.router = router;
        this.toast = toast;
        this.active = '';
        this.imageSrc = 'assets/icon/royalL.png';
        this.user = JSON.parse(localStorage.getItem('user'));
        this.nav = [
            // {
            //   name: 'Overview',
            //   link: '/nav/about',
            //   icon: 'assets/icon/dashboard.png',
            // },
            {
                name: 'Transfer',
                link: '/action/transfer',
                icon: 'assets/icon/cards.png',
            },
            {
                name: 'Bills Payment',
                link: '/action/bills-payment',
                icon: 'assets/icon/airtime.png',
            },
            {
                name: 'Airtime and Data',
                link: '/action/airtime',
                icon: 'assets/icon/payment.png',
            },
            {
                name: 'Loan',
                link: '/action/loan',
                icon: 'assets/icon/qr.png',
            },
            // {
            //   name: 'Cards',
            //   link: '/nav/contact',
            //   icon: 'assets/icon/cards.png',
            // },
            {
                name: 'Transaction History',
                link: '/action/history',
                icon: 'assets/icon/cheques.png',
            },
            // {
            //   name: 'Settings',
            //   link: '/action/profile',
            //   icon: 'assets/icon/setting.png',
            // },
            // {
            //   name: 'Profile',
            //   link: '/action/profile',
            //   icon: 'assets/icon/bills.png',
            // },
        ];
        this.router.events.subscribe((event) => {
            this.active = event.url;
        });
        const setStatusBarStyleDark = () => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_2__.StatusBar.setStyle({ style: _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_2__.Style.Light });
        });
        setStatusBarStyleDark();
        _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_2__.StatusBar.setBackgroundColor({
            color: '#ffffff',
        });
    }
    ngOnInit() {
        const user = JSON.parse(localStorage.getItem('user'));
        this.photo = user.photo ? user.photo : 'assets/icon/hey.png';
    }
    logout() {
        localStorage.setItem('user', '');
        localStorage.setItem('token', '');
        this.router.navigate(['/login']);
        this.toast.success('Logout Successful', 'Success');
    }
};
DashboardTemplateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService }
];
DashboardTemplateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-dashboard-template',
        template: _dashboard_template_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_dashboard_template_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DashboardTemplateComponent);



/***/ }),

/***/ 16437:
/*!*************************************************************!*\
  !*** ./src/app/core/templates/in-page/in-page.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InPageComponent": () => (/* binding */ InPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _in_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./in-page.component.html?ngResource */ 66283);
/* harmony import */ var _in_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./in-page.component.scss?ngResource */ 88411);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/status-bar */ 19326);






let InPageComponent = class InPageComponent {
    constructor(navController) {
        this.navController = navController;
        const setStatusBarStyleDark = () => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_2__.StatusBar.setStyle({ style: _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_2__.Style.Dark });
        });
        setStatusBarStyleDark();
        _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_2__.StatusBar.setBackgroundColor({
            color: '#25214f',
        });
    }
    ngOnInit() { }
    goBack() {
        this.navController.back();
    }
};
InPageComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
InPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-in-page',
        template: _in_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_in_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InPageComponent);



/***/ }),

/***/ 12283:
/*!***********************************************************!*\
  !*** ./src/app/core/templates/signup/signup.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupComponent": () => (/* binding */ SignupComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _signup_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.component.html?ngResource */ 98741);
/* harmony import */ var _signup_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.component.scss?ngResource */ 18261);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let SignupComponent = class SignupComponent {
    constructor() { }
    ngOnInit() { }
};
SignupComponent.ctorParameters = () => [];
SignupComponent.propDecorators = {
    caption: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    subtitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    source: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    buttonTextOne: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    buttonTextTwo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    buttonActionOne: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    buttonActionTwo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    customForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
SignupComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-signup',
        template: _signup_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_signup_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SignupComponent);



/***/ }),

/***/ 9054:
/*!***********************************************************!*\
  !*** ./src/app/modules/account-info/account-info.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountInfoPage": () => (/* binding */ AccountInfoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _account_info_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-info.page.html?ngResource */ 80056);
/* harmony import */ var _account_info_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-info.page.scss?ngResource */ 11145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let AccountInfoPage = class AccountInfoPage {
    constructor() {
        this.option = 0;
        this.imageSrc = 'assets/icon/royalL.png';
        this.user = JSON.parse(localStorage.getItem('user'));
        this.show = false;
        this.documentName = localStorage.getItem('uploadID');
        this.view = false;
        this.upload = localStorage.getItem('upload');
    }
    ngOnInit() {
        const user = JSON.parse(localStorage.getItem('user'));
        this.photo = user.photo ? user.photo : 'assets/icon/hey.png';
    }
    selectedOption(e) {
        this.option = e;
    }
    enableBiomterics() {
        console.log('Biometric login enabled');
    }
    close() {
        this.show = !this.show;
    }
    viewDoc() {
        this.view = !this.view;
    }
};
AccountInfoPage.ctorParameters = () => [];
AccountInfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-account-info',
        template: _account_info_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_account_info_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AccountInfoPage);



/***/ }),

/***/ 32406:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/account-info/change-password/change-password.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordComponent": () => (/* binding */ ChangePasswordComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _change_password_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-password.component.html?ngResource */ 17210);
/* harmony import */ var _change_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password.component.scss?ngResource */ 65234);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/http/services/auth.service */ 41194);








let ChangePasswordComponent = class ChangePasswordComponent {
    constructor(toast, auth, router) {
        this.toast = toast;
        this.auth = auth;
        this.router = router;
        this.imageSrc = 'assets/icon/royalL.png';
        this.user = JSON.parse(localStorage.getItem('user'));
        this.show = false;
        this.loading = false;
        this.pass = false;
        this.check = [];
        this.passwordResetForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            oldPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
        });
    }
    isUpper(str) {
        return /[A-Z]/.test(str);
    }
    isLower(str) {
        return /[a-z]/.test(str);
    }
    checkNumber(str) {
        return /[0-9]/.test(str);
    }
    checkLength(str) {
        if (str.length >= 6) {
            return true;
        }
        else {
            return false;
        }
    }
    checkStrength(event) {
        console.log(event);
        const upper = this.isUpper(event);
        const lower = this.isLower(event);
        const isNumber = this.checkNumber(event);
        const length = this.checkLength(event);
        const res = [];
        if (upper) {
            res.push(1);
        }
        if (lower) {
            res.push(1);
        }
        if (isNumber) {
            res.push(1);
        }
        if (length) {
            res.push(1);
        }
        this.check = res;
        console.log(this.check);
    }
    ngOnInit() {
        const user = JSON.parse(localStorage.getItem('user'));
        this.photo = user.photo ? user.photo : 'assets/icon/hey.png';
    }
    close() {
        this.show = !this.show;
    }
    finish() {
        this.submit();
    }
    load() {
        this.loading = !this.loading;
    }
    closePass() {
        this.pass = false;
    }
    display() {
        if (this.check.length < 4) {
            this.toast.error('password should contain lowercase, uppercase, number and minimum of 6 characters', 'Error');
            return;
        }
        if (!this.password) {
            this.toast.error('Password is required', 'Error');
            return;
        }
        if (!this.passwordNew) {
            this.toast.error('New Password is required', 'Error');
            return;
        }
        if (this.passwordNew !== this.passwordConfirm) {
            this.toast.error('New Password does not match confirm password', 'Error');
            return;
        }
        this.pass = true;
    }
    submit() {
        this.auth
            .post({
            UserId: +this.user.userId,
            CurrentPassword: this.password,
            NewPassword: this.passwordNew,
        }, 'UserManager.UserService.ChangePassword')
            .subscribe((res) => {
            console.log(res);
            this.loading = false;
            if (res.data.responseCode === '00') {
                this.toast.success('Password Updated', 'Success');
                this.pass = false;
                this.router.navigate(['/dashboard']);
                // deal with register
            }
            else {
                this.toast.error(res.data.responseMessage, 'Error');
            }
        }, (err) => {
            this.toast.error('please try again', 'Error');
            this.loading = false;
        });
    }
};
ChangePasswordComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService },
    { type: _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
ChangePasswordComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-change-password',
        template: _change_password_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_change_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChangePasswordComponent);



/***/ }),

/***/ 40995:
/*!***************************************************************!*\
  !*** ./src/app/modules/account-info/limit/limit.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LimitComponent": () => (/* binding */ LimitComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _limit_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./limit.component.html?ngResource */ 83232);
/* harmony import */ var _limit_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./limit.component.scss?ngResource */ 34684);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/http/services/auth.service */ 41194);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);







let LimitComponent = class LimitComponent {
    constructor(toast, auth, router) {
        this.toast = toast;
        this.auth = auth;
        this.router = router;
        this.imageSrc = 'assets/icon/royalL.png';
        this.user = JSON.parse(localStorage.getItem('user'));
        this.show = false;
        this.loading = false;
        this.pass = false;
    }
    ngOnInit() {
        if (this.user.accountNos.length < 1) {
            this.toast.error('No account number available', 'Error');
            this.router.navigate(['/dashboard']);
        }
        const user = JSON.parse(localStorage.getItem('user'));
        this.photo = user.photo ? user.photo : 'assets/icon/hey.png';
        this.auth
            .post({
            UserId: +this.user.userId,
            Channel: 'MobileApp',
        }, 'UserManager.UserService.FetchUserTransactionLimit')
            .subscribe((res) => {
            console.log(res);
            if (res.status === '00') {
                this.limitInter = res.data.data[0].interLimit;
                this.limitInterTemp = res.data.data[0].interLimit;
                this.limitIntra = res.data.data[0].intraLimit;
                this.limitIntraTemp = res.data.data[0].intraLimit;
                console.log(this.limitInter, this.limitIntra);
                // deal with register
            }
            else {
            }
        }, (err) => { });
    }
    check() {
        if (!this.limitInter) {
            this.toast.error('All inputs are required', 'Error');
            return true;
        }
        if (!this.limitIntra) {
            this.toast.error('All inputs are required', 'Error');
            return true;
        }
        if (this.limitIntra > this.limitIntraTemp ||
            this.limitInter > this.limitInterTemp) {
            this.toast.error('Amount entered greater than maximum limit', 'Error');
            return false;
        }
        this.pass = true;
    }
    submit() {
        this.auth
            .post({
            Channel: 'Mobile App',
            UserId: +this.user.userId,
            IntraLimit: +this.limitIntra,
            InterLimit: +this.limitInter,
        }, 'UserManager.UserService.SaveUserTransactionLimit')
            .subscribe((res) => {
            console.log(res);
            this.loading = false;
            if (res.data.responseCode === '00') {
                this.toast.success('Limit Updated', 'Success');
                this.pass = false;
                localStorage.setItem('limit', 'true');
                this.router.navigate(['/dashboard']);
                // deal with register
            }
            else {
                this.toast.error(res.data.responseMessage, 'Error');
            }
        }, (err) => {
            this.toast.error('please try again', 'Error');
            this.loading = false;
        });
    }
    close() {
        this.show = !this.show;
    }
    finish() {
        this.submit();
    }
    load() {
        this.loading = !this.loading;
    }
    closePass() {
        this.pass = false;
    }
};
LimitComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService },
    { type: _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
LimitComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-limit',
        template: _limit_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_limit_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LimitComponent);



/***/ }),

/***/ 90201:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/account-info/request-card/request-card.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestCardComponent": () => (/* binding */ RequestCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _request_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request-card.component.html?ngResource */ 59644);
/* harmony import */ var _request_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request-card.component.scss?ngResource */ 45303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/http/services/auth.service */ 41194);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);







let RequestCardComponent = class RequestCardComponent {
    constructor(toast, auth, router) {
        this.toast = toast;
        this.auth = auth;
        this.router = router;
        this.imageSrc = 'assets/icon/royalL.png';
        this.user = JSON.parse(localStorage.getItem('user'));
        this.show = false;
        this.loading = false;
        this.pass = false;
        this.selectedBtn = true;
        this.selectedBtn1 = false;
        this.newReq = true;
        this.cardTypes = ['Master Card', 'Visa'];
        this.cardType = this.cardTypes[0];
        this.branches = [];
        this.history = [];
    }
    ngOnInit() {
        if (this.user.accountNos.length < 1) {
            this.toast.error('No account number available', 'Error');
            this.router.navigate(['/dashboard']);
        }
        const user = JSON.parse(localStorage.getItem('user'));
        this.accNum = this.user.accountNos[0].accountNo;
        this.photo = user.photo ? user.photo : 'assets/icon/hey.png';
        this.auth
            .post({
            UserId: +this.user.userId,
            Channel: 'MobileApp',
        }, 'UserManager.UserService.FetchUserTransactionLimit')
            .subscribe((res) => {
            console.log(res);
            if (res.status === '00') {
                this.limitInter = res.data.data[0].interLimit;
                this.limitIntra = res.data.data[0].intraLimit;
                console.log(this.limitInter, this.limitIntra);
                // deal with register
            }
            else {
            }
        }, (err) => { });
        this.auth.post({}, 'Cba.BankingService.FetchBranches').subscribe((res) => {
            if (res.data.responseCode === '00') {
                this.branches = res.data.data;
                this.branch = this.branches[0];
                console.log(this.branches);
            }
            else {
            }
        }, (err) => { });
        this.auth.post({}, 'Cba.BankingService.FetchCardRequests').subscribe((res) => {
            if (res.data.responseCode === '00') {
                this.history = res.data.data;
                console.log(this.history);
            }
            else {
            }
        }, (err) => { });
    }
    check() {
        if (!this.accNum) {
            this.toast.error('Account number is required', 'Error');
            return true;
        }
        if (!this.branch) {
            this.toast.error('Pickup branch is required', 'Error');
            return true;
        }
        if (!this.cardType) {
            this.toast.error('Card type is required', 'Error');
            return true;
        }
        this.pass = true;
    }
    submit() {
        this.auth
            .post({
            AccountNo: this.accNum,
            Branch: this.branch,
            CardType: this.cardType,
            Status: 'Pending',
            UserId: this.user.userId,
        }, 'Cba.BankingService.CardRequest')
            .subscribe((res) => {
            console.log(res);
            this.loading = false;
            if (res.data.responseCode === '00') {
                this.toast.success('Request Successful', 'Success');
                this.pass = false;
                localStorage.setItem('card', 'true');
                this.router.navigate(['/dashboard']);
                // deal with register
            }
            else {
                this.toast.error(res.data.responseMessage, 'Error');
            }
        }, (err) => {
            this.toast.error('please try again', 'Error');
            this.loading = false;
        });
    }
    close() {
        this.show = !this.show;
    }
    finish() {
        this.submit();
    }
    load() {
        this.loading = !this.loading;
    }
    closePass() {
        this.pass = false;
    }
    toggleRequest(e) {
        this.newReq = e;
        if (e === true) {
            this.selectedBtn = e;
            this.selectedBtn1 = false;
        }
        else {
            this.selectedBtn = false;
            this.selectedBtn1 = true;
        }
    }
};
RequestCardComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService },
    { type: _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
RequestCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-request-card',
        template: _request_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_request_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RequestCardComponent);



/***/ }),

/***/ 28229:
/*!***********************************************************************!*\
  !*** ./src/app/modules/account-info/reset-pin/reset-pin.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPinComponent": () => (/* binding */ ResetPinComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _reset_pin_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-pin.component.html?ngResource */ 7382);
/* harmony import */ var _reset_pin_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-pin.component.scss?ngResource */ 94411);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/http/services/auth.service */ 41194);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);







let ResetPinComponent = class ResetPinComponent {
    constructor(toast, auth, router) {
        this.toast = toast;
        this.auth = auth;
        this.router = router;
        this.imageSrc = 'assets/icon/royalL.png';
        this.user = JSON.parse(localStorage.getItem('user'));
        this.show = false;
        this.loading = true;
        this.pass = false;
        this.title = 'Reset Pin';
    }
    ngOnInit() {
        const user = JSON.parse(localStorage.getItem('user'));
        this.photo = user.photo ? user.photo : 'assets/icon/hey.png';
        this.auth
            .post({ UserId: +this.user.userId, Pin: '0000' }, 'UserManager.UserService.FetchUserPin')
            .subscribe((res) => {
            this.loading = false;
            console.log(res);
            if (res.status === '00') {
                if (res.data.data.status === true) {
                    this.title = 'Create Pin';
                }
                else {
                    this.title = 'Reset Pin';
                }
            }
            else {
                this.toast.error('Error please try again', 'Error');
                this.router.navigate(['/action/account-info']);
            }
        }, (err) => {
            this.loading = false;
            this.toast.error('Check your network and try again', 'Error');
            this.router.navigate(['/action/account-info']);
            console.log('res');
            return;
        });
    }
    close() {
        this.show = !this.show;
    }
    finish() {
        this.submit();
        // this.submit();
    }
    isUpper(str) {
        return /[A-Z]/.test(str);
    }
    isLower(str) {
        return /[a-z]/.test(str);
    }
    checkCharacter(str) {
        return /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(str);
    }
    checkLength1(event, type) {
        if (event.length > 4) {
            this.toast.error('Please only 4 digits are allowed', 'Error');
            // if (type === 'pin') {
            //   this.pin = this.pin.slice(0, -1);
            //   console.log(this.pin);
            //   return;
            // }
            // if (type === 'pinNew') {
            //   this.pinNew = this.pinNew.slice(0, -1);
            //   console.log(this.pinNew);
            //   return;
            // }
            // if (type === 'pinConfirm') {
            //   this.pinConfirm = this.pinConfirm.slice(0, -1);
            //   console.log(this.pinConfirm);
            //   return;
            // }
            return;
        }
        if (this.checkCharacter(event)) {
            this.toast.error('Special characters not allowed', 'Error');
            // if (type === 'pin') {
            //   this.pin = this.pin.slice(0, -1);
            //   console.log(this.pin);
            //   return;
            // }
            // if (type === 'pinNew') {
            //   this.pinNew = this.pinNew.slice(0, -1);
            //   console.log(this.pinNew);
            //   return;
            // }
            // if (type === 'pinConfirm') {
            //   this.pinConfirm = this.pinConfirm.slice(0, -1);
            //   console.log(this.pinConfirm);
            //   return;
            // }
            return false;
        }
        if (this.isUpper(event)) {
            this.toast.error('Characters not allowed', 'Error');
            // if (type === 'pin') {
            //   this.pin = this.pin.slice(0, -1);
            //   console.log(this.pin);
            //   return;
            // }
            // if (type === 'pinNew') {
            //   this.pinNew = this.pinNew.slice(0, -1);
            //   console.log(this.pinNew);
            //   return;
            // }
            // if (type === 'pinConfirm') {
            //   this.pinConfirm = this.pinConfirm.slice(0, -1);
            //   console.log(this.pinConfirm);
            //   return;
            // }
            return false;
        }
        if (this.isLower(event)) {
            this.toast.error('Characters not allowed', 'Error');
            // if (type === 'pin') {
            //   this.pin = this.pin.slice(0, -1);
            //   console.log(this.pin);
            //   return;
            // }
            // if (type === 'pinNew') {
            //   this.pinNew = this.pinNew.slice(0, -1);
            //   console.log(this.pinNew);
            //   return;
            // }
            // if (type === 'pinConfirm') {
            //   this.pinConfirm = this.pinConfirm.slice(0, -1);
            //   console.log(this.pinConfirm);
            //   return;
            // }
            return false;
        }
        if (type === 'pin') {
            this.pin = event;
            console.log(this.pin);
            return;
        }
        if (type === 'pinNew') {
            this.pinNew = event;
            console.log(this.pinNew);
            return;
        }
        if (type === 'pinConfirm') {
            this.pinConfirm = event;
            console.log(this.pinConfirm);
            return;
        }
        // this.pin =
    }
    checkLength(event) {
        console.log(event);
    }
    load() {
        this.loading = !this.loading;
    }
    closePass() {
        this.pass = false;
    }
    check() {
        if (this.title === 'Reset Pin') {
            if (!this.pin) {
                this.toast.error('Old Pin is required', 'Error');
                return;
            }
            if (this.pin.toString().length !== 4) {
                this.toast.error('Old Pin should be four characters long', 'Error');
                return;
            }
        }
        if (!this.pinNew) {
            this.toast.error('New Pin is required', 'Error');
            return;
        }
        if (this.pinNew.toString().length !== 4) {
            this.toast.error('New Pin should be four characters long', 'Error');
            return;
        }
        if (this.pinNew !== this.pinConfirm) {
            this.toast.error('New pin does not match confirm pin', 'Error');
            return;
        }
        if (this.title === 'Create Pin') {
            this.submit();
        }
        else {
            this.checkPin();
        }
    }
    checkPin() {
        this.loading = true;
        this.auth
            .post({ UserId: +this.user.userId, Pin: this.pin }, 'UserManager.UserService.FetchUserPin')
            .subscribe((res) => {
            this.loading = false;
            if (res.status === '00') {
                if (res.data.data.status === true) {
                    this.submit();
                }
                else {
                    this.toast.error('Old pin does not match your current pin', 'Error');
                }
            }
            else {
                this.toast.error('Error please try again', 'Error');
                this.loading = false;
            }
        }, (err) => {
            this.loading = false;
            this.toast.error('Check your network and try again', 'Error');
            console.log('res');
            return;
        });
    }
    submit() {
        this.loading = true;
        this.auth
            .post({
            Id: +this.user.userId,
            Pin: this.pinNew.toString(),
        }, 'UserManager.UserService.UpdatePin')
            .subscribe((res) => {
            console.log(res);
            this.loading = false;
            if (res.data.responseCode === '00') {
                this.toast.success('Pin changed successfully', 'Success');
                this.router.navigate(['/dashboard']);
                // deal with register
            }
            else {
                this.toast.error(res.data.responseMessage, 'Error');
            }
        }, (err) => {
            this.toast.error('please try again', 'Error');
            this.loading = false;
        });
    }
    changeConfirmPin(e) {
        console.log(this.pinConfirm);
        if (this.pinConfirm.length > 4) {
            this.pinConfirm = this.pinConfirm.slice(0, -1);
            console.log(this.pinConfirm);
            return;
        }
    }
    changePin(e) { }
    changeNewPin(e) { }
};
ResetPinComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService },
    { type: _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
ResetPinComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-reset-pin',
        template: _reset_pin_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_reset_pin_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ResetPinComponent);



/***/ }),

/***/ 36225:
/*!******************************************************!*\
  !*** ./src/app/modules/airtime/airtime.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AirtimeComponent": () => (/* binding */ AirtimeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _airtime_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./airtime.component.html?ngResource */ 53845);
/* harmony import */ var _airtime_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./airtime.component.scss?ngResource */ 39802);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/http/services/auth.service */ 41194);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);








let AirtimeComponent = class AirtimeComponent {
    constructor(auth, toast, router) {
        this.auth = auth;
        this.toast = toast;
        this.router = router;
        this.selectedBtn = true;
        this.selectedBtn1 = false;
        this.newReq = true;
        this.transType = 0;
        this.vars = [];
        this.subs = [];
        this.products = [];
        this.add = false;
        this.loading = true;
        this.show = false;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.benes = localStorage.getItem('benNums')
            ? JSON.parse(localStorage.getItem('benNums'))
            : [];
        this.beneficiaryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            beneficiaryAccount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            narration: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
        });
    }
    ngOnInit() {
        console.log(this.user.accountNos.length);
        this.fetchData();
        this.accNum = this.user.accountNos[0]
            ? this.user.accountNos[0].accountNo
            : '';
    }
    fetchData() {
        try {
            this.auth
                .post({ VasCategoryId: 4 }, 'Cba.ValueAddedService.FetchTypes')
                .subscribe((res) => {
                if (res.status === '00') {
                    // deal with register
                    this.loading = false;
                    this.vars = res.data;
                    console.log(this.vars);
                }
                else {
                    this.loading = false;
                    this.router.navigate(['/dashboard']);
                    this.toast.error(res.data.responseMessage, 'Error');
                }
            }, (err) => {
                this.loading = false;
                this.toast.error('Check your internet connection', 'Error');
                this.router.navigate(['/dashboard']);
            });
            this.auth
                .post({ VasCategoryId: 2 }, 'Cba.ValueAddedService.FetchTypes')
                .subscribe((res) => {
                if (res.status === '00') {
                    // deal with register
                    this.loading = false;
                    this.subs = res.data;
                    console.log(this.subs);
                }
                else {
                    console.log(res.data.responseMessage);
                }
            }, (err) => console.error(err.message));
        }
        catch (err) {
            console.log(err);
            this.loading = false;
        }
    }
    fetchProduct(code) {
        console.log();
        this.auth
            .post({ vasTypeCode: code }, 'Cba.ValueAddedService.FetchProducts')
            .subscribe((res) => {
            if (res.status === '00') {
                // deal with register
                this.products = res.data;
                this.productCode = this.products[0].productCode;
                console.log(this.vars);
                console.log(res);
            }
            else {
                console.log(res.data.responseMessage);
            }
        }, (err) => console.error(err.message));
    }
    transactionType(e, code) {
        this.fetchProduct(code);
        console.log('This is the code:', code);
        this.transType = e;
    }
    adds() {
        if (this.user.hasBVN === false) {
            this.toast.error(`You have to verify your BVN to carry out transactions`, 'Error');
            return true;
        }
        if (!this.benNum) {
            this.toast.error('mobile number is required', 'Error');
            return;
        }
        if (!this.name) {
            this.toast.error('name is required', 'Error');
            return;
        }
        for (let i = 0; i < this.benes.length; i++) {
            if (this.benes[i].phoneNumber === this.benNum) {
                this.toast.error('Number already exist', 'Error');
                return;
            }
        }
        this.benes.unshift({
            name: this.name,
            phoneNumber: this.benNum,
        });
        localStorage.setItem('benNums', JSON.stringify(this.benes));
    }
    delete(phone) {
        console.log(this.benes);
        const data = [];
        for (let i = 0; i < this.benes.length; i++) {
            if (this.benes[i].phoneNumber !== phone) {
                data.push(this.benes[i]);
            }
        }
        this.benes = data;
        localStorage.setItem('benNums', JSON.stringify(this.benes));
        console.log(this.benes);
    }
    use(num) {
        this.phoneNumber = num;
        this.newReq = true;
    }
    create() {
        console.log('Hey');
    }
    new() {
        this.add = !this.add;
    }
    submit() {
        this.loading = true;
        let payload;
        let acc;
        for (let i = 0; i < this.products.length; i++) {
            if (this.productCode === this.products[i].productCode) {
                payload = this.products[i];
            }
        }
        for (let i = 0; i < this.user.accountNos.length; i++) {
            if (this.user.accountNos[i].accountNo === this.accNum) {
                acc = this.user.accountNos[i].accountId;
            }
        }
        this.auth
            .post({
            clientId: this.user.clientId,
            accountId: acc,
        }, 'Cba.BankingService.FetchAccountBalance')
            .subscribe((res) => {
            console.log(res.data.data.balance);
            if (res.data.responseCode === '00') {
                console.log(res.data.data.balance, +payload.productPrice);
                if (+payload.productPrice > res.data.data.balance) {
                    this.loading = false;
                    this.toast.error('Insufficient balance', 'Error');
                    return;
                }
                else {
                    this.auth
                        .post({
                        VasTypeCode: payload.vasTypeCode,
                        ProductCode: payload.productCode,
                        RefNo: this.phoneNumber,
                        Amount: +payload.productPrice,
                        CustomerAccountNo: this.accNum,
                    }, 'Cba.ValueAddedService.PostTransaction')
                        .subscribe((res) => {
                        this.loading = false;
                        console.log(res);
                        if (res.data.status === '200') {
                            this.toast.success('Transaction Successfull', 'Success');
                            this.show = false;
                            // deal with register
                        }
                        else {
                            this.toast.error('Error please try again', 'Error');
                            console.log(res.data.responseMessage);
                        }
                    }, (err) => {
                        console.error(err.message);
                        this.toast.error('Error please try again', 'Error');
                        this.loading = false;
                    });
                }
                // deal with register
            }
            else {
                console.log(res.data.responseMessage);
                this.toast.error(res.data.responseMessage, 'Error');
            }
        }, (err) => {
            this.loading = false;
            this.toast.error('Please try again', 'Error');
        });
    }
    toggleRequest(e) {
        this.newReq = e;
        if (e === true) {
            this.selectedBtn = e;
            this.selectedBtn1 = false;
        }
        else {
            this.selectedBtn = false;
            this.selectedBtn1 = true;
        }
    }
    check() {
        if (this.user.hasBVN === false) {
            this.toast.error(`You have to verify your BVN to carry out transactions`, 'Error');
            return true;
        }
        if (!this.phoneNumber) {
            this.toast.error('Phone number required', 'Error');
            return;
        }
        if (!this.productCode) {
            this.toast.error('Product required', 'Error');
            return;
        }
        this.show = true;
    }
    finish() {
        this.submit();
    }
    load() {
        this.loading = !this.loading;
    }
    close() {
        this.show = false;
    }
};
AirtimeComponent.ctorParameters = () => [
    { type: _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
AirtimeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-airtime',
        template: _airtime_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_airtime_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AirtimeComponent);



/***/ }),

/***/ 4524:
/*!***************************************************************!*\
  !*** ./src/app/modules/bills-payments/bills-payments.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillsPaymentsPage": () => (/* binding */ BillsPaymentsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _bills_payments_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bills-payments.page.html?ngResource */ 28423);
/* harmony import */ var _bills_payments_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bills-payments.page.scss?ngResource */ 26994);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/http/services/auth.service */ 41194);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 34101);







let BillsPaymentsPage = class BillsPaymentsPage {
    constructor(auth, router, toast) {
        this.auth = auth;
        this.router = router;
        this.toast = toast;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.billCategories = [];
        this.loading = true;
    }
    ngOnInit() {
        this.fetchBillsCategory();
    }
    //   You can use FetchVasType to get the Vas type code
    // FetchProduct to get the product code
    // FetchVasCategory for the payment type
    fetchBillsCategory() {
        this.auth.post(null, 'Cba.ValueAddedService.FetchCategories').subscribe((data) => {
            this.loading = false;
            if (data.status === '00') {
                let res = [];
                res = data.data;
                // for (let i = 0; i < res.length; i++) {
                //   if (res[i].code === 'Data') {
                //     res[i].icon = `assets/icon/dataIcon.png`;
                //   } else if (res[i].code === 'Utility') {
                //     res[i].icon = `assets/icon/utilityIcon.png`;
                //   } else {
                //     res[i].icon = `assets/icon/${res[i].code}.svg`;
                //   }
                // }
                this.billCategories = res;
                console.log(res);
                console.log(this.billCategories);
            }
            else {
                this.loading = false;
                this.toast.error(data.data.responseMessage, 'Error');
                this.router.navigate(['/dashboard']);
            }
        }, (err) => {
            this.loading = false;
            this.router.navigate(['/dashboard']);
            this.toast.error('Check your internet connection', 'Error');
        });
    }
};
BillsPaymentsPage.ctorParameters = () => [
    { type: _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService }
];
BillsPaymentsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-bills-payments',
        template: _bills_payments_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_bills_payments_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BillsPaymentsPage);



/***/ }),

/***/ 92073:
/*!*********************************************************************!*\
  !*** ./src/app/modules/bills-payments/cabletv/cabletv.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CabletvComponent": () => (/* binding */ CabletvComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _cabletv_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cabletv.component.html?ngResource */ 42998);
/* harmony import */ var _cabletv_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cabletv.component.scss?ngResource */ 56765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/http/services/auth.service */ 41194);






let CabletvComponent = class CabletvComponent {
    constructor(auth, route) {
        this.auth = auth;
        this.route = route;
        this.billProducts = [];
        this.transType = 0;
        this.categoryId = 0;
        this.typeCode = '';
    }
    ngOnInit() {
        this.typeCode = this.route.snapshot.queryParamMap.get('id');
        // this.route.snapshot.queryParams.subscribe(data => {
        //   this.categoryId = data.id;
        //   console.log('See your VAS ID:', this.categoryId);
        // });
        console.log('See your VAS ID:', this.typeCode);
        this.fetchBillsProducts();
    }
    fetchBillsProducts() {
        this.auth.post({ vasTypeCode: this.typeCode }, 'Cba.ValueAddedService.FetchProducts').subscribe((data) => {
            if (data.status === '00') {
                this.billProducts = data.data;
                console.log(this.billProducts);
            }
            else {
                console.log('Could not fetch data');
            }
        }, (err) => console.error(err.message));
    }
};
CabletvComponent.ctorParameters = () => [
    { type: src_app_core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
CabletvComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-cabletv',
        template: _cabletv_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_cabletv_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CabletvComponent);



/***/ }),

/***/ 73871:
/*!***********************************************************************!*\
  !*** ./src/app/modules/bills-payments/products/products.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsComponent": () => (/* binding */ ProductsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _products_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.component.html?ngResource */ 87799);
/* harmony import */ var _products_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.component.scss?ngResource */ 59702);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var src_app_core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/http/services/auth.service */ 41194);









let ProductsComponent = class ProductsComponent {
    constructor(auth, toast, route, router) {
        this.auth = auth;
        this.toast = toast;
        this.route = route;
        this.router = router;
        this.selectedBtn = true;
        this.selectedBtn1 = false;
        this.newReq = true;
        this.transType = 0;
        this.vars = [];
        this.products = [];
        this.add = false;
        this.loading = true;
        this.prodLoad = true;
        this.typeCode = 0;
        this.show = false;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.benes = localStorage.getItem('benNums')
            ? JSON.parse(localStorage.getItem('benNums'))
            : [];
        this.beneficiaryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            beneficiaryAccount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            narration: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
        });
    }
    ngOnInit() {
        this.typeCode = Number(this.route.snapshot.queryParamMap.get('id'))
            ? Number(this.route.snapshot.queryParamMap.get('id'))
            : 6;
        this.fetchData();
        this.accNum = this.user.accountNos[0].accountNo;
    }
    fetchData() {
        console.log();
        this.auth
            .post({ VasCategoryId: this.typeCode }, 'Cba.ValueAddedService.FetchTypes')
            .subscribe((res) => {
            this.loading = false;
            if (res.status === '00') {
                // deal with register
                this.vars = res.data;
                console.log(this.vars);
            }
            else {
                this.loading = false;
                this.router.navigate(['/dashboard']);
                this.toast.error(res.data.responseMessage, 'Error');
            }
        }, (err) => {
            this.loading = false;
            this.router.navigate(['/dashboard']);
            this.toast.error('Check your internet connection', 'Error');
        });
    }
    fetchProduct(code) {
        console.log();
        this.auth
            .post({ vasTypeCode: code }, 'Cba.ValueAddedService.FetchProducts')
            .subscribe((res) => {
            if (res.status === '00') {
                this.prodLoad = false;
                // deal with register
                this.products = res.data;
                this.productCode = this.products[0].productCode;
                console.log(this.vars);
                console.log(res);
            }
            else {
                this.prodLoad = false;
                console.log(res.data.responseMessage);
            }
        }, (err) => {
            this.prodLoad = false;
        });
    }
    transactionType(e, code) {
        this.fetchProduct(code);
        console.log('This is the code:', code);
        this.transType = e;
    }
    adds() {
        if (!this.benNum) {
            this.toast.error('mobile number is required', 'Error');
            return;
        }
        if (!this.name) {
            this.toast.error('name is required', 'Error');
            return;
        }
        for (let i = 0; i < this.benes.length; i++) {
            if (this.benes[i].phoneNumber === this.benNum) {
                this.toast.error('Number already exist', 'Error');
                return;
            }
        }
        this.benes.unshift({
            name: this.name,
            phoneNumber: this.benNum,
        });
        localStorage.setItem('benNums', JSON.stringify(this.benes));
    }
    delete(phone) {
        console.log(this.benes);
        const data = [];
        for (let i = 0; i < this.benes.length; i++) {
            if (this.benes[i].phoneNumber !== phone) {
                data.push(this.benes[i]);
            }
        }
        this.benes = data;
        localStorage.setItem('benNums', JSON.stringify(this.benes));
        console.log(this.benes);
    }
    use(num) {
        this.phoneNumber = num;
        this.newReq = true;
    }
    create() {
        console.log('Hey');
    }
    new() {
        this.add = !this.add;
    }
    submit() {
        this.loading = true;
        let payload;
        let acc;
        for (let i = 0; i < this.products.length; i++) {
            if (this.productCode === this.products[i].productCode) {
                payload = this.products[i];
            }
        }
        for (let i = 0; i < this.user.accountNos.length; i++) {
            if (this.user.accountNos[i].accountNo === this.accNum) {
                acc = this.user.accountNos[i].accountId;
            }
        }
        this.auth
            .post({
            clientId: this.user.clientId,
            accountId: acc,
        }, 'Cba.BankingService.FetchAccountBalance')
            .subscribe((res) => {
            console.log(res.data.data.balance);
            if (res.data.responseCode === '00') {
                console.log(res.data.data.balance, +payload.productPrice);
                if (+payload.productPrice > res.data.data.balance) {
                    this.loading = false;
                    this.toast.error('Insufficient balance', 'Error');
                    return;
                }
                else {
                    this.auth
                        .post({
                        VasTypeCode: payload.vasTypeCode,
                        ProductCode: payload.productCode,
                        RefNo: this.phoneNumber,
                        Amount: +payload.productPrice,
                        CustomerAccountNo: this.accNum,
                    }, 'Cba.ValueAddedService.PostTransaction')
                        .subscribe((res) => {
                        this.loading = false;
                        console.log(res);
                        if (res.data.status === '200') {
                            this.toast.success('Transaction Successfull', 'Success');
                            this.show = false;
                            // deal with register
                        }
                        else {
                            this.toast.error('Error please try again', 'Error');
                            console.log(res.data.responseMessage);
                        }
                    }, (err) => {
                        console.error(err.message);
                        this.toast.error('Error please try again', 'Error');
                        this.loading = true;
                    });
                }
                // deal with register
            }
            else {
                console.log(res.data.responseMessage);
            }
        }, (err) => {
            this.loading = false;
            this.toast.error('Please try again', 'Error');
        });
    }
    toggleRequest(e) {
        this.newReq = e;
        if (e === true) {
            this.selectedBtn = e;
            this.selectedBtn1 = false;
        }
        else {
            this.selectedBtn = false;
            this.selectedBtn1 = true;
        }
    }
    check() {
        if (this.user.hasBVN === false) {
            this.toast.error(`You have to verify your BVN to carry out transactions`, 'Error');
            return true;
        }
        if (!this.phoneNumber) {
            this.toast.error('Phone number required', 'Error');
            return;
        }
        if (!this.productCode) {
            this.toast.error('Product required', 'Error');
            return;
        }
        this.show = true;
    }
    finish() {
        this.submit();
    }
    load() {
        this.loading = !this.loading;
    }
    close() {
        this.show = false;
    }
};
ProductsComponent.ctorParameters = () => [
    { type: src_app_core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
ProductsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-products',
        template: _products_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_products_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductsComponent);



/***/ }),

/***/ 88525:
/*!******************************************************************!*\
  !*** ./src/app/modules/choose-signin/choose-signin.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChooseSigninComponent": () => (/* binding */ ChooseSigninComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _choose_signin_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./choose-signin.component.html?ngResource */ 97526);
/* harmony import */ var _choose_signin_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./choose-signin.component.scss?ngResource */ 83882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);





let ChooseSigninComponent = class ChooseSigninComponent {
    constructor(router) {
        this.router = router;
        this.source1 = 'assets/icon/royalL.png';
        this.source = 'assets/icon/royalty.png';
        this.imageSrc = 'assets/icon/phone.jpg';
    }
    ngOnInit() { }
    sign() {
        this.router.navigate(['/login']);
    }
    create() {
        this.router.navigate(['/register']);
    }
};
ChooseSigninComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ChooseSigninComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-choose-signin',
        template: _choose_signin_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_choose_signin_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChooseSigninComponent);



/***/ }),

/***/ 47920:
/*!*****************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPage": () => (/* binding */ DashboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page.html?ngResource */ 18649);
/* harmony import */ var _dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page.scss?ngResource */ 60462);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/http/services/auth.service */ 41194);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 34101);









let DashboardPage = class DashboardPage {
    constructor(auth, router, alertController, toast) {
        this.auth = auth;
        this.router = router;
        this.alertController = alertController;
        this.toast = toast;
        this.show = false;
        this.userId = localStorage.getItem('stageId');
        this.isCard = localStorage.getItem('card');
        this.limit = localStorage.getItem('limit');
        this.upload = localStorage.getItem('upload');
        this.accountId = '';
        this.accountBalance = '';
        this.loading = false;
        this.user = JSON.parse(localStorage.getItem('user'));
    }
    ngOnInit() {
        var _a, _b;
        console.log(this.user.hasBVN);
        const user = localStorage.getItem('user');
        const users = user ? JSON.parse(user) : null;
        setInterval(() => {
            this.isCard = localStorage.getItem('card');
            this.limit = localStorage.getItem('limit');
            this.upload = localStorage.getItem('upload');
            this.user = users;
        }, 500);
        if (((_b = (_a = this.user) === null || _a === void 0 ? void 0 : _a.accountNos) === null || _b === void 0 ? void 0 : _b.length) < 1) {
            this.presentAlertPrompt();
        }
        if (!this.user) {
            this.router.navigate(['/login']);
        }
    }
    presentAlertPrompt() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Account Number',
                // subHeader: 'Subtitle',
                message: 'Your account was opened wihtout an account number, please click on the button below to generate new account number',
                buttons: [
                    {
                        text: 'Generate',
                        handler: () => {
                            console.log('Confirm Ok');
                            this.loading = true;
                            this.auth
                                .post({
                                UserId: this.user.userId,
                            }, 'Cba.BankingService.GenerateAccountNo')
                                .subscribe((res) => {
                                console.log(res);
                                this.loading = false;
                                if (res.data.responseCode === '00') {
                                    // deal with register
                                    this.user.accountNos.push(res.data.data);
                                    localStorage.setItem('user', this.user);
                                    this.toast.success('Account number generated', 'Success');
                                }
                                else {
                                    this.toast.error(res.data.responseMessage, 'Error');
                                    this.presentAlertPrompt();
                                }
                            }, (err) => {
                                this.loading = false;
                                this.toast.error('Please check you internet connection', 'Error');
                                this.presentAlertPrompt();
                            });
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    viewBalance() {
        this.show = !this.show;
    }
    sha() {
        this.show = !this.show;
    }
    load() {
        return;
    }
    finish() {
        return;
    }
    close() {
        this.show = !this.show;
    }
};
DashboardPage.ctorParameters = () => [
    { type: src_app_core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService }
];
DashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-dashboard',
        template: _dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('slideInOut', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(':enter', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'translateY(100%)' }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('500ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'translateY(-0%)' })),
                ]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(':leave', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('200ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'translateY(-100%)' })),
                ]),
            ]),
        ],
        styles: [_dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DashboardPage);



/***/ }),

/***/ 33552:
/*!**********************************************************************!*\
  !*** ./src/app/modules/document-upload/document-upload.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentUploadComponent": () => (/* binding */ DocumentUploadComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _document_upload_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./document-upload.component.html?ngResource */ 66724);
/* harmony import */ var _document_upload_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./document-upload.component.scss?ngResource */ 2293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ 97160);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var src_app_core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/http/services/auth.service */ 41194);








let DocumentUploadComponent = class DocumentUploadComponent {
    constructor(auth, toast, router) {
        this.auth = auth;
        this.toast = toast;
        this.router = router;
        this.show = false;
        this.loading = false;
        this.source = 'assets/icon/royalty.png';
        this.imageSrc = 'assets/icon/done.png';
        this.user = JSON.parse(localStorage.getItem('user'));
        this.type = '';
        this.types = ['National ID', 'International Passport'];
    }
    ngOnInit() {
        this.type = 'National ID';
        console.log(this.user);
    }
    fileChangeEvent(fileInput, type) {
        console.log(fileInput);
        if (type === 'CAC') {
            this.imageError = null;
            this.fileName = null;
        }
        else {
            this.imageError1 = null;
            this.fileName1 = null;
        }
        if (fileInput.target.files && fileInput.target.files[0]) {
            // Size Filter Bytes
            const max_size = 20971520;
            const allowed_types = ['application/pdf'];
            const max_height = 15200;
            const max_width = 25600;
            if (fileInput.target.files[0].size > max_size) {
                if (type === 'CAC') {
                    this.imageError = 'Maximum size allowed is ' + max_size / 1000 + 'Mb';
                }
                else {
                    this.imageError1 =
                        'Maximum size allowed is ' + max_size / 1000 + 'Mb';
                }
                return false;
            }
            if (!lodash__WEBPACK_IMPORTED_MODULE_2__.includes(allowed_types, fileInput.target.files[0].type)) {
                if (type === 'CAC') {
                    this.imageError = 'Only PDF documents are allowed';
                }
                else {
                    this.imageError1 = 'Only PDF documents are allowed';
                }
                return false;
            }
            console.log(fileInput.target.files[0]);
            if (type === 'CAC') {
                this.fileName = fileInput.target.files[0].name.replace(/\s/g, '');
            }
            else {
                this.fileName1 = fileInput.target.files[0].name.replace(/\s/g, '');
            }
            const readData = () => {
                const reader = new FileReader();
                const future = new Promise((resolve, reject) => {
                    reader.addEventListener('load', function () {
                        resolve(reader.result);
                    }, false);
                    reader.addEventListener('error', function (event) {
                        reject(event);
                    }, false);
                    reader.readAsDataURL(fileInput.target.files[0]);
                });
                return future;
            };
            readData().then((data) => {
                console.log(data);
                if (type === 'CAC') {
                    this.cardImageBase64 = data;
                    this.isImageSaved = true;
                }
                else {
                    this.cardImageBase641 = data;
                    this.isImageSaved1 = true;
                }
            });
            // const reader = new FileReader();
            // reader.onload = (e: any) => {
            //   const image = new Image();
            //   image.src = e.target.result;
            //   image.onload = (rs: any) => {
            //     const img_height = rs.currentTarget.height;
            //     const img_width = rs.currentTarget.width;
            //     console.log(img_height, img_width);
            //     if (img_height > max_height && img_width > max_width) {
            //       if (type === 'CAC') {
            //         this.imageError =
            //           'Maximum dimentions allowed ' +
            //           max_height +
            //           '*' +
            //           max_width +
            //           'px';
            //       } else {
            //         this.imageError1 =
            //           'Maximum dimentions allowed ' +
            //           max_height +
            //           '*' +
            //           max_width +
            //           'px';
            //       }
            //       return false;
            //     } else {
            //     const imgBase64Path = e.target.result;
            //     console.log(imgBase64Path);
            //     if (type === 'CAC') {
            //       this.cardImageBase64 = imgBase64Path;
            //       this.isImageSaved = true;
            //     } else {
            //       this.cardImageBase641 = imgBase64Path;
            //       this.isImageSaved1 = true;
            //     }
            //     // this.previewImagePath = imgBase64Path;
            //     // }
            //   };
            // };
            // reader.readAsDataURL(fileInput.target.files[0]);
        }
    }
    removeImage() {
        this.cardImageBase64 = null;
        this.isImageSaved = false;
        this.fileName = null;
    }
    removeImage1() {
        this.cardImageBase641 = null;
        this.isImageSaved1 = false;
        this.fileName1 = null;
    }
    upload() {
        if (!this.cardImageBase64) {
            this.toast.error(`Select a valid CAC pdf document`, 'Error');
            return false;
        }
        if (!this.cardImageBase641) {
            this.toast.error(`Select a valid  ID pdf document`, 'Error');
            return false;
        }
        if (!this.type) {
            this.toast.error(`Type of ID is required`, 'Error');
            return false;
        }
        this.loading = true;
        const first = this.cardImageBase64.split(',');
        const mainImage = first[1];
        const data = {
            ClientId: this.user.clientId,
            Name: 'CAC Document',
            FileName: this.fileName,
            Base64String: mainImage,
            Description: 'CAC Document Upload',
        };
        this.auth.post(data, 'Cba.BankingService.DocumentUpload').subscribe((res) => {
            console.log(res);
            this.loading = false;
            if (res.data.responseCode === '00') {
                this.upload1();
            }
            else {
                this.toast.error(res.data.responseMessage, 'Error');
            }
        }, (err) => {
            this.toast.error('Error please try again', 'Error');
            this.loading = false;
        });
    }
    upload1() {
        if (!this.cardImageBase64) {
            this.toast.error(`CAC document cannot be empty`, 'Error');
            return false;
        }
        if (!this.cardImageBase641) {
            this.toast.error(`Valid ID cannot be empty`, 'Error');
            return false;
        }
        if (!this.type) {
            this.toast.error(`Type of ID is required`, 'Error');
            return false;
        }
        this.loading = true;
        const first = this.cardImageBase641.split(',');
        const mainImage = first[1];
        const data = {
            ClientId: this.user.clientId,
            Name: this.type,
            FileName: this.fileName1,
            Base64String: mainImage,
            Description: this.type + ' ' + 'Upload',
        };
        this.auth.post(data, 'Cba.BankingService.DocumentUpload').subscribe((res) => {
            console.log(res);
            this.loading = false;
            if (res.data.responseCode === '00') {
                this.toast.success('Files uploaded successfully, contact bank support for verification status', 'Success');
                localStorage.setItem('upload', 'true');
                localStorage.setItem('uploadID', this.type);
                this.router.navigate(['/dashboard']);
            }
            else {
                this.toast.error(res.data.responseMessage, 'Error');
            }
        }, (err) => {
            this.toast.error('Error please try again', 'Error');
            this.loading = false;
        });
    }
};
DocumentUploadComponent.ctorParameters = () => [
    { type: src_app_core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
DocumentUploadComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-document-upload',
        template: _document_upload_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_document_upload_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DocumentUploadComponent);



/***/ }),

/***/ 55025:
/*!******************************************************!*\
  !*** ./src/app/modules/history/history.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryComponent": () => (/* binding */ HistoryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _history_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history.component.html?ngResource */ 42714);
/* harmony import */ var _history_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history.component.scss?ngResource */ 56626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/http/services/auth.service */ 41194);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations */ 31631);










let HistoryComponent = class HistoryComponent {
    constructor(auth, toast, router) {
        this.auth = auth;
        this.toast = toast;
        this.router = router;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.loading = true;
        this.data = [];
        this.visible = false;
        this.tran = {};
        this.details = {};
        this.transType = 'debit';
        this.counter = 0;
        this.historyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            transType: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
        });
    }
    ngOnInit() {
        // let   user = JSON.parse(localStorage.getItem('user'));
        this.account = this.user.accountNos[0].accountNo;
        this.fetchTransTypes();
    }
    setTrans(transaction) {
        let id;
        for (let i = 0; i < this.user.accountNos.length; i++) {
            if (this.account === this.user.accountNos[i].accountNo) {
                id = this.user.accountNos[i].accountId;
            }
        }
        this.loading = true;
        const payload = {
            accountId: id,
            transactionId: transaction.transactionId,
        };
        this.auth
            .post(payload, 'Cba.BankingService.FetchTransactionDetails')
            .subscribe((res) => {
            this.loading = false;
            console.log(res);
            if (res.data.responseCode === '00') {
                this.details = res.data.data;
                this.tran = transaction;
                this.setVissible();
            }
            else {
                this.toast.error(res.data.responseMessage, 'Error');
            }
        }, (err) => {
            this.toast.error('Failed to fetch transaction types', 'Error');
            // this.router.navigate(['/dashboard']);
            this.loading = false;
        });
        console.log(transaction);
    }
    setVissible() {
        this.visible = !this.visible;
    }
    fetchTransTypes() {
        this.auth
            .post({}, 'Cba.BankingService.FetchAccountTransactionsHistoryTypes')
            .subscribe((res) => {
            this.loading = false;
            console.log(res);
            if (res.data.responseCode === '00') {
                this.types = res.data.data;
                this.typeId = res.data.data[0].id;
            }
            else {
                this.toast.error(res.data.responseMessage, 'Error');
                this.router.navigate(['/dashboard']);
            }
        }, (err) => {
            this.toast.error('Failed to fetch transaction types', 'Error');
            // this.router.navigate(['/dashboard']);
            this.loading = false;
        });
    }
    fetchHistory() {
        this.loading = true;
        let accId;
        console.log(this.account);
        for (let i = 0; i < this.user.accountNos.length; i++) {
            if (this.user.accountNos[i].accountNo === this.account) {
                accId = this.user.accountNos[i].accountId;
            }
        }
        this.auth
            .post({
            accountId: accId.toString(),
            transactionType: this.typeId.toString(),
            fromDate: moment__WEBPACK_IMPORTED_MODULE_3__(this.startDate).format('DD MMM YYYY'),
            toDate: moment__WEBPACK_IMPORTED_MODULE_3__(this.endDate).format('DD MMM YYYY'),
        }, 'Cba.BankingService.FetchAccountTransactionsByDateAndType')
            .subscribe((res) => {
            this.loading = false;
            console.log(res);
            if (res.data.responseCode === '00') {
                this.data = res.data.data;
            }
            else {
                this.toast.error(res.data.responseMessage, 'Error');
            }
        }, (err) => {
            this.toast.error('Failed to fetch transaction', 'Error');
            this.loading = false;
        });
    }
};
HistoryComponent.ctorParameters = () => [
    { type: _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
HistoryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-history',
        template: _history_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.trigger)('slideInOut', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.transition)(':enter', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({ transform: 'translateY(100%)' }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.animate)('500ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({ transform: 'translateY(-0%)' })),
                ]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.transition)(':leave', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.animate)('200ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({ transform: 'translateY(-100%)' })),
                ]),
            ]),
        ],
        styles: [_history_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HistoryComponent);



/***/ }),

/***/ 43274:
/*!*******************************************!*\
  !*** ./src/app/modules/loan/loan.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanPage": () => (/* binding */ LoanPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _loan_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loan.page.html?ngResource */ 54725);
/* harmony import */ var _loan_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loan.page.scss?ngResource */ 33376);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/http/services/auth.service */ 41194);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);








let LoanPage = class LoanPage {
    constructor(auth, toast, router) {
        this.auth = auth;
        this.toast = toast;
        this.router = router;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.loading = true;
        this.data = [];
        this.loadTypes = [];
        this.schedules = [];
        this.history = [];
        this.repaySchedules = [];
        this.show = false;
        this.bvn = '';
        this.fullName = '';
        this.dateOfBirth = '';
        this.phoneNumber = '';
        this.tenures = [
            { name: '6 months', value: 6 },
            { name: '12 months', value: 12 },
            { name: '24 months', value: 24 },
            { name: '36 months', value: 36 },
            { name: '48 months', value: 48 },
        ];
        this.transType = 0;
        this.tenure = this.tenures[0].value;
        this.newReq = true;
        this.selectedBtn = true;
        this.selectedBtn1 = false;
    }
    ngOnInit() {
        console.log(this.bvn);
        this.bvn = this.user.bvn;
        this.phoneNumber = this.user.phone;
        this.dateOfBirth = this.user.dob;
        this.fullName = this.user.firstName + ' ' + this.user.lastName;
        this.fetchLoanTypes();
        this.fetchHistory();
        // this.fetchBvn();
        // let   user = JSON.parse(localStorage.getItem('user'));
        this.account = this.user.accountNos[0].accountNo;
    }
    transactionType(e) {
        this.transType = e;
    }
    fetchLoanTypes() {
        this.auth.post({}, 'Loan.LoanService.FetchLoanProducts').subscribe((res) => {
            this.loading = false;
            console.log(res);
            if (res.status === '00') {
                this.loadTypes = res.data;
                this.productCode = res.data[0].loanProductKey;
            }
            else {
                this.toast.error(res.data.responseMessage, 'Error');
                this.router.navigate(['/dashboard']);
            }
        }, (err) => {
            this.toast.error('Failed to fetch loan types', 'Error');
            this.router.navigate(['/dashboard']);
            this.loading = false;
        });
    }
    fetchHistory() {
        const customerId = localStorage.getItem('loanCustomerID')
            ? localStorage.getItem('loanCustomerID')
            : '';
        this.auth
            .post({ customerKey: customerId, accountNo: this.account }, 'Loan.LoanService.FetchCustomerLoans')
            .subscribe((res) => {
            console.log(res);
            if (res.status === '00') {
                this.history = res.data;
            }
            else {
            }
        }, (err) => { });
    }
    repay(key) {
        this.loading = true;
        this.auth
            .post({
            loanAccountKey: key,
        }, 'Loan.LoanService.FetchCustomerLoanRepaymentSchedule')
            .subscribe((res) => {
            this.loading = false;
            console.log(res);
            if (res.status === '00') {
                this.repaySchedules = res.data;
                this.transType = 3;
            }
            else {
                this.toast.error(res.data.responseMessage, 'Error');
                this.transType = 0;
            }
        }, (err) => {
            this.toast.error('Check your internet connection', 'Error');
            this.transType = 0;
            this.loading = false;
        });
    }
    fetchSchedule() {
        this.loading = true;
        this.auth
            .post({
            Principal: this.principal,
            Tenure: this.tenure,
            StartDate: this.date,
            LoanKey: this.productCode,
        }, 'Loan.LoanService.CheckRepaymentSchedule')
            .subscribe((res) => {
            this.loading = false;
            console.log(res);
            if (res.status === '00') {
                this.schedules = res.data;
            }
            else {
                this.toast.error(res.data.responseMessage, 'Error');
                this.transType = 0;
            }
        }, (err) => {
            this.toast.error('Failed to fetch loan types', 'Error');
            this.transType = 0;
            this.loading = false;
        });
    }
    checkEligible() {
        this.loading = true;
        const data = {
            bvn: this.bvn,
            fullName: this.fullName,
            dateOfBirth: moment__WEBPACK_IMPORTED_MODULE_3__(this.dateOfBirth).format('YYYY-MM-DD'),
            phoneNumber: this.phoneNumber,
            productTypeKey: this.productCode,
        };
        this.auth.post(data, 'Loan.LoanService.FetchLoanEligibility').subscribe((res) => {
            this.loading = false;
            console.log(res);
            if (res.data[0].offerEligibilityStatus === 'Eligible') {
                this.fetchSchedule();
                this.transType = 1;
            }
            else {
                this.toast.error('Not Eligible for this offer', 'Error');
            }
        }, (err) => {
            this.loading = false;
            this.toast.error('Unable to check Eligibility', 'Error');
            this.loading = false;
        });
    }
    // fetchBvn() {
    //   console.log(this.bvn);
    //   const data = {
    //     bvn: this.bvn,
    //     show_detail: true,
    //   };
    //   this.auth.post(data, 'Nibss.BvnService.ValidateBvn').subscribe(
    //     (res: any) => {
    //       console.log(res);
    //       if (res.data.bvn) {
    //         this.fullName = res.data.fullName;
    //         this.dateOfBirth = res.data.dateOfBirth;
    //         this.phoneNumber = res.data.phoneNo;
    //       } else {
    //       }
    //     },
    //     (err) => {
    //       this.toast.error('Failed to fetch BVN data', 'Error');
    //       this.router.navigate(['/dashboard']);
    //     }
    //   );
    // }
    next() {
        if (!this.account) {
            this.toast.error('Account is required', 'Error');
            return true;
        }
        if (!this.productCode) {
            this.toast.error('Loan type is required', 'Error');
            return true;
        }
        if (!this.tenure) {
            this.toast.error('Tenure is required', 'Error');
            return true;
        }
        if (!this.principal) {
            this.toast.error('Amount is required', 'Error');
            return true;
        }
        if (!this.date) {
            this.toast.error('Date is required', 'Error');
            return true;
        }
        this.checkEligible();
    }
    submit() {
        this.loading = true;
        // setTimeout(() => {
        //   this.router.navigate(['/dashboard']);
        //   this.loading = false;
        // }, 3000);
        const data = {
            UserId: +this.user.userId,
            AccountNo: this.account,
            Principal: this.principal,
            Tenure: this.tenure,
            StartDate: this.date,
            ProductTypeKey: this.productCode,
            AdditionalComment: this.comment,
        };
        this.auth.post(data, 'Loan.LoanService.SubmitLoanApplication').subscribe((res) => {
            this.loading = false;
            console.log(res);
            if (res.data.status) {
                this.toast.success('Loan request submitted successfully', 'Success');
                this.show = false;
                this.transType = 0;
                localStorage.setItem('loanAccID', res.data.loanAccountId);
                localStorage.setItem('loanCustomerID', res.data.loanCustomerId);
                this.router.navigate(['/dashboard']);
            }
            else {
                this.toast.error(res.data.message, 'Error');
            }
        }, (err) => {
            this.toast.error('Check your internet connection', 'Error');
            this.loading = false;
        });
    }
    toggleRequest(e) {
        this.newReq = e;
        if (e === true) {
            this.selectedBtn = e;
            this.selectedBtn1 = false;
        }
        else {
            this.selectedBtn = false;
            this.selectedBtn1 = true;
        }
    }
    finish() {
        this.submit();
    }
    load() {
        this.loading = !this.loading;
    }
    close() {
        this.show = false;
    }
};
LoanPage.ctorParameters = () => [
    { type: _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
LoanPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-loan',
        template: _loan_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_loan_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoanPage);



/***/ }),

/***/ 60744:
/*!**************************************************!*\
  !*** ./src/app/modules/login/login.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component.html?ngResource */ 52447);
/* harmony import */ var _login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.scss?ngResource */ 86354);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/http/services/auth.service */ 41194);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);








let LoginComponent = class LoginComponent {
    constructor(auth, toast, router) {
        this.auth = auth;
        this.toast = toast;
        this.router = router;
        this.loading = false;
        this.show = false;
        // signinForm = new FormGroup({
        //   username: new FormControl(''),
        //   password: new FormControl(''),
        // });
        this.imageSrc = 'assets/icon/hey.png';
    }
    viewpassword() {
        this.show = !this.show;
    }
    // getUsers() {
    //   this.auth.getUsers().subscribe(
    //     (x) => console.log('Observer got a next value: ' + x),
    //     (err) => console.error(err.message),
    //     () => console.log('Observer got a complete notification')
    //   );
    // }
    // login method
    login() {
        this.loading = true;
        // setTimeout(() => {
        //   this.router.navigate(['/dashboard']);
        //   this.loading = false;
        // }, 3000);
        const data = {
            AuthMode: 'Bearer',
            Username: this.loginForm.value.email,
            Password: this.loginForm.value.password,
        };
        this.auth.post(data, 'UserManager.UserService.Login').subscribe((res) => {
            this.loading = false;
            console.log(res);
            if (res.data.responseCode === '00') {
                this.toast.success('Login was successfull', 'Success');
                this.data = res.data;
                localStorage.setItem('user', JSON.stringify(res.data.profile));
                console.log(res.data.profile);
                localStorage.setItem('token', res.data.token);
                this.loginForm.reset();
                this.router.navigate(['/dashboard']);
            }
            else {
                this.toast.error(res.data.responseMessage, 'Error');
            }
        }, (err) => {
            this.toast.error('Check your internet connection', 'Error');
            this.loading = false;
        });
    }
    forgot() {
        this.router.navigate(['/forgot-passowrd']);
    }
    ngOnInit() {
        // login form
        const user = localStorage.getItem('user');
        const users = user ? JSON.parse(user) : null;
        setInterval(() => {
            this.user = users ? users : null;
        }, 500);
        if (this.user) {
            this.router.navigate(['/dashboard']);
        }
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
        });
    }
    register() {
        this.router.navigate(['/register']);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
LoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login',
        template: _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginComponent);



/***/ }),

/***/ 89852:
/*!******************************************************!*\
  !*** ./src/app/modules/profile/profile.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _profile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.component.html?ngResource */ 96381);
/* harmony import */ var _profile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.component.scss?ngResource */ 39238);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/http/services/auth.service */ 41194);







let ProfileComponent = class ProfileComponent {
    constructor(router, toast, auth) {
        this.router = router;
        this.toast = toast;
        this.auth = auth;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.loading = false;
        this.page = 'select';
        this.age = 'select';
        this.bvn = '';
        this.data = {};
        this.success = false;
    }
    ngOnInit() { }
    viewpassword() {
        this.show = !this.show;
    }
    change(mode) {
        this.page = mode;
    }
    fetchBvn() {
        console.log(this.bvn);
        if (this.bvn.length === 11) {
            this.loading = true;
            const data = {
                bvn: this.bvn,
                show_detail: true,
            };
            this.auth.post(data, 'Nibss.BvnService.ValidateBvn').subscribe((res) => {
                this.loading = false;
                console.log(res);
                if (res.data.bvn) {
                    console.log(res);
                    this.success = true;
                    this.data = res.data;
                    const name = res.data.fullName.split(' ');
                    this.firstName = name[0];
                    this.middleName = name[1];
                    this.lastName = name[2];
                }
                else {
                    this.toast.error('BVN not found', 'Error');
                }
            }, (err) => {
                this.toast.error('Check your internet connection', 'Error');
                this.loading = false;
            });
        }
        else {
            this.success = false;
            this.data = {};
            this.firstName = '';
            this.middleName = '';
            this.lastName = '';
            return;
        }
    }
    update() {
        if (this.user.bvn) {
            this.toast.error('BVN already updated', 'Error');
            return false;
        }
        this.loading = true;
        if (this.data === {}) {
            this.toast.error('No record, please try again', 'Error');
            return;
        }
        const data = {
            Id: this.user.userId,
            FirstName: this.firstName,
            LastName: this.lastName,
            MiddleName: this.middleName,
            Phone: this.data.phoneNo,
            Email: this.data.emailAddress,
            BVN: this.bvn,
            BVNStatus: 'Verified',
            DOB: this.data.dateOfBirth,
            Gender: this.data.gender,
        };
        this.auth.post(data, 'UserManager.UserService.UpdateProfile').subscribe((res) => {
            this.loading = false;
            console.log(res);
            if (res.data.responseCode === '00') {
                console.log(res);
                this.toast.success('BVN updated successfully', 'Success');
                this.user.hasBVN = true;
                this.user.bvn = this.bvn;
                this.user.firstName = this.firstName;
                this.user.lastName = this.lastName;
                this.user.middleName = this.middleName;
                this.user.phone = this.data.phoneNo;
                this.user.email = this.data.emailAddress;
                this.user.dob = this.data.dateOfBirth;
                localStorage.setItem('user', JSON.stringify(this.user));
                this.router.navigate(['/dashboard']);
            }
            else {
                this.toast.error(res.data.responseMessage, 'Error');
            }
        }, (err) => {
            this.toast.error('Check your internet connection', 'Error');
            this.loading = false;
        });
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService },
    { type: _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
ProfileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-profile',
        template: _profile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfileComponent);



/***/ }),

/***/ 52514:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/register/become-royalty/become-royalty.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BecomeRoyaltyComponent": () => (/* binding */ BecomeRoyaltyComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _become_royalty_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./become-royalty.component.html?ngResource */ 2153);
/* harmony import */ var _become_royalty_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./become-royalty.component.scss?ngResource */ 67447);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/http/services/auth.service */ 41194);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 34101);








let BecomeRoyaltyComponent = class BecomeRoyaltyComponent {
    constructor(auth, router, toast) {
        this.auth = auth;
        this.router = router;
        this.toast = toast;
        this.source = 'assets/icon/royalty.png';
        this.stage = 1;
        this.id = localStorage.getItem('stageId');
        this.loading = true;
        this.show = false;
        this.imageSrc = 'assets/icon/hey.png';
    }
    getOnboardingStage() {
        if (this.id) {
            this.auth
                .post({ UserId: this.id }, 'UserManager.UserService.FetchUserDetail')
                .subscribe((res) => {
                this.loading = false;
                if (res.data.responseCode === '00') {
                    this.process = res.data.userDetail;
                    this.onboardingForm.patchValue({
                        Id: +this.id,
                        FirstName: res.data.userDetail.firstName
                            ? res.data.userDetail.firstName
                            : '',
                        LastName: res.data.userDetail.lastName
                            ? res.data.userDetail.lastName
                            : '',
                        MiddleName: res.data.userDetail.middleName
                            ? res.data.userDetail.middleName
                            : '',
                        UserName: res.data.userDetail.userName
                            ? res.data.userDetail.userName
                            : '',
                        Phone: res.data.userDetail.phoneNo
                            ? res.data.userDetail.phoneNo
                            : '',
                        Email: res.data.userDetail.emailAddress
                            ? res.data.userDetail.emailAddress
                            : '',
                        Password: res.data.userDetail.password
                            ? res.data.userDetail.password
                            : '',
                        CreateBankAccount: false,
                        DOB: res.data.userDetail.dob ? res.data.userDetail.dob : '',
                        RefCode: res.data.userDetail.refCode
                            ? res.data.userDetail.refCode
                            : '',
                        Verified: res.data.userDetail.verified
                            ? res.data.userDetail.verified
                            : false,
                        AccountType: res.data.userDetail.accountType
                            ? res.data.userDetail.accountType
                            : '',
                        CompanyType: res.data.userDetail.companyType
                            ? res.data.userDetail.companyType
                            : '',
                        PassportUrl: res.data.userDetail.passportUrl
                            ? res.data.userDetail.passportUrl
                            : '',
                        HasBVN: res.data.userDetail.hasBVN
                            ? res.data.userDetail.hasBVN
                            : false,
                        Stage: 2,
                        IsFinal: res.data.userDetail.isFinal
                            ? res.data.userDetail.isFinal
                            : false,
                        BVN: res.data.userDetail.bvn ? res.data.userDetail.bvn : '',
                        Shares: res.data.userDetail.shares
                            ? res.data.userDetail.shares
                            : false,
                        TinNumber: res.data.userDetail.tinNumber
                            ? res.data.userDetail.tinNumber
                            : '',
                        RCNumber: res.data.userDetail.rcNumber
                            ? res.data.userDetail.rcNumber
                            : '',
                        CompanyName: res.data.userDetail.companyName
                            ? res.data.userDetail.companyName
                            : '',
                        Gender: res.data.userDetail.gender
                            ? res.data.userDetail.gender
                            : '',
                    });
                    console.log(res);
                }
                else {
                    console.log(res);
                    this.router.navigate(['/welcome']);
                    localStorage.setItem('stageId', '');
                    this.toast.error('Please try again', 'Error');
                    this.loading = false;
                }
            }, (err) => {
                this.loading = false;
                localStorage.setItem('stageId', '');
                this.router.navigate(['/register'], {
                    state: {
                        mode: this.type,
                    },
                });
                this.toast.error('Please try again', 'Error');
            });
        }
        else {
            this.router.navigate(['/register/become-royalty'], {
                state: {
                    mode: this.type,
                },
            });
            this.id = '';
            this.loading = false;
        }
        return;
    }
    // register method
    register() {
        console.log(this.onboardingForm.value);
        this.auth
            .post(this.onboardingForm.value, 'UserManager.UserService.UpdateUser')
            .subscribe((res) => {
            if (res.data.responseCode === '00') {
                console.log(res.data.data.id);
                this.data = res.data;
                localStorage.setItem('stageId', res.data.data.id);
                this.router.navigate(['/register/select-account'], {
                    state: {
                        mode: this.type,
                    },
                });
                // deal with register
                console.log(res);
            }
            else {
                this.toast.error(res.data.responseMessage, 'Error');
            }
        }, (err) => {
            this.toast.error('Error please try Again', 'Error');
            this.loading = false;
        });
    }
    ngOnInit() {
        var _a, _b, _c, _d;
        // register form
        this.type = (_d = (_c = (_b = (_a = this.router) === null || _a === void 0 ? void 0 : _a.getCurrentNavigation()) === null || _b === void 0 ? void 0 : _b.extras) === null || _c === void 0 ? void 0 : _c.state) === null || _d === void 0 ? void 0 : _d.mode;
        console.log('type', this.type);
        this.getOnboardingStage();
        this.onboardingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            Id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(+this.id),
            FirstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            LastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            MiddleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            UserName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('a'),
            Phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('875'),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            CreateBankAccount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
            DOB: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            RefCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            Verified: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
            AccountType: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('Corporate'),
            CompanyType: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            PassportUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            HasBVN: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
            Stage: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(2),
            IsFinal: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
            BVN: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            Shares: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
            TinNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            RCNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            CompanyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            Gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
        });
        // console.log(this.onboardingForm.value);
    }
    next() {
        this.router.navigate(['/register/select-account'], {
            state: {
                mode: 'new',
            },
        });
    }
    nuban() {
        this.router.navigate(['/register/nuban'], {
            state: {
                mode: 'nuban',
            },
        });
    }
};
BecomeRoyaltyComponent.ctorParameters = () => [
    { type: _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService }
];
BecomeRoyaltyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-become-royalty',
        template: _become_royalty_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_become_royalty_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BecomeRoyaltyComponent);



/***/ }),

/***/ 41982:
/*!***********************************************************************!*\
  !*** ./src/app/modules/register/bvn-success/bvn-success.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BvnSuccessComponent": () => (/* binding */ BvnSuccessComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _bvn_success_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bvn-success.component.html?ngResource */ 33587);
/* harmony import */ var _bvn_success_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bvn-success.component.scss?ngResource */ 15303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);






let BvnSuccessComponent = class BvnSuccessComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.imageSrc = 'assets/icon/hey.png';
        this.source = 'assets/icon/royalty.png';
    }
    ngOnInit() {
        var _a, _b, _c, _d;
        this.type = (_d = (_c = (_b = (_a = this.router) === null || _a === void 0 ? void 0 : _a.getCurrentNavigation()) === null || _b === void 0 ? void 0 : _b.extras) === null || _c === void 0 ? void 0 : _c.state) === null || _d === void 0 ? void 0 : _d.mode;
        console.log('type', this.type);
    }
    next() {
        if (this.route.snapshot.params.mode === '1') {
            this.router.navigate(['/register/account'], {
                state: {
                    mode: this.type,
                },
            });
        }
        else {
            this.router.navigate(['/register/done'], {
                state: {
                    mode: this.type,
                },
            });
        }
    }
};
BvnSuccessComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute }
];
BvnSuccessComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-bvn-success',
        template: _bvn_success_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_bvn_success_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BvnSuccessComponent);



/***/ }),

/***/ 43312:
/*!***************************************************************************************!*\
  !*** ./src/app/modules/register/co-operatre-details/co-operatre-details.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoOperatreDetailsComponent": () => (/* binding */ CoOperatreDetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _co_operatre_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./co-operatre-details.component.html?ngResource */ 80273);
/* harmony import */ var _co_operatre_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./co-operatre-details.component.scss?ngResource */ 75164);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/http/services/auth.service */ 41194);










let CoOperatreDetailsComponent = class CoOperatreDetailsComponent {
    constructor(auth, router, toast, navController, alertController) {
        this.auth = auth;
        this.router = router;
        this.toast = toast;
        this.navController = navController;
        this.alertController = alertController;
        this.imageSrc = 'assets/icon/hey.png';
        this.show = false;
        this.page = 'use';
        this.id = localStorage.getItem('stageId');
        this.loading = true;
        this.user = {};
        this.path = 'phone';
        this.check = [];
    }
    isUpper(str) {
        return /[A-Z]/.test(str);
    }
    isLower(str) {
        return /[a-z]/.test(str);
    }
    checkNumber(str) {
        return /[0-9]/.test(str);
    }
    checkLength(str) {
        if (str.length >= 6) {
            return true;
        }
        else {
            return false;
        }
    }
    checkStrength(event) {
        console.log(event);
        const upper = this.isUpper(event);
        const lower = this.isLower(event);
        const isNumber = this.checkNumber(event);
        const length = this.checkLength(event);
        const res = [];
        if (upper) {
            res.push(1);
        }
        if (lower) {
            res.push(1);
        }
        if (isNumber) {
            res.push(1);
        }
        if (length) {
            res.push(1);
        }
        this.check = res;
        console.log(this.check);
    }
    getOnboardingStage() {
        if (this.id) {
            this.auth
                .post({ UserId: this.id }, 'UserManager.UserService.FetchUserDetail')
                .subscribe((res) => {
                var _a, _b, _c, _d;
                this.loading = false;
                if (res.data.responseCode === '00') {
                    // this.process = res.data.userDetail;
                    this.user = res.data.userDetail;
                    this.onboardingForm.patchValue({
                        Id: +this.id,
                        FirstName: res.data.userDetail.firstName
                            ? res.data.userDetail.firstName
                            : '',
                        LastName: res.data.userDetail.lastName
                            ? res.data.userDetail.lastName
                            : '',
                        MiddleName: res.data.userDetail.middleName
                            ? res.data.userDetail.middleName
                            : '',
                        UserName: res.data.userDetail.userName
                            ? res.data.userDetail.userName
                            : '',
                        Phone: res.data.userDetail.phoneNo
                            ? res.data.userDetail.phoneNo
                            : '',
                        Email: res.data.userDetail.emailAddress
                            ? res.data.userDetail.emailAddress
                            : '',
                        Password: res.data.userDetail.password
                            ? res.data.userDetail.password
                            : '',
                        CreateBankAccount: false,
                        DOB: res.data.userDetail.dob ? res.data.userDetail.dob : '',
                        RefCode: res.data.userDetail.refCode
                            ? res.data.userDetail.refCode
                            : '',
                        Verified: res.data.userDetail.verified
                            ? res.data.userDetail.verified
                            : false,
                        AccountType: res.data.userDetail.accountType
                            ? res.data.userDetail.accountType
                            : '',
                        CompanyType: res.data.userDetail.companyType
                            ? res.data.userDetail.companyType
                            : '',
                        PassportUrl: res.data.userDetail.passportUrl
                            ? res.data.userDetail.passportUrl
                            : '',
                        HasBVN: res.data.userDetail.hasBVN
                            ? res.data.userDetail.hasBVN
                            : false,
                        Stage: 5,
                        IsFinal: res.data.userDetail.isFinal
                            ? res.data.userDetail.isFinal
                            : false,
                        BVN: res.data.userDetail.bvn ? res.data.userDetail.bvn : '',
                        Shares: res.data.userDetail.shares
                            ? res.data.userDetail.shares
                            : false,
                        TinNumber: res.data.userDetail.tinNumber
                            ? res.data.userDetail.tinNumber
                            : '',
                        RCNumber: res.data.userDetail.rcNumber
                            ? res.data.userDetail.rcNumber
                            : '',
                        CompanyName: res.data.userDetail.companyName
                            ? res.data.userDetail.companyName
                            : '',
                        Gender: res.data.userDetail.gender
                            ? res.data.userDetail.gender
                            : 'Male',
                    });
                    console.log(res);
                    console.log(this.onboardingForm.value);
                }
                else {
                    console.log(res);
                    this.router.navigate(['/register/become-royalty'], {
                        state: {
                            mode: (_d = (_c = (_b = (_a = this.router) === null || _a === void 0 ? void 0 : _a.getCurrentNavigation()) === null || _b === void 0 ? void 0 : _b.extras) === null || _c === void 0 ? void 0 : _c.state) === null || _d === void 0 ? void 0 : _d.mode,
                        },
                    });
                    this.toast.error('please try again', 'Error');
                }
            }, (err) => {
                this.router.navigate(['/register/become-royalty'], {
                    state: {
                        mode: this.type,
                    },
                });
                this.toast.error('Please try again', 'Error');
            });
        }
        else {
            this.router.navigate(['/register/become-royalty'], {
                state: {
                    mode: this.type,
                },
            });
        }
        return;
    }
    sanitize() {
        if (this.onboardingForm.value.Password !== this.confirmPass) {
            this.toast.error('Paasword must match confirm password', 'Error');
            return false;
        }
        if (!this.onboardingForm.value.Password) {
            this.toast.error('Paasword is required', 'Error');
            return false;
        }
        if (!this.onboardingForm.value.Phone) {
            this.toast.error('Mobile number is required', 'Error');
            return false;
        }
    }
    // register method
    register() {
        if (this.sanitize() === false) {
            return;
        }
        if (this.onboardingForm.value.Phone.length === 14) {
            this.onboardingForm.patchValue({
                Phone: this.onboardingForm.value.Phone.substring(1),
            });
        }
        else if (this.onboardingForm.value.Phone.length === 11) {
            this.onboardingForm.patchValue({
                Phone: '234' + this.onboardingForm.value.Phone.substring(1),
            });
        }
        else if (this.onboardingForm.value.Phone.length === 10) {
            this.onboardingForm.patchValue({
                Phone: '234' + this.onboardingForm.value.Phone,
            });
        }
        else if (this.onboardingForm.value.Phone.length === 13) {
            this.onboardingForm.patchValue({
                Phone: this.onboardingForm.value.Phone,
            });
        }
        else {
            this.toast.error('Please provide a valid mobile number', 'Error');
            return false;
        }
        this.onboardingForm.patchValue({
            UserName: this.onboardingForm.value.Email,
        });
        // this.loading = true;
        console.log(this.onboardingForm.value);
        this.auth
            .post(this.onboardingForm.value, 'UserManager.UserService.UpdateUser')
            .subscribe((res) => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            this.loading = false;
            if (res.data.responseCode === '00') {
                console.log(res.data.data.id);
                this.loading = false;
                // this.data = res.data;
                localStorage.setItem('stageId', res.data.data.id);
                if (this.path === 'phone') {
                    this.router.navigate([`/register/phone/${this.onboardingForm.value.Phone}/3`], {
                        state: {
                            mode: (_d = (_c = (_b = (_a = this.router) === null || _a === void 0 ? void 0 : _a.getCurrentNavigation()) === null || _b === void 0 ? void 0 : _b.extras) === null || _c === void 0 ? void 0 : _c.state) === null || _d === void 0 ? void 0 : _d.mode,
                        },
                    });
                }
                else {
                    this.router.navigate(['/register/email/3'], {
                        state: {
                            mode: (_h = (_g = (_f = (_e = this.router) === null || _e === void 0 ? void 0 : _e.getCurrentNavigation()) === null || _f === void 0 ? void 0 : _f.extras) === null || _g === void 0 ? void 0 : _g.state) === null || _h === void 0 ? void 0 : _h.mode,
                        },
                    });
                }
                // deal with register
                console.log(res);
            }
            else {
                this.loading = false;
                this.alert(res.data.responseMessage, 'Error');
                console.log(res);
            }
        }, (err) => {
            this.toast.error('Error please try Again', 'Error');
            this.loading = false;
        });
    }
    alert(message, mode) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: mode,
                // subHeader: 'Subtitle',
                message,
                buttons: [
                    {
                        text: 'Ok',
                    },
                ],
            });
            yield alert.present();
        });
    }
    presentAlertPrompt() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (this.check.length < 4) {
                this.toast.error('password should contain lowercase, uppercase, number and minimum of 6 characters', 'Error');
                return;
            }
            if (!this.onboardingForm.value.terms) {
                this.toast.error('You have to accept our terms and service', 'Error');
                return false;
            }
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Verify Details',
                // subHeader: 'Subtitle',
                message: 'How would you like to receive OTP to verify your details?',
                buttons: [
                    {
                        text: 'SMS',
                        handler: () => {
                            console.log('phone Ok');
                            this.path = 'phone';
                            this.register();
                        },
                    },
                    {
                        text: 'Email',
                        handler: () => {
                            console.log('phone Ok');
                            this.path = 'email';
                            this.register();
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    ngOnInit() {
        var _a, _b, _c, _d;
        // register form
        this.type = (_d = (_c = (_b = (_a = this.router) === null || _a === void 0 ? void 0 : _a.getCurrentNavigation()) === null || _b === void 0 ? void 0 : _b.extras) === null || _c === void 0 ? void 0 : _c.state) === null || _d === void 0 ? void 0 : _d.mode;
        console.log('type', this.type);
        this.getOnboardingStage();
        this.onboardingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            Id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(+this.id),
            FirstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            LastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            MiddleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            UserName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('a'),
            Phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('875'),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            CreateBankAccount: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(false),
            DOB: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            RefCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            Verified: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(false),
            AccountType: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            CompanyType: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            PassportUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            HasBVN: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(false),
            Stage: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(5),
            IsFinal: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(false),
            BVN: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            Shares: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(false),
            TinNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            RCNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            CompanyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            Gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('Male'),
            terms: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(false),
        });
        // console.log(this.onboardingForm.value);
    }
    goBack() {
        this.navController.back();
    }
    viewpassword() {
        this.show = !this.show;
    }
    next() {
        this.router.navigate(['/register/email/3'], {
            state: {
                mode: this.type,
            },
        });
    }
    sanitize2() {
        if (!this.onboardingForm.value.FirstName) {
            this.toast.error('First name is required', 'Error');
            return false;
        }
        if (!this.onboardingForm.value.LastName) {
            this.toast.error('Last name is required', 'Error');
            return false;
        }
        if (!this.onboardingForm.value.MiddleName) {
            this.toast.error('Middle name is required', 'Error');
            return false;
        }
    }
    change(mode) {
        if (this.sanitize2() === false) {
            return;
        }
        this.page = mode;
    }
};
CoOperatreDetailsComponent.ctorParameters = () => [
    { type: _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController }
];
CoOperatreDetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-co-operatre-details',
        template: _co_operatre_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_co_operatre_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CoOperatreDetailsComponent);



/***/ }),

/***/ 57948:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/register/create-account/create-account.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateAccountComponent": () => (/* binding */ CreateAccountComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _create_account_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-account.component.html?ngResource */ 88775);
/* harmony import */ var _create_account_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-account.component.scss?ngResource */ 73822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/http/services/auth.service */ 41194);









let CreateAccountComponent = class CreateAccountComponent {
    constructor(auth, router, toast, navController, alertController) {
        this.auth = auth;
        this.router = router;
        this.toast = toast;
        this.navController = navController;
        this.alertController = alertController;
        this.page = 'select';
        this.show = false;
        this.id = localStorage.getItem('stageId');
        this.loading = true;
        this.user = {};
        this.path = '';
        this.isEmail = false;
        this.isPhone = false;
        this.check = [];
    }
    isUpper(str) {
        return /[A-Z]/.test(str);
    }
    isLower(str) {
        return /[a-z]/.test(str);
    }
    checkNumber(str) {
        return /[0-9]/.test(str);
    }
    checkLength(str) {
        if (str.length >= 6) {
            return true;
        }
        else {
            return false;
        }
    }
    checkStrength(event) {
        console.log(event);
        const upper = this.isUpper(event);
        const lower = this.isLower(event);
        const isNumber = this.checkNumber(event);
        const length = this.checkLength(event);
        const res = [];
        if (upper) {
            res.push(1);
        }
        if (lower) {
            res.push(1);
        }
        if (isNumber) {
            res.push(1);
        }
        if (length) {
            res.push(1);
        }
        this.check = res;
        console.log(this.check);
    }
    getOnboardingStage() {
        if (this.id) {
            this.auth
                .post({ UserId: this.id }, 'UserManager.UserService.FetchUserDetail')
                .subscribe((res) => {
                var _a, _b, _c, _d;
                this.loading = false;
                if (res.data.responseCode === '00') {
                    // this.process = res.data.userDetail;
                    this.user = res.data.userDetail;
                    this.onboardingForm.patchValue({
                        Id: +this.id,
                        FirstName: res.data.userDetail.firstName
                            ? res.data.userDetail.firstName
                            : '',
                        LastName: res.data.userDetail.lastName
                            ? res.data.userDetail.lastName
                            : '',
                        MiddleName: res.data.userDetail.middleName
                            ? res.data.userDetail.middleName
                            : '',
                        UserName: res.data.userDetail.userName
                            ? res.data.userDetail.userName
                            : '',
                        Phone: res.data.userDetail.phoneNo
                            ? res.data.userDetail.phoneNo
                            : '',
                        Email: res.data.userDetail.emailAddress
                            ? res.data.userDetail.emailAddress
                            : '',
                        Password: res.data.userDetail.password
                            ? res.data.userDetail.password
                            : '',
                        CreateBankAccount: false,
                        DOB: res.data.userDetail.dob ? res.data.userDetail.dob : '',
                        RefCode: res.data.userDetail.refCode
                            ? res.data.userDetail.refCode
                            : '',
                        Verified: res.data.userDetail.verified
                            ? res.data.userDetail.verified
                            : false,
                        AccountType: res.data.userDetail.accountType
                            ? res.data.userDetail.accountType
                            : '',
                        CompanyType: res.data.userDetail.companyType
                            ? res.data.userDetail.companyType
                            : '',
                        PassportUrl: res.data.userDetail.passportUrl
                            ? res.data.userDetail.passportUrl
                            : '',
                        HasBVN: res.data.userDetail.hasBVN
                            ? res.data.userDetail.hasBVN
                            : false,
                        Stage: 5,
                        IsFinal: res.data.userDetail.isFinal
                            ? res.data.userDetail.isFinal
                            : false,
                        BVN: res.data.userDetail.bvn ? res.data.userDetail.bvn : '',
                        Shares: res.data.userDetail.shares
                            ? res.data.userDetail.shares
                            : false,
                        TinNumber: res.data.userDetail.tinNumber
                            ? res.data.userDetail.tinNumber
                            : '',
                        RCNumber: res.data.userDetail.rcNumber
                            ? res.data.userDetail.rcNumber
                            : '',
                        CompanyName: res.data.userDetail.companyName
                            ? res.data.userDetail.companyName
                            : '',
                        Gender: res.data.userDetail.gender
                            ? res.data.userDetail.gender
                            : '',
                    });
                    console.log(res);
                    console.log(this.onboardingForm.value);
                }
                else {
                    console.log(res);
                    this.router.navigate(['/register/become-royalty'], {
                        state: {
                            mode: (_d = (_c = (_b = (_a = this.router) === null || _a === void 0 ? void 0 : _a.getCurrentNavigation()) === null || _b === void 0 ? void 0 : _b.extras) === null || _c === void 0 ? void 0 : _c.state) === null || _d === void 0 ? void 0 : _d.mode,
                        },
                    });
                    this.toast.error('Please try again', 'Error');
                }
            }, (err) => {
                this.router.navigate(['/register/become-royalty'], {
                    state: {
                        mode: this.type,
                    },
                });
                this.toast.error('Please try again', 'Error');
            });
        }
        else {
            this.router.navigate(['/register/become-royalty'], {
                state: {
                    mode: this.type,
                },
            });
        }
        return;
    }
    onStrengthChanged(strength) {
        console.log('password strength = ', strength);
    }
    sanitize() {
        if (this.onboardingForm.value.Password !== this.confirmPass) {
            this.toast.error('Paasword must match confirm password', 'Error');
            return false;
        }
        if (!this.onboardingForm.value.Password) {
            this.toast.error('Paasword is required', 'Error');
            return false;
        }
        if (!this.onboardingForm.value.Phone) {
            this.toast.error('Mobile number is required', 'Error');
            return false;
        }
        if (!this.onboardingForm.value.Email) {
            this.toast.error('Email number is required', 'Error');
            return false;
        }
    }
    // register method
    register() {
        if (this.sanitize() === false) {
            return;
        }
        this.onboardingForm.patchValue({
            UserName: this.onboardingForm.value.Email,
            Stage: 5,
        });
        this.loading = true;
        console.log(this.onboardingForm.value);
        this.loading = true;
        this.auth
            .post(this.onboardingForm.value, 'UserManager.UserService.UpdateUser')
            .subscribe((res) => {
            this.loading = false;
            if (res.data.responseCode === '00') {
                console.log(res.data.data.id);
                this.loading = false;
                // this.data = res.data;
                localStorage.setItem('stageId', res.data.data.id);
                if (this.path === 'phone') {
                    this.router.navigate([`/register/phone/${this.onboardingForm.value.Phone}/2`], {
                        state: {
                            mode: this.type,
                        },
                    });
                }
                else {
                    this.router.navigate(['/register/email/1'], {
                        state: {
                            mode: this.type,
                        },
                    });
                }
                // deal with register
                console.log(res);
            }
            else {
                this.toast.error(res.data.responseMessage, 'Error');
            }
        }, (err) => {
            this.toast.error('Error please try Again', 'Error');
            this.loading = false;
        });
    }
    ngOnInit() {
        var _a, _b, _c, _d;
        this.type = (_d = (_c = (_b = (_a = this.router) === null || _a === void 0 ? void 0 : _a.getCurrentNavigation()) === null || _b === void 0 ? void 0 : _b.extras) === null || _c === void 0 ? void 0 : _c.state) === null || _d === void 0 ? void 0 : _d.mode;
        console.log('type', this.type);
        // register form
        this.getOnboardingStage();
        this.onboardingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            Id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(+this.id),
            FirstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            LastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            MiddleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            UserName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('a'),
            Phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('875'),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            CreateBankAccount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
            DOB: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            RefCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            Verified: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
            AccountType: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            CompanyType: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            PassportUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            HasBVN: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
            Stage: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(5),
            IsFinal: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
            BVN: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            Shares: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
            TinNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            RCNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            CompanyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            Gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            terms: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
        });
        // console.log(this.onboardingForm.value);
    }
    presentAlertPrompt() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.check.length < 4) {
                this.toast.error('password should contain lowercase, uppercase, number and minimum of 6 characters', 'Error');
                return;
            }
            if (!this.onboardingForm.value.terms) {
                this.toast.error('You have to accept our terms and service', 'Error');
                return false;
            }
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Verify Details',
                // subHeader: 'Subtitle',
                message: 'How would you like to receive OTP to verify your details?',
                buttons: [
                    {
                        text: 'SMS',
                        handler: () => {
                            console.log('phone Ok');
                            this.path = 'phone';
                            this.register();
                        },
                    },
                    {
                        text: 'Email',
                        handler: () => {
                            console.log('phone Ok');
                            this.path = 'email';
                            this.register();
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    viewpassword() {
        this.show = !this.show;
    }
    change(mode) {
        if (this.onboardingForm.value.Email) {
            this.isEmail = true;
        }
        if (this.onboardingForm.value.Phone) {
            this.isPhone = true;
        }
        this.page = mode;
    }
    next() {
        console.log(this.onboardingForm.value);
    }
};
CreateAccountComponent.ctorParameters = () => [
    { type: _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController }
];
CreateAccountComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-create-account',
        template: _create_account_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_create_account_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CreateAccountComponent);



/***/ }),

/***/ 69410:
/*!***************************************************************!*\
  !*** ./src/app/modules/register/details/details.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsComponent": () => (/* binding */ DetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details.component.html?ngResource */ 23549);
/* harmony import */ var _details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.component.scss?ngResource */ 84520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/http/services/auth.service */ 41194);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);









let DetailsComponent = class DetailsComponent {
    constructor(auth, router, toast, alertController) {
        this.auth = auth;
        this.router = router;
        this.toast = toast;
        this.alertController = alertController;
        this.imageSrc = 'assets/icon/hey.png';
        this.page = 'finish';
        this.show = false;
        this.stage = 1;
        this.id = localStorage.getItem('stageId');
        this.loading = true;
        this.path = 'phone';
        this.check = [];
    }
    isUpper(str) {
        return /[A-Z]/.test(str);
    }
    isLower(str) {
        return /[a-z]/.test(str);
    }
    checkNumber(str) {
        return /[0-9]/.test(str);
    }
    checkLength(str) {
        if (str.length >= 6) {
            return true;
        }
        else {
            return false;
        }
    }
    checkStrength(event) {
        console.log(event);
        const upper = this.isUpper(event);
        const lower = this.isLower(event);
        const isNumber = this.checkNumber(event);
        const length = this.checkLength(event);
        const res = [];
        if (upper) {
            res.push(1);
        }
        if (lower) {
            res.push(1);
        }
        if (isNumber) {
            res.push(1);
        }
        if (length) {
            res.push(1);
        }
        this.check = res;
        console.log(this.check);
    }
    getOnboardingStage() {
        if (this.id) {
            this.auth
                .post({ UserId: this.id }, 'UserManager.UserService.FetchUserDetail')
                .subscribe((res) => {
                var _a, _b, _c, _d;
                this.loading = false;
                if (res.data.responseCode === '00') {
                    this.process = res.data.userDetail;
                    this.onboardingForm.patchValue({
                        Id: +this.id,
                        FirstName: res.data.userDetail.firstName
                            ? res.data.userDetail.firstName
                            : '',
                        LastName: res.data.userDetail.lastName
                            ? res.data.userDetail.lastName
                            : '',
                        MiddleName: res.data.userDetail.middleName
                            ? res.data.userDetail.middleName
                            : '',
                        UserName: res.data.userDetail.userName
                            ? res.data.userDetail.userName
                            : '',
                        Phone: res.data.userDetail.phoneNo
                            ? res.data.userDetail.phoneNo
                            : '',
                        Email: res.data.userDetail.emailAddress
                            ? res.data.userDetail.emailAddress
                            : '',
                        Password: res.data.userDetail.password
                            ? res.data.userDetail.password
                            : '',
                        CreateBankAccount: false,
                        DOB: res.data.userDetail.dob ? res.data.userDetail.dob : '',
                        RefCode: res.data.userDetail.refCode
                            ? res.data.userDetail.refCode
                            : '',
                        Verified: res.data.userDetail.verified
                            ? res.data.userDetail.verified
                            : false,
                        AccountType: res.data.userDetail.accountType
                            ? res.data.userDetail.accountType
                            : '',
                        CompanyType: res.data.userDetail.companyType
                            ? res.data.userDetail.companyType
                            : '',
                        PassportUrl: res.data.userDetail.passportUrl
                            ? res.data.userDetail.passportUrl
                            : '',
                        HasBVN: res.data.userDetail.hasBVN
                            ? res.data.userDetail.hasBVN
                            : false,
                        Stage: 5,
                        IsFinal: res.data.userDetail.isFinal
                            ? res.data.userDetail.isFinal
                            : false,
                        BVN: res.data.userDetail.bvn ? res.data.userDetail.bvn : '',
                        Shares: res.data.userDetail.shares
                            ? res.data.userDetail.shares
                            : false,
                        TinNumber: res.data.userDetail.tinNumber
                            ? res.data.userDetail.tinNumber
                            : '',
                        RCNumber: res.data.userDetail.rcNumber
                            ? res.data.userDetail.rcNumber
                            : '',
                        CompanyName: res.data.userDetail.companyName
                            ? res.data.userDetail.companyName
                            : '',
                        Gender: res.data.userDetail.gender
                            ? res.data.userDetail.gender
                            : 'Male',
                    });
                    console.log(res);
                }
                else {
                    console.log(res);
                    this.router.navigate(['/register/become-royalty'], {
                        state: {
                            mode: (_d = (_c = (_b = (_a = this.router) === null || _a === void 0 ? void 0 : _a.getCurrentNavigation()) === null || _b === void 0 ? void 0 : _b.extras) === null || _c === void 0 ? void 0 : _c.state) === null || _d === void 0 ? void 0 : _d.mode,
                        },
                    });
                    this.toast.error('Please try again', 'Error');
                }
            }, (err) => {
                this.router.navigate(['/register/become-royalty'], {
                    state: {
                        mode: this.type,
                    },
                });
                this.toast.error('Please try again', 'Error');
            });
        }
        else {
            this.id = '';
            this.loading = false;
            this.router.navigate(['/register/become-royalty'], {
                state: {
                    mode: this.type,
                },
            });
        }
        return;
    }
    // register method
    sanitize() {
        console.log(this.confirmPass);
        console.log(this.onboardingForm.value);
        if (this.onboardingForm.value.Password !== this.confirmPass) {
            this.toast.error('Paasword must match confirm password', 'Error');
            return false;
        }
        if (!this.onboardingForm.value.Password) {
            this.toast.error('Paasword is required', 'Error');
            return false;
        }
        if (!this.onboardingForm.value.Phone) {
            this.toast.error('Mobile number is required', 'Error');
            return false;
        }
        if (!this.onboardingForm.value.Email) {
            this.toast.error('Email is required', 'Error');
            return false;
        }
    }
    sanitize2() {
        if (!this.onboardingForm.value.FirstName) {
            this.toast.error('First name is required', 'Error');
            return false;
        }
        if (!this.onboardingForm.value.LastName) {
            this.toast.error('Last name is required', 'Error');
            return false;
        }
        if (!this.onboardingForm.value.MiddleName) {
            this.toast.error('Middle name is required', 'Error');
            return false;
        }
    }
    // register method
    register() {
        if (this.sanitize() === false) {
            return;
        }
        if (this.onboardingForm.value.Phone.length === 14) {
            this.onboardingForm.patchValue({
                Phone: this.onboardingForm.value.Phone.substring(1),
            });
        }
        else if (this.onboardingForm.value.Phone.length === 11) {
            this.onboardingForm.patchValue({
                Phone: '234' + this.onboardingForm.value.Phone.substring(1),
            });
        }
        else if (this.onboardingForm.value.Phone.length === 10) {
            this.onboardingForm.patchValue({
                Phone: '234' + this.onboardingForm.value.Phone,
            });
        }
        else if (this.onboardingForm.value.Phone.length === 13) {
            this.onboardingForm.patchValue({
                Phone: this.onboardingForm.value.Phone,
            });
        }
        else {
            this.toast.error('Please provide a valid mobile number', 'Error');
            return false;
        }
        this.onboardingForm.patchValue({
            UserName: this.onboardingForm.value.Email,
            Stage: 5,
        });
        console.log(this.onboardingForm.value);
        this.loading = true;
        this.auth
            .post(this.onboardingForm.value, 'UserManager.UserService.UpdateUser')
            .subscribe((res) => {
            this.loading = false;
            if (res.data.responseCode === '00') {
                console.log(res.data.data.id);
                // this.data = res.data;
                localStorage.setItem('stageId', res.data.data.id);
                if (this.path === 'phone') {
                    this.router.navigate([`/register/phone/${this.onboardingForm.value.Phone}/2`], {
                        state: {
                            mode: this.type,
                        },
                    });
                }
                else {
                    this.router.navigate(['/register/email/1'], {
                        state: {
                            mode: this.type,
                        },
                    });
                }
                // deal with register
                console.log(res);
            }
            else {
                this.loading = false;
                this.alert(res.data.responseMessage, 'Error');
                console.log('why you aint working');
            }
        }, (err) => {
            this.toast.error('Error please try Again', 'Error');
            this.loading = false;
        });
    }
    presentAlertPrompt() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (this.check.length < 4) {
                this.toast.error('password should contain lowercase, uppercase, number and minimum of 6 characters', 'Error');
                return;
            }
            if (!this.onboardingForm.value.terms) {
                this.toast.error('You have to accept our terms and service', 'Error');
                return false;
            }
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Verify Details',
                // subHeader: 'Subtitle',
                message: 'How would you like to receive OTP to verify your details?',
                buttons: [
                    {
                        text: 'SMS',
                        handler: () => {
                            console.log('phone Ok');
                            this.path = 'phone';
                            this.register();
                        },
                    },
                    {
                        text: 'Email',
                        handler: () => {
                            console.log('phone Ok');
                            this.path = 'email';
                            this.register();
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    alert(message, mode) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: mode,
                // subHeader: 'Subtitle',
                message,
            });
            yield alert.present();
        });
    }
    ngOnInit() {
        var _a, _b, _c, _d;
        // register form
        this.type = (_d = (_c = (_b = (_a = this.router) === null || _a === void 0 ? void 0 : _a.getCurrentNavigation()) === null || _b === void 0 ? void 0 : _b.extras) === null || _c === void 0 ? void 0 : _c.state) === null || _d === void 0 ? void 0 : _d.mode;
        console.log('type', this.type);
        this.getOnboardingStage();
        this.onboardingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            Id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(+this.id),
            FirstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            LastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            MiddleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            UserName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('a'),
            Phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('875'),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            CreateBankAccount: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(false),
            DOB: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            RefCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            Verified: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(false),
            AccountType: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('Corporate'),
            CompanyType: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            PassportUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            HasBVN: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(false),
            Stage: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(5),
            IsFinal: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(false),
            BVN: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            Shares: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(false),
            TinNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            RCNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            CompanyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            Gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('Male'),
            terms: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(false),
        });
        // console.log(this.onboardingForm.value);
    }
    viewpassword() {
        this.show = !this.show;
    }
    change(mode) {
        if (this.sanitize2() === false) {
            return;
        }
        this.page = mode;
    }
    next() {
        this.router.navigate(['/register/email/2'], {
            state: {
                mode: this.type,
            },
        });
    }
};
DetailsComponent.ctorParameters = () => [
    { type: _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController }
];
DetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-details',
        template: _details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DetailsComponent);



/***/ }),

/***/ 55213:
/*!*********************************************************!*\
  !*** ./src/app/modules/register/done/done.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoneComponent": () => (/* binding */ DoneComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _done_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./done.component.html?ngResource */ 70980);
/* harmony import */ var _done_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./done.component.scss?ngResource */ 50410);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/http/services/auth.service */ 41194);
/* harmony import */ var _ionic_native_uid_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/uid/ngx */ 86649);
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ 61832);












let DoneComponent = class DoneComponent {
    constructor(auth, router, toast, navController, uid, androidPermissions, alertController) {
        this.auth = auth;
        this.router = router;
        this.toast = toast;
        this.navController = navController;
        this.uid = uid;
        this.androidPermissions = androidPermissions;
        this.alertController = alertController;
        this.source1 = 'assets/icon/royalL.png';
        this.imei = this.uid.IMEI;
        this.msg = '';
        this.source = 'assets/icon/royalty.png';
        this.imageSrc = 'assets/icon/phoneA.png';
        this.id = localStorage.getItem('stageId');
        this.user = {};
        this.loading = true;
        this.setBack = false;
        this.getPermission();
    }
    getOnboardingStage() {
        if (this.id) {
            this.auth
                .post({ UserId: this.id }, 'UserManager.UserService.FetchUserDetail')
                .subscribe((res) => {
                this.loading = false;
                if (res.data.responseCode === '00') {
                    // this.process = res.data.userDetail;
                    this.user = res.data.userDetail;
                    this.user = res.data.userDetail;
                    this.onboardingForm.patchValue({
                        Id: +this.id,
                        FirstName: res.data.userDetail.firstName
                            ? res.data.userDetail.firstName
                            : '',
                        LastName: res.data.userDetail.lastName
                            ? res.data.userDetail.lastName
                            : '',
                        MiddleName: res.data.userDetail.middleName
                            ? res.data.userDetail.middleName
                            : '',
                        UserName: res.data.userDetail.emailAddress
                            ? res.data.userDetail.emailAddress
                            : '',
                        Phone: res.data.userDetail.phoneNo
                            ? res.data.userDetail.phoneNo
                            : '',
                        Email: res.data.userDetail.emailAddress
                            ? res.data.userDetail.emailAddress
                            : '',
                        Password: res.data.userDetail.password
                            ? res.data.userDetail.password
                            : '',
                        CreateBankAccount: this.type === 'nuban' ? false : true,
                        DOB: res.data.userDetail.dob ? res.data.userDetail.dob : '',
                        RefCode: res.data.userDetail.refCode
                            ? res.data.userDetail.refCode
                            : '',
                        Verified: true,
                        AccountType: res.data.userDetail.accountType
                            ? res.data.userDetail.accountType
                            : '',
                        CompanyType: res.data.userDetail.companyType
                            ? res.data.userDetail.companyType
                            : '',
                        PassportUrl: res.data.userDetail.passportUrl
                            ? res.data.userDetail.passportUrl
                            : '',
                        HasBVN: res.data.userDetail.hasBVN
                            ? res.data.userDetail.hasBVN
                            : false,
                        Stage: 2,
                        IsFinal: true,
                        BVN: res.data.userDetail.bvn ? res.data.userDetail.bvn : '',
                        Shares: res.data.userDetail.shares
                            ? res.data.userDetail.shares
                            : false,
                        TinNumber: res.data.userDetail.tinNumber
                            ? res.data.userDetail.tinNumber
                            : '',
                        RCNumber: res.data.userDetail.rcNumber
                            ? res.data.userDetail.rcNumber
                            : '',
                        CompanyName: res.data.userDetail.companyName
                            ? res.data.userDetail.companyName
                            : '',
                        Gender: res.data.userDetail.gender
                            ? res.data.userDetail.gender
                            : '',
                    });
                    console.log(res);
                    console.log(this.onboardingForm.value);
                    this.register();
                    localStorage.setItem('stageId', '');
                }
                else {
                    this.reloadCurrentRoute();
                }
            }, (err) => {
                this.reloadCurrentRoute();
                this.router.navigate(['/register/become-royalty'], {
                    state: {
                        mode: this.type,
                    },
                });
            });
        }
        else {
            this.router.navigate(['/register/become-royalty'], {
                state: {
                    mode: this.type,
                },
            });
        }
        return;
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Change Pin',
                message: this.msg,
                buttons: ['OK'],
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    reloadCurrentRoute() {
        const currentUrl = this.router.url;
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate([currentUrl], {
                state: {
                    mode: this.type,
                },
            });
        });
    }
    register() {
        this.setBack = false;
        this.msg = '';
        this.loading = true;
        console.log(this.onboardingForm.value);
        this.loading = true;
        this.auth
            .post(this.onboardingForm.value, 'UserManager.UserService.UpdateUser')
            .subscribe((res) => {
            this.loading = false;
            if (res.data.responseCode === '00') {
                console.log(res.data.data.id);
                this.loading = false;
                // this.data = res.data;
                // deal with register
                const data = {
                    Channel: 'MobileApp',
                    ChannelIdentifier: this.imei ? this.imei : '12345',
                    UserId: this.id,
                };
                this.auth
                    .post(data, 'UserManager.UserService.SaveUserChannel')
                    .subscribe((response) => {
                    this.loading = false;
                    console.log(response);
                    if (res.data.responseCode === '00') {
                        localStorage.setItem('stageId', '');
                    }
                    else {
                        this.msg = 'Unable to create channel';
                    }
                }, (err) => {
                    this.msg = 'Unable to create channel';
                });
                console.log(res);
            }
            else {
                console.log(res.data.responseMessage);
                this.msg = res.data.responseMessage;
                this.presentAlert();
                this.setBack = true;
            }
        }, (err) => {
            this.msg = 'Unable to create account';
            this.presentAlert();
            this.setBack = true;
            console.error(err.message);
            this.loading = false;
        });
    }
    back() {
        this.router.navigate(['/register/select-account'], {
            state: {
                mode: this.type,
            },
        });
    }
    ngOnInit() {
        var _a, _b, _c, _d;
        this.type = (_d = (_c = (_b = (_a = this.router) === null || _a === void 0 ? void 0 : _a.getCurrentNavigation()) === null || _b === void 0 ? void 0 : _b.extras) === null || _c === void 0 ? void 0 : _c.state) === null || _d === void 0 ? void 0 : _d.mode;
        console.log('type', this.type);
        this.getOnboardingStage();
        this.onboardingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            Id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(+this.id),
            FirstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            LastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            MiddleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            UserName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('a'),
            Phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('875'),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            CreateBankAccount: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.type === 'nuban' ? false : true),
            DOB: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            RefCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            Verified: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(true),
            AccountType: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            CompanyType: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            PassportUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            HasBVN: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(false),
            Stage: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(5),
            IsFinal: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(true),
            BVN: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            Shares: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(false),
            TinNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            RCNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            CompanyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            Gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
        });
    }
    sign() {
        this.router.navigate(['/login']);
    }
    create() {
        this.router.navigate(['/dashboard']);
    }
    getPermission() {
        this.androidPermissions
            .checkPermission(this.androidPermissions.PERMISSION.READ_PHONE_STATE)
            .then((res) => {
            if (res.hasPermission) {
            }
            else {
                this.androidPermissions
                    .requestPermission(this.androidPermissions.PERMISSION.READ_PHONE_STATE)
                    .then((response) => {
                    alert('Persmission Granted Please Restart App!');
                })
                    .catch((error) => {
                    alert('Error! ' + error);
                });
            }
        })
            .catch((error) => {
            alert('Error! ' + error);
        });
    }
};
DoneComponent.ctorParameters = () => [
    { type: _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _ionic_native_uid_ngx__WEBPACK_IMPORTED_MODULE_3__.Uid },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__.AndroidPermissions },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController }
];
DoneComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-done',
        template: _done_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_done_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DoneComponent);



/***/ }),

/***/ 21970:
/*!*********************************************************************!*\
  !*** ./src/app/modules/register/image-done/image-done.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageDoneComponent": () => (/* binding */ ImageDoneComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _image_done_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-done.component.html?ngResource */ 19913);
/* harmony import */ var _image_done_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-done.component.scss?ngResource */ 21578);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_photo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/photo.service */ 26094);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);






let ImageDoneComponent = class ImageDoneComponent {
    constructor(photo, router) {
        this.photo = photo;
        this.router = router;
        this.imageSrc = 'assets/icon/hey.png';
        this.source = 'assets/icon/royalty.png';
        this.page = 'take';
    }
    ngOnInit() {
        var _a, _b, _c, _d;
        this.type = (_d = (_c = (_b = (_a = this.router) === null || _a === void 0 ? void 0 : _a.getCurrentNavigation()) === null || _b === void 0 ? void 0 : _b.extras) === null || _c === void 0 ? void 0 : _c.state) === null || _d === void 0 ? void 0 : _d.mode;
        console.log('type', this.type);
    }
    takePhoto() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.photo.addNewToGallery();
            if (this.photo.selectedImage) {
                this.page = 'success';
            }
            else {
                this.page = 'fail';
            }
        });
    }
    retake() {
        this.page = 'take';
    }
    next() {
        this.router.navigate(['/register/royal-setup'], {
            state: {
                mode: this.type,
            },
        });
    }
};
ImageDoneComponent.ctorParameters = () => [
    { type: _core_services_photo_service__WEBPACK_IMPORTED_MODULE_2__.PhotoService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
ImageDoneComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-image-done',
        template: _image_done_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_image_done_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ImageDoneComponent);



/***/ }),

/***/ 15334:
/*!***********************************************************!*\
  !*** ./src/app/modules/register/image/image.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageComponent": () => (/* binding */ ImageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _image_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image.component.html?ngResource */ 86805);
/* harmony import */ var _image_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image.component.scss?ngResource */ 15317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_photo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/photo.service */ 26094);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/http/services/auth.service */ 41194);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);










let ImageComponent = class ImageComponent {
    constructor(auth, router, toast, navController, photo) {
        this.auth = auth;
        this.router = router;
        this.toast = toast;
        this.navController = navController;
        this.photo = photo;
        this.imageSrc = 'assets/icon/hey.png';
        this.source = 'assets/icon/royalty.png';
        this.page = 'take';
        this.id = localStorage.getItem('stageId');
        this.loading = true;
        this.user = {};
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.baseImage = '';
    }
    fileChangeEvent(event) {
        this.imageChangedEvent = event;
        console.log(event);
    }
    imageCropped(event) {
        this.croppedImage = event.base64;
    }
    imageLoaded() {
        /* show cropper */
    }
    cropperReady() {
        /* cropper ready */
    }
    loadImageFailed() {
        /* show message */
    }
    getOnboardingStage() {
        if (this.id) {
            this.auth
                .post({ UserId: this.id }, 'UserManager.UserService.FetchUserDetail')
                .subscribe((res) => {
                var _a, _b, _c, _d;
                this.loading = false;
                if (res.data.responseCode === '00') {
                    // this.process = res.data.userDetail;
                    this.user = res.data.userDetail;
                    this.onboardingForm.patchValue({
                        Id: +this.id,
                        FirstName: res.data.userDetail.firstName
                            ? res.data.userDetail.firstName
                            : '',
                        LastName: res.data.userDetail.lastName
                            ? res.data.userDetail.lastName
                            : '',
                        MiddleName: res.data.userDetail.middleName
                            ? res.data.userDetail.middleName
                            : '',
                        UserName: res.data.userDetail.userName
                            ? res.data.userDetail.userName
                            : '',
                        Phone: res.data.userDetail.phoneNo
                            ? res.data.userDetail.phoneNo
                            : '',
                        Email: res.data.userDetail.emailAddress
                            ? res.data.userDetail.emailAddress
                            : '',
                        Password: res.data.userDetail.password
                            ? res.data.userDetail.password
                            : '',
                        CreateBankAccount: false,
                        DOB: res.data.userDetail.dob ? res.data.userDetail.dob : '',
                        RefCode: res.data.userDetail.refCode
                            ? res.data.userDetail.refCode
                            : '',
                        Verified: res.data.userDetail.verified
                            ? res.data.userDetail.verified
                            : false,
                        AccountType: res.data.userDetail.accountType
                            ? res.data.userDetail.accountType
                            : '',
                        CompanyType: res.data.userDetail.companyType
                            ? res.data.userDetail.companyType
                            : '',
                        PassportUrl: res.data.userDetail.passportUrl
                            ? res.data.userDetail.passportUrl
                            : '',
                        HasBVN: res.data.userDetail.hasBVN
                            ? res.data.userDetail.hasBVN
                            : false,
                        Stage: 2,
                        IsFinal: res.data.userDetail.isFinal
                            ? res.data.userDetail.isFinal
                            : false,
                        BVN: res.data.userDetail.bvn ? res.data.userDetail.bvn : '',
                        Shares: res.data.userDetail.shares
                            ? res.data.userDetail.shares
                            : false,
                        TinNumber: res.data.userDetail.tinNumber
                            ? res.data.userDetail.tinNumber
                            : '',
                        RCNumber: res.data.userDetail.rcNumber
                            ? res.data.userDetail.rcNumber
                            : '',
                        CompanyName: res.data.userDetail.companyName
                            ? res.data.userDetail.companyName
                            : '',
                        Gender: res.data.userDetail.gender
                            ? res.data.userDetail.gender
                            : '',
                    });
                    console.log(res);
                    console.log(this.onboardingForm.value);
                }
                else {
                    console.log(res);
                    this.router.navigate(['/register/become-royalty'], {
                        state: {
                            mode: (_d = (_c = (_b = (_a = this.router) === null || _a === void 0 ? void 0 : _a.getCurrentNavigation()) === null || _b === void 0 ? void 0 : _b.extras) === null || _c === void 0 ? void 0 : _c.state) === null || _d === void 0 ? void 0 : _d.mode,
                        },
                    });
                    this.toast.error('Please try again', 'Error');
                }
            }, (err) => {
                this.router.navigate(['/register/become-royalty'], {
                    state: {
                        mode: this.type,
                    },
                });
                this.toast.error('Please try again', 'Error');
            });
        }
        else {
            this.router.navigate(['/register/become-royalty'], {
                state: {
                    mode: this.type,
                },
            });
        }
        this.loading = false;
        return;
    }
    // register method
    register() {
        this.loading = true;
        console.log(this.onboardingForm.value);
        this.loading = true;
        this.auth
            .post(this.onboardingForm.value, 'UserManager.UserService.UpdateUser')
            .subscribe((res) => {
            this.loading = false;
            if (res.data.responseCode === '00') {
                console.log(res.data.data.id);
                this.loading = false;
                // this.data = res.data;
                localStorage.setItem('stageId', res.data.data.id);
                this.page = 'success';
                // deal with register
                console.log(res);
            }
            else {
                this.toast.error(res.data.responseMessage, 'Error');
                this.page = 'fail';
            }
        }, (err) => {
            this.toast.error('Error please try Again', 'Error');
            this.loading = false;
            this.page = 'fail';
        });
    }
    ngOnInit() {
        var _a, _b, _c, _d;
        // register form
        this.type = (_d = (_c = (_b = (_a = this.router) === null || _a === void 0 ? void 0 : _a.getCurrentNavigation()) === null || _b === void 0 ? void 0 : _b.extras) === null || _c === void 0 ? void 0 : _c.state) === null || _d === void 0 ? void 0 : _d.mode;
        console.log('type', this.type);
        this.getOnboardingStage();
        this.onboardingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            Id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(+this.id),
            FirstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            LastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            MiddleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            UserName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('a'),
            Phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('875'),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            CreateBankAccount: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(false),
            DOB: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            RefCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            Verified: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(false),
            AccountType: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            CompanyType: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            PassportUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            HasBVN: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(false),
            Stage: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(2),
            IsFinal: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(false),
            BVN: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            Shares: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(false),
            TinNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            RCNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            CompanyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            Gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
        });
        // console.log(this.onboardingForm.value);
    }
    uploadPhoto() {
        this.loading = true;
        const photo = this.croppedImage;
        const first = photo.split(',');
        const mainImage = first[1];
        const extension = first[0].split('image/');
        const mainExtension = extension[1].split(';')[0];
        this.auth
            .fileUpload({
            FileName: `status.${mainExtension}`,
            Base64String: mainImage,
        })
            .subscribe((res) => {
            console.log(res);
            if (res.status) {
                console.log(res);
                this.loading = false;
                this.onboardingForm.patchValue({
                    PassportUrl: res.result,
                });
                this.register();
                // this.data = res.data;
                // deal with register
            }
            else {
                this.loading = false;
                this.toast.error('Error try again', 'Error');
                this.page = 'fail';
            }
        }, (err) => {
            this.toast.error('Error please try Again', 'Error');
            console.log('error');
            this.page = 'fail';
            this.loading = false;
        });
    }
    crop() {
        this.uploadPhoto();
        console.log('selected', this.calculateImageSize(this.photo.selectedImage));
        console.log('main', this.calculateImageSize(this.croppedImage));
    }
    calculateImageSize(base64String) {
        let padding;
        let inBytes;
        let base64StringLength;
        if (base64String.endsWith('==')) {
            padding = 2;
        }
        else if (base64String.endsWith('=')) {
            padding = 1;
        }
        else {
            padding = 0;
        }
        base64StringLength = base64String.length;
        inBytes = (base64StringLength / 4) * 3 - padding;
        this.kbytes = inBytes / 1000;
        return this.kbytes;
    }
    takePhoto() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.photo.addNewToGallery();
            if (this.photo.selectedImage) {
                console.log(this.photo.selectedImage);
                this.baseImage = this.photo.selectedImage;
                this.page = 'crop';
            }
            else {
                this.page = 'fail';
            }
        });
    }
    retake() {
        this.page = 'take';
    }
    next() {
        this.router.navigate(['/register/done'], {
            state: {
                mode: this.type,
            },
        });
    }
};
ImageComponent.ctorParameters = () => [
    { type: _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _core_services_photo_service__WEBPACK_IMPORTED_MODULE_2__.PhotoService }
];
ImageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-image',
        template: _image_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_image_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ImageComponent);



/***/ }),

/***/ 82017:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/register/nuban-register/nuban-register.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NubanRegisterComponent": () => (/* binding */ NubanRegisterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _nuban_register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nuban-register.component.html?ngResource */ 67002);
/* harmony import */ var _nuban_register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nuban-register.component.scss?ngResource */ 97083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/http/services/auth.service */ 41194);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);









let NubanRegisterComponent = class NubanRegisterComponent {
    constructor(auth, router, toast, alertController) {
        this.auth = auth;
        this.router = router;
        this.toast = toast;
        this.alertController = alertController;
        this.imageSrc = 'assets/icon/hey.png';
        this.page = 'account';
        this.show = false;
        this.stage = 1;
        this.id = localStorage.getItem('stageId');
        this.loading = false;
        this.path = 'phone';
        this.check = [];
    }
    // register method
    isUpper(str) {
        return /[A-Z]/.test(str);
    }
    isLower(str) {
        return /[a-z]/.test(str);
    }
    checkNumber(str) {
        return /[0-9]/.test(str);
    }
    checkLength(str) {
        if (str.length >= 6) {
            return true;
        }
        else {
            return false;
        }
    }
    checkStrength(event) {
        console.log(event);
        const upper = this.isUpper(event);
        const lower = this.isLower(event);
        const isNumber = this.checkNumber(event);
        const length = this.checkLength(event);
        const res = [];
        if (upper) {
            res.push(1);
        }
        if (lower) {
            res.push(1);
        }
        if (isNumber) {
            res.push(1);
        }
        if (length) {
            res.push(1);
        }
        this.check = res;
        console.log(this.check);
    }
    sanitize() {
        console.log(this.confirmPass);
        console.log(this.onboardingForm.value);
        if (this.onboardingForm.value.Password !== this.confirmPass) {
            this.toast.error('Paasword must match confirm password', 'Error');
            return false;
        }
        if (!this.onboardingForm.value.Password) {
            this.toast.error('Paasword is required', 'Error');
            return false;
        }
        if (!this.onboardingForm.value.Phone) {
            this.toast.error('Mobile number is required', 'Error');
            return false;
        }
        if (!this.onboardingForm.value.Email) {
            this.toast.error('Email is required', 'Error');
            return false;
        }
        if (!this.onboardingForm.value.FirstName) {
            this.toast.error('First name is required', 'Error');
            return false;
        }
        if (!this.onboardingForm.value.LastName) {
            this.toast.error('Last name is required', 'Error');
            return false;
        }
        if (!this.onboardingForm.value.MiddleName) {
            this.toast.error('Middle name is required', 'Error');
            return false;
        }
        if (this.onboardingForm.value.AccountType !== 'Royal Basic') {
            if (!this.onboardingForm.value.TinNumber) {
                this.toast.error('Tin Number is required', 'Error');
                return false;
            }
            if (!this.onboardingForm.value.RCNumber) {
                this.toast.error('RC Number is required', 'Error');
                return false;
            }
            if (!this.onboardingForm.value.CompanyName) {
                this.toast.error('Company Name is required', 'Error');
                return false;
            }
        }
        if (!this.onboardingForm.value.terms) {
            this.toast.error('Accept privacy and policy to continue', 'Error');
            return false;
        }
    }
    getOnboardingStage() {
        const id = localStorage.getItem('stageId');
        const ids = id ? JSON.parse(id) : null;
        if (ids) {
            this.loading = true;
            this.auth
                .post({ UserId: ids }, 'UserManager.UserService.FetchUserDetail')
                .subscribe((res) => {
                var _a, _b, _c, _d;
                this.loading = false;
                if (res.data.responseCode === '00') {
                    // this.process = res.data.userDetail;
                    this.user = res.data.userDetail;
                    this.onboardingForm.patchValue({
                        Id: +this.id,
                        FirstName: res.data.userDetail.firstName
                            ? res.data.userDetail.firstName
                            : '',
                        LastName: res.data.userDetail.lastName
                            ? res.data.userDetail.lastName
                            : '',
                        MiddleName: res.data.userDetail.middleName
                            ? res.data.userDetail.middleName
                            : '',
                        UserName: res.data.userDetail.userName
                            ? res.data.userDetail.userName
                            : '',
                        Phone: res.data.userDetail.phoneNo
                            ? res.data.userDetail.phoneNo
                            : '',
                        Email: res.data.userDetail.emailAddress
                            ? res.data.userDetail.emailAddress
                            : '',
                        Password: res.data.userDetail.password
                            ? res.data.userDetail.password
                            : '',
                        CreateBankAccount: false,
                        DOB: res.data.userDetail.dob ? res.data.userDetail.dob : '',
                        RefCode: res.data.userDetail.refCode
                            ? res.data.userDetail.refCode
                            : '',
                        Verified: res.data.userDetail.verified
                            ? res.data.userDetail.verified
                            : false,
                        AccountType: res.data.userDetail.accountType
                            ? res.data.userDetail.accountType
                            : '',
                        CompanyType: res.data.userDetail.companyType
                            ? res.data.userDetail.companyType
                            : '',
                        PassportUrl: res.data.userDetail.passportUrl
                            ? res.data.userDetail.passportUrl
                            : '',
                        HasBVN: res.data.userDetail.hasBVN
                            ? res.data.userDetail.hasBVN
                            : false,
                        Stage: 2,
                        IsFinal: res.data.userDetail.isFinal
                            ? res.data.userDetail.isFinal
                            : false,
                        BVN: res.data.userDetail.bvn ? res.data.userDetail.bvn : '',
                        Shares: res.data.userDetail.shares
                            ? res.data.userDetail.shares
                            : false,
                        TinNumber: res.data.userDetail.tinNumber
                            ? res.data.userDetail.tinNumber
                            : '',
                        RCNumber: res.data.userDetail.rcNumber
                            ? res.data.userDetail.rcNumber
                            : '',
                        CompanyName: res.data.userDetail.companyName
                            ? res.data.userDetail.companyName
                            : '',
                        Gender: res.data.userDetail.gender
                            ? res.data.userDetail.gender
                            : '',
                    });
                    console.log(res);
                    console.log(this.onboardingForm.value);
                    this.page = 'details';
                }
                else {
                    console.log(res);
                    this.router.navigate(['/register/become-royalty'], {
                        state: {
                            mode: (_d = (_c = (_b = (_a = this.router) === null || _a === void 0 ? void 0 : _a.getCurrentNavigation()) === null || _b === void 0 ? void 0 : _b.extras) === null || _c === void 0 ? void 0 : _c.state) === null || _d === void 0 ? void 0 : _d.mode,
                        },
                    });
                    this.toast.error('Please try again', 'Error');
                }
            }, (err) => {
                this.router.navigate(['/register/become-royalty'], {
                    state: {
                        mode: this.type,
                    },
                });
                this.toast.error('Please try again', 'Error');
            });
        }
        else {
            this.router.navigate(['/register/become-royalty'], {
                state: {
                    mode: this.type,
                },
            });
        }
        this.loading = false;
        return;
    }
    // sanitize2() {
    //   if (!this.onboardingForm.value.FirstName) {
    //     this.toast.error('First name is required', 'Error');
    //     return false;
    //   }
    //   if (!this.onboardingForm.value.LastName) {
    //     this.toast.error('Last name is required', 'Error');
    //     return false;
    //   }
    //   if (!this.onboardingForm.value.MiddleName) {
    //     this.toast.error('Middle name is required', 'Error');
    //     return false;
    //   }
    // }
    // register method
    register(type) {
        if (this.onboardingForm.value.Phone.length === 14) {
            this.onboardingForm.patchValue({
                Phone: this.onboardingForm.value.Phone.substring(1),
            });
        }
        else if (this.onboardingForm.value.Phone.length === 11) {
            this.onboardingForm.patchValue({
                Phone: '234' + this.onboardingForm.value.Phone.substring(1),
            });
        }
        else if (this.onboardingForm.value.Phone.length === 10) {
            this.onboardingForm.patchValue({
                Phone: '234' + this.onboardingForm.value.Phone,
            });
        }
        else if (this.onboardingForm.value.Phone.length === 13) {
            this.onboardingForm.patchValue({
                Phone: this.onboardingForm.value.Phone,
            });
        }
        else {
            this.toast.error('Please provide a valid mobile number', 'Error');
            return false;
        }
        this.onboardingForm.patchValue({
            UserName: this.onboardingForm.value.Email,
            Stage: 5,
        });
        console.log(this.onboardingForm.value);
        this.loading = true;
        const mode = type === 1 ? 'CreateUser' : 'UpdateUser';
        this.auth
            .post(this.onboardingForm.value, `UserManager.UserService.${mode}`)
            .subscribe((res) => {
            this.loading = false;
            if (res.data.responseCode === '00') {
                console.log(res.data.data.id);
                // this.data = res.data;
                localStorage.setItem('stageId', res.data.data.id);
                if (type === 1) {
                    this.page = 'details';
                }
                else {
                    if (this.path === 'phone') {
                        this.router.navigate([`/register/phone/${this.onboardingForm.value.Phone}/1`], {
                            state: {
                                mode: this.type,
                            },
                        });
                    }
                    else {
                        this.router.navigate([`/register/email/1`], {
                            state: {
                                mode: this.type,
                            },
                        });
                    }
                }
                // if (this.onboardingForm.value.AccountType === 'Royal Basic') {
                //   this.router.navigate(['/register/bvn/1'], {
                //     state: { mode: 'nuban' },
                //   });
                // } else {
                //   this.router.navigate(['/register/cop-details'], {
                //     state: { mode: 'nuban' },
                //   });
                // }
                console.log(res);
            }
            else {
                this.loading = false;
                this.alert(res.data.responseMessage, 'Error');
                console.log('why you aint working');
            }
        }, (err) => {
            this.toast.error('Error please try Again', 'Error');
            this.loading = false;
        });
    }
    presentAlertPrompt() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (this.check.length < 4) {
                this.toast.error('password should contain lowercase, uppercase, number and minimum of 6 characters', 'Error');
                return;
            }
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Verify Details',
                // subHeader: 'Subtitle',
                message: 'How would you like to receive OTP to verify your details?',
                buttons: [
                    {
                        text: 'Phone',
                        handler: () => {
                            console.log('phone Ok');
                            this.path = 'phone';
                            this.register(2);
                        },
                    },
                    {
                        text: 'Email',
                        handler: () => {
                            console.log('phone Ok');
                            this.path = 'email';
                            this.register(2);
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    continue() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Continue Registration',
                // subHeader: 'Subtitle',
                message: 'do you want to continue from where you stopped?',
                buttons: [
                    {
                        text: 'Yes',
                        handler: () => {
                            console.log('phone Ok');
                            this.getOnboardingStage();
                        },
                    },
                    {
                        text: 'No',
                        handler: () => {
                            console.log('phone Ok');
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    alert(message, mode) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: mode,
                // subHeader: 'Subtitle',
                message,
            });
            yield alert.present();
        });
    }
    ngOnInit() {
        var _a, _b, _c, _d;
        // register form
        const id = localStorage.getItem('stageId');
        const ids = id ? id : null;
        console.log('id', id);
        if (ids) {
            console.log('yes');
            this.continue();
        }
        this.type = (_d = (_c = (_b = (_a = this.router) === null || _a === void 0 ? void 0 : _a.getCurrentNavigation()) === null || _b === void 0 ? void 0 : _b.extras) === null || _c === void 0 ? void 0 : _c.state) === null || _d === void 0 ? void 0 : _d.mode;
        console.log('type', this.type);
        this.onboardingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            Id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(+this.id),
            FirstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            LastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            MiddleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            UserName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('a'),
            Phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('875'),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            CreateBankAccount: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(false),
            DOB: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            RefCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            Verified: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(false),
            AccountType: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('Corporate'),
            CompanyType: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            PassportUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            HasBVN: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(false),
            Stage: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(5),
            IsFinal: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(false),
            BVN: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            Shares: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(false),
            TinNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            RCNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            CompanyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            Gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('Male'),
            terms: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(false),
        });
        // console.log(this.onboardingForm.value);
    }
    fetchUser(e) {
        console.log(e);
        // console.log(e.padStart(num.toString().length, 0));
        if (e.length === 10) {
            this.loading = true;
            this.auth
                .post({ accountNo: e }, 'Cba.BankingService.SearchByNuban')
                .subscribe((res) => {
                this.loading = false;
                console.log(res);
                if (res.data.responseCode === '00') {
                    this.onboardingForm.patchValue({
                        Email: res.data.data.data.clientDetails.emailAddress,
                        UserName: res.data.data.data.clientDetails.emailAddress,
                        FirstName: res.data.data.data.clientDetails.firstname,
                        LastName: res.data.data.data.clientDetails.lastname,
                        Phone: res.data.data.data.clientDetails.mobileNumber,
                        AccountType: res.data.data.data.accountType,
                    });
                    this.register(1);
                    console.log(this.onboardingForm.value);
                }
                else {
                    this.toast.error('Account not found', 'Error');
                }
            }, (err) => {
                this.toast.error('Check your internet connection', 'Error');
                this.loading = false;
            });
        }
        else {
            return;
        }
    }
    viewpassword() {
        this.show = !this.show;
    }
    change(mode) {
        // if (this.sanitize2() === false) {
        //   return;
        // }
        this.page = mode;
    }
    next() {
        this.register(2);
    }
};
NubanRegisterComponent.ctorParameters = () => [
    { type: _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController }
];
NubanRegisterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-nuban-register',
        template: _nuban_register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_nuban_register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NubanRegisterComponent);



/***/ }),

/***/ 80280:
/*!********************************************************!*\
  !*** ./src/app/modules/register/register.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component.html?ngResource */ 20605);
/* harmony import */ var _register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.component.scss?ngResource */ 92974);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/http/services/auth.service */ 41194);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);







let RegisterComponent = class RegisterComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.source = 'assets/icon/royalty.png';
        this.stage = 1;
        this.id = localStorage.getItem('stageId');
        this.loading = true;
        this.show = false;
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            accountType: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
        });
        this.imageSrc = 'assets/icon/hey.png';
    }
    getOnboardingStage() {
        console.log('run', this.id);
        if (this.id) {
            this.auth
                .post({ UserId: this.id }, 'UserManager.UserService.FetchUserDetail')
                .subscribe((res) => {
                this.loading = false;
                if (res.data.responseCode === '00') {
                    this.process = res.data.userDetail;
                    this.router.navigate(['/register/become-royalty']);
                    console.log(res);
                }
                else {
                    this.loading = false;
                    console.log(res);
                    this.router.navigate(['/register/become-royalty']);
                }
            }, (err) => {
                console.error(err.message);
                this.router.navigate(['/register/become-royalty']);
            });
        }
        else {
            this.router.navigate(['/register/become-royalty']);
        }
        return;
    }
    // register method
    ngOnInit() {
        // register form
        this.getOnboardingStage();
        this.onboardingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            FirstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            LastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            MiddleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            UserName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('a'),
            Phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('875'),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            CreateBankAccount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
            DOB: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            RefCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            Verified: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
            AccountType: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            CompanyType: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            PassportUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            HasBVN: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
            Stage: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(1),
            IsFinal: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
            BVN: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            Shares: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
            TinNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            RCNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            CompanyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            Gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
        });
        // console.log(this.onboardingForm.value);
    }
    continue() {
        this.router.navigate(['select-account']);
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
RegisterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-register',
        template: _register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterComponent);



/***/ }),

/***/ 49594:
/*!***********************************************************************!*\
  !*** ./src/app/modules/register/royal-setup/royal-setup.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoyalSetupComponent": () => (/* binding */ RoyalSetupComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _royal_setup_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./royal-setup.component.html?ngResource */ 18452);
/* harmony import */ var _royal_setup_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./royal-setup.component.scss?ngResource */ 28985);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/http/services/auth.service */ 41194);









let RoyalSetupComponent = class RoyalSetupComponent {
    constructor(auth, router, toast, navController) {
        this.auth = auth;
        this.router = router;
        this.toast = toast;
        this.navController = navController;
        this.imageSrc = 'assets/icon/hey.png';
        this.show = false;
        this.page = 'select';
        this.id = localStorage.getItem('stageId');
        this.loading = true;
        this.user = {};
        this.companyType = [
            'Limited liability company',
            'Corporation',
            'Sole proprietorship',
            'Partnership',
        ];
    }
    getOnboardingStage() {
        if (this.id) {
            this.auth
                .post({ UserId: this.id }, 'UserManager.UserService.FetchUserDetail')
                .subscribe((res) => {
                var _a, _b, _c, _d;
                this.loading = false;
                if (res.data.responseCode === '00') {
                    // this.process = res.data.userDetail;
                    this.user = res.data.userDetail;
                    this.onboardingForm.patchValue({
                        Id: +this.id,
                        FirstName: res.data.userDetail.firstName
                            ? res.data.userDetail.firstName
                            : '',
                        LastName: res.data.userDetail.lastName
                            ? res.data.userDetail.lastName
                            : '',
                        MiddleName: res.data.userDetail.middleName
                            ? res.data.userDetail.middleName
                            : '',
                        UserName: res.data.userDetail.userName
                            ? res.data.userDetail.userName
                            : '',
                        Phone: res.data.userDetail.phoneNo
                            ? res.data.userDetail.phoneNo
                            : '',
                        Email: res.data.userDetail.emailAddress
                            ? res.data.userDetail.emailAddress
                            : '',
                        Password: res.data.userDetail.password
                            ? res.data.userDetail.password
                            : '',
                        CreateBankAccount: false,
                        DOB: res.data.userDetail.dob ? res.data.userDetail.dob : '',
                        RefCode: res.data.userDetail.refCode
                            ? res.data.userDetail.refCode
                            : '',
                        Verified: res.data.userDetail.verified
                            ? res.data.userDetail.verified
                            : false,
                        AccountType: res.data.userDetail.accountType
                            ? res.data.userDetail.accountType
                            : '',
                        CompanyType: res.data.userDetail.companyType
                            ? res.data.userDetail.companyType
                            : 'Corporation',
                        PassportUrl: res.data.userDetail.passportUrl
                            ? res.data.userDetail.passportUrl
                            : '',
                        HasBVN: res.data.userDetail.hasBVN
                            ? res.data.userDetail.hasBVN
                            : false,
                        Stage: 2,
                        IsFinal: res.data.userDetail.isFinal
                            ? res.data.userDetail.isFinal
                            : false,
                        BVN: res.data.userDetail.bvn ? res.data.userDetail.bvn : '',
                        Shares: res.data.userDetail.shares
                            ? res.data.userDetail.shares
                            : false,
                        TinNumber: res.data.userDetail.tinNumber
                            ? res.data.userDetail.tinNumber
                            : '',
                        RCNumber: res.data.userDetail.rcNumber
                            ? res.data.userDetail.rcNumber
                            : '',
                        CompanyName: res.data.userDetail.companyName
                            ? res.data.userDetail.companyName
                            : '',
                        Gender: res.data.userDetail.gender
                            ? res.data.userDetail.gender
                            : '',
                    });
                    console.log(res);
                    console.log(this.onboardingForm.value);
                }
                else {
                    console.log(res);
                    this.router.navigate(['/register/become-royalty'], {
                        state: {
                            mode: (_d = (_c = (_b = (_a = this.router) === null || _a === void 0 ? void 0 : _a.getCurrentNavigation()) === null || _b === void 0 ? void 0 : _b.extras) === null || _c === void 0 ? void 0 : _c.state) === null || _d === void 0 ? void 0 : _d.mode,
                        },
                    });
                    this.toast.error('Please try again', 'Error');
                }
            }, (err) => {
                this.router.navigate(['/register/become-royalty'], {
                    state: {
                        mode: this.type,
                    },
                });
                this.toast.error('Please try again', 'Error');
            });
        }
        else {
            this.router.navigate(['/register/become-royalty'], {
                state: {
                    mode: this.type,
                },
            });
        }
        return;
    }
    sanitize() {
        if (!this.onboardingForm.value.CompanyType) {
            this.toast.error('Company Type number is required', 'Error');
            return false;
        }
        if (!this.onboardingForm.value.CompanyName) {
            this.toast.error('Company Name is required', 'Error');
            return false;
        }
        if (!this.onboardingForm.value.RCNumber) {
            this.toast.error('RC Number is required', 'Error');
            return false;
        }
        if (!this.onboardingForm.value.TinNumber) {
            this.toast.error('TIN is required', 'Error');
            return false;
        }
    }
    // register method
    register() {
        if (this.sanitize() === false) {
            return;
        }
        this.onboardingForm.patchValue({
            UserName: this.onboardingForm.value.Email,
            Stage: 5,
        });
        this.loading = true;
        console.log(this.onboardingForm.value);
        this.loading = true;
        this.auth
            .post(this.onboardingForm.value, 'UserManager.UserService.UpdateUser')
            .subscribe((res) => {
            this.loading = false;
            if (res.data.responseCode === '00') {
                console.log(res.data.data.id);
                this.loading = false;
                // this.data = res.data;
                localStorage.setItem('stageId', res.data.data.id);
                this.router.navigate(['/register/image'], {
                    state: {
                        mode: this.type,
                    },
                });
                // deal with register
                console.log(res);
            }
            else {
                this.toast.error(res.data.responseMessage, 'Error');
            }
        }, (err) => {
            this.toast.error('Error please try Again', 'Error');
            this.loading = false;
        });
    }
    ngOnInit() {
        var _a, _b, _c, _d;
        // register form
        this.type = (_d = (_c = (_b = (_a = this.router) === null || _a === void 0 ? void 0 : _a.getCurrentNavigation()) === null || _b === void 0 ? void 0 : _b.extras) === null || _c === void 0 ? void 0 : _c.state) === null || _d === void 0 ? void 0 : _d.mode;
        console.log('type', this.type);
        this.getOnboardingStage();
        this.onboardingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            Id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(+this.id),
            FirstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            LastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            MiddleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            UserName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('a'),
            Phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('875'),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            CreateBankAccount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
            DOB: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            RefCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            Verified: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
            AccountType: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            CompanyType: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            PassportUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            HasBVN: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
            Stage: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(2),
            IsFinal: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
            BVN: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            Shares: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
            TinNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            RCNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            CompanyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            Gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
        });
        console.log(this.onboardingForm.value);
    }
    goBack() {
        this.navController.back();
    }
    viewpassword() {
        this.show = !this.show;
    }
    next() {
        this.router.navigate(['/register/bvn/2'], {
            state: {
                mode: this.type,
            },
        });
    }
};
RoyalSetupComponent.ctorParameters = () => [
    { type: _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController }
];
RoyalSetupComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-royal-setup',
        template: _royal_setup_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_royal_setup_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RoyalSetupComponent);



/***/ }),

/***/ 98984:
/*!***************************************************************************************!*\
  !*** ./src/app/modules/register/select-account-type/select-account-type.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectAccountTypeComponent": () => (/* binding */ SelectAccountTypeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _select_account_type_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-account-type.component.html?ngResource */ 21242);
/* harmony import */ var _select_account_type_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-account-type.component.scss?ngResource */ 17382);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/http/services/auth.service */ 41194);









let SelectAccountTypeComponent = class SelectAccountTypeComponent {
    constructor(auth, router, toast, navController) {
        this.auth = auth;
        this.router = router;
        this.toast = toast;
        this.navController = navController;
        this.stage = 0;
        this.mode = 'Royal Basic';
        this.id = localStorage.getItem('stageId');
        this.loading = true;
    }
    getOnboardingStage() {
        if (this.id) {
            this.auth
                .post({ UserId: this.id }, 'UserManager.UserService.FetchUserDetail')
                .subscribe((res) => {
                var _a, _b, _c, _d;
                this.loading = false;
                if (res.data.responseCode === '00') {
                    // this.process = res.data.userDetail;
                    this.mode = res.data.userDetail.accountType;
                    this.onboardingForm.patchValue({
                        Id: +this.id,
                        FirstName: res.data.userDetail.firstName
                            ? res.data.userDetail.firstName
                            : '',
                        LastName: res.data.userDetail.lastName
                            ? res.data.userDetail.lastName
                            : '',
                        MiddleName: res.data.userDetail.middleName
                            ? res.data.userDetail.middleName
                            : '',
                        UserName: res.data.userDetail.userName
                            ? res.data.userDetail.userName
                            : '',
                        Phone: res.data.userDetail.phoneNo
                            ? res.data.userDetail.phoneNo
                            : '',
                        Email: res.data.userDetail.emailAddress
                            ? res.data.userDetail.emailAddress
                            : '',
                        Password: res.data.userDetail.password
                            ? res.data.userDetail.password
                            : '',
                        CreateBankAccount: false,
                        DOB: res.data.userDetail.dob ? res.data.userDetail.dob : '',
                        RefCode: res.data.userDetail.refCode
                            ? res.data.userDetail.refCode
                            : '',
                        Verified: res.data.userDetail.verified
                            ? res.data.userDetail.verified
                            : false,
                        AccountType: res.data.userDetail.accountType
                            ? res.data.userDetail.accountType
                            : '',
                        CompanyType: res.data.userDetail.companyType
                            ? res.data.userDetail.companyType
                            : '',
                        PassportUrl: res.data.userDetail.passportUrl
                            ? res.data.userDetail.passportUrl
                            : '',
                        HasBVN: res.data.userDetail.hasBVN
                            ? res.data.userDetail.hasBVN
                            : false,
                        Stage: 2,
                        IsFinal: res.data.userDetail.isFinal
                            ? res.data.userDetail.isFinal
                            : false,
                        BVN: res.data.userDetail.bvn ? res.data.userDetail.bvn : '',
                        Shares: res.data.userDetail.shares
                            ? res.data.userDetail.shares
                            : false,
                        TinNumber: res.data.userDetail.tinNumber
                            ? res.data.userDetail.tinNumber
                            : '',
                        RCNumber: res.data.userDetail.rcNumber
                            ? res.data.userDetail.rcNumber
                            : '',
                        CompanyName: res.data.userDetail.companyName
                            ? res.data.userDetail.companyName
                            : '',
                        Gender: res.data.userDetail.gender
                            ? res.data.userDetail.gender
                            : '',
                    });
                    console.log(res);
                }
                else {
                    console.log(res);
                    this.router.navigate(['/register/become-royalty'], {
                        state: {
                            mode: (_d = (_c = (_b = (_a = this.router) === null || _a === void 0 ? void 0 : _a.getCurrentNavigation()) === null || _b === void 0 ? void 0 : _b.extras) === null || _c === void 0 ? void 0 : _c.state) === null || _d === void 0 ? void 0 : _d.mode,
                        },
                    });
                    this.toast.error('Please try again', 'Error');
                }
            }, (err) => {
                this.router.navigate(['/register/become-royalty'], {
                    state: {
                        mode: this.type,
                    },
                });
                this.toast.error('Please try again', 'Error');
            });
        }
        else {
        }
        this.loading = false;
    }
    // register method
    register() {
        console.log(this.onboardingForm.value);
        this.loading = true;
        let mode = 'UpdateUser';
        if (this.id) {
            mode = 'UpdateUser';
        }
        else {
            mode = 'CreateUser';
        }
        console.log(this.id);
        this.auth
            .post(this.onboardingForm.value, `UserManager.UserService.${mode}`)
            .subscribe((res) => {
            var _a, _b, _c, _d;
            if (res.data.responseCode === '00') {
                console.log(res.data.data.id);
                this.loading = false;
                // this.data = res.data;
                localStorage.setItem('stageId', res.data.data.id);
                if (this.mode === 'Royal Basic') {
                    console.log(this.type, (_d = (_c = (_b = (_a = this.router) === null || _a === void 0 ? void 0 : _a.getCurrentNavigation()) === null || _b === void 0 ? void 0 : _b.extras) === null || _c === void 0 ? void 0 : _c.state) === null || _d === void 0 ? void 0 : _d.mode);
                    this.router.navigate(['/register/bvn/1'], {
                        state: {
                            mode: this.type,
                        },
                    });
                }
                else {
                    this.router.navigate(['/register/cop-details'], {
                        state: {
                            mode: this.type,
                        },
                    });
                }
                // deal with register
                console.log(res);
            }
            else {
                this.toast.error(res.data.responseMessage, 'Error');
            }
        }, (err) => {
            this.toast.error('Error please try Again', 'Error');
            this.loading = false;
        });
    }
    ngOnInit() {
        var _a, _b, _c, _d;
        // register form
        this.type = (_d = (_c = (_b = (_a = this.router) === null || _a === void 0 ? void 0 : _a.getCurrentNavigation()) === null || _b === void 0 ? void 0 : _b.extras) === null || _c === void 0 ? void 0 : _c.state) === null || _d === void 0 ? void 0 : _d.mode;
        console.log('type', this.type);
        this.getOnboardingStage();
        this.onboardingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            Id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(+this.id),
            FirstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            LastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            MiddleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            UserName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            Phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            CreateBankAccount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
            DOB: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            RefCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            Verified: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
            AccountType: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            CompanyType: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            PassportUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            HasBVN: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
            Stage: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(2),
            IsFinal: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
            BVN: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            Shares: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
            TinNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            RCNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            CompanyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            Gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
        });
        this.onboardingForm.patchValue({
            AccountType: this.mode,
        });
        // console.log(this.onboardingForm.value);
    }
    goBack() {
        if (this.stage === 0) {
            this.navController.back();
        }
        else {
            this.stage -= 1;
        }
    }
    setMode(mode) {
        var _a, _b, _c, _d;
        this.mode = mode;
        this.onboardingForm.patchValue({
            AccountType: mode,
        });
        console.log(this.onboardingForm.value);
        console.log('main mode', (_d = (_c = (_b = (_a = this.router) === null || _a === void 0 ? void 0 : _a.getCurrentNavigation()) === null || _b === void 0 ? void 0 : _b.extras) === null || _c === void 0 ? void 0 : _c.state) === null || _d === void 0 ? void 0 : _d.mode);
    }
    next() {
        var _a, _b, _c, _d;
        console.log('main mode', (_d = (_c = (_b = (_a = this.router) === null || _a === void 0 ? void 0 : _a.getCurrentNavigation()) === null || _b === void 0 ? void 0 : _b.extras) === null || _c === void 0 ? void 0 : _c.state) === null || _d === void 0 ? void 0 : _d.mode);
        if (this.mode === 'basic') {
            this.router.navigate(['/register/bvn/1'], {
                state: {
                    mode: this.type,
                },
            });
        }
        else {
            this.router.navigate(['/register/cop-details'], {
                state: {
                    mode: this.type,
                },
            });
        }
    }
};
SelectAccountTypeComponent.ctorParameters = () => [
    { type: _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController }
];
SelectAccountTypeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-select-account-type',
        template: _select_account_type_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_select_account_type_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SelectAccountTypeComponent);



/***/ }),

/***/ 1917:
/*!*********************************************************************!*\
  !*** ./src/app/modules/register/verify-bvn/verify-bvn.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyBvnComponent": () => (/* binding */ VerifyBvnComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _verify_bvn_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-bvn.component.html?ngResource */ 31069);
/* harmony import */ var _verify_bvn_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verify-bvn.component.scss?ngResource */ 40069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/http/services/auth.service */ 41194);










let VerifyBvnComponent = class VerifyBvnComponent {
    constructor(auth, router, toast, navController, route) {
        this.auth = auth;
        this.router = router;
        this.toast = toast;
        this.navController = navController;
        this.route = route;
        this.mode = 'basic';
        this.page = 'select';
        this.id = localStorage.getItem('stageId');
        this.loading = true;
        this.stage = 0;
        this.bvnError = false;
    }
    getOnboardingStage() {
        if (this.id) {
            this.auth
                .post({ UserId: this.id }, 'UserManager.UserService.FetchUserDetail')
                .subscribe((res) => {
                var _a, _b, _c, _d;
                this.loading = false;
                if (res.data.responseCode === '00') {
                    // this.process = res.data.userDetail;
                    this.mode = res.data.userDetail.hasBVN ? 'basic' : 'coporate';
                    this.onboardingForm.patchValue({
                        Id: +this.id,
                        FirstName: res.data.userDetail.firstName
                            ? res.data.userDetail.firstName
                            : '',
                        LastName: res.data.userDetail.lastName
                            ? res.data.userDetail.lastName
                            : '',
                        MiddleName: res.data.userDetail.middleName
                            ? res.data.userDetail.middleName
                            : '',
                        UserName: res.data.userDetail.userName
                            ? res.data.userDetail.userName
                            : '',
                        Phone: res.data.userDetail.phoneNo
                            ? res.data.userDetail.phoneNo
                            : '',
                        Email: res.data.userDetail.emailAddress
                            ? res.data.userDetail.emailAddress
                            : '',
                        Password: res.data.userDetail.password
                            ? res.data.userDetail.password
                            : '',
                        CreateBankAccount: false,
                        DOB: res.data.userDetail.dob ? res.data.userDetail.dob : '',
                        RefCode: res.data.userDetail.refCode
                            ? res.data.userDetail.refCode
                            : '',
                        Verified: res.data.userDetail.verified
                            ? res.data.userDetail.verified
                            : false,
                        AccountType: res.data.userDetail.accountType
                            ? res.data.userDetail.accountType
                            : '',
                        CompanyType: res.data.userDetail.companyType
                            ? res.data.userDetail.companyType
                            : '',
                        PassportUrl: res.data.userDetail.passportUrl
                            ? res.data.userDetail.passportUrl
                            : '',
                        HasBVN: res.data.userDetail.hasBVN
                            ? res.data.userDetail.hasBVN
                            : false,
                        Stage: 3,
                        IsFinal: res.data.userDetail.isFinal
                            ? res.data.userDetail.isFinal
                            : false,
                        BVN: res.data.userDetail.bvn ? res.data.userDetail.bvn : '',
                        Shares: res.data.userDetail.shares
                            ? res.data.userDetail.shares
                            : false,
                        TinNumber: res.data.userDetail.tinNumber
                            ? res.data.userDetail.tinNumber
                            : '',
                        RCNumber: res.data.userDetail.rcNumber
                            ? res.data.userDetail.rcNumber
                            : '',
                        CompanyName: res.data.userDetail.companyName
                            ? res.data.userDetail.companyName
                            : '',
                        Gender: res.data.userDetail.gender
                            ? res.data.userDetail.gender
                            : '',
                    });
                    console.log(res);
                }
                else {
                    console.log(res);
                    this.router.navigate(['/register/become-royalty'], {
                        state: {
                            mode: (_d = (_c = (_b = (_a = this.router) === null || _a === void 0 ? void 0 : _a.getCurrentNavigation()) === null || _b === void 0 ? void 0 : _b.extras) === null || _c === void 0 ? void 0 : _c.state) === null || _d === void 0 ? void 0 : _d.mode,
                        },
                    });
                    this.toast.error('Please try again', 'Error');
                }
            }, (err) => {
                this.router.navigate(['/register/become-royalty'], {
                    state: {
                        mode: this.type,
                    },
                });
                this.toast.error('Please try again', 'Error');
            });
        }
        else {
            this.router.navigate(['/register/become-royalty'], {
                state: {
                    mode: this.type,
                },
            });
        }
        this.loading = false;
    }
    validateBVN() {
        this.loading = true;
        this.auth
            .post({ bvn: this.onboardingForm.value.BVN, show_detail: true }, 'Nibss.BvnService.ValidateBvn')
            .subscribe((res) => {
            this.loading = false;
            console.log(res);
            if (res.data.bvn) {
                console.log(res);
                const fulname = res.data.fullName.split(' ');
                this.phone = res.data.phoneNo;
                console.log(res.data.phoneNo);
                this.onboardingForm.patchValue({
                    FirstName: fulname[0],
                    LastName: fulname[2],
                    MiddleName: fulname[1],
                    Phone: res.data.phoneNo,
                    Email: res.data.emailAddress,
                    DOB: res.data.dateOfBirth,
                    Gender: res.data.gender,
                });
                this.register();
                // deal with register
            }
            else {
                this.bvnError = true;
            }
        }, (err) => console.error(err.message));
    }
    // register method
    register() {
        console.log(this.onboardingForm.value);
        this.loading = true;
        this.onboardingForm.patchValue({
            UserName: this.onboardingForm.value.Email,
        });
        this.auth
            .post(this.onboardingForm.value, 'UserManager.UserService.UpdateUser')
            .subscribe((res) => {
            if (res.data.responseCode === '00') {
                console.log(res.data.data.id);
                this.loading = false;
                // this.data = res.data;
                localStorage.setItem('stageId', res.data.data.id);
                if (this.page === 'select') {
                    if (this.mode === 'basic') {
                        this.page = 'verify';
                    }
                    else {
                        this.router.navigate(['/register/details'], {
                            state: {
                                mode: this.type,
                            },
                        });
                    }
                }
                else {
                    // if (this.route.snapshot.params.mode === '4') {
                    this.router.navigate([`register/bvn-success/1`], {
                        state: {
                            mode: this.type,
                        },
                    });
                    return;
                    // } else if (this.route.snapshot.params.mode === '2') {
                    //   this.router.navigate([`/register/phone/${this.phone}/4`], {
                    //     state: {
                    //       mode: this.type,
                    //     },
                    //   });
                    //   return;
                    // }
                    // this.router.navigate([`/register/phone/${this.phone}/1`], {
                    //   state: {
                    //     mode: this.type,
                    //   },
                    // });
                }
                // deal with register
                console.log(res);
            }
            else {
                this.toast.error(res.data.responseMessage, 'Error');
            }
        }, (err) => {
            this.toast.error('Error please try Again', 'Error');
            this.loading = false;
        });
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        // register form
        this.type = (_d = (_c = (_b = (_a = this.router) === null || _a === void 0 ? void 0 : _a.getCurrentNavigation()) === null || _b === void 0 ? void 0 : _b.extras) === null || _c === void 0 ? void 0 : _c.state) === null || _d === void 0 ? void 0 : _d.mode;
        console.log('type', this.type);
        let mode = '';
        mode = (_h = (_g = (_f = (_e = this.router) === null || _e === void 0 ? void 0 : _e.getCurrentNavigation()) === null || _f === void 0 ? void 0 : _f.extras) === null || _g === void 0 ? void 0 : _g.state) === null || _h === void 0 ? void 0 : _h.mode;
        console.log('mode', mode);
        this.getOnboardingStage();
        this.onboardingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            Id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(+this.id),
            FirstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            LastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            MiddleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            UserName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            Phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            CreateBankAccount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
            DOB: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            RefCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            Verified: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
            AccountType: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            CompanyType: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            PassportUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            HasBVN: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
            Stage: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(3),
            IsFinal: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
            BVN: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            Shares: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
            TinNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            RCNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            CompanyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            Gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
        });
        // console.log(this.onboardingForm.value);
    }
    goBack() {
        if (this.page === 'select') {
            this.navController.back();
        }
        else {
            this.page = 'select';
        }
    }
    setMode(mode) {
        console.log(mode);
        this.mode = mode;
        if (mode === 'basic') {
            this.onboardingForm.patchValue({
                HasBVN: true,
            });
        }
        else {
            this.onboardingForm.patchValue({
                HasBVN: false,
            });
        }
        console.log(this.onboardingForm.value);
    }
    goNext() {
        if (this.mode === 'basic') {
            this.page = 'verify';
        }
        else {
            this.router.navigate(['/register/details'], {
                state: {
                    mode: this.type,
                },
            });
        }
    }
    next() {
        this.stage++;
    }
    verify() {
        if (this.route.snapshot.params.mode === '4') {
            this.router.navigate(['/register/phone/08161808893/4'], {
                state: {
                    mode: this.type,
                },
            });
            return;
        }
        else if (this.route.snapshot.params.mode === '2') {
            this.router.navigate(['/register/phone/08161808893/4'], {
                state: {
                    mode: this.type,
                },
            });
            return;
        }
        this.router.navigate(['/register/phone/08161808893/1'], {
            state: {
                mode: this.type,
            },
        });
    }
};
VerifyBvnComponent.ctorParameters = () => [
    { type: _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute }
];
VerifyBvnComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-verify-bvn',
        template: _verify_bvn_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_verify_bvn_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VerifyBvnComponent);



/***/ }),

/***/ 28568:
/*!*************************************************************************!*\
  !*** ./src/app/modules/register/verify-email/verify-email.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyEmailComponent": () => (/* binding */ VerifyEmailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _verify_email_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-email.component.html?ngResource */ 43016);
/* harmony import */ var _verify_email_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verify-email.component.scss?ngResource */ 89883);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/http/services/auth.service */ 41194);










let VerifyEmailComponent = class VerifyEmailComponent {
    constructor(auth, router, toast, navController, route) {
        this.auth = auth;
        this.router = router;
        this.toast = toast;
        this.navController = navController;
        this.route = route;
        this.bvnError = false;
        this.stage = 0;
        this.id = localStorage.getItem('stageId');
        this.loading = true;
        this.user = {};
    }
    // register method
    getOnboardingStage() {
        if (this.id) {
            this.auth
                .post({ UserId: this.id }, 'UserManager.UserService.FetchUserDetail')
                .subscribe((res) => {
                var _a, _b, _c, _d;
                this.loading = false;
                if (res.data.responseCode === '00') {
                    // this.process = res.data.userDetail;
                    this.user = res.data.userDetail;
                    this.onboardingForm.patchValue({
                        Id: +this.id,
                        FirstName: res.data.userDetail.firstName
                            ? res.data.userDetail.firstName
                            : '',
                        LastName: res.data.userDetail.lastName
                            ? res.data.userDetail.lastName
                            : '',
                        MiddleName: res.data.userDetail.middleName
                            ? res.data.userDetail.middleName
                            : '',
                        UserName: res.data.userDetail.userName
                            ? res.data.userDetail.userName
                            : '',
                        Phone: res.data.userDetail.phoneNo
                            ? res.data.userDetail.phoneNo
                            : '',
                        Email: res.data.userDetail.emailAddress
                            ? res.data.userDetail.emailAddress
                            : '',
                        Password: res.data.userDetail.password
                            ? res.data.userDetail.password
                            : '',
                        CreateBankAccount: false,
                        DOB: res.data.userDetail.dob ? res.data.userDetail.dob : '',
                        RefCode: res.data.userDetail.refCode
                            ? res.data.userDetail.refCode
                            : '',
                        Verified: true,
                        AccountType: res.data.userDetail.accountType
                            ? res.data.userDetail.accountType
                            : '',
                        CompanyType: res.data.userDetail.companyType
                            ? res.data.userDetail.companyType
                            : '',
                        PassportUrl: res.data.userDetail.passportUrl
                            ? res.data.userDetail.passportUrl
                            : '',
                        HasBVN: res.data.userDetail.hasBVN
                            ? res.data.userDetail.hasBVN
                            : false,
                        Stage: 2,
                        IsFinal: res.data.userDetail.isFinal
                            ? res.data.userDetail.isFinal
                            : false,
                        BVN: res.data.userDetail.bvn ? res.data.userDetail.bvn : '',
                        Shares: res.data.userDetail.shares
                            ? res.data.userDetail.shares
                            : false,
                        TinNumber: res.data.userDetail.tinNumber
                            ? res.data.userDetail.tinNumber
                            : '',
                        RCNumber: res.data.userDetail.rcNumber
                            ? res.data.userDetail.rcNumber
                            : '',
                        CompanyName: res.data.userDetail.companyName
                            ? res.data.userDetail.companyName
                            : '',
                        Gender: res.data.userDetail.gender
                            ? res.data.userDetail.gender
                            : '',
                    });
                    console.log(res);
                    this.sendOtp();
                }
                else {
                    console.log(res);
                    this.router.navigate(['/register/become-royalty'], {
                        state: {
                            mode: (_d = (_c = (_b = (_a = this.router) === null || _a === void 0 ? void 0 : _a.getCurrentNavigation()) === null || _b === void 0 ? void 0 : _b.extras) === null || _c === void 0 ? void 0 : _c.state) === null || _d === void 0 ? void 0 : _d.mode,
                        },
                    });
                    this.toast.error('Please try again', 'Error');
                }
            }, (err) => {
                this.router.navigate(['/register/become-royalty'], {
                    state: {
                        mode: this.type,
                    },
                });
                this.toast.error('Please try again', 'Error');
            });
        }
        else {
            this.router.navigate(['/register/become-royalty'], {
                state: {
                    mode: this.type,
                },
            });
        }
        return;
    }
    ngOnInit() {
        var _a, _b, _c, _d;
        this.type = (_d = (_c = (_b = (_a = this.router) === null || _a === void 0 ? void 0 : _a.getCurrentNavigation()) === null || _b === void 0 ? void 0 : _b.extras) === null || _c === void 0 ? void 0 : _c.state) === null || _d === void 0 ? void 0 : _d.mode;
        console.log('type', this.type);
        // register form
        this.getOnboardingStage();
        this.onboardingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            Id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(+this.id),
            FirstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            LastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            MiddleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            UserName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            Phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            CreateBankAccount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
            DOB: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            RefCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            Verified: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(true),
            AccountType: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            CompanyType: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            PassportUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            HasBVN: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
            Stage: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(3),
            IsFinal: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
            BVN: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            Shares: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
            TinNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            RCNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            CompanyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            Gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
        });
        // console.log(this.onboardingForm.value);
    }
    sendOtp() {
        this.bvnError = false;
        this.loading = true;
        this.auth
            .post({ UserId: +this.id, EmailorPhonenumber: this.user.emailAddress }, 'UserManager.UserService.SendOtp')
            .subscribe((res) => {
            this.loading = false;
            console.log(res);
            if (res.data.responseCode === '00') {
                this.otp = res.data.data.otp;
                this.toast.success('OTP sent to your Email', 'Thanks');
            }
            else {
                this.toast.error(res.data.responseMessage, 'Thanks');
            }
        }, (err) => {
            this.toast.error('Please check you network and try again', 'Thanks');
            this.loading = false;
        });
    }
    verifyOtp() {
        this.loading = true;
        this.bvnError = false;
        console.log(this.otp, this.enOTP);
        this.auth
            .post({ EmailorPhonenumber: this.user.emailAddress, Otp: this.enOTP }, 'UserManager.UserService.ValidateOtp')
            .subscribe((res) => {
            this.loading = false;
            console.log(res);
            if (res.data.responseCode === '00') {
                this.auth
                    .post(this.onboardingForm.value, 'UserManager.UserService.UpdateUser')
                    .subscribe((res) => {
                    if (res.data.responseCode === '00') {
                        console.log(res.data.data.id);
                        this.loading = false;
                        // this.data = res.data;
                        localStorage.setItem('stageId', res.data.data.id);
                        if (this.route.snapshot.params.mode === '3') {
                            this.router.navigate(['/register/image-done'], {
                                state: {
                                    mode: this.type,
                                },
                            });
                        }
                        else {
                            this.router.navigate(['/register/image'], {
                                state: {
                                    mode: this.type,
                                },
                            });
                        }
                        // deal with register
                        console.log(res);
                    }
                    else {
                        this.toast.error(res.data.responseMessage, 'Error');
                    }
                }, (err) => {
                    this.toast.error('Error please try Again', 'Error');
                    this.loading = false;
                    this.bvnError = true;
                });
            }
            else {
                this.bvnError = true;
                this.loading = false;
            }
        }, (err) => {
            this.toast.error('Check your internet connection', 'Error');
            this.loading = false;
        });
    }
    goBack() {
        if (this.stage === 0) {
            this.navController.back();
        }
        else {
            this.stage -= 1;
        }
    }
    next() { }
};
VerifyEmailComponent.ctorParameters = () => [
    { type: _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute }
];
VerifyEmailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-verify-email',
        template: _verify_email_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_verify_email_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VerifyEmailComponent);



/***/ }),

/***/ 62284:
/*!***********************************************************************!*\
  !*** ./src/app/modules/register/verify-info/verify-info.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyInfoComponent": () => (/* binding */ VerifyInfoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _verify_info_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-info.component.html?ngResource */ 67109);
/* harmony import */ var _verify_info_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verify-info.component.scss?ngResource */ 93010);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);






let VerifyInfoComponent = class VerifyInfoComponent {
    constructor(navController) {
        this.navController = navController;
        this.imageSrc = 'assets/icon/hey.png';
        this.verifyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
        });
        this.completed = 3;
        this.stage = 0;
    }
    ngOnInit() { }
    goBack() {
        if (this.stage === 0) {
            this.navController.back();
        }
        else {
            this.stage -= 1;
        }
    }
};
VerifyInfoComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController }
];
VerifyInfoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-verify-info',
        template: _verify_info_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_verify_info_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VerifyInfoComponent);



/***/ }),

/***/ 23862:
/*!*************************************************************************!*\
  !*** ./src/app/modules/register/verify-phone/verify-phone.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyPhoneComponent": () => (/* binding */ VerifyPhoneComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _verify_phone_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-phone.component.html?ngResource */ 21957);
/* harmony import */ var _verify_phone_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verify-phone.component.scss?ngResource */ 95);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/http/services/auth.service */ 41194);










let VerifyPhoneComponent = class VerifyPhoneComponent {
    constructor(auth, router, toast, navController, route) {
        this.auth = auth;
        this.router = router;
        this.toast = toast;
        this.navController = navController;
        this.route = route;
        this.bvnError = false;
        this.stage = 0;
        this.id = localStorage.getItem('stageId');
        this.loading = true;
        this.user = {};
    }
    // register method
    getOnboardingStage() {
        if (this.id) {
            this.auth
                .post({ UserId: this.id }, 'UserManager.UserService.FetchUserDetail')
                .subscribe((res) => {
                var _a, _b, _c, _d;
                this.loading = false;
                if (res.data.responseCode === '00') {
                    // this.process = res.data.userDetail;
                    this.onboardingForm.patchValue({
                        Id: +this.id,
                        FirstName: res.data.userDetail.firstName
                            ? res.data.userDetail.firstName
                            : '',
                        LastName: res.data.userDetail.lastName
                            ? res.data.userDetail.lastName
                            : '',
                        MiddleName: res.data.userDetail.middleName
                            ? res.data.userDetail.middleName
                            : '',
                        UserName: res.data.userDetail.userName
                            ? res.data.userDetail.userName
                            : '',
                        Phone: res.data.userDetail.phoneNo
                            ? res.data.userDetail.phoneNo
                            : '',
                        Email: res.data.userDetail.emailAddress
                            ? res.data.userDetail.emailAddress
                            : '',
                        Password: res.data.userDetail.password
                            ? res.data.userDetail.password
                            : '',
                        CreateBankAccount: false,
                        DOB: res.data.userDetail.dob ? res.data.userDetail.dob : '',
                        RefCode: res.data.userDetail.refCode
                            ? res.data.userDetail.refCode
                            : '',
                        Verified: true,
                        AccountType: res.data.userDetail.accountType
                            ? res.data.userDetail.accountType
                            : '',
                        CompanyType: res.data.userDetail.companyType
                            ? res.data.userDetail.companyType
                            : '',
                        PassportUrl: res.data.userDetail.passportUrl
                            ? res.data.userDetail.passportUrl
                            : '',
                        HasBVN: res.data.userDetail.hasBVN
                            ? res.data.userDetail.hasBVN
                            : false,
                        Stage: 2,
                        IsFinal: res.data.userDetail.isFinal
                            ? res.data.userDetail.isFinal
                            : false,
                        BVN: res.data.userDetail.bvn ? res.data.userDetail.bvn : '',
                        Shares: res.data.userDetail.shares
                            ? res.data.userDetail.shares
                            : false,
                        TinNumber: res.data.userDetail.tinNumber
                            ? res.data.userDetail.tinNumber
                            : '',
                        RCNumber: res.data.userDetail.rcNumber
                            ? res.data.userDetail.rcNumber
                            : '',
                        CompanyName: res.data.userDetail.companyName
                            ? res.data.userDetail.companyName
                            : '',
                        Gender: res.data.userDetail.gender
                            ? res.data.userDetail.gender
                            : '',
                    });
                    this.user = res.data.userDetail;
                    this.sendOtp();
                    console.log(res);
                }
                else {
                    console.log(res);
                    this.router.navigate(['/register/become-royalty'], {
                        state: {
                            mode: (_d = (_c = (_b = (_a = this.router) === null || _a === void 0 ? void 0 : _a.getCurrentNavigation()) === null || _b === void 0 ? void 0 : _b.extras) === null || _c === void 0 ? void 0 : _c.state) === null || _d === void 0 ? void 0 : _d.mode,
                        },
                    });
                    this.toast.error('Please try again', 'Error');
                }
            }, (err) => {
                this.router.navigate(['/register/become-royalty'], {
                    state: {
                        mode: this.type,
                    },
                });
                this.toast.error('Please try again', 'Error');
            });
        }
        else {
            this.router.navigate(['/register/become-royalty'], {
                state: {
                    mode: this.type,
                },
            });
        }
        return;
    }
    ngOnInit() {
        var _a, _b, _c, _d;
        // register form
        this.type = (_d = (_c = (_b = (_a = this.router) === null || _a === void 0 ? void 0 : _a.getCurrentNavigation()) === null || _b === void 0 ? void 0 : _b.extras) === null || _c === void 0 ? void 0 : _c.state) === null || _d === void 0 ? void 0 : _d.mode;
        console.log('type', this.type);
        this.getOnboardingStage();
        this.onboardingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            Id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(+this.id),
            FirstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            LastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            MiddleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            UserName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            Phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            CreateBankAccount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
            DOB: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            RefCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            Verified: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(true),
            AccountType: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            CompanyType: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            PassportUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            HasBVN: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
            Stage: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(3),
            IsFinal: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
            BVN: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            Shares: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
            TinNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            RCNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            CompanyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            Gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
        });
        // console.log(this.onboardingForm.value);
    }
    sendOtp() {
        this.loading = true;
        this.auth
            .post({ UserId: +this.id, EmailorPhonenumber: this.user.phoneNo }, 'UserManager.UserService.SendOtp')
            .subscribe((res) => {
            this.loading = false;
            console.log(res);
            if (res.status === '00') {
                this.otp = res.data.data.otp;
                this.toast.success('OTP sent to your Mobile', 'Thanks');
            }
            else {
                this.bvnError = true;
            }
        }, (err) => console.error(err.message));
    }
    verifyOtp() {
        console.log(this.otp, this.enOTP);
        this.loading = true;
        this.bvnError = false;
        console.log(this.otp, this.enOTP);
        this.auth
            .post({ EmailorPhonenumber: this.user.phoneNo, Otp: this.enOTP }, 'UserManager.UserService.ValidateOtp')
            .subscribe((res) => {
            this.loading = false;
            console.log(res);
            if (res.data.responseCode === '00') {
                this.auth
                    .post(this.onboardingForm.value, 'UserManager.UserService.UpdateUser')
                    .subscribe((res) => {
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
                    if (res.data.responseCode === '00') {
                        console.log(res.data.data.id);
                        this.loading = false;
                        // this.data = res.data;
                        localStorage.setItem('stageId', res.data.data.id);
                        if (this.route.snapshot.params.mode === '1') {
                            this.router.navigate(['/register/bvn-success/1'], {
                                state: {
                                    mode: (_d = (_c = (_b = (_a = this.router) === null || _a === void 0 ? void 0 : _a.getCurrentNavigation()) === null || _b === void 0 ? void 0 : _b.extras) === null || _c === void 0 ? void 0 : _c.state) === null || _d === void 0 ? void 0 : _d.mode,
                                },
                            });
                        }
                        else if (this.route.snapshot.params.mode === '2') {
                            this.router.navigate(['/register/image'], {
                                state: {
                                    mode: (_h = (_g = (_f = (_e = this.router) === null || _e === void 0 ? void 0 : _e.getCurrentNavigation()) === null || _f === void 0 ? void 0 : _f.extras) === null || _g === void 0 ? void 0 : _g.state) === null || _h === void 0 ? void 0 : _h.mode,
                                },
                            });
                        }
                        else if (this.route.snapshot.params.mode === '3') {
                            this.router.navigate(['/register/image-done'], {
                                state: {
                                    mode: (_m = (_l = (_k = (_j = this.router) === null || _j === void 0 ? void 0 : _j.getCurrentNavigation()) === null || _k === void 0 ? void 0 : _k.extras) === null || _l === void 0 ? void 0 : _l.state) === null || _m === void 0 ? void 0 : _m.mode,
                                },
                            });
                        }
                        else if (this.route.snapshot.params.mode === '4') {
                            this.router.navigate(['/register/bvn-success/2'], {
                                state: {
                                    mode: (_r = (_q = (_p = (_o = this.router) === null || _o === void 0 ? void 0 : _o.getCurrentNavigation()) === null || _p === void 0 ? void 0 : _p.extras) === null || _q === void 0 ? void 0 : _q.state) === null || _r === void 0 ? void 0 : _r.mode,
                                },
                            });
                        }
                        // deal with register
                        console.log(res);
                    }
                    else {
                        this.toast.error(res.data.responseMessage, 'Error');
                    }
                }, (err) => {
                    this.toast.error('Error please try Again', 'Error');
                    this.loading = false;
                    this.bvnError = true;
                });
            }
            else {
                this.bvnError = true;
                this.loading = false;
            }
        }, (err) => {
            this.toast.error('Check your internet connection', 'Error');
            this.loading = false;
        });
        this.bvnError = false;
        if (this.otp === this.enOTP) {
        }
        else {
            this.bvnError = true;
        }
    }
    goBack() {
        if (this.stage === 0) {
            this.navController.back();
        }
        else {
            this.stage -= 1;
        }
    }
    next() {
        if (this.route.snapshot.params.mode === '1') {
            this.router.navigate(['/register/bvn-success/1'], {
                state: {
                    mode: this.type,
                },
            });
        }
        else if (this.route.snapshot.params.mode === '2') {
            this.router.navigate(['/register/image'], {
                state: {
                    mode: this.type,
                },
            });
        }
        else if (this.route.snapshot.params.mode === '3') {
            this.router.navigate(['/register/image-done'], {
                state: {
                    mode: this.type,
                },
            });
        }
        else if (this.route.snapshot.params.mode === '4') {
            this.router.navigate(['/register/bvn-success/2'], {
                state: {
                    mode: this.type,
                },
            });
        }
    }
};
VerifyPhoneComponent.ctorParameters = () => [
    { type: _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute }
];
VerifyPhoneComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-verify-phone',
        template: _verify_phone_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_verify_phone_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VerifyPhoneComponent);



/***/ }),

/***/ 50978:
/*!********************************************************************!*\
  !*** ./src/app/modules/reset-password/reset-password.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordComponent": () => (/* binding */ ResetPasswordComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _reset_password_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-password.component.html?ngResource */ 41582);
/* harmony import */ var _reset_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-password.component.scss?ngResource */ 76526);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/http/services/auth.service */ 41194);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);








let ResetPasswordComponent = class ResetPasswordComponent {
    constructor(auth, toast, router) {
        this.auth = auth;
        this.toast = toast;
        this.router = router;
        this.loading = false;
        this.show = false;
        // signinForm = new FormGroup({
        //   username: new FormControl(''),
        //   password: new FormControl(''),
        // });
        this.imageSrc = 'assets/icon/hey.png';
        this.change = true;
        this.check = [];
    }
    viewpassword() {
        this.show = !this.show;
    }
    isUpper(str) {
        return /[A-Z]/.test(str);
    }
    isLower(str) {
        return /[a-z]/.test(str);
    }
    checkNumber(str) {
        return /[0-9]/.test(str);
    }
    checkLength(str) {
        if (str.length >= 6) {
            return true;
        }
        else {
            return false;
        }
    }
    checkStrength(event) {
        console.log(event);
        const upper = this.isUpper(event);
        const lower = this.isLower(event);
        const isNumber = this.checkNumber(event);
        const length = this.checkLength(event);
        const res = [];
        if (upper) {
            res.push(1);
        }
        if (lower) {
            res.push(1);
        }
        if (isNumber) {
            res.push(1);
        }
        if (length) {
            res.push(1);
        }
        this.check = res;
        console.log(this.check);
    }
    // getUsers() {
    //   this.auth.getUsers().subscribe(
    //     (x) => console.log('Observer got a next value: ' + x),
    //     (err) => console.error(err.message),
    //     () => console.log('Observer got a complete notification')
    //   );
    // }
    // login method
    resetPassword() {
        // setTimeout(() => {
        //   this.router.navigate(['/dashboard']);
        //   this.loading = false;
        // }, 3000);
        if (this.check.length < 4) {
            this.toast.error('password should contain lowercase, uppercase, number and minimum of 6 characters', 'Error');
            return;
        }
        if (this.password != this.confirmPassword) {
            this.toast.error('Password must match confirm password', 'Error');
            return;
        }
        this.loading = true;
        const data = {
            Email: this.email,
            OTP: this.otp,
            Password: this.password,
            ConfirmPassword: this.confirmPassword,
        };
        this.auth.post(data, 'UserManager.UserService.ResetPassword').subscribe((res) => {
            this.loading = false;
            console.log(res);
            if (res.data.responseCode === '00') {
                this.toast.success('Password reset Successful', 'Success');
                this.data = res.data;
                console.log(res.data);
                localStorage.setItem('token', res.data.token);
                this.router.navigate(['/login']);
            }
            else {
                this.toast.error(res.data.responseMessage, 'Error');
            }
        }, (err) => {
            this.toast.error('Check your internet connection', 'Error');
            this.loading = false;
        });
    }
    forgot() {
        this.router.navigate(['/forgot-passowrd']);
    }
    ngOnInit() {
        // login form
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
        });
    }
    register() {
        this.router.navigate(['/register']);
    }
    loginNow() {
        this.router.navigate(['/login']);
    }
    sendOtp() {
        this.loading = true;
        this.auth
            .post({ EmailorPhonenumber: this.email }, 'UserManager.UserService.SendResetPasswordOtp')
            .subscribe((res) => {
            this.loading = false;
            console.log(res);
            if (res.data.responseCode === '00') {
                this.toast.success('OTP sent to your Email', 'Thanks');
                this.change = false;
            }
            else {
                this.toast.error(res.data.responseMessage, 'Thanks');
            }
        }, (err) => {
            this.toast.error('Please check you network and try again', 'Thanks');
            this.loading = false;
        });
    }
};
ResetPasswordComponent.ctorParameters = () => [
    { type: _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
ResetPasswordComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-reset-password',
        template: _reset_password_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_reset_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ResetPasswordComponent);



/***/ }),

/***/ 32774:
/*!******************************************************!*\
  !*** ./src/app/modules/support/support.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportComponent": () => (/* binding */ SupportComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _support_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./support.component.html?ngResource */ 58330);
/* harmony import */ var _support_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./support.component.scss?ngResource */ 81768);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let SupportComponent = class SupportComponent {
    constructor() { }
    ngOnInit() { }
};
SupportComponent.ctorParameters = () => [];
SupportComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-support',
        template: _support_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_support_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SupportComponent);



/***/ }),

/***/ 13854:
/*!***************************************************!*\
  !*** ./src/app/modules/transfer/transfer.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransferPage": () => (/* binding */ TransferPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _transfer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transfer.page.html?ngResource */ 81131);
/* harmony import */ var _transfer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transfer.page.scss?ngResource */ 96323);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/http/services/auth.service */ 41194);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);







let TransferPage = class TransferPage {
    constructor(auth, toast, router) {
        this.auth = auth;
        this.toast = toast;
        this.router = router;
        this.show = false;
        this.loading = false;
        this.source = 'assets/icon/royalty.png';
        this.imageSrc = 'assets/icon/done.png';
        this.selectedBtn = true;
        this.selectedBtn1 = false;
        this.transType = 0;
        this.newReq = true;
        this.name = '';
        this.saveBene = false;
        this.banks = [];
        this.user = JSON.parse(localStorage.getItem('user'));
        this.benes = localStorage.getItem('benAccs')
            ? JSON.parse(localStorage.getItem('benAccs'))
            : [];
    }
    ngOnInit() {
        console.log(this.user);
        this.accNum = this.user.accountNos[0].accountNo;
        this.getBanks();
        this.auth
            .post({
            UserId: +this.user.userId,
            Channel: 'MobileApp',
        }, 'UserManager.UserService.FetchUserTransactionLimit')
            .subscribe((res) => {
            console.log(res);
            if (res.status === '00') {
                this.limitInter = res.data.data[0].interLimit;
                this.limitIntra = res.data.data[0].intraLimit;
                console.log(this.limitInter, this.limitIntra);
                // deal with register
            }
            else {
            }
        }, (err) => { });
    }
    transactionType(e) {
        this.transType = e;
    }
    create() {
        this.router.navigate(['/dashboard']);
        this.transType = 0;
    }
    sanitise() {
        if (this.user.hasBVN === false) {
            this.toast.error(`You have to verify your BVN to carry out transactions`, 'Error');
            return true;
        }
        if (this.transType === 1) {
            if (this.amount > this.limitIntra) {
                this.toast.error(`Your transfer limit is ${this.limitIntra}`, 'Error');
                return true;
            }
        }
        console.log('wait');
        if (this.transType === 2) {
            if (!this.bankName || !this.bankCode) {
                this.toast.error('Bank is required', 'Error');
                return true;
            }
            if (this.amount > this.limitInter) {
                this.toast.error(`Your transfer limit is ${this.limitInter}`, 'Error');
                return true;
            }
        }
        if (!this.benAcc) {
            this.toast.error('Beneficiary account is required', 'Error');
            return true;
        }
        if (!this.amount) {
            this.toast.error('Amount is required', 'Error');
            return true;
        }
        if (!this.name || this.showName) {
            this.toast.error('please provide a valid account', 'Error');
            return true;
        }
    }
    next() {
        if (this.sanitise()) {
            return;
        }
        this.transType = 4;
        if (this.saveBene) {
            for (let i = 0; i < this.benes.length; i++) {
                console.log(this.benes[i].accNumber);
                console.log(this.accNum);
                if (this.benes[i].accNumber === this.benAcc) {
                    return;
                }
            }
            this.benes.unshift({
                name: this.name,
                accNumber: this.benAcc,
                bankName: this.bankName ? this.bankName : 'Royal Bank',
                bankCode: this.bankCode,
            });
            localStorage.setItem('benAccs', JSON.stringify(this.benes));
        }
    }
    back() {
        this.transType = 0;
    }
    chooseBeneficiary(e) {
        console.log('chosen');
    }
    chnageBank(e) {
        for (let i = 0; i < this.banks.length; i++) {
            if (this.banks[i].code === e.target.value) {
                this.bankCode = this.banks[i].code;
                this.bankName = this.banks[i].name;
            }
        }
    }
    getBanks() {
        this.auth.post({}, 'Cba.BankingService.FetchBanks').subscribe((res) => {
            console.log(res);
            if (res.status === '00') {
                // deal with register
                this.banks = res.data.data;
                this.bankCode = this.banks[0].code;
            }
            else {
                console.log(res.data.responseMessage);
            }
        }, (err) => console.error(err.message));
    }
    debounce(e) {
        if (e.length === 10) {
            if (!this.bankCode && this.transType === 2) {
                this.toast.error('please select a bank', 'Error');
                return;
            }
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.auth
                    .post({
                    accountNo: e,
                    bankCode: this.transType === 1 ? '0001' : this.bankCode,
                }, 'Nibss.NipService.NameEnquiry')
                    .subscribe((res) => {
                    console.log(res);
                    if (res.status === '00') {
                        // deal with register
                        this.showName = false;
                        if (!res.data.data.fullName) {
                            this.name = 'No record found';
                            this.showName = true;
                        }
                        else {
                            this.name = res.data.data.fullName;
                        }
                    }
                    else {
                        this.showName = true;
                        this.name = 'failed, wrong details';
                    }
                }, (err) => {
                    this.showName = true;
                    this.name = 'failed, network error';
                });
            }, 1000);
        }
        this.showName = true;
        this.name = '';
    }
    toggleRequest(e) {
        this.newReq = e;
        if (e === true) {
            this.selectedBtn = e;
            this.selectedBtn1 = false;
        }
        else {
            this.selectedBtn = false;
            this.selectedBtn1 = true;
        }
    }
    delete(number) {
        console.log(this.benes);
        const data = [];
        for (let i = 0; i < this.benes.length; i++) {
            if (this.benes[i].accNumber !== number) {
                data.push(this.benes[i]);
            }
        }
        this.benes = data;
        localStorage.setItem('benAccs', JSON.stringify(this.benes));
        console.log(this.benes);
    }
    use(acc) {
        console.log(acc);
        this.name = acc.name;
        this.benAcc = acc.accNumber;
        this.bankName = acc.bankName;
        this.bankCode = acc.bankCode;
        this.newReq = true;
        this.showName = false;
    }
    transfer() {
        this.loading = true;
        let acc;
        for (let i = 0; i < this.user.accountNos.length; i++) {
            if (this.accNum === this.user.accountNos[i].accountNo) {
                acc = this.user.accountNos[i].accountId;
            }
        }
        this.auth
            .post({
            clientId: this.user.clientId,
            accountId: acc,
        }, 'Cba.BankingService.FetchAccountBalance')
            .subscribe((res) => {
            console.log(res.data.data.balance);
            if (res.data.responseCode === '00') {
                console.log(res.data.data.balance, +this.amount);
                if (+this.amount > res.data.data.balance) {
                    this.loading = false;
                    this.toast.error('Insufficient balance', 'Error');
                    return;
                }
                else {
                    this.bankName = this.bankName ? this.bankName : 'Royal Bank';
                    console.log(this.bankName);
                    if (!this.bankName ||
                        this.bankName === 'Royal Bank' ||
                        this.bankName === 'royal Bank') {
                        this.auth
                            .post({
                            debitAccountNo: this.accNum,
                            creditAccountNo: this.benAcc,
                            Amount: +this.amount,
                            Narration: this.narration,
                        }, 'Cba.BankingService.FundTransfer')
                            .subscribe((res) => {
                            this.loading = false;
                            console.log(res);
                            if (res.data.responseCode === '00') {
                                this.transType = 3;
                                this.show = false;
                                // deal with register
                            }
                            else {
                                this.loading = false;
                                console.log(res.data.responseMessage);
                                this.toast.error(res.data.responseMessage, 'Error');
                            }
                        }, (err) => {
                            this.loading = false;
                            this.toast.error('Please try again', 'Error');
                        });
                    }
                    else {
                        this.auth
                            .post({
                            bankName: this.bankName ? this.bankName : 'Royal Bank',
                            accountNumber: this.benAcc,
                            Amount: +this.amount,
                            Narration: this.narration,
                        }, 'Nibss.NipService.InterFundsTransfer')
                            .subscribe((res) => {
                            this.loading = false;
                            console.log(res);
                            if (res.data.responseCode === '00') {
                                this.transType = 3;
                                this.show = false;
                                // deal with register
                            }
                            else {
                                this.loading = false;
                                console.log(res.data.responseMessage);
                                this.toast.error(res.data.responseMessage, 'Error');
                            }
                        }, (err) => {
                            this.loading = false;
                            this.toast.error('Please try again', 'Error');
                        });
                    }
                }
                // deal with register
            }
            else {
                this.loading = false;
                this.toast.error('Please try again', 'Error');
            }
        }, (err) => {
            this.loading = false;
            this.toast.error('Please try again', 'Error');
        });
    }
    finish() {
        this.transfer();
    }
    load() {
        this.loading = !this.loading;
    }
    close() {
        this.show = false;
    }
};
TransferPage.ctorParameters = () => [
    { type: _core_http_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
TransferPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-transfer',
        template: _transfer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_transfer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TransferPage);



/***/ }),

/***/ 11567:
/*!******************************************************!*\
  !*** ./src/app/modules/welcome/welcome.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeComponent": () => (/* binding */ WelcomeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _welcome_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome.component.html?ngResource */ 10252);
/* harmony import */ var _welcome_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.component.scss?ngResource */ 92938);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);





let WelcomeComponent = class WelcomeComponent {
    constructor(router) {
        this.router = router;
        this.caption = 'Do More';
        this.subtitle = 'Access world class banking experience and financial services with ease. FOR FREE';
        this.source = 'assets/icon/welcome.png';
        this.stage = 1;
    }
    ngOnInit() { }
    skip() {
        this.router.navigate(['/choose-signin']);
    }
    next() {
        if (this.stage === 1) {
            this.caption = 'Be More';
            this.subtitle =
                'Bank with ease, say no to hidden charges and enjoy an experience designed to help you grow and be more.';
            this.source = 'assets/icon/welcome.jpg';
            this.stage++;
        }
        else {
            this.router.navigate(['/choose-signin']);
        }
    }
};
WelcomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
WelcomeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-welcome',
        template: _welcome_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_welcome_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], WelcomeComponent);



/***/ }),

/***/ 7942:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page.html?ngResource */ 65230);
/* harmony import */ var _tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss?ngResource */ 94710);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);





let TabsPage = class TabsPage {
    constructor(router) {
        this.router = router;
    }
    transfer() {
        this.router.navigate(['/action/transfer']);
    }
    support() {
        this.router.navigate(['/action/support']);
    }
    profile() {
        this.router.navigate(['/action/account-info']);
    }
};
TabsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tabs',
        template: _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabsPage);



/***/ }),

/***/ 87218:
/*!************************************************!*\
  !*** ./src/app/withdraw/withdraw.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WithdrawComponent": () => (/* binding */ WithdrawComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _withdraw_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withdraw.component.html?ngResource */ 42752);
/* harmony import */ var _withdraw_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withdraw.component.scss?ngResource */ 20430);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);





let WithdrawComponent = class WithdrawComponent {
    constructor() {
        this.source = 'assets/icon/royalty.png';
        this.imageSrc = 'assets/icon/success.png';
        this.selectedBtn = true;
        this.selectedBtn1 = false;
        this.transType = 0;
        this.newReq = true;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            beneficiaryAccount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
            accountId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
            txnType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
            locale: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
            dateFormat: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('dd MMMM yyyy'),
            transactionDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
            transactionAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
            paymentTypeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
            accountNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
            checkNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
            routingCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
            receiptNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
            bankNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
        });
    }
    ngOnInit() {
        console.log('working');
    }
    transactionType(e) {
        this.transType = e;
    }
    create() {
        console.log('Hey');
    }
    next() {
        console.log('Hey');
    }
    chooseBeneficiary(e) {
        console.log('chosen');
    }
    toggleRequest(e) {
        this.newReq = e;
        if (e === true) {
            this.selectedBtn = e;
            this.selectedBtn1 = false;
        }
        else {
            this.selectedBtn = false;
            this.selectedBtn1 = true;
        }
    }
};
WithdrawComponent.ctorParameters = () => [];
WithdrawComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-withdraw',
        template: _withdraw_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_withdraw_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], WithdrawComponent);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 68150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/pwa-elements/loader */ 38763);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__.platformBrowserDynamic)()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch((err) => console.log(err));
(0,_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__.defineCustomElements)(window);


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		25593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		35473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		32275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		48050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		78179,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		90668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		32875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 55899:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \**************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./pwa-action-sheet.entry.js": [
		45464,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-action-sheet_entry_js"
	],
	"./pwa-camera-modal-instance.entry.js": [
		68724,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal-instance_entry_js"
	],
	"./pwa-camera-modal.entry.js": [
		8145,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal_entry_js"
	],
	"./pwa-camera.entry.js": [
		30527,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera_entry_js"
	],
	"./pwa-toast.entry.js": [
		44389,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-toast_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 55899;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 58685,
	"./af.js": 58685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 32614,
	"./ar-kw.js": 32614,
	"./ar-ly": 18630,
	"./ar-ly.js": 18630,
	"./ar-ma": 28674,
	"./ar-ma.js": 28674,
	"./ar-sa": 49032,
	"./ar-sa.js": 49032,
	"./ar-tn": 24730,
	"./ar-tn.js": 24730,
	"./ar.js": 254,
	"./az": 53052,
	"./az.js": 53052,
	"./be": 60150,
	"./be.js": 60150,
	"./bg": 63069,
	"./bg.js": 63069,
	"./bm": 13466,
	"./bm.js": 13466,
	"./bn": 18516,
	"./bn-bd": 90557,
	"./bn-bd.js": 90557,
	"./bn.js": 18516,
	"./bo": 26273,
	"./bo.js": 26273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 19815,
	"./bs.js": 19815,
	"./ca": 83331,
	"./ca.js": 83331,
	"./cs": 21320,
	"./cs.js": 21320,
	"./cv": 72219,
	"./cv.js": 72219,
	"./cy": 68266,
	"./cy.js": 68266,
	"./da": 66427,
	"./da.js": 66427,
	"./de": 67435,
	"./de-at": 52871,
	"./de-at.js": 52871,
	"./de-ch": 12994,
	"./de-ch.js": 12994,
	"./de.js": 67435,
	"./dv": 82357,
	"./dv.js": 82357,
	"./el": 95649,
	"./el.js": 95649,
	"./en-au": 59961,
	"./en-au.js": 59961,
	"./en-ca": 19878,
	"./en-ca.js": 19878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 70864,
	"./en-ie.js": 70864,
	"./en-il": 91579,
	"./en-il.js": 91579,
	"./en-in": 30940,
	"./en-in.js": 30940,
	"./en-nz": 16181,
	"./en-nz.js": 16181,
	"./en-sg": 44301,
	"./en-sg.js": 44301,
	"./eo": 85291,
	"./eo.js": 85291,
	"./es": 54529,
	"./es-do": 53764,
	"./es-do.js": 53764,
	"./es-mx": 12584,
	"./es-mx.js": 12584,
	"./es-us": 63425,
	"./es-us.js": 63425,
	"./es.js": 54529,
	"./et": 35203,
	"./et.js": 35203,
	"./eu": 70678,
	"./eu.js": 70678,
	"./fa": 83483,
	"./fa.js": 83483,
	"./fi": 96262,
	"./fi.js": 96262,
	"./fil": 52521,
	"./fil.js": 52521,
	"./fo": 34555,
	"./fo.js": 34555,
	"./fr": 63131,
	"./fr-ca": 88239,
	"./fr-ca.js": 88239,
	"./fr-ch": 21702,
	"./fr-ch.js": 21702,
	"./fr.js": 63131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 23821,
	"./ga.js": 23821,
	"./gd": 71753,
	"./gd.js": 71753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 92762,
	"./gom-deva.js": 92762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 82809,
	"./gu.js": 82809,
	"./he": 45402,
	"./he.js": 45402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 10410,
	"./hr.js": 10410,
	"./hu": 38288,
	"./hu.js": 38288,
	"./hy-am": 67928,
	"./hy-am.js": 67928,
	"./id": 71334,
	"./id.js": 71334,
	"./is": 86959,
	"./is.js": 86959,
	"./it": 34864,
	"./it-ch": 51124,
	"./it-ch.js": 51124,
	"./it.js": 34864,
	"./ja": 36141,
	"./ja.js": 36141,
	"./jv": 29187,
	"./jv.js": 29187,
	"./ka": 42136,
	"./ka.js": 42136,
	"./kk": 94332,
	"./kk.js": 94332,
	"./km": 18607,
	"./km.js": 18607,
	"./kn": 84305,
	"./kn.js": 84305,
	"./ko": 70234,
	"./ko.js": 70234,
	"./ku": 16003,
	"./ku.js": 16003,
	"./ky": 75061,
	"./ky.js": 75061,
	"./lb": 32786,
	"./lb.js": 32786,
	"./lo": 66183,
	"./lo.js": 66183,
	"./lt": 50029,
	"./lt.js": 50029,
	"./lv": 24169,
	"./lv.js": 24169,
	"./me": 68577,
	"./me.js": 68577,
	"./mi": 68177,
	"./mi.js": 68177,
	"./mk": 50337,
	"./mk.js": 50337,
	"./ml": 65260,
	"./ml.js": 65260,
	"./mn": 52325,
	"./mn.js": 52325,
	"./mr": 14695,
	"./mr.js": 14695,
	"./ms": 75334,
	"./ms-my": 37151,
	"./ms-my.js": 37151,
	"./ms.js": 75334,
	"./mt": 63570,
	"./mt.js": 63570,
	"./my": 97963,
	"./my.js": 97963,
	"./nb": 88028,
	"./nb.js": 88028,
	"./ne": 86638,
	"./ne.js": 86638,
	"./nl": 50302,
	"./nl-be": 66782,
	"./nl-be.js": 66782,
	"./nl.js": 50302,
	"./nn": 33501,
	"./nn.js": 33501,
	"./oc-lnc": 50563,
	"./oc-lnc.js": 50563,
	"./pa-in": 50869,
	"./pa-in.js": 50869,
	"./pl": 65302,
	"./pl.js": 65302,
	"./pt": 49687,
	"./pt-br": 74884,
	"./pt-br.js": 74884,
	"./pt.js": 49687,
	"./ro": 79107,
	"./ro.js": 79107,
	"./ru": 33627,
	"./ru.js": 33627,
	"./sd": 30355,
	"./sd.js": 30355,
	"./se": 83427,
	"./se.js": 83427,
	"./si": 11848,
	"./si.js": 11848,
	"./sk": 54590,
	"./sk.js": 54590,
	"./sl": 20184,
	"./sl.js": 20184,
	"./sq": 56361,
	"./sq.js": 56361,
	"./sr": 78965,
	"./sr-cyrl": 81287,
	"./sr-cyrl.js": 81287,
	"./sr.js": 78965,
	"./ss": 25456,
	"./ss.js": 25456,
	"./sv": 70451,
	"./sv.js": 70451,
	"./sw": 77558,
	"./sw.js": 77558,
	"./ta": 51356,
	"./ta.js": 51356,
	"./te": 73693,
	"./te.js": 73693,
	"./tet": 21243,
	"./tet.js": 21243,
	"./tg": 42500,
	"./tg.js": 42500,
	"./th": 55768,
	"./th.js": 55768,
	"./tk": 77761,
	"./tk.js": 77761,
	"./tl-ph": 35780,
	"./tl-ph.js": 35780,
	"./tlh": 29590,
	"./tlh.js": 29590,
	"./tr": 33807,
	"./tr.js": 33807,
	"./tzl": 93857,
	"./tzl.js": 93857,
	"./tzm": 60654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 60654,
	"./ug-cn": 30845,
	"./ug-cn.js": 30845,
	"./uk": 19232,
	"./uk.js": 19232,
	"./ur": 47052,
	"./ur.js": 47052,
	"./uz": 77967,
	"./uz-latn": 32233,
	"./uz-latn.js": 32233,
	"./uz.js": 77967,
	"./vi": 98615,
	"./vi.js": 98615,
	"./x-pseudo": 12320,
	"./x-pseudo.js": 12320,
	"./yo": 31313,
	"./yo.js": 31313,
	"./zh-cn": 64490,
	"./zh-cn.js": 64490,
	"./zh-hk": 55910,
	"./zh-hk.js": 55910,
	"./zh-mo": 98262,
	"./zh-mo.js": 98262,
	"./zh-tw": 44223,
	"./zh-tw.js": 44223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ }),

/***/ 79259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-content {\n  font-family: Mulish !important;\n  --padding-end: 20px;\n  --padding-start: 20px;\n}\n\nli span div a button section table p {\n  font-family: Mulish !important;\n}\n\nion-button {\n  font-family: Mulish !important;\n}\n\nselect {\n  -webkit-appearance: none;\n  appearance: none;\n  padding-left: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLDhCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx3QkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7QUFFRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgZm9udC1mYW1pbHk6IE11bGlzaCAhaW1wb3J0YW50O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDIwcHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xyXG59XHJcblxyXG5saSBzcGFuIGRpdiBhIGJ1dHRvbiBzZWN0aW9uIHRhYmxlIHAge1xyXG4gIGZvbnQtZmFtaWx5OiBNdWxpc2ggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgZm9udC1mYW1pbHk6IE11bGlzaCAhaW1wb3J0YW50O1xyXG59XHJcbnNlbGVjdCB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG4gIHBhZGRpbmctbGVmdDogNTBweDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 26912:
/*!************************************************************************!*\
  !*** ./src/app/components/add-fund/add-fund.component.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".overlay {\n  position: fixed;\n  width: 100vh;\n  height: 100vw;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5) !important;\n  z-index: 99;\n  cursor: pointer;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  align-content: space-between;\n  row-gap: 30px;\n  height: 50vh;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  z-index: 100;\n  background-color: white;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);\n  padding-top: 20px;\n  width: 100vw;\n}\n\n.title {\n  font-size: 20px;\n}\n\n.table {\n  font-size: 13px;\n  text-align: left;\n  max-width: 700px;\n  margin: auto;\n}\n\n.table td, .table th {\n  padding: 10px 0;\n  padding-left: 10px;\n}\n\nion-button {\n  --background: #fff\n  --background-activated: #25214f;\n  --color: #25214f;\n  --color-activateded:#FEE178 ;\n  font-size: 20px;\n  font-weight: 900 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1mdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLCtDQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EseUNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFFRjs7QUFBQTtFQUNFLGVBQUE7QUFHRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUVGOztBQURFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBR0o7O0FBRUE7RUFDRTtpQ0FBQTtFQUVBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7QUFDRiIsImZpbGUiOiJhZGQtZnVuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdmVybGF5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMHZoO1xyXG4gIGhlaWdodDogMTAwdnc7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KSAhaW1wb3J0YW50O1xyXG4gIHotaW5kZXg6IDk5O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHJvdy1nYXA6IDMwcHg7XHJcbiAgaGVpZ2h0OiA1MHZoO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggMTBweCByZ2IoMCAwIDAgLyAwLjIpO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIHdpZHRoOiAxMDB2dztcclxufVxyXG4udGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuXHJcbi50YWJsZSB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWF4LXdpZHRoOiA3MDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgdGQsIHRoIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAtLWJhY2tncm91bmQ6ICNmZmZcclxuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjMjUyMTRmO1xyXG4gIC0tY29sb3I6ICMyNTIxNGY7XHJcbiAgLS1jb2xvci1hY3RpdmF0ZWRlZDojRkVFMTc4IDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iXX0= */";

/***/ }),

/***/ 3933:
/*!**********************************************************************!*\
  !*** ./src/app/components/balance/balance.component.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".toast {\n  background-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbGFuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGIiwiZmlsZSI6ImJhbGFuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9hc3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 75413:
/*!********************************************************************!*\
  !*** ./src/app/components/header/header.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 46089:
/*!********************************************************************!*\
  !*** ./src/app/components/loader/loader.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".mas {\n  z-index: 1000;\n  position: fixed;\n  /* Sit on top of the page content */\n  width: 100vw;\n  /* Full width (cover the whole page) */\n  height: 100vh;\n  /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.tes {\n  color: white;\n  font-size: 25px;\n  z-index: 1000;\n}\n\n.overlay {\n  z-index: 999;\n  position: fixed;\n  /* Sit on top of the page content */\n  width: 100%;\n  /* Full width (cover the whole page) */\n  height: 100%;\n  /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.lds-facebook {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n  z-index: 1000;\n}\n\n.lds-facebook div {\n  display: inline-block;\n  position: absolute;\n  left: 8px;\n  width: 16px;\n  background: #fff;\n  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n}\n\n.lds-facebook div:nth-child(1) {\n  left: 8px;\n  animation-delay: -0.24s;\n}\n\n.lds-facebook div:nth-child(2) {\n  left: 32px;\n  animation-delay: -0.12s;\n}\n\n.lds-facebook div:nth-child(3) {\n  left: 56px;\n  animation-delay: 0;\n}\n\n@keyframes lds-facebook {\n  0% {\n    top: 8px;\n    height: 64px;\n  }\n  50%, 100% {\n    top: 24px;\n    height: 32px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQWlCLG1DQUFBO0VBQ2pCLFlBQUE7RUFBYyxzQ0FBQTtFQUNkLGFBQUE7RUFBZSx1Q0FBQTtFQUNmLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFJRjs7QUFGQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQUtGOztBQUhBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFBaUIsbUNBQUE7RUFDakIsV0FBQTtFQUFhLHNDQUFBO0VBQ2IsWUFBQTtFQUFjLHVDQUFBO0VBQ2QsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG9DQUFBO0FBU0Y7O0FBUEE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBVUY7O0FBUkE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtFQUFBO0FBV0Y7O0FBVEE7RUFDRSxTQUFBO0VBQ0EsdUJBQUE7QUFZRjs7QUFWQTtFQUNFLFVBQUE7RUFDQSx1QkFBQTtBQWFGOztBQVhBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FBY0Y7O0FBWkE7RUFDRTtJQUNFLFFBQUE7SUFDQSxZQUFBO0VBZUY7RUFiQTtJQUVFLFNBQUE7SUFDQSxZQUFBO0VBY0Y7QUFDRiIsImZpbGUiOiJsb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFzIHtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU2l0IG9uIHRvcCBvZiB0aGUgcGFnZSBjb250ZW50ICovXHJcbiAgd2lkdGg6IDEwMHZ3OyAvKiBGdWxsIHdpZHRoIChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cclxuICBoZWlnaHQ6IDEwMHZoOyAvKiBGdWxsIGhlaWdodCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG59XHJcbi50ZXMge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgei1pbmRleDogMTAwMDtcclxufVxyXG4ub3ZlcmxheSB7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU2l0IG9uIHRvcCBvZiB0aGUgcGFnZSBjb250ZW50ICovXHJcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xyXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuLmxkcy1mYWNlYm9vayB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogODBweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgei1pbmRleDogMTAwMDtcclxufVxyXG4ubGRzLWZhY2Vib29rIGRpdiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA4cHg7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBhbmltYXRpb246IGxkcy1mYWNlYm9vayAxLjJzIGN1YmljLWJlemllcigwLCAwLjUsIDAuNSwgMSkgaW5maW5pdGU7XHJcbn1cclxuLmxkcy1mYWNlYm9vayBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICBsZWZ0OiA4cHg7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yNHM7XHJcbn1cclxuLmxkcy1mYWNlYm9vayBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICBsZWZ0OiAzMnB4O1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMTJzO1xyXG59XHJcbi5sZHMtZmFjZWJvb2sgZGl2Om50aC1jaGlsZCgzKSB7XHJcbiAgbGVmdDogNTZweDtcclxuICBhbmltYXRpb24tZGVsYXk6IDA7XHJcbn1cclxuQGtleWZyYW1lcyBsZHMtZmFjZWJvb2sge1xyXG4gIDAlIHtcclxuICAgIHRvcDogOHB4O1xyXG4gICAgaGVpZ2h0OiA2NHB4O1xyXG4gIH1cclxuICA1MCUsXHJcbiAgMTAwJSB7XHJcbiAgICB0b3A6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 44224:
/*!**************************************************************!*\
  !*** ./src/app/components/pin/pin.component.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".overlay {\n  position: fixed;\n  width: 100vh;\n  height: 100vw;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5) !important;\n  z-index: 99;\n  cursor: pointer;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  align-content: space-between;\n  row-gap: 30px;\n  height: 60vh;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  z-index: 100;\n  background-color: white;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);\n  padding-top: 20px;\n  width: 100vw;\n}\n\n.pin-section {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  align-content: center;\n}\n\n.pin-box {\n  border: 2px solid #25214f;\n  background: white;\n  border-radius: 5px;\n  margin-right: 5px;\n  width: 40px;\n  height: 40px;\n  font-size: 20px;\n  font-weight: 900;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.x {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-top: 7px;\n}\n\n.keypad {\n  display: flex;\n  flex-wrap: wrap;\n  width: 80%;\n}\n\n.keys {\n  border-bottom: 1px solid #25214f;\n  width: 50px;\n  height: 50px;\n  font-size: 20px;\n  font-weight: 700 !important;\n  margin: 5px;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.row {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 100%;\n}\n\nion-button {\n  --background: #fff\n  --background-activated: #25214f;\n  --color: #25214f;\n  --color-activateded:#FEE178 ;\n  font-size: 20px;\n  font-weight: 900 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSwrQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBRUY7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUdGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBRUY7O0FBR0E7RUFDRSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQUY7O0FBSUE7RUFDRTtpQ0FBQTtFQUVBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7QUFERiIsImZpbGUiOiJwaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDB2aDtcclxuICBoZWlnaHQ6IDEwMHZ3O1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSkgIWltcG9ydGFudDtcclxuICB6LWluZGV4OiA5OTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICByb3ctZ2FwOiAzMHB4O1xyXG4gIGhlaWdodDogNjB2aDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiKDAgMCAwIC8gMC4yKTtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICB3aWR0aDogMTAwdnc7XHJcbn1cclxuXHJcbi5waW4tc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnBpbi1ib3gge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMyNTIxNGY7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi54IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDdweDtcclxufVxyXG5cclxuXHJcbi5rZXlwYWQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgLy8gbWFyZ2luOiAwIDEwJTtcclxuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5rZXlzIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzI1MjE0ZjtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxuICBtYXJnaW46IDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxufVxyXG4ucm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmZlxyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMyNTIxNGY7XHJcbiAgLS1jb2xvcjogIzI1MjE0ZjtcclxuICAtLWNvbG9yLWFjdGl2YXRlZGVkOiNGRUUxNzggO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogOTAwICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 99710:
/*!**********************************************************************************************!*\
  !*** ./src/app/components/transaction-history/transaction-history.component.scss?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".overlay {\n  z-index: 999;\n  position: fixed;\n  /* Sit on top of the page content */\n  width: 100%;\n  /* Full width (cover the whole page) */\n  height: 100%;\n  /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.mas {\n  z-index: 1000;\n  position: fixed;\n  /* Sit on top of the page content */\n  width: 100vw;\n  /* Full width (cover the whole page) */\n  height: 100vh;\n  /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.tran {\n  background-color: #f8f8f8;\n  padding: 10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin: 5px 0;\n}\n\n.tran .icon {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.tran .icon .text {\n  padding: 0 10px;\n}\n\n.tran .icon .text .tit {\n  font-size: 13px;\n  font-weight: 500;\n  padding: 0 3px;\n}\n\n.tran .icon .text .mode {\n  font-size: 11px;\n  color: #8d8d88;\n  padding: 0 3px;\n}\n\n.tran .amount {\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.tran .red {\n  color: #d54b4b;\n}\n\n.tran .green {\n  color: #127e12;\n}\n\n.head {\n  background-color: #25214f;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n\n.bod {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-bottom: 60px;\n  padding-top: 20px;\n}\n\n.card {\n  background-color: #fff8f83c;\n  padding: 10px 20px;\n  font-size: 40px;\n  border-radius: 10px;\n}\n\n.date {\n  margin: 20px;\n}\n\ntable {\n  margin: 40px 0;\n  padding: 20px;\n  width: 95%;\n  margin: auto;\n}\n\nth,\ntd {\n  text-align: left;\n  padding-left: 20px;\n}\n\ntr {\n  border-bottom: 1px solid #a19b9b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zYWN0aW9uLWhpc3RvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUFpQixtQ0FBQTtFQUNqQixXQUFBO0VBQWEsc0NBQUE7RUFDYixZQUFBO0VBQWMsdUNBQUE7RUFDZCxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esb0NBQUE7QUFJRjs7QUFGQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQWlCLG1DQUFBO0VBQ2pCLFlBQUE7RUFBYyxzQ0FBQTtFQUNkLGFBQUE7RUFBZSx1Q0FBQTtFQUNmLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFRRjs7QUFOQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBU0Y7O0FBUkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBVUo7O0FBVEk7RUFDRSxlQUFBO0FBV047O0FBVE07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBV1I7O0FBVE07RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFXUjs7QUFQRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQVNKOztBQVBFO0VBQ0UsY0FBQTtBQVNKOztBQVBFO0VBQ0UsY0FBQTtBQVNKOztBQU5BO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBU0Y7O0FBUEE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFVRjs7QUFSQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFXRjs7QUFUQTtFQUNFLFlBQUE7QUFZRjs7QUFWQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFhRjs7QUFYQTs7RUFFRSxnQkFBQTtFQUNBLGtCQUFBO0FBY0Y7O0FBWkE7RUFDRSxnQ0FBQTtBQWVGIiwiZmlsZSI6InRyYW5zYWN0aW9uLWhpc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3ZlcmxheSB7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU2l0IG9uIHRvcCBvZiB0aGUgcGFnZSBjb250ZW50ICovXHJcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xyXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuLm1hcyB7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFNpdCBvbiB0b3Agb2YgdGhlIHBhZ2UgY29udGVudCAqL1xyXG4gIHdpZHRoOiAxMDB2dzsgLyogRnVsbCB3aWR0aCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXHJcbiAgaGVpZ2h0OiAxMDB2aDsgLyogRnVsbCBoZWlnaHQgKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxufVxyXG4udHJhbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDVweCAwO1xyXG4gIC5pY29uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC50ZXh0IHtcclxuICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG5cclxuICAgICAgLnRpdCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgcGFkZGluZzogMCAzcHg7XHJcbiAgICAgIH1cclxuICAgICAgLm1vZGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBjb2xvcjogcmdiKDE0MSwgMTQxLCAxMzYpO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgM3B4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5hbW91bnQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbiAgLnJlZCB7XHJcbiAgICBjb2xvcjogcmdiKDIxMywgNzUsIDc1KTtcclxuICB9XHJcbiAgLmdyZWVuIHtcclxuICAgIGNvbG9yOiByZ2IoMTgsIDEyNiwgMTgpO1xyXG4gIH1cclxufVxyXG4uaGVhZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjE0ZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5ib2Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcbi5jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOGY4M2M7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5kYXRlIHtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxudGFibGUge1xyXG4gIG1hcmdpbjogNDBweCAwO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxudGgsXHJcbnRkIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG50ciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxNjEsIDE1NSwgMTU1KTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 53792:
/*!************************************************************************************************!*\
  !*** ./src/app/core/templates/dashboard-template/dashboard-template.component.scss?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".my-custom-menu {\n  --width: 500px;\n}\n\nion-header ion-toolbar {\n  --background: #ffffff;\n  box-shadow: none !important;\n  height: 100%;\n}\n\nion-header ion-menu-button {\n  color: #374957;\n}\n\n.userImg {\n  border-radius: 50% !important;\n  overflow: hidden;\n  width: 50px !important;\n  height: 50px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC10ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFHRTtFQUVFLHFCQUFBO0VBRUEsMkJBQUE7RUFDQSxZQUFBO0FBRko7O0FBSUU7RUFDRSxjQUFBO0FBRko7O0FBTUE7RUFDRSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQUhGIiwiZmlsZSI6ImRhc2hib2FyZC10ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1jdXN0b20tbWVudSB7XHJcbiAgLS13aWR0aDogNTAwcHg7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXIge1xyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC8vIHNldCBiYWNrZ3JvdW5kIGNvbG9yXHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAvLyBzZXQgaWNvbi90ZXh0IGNvbG9yXHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIGlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogIzM3NDk1NztcclxuICB9XHJcbn1cclxuXHJcbi51c2VySW1nIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 88411:
/*!**************************************************************************!*\
  !*** ./src/app/core/templates/in-page/in-page.component.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-header ion-toolbar {\n  --background: #25214f;\n  box-shadow: none !important;\n  height: 100%;\n}\nion-header ion-menu-button {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFFRSxxQkFBQTtFQUVBLDJCQUFBO0VBQ0EsWUFBQTtBQUZKO0FBSUU7RUFDRSxZQUFBO0FBRkoiLCJmaWxlIjoiaW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC8vIHNldCBiYWNrZ3JvdW5kIGNvbG9yXHJcbiAgICAtLWJhY2tncm91bmQ6ICMyNTIxNGY7XHJcbiAgICAvLyBzZXQgaWNvbi90ZXh0IGNvbG9yXHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIGlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 18261:
/*!************************************************************************!*\
  !*** ./src/app/core/templates/signup/signup.component.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".btn {\n  --background: #25214f;\n  --color: #fff;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #25214f;\n}\n\n.btn2 {\n  --background: #fee178;\n  --color: #25214f;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #fee178;\n}\n\nion-button {\n  --border-radius: 15px;\n}\n\nion-content {\n  --padding-end: 20px;\n  --padding-start: 20px;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-content: space-between;\n}\n\n.img {\n  height: 290px;\n  width: 230px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.title {\n  color: #25214f;\n  font-weight: 800;\n}\n\n.central-image {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n}\n\n.sub-title {\n  color: #676767;\n}\n\nimg {\n  height: 291px;\n  width: 230px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6InNpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4ge1xyXG4gIC0tYmFja2dyb3VuZDogIzI1MjE0ZjtcclxuICAtLWNvbG9yOiAjZmZmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGhlaWdodDogMy41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzI1MjE0ZjtcclxufVxyXG5cclxuLmJ0bjIge1xyXG4gIC0tYmFja2dyb3VuZDogI2ZlZTE3ODtcclxuICAtLWNvbG9yOiAjMjUyMTRmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGhlaWdodDogMy41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2ZlZTE3ODtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1wYWRkaW5nLWVuZDogMjBweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmltZyB7XHJcbiAgaGVpZ2h0OiAyOTBweDtcclxuICB3aWR0aDogMjMwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGNvbG9yOiAjMjUyMTRmO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5jZW50cmFsLWltYWdlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uc3ViLXRpdGxlIHtcclxuICBjb2xvcjogIzY3Njc2NztcclxufVxyXG5cclxuaW1nIHtcclxuICBoZWlnaHQ6IDI5MXB4O1xyXG4gIHdpZHRoOiAyMzBweDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 11145:
/*!************************************************************************!*\
  !*** ./src/app/modules/account-info/account-info.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".icon-container {\n  border-radius: 10%;\n  background-color: #25214f;\n  padding: 10px;\n}\n\nion-button {\n  --background: #d9ac0b;\n  --color: #25214f;\n  --background-activated: #25214f;\n  --color-activated: #fff;\n  --background-hover: #25214f;\n  --color-hover: #fff;\n}\n\nion-toggle {\n  --height: 15px;\n  --background-checked: #25214f;\n}\n\n.inner-icon {\n  color: #d9ac0b;\n}\n\nspan {\n  font-family: Mulish !important;\n  display: flex !important;\n  align-self: center !important;\n}\n\nion-content {\n  font-family: Mulish !important;\n}\n\n.items {\n  padding-left: 20px;\n  font-size: 20px;\n  width: 100%;\n}\n\nion-popover {\n  --width: 22.5rem;\n}\n\n.userImg {\n  border-radius: 50% !important;\n  overflow: hidden;\n  width: 50px !important;\n  height: 50px !important;\n}\n\n.document {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  width: 95%;\n  padding: 20px;\n  margin: auto;\n  box-shadow: 0 10px 6px -6px #777;\n  border: 1px solid #c5c1c1;\n  align-items: center;\n  color: #25214f;\n  font-weight: 600;\n  margin-top: 30px;\n}\n\n.icn {\n  font-size: 25px;\n  color: #25214f;\n}\n\n.mod {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.doc {\n  background-color: white;\n  box-shadow: 0 10px 6px -6px #777;\n  width: 90vw;\n  max-width: 500px;\n  padding: 30px 10px;\n  padding-bottom: 50px;\n  position: relative;\n}\n\n.head {\n  font-size: 20px;\n  font-weight: 600;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQtaW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFFQTtFQUVFLGNBQUE7QUFBRjs7QUFHQTtFQUNFLDhCQUFBO0VBRUEsd0JBQUE7RUFDQSw2QkFBQTtBQURGOztBQUdBO0VBQ0UsOEJBQUE7QUFBRjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFGRjs7QUFLQTtFQUNFLGdCQUFBO0FBRkY7O0FBSUE7RUFDRSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQURGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFHQSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtBQUVGOztBQUFBO0VBQ0UsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQUdGOztBQURBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFJRiIsImZpbGUiOiJhY2NvdW50LWluZm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24tY29udGFpbmVyIHtcclxuICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjE0ZjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAtLWJhY2tncm91bmQ6ICNkOWFjMGI7XHJcbiAgLS1jb2xvcjogIzI1MjE0ZjtcclxuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjMjUyMTRmO1xyXG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjZmZmO1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzI1MjE0ZjtcclxuICAtLWNvbG9yLWhvdmVyOiAjZmZmO1xyXG59XHJcblxyXG5pb24tdG9nZ2xlIHtcclxuICAtLWhlaWdodDogMTVweDtcclxuICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzI1MjE0ZjtcclxufVxyXG5cclxuLmlubmVyLWljb24ge1xyXG4gIC8vIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogI2Q5YWMwYjtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgZm9udC1mYW1pbHk6IE11bGlzaCAhaW1wb3J0YW50O1xyXG4gIC8vIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgZm9udC1mYW1pbHk6IE11bGlzaCAhaW1wb3J0YW50O1xyXG4gIC8vIC0tcGFkZGluZy1lbmQ6IDIwcHg7XHJcbiAgLy8gLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xyXG59XHJcblxyXG4uaXRlbXMge1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi1wb3BvdmVyIHtcclxuICAtLXdpZHRoOiAyMi41cmVtO1xyXG59XHJcbi51c2VySW1nIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmRvY3VtZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggNnB4IC02cHggIzc3NztcclxuICAtbW96LWJveC1zaGFkb3c6IDAgMTBweCA2cHggLTZweCAjNzc3O1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCA2cHggLTZweCAjNzc3O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjNWMxYzE7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogIzI1MjE0ZjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuLmljbiB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGNvbG9yOiAjMjUyMTRmO1xyXG59XHJcbi5tb2Qge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcbi5kb2Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCA2cHggLTZweCAjNzc3O1xyXG4gIHdpZHRoOiA5MHZ3O1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgcGFkZGluZzogMzBweCAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uaGVhZCB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 65234:
/*!************************************************************************************************!*\
  !*** ./src/app/modules/account-info/change-password/change-password.component.scss?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-content {\n  font-family: Mulish !important;\n}\n\n.row {\n  display: flex;\n  flex-direction: column;\n  align-content: flex-start;\n  padding-bottom: 1rem;\n  border-radius: 5px;\n}\n\n.btn {\n  --background: #25214f;\n  --color: #fff;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #25214f;\n}\n\ninput {\n  height: 15px;\n  width: 100%;\n  border: 0.8000000119px solid #ced4da;\n  border-radius: 5px;\n  background-color: #d5d4d4;\n  padding: 0px 25px;\n}\n\n.active {\n  width: 100%;\n  --border-radius: none;\n  --background: #25214f;\n  --color: #fff;\n  --color-activated: #fff;\n  --background-activated: #d9ac0b;\n}\n\n.form-inline > * {\n  margin: 0 1.5rem 1.5rem 0;\n}\n\n.input {\n  height: 3.2rem;\n  background: #e8e8e8;\n  border: 1px solid #b6b6b6;\n  box-sizing: border-box;\n  border-radius: 8px;\n}\n\nlabel {\n  color: #676767 !important;\n  text-align: left;\n}\n\nion-button {\n  --border-radius: 15px;\n}\n\n.icon-container {\n  border-radius: 10%;\n  background-color: #25214f;\n  padding: 10px;\n}\n\nion-button {\n  --background: #d9ac0b;\n  --color: #25214f;\n  --background-activated: #25214f;\n  --color-activated: #fff;\n  --background-hover: #25214f;\n  --color-hover: #fff;\n}\n\nion-toggle {\n  --height: 15px;\n  --background-checked: #25214f;\n}\n\n.inner-icon {\n  color: #d9ac0b;\n}\n\nspan {\n  font-family: Mulish !important;\n  display: flex !important;\n  align-self: center !important;\n}\n\nion-content {\n  font-family: Mulish !important;\n}\n\n.items {\n  padding-left: 20px;\n  font-size: 20px;\n  width: 100%;\n}\n\nion-popover {\n  --width: 22.5rem;\n}\n\n.userImg {\n  border-radius: 50% !important;\n  overflow: hidden;\n  width: 50px !important;\n  height: 50px !important;\n}\n\n.btn2 {\n  --background: #d9ac0b;\n  --color: #25214f;\n  color: #25214f;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #d9ac0b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBR0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtBQURGOztBQUlBO0VBQ0UseUJBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UscUJBQUE7QUFERjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FBQUY7O0FBR0E7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtBQUFGOztBQUdBO0VBRUUsY0FBQTtBQURGOztBQUlBO0VBQ0UsOEJBQUE7RUFFQSx3QkFBQTtFQUNBLDZCQUFBO0FBRkY7O0FBSUE7RUFDRSw4QkFBQTtBQURGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUhGOztBQU1BO0VBQ0UsZ0JBQUE7QUFIRjs7QUFLQTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBRkY7O0FBSUE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBQURGIiwiZmlsZSI6ImNoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICBmb250LWZhbWlseTogTXVsaXNoICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gIC8vIGhlaWdodDogMS4ycmVtO1xyXG4gIC8vIHdpZHRoOiAxLjJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAtLWJhY2tncm91bmQ6ICMyNTIxNGY7XHJcbiAgLS1jb2xvcjogI2ZmZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBoZWlnaHQ6IDMuNXJlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMyNTIxNGY7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAwLjgwMDAwMDAxMTkyMDkyOXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNWQ0ZDQ7XHJcbiAgcGFkZGluZzogMHB4IDI1cHg7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogbm9uZTtcclxuICAtLWJhY2tncm91bmQ6ICMyNTIxNGY7XHJcbiAgLS1jb2xvcjogI2ZmZjtcclxuICAtLWNvbG9yLWFjdGl2YXRlZDogI2ZmZjtcclxuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZDlhYzBiO1xyXG59XHJcblxyXG4uZm9ybS1pbmxpbmUgPiAqIHtcclxuICBtYXJnaW46IDAgMS41cmVtIDEuNXJlbSAwO1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIGhlaWdodDogMy4ycmVtO1xyXG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2I2YjZiNjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGNvbG9yOiAjNjc2NzY3ICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcbi5pY29uLWNvbnRhaW5lciB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTIxNGY7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZDlhYzBiO1xyXG4gIC0tY29sb3I6ICMyNTIxNGY7XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzI1MjE0ZjtcclxuICAtLWNvbG9yLWFjdGl2YXRlZDogI2ZmZjtcclxuICAtLWJhY2tncm91bmQtaG92ZXI6ICMyNTIxNGY7XHJcbiAgLS1jb2xvci1ob3ZlcjogI2ZmZjtcclxufVxyXG5cclxuaW9uLXRvZ2dsZSB7XHJcbiAgLS1oZWlnaHQ6IDE1cHg7XHJcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICMyNTIxNGY7XHJcbn1cclxuXHJcbi5pbm5lci1pY29uIHtcclxuICAvLyBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICNkOWFjMGI7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gIGZvbnQtZmFtaWx5OiBNdWxpc2ggIWltcG9ydGFudDtcclxuICAvLyBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gIGZvbnQtZmFtaWx5OiBNdWxpc2ggIWltcG9ydGFudDtcclxuICAvLyAtLXBhZGRpbmctZW5kOiAyMHB4O1xyXG4gIC8vIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxufVxyXG5cclxuLml0ZW1zIHtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pb24tcG9wb3ZlciB7XHJcbiAgLS13aWR0aDogMjIuNXJlbTtcclxufVxyXG4udXNlckltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5idG4yIHtcclxuICAtLWJhY2tncm91bmQ6ICNkOWFjMGI7XHJcbiAgLS1jb2xvcjogIzI1MjE0ZjtcclxuICBjb2xvcjogIzI1MjE0ZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBoZWlnaHQ6IDMuNXJlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNkOWFjMGI7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 34684:
/*!****************************************************************************!*\
  !*** ./src/app/modules/account-info/limit/limit.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-content {\n  font-family: Mulish !important;\n}\n\n.row {\n  display: flex;\n  flex-direction: column;\n  align-content: flex-start;\n  padding-bottom: 1rem;\n  border-radius: 5px;\n}\n\n.btn {\n  --background: #25214f;\n  --color: #fff;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #25214f;\n}\n\n.btn2 {\n  --background: #d9ac0b;\n  --color: #25214f;\n  color: #25214f;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #d9ac0b;\n}\n\ninput {\n  height: 15px;\n  width: 100%;\n  border: 0.8000000119px solid #ced4da;\n  border-radius: 5px;\n  background-color: #d5d4d4;\n  padding: 0px 25px;\n}\n\n.active {\n  width: 100%;\n  --border-radius: none;\n  --background: #25214f;\n  --color: #fff;\n  --color-activated: #fff;\n  --background-activated: #d9ac0b;\n}\n\n.form-inline > * {\n  margin: 0 1.5rem 1.5rem 0;\n}\n\n.input {\n  height: 3.2rem;\n  background: #e8e8e8;\n  border: 1px solid #b6b6b6;\n  box-sizing: border-box;\n  border-radius: 8px;\n}\n\nlabel {\n  color: #676767 !important;\n  text-align: left;\n}\n\nion-button {\n  --border-radius: 15px;\n}\n\n.icon-container {\n  border-radius: 10%;\n  background-color: #25214f;\n  padding: 10px;\n}\n\nion-button {\n  --background: #d9ac0b;\n  --color: #25214f;\n  --background-activated: #25214f;\n  --color-activated: #fff;\n  --background-hover: #25214f;\n  --color-hover: #fff;\n}\n\nion-toggle {\n  --height: 15px;\n  --background-checked: #25214f;\n}\n\n.inner-icon {\n  color: #d9ac0b;\n}\n\nspan {\n  font-family: Mulish !important;\n  display: flex !important;\n  align-self: center !important;\n}\n\nion-content {\n  font-family: Mulish !important;\n}\n\n.items {\n  padding-left: 20px;\n  font-size: 20px;\n  width: 100%;\n}\n\nion-popover {\n  --width: 22.5rem;\n}\n\n.userImg {\n  border-radius: 50% !important;\n  overflow: hidden;\n  width: 50px !important;\n  height: 50px !important;\n}\n\n.name,\n.tit {\n  color: black;\n}\n\n.tit {\n  margin-left: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpbWl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFHQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FBREY7O0FBR0E7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBQUFGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FBRUY7O0FBQ0E7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtBQUVGOztBQUNBO0VBRUUsY0FBQTtBQUNGOztBQUVBO0VBQ0UsOEJBQUE7RUFFQSx3QkFBQTtFQUNBLDZCQUFBO0FBQUY7O0FBRUE7RUFDRSw4QkFBQTtBQUNGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7QUFERjs7QUFHQTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBQUY7O0FBRUE7O0VBRUUsWUFBQTtBQUNGOztBQUNBO0VBQ0UsaUJBQUE7QUFFRiIsImZpbGUiOiJsaW1pdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICBmb250LWZhbWlseTogTXVsaXNoICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gIC8vIGhlaWdodDogMS4ycmVtO1xyXG4gIC8vIHdpZHRoOiAxLjJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAtLWJhY2tncm91bmQ6ICMyNTIxNGY7XHJcbiAgLS1jb2xvcjogI2ZmZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBoZWlnaHQ6IDMuNXJlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMyNTIxNGY7XHJcbn1cclxuLmJ0bjIge1xyXG4gIC0tYmFja2dyb3VuZDogI2Q5YWMwYjtcclxuICAtLWNvbG9yOiAjMjUyMTRmO1xyXG4gIGNvbG9yOiAjMjUyMTRmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGhlaWdodDogMy41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2Q5YWMwYjtcclxufVxyXG5pbnB1dCB7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogMC44MDAwMDAwMTE5MjA5MjlweCBzb2xpZCAjY2VkNGRhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVkNGQ0O1xyXG4gIHBhZGRpbmc6IDBweCAyNXB4O1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICAtLWJvcmRlci1yYWRpdXM6IG5vbmU7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMjUyMTRmO1xyXG4gIC0tY29sb3I6ICNmZmY7XHJcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNmZmY7XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2Q5YWMwYjtcclxufVxyXG5cclxuLmZvcm0taW5saW5lID4gKiB7XHJcbiAgbWFyZ2luOiAwIDEuNXJlbSAxLjVyZW0gMDtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICBoZWlnaHQ6IDMuMnJlbTtcclxuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiNmI2YjY7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBjb2xvcjogIzY3Njc2NyAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG4uaWNvbi1jb250YWluZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyMTRmO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIC0tYmFja2dyb3VuZDogI2Q5YWMwYjtcclxuICAtLWNvbG9yOiAjMjUyMTRmO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMyNTIxNGY7XHJcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNmZmY7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjMjUyMTRmO1xyXG4gIC0tY29sb3ItaG92ZXI6ICNmZmY7XHJcbn1cclxuXHJcbmlvbi10b2dnbGUge1xyXG4gIC0taGVpZ2h0OiAxNXB4O1xyXG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjMjUyMTRmO1xyXG59XHJcblxyXG4uaW5uZXItaWNvbiB7XHJcbiAgLy8gZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjZDlhYzBiO1xyXG59XHJcblxyXG5zcGFuIHtcclxuICBmb250LWZhbWlseTogTXVsaXNoICFpbXBvcnRhbnQ7XHJcbiAgLy8gZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICBmb250LWZhbWlseTogTXVsaXNoICFpbXBvcnRhbnQ7XHJcbiAgLy8gLS1wYWRkaW5nLWVuZDogMjBweDtcclxuICAvLyAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5pdGVtcyB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW9uLXBvcG92ZXIge1xyXG4gIC0td2lkdGg6IDIyLjVyZW07XHJcbn1cclxuLnVzZXJJbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxufVxyXG4ubmFtZSxcclxuLnRpdCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi50aXQge1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 45303:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/account-info/request-card/request-card.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-content {\n  font-family: Mulish !important;\n}\n\n.row {\n  display: flex;\n  flex-direction: column;\n  align-content: flex-start;\n  padding-bottom: 1rem;\n  border-radius: 5px;\n}\n\n.btn {\n  --background: #25214f;\n  --color: #fff;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #25214f;\n}\n\n.btn2 {\n  --background: #d9ac0b;\n  --color: #25214f;\n  color: #25214f;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #d9ac0b;\n}\n\ninput {\n  height: 15px;\n  width: 100%;\n  border: 0.8000000119px solid #ced4da;\n  border-radius: 5px;\n  background-color: #d5d4d4;\n  padding: 0px 25px;\n}\n\n.active {\n  width: 100%;\n  --border-radius: none;\n  --background: #25214f;\n  --color: #fff;\n  --color-activated: #fff;\n  --background-activated: #d9ac0b;\n}\n\n.form-inline > * {\n  margin: 0 1.5rem 1.5rem 0;\n}\n\n.input {\n  height: 3.2rem;\n  background: #e8e8e8;\n  border: 1px solid #b6b6b6;\n  box-sizing: border-box;\n  border-radius: 8px;\n}\n\nlabel {\n  color: #676767 !important;\n  text-align: left;\n}\n\nion-button {\n  --border-radius: 15px;\n}\n\n.icon-container {\n  border-radius: 10%;\n  background-color: #25214f;\n  padding: 10px;\n}\n\nion-button {\n  --background: #d9ac0b;\n  --color: #25214f;\n  --background-activated: #25214f;\n  --color-activated: #fff;\n  --background-hover: #25214f;\n  --color-hover: #fff;\n}\n\nion-toggle {\n  --height: 15px;\n  --background-checked: #25214f;\n}\n\n.inner-icon {\n  color: #d9ac0b;\n}\n\nspan {\n  font-family: Mulish !important;\n  display: flex !important;\n  align-self: center !important;\n}\n\nion-content {\n  font-family: Mulish !important;\n}\n\n.items {\n  padding-left: 20px;\n  font-size: 20px;\n  width: 100%;\n}\n\nion-popover {\n  --width: 22.5rem;\n}\n\n.userImg {\n  border-radius: 50% !important;\n  overflow: hidden;\n  width: 50px !important;\n  height: 50px !important;\n}\n\ntable {\n  border-collapse: collapse;\n  width: 100%;\n}\n\ntd {\n  padding: 10px 5px;\n  text-align: left;\n  font-size: 13px;\n  padding-left: 20px;\n}\n\nth {\n  font-size: 13px;\n  text-align: left;\n  padding: 10px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3QtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBR0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBQURGOztBQUdBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLHFCQUFBO0FBQUY7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFFQTtFQUVFLGNBQUE7QUFBRjs7QUFHQTtFQUNFLDhCQUFBO0VBRUEsd0JBQUE7RUFDQSw2QkFBQTtBQURGOztBQUdBO0VBQ0UsOEJBQUE7QUFBRjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFGRjs7QUFLQTtFQUNFLGdCQUFBO0FBRkY7O0FBSUE7RUFDRSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQURGOztBQUdBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNGIiwiZmlsZSI6InJlcXVlc3QtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICBmb250LWZhbWlseTogTXVsaXNoICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gIC8vIGhlaWdodDogMS4ycmVtO1xyXG4gIC8vIHdpZHRoOiAxLjJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAtLWJhY2tncm91bmQ6ICMyNTIxNGY7XHJcbiAgLS1jb2xvcjogI2ZmZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBoZWlnaHQ6IDMuNXJlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMyNTIxNGY7XHJcbn1cclxuLmJ0bjIge1xyXG4gIC0tYmFja2dyb3VuZDogI2Q5YWMwYjtcclxuICAtLWNvbG9yOiAjMjUyMTRmO1xyXG4gIGNvbG9yOiAjMjUyMTRmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGhlaWdodDogMy41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2Q5YWMwYjtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGhlaWdodDogMTVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDAuODAwMDAwMDExOTIwOTI5cHggc29saWQgI2NlZDRkYTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q1ZDRkNDtcclxuICBwYWRkaW5nOiAwcHggMjVweDtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiBub25lO1xyXG4gIC0tYmFja2dyb3VuZDogIzI1MjE0ZjtcclxuICAtLWNvbG9yOiAjZmZmO1xyXG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjZmZmO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNkOWFjMGI7XHJcbn1cclxuXHJcbi5mb3JtLWlubGluZSA+ICoge1xyXG4gIG1hcmdpbjogMCAxLjVyZW0gMS41cmVtIDA7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgaGVpZ2h0OiAzLjJyZW07XHJcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYjZiNmI2O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgY29sb3I6ICM2NzY3NjcgIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuLmljb24tY29udGFpbmVyIHtcclxuICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjE0ZjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAtLWJhY2tncm91bmQ6ICNkOWFjMGI7XHJcbiAgLS1jb2xvcjogIzI1MjE0ZjtcclxuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjMjUyMTRmO1xyXG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjZmZmO1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzI1MjE0ZjtcclxuICAtLWNvbG9yLWhvdmVyOiAjZmZmO1xyXG59XHJcblxyXG5pb24tdG9nZ2xlIHtcclxuICAtLWhlaWdodDogMTVweDtcclxuICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzI1MjE0ZjtcclxufVxyXG5cclxuLmlubmVyLWljb24ge1xyXG4gIC8vIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogI2Q5YWMwYjtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgZm9udC1mYW1pbHk6IE11bGlzaCAhaW1wb3J0YW50O1xyXG4gIC8vIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgZm9udC1mYW1pbHk6IE11bGlzaCAhaW1wb3J0YW50O1xyXG4gIC8vIC0tcGFkZGluZy1lbmQ6IDIwcHg7XHJcbiAgLy8gLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xyXG59XHJcblxyXG4uaXRlbXMge1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi1wb3BvdmVyIHtcclxuICAtLXdpZHRoOiAyMi41cmVtO1xyXG59XHJcbi51c2VySW1nIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxudGFibGUge1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRkIHtcclxuICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxudGgge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDEwcHggNXB4O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 94411:
/*!************************************************************************************!*\
  !*** ./src/app/modules/account-info/reset-pin/reset-pin.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-content {\n  font-family: Mulish !important;\n}\n\n.row {\n  display: flex;\n  flex-direction: column;\n  align-content: flex-start;\n  padding-bottom: 1rem;\n  border-radius: 5px;\n}\n\n.btn {\n  --background: #25214f;\n  --color: #fff;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #25214f;\n}\n\n.btn2 {\n  --background: #d9ac0b;\n  --color: #25214f;\n  color: #25214f;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #d9ac0b;\n}\n\ninput {\n  height: 15px;\n  width: 100%;\n  border: 0.8000000119px solid #ced4da;\n  border-radius: 5px;\n  background-color: #d5d4d4;\n  padding: 0px 25px;\n}\n\n.active {\n  width: 100%;\n  --border-radius: none;\n  --background: #25214f;\n  --color: #fff;\n  --color-activated: #fff;\n  --background-activated: #d9ac0b;\n}\n\n.form-inline > * {\n  margin: 0 1.5rem 1.5rem 0;\n}\n\n.input {\n  height: 3.2rem;\n  background: #e8e8e8;\n  border: 1px solid #b6b6b6;\n  box-sizing: border-box;\n  border-radius: 8px;\n}\n\nlabel {\n  color: #676767 !important;\n  text-align: left;\n}\n\nion-button {\n  --border-radius: 15px;\n}\n\n.icon-container {\n  border-radius: 10%;\n  background-color: #25214f;\n  padding: 10px;\n}\n\nion-button {\n  --background: #d9ac0b;\n  --color: #25214f;\n  --background-activated: #25214f;\n  --color-activated: #fff;\n  --background-hover: #25214f;\n  --color-hover: #fff;\n}\n\nion-toggle {\n  --height: 15px;\n  --background-checked: #25214f;\n}\n\n.inner-icon {\n  color: #d9ac0b;\n}\n\nspan {\n  font-family: Mulish !important;\n  display: flex !important;\n  align-self: center !important;\n}\n\nion-content {\n  font-family: Mulish !important;\n}\n\n.items {\n  padding-left: 20px;\n  font-size: 20px;\n  width: 100%;\n}\n\nion-popover {\n  --width: 22.5rem;\n}\n\n.userImg {\n  border-radius: 50% !important;\n  overflow: hidden;\n  width: 50px !important;\n  height: 50px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0LXBpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBR0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBQURGOztBQUdBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLHFCQUFBO0FBQUY7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFFQTtFQUVFLGNBQUE7QUFBRjs7QUFHQTtFQUNFLDhCQUFBO0VBRUEsd0JBQUE7RUFDQSw2QkFBQTtBQURGOztBQUdBO0VBQ0UsOEJBQUE7QUFBRjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFGRjs7QUFLQTtFQUNFLGdCQUFBO0FBRkY7O0FBSUE7RUFDRSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQURGIiwiZmlsZSI6InJlc2V0LXBpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICBmb250LWZhbWlseTogTXVsaXNoICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gIC8vIGhlaWdodDogMS4ycmVtO1xyXG4gIC8vIHdpZHRoOiAxLjJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAtLWJhY2tncm91bmQ6ICMyNTIxNGY7XHJcbiAgLS1jb2xvcjogI2ZmZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBoZWlnaHQ6IDMuNXJlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMyNTIxNGY7XHJcbn1cclxuLmJ0bjIge1xyXG4gIC0tYmFja2dyb3VuZDogI2Q5YWMwYjtcclxuICAtLWNvbG9yOiAjMjUyMTRmO1xyXG4gIGNvbG9yOiAjMjUyMTRmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGhlaWdodDogMy41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2Q5YWMwYjtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGhlaWdodDogMTVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDAuODAwMDAwMDExOTIwOTI5cHggc29saWQgI2NlZDRkYTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q1ZDRkNDtcclxuICBwYWRkaW5nOiAwcHggMjVweDtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiBub25lO1xyXG4gIC0tYmFja2dyb3VuZDogIzI1MjE0ZjtcclxuICAtLWNvbG9yOiAjZmZmO1xyXG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjZmZmO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNkOWFjMGI7XHJcbn1cclxuXHJcbi5mb3JtLWlubGluZSA+ICoge1xyXG4gIG1hcmdpbjogMCAxLjVyZW0gMS41cmVtIDA7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgaGVpZ2h0OiAzLjJyZW07XHJcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYjZiNmI2O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgY29sb3I6ICM2NzY3NjcgIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuLmljb24tY29udGFpbmVyIHtcclxuICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjE0ZjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAtLWJhY2tncm91bmQ6ICNkOWFjMGI7XHJcbiAgLS1jb2xvcjogIzI1MjE0ZjtcclxuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjMjUyMTRmO1xyXG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjZmZmO1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzI1MjE0ZjtcclxuICAtLWNvbG9yLWhvdmVyOiAjZmZmO1xyXG59XHJcblxyXG5pb24tdG9nZ2xlIHtcclxuICAtLWhlaWdodDogMTVweDtcclxuICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzI1MjE0ZjtcclxufVxyXG5cclxuLmlubmVyLWljb24ge1xyXG4gIC8vIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogI2Q5YWMwYjtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgZm9udC1mYW1pbHk6IE11bGlzaCAhaW1wb3J0YW50O1xyXG4gIC8vIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgZm9udC1mYW1pbHk6IE11bGlzaCAhaW1wb3J0YW50O1xyXG4gIC8vIC0tcGFkZGluZy1lbmQ6IDIwcHg7XHJcbiAgLy8gLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xyXG59XHJcblxyXG4uaXRlbXMge1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi1wb3BvdmVyIHtcclxuICAtLXdpZHRoOiAyMi41cmVtO1xyXG59XHJcbi51c2VySW1nIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 39802:
/*!*******************************************************************!*\
  !*** ./src/app/modules/airtime/airtime.component.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".inner-icon {\n  color: #d9ac0b;\n}\n\n.icon-container {\n  border-radius: 10%;\n  background-color: #25214f;\n  padding: 5px;\n}\n\n.header {\n  color: #25214f;\n  font-size: 16px;\n  font-weight: 800;\n}\n\nsection {\n  text-align: center;\n}\n\n.phoneField {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.dialField {\n  width: 30% !important;\n}\n\n.numField {\n  width: 65% !important;\n}\n\n.row {\n  display: flex;\n  flex-direction: column;\n  align-content: flex-start;\n  padding-bottom: 1rem;\n  border-radius: 5px;\n}\n\ninput {\n  height: 15px;\n  width: 100%;\n  border: 0.8000000119px solid #ced4da;\n  border-radius: 5px;\n  background-color: #d5d4d4;\n  padding: 0px 25px;\n}\n\nion-content {\n  font-family: Mulish !important;\n}\n\n.form-inline [fullWidth] {\n  flex: 1;\n}\n\n.form-inline > * {\n  margin: 0 1.5rem 1.5rem 0;\n}\n\n.row-one {\n  border: 0.8000000119px solid #ced4da;\n  border-radius: 5px;\n  margin-top: 50px;\n  padding: 10px;\n}\n\nion-button {\n  --background: #d9ac0b;\n  --color: #fff !important;\n  color: #25214f;\n}\n\n.active {\n  width: 100%;\n  --border-radius: none;\n  --background: #25214f;\n  --color: white;\n  --color-activated: white;\n  color: white;\n}\n\n.input {\n  height: 3.2rem;\n  background: #e8e8e8;\n  border: 1px solid #b6b6b6;\n  box-sizing: border-box;\n  border-radius: 8px;\n}\n\nlabel {\n  color: #676767 !important;\n  text-align: left;\n}\n\n.title {\n  color: #25214f;\n  font-weight: 800;\n}\n\n.central-image {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  margin-top: 30px;\n}\n\n.sub-title {\n  color: #676767;\n  text-align: center;\n}\n\n.link {\n  color: #25214f;\n  font-weight: 500;\n  text-decoration: none;\n}\n\n.img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.btn2 {\n  --background: #d9ac0b;\n  --color: #25214f;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #d9ac0b;\n}\n\nion-button {\n  --border-radius: 15px;\n}\n\n.content {\n  font-family: Mulish !important;\n  display: flex;\n  flex-direction: column;\n  align-content: space-between;\n}\n\n.img {\n  height: 290px;\n  width: 230px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.title {\n  color: #25214f;\n  font-weight: 800;\n}\n\n.central-image {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n}\n\n.sub-title {\n  color: #676767;\n}\n\nimg {\n  height: 291px;\n  width: 230px;\n}\n\n.tit {\n  font-family: Mulish !important;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 24px;\n  line-height: 30px;\n  text-align: center;\n  color: #25214f;\n}\n\n.subTit {\n  font-family: Mulish !important;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 15px;\n  line-height: 23px;\n  text-align: center;\n  color: #676767;\n  width: 300px;\n  margin-top: 20px;\n  margin-bottom: 40px;\n  margin: auto;\n}\n\nion-tab-bar {\n  --color: #d9ac0b;\n  --background: #25214f;\n}\n\n.icons {\n  height: 40px;\n  width: 40px;\n}\n\n.btn {\n  --background: #25214f;\n  --color: #fff;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #25214f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpcnRpbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQUY7O0FBR0E7RUFDRSxxQkFBQTtBQUFGOztBQUdBO0VBQ0UscUJBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFHQSxrQkFBQTtBQUZGOztBQUtBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQUZGOztBQVdBO0VBQ0UsOEJBQUE7QUFSRjs7QUFXQTtFQUNFLE9BQUE7QUFSRjs7QUFXQTtFQUNFLHlCQUFBO0FBUkY7O0FBV0E7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBUkY7O0FBWUE7RUFDRSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtBQVRGOztBQVlBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0FBVEY7O0FBWUE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFURjs7QUFZQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7QUFURjs7QUFXQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQVJGOztBQVdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQVJGOztBQVdBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBUkY7O0FBV0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQVJGOztBQVdBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFSRjs7QUFVQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUFQRjs7QUFVQTtFQUNFLHFCQUFBO0FBUEY7O0FBVUE7RUFDRSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBUEY7O0FBVUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFQRjs7QUFVQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBUEY7O0FBVUE7RUFDRSxjQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQVBGOztBQVNBO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBTkY7O0FBUUE7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFMRjs7QUFRQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7QUFMRjs7QUFRQTtFQUVFLFlBQUE7RUFDQSxXQUFBO0FBTkY7O0FBUUE7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUFMRiIsImZpbGUiOiJhaXJ0aW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlubmVyLWljb24ge1xyXG4gIC8vIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogI2Q5YWMwYjtcclxufVxyXG5cclxuLmljb24tY29udGFpbmVyIHtcclxuICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjE0ZjtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGNvbG9yOiAjMjUyMTRmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG5zZWN0aW9uIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5waG9uZUZpZWxkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uZGlhbEZpZWxkIHtcclxuICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5udW1GaWVsZCB7XHJcbiAgd2lkdGg6IDY1JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICAvLyBoZWlnaHQ6IDEuMnJlbTtcclxuICAvLyB3aWR0aDogMS4ycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGhlaWdodDogMTVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDAuODAwMDAwMDExOTIwOTI5cHggc29saWQgI2NlZDRkYTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q1ZDRkNDtcclxuICBwYWRkaW5nOiAwcHggMjVweDtcclxufVxyXG5cclxuLy8gbGFiZWwge1xyXG4vLyAgIGNvbG9yOiAjMDAwO1xyXG4vLyAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbi8vICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuLy8gfVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIGZvbnQtZmFtaWx5OiBNdWxpc2ggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvcm0taW5saW5lIFtmdWxsV2lkdGhdIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4uZm9ybS1pbmxpbmUgPiAqIHtcclxuICBtYXJnaW46IDAgMS41cmVtIDEuNXJlbSAwO1xyXG59XHJcblxyXG4ucm93LW9uZSB7XHJcbiAgYm9yZGVyOiAwLjgwMDAwMDAxMTkyMDkyOXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVkNGQ0O1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAtLWJhY2tncm91bmQ6ICNkOWFjMGI7XHJcbiAgLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjMjUyMTRmO1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICAtLWJvcmRlci1yYWRpdXM6IG5vbmU7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMjUyMTRmO1xyXG4gIC0tY29sb3I6IHdoaXRlO1xyXG4gIC0tY29sb3ItYWN0aXZhdGVkOiB3aGl0ZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgaGVpZ2h0OiAzLjJyZW07XHJcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYjZiNmI2O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgY29sb3I6ICM2NzY3NjcgIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi50aXRsZSB7XHJcbiAgY29sb3I6ICMyNTIxNGY7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLmNlbnRyYWwtaW1hZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLnN1Yi10aXRsZSB7XHJcbiAgY29sb3I6ICM2NzY3Njc7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubGluayB7XHJcbiAgY29sb3I6ICMyNTIxNGY7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5pbWcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4uYnRuMiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZDlhYzBiO1xyXG4gIC0tY29sb3I6ICMyNTIxNGY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgaGVpZ2h0OiAzLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZDlhYzBiO1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBmb250LWZhbWlseTogTXVsaXNoICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5pbWcge1xyXG4gIGhlaWdodDogMjkwcHg7XHJcbiAgd2lkdGg6IDIzMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBjb2xvcjogIzI1MjE0ZjtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4uY2VudHJhbC1pbWFnZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnN1Yi10aXRsZSB7XHJcbiAgY29sb3I6ICM2NzY3Njc7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgaGVpZ2h0OiAyOTFweDtcclxuICB3aWR0aDogMjMwcHg7XHJcbn1cclxuLnRpdCB7XHJcbiAgZm9udC1mYW1pbHk6IE11bGlzaCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICMyNTIxNGY7XHJcbn1cclxuLnN1YlRpdCB7XHJcbiAgZm9udC1mYW1pbHk6IE11bGlzaCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBsaW5lLWhlaWdodDogMjNweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICM2NzY3Njc7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbmlvbi10YWItYmFyIHtcclxuICAtLWNvbG9yOiAjZDlhYzBiO1xyXG4gIC0tYmFja2dyb3VuZDogIzI1MjE0ZjtcclxufVxyXG5cclxuLmljb25zIHtcclxuICAvLyBmb250LXNpemU6IDMwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG59XHJcbi5idG4ge1xyXG4gIC0tYmFja2dyb3VuZDogIzI1MjE0ZjtcclxuICAtLWNvbG9yOiAjZmZmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGhlaWdodDogMy41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzI1MjE0ZjtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 26994:
/*!****************************************************************************!*\
  !*** ./src/app/modules/bills-payments/bills-payments.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".top-menu {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-content: space-between;\n}\n\n.userImg {\n  width: 50px;\n  height: 50px;\n}\n\n.info {\n  background-color: #25214f;\n  height: 2rem;\n  width: 100%;\n  margin: 1rem;\n}\n\n.header {\n  color: #25214f;\n  font-size: 16px;\n  font-weight: 800;\n}\n\n.card-items {\n  padding: 10px;\n}\n\nion-content {\n  font-family: Mulish !important;\n}\n\n.icons {\n  height: 60px;\n  color: #25214f !important;\n  margin-bottom: 3px !important;\n}\n\n.icons-bg {\n  width: 43%;\n  height: 100px;\n  border-radius: 5px;\n  background-color: white;\n  padding: 10px;\n  margin: 3%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between !important;\n  text-align: center;\n  align-items: center !important;\n  cursor: pointer;\n  color: #25214f;\n  border: 1px solid #dde3f7;\n}\n\n.name {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  height: 100%;\n  text-align: left;\n  color: #25214f;\n  font-weight: 700px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbGxzLXBheW1lbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsOEJBQUE7QUFDRjs7QUFFQTtFQUVFLFlBQUE7RUFFQSx5QkFBQTtFQUNBLDZCQUFBO0FBREY7O0FBSUE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFERjs7QUFHQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQUYiLCJmaWxlIjoiYmlsbHMtcGF5bWVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcC1tZW51IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi51c2VySW1nIHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5pbmZvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyMTRmO1xyXG4gIGhlaWdodDogMnJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDFyZW07XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGNvbG9yOiAjMjUyMTRmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4uY2FyZC1pdGVtcyB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIGZvbnQtZmFtaWx5OiBNdWxpc2ggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmljb25zIHtcclxuICAvLyBmb250LXNpemU6IDMwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIC8vIHdpZHRoOiA0MHB4O1xyXG4gIGNvbG9yOiAjMjUyMTRmICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogM3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pY29ucy1iZyB7XHJcbiAgd2lkdGg6IDQzJTtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbjogMyU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAjMjUyMTRmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGUzZjc7XHJcbn1cclxuLm5hbWUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6ICMyNTIxNGY7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMHB4O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 56765:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/bills-payments/cabletv/cabletv.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".btn {\n  --background: #25214f;\n  --color: #fff;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #25214f;\n}\n\nion-toggle {\n  --height: 15px;\n  --background-checked: #25214f;\n}\n\n.inner-icon {\n  color: #fee178;\n}\n\n.icon-container {\n  border-radius: 10%;\n  background-color: #25214f;\n  padding: 5px;\n}\n\n.row-one {\n  border: 0.8000000119px solid #ced4da;\n  border-radius: 5px;\n  margin-top: 50px;\n  padding: 10px;\n}\n\n.header {\n  color: #25214f;\n  font-size: 16px;\n  font-weight: 800;\n}\n\nsection {\n  text-align: center;\n}\n\n.phoneField {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.dialField {\n  width: 30% !important;\n}\n\n.numField {\n  width: 65% !important;\n}\n\n.row {\n  display: flex;\n  flex-direction: column;\n  align-content: flex-start;\n  padding-bottom: 1rem;\n  border-radius: 5px;\n}\n\ninput {\n  height: 15px;\n  width: 100%;\n  border: 0.8000000119px solid #ced4da;\n  border-radius: 5px;\n  background-color: #d5d4d4;\n  padding: 0px 25px;\n}\n\nion-content {\n  font-family: Mulish !important;\n  --padding-end: 20px;\n  --padding-start: 20px;\n}\n\n.form-inline [fullWidth] {\n  flex: 1;\n}\n\nion-button {\n  --background: #fee178;\n  --color: #fff !important;\n}\n\n.active {\n  width: 100%;\n  --border-radius: none;\n  --background: #25214f;\n  --color: #fff;\n  --color-activated: #fff;\n  --background-activated: #fee178;\n}\n\n.form-inline > * {\n  margin: 0 1.5rem 1.5rem 0;\n}\n\n.input {\n  height: 3.2rem;\n  background: #e8e8e8;\n  border: 1px solid #b6b6b6;\n  box-sizing: border-box;\n  border-radius: 8px;\n}\n\nlabel {\n  color: #676767 !important;\n  text-align: left;\n}\n\n.title {\n  color: #25214f;\n  font-weight: 800;\n}\n\n.central-image {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  margin-top: 30px;\n}\n\n.sub-title {\n  color: #676767;\n  text-align: center;\n}\n\n.link {\n  color: #25214f;\n  font-weight: 500;\n  text-decoration: none;\n}\n\n.img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.btn2 {\n  --background: #fee178;\n  --color: #25214f;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #fee178;\n}\n\n.content {\n  font-family: Mulish !important;\n  display: flex;\n  flex-direction: column;\n  align-content: space-between;\n}\n\n.img {\n  height: 290px;\n  width: 230px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.title {\n  color: #25214f;\n  font-weight: 800;\n}\n\n.central-image {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n}\n\n.sub-title {\n  color: #676767;\n}\n\nimg {\n  height: 291px;\n  width: 230px;\n}\n\n.tit {\n  font-family: Mulish !important;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 24px;\n  line-height: 30px;\n  text-align: center;\n  color: #25214f;\n}\n\n.subTit {\n  font-family: Mulish !important;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 15px;\n  line-height: 23px;\n  text-align: center;\n  color: #676767;\n  width: 300px;\n  margin-top: 20px;\n  margin-bottom: 40px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhYmxldHYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtBQUNGOztBQUVBO0VBRUUsY0FBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFBRjs7QUFJQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQURGOztBQUlBO0VBQ0UscUJBQUE7QUFERjs7QUFJQTtFQUNFLHFCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBR0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFIRjs7QUFZQTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQVRGOztBQVlBO0VBQ0UsT0FBQTtBQVRGOztBQVlBO0VBQ0UscUJBQUE7RUFDQSx3QkFBQTtBQVRGOztBQVlBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtBQVRGOztBQVlBO0VBQ0UseUJBQUE7QUFURjs7QUFZQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQVRGOztBQVlBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtBQVRGOztBQVdBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBUkY7O0FBV0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBUkY7O0FBV0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFSRjs7QUFXQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBUkY7O0FBV0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVJGOztBQVVBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBQVBGOztBQWNBO0VBQ0UsOEJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQVhGOztBQWNBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVhGOztBQWNBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBWEY7O0FBY0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQVhGOztBQWNBO0VBQ0UsY0FBQTtBQVhGOztBQWNBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFYRjs7QUFhQTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQVZGOztBQVlBO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBVEYiLCJmaWxlIjoiY2FibGV0di5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4ge1xyXG4gIC0tYmFja2dyb3VuZDogIzI1MjE0ZjtcclxuICAtLWNvbG9yOiAjZmZmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGhlaWdodDogMy41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzI1MjE0ZjtcclxufVxyXG5cclxuaW9uLXRvZ2dsZSB7XHJcbiAgLS1oZWlnaHQ6IDE1cHg7XHJcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICMyNTIxNGY7XHJcbn1cclxuXHJcbi5pbm5lci1pY29uIHtcclxuICAvLyBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICNmZWUxNzg7XHJcbn1cclxuXHJcbi5pY29uLWNvbnRhaW5lciB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTIxNGY7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4ucm93LW9uZSB7XHJcbiAgYm9yZGVyOiAwLjgwMDAwMDAxMTkyMDkyOXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVkNGQ0O1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICBjb2xvcjogIzI1MjE0ZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucGhvbmVGaWVsZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmRpYWxGaWVsZCB7XHJcbiAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubnVtRmllbGQge1xyXG4gIHdpZHRoOiA2NSUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgLy8gaGVpZ2h0OiAxLjJyZW07XHJcbiAgLy8gd2lkdGg6IDEuMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAwLjgwMDAwMDAxMTkyMDkyOXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNWQ0ZDQ7XHJcbiAgcGFkZGluZzogMHB4IDI1cHg7XHJcbn1cclxuXHJcbi8vIGxhYmVsIHtcclxuLy8gICBjb2xvcjogIzAwMDtcclxuLy8gICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4vLyAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbi8vIH1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICBmb250LWZhbWlseTogTXVsaXNoICFpbXBvcnRhbnQ7XHJcbiAgLS1wYWRkaW5nLWVuZDogMjBweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWlubGluZSBbZnVsbFdpZHRoXSB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmVlMTc4O1xyXG4gIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiBub25lO1xyXG4gIC0tYmFja2dyb3VuZDogIzI1MjE0ZjtcclxuICAtLWNvbG9yOiAjZmZmO1xyXG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjZmZmO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmZWUxNzg7XHJcbn1cclxuXHJcbi5mb3JtLWlubGluZSA+ICoge1xyXG4gIG1hcmdpbjogMCAxLjVyZW0gMS41cmVtIDA7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgaGVpZ2h0OiAzLjJyZW07XHJcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYjZiNmI2O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgY29sb3I6ICM2NzY3NjcgIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi50aXRsZSB7XHJcbiAgY29sb3I6ICMyNTIxNGY7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLmNlbnRyYWwtaW1hZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLnN1Yi10aXRsZSB7XHJcbiAgY29sb3I6ICM2NzY3Njc7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubGluayB7XHJcbiAgY29sb3I6ICMyNTIxNGY7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5pbWcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4uYnRuMiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmVlMTc4O1xyXG4gIC0tY29sb3I6ICMyNTIxNGY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgaGVpZ2h0OiAzLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmVlMTc4O1xyXG59XHJcblxyXG4vLyBpb24tYnV0dG9uIHtcclxuLy8gICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbi8vIH1cclxuXHJcbi5jb250ZW50IHtcclxuICBmb250LWZhbWlseTogTXVsaXNoICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5pbWcge1xyXG4gIGhlaWdodDogMjkwcHg7XHJcbiAgd2lkdGg6IDIzMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBjb2xvcjogIzI1MjE0ZjtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4uY2VudHJhbC1pbWFnZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnN1Yi10aXRsZSB7XHJcbiAgY29sb3I6ICM2NzY3Njc7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgaGVpZ2h0OiAyOTFweDtcclxuICB3aWR0aDogMjMwcHg7XHJcbn1cclxuLnRpdCB7XHJcbiAgZm9udC1mYW1pbHk6IE11bGlzaCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICMyNTIxNGY7XHJcbn1cclxuLnN1YlRpdCB7XHJcbiAgZm9udC1mYW1pbHk6IE11bGlzaCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBsaW5lLWhlaWdodDogMjNweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICM2NzY3Njc7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 59702:
/*!************************************************************************************!*\
  !*** ./src/app/modules/bills-payments/products/products.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".inner-icon {\n  color: #d9ac0b;\n}\n\n.icon-container {\n  border-radius: 10%;\n  background-color: #25214f;\n  padding: 5px;\n}\n\n.header {\n  color: #25214f;\n  font-size: 16px;\n  font-weight: 800;\n}\n\nsection {\n  text-align: center;\n}\n\n.phoneField {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.dialField {\n  width: 30% !important;\n}\n\n.numField {\n  width: 65% !important;\n}\n\n.row {\n  display: flex;\n  flex-direction: column;\n  align-content: flex-start;\n  padding-bottom: 1rem;\n  border-radius: 5px;\n}\n\nion-content {\n  font-family: Mulish !important;\n}\n\n.form-inline [fullWidth] {\n  flex: 1;\n}\n\n.form-inline > * {\n  margin: 0 1.5rem 1.5rem 0;\n}\n\n.row-one {\n  border: 0.8000000119px solid #ced4da;\n  border-radius: 5px;\n  margin-top: 50px;\n  padding: 10px;\n}\n\nion-button {\n  --background: #d9ac0b;\n  --color: #fff !important;\n  color: #25214f;\n}\n\n.active {\n  width: 100%;\n  --border-radius: none;\n  --background: #25214f;\n  --color: white;\n  --color-activated: white;\n  color: white;\n}\n\n.input {\n  height: 3.2rem;\n  background: #e8e8e8;\n  border: 1px solid #b6b6b6;\n  box-sizing: border-box;\n  width: 100%;\n  border: 0.8000000119px solid #ced4da;\n  border-radius: 10px;\n  padding: 0px 20px;\n}\n\nlabel {\n  color: #676767 !important;\n  text-align: left;\n}\n\n.title {\n  color: #25214f;\n  font-weight: 800;\n}\n\n.central-image {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  margin-top: 30px;\n}\n\n.sub-title {\n  color: #676767;\n  text-align: center;\n}\n\n.link {\n  color: #25214f;\n  font-weight: 500;\n  text-decoration: none;\n}\n\n.img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.btn2 {\n  --background: #d9ac0b;\n  --color: #25214f;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #d9ac0b;\n}\n\n.content {\n  font-family: Mulish !important;\n  display: flex;\n  flex-direction: column;\n  align-content: space-between;\n}\n\n.img {\n  height: 290px;\n  width: 230px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.title {\n  color: #25214f;\n  font-weight: 800;\n}\n\n.central-image {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n}\n\n.sub-title {\n  color: #676767;\n}\n\nimg {\n  height: 291px;\n  width: 230px;\n}\n\n.tit {\n  font-family: Mulish !important;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 24px;\n  line-height: 30px;\n  text-align: center;\n  color: #25214f;\n}\n\n.subTit {\n  font-family: Mulish !important;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 15px;\n  line-height: 23px;\n  text-align: center;\n  color: #676767;\n  width: 300px;\n  margin-top: 20px;\n  margin-bottom: 40px;\n  margin: auto;\n}\n\nion-tab-bar {\n  --color: #d9ac0b;\n  --background: #25214f;\n}\n\n.icons {\n  height: 40px;\n  width: 40px;\n}\n\n.btn {\n  --background: #25214f;\n  --color: #fff;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #25214f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsY0FBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUFGOztBQUdBO0VBQ0UscUJBQUE7QUFBRjs7QUFHQTtFQUNFLHFCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBR0Esa0JBQUE7QUFGRjs7QUFXQTtFQUNFLDhCQUFBO0FBUkY7O0FBV0E7RUFDRSxPQUFBO0FBUkY7O0FBV0E7RUFDRSx5QkFBQTtBQVJGOztBQVdBO0VBQ0Usb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQVJGOztBQVlBO0VBQ0UscUJBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7QUFURjs7QUFZQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtBQVRGOztBQVlBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFURjs7QUFZQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7QUFURjs7QUFXQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQVJGOztBQVdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQVJGOztBQVdBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBUkY7O0FBV0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQVJGOztBQVdBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFSRjs7QUFVQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUFQRjs7QUFxQkE7RUFDRSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FBbEJGOztBQXFCQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFsQkY7O0FBcUJBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBbEJGOztBQXFCQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBbEJGOztBQXFCQTtFQUNFLGNBQUE7QUFsQkY7O0FBcUJBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFsQkY7O0FBb0JBO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBakJGOztBQW1CQTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQWhCRjs7QUFtQkE7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0FBaEJGOztBQW1CQTtFQUVFLFlBQUE7RUFDQSxXQUFBO0FBakJGOztBQW1CQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBQWhCRiIsImZpbGUiOiJwcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbm5lci1pY29uIHtcclxuICAvLyBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICNkOWFjMGI7XHJcbn1cclxuXHJcbi5pY29uLWNvbnRhaW5lciB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTIxNGY7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICBjb2xvcjogIzI1MjE0ZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucGhvbmVGaWVsZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmRpYWxGaWVsZCB7XHJcbiAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubnVtRmllbGQge1xyXG4gIHdpZHRoOiA2NSUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgLy8gaGVpZ2h0OiAxLjJyZW07XHJcbiAgLy8gd2lkdGg6IDEuMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi8vIGxhYmVsIHtcclxuLy8gICBjb2xvcjogIzAwMDtcclxuLy8gICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4vLyAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbi8vIH1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICBmb250LWZhbWlseTogTXVsaXNoICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb3JtLWlubGluZSBbZnVsbFdpZHRoXSB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLmZvcm0taW5saW5lID4gKiB7XHJcbiAgbWFyZ2luOiAwIDEuNXJlbSAxLjVyZW0gMDtcclxufVxyXG5cclxuLnJvdy1vbmUge1xyXG4gIGJvcmRlcjogMC44MDAwMDAwMTE5MjA5MjlweCBzb2xpZCAjY2VkNGRhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2Q1ZDRkNDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZDlhYzBiO1xyXG4gIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICBjb2xvcjogIzI1MjE0ZjtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiBub25lO1xyXG4gIC0tYmFja2dyb3VuZDogIzI1MjE0ZjtcclxuICAtLWNvbG9yOiB3aGl0ZTtcclxuICAtLWNvbG9yLWFjdGl2YXRlZDogd2hpdGU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIGhlaWdodDogMy4ycmVtO1xyXG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2I2YjZiNjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogMC44MDAwMDAwMTE5MjA5MjlweCBzb2xpZCAjY2VkNGRhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMHB4IDIwcHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBjb2xvcjogIzY3Njc2NyAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLnRpdGxlIHtcclxuICBjb2xvcjogIzI1MjE0ZjtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4uY2VudHJhbC1pbWFnZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uc3ViLXRpdGxlIHtcclxuICBjb2xvcjogIzY3Njc2NztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5saW5rIHtcclxuICBjb2xvcjogIzI1MjE0ZjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmltZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbi5idG4yIHtcclxuICAtLWJhY2tncm91bmQ6ICNkOWFjMGI7XHJcbiAgLS1jb2xvcjogIzI1MjE0ZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBoZWlnaHQ6IDMuNXJlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNkOWFjMGI7XHJcbn1cclxuXHJcbi8vIGlvbi1idXR0b24ge1xyXG4vLyAgIC0tYmFja2dyb3VuZDogI0Q5QUMwQjtcclxuLy8gICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbi8vICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4vLyAgIHBhZGRpbmc6IDAgM3B4O1xyXG4vLyB9XHJcblxyXG4vLyAuZm9ybS1ncm91cCB7XHJcbi8vICAgcGFkZGluZzogMCAxMHB4O1xyXG4vLyB9XHJcblxyXG4uY29udGVudCB7XHJcbiAgZm9udC1mYW1pbHk6IE11bGlzaCAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uaW1nIHtcclxuICBoZWlnaHQ6IDI5MHB4O1xyXG4gIHdpZHRoOiAyMzBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgY29sb3I6ICMyNTIxNGY7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLmNlbnRyYWwtaW1hZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gIGNvbG9yOiAjNjc2NzY3O1xyXG59XHJcblxyXG5pbWcge1xyXG4gIGhlaWdodDogMjkxcHg7XHJcbiAgd2lkdGg6IDIzMHB4O1xyXG59XHJcbi50aXQge1xyXG4gIGZvbnQtZmFtaWx5OiBNdWxpc2ggIWltcG9ydGFudDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjMjUyMTRmO1xyXG59XHJcbi5zdWJUaXQge1xyXG4gIGZvbnQtZmFtaWx5OiBNdWxpc2ggIWltcG9ydGFudDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjNjc2NzY3O1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5pb24tdGFiLWJhciB7XHJcbiAgLS1jb2xvcjogI2Q5YWMwYjtcclxuICAtLWJhY2tncm91bmQ6ICMyNTIxNGY7XHJcbn1cclxuXHJcbi5pY29ucyB7XHJcbiAgLy8gZm9udC1zaXplOiAzMHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogNDBweDtcclxufVxyXG4uYnRuIHtcclxuICAtLWJhY2tncm91bmQ6ICMyNTIxNGY7XHJcbiAgLS1jb2xvcjogI2ZmZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBoZWlnaHQ6IDMuNXJlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMyNTIxNGY7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 83882:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/choose-signin/choose-signin.component.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".btn {\n  --background: #25214f;\n  --color: #fff;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #25214f;\n}\n\n.btn2 {\n  --background: #fee178;\n  --color: #25214f;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #fee178;\n}\n\nion-button {\n  --border-radius: 15px;\n}\n\nion-content {\n  font-family: Mulish !important;\n  --padding-end: 20px;\n  --padding-start: 20px;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-content: space-between;\n}\n\n.img {\n  height: 290px;\n  width: 230px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.title {\n  color: #25214f;\n  font-weight: 800;\n}\n\n.central-image {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n}\n\n.sub-title {\n  color: #676767;\n}\n\nimg {\n  height: 291px;\n  width: 230px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNob29zZS1zaWduaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBRUY7O0FBQ0E7RUFDRSxjQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQUVGIiwiZmlsZSI6ImNob29zZS1zaWduaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcclxuICAtLWJhY2tncm91bmQ6ICMyNTIxNGY7XHJcbiAgLS1jb2xvcjogI2ZmZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBoZWlnaHQ6IDMuNXJlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMyNTIxNGY7XHJcbn1cclxuXHJcbi5idG4yIHtcclxuICAtLWJhY2tncm91bmQ6ICNmZWUxNzg7XHJcbiAgLS1jb2xvcjogIzI1MjE0ZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBoZWlnaHQ6IDMuNXJlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmZWUxNzg7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIGZvbnQtZmFtaWx5OiBNdWxpc2ggIWltcG9ydGFudDtcclxuICAtLXBhZGRpbmctZW5kOiAyMHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxufVxyXG4uY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5pbWcge1xyXG4gIGhlaWdodDogMjkwcHg7XHJcbiAgd2lkdGg6IDIzMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBjb2xvcjogIzI1MjE0ZjtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4uY2VudHJhbC1pbWFnZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnN1Yi10aXRsZSB7XHJcbiAgY29sb3I6ICM2NzY3Njc7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgaGVpZ2h0OiAyOTFweDtcclxuICB3aWR0aDogMjMwcHg7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 60462:
/*!******************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".top-menu {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-content: space-between;\n}\n\nsection {\n  font-family: Mulish !important;\n}\n\n.userImg {\n  width: 50px;\n  height: 50px;\n}\n\n.info {\n  background-color: #25214f;\n  height: 2rem;\n  width: 100%;\n  margin: 1rem;\n}\n\n.header {\n  color: #181530;\n  font-size: 16px;\n  font-weight: 800;\n}\n\n.card-items {\n  padding: 10px;\n}\n\nion-content {\n  font-family: Mulish !important;\n  --padding-end: 20px;\n  --padding-start: 20px;\n}\n\n.icons {\n  font-size: 30px;\n}\n\n.icons-bg {\n  border-radius: 50%;\n  background-color: #f8f8f8;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FBQ0YiLCJmaWxlIjoiZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtbWVudSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5zZWN0aW9uIHtcclxuICBmb250LWZhbWlseTogTXVsaXNoICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51c2VySW1nIHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5pbmZvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyMTRmO1xyXG4gIGhlaWdodDogMnJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDFyZW07XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGNvbG9yOiAjMTgxNTMwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4uY2FyZC1pdGVtcyB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIGZvbnQtZmFtaWx5OiBNdWxpc2ggIWltcG9ydGFudDtcclxuICAtLXBhZGRpbmctZW5kOiAyMHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxufVxyXG5cclxuLmljb25zIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi5pY29ucy1iZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 2293:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/document-upload/document-upload.component.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".upload {\n  padding: 5%;\n  margin-top: 30px;\n}\n\n.groupAll {\n  position: relative;\n}\n\n.img-space img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  cursor: pointer;\n}\n\n.fileInputProfileWrap {\n  width: 100%;\n  height: auto;\n}\n\n.fileInputProfile {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: 99;\n  top: 0;\n  opacity: 0;\n}\n\n.fileInputProfile[disabled] + .img-space {\n  pointer-events: none;\n  cursor: not-allowed !important;\n}\n\n.img-responsive {\n  margin-top: 20px;\n}\n\n.custom-file {\n  margin-top: 20px;\n}\n\n.btn {\n  --background: #25214f;\n  --color: #fff;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #25214f;\n}\n\n.input {\n  height: 3.2rem;\n  background: #e8e8e8;\n  border: 1px solid #b6b6b6;\n  box-sizing: border-box;\n}\n\nlabel {\n  color: #676767 !important;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50LXVwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUtBO0VBQ0Usa0JBQUE7QUFGRjs7QUFjQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBWEY7O0FBY0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQVhGOztBQWNBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQVhGOztBQWFBO0VBQ0Usb0JBQUE7RUFDQSw4QkFBQTtBQVZGOztBQVlBO0VBQ0UsZ0JBQUE7QUFURjs7QUFXQTtFQUVFLGdCQUFBO0FBVEY7O0FBV0E7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUFSRjs7QUFVQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUFQRjs7QUFVQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7QUFQRiIsImZpbGUiOiJkb2N1bWVudC11cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBsb2FkIHtcclxuICBwYWRkaW5nOiA1JTtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbi8vIC5pbWFnZS13cmFwIHtcclxuLy8gICBib3JkZXI6IHNvbGlkIDFweCAjZTBlMGUwO1xyXG4vLyAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLy8gfVxyXG4uZ3JvdXBBbGwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLy8gLmltZy1zcGFjZSB7XHJcbi8vICAgYm9yZGVyOiBkYXNoZWQgMXB4ICNkM2QzZDM7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbi8vICAgaGVpZ2h0OiBhdXRvO1xyXG4vLyAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbi8vIH1cclxuXHJcbi5pbWctc3BhY2UgaW1nIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZpbGVJbnB1dFByb2ZpbGVXcmFwIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5maWxlSW5wdXRQcm9maWxlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDk5O1xyXG4gIHRvcDogMDtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbi5maWxlSW5wdXRQcm9maWxlW2Rpc2FibGVkXSArIC5pbWctc3BhY2Uge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudDtcclxufVxyXG4uaW1nLXJlc3BvbnNpdmUge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLmN1c3RvbS1maWxlIHtcclxuICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uYnRuIHtcclxuICAtLWJhY2tncm91bmQ6ICMyNTIxNGY7XHJcbiAgLS1jb2xvcjogI2ZmZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBoZWlnaHQ6IDMuNXJlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMyNTIxNGY7XHJcbn1cclxuLmlucHV0IHtcclxuICBoZWlnaHQ6IDMuMnJlbTtcclxuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiNmI2YjY7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGNvbG9yOiAjNjc2NzY3ICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 56626:
/*!*******************************************************************!*\
  !*** ./src/app/modules/history/history.component.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-content {\n  font-family: Mulish !important;\n}\n\n.btn {\n  font-family: Mulish !important;\n  --background: #25214f;\n  --color: #fff;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #25214f;\n}\n\n.inner-icon {\n  color: #fee178;\n}\n\n.icon-container {\n  border-radius: 10%;\n  background-color: #25214f;\n  padding: 10px;\n}\n\n.header {\n  color: #25214f;\n  font-size: 16px;\n  font-weight: 800;\n}\n\nsection {\n  text-align: center;\n}\n\n.phoneField {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.dialField {\n  width: 30% !important;\n}\n\n.numField {\n  width: 65% !important;\n}\n\n.row {\n  display: flex;\n  flex-direction: column;\n  align-content: flex-start;\n  padding-bottom: 1rem;\n  border-radius: 5px;\n}\n\ninput {\n  height: 15px;\n  width: 100%;\n  border: 0.8000000119px solid #ced4da;\n  border-radius: 5px;\n  background-color: #d5d4d4;\n  padding: 0px 15px !important;\n}\n\n.form-inline [fullWidth] {\n  flex: 1;\n}\n\n.form-inline > * {\n  margin: 0 1.5rem 1.5rem 0;\n}\n\n.input {\n  height: 3.2rem;\n  background: #e8e8e8;\n  border: 1px solid #b6b6b6;\n  box-sizing: border-box;\n  border-radius: 5px;\n  padding: 0 15px;\n}\n\nlabel {\n  color: #676767 !important;\n  text-align: left;\n}\n\n.title {\n  color: #25214f;\n  font-weight: 800;\n}\n\n.central-image {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  margin-top: 30px;\n}\n\n.sub-title {\n  color: #676767;\n  text-align: center;\n}\n\n.link {\n  color: #25214f;\n  font-weight: 500;\n  text-decoration: none;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-content: space-between;\n}\n\n.credit {\n  color: #25214f;\n}\n\n.debit {\n  color: #fee178;\n}\n\n.img {\n  height: 290px;\n  width: 230px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.btn2 {\n  font-family: Mulish !important;\n  --background: #fee178;\n  --color: #25214f;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #fee178;\n}\n\n.tra {\n  background-color: #f8f8f8;\n  padding: 10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin: 5px 0;\n}\n\n.tra .ico {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.tra .ico .tex {\n  padding: 0 10px;\n}\n\n.tra .ico .tex .ti {\n  font-size: 13px;\n  font-weight: 500;\n  text-align: left;\n  padding: 0 3px;\n}\n\n.tra .ico .tex .mod {\n  font-size: 11px;\n  color: #8d8d88;\n  padding: 0 3px;\n  text-align: left;\n}\n\n.tra .amount {\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.tra .red {\n  color: #d54b4b;\n}\n\n.tra .green {\n  color: #127e12;\n}\n\n.mas {\n  z-index: 1000;\n  position: fixed;\n  /* Sit on top of the page content */\n  width: 100vw;\n  /* Full width (cover the whole page) */\n  height: 100vh;\n  /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.tes {\n  color: white;\n  font-size: 25px;\n  z-index: 1000;\n}\n\n.overlay {\n  z-index: 999;\n  position: fixed;\n  /* Sit on top of the page content */\n  width: 100%;\n  /* Full width (cover the whole page) */\n  height: 100%;\n  /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.head {\n  background-color: #25214f;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  padding-top: 70px;\n}\n\n.bod {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-bottom: 60px;\n  padding-top: 20px;\n}\n\n.card {\n  background-color: #fff8f83c;\n  padding: 10px 20px;\n  font-size: 40px;\n  border-radius: 10px;\n}\n\n.date {\n  margin: 20px;\n}\n\ntable {\n  margin: 40px 0;\n  padding: 20px;\n  width: 95%;\n  margin: auto;\n}\n\nth,\ntd {\n  text-align: left;\n  padding-left: 20px;\n}\n\ntr {\n  border-bottom: 1px solid #a19b9b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpc3RvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUFDRjs7QUFFQTtFQUVFLGNBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFBRjs7QUFHQTtFQUNFLHFCQUFBO0FBQUY7O0FBR0E7RUFDRSxxQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUdBLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0FBRkY7O0FBV0E7RUFDRSxPQUFBO0FBUkY7O0FBV0E7RUFDRSx5QkFBQTtBQVJGOztBQVdBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVJGOztBQVdBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtBQVJGOztBQVVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBUEY7O0FBVUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFQRjs7QUFVQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQVBGOztBQVVBO0VBQ0UsY0FBQTtBQVBGOztBQVVBO0VBQ0UsY0FBQTtBQVBGOztBQVVBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVBGOztBQVNBO0VBQ0UsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FBTkY7O0FBUUE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUxGOztBQU1FO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUpKOztBQUtJO0VBQ0UsZUFBQTtBQUhOOztBQUtNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBSFI7O0FBS007RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUhSOztBQU9FO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBTEo7O0FBT0U7RUFDRSxjQUFBO0FBTEo7O0FBT0U7RUFDRSxjQUFBO0FBTEo7O0FBUUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUFpQixtQ0FBQTtFQUNqQixZQUFBO0VBQWMsc0NBQUE7RUFDZCxhQUFBO0VBQWUsdUNBQUE7RUFDZixNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBRkY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFERjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQWlCLG1DQUFBO0VBQ2pCLFdBQUE7RUFBYSxzQ0FBQTtFQUNiLFlBQUE7RUFBYyx1Q0FBQTtFQUNkLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxvQ0FBQTtBQUdGOztBQURBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFJRjs7QUFGQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUtGOztBQUhBO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQU1GOztBQUpBO0VBQ0UsWUFBQTtBQU9GOztBQUxBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQVFGOztBQU5BOztFQUVFLGdCQUFBO0VBQ0Esa0JBQUE7QUFTRjs7QUFQQTtFQUNFLGdDQUFBO0FBVUYiLCJmaWxlIjoiaGlzdG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICBmb250LWZhbWlseTogTXVsaXNoICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGZvbnQtZmFtaWx5OiBNdWxpc2ggIWltcG9ydGFudDtcclxuICAtLWJhY2tncm91bmQ6ICMyNTIxNGY7XHJcbiAgLS1jb2xvcjogI2ZmZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBoZWlnaHQ6IDMuNXJlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMyNTIxNGY7XHJcbn1cclxuXHJcbi5pbm5lci1pY29uIHtcclxuICAvLyBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICNmZWUxNzg7XHJcbn1cclxuXHJcbi5pY29uLWNvbnRhaW5lciB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTIxNGY7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgY29sb3I6ICMyNTIxNGY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBob25lRmllbGQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5kaWFsRmllbGQge1xyXG4gIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm51bUZpZWxkIHtcclxuICB3aWR0aDogNjUlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gIC8vIGhlaWdodDogMS4ycmVtO1xyXG4gIC8vIHdpZHRoOiAxLjJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogMC44MDAwMDAwMTE5MjA5MjlweCBzb2xpZCAjY2VkNGRhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVkNGQ0O1xyXG4gIHBhZGRpbmc6IDBweCAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIGxhYmVsIHtcclxuLy8gICBjb2xvcjogIzAwMDtcclxuLy8gICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4vLyAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbi8vIH1cclxuXHJcbi5mb3JtLWlubGluZSBbZnVsbFdpZHRoXSB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLmZvcm0taW5saW5lID4gKiB7XHJcbiAgbWFyZ2luOiAwIDEuNXJlbSAxLjVyZW0gMDtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICBoZWlnaHQ6IDMuMnJlbTtcclxuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiNmI2YjY7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMCAxNXB4O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgY29sb3I6ICM2NzY3NjcgIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi50aXRsZSB7XHJcbiAgY29sb3I6ICMyNTIxNGY7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLmNlbnRyYWwtaW1hZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLnN1Yi10aXRsZSB7XHJcbiAgY29sb3I6ICM2NzY3Njc7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubGluayB7XHJcbiAgY29sb3I6ICMyNTIxNGY7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmNyZWRpdCB7XHJcbiAgY29sb3I6ICMyNTIxNGY7XHJcbn1cclxuXHJcbi5kZWJpdCB7XHJcbiAgY29sb3I6ICNmZWUxNzg7XHJcbn1cclxuXHJcbi5pbWcge1xyXG4gIGhlaWdodDogMjkwcHg7XHJcbiAgd2lkdGg6IDIzMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4uYnRuMiB7XHJcbiAgZm9udC1mYW1pbHk6IE11bGlzaCAhaW1wb3J0YW50O1xyXG4gIC0tYmFja2dyb3VuZDogI2ZlZTE3ODtcclxuICAtLWNvbG9yOiAjMjUyMTRmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGhlaWdodDogMy41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2ZlZTE3ODtcclxufVxyXG4udHJhIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogNXB4IDA7XHJcbiAgLmljbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAudGV4IHtcclxuICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG5cclxuICAgICAgLnRpIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgM3B4O1xyXG4gICAgICB9XHJcbiAgICAgIC5tb2Qge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBjb2xvcjogcmdiKDE0MSwgMTQxLCAxMzYpO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgM3B4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmFtb3VudCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuICAucmVkIHtcclxuICAgIGNvbG9yOiByZ2IoMjEzLCA3NSwgNzUpO1xyXG4gIH1cclxuICAuZ3JlZW4ge1xyXG4gICAgY29sb3I6IHJnYigxOCwgMTI2LCAxOCk7XHJcbiAgfVxyXG59XHJcbi5tYXMge1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTaXQgb24gdG9wIG9mIHRoZSBwYWdlIGNvbnRlbnQgKi9cclxuICB3aWR0aDogMTAwdnc7IC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xyXG4gIGhlaWdodDogMTAwdmg7IC8qIEZ1bGwgaGVpZ2h0IChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbn1cclxuLnRlcyB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICB6LWluZGV4OiAxMDAwO1xyXG59XHJcbi5vdmVybGF5IHtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTaXQgb24gdG9wIG9mIHRoZSBwYWdlIGNvbnRlbnQgKi9cclxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXHJcbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG4uaGVhZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjE0ZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctdG9wOiA3MHB4O1xyXG59XHJcbi5ib2Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcbi5jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOGY4M2M7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5kYXRlIHtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxudGFibGUge1xyXG4gIG1hcmdpbjogNDBweCAwO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxudGgsXHJcbnRkIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG50ciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxNjEsIDE1NSwgMTU1KTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 33376:
/*!********************************************************!*\
  !*** ./src/app/modules/loan/loan.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".btn {\n  --background: #25214f;\n  --color: #fff;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #25214f;\n}\n\n.inner-icon {\n  color: #d9ac0b;\n}\n\n.icon-container {\n  border-radius: 10%;\n  background-color: #25214f;\n  padding: 5px;\n}\n\ntable {\n  border-collapse: collapse;\n  width: 100%;\n}\n\ntd {\n  padding: 10px 5px;\n  text-align: left;\n  font-size: 13px;\n  padding-left: 20px;\n}\n\nth {\n  font-size: 13px;\n  text-align: left;\n  padding: 10px 5px;\n}\n\n.custom-file-input::-webkit-file-upload-button {\n  visibility: hidden;\n}\n\n.custom-file-input::before {\n  content: \"Select some files\";\n  display: inline-block;\n  background: linear-gradient(top, #f9f9f9, #e3e3e3);\n  border: 1px solid #999;\n  border-radius: 3px;\n  padding: 5px 8px;\n  outline: none;\n  white-space: nowrap;\n  cursor: pointer;\n  text-shadow: 1px 1px #fff;\n  font-weight: 700;\n  font-size: 10pt;\n}\n\n.custom-file-input:hover::before {\n  border-color: #25214f;\n}\n\n.custom-file-input:active::before {\n  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);\n}\n\n.row-one {\n  border: 0.8000000119px solid #ced4da;\n  border-radius: 5px;\n  margin-top: 50px;\n  padding: 10px;\n}\n\n.header {\n  color: #25214f;\n  font-size: 16px;\n  font-weight: 800;\n  margin: 20px 0;\n  text-align: center;\n}\n\nsection {\n  text-align: center;\n}\n\n.phoneField {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.dialField {\n  width: 30% !important;\n}\n\n.numField {\n  width: 65% !important;\n}\n\n.row {\n  display: flex;\n  flex-direction: column;\n  align-content: flex-start;\n  padding-bottom: 1rem;\n  border-radius: 5px;\n}\n\nion-content {\n  font-family: Mulish !important;\n}\n\n.form-inline [fullWidth] {\n  flex: 1;\n}\n\n.form-inline > * {\n  margin: 0 1.5rem 1.5rem 0;\n}\n\n.input {\n  height: 3.2rem;\n  background: #e8e8e8;\n  border: 1px solid #b6b6b6;\n  box-sizing: border-box;\n  border-radius: 8px;\n}\n\nlabel {\n  color: #676767 !important;\n  text-align: left;\n}\n\n.title {\n  color: #25214f;\n  font-weight: 800;\n}\n\n.central-image {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  margin-top: 30px;\n}\n\n.sub-title {\n  color: #676767;\n  text-align: center;\n}\n\n.link {\n  color: #25214f;\n  font-weight: 500;\n  text-decoration: none;\n}\n\n.img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.btn2 {\n  --background: #d9ac0b;\n  --color: #25214f;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #d9ac0b;\n}\n\nion-button {\n  --border-radius: 15px;\n  --background: #25214f;\n  --color: #fff !important;\n}\n\n.active {\n  width: 100%;\n  --border-radius: none;\n  --background: #d9ac0b !important;\n  --color: #fff;\n  --color-activated: #25214f;\n  --background-activated: #d9ac0b !important;\n}\n\n.content {\n  font-family: Mulish !important;\n  display: flex;\n  flex-direction: column;\n  align-content: space-between;\n}\n\n.img {\n  height: 290px;\n  width: 230px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.title {\n  color: #25214f;\n  font-weight: 800;\n}\n\n.central-image {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n}\n\n.sub-title {\n  color: #676767;\n}\n\nimg {\n  height: 291px;\n  width: 230px;\n}\n\n.tit {\n  font-family: Mulish !important;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 24px;\n  line-height: 30px;\n  text-align: center;\n  color: #25214f;\n}\n\n.subTit {\n  font-family: Mulish !important;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 15px;\n  line-height: 23px;\n  text-align: center;\n  color: #676767;\n  width: 300px;\n  margin-top: 20px;\n  margin-bottom: 40px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FBQ0Y7O0FBRUE7RUFFRSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFDQTtFQUNFLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxrREFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUFBO0VBQ0UscUJBQUE7QUFHRjs7QUFEQTtFQUNFLDBEQUFBO0FBSUY7O0FBREE7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBSUY7O0FBQUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBR0Y7O0FBQUE7RUFDRSxrQkFBQTtBQUdGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFHRjs7QUFBQTtFQUNFLHFCQUFBO0FBR0Y7O0FBQUE7RUFDRSxxQkFBQTtBQUdGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUdBLGtCQUFBO0FBQ0Y7O0FBaUJBO0VBQ0UsOEJBQUE7QUFkRjs7QUFpQkE7RUFDRSxPQUFBO0FBZEY7O0FBaUJBO0VBQ0UseUJBQUE7QUFkRjs7QUFpQkE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFkRjs7QUFpQkE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0FBZEY7O0FBZ0JBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBYkY7O0FBZ0JBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQWJGOztBQWdCQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQWJGOztBQWdCQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBYkY7O0FBZ0JBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFiRjs7QUFnQkE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FBYkY7O0FBZ0JBO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0FBYkY7O0FBeUJBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQ0FBQTtBQXRCRjs7QUF5QkE7RUFDRSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FBdEJGOztBQXlCQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBdEJGOztBQXlCQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBdEJGOztBQXlCQTtFQUNFLGNBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUF0QkY7O0FBd0JBO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBckJGOztBQXVCQTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQXBCRiIsImZpbGUiOiJsb2FuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4ge1xyXG4gIC0tYmFja2dyb3VuZDogIzI1MjE0ZjtcclxuICAtLWNvbG9yOiAjZmZmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGhlaWdodDogMy41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzI1MjE0ZjtcclxufVxyXG5cclxuLmlubmVyLWljb24ge1xyXG4gIC8vIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogI2Q5YWMwYjtcclxufVxyXG5cclxuLmljb24tY29udGFpbmVyIHtcclxuICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjE0ZjtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50ZCB7XHJcbiAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcbnRoIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nOiAxMHB4IDVweDtcclxufVxyXG5cclxuLmN1c3RvbS1maWxlLWlucHV0Ojotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcbi5jdXN0b20tZmlsZS1pbnB1dDo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlNlbGVjdCBzb21lIGZpbGVzXCI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0b3AsICNmOWY5ZjksICNlM2UzZTMpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHBhZGRpbmc6IDVweCA4cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxMHB0O1xyXG59XHJcbi5jdXN0b20tZmlsZS1pbnB1dDpob3Zlcjo6YmVmb3JlIHtcclxuICBib3JkZXItY29sb3I6ICMyNTIxNGY7XHJcbn1cclxuLmN1c3RvbS1maWxlLWlucHV0OmFjdGl2ZTo6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNlM2UzZTMsICNmOWY5ZjkpO1xyXG59XHJcblxyXG4ucm93LW9uZSB7XHJcbiAgYm9yZGVyOiAwLjgwMDAwMDAxMTkyMDkyOXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVkNGQ0O1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICBjb2xvcjogIzI1MjE0ZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBtYXJnaW46IDIwcHggMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBob25lRmllbGQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5kaWFsRmllbGQge1xyXG4gIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm51bUZpZWxkIHtcclxuICB3aWR0aDogNjUlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gIC8vIGhlaWdodDogMS4ycmVtO1xyXG4gIC8vIHdpZHRoOiAxLjJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4vLyBpbnB1dCB7XHJcbi8vICAgaGVpZ2h0OiAxNXB4O1xyXG4vLyAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgIGJvcmRlcjogMC44MDAwMDAwMTE5MjA5MjlweCBzb2xpZCAjY2VkNGRhO1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVkNGQ0O1xyXG4vLyAgIHBhZGRpbmc6IDBweCAyNXB4O1xyXG4vLyB9XHJcblxyXG4vLyBsYWJlbCB7XHJcbi8vICAgY29sb3I6ICMwMDA7XHJcbi8vICAgdGV4dC1hbGlnbjogbGVmdDtcclxuLy8gICBmb250LXdlaWdodDogODAwO1xyXG4vLyB9XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgZm9udC1mYW1pbHk6IE11bGlzaCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9ybS1pbmxpbmUgW2Z1bGxXaWR0aF0ge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5mb3JtLWlubGluZSA+ICoge1xyXG4gIG1hcmdpbjogMCAxLjVyZW0gMS41cmVtIDA7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgaGVpZ2h0OiAzLjJyZW07XHJcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYjZiNmI2O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgY29sb3I6ICM2NzY3NjcgIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi50aXRsZSB7XHJcbiAgY29sb3I6ICMyNTIxNGY7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLmNlbnRyYWwtaW1hZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLnN1Yi10aXRsZSB7XHJcbiAgY29sb3I6ICM2NzY3Njc7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubGluayB7XHJcbiAgY29sb3I6ICMyNTIxNGY7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5pbWcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmJ0bjIge1xyXG4gIC0tYmFja2dyb3VuZDogI2Q5YWMwYjtcclxuICAtLWNvbG9yOiAjMjUyMTRmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGhlaWdodDogMy41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2Q5YWMwYjtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIC0tYmFja2dyb3VuZDogIzI1MjE0ZjtcclxuICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgLy8gLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzI1MjE0ZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyBpb24tYnV0dG9uOmFjdGl2ZSB7XHJcbi8vICAgd2lkdGg6IDEwMCU7IC0tYm9yZGVyLXJhZGl1czogbm9uZTtcclxuLy8gICAtLWJhY2tncm91bmQ6I0Q5QUMwQiA7XHJcbi8vICAgLS1jb2xvcjojZmZmO1xyXG4vLyAgIC0tY29sb3ItYWN0aXZhdGVkOiNmZmY7XHJcbi8vICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojRDlBQzBCIDtcclxuLy8gfVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiBub25lO1xyXG4gIC0tYmFja2dyb3VuZDogI2Q5YWMwYiAhaW1wb3J0YW50O1xyXG4gIC0tY29sb3I6ICNmZmY7XHJcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMyNTIxNGY7XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2Q5YWMwYiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgZm9udC1mYW1pbHk6IE11bGlzaCAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uaW1nIHtcclxuICBoZWlnaHQ6IDI5MHB4O1xyXG4gIHdpZHRoOiAyMzBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgY29sb3I6ICMyNTIxNGY7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLmNlbnRyYWwtaW1hZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gIGNvbG9yOiAjNjc2NzY3O1xyXG59XHJcblxyXG5pbWcge1xyXG4gIGhlaWdodDogMjkxcHg7XHJcbiAgd2lkdGg6IDIzMHB4O1xyXG59XHJcbi50aXQge1xyXG4gIGZvbnQtZmFtaWx5OiBNdWxpc2ggIWltcG9ydGFudDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjMjUyMTRmO1xyXG59XHJcbi5zdWJUaXQge1xyXG4gIGZvbnQtZmFtaWx5OiBNdWxpc2ggIWltcG9ydGFudDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjNjc2NzY3O1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 86354:
/*!***************************************************************!*\
  !*** ./src/app/modules/login/login.component.scss?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".row {\n  display: flex;\n  flex-direction: column;\n  align-content: flex-start;\n  padding-bottom: 1rem;\n  border-radius: 5px;\n}\n\ninput {\n  height: 32px;\n  width: 100%;\n  border: 0.8000000119px solid #ced4da;\n  border-radius: 5px;\n  background-color: #d5d4d4;\n  padding: 25px;\n}\n\nlabel {\n  color: #676767;\n}\n\nion-content {\n  font-family: Mulish !important;\n  --padding-end: 20px;\n  --padding-start: 20px;\n}\n\n.btn {\n  --background: #25214f;\n  --color: #fff;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #25214f;\n}\n\n.form-inline [fullWidth] {\n  flex: 1;\n}\n\n.form-inline > * {\n  margin: 0 1.5rem 1.5rem 0;\n}\n\nlabel {\n  color: #080730 !important;\n  font-size: 1rem !important;\n  font-style: normal !important;\n}\n\n.title {\n  color: #25214f;\n  font-weight: 800;\n}\n\n.central-image {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n}\n\n.sub-title {\n  color: #676767;\n}\n\nimg {\n  height: 291px;\n  width: 230px;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-content: space-between;\n}\n\n.img {\n  height: 290px;\n  width: 230px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUdBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7QUFERjs7QUFJQTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQURGOztBQUlBO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FBREY7O0FBSUE7RUFDRSxPQUFBO0FBREY7O0FBSUE7RUFDRSx5QkFBQTtBQURGOztBQUlBO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0FBREY7O0FBR0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gIC8vIGhlaWdodDogMS4ycmVtO1xyXG4gIC8vIHdpZHRoOiAxLjJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogMC44MDAwMDAwMTE5MjA5MjlweCBzb2xpZCAjY2VkNGRhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVkNGQ0O1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBjb2xvcjogIzY3Njc2NztcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIGZvbnQtZmFtaWx5OiBNdWxpc2ggIWltcG9ydGFudDtcclxuICAtLXBhZGRpbmctZW5kOiAyMHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMjUyMTRmO1xyXG4gIC0tY29sb3I6ICNmZmY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgaGVpZ2h0OiAzLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjMjUyMTRmO1xyXG59XHJcblxyXG4uZm9ybS1pbmxpbmUgW2Z1bGxXaWR0aF0ge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5mb3JtLWlubGluZSA+ICoge1xyXG4gIG1hcmdpbjogMCAxLjVyZW0gMS41cmVtIDA7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBjb2xvcjogIzA4MDczMCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG59XHJcbi50aXRsZSB7XHJcbiAgY29sb3I6ICMyNTIxNGY7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLmNlbnRyYWwtaW1hZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gIGNvbG9yOiAjNjc2NzY3O1xyXG59XHJcblxyXG5pbWcge1xyXG4gIGhlaWdodDogMjkxcHg7XHJcbiAgd2lkdGg6IDIzMHB4O1xyXG59XHJcbi5jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmltZyB7XHJcbiAgaGVpZ2h0OiAyOTBweDtcclxuICB3aWR0aDogMjMwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 39238:
/*!*******************************************************************!*\
  !*** ./src/app/modules/profile/profile.component.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".header {\n  color: #25214f;\n  font-size: 16px;\n  font-weight: 800;\n}\n\nsection {\n  text-align: center;\n}\n\n.btn {\n  --background: #25214f;\n  --color: #fff;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #25214f;\n}\n\n.phoneField {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.dialField {\n  width: 30% !important;\n}\n\n.numField {\n  width: 65% !important;\n}\n\n.row {\n  display: flex;\n  flex-direction: column;\n  align-content: flex-start;\n  padding-bottom: 1rem;\n  border-radius: 5px;\n}\n\ninput {\n  height: 15px;\n  width: 100%;\n  border: 0.8000000119px solid #ced4da;\n  border-radius: 5px;\n  background-color: #d5d4d4;\n  padding: 0px 25px;\n}\n\nion-content {\n  font-family: Mulish !important;\n}\n\n.form-inline [fullWidth] {\n  flex: 1;\n}\n\n.form-inline > * {\n  margin: 0 1.5rem 1.5rem 0;\n}\n\n.input {\n  height: 3.2rem;\n  background: #e8e8e8;\n  border: 1px solid #b6b6b6;\n  box-sizing: border-box;\n  border-radius: 8px;\n}\n\nlabel {\n  color: #676767 !important;\n  text-align: left;\n}\n\n.title {\n  color: #25214f;\n  font-weight: 800;\n}\n\n.central-image {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  margin-top: 30px;\n}\n\n.sub-title {\n  color: #676767;\n  text-align: center;\n}\n\n.link {\n  color: #25214f;\n  font-weight: 500;\n  text-decoration: none;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-content: space-between;\n}\n\n.img {\n  height: 290px;\n  width: 230px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.btn2 {\n  --background: #fee178;\n  --color: #25214f;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #fee178;\n}\n\nth,\ntd {\n  padding: 5px;\n  text-align: left;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBR0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUFVQTtFQUNFLDhCQUFBO0FBUEY7O0FBU0E7RUFDRSxPQUFBO0FBTkY7O0FBU0E7RUFDRSx5QkFBQTtBQU5GOztBQVNBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBTkY7O0FBU0E7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0FBTkY7O0FBUUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFMRjs7QUFRQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFMRjs7QUFRQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUxGOztBQVFBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFMRjs7QUFRQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FBTEY7O0FBUUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBTEY7O0FBT0E7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FBSkY7O0FBTUE7O0VBRUUsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUhGIiwiZmlsZSI6InByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICBjb2xvcjogIzI1MjE0ZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAtLWJhY2tncm91bmQ6ICMyNTIxNGY7XHJcbiAgLS1jb2xvcjogI2ZmZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBoZWlnaHQ6IDMuNXJlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMyNTIxNGY7XHJcbn1cclxuXHJcbi5waG9uZUZpZWxkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uZGlhbEZpZWxkIHtcclxuICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5udW1GaWVsZCB7XHJcbiAgd2lkdGg6IDY1JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICAvLyBoZWlnaHQ6IDEuMnJlbTtcclxuICAvLyB3aWR0aDogMS4ycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGhlaWdodDogMTVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDAuODAwMDAwMDExOTIwOTI5cHggc29saWQgI2NlZDRkYTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q1ZDRkNDtcclxuICBwYWRkaW5nOiAwcHggMjVweDtcclxufVxyXG5cclxuLy8gbGFiZWwge1xyXG4vLyAgIGNvbG9yOiAjMDAwO1xyXG4vLyAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbi8vICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuLy8gfVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIGZvbnQtZmFtaWx5OiBNdWxpc2ggIWltcG9ydGFudDtcclxufVxyXG4uZm9ybS1pbmxpbmUgW2Z1bGxXaWR0aF0ge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5mb3JtLWlubGluZSA+ICoge1xyXG4gIG1hcmdpbjogMCAxLjVyZW0gMS41cmVtIDA7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgaGVpZ2h0OiAzLjJyZW07XHJcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYjZiNmI2O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgY29sb3I6ICM2NzY3NjcgIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi50aXRsZSB7XHJcbiAgY29sb3I6ICMyNTIxNGY7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLmNlbnRyYWwtaW1hZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLnN1Yi10aXRsZSB7XHJcbiAgY29sb3I6ICM2NzY3Njc7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubGluayB7XHJcbiAgY29sb3I6ICMyNTIxNGY7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmltZyB7XHJcbiAgaGVpZ2h0OiAyOTBweDtcclxuICB3aWR0aDogMjMwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbi5idG4yIHtcclxuICAtLWJhY2tncm91bmQ6ICNmZWUxNzg7XHJcbiAgLS1jb2xvcjogIzI1MjE0ZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBoZWlnaHQ6IDMuNXJlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmZWUxNzg7XHJcbn1cclxudGgsXHJcbnRkIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 67447:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/register/become-royalty/become-royalty.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".row {\n  display: flex;\n  flex-direction: column;\n  align-content: flex-start;\n  padding-bottom: 1rem;\n  border-radius: 5px;\n}\n\ninput {\n  height: 32px;\n  width: 100%;\n  border: 0.8000000119px solid #ced4da;\n  border-radius: 5px;\n  background-color: #d5d4d4;\n  padding: 25px;\n  outline: none;\n}\n\nlabel {\n  color: #676767;\n}\n\nion-content {\n  font-family: Mulish !important;\n  --padding-end: 20px;\n  --padding-start: 20px;\n}\n\nion-button {\n  font-family: Mulish !important;\n}\n\n.btn {\n  --background: #25214f;\n  --color: #fff;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #25214f;\n}\n\n.form-inline [fullWidth] {\n  flex: 1;\n}\n\n.form-inline > * {\n  margin: 0 1.5rem 1.5rem 0;\n}\n\n.input {\n  height: 3.2rem;\n  background: #e8e8e8;\n  border: 1px solid #b6b6b6;\n  box-sizing: border-box;\n  border-radius: 8px;\n}\n\nlabel {\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 20px;\n  text-align: left;\n  padding-bottom: 5px;\n  color: #676767;\n}\n\n.title {\n  color: #25214f;\n  font-weight: 800;\n}\n\n.central-image {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n}\n\n.sub-title {\n  font-style: normal;\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 20px;\n  text-align: center;\n  color: #676767;\n  width: 60vw;\n}\n\nimg {\n  height: 291px;\n  width: 230px;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-content: space-between;\n}\n\n.img {\n  height: 290px;\n  width: 230px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.we {\n  width: 70vw;\n  margin: auto;\n}\n\n.btn2 {\n  --background: #d9ac0b;\n  --color: #25214f;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #d9ac0b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlY29tZS1yb3lhbHR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUdBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0FBREY7O0FBSUE7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFERjs7QUFJQTtFQUNFLDhCQUFBO0FBREY7O0FBSUE7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUFERjs7QUFJQTtFQUNFLE9BQUE7QUFERjs7QUFJQTtFQUNFLHlCQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFERjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQUE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FBR0YiLCJmaWxlIjoiYmVjb21lLXJveWFsdHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICAvLyBoZWlnaHQ6IDEuMnJlbTtcclxuICAvLyB3aWR0aDogMS4ycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGhlaWdodDogMzJweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDAuODAwMDAwMDExOTIwOTI5cHggc29saWQgI2NlZDRkYTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q1ZDRkNDtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBjb2xvcjogIzY3Njc2NztcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIGZvbnQtZmFtaWx5OiBNdWxpc2ggIWltcG9ydGFudDtcclxuICAtLXBhZGRpbmctZW5kOiAyMHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgZm9udC1mYW1pbHk6IE11bGlzaCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAtLWJhY2tncm91bmQ6ICMyNTIxNGY7XHJcbiAgLS1jb2xvcjogI2ZmZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBoZWlnaHQ6IDMuNXJlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMyNTIxNGY7XHJcbn1cclxuXHJcbi5mb3JtLWlubGluZSBbZnVsbFdpZHRoXSB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLmZvcm0taW5saW5lID4gKiB7XHJcbiAgbWFyZ2luOiAwIDEuNXJlbSAxLjVyZW0gMDtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICBoZWlnaHQ6IDMuMnJlbTtcclxuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiNmI2YjY7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgY29sb3I6ICM2NzY3Njc7XHJcbn1cclxuLnRpdGxlIHtcclxuICBjb2xvcjogIzI1MjE0ZjtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4uY2VudHJhbC1pbWFnZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnN1Yi10aXRsZSB7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzY3Njc2NztcclxuICB3aWR0aDogNjB2dztcclxufVxyXG5cclxuaW1nIHtcclxuICBoZWlnaHQ6IDI5MXB4O1xyXG4gIHdpZHRoOiAyMzBweDtcclxufVxyXG4uY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5pbWcge1xyXG4gIGhlaWdodDogMjkwcHg7XHJcbiAgd2lkdGg6IDIzMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4ud2Uge1xyXG4gIHdpZHRoOiA3MHZ3O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4uYnRuMiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZDlhYzBiO1xyXG4gIC0tY29sb3I6ICMyNTIxNGY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgaGVpZ2h0OiAzLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZDlhYzBiO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 15303:
/*!************************************************************************************!*\
  !*** ./src/app/modules/register/bvn-success/bvn-success.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".row {\n  display: flex;\n  flex-direction: column;\n  align-content: flex-start;\n  padding-bottom: 1rem;\n  border-radius: 5px;\n}\n\ninput {\n  height: 32px;\n  width: 100%;\n  border: 0.8000000119px solid #ced4da;\n  border-radius: 5px;\n  background-color: #d5d4d4;\n  padding: 25px;\n  outline: none;\n}\n\nlabel {\n  color: #676767;\n}\n\nion-content {\n  font-family: Mulish !important;\n  --padding-end: 20px;\n  --padding-start: 20px;\n}\n\n.btn {\n  --background: #25214f;\n  --color: #fff;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #25214f;\n}\n\n.form-inline [fullWidth] {\n  flex: 1;\n}\n\n.form-inline > * {\n  margin: 0 1.5rem 1.5rem 0;\n}\n\n.input {\n  height: 3.2rem;\n  background: #e8e8e8;\n  border: 1px solid #b6b6b6;\n  box-sizing: border-box;\n  border-radius: 8px;\n}\n\nlabel {\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 20px;\n  text-align: left;\n  padding-bottom: 5px;\n  color: #676767;\n}\n\n.title {\n  color: #25214f;\n  font-weight: 800;\n}\n\n.central-image {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n}\n\n.sub-title {\n  font-style: normal;\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 20px;\n  text-align: center;\n  color: #676767;\n  width: 60vw;\n}\n\nimg {\n  height: 291px;\n  width: 230px;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-content: space-between;\n}\n\n.img {\n  height: 290px;\n  width: 230px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.we {\n  width: 70vw;\n  margin: auto;\n  font-size: 20px;\n  font-weight: 600;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ2bi1zdWNjZXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUdBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0FBREY7O0FBSUE7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFERjs7QUFJQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBQURGOztBQUlBO0VBQ0UsT0FBQTtBQURGOztBQUlBO0VBQ0UseUJBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQURGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBQUY7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBRUYiLCJmaWxlIjoiYnZuLXN1Y2Nlc3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICAvLyBoZWlnaHQ6IDEuMnJlbTtcclxuICAvLyB3aWR0aDogMS4ycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGhlaWdodDogMzJweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDAuODAwMDAwMDExOTIwOTI5cHggc29saWQgI2NlZDRkYTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q1ZDRkNDtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBjb2xvcjogIzY3Njc2NztcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIGZvbnQtZmFtaWx5OiBNdWxpc2ggIWltcG9ydGFudDtcclxuICAtLXBhZGRpbmctZW5kOiAyMHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMjUyMTRmO1xyXG4gIC0tY29sb3I6ICNmZmY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgaGVpZ2h0OiAzLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjMjUyMTRmO1xyXG59XHJcblxyXG4uZm9ybS1pbmxpbmUgW2Z1bGxXaWR0aF0ge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5mb3JtLWlubGluZSA+ICoge1xyXG4gIG1hcmdpbjogMCAxLjVyZW0gMS41cmVtIDA7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgaGVpZ2h0OiAzLjJyZW07XHJcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYjZiNmI2O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIGNvbG9yOiAjNjc2NzY3O1xyXG59XHJcbi50aXRsZSB7XHJcbiAgY29sb3I6ICMyNTIxNGY7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLmNlbnRyYWwtaW1hZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICM2NzY3Njc7XHJcbiAgd2lkdGg6IDYwdnc7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgaGVpZ2h0OiAyOTFweDtcclxuICB3aWR0aDogMjMwcHg7XHJcbn1cclxuLmNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uaW1nIHtcclxuICBoZWlnaHQ6IDI5MHB4O1xyXG4gIHdpZHRoOiAyMzBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuLndlIHtcclxuICB3aWR0aDogNzB2dztcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 75164:
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/register/co-operatre-details/co-operatre-details.component.scss?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".header {\n  color: #25214f;\n  font-size: 16px;\n  font-weight: 800;\n}\n\nsection {\n  text-align: center;\n}\n\n.btn {\n  --background: #25214f;\n  --color: #fff;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #25214f;\n}\n\n.phoneField {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.dialField {\n  width: 30% !important;\n}\n\n.numField {\n  width: 65% !important;\n}\n\n.row {\n  display: flex;\n  flex-direction: column;\n  align-content: flex-start;\n  padding-bottom: 1rem;\n  border-radius: 5px;\n}\n\ninput {\n  height: 15px;\n  width: 100%;\n  border: 0.8000000119px solid #ced4da;\n  border-radius: 5px;\n  background-color: #d5d4d4;\n  padding: 0px 25px;\n}\n\nion-content {\n  font-family: Mulish !important;\n  --padding-end: 20px;\n  --padding-start: 20px;\n}\n\n.form-inline [fullWidth] {\n  flex: 1;\n}\n\n.form-inline > * {\n  margin: 0 1.5rem 1.5rem 0;\n}\n\n.input {\n  height: 3.2rem;\n  background: #e8e8e8;\n  border: 1px solid #b6b6b6;\n  box-sizing: border-box;\n  border-radius: 8px;\n}\n\nlabel {\n  color: #676767 !important;\n  text-align: left;\n}\n\n.title {\n  color: #25214f;\n  font-weight: 800;\n}\n\n.central-image {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n}\n\n.sub-title {\n  color: #676767;\n  text-align: center;\n}\n\n.link {\n  color: #25214f;\n  font-weight: 500;\n  text-decoration: none;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-content: space-between;\n}\n\n.img {\n  height: 290px;\n  width: 230px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.btn2 {\n  --background: #d9ac0b;\n  --color: #25214f;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #d9ac0b;\n}\n\n.we {\n  width: 80vw;\n  margin: auto;\n}\n\n.has {\n  font-style: normal;\n  font-weight: 800;\n  font-size: 24px;\n  line-height: 30px;\n  width: 80vw;\n  margin: auto;\n  color: #000000;\n  text-align: center;\n}\n\n.hassub {\n  font-style: normal;\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 20px;\n  text-align: center;\n  width: 80vw;\n  margin: auto;\n  padding-top: 20px;\n  /* Grey Text */\n  color: #676767;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvLW9wZXJhdHJlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBR0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUFVQTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQVBGOztBQVVBO0VBQ0UsT0FBQTtBQVBGOztBQVVBO0VBQ0UseUJBQUE7QUFQRjs7QUFVQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQVBGOztBQVVBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtBQVBGOztBQVNBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBTkY7O0FBU0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQU5GOztBQVNBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBTkY7O0FBU0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQU5GOztBQVNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFORjs7QUFTQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFORjs7QUFRQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUFMRjs7QUFPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBSkY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsY0FBQTtBQUpGIiwiZmlsZSI6ImNvLW9wZXJhdHJlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICBjb2xvcjogIzI1MjE0ZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAtLWJhY2tncm91bmQ6ICMyNTIxNGY7XHJcbiAgLS1jb2xvcjogI2ZmZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBoZWlnaHQ6IDMuNXJlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMyNTIxNGY7XHJcbn1cclxuXHJcbi5waG9uZUZpZWxkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uZGlhbEZpZWxkIHtcclxuICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5udW1GaWVsZCB7XHJcbiAgd2lkdGg6IDY1JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICAvLyBoZWlnaHQ6IDEuMnJlbTtcclxuICAvLyB3aWR0aDogMS4ycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGhlaWdodDogMTVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDAuODAwMDAwMDExOTIwOTI5cHggc29saWQgI2NlZDRkYTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q1ZDRkNDtcclxuICBwYWRkaW5nOiAwcHggMjVweDtcclxufVxyXG5cclxuLy8gbGFiZWwge1xyXG4vLyAgIGNvbG9yOiAjMDAwO1xyXG4vLyAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbi8vICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuLy8gfVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIGZvbnQtZmFtaWx5OiBNdWxpc2ggIWltcG9ydGFudDtcclxuICAtLXBhZGRpbmctZW5kOiAyMHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxufVxyXG5cclxuLmZvcm0taW5saW5lIFtmdWxsV2lkdGhdIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4uZm9ybS1pbmxpbmUgPiAqIHtcclxuICBtYXJnaW46IDAgMS41cmVtIDEuNXJlbSAwO1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIGhlaWdodDogMy4ycmVtO1xyXG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2I2YjZiNjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGNvbG9yOiAjNjc2NzY3ICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4udGl0bGUge1xyXG4gIGNvbG9yOiAjMjUyMTRmO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5jZW50cmFsLWltYWdlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uc3ViLXRpdGxlIHtcclxuICBjb2xvcjogIzY3Njc2NztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5saW5rIHtcclxuICBjb2xvcjogIzI1MjE0ZjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uaW1nIHtcclxuICBoZWlnaHQ6IDI5MHB4O1xyXG4gIHdpZHRoOiAyMzBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuLmJ0bjIge1xyXG4gIC0tYmFja2dyb3VuZDogI2Q5YWMwYjtcclxuICAtLWNvbG9yOiAjMjUyMTRmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGhlaWdodDogMy41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2Q5YWMwYjtcclxufVxyXG4ud2Uge1xyXG4gIHdpZHRoOiA4MHZ3O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4uaGFzIHtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDgwdnc7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaGFzc3ViIHtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiA4MHZ3O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuXHJcbiAgLyogR3JleSBUZXh0ICovXHJcblxyXG4gIGNvbG9yOiAjNjc2NzY3O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 73822:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/register/create-account/create-account.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".header {\n  color: #25214f;\n  font-size: 16px;\n  font-weight: 800;\n}\n\nsection {\n  text-align: center;\n}\n\n.btn {\n  --background: #25214f;\n  --color: #fff;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #25214f;\n}\n\n.phoneField {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.dialField {\n  width: 30% !important;\n}\n\n.numField {\n  width: 65% !important;\n}\n\n.row {\n  display: flex;\n  flex-direction: column;\n  align-content: flex-start;\n  padding-bottom: 1rem;\n  border-radius: 5px;\n}\n\ninput {\n  height: 15px;\n  width: 100%;\n  border: 0.8000000119px solid #ced4da;\n  border-radius: 5px;\n  background-color: #d5d4d4;\n  padding: 0px 25px;\n}\n\nion-content {\n  font-family: Mulish !important;\n  --padding-end: 20px;\n  --padding-start: 20px;\n}\n\n.form-inline [fullWidth] {\n  flex: 1;\n}\n\n.form-inline > * {\n  margin: 0 1.5rem 1.5rem 0;\n}\n\n.input {\n  height: 3.2rem;\n  background: #e8e8e8;\n  border: 1px solid #b6b6b6;\n  box-sizing: border-box;\n  border-radius: 8px;\n}\n\nlabel {\n  color: #676767 !important;\n  text-align: left;\n}\n\n.title {\n  color: #25214f;\n  font-weight: 800;\n}\n\n.central-image {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n}\n\n.sub-title {\n  color: #676767;\n  text-align: center;\n}\n\n.link {\n  color: #25214f;\n  font-weight: 500;\n  text-decoration: none;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-content: space-between;\n}\n\n.img {\n  height: 290px;\n  width: 230px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.btn2 {\n  --background: #d9ac0b;\n  --color: #25214f;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #d9ac0b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1hY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUdBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBREY7O0FBU0E7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFORjs7QUFTQTtFQUNFLE9BQUE7QUFORjs7QUFTQTtFQUNFLHlCQUFBO0FBTkY7O0FBU0E7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFORjs7QUFTQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7QUFORjs7QUFRQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQUxGOztBQVFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUFMRjs7QUFRQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUxGOztBQVFBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFMRjs7QUFRQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FBTEY7O0FBUUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBTEY7O0FBT0E7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FBSkYiLCJmaWxlIjoiY3JlYXRlLWFjY291bnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICBjb2xvcjogIzI1MjE0ZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAtLWJhY2tncm91bmQ6ICMyNTIxNGY7XHJcbiAgLS1jb2xvcjogI2ZmZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBoZWlnaHQ6IDMuNXJlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMyNTIxNGY7XHJcbn1cclxuXHJcbi5waG9uZUZpZWxkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uZGlhbEZpZWxkIHtcclxuICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5udW1GaWVsZCB7XHJcbiAgd2lkdGg6IDY1JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICAvLyBoZWlnaHQ6IDEuMnJlbTtcclxuICAvLyB3aWR0aDogMS4ycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGhlaWdodDogMTVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDAuODAwMDAwMDExOTIwOTI5cHggc29saWQgI2NlZDRkYTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q1ZDRkNDtcclxuICBwYWRkaW5nOiAwcHggMjVweDtcclxufVxyXG5cclxuLy8gbGFiZWwge1xyXG4vLyAgIGNvbG9yOiAjMDAwO1xyXG4vLyAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbi8vICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuLy8gfVxyXG5pb24tY29udGVudCB7XHJcbiAgZm9udC1mYW1pbHk6IE11bGlzaCAhaW1wb3J0YW50O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDIwcHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xyXG59XHJcblxyXG4uZm9ybS1pbmxpbmUgW2Z1bGxXaWR0aF0ge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5mb3JtLWlubGluZSA+ICoge1xyXG4gIG1hcmdpbjogMCAxLjVyZW0gMS41cmVtIDA7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgaGVpZ2h0OiAzLjJyZW07XHJcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYjZiNmI2O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgY29sb3I6ICM2NzY3NjcgIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi50aXRsZSB7XHJcbiAgY29sb3I6ICMyNTIxNGY7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLmNlbnRyYWwtaW1hZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gIGNvbG9yOiAjNjc2NzY3O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxpbmsge1xyXG4gIGNvbG9yOiAjMjUyMTRmO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5pbWcge1xyXG4gIGhlaWdodDogMjkwcHg7XHJcbiAgd2lkdGg6IDIzMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4uYnRuMiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZDlhYzBiO1xyXG4gIC0tY29sb3I6ICMyNTIxNGY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgaGVpZ2h0OiAzLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZDlhYzBiO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 84520:
/*!****************************************************************************!*\
  !*** ./src/app/modules/register/details/details.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".header {\n  color: #25214f;\n  font-size: 16px;\n  font-weight: 800;\n}\n\nsection {\n  text-align: center;\n}\n\n.btn {\n  --background: #25214f;\n  --color: #fff;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #25214f;\n}\n\n.phoneField {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.dialField {\n  width: 30% !important;\n}\n\n.numField {\n  width: 65% !important;\n}\n\n.row {\n  display: flex;\n  flex-direction: column;\n  align-content: flex-start;\n  padding-bottom: 1rem;\n  border-radius: 5px;\n}\n\ninput {\n  height: 15px;\n  width: 100%;\n  border: 0.8000000119px solid #ced4da;\n  border-radius: 5px;\n  background-color: #d5d4d4;\n  padding: 0px 25px;\n}\n\nion-content {\n  font-family: Mulish !important;\n  --padding-end: 20px;\n  --padding-start: 20px;\n}\n\n.form-inline [fullWidth] {\n  flex: 1;\n}\n\n.form-inline > * {\n  margin: 0 1.5rem 1.5rem 0;\n}\n\n.input {\n  height: 3.2rem;\n  background: #e8e8e8;\n  border: 1px solid #b6b6b6;\n  box-sizing: border-box;\n  border-radius: 8px;\n}\n\nlabel {\n  color: #676767 !important;\n  text-align: left;\n}\n\n.title {\n  color: #25214f;\n  font-weight: 800;\n}\n\n.central-image {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n}\n\n.sub-title {\n  color: #676767;\n  text-align: center;\n}\n\n.link {\n  color: #25214f;\n  font-weight: 500;\n  text-decoration: none;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-content: space-between;\n}\n\n.img {\n  height: 290px;\n  width: 230px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.btn2 {\n  --background: #d9ac0b;\n  --color: #25214f;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #d9ac0b;\n}\n\n.we {\n  width: 80vw;\n  margin: auto;\n}\n\n.has {\n  font-style: normal;\n  font-weight: 800;\n  font-size: 24px;\n  line-height: 30px;\n  width: 80vw;\n  margin: auto;\n  color: #000000;\n  text-align: center;\n}\n\n.hassub {\n  font-style: normal;\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 20px;\n  text-align: center;\n  width: 80vw;\n  margin: auto;\n  padding-top: 20px;\n  /* Grey Text */\n  color: #676767;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBR0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUFVQTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQVBGOztBQVVBO0VBQ0UsT0FBQTtBQVBGOztBQVVBO0VBQ0UseUJBQUE7QUFQRjs7QUFVQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQVBGOztBQVVBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtBQVBGOztBQVNBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBTkY7O0FBU0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQU5GOztBQVNBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBTkY7O0FBU0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQU5GOztBQVNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFORjs7QUFTQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFORjs7QUFRQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUFMRjs7QUFPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBSkY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsY0FBQTtBQUpGIiwiZmlsZSI6ImRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICBjb2xvcjogIzI1MjE0ZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAtLWJhY2tncm91bmQ6ICMyNTIxNGY7XHJcbiAgLS1jb2xvcjogI2ZmZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBoZWlnaHQ6IDMuNXJlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMyNTIxNGY7XHJcbn1cclxuXHJcbi5waG9uZUZpZWxkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uZGlhbEZpZWxkIHtcclxuICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5udW1GaWVsZCB7XHJcbiAgd2lkdGg6IDY1JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICAvLyBoZWlnaHQ6IDEuMnJlbTtcclxuICAvLyB3aWR0aDogMS4ycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGhlaWdodDogMTVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDAuODAwMDAwMDExOTIwOTI5cHggc29saWQgI2NlZDRkYTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q1ZDRkNDtcclxuICBwYWRkaW5nOiAwcHggMjVweDtcclxufVxyXG5cclxuLy8gbGFiZWwge1xyXG4vLyAgIGNvbG9yOiAjMDAwO1xyXG4vLyAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbi8vICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuLy8gfVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIGZvbnQtZmFtaWx5OiBNdWxpc2ggIWltcG9ydGFudDtcclxuICAtLXBhZGRpbmctZW5kOiAyMHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxufVxyXG5cclxuLmZvcm0taW5saW5lIFtmdWxsV2lkdGhdIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4uZm9ybS1pbmxpbmUgPiAqIHtcclxuICBtYXJnaW46IDAgMS41cmVtIDEuNXJlbSAwO1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIGhlaWdodDogMy4ycmVtO1xyXG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2I2YjZiNjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGNvbG9yOiAjNjc2NzY3ICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4udGl0bGUge1xyXG4gIGNvbG9yOiAjMjUyMTRmO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5jZW50cmFsLWltYWdlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uc3ViLXRpdGxlIHtcclxuICBjb2xvcjogIzY3Njc2NztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5saW5rIHtcclxuICBjb2xvcjogIzI1MjE0ZjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uaW1nIHtcclxuICBoZWlnaHQ6IDI5MHB4O1xyXG4gIHdpZHRoOiAyMzBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuLmJ0bjIge1xyXG4gIC0tYmFja2dyb3VuZDogI2Q5YWMwYjtcclxuICAtLWNvbG9yOiAjMjUyMTRmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGhlaWdodDogMy41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2Q5YWMwYjtcclxufVxyXG4ud2Uge1xyXG4gIHdpZHRoOiA4MHZ3O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4uaGFzIHtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDgwdnc7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaGFzc3ViIHtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiA4MHZ3O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuXHJcbiAgLyogR3JleSBUZXh0ICovXHJcblxyXG4gIGNvbG9yOiAjNjc2NzY3O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 50410:
/*!**********************************************************************!*\
  !*** ./src/app/modules/register/done/done.component.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".btn {\n  --background: #25214f;\n  --color: #fff;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #25214f;\n}\n\n.btn2 {\n  --background: #d9ac0b;\n  --color: #25214f;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #d9ac0b;\n}\n\nion-button {\n  --border-radius: 15px;\n}\n\nion-content {\n  font-family: Mulish !important;\n  --padding-end: 20px;\n  --padding-start: 20px;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-content: space-between;\n}\n\n.img {\n  height: 290px;\n  width: 230px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.title {\n  color: #25214f;\n  font-weight: 800;\n}\n\n.central-image {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n}\n\n.sub-title {\n  color: #676767;\n}\n\nimg {\n  height: 291px;\n  width: 230px;\n}\n\n.tit {\n  font-style: normal;\n  font-weight: 800;\n  font-size: 24px;\n  line-height: 30px;\n  text-align: center;\n  color: #25214f;\n}\n\n.subTit {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 15px;\n  line-height: 23px;\n  text-align: center;\n  color: #676767;\n  width: 300px;\n  margin-top: 20px;\n  margin-bottom: 40px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBRUY7O0FBQ0E7RUFDRSxjQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUdGOztBQURBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUlGIiwiZmlsZSI6ImRvbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcclxuICAtLWJhY2tncm91bmQ6ICMyNTIxNGY7XHJcbiAgLS1jb2xvcjogI2ZmZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBoZWlnaHQ6IDMuNXJlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMyNTIxNGY7XHJcbn1cclxuXHJcbi5idG4yIHtcclxuICAtLWJhY2tncm91bmQ6ICNkOWFjMGI7XHJcbiAgLS1jb2xvcjogIzI1MjE0ZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBoZWlnaHQ6IDMuNXJlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNkOWFjMGI7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgZm9udC1mYW1pbHk6IE11bGlzaCAhaW1wb3J0YW50O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDIwcHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5pbWcge1xyXG4gIGhlaWdodDogMjkwcHg7XHJcbiAgd2lkdGg6IDIzMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBjb2xvcjogIzI1MjE0ZjtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4uY2VudHJhbC1pbWFnZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnN1Yi10aXRsZSB7XHJcbiAgY29sb3I6ICM2NzY3Njc7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgaGVpZ2h0OiAyOTFweDtcclxuICB3aWR0aDogMjMwcHg7XHJcbn1cclxuLnRpdCB7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzI1MjE0ZjtcclxufVxyXG4uc3ViVGl0IHtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjNjc2NzY3O1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 21578:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/register/image-done/image-done.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".row {\n  display: flex;\n  flex-direction: column;\n  align-content: flex-start;\n  padding-bottom: 1rem;\n  border-radius: 5px;\n}\n\ninput {\n  height: 32px;\n  width: 100%;\n  border: 0.8000000119px solid #ced4da;\n  border-radius: 5px;\n  background-color: #d5d4d4;\n  padding: 25px;\n  outline: none;\n}\n\nlabel {\n  color: #676767;\n}\n\nion-content {\n  font-family: Mulish !important;\n  --padding-end: 20px;\n  --padding-start: 20px;\n}\n\n.btn {\n  --background: #25214f;\n  --color: #fff;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #25214f;\n}\n\n.form-inline [fullWidth] {\n  flex: 1;\n}\n\n.form-inline > * {\n  margin: 0 1.5rem 1.5rem 0;\n}\n\n.input {\n  height: 3.2rem;\n  background: #e8e8e8;\n  border: 1px solid #b6b6b6;\n  box-sizing: border-box;\n  border-radius: 8px;\n}\n\nlabel {\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 20px;\n  text-align: left;\n  padding-bottom: 5px;\n  color: #676767;\n}\n\n.title {\n  color: #25214f;\n  font-weight: 800;\n}\n\n.central-image {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n}\n\n.sub-title {\n  font-style: normal;\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 20px;\n  text-align: center;\n  color: #676767;\n  width: 60vw;\n}\n\nimg {\n  height: 291px;\n  width: 230px;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-content: space-between;\n}\n\n.img {\n  height: 290px;\n  width: 230px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.we {\n  width: 70vw;\n  margin: auto;\n  font-size: 20px;\n  font-weight: 600;\n  color: black;\n}\n\n.td {\n  font-size: 16px;\n  font-weight: 700;\n  text-align: left;\n  color: #25214f;\n  line-height: 20px;\n}\n\n.bd {\n  text-align: left;\n  font-size: 14px;\n  line-height: 20px;\n  color: #837f7f;\n}\n\n.bdp {\n  text-align: left;\n  font-size: 14px;\n  line-height: 20px;\n  color: #25214f;\n  margin-top: 10px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLWRvbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBR0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7QUFERjs7QUFJQTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQURGOztBQUlBO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FBREY7O0FBSUE7RUFDRSxPQUFBO0FBREY7O0FBSUE7RUFDRSx5QkFBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBREY7O0FBR0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFBRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFFRjs7QUFBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBR0Y7O0FBREE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFJRjs7QUFGQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFLRiIsImZpbGUiOiJpbWFnZS1kb25lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgLy8gaGVpZ2h0OiAxLjJyZW07XHJcbiAgLy8gd2lkdGg6IDEuMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAwLjgwMDAwMDAxMTkyMDkyOXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNWQ0ZDQ7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgY29sb3I6ICM2NzY3Njc7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICBmb250LWZhbWlseTogTXVsaXNoICFpbXBvcnRhbnQ7XHJcbiAgLS1wYWRkaW5nLWVuZDogMjBweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIC0tYmFja2dyb3VuZDogIzI1MjE0ZjtcclxuICAtLWNvbG9yOiAjZmZmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGhlaWdodDogMy41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzI1MjE0ZjtcclxufVxyXG5cclxuLmZvcm0taW5saW5lIFtmdWxsV2lkdGhdIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4uZm9ybS1pbmxpbmUgPiAqIHtcclxuICBtYXJnaW46IDAgMS41cmVtIDEuNXJlbSAwO1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIGhlaWdodDogMy4ycmVtO1xyXG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2I2YjZiNjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICBjb2xvcjogIzY3Njc2NztcclxufVxyXG4udGl0bGUge1xyXG4gIGNvbG9yOiAjMjUyMTRmO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5jZW50cmFsLWltYWdlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uc3ViLXRpdGxlIHtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjNjc2NzY3O1xyXG4gIHdpZHRoOiA2MHZ3O1xyXG59XHJcblxyXG5pbWcge1xyXG4gIGhlaWdodDogMjkxcHg7XHJcbiAgd2lkdGg6IDIzMHB4O1xyXG59XHJcbi5jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmltZyB7XHJcbiAgaGVpZ2h0OiAyOTBweDtcclxuICB3aWR0aDogMjMwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbi53ZSB7XHJcbiAgd2lkdGg6IDcwdnc7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4udGQge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6ICMyNTIxNGY7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuLmJkIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBjb2xvcjogIzgzN2Y3ZjtcclxufVxyXG4uYmRwIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBjb2xvcjogIzI1MjE0ZjtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 15317:
/*!************************************************************************!*\
  !*** ./src/app/modules/register/image/image.component.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".row {\n  display: flex;\n  flex-direction: column;\n  align-content: flex-start;\n  padding-bottom: 1rem;\n  border-radius: 5px;\n}\n\ninput {\n  height: 32px;\n  width: 100%;\n  border: 0.8000000119px solid #ced4da;\n  border-radius: 5px;\n  background-color: #d5d4d4;\n  padding: 25px;\n  outline: none;\n}\n\nlabel {\n  color: #676767;\n}\n\nion-content {\n  font-family: Mulish !important;\n  --padding-end: 20px;\n  --padding-start: 20px;\n}\n\n.btn {\n  --background: #25214f;\n  --color: #fff;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #25214f;\n}\n\n.form-inline [fullWidth] {\n  flex: 1;\n}\n\n.form-inline > * {\n  margin: 0 1.5rem 1.5rem 0;\n}\n\n.input {\n  height: 3.2rem;\n  background: #e8e8e8;\n  border: 1px solid #b6b6b6;\n  box-sizing: border-box;\n  border-radius: 8px;\n}\n\nlabel {\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 20px;\n  text-align: left;\n  padding-bottom: 5px;\n  color: #676767;\n}\n\n.title {\n  color: #25214f;\n  font-weight: 800;\n}\n\n.central-image {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n}\n\n.sub-title {\n  font-style: normal;\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 20px;\n  text-align: center;\n  color: #676767;\n  width: 60vw;\n}\n\nimg {\n  height: 291px;\n  width: 230px;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-content: space-between;\n}\n\n.img {\n  height: 290px;\n  width: 230px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.we {\n  width: 70vw;\n  margin: auto;\n  font-size: 20px;\n  font-weight: 600;\n  color: black;\n}\n\n.td {\n  font-size: 16px;\n  font-weight: 700;\n  text-align: left;\n  color: #25214f;\n  line-height: 20px;\n}\n\n.bd {\n  text-align: left;\n  font-size: 14px;\n  line-height: 20px;\n  color: #837f7f;\n}\n\n.bdp {\n  text-align: left;\n  font-size: 14px;\n  line-height: 20px;\n  color: #25214f;\n  margin-top: 10px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUdBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0FBREY7O0FBSUE7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFERjs7QUFHQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBQUFGOztBQUdBO0VBQ0UsT0FBQTtBQUFGOztBQUdBO0VBQ0UseUJBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBR0Y7O0FBREE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUlGOztBQUZBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBS0Y7O0FBSEE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBTUYiLCJmaWxlIjoiaW1hZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICAvLyBoZWlnaHQ6IDEuMnJlbTtcclxuICAvLyB3aWR0aDogMS4ycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGhlaWdodDogMzJweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDAuODAwMDAwMDExOTIwOTI5cHggc29saWQgI2NlZDRkYTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q1ZDRkNDtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBjb2xvcjogIzY3Njc2NztcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIGZvbnQtZmFtaWx5OiBNdWxpc2ggIWltcG9ydGFudDtcclxuICAtLXBhZGRpbmctZW5kOiAyMHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxufVxyXG4uYnRuIHtcclxuICAtLWJhY2tncm91bmQ6ICMyNTIxNGY7XHJcbiAgLS1jb2xvcjogI2ZmZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBoZWlnaHQ6IDMuNXJlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMyNTIxNGY7XHJcbn1cclxuXHJcbi5mb3JtLWlubGluZSBbZnVsbFdpZHRoXSB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLmZvcm0taW5saW5lID4gKiB7XHJcbiAgbWFyZ2luOiAwIDEuNXJlbSAxLjVyZW0gMDtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICBoZWlnaHQ6IDMuMnJlbTtcclxuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiNmI2YjY7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgY29sb3I6ICM2NzY3Njc7XHJcbn1cclxuLnRpdGxlIHtcclxuICBjb2xvcjogIzI1MjE0ZjtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4uY2VudHJhbC1pbWFnZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnN1Yi10aXRsZSB7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzY3Njc2NztcclxuICB3aWR0aDogNjB2dztcclxufVxyXG5cclxuaW1nIHtcclxuICBoZWlnaHQ6IDI5MXB4O1xyXG4gIHdpZHRoOiAyMzBweDtcclxufVxyXG4uY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5pbWcge1xyXG4gIGhlaWdodDogMjkwcHg7XHJcbiAgd2lkdGg6IDIzMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4ud2Uge1xyXG4gIHdpZHRoOiA3MHZ3O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLnRkIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGNvbG9yOiAjMjUyMTRmO1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG59XHJcbi5iZCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6ICM4MzdmN2Y7XHJcbn1cclxuLmJkcCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6ICMyNTIxNGY7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 97083:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/register/nuban-register/nuban-register.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".header {\n  color: #25214f;\n  font-size: 16px;\n  font-weight: 800;\n}\n\nsection {\n  text-align: center;\n}\n\n.btn {\n  --background: #25214f;\n  --color: #fff;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #25214f;\n}\n\n.phoneField {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.dialField {\n  width: 30% !important;\n}\n\n.numField {\n  width: 65% !important;\n}\n\n.row {\n  display: flex;\n  flex-direction: column;\n  align-content: flex-start;\n  padding-bottom: 1rem;\n  border-radius: 5px;\n}\n\ninput {\n  height: 15px;\n  width: 100%;\n  border: 0.8000000119px solid #ced4da;\n  border-radius: 5px;\n  background-color: #d5d4d4;\n  padding: 0px 25px;\n}\n\nion-content {\n  font-family: Mulish !important;\n  --padding-end: 20px;\n  --padding-start: 20px;\n}\n\n.form-inline [fullWidth] {\n  flex: 1;\n}\n\n.form-inline > * {\n  margin: 0 1.5rem 1.5rem 0;\n}\n\n.input {\n  height: 3.2rem;\n  background: #e8e8e8;\n  border: 1px solid #b6b6b6;\n  box-sizing: border-box;\n  border-radius: 8px;\n}\n\nlabel {\n  color: #676767 !important;\n  text-align: left;\n}\n\n.title {\n  color: #25214f;\n  font-weight: 800;\n}\n\n.central-image {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n}\n\n.sub-title {\n  color: #676767;\n  text-align: center;\n}\n\n.link {\n  color: #25214f;\n  font-weight: 500;\n  text-decoration: none;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-content: space-between;\n}\n\n.img {\n  height: 290px;\n  width: 230px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.btn2 {\n  --background: #d9ac0b;\n  --color: #25214f;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #d9ac0b;\n}\n\n.we {\n  width: 80vw;\n  margin: auto;\n}\n\n.has {\n  font-style: normal;\n  font-weight: 800;\n  font-size: 24px;\n  line-height: 30px;\n  width: 80vw;\n  margin: auto;\n  color: #000000;\n  text-align: center;\n}\n\n.hassub {\n  font-style: normal;\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 20px;\n  text-align: center;\n  width: 80vw;\n  margin: auto;\n  padding-top: 20px;\n  /* Grey Text */\n  color: #676767;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm51YmFuLXJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUdBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBREY7O0FBVUE7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFQRjs7QUFVQTtFQUNFLE9BQUE7QUFQRjs7QUFVQTtFQUNFLHlCQUFBO0FBUEY7O0FBVUE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFQRjs7QUFVQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7QUFQRjs7QUFTQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQU5GOztBQVNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUFORjs7QUFTQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQU5GOztBQVNBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFORjs7QUFTQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FBTkY7O0FBU0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBTkY7O0FBUUE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FBTEY7O0FBT0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUpGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBSEY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLGNBQUE7QUFKRiIsImZpbGUiOiJudWJhbi1yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIGNvbG9yOiAjMjUyMTRmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG5zZWN0aW9uIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIC0tYmFja2dyb3VuZDogIzI1MjE0ZjtcclxuICAtLWNvbG9yOiAjZmZmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGhlaWdodDogMy41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzI1MjE0ZjtcclxufVxyXG5cclxuLnBob25lRmllbGQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5kaWFsRmllbGQge1xyXG4gIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm51bUZpZWxkIHtcclxuICB3aWR0aDogNjUlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gIC8vIGhlaWdodDogMS4ycmVtO1xyXG4gIC8vIHdpZHRoOiAxLjJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogMC44MDAwMDAwMTE5MjA5MjlweCBzb2xpZCAjY2VkNGRhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVkNGQ0O1xyXG4gIHBhZGRpbmc6IDBweCAyNXB4O1xyXG59XHJcblxyXG4vLyBsYWJlbCB7XHJcbi8vICAgY29sb3I6ICMwMDA7XHJcbi8vICAgdGV4dC1hbGlnbjogbGVmdDtcclxuLy8gICBmb250LXdlaWdodDogODAwO1xyXG4vLyB9XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgZm9udC1mYW1pbHk6IE11bGlzaCAhaW1wb3J0YW50O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDIwcHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xyXG59XHJcblxyXG4uZm9ybS1pbmxpbmUgW2Z1bGxXaWR0aF0ge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5mb3JtLWlubGluZSA+ICoge1xyXG4gIG1hcmdpbjogMCAxLjVyZW0gMS41cmVtIDA7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgaGVpZ2h0OiAzLjJyZW07XHJcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYjZiNmI2O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgY29sb3I6ICM2NzY3NjcgIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi50aXRsZSB7XHJcbiAgY29sb3I6ICMyNTIxNGY7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLmNlbnRyYWwtaW1hZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gIGNvbG9yOiAjNjc2NzY3O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxpbmsge1xyXG4gIGNvbG9yOiAjMjUyMTRmO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5pbWcge1xyXG4gIGhlaWdodDogMjkwcHg7XHJcbiAgd2lkdGg6IDIzMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4uYnRuMiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZDlhYzBiO1xyXG4gIC0tY29sb3I6ICMyNTIxNGY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgaGVpZ2h0OiAzLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZDlhYzBiO1xyXG59XHJcbi53ZSB7XHJcbiAgd2lkdGg6IDgwdnc7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5oYXMge1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICB3aWR0aDogODB2dztcclxuICBtYXJnaW46IGF1dG87XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5oYXNzdWIge1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDgwdnc7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG5cclxuICAvKiBHcmV5IFRleHQgKi9cclxuXHJcbiAgY29sb3I6ICM2NzY3Njc7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 92974:
/*!*********************************************************************!*\
  !*** ./src/app/modules/register/register.component.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".row {\n  display: flex;\n  flex-direction: column;\n  align-content: flex-start;\n  padding-bottom: 1rem;\n  border-radius: 5px;\n}\n\ninput {\n  height: 32px;\n  width: 100%;\n  border: 0.8000000119px solid #ced4da;\n  border-radius: 5px;\n  background-color: #d5d4d4;\n  padding: 25px;\n}\n\nlabel {\n  color: #676767;\n}\n\nion-content {\n  font-family: Mulish !important;\n  --padding-end: 20px;\n  --padding-start: 20px;\n}\n\n.btn {\n  --background: #25214f;\n  --color: #fff;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #25214f;\n}\n\n.form-inline [fullWidth] {\n  flex: 1;\n}\n\n.form-inline > * {\n  margin: 0 1.5rem 1.5rem 0;\n}\n\n.input {\n  height: 3.2rem;\n  background: #E8E8E8;\n  border: 1px solid #B6B6B6;\n  box-sizing: border-box;\n  border-radius: 8px;\n}\n\nlabel {\n  color: #080730 !important;\n  font-size: 1rem !important;\n  font-style: normal !important;\n}\n\n.title {\n  color: #25214f;\n  font-weight: 800;\n}\n\n.central-image {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  margin-top: 30px;\n}\n\n.sub-title {\n  color: #676767;\n  text-align: center;\n  padding: 10px;\n}\n\nimg {\n  height: 291px;\n  width: 230px;\n}\n\n.content {\n  font-family: Mulish !important;\n  display: flex;\n  flex-direction: column;\n  align-content: space-between;\n}\n\n.img {\n  height: 290px;\n  width: 230px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUdBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7QUFERjs7QUFJQTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQURGOztBQUlBO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FBREY7O0FBSUE7RUFDRSxPQUFBO0FBREY7O0FBSUE7RUFDRSx5QkFBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBS0E7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QUFGRjs7QUFJQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFERjs7QUFHQTtFQUNFLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBRiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gIC8vIGhlaWdodDogMS4ycmVtO1xyXG4gIC8vIHdpZHRoOiAxLjJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogMC44MDAwMDAwMTE5MjA5MjlweCBzb2xpZCAjY2VkNGRhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVkNGQ0O1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBjb2xvcjogIzY3Njc2NztcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIGZvbnQtZmFtaWx5OiBNdWxpc2ggIWltcG9ydGFudDtcclxuICAtLXBhZGRpbmctZW5kOiAyMHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMjUyMTRmO1xyXG4gIC0tY29sb3I6ICNmZmY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgaGVpZ2h0OiAzLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjMjUyMTRmO1xyXG59XHJcblxyXG4uZm9ybS1pbmxpbmUgW2Z1bGxXaWR0aF0ge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5mb3JtLWlubGluZSA+ICoge1xyXG4gIG1hcmdpbjogMCAxLjVyZW0gMS41cmVtIDA7XHJcbn1cclxuXHJcbi5pbnB1dHtcclxuICBoZWlnaHQ6IDMuMnJlbTtcclxuICBiYWNrZ3JvdW5kOiAjRThFOEU4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNCNkI2QjY7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcblxyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgY29sb3I6ICMwODA3MzAgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcclxuICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcclxufVxyXG4udGl0bGUge1xyXG4gIGNvbG9yOiAjMjUyMTRmO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5jZW50cmFsLWltYWdlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gIGNvbG9yOiAjNjc2NzY3O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG5pbWcge1xyXG4gIGhlaWdodDogMjkxcHg7XHJcbiAgd2lkdGg6IDIzMHB4O1xyXG59XHJcbi5jb250ZW50IHtcclxuICBmb250LWZhbWlseTogTXVsaXNoICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5pbWcge1xyXG4gIGhlaWdodDogMjkwcHg7XHJcbiAgd2lkdGg6IDIzMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 28985:
/*!************************************************************************************!*\
  !*** ./src/app/modules/register/royal-setup/royal-setup.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".header {\n  color: #25214f;\n  font-size: 16px;\n  font-weight: 800;\n}\n\nsection {\n  text-align: center;\n}\n\n.btn {\n  --background: #25214f;\n  --color: #fff;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #25214f;\n}\n\n.phoneField {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.dialField {\n  width: 30% !important;\n}\n\n.numField {\n  width: 65% !important;\n}\n\n.row {\n  display: flex;\n  flex-direction: column;\n  align-content: flex-start;\n  padding-bottom: 1rem;\n  border-radius: 5px;\n}\n\ninput {\n  height: 15px;\n  border: 0.8000000119px solid #ced4da;\n  border-radius: 5px;\n  background-color: #d5d4d4;\n}\n\nion-content {\n  font-family: Mulish !important;\n  --padding-end: 20px;\n  --padding-start: 20px;\n}\n\n.form-inline [fullWidth] {\n  flex: 1;\n}\n\n.form-inline > * {\n  margin: 0 1.5rem 1.5rem 0;\n}\n\n.input {\n  height: 3.2rem;\n  background: #e8e8e8;\n  border: 1px solid #b6b6b6;\n  box-sizing: border-box;\n  border-radius: 8px;\n  width: 100%;\n}\n\nlabel {\n  color: #676767 !important;\n  text-align: left;\n}\n\n.title {\n  color: #25214f;\n  font-weight: 800;\n}\n\n.central-image {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n}\n\n.sub-title {\n  color: #676767;\n  text-align: center;\n}\n\n.link {\n  color: #25214f;\n  font-weight: 500;\n  text-decoration: none;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-content: space-between;\n}\n\n.img {\n  height: 290px;\n  width: 230px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.btn2 {\n  --background: #d9ac0b;\n  --color: #25214f;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #d9ac0b;\n}\n\n.we {\n  width: 80vw;\n  margin: auto;\n}\n\n.has {\n  font-style: normal;\n  font-weight: 800;\n  font-size: 24px;\n  line-height: 30px;\n  width: 80vw;\n  margin: auto;\n  color: #000000;\n  text-align: center;\n}\n\n.hassub {\n  font-style: normal;\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 20px;\n  text-align: center;\n  width: 80vw;\n  margin: auto;\n  padding-top: 20px;\n  /* Grey Text */\n  color: #676767;\n}\n\ninput[type=radio] {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 16px;\n  height: 16px;\n  border: 2px solid #999;\n  transition: 0.2s all linear;\n  margin-right: 5px;\n  position: relative;\n  top: 4px;\n}\n\ninput[type=radio]:checked {\n  border: 6px solid #25214f;\n  outline: unset !important;\n  /* I added this one for Edge (chromium) support */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJveWFsLXNldHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUdBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBREY7O0FBV0E7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFSRjs7QUFXQTtFQUNFLE9BQUE7QUFSRjs7QUFXQTtFQUNFLHlCQUFBO0FBUkY7O0FBV0E7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBUkY7O0FBV0E7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0FBUkY7O0FBVUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFQRjs7QUFVQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBUEY7O0FBVUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFQRjs7QUFVQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQVBGOztBQVVBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVBGOztBQVNBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBQU5GOztBQVFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFMRjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUpGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxjQUFBO0FBTEY7O0FBT0E7RUFDRSx3QkFBQTtFQUVBLGdCQUFBO0VBR0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFFQSxrQkFBQTtFQUNBLFFBQUE7QUFSRjs7QUFXQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFBMkIsaURBQUE7QUFQN0IiLCJmaWxlIjoicm95YWwtc2V0dXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICBjb2xvcjogIzI1MjE0ZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAtLWJhY2tncm91bmQ6ICMyNTIxNGY7XHJcbiAgLS1jb2xvcjogI2ZmZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBoZWlnaHQ6IDMuNXJlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMyNTIxNGY7XHJcbn1cclxuXHJcbi5waG9uZUZpZWxkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uZGlhbEZpZWxkIHtcclxuICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5udW1GaWVsZCB7XHJcbiAgd2lkdGg6IDY1JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICAvLyBoZWlnaHQ6IDEuMnJlbTtcclxuICAvLyB3aWR0aDogMS4ycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGhlaWdodDogMTVweDtcclxuICBib3JkZXI6IDAuODAwMDAwMDExOTIwOTI5cHggc29saWQgI2NlZDRkYTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q1ZDRkNDtcclxuICAvLyBwYWRkaW5nOiAwcHggMjVweDtcclxufVxyXG5cclxuLy8gbGFiZWwge1xyXG4vLyAgIGNvbG9yOiAjMDAwO1xyXG4vLyAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbi8vICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuLy8gfVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIGZvbnQtZmFtaWx5OiBNdWxpc2ggIWltcG9ydGFudDtcclxuICAtLXBhZGRpbmctZW5kOiAyMHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxufVxyXG5cclxuLmZvcm0taW5saW5lIFtmdWxsV2lkdGhdIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4uZm9ybS1pbmxpbmUgPiAqIHtcclxuICBtYXJnaW46IDAgMS41cmVtIDEuNXJlbSAwO1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIGhlaWdodDogMy4ycmVtO1xyXG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2I2YjZiNjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGNvbG9yOiAjNjc2NzY3ICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4udGl0bGUge1xyXG4gIGNvbG9yOiAjMjUyMTRmO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5jZW50cmFsLWltYWdlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uc3ViLXRpdGxlIHtcclxuICBjb2xvcjogIzY3Njc2NztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5saW5rIHtcclxuICBjb2xvcjogIzI1MjE0ZjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uaW1nIHtcclxuICBoZWlnaHQ6IDI5MHB4O1xyXG4gIHdpZHRoOiAyMzBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuLmJ0bjIge1xyXG4gIC0tYmFja2dyb3VuZDogI2Q5YWMwYjtcclxuICAtLWNvbG9yOiAjMjUyMTRmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGhlaWdodDogMy41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2Q5YWMwYjtcclxufVxyXG4ud2Uge1xyXG4gIHdpZHRoOiA4MHZ3O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4uaGFzIHtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDgwdnc7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaGFzc3ViIHtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiA4MHZ3O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuXHJcbiAgLyogR3JleSBUZXh0ICovXHJcblxyXG4gIGNvbG9yOiAjNjc2NzY3O1xyXG59XHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG5cclxuICAvLyBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG5cclxuICBib3JkZXI6IDJweCBzb2xpZCAjOTk5O1xyXG4gIHRyYW5zaXRpb246IDAuMnMgYWxsIGxpbmVhcjtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogNHB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCB7XHJcbiAgYm9yZGVyOiA2cHggc29saWQgIzI1MjE0ZjtcclxuICBvdXRsaW5lOiB1bnNldCAhaW1wb3J0YW50OyAvKiBJIGFkZGVkIHRoaXMgb25lIGZvciBFZGdlIChjaHJvbWl1bSkgc3VwcG9ydCAqL1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 17382:
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/register/select-account-type/select-account-type.component.scss?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".header {\n  color: #25214f;\n  font-size: 16px;\n  font-weight: 800;\n}\n\nsection {\n  text-align: center;\n}\n\nion-content {\n  font-family: Mulish !important;\n  --padding-end: 20px;\n  --padding-start: 20px;\n}\n\n.btn {\n  --background: #25214f;\n  --color: #fff;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #25214f;\n}\n\n.active {\n  background-color: #e0feea;\n}\n\n.notActive {\n  background-color: #f8f8f8;\n}\n\n.card {\n  width: 90vw;\n  border-radius: 10px;\n  margin: 20px auto;\n  box-shadow: 0 10px 6px -6px #777;\n}\n\n.tsx {\n  width: 85%;\n  font-size: 14px;\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC1hY2NvdW50LXR5cGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUFDRjs7QUFDQTtFQUNFLHlCQUFBO0FBRUY7O0FBQUE7RUFDRSx5QkFBQTtBQUdGOztBQURBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFHQSxnQ0FBQTtBQUlGOztBQUZBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBS0YiLCJmaWxlIjoic2VsZWN0LWFjY291bnQtdHlwZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIGNvbG9yOiAjMjUyMTRmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG5zZWN0aW9uIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICBmb250LWZhbWlseTogTXVsaXNoICFpbXBvcnRhbnQ7XHJcbiAgLS1wYWRkaW5nLWVuZDogMjBweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIC0tYmFja2dyb3VuZDogIzI1MjE0ZjtcclxuICAtLWNvbG9yOiAjZmZmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGhlaWdodDogMy41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzI1MjE0ZjtcclxufVxyXG4uYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBmZWVhO1xyXG59XHJcbi5ub3RBY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XHJcbn1cclxuLmNhcmQge1xyXG4gIHdpZHRoOiA5MHZ3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggNnB4IC02cHggIzc3NztcclxuICAtbW96LWJveC1zaGFkb3c6IDAgMTBweCA2cHggLTZweCAjNzc3O1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCA2cHggLTZweCAjNzc3O1xyXG59XHJcbi50c3gge1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 40069:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/register/verify-bvn/verify-bvn.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".header {\n  color: #25214f;\n  font-size: 16px;\n  font-weight: 800;\n}\n\nsection {\n  text-align: center;\n}\n\n.btn {\n  --background: #25214f;\n  --color: #fff;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #25214f;\n}\n\n.row {\n  display: flex;\n  flex-direction: column;\n  align-content: flex-start;\n  padding-bottom: 1rem;\n  border-radius: 5px;\n}\n\ninput {\n  height: 32px;\n  width: 100%;\n  border: 0.8000000119px solid #ced4da;\n  border-radius: 5px;\n  background-color: #d5d4d4;\n  padding: 25px;\n}\n\nlabel {\n  color: #676767;\n  text-align: left;\n}\n\nion-content {\n  font-family: Mulish !important;\n  --padding-end: 20px;\n  --padding-start: 20px;\n}\n\n.form-inline [fullWidth] {\n  flex: 1;\n}\n\n.form-inline > * {\n  margin: 0 1.5rem 1.5rem 0;\n}\n\n.input {\n  height: 3.2rem;\n  background: #e8e8e8;\n  border: 1px solid #b6b6b6;\n  box-sizing: border-box;\n  border-radius: 8px;\n}\n\nlabel {\n  color: #080730 !important;\n  font-size: 14px !important;\n  font-style: normal !important;\n  padding-bottom: 5px;\n}\n\n.title {\n  color: #25214f;\n  font-weight: 800;\n}\n\n.central-image {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n}\n\n.sub {\n  color: #676767;\n  text-align: center;\n  width: 70vw !important;\n  margin: auto !important;\n}\n\n.link {\n  color: #d9ac0b;\n  font-weight: 500;\n  text-decoration: none;\n}\n\nimg {\n  height: 291px;\n  width: 230px;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-content: space-between;\n}\n\n.img {\n  height: 290px;\n  width: 230px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.active {\n  background-color: #e0feea;\n}\n\n.notActive {\n  background-color: #f8f8f8;\n}\n\n.card {\n  width: 85vw;\n  border-radius: 10px;\n  margin: 20px auto;\n  box-shadow: 0 10px 6px -6px #777;\n}\n\n.tsx {\n  width: 85%;\n  font-size: 14px;\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmlmeS1idm4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBR0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFERjs7QUFJQTtFQUNFLE9BQUE7QUFERjs7QUFJQTtFQUNFLHlCQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBREY7O0FBR0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFBRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUNBO0VBQ0UseUJBQUE7QUFFRjs7QUFBQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBR0EsZ0NBQUE7QUFHRjs7QUFEQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUlGIiwiZmlsZSI6InZlcmlmeS1idm4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICBjb2xvcjogIzI1MjE0ZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAtLWJhY2tncm91bmQ6ICMyNTIxNGY7XHJcbiAgLS1jb2xvcjogI2ZmZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBoZWlnaHQ6IDMuNXJlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMyNTIxNGY7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gIC8vIGhlaWdodDogMS4ycmVtO1xyXG4gIC8vIHdpZHRoOiAxLjJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogMC44MDAwMDAwMTE5MjA5MjlweCBzb2xpZCAjY2VkNGRhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVkNGQ0O1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBjb2xvcjogIzY3Njc2NztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgZm9udC1mYW1pbHk6IE11bGlzaCAhaW1wb3J0YW50O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDIwcHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xyXG59XHJcblxyXG4uZm9ybS1pbmxpbmUgW2Z1bGxXaWR0aF0ge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5mb3JtLWlubGluZSA+ICoge1xyXG4gIG1hcmdpbjogMCAxLjVyZW0gMS41cmVtIDA7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgaGVpZ2h0OiAzLjJyZW07XHJcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYjZiNmI2O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgY29sb3I6ICMwODA3MzAgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcbi50aXRsZSB7XHJcbiAgY29sb3I6ICMyNTIxNGY7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLmNlbnRyYWwtaW1hZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdWIge1xyXG4gIGNvbG9yOiAjNjc2NzY3O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogNzB2dyAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGluayB7XHJcbiAgY29sb3I6ICNkOWFjMGI7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgaGVpZ2h0OiAyOTFweDtcclxuICB3aWR0aDogMjMwcHg7XHJcbn1cclxuLmNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uaW1nIHtcclxuICBoZWlnaHQ6IDI5MHB4O1xyXG4gIHdpZHRoOiAyMzBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGZlZWE7XHJcbn1cclxuLm5vdEFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcclxufVxyXG4uY2FyZCB7XHJcbiAgd2lkdGg6IDg1dnc7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCA2cHggLTZweCAjNzc3O1xyXG4gIC1tb3otYm94LXNoYWRvdzogMCAxMHB4IDZweCAtNnB4ICM3Nzc7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDZweCAtNnB4ICM3Nzc7XHJcbn1cclxuLnRzeCB7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 89883:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/register/verify-email/verify-email.component.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".header {\n  color: #25214f;\n  font-size: 16px;\n  font-weight: 800;\n}\n\nsection {\n  text-align: center;\n}\n\n.btn {\n  --background: #25214f;\n  --color: #fff;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #25214f;\n}\n\n.row {\n  display: flex;\n  flex-direction: column;\n  align-content: flex-start;\n  padding-bottom: 1rem;\n  border-radius: 5px;\n}\n\ninput {\n  height: 32px;\n  width: 100%;\n  border: 0.8000000119px solid #ced4da;\n  border-radius: 5px;\n  background-color: #d5d4d4;\n  padding: 25px;\n}\n\nion-content {\n  font-family: Mulish !important;\n  --padding-end: 20px;\n  --padding-start: 20px;\n}\n\n.form-inline [fullWidth] {\n  flex: 1;\n}\n\n.form-inline > * {\n  margin: 0 1.5rem 1.5rem 0;\n}\n\n.input {\n  height: 3.2rem;\n  background: #e8e8e8;\n  border: 1px solid #b6b6b6;\n  box-sizing: border-box;\n  border-radius: 8px;\n}\n\nlabel {\n  color: #676767 !important;\n  font-style: normal !important;\n  text-align: left;\n}\n\n.title {\n  color: #25214f;\n  font-weight: 800;\n}\n\n.central-image {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n}\n\n.sub-title {\n  color: #676767;\n  text-align: center;\n}\n\n.link {\n  color: #25214f;\n  font-weight: 500;\n  text-decoration: none;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-content: space-between;\n}\n\n.btn2 {\n  --background: #d9ac0b;\n  --color: #25214f;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #25214f;\n}\n\n.img {\n  height: 290px;\n  width: 230px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.icon {\n  height: 50px;\n  width: 50px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmlmeS1lbWFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFHQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FBREY7O0FBSUE7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFERjs7QUFJQTtFQUNFLE9BQUE7QUFERjs7QUFJQTtFQUNFLHlCQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQURGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFBRjs7QUFHQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBRiIsImZpbGUiOiJ2ZXJpZnktZW1haWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICBjb2xvcjogIzI1MjE0ZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAtLWJhY2tncm91bmQ6ICMyNTIxNGY7XHJcbiAgLS1jb2xvcjogI2ZmZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBoZWlnaHQ6IDMuNXJlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMyNTIxNGY7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gIC8vIGhlaWdodDogMS4ycmVtO1xyXG4gIC8vIHdpZHRoOiAxLjJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogMC44MDAwMDAwMTE5MjA5MjlweCBzb2xpZCAjY2VkNGRhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVkNGQ0O1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICBmb250LWZhbWlseTogTXVsaXNoICFpbXBvcnRhbnQ7XHJcbiAgLS1wYWRkaW5nLWVuZDogMjBweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWlubGluZSBbZnVsbFdpZHRoXSB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLmZvcm0taW5saW5lID4gKiB7XHJcbiAgbWFyZ2luOiAwIDEuNXJlbSAxLjVyZW0gMDtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICBoZWlnaHQ6IDMuMnJlbTtcclxuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiNmI2YjY7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBjb2xvcjogIzY3Njc2NyAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLnRpdGxlIHtcclxuICBjb2xvcjogIzI1MjE0ZjtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4uY2VudHJhbC1pbWFnZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnN1Yi10aXRsZSB7XHJcbiAgY29sb3I6ICM2NzY3Njc7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubGluayB7XHJcbiAgY29sb3I6ICMyNTIxNGY7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmJ0bjIge1xyXG4gIC0tYmFja2dyb3VuZDogI2Q5YWMwYjtcclxuICAtLWNvbG9yOiAjMjUyMTRmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGhlaWdodDogMy41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzI1MjE0ZjtcclxufVxyXG5cclxuLmltZyB7XHJcbiAgaGVpZ2h0OiAyOTBweDtcclxuICB3aWR0aDogMjMwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 93010:
/*!************************************************************************************!*\
  !*** ./src/app/modules/register/verify-info/verify-info.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".header {\n  color: #25214f;\n  font-size: 16px;\n  font-weight: 800;\n}\n\nsection {\n  text-align: center;\n}\n\n.btn {\n  --background: #25214f;\n  --color: #fff;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #25214f;\n}\n\n.row {\n  display: flex;\n  flex-direction: column;\n  align-content: flex-start;\n  padding-bottom: 1rem;\n  border-radius: 5px;\n}\n\ninput {\n  height: 32px;\n  width: 100%;\n  border: 0.8000000119px solid #ced4da;\n  border-radius: 5px;\n  background-color: #d5d4d4;\n  padding: 25px;\n}\n\nlabel {\n  color: #000;\n  text-align: left;\n  font-weight: 800;\n}\n\nion-content {\n  font-family: Mulish !important;\n  --padding-end: 20px;\n  --padding-start: 20px;\n}\n\n.form-inline [fullWidth] {\n  flex: 1;\n}\n\n.form-inline > * {\n  margin: 0 1.5rem 1.5rem 0;\n}\n\n.input {\n  height: 3.2rem;\n  background: #e8e8e8;\n  border: 1px solid #b6b6b6;\n  box-sizing: border-box;\n  border-radius: 8px;\n}\n\nlabel {\n  color: #080730 !important;\n  font-size: 1rem !important;\n  font-style: normal !important;\n}\n\n.title {\n  color: #25214f;\n  font-weight: 800;\n}\n\n.central-image {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n}\n\n.sub-title {\n  color: #676767;\n  text-align: center;\n}\n\n.link {\n  color: #25214f;\n  font-weight: 500;\n  text-decoration: none;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-content: space-between;\n}\n\n.btn2 {\n  --background: #d9ac0b;\n  --color: #25214f;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #25214f;\n}\n\n.img {\n  height: 290px;\n  width: 230px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmlmeS1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUdBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFERjs7QUFJQTtFQUNFLE9BQUE7QUFERjs7QUFJQTtFQUNFLHlCQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtBQURGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFBRjs7QUFHQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBRiIsImZpbGUiOiJ2ZXJpZnktaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIGNvbG9yOiAjMjUyMTRmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG5zZWN0aW9uIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIC0tYmFja2dyb3VuZDogIzI1MjE0ZjtcclxuICAtLWNvbG9yOiAjZmZmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGhlaWdodDogMy41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzI1MjE0ZjtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgLy8gaGVpZ2h0OiAxLjJyZW07XHJcbiAgLy8gd2lkdGg6IDEuMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAwLjgwMDAwMDAxMTkyMDkyOXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNWQ0ZDQ7XHJcbiAgcGFkZGluZzogMjVweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIGZvbnQtZmFtaWx5OiBNdWxpc2ggIWltcG9ydGFudDtcclxuICAtLXBhZGRpbmctZW5kOiAyMHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxufVxyXG5cclxuLmZvcm0taW5saW5lIFtmdWxsV2lkdGhdIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4uZm9ybS1pbmxpbmUgPiAqIHtcclxuICBtYXJnaW46IDAgMS41cmVtIDEuNXJlbSAwO1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIGhlaWdodDogMy4ycmVtO1xyXG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2I2YjZiNjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGNvbG9yOiAjMDgwNzMwICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRpdGxlIHtcclxuICBjb2xvcjogIzI1MjE0ZjtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4uY2VudHJhbC1pbWFnZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnN1Yi10aXRsZSB7XHJcbiAgY29sb3I6ICM2NzY3Njc7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubGluayB7XHJcbiAgY29sb3I6ICMyNTIxNGY7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmJ0bjIge1xyXG4gIC0tYmFja2dyb3VuZDogI2Q5YWMwYjtcclxuICAtLWNvbG9yOiAjMjUyMTRmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGhlaWdodDogMy41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzI1MjE0ZjtcclxufVxyXG5cclxuLmltZyB7XHJcbiAgaGVpZ2h0OiAyOTBweDtcclxuICB3aWR0aDogMjMwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 95:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/register/verify-phone/verify-phone.component.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".header {\n  color: #25214f;\n  font-size: 16px;\n  font-weight: 800;\n}\n\nsection {\n  text-align: center;\n}\n\n.btn {\n  --background: #25214f;\n  --color: #fff;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #25214f;\n}\n\n.row {\n  display: flex;\n  flex-direction: column;\n  align-content: flex-start;\n  padding-bottom: 1rem;\n  border-radius: 5px;\n}\n\ninput {\n  height: 32px;\n  width: 100%;\n  border: 0.8000000119px solid #ced4da;\n  border-radius: 5px;\n  background-color: #d5d4d4;\n  padding: 25px;\n}\n\nlabel {\n  color: #676767 !important;\n  font-style: normal !important;\n  text-align: left;\n}\n\nion-content {\n  font-family: Mulish !important;\n  --padding-end: 20px;\n  --padding-start: 20px;\n}\n\n.form-inline [fullWidth] {\n  flex: 1;\n}\n\n.form-inline > * {\n  margin: 0 1.5rem 1.5rem 0;\n}\n\n.input {\n  height: 3.2rem;\n  background: #e8e8e8;\n  border: 1px solid #b6b6b6;\n  box-sizing: border-box;\n  border-radius: 8px;\n}\n\n.title {\n  color: #25214f;\n  font-weight: 800;\n}\n\n.central-image {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n}\n\n.sub-title {\n  color: #676767;\n  text-align: center;\n}\n\n.link {\n  color: #25214f;\n  font-weight: 500;\n  text-decoration: none;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-content: space-between;\n}\n\n.btn2 {\n  --background: #d9ac0b;\n  --color: #25214f;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #25214f;\n}\n\n.img {\n  height: 290px;\n  width: 230px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmlmeS1waG9uZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFHQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FBREY7O0FBSUE7RUFDRSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQURGOztBQUlBO0VBQ0UsT0FBQTtBQURGOztBQUlBO0VBQ0UseUJBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFERjs7QUFJQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFERiIsImZpbGUiOiJ2ZXJpZnktcGhvbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICBjb2xvcjogIzI1MjE0ZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAtLWJhY2tncm91bmQ6ICMyNTIxNGY7XHJcbiAgLS1jb2xvcjogI2ZmZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBoZWlnaHQ6IDMuNXJlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMyNTIxNGY7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gIC8vIGhlaWdodDogMS4ycmVtO1xyXG4gIC8vIHdpZHRoOiAxLjJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogMC44MDAwMDAwMTE5MjA5MjlweCBzb2xpZCAjY2VkNGRhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVkNGQ0O1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBjb2xvcjogIzY3Njc2NyAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICBmb250LWZhbWlseTogTXVsaXNoICFpbXBvcnRhbnQ7XHJcbiAgLS1wYWRkaW5nLWVuZDogMjBweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWlubGluZSBbZnVsbFdpZHRoXSB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLmZvcm0taW5saW5lID4gKiB7XHJcbiAgbWFyZ2luOiAwIDEuNXJlbSAxLjVyZW0gMDtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICBoZWlnaHQ6IDMuMnJlbTtcclxuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiNmI2YjY7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgY29sb3I6ICMyNTIxNGY7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLmNlbnRyYWwtaW1hZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gIGNvbG9yOiAjNjc2NzY3O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxpbmsge1xyXG4gIGNvbG9yOiAjMjUyMTRmO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5idG4yIHtcclxuICAtLWJhY2tncm91bmQ6ICNkOWFjMGI7XHJcbiAgLS1jb2xvcjogIzI1MjE0ZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBoZWlnaHQ6IDMuNXJlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMyNTIxNGY7XHJcbn1cclxuXHJcbi5pbWcge1xyXG4gIGhlaWdodDogMjkwcHg7XHJcbiAgd2lkdGg6IDIzMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 76526:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/reset-password/reset-password.component.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".row {\n  display: flex;\n  flex-direction: column;\n  align-content: flex-start;\n  padding-bottom: 1rem;\n  border-radius: 5px;\n}\n\ninput {\n  height: 32px;\n  width: 100%;\n  border: 0.8000000119px solid #ced4da;\n  border-radius: 5px;\n  background-color: #d5d4d4;\n  padding: 25px;\n}\n\nlabel {\n  color: #676767;\n}\n\nion-content {\n  font-family: Mulish !important;\n  --padding-end: 20px;\n  --padding-start: 20px;\n}\n\n.btn {\n  --background: #25214f;\n  --color: #fff;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #25214f;\n}\n\n.form-inline [fullWidth] {\n  flex: 1;\n}\n\n.form-inline > * {\n  margin: 0 1.5rem 1.5rem 0;\n}\n\nlabel {\n  color: #080730 !important;\n  font-size: 1rem !important;\n  font-style: normal !important;\n}\n\n.title {\n  color: #25214f;\n  font-weight: 800;\n}\n\n.central-image {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n}\n\n.sub-title {\n  color: #676767;\n}\n\nimg {\n  height: 291px;\n  width: 230px;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-content: space-between;\n}\n\n.img {\n  height: 290px;\n  width: 230px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUdBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7QUFERjs7QUFJQTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQURGOztBQUlBO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FBREY7O0FBSUE7RUFDRSxPQUFBO0FBREY7O0FBSUE7RUFDRSx5QkFBQTtBQURGOztBQUlBO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0FBREY7O0FBR0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJyZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gIC8vIGhlaWdodDogMS4ycmVtO1xyXG4gIC8vIHdpZHRoOiAxLjJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogMC44MDAwMDAwMTE5MjA5MjlweCBzb2xpZCAjY2VkNGRhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVkNGQ0O1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBjb2xvcjogIzY3Njc2NztcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIGZvbnQtZmFtaWx5OiBNdWxpc2ggIWltcG9ydGFudDtcclxuICAtLXBhZGRpbmctZW5kOiAyMHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMjUyMTRmO1xyXG4gIC0tY29sb3I6ICNmZmY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgaGVpZ2h0OiAzLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjMjUyMTRmO1xyXG59XHJcblxyXG4uZm9ybS1pbmxpbmUgW2Z1bGxXaWR0aF0ge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5mb3JtLWlubGluZSA+ICoge1xyXG4gIG1hcmdpbjogMCAxLjVyZW0gMS41cmVtIDA7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBjb2xvcjogIzA4MDczMCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG59XHJcbi50aXRsZSB7XHJcbiAgY29sb3I6ICMyNTIxNGY7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLmNlbnRyYWwtaW1hZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gIGNvbG9yOiAjNjc2NzY3O1xyXG59XHJcblxyXG5pbWcge1xyXG4gIGhlaWdodDogMjkxcHg7XHJcbiAgd2lkdGg6IDIzMHB4O1xyXG59XHJcbi5jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmltZyB7XHJcbiAgaGVpZ2h0OiAyOTBweDtcclxuICB3aWR0aDogMjMwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 81768:
/*!*******************************************************************!*\
  !*** ./src/app/modules/support/support.component.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".all {\n  width: 85vw;\n  margin: auto;\n}\n\n.head {\n  display: flex;\n  justify-content: space-between;\n}\n\n.line {\n  width: 85vw;\n  height: 1px;\n  background-color: #ccc8c8;\n  margin: 10px 0;\n}\n\n.subs {\n  font-size: 13px;\n  padding: 5px 0;\n  color: #25214f;\n}\n\n.phone {\n  margin: 15px 0;\n}\n\ntd,\nth {\n  text-align: left;\n  padding: 5px;\n  font-size: 13px;\n  color: #25214f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1cHBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBRUY7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBR0Y7O0FBREE7RUFDRSxjQUFBO0FBSUY7O0FBRkE7O0VBRUUsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFLRiIsImZpbGUiOiJzdXBwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsbCB7XHJcbiAgd2lkdGg6IDg1dnc7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5oZWFkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmxpbmUge1xyXG4gIHdpZHRoOiA4NXZ3O1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDQsIDIwMCwgMjAwKTtcclxuICBtYXJnaW46IDEwcHggMDtcclxufVxyXG4uc3VicyB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIHBhZGRpbmc6IDVweCAwO1xyXG4gIGNvbG9yOiAjMjUyMTRmO1xyXG59XHJcbi5waG9uZSB7XHJcbiAgbWFyZ2luOiAxNXB4IDA7XHJcbn1cclxudGQsXHJcbnRoIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgY29sb3I6ICMyNTIxNGY7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 96323:
/*!****************************************************************!*\
  !*** ./src/app/modules/transfer/transfer.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-toggle {\n  --height: 15px;\n  --background-checked: #25214f;\n}\n\n.inner-icon {\n  color: white;\n}\n\n.icon-container {\n  border-radius: 10%;\n  background-color: #25214f;\n  padding: 5px;\n}\n\n.row-one {\n  border: 0.8000000119px solid #ced4da;\n  border-radius: 5px;\n  margin-top: 50px;\n  padding: 10px;\n}\n\n.header {\n  color: #25214f;\n  font-size: 16px;\n  font-weight: 800;\n}\n\nsection {\n  text-align: center;\n}\n\n.phoneField {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.dialField {\n  width: 30% !important;\n}\n\n.numField {\n  width: 65% !important;\n}\n\n.row {\n  display: flex;\n  flex-direction: column;\n  align-content: flex-start;\n  padding-bottom: 1rem;\n  border-radius: 5px;\n}\n\ninput {\n  height: 15px;\n  width: 100%;\n  border: 0.8000000119px solid #ced4da;\n  border-radius: 5px;\n  background-color: #d5d4d4;\n  padding: 0px 25px;\n}\n\nion-content {\n  font-family: Mulish !important;\n}\n\n.form-inline [fullWidth] {\n  flex: 1;\n}\n\nion-button {\n  --background: #d9ac0b;\n  --color: #fff !important;\n  color: #25214f;\n}\n\n.active {\n  width: 100%;\n  --border-radius: none;\n  --background: #25214f;\n  --color: white;\n  --color-activated: white;\n  color: white;\n}\n\n.form-inline > * {\n  margin: 0 1.5rem 1.5rem 0;\n}\n\n.input {\n  height: 3.2rem;\n  background: #e8e8e8;\n  border: 1px solid #b6b6b6;\n  box-sizing: border-box;\n  border-radius: 8px;\n}\n\nlabel {\n  color: #676767 !important;\n  text-align: left;\n}\n\n.title {\n  color: #25214f;\n  font-weight: 800;\n}\n\n.central-image {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  margin-top: 30px;\n}\n\n.sub-title {\n  color: #676767;\n  text-align: center;\n}\n\n.link {\n  color: #25214f;\n  font-weight: 500;\n  text-decoration: none;\n}\n\n.img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.btn2 {\n  --background: #d9ac0b;\n  --color: #25214f;\n  color: #25214f;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #d9ac0b;\n}\n\n.content {\n  font-family: Mulish !important;\n  display: flex;\n  flex-direction: column;\n  align-content: space-between;\n}\n\n.img {\n  height: 290px;\n  width: 230px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.title {\n  color: #25214f;\n  font-weight: 800;\n}\n\n.central-image {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n}\n\n.sub-title {\n  color: #676767;\n}\n\nimg {\n  height: 291px;\n  width: 230px;\n}\n\n.tit {\n  font-family: Mulish !important;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 24px;\n  line-height: 30px;\n  text-align: center;\n  color: #25214f;\n}\n\n.subTit {\n  font-family: Mulish !important;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 15px;\n  line-height: 23px;\n  text-align: center;\n  color: #676767;\n  width: 300px;\n  margin-top: 20px;\n  margin-bottom: 40px;\n  margin: auto;\n}\n\n.btn {\n  --background: #25214f;\n  --color: #fff;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #25214f;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zZmVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtBQUNGOztBQUVBO0VBRUUsWUFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFBRjs7QUFJQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQURGOztBQUlBO0VBQ0UscUJBQUE7QUFERjs7QUFJQTtFQUNFLHFCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBR0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFIRjs7QUFZQTtFQUNFLDhCQUFBO0FBVEY7O0FBWUE7RUFDRSxPQUFBO0FBVEY7O0FBWUE7RUFDRSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtBQVRGOztBQVlBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0FBVEY7O0FBWUE7RUFDRSx5QkFBQTtBQVRGOztBQVlBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBVEY7O0FBWUE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0FBVEY7O0FBV0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFSRjs7QUFXQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFSRjs7QUFXQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQVJGOztBQVdBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFSRjs7QUFXQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBUkY7O0FBVUE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBQVBGOztBQWNBO0VBQ0UsOEJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQVhGOztBQWNBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVhGOztBQWNBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBWEY7O0FBY0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQVhGOztBQWNBO0VBQ0UsY0FBQTtBQVhGOztBQWNBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFYRjs7QUFhQTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQVZGOztBQVlBO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBVEY7O0FBV0E7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0FBUkYiLCJmaWxlIjoidHJhbnNmZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvZ2dsZSB7XHJcbiAgLS1oZWlnaHQ6IDE1cHg7XHJcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICMyNTIxNGY7XHJcbn1cclxuXHJcbi5pbm5lci1pY29uIHtcclxuICAvLyBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaWNvbi1jb250YWluZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyMTRmO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLnJvdy1vbmUge1xyXG4gIGJvcmRlcjogMC44MDAwMDAwMTE5MjA5MjlweCBzb2xpZCAjY2VkNGRhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2Q1ZDRkNDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgY29sb3I6ICMyNTIxNGY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBob25lRmllbGQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5kaWFsRmllbGQge1xyXG4gIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm51bUZpZWxkIHtcclxuICB3aWR0aDogNjUlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gIC8vIGhlaWdodDogMS4ycmVtO1xyXG4gIC8vIHdpZHRoOiAxLjJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogMC44MDAwMDAwMTE5MjA5MjlweCBzb2xpZCAjY2VkNGRhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVkNGQ0O1xyXG4gIHBhZGRpbmc6IDBweCAyNXB4O1xyXG59XHJcblxyXG4vLyBsYWJlbCB7XHJcbi8vICAgY29sb3I6ICMwMDA7XHJcbi8vICAgdGV4dC1hbGlnbjogbGVmdDtcclxuLy8gICBmb250LXdlaWdodDogODAwO1xyXG4vLyB9XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgZm9udC1mYW1pbHk6IE11bGlzaCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9ybS1pbmxpbmUgW2Z1bGxXaWR0aF0ge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIC0tYmFja2dyb3VuZDogI2Q5YWMwYjtcclxuICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICMyNTIxNGY7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogbm9uZTtcclxuICAtLWJhY2tncm91bmQ6ICMyNTIxNGY7XHJcbiAgLS1jb2xvcjogd2hpdGU7XHJcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6IHdoaXRlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmZvcm0taW5saW5lID4gKiB7XHJcbiAgbWFyZ2luOiAwIDEuNXJlbSAxLjVyZW0gMDtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICBoZWlnaHQ6IDMuMnJlbTtcclxuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiNmI2YjY7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBjb2xvcjogIzY3Njc2NyAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLnRpdGxlIHtcclxuICBjb2xvcjogIzI1MjE0ZjtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4uY2VudHJhbC1pbWFnZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uc3ViLXRpdGxlIHtcclxuICBjb2xvcjogIzY3Njc2NztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5saW5rIHtcclxuICBjb2xvcjogIzI1MjE0ZjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmltZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbi5idG4yIHtcclxuICAtLWJhY2tncm91bmQ6ICNkOWFjMGI7XHJcbiAgLS1jb2xvcjogIzI1MjE0ZjtcclxuICBjb2xvcjogIzI1MjE0ZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBoZWlnaHQ6IDMuNXJlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNkOWFjMGI7XHJcbn1cclxuXHJcbi8vIGlvbi1idXR0b24ge1xyXG4vLyAgIC0tYm9yZGVyLXJhZGl1czogMTVweDtcclxuLy8gfVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGZvbnQtZmFtaWx5OiBNdWxpc2ggIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmltZyB7XHJcbiAgaGVpZ2h0OiAyOTBweDtcclxuICB3aWR0aDogMjMwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGNvbG9yOiAjMjUyMTRmO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5jZW50cmFsLWltYWdlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uc3ViLXRpdGxlIHtcclxuICBjb2xvcjogIzY3Njc2NztcclxufVxyXG5cclxuaW1nIHtcclxuICBoZWlnaHQ6IDI5MXB4O1xyXG4gIHdpZHRoOiAyMzBweDtcclxufVxyXG4udGl0IHtcclxuICBmb250LWZhbWlseTogTXVsaXNoICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzI1MjE0ZjtcclxufVxyXG4uc3ViVGl0IHtcclxuICBmb250LWZhbWlseTogTXVsaXNoICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzY3Njc2NztcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4uYnRuIHtcclxuICAtLWJhY2tncm91bmQ6ICMyNTIxNGY7XHJcbiAgLS1jb2xvcjogI2ZmZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBoZWlnaHQ6IDMuNXJlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMyNTIxNGY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 92938:
/*!*******************************************************************!*\
  !*** ./src/app/modules/welcome/welcome.component.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".btn {\n  --background: #25214f;\n  --color: #fff;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #25214f;\n}\n\nion-button {\n  --border-radius: 15px;\n}\n\n.img {\n  height: 290px;\n  width: 230px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nion-content {\n  --padding-end: 20px;\n  --padding-start: 20px;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-content: space-between;\n}\n\n.title {\n  color: #25214f;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 36px;\n  line-height: 45px;\n}\n\nimg {\n  height: 291px;\n  width: 230px;\n}\n\n.sub {\n  font-style: normal;\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 20px;\n  /* Grey Text */\n  color: #676767;\n}\n\n.skip {\n  font-style: normal;\n  font-weight: 300;\n  font-size: 18px;\n  line-height: 23px;\n  text-align: right;\n  color: #fee178;\n  cursor: pointer;\n  padding: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLGNBQUE7QUFBRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6IndlbGNvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcclxuICAtLWJhY2tncm91bmQ6ICMyNTIxNGY7XHJcbiAgLS1jb2xvcjogI2ZmZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBoZWlnaHQ6IDMuNXJlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMyNTIxNGY7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuLmltZyB7XHJcbiAgaGVpZ2h0OiAyOTBweDtcclxuICB3aWR0aDogMjMwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1wYWRkaW5nLWVuZDogMjBweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBjb2xvcjogIzI1MjE0ZjtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgaGVpZ2h0OiAyOTFweDtcclxuICB3aWR0aDogMjMwcHg7XHJcbn1cclxuLnN1YiB7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG5cclxuICAvKiBHcmV5IFRleHQgKi9cclxuXHJcbiAgY29sb3I6ICM2NzY3Njc7XHJcbn1cclxuLnNraXAge1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBsaW5lLWhlaWdodDogMjNweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBjb2xvcjogI2ZlZTE3ODtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogMTAlO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 94710:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 20430:
/*!*************************************************************!*\
  !*** ./src/app/withdraw/withdraw.component.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".btn {\n  --background: #25214f;\n  --color: #fff;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #25214f;\n}\n\nion-toggle {\n  --height: 15px;\n  --background-checked: #25214f;\n}\n\n.inner-icon {\n  color: #fee178;\n}\n\n.icon-container {\n  border-radius: 10%;\n  background-color: #25214f;\n  padding: 5px;\n}\n\n.row-one {\n  border: 0.8000000119px solid #ced4da;\n  border-radius: 5px;\n  margin-top: 50px;\n  padding: 10px;\n}\n\n.header {\n  color: #25214f;\n  font-size: 16px;\n  font-weight: 800;\n}\n\nsection {\n  text-align: center;\n}\n\n.phoneField {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.dialField {\n  width: 30% !important;\n}\n\n.numField {\n  width: 65% !important;\n}\n\n.row {\n  display: flex;\n  flex-direction: column;\n  align-content: flex-start;\n  padding-bottom: 1rem;\n  border-radius: 5px;\n}\n\ninput {\n  height: 15px;\n  width: 100%;\n  border: 0.8000000119px solid #ced4da;\n  border-radius: 5px;\n  background-color: #d5d4d4;\n  padding: 0px 25px;\n}\n\nion-content {\n  font-family: Mulish !important;\n  --padding-end: 20px;\n  --padding-start: 20px;\n}\n\n.form-inline [fullWidth] {\n  flex: 1;\n}\n\nion-button {\n  --background: #fee178;\n  --color: #fff !important;\n}\n\n.active {\n  width: 100%;\n  --border-radius: none;\n  --background: #25214f;\n  --color: #fff;\n  --color-activated: #fff;\n  --background-activated: #fee178;\n}\n\n.form-inline > * {\n  margin: 0 1.5rem 1.5rem 0;\n}\n\n.input {\n  height: 3.2rem;\n  background: #e8e8e8;\n  border: 1px solid #b6b6b6;\n  box-sizing: border-box;\n  border-radius: 8px;\n}\n\nlabel {\n  color: #676767 !important;\n  text-align: left;\n}\n\n.title {\n  color: #25214f;\n  font-weight: 800;\n}\n\n.central-image {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  margin-top: 30px;\n}\n\n.sub-title {\n  color: #676767;\n  text-align: center;\n}\n\n.link {\n  color: #25214f;\n  font-weight: 500;\n  text-decoration: none;\n}\n\n.img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.btn2 {\n  --background: #fee178;\n  --color: #25214f;\n  text-transform: capitalize;\n  height: 3.5rem;\n  font-weight: 300;\n  font-size: 1.2rem;\n  --background-activated: #fee178;\n}\n\n.content {\n  font-family: Mulish !important;\n  display: flex;\n  flex-direction: column;\n  align-content: space-between;\n}\n\n.img {\n  height: 290px;\n  width: 230px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.title {\n  color: #25214f;\n  font-weight: 800;\n}\n\n.central-image {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n}\n\n.sub-title {\n  color: #676767;\n}\n\nimg {\n  height: 291px;\n  width: 230px;\n}\n\n.tit {\n  font-family: Mulish !important;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 24px;\n  line-height: 30px;\n  text-align: center;\n  color: #25214f;\n}\n\n.subTit {\n  font-family: Mulish !important;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 15px;\n  line-height: 23px;\n  text-align: center;\n  color: #676767;\n  width: 300px;\n  margin-top: 20px;\n  margin-bottom: 40px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpdGhkcmF3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFFQTtFQUVFLGNBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBQUY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFERjs7QUFJQTtFQUNFLHFCQUFBO0FBREY7O0FBSUE7RUFDRSxxQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUdBLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBSEY7O0FBWUE7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFURjs7QUFZQTtFQUNFLE9BQUE7QUFURjs7QUFZQTtFQUNFLHFCQUFBO0VBQ0Esd0JBQUE7QUFURjs7QUFZQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7QUFURjs7QUFZQTtFQUNFLHlCQUFBO0FBVEY7O0FBWUE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFURjs7QUFZQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7QUFURjs7QUFXQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQVJGOztBQVdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQVJGOztBQVdBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBUkY7O0FBV0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQVJGOztBQVdBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFSRjs7QUFVQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUFQRjs7QUFjQTtFQUNFLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFYRjs7QUFjQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFYRjs7QUFjQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQVhGOztBQWNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUFYRjs7QUFjQTtFQUNFLGNBQUE7QUFYRjs7QUFjQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBWEY7O0FBYUE7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFWRjs7QUFZQTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQVRGIiwiZmlsZSI6IndpdGhkcmF3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMjUyMTRmO1xyXG4gIC0tY29sb3I6ICNmZmY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgaGVpZ2h0OiAzLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjMjUyMTRmO1xyXG59XHJcblxyXG5pb24tdG9nZ2xlIHtcclxuICAtLWhlaWdodDogMTVweDtcclxuICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzI1MjE0ZjtcclxufVxyXG5cclxuLmlubmVyLWljb24ge1xyXG4gIC8vIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogI2ZlZTE3ODtcclxufVxyXG5cclxuLmljb24tY29udGFpbmVyIHtcclxuICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjE0ZjtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5yb3ctb25lIHtcclxuICBib3JkZXI6IDAuODAwMDAwMDExOTIwOTI5cHggc29saWQgI2NlZDRkYTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNkNWQ0ZDQ7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGNvbG9yOiAjMjUyMTRmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG5zZWN0aW9uIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5waG9uZUZpZWxkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uZGlhbEZpZWxkIHtcclxuICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5udW1GaWVsZCB7XHJcbiAgd2lkdGg6IDY1JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICAvLyBoZWlnaHQ6IDEuMnJlbTtcclxuICAvLyB3aWR0aDogMS4ycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGhlaWdodDogMTVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDAuODAwMDAwMDExOTIwOTI5cHggc29saWQgI2NlZDRkYTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q1ZDRkNDtcclxuICBwYWRkaW5nOiAwcHggMjVweDtcclxufVxyXG5cclxuLy8gbGFiZWwge1xyXG4vLyAgIGNvbG9yOiAjMDAwO1xyXG4vLyAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbi8vICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuLy8gfVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIGZvbnQtZmFtaWx5OiBNdWxpc2ggIWltcG9ydGFudDtcclxuICAtLXBhZGRpbmctZW5kOiAyMHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxufVxyXG5cclxuLmZvcm0taW5saW5lIFtmdWxsV2lkdGhdIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAtLWJhY2tncm91bmQ6ICNmZWUxNzg7XHJcbiAgLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICAtLWJvcmRlci1yYWRpdXM6IG5vbmU7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMjUyMTRmO1xyXG4gIC0tY29sb3I6ICNmZmY7XHJcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNmZmY7XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2ZlZTE3ODtcclxufVxyXG5cclxuLmZvcm0taW5saW5lID4gKiB7XHJcbiAgbWFyZ2luOiAwIDEuNXJlbSAxLjVyZW0gMDtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICBoZWlnaHQ6IDMuMnJlbTtcclxuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiNmI2YjY7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBjb2xvcjogIzY3Njc2NyAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLnRpdGxlIHtcclxuICBjb2xvcjogIzI1MjE0ZjtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4uY2VudHJhbC1pbWFnZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uc3ViLXRpdGxlIHtcclxuICBjb2xvcjogIzY3Njc2NztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5saW5rIHtcclxuICBjb2xvcjogIzI1MjE0ZjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmltZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbi5idG4yIHtcclxuICAtLWJhY2tncm91bmQ6ICNmZWUxNzg7XHJcbiAgLS1jb2xvcjogIzI1MjE0ZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBoZWlnaHQ6IDMuNXJlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmZWUxNzg7XHJcbn1cclxuXHJcbi8vIGlvbi1idXR0b24ge1xyXG4vLyAgIC0tYm9yZGVyLXJhZGl1czogMTVweDtcclxuLy8gfVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGZvbnQtZmFtaWx5OiBNdWxpc2ggIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmltZyB7XHJcbiAgaGVpZ2h0OiAyOTBweDtcclxuICB3aWR0aDogMjMwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGNvbG9yOiAjMjUyMTRmO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5jZW50cmFsLWltYWdlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uc3ViLXRpdGxlIHtcclxuICBjb2xvcjogIzY3Njc2NztcclxufVxyXG5cclxuaW1nIHtcclxuICBoZWlnaHQ6IDI5MXB4O1xyXG4gIHdpZHRoOiAyMzBweDtcclxufVxyXG4udGl0IHtcclxuICBmb250LWZhbWlseTogTXVsaXNoICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzI1MjE0ZjtcclxufVxyXG4uc3ViVGl0IHtcclxuICBmb250LWZhbWlseTogTXVsaXNoICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzY3Njc2NztcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";

/***/ }),

/***/ 52869:
/*!************************************************************************!*\
  !*** ./src/app/components/add-fund/add-fund.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"overlay\" (click)=\"closeDraw()\" [@slideInOut]></div>\n\n<div class=\"container\" [@slideInOut]>\n  <div\n    style=\"\n      background-color: #25214f;\n      border-radius: 50%;\n      position: absolute;\n      right: 10px;\n      color: white;\n      top: -20px;\n      width: 30px;\n      height: 30px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    \"\n    (click)=\"closeDraw()\"\n  >\n    X\n  </div>\n  <div class=\"title\">\n    <span>My Details</span>\n  </div>\n\n  <!-- <div class=\"sub-title\">\n    <span>Forgot PIN?</span>\n  </div> -->\n\n  <!-- <div class=\"keypad\">\n    <div *ngFor=\"let item of keyPadValue\" class=\"keys\">\n      <div (click)=\"getPinValue(item.value)\">{{\n        item.label\n      }}</div>\n    </div>\n  </div> -->\n  <ion-content>\n    <div class=\"table\">\n      <table>\n        <tbody>\n          <tr>\n            <th>Account Name</th>\n            <td>{{ user?.firstName }} {{ user?.lastName }}</td>\n          </tr>\n          <tr>\n            <th>Email</th>\n            <td>{{ user?.email }}</td>\n          </tr>\n          <tr>\n            <th>Mobile Number</th>\n            <td>{{ user?.phone }}</td>\n          </tr>\n          <tr>\n            <th>Gender</th>\n            <td>{{ user?.gender }}</td>\n          </tr>\n          <tr>\n            <th>Account Number</th>\n            <td>{{ user?.accountNos[0].accountNo }}</td>\n          </tr>\n          <tr>\n            <th>Balance</th>\n            <td>\n              {{ user?.accountNos[0].accountBalance | currency: \"&#8358;\" }}\n            </td>\n          </tr>\n          <tr *ngIf=\"user?.bvn\">\n            <th>BVN</th>\n            <td>{{ user?.bvn }}</td>\n          </tr>\n\n          <tr *ngIf=\"user?.tin\">\n            <th>TIN</th>\n            <td>{{ user?.tin }}</td>\n          </tr>\n\n          <tr *ngIf=\"user?.rc\">\n            <th>RC Number</th>\n            <td>{{ user?.rc }}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </ion-content>\n</div>\n";

/***/ }),

/***/ 28558:
/*!**********************************************************************!*\
  !*** ./src/app/components/balance/balance.component.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"row\">\n  <ion-card\n    style=\"background-color: #25214f; border-radius: 8px; margin: 10px 4px\"\n  >\n    <ion-card-content\n      style=\"\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        border-radius: 8px;\n        text-align: center;\n      \"\n    >\n      <span\n        class=\"card-items\"\n        style=\"\n          color: white;\n          font-family: Mulish !important;\n          font-size: 18px;\n          font-weight: 700;\n        \"\n        >{{ user.accountType }}</span\n      >\n      <span\n        class=\"card-items\"\n        style=\"\n          color: white;\n          font-family: Mulish !important;\n          font-size: 18px;\n          font-weight: 700;\n        \"\n        >{{ user.firstName }} {{ user.lastName }}</span\n      >\n      <span *ngIf=\"data\">\n        <span\n          class=\"card-items\"\n          style=\"\n            font-family: Mulish !important;\n            font-size: 30px;\n            font-weight: 800;\n            color: #fff;\n          \"\n          *ngIf=\"show\"\n          >{{ user.accountNos[0]?.accountBalance | currency: \"&#8358;\" }}</span\n        >\n      </span>\n      <span *ngIf=\"!data\">\n        <span\n          class=\"card-items\"\n          style=\"\n            font-family: Mulish !important;\n            font-size: 30px;\n            font-weight: 800;\n            color: #fff;\n          \"\n          *ngIf=\"show\"\n          >&#8358;0.00</span\n        >\n      </span>\n      <span\n        class=\"card-items\"\n        style=\"\n          font-family: Mulish !important;\n          font-size: 30px;\n          font-weight: 800;\n          color: #fff;\n        \"\n        *ngIf=\"!show\"\n        >**********</span\n      >\n      <div\n        class=\"card-items\"\n        style=\"background-color: #fff; border-radius: 5px; margin: 0px 45px\"\n      >\n        <span style=\"margin: 20px; font-size: 20px; font-weight: 600\">{{\n          user?.accountNos[0]?.accountNo\n            ? user?.accountNos[0]?.accountNo\n            : \"Unavailable\"\n        }}</span>\n        <ion-icon\n          name=\"copy-outline\"\n          style=\"cursor: pointer; font-size: 18px; margin-top: 3px\"\n          (click)=\"copyMessage(user?.accountNos[0]?.accountNo)\"\n        ></ion-icon>\n      </div>\n      <div style=\"text-align: right !important; margin-top: -10px !important\">\n        <ion-icon\n          *ngIf=\"!show\"\n          (click)=\"viewBalance()\"\n          style=\"font-size: 22px; color: #fff; cursor: pointer; right: 20px\"\n          name=\"eye-off-outline\"\n        ></ion-icon>\n        <ion-icon\n          *ngIf=\"show\"\n          (click)=\"viewBalance()\"\n          style=\"font-size: 22px; color: #fff; cursor: pointer; right: 20px\"\n          name=\"eye-outline\"\n        ></ion-icon>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</section>\n";

/***/ }),

/***/ 2011:
/*!********************************************************************!*\
  !*** ./src/app/components/header/header.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<p>header works!</p>\n<p>header works!</p>\n<p>header works!</p>\n<p>header works!</p>\n<p>header works!</p>\n";

/***/ }),

/***/ 96085:
/*!********************************************************************!*\
  !*** ./src/app/components/loader/loader.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div\n  class=\"mas\"\n  style=\"\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n  \"\n>\n  <div class=\"overlay\"></div>\n  <div class=\"lds-facebook\">\n    <div></div>\n    <div></div>\n    <div></div>\n  </div>\n  <div class=\"tes\">Loading...</div>\n</div>\n";

/***/ }),

/***/ 99556:
/*!**************************************************************!*\
  !*** ./src/app/components/pin/pin.component.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"overlay\" (click)=\"closeDraw()\" [@slideInOut]></div>\r\n\r\n<div class=\"container\" [@slideInOut]>\r\n  <div\r\n    style=\"\r\n      background-color: #25214f;\r\n      border-radius: 50%;\r\n      position: absolute;\r\n      right: 10px;\r\n      color: white;\r\n      top: -20px;\r\n      width: 30px;\r\n      height: 30px;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n    \"\r\n    (click)=\"closeDraw()\"\r\n  >\r\n    X\r\n  </div>\r\n  <div class=\"title\">\r\n    <span>Enter your PIN</span>\r\n  </div>\r\n\r\n  <div class=\"pin-section\">\r\n    <div class=\"pin-box\"><div class=\"x\" *ngIf=\"transactionPin[0]\">*</div></div>\r\n    <div class=\"pin-box\"><div class=\"x\" *ngIf=\"transactionPin[1]\">*</div></div>\r\n    <div class=\"pin-box\"><div class=\"x\" *ngIf=\"transactionPin[2]\">*</div></div>\r\n    <div class=\"pin-box\"><div class=\"x\" *ngIf=\"transactionPin[3]\">*</div></div>\r\n  </div>\r\n\r\n  <!-- <div class=\"sub-title\">\r\n    <span>Forgot PIN?</span>\r\n  </div> -->\r\n\r\n  <!-- <div class=\"keypad\">\r\n    <div *ngFor=\"let item of keyPadValue\" class=\"keys\">\r\n      <div (click)=\"getPinValue(item.value)\">{{\r\n        item.label\r\n      }}</div>\r\n    </div>\r\n  </div> -->\r\n  <div class=\"keypad\">\r\n    <div class=\"row\">\r\n      <div class=\"keys\">\r\n        <div (click)=\"getPinValue(1)\">1</div>\r\n      </div>\r\n      <div class=\"keys\">\r\n        <div (click)=\"getPinValue(2)\">2</div>\r\n      </div>\r\n      <div class=\"keys\">\r\n        <div (click)=\"getPinValue(3)\">3</div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"keys\">\r\n        <div (click)=\"getPinValue(4)\">4</div>\r\n      </div>\r\n      <div class=\"keys\">\r\n        <div (click)=\"getPinValue(5)\">5</div>\r\n      </div>\r\n      <div class=\"keys\">\r\n        <div (click)=\"getPinValue(6)\">6</div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"keys\">\r\n        <div (click)=\"getPinValue(7)\">7</div>\r\n      </div>\r\n      <div class=\"keys\">\r\n        <div (click)=\"getPinValue(8)\">8</div>\r\n      </div>\r\n      <div class=\"keys\">\r\n        <div (click)=\"getPinValue(9)\">9</div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"keys\">\r\n        <div (click)=\"getPinValue(0)\">0</div>\r\n      </div>\r\n      <div class=\"keys\">\r\n        <div (click)=\"getPinValue(11)\">\r\n          <ion-img\r\n            src=\"assets/icon/clear.svg\"\r\n            style=\"width: 70px; height: 40px\"\r\n            alt=\"\"\r\n          ></ion-img>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ 36324:
/*!**********************************************************************************************!*\
  !*** ./src/app/components/transaction-history/transaction-history.component.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-loader *ngIf=\"loading\"></app-loader>\n<div\n  *ngIf=\"!data || data.length === 0\"\n  style=\"background-color: #f8f8f8; border-radius: 8px\"\n>\n  <ion-card-content>\n    <span style=\"text-align: left; font-size: 13px\"\n      >No transactions today\n    </span>\n  </ion-card-content>\n</div>\n<div *ngIf=\"!loading\">\n  <div *ngFor=\"let trans of data\">\n    <div class=\"tran\" *ngIf=\"trans.transactionType !== 'Debit'\">\n      <div class=\"icon\">\n        <div class=\"img\"><img src=\"assets/icon/credict.png\" alt=\"\" /></div>\n        <div class=\"text\">\n          <div class=\"tit\">\n            {{ trans?.bankName }}\n          </div>\n          <!-- <div class=\"mode\">{{ trans?.submittedByUsername }}</div> -->\n          <div class=\"mode\">\n            {{ trans.date | date }}\n          </div>\n          <div class=\"mode\" style=\"font-size: 11px\">\n            {{ trans.date | date: \"shortTime\" }}\n          </div>\n        </div>\n      </div>\n      <div class=\"amount green\">{{ trans.amount | currency: \"&#8358;\" }}</div>\n    </div>\n    <div class=\"tran\" *ngIf=\"trans.transactionType === 'Debit'\">\n      <div class=\"icon\">\n        <div class=\"img\"><img src=\"assets/icon/debit.png\" alt=\"\" /></div>\n        <div class=\"text\">\n          <div class=\"tit\">\n            {{ trans?.bankName }}\n          </div>\n          <!-- <div class=\"mode\">{{ trans?.submittedByUsername }}</div> -->\n          <div class=\"mode\">\n            {{ trans.date | date }}\n          </div>\n          <div class=\"mode\" style=\"font-size: 11px\">\n            {{ trans.date | date: \"shortTime\" }}\n          </div>\n        </div>\n      </div>\n      <div class=\"amount red\">-{{ trans.amount | currency: \"&#8358;\" }}</div>\n    </div>\n  </div>\n</div>\n<ion-content *ngIf=\"visible\">\n  <div\n    class=\"mas\"\n    style=\"\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-direction: column;\n    \"\n  >\n    <div class=\"overlay\" (click)=\"setVissible()\" [@slideInOut]></div>\n    <div\n      style=\"\n        background-color: white;\n        width: 100vw;\n        z-index: 1000;\n        display: flex;\n        flex-direction: column;\n      \"\n      [@slideInOut]\n    >\n      <div class=\"head\">\n        <div\n          (click)=\"setVissible()\"\n          style=\"\n            color: white;\n            font-size: 30px;\n            position: absolute;\n            left: 20px;\n            top: 20px;\n          \"\n        >\n          <ion-icon name=\"close-circle-outline\"></ion-icon>\n        </div>\n        <div class=\"date\">\n          {{ details.date | date }} {{ details.date | date: \"shortTime\" }}\n        </div>\n        <div class=\"card\"><ion-icon name=\"card\"></ion-icon></div>\n        <div\n          style=\"font-size: 12px; padding-top: 10px\"\n          *ngIf=\"details?.isRoyalTransfer\"\n        >\n          Royal Transfer\n        </div>\n        <div\n          style=\"font-size: 12px; padding-top: 10px\"\n          *ngIf=\"!details?.isRoyalTransfer\"\n        >\n          Others\n        </div>\n        <div class=\"date\">\n          <span *ngIf=\"details.transactionType !== 'Credit'\">-</span\n          >{{ details?.amount | currency: \"&#8358;\" }}\n        </div>\n      </div>\n      <div class=\"bod\">\n        <table>\n          <tbody>\n            <tr>\n              <th style=\"padding: 10px\">From</th>\n              <td style=\"padding: 10px\">{{ details?.senderAcctName }}</td>\n            </tr>\n            <tr>\n              <th style=\"padding: 10px\">To</th>\n              <td style=\"padding: 10px\">{{ details?.receiverAcctName }}</td>\n            </tr>\n\n            <tr>\n              <th style=\"padding: 10px\">Account No.</th>\n              <td style=\"padding: 10px\">{{ details?.receiverAcctNo }}</td>\n            </tr>\n\n            <tr>\n              <th style=\"padding: 10px\">Bank Name</th>\n              <td style=\"padding: 10px\">{{ details?.bankName }}</td>\n            </tr>\n\n            <tr>\n              <th style=\"padding: 10px\">Naration</th>\n              <td style=\"padding: 10px\">\n                {{ details?.transferDescription }}\n              </td>\n            </tr>\n\n            <tr>\n              <th style=\"padding: 10px\">Transaction Type</th>\n              <td style=\"padding: 10px\">{{ details?.transactionType }}</td>\n            </tr>\n            <!-- <tr>\n              <th style=\"padding: 10px\">Refrence</th>\n              <td style=\"padding: 10px\">{{ tran?.paymentDetailData.receiptNumber }}</td>\n            </tr> -->\n            <!-- <tr>\n              <th style=\"padding: 10px\">Receipt Number</th>\n              <td style=\"padding: 10px\">\n                {{ tran?.paymentDetailData?.receiptNumber }}\n              </td>\n            </tr> -->\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 71090:
/*!************************************************************************************************!*\
  !*** ./src/app/core/templates/dashboard-template/dashboard-template.component.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-header class=\"ion-no-border\">\n    <ion-toolbar style=\"padding-left: 20px; padding-right: 20px\">\n      <!-- Hamburger -->\n      <ion-buttons slot=\"start\">\n        <ion-menu-button autoHide=\"false\"></ion-menu-button\n        ><span style=\"font-size: 15px\">Menu</span>\n      </ion-buttons>\n      <section\n        slot=\"end\"\n        style=\"\n          display: flex;\n          flex-direction: row;\n          justify-content: flex-end;\n          align-items: center;\n        \"\n      >\n        <div style=\"flex: 70%; padding: 5px\">\n          <span\n            ><span style=\"font-size: 16px; font-weight: 700\"\n              >Hi {{ user.firstName }}</span\n            >\n            <br /><span style=\"color: rgb(130, 133, 133); font-size: 14px\"\n              >How are you today?</span\n            ></span\n          >\n        </div>\n        <div style=\"flex: 25%; padding: 5px\">\n          <ion-img [src]=\"photo\" class=\"userImg\"></ion-img>\n        </div>\n      </section>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <!-- Content -->\n  </ion-content>\n  <ion-menu contentId=\"main-content\" side=\"start\">\n    <ion-header>\n      <ion-toolbar>\n        <ion-img\n          [src]=\"imageSrc\"\n          style=\"width: 170px; margin: 30px auto; margin-top: 40px\"\n        ></ion-img>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n      <ion-list>\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let nav of nav\">\n          <ion-item\n            detail=\"false\"\n            routerDirection=\"root\"\n            [routerLink]=\"nav.link\"\n            [class.active-menu]=\"active === nav.link\"\n            style=\"color: #374957\"\n          >\n            {{ nav.name }}\n            <!-- <ion-icon\n              style=\"color: #374957\"\n              slot=\"start\"\n              [ios]=\"nav.icon + '-outline'\"\n              [md]=\"nav.icon + '-sharp'\"\n            ></ion-icon> -->\n            <ion-img\n              slot=\"start\"\n              style=\"width: 20px\"\n              [src]=\"nav.icon\"\n            ></ion-img>\n          </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n    </ion-content>\n    <div\n      style=\"\n        display: flex;\n        flex-direction: row;\n        margin: 30px 0px;\n        align-items: center;\n      \"\n      (click)=\"logout()\"\n    >\n      <ion-img\n        style=\"margin-left: 20px; width: 30px\"\n        src=\"/assets/icon/logout.png\"\n      ></ion-img>\n      <div style=\"padding-left: 10px\">Logout</div>\n    </div>\n  </ion-menu>\n\n  <ion-router-outlet id=\"main-content\" main></ion-router-outlet>\n  <app-tabs></app-tabs>\n</ion-app>\n";

/***/ }),

/***/ 66283:
/*!**************************************************************************!*\
  !*** ./src/app/core/templates/in-page/in-page.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-header class=\"ion-no-border\" style=\"background-color: #25214f\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"goBack()\">\n          <ion-icon\n            name=\"arrow-back-outline\"\n            style=\"color: white; padding-top: 10px\"\n          ></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-router-outlet id=\"main-content\" main></ion-router-outlet>\n</ion-app>\n";

/***/ }),

/***/ 98741:
/*!************************************************************************!*\
  !*** ./src/app/core/templates/signup/signup.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content class=\"content\">\n  <section class=\"row\">\n    <!-- <ion-thumbnail>\n      <ion-img [src]=\"source\" class=\"img\"></ion-img>\n    </ion-thumbnail> -->\n  </section>\n  <section class=\"central-image\">\n    <ion-img [src]=\"source\" class=\"img\"></ion-img>\n  </section>\n\n  <section style=\"text-align: center\">\n    <section section style=\"padding-top: 2rem\">\n      <h2 class=\"title\">{{ caption }}</h2>\n    </section>\n\n    <section class=\"row\">\n      <p class=\"sub-title\">\n        {{ subtitle }}\n      </p>\n    </section>\n  </section>\n\n  <section\n    style=\"display: flex; flex-direction: column; align-content: space-between\"\n  >\n    <ion-button class=\"btn\" expand=\"block\" [href]=\"buttonActionOne\">\n      {{ buttonTextOne }}\n    </ion-button>\n\n    <ion-button\n      class=\"btn2\"\n      expand=\"block\"\n      style=\"margin-top: 1rem\"\n      [href]=\"buttonActionTwo\"\n    >\n      {{ buttonTextTwo }}\n    </ion-button>\n  </section>\n</ion-content>\n";

/***/ }),

/***/ 80056:
/*!************************************************************************!*\
  !*** ./src/app/modules/account-info/account-info.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <section style=\"margin-top: 30px; background-color: #25214f\">\r\n    <app-add-fund (exit)=\"close()\" *ngIf=\"show\"></app-add-fund>\r\n\r\n    <section>\r\n      <div\r\n        style=\"\r\n          padding: 20px;\r\n          width: 100%;\r\n          display: flex;\r\n          flex-direction: column;\r\n          align-items: center;\r\n          justify-content: center;\r\n          background-color: #25214f;\r\n          color: #fff;\r\n          padding: 20px 30px;\r\n        \"\r\n      >\r\n        <div style=\"border-radius: 50%; margin: 10px 0\">\r\n          <ion-img\r\n            [src]=\"photo\"\r\n            style=\"width: 70px; height: 70px; margin: auto; border-radius: 50%\"\r\n            class=\"userImg\"\r\n          ></ion-img>\r\n        </div>\r\n        <span>{{ user.firstName }} {{ user.lastName }}</span>\r\n\r\n        <ion-button id=\"details\" size=\"small\" (click)=\"show = true\"\r\n          >Show Details</ion-button\r\n        >\r\n      </div>\r\n    </section>\r\n\r\n    <section\r\n      style=\"\r\n        padding: 0 10px;\r\n        border-top-right-radius: 50px;\r\n        border-top-left-radius: 50px;\r\n        background-color: white;\r\n        padding-top: 60px;\r\n      \"\r\n    >\r\n      <div\r\n        style=\"\r\n          font-family: Mulish !important;\r\n          display: flex;\r\n          flex-direction: row;\r\n          justify-content: space-around;\r\n          cursor: pointer;\r\n          margin: 1.5rem 0.5rem;\r\n        \"\r\n        [routerLink]=\"['change-password']\"\r\n      >\r\n        <div class=\"icon-container\">\r\n          <ion-icon name=\"lock-closed-sharp\" class=\"inner-icon\"></ion-icon>\r\n        </div>\r\n        <span class=\"items\">Change Password</span>\r\n      </div>\r\n\r\n      <!-- <div\r\n        style=\"\r\n          font-family: Mulish !important;\r\n          display: flex;\r\n          flex-direction: row;\r\n          justify-content: space-around;\r\n          cursor: pointer;\r\n          margin: 1.5rem 0.5rem;\r\n        \"\r\n        (click)=\"enableBiomterics()\"\r\n      >\r\n        <div class=\"icon-container\">\r\n          <ion-icon name=\"finger-print-sharp\" class=\"inner-icon\"></ion-icon>\r\n        </div>\r\n        <span class=\"items\">Biometric Login</span>\r\n        <ion-toggle></ion-toggle>\r\n      </div> -->\r\n\r\n      <div\r\n        style=\"\r\n          font-family: Mulish !important;\r\n          display: flex;\r\n          flex-direction: row;\r\n          justify-content: space-around;\r\n          cursor: pointer;\r\n          margin: 1.5rem 0.5rem;\r\n        \"\r\n        [routerLink]=\"['limit']\"\r\n      >\r\n        <div class=\"icon-container\">\r\n          <ion-icon name=\"wallet-sharp\" class=\"inner-icon\"></ion-icon>\r\n        </div>\r\n        <span class=\"items\">Increase Limit</span>\r\n      </div>\r\n\r\n      <div\r\n        style=\"\r\n          font-family: Mulish !important;\r\n          display: flex;\r\n          flex-direction: row;\r\n          justify-content: space-around;\r\n          cursor: pointer;\r\n          margin: 1.5rem 0.5rem;\r\n        \"\r\n        [routerLink]=\"['request-card']\"\r\n      >\r\n        <div class=\"icon-container\">\r\n          <ion-icon name=\"card\" class=\"inner-icon\"></ion-icon>\r\n        </div>\r\n        <span class=\"items\">Request For Card</span>\r\n      </div>\r\n\r\n      <div\r\n        style=\"\r\n          font-family: Mulish !important;\r\n          display: flex;\r\n          flex-direction: row;\r\n          justify-content: space-around;\r\n          cursor: pointer;\r\n          margin: 1.5rem 0.5rem;\r\n        \"\r\n        [routerLink]=\"['reset-pin']\"\r\n      >\r\n        <div class=\"icon-container\">\r\n          <ion-icon name=\"settings-sharp\" class=\"inner-icon\"></ion-icon>\r\n        </div>\r\n        <span class=\"items\">Reset/Change PIN</span>\r\n      </div>\r\n      <div\r\n        *ngIf=\"upload\"\r\n        style=\"\r\n          font-family: Mulish !important;\r\n          display: flex;\r\n          flex-direction: row;\r\n          justify-content: space-around;\r\n          cursor: pointer;\r\n          margin: 1.5rem 0.5rem;\r\n        \"\r\n        (click)=\"viewDoc()\"\r\n      >\r\n        <div class=\"icon-container\">\r\n          <ion-icon name=\"document-attach\" class=\"inner-icon\"></ion-icon>\r\n        </div>\r\n        <span class=\"items\">Documents</span>\r\n      </div>\r\n    </section>\r\n  </section>\r\n\r\n  <!-- <section *ngIf=\"option ===2\">\r\n    <form [formGroup]=\"passwordForm\">\r\n      <div class=\"form-group row\" style=\"padding: 5px\">\r\n        <label for=\"\">Old Password</label>\r\n        <input\r\n          type=\"password\"\r\n          name=\"password\"\r\n          class=\"input\"\r\n          placeholder=\"1234567890\"\r\n        />\r\n      </div>\r\n\r\n      <div class=\"form-group row\" style=\"padding: 5px\">\r\n        <label for=\"\">Amount</label>\r\n        <input\r\n          type=\"text\"\r\n          name=\"amount\"\r\n          class=\"input\"\r\n          placeholder=\"100000\"\r\n        />\r\n      </div>\r\n  </form>\r\n  </section> -->\r\n\r\n  <!-- <section *ngIf=\"option ===3\">\r\n    <form [formGroup]=\"passwordForm\">\r\n      <div class=\"form-group row\" style=\"padding: 5px\">\r\n        <label for=\"\">Old Password</label>\r\n        <input\r\n          type=\"password\"\r\n          name=\"password\"\r\n          class=\"input\"\r\n          placeholder=\"1234567890\"\r\n        />\r\n      </div>\r\n\r\n      <div class=\"form-group row\" style=\"padding: 5px\">\r\n        <label for=\"\">Amount</label>\r\n        <input\r\n          type=\"text\"\r\n          name=\"amount\"\r\n          class=\"input\"\r\n          placeholder=\"100000\"\r\n        />\r\n      </div>\r\n  </form>\r\n  </section> -->\r\n  <div class=\"mod\" *ngIf=\"view\" (click)=\"viewDoc()\">\r\n    <div class=\"doc\">\r\n      <ion-icon\r\n        (click)=\"viewDoc()\"\r\n        style=\"\r\n          font-size: 30px;\r\n          position: absolute;\r\n          top: 10px;\r\n          right: 10px;\r\n          color: #25214f;\r\n        \"\r\n        name=\"close-circle-outline\"\r\n      ></ion-icon>\r\n      <div class=\"head\">Uploaded Documents</div>\r\n      <div class=\"document\">\r\n        <ion-icon name=\"document-attach\" class=\"icn\"></ion-icon>\r\n        <div class=\"name\">CAC Document</div>\r\n      </div>\r\n      <div class=\"document\">\r\n        <ion-icon name=\"document-attach\" class=\"icn\"></ion-icon>\r\n        <div class=\"name\">{{documentName}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 17210:
/*!************************************************************************************************!*\
  !*** ./src/app/modules/account-info/change-password/change-password.component.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <section style=\"background-color: #25214f\">\r\n    <app-add-fund (exit)=\"close()\" *ngIf=\"show\"></app-add-fund>\r\n    <app-loader *ngIf=\"loading\"></app-loader>\r\n    <app-pin\r\n      (close)=\"closePass()\"\r\n      (loading)=\"load()\"\r\n      (done)=\"finish()\"\r\n      *ngIf=\"pass\"\r\n    ></app-pin>\r\n\r\n    <div style=\"height: 30px\"></div>\r\n    <div\r\n      style=\"\r\n        padding: 20px;\r\n        width: 100%;\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        justify-content: center;\r\n        background-color: #25214f;\r\n        color: #fff;\r\n        padding: 20px 30px;\r\n      \"\r\n    >\r\n      <div style=\"border-radius: 50%; margin: 10px 0\">\r\n        <ion-img\r\n          [src]=\"photo\"\r\n          style=\"width: 70px; height: 70px; margin: auto; border-radius: 50%\"\r\n          class=\"userImg\"\r\n        ></ion-img>\r\n      </div>\r\n      <span>{{ user.firstName }} {{ user.lastName }}</span>\r\n\r\n      <ion-button id=\"details\" size=\"small\" (click)=\"show = true\"\r\n        >Show Details</ion-button\r\n      >\r\n    </div>\r\n    <section\r\n      style=\"\r\n        background-color: white;\r\n        border-top-left-radius: 50px;\r\n        border-top-right-radius: 50px;\r\n        padding: 0 20px;\r\n        padding-top: 50px;\r\n      \"\r\n    >\r\n      <div style=\"font-size: 25px; text-align: center; padding-bottom: 20px\">\r\n        Change Password\r\n      </div>\r\n      <form>\r\n        <div class=\"form-group row\" style=\"padding: 5px\">\r\n          <label for=\"\">Old Password</label>\r\n          <input\r\n            type=\"password\"\r\n            name=\"oldPassword\"\r\n            class=\"input\"\r\n            placeholder=\"Old Password\"\r\n            [(ngModel)]=\"password\"\r\n            [ngModelOptions]=\"{ standalone: true }\"\r\n          />\r\n        </div>\r\n\r\n        <div class=\"form-group row\" style=\"padding: 5px\">\r\n          <label for=\"\">New Password</label>\r\n          <input\r\n            type=\"password\"\r\n            name=\"newPassword\"\r\n            class=\"input\"\r\n            placeholder=\"New Password\"\r\n            [(ngModel)]=\"passwordNew\"\r\n            [ngModelOptions]=\"{ standalone: true }\"\r\n            (ngModelChange)=\"checkStrength($event)\"\r\n          />\r\n        </div>\r\n        <div style=\"font-size: 13px; text-align: left\">\r\n          password should contain lowercase, uppercase, number and minimum of 6\r\n          characters\r\n        </div>\r\n        <div\r\n          style=\"\r\n            display: flex;\r\n            flex-direction: row;\r\n            margin-top: 10px;\r\n            background-color: red;\r\n          \"\r\n        >\r\n          <div\r\n            style=\"width: 25%; height: 3px\"\r\n            [style.background-color]=\"check[0] ? 'green' : 'red'\"\r\n          ></div>\r\n          <div\r\n            style=\"width: 25%; height: 3px\"\r\n            [style.background-color]=\"check[1] ? 'green' : 'red'\"\r\n          ></div>\r\n          <div\r\n            style=\"width: 25%; height: 3px\"\r\n            [style.background-color]=\"\r\n              check[2] ? 'green' : check[1] ? 'rgb(217, 217, 12)' : 'red'\r\n            \"\r\n          ></div>\r\n          <div\r\n            style=\"width: 25%; height: 3px\"\r\n            [style.background-color]=\"\r\n              check[3]\r\n                ? 'green'\r\n                : check[1] || check[2]\r\n                ? 'rgb(217, 217, 12)'\r\n                : 'red'\r\n            \"\r\n          ></div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\" style=\"padding: 5px\">\r\n          <label for=\"\">Confirm New Password</label>\r\n          <input\r\n            type=\"password\"\r\n            name=\"confirmPassword\"\r\n            class=\"input\"\r\n            placeholder=\"Confirm New Password\"\r\n            [(ngModel)]=\"passwordConfirm\"\r\n            [ngModelOptions]=\"{ standalone: true }\"\r\n          />\r\n        </div>\r\n\r\n        <ion-button\r\n          class=\"btn2\"\r\n          style=\"\r\n            width: 100%;\r\n            max-width: 300px;\r\n            margin: auto;\r\n            margin-top: 20px;\r\n            display: flex;\r\n          \"\r\n          (click)=\"display()\"\r\n          >Update</ion-button\r\n        >\r\n      </form>\r\n    </section>\r\n  </section>\r\n</ion-content>\r\n";

/***/ }),

/***/ 83232:
/*!****************************************************************************!*\
  !*** ./src/app/modules/account-info/limit/limit.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <section style=\"background-color: #25214f\">\r\n    <app-add-fund (exit)=\"close()\" *ngIf=\"show\"></app-add-fund>\r\n    <app-loader *ngIf=\"loading\"></app-loader>\r\n    <app-pin\r\n      (close)=\"closePass()\"\r\n      (loading)=\"load()\"\r\n      (done)=\"finish()\"\r\n      *ngIf=\"pass\"\r\n    ></app-pin>\r\n\r\n    <div style=\"height: 30px\"></div>\r\n    <div\r\n      style=\"\r\n        padding: 20px;\r\n        width: 100%;\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        justify-content: center;\r\n        background-color: #25214f;\r\n        color: #fff;\r\n        padding: 20px 30px;\r\n      \"\r\n    >\r\n      <div style=\"border-radius: 50%; margin: 10px 0\">\r\n        <ion-img\r\n          [src]=\"photo\"\r\n          style=\"width: 70px; height: 70px; margin: auto; border-radius: 50%\"\r\n          class=\"userImg\"\r\n        ></ion-img>\r\n      </div>\r\n      <span>{{ user.firstName }} {{ user.lastName }}</span>\r\n\r\n      <ion-button id=\"details\" size=\"small\" (click)=\"show = true\"\r\n        >Show Details</ion-button\r\n      >\r\n    </div>\r\n    <section\r\n      style=\"\r\n        background-color: white;\r\n        border-top-left-radius: 50px;\r\n        border-top-right-radius: 50px;\r\n        padding: 0 20px;\r\n        padding-top: 50px;\r\n      \"\r\n    >\r\n      <div style=\"font-size: 25px; text-align: center; padding-bottom: 20px\">\r\n        Update Limit\r\n      </div>\r\n      <div\r\n        style=\"\r\n          width: 90vw;\r\n          margin: auto;\r\n          background-color: #e8e8e8;\r\n          padding: 20px;\r\n          margin-bottom: 30px;\r\n        \"\r\n      >\r\n        <div\r\n          style=\"\r\n            width: 100%;\r\n            display: flex;\r\n            flex-direction: row;\r\n            justify-content: space-between;\r\n          \"\r\n        >\r\n          <div class=\"name\">Max Local Limit :</div>\r\n          <div class=\"tit\">{{ limitInterTemp | currency: \"&#8358;\" }}</div>\r\n        </div>\r\n        <div\r\n          style=\"\r\n            width: 100%;\r\n            display: flex;\r\n            flex-direction: row;\r\n            justify-content: space-between;\r\n          \"\r\n        >\r\n          <div class=\"name\">Max Intra Bank Limit :</div>\r\n          <div class=\"tit\">{{ limitIntraTemp | currency: \"&#8358;\" }}</div>\r\n        </div>\r\n      </div>\r\n      <form>\r\n        <div class=\"form-group row\" style=\"padding: 5px\">\r\n          <label for=\"\">Select Local Limit</label>\r\n          <input\r\n            [(ngModel)]=\"limitInter\"\r\n            [value]=\"limitInter\"\r\n            name=\"account\"\r\n            id=\"\"\r\n            [ngModelOptions]=\"{ standalone: true }\"\r\n            class=\"input\"\r\n            type=\"number\"\r\n          />\r\n          <!-- <select\r\n            [(ngModel)]=\"limitInter\"\r\n            [value]=\"limitInter\"\r\n            name=\"account\"\r\n            id=\"\"\r\n            [ngModelOptions]=\"{ standalone: true }\"\r\n            class=\"input\"\r\n          >\r\n            <option value=\"500000\">&#8358;500.000.00</option>\r\n            <option value=\"1000000\">&#8358;1,000.000.00</option>\r\n            <option value=\"5000000\">&#8358;5,000.000.00</option>\r\n            <option value=\"10000000\">&#8358;10,000.000.00</option>\r\n            <option value=\"20000000\">&#8358;20,000.000.00</option>\r\n            <option value=\"50000\">&#8358;50.000.00</option>\r\n          </select> -->\r\n        </div>\r\n\r\n        <div class=\"form-group row\" style=\"padding: 5px\">\r\n          <label for=\"\">Select Intra Bank Limit</label>\r\n          <input\r\n            [(ngModel)]=\"limitIntra\"\r\n            [value]=\"limitIntra\"\r\n            name=\"account\"\r\n            id=\"\"\r\n            [ngModelOptions]=\"{ standalone: true }\"\r\n            class=\"input\"\r\n            type=\"number\"\r\n          />\r\n          <!-- <select\r\n            [(ngModel)]=\"limitIntra\"\r\n            [value]=\"limitIntra\"\r\n            name=\"account\"\r\n            id=\"\"\r\n            [ngModelOptions]=\"{ standalone: true }\"\r\n            class=\"input\"\r\n          >\r\n            <option value=\"50000\">&#8358;50.000.00</option>\r\n            <option value=\"30000\">&#8358;30.000.00</option>\r\n            <option value=\"20000\">&#8358;20.000.00</option>\r\n            <option value=\"10000\">&#8358;10.000.00</option>\r\n          </select> -->\r\n        </div>\r\n\r\n        <!-- <div class=\"form-group row\" style=\"padding: 5px\">\r\n          <label for=\"\">New Password</label>\r\n          <input\r\n            type=\"password\"\r\n            name=\"newPassword\"\r\n            class=\"input\"\r\n            placeholder=\"Password\"\r\n          />\r\n        </div>\r\n\r\n        <div class=\"form-group row\" style=\"padding: 5px\">\r\n          <label for=\"\">Confirm New Password</label>\r\n          <input\r\n            type=\"password\"\r\n            name=\"confirmPassword\"\r\n            class=\"input\"\r\n            placeholder=\"Password\"\r\n          />\r\n        </div> -->\r\n\r\n        <ion-button\r\n          class=\"btn2\"\r\n          style=\"\r\n            width: 100%;\r\n            max-width: 300px;\r\n            margin: auto;\r\n            margin-top: 20px;\r\n            display: flex;\r\n          \"\r\n          (click)=\"check()\"\r\n          >Update</ion-button\r\n        >\r\n      </form>\r\n    </section>\r\n  </section>\r\n</ion-content>\r\n";

/***/ }),

/***/ 59644:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/account-info/request-card/request-card.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <section style=\"background-color: #25214f\">\n    <app-add-fund (exit)=\"close()\" *ngIf=\"show\"></app-add-fund>\n    <app-loader *ngIf=\"loading\"></app-loader>\n    <app-pin\n      (close)=\"closePass()\"\n      (loading)=\"load()\"\n      (done)=\"finish()\"\n      *ngIf=\"pass\"\n    ></app-pin>\n\n    <div style=\"height: 30px\"></div>\n    <div\n      style=\"\n        padding: 20px;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        background-color: #25214f;\n        color: #fff;\n        padding: 20px 30px;\n      \"\n    >\n      <div style=\"border-radius: 50%; margin: 10px 0\">\n        <ion-img\n          [src]=\"photo\"\n          style=\"width: 70px; height: 70px; margin: auto; border-radius: 50%\"\n          class=\"userImg\"\n        ></ion-img>\n      </div>\n      <span>{{ user.firstName }} {{ user.lastName }}</span>\n\n      <ion-button id=\"details\" size=\"small\" (click)=\"show = true\"\n        >Show Details</ion-button\n      >\n    </div>\n    <section\n      style=\"\n        background-color: white;\n        border-top-left-radius: 50px;\n        border-top-right-radius: 50px;\n        padding: 0 20px;\n        padding-top: 50px;\n      \"\n    >\n      <div\n        class=\"row\"\n        style=\"\n          display: flex;\n          flex-direction: row;\n          justify-content: space-between;\n          margin-top: 30px;\n        \"\n      >\n        <ion-button\n          (click)=\"toggleRequest(true)\"\n          [ngClass]=\"{ active: selectedBtn === true }\"\n          style=\"width: 100%; --border-radius: none\"\n        >\n          New\n        </ion-button>\n\n        <ion-button\n          (click)=\"toggleRequest(false)\"\n          size=\"medium\"\n          [ngClass]=\"{ active: selectedBtn1 === true }\"\n          style=\"width: 100%; --border-radius: none\"\n        >\n          History\n        </ion-button>\n      </div>\n      <section *ngIf=\"newReq\">\n        <div style=\"font-size: 25px; text-align: center; padding-bottom: 20px\">\n          Request Card\n        </div>\n        <form>\n          <div class=\"form-group row\" style=\"padding: 5px\">\n            <label for=\"\">Select Account</label>\n            <select [(ngModel)]=\"accNum\" name=\"account\" id=\"\" class=\"input\">\n              <option\n                *ngFor=\"let data of user.accountNos\"\n                [value]=\"data.accountNo\"\n              >\n                {{ data.accountNo }} ({{\n                  data.accountBalance | currency: \"&#8358;\"\n                }})\n              </option>\n            </select>\n          </div>\n          <div class=\"form-group row\" style=\"padding: 5px\">\n            <label for=\"\">Card Type</label>\n            <select\n              [(ngModel)]=\"cardType\"\n              [value]=\"cardType\"\n              name=\"cardType\"\n              id=\"\"\n              [ngModelOptions]=\"{ standalone: true }\"\n              class=\"input\"\n            >\n              <option *ngFor=\"let cardType of cardTypes\" [value]=\"cardType\">\n                {{ cardType }}\n              </option>\n            </select>\n          </div>\n\n          <div class=\"form-group row\" style=\"padding: 5px\">\n            <label for=\"\">Pickup Branch</label>\n            <select\n              [(ngModel)]=\"branch\"\n              [value]=\"branch\"\n              name=\"branch\"\n              id=\"\"\n              [ngModelOptions]=\"{ standalone: true }\"\n              class=\"input\"\n            >\n              <option *ngFor=\"let branch of branches\" [value]=\"branch\">\n                {{ branch }}\n              </option>\n            </select>\n          </div>\n\n          <!-- <div class=\"form-group row\" style=\"padding: 5px\">\n          <label for=\"\">New Password</label>\n          <input\n            type=\"password\"\n            name=\"newPassword\"\n            class=\"input\"\n            placeholder=\"Password\"\n          />\n        </div>\n\n        <div class=\"form-group row\" style=\"padding: 5px\">\n          <label for=\"\">Confirm New Password</label>\n          <input\n            type=\"password\"\n            name=\"confirmPassword\"\n            class=\"input\"\n            placeholder=\"Password\"\n          />\n        </div> -->\n\n          <ion-button\n            class=\"btn2\"\n            style=\"\n              width: 100%;\n              max-width: 300px;\n              margin: auto;\n              margin-top: 20px;\n              display: flex;\n            \"\n            (click)=\"check()\"\n            >Request</ion-button\n          >\n        </form>\n      </section>\n\n      <section *ngIf=\"!newReq\">\n        <section *ngIf=\"history.length === 0\">\n          <div\n            style=\"\n              background-color: #f8f8f8;\n              border-radius: 8px;\n              text-align: left;\n              padding: 20px;\n            \"\n          >\n            No Record Available\n          </div>\n        </section>\n        <section *ngIf=\"history.length > 0\">\n          <div\n            style=\"\n              background-color: #f8f8f8;\n              border-radius: 8px;\n              text-align: left;\n              padding: 20px;\n              margin: 10px 0;\n            \"\n            *ngFor=\"let data of history\"\n          >\n            <table>\n              <tr>\n                <th>Status</th>\n                <td>\n                  <ion-button\n                    *ngIf=\"data.status === 'Pending'\"\n                    size=\"small\"\n                    style=\"--background: #ff5a5a; --color: #fff\"\n                    >Pending</ion-button\n                  ><ion-button\n                    *ngIf=\"data.status !== 'Pending'\"\n                    size=\"small\"\n                    style=\"--background: #46ae6a; --color: #fff\"\n                    >Success</ion-button\n                  >\n                </td>\n              </tr>\n              <tr>\n                <th>Account Number</th>\n                <td>{{ data.accountNo }}</td>\n              </tr>\n              <tr>\n                <th>Card Type</th>\n                <td>{{ data.cardType }}</td>\n              </tr>\n              <tr>\n                <th>Request Date</th>\n                <td>{{ data.createdDate | date }}</td>\n              </tr>\n\n              <tr>\n                <th>Pickup Branch</th>\n                <td>{{ data.branch }}</td>\n              </tr>\n            </table>\n          </div>\n        </section>\n      </section>\n    </section>\n  </section>\n</ion-content>\n";

/***/ }),

/***/ 7382:
/*!************************************************************************************!*\
  !*** ./src/app/modules/account-info/reset-pin/reset-pin.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <section style=\"background-color: #25214f\">\r\n    <app-add-fund (exit)=\"close()\" *ngIf=\"show\"></app-add-fund>\r\n    <app-loader *ngIf=\"loading\"></app-loader>\r\n    <app-pin\r\n      (close)=\"closePass()\"\r\n      (loading)=\"load()\"\r\n      (done)=\"finish()\"\r\n      *ngIf=\"pass\"\r\n    ></app-pin>\r\n\r\n    <div style=\"height: 30px\"></div>\r\n    <div\r\n      style=\"\r\n        padding: 20px;\r\n        width: 100%;\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        justify-content: center;\r\n        background-color: #25214f;\r\n        color: #fff;\r\n        padding: 20px 30px;\r\n      \"\r\n    >\r\n      <div style=\"border-radius: 50%; margin: 10px 0\">\r\n        <ion-img\r\n          [src]=\"photo\"\r\n          style=\"width: 70px; height: 70px; margin: auto; border-radius: 50%\"\r\n          class=\"userImg\"\r\n        ></ion-img>\r\n      </div>\r\n      <span>{{ user.firstName }} {{ user.lastName }}</span>\r\n\r\n      <ion-button id=\"details\" size=\"small\" (click)=\"show = true\"\r\n        >Show Details</ion-button\r\n      >\r\n    </div>\r\n    <section\r\n      style=\"\r\n        background-color: white;\r\n        border-top-left-radius: 50px;\r\n        border-top-right-radius: 50px;\r\n        padding: 0 20px;\r\n        padding-top: 50px;\r\n      \"\r\n    >\r\n      <div style=\"font-size: 25px; text-align: center; padding-bottom: 20px\">\r\n        {{ title }}\r\n      </div>\r\n      <form>\r\n        <div\r\n          *ngIf=\"title === 'Reset Pin'\"\r\n          class=\"form-group row\"\r\n          style=\"padding: 5px\"\r\n        >\r\n          <label for=\"\">Old Pin (4 digits)</label>\r\n          <input\r\n            type=\"text\"\r\n            name=\"pin\"\r\n            class=\"input\"\r\n            placeholder=\" Old pin\"\r\n            [(ngModel)]=\"pin\"\r\n            [ngModelOptions]=\"{ standalone: true }\"\r\n            (ngModelChange)=\"checkLength1($event, 'pin')\"\r\n          />\r\n        </div>\r\n\r\n        <div class=\"form-group row\" style=\"padding: 5px\">\r\n          <label for=\"\">New Pin (4 digits)</label>\r\n          <input\r\n            type=\"text\"\r\n            name=\"newPassword\"\r\n            class=\"input\"\r\n            placeholder=\"4 digits pin\"\r\n            [(ngModel)]=\"pinNew\"\r\n            [ngModelOptions]=\"{ standalone: true }\"\r\n            (ngModelChange)=\"checkLength1($event, 'pinNew')\"\r\n          />\r\n        </div>\r\n\r\n        <div class=\"form-group row\" style=\"padding: 5px\">\r\n          <label for=\"\">Confirm New Pin (4 digits)</label>\r\n          <input\r\n            type=\"text\"\r\n            name=\"confirmPassword\"\r\n            class=\"input\"\r\n            placeholder=\"Confirm pin\"\r\n            [(ngModel)]=\"pinConfirm\"\r\n            (ngModelChange)=\"checkLength1($event, 'pinConfirm')\"\r\n            [ngModelOptions]=\"{ standalone: true }\"\r\n          />\r\n        </div>\r\n\r\n        <ion-button\r\n          class=\"btn2\"\r\n          style=\"\r\n            width: 100%;\r\n            max-width: 300px;\r\n            margin: auto;\r\n            margin-top: 20px;\r\n            display: flex;\r\n          \"\r\n          (click)=\"check()\"\r\n          >Change Pin</ion-button\r\n        >\r\n      </form>\r\n    </section>\r\n  </section>\r\n</ion-content>\r\n";

/***/ }),

/***/ 53845:
/*!*******************************************************************!*\
  !*** ./src/app/modules/airtime/airtime.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <section style=\"background-color: #25214f\">\r\n    <div style=\"height: 70px\"></div>\r\n    <app-loader *ngIf=\"loading\"></app-loader>\r\n    <div\r\n      style=\"\r\n        padding: 20px;\r\n        width: 100%;\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        justify-content: center;\r\n        background-color: #25214f;\r\n        color: #fff;\r\n        padding-top: 40px;\r\n      \"\r\n    >\r\n      <div\r\n        style=\"\r\n          background: linear-gradient(\r\n            180deg,\r\n            #ffe278 0%,\r\n            rgba(255, 226, 120, 0.55) 100%\r\n          );\r\n          padding: 20px 30px;\r\n          text-align: left;\r\n          width: 100%;\r\n          max-width: 400px;\r\n          margin: auto;\r\n          border-radius: 10px;\r\n          color: #25214f;\r\n        \"\r\n      >\r\n        <div style=\"font-size: 15px\">\r\n          {{ user.accountType }} {{ user?.accountNos[0]?.accountNo }}\r\n        </div>\r\n        <div\r\n          style=\"\r\n            border: 1px solid #25214f;\r\n            padding: 10px;\r\n            width: 100%;\r\n            display: flex;\r\n            justify-content: space-between;\r\n            align-items: center;\r\n            margin-top: 20px;\r\n          \"\r\n        >\r\n          <div>Balance:</div>\r\n          <div style=\"font-size: 20px\">\r\n            {{ user?.accountNos[0]?.accountBalance | currency: \"&#8358;\" }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <app-pin\r\n      (close)=\"close()\"\r\n      (loading)=\"load()\"\r\n      (done)=\"finish()\"\r\n      *ngIf=\"show\"\r\n    ></app-pin>\r\n    <section\r\n      *ngIf=\"transType === 0\"\r\n      style=\"\r\n        margin-top: 10px;\r\n        background-color: white;\r\n        border-top-left-radius: 50px;\r\n        border-top-right-radius: 50px;\r\n        padding: 0 20px;\r\n        padding-top: 50px;\r\n      \"\r\n    >\r\n      <div *ngIf=\"!loading\" style=\"font-size: 20px; text-align: left\">Data</div>\r\n      <div\r\n        *ngFor=\"let data of subs\"\r\n        style=\"\r\n          font-family: Mulish !important;\r\n          display: flex;\r\n          flex-direction: row;\r\n          justify-content: space-around;\r\n          cursor: pointer;\r\n          margin: 1.5rem 0.5rem;\r\n        \"\r\n        (click)=\"transactionType(2, data.code)\"\r\n      >\r\n        <div class=\"icon-container\">\r\n          <!-- <ion-icon name=\"send\" class=\"inner-icon\"></ion-icon> -->\r\n          <ion-icon name=\"phone-portrait\" class=\"inner-icon\"></ion-icon>\r\n        </div>\r\n        <span\r\n          style=\"\r\n            margin: auto;\r\n            text-align: left;\r\n            padding-left: 20px;\r\n            font-size: 20px;\r\n            width: 100%;\r\n          \"\r\n          >{{ data.name }}</span\r\n        >\r\n      </div>\r\n      <div *ngIf=\"!loading\" style=\"font-size: 20px; text-align: left\">\r\n        Airtime\r\n      </div>\r\n\r\n      <div\r\n        *ngFor=\"let data of vars\"\r\n        style=\"\r\n          font-family: Mulish !important;\r\n          display: flex;\r\n          flex-direction: row;\r\n          justify-content: space-around;\r\n          cursor: pointer;\r\n          margin: 1.5rem 0.5rem;\r\n        \"\r\n        (click)=\"transactionType(2, data.code)\"\r\n      >\r\n        <div class=\"icon-container\">\r\n          <!-- <ion-icon name=\"send\" class=\"inner-icon\"></ion-icon> -->\r\n          <ion-icon name=\"phone-portrait\" class=\"inner-icon\"></ion-icon>\r\n        </div>\r\n        <span\r\n          style=\"\r\n            margin: auto;\r\n            text-align: left;\r\n            padding-left: 20px;\r\n            font-size: 20px;\r\n            width: 100%;\r\n          \"\r\n          >{{ data.name }}</span\r\n        >\r\n      </div>\r\n    </section>\r\n\r\n    <section\r\n      *ngIf=\"transType === 2\"\r\n      style=\"\r\n        margin-top: 10px;\r\n        background-color: white;\r\n        border-top-left-radius: 10%;\r\n        border-top-right-radius: 10%;\r\n        padding: 0 20px;\r\n        padding-top: 50px;\r\n      \"\r\n    >\r\n      <div\r\n        class=\"row\"\r\n        style=\"\r\n          display: flex;\r\n          flex-direction: row;\r\n          justify-content: space-between;\r\n          margin-top: 30px;\r\n        \"\r\n      >\r\n        <ion-button\r\n          (click)=\"toggleRequest(true)\"\r\n          [ngClass]=\"{ active: selectedBtn === true }\"\r\n          style=\"width: 100%; --border-radius: none\"\r\n        >\r\n          New\r\n        </ion-button>\r\n\r\n        <ion-button\r\n          (click)=\"toggleRequest(false)\"\r\n          size=\"medium\"\r\n          [ngClass]=\"{ active: selectedBtn1 === true }\"\r\n          style=\"width: 100%; --border-radius: none\"\r\n        >\r\n          Beneficiary\r\n        </ion-button>\r\n      </div>\r\n\r\n      <div *ngIf=\"newReq\">\r\n        <div class=\"form-group row\" style=\"padding: 5px\">\r\n          <label for=\"\">Select Account</label>\r\n          <select [(ngModel)]=\"accNum\" name=\"account\" id=\"\" class=\"input\">\r\n            <option\r\n              *ngFor=\"let data of user.accountNos\"\r\n              [value]=\"data.accountNo\"\r\n            >\r\n              {{ data.accountNo }} ({{\r\n                data.accountBalance | currency: \"&#8358;\"\r\n              }})\r\n            </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group row\" style=\"padding: 5px\">\r\n          <label for=\"\">Phone Number</label>\r\n          <input\r\n            [(ngModel)]=\"phoneNumber\"\r\n            type=\"text\"\r\n            name=\"mobile\"\r\n            class=\"input\"\r\n            placeholder=\"08079172267\"\r\n          />\r\n        </div>\r\n\r\n        <div class=\"form-group row\" style=\"padding: 5px\">\r\n          <label for=\"\">Select Bundle</label>\r\n          <select [(ngModel)]=\"productCode\" name=\"bank\" id=\"\" class=\"input\">\r\n            <!-- <option value=\"\">-- Select Type --</option> -->\r\n            <option *ngFor=\"let data of products\" [value]=\"data.productCode\">\r\n              {{ data.productTitle }} ({{\r\n                data.productPrice | currency: \"&#8358;\"\r\n              }})\r\n            </option>\r\n          </select>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <ion-button\r\n            class=\"btn\"\r\n            expand=\"block\"\r\n            style=\"margin-top: 1rem\"\r\n            (click)=\"check()\"\r\n            style=\"color: white\"\r\n          >\r\n            Send\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"!newReq\">\r\n        <div\r\n          (click)=\"new()\"\r\n          style=\"\r\n            margin: 20px 0;\r\n            cursor: pointer;\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: center;\r\n          \"\r\n        >\r\n          Add <ion-icon name=\"add\"></ion-icon>\r\n        </div>\r\n        <div *ngIf=\"add\">\r\n          <input\r\n            type=\"text\"\r\n            class=\"input\"\r\n            placeholder=\"name\"\r\n            name=\"name\"\r\n            style=\"margin-bottom: 10px\"\r\n            [(ngModel)]=\"name\"\r\n          />\r\n          <input\r\n            type=\"text\"\r\n            class=\"input\"\r\n            placeholder=\"Number\"\r\n            name=\"number\"\r\n            [(ngModel)]=\"benNum\"\r\n          />\r\n          <ion-button\r\n            class=\"btn\"\r\n            expand=\"block\"\r\n            style=\"margin-top: 1rem\"\r\n            (click)=\"adds()\"\r\n          >\r\n            Add\r\n          </ion-button>\r\n        </div>\r\n\r\n        <div class=\"row-one\">\r\n          <span style=\"text-align: left\" *ngIf=\"benes.length === 0\"\r\n            >No beneficiary found</span\r\n          >\r\n          <div\r\n            style=\"\r\n              background-color: #f8f8f8;\r\n              border-radius: 8px;\r\n              margin-top: 5px;\r\n            \"\r\n            *ngFor=\"let data of benes\"\r\n            (click)=\"use(data.phoneNumber)\"\r\n          >\r\n            <ion-card-content style=\"display: flex; flex-direction: row\">\r\n              <ion-icon\r\n                name=\"person\"\r\n                style=\"\r\n                  margin-right: 10px;\r\n                  font-size: 20px;\r\n                  color: #25214f;\r\n                  width: 10%;\r\n                \"\r\n              ></ion-icon>\r\n\r\n              <div\r\n                style=\"\r\n                  font-size: 13px;\r\n                  display: flex;\r\n                  flex-direction: column;\r\n                  width: 80%;\r\n                \"\r\n              >\r\n                <span style=\"text-align: left; font-weight: 800\"\r\n                  >{{ data.name }}\r\n                </span>\r\n                <span style=\"text-align: left\">{{ data.phoneNumber }} </span>\r\n              </div>\r\n              <ion-icon\r\n                name=\"trash\"\r\n                style=\"\r\n                  margin-right: 10px;\r\n                  font-size: 20px;\r\n                  color: #25214f;\r\n                  width: 10%;\r\n                \"\r\n                (click)=\"delete(data.phoneNumber)\"\r\n              ></ion-icon>\r\n            </ion-card-content>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n\r\n    <section *ngIf=\"transType === 9\">\r\n      <ion-card> </ion-card>\r\n    </section>\r\n  </section>\r\n</ion-content>\r\n";

/***/ }),

/***/ 28423:
/*!****************************************************************************!*\
  !*** ./src/app/modules/bills-payments/bills-payments.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <section style=\"background-color: #25214f\">\r\n    <div style=\"padding: 19px\"></div>\r\n    <app-loader *ngIf=\"loading\"></app-loader>\r\n    <div\r\n      style=\"\r\n        padding: 20px;\r\n        width: 100%;\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        justify-content: center;\r\n        background-color: #25214f;\r\n        color: #fff;\r\n        padding-top: 40px;\r\n      \"\r\n    >\r\n      <div\r\n        style=\"\r\n          background: linear-gradient(\r\n            180deg,\r\n            #ffe278 0%,\r\n            rgba(255, 226, 120, 0.55) 100%\r\n          );\r\n          padding: 20px 30px;\r\n          text-align: left;\r\n          width: 100%;\r\n          max-width: 400px;\r\n          margin: auto;\r\n          border-radius: 10px;\r\n          color: #25214f;\r\n        \"\r\n      >\r\n        <div style=\"font-size: 15px\">\r\n          {{ user.accountType }} {{ user?.accountNos[0]?.accountNo }}\r\n        </div>\r\n        <div\r\n          style=\"\r\n            border: 1px solid #25214f;\r\n            padding: 10px;\r\n            width: 100%;\r\n            display: flex;\r\n            justify-content: space-between;\r\n            align-items: center;\r\n            margin-top: 20px;\r\n          \"\r\n        >\r\n          <div>Balance:</div>\r\n          <div style=\"font-size: 20px\">\r\n            {{ user?.accountNos[0]?.accountBalance | currency: \"&#8358;\" }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <section\r\n      style=\"\r\n        display: flex;\r\n        flex-direction: row;\r\n        flex-wrap: wrap;\r\n        justify-content: center;\r\n        margin: auto;\r\n        margin-top: 10px;\r\n        background-color: white;\r\n        border-top-left-radius: 50px;\r\n        border-top-right-radius: 50px;\r\n        padding: 0 22px;\r\n        padding-top: 50px;\r\n      \"\r\n    >\r\n      <div style=\"text-align: left; margin: 20px 0\">\r\n        <div\r\n          style=\"\r\n            font-weight: 700;\r\n            font-size: 24px;\r\n            line-height: 30px;\r\n            color: #25214f;\r\n          \"\r\n        >\r\n          Make a bill payment\r\n        </div>\r\n        <div\r\n          style=\"\r\n            font-weight: 400;\r\n            font-size: 12px;\r\n            line-height: 200%;\r\n            color: #8b91a5;\r\n          \"\r\n        >\r\n          Select the type of bill you want to pay\r\n        </div>\r\n      </div>\r\n      <div style=\"width: 90vw; display: flex; flex-wrap: wrap\">\r\n        <div\r\n          *ngFor=\"let item of billCategories\"\r\n          class=\"icons-bg\"\r\n          [routerLink]=\"['products']\"\r\n          [queryParams]=\"{id: item.id}\"\r\n          routerLinkActive=\"router-link-active\"\r\n        >\r\n          <div class=\"name\">\r\n            <div>{{item.name}}</div>\r\n            <ion-img src=\"assets/icon/ar.png\" style=\"width: 30px\"></ion-img>\r\n          </div>\r\n          <ion-img\r\n            src=\"{{'assets/icon/'+ item.code +'.svg'}}\"\r\n            class=\"icons\"\r\n          ></ion-img>\r\n        </div>\r\n      </div>\r\n      <!-- <div class=\"icons-bg\"  [routerLink]=\"['addfund']\" routerLinkActive=\"router-link-active\" >\r\n  <ion-img\r\n    src=\"assets/icon/internet.png\"\r\n    class=\"icons\"\r\n  ></ion-img>\r\n  <div>\r\n    Internet Service\r\n  </div>\r\n</div>\r\n<div class=\"icons-bg\"  [routerLink]=\"['borrow']\" routerLinkActive=\"router-link-active\" >\r\n  <ion-img\r\n    src=\"assets/icon/health.png\"\r\n    class=\"icons\"\r\n  ></ion-img>\r\n  <div>\r\n    Insurance\r\n  </div>\r\n</div>\r\n\r\n<div class=\"icons-bg\"  [routerLink]=\"['transfer']\" routerLinkActive=\"router-link-active\" >\r\n  <ion-img\r\n    src=\"assets/icon/church.png\"\r\n    class=\"icons\"\r\n  ></ion-img>\r\n  <div>\r\n    church Payment\r\n  </div>\r\n</div>\r\n<div class=\"icons-bg\"  [routerLink]=\"['addfund']\" routerLinkActive=\"router-link-active\" >\r\n  <ion-img\r\n    src=\"assets/icon/school.png\"\r\n    class=\"icons\"\r\n  ></ion-img>\r\n  <div>\r\n    School Fees\r\n  </div>\r\n</div>\r\n<div class=\"icons-bg\"  [routerLink]=\"['borrow']\" routerLinkActive=\"router-link-active\" >\r\n  <ion-img\r\n    src=\"assets/icon/utility.png\"\r\n    class=\"icons\"\r\n  ></ion-img>\r\n  <div>\r\n    Utility\r\n  </div>\r\n</div> -->\r\n      <!-- </section>\r\n\r\n<section\r\nstyle=\"\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  margin-top: 10px;\r\n\"\r\n> -->\r\n      <!-- <div class=\"icons-bg\"  [routerLink]=\"['transfer']\" routerLinkActive=\"router-link-active\" >\r\n  <ion-img\r\n    src=\"assets/icon/data.png\"\r\n    class=\"icons\"\r\n  ></ion-img>\r\n  <div>\r\n    Airtime\r\n  </div>\r\n</div>\r\n<div class=\"icons-bg\"  [routerLink]=\"['addfund']\" routerLinkActive=\"router-link-active\" >\r\n  <ion-img\r\n    src=\"assets/icon/tax.png\"\r\n    class=\"icons\"\r\n  ></ion-img>\r\n  <div>\r\n    Taxes\r\n  </div>\r\n</div>\r\n<div class=\"icons-bg\"  [routerLink]=\"['borrow']\" routerLinkActive=\"router-link-active\" >\r\n  <ion-img\r\n    src=\"assets/icon/airline.png\"\r\n    class=\"icons\"\r\n  ></ion-img>\r\n  <div>\r\n    Airline\r\n  </div>\r\n</div> -->\r\n    </section>\r\n  </section>\r\n</ion-content>\r\n";

/***/ }),

/***/ 42998:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/bills-payments/cabletv/cabletv.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- <ion-content>\r\n  <div style=\"padding: 50px;\"></div>\r\n\r\n  <section *ngIf=\"transType === 0\">\r\n\r\n    <div *ngFor=\"let item of billProducts\" style=\"\r\n    font-family: Mulish !important;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    align-items: center;\r\n    font-size: 20px;\r\n    margin: 1rem 0;\"\r\n    (click)=\"transactionType(1)\">\r\n      <div class=\"icon-container\">\r\n        <ion-icon name=\"radio-outline\" class=\"inner-icon\"></ion-icon>\r\n      </div>\r\n      <span style=\"margin: auto;\">{{item.name}}</span>\r\n      <ion-icon name=\"caret-forward\" style=\"color: #25214f;\"></ion-icon>\r\n      </div>\r\n  </section>\r\n\r\n  <section *ngIf=\"transType ===1\">\r\n    <div style=\"height:100px\"></div>\r\n    <div style=\"height:100px\"></div>\r\n  <form [formGroup]=\"royalAccount\">\r\n          <div class=\"form-group row\" style=\"padding: 5px\">\r\n            <label for=\"\">Beneficiary</label>\r\n            <input\r\n              type=\"text\"\r\n              name=\"beneficiary\"\r\n              class=\"input\"\r\n              placeholder=\"1234567890\"\r\n            />\r\n          </div>\r\n\r\n          <div class=\"form-group row\" style=\"padding: 5px\">\r\n            <label for=\"\">Amount</label>\r\n            <input\r\n              type=\"text\"\r\n              name=\"amount\"\r\n              class=\"input\"\r\n              placeholder=\"100000\"\r\n            />\r\n          </div>\r\n\r\n          <div class=\"form-group row\" style=\"padding: 5px\">\r\n            <label for=\"\">Narration</label>\r\n            <input\r\n              type=\"text\"\r\n              name=\"narration\"\r\n              class=\"input\"\r\n              placeholder=\"1234567890\"\r\n            />\r\n          </div>\r\n\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <ion-button\r\n              class=\"btn\"\r\n              expand=\"block\"\r\n              style=\"margin-top: 1rem\"\r\n              (click)=\"next()\"\r\n              routerLinkActive=\"router-link-active\"\r\n            >\r\n              Transfer\r\n            </ion-button>\r\n          </div>\r\n        </form>\r\n  </section>\r\n\r\n  <section *ngIf=\"transType ===2\">\r\n    <div style=\"height:100px\"></div>\r\n    <form [formGroup]=\"othersAccount\">\r\n            <div class=\"form-group row\" style=\"padding: 5px\">\r\n              <label for=\"\">Beneficiary</label>\r\n              <input\r\n                type=\"text\"\r\n                name=\"beneficiary\"\r\n                class=\"input\"\r\n                placeholder=\"1234567890\"\r\n              />\r\n            </div>\r\n\r\n            <div class=\"form-group row\" style=\"padding: 5px\">\r\n              <label for=\"\">Bank</label>\r\n              <select name=\"bank\" id=\"\" class=\"input\">\r\n                <option value=\"1\">Access</option>\r\n                <option value=\"1\">GTB</option>\r\n                <option value=\"1\">UBA</option>\r\n              </select>\r\n            </div>\r\n\r\n            <div class=\"form-group row\" style=\"padding: 5px\">\r\n              <label for=\"\">Amount</label>\r\n              <input\r\n                type=\"text\"\r\n                name=\"amount\"\r\n                class=\"input\"\r\n                placeholder=\"100000\"\r\n              />\r\n            </div>\r\n\r\n            <div class=\"form-group row\" style=\"padding: 5px\">\r\n              <label for=\"\">Narration</label>\r\n              <input\r\n                type=\"text\"\r\n                name=\"narration\"\r\n                class=\"input\"\r\n                placeholder=\"1234567890\"\r\n              />\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"form-group\">\r\n              <ion-button\r\n                class=\"btn\"\r\n                expand=\"block\"\r\n                style=\"margin-top: 1rem\"\r\n                (click)=\"next()\"\r\n                routerLinkActive=\"router-link-active\"\r\n              >\r\n                Transfer\r\n              </ion-button>\r\n            </div>\r\n          </form>\r\n    </section>\r\n\r\n    <section *ngIf=\"transType ===3\">\r\n      <div style=\"height:100px\"></div>\r\n        <div\r\n          style=\"\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content: space-between;\r\n            height: 100vh;\r\n          \"\r\n        >\r\n          <div>\r\n            <span style=\"text-align: center; font-size: 25px; font-weight: 500;\">Transfer Successful</span>\r\n            <section class=\"central-image\" style=\"height: 200px\">\r\n              <ion-img [src]=\"imageSrc\" class=\"img\"></ion-img>\r\n            </section>\r\n\r\n          </div>\r\n\r\n          <section\r\n            style=\"\r\n              display: flex;\r\n              flex-direction: column;\r\n              align-content: space-between;\r\n            \"\r\n          >\r\n            <ion-button class=\"btn\" expand=\"block\" (click)=\"create()\">\r\n              Go To Dashboard\r\n            </ion-button>\r\n          </section>\r\n        </div>\r\n    </section>\r\n\r\n</ion-content> -->\r\n";

/***/ }),

/***/ 87799:
/*!************************************************************************************!*\
  !*** ./src/app/modules/bills-payments/products/products.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <section style=\"background-color: #25214f\">\r\n    <div style=\"height: 50px\"></div>\r\n    <app-loader *ngIf=\"loading\"></app-loader>\r\n    <app-pin\r\n      (close)=\"close()\"\r\n      (loading)=\"load()\"\r\n      (done)=\"finish()\"\r\n      *ngIf=\"show\"\r\n    ></app-pin>\r\n    <div\r\n      style=\"\r\n        padding: 20px;\r\n        width: 100%;\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        justify-content: center;\r\n        background-color: #25214f;\r\n        color: #fff;\r\n        padding-top: 40px;\r\n      \"\r\n    >\r\n      <div\r\n        style=\"\r\n          background: linear-gradient(\r\n            180deg,\r\n            #ffe278 0%,\r\n            rgba(255, 226, 120, 0.55) 100%\r\n          );\r\n          padding: 20px 30px;\r\n          text-align: left;\r\n          width: 100%;\r\n          max-width: 400px;\r\n          margin: auto;\r\n          border-radius: 10px;\r\n          color: #25214f;\r\n        \"\r\n      >\r\n        <div style=\"font-size: 15px\">\r\n          {{ user.accountType }} {{ user?.accountNos[0]?.accountNo }}\r\n        </div>\r\n        <div\r\n          style=\"\r\n            border: 1px solid #25214f;\r\n            padding: 10px;\r\n            width: 100%;\r\n            display: flex;\r\n            justify-content: space-between;\r\n            align-items: center;\r\n            margin-top: 20px;\r\n          \"\r\n        >\r\n          <div>Balance:</div>\r\n          <div style=\"font-size: 20px\">\r\n            {{ user?.accountNos[0]?.accountBalance | currency: \"&#8358;\" }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <section\r\n      *ngIf=\"transType === 0\"\r\n      style=\"\r\n        margin-top: 10px;\r\n        background-color: white;\r\n        border-top-left-radius: 50px;\r\n        border-top-right-radius: 50px;\r\n        padding: 0 20px;\r\n        padding-top: 50px;\r\n      \"\r\n    >\r\n      <div\r\n        *ngFor=\"let data of vars\"\r\n        style=\"\r\n          font-family: Mulish !important;\r\n          display: flex;\r\n          flex-direction: row;\r\n          justify-content: space-around;\r\n          cursor: pointer;\r\n          margin: 1.5rem 0.5rem;\r\n        \"\r\n        (click)=\"transactionType(2, data.code)\"\r\n      >\r\n        <div class=\"icon-container\">\r\n          <!-- <ion-icon name=\"send\" class=\"inner-icon\"></ion-icon> -->\r\n          <ion-icon name=\"phone-portrait\" class=\"inner-icon\"></ion-icon>\r\n        </div>\r\n        <span\r\n          style=\"\r\n            margin: auto;\r\n            text-align: left;\r\n            padding-left: 20px;\r\n            font-size: 20px;\r\n            width: 100%;\r\n          \"\r\n          >{{ data.name }}</span\r\n        >\r\n      </div>\r\n    </section>\r\n\r\n    <section\r\n      *ngIf=\"transType === 2\"\r\n      style=\"\r\n        margin-top: 10px;\r\n        background-color: white;\r\n        border-top-left-radius: 50px;\r\n        border-top-right-radius: 50px;\r\n        padding: 0 20px;\r\n        padding-top: 50px;\r\n      \"\r\n    >\r\n      <div\r\n        *ngIf=\"typeCode === 2 || typeCode === 4\"\r\n        class=\"row\"\r\n        style=\"\r\n          display: flex;\r\n          flex-direction: row;\r\n          justify-content: space-between;\r\n          margin-top: 30px;\r\n        \"\r\n      >\r\n        <ion-button\r\n          (click)=\"toggleRequest(true)\"\r\n          [ngClass]=\"{ active: selectedBtn === true }\"\r\n          style=\"width: 100%; --border-radius: none\"\r\n        >\r\n          New\r\n        </ion-button>\r\n\r\n        <ion-button\r\n          (click)=\"toggleRequest(false)\"\r\n          size=\"medium\"\r\n          [ngClass]=\"{ active: selectedBtn1 === true }\"\r\n          style=\"width: 100%; --border-radius: none\"\r\n        >\r\n          Beneficiary\r\n        </ion-button>\r\n      </div>\r\n\r\n      <div *ngIf=\"newReq\">\r\n        <div class=\"form-group row\" style=\"padding: 5px\">\r\n          <label for=\"\">Select Account</label>\r\n          <select [(ngModel)]=\"accNum\" name=\"account\" id=\"\" class=\"input\">\r\n            <option\r\n              *ngFor=\"let data of user.accountNos\"\r\n              [value]=\"data.accountNo\"\r\n            >\r\n              {{ data.accountNo }} ({{\r\n                data.accountBalance | currency: \"&#8358;\"\r\n              }})\r\n            </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"row\" style=\"padding: 5px\">\r\n          <label *ngIf=\"typeCode === 1\" for=\"\">Decoder Number</label>\r\n          <label *ngIf=\"typeCode === 2 || typeCode === 4\" for=\"\"\r\n            >Phone Number</label\r\n          >\r\n          <label\r\n            *ngIf=\"\r\n              typeCode === 3 ||\r\n              typeCode === 5 ||\r\n              typeCode === 6 ||\r\n              typeCode === 7 ||\r\n              typeCode === 9\r\n            \"\r\n            for=\"\"\r\n            >Customer ID</label\r\n          >\r\n\r\n          <input\r\n            *ngIf=\"typeCode === 1\"\r\n            [(ngModel)]=\"phoneNumber\"\r\n            type=\"text\"\r\n            name=\"mobile\"\r\n            class=\"input\"\r\n            placeholder=\"Decoder Number\"\r\n          />\r\n          <input\r\n            *ngIf=\"typeCode === 2 || typeCode === 4\"\r\n            [(ngModel)]=\"phoneNumber\"\r\n            type=\"text\"\r\n            name=\"mobile\"\r\n            class=\"input\"\r\n            placeholder=\"08079172267\"\r\n          />\r\n\r\n          <input\r\n            *ngIf=\"\r\n              typeCode === 3 ||\r\n              typeCode === 5 ||\r\n              typeCode === 6 ||\r\n              typeCode === 7 ||\r\n              typeCode === 9\r\n            \"\r\n            [(ngModel)]=\"phoneNumber\"\r\n            type=\"text\"\r\n            name=\"mobile\"\r\n            class=\"input\"\r\n            placeholder=\"Customer ID\"\r\n          />\r\n        </div>\r\n\r\n        <div class=\"row\" style=\"padding: 5px\">\r\n          <label for=\"\">Select Bundle</label>\r\n          <select [(ngModel)]=\"productCode\" name=\"product\" id=\"\" class=\"input\">\r\n            <!-- <option value=\"\">-- Select Type --</option> -->\r\n            <option *ngFor=\"let data of products\" [value]=\"data.productCode\">\r\n              {{ data.productTitle }} ({{\r\n                data.productPrice | currency: \"&#8358;\"\r\n              }})\r\n            </option>\r\n          </select>\r\n        </div>\r\n\r\n        <div>\r\n          <ion-button\r\n            class=\"btn\"\r\n            expand=\"block\"\r\n            style=\"margin-top: 1rem\"\r\n            (click)=\"check()\"\r\n            style=\"color: white\"\r\n          >\r\n            Send\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"!newReq\">\r\n        <!-- <div class=\" row\" style=\"padding: 5px\">\r\n        <label for=\"\">Search Beneficiary</label>\r\n        <input type=\"text\" class=\"input\" placeholder=\"Search..\" name=\"search\" />\r\n        <ion-icon\r\n          name=\"search\"\r\n          style=\"margin-top: -34px; margin-left: 7px\"\r\n        ></ion-icon>\r\n      </div> -->\r\n        <div\r\n          (click)=\"new()\"\r\n          style=\"\r\n            margin: 20px 0;\r\n            cursor: pointer;\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: center;\r\n          \"\r\n        >\r\n          Add <ion-icon name=\"add\" style=\"font-size: 20px\"></ion-icon>\r\n        </div>\r\n\r\n        <div *ngIf=\"add\">\r\n          <div class=\"row\" style=\"padding: 5px\">\r\n            <input\r\n              type=\"text\"\r\n              class=\"input\"\r\n              placeholder=\"Beneficiary Name\"\r\n              name=\"name\"\r\n              style=\"margin-bottom: 10px\"\r\n              [(ngModel)]=\"name\"\r\n            />\r\n          </div>\r\n          <div class=\"row\" style=\"padding: 5px\">\r\n            <input\r\n              type=\"text\"\r\n              class=\"input\"\r\n              placeholder=\"Beneficiary Number\"\r\n              name=\"number\"\r\n              [(ngModel)]=\"benNum\"\r\n            />\r\n          </div>\r\n          <div class=\"\">\r\n            <ion-button\r\n              class=\"btn\"\r\n              expand=\"block\"\r\n              style=\"margin-top: 1rem\"\r\n              (click)=\"adds()\"\r\n            >\r\n              Add\r\n            </ion-button>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row-one\">\r\n          <span style=\"text-align: left\" *ngIf=\"benes.length === 0\"\r\n            >No beneficiary found</span\r\n          >\r\n          <div\r\n            style=\"\r\n              background-color: #f8f8f8;\r\n              border-radius: 8px;\r\n              margin-top: 5px;\r\n            \"\r\n            *ngFor=\"let data of benes\"\r\n            (click)=\"use(data.phoneNumber)\"\r\n          >\r\n            <ion-card-content style=\"display: flex; flex-direction: row\">\r\n              <ion-icon\r\n                name=\"person\"\r\n                style=\"\r\n                  margin-right: 10px;\r\n                  font-size: 20px;\r\n                  color: #25214f;\r\n                  width: 10%;\r\n                \"\r\n              ></ion-icon>\r\n\r\n              <div\r\n                style=\"\r\n                  font-size: 13px;\r\n                  display: flex;\r\n                  flex-direction: column;\r\n                  width: 80%;\r\n                \"\r\n              >\r\n                <span style=\"text-align: left; font-weight: 800\"\r\n                  >{{ data.name }}\r\n                </span>\r\n                <span style=\"text-align: left\">{{ data.phoneNumber }} </span>\r\n              </div>\r\n              <ion-icon\r\n                name=\"trash\"\r\n                style=\"\r\n                  margin-right: 10px;\r\n                  font-size: 25px;\r\n                  color: #25214f;\r\n                  width: 10%;\r\n                \"\r\n                (click)=\"delete(data.phoneNumber)\"\r\n              ></ion-icon>\r\n            </ion-card-content>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n\r\n    <section *ngIf=\"transType === 9\">\r\n      <ion-card> </ion-card>\r\n    </section>\r\n  </section>\r\n</ion-content>\r\n";

/***/ }),

/***/ 97526:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/choose-signin/choose-signin.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content class=\"content\">\r\n  <div style=\"height: 50px\"></div>\r\n\r\n  <section class=\"row\">\r\n    <!-- <ion-thumbnail>\r\n      <ion-img [src]=\"source\" class=\"img\"></ion-img>\r\n    </ion-thumbnail> -->\r\n  </section>\r\n  <section class=\"central-image\" style=\"height: 100px\">\r\n    <ion-img [src]=\"source1\" class=\"img\"></ion-img>\r\n  </section>\r\n\r\n  <section class=\"central-image\" style=\"height: 200px\">\r\n    <ion-img [src]=\"imageSrc\" class=\"img\"></ion-img>\r\n  </section>\r\n\r\n  <section class=\"central-image\" style=\"height: 100px\">\r\n    <ion-img [src]=\"source\" class=\"img\"></ion-img>\r\n  </section>\r\n\r\n  <section style=\"text-align: center\">\r\n    <section class=\"row\">\r\n      <p class=\"sub-title\" style=\"font-family: Mulish !important;\">Get a bank account in less than 5 minutes</p>\r\n    </section>\r\n  </section>\r\n\r\n  <section\r\n    style=\"display: flex; flex-direction: column; align-content: space-between\"\r\n  >\r\n    <ion-button class=\"btn\" expand=\"block\" (click)=\"create()\" style=\"font-family: Mulish !important;\">\r\n      Create Account\r\n    </ion-button>\r\n\r\n    <ion-button\r\n      class=\"btn2\"\r\n      expand=\"block\"\r\n      style=\"margin-top: 1rem\"\r\n      (click)=\"sign()\"\r\n      style=\"font-family: Mulish !important;\"\r\n    >\r\n      Sign In\r\n    </ion-button>\r\n  </section>\r\n</ion-content>\r\n";

/***/ }),

/***/ 18649:
/*!******************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div style=\"height: 70px\"></div>\r\n  <app-loader *ngIf=\"loading\"></app-loader>\r\n  <app-add-fund (exit)=\"close()\" *ngIf=\"show\"></app-add-fund>\r\n  <app-balance></app-balance>\r\n\r\n  <section\r\n    style=\"\r\n      display: flex;\r\n      flex-direction: row;\r\n      justify-content: space-evenly;\r\n      margin-top: 50px;\r\n    \"\r\n  >\r\n    <div\r\n      style=\"cursor: pointer\"\r\n      [routerLink]=\"['/action/transfer']\"\r\n      routerLinkActive=\"router-link-active\"\r\n    >\r\n      <ion-img\r\n        src=\"assets/icon/transfer.png\"\r\n        style=\"width: 55px; height: 55px\"\r\n      ></ion-img>\r\n      <div\r\n        style=\"\r\n          font-size: 13px;\r\n          padding-top: 5px;\r\n          text-align: center;\r\n          cursor: pointer;\r\n        \"\r\n      >\r\n        Transfer\r\n      </div>\r\n    </div>\r\n    <div\r\n      style=\"cursor: pointer\"\r\n      [routerLink]=\"['/action/loan']\"\r\n      routerLinkActive=\"router-link-active\"\r\n    >\r\n      <ion-img\r\n        src=\"assets/icon/save.png\"\r\n        style=\"width: 55px; height: 55px\"\r\n      ></ion-img>\r\n      <div\r\n        style=\"\r\n          font-size: 13px;\r\n          padding-top: 5px;\r\n          text-align: center;\r\n          cursor: pointer;\r\n        \"\r\n      >\r\n        Loan\r\n      </div>\r\n    </div>\r\n    <div\r\n      style=\"cursor: pointer\"\r\n      [routerLink]=\"['/action/bills-payment/products']\"\r\n      routerLinkActive=\"router-link-active\"\r\n    >\r\n      <ion-img\r\n        src=\"assets/icon/borrow.png\"\r\n        style=\"width: 55px; height: 55px\"\r\n      ></ion-img>\r\n      <div\r\n        style=\"\r\n          font-size: 13px;\r\n          padding-top: 5px;\r\n          text-align: center;\r\n          cursor: pointer;\r\n        \"\r\n      >\r\n        Utility\r\n      </div>\r\n    </div>\r\n    <div style=\"cursor: pointer\" (click)=\"show = true\">\r\n      <ion-img\r\n        src=\"assets/icon/money.png\"\r\n        style=\"width: 55px; height: 55px; margin: auto\"\r\n      ></ion-img>\r\n      <div\r\n        style=\"\r\n          font-size: 13px;\r\n          padding-top: 5px;\r\n          text-align: center;\r\n          cursor: pointer;\r\n        \"\r\n      >\r\n        Add Fund\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <!-- <section style=\"margin-top: 50px\">\r\n    <div\r\n      style=\"\r\n        color: #FEE178 ;\r\n        font-size: 20px;\r\n        margin-top: 15px;\r\n        padding-bottom: 15px;\r\n        font-weight: 500;\r\n      \"\r\n    >\r\n      Your account is limied\r\n    </div>\r\n  </section> -->\r\n  <section\r\n    *ngIf=\"user.accountType !== 'Royal Basic' && upload !== 'true'\"\r\n    style=\"margin-top: 10px\"\r\n    [routerLink]=\"['/action/upload-document']\"\r\n  >\r\n    <div style=\"background-color: #f8f8f8; border-radius: 8px\">\r\n      <ion-card-header class=\"header\"\r\n        >Upload Documents for Verification</ion-card-header\r\n      >\r\n      <ion-card-content\r\n        style=\"\r\n          display: flex;\r\n          flex-direction: row;\r\n          justify-content: space-around;\r\n        \"\r\n      >\r\n        <span style=\"font-size: 12px; width: 80%\"\r\n          >Upload you CAC document with a valid ID card\r\n        </span>\r\n        <ion-img\r\n          src=\"assets/icon/card.png\"\r\n          style=\"width: 34px; height: 34px; width: 18%\"\r\n        ></ion-img>\r\n      </ion-card-content>\r\n    </div>\r\n  </section>\r\n\r\n  <section style=\"margin-top: 10px\" *ngIf=\"!limit\">\r\n    <div\r\n      style=\"background-color: #f8f8f8; border-radius: 8px\"\r\n      [routerLink]=\"['/action/account-info/limit']\"\r\n    >\r\n      <ion-card-header class=\"header\">Increase your limit</ion-card-header>\r\n      <ion-card-content\r\n        style=\"\r\n          display: flex;\r\n          flex-direction: row;\r\n          justify-content: space-around;\r\n        \"\r\n      >\r\n        <span\r\n          style=\"font-size: 13px; width: 80%\"\r\n          *ngIf=\"user.accountType === 'Royal Basic'\"\r\n          >This account is perfect for Individuals, Students, Freelancers,\r\n        </span>\r\n        <span\r\n          *ngIf=\"user.accountType !== 'Royal Basic'\"\r\n          style=\"font-size: 13px; width: 80%\"\r\n          >The account is perfect for business owners</span\r\n        >\r\n        <ion-img\r\n          src=\"assets/icon/upward-arrow.png\"\r\n          style=\"width: 34px; height: 34px; width: 18%\"\r\n        ></ion-img>\r\n      </ion-card-content>\r\n    </div>\r\n  </section>\r\n\r\n  <section\r\n    *ngIf=\"user.hasBVN === false || user.hasBVN === 'false'\"\r\n    style=\"margin-top: 10px\"\r\n    [routerLink]=\"['/action/profile']\"\r\n  >\r\n    <div style=\"background-color: #f8f8f8; border-radius: 8px\">\r\n      <ion-card-header class=\"header\">Add BVN</ion-card-header>\r\n      <ion-card-content\r\n        style=\"\r\n          display: flex;\r\n          flex-direction: row;\r\n          justify-content: space-around;\r\n        \"\r\n      >\r\n        <span style=\"font-size: 12px; width: 80%\"\r\n          >Add your bank verification number\r\n        </span>\r\n        <ion-img\r\n          src=\"assets/icon/card.png\"\r\n          style=\"width: 34px; height: 34px; width: 18%\"\r\n        ></ion-img>\r\n      </ion-card-content>\r\n    </div>\r\n  </section>\r\n\r\n  <section\r\n    style=\"margin-top: 10px\"\r\n    [routerLink]=\"['/action/account-info/request-card']\"\r\n    *ngIf=\"!isCard\"\r\n  >\r\n    <div style=\"background-color: #f8f8f8; border-radius: 8px\">\r\n      <ion-card-header class=\"header\"\r\n        >Request a Royal Bank Card</ion-card-header\r\n      >\r\n      <ion-card-content\r\n        style=\"\r\n          display: flex;\r\n          flex-direction: row;\r\n          justify-content: space-around;\r\n        \"\r\n      >\r\n        <span style=\"font-size: 12px; width: 80%\"\r\n          >We will send you your Royal Bank Card where ever you are for FREE\r\n        </span>\r\n        <ion-img\r\n          src=\"assets/icon/card.png\"\r\n          style=\"width: 34px; height: 34px; width: 18%\"\r\n        ></ion-img>\r\n      </ion-card-content>\r\n    </div>\r\n  </section>\r\n\r\n  <section>\r\n    <section style=\"margin-top: 10px\">\r\n      <div\r\n        style=\"\r\n          color: #25214f;\r\n          font-size: 18px;\r\n          padding-bottom: 15px;\r\n          font-weight: 700;\r\n        \"\r\n      >\r\n        Your transactions\r\n      </div>\r\n    </section>\r\n\r\n    <app-transaction-history></app-transaction-history>\r\n  </section>\r\n</ion-content>\r\n";

/***/ }),

/***/ 66724:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/document-upload/document-upload.component.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <div style=\"height: 40px\"></div>\n  <app-loader *ngIf=\"loading\"></app-loader>\n  <section style=\"background-color: #25214f\">\n    <div\n      style=\"\n        padding: 20px;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        background-color: #25214f;\n        color: #fff;\n        padding-top: 40px;\n      \"\n    >\n      <div\n        style=\"\n          background: linear-gradient(\n            180deg,\n            #ffe278 0%,\n            rgba(255, 226, 120, 0.55) 100%\n          );\n          padding: 20px 30px;\n          text-align: left;\n          width: 100%;\n          max-width: 400px;\n          margin: auto;\n          border-radius: 10px;\n          color: #25214f;\n        \"\n      >\n        <div style=\"font-size: 15px\">\n          {{ user.accountType }} {{ user?.accountNos[0]?.accountNo }}\n        </div>\n        <div\n          style=\"\n            border: 1px solid #25214f;\n            padding: 10px;\n            width: 100%;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            margin-top: 20px;\n          \"\n        >\n          <div>Balance:</div>\n          <div style=\"font-size: 20px\">\n            {{ user?.accountNos[0]?.accountBalance | currency: \"&#8358;\" }}\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <div\n    style=\"\n      font-size: 20px;\n      text-align: center;\n      font-weight: 600;\n      margin-top: 30px;\n      color: #25214f;\n    \"\n  >\n    Upload Documents\n  </div>\n\n  <section class=\"upload\">\n    <div style=\"margin-bottom: 15px\">\n      <div class=\"groupAll\">\n        <fieldset class=\"group\">\n          <label>{{ fileName || \"Select CAC Document\" }}</label>\n\n          <div class=\"custom-file fileInputProfileWrap\">\n            <input\n              *ngIf=\"!isImageSaved\"\n              type=\"file\"\n              (change)=\"fileChangeEvent($event, 'CAC')\"\n              class=\"fileInputProfile\"\n            />\n          </div>\n        </fieldset>\n        <span *ngIf=\"imageError\" style=\"color: red\">{{ imageError }}</span>\n      </div>\n      <a class=\"btn btn-danger\" (click)=\"removeImage()\" *ngIf=\"isImageSaved\"\n        >Remove</a\n      >\n    </div>\n\n    <div\n      class=\"form-group row\"\n      style=\"padding: 5px; display: flex; flex-direction: column\"\n    >\n      <label style=\"margin-bottom: 10px\" for=\"\">Type of ID</label>\n      <select [(ngModel)]=\"type\" name=\"id\" id=\"\" class=\"input\">\n        <option *ngFor=\"let data of types\" [value]=\"data\">\n          {{ data }}\n        </option>\n      </select>\n    </div>\n\n    <div style=\"margin-top: 20px\">\n      <div class=\"groupAll\">\n        <fieldset class=\"group\">\n          <label>{{ fileName1 || \"Select Valid ID\" }}</label>\n          <div class=\"custom-file fileInputProfileWrap\">\n            <input\n              *ngIf=\"!isImageSaved1\"\n              type=\"file\"\n              (change)=\"fileChangeEvent($event, 'ID')\"\n              class=\"fileInputProfile\"\n            />\n          </div>\n        </fieldset>\n        <span *ngIf=\"imageError1\" style=\"color: red\">{{ imageError1 }}</span>\n      </div>\n      <a class=\"btn btn-danger\" (click)=\"removeImage1()\" *ngIf=\"isImageSaved1\"\n        >Remove</a\n      >\n    </div>\n  </section>\n\n  <div\n    class=\"form-group\"\n    style=\"width: 80vw; max-width: 400px; margin: auto; margin-bottom: 40px\"\n  >\n    <ion-button\n      class=\"btn\"\n      expand=\"block\"\n      style=\"margin-top: 1rem; font-family: Mulish !important\"\n      (click)=\"upload()\"\n    >\n      Upload\n    </ion-button>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 42714:
/*!*******************************************************************!*\
  !*** ./src/app/modules/history/history.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <app-loader *ngIf=\"loading\"></app-loader>\r\n  <section style=\"background-color: #25214f\">\r\n    <div\r\n      style=\"\r\n        padding: 20px;\r\n        width: 100%;\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        justify-content: center;\r\n        background-color: #25214f;\r\n        color: #fff;\r\n        padding-top: 40px;\r\n        margin-top: 40px;\r\n      \"\r\n    >\r\n      <div\r\n        style=\"\r\n          background: linear-gradient(\r\n            180deg,\r\n            #ffe278 0%,\r\n            rgba(255, 226, 120, 0.55) 100%\r\n          );\r\n          padding: 20px 30px;\r\n          text-align: left;\r\n          width: 100%;\r\n          max-width: 400px;\r\n          margin: auto;\r\n          border-radius: 10px;\r\n          color: #25214f;\r\n        \"\r\n      >\r\n        <div style=\"font-size: 15px\">\r\n          {{ user.accountType }} {{ user?.accountNos[0]?.accountNo }}\r\n        </div>\r\n        <div\r\n          style=\"\r\n            border: 1px solid #25214f;\r\n            padding: 10px;\r\n            width: 100%;\r\n            display: flex;\r\n            justify-content: space-between;\r\n            align-items: center;\r\n            margin-top: 20px;\r\n          \"\r\n        >\r\n          <div>Balance:</div>\r\n          <div style=\"font-size: 20px\">\r\n            {{ user?.accountNos[0]?.accountBalance | currency: \"&#8358;\" }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <section\r\n      style=\"\r\n        background-color: white;\r\n        border-top-left-radius: 50px;\r\n        border-top-right-radius: 50px;\r\n        padding: 20px;\r\n        padding-top: 40px;\r\n      \"\r\n    >\r\n      <form>\r\n        <div class=\"form-group row\" style=\"padding: 5px\">\r\n          <label for=\"\">Select Account</label>\r\n          <select [(ngModel)]=\"account\" name=\"account\" id=\"\" class=\"input\">\r\n            <option\r\n              *ngFor=\"let data of user.accountNos\"\r\n              [value]=\"data.accountNo\"\r\n            >\r\n              {{ data.accountNo }} ({{\r\n                data.accountBalance | currency: \"&#8358;\"\r\n              }})\r\n            </option>\r\n          </select>\r\n        </div>\r\n\r\n        <div class=\"form-group row\" style=\"padding: 5px\">\r\n          <label for=\"\">Start Date</label>\r\n          <input\r\n            type=\"date\"\r\n            name=\"startDate\"\r\n            class=\"input\"\r\n            placeholder=\"100000\"\r\n            [(ngModel)]=\"startDate\"\r\n          />\r\n        </div>\r\n\r\n        <div class=\"form-group row\" style=\"padding: 5px\">\r\n          <label for=\"\">End Date</label>\r\n          <input\r\n            type=\"date\"\r\n            name=\"endDate\"\r\n            class=\"input\"\r\n            placeholder=\"100000\"\r\n            [(ngModel)]=\"endDate\"\r\n          />\r\n        </div>\r\n\r\n        <div class=\"form-group row\" style=\"padding: 5px\">\r\n          <label for=\"\">Transaction Type</label>\r\n          <select [(ngModel)]=\"typeId\" name=\"transactionType\" class=\"input\">\r\n            <option *ngFor=\"let data of types\" [value]=\"data.id\">\r\n              {{ data.name }}\r\n            </option>\r\n          </select>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <ion-button\r\n            class=\"btn\"\r\n            expand=\"block\"\r\n            style=\"margin-top: 1rem\"\r\n            (click)=\"fetchHistory()\"\r\n            routerLinkActive=\"router-link-active\"\r\n          >\r\n            View History\r\n          </ion-button>\r\n        </div>\r\n      </form>\r\n    </section>\r\n\r\n    <section style=\"background-color: white; padding: 0 5%\">\r\n      <ion-card-header style=\"text-align: left\"\r\n        >Your transactions</ion-card-header\r\n      >\r\n\r\n      <div\r\n        *ngIf=\"data.length < 1\"\r\n        style=\"background-color: #f8f8f8; border-radius: 8px\"\r\n      >\r\n        <ion-card-content>\r\n          <span style=\"text-align: left; font-size: 13px\"\r\n            >No transactions found\r\n          </span>\r\n        </ion-card-content>\r\n      </div>\r\n      <div *ngFor=\"let trans of data\" (click)=\"setTrans(trans)\">\r\n        <div class=\"tra\" *ngIf=\"trans.transactionType !== 'Debit'\">\r\n          <div class=\"ico\">\r\n            <div class=\"im\"><img src=\"assets/icon/credict.png\" alt=\"\" /></div>\r\n            <div class=\"tex\">\r\n              <div class=\"ti\">\r\n                {{ trans?.narration }}\r\n              </div>\r\n              <div class=\"mod\">{{ trans?.submittedByUsername }}</div>\r\n              <div class=\"mod\">\r\n                {{ trans.date | date }}\r\n              </div>\r\n              <div class=\"mod\" style=\"font-size: 11px\">\r\n                {{ trans.date | date: \"shortTime\" }}\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"amount green\">\r\n            {{ trans.amount | currency: \"&#8358;\" }}\r\n          </div>\r\n        </div>\r\n        <div class=\"tra\" *ngIf=\"trans.transactionType === 'Debit'\">\r\n          <div class=\"ico\" style=\"text-align: left\">\r\n            <div class=\"im\"><img src=\"assets/icon/debit.png\" alt=\"\" /></div>\r\n            <div class=\"tex\">\r\n              <div class=\"ti\">\r\n                {{ trans?.receiverName }}\r\n              </div>\r\n              <div class=\"mod\">{{ trans?.submittedByUsername }}</div>\r\n              <div class=\"mod\">\r\n                {{ trans.date | date }}\r\n              </div>\r\n              <div class=\"mod\" style=\"font-size: 11px\">\r\n                {{ trans.date | date: \"shortTime\" }}\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"amount red\">\r\n            -{{ trans.amount | currency: \"&#8358;\" }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n  </section>\r\n</ion-content>\r\n<ion-content *ngIf=\"visible\">\r\n  <div\r\n    class=\"mas\"\r\n    style=\"\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      flex-direction: column;\r\n    \"\r\n  >\r\n    <div class=\"overlay\" (click)=\"setVissible()\" [@slideInOut]></div>\r\n    <div\r\n      style=\"\r\n        background-color: white;\r\n        width: 100vw;\r\n        height: 100vh;\r\n        z-index: 1000;\r\n        display: flex;\r\n        flex-direction: column;\r\n      \"\r\n      [@slideInOut]\r\n    >\r\n      <div class=\"head\">\r\n        <div\r\n          (click)=\"setVissible()\"\r\n          style=\"\r\n            color: white;\r\n            font-size: 30px;\r\n            position: absolute;\r\n            left: 20px;\r\n            top: 70px;\r\n          \"\r\n        >\r\n          <ion-icon name=\"close-circle-outline\"></ion-icon>\r\n        </div>\r\n        <div class=\"date\">\r\n          {{ details?.transferDate | date }}\r\n          {{ details?.transferDate | date: \"shortTime\" }}\r\n        </div>\r\n        <div class=\"card\"><ion-icon name=\"card\"></ion-icon></div>\r\n        <div\r\n          style=\"font-size: 12px; padding-top: 10px\"\r\n          *ngIf=\"details?.isRoyalTransfer\"\r\n        >\r\n          Royal Transfer\r\n        </div>\r\n        <div\r\n          style=\"font-size: 12px; padding-top: 10px\"\r\n          *ngIf=\"!details?.isRoyalTransfer\"\r\n        >\r\n          Others\r\n        </div>\r\n        <div class=\"date\">\r\n          <span *ngIf=\"details.transactionType !== 'Credit'\">-</span\r\n          >{{ tran?.amount | currency: \"&#8358;\" }}\r\n        </div>\r\n      </div>\r\n      <div class=\"bod\">\r\n        <table>\r\n          <tbody>\r\n            <tr>\r\n              <th style=\"padding: 10px\">From</th>\r\n              <td style=\"padding: 10px\">{{ details?.senderAcctName }}</td>\r\n            </tr>\r\n            <tr>\r\n              <th style=\"padding: 10px\">To</th>\r\n              <td style=\"padding: 10px\">{{ details?.receiverAcctName }}</td>\r\n            </tr>\r\n\r\n            <tr>\r\n              <th style=\"padding: 10px\">Account No.</th>\r\n              <td style=\"padding: 10px\">{{ details?.receiverAcctNo }}</td>\r\n            </tr>\r\n\r\n            <tr>\r\n              <th style=\"padding: 10px\">Bank Name</th>\r\n              <td style=\"padding: 10px\">{{ details?.bankName }}</td>\r\n            </tr>\r\n\r\n            <tr>\r\n              <th style=\"padding: 10px\">Naration</th>\r\n              <td style=\"padding: 10px\">\r\n                {{ details?.transferDescription }}\r\n              </td>\r\n            </tr>\r\n\r\n            <tr>\r\n              <th style=\"padding: 10px\">Transaction Type</th>\r\n              <td style=\"padding: 10px\">{{ details?.transactionType }}</td>\r\n            </tr>\r\n            <!-- <tr>\r\n              <th style=\"padding: 10px\">Refrence</th>\r\n              <td style=\"padding: 10px\">{{ tran?.paymentDetailData.receiptNumber }}</td>\r\n            </tr> -->\r\n            <!-- <tr>\r\n              <th style=\"padding: 10px\">Receipt Number</th>\r\n              <td style=\"padding: 10px\">\r\n                {{ tran?.paymentDetailData?.receiptNumber }}\r\n              </td>\r\n            </tr> -->\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 54725:
/*!********************************************************!*\
  !*** ./src/app/modules/loan/loan.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div style=\"padding: 20px\"></div>\r\n  <app-loader *ngIf=\"loading\"></app-loader>\r\n  <app-pin\r\n    (close)=\"close()\"\r\n    (loading)=\"load()\"\r\n    (done)=\"finish()\"\r\n    *ngIf=\"show\"\r\n  ></app-pin>\r\n  <section style=\"background-color: #25214f\">\r\n    <div\r\n      style=\"\r\n        padding: 20px;\r\n        width: 100%;\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        justify-content: center;\r\n        background-color: #25214f;\r\n        color: #fff;\r\n        padding-top: 40px;\r\n      \"\r\n    >\r\n      <div\r\n        style=\"\r\n          background: linear-gradient(\r\n            180deg,\r\n            #ffe278 0%,\r\n            rgba(255, 226, 120, 0.55) 100%\r\n          );\r\n          padding: 20px 30px;\r\n          text-align: left;\r\n          width: 100%;\r\n          max-width: 400px;\r\n          margin: auto;\r\n          border-radius: 10px;\r\n          color: #25214f;\r\n        \"\r\n      >\r\n        <div style=\"font-size: 15px\">\r\n          {{ user.accountType }} {{ user?.accountNos[0]?.accountNo }}\r\n        </div>\r\n        <div\r\n          style=\"\r\n            border: 1px solid #25214f;\r\n            padding: 10px;\r\n            width: 100%;\r\n            display: flex;\r\n            justify-content: space-between;\r\n            align-items: center;\r\n            margin-top: 20px;\r\n          \"\r\n        >\r\n          <div>Balance:</div>\r\n          <div style=\"font-size: 20px\">\r\n            {{ user?.accountNos[0]?.accountBalance | currency: \"&#8358;\" }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <section\r\n      *ngIf=\"transType ===0\"\r\n      style=\"\r\n        background-color: white;\r\n        border-top-left-radius: 50px;\r\n        border-top-right-radius: 50px;\r\n        padding: 20px;\r\n        padding-top: 40px;\r\n      \"\r\n    >\r\n      <div\r\n        class=\"row\"\r\n        style=\"\r\n          display: flex;\r\n          flex-direction: row;\r\n          justify-content: space-between;\r\n        \"\r\n      >\r\n        <ion-button\r\n          (click)=\"toggleRequest(true)\"\r\n          [ngClass]=\"{active: selectedBtn === true}\"\r\n          style=\"width: 100%; --border-radius: none\"\r\n        >\r\n          New\r\n        </ion-button>\r\n\r\n        <ion-button\r\n          (click)=\"toggleRequest(false)\"\r\n          [ngClass]=\"{active: selectedBtn1 === true}\"\r\n          style=\"width: 100%; --border-radius: none\"\r\n        >\r\n          History\r\n        </ion-button>\r\n      </div>\r\n      <form *ngIf=\"newReq\">\r\n        <div class=\"form-group row\" style=\"padding: 5px\">\r\n          <label for=\"\">Select Account</label>\r\n          <select [(ngModel)]=\"account\" name=\"account\" id=\"\" class=\"input\">\r\n            <option\r\n              *ngFor=\"let data of user.accountNos\"\r\n              [value]=\"data.accountNo\"\r\n            >\r\n              {{data.accountNo}} ({{data.accountBalance | currency: \"&#8358;\"}})\r\n            </option>\r\n          </select>\r\n          <label for=\"\">Loan Type</label>\r\n          <select\r\n            [(ngModel)]=\"productCode\"\r\n            name=\"productCode\"\r\n            id=\"\"\r\n            class=\"input\"\r\n          >\r\n            <option\r\n              *ngFor=\"let loan of loadTypes\"\r\n              [value]=\"loan.loanProductKey\"\r\n            >\r\n              {{loan.loanProductName}}\r\n            </option>\r\n          </select>\r\n        </div>\r\n\r\n        <div class=\"form-group row\" style=\"padding: 5px\">\r\n          <label for=\"\">Loan Tenure</label>\r\n          <select [(ngModel)]=\"tenure\" name=\"tenure\" id=\"\" class=\"input\">\r\n            <option *ngFor=\"let ten of tenures\" [value]=\"ten.value\">\r\n              {{ten.name}}\r\n            </option>\r\n          </select>\r\n        </div>\r\n\r\n        <div class=\"form-group row\" style=\"padding: 5px\">\r\n          <label for=\"\">Amount</label>\r\n          <input\r\n            [(ngModel)]=\"principal\"\r\n            type=\"number\"\r\n            name=\"principal\"\r\n            class=\"input\"\r\n            placeholder=\"100000\"\r\n          />\r\n        </div>\r\n        <div class=\"form-group row\" style=\"padding: 5px\">\r\n          <label for=\"\">Start Date</label>\r\n          <input\r\n            [(ngModel)]=\"date\"\r\n            type=\"date\"\r\n            name=\"date\"\r\n            style=\"width: 100%\"\r\n            class=\"input\"\r\n          />\r\n        </div>\r\n        <div class=\"form-group row\" style=\"padding: 5px\">\r\n          <label for=\"\">Comment</label>\r\n          <input\r\n            [(ngModel)]=\"comment\"\r\n            type=\"text\"\r\n            name=\"comment\"\r\n            class=\"input\"\r\n            placeholder=\"\"\r\n          />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <ion-button\r\n            class=\"btn\"\r\n            expand=\"block\"\r\n            style=\"margin-top: 1rem\"\r\n            (click)=\"next()\"\r\n            routerLinkActive=\"router-link-active\"\r\n          >\r\n            Apply\r\n          </ion-button>\r\n        </div>\r\n      </form>\r\n\r\n      <div *ngIf=\"!newReq\" class=\"row\">\r\n        <section *ngIf=\"history.length === 0\">\r\n          <div\r\n            style=\"\r\n              background-color: #f8f8f8;\r\n              border-radius: 8px;\r\n              text-align: left;\r\n              padding: 20px;\r\n            \"\r\n          >\r\n            No Record Available\r\n          </div>\r\n        </section>\r\n        <section *ngIf=\"history.length > 0\">\r\n          <div\r\n            style=\"\r\n              background-color: #f8f8f8;\r\n              border-radius: 8px;\r\n              text-align: left;\r\n              padding: 20px;\r\n              margin-top: 20px;\r\n            \"\r\n            *ngFor=\"let data of history\"\r\n          >\r\n            <table>\r\n              <tr>\r\n                <th>Status</th>\r\n                <td>\r\n                  <ion-button\r\n                    *ngIf=\"data.state === 'Pending Approval'\"\r\n                    size=\"small\"\r\n                    style=\"--background: #ff5a5a; --color: #fff\"\r\n                    >{{data?.state}}</ion-button\r\n                  ><ion-button\r\n                    *ngIf=\"data.state !== 'Pending Approval'\"\r\n                    size=\"small\"\r\n                    style=\"--background: #46ae6a; --color: #fff\"\r\n                    >{{data?.state}}</ion-button\r\n                  >\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <th>Loan Type</th>\r\n                <td>{{data.type}}</td>\r\n              </tr>\r\n              <tr>\r\n                <th>Amount</th>\r\n                <td>{{data.amount | currency : \"N\"}}</td>\r\n              </tr>\r\n              <tr>\r\n                <th>Balance</th>\r\n                <td>{{data.balance | currency : \"N\"}}</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <th>Account ID</th>\r\n                <td>{{data.loanAccountId}}</td>\r\n              </tr>\r\n\r\n              <!-- <tr>\r\n                <th>Outstanding Intrest</th>\r\n                <td>{{data.interestOutstanding | currency: \"&#8358;\"}}</td>\r\n              </tr>\r\n              <tr>\r\n                <th>Intrest Paid</th>\r\n                <td>{{data.interestPaid | currency: \"&#8358;\"}}</td>\r\n              </tr>\r\n              <tr>\r\n                <th>Total Amount</th>\r\n                <td>{{data.totalAmount | currency: \"&#8358;\"}}</td>\r\n              </tr>\r\n              <tr>\r\n                <th>Total Outstanding</th>\r\n                <td>{{data.totalOutstanding | currency: \"&#8358;\"}}</td>\r\n              </tr>\r\n              <tr>\r\n                <th>Total Paid</th>\r\n                <td>{{data.totalPaid | currency: \"&#8358;\"}}</td>\r\n              </tr>\r\n              <tr>\r\n                <th>Next Repayment Amount</th>\r\n                <td>{{data.nextRepaymentAmount | currency: \"&#8358;\"}}</td>\r\n              </tr>\r\n              <tr>\r\n                <th>Next Repayment Date</th>\r\n                <td>{{data.nextRepaymentDate | date}}</td>\r\n              </tr> -->\r\n            </table>\r\n            <!-- <ion-button\r\n              *ngIf=\"data.status\"\r\n              size=\"small\"\r\n              style=\"--background: #fee178; --color: #25214f\"\r\n              (click)=\"repay(data.loanKey)\"\r\n              >View Repayment Schedule</ion-button\r\n            > -->\r\n          </div>\r\n        </section>\r\n      </div>\r\n    </section>\r\n    <section *ngIf=\"transType === 1\" style=\"background-color: white\">\r\n      <div class=\"header\" style=\"padding: 20px 0\">Repayment Schedule</div>\r\n\r\n      <div\r\n        style=\"\r\n          background-color: #f8f8f8;\r\n          border-radius: 8px;\r\n          text-align: left;\r\n          padding: 20px;\r\n          margin: 10px;\r\n        \"\r\n        *ngFor=\"let data of schedules\"\r\n      >\r\n        <table>\r\n          <tr>\r\n            <th>Repayment Date</th>\r\n            <td>{{data.repaymentDate | date}}</td>\r\n          </tr>\r\n          <tr>\r\n            <th>Principal Repayment</th>\r\n            <td>{{data.principalRepayment | currency: \"&#8358;\"}}</td>\r\n          </tr>\r\n          <tr>\r\n            <th>Intrest Repayment</th>\r\n            <td>{{data.interestRepayment | currency: \"&#8358;\"}}</td>\r\n          </tr>\r\n          <tr>\r\n            <th>Total Repayment</th>\r\n            <td>{{data.totalRepayment | currency: \"&#8358;\"}}</td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <ion-button\r\n          class=\"btn\"\r\n          expand=\"block\"\r\n          style=\"width: 300px; margin: 20px auto\"\r\n          (click)=\"show = true\"\r\n          routerLinkActive=\"router-link-active\"\r\n        >\r\n          Apply\r\n        </ion-button>\r\n      </div>\r\n    </section>\r\n\r\n    <section *ngIf=\"transType === 3\" style=\"background-color: white\">\r\n      <div class=\"header\" style=\"padding: 20px 0\">Repayment Schedule</div>\r\n\r\n      <div\r\n        style=\"\r\n          background-color: #f8f8f8;\r\n          border-radius: 8px;\r\n          text-align: left;\r\n          padding: 20px;\r\n          margin: 10px;\r\n        \"\r\n        *ngFor=\"let data of repaySchedules\"\r\n      >\r\n        <table>\r\n          <tr>\r\n            <th>Paid</th>\r\n            <td>\r\n              <span *ngIf=\"data.isPaid === true\">Yes</span>\r\n              <span *ngIf=\"data.isPaid === false\">No</span>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <th>Repayment Date</th>\r\n            <td>{{data.repaymentDate | date}}</td>\r\n          </tr>\r\n          <tr>\r\n            <th>Principal Repayment</th>\r\n            <td>{{data.principalRepayment | currency: \"&#8358;\"}}</td>\r\n          </tr>\r\n          <tr>\r\n            <th>Intrest Repayment</th>\r\n            <td>{{data.interestRepayment | currency: \"&#8358;\"}}</td>\r\n          </tr>\r\n          <tr>\r\n            <th>Total Repayment</th>\r\n            <td>{{data.totalRepayment | currency: \"&#8358;\"}}</td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <ion-button\r\n          class=\"btn\"\r\n          expand=\"block\"\r\n          style=\"width: 300px; margin: 20px auto\"\r\n          (click)=\"transType = 0\"\r\n          routerLinkActive=\"router-link-active\"\r\n        >\r\n          Back\r\n        </ion-button>\r\n      </div>\r\n    </section>\r\n\r\n    <section\r\n      *ngIf=\"transType ===7\"\r\n      style=\"\r\n        background-color: white;\r\n        border-top-left-radius: 50px;\r\n        border-top-right-radius: 50px;\r\n        padding: 20px;\r\n        padding-top: 40px;\r\n      \"\r\n    >\r\n      <form>\r\n        <div class=\"form-group row\" style=\"padding: 5px\">\r\n          <label for=\"\">Document</label>\r\n          <input type=\"file\" name=\"document\" class=\"custom-file-input\" />\r\n        </div>\r\n\r\n        <div class=\"form-group row\" style=\"padding: 5px\">\r\n          <label for=\"\">Comment</label>\r\n          <textarea name=\"comment\" class=\"input\" cols=\"30\" rows=\"10\"></textarea>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <ion-button\r\n            class=\"btn\"\r\n            expand=\"block\"\r\n            style=\"margin-top: 1rem\"\r\n            (click)=\"transactionType(1)\"\r\n            routerLinkActive=\"router-link-active\"\r\n          >\r\n            Apply\r\n          </ion-button>\r\n        </div>\r\n      </form>\r\n    </section>\r\n  </section>\r\n</ion-content>\r\n";

/***/ }),

/***/ 52447:
/*!***************************************************************!*\
  !*** ./src/app/modules/login/login.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <section class=\"central-image\">\r\n    <ion-img [src]=\"imageSrc\" class=\"img\"></ion-img>\r\n  </section>\r\n\r\n  <section style=\"text-align: center; margin-top: -80px\">\r\n    <section section style=\"padding-top: 2rem\">\r\n      <h2 class=\"title\" style=\"font-family: Mulish !important\">\r\n        Hey, Welcome back\r\n      </h2>\r\n    </section>\r\n\r\n    <section class=\"row\">\r\n      <p class=\"sub-title\" style=\"font-family: Mulish !important\">\r\n        Sign In to continue\r\n      </p>\r\n    </section>\r\n  </section>\r\n  <form [formGroup]=\"loginForm\">\r\n    <div class=\"form-group row\">\r\n      <label class=\"label\" style=\"font-family: Mulish !important\"\r\n        >Email address</label\r\n      >\r\n      <input\r\n        type=\"email\"\r\n        class=\"form-control\"\r\n        placeholder=\"Email\"\r\n        name=\"email\"\r\n        id=\"email\"\r\n        required\r\n        formControlName=\"email\"\r\n      />\r\n    </div>\r\n\r\n    <div class=\"form-group row\">\r\n      <label class=\"label\" style=\"font-family: Mulish !important\"\r\n        >Password</label\r\n      >\r\n      <div\r\n        style=\"\r\n          border: 0.800000011920929px solid #ced4da;\r\n          border-radius: 3px;\r\n          background-color: #b6b6b6;\r\n          position: relative;\r\n        \"\r\n      >\r\n        <input\r\n          [type]=\"show ? 'text' : 'password'\"\r\n          placeholder=\"Password\"\r\n          id=\"password\"\r\n          name=\"password\"\r\n          required\r\n          style=\"border: none\"\r\n          formControlName=\"password\"\r\n        />\r\n        <ion-icon\r\n          (click)=\"viewpassword()\"\r\n          *ngIf=\"!show\"\r\n          icon=\"eye-off-outline\"\r\n          style=\"\r\n            font-size: 32px;\r\n            color: #676767;\r\n            cursor: pointer;\r\n            background-color: transparent;\r\n            position: absolute;\r\n            right: 20px;\r\n            top: 10px;\r\n          \"\r\n        ></ion-icon>\r\n        <ion-icon\r\n          (click)=\"viewpassword()\"\r\n          *ngIf=\"show\"\r\n          icon=\"eye-outline\"\r\n          style=\"\r\n            font-size: 32px;\r\n            color: #676767;\r\n            cursor: pointer;\r\n            background-color: transparent;\r\n            position: absolute;\r\n            right: 20px;\r\n            top: 10px;\r\n          \"\r\n        ></ion-icon>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- <div class=\"form-group row\">\r\n      <app-show-hide-password>\r\n        <input type=\"password\" placeholder=\"Password\" formControlName=\"password\">\r\n    </app-show-hide-password>\r\n    </div> -->\r\n    <div class=\"form-group\">\r\n      <ion-button\r\n        class=\"btn\"\r\n        expand=\"block\"\r\n        style=\"margin-top: 1rem\"\r\n        (click)=\"login()\"\r\n        style=\"font-family: Mulish !important\"\r\n      >\r\n        Sign In\r\n      </ion-button>\r\n      <app-loader *ngIf=\"loading\"></app-loader>\r\n    </div>\r\n    <div\r\n      style=\"\r\n        margin: 15px 0;\r\n        font-size: 14px;\r\n        color: #676767;\r\n        display: flex;\r\n        justify-content: space-between;\r\n        flex-direction: column;\r\n      \"\r\n    >\r\n      <span\r\n        >Don't have an account?\r\n        <span\r\n          style=\"color: #fee178; font-weight: 700; margin-top: 20px\"\r\n          (click)=\"register()\"\r\n          >Sign Up</span\r\n        ></span\r\n      >\r\n      <span\r\n        style=\"color: #25214f; font-weight: 700; margin-top: 10px\"\r\n        (click)=\"forgot()\"\r\n        >Forgot Password</span\r\n      >\r\n    </div>\r\n  </form>\r\n</ion-content>\r\n";

/***/ }),

/***/ 96381:
/*!*******************************************************************!*\
  !*** ./src/app/modules/profile/profile.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div style=\"height: 40px\"></div>\r\n  <app-loader *ngIf=\"loading\"></app-loader>\r\n  <section style=\"background-color: #25214f\">\r\n    <div\r\n      style=\"\r\n        width: 100%;\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        justify-content: center;\r\n        background-color: #25214f;\r\n        color: #fff;\r\n        padding: 20px 30px;\r\n        padding-top: 40px;\r\n      \"\r\n    >\r\n      <div\r\n        style=\"\r\n          background-color: #fee178;\r\n          padding: 20px 30px;\r\n          text-align: left;\r\n          width: 100%;\r\n          max-width: 400px;\r\n          margin: auto;\r\n          border-radius: 10px;\r\n          color: #25214f;\r\n        \"\r\n      >\r\n        <div style=\"font-size: 26px\">\r\n          {{ user?.accountNos[0]?.accountBalance | currency: \"&#8358;\" }}\r\n        </div>\r\n        <div style=\"font-size: 15px\">\r\n          {{ user.accountType }} {{ user?.accountNos[0]?.accountNo }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <section\r\n      style=\"\r\n        background-color: white;\r\n        border-top-left-radius: 50px;\r\n        border-top-right-radius: 50px;\r\n        padding: 20px;\r\n        padding-top: 40px;\r\n      \"\r\n    >\r\n      <div>\r\n        <section class=\"row\">\r\n          <h3>Update BVN</h3>\r\n        </section>\r\n      </div>\r\n\r\n      <section class=\"row\">\r\n        <form>\r\n          <div class=\"form-group row\" style=\"padding: 5px\">\r\n            <label for=\"\">Enter BVN</label>\r\n            <input\r\n              type=\"text\"\r\n              name=\"bvn\"\r\n              class=\"input\"\r\n              placeholder=\"53626172635\"\r\n              [(ngModel)]=\"bvn\"\r\n              (ngModelChange)=\"fetchBvn()\"\r\n            />\r\n          </div>\r\n\r\n          <div\r\n            style=\"background-color: #f8f8f8; padding: 20px; margin-top: 20px\"\r\n            *ngIf=\"success\"\r\n          >\r\n            <div style=\"margin: 10px 0; text-align: center; font-size: 20px\">\r\n              BVN Details\r\n            </div>\r\n            <table>\r\n              <tbody>\r\n                <tr>\r\n                  <th>First Name</th>\r\n                  <td>{{ firstName }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <th>Middle Name</th>\r\n                  <td>{{ middleName }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <th>Last Name</th>\r\n                  <td>{{ lastName }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <th>Mobile Number</th>\r\n                  <td>{{ data.phoneNo }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <th>Email</th>\r\n                  <td>{{ data.emailAddress }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <th>Gender</th>\r\n                  <td>{{ data.gender }}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <!-- <div class=\"form-group row\" style=\"padding: 5px\">\r\n            <label for=\"\">Phone</label>\r\n            <div class=\"phoneField\">\r\n              <input\r\n                type=\"password\"\r\n                name=\"password\"\r\n                class=\"input\"\r\n                placeholder=\"8012345678\"\r\n              />\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\" style=\"padding: 5px\">\r\n            <label class=\"label\">Password</label>\r\n            <div\r\n              style=\"\r\n                border: 0.800000011920929px solid #ced4da;\r\n                border-radius: 3px;\r\n                background-color: #ced4da;\r\n                position: relative;\r\n              \"\r\n            >\r\n              <input\r\n                [type]=\"show ? 'text' : 'password'\"\r\n                placeholder=\"Password\"\r\n                id=\"password\"\r\n                name=\"password\"\r\n                required\r\n                style=\"border: none\"\r\n                formArrayName=\"password\"\r\n                class=\"input\"\r\n              />\r\n              <ion-icon\r\n                (click)=\"viewpassword()\"\r\n                *ngIf=\"!show\"\r\n                icon=\"eye-off-outline\"\r\n                style=\"\r\n                  font-size: 32px;\r\n                  color: #676767;\r\n                  cursor: pointer;\r\n                  background-color: transparent;\r\n                  position: absolute;\r\n                  right: 20px;\r\n                  top: 10px;\r\n                \"\r\n              ></ion-icon>\r\n              <ion-icon\r\n                (click)=\"viewpassword()\"\r\n                *ngIf=\"show\"\r\n                icon=\"eye-outline\"\r\n                style=\"\r\n                  font-size: 32px;\r\n                  color: #676767;\r\n                  cursor: pointer;\r\n                  background-color: transparent;\r\n                  position: absolute;\r\n                  right: 20px;\r\n                  top: 10px;\r\n                \"\r\n              ></ion-icon>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\" style=\"padding: 5px\">\r\n            <label class=\"label\">Confirm Password</label>\r\n            <div\r\n              style=\"\r\n                border: 0.800000011920929px solid #ced4da;\r\n                border-radius: 3px;\r\n                background-color: #ced4da;\r\n                position: relative;\r\n              \"\r\n            >\r\n              <input\r\n                [type]=\"show ? 'text' : 'password'\"\r\n                placeholder=\"Password\"\r\n                id=\"password\"\r\n                name=\"password\"\r\n                required\r\n                style=\"border: none\"\r\n                formArrayName=\"password\"\r\n                class=\"input\"\r\n              />\r\n              <ion-icon\r\n                (click)=\"viewpassword()\"\r\n                *ngIf=\"!show\"\r\n                icon=\"eye-off-outline\"\r\n                style=\"\r\n                  font-size: 32px;\r\n                  color: #676767;\r\n                  cursor: pointer;\r\n                  background-color: transparent;\r\n                  position: absolute;\r\n                  right: 20px;\r\n                  top: 10px;\r\n                \"\r\n              ></ion-icon>\r\n              <ion-icon\r\n                (click)=\"viewpassword()\"\r\n                *ngIf=\"show\"\r\n                icon=\"eye-outline\"\r\n                style=\"\r\n                  font-size: 32px;\r\n                  color: #676767;\r\n                  cursor: pointer;\r\n                  background-color: transparent;\r\n                  position: absolute;\r\n                  right: 20px;\r\n                  top: 10px;\r\n                \"\r\n              ></ion-icon>\r\n            </div>\r\n          </div> -->\r\n\r\n          <div class=\"form-group\">\r\n            <ion-button\r\n              class=\"btn\"\r\n              expand=\"block\"\r\n              style=\"margin-top: 1rem\"\r\n              (click)=\"update()\"\r\n              routerLinkActive=\"router-link-active\"\r\n              *ngIf=\"success\"\r\n            >\r\n              Update\r\n            </ion-button>\r\n          </div>\r\n        </form>\r\n      </section>\r\n    </section>\r\n  </section>\r\n</ion-content>\r\n";

/***/ }),

/***/ 2153:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/register/become-royalty/become-royalty.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <app-loader *ngIf=\"loading\"></app-loader>\r\n  <section class=\"central-image\">\r\n    <ion-img [src]=\"imageSrc\" class=\"img\"></ion-img>\r\n  </section>\r\n\r\n  <section\r\n    style=\"\r\n      text-align: center;\r\n      margin-top: -80px;\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-content: space-between;\r\n    \"\r\n  >\r\n    <section class=\"we\" style=\"margin-top: 4rem\">\r\n      <span class=\"sub-title\"\r\n        >Hey there I&#39;m\r\n        <span style=\"text-align: center; color: #25214f; font-weight: 800\"\r\n          >Ayo</span\r\n        >, but my friends here call me A.Y. I am here to help you</span\r\n      >\r\n    </section>\r\n\r\n    <section class=\"central-image\" style=\"height: 100px; margin-top: -10px\">\r\n      <ion-img [src]=\"source\" class=\"img\"></ion-img>\r\n      <span\r\n        style=\"\r\n          color: #676767;\r\n          font-size: 14px;\r\n          font-weight: 600;\r\n          text-align: center;\r\n          width: 200px;\r\n          margin: auto;\r\n        \"\r\n      >\r\n        Get a bank account in less than 5 minutes\r\n      </span>\r\n    </section>\r\n  </section>\r\n\r\n  <section class=\"central-image row\">\r\n    <form [formGroup]=\"onboardingForm\">\r\n      <!-- <div class=\"form-group row\" style=\"padding: 3px\">\r\n        <label for=\"\" class=\"label\">What type of account do you need?</label>\r\n        <select formControlName=\"AccountType\" class=\"input\">\r\n          <option value=\"Corporate\" class=\"input\">Corporate</option>\r\n          <option value=\"Individual\" class=\"input\">Individual</option>\r\n        </select>\r\n      </div> -->\r\n\r\n      <div class=\"form-group\">\r\n        <ion-button\r\n          class=\"btn\"\r\n          expand=\"block\"\r\n          style=\"margin-top: 1rem; font-family: Mulish !important\"\r\n          (click)=\"next()\"\r\n          routerLinkActive=\"router-link-active\"\r\n        >\r\n          New Account\r\n        </ion-button>\r\n\r\n        <ion-button\r\n          class=\"btn2\"\r\n          expand=\"block\"\r\n          style=\"margin-top: 1rem; font-family: Mulish !important\"\r\n          (click)=\"nuban()\"\r\n          routerLinkActive=\"router-link-active\"\r\n        >\r\n          Existing Account\r\n        </ion-button>\r\n      </div>\r\n    </form>\r\n  </section>\r\n</ion-content>\r\n";

/***/ }),

/***/ 33587:
/*!************************************************************************************!*\
  !*** ./src/app/modules/register/bvn-success/bvn-success.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <div\n    style=\"\n      display: flex;\n      justify-content: space-between;\n      flex-direction: column;\n      height: 100vh;\n      padding-bottom: 80px;\n    \"\n  >\n    <div>\n      <section\n        class=\"central-image\"\n        style=\"position: relative; width: 291px; margin: auto\"\n      >\n        <ion-img [src]=\"imageSrc\" class=\"img\"></ion-img>\n        <ion-img\n          src=\"assets/icon/check.png\"\n          style=\"width: 30px; position: absolute; right: 35px; top: 80px\"\n        ></ion-img>\n      </section>\n\n      <section\n        style=\"\n          text-align: center;\n          margin-top: -80px;\n          display: flex;\n          flex-direction: column;\n          align-content: space-between;\n        \"\n      >\n        <section class=\"we\" style=\"margin-top: 4rem\">\n          BVN verified Successfully\n        </section>\n      </section>\n    </div>\n    <section class=\"central-image row\">\n      <div class=\"form-group\">\n        <ion-button\n          class=\"btn\"\n          expand=\"block\"\n          style=\"margin-top: 1rem\"\n          (click)=\"next()\"\n          routerLinkActive=\"router-link-active\"\n        >\n          Continue\n        </ion-button>\n      </div>\n    </section>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 80273:
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/register/co-operatre-details/co-operatre-details.component.html?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <app-loader *ngIf=\"loading\"></app-loader>\n  <section>\n    <section>\n      <div style=\"height: 20px\"></div>\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"goBack()\">\n          <ion-icon\n            name=\"arrow-back-outline\"\n            style=\"color: #676767; padding-top: 10px\"\n          ></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </section>\n\n    <div\n      style=\"\n        height: 90vh;\n        display: flex;\n        justify-content: space-between;\n        flex-direction: column;\n        padding-bottom: 40px;\n      \"\n      *ngIf=\"page === 'select'\"\n    >\n      <div>\n        <section class=\"row\">\n          <h3>Your BVN data</h3>\n        </section>\n        <div\n          style=\"background-color: #f8f8f8; border-radius: 8px; padding: 10px\"\n        >\n          <table>\n            <tbody style=\"font-size: 14px; text-align: left\">\n              <tr>\n                <th style=\"padding: 10px 5px\">First Name</th>\n                <td style=\"padding: 10px 5px\">{{ user.firstName }}</td>\n              </tr>\n              <tr>\n                <th style=\"padding: 10px 5px\">Last Name</th>\n                <td style=\"padding: 10px 5px\">{{ user.lastName }}</td>\n              </tr>\n              <tr>\n                <th style=\"padding: 10px 5px\">Middle Name</th>\n                <td style=\"padding: 10px 5px\">{{ user.middleName }}</td>\n              </tr>\n              <tr>\n                <th style=\"padding: 10px 5px\">Phone #</th>\n                <td style=\"padding: 10px 5px\">{{ user.phoneNo }}</td>\n              </tr>\n              <tr>\n                <th style=\"padding: 10px 5px\">Email</th>\n                <td style=\"padding: 10px 5px\">{{ user.emailAddress }}</td>\n              </tr>\n              <tr>\n                <th style=\"padding: 10px 5px\">DOB</th>\n                <td style=\"padding: 10px 5px\">{{ user.dob | date }}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <section\n        style=\"\n          display: flex;\n          flex-direction: column;\n          align-content: space-between;\n        \"\n      >\n        <ion-button class=\"btn\" expand=\"block\" (click)=\"change('use')\">\n          Use & Continue\n        </ion-button>\n\n        <ion-button\n          class=\"btn2\"\n          expand=\"block\"\n          style=\"margin-top: 1rem\"\n          (click)=\"change('edit')\"\n        >\n          Edit & Continue\n        </ion-button>\n      </section>\n    </div>\n\n    <section\n      style=\"\n        height: 90vh;\n        display: flex;\n        justify-content: space-between;\n        flex-direction: column;\n        padding-bottom: 40px;\n      \"\n      *ngIf=\"page === 'use'\"\n    >\n      <div>\n        <section class=\"row\">\n          <h3>Create Account</h3>\n        </section>\n\n        <section class=\"central-image\" style=\"margin-top: -50px\">\n          <ion-img [src]=\"imageSrc\" class=\"img\"></ion-img>\n        </section>\n\n        <section\n          style=\"\n            text-align: center;\n            margin-top: -80px;\n            display: flex;\n            flex-direction: column;\n            align-content: space-between;\n          \"\n        >\n          <section class=\"we\" style=\"margin-top: 4rem\">\n            <span class=\"sub-title\"\n              >Hey, you already know my name, tell me your’s so I can help you\n              setup your <br /><span style=\"color: #25214f; font-weight: 600\">\n                Royal Basic Account</span\n              >\n            </span>\n          </section>\n        </section>\n      </div>\n      <section class=\"row\">\n        <form [formGroup]=\"onboardingForm\">\n          <div class=\"form-group row\" style=\"padding: 5px\">\n            <label class=\"label\">First Name</label>\n            <div\n              style=\"\n                border: 0.800000011920929px solid #ced4da;\n                border-radius: 3px;\n                background-color: #ced4da;\n                position: relative;\n              \"\n            >\n              <input\n                type=\"text\"\n                placeholder=\"Kelvin\"\n                required\n                style=\"border: none\"\n                class=\"input\"\n                formControlName=\"FirstName\"\n              />\n            </div>\n          </div>\n\n          <div class=\"form-group row\" style=\"padding: 5px\">\n            <label class=\"label\">Last Name</label>\n            <div\n              style=\"\n                border: 0.800000011920929px solid #ced4da;\n                border-radius: 3px;\n                background-color: #ced4da;\n                position: relative;\n              \"\n            >\n              <input\n                type=\"text\"\n                placeholder=\"Chukwuma\"\n                required\n                style=\"border: none\"\n                class=\"input\"\n                formControlName=\"LastName\"\n              />\n            </div>\n          </div>\n\n          <div class=\"form-group row\" style=\"padding: 5px\">\n            <label class=\"label\">Middle Name</label>\n            <div\n              style=\"\n                border: 0.800000011920929px solid #ced4da;\n                border-radius: 3px;\n                background-color: #ced4da;\n                position: relative;\n              \"\n            >\n              <input\n                type=\"text\"\n                placeholder=\"Adekunle\"\n                required\n                style=\"border: none\"\n                class=\"input\"\n                formControlName=\"MiddleName\"\n              />\n            </div>\n          </div>\n\n          <div class=\"form-group row\" style=\"padding: 5px\">\n            <label for=\"\">Select Gender</label>\n            <select formControlName=\"Gender\" name=\"gender\" id=\"\" class=\"input\">\n              <option value=\"Male\">Male</option>\n              <option value=\"Female\">Female</option>\n            </select>\n          </div>\n\n          <div class=\"form-group\">\n            <ion-button\n              class=\"btn\"\n              expand=\"block\"\n              style=\"margin-top: 1rem\"\n              (click)=\"change('add')\"\n              routerLinkActive=\"router-link-active\"\n            >\n              Next\n            </ion-button>\n          </div>\n        </form>\n      </section>\n    </section>\n\n    <section\n      style=\"\n        height: 90vh;\n        display: flex;\n        justify-content: space-between;\n        flex-direction: column;\n        padding-bottom: 40px;\n      \"\n      *ngIf=\"page === 'add'\"\n    >\n      <section class=\"row\">\n        <div style=\"border-radius: 8px; margin: 10px 4px\">\n          <div class=\"has\">Let’s get started</div>\n          <div class=\"hassub\">\n            Enter your email or phone number and password to continue\n          </div>\n        </div>\n      </section>\n\n      <section class=\"row\">\n        <h5 style=\"text-align: left; color: black\">\n          Enter your password to continue\n        </h5>\n        <form [formGroup]=\"onboardingForm\">\n          <div class=\"form-group row\" style=\"padding: 5px\">\n            <label for=\"\">Email</label>\n            <input\n              type=\"text\"\n              formControlName=\"Email\"\n              name=\"email\"\n              class=\"input\"\n              placeholder=\"ciroma.kelvin@gmail.com\"\n            />\n          </div>\n          <div class=\"form-group row\" style=\"padding: 5px\">\n            <label for=\"\">Phone</label>\n            <div class=\"phoneField\">\n              <!-- <input\n              type=\"text\"\n              name=\"text\"\n              class=\"input dialField\"\n              placeholder=\"+234\"\n            /> -->\n              <input\n                formControlName=\"Phone\"\n                type=\"text\"\n                name=\"text\"\n                class=\"input\"\n                placeholder=\"08012345678\"\n              />\n            </div>\n          </div>\n          <div class=\"form-group row\" style=\"padding: 5px\">\n            <label class=\"label\">Password</label>\n            <div\n              style=\"\n                border: 0.800000011920929px solid #ced4da;\n                border-radius: 3px;\n                background-color: #ced4da;\n                position: relative;\n              \"\n            >\n              <input\n                [type]=\"show ? 'text' : 'password'\"\n                placeholder=\"Password\"\n                id=\"password\"\n                name=\"password\"\n                required\n                style=\"border: none\"\n                formControlName=\"Password\"\n                class=\"input\"\n                (ngModelChange)=\"checkStrength($event)\"\n              />\n              <ion-icon\n                (click)=\"viewpassword()\"\n                *ngIf=\"!show\"\n                icon=\"eye-off-outline\"\n                style=\"\n                  font-size: 32px;\n                  color: #676767;\n                  cursor: pointer;\n                  background-color: transparent;\n                  position: absolute;\n                  right: 20px;\n                  top: 10px;\n                \"\n              ></ion-icon>\n              <ion-icon\n                (click)=\"viewpassword()\"\n                *ngIf=\"show\"\n                icon=\"eye-outline\"\n                style=\"\n                  font-size: 32px;\n                  color: #676767;\n                  cursor: pointer;\n                  background-color: transparent;\n                  position: absolute;\n                  right: 20px;\n                  top: 10px;\n                \"\n              ></ion-icon>\n            </div>\n            <div style=\"font-size: 13px; text-align: left\">\n              password should contain lowercase, uppercase, number and minimum\n              of 6 characters\n            </div>\n            <div\n              style=\"\n                display: flex;\n                flex-direction: row;\n                margin-top: 10px;\n                background-color: red;\n              \"\n            >\n              <div\n                style=\"width: 25%; height: 3px\"\n                [style.background-color]=\"check[0] ? 'green' : 'red'\"\n              ></div>\n              <div\n                style=\"width: 25%; height: 3px\"\n                [style.background-color]=\"check[1] ? 'green' : 'red'\"\n              ></div>\n              <div\n                style=\"width: 25%; height: 3px\"\n                [style.background-color]=\"\n                  check[2] ? 'green' : check[1] ? 'rgb(217, 217, 12)' : 'red'\n                \"\n              ></div>\n              <div\n                style=\"width: 25%; height: 3px\"\n                [style.background-color]=\"\n                  check[3]\n                    ? 'green'\n                    : check[1] || check[2]\n                    ? 'rgb(217, 217, 12)'\n                    : 'red'\n                \"\n              ></div>\n            </div>\n          </div>\n\n          <div class=\"form-group row\" style=\"padding: 5px\">\n            <label class=\"label\">Confirm Password</label>\n            <div\n              style=\"\n                border: 0.800000011920929px solid #ced4da;\n                border-radius: 3px;\n                background-color: #ced4da;\n                position: relative;\n              \"\n            >\n              <input\n                [type]=\"show ? 'text' : 'password'\"\n                placeholder=\"Password\"\n                id=\"password\"\n                name=\"password\"\n                required\n                style=\"border: none\"\n                class=\"input\"\n                [(ngModel)]=\"confirmPass\"\n                [ngModelOptions]=\"{ standalone: true }\"\n              />\n              <ion-icon\n                (click)=\"viewpassword()\"\n                *ngIf=\"!show\"\n                icon=\"eye-off-outline\"\n                style=\"\n                  font-size: 32px;\n                  color: #676767;\n                  cursor: pointer;\n                  background-color: transparent;\n                  position: absolute;\n                  right: 20px;\n                  top: 10px;\n                \"\n              ></ion-icon>\n              <ion-icon\n                (click)=\"viewpassword()\"\n                *ngIf=\"show\"\n                icon=\"eye-outline\"\n                style=\"\n                  font-size: 32px;\n                  color: #676767;\n                  cursor: pointer;\n                  background-color: transparent;\n                  position: absolute;\n                  right: 20px;\n                  top: 10px;\n                \"\n              ></ion-icon>\n            </div>\n          </div>\n\n          <div class=\"form-group row\" style=\"padding: 5px\">\n            <label for=\"\">Referal Code (optional)</label>\n            <input\n              formControlName=\"RefCode\"\n              type=\"text\"\n              name=\"text\"\n              class=\"input\"\n              placeholder=\"63653757\"\n            />\n          </div>\n\n          <div\n            class=\"form-group row\"\n            style=\"\n              padding: 5px;\n              display: flex;\n              flex-direction: row;\n              align-items: center;\n            \"\n          >\n            <ion-checkbox slot=\"end\" formControlName=\"terms\"></ion-checkbox>\n            <ion-label style=\"margin-left: 10px\"\n              >I accept terms of service and privacy policy</ion-label\n            >\n          </div>\n\n          <div class=\"form-group\">\n            <ion-button\n              class=\"btn\"\n              expand=\"block\"\n              style=\"margin-top: 1rem\"\n              (click)=\"presentAlertPrompt()\"\n              routerLinkActive=\"router-link-active\"\n            >\n              Next\n            </ion-button>\n          </div>\n        </form>\n      </section>\n    </section>\n  </section>\n</ion-content>\n";

/***/ }),

/***/ 88775:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/register/create-account/create-account.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <app-loader *ngIf=\"loading\"></app-loader>\r\n  <div\r\n    style=\"\r\n      height: 90vh;\r\n      display: flex;\r\n      justify-content: space-between;\r\n      flex-direction: column;\r\n      padding-bottom: 40px;\r\n    \"\r\n    *ngIf=\"page === 'select'\"\r\n  >\r\n    <div>\r\n      <section class=\"row\">\r\n        <h3>Your BVN data</h3>\r\n      </section>\r\n      <div style=\"background-color: #f8f8f8; border-radius: 8px; padding: 10px\">\r\n        <table>\r\n          <tbody style=\"font-size: 14px; text-align: left\">\r\n            <tr>\r\n              <th style=\"padding: 10px 5px\">First Name</th>\r\n              <td style=\"padding: 10px 5px\">{{ user.firstName }}</td>\r\n            </tr>\r\n            <tr>\r\n              <th style=\"padding: 10px 5px\">Last Name</th>\r\n              <td style=\"padding: 10px 5px\">{{ user.lastName }}</td>\r\n            </tr>\r\n            <tr>\r\n              <th style=\"padding: 10px 5px\">Middle Name</th>\r\n              <td style=\"padding: 10px 5px\">{{ user.middleName }}</td>\r\n            </tr>\r\n            <tr>\r\n              <th style=\"padding: 10px 5px\">Phone #</th>\r\n              <td style=\"padding: 10px 5px\">{{ user.phoneNo }}</td>\r\n            </tr>\r\n            <tr>\r\n              <th style=\"padding: 10px 5px\">Email</th>\r\n              <td style=\"padding: 10px 5px\">{{ user.emailAddress }}</td>\r\n            </tr>\r\n            <tr>\r\n              <th style=\"padding: 10px 5px\">DOB</th>\r\n              <td style=\"padding: 10px 5px\">{{ user.dob | date }}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <section\r\n      style=\"\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-content: space-between;\r\n      \"\r\n    >\r\n      <ion-button class=\"btn\" expand=\"block\" (click)=\"change('use')\">\r\n        Continue\r\n      </ion-button>\r\n\r\n      <!-- <ion-button\r\n        class=\"btn2\"\r\n        expand=\"block\"\r\n        style=\"margin-top: 1rem\"\r\n        (click)=\"change('edit')\"\r\n      >\r\n        Edit & Continue\r\n      </ion-button> -->\r\n    </section>\r\n  </div>\r\n  <section\r\n    style=\"\r\n      height: 90vh;\r\n      display: flex;\r\n      justify-content: space-between;\r\n      flex-direction: column;\r\n      padding-bottom: 40px;\r\n    \"\r\n    *ngIf=\"page === 'edit'\"\r\n  >\r\n    <div>\r\n      <section class=\"row\">\r\n        <h3>Create Account</h3>\r\n      </section>\r\n    </div>\r\n\r\n    <section class=\"row\">\r\n      <div style=\"background: #e0feea; border-radius: 8px; margin: 10px 4px\">\r\n        <ion-card-content\r\n          style=\"\r\n            display: flex;\r\n            flex-direction: row;\r\n            justify-content: space-around;\r\n            background: #fff5d2;\r\n            border-radius: 8px;\r\n          \"\r\n        >\r\n          <span style=\"text-align: justify; font-size: 12px; color: #25214f\"\r\n            >Royal Bank is legally required to verify your identity, Royal Bank\r\n            DOES NOT have access to your other bank accounts or transactions and\r\n            will never share your information with a third party.\r\n          </span>\r\n        </ion-card-content>\r\n      </div>\r\n    </section>\r\n\r\n    <section class=\"row\">\r\n      <h5 style=\"text-align: left; color: black\">\r\n        Enter your password to continue\r\n      </h5>\r\n      <form [formGroup]=\"onboardingForm\">\r\n        <div class=\"form-group row\" style=\"padding: 5px\">\r\n          <label for=\"\">Email</label>\r\n          <input\r\n            formControlName=\"Email\"\r\n            type=\"email\"\r\n            class=\"input\"\r\n            placeholder=\"ciroma.kelvin@gmail.com\"\r\n          />\r\n        </div>\r\n        <div class=\"form-group row\" style=\"padding: 5px\">\r\n          <label for=\"\">Phone</label>\r\n          <div class=\"phoneField\">\r\n            <input\r\n              formControlName=\"Phone\"\r\n              type=\"text\"\r\n              class=\"input\"\r\n              placeholder=\"08012345678\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\" style=\"padding: 5px\">\r\n          <label class=\"label\">Password</label>\r\n          <div\r\n            style=\"\r\n              border: 0.800000011920929px solid #ced4da;\r\n              border-radius: 3px;\r\n              background-color: #ced4da;\r\n              position: relative;\r\n            \"\r\n          >\r\n            <input\r\n              [type]=\"show ? 'text' : 'password'\"\r\n              formControlName=\"Password\"\r\n              placeholder=\"Password\"\r\n              id=\"password\"\r\n              required\r\n              style=\"border: none\"\r\n              class=\"input\"\r\n            />\r\n            <ion-icon\r\n              (click)=\"viewpassword()\"\r\n              *ngIf=\"!show\"\r\n              icon=\"eye-off-outline\"\r\n              style=\"\r\n                font-size: 32px;\r\n                color: #676767;\r\n                cursor: pointer;\r\n                background-color: transparent;\r\n                position: absolute;\r\n                right: 20px;\r\n                top: 10px;\r\n              \"\r\n            ></ion-icon>\r\n            <ion-icon\r\n              (click)=\"viewpassword()\"\r\n              *ngIf=\"show\"\r\n              icon=\"eye-outline\"\r\n              style=\"\r\n                font-size: 32px;\r\n                color: #676767;\r\n                cursor: pointer;\r\n                background-color: transparent;\r\n                position: absolute;\r\n                right: 20px;\r\n                top: 10px;\r\n              \"\r\n            ></ion-icon>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\" style=\"padding: 5px\">\r\n          <label class=\"label\">Confirm Password</label>\r\n          <div\r\n            style=\"\r\n              border: 0.800000011920929px solid #ced4da;\r\n              border-radius: 3px;\r\n              background-color: #ced4da;\r\n              position: relative;\r\n            \"\r\n          >\r\n            <input\r\n              [type]=\"show ? 'text' : 'password'\"\r\n              [ngModelOptions]=\"{ standalone: true }\"\r\n              [(ngModel)]=\"confirmPass\"\r\n              placeholder=\"Password\"\r\n              id=\"password\"\r\n              required\r\n              style=\"border: none\"\r\n              class=\"input\"\r\n            />\r\n            <ion-icon\r\n              (click)=\"viewpassword()\"\r\n              *ngIf=\"!show\"\r\n              icon=\"eye-off-outline\"\r\n              style=\"\r\n                font-size: 32px;\r\n                color: #676767;\r\n                cursor: pointer;\r\n                background-color: transparent;\r\n                position: absolute;\r\n                right: 20px;\r\n                top: 10px;\r\n              \"\r\n            ></ion-icon>\r\n            <ion-icon\r\n              (click)=\"viewpassword()\"\r\n              *ngIf=\"show\"\r\n              icon=\"eye-outline\"\r\n              style=\"\r\n                font-size: 32px;\r\n                color: #676767;\r\n                cursor: pointer;\r\n                background-color: transparent;\r\n                position: absolute;\r\n                right: 20px;\r\n                top: 10px;\r\n              \"\r\n            ></ion-icon>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\" style=\"padding: 5px\">\r\n          <label for=\"\">Referal Code (optional)</label>\r\n          <input\r\n            formControlName=\"RefCode\"\r\n            type=\"text\"\r\n            class=\"input\"\r\n            placeholder=\"******\"\r\n          />\r\n        </div>\r\n\r\n        <div\r\n          class=\"form-group row\"\r\n          style=\"\r\n            padding: 5px;\r\n            display: flex;\r\n            flex-direction: row;\r\n            align-items: center;\r\n          \"\r\n        >\r\n          <ion-checkbox slot=\"end\" formControlName=\"terms\"></ion-checkbox>\r\n          <ion-label style=\"margin-left: 10px\"\r\n            >I accept terms of service and privacy policy</ion-label\r\n          >\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <ion-button\r\n            class=\"btn\"\r\n            expand=\"block\"\r\n            style=\"margin-top: 1rem\"\r\n            (click)=\"presentAlertPrompt()\"\r\n            routerLinkActive=\"router-link-active\"\r\n          >\r\n            Create Account\r\n          </ion-button>\r\n        </div>\r\n      </form>\r\n    </section>\r\n  </section>\r\n\r\n  <section *ngIf=\"page === 'use'\">\r\n    <div>\r\n      <section class=\"row\">\r\n        <h3>Create Account</h3>\r\n      </section>\r\n\r\n      <section>\r\n        <div\r\n          style=\"background-color: #f8f8f8; border-radius: 8px; padding: 10px\"\r\n        >\r\n          <table>\r\n            <tbody style=\"font-size: 14px; text-align: left\">\r\n              <tr>\r\n                <th style=\"padding: 10px 5px\">First Name</th>\r\n                <td style=\"padding: 10px 5px\">{{ user.firstName }}</td>\r\n              </tr>\r\n              <tr>\r\n                <th style=\"padding: 10px 5px\">Last Name</th>\r\n                <td style=\"padding: 10px 5px\">{{ user.lastName }}</td>\r\n              </tr>\r\n              <tr>\r\n                <th style=\"padding: 10px 5px\">Middle Name</th>\r\n                <td style=\"padding: 10px 5px\">{{ user.middleName }}</td>\r\n              </tr>\r\n              <tr>\r\n                <th style=\"padding: 10px 5px\">Phone #</th>\r\n                <td style=\"padding: 10px 5px\">{{ user.phoneNo }}</td>\r\n              </tr>\r\n              <tr>\r\n                <th style=\"padding: 10px 5px\">Email</th>\r\n                <td style=\"padding: 10px 5px\">{{ user.emailAddress }}</td>\r\n              </tr>\r\n              <tr>\r\n                <th style=\"padding: 10px 5px\">DOB</th>\r\n                <td style=\"padding: 10px 5px\">{{ user.dob | date }}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </section>\r\n    </div>\r\n\r\n    <section class=\"row\">\r\n      <h5 style=\"text-align: left; color: black\">\r\n        Enter your password to continue\r\n      </h5>\r\n      <form [formGroup]=\"onboardingForm\">\r\n        <div *ngIf=\"!isEmail\" class=\"form-group row\" style=\"padding: 5px\">\r\n          <label for=\"\">Email</label>\r\n          <input\r\n            formControlName=\"Email\"\r\n            type=\"email\"\r\n            class=\"input\"\r\n            placeholder=\"ciroma.kelvin@gmail.com\"\r\n          />\r\n        </div>\r\n        <div *ngIf=\"!isPhone\" class=\"form-group row\" style=\"padding: 5px\">\r\n          <label for=\"\">Phone</label>\r\n          <div class=\"phoneField\">\r\n            <input\r\n              formControlName=\"Phone\"\r\n              type=\"text\"\r\n              class=\"input\"\r\n              placeholder=\"8012345678\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\" style=\"padding: 5px\">\r\n          <label class=\"label\">Password</label>\r\n          <div\r\n            style=\"\r\n              border: 0.800000011920929px solid #ced4da;\r\n              border-radius: 3px;\r\n              background-color: #ced4da;\r\n              position: relative;\r\n            \"\r\n          >\r\n            <input\r\n              [type]=\"show ? 'text' : 'password'\"\r\n              formControlName=\"Password\"\r\n              placeholder=\"Password\"\r\n              id=\"password\"\r\n              required\r\n              style=\"border: none\"\r\n              class=\"input\"\r\n              (ngModelChange)=\"checkStrength($event)\"\r\n            />\r\n            <ion-icon\r\n              (click)=\"viewpassword()\"\r\n              *ngIf=\"!show\"\r\n              icon=\"eye-off-outline\"\r\n              style=\"\r\n                font-size: 32px;\r\n                color: #676767;\r\n                cursor: pointer;\r\n                background-color: transparent;\r\n                position: absolute;\r\n                right: 20px;\r\n                top: 10px;\r\n              \"\r\n            ></ion-icon>\r\n            <ion-icon\r\n              (click)=\"viewpassword()\"\r\n              *ngIf=\"show\"\r\n              icon=\"eye-outline\"\r\n              style=\"\r\n                font-size: 32px;\r\n                color: #676767;\r\n                cursor: pointer;\r\n                background-color: transparent;\r\n                position: absolute;\r\n                right: 20px;\r\n                top: 10px;\r\n              \"\r\n            ></ion-icon>\r\n          </div>\r\n          <div style=\"font-size: 13px; text-align: left\">\r\n            password should contain lowercase, uppercase, number and minimum of\r\n            6 characters\r\n          </div>\r\n          <div\r\n            style=\"\r\n              display: flex;\r\n              flex-direction: row;\r\n              margin-top: 10px;\r\n              background-color: red;\r\n            \"\r\n          >\r\n            <div\r\n              style=\"width: 25%; height: 3px\"\r\n              [style.background-color]=\"check[0] ? 'green' : 'red'\"\r\n            ></div>\r\n            <div\r\n              style=\"width: 25%; height: 3px\"\r\n              [style.background-color]=\"check[1] ? 'green' : 'red'\"\r\n            ></div>\r\n            <div\r\n              style=\"width: 25%; height: 3px\"\r\n              [style.background-color]=\"\r\n                check[2] ? 'green' : check[1] ? 'rgb(217, 217, 12)' : 'red'\r\n              \"\r\n            ></div>\r\n            <div\r\n              style=\"width: 25%; height: 3px\"\r\n              [style.background-color]=\"\r\n                check[3]\r\n                  ? 'green'\r\n                  : check[1] || check[2]\r\n                  ? 'rgb(217, 217, 12)'\r\n                  : 'red'\r\n              \"\r\n            ></div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\" style=\"padding: 5px\">\r\n          <label class=\"label\">Confirm Password</label>\r\n          <div\r\n            style=\"\r\n              border: 0.800000011920929px solid #ced4da;\r\n              border-radius: 3px;\r\n              background-color: #ced4da;\r\n              position: relative;\r\n            \"\r\n          >\r\n            <input\r\n              [type]=\"show ? 'text' : 'password'\"\r\n              [ngModelOptions]=\"{ standalone: true }\"\r\n              [(ngModel)]=\"confirmPass\"\r\n              placeholder=\"Password\"\r\n              id=\"password\"\r\n              required\r\n              style=\"border: none\"\r\n              class=\"input\"\r\n            />\r\n            <ion-icon\r\n              (click)=\"viewpassword()\"\r\n              *ngIf=\"!show\"\r\n              icon=\"eye-off-outline\"\r\n              style=\"\r\n                font-size: 32px;\r\n                color: #676767;\r\n                cursor: pointer;\r\n                background-color: transparent;\r\n                position: absolute;\r\n                right: 20px;\r\n                top: 10px;\r\n              \"\r\n            ></ion-icon>\r\n            <ion-icon\r\n              (click)=\"viewpassword()\"\r\n              *ngIf=\"show\"\r\n              icon=\"eye-outline\"\r\n              style=\"\r\n                font-size: 32px;\r\n                color: #676767;\r\n                cursor: pointer;\r\n                background-color: transparent;\r\n                position: absolute;\r\n                right: 20px;\r\n                top: 10px;\r\n              \"\r\n            ></ion-icon>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\" style=\"padding: 5px\">\r\n          <label for=\"\">Referal Code (optional)</label>\r\n          <input\r\n            formControlName=\"RefCode\"\r\n            type=\"text\"\r\n            class=\"input\"\r\n            placeholder=\"******\"\r\n          />\r\n        </div>\r\n\r\n        <div\r\n          class=\"form-group row\"\r\n          style=\"\r\n            padding: 5px;\r\n            display: flex;\r\n            flex-direction: row;\r\n            align-items: center;\r\n          \"\r\n        >\r\n          <ion-checkbox slot=\"end\" formControlName=\"terms\"></ion-checkbox>\r\n          <ion-label style=\"margin-left: 10px\"\r\n            >I accept terms of service and privacy policy</ion-label\r\n          >\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <ion-button\r\n            class=\"btn\"\r\n            expand=\"block\"\r\n            style=\"margin-top: 1rem; font-family: Mulish !important\"\r\n            (click)=\"presentAlertPrompt()\"\r\n            routerLinkActive=\"router-link-active\"\r\n          >\r\n            Create Account\r\n          </ion-button>\r\n        </div>\r\n      </form>\r\n    </section>\r\n  </section>\r\n</ion-content>\r\n";

/***/ }),

/***/ 23549:
/*!****************************************************************************!*\
  !*** ./src/app/modules/register/details/details.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <app-loader *ngIf=\"loading\"></app-loader>\n\n  <section *ngIf=\"page === 'add'\">\n    <div>\n      <section class=\"row\">\n        <h3>Create Account</h3>\n      </section>\n    </div>\n\n    <section class=\"row\">\n      <div style=\"border-radius: 8px; margin: 10px 4px\">\n        <div class=\"has\">Thanks {{ onboardingForm.value.FirstName }},</div>\n      </div>\n    </section>\n\n    <section class=\"row\">\n      <h5 style=\"text-align: left; color: black\">\n        Enter your password to continue\n      </h5>\n      <form [formGroup]=\"onboardingForm\">\n        <div class=\"form-group row\" style=\"padding: 5px\">\n          <label for=\"\">Email</label>\n          <input\n            type=\"text\"\n            name=\"email\"\n            class=\"input\"\n            placeholder=\"ciroma.kelvin@gmail.com\"\n            formControlName=\"Email\"\n          />\n        </div>\n        <div class=\"form-group row\" style=\"padding: 5px\">\n          <label for=\"\">Phone</label>\n          <div class=\"phoneField\">\n            <input\n              type=\"text\"\n              name=\"phone\"\n              class=\"input\"\n              placeholder=\"08012345678\"\n              formControlName=\"Phone\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group row\" style=\"padding: 5px\">\n          <label class=\"label\">Password</label>\n          <div\n            style=\"\n              border: 0.800000011920929px solid #ced4da;\n              border-radius: 3px;\n              background-color: #ced4da;\n              position: relative;\n            \"\n          >\n            <input\n              [type]=\"show ? 'text' : 'password'\"\n              formControlName=\"Password\"\n              placeholder=\"Password\"\n              id=\"password\"\n              name=\"password\"\n              required\n              style=\"border: none\"\n              class=\"input\"\n              (ngModelChange)=\"checkStrength($event)\"\n            />\n            <ion-icon\n              (click)=\"viewpassword()\"\n              *ngIf=\"!show\"\n              icon=\"eye-off-outline\"\n              style=\"\n                font-size: 32px;\n                color: #676767;\n                cursor: pointer;\n                background-color: transparent;\n                position: absolute;\n                right: 20px;\n                top: 10px;\n              \"\n            ></ion-icon>\n            <ion-icon\n              (click)=\"viewpassword()\"\n              *ngIf=\"show\"\n              icon=\"eye-outline\"\n              style=\"\n                font-size: 32px;\n                color: #676767;\n                cursor: pointer;\n                background-color: transparent;\n                position: absolute;\n                right: 20px;\n                top: 10px;\n              \"\n            ></ion-icon>\n          </div>\n          <div style=\"font-size: 13px; text-align: left\">\n            password should contain lowercase, uppercase, number and minimum of\n            6 characters\n          </div>\n          <div\n            style=\"\n              display: flex;\n              flex-direction: row;\n              margin-top: 10px;\n              background-color: red;\n            \"\n          >\n            <div\n              style=\"width: 25%; height: 3px\"\n              [style.background-color]=\"check[0] ? 'green' : 'red'\"\n            ></div>\n            <div\n              style=\"width: 25%; height: 3px\"\n              [style.background-color]=\"check[1] ? 'green' : 'red'\"\n            ></div>\n            <div\n              style=\"width: 25%; height: 3px\"\n              [style.background-color]=\"\n                check[2] ? 'green' : check[1] ? 'rgb(217, 217, 12)' : 'red'\n              \"\n            ></div>\n            <div\n              style=\"width: 25%; height: 3px\"\n              [style.background-color]=\"\n                check[3]\n                  ? 'green'\n                  : check[1] || check[2]\n                  ? 'rgb(217, 217, 12)'\n                  : 'red'\n              \"\n            ></div>\n          </div>\n        </div>\n\n        <div class=\"form-group row\" style=\"padding: 5px\">\n          <label class=\"label\">Confirm Password</label>\n          <div\n            style=\"\n              border: 0.800000011920929px solid #ced4da;\n              border-radius: 3px;\n              background-color: #ced4da;\n              position: relative;\n            \"\n          >\n            <input\n              [type]=\"show ? 'text' : 'password'\"\n              placeholder=\"Password\"\n              id=\"password\"\n              name=\"password\"\n              required\n              style=\"border: none\"\n              [ngModelOptions]=\"{ standalone: true }\"\n              [(ngModel)]=\"confirmPass\"\n              class=\"input\"\n            />\n            <ion-icon\n              (click)=\"viewpassword()\"\n              *ngIf=\"!show\"\n              icon=\"eye-off-outline\"\n              style=\"\n                font-size: 32px;\n                color: #676767;\n                cursor: pointer;\n                background-color: transparent;\n                position: absolute;\n                right: 20px;\n                top: 10px;\n              \"\n            ></ion-icon>\n            <ion-icon\n              (click)=\"viewpassword()\"\n              *ngIf=\"show\"\n              icon=\"eye-outline\"\n              style=\"\n                font-size: 32px;\n                color: #676767;\n                cursor: pointer;\n                background-color: transparent;\n                position: absolute;\n                right: 20px;\n                top: 10px;\n              \"\n            ></ion-icon>\n          </div>\n        </div>\n\n        <div class=\"form-group row\" style=\"padding: 5px\">\n          <label for=\"\">Referal Code (optional)</label>\n          <input\n            formControlName=\"RefCode\"\n            type=\"text\"\n            name=\"ref\"\n            class=\"input\"\n            placeholder=\"22333223\"\n          />\n        </div>\n\n        <div\n          class=\"form-group row\"\n          style=\"\n            padding: 5px;\n            display: flex;\n            flex-direction: row;\n            align-items: center;\n          \"\n        >\n          <ion-checkbox slot=\"end\" formControlName=\"terms\"></ion-checkbox>\n          <ion-label style=\"margin-left: 10px\"\n            >I accept terms of service and privacy policy</ion-label\n          >\n        </div>\n\n        <div class=\"form-group\">\n          <ion-button\n            class=\"btn\"\n            expand=\"block\"\n            style=\"margin-top: 1rem\"\n            (click)=\"presentAlertPrompt()\"\n            routerLinkActive=\"router-link-active\"\n          >\n            Next\n          </ion-button>\n        </div>\n      </form>\n    </section>\n  </section>\n\n  <section *ngIf=\"page === 'finish'\">\n    <div>\n      <section class=\"row\">\n        <h3>Create Account</h3>\n      </section>\n\n      <section class=\"central-image\" style=\"margin-top: -50px\">\n        <ion-img [src]=\"imageSrc\" class=\"img\"></ion-img>\n      </section>\n\n      <section\n        style=\"\n          text-align: center;\n          margin-top: -80px;\n          display: flex;\n          flex-direction: column;\n          align-content: space-between;\n        \"\n      >\n        <section class=\"we\" style=\"margin-top: 4rem\">\n          <span class=\"sub-title\"\n            >Hey, you already know my name, tell me your’s so I can help you\n            setup your <br /><span style=\"color: #25214f; font-weight: 600\">\n              Royal Basic Account</span\n            >\n          </span>\n        </section>\n      </section>\n    </div>\n\n    <section class=\"row\">\n      <form [formGroup]=\"onboardingForm\">\n        <div class=\"form-group row\" style=\"padding: 5px\">\n          <label class=\"label\">First Name</label>\n          <div\n            style=\"\n              border: 0.800000011920929px solid #ced4da;\n              border-radius: 3px;\n              background-color: #ced4da;\n              position: relative;\n            \"\n          >\n            <input\n              type=\"text\"\n              placeholder=\"Kelvin\"\n              required\n              style=\"border: none\"\n              class=\"input\"\n              formControlName=\"FirstName\"\n            />\n          </div>\n        </div>\n\n        <div class=\"form-group row\" style=\"padding: 5px\">\n          <label class=\"label\">Last Name</label>\n          <div\n            style=\"\n              border: 0.800000011920929px solid #ced4da;\n              border-radius: 3px;\n              background-color: #ced4da;\n              position: relative;\n            \"\n          >\n            <input\n              type=\"text\"\n              placeholder=\"Chukwuma\"\n              required\n              style=\"border: none\"\n              class=\"input\"\n              formControlName=\"LastName\"\n            />\n          </div>\n        </div>\n\n        <div class=\"form-group row\" style=\"padding: 5px\">\n          <label class=\"label\">Middle Name</label>\n          <div\n            style=\"\n              border: 0.800000011920929px solid #ced4da;\n              border-radius: 3px;\n              background-color: #ced4da;\n              position: relative;\n            \"\n          >\n            <input\n              type=\"text\"\n              placeholder=\"Adekunle\"\n              required\n              style=\"border: none\"\n              class=\"input\"\n              formControlName=\"MiddleName\"\n            />\n          </div>\n        </div>\n\n        <div class=\"form-group row\" style=\"padding: 5px\">\n          <label for=\"\">Select Gender</label>\n          <select formControlName=\"Gender\" name=\"gender\" id=\"\" class=\"input\">\n            <option value=\"Male\">Male</option>\n            <option value=\"Female\">Female</option>\n          </select>\n        </div>\n\n        <div class=\"form-group\">\n          <ion-button\n            class=\"btn\"\n            expand=\"block\"\n            style=\"margin-top: 1rem\"\n            (click)=\"change('add')\"\n            routerLinkActive=\"router-link-active\"\n          >\n            Next\n          </ion-button>\n        </div>\n      </form>\n    </section>\n  </section>\n</ion-content>\n";

/***/ }),

/***/ 70980:
/*!**********************************************************************!*\
  !*** ./src/app/modules/register/done/done.component.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content class=\"content\">\n  <app-loader *ngIf=\"loading\"></app-loader>\n\n  <div\n    style=\"\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      height: 100vh;\n      padding-bottom: 80px;\n    \"\n  >\n    <div>\n      <section class=\"central-image\" style=\"height: 100px\">\n        <ion-img [src]=\"source1\" class=\"img\"></ion-img>\n      </section>\n\n      <section class=\"central-image\" style=\"height: 200px\">\n        <ion-img [src]=\"imageSrc\" class=\"img\"></ion-img>\n      </section>\n\n      <section class=\"central-image\">\n        <div class=\"tit\">Hello {{ user.firstName }}</div>\n      </section>\n      <section style=\"text-align: center; margin-top: 20px\">\n        <div class=\"subTit\">\n          Your\n          <span style=\"color: #25214f; font-weight: 800\">ROYAL BASIC BANK</span>\n          account was successfully created.\n        </div>\n      </section>\n    </div>\n\n    <section\n      style=\"\n        display: flex;\n        flex-direction: column;\n        align-content: space-between;\n      \"\n    >\n      <ion-button\n        *ngIf=\"setBack === false\"\n        class=\"btn\"\n        expand=\"block\"\n        (click)=\"sign()\"\n      >\n        Login\n      </ion-button>\n\n      <ion-button\n        *ngIf=\"setBack === true\"\n        class=\"btn\"\n        expand=\"block\"\n        style=\"margin-bottom: 20px\"\n        (click)=\"register()\"\n      >\n        Resend Request\n      </ion-button>\n\n      <ion-button\n        *ngIf=\"setBack === true\"\n        class=\"btn\"\n        expand=\"block\"\n        (click)=\"back()\"\n      >\n        Back\n      </ion-button>\n    </section>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 19913:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/register/image-done/image-done.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <div\n    style=\"\n      display: flex;\n      justify-content: space-between;\n      flex-direction: column;\n      height: 100vh;\n      padding-bottom: 80px;\n    \"\n  >\n    <div>\n      <section\n        class=\"central-image\"\n        style=\"position: relative; width: 291px; margin: auto\"\n      >\n        <ion-img [src]=\"imageSrc\" class=\"img\"></ion-img>\n        <ion-img\n          src=\"assets/icon/check.png\"\n          style=\"width: 30px; position: absolute; right: 35px; top: 80px\"\n        ></ion-img>\n      </section>\n\n      <section\n        style=\"\n          text-align: center;\n          margin-top: -80px;\n          display: flex;\n          flex-direction: column;\n          align-content: space-between;\n        \"\n      >\n        <section class=\"we\" style=\"margin-top: 4rem\">All Done</section>\n        <section style=\"font-size: 14px; text-align: center; margin-top: 10px\">\n          It Ayo again, Now let’s finish your account setup\n        </section>\n      </section>\n    </div>\n    <section class=\"central-image row\">\n      <div class=\"form-group\">\n        <ion-button\n          class=\"btn\"\n          expand=\"block\"\n          style=\"margin-top: 1rem\"\n          (click)=\"next()\"\n          routerLinkActive=\"router-link-active\"\n        >\n          Let's Go\n        </ion-button>\n      </div>\n    </section>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 86805:
/*!************************************************************************!*\
  !*** ./src/app/modules/register/image/image.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <app-loader *ngIf=\"loading\"></app-loader>\n  <div\n    style=\"\n      display: flex;\n      justify-content: space-between;\n      flex-direction: column;\n      height: 90vh;\n      padding-bottom: 40px;\n    \"\n    *ngIf=\"page === 'take'\"\n  >\n    <div>\n      <section\n        class=\"central-image\"\n        style=\"position: relative; width: 291px; margin: auto\"\n      >\n        <ion-img [src]=\"imageSrc\" class=\"img\"></ion-img>\n        <ion-img\n          src=\"assets/icon/check.png\"\n          style=\"width: 30px; position: absolute; right: 35px; top: 80px\"\n        ></ion-img>\n      </section>\n\n      <section\n        style=\"\n          text-align: center;\n          margin-top: -80px;\n          display: flex;\n          flex-direction: column;\n          align-content: space-between;\n        \"\n      >\n        <section class=\"we\" style=\"margin-top: 4rem\">\n          All done {{ user.firstName }}\n        </section>\n        <section style=\"font-size: 14px; text-align: center; margin-top: 10px\">\n          Your information all checked out.\n        </section>\n        <div\n          style=\"\n            background: #f8f8f8;\n            border-radius: 8px;\n            padding: 25px;\n            margin-top: 20px;\n          \"\n        >\n          <div class=\"td\">Upload your picture</div>\n          <div class=\"bd\">Show us that beautiful</div>\n          <div class=\"bdp\">\n            Picture must be taken in a well lit and clear background\n          </div>\n        </div>\n      </section>\n    </div>\n    <section class=\"central-image row\">\n      <div class=\"form-group\">\n        <ion-button\n          class=\"btn\"\n          expand=\"block\"\n          style=\"margin-top: 1rem\"\n          (click)=\"takePhoto()\"\n          routerLinkActive=\"router-link-active\"\n        >\n          Take a Picture\n        </ion-button>\n      </div>\n    </section>\n  </div>\n\n  <div\n    style=\"\n      display: flex;\n      justify-content: space-between;\n      flex-direction: column;\n      height: 90vh;\n      padding-bottom: 40px;\n    \"\n    *ngIf=\"page === 'crop'\"\n  >\n    <div>\n      <!-- <section\n        style=\"\n          text-align: center;\n          margin-top: -80px;\n          display: flex;\n          flex-direction: column;\n          align-content: space-between;\n        \"\n      >\n        <section class=\"we\" style=\"margin-top: 4rem\">\n          All done {{ user.firstName }}\n        </section>\n        <section style=\"font-size: 14px; text-align: center; margin-top: 10px\">\n          Your information all checked out.\n        </section>\n        <div\n          style=\"\n            background: #f8f8f8;\n            border-radius: 8px;\n            padding: 25px;\n            margin-top: 20px;\n          \"\n        >\n          <div class=\"td\">Upload your picture</div>\n          <div class=\"bd\">Show us that beautiful</div>\n          <div class=\"bdp\">\n            Picture must be taken in a well lit and clear background\n          </div>\n        </div>\n      </section> -->\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\" style=\"margin-top: 15px\">\n        <div class=\"text-center col-md-8\" style=\"text-align: center\">\n          <h3>Crop Image</h3>\n          <h5>Make sure your face is vissible</h5>\n          <image-cropper\n            [imageChangedEvent]=\"imageChangedEvent\"\n            [imageBase64]=\"baseImage\"\n            [maintainAspectRatio]=\"true\"\n            [aspectRatio]=\"4 / 4\"\n            [resizeToWidth]=\"256\"\n            format=\"png\"\n            (imageCropped)=\"imageCropped($event)\"\n            (imageLoaded)=\"imageLoaded()\"\n            (cropperReady)=\"cropperReady()\"\n            (loadImageFailed)=\"loadImageFailed()\"\n          ></image-cropper>\n        </div>\n      </div>\n    </div>\n    <section class=\"central-image row\">\n      <div class=\"form-group\">\n        <ion-button\n          (click)=\"crop()\"\n          class=\"btn\"\n          expand=\"block\"\n          style=\"margin-top: 0\"\n        >\n          Done\n        </ion-button>\n      </div>\n    </section>\n  </div>\n\n  <div\n    style=\"\n      display: flex;\n      justify-content: space-between;\n      flex-direction: column;\n      height: 90vh;\n      padding-bottom: 40px;\n    \"\n    *ngIf=\"page === 'success'\"\n  >\n    <div>\n      <section\n        class=\"central-image\"\n        style=\"\n          width: 291px;\n          margin: auto;\n          display: flex;\n          flex-direction: column;\n        \"\n      >\n        <ion-img\n          style=\"width: 140px; height: 140px; margin-top: 100px\"\n          class=\"img\"\n          src=\"assets/icon/good.png\"\n        ></ion-img>\n      </section>\n\n      <section\n        style=\"\n          text-align: center;\n          margin-top: -20px;\n          display: flex;\n          flex-direction: column;\n          align-content: space-between;\n        \"\n      >\n        <section class=\"we\" style=\"margin-top: 4rem\">\n          Image captured successfully\n        </section>\n      </section>\n    </div>\n    <section class=\"central-image row\">\n      <div class=\"form-group\">\n        <ion-button\n          class=\"btn\"\n          expand=\"block\"\n          style=\"margin-top: 1rem\"\n          (click)=\"next()\"\n          routerLinkActive=\"router-link-active\"\n        >\n          Continue\n        </ion-button>\n      </div>\n    </section>\n  </div>\n\n  <div\n    style=\"\n      display: flex;\n      justify-content: space-between;\n      flex-direction: column;\n      height: 100vh;\n      padding-bottom: 40px;\n    \"\n    *ngIf=\"page === 'fail'\"\n  >\n    <div>\n      <section\n        class=\"central-image\"\n        style=\"\n          width: 291px;\n          margin: auto;\n          display: flex;\n          flex-direction: column;\n        \"\n      >\n        <ion-img\n          style=\"width: 140px; height: 140px; margin-top: 100px\"\n          class=\"img\"\n          src=\"assets/icon/bad.png\"\n        ></ion-img>\n      </section>\n\n      <section\n        style=\"\n          text-align: center;\n          margin-top: -20px;\n          display: flex;\n          flex-direction: column;\n          align-content: space-between;\n        \"\n      >\n        <section class=\"we\" style=\"margin-top: 4rem\">\n          There was an error with your captured image\n        </section>\n      </section>\n    </div>\n    <section class=\"central-image row\">\n      <div class=\"form-group\">\n        <ion-button\n          class=\"btn\"\n          expand=\"block\"\n          style=\"margin-top: 1rem\"\n          (click)=\"retake()\"\n          routerLinkActive=\"router-link-active\"\n        >\n          Retake\n        </ion-button>\n      </div>\n    </section>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 67002:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/register/nuban-register/nuban-register.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <app-loader *ngIf=\"loading\"></app-loader>\n\n  <section\n    style=\"\n      display: flex;\n      justify-content: center;\n      flex-direction: column;\n      height: 100vh;\n    \"\n    *ngIf=\"page === 'account'\"\n  >\n    <section class=\"row\">\n      <div style=\"border-radius: 8px; margin: 10px 4px\">\n        <div class=\"has\">Welcome Back,</div>\n      </div>\n    </section>\n\n    <section class=\"row\">\n      <h5 style=\"text-align: left; color: black\">\n        Enter your account number to continue\n      </h5>\n      <form>\n        <div class=\"form-group row\" style=\"padding: 5px\">\n          <label for=\"\">Account Number</label>\n          <input\n            type=\"text\"\n            name=\"account\"\n            class=\"input\"\n            placeholder=\"0000000314\"\n            [(ngModel)]=\"account\"\n            (ngModelChange)=\"fetchUser($event)\"\n          />\n        </div>\n      </form>\n    </section>\n  </section>\n\n  <section\n    style=\"display: flex; justify-content: center; flex-direction: column\"\n    *ngIf=\"page === 'details'\"\n  >\n    <section class=\"row\">\n      <h5 style=\"text-align: left; color: black\">\n        Enter your details to continue\n      </h5>\n      <form [formGroup]=\"onboardingForm\">\n        <div class=\"form-group row\" style=\"padding: 5px\">\n          <label for=\"\">First Name</label>\n          <div class=\"input\" style=\"text-align: left; padding: 15px 25px\">\n            {{ onboardingForm?.value?.FirstName }}\n          </div>\n        </div>\n\n        <div class=\"form-group row\" style=\"padding: 5px\">\n          <label for=\"\">Middle Name</label>\n          <input\n            formControlName=\"MiddleName\"\n            type=\"text\"\n            name=\"ref\"\n            class=\"input\"\n            placeholder=\"Ade\"\n          />\n        </div>\n\n        <div class=\"form-group row\" style=\"padding: 5px\">\n          <label for=\"\">Last Name </label>\n          <div class=\"input\" style=\"text-align: left; padding: 15px 25px\">\n            {{ onboardingForm?.value?.LastName }}\n          </div>\n        </div>\n        <div class=\"form-group row\" style=\"padding: 5px\">\n          <label for=\"\">Email</label>\n          <div class=\"input\" style=\"text-align: left; padding: 15px 25px\">\n            {{ onboardingForm?.value?.Email }}\n          </div>\n        </div>\n        <div class=\"form-group row\" style=\"padding: 5px\">\n          <label for=\"\">Phone Number</label>\n          <div class=\"input\" style=\"text-align: left; padding: 15px 25px\">\n            {{ onboardingForm?.value?.Phone }}\n          </div>\n        </div>\n        <div class=\"form-group row\" style=\"padding: 5px\">\n          <label class=\"label\">Password</label>\n          <div\n            style=\"\n              border: 0.800000011920929px solid #ced4da;\n              border-radius: 3px;\n              background-color: #ced4da;\n              position: relative;\n            \"\n          >\n            <input\n              [type]=\"show ? 'text' : 'password'\"\n              formControlName=\"Password\"\n              placeholder=\"Password\"\n              id=\"password\"\n              name=\"password\"\n              required\n              style=\"border: none\"\n              class=\"input\"\n              (ngModelChange)=\"checkStrength($event)\"\n            />\n            <ion-icon\n              (click)=\"viewpassword()\"\n              *ngIf=\"!show\"\n              icon=\"eye-off-outline\"\n              style=\"\n                font-size: 32px;\n                color: #676767;\n                cursor: pointer;\n                background-color: transparent;\n                position: absolute;\n                right: 20px;\n                top: 10px;\n              \"\n            ></ion-icon>\n            <ion-icon\n              (click)=\"viewpassword()\"\n              *ngIf=\"show\"\n              icon=\"eye-outline\"\n              style=\"\n                font-size: 32px;\n                color: #676767;\n                cursor: pointer;\n                background-color: transparent;\n                position: absolute;\n                right: 20px;\n                top: 10px;\n              \"\n            ></ion-icon>\n          </div>\n          <div style=\"font-size: 13px; text-align: left\">\n            password should contain lowercase, uppercase, number and minimum of\n            6 characters\n          </div>\n          <div\n            style=\"\n              display: flex;\n              flex-direction: row;\n              margin-top: 10px;\n              background-color: red;\n            \"\n          >\n            <div\n              style=\"width: 25%; height: 3px\"\n              [style.background-color]=\"check[0] ? 'green' : 'red'\"\n            ></div>\n            <div\n              style=\"width: 25%; height: 3px\"\n              [style.background-color]=\"check[1] ? 'green' : 'red'\"\n            ></div>\n            <div\n              style=\"width: 25%; height: 3px\"\n              [style.background-color]=\"\n                check[2] ? 'green' : check[1] ? 'rgb(217, 217, 12)' : 'red'\n              \"\n            ></div>\n            <div\n              style=\"width: 25%; height: 3px\"\n              [style.background-color]=\"\n                check[3]\n                  ? 'green'\n                  : check[1] || check[2]\n                  ? 'rgb(217, 217, 12)'\n                  : 'red'\n              \"\n            ></div>\n          </div>\n        </div>\n\n        <div class=\"form-group row\" style=\"padding: 5px\">\n          <label class=\"label\">Confirm Password</label>\n          <div\n            style=\"\n              border: 0.800000011920929px solid #ced4da;\n              border-radius: 3px;\n              background-color: #ced4da;\n              position: relative;\n            \"\n          >\n            <input\n              [type]=\"show ? 'text' : 'password'\"\n              placeholder=\"Password\"\n              id=\"password\"\n              name=\"password\"\n              required\n              style=\"border: none\"\n              [ngModelOptions]=\"{ standalone: true }\"\n              [(ngModel)]=\"confirmPass\"\n              class=\"input\"\n            />\n            <ion-icon\n              (click)=\"viewpassword()\"\n              *ngIf=\"!show\"\n              icon=\"eye-off-outline\"\n              style=\"\n                font-size: 32px;\n                color: #676767;\n                cursor: pointer;\n                background-color: transparent;\n                position: absolute;\n                right: 20px;\n                top: 10px;\n              \"\n            ></ion-icon>\n            <ion-icon\n              (click)=\"viewpassword()\"\n              *ngIf=\"show\"\n              icon=\"eye-outline\"\n              style=\"\n                font-size: 32px;\n                color: #676767;\n                cursor: pointer;\n                background-color: transparent;\n                position: absolute;\n                right: 20px;\n                top: 10px;\n              \"\n            ></ion-icon>\n          </div>\n        </div>\n        <ng-container\n          *ngIf=\"onboardingForm.value.AccountType !== 'Royal Basic'\"\n        >\n          <div class=\"form-group row\" style=\"padding: 5px\">\n            <label for=\"\">Company Type</label>\n            <input\n              formControlName=\"CompanyType\"\n              type=\"text\"\n              name=\"ref\"\n              class=\"input\"\n              placeholder=\"IT\"\n            />\n          </div>\n\n          <div class=\"form-group row\" style=\"padding: 5px\">\n            <label for=\"\">Company Name</label>\n            <input\n              formControlName=\"CompanyName\"\n              type=\"text\"\n              name=\"ref\"\n              class=\"input\"\n              placeholder=\"Abys LTD\"\n            />\n          </div>\n\n          <div class=\"form-group row\" style=\"padding: 5px\">\n            <label for=\"\">RC Number</label>\n            <input\n              formControlName=\"RCNumber\"\n              type=\"text\"\n              name=\"ref\"\n              class=\"input\"\n              placeholder=\"22333223\"\n            />\n          </div>\n\n          <div class=\"form-group row\" style=\"padding: 5px\">\n            <label for=\"\">Tax Identification Number</label>\n            <input\n              formControlName=\"TinNumber\"\n              type=\"text\"\n              name=\"ref\"\n              class=\"input\"\n              placeholder=\"65764566\"\n            />\n          </div>\n        </ng-container>\n\n        <div class=\"form-group row\" style=\"padding: 5px\">\n          <label for=\"\">Referal Code (optional)</label>\n          <input\n            formControlName=\"RefCode\"\n            type=\"text\"\n            name=\"ref\"\n            class=\"input\"\n            placeholder=\"22333223\"\n          />\n        </div>\n\n        <div\n          class=\"form-group row\"\n          style=\"\n            padding: 5px;\n            display: flex;\n            flex-direction: row;\n            align-items: center;\n          \"\n        >\n          <ion-checkbox slot=\"end\" formControlName=\"terms\"></ion-checkbox>\n          <ion-label style=\"margin-left: 10px\"\n            >I accept terms of service and privacy policy</ion-label\n          >\n        </div>\n\n        <div class=\"form-group\">\n          <ion-button\n            class=\"btn\"\n            expand=\"block\"\n            style=\"margin-top: 1rem\"\n            (click)=\"presentAlertPrompt()\"\n            routerLinkActive=\"router-link-active\"\n          >\n            Next\n          </ion-button>\n        </div>\n      </form>\n    </section>\n  </section>\n</ion-content>\n";

/***/ }),

/***/ 20605:
/*!*********************************************************************!*\
  !*** ./src/app/modules/register/register.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <app-loader *ngIf=\"loading\"> </app-loader>\r\n</ion-content>\r\n";

/***/ }),

/***/ 18452:
/*!************************************************************************************!*\
  !*** ./src/app/modules/register/royal-setup/royal-setup.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <app-loader *ngIf=\"loading\"></app-loader>\n  <section>\n    <section>\n      <div style=\"height: 20px\"></div>\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"goBack()\">\n          <ion-icon\n            name=\"arrow-back-outline\"\n            style=\"color: #676767; padding-top: 10px\"\n          ></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </section>\n\n    <section class=\"row\">\n      <div style=\"border-radius: 8px; margin: 10px 4px\">\n        <div class=\"hassub\" style=\"color: black; font-weight: 700\">\n          Setup your Royal Corporate Account\n        </div>\n      </div>\n    </section>\n\n    <section class=\"row\">\n      <form [formGroup]=\"onboardingForm\">\n        <!-- <div class=\"form-group row\" style=\"padding: 5px\">\n          <label for=\"\"></label>\n          <input\n            formControlName=\"CompanyType\"\n            type=\"text\"\n            name=\"company type\"\n            class=\"input\"\n            placeholder=\"\"\n          />\n        </div> -->\n        <div class=\"form-group row\" style=\"padding: 5px\">\n          <label for=\"\">Company Type</label>\n          <select\n            formControlName=\"CompanyType\"\n            name=\"companyType\"\n            id=\"\"\n            class=\"input\"\n          >\n            <option *ngFor=\"let data of companyType\" [value]=\"data\">\n              {{ data }}\n            </option>\n          </select>\n        </div>\n        <div class=\"form-group row\" style=\"padding: 5px\">\n          <label for=\"\">Company Name</label>\n          <div class=\"phoneField\">\n            <input\n              formControlName=\"CompanyName\"\n              type=\"text\"\n              name=\"company name\"\n              class=\"input\"\n              placeholder=\"Midra\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group row\" style=\"padding: 5px\">\n          <label class=\"label\">RC Number</label>\n          <div\n            style=\"\n              border: 0.800000011920929px solid #ced4da;\n              border-radius: 3px;\n              background-color: #ced4da;\n              position: relative;\n            \"\n          >\n            <input\n              type=\"text\"\n              formControlName=\"RCNumber\"\n              placeholder=\"3536352\"\n              id=\"text\"\n              name=\"rc number\"\n              required\n              style=\"border: none\"\n              class=\"input\"\n            />\n          </div>\n        </div>\n\n        <div class=\"form-group row\" style=\"padding: 5px\">\n          <label class=\"label\">Tax Identification Number (TIN)</label>\n          <div\n            style=\"\n              border: 0.800000011920929px solid #ced4da;\n              border-radius: 3px;\n              background-color: #ced4da;\n              position: relative;\n            \"\n          >\n            <input\n              type=\"text\"\n              placeholder=\"235352\"\n              id=\"text\"\n              name=\"text\"\n              required\n              style=\"border: none\"\n              formControlName=\"TinNumber\"\n              class=\"input\"\n            />\n          </div>\n        </div>\n\n        <div class=\"form-group row\" style=\"margin-top: 10px\">\n          <label for=\"\">Do you own up to 25% of the company shares?</label>\n\n          <div\n            style=\"\n              display: flex;\n              flex-direction: row;\n              width: 200px;\n              justify-content: left;\n              padding: 10px;\n            \"\n          >\n            <input\n              formControlName=\"Shares\"\n              type=\"radio\"\n              id=\"true\"\n              name=\"Shares\"\n              [value]=\"true\"\n            />\n            <label style=\"margin-right: 20px\" for=\"yes\">Yes</label>\n\n            <input\n              formControlName=\"Shares\"\n              type=\"radio\"\n              id=\"no\"\n              name=\"Shares\"\n              [value]=\"false\"\n            />\n            <label for=\"No\">No</label><br />\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <ion-button\n            class=\"btn\"\n            expand=\"block\"\n            style=\"margin-top: 1rem\"\n            (click)=\"register()\"\n            routerLinkActive=\"router-link-active\"\n          >\n            Next\n          </ion-button>\n        </div>\n      </form>\n    </section>\n  </section>\n</ion-content>\n";

/***/ }),

/***/ 21242:
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/register/select-account-type/select-account-type.component.html?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-loader *ngIf=\"loading\"></app-loader>\r\n<ion-content *ngIf=\"stage < 1\">\r\n  <div *ngIf=\"stage < 1\">\r\n    <section>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button (click)=\"goBack()\">\r\n          <ion-icon\r\n            name=\"arrow-back-outline\"\r\n            style=\"color: #676767; padding-top: 10px\"\r\n          ></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </section>\r\n    <section>\r\n      <h3>Select Account Type</h3>\r\n    </section>\r\n    <div\r\n      [ngClass]=\"mode === 'Royal Basic' ? 'active card' : 'notActive card'\"\r\n      (click)=\"setMode('Royal Basic')\"\r\n    >\r\n      <ion-card-header class=\"header\">Royal Basic</ion-card-header>\r\n      <ion-card-content\r\n        style=\"\r\n          display: flex;\r\n          flex-direction: row;\r\n          justify-content: space-between;\r\n        \"\r\n      >\r\n        <span class=\"tsx\"\r\n          >This account is perfect for Individuals, Students, Freelancers,\r\n        </span>\r\n        <ion-img\r\n          *ngIf=\"mode === 'Royal Basic'\"\r\n          src=\"assets/icon/check.png\"\r\n          style=\"width: 30px\"\r\n        ></ion-img>\r\n      </ion-card-content>\r\n    </div>\r\n\r\n    <div\r\n      [ngClass]=\"mode !== 'Royal Basic' ? 'active card' : 'notActive card'\"\r\n      (click)=\"setMode('Royal Corporate')\"\r\n    >\r\n      <ion-card-header class=\"header\">Royal Corporate</ion-card-header>\r\n      <ion-card-content\r\n        style=\"\r\n          display: flex;\r\n          flex-direction: row;\r\n          justify-content: space-between;\r\n        \"\r\n      >\r\n        <span class=\"tsx\"\r\n          >This account is perfect for Companies, SMEs, Sole Traders,\r\n          Enterprises\r\n        </span>\r\n        <ion-img\r\n          *ngIf=\"mode !== 'Royal Basic'\"\r\n          src=\"assets/icon/check.png\"\r\n          style=\"width: 30px\"\r\n        ></ion-img>\r\n      </ion-card-content>\r\n    </div>\r\n\r\n    <div class=\"form-group\" style=\"padding: 12px\">\r\n      <ion-button\r\n        class=\"btn\"\r\n        expand=\"block\"\r\n        (click)=\"register()\"\r\n        style=\"margin-top: 1rem\"\r\n      >\r\n        Continue\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Step Two -->\r\n  <div *ngIf=\"stage > 0\">\r\n    <section>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button (click)=\"goBack()\">\r\n          <ion-icon\r\n            name=\"arrow-back-outline\"\r\n            style=\"color: #676767; padding-top: 10px\"\r\n          ></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </section>\r\n    <section>\r\n      <h3>Create Account</h3>\r\n    </section>\r\n    <ion-card style=\"background: #e0feea; border-radius: 8px\">\r\n      <ion-card-header class=\"header\">I have BVN</ion-card-header>\r\n      <ion-card-content\r\n        style=\"\r\n          display: flex;\r\n          flex-direction: row;\r\n          justify-content: space-around;\r\n        \"\r\n      >\r\n        <span\r\n          >Create a Royal Bank account using your Bank Verification Numnber\r\n        </span>\r\n        <ion-img\r\n          src=\"assets/icon/check.png\"\r\n          style=\"width: 55px; height: 55px\"\r\n        ></ion-img>\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <ion-card style=\"background: #f8f8f8; border-radius: 8px\">\r\n      <ion-card-header class=\"header\">I don&#39;t have BVN</ion-card-header>\r\n      <ion-card-content\r\n        style=\"\r\n          display: flex;\r\n          flex-direction: row;\r\n          justify-content: space-around;\r\n        \"\r\n      >\r\n        <span\r\n          >Create a Royal Bank account using your Bank Verification Numnber\r\n        </span>\r\n        <ion-img\r\n          src=\"assets/icon/check.png\"\r\n          style=\"width: 55px; height: 55px\"\r\n        ></ion-img>\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <div class=\"form-group\" style=\"padding: 12px\">\r\n      <ion-button\r\n        class=\"btn\"\r\n        expand=\"block\"\r\n        (click)=\"next()\"\r\n        style=\"margin-top: 1rem\"\r\n      >\r\n        Continue\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 31069:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/register/verify-bvn/verify-bvn.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-loader *ngIf=\"loading\"></app-loader>\r\n<ion-content *ngIf=\"page === 'select'\">\r\n  <div *ngIf=\"stage < 1\">\r\n    <section>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button (click)=\"goBack()\">\r\n          <ion-icon\r\n            name=\"arrow-back-outline\"\r\n            style=\"color: #676767; padding-top: 10px\"\r\n          ></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </section>\r\n    <section>\r\n      <h3>Create Account</h3>\r\n    </section>\r\n    <div\r\n      [ngClass]=\"mode === 'basic' ? 'active card' : 'notActive card'\"\r\n      (click)=\"setMode('basic')\"\r\n    >\r\n      <ion-card-header class=\"header\">I have BVN</ion-card-header>\r\n      <ion-card-content\r\n        style=\"\r\n          display: flex;\r\n          flex-direction: row;\r\n          justify-content: space-between;\r\n        \"\r\n      >\r\n        <span class=\"tsx\"\r\n          >Create a Royal Bank account using your Bank Verification Number\r\n        </span>\r\n        <ion-img\r\n          *ngIf=\"mode === 'basic'\"\r\n          src=\"assets/icon/check.png\"\r\n          style=\"width: 30px\"\r\n        ></ion-img>\r\n      </ion-card-content>\r\n    </div>\r\n\r\n    <div\r\n      [ngClass]=\"mode !== 'basic' ? 'active card' : 'notActive card'\"\r\n      (click)=\"setMode('cooprate')\"\r\n    >\r\n      <ion-card-header class=\"header\">I don't have BVN</ion-card-header>\r\n      <ion-card-content\r\n        style=\"\r\n          display: flex;\r\n          flex-direction: row;\r\n          justify-content: space-between;\r\n        \"\r\n      >\r\n        <span class=\"tsx\">\r\n          Create a Royal Bank account without your Bank Verification Number\r\n        </span>\r\n        <ion-img\r\n          *ngIf=\"mode !== 'basic'\"\r\n          src=\"assets/icon/check.png\"\r\n          style=\"width: 30px\"\r\n        ></ion-img>\r\n      </ion-card-content>\r\n    </div>\r\n\r\n    <div class=\"form-group\" style=\"padding: 12px\">\r\n      <ion-button\r\n        class=\"btn\"\r\n        expand=\"block\"\r\n        (click)=\"register()\"\r\n        style=\"margin-top: 1rem\"\r\n      >\r\n        Continue\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n<ion-content *ngIf=\"page === 'verify'\">\r\n  <div>\r\n    <section class=\"row\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button (click)=\"goBack()\">\r\n          <ion-icon\r\n            name=\"arrow-back-outline\"\r\n            style=\"color: #676767; padding-top: 10px\"\r\n          ></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </section>\r\n    <section class=\"row\" *ngIf=\"route.snapshot.params.mode === '1'\">\r\n      <h3>Verify your BVN</h3>\r\n    </section>\r\n    <section class=\"row\" *ngIf=\"route.snapshot.params.mode !== '1'\">\r\n      <h3>Verify Director's BVN</h3>\r\n    </section>\r\n    <section\r\n      class=\"row\"\r\n      style=\"\r\n        text-align: center;\r\n        margin: 30px 0;\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-content: space-between;\r\n      \"\r\n    >\r\n      <section>\r\n        <div class=\"sub\" class=\"row\" *ngIf=\"route.snapshot.params.mode === '1'\">\r\n          Your Bank Verification Number is used to confirm your identity\r\n        </div>\r\n        <div class=\"sub\" class=\"row\" *ngIf=\"route.snapshot.params.mode !== '1'\">\r\n          Your Bank Verification Number is used to confirm the identity of the\r\n          company director who must be listed on the CAC Document\r\n        </div>\r\n      </section>\r\n    </section>\r\n\r\n    <section class=\"row\">\r\n      <form [formGroup]=\"onboardingForm\">\r\n        <div class=\"form-group row\" style=\"padding: 3px\">\r\n          <label for=\"\" class=\"label\">Enter your BVN</label>\r\n          <input\r\n            type=\"text\"\r\n            formControlName=\"BVN\"\r\n            name=\"BVN\"\r\n            class=\"input\"\r\n            placeholder=\"123456789012\"\r\n          />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <ion-button\r\n            class=\"btn\"\r\n            expand=\"block\"\r\n            style=\"margin-top: 1rem\"\r\n            (click)=\"validateBVN()\"\r\n            routerLinkActive=\"router-link-active\"\r\n          >\r\n            Verify\r\n          </ion-button>\r\n        </div>\r\n      </form>\r\n    </section>\r\n\r\n    <section *ngIf=\"bvnError\" class=\"row\">\r\n      <div style=\"background: #f8e2e2; border-radius: 8px; margin: 10px 4px\">\r\n        <ion-card-content>\r\n          <span style=\"text-align: justify; font-size: 12px; color: #de0000\"\r\n            >Sorry, We could not verify your BVN, Try Again\r\n          </span>\r\n        </ion-card-content>\r\n      </div>\r\n    </section>\r\n\r\n    <section class=\"row\">\r\n      <ion-card\r\n        style=\"background: #e0feea; border-radius: 8px; margin: 10px 4px\"\r\n      >\r\n        <ion-card-content\r\n          style=\"\r\n            display: flex;\r\n            flex-direction: row;\r\n            justify-content: space-around;\r\n            background: #fff5d2;\r\n            border-radius: 8px;\r\n          \"\r\n        >\r\n          <span style=\"text-align: justify; font-size: 12px; color: #25214f\"\r\n            >Royal Bank is legally required to verify your identity, Royal Bank\r\n            DOES NOT have access to your other bank accounts or transactions and\r\n            will never share your information with a third party.\r\n          </span>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </section>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 43016:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/register/verify-email/verify-email.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content *ngIf=\"stage === 0\">\r\n  <section class=\"row\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon\r\n          name=\"arrow-back-outline\"\r\n          style=\"color: #676767; padding-top: 10px\"\r\n        ></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </section>\r\n  <section class=\"row\">\r\n    <h3>Verify your email</h3>\r\n  </section>\r\n  <section\r\n    class=\"row\"\r\n    style=\"\r\n      text-align: center;\r\n      margin: 10px 0;\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-content: space-between;\r\n    \"\r\n  >\r\n    <section style=\"margin-top: 2rem\">\r\n      <span class=\"sub-title\"\r\n        >We sent a verfication code to your email address just to make sure its\r\n        yours.\r\n        <!-- {{ otp }} -->\r\n      </span>\r\n    </section>\r\n\r\n    <section>\r\n      <p class=\"sub-title\">OTP has been sent to</p>\r\n      <p style=\"font-weight: 800\">{{ user.emailAddress }}</p>\r\n    </section>\r\n  </section>\r\n\r\n  <section class=\"row\">\r\n    <form>\r\n      <div class=\"form-group row\" style=\"padding: 3px\">\r\n        <label>Verification Code</label>\r\n        <input\r\n          type=\"text\"\r\n          name=\"text\"\r\n          class=\"input\"\r\n          placeholder=\"1234567\"\r\n          [(ngModel)]=\"enOTP\"\r\n        />\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <ion-button\r\n          class=\"btn\"\r\n          expand=\"block\"\r\n          style=\"margin-top: 1rem\"\r\n          (click)=\"verifyOtp()\"\r\n        >\r\n          Verify\r\n        </ion-button>\r\n      </div>\r\n      <section *ngIf=\"bvnError\" class=\"row\">\r\n        <div style=\"background: #f8e2e2; border-radius: 8px; margin: 10px 4px\">\r\n          <ion-card-content>\r\n            <span style=\"text-align: justify; font-size: 12px; color: #de0000\"\r\n              >OTP verification failed, Please enter the correct OTP\r\n            </span>\r\n          </ion-card-content>\r\n        </div>\r\n      </section>\r\n    </form>\r\n  </section>\r\n\r\n  <section>\r\n    <p class=\"sub-title\">Didn&#39;t get any code?</p>\r\n    <a class=\"link\" (click)=\"sendOtp()\">Resend Code</a>\r\n  </section>\r\n  <app-loader *ngIf=\"loading\"></app-loader>\r\n</ion-content>\r\n";

/***/ }),

/***/ 67109:
/*!************************************************************************************!*\
  !*** ./src/app/modules/register/verify-info/verify-info.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content *ngIf=\"completed === 1\">\r\n  <section class=\"row\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon\r\n          name=\"arrow-back-outline\"\r\n          style=\"color: #676767; padding-top: 10px\"\r\n        ></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </section>\r\n  <section class=\"row\">\r\n    <h3>Verify your Information</h3>\r\n  </section>\r\n  <section\r\n    class=\"row\"\r\n    style=\"\r\n      text-align: center;\r\n      margin: 10px 0;\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-content: space-between;\r\n    \"\r\n  >\r\n    <section style=\"margin-top: 2rem\">\r\n      <span class=\"sub-title\"\r\n        >We sent a verfication code to your phone number just to make sure its\r\n        yours.\r\n      </span>\r\n    </section>\r\n\r\n    <section>\r\n      <p class=\"sub-title\">OTP has been sent to</p>\r\n      <p style=\"font-weight: 800\">+2348012345678</p>\r\n    </section>\r\n  </section>\r\n\r\n  <section class=\"row\">\r\n    <form [formGroup]=\"verifyForm\">\r\n      <div class=\"form-group row\" style=\"padding: 3px\">\r\n        <label for=\"\" class=\"label\">Verification Code</label>\r\n        <input\r\n          type=\"password\"\r\n          name=\"password\"\r\n          class=\"input\"\r\n          placeholder=\"123456789012\"\r\n        />\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <ion-button\r\n          class=\"btn\"\r\n          expand=\"block\"\r\n          style=\"margin-top: 1rem\"\r\n          [routerLink]=\"['/select-account']\"\r\n          routerLinkActive=\"router-link-active\"\r\n        >\r\n          Verify\r\n        </ion-button>\r\n      </div>\r\n    </form>\r\n  </section>\r\n\r\n  <section>\r\n    <p class=\"sub-title\">Didn&#39;t get any code?</p>\r\n    <a href=\"http://\" class=\"link\" target=\"_blank\" rel=\"noopener noreferrer\"\r\n      >Resend Code</a\r\n    >\r\n  </section>\r\n</ion-content>\r\n\r\n<!-- Success Page-->\r\n\r\n<ion-content *ngIf=\"completed === 2\">\r\n  <section class=\"central-image\">\r\n    <ion-img [src]=\"imageSrc\" class=\"img\"></ion-img>\r\n  </section>\r\n\r\n  <section>\r\n    <p style=\"color: #25214f; font-weight: 800\">BVN verified successfully</p>\r\n  </section>\r\n\r\n  <section class=\"central-image row\" style=\"margin-top: 80px\">\r\n    <form [formGroup]=\"verifyForm\">\r\n      <div class=\"form-group\">\r\n        <ion-button\r\n          class=\"btn\"\r\n          expand=\"block\"\r\n          style=\"margin-top: 1rem\"\r\n          [routerLink]=\"['/select-account']\"\r\n          routerLinkActive=\"router-link-active\"\r\n        >\r\n          Continue\r\n        </ion-button>\r\n      </div>\r\n    </form>\r\n  </section>\r\n</ion-content>\r\n\r\n<!-- BVN Data -->\r\n<ion-content *ngIf=\"completed === 3\">\r\n  <section class=\"row\">\r\n    <h3>Your BVN data</h3>\r\n  </section>\r\n\r\n  <section>\r\n    <div style=\"background-color: #f8f8f8; border-radius: 8px; padding: 10px\">\r\n      <p style=\"text-align: left\">\r\n        <span style=\"font-weight: 800; margin-right: 5px\">First Name:</span\r\n        >Kelvin\r\n      </p>\r\n      <p style=\"text-align: left\">\r\n        <span style=\"font-weight: 800; margin-right: 5px\">First Name:</span\r\n        >Kelvin\r\n      </p>\r\n      <p style=\"text-align: left\">\r\n        <span style=\"font-weight: 800; margin-right: 5px\">First Name:</span\r\n        >Kelvin\r\n      </p>\r\n      <p style=\"text-align: left\">\r\n        <span style=\"font-weight: 800; margin-right: 5px\">First Name:</span\r\n        >Kelvin\r\n      </p>\r\n      <p style=\"text-align: left\">\r\n        <span style=\"font-weight: 800; margin-right: 5px\">First Name:</span\r\n        >Kelvin\r\n      </p>\r\n      <p style=\"text-align: left\">\r\n        <span style=\"font-weight: 800; margin-right: 5px\">First Name:</span\r\n        >Kelvin\r\n      </p>\r\n    </div>\r\n  </section>\r\n  <section class=\"central-image row\" style=\"margin-top: 80px\">\r\n    <form [formGroup]=\"verifyForm\">\r\n      <div class=\"form-group\">\r\n        <ion-button\r\n          class=\"btn\"\r\n          expand=\"block\"\r\n          style=\"margin-top: 1rem\"\r\n          [routerLink]=\"['/select-account']\"\r\n          routerLinkActive=\"router-link-active\"\r\n        >\r\n          Use & Continue\r\n        </ion-button>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <ion-button\r\n          class=\"btn2\"\r\n          expand=\"block\"\r\n          style=\"margin-top: 1rem\"\r\n          [routerLink]=\"['/select-account']\"\r\n          routerLinkActive=\"router-link-active\"\r\n        >\r\n          Exit & Continue\r\n        </ion-button>\r\n      </div>\r\n    </form>\r\n  </section>\r\n</ion-content>\r\n";

/***/ }),

/***/ 21957:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/register/verify-phone/verify-phone.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-loader *ngIf=\"loading\"></app-loader>\r\n<ion-content>\r\n  <section class=\"row\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon\r\n          name=\"arrow-back-outline\"\r\n          style=\"color: #676767; padding-top: 10px\"\r\n        ></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </section>\r\n  <section class=\"row\">\r\n    <h3>Verify your Phone</h3>\r\n  </section>\r\n  <section\r\n    class=\"row\"\r\n    style=\"\r\n      text-align: center;\r\n      margin: 10px 0;\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-content: space-between;\r\n    \"\r\n  >\r\n    <section style=\"margin-top: 2rem\">\r\n      <span class=\"sub-title\"\r\n        >We sent a verfication code to your phone number just to make sure its\r\n        yours.\r\n        <!-- {{ otp }} -->\r\n      </span>\r\n    </section>\r\n\r\n    <section>\r\n      <p class=\"sub-title\">OTP has been sent to</p>\r\n      <p style=\"font-weight: 800\">{{ user.phoneNo }}</p>\r\n    </section>\r\n  </section>\r\n\r\n  <section class=\"row\">\r\n    <form>\r\n      <div class=\"form-group row\" style=\"padding: 3px\">\r\n        <label for=\"\">Verification Code</label>\r\n        <input\r\n          type=\"text\"\r\n          name=\"verify\"\r\n          class=\"input\"\r\n          placeholder=\"123458\"\r\n          [(ngModel)]=\"enOTP\"\r\n        />\r\n      </div>\r\n      <section *ngIf=\"bvnError\" class=\"row\">\r\n        <div style=\"background: #f8e2e2; border-radius: 8px; margin: 10px 4px\">\r\n          <ion-card-content>\r\n            <span style=\"text-align: justify; font-size: 12px; color: #de0000\"\r\n              >Sorry, We could not verify your OTP, input the correct OTP and\r\n              Try Again\r\n            </span>\r\n          </ion-card-content>\r\n        </div>\r\n      </section>\r\n\r\n      <div class=\"form-group\">\r\n        <ion-button\r\n          class=\"btn\"\r\n          expand=\"block\"\r\n          style=\"margin-top: 1rem\"\r\n          (click)=\"verifyOtp()\"\r\n          routerLinkActive=\"router-link-active\"\r\n        >\r\n          Verify\r\n        </ion-button>\r\n      </div>\r\n    </form>\r\n  </section>\r\n\r\n  <section>\r\n    <p class=\"sub-title\">Didn&#39;t get any code?</p>\r\n    <a class=\"link\" (click)=\"sendOtp()\">Resend Code</a>\r\n  </section>\r\n</ion-content>\r\n";

/***/ }),

/***/ 41582:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/reset-password/reset-password.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <section class=\"central-image\">\n    <ion-img [src]=\"imageSrc\" class=\"img\"></ion-img>\n  </section>\n\n  <section style=\"text-align: center; margin-top: -80px\">\n    <section section style=\"padding-top: 2rem\">\n      <h2 class=\"title\" style=\"font-family: Mulish !important\">\n        Hey, Welcome back\n      </h2>\n    </section>\n\n    <section class=\"row\">\n      <p class=\"sub-title\" style=\"font-family: Mulish !important\">\n        Reset your password\n      </p>\n    </section>\n  </section>\n  <form *ngIf=\"change\">\n    <div class=\"form-group row\">\n      <label class=\"label\" style=\"font-family: Mulish !important\"\n        >Email address</label\n      >\n      <input\n        type=\"email\"\n        class=\"form-control\"\n        placeholder=\"Email\"\n        name=\"email\"\n        id=\"email\"\n        required\n        [(ngModel)]=\"email\"\n      />\n    </div>\n\n    <div class=\"form-group\">\n      <ion-button\n        class=\"btn\"\n        expand=\"block\"\n        style=\"margin-top: 1rem\"\n        (click)=\"sendOtp()\"\n        style=\"font-family: Mulish !important\"\n      >\n        Send OTP\n      </ion-button>\n      <app-loader *ngIf=\"loading\"></app-loader>\n    </div>\n    <div\n      style=\"\n        margin: 15px 0;\n        font-size: 14px;\n        color: #676767;\n        display: flex;\n        justify-content: space-between;\n        flex-direction: column;\n      \"\n    >\n      <span>\n        Alreadt have an account?\n        <span\n          style=\"color: #fee178; font-weight: 700; margin-top: 20px\"\n          (click)=\"loginNow()\"\n          >Login</span\n        ></span\n      >\n      <span\n        style=\"color: #25214f; font-weight: 700; margin-top: 10px\"\n        (click)=\"register()\"\n        >Sign Up</span\n      >\n    </div>\n  </form>\n\n  <form *ngIf=\"!change\">\n    <div class=\"form-group row\">\n      <label class=\"label\" style=\"font-family: Mulish !important\"\n        >Enter OTP</label\n      >\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        placeholder=\"2223762\"\n        name=\"otp\"\n        id=\"otp\"\n        required\n        [(ngModel)]=\"otp\"\n      />\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"label\" style=\"font-family: Mulish !important\"\n        >Password</label\n      >\n      <div\n        style=\"\n          border: 0.800000011920929px solid #ced4da;\n          border-radius: 3px;\n          background-color: #b6b6b6;\n          position: relative;\n        \"\n      >\n        <input\n          [type]=\"show ? 'text' : 'password'\"\n          placeholder=\"Password\"\n          id=\"password\"\n          name=\"password\"\n          required\n          style=\"border: none\"\n          [(ngModel)]=\"password\"\n          (ngModelChange)=\"checkStrength($event)\"\n        />\n        <ion-icon\n          (click)=\"viewpassword()\"\n          *ngIf=\"!show\"\n          icon=\"eye-off-outline\"\n          style=\"\n            font-size: 32px;\n            color: #676767;\n            cursor: pointer;\n            background-color: transparent;\n            position: absolute;\n            right: 20px;\n            top: 10px;\n          \"\n        ></ion-icon>\n        <ion-icon\n          (click)=\"viewpassword()\"\n          *ngIf=\"show\"\n          icon=\"eye-outline\"\n          style=\"\n            font-size: 32px;\n            color: #676767;\n            cursor: pointer;\n            background-color: transparent;\n            position: absolute;\n            right: 20px;\n            top: 10px;\n          \"\n        ></ion-icon>\n      </div>\n      <div style=\"font-size: 13px; text-align: left\">\n        password should contain lowercase, uppercase, number and minimum of 6\n        characters\n      </div>\n      <div\n        style=\"\n          display: flex;\n          flex-direction: row;\n          margin-top: 10px;\n          background-color: red;\n        \"\n      >\n        <div\n          style=\"width: 25%; height: 3px\"\n          [style.background-color]=\"check[0] ? 'green' : 'red'\"\n        ></div>\n        <div\n          style=\"width: 25%; height: 3px\"\n          [style.background-color]=\"check[1] ? 'green' : 'red'\"\n        ></div>\n        <div\n          style=\"width: 25%; height: 3px\"\n          [style.background-color]=\"\n            check[2] ? 'green' : check[1] ? 'rgb(217, 217, 12)' : 'red'\n          \"\n        ></div>\n        <div\n          style=\"width: 25%; height: 3px\"\n          [style.background-color]=\"\n            check[3]\n              ? 'green'\n              : check[1] || check[2]\n              ? 'rgb(217, 217, 12)'\n              : 'red'\n          \"\n        ></div>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"label\" style=\"font-family: Mulish !important\"\n        >Confirm Password</label\n      >\n      <div\n        style=\"\n          border: 0.800000011920929px solid #ced4da;\n          border-radius: 3px;\n          background-color: #b6b6b6;\n          position: relative;\n        \"\n      >\n        <input\n          [type]=\"show ? 'text' : 'password'\"\n          placeholder=\"Password\"\n          id=\"password\"\n          name=\"password\"\n          required\n          style=\"border: none\"\n          [(ngModel)]=\"confirmPassword\"\n        />\n        <ion-icon\n          (click)=\"viewpassword()\"\n          *ngIf=\"!show\"\n          icon=\"eye-off-outline\"\n          style=\"\n            font-size: 32px;\n            color: #676767;\n            cursor: pointer;\n            background-color: transparent;\n            position: absolute;\n            right: 20px;\n            top: 10px;\n          \"\n        ></ion-icon>\n        <ion-icon\n          (click)=\"viewpassword()\"\n          *ngIf=\"show\"\n          icon=\"eye-outline\"\n          style=\"\n            font-size: 32px;\n            color: #676767;\n            cursor: pointer;\n            background-color: transparent;\n            position: absolute;\n            right: 20px;\n            top: 10px;\n          \"\n        ></ion-icon>\n      </div>\n    </div>\n    <!-- <div class=\"form-group row\">\n      <app-show-hide-password>\n        <input type=\"password\" placeholder=\"Password\" formControlName=\"password\">\n    </app-show-hide-password>\n    </div> -->\n    <div class=\"form-group\">\n      <ion-button\n        class=\"btn\"\n        expand=\"block\"\n        style=\"margin-top: 1rem\"\n        (click)=\"resetPassword()\"\n        style=\"font-family: Mulish !important\"\n      >\n        Reset Password\n      </ion-button>\n      <app-loader *ngIf=\"loading\"></app-loader>\n    </div>\n    <div\n      style=\"\n        margin: 15px 0;\n        font-size: 14px;\n        color: #676767;\n        display: flex;\n        justify-content: space-between;\n        flex-direction: column;\n      \"\n    >\n      <span>\n        Already have an account?\n        <span\n          style=\"color: #fee178; font-weight: 700; margin-top: 20px\"\n          (click)=\"loginNow()\"\n          >Login</span\n        ></span\n      >\n      <span\n        style=\"color: #25214f; font-weight: 700; margin-top: 10px\"\n        (click)=\"register()\"\n        >Sign Up</span\n      >\n    </div>\n  </form>\n</ion-content>\n";

/***/ }),

/***/ 58330:
/*!*******************************************************************!*\
  !*** ./src/app/modules/support/support.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <div style=\"height: 70px\"></div>\n  <div class=\"all\">\n    <div class=\"phone\">\n      <div class=\"head\">\n        <span>Telephone</span>\n        <ion-icon\n          name=\"call\"\n          style=\"font-size: 20px; color: #25214f\"\n        ></ion-icon>\n      </div>\n      <div class=\"line\"></div>\n      <div class=\"subs\">09178765565</div>\n      <div class=\"subs\">08083627262</div>\n      <div class=\"subs\">07027281727</div>\n      <div class=\"subs\">091787655656</div>\n    </div>\n\n    <div class=\"phone\">\n      <div class=\"head\">\n        <span>Email</span>\n        <ion-icon\n          name=\"mail\"\n          style=\"font-size: 20px; color: #25214f\"\n        ></ion-icon>\n      </div>\n      <div class=\"line\"></div>\n      <div class=\"subs\">contact@royalbank.com</div>\n      <div class=\"subs\">info@royalbank.com</div>\n    </div>\n\n    <div class=\"phone\">\n      <div class=\"head\">\n        <span>Social Media</span>\n        <ion-icon\n          style=\"font-size: 20px; color: #25214f\"\n          name=\"share\"\n        ></ion-icon>\n      </div>\n      <div class=\"line\"></div>\n      <div>\n        <table>\n          <tbody>\n            <tr>\n              <th>Twitter</th>\n              <td>@royalbank</td>\n            </tr>\n            <tr>\n              <th>Instagram</th>\n              <td>@royalbank</td>\n            </tr>\n            <tr>\n              <th>Facebook</th>\n              <td>@royalbank</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 81131:
/*!****************************************************************!*\
  !*** ./src/app/modules/transfer/transfer.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div style=\"height: 40px\"></div>\r\n  <app-loader *ngIf=\"loading\"></app-loader>\r\n  <app-pin\r\n    (close)=\"close()\"\r\n    (loading)=\"load()\"\r\n    (done)=\"finish()\"\r\n    *ngIf=\"show\"\r\n  ></app-pin>\r\n  <section style=\"background-color: #25214f\">\r\n    <div\r\n      style=\"\r\n        padding: 20px;\r\n        width: 100%;\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        justify-content: center;\r\n        background-color: #25214f;\r\n        color: #fff;\r\n        padding-top: 40px;\r\n      \"\r\n    >\r\n      <div\r\n        style=\"\r\n          background: linear-gradient(\r\n            180deg,\r\n            #ffe278 0%,\r\n            rgba(255, 226, 120, 0.55) 100%\r\n          );\r\n          padding: 20px 30px;\r\n          text-align: left;\r\n          width: 100%;\r\n          max-width: 400px;\r\n          margin: auto;\r\n          border-radius: 10px;\r\n          color: #25214f;\r\n        \"\r\n      >\r\n        <div style=\"font-size: 15px\">\r\n          {{ user.accountType }} {{ user?.accountNos[0]?.accountNo }}\r\n        </div>\r\n        <div\r\n          style=\"\r\n            border: 1px solid #25214f;\r\n            padding: 10px;\r\n            width: 100%;\r\n            display: flex;\r\n            justify-content: space-between;\r\n            align-items: center;\r\n            margin-top: 20px;\r\n          \"\r\n        >\r\n          <div>Balance:</div>\r\n          <div style=\"font-size: 20px\">\r\n            {{ user?.accountNos[0]?.accountBalance | currency: \"&#8358;\" }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <section\r\n      *ngIf=\"transType === 0\"\r\n      style=\"\r\n        background-color: white;\r\n        border-top-left-radius: 50px;\r\n        border-top-right-radius: 50px;\r\n        padding: 20px;\r\n        padding-top: 40px;\r\n      \"\r\n    >\r\n      <div\r\n        style=\"\r\n          font-family: Mulish !important;\r\n          display: flex;\r\n          flex-direction: row;\r\n          justify-content: space-between;\r\n          align-items: center;\r\n          cursor: pointer;\r\n          margin: 1.5rem 0.5rem;\r\n          background-color: #25214f;\r\n          color: white;\r\n          padding: 15px 10px;\r\n          border-radius: 30px;\r\n        \"\r\n        (click)=\"transactionType(1)\"\r\n      >\r\n        <div\r\n          style=\"\r\n            display: flex;\r\n            flex-direction: row;\r\n            justify-content: space-between;\r\n            align-items: center;\r\n          \"\r\n        >\r\n          <div class=\"icon-container\">\r\n            <img\r\n              style=\"width: 50px; height: 50px\"\r\n              src=\"assets/icon/royalT.png\"\r\n              alt=\"\"\r\n            />\r\n          </div>\r\n          <div style=\"margin-left: 15px\">\r\n            <div style=\"margin: auto; font-size: 16px; margin-bottom: 10px\">\r\n              Make a new transfer\r\n            </div>\r\n            <div style=\"margin: auto; font-size: 11px\">\r\n              Send money to Royal account\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <img\r\n          style=\"width: 30px; height: 30px\"\r\n          src=\"assets/icon/ar.png\"\r\n          alt=\"\"\r\n        />\r\n      </div>\r\n\r\n      <div\r\n        style=\"\r\n          font-family: Mulish !important;\r\n          display: flex;\r\n          flex-direction: row;\r\n          justify-content: space-between;\r\n          align-items: center;\r\n          cursor: pointer;\r\n          margin: 1.5rem 0.5rem;\r\n          background: linear-gradient(\r\n            180deg,\r\n            #ffe278 0%,\r\n            rgba(255, 226, 120, 0.55) 100%\r\n          );\r\n          color: #25214f;\r\n          padding: 15px 10px;\r\n          border-radius: 30px;\r\n        \"\r\n        (click)=\"transactionType(2)\"\r\n      >\r\n        <div\r\n          style=\"\r\n            display: flex;\r\n            flex-direction: row;\r\n            justify-content: space-between;\r\n            align-items: center;\r\n          \"\r\n        >\r\n          <div class=\"icon-container\">\r\n            <img\r\n              style=\"width: 50px; height: 50px; border-radius: 50%\"\r\n              src=\"assets/icon/otherT.png\"\r\n              alt=\"\"\r\n            />\r\n          </div>\r\n          <div style=\"margin-left: 15px\">\r\n            <div style=\"margin: auto; font-size: 16px; margin-bottom: 10px\">\r\n              Make a new transfer\r\n            </div>\r\n            <div style=\"margin: auto; font-size: 11px\">\r\n              Send money to Other Banks\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <img\r\n          style=\"width: 30px; height: 30px\"\r\n          src=\"assets/icon/otherArrow.png\"\r\n          alt=\"\"\r\n        />\r\n      </div>\r\n\r\n      <!-- <div\r\n        style=\"\r\n          font-family: Mulish !important;\r\n          display: flex;\r\n          flex-direction: row;\r\n          justify-content: space-around;\r\n          cursor: pointer;\r\n          margin: 1.5rem 0.5rem;\r\n        \"\r\n        (click)=\"transactionType(2)\"\r\n      >\r\n        <div class=\"icon-container\">\r\n          <ion-icon name=\"people\" class=\"inner-icon\"></ion-icon>\r\n        </div>\r\n        <span style=\"margin: auto; font-size: 20px\">Send to other Banks</span>\r\n        <ion-icon\r\n          name=\"caret-forward\"\r\n          style=\"margin: auto; font-size: 20px; color: #25214f\"\r\n        ></ion-icon>\r\n      </div> -->\r\n    </section>\r\n\r\n    <section *ngIf=\"transType === 1 || transType === 2\">\r\n      <section\r\n        *ngIf=\"transType === 2 || transType === 1\"\r\n        style=\"\r\n          background-color: white;\r\n          border-top-left-radius: 10%;\r\n          border-top-right-radius: 10%;\r\n          padding: 20px;\r\n          padding-top: 40px;\r\n        \"\r\n      >\r\n        <div\r\n          class=\"row\"\r\n          style=\"\r\n            display: flex;\r\n            flex-direction: row;\r\n            justify-content: space-between;\r\n            margin-top: 20px;\r\n          \"\r\n        >\r\n          <ion-button\r\n            (click)=\"toggleRequest(true)\"\r\n            [ngClass]=\"{active: selectedBtn === true}\"\r\n            style=\"width: 100%; --border-radius: none\"\r\n          >\r\n            New\r\n          </ion-button>\r\n\r\n          <ion-button\r\n            (click)=\"toggleRequest(false)\"\r\n            size=\"medium\"\r\n            [ngClass]=\"{active: selectedBtn1 === true}\"\r\n            style=\"width: 100%; --border-radius: none\"\r\n          >\r\n            Beneficiary\r\n          </ion-button>\r\n        </div>\r\n        <form *ngIf=\"newReq\">\r\n          <div class=\"form-group row\" style=\"padding: 5px\">\r\n            <label for=\"\">Select Account</label>\r\n            <select [(ngModel)]=\"accNum\" name=\"account\" id=\"\" class=\"input\">\r\n              <option\r\n                *ngFor=\"let data of user.accountNos\"\r\n                [value]=\"data.accountNo\"\r\n              >\r\n                {{data.accountNo}} ({{data.accountBalance | currency:\r\n                \"&#8358;\"}})\r\n              </option>\r\n            </select>\r\n          </div>\r\n\r\n          <div\r\n            class=\"form-group row\"\r\n            style=\"padding: 5px\"\r\n            *ngIf=\"transType === 2\"\r\n          >\r\n            <label for=\"\">Bank</label>\r\n            <select\r\n              [(ngModel)]=\"bankCode\"\r\n              (change)=\"chnageBank($event)\"\r\n              name=\"bank\"\r\n              id=\"\"\r\n              class=\"input\"\r\n            >\r\n              <option *ngFor=\"let data of banks\" [value]=\"data.code\">\r\n                {{data.name}}\r\n              </option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group row\" style=\"padding: 5px; position: relative\">\r\n            <label for=\"\">Beneficiary Account </label>\r\n            <input\r\n              type=\"text\"\r\n              name=\"beneficiary\"\r\n              class=\"input\"\r\n              placeholder=\"009283726\"\r\n              [(ngModel)]=\"benAcc\"\r\n              (ngModelChange)=\"debounce($event)\"\r\n            />\r\n            <div\r\n              *ngIf=\"name\"\r\n              style=\"position: absolute; bottom: -15px; right: 20px\"\r\n              [style.color]=\"showName ? 'red' : 'green'\"\r\n            >\r\n              {{name}}\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\" style=\"padding: 5px\">\r\n            <label for=\"\">Amount</label>\r\n            <input\r\n              type=\"text\"\r\n              [(ngModel)]=\"amount\"\r\n              name=\"amount\"\r\n              class=\"input\"\r\n              placeholder=\"100000\"\r\n            />\r\n          </div>\r\n\r\n          <div class=\"form-group row\" style=\"padding: 5px\">\r\n            <label for=\"\">Narration</label>\r\n            <input\r\n              type=\"text\"\r\n              name=\"narration\"\r\n              class=\"input\"\r\n              [(ngModel)]=\"narration\"\r\n              placeholder=\"\"\r\n            />\r\n          </div>\r\n          <div\r\n            class=\"form-group row\"\r\n            style=\"\r\n              display: flex;\r\n              flex-direction: row;\r\n              justify-content: space-between;\r\n              padding: 5px;\r\n            \"\r\n          >\r\n            <label>Save Beneficiary</label>\r\n            <ion-toggle\r\n              [ngModelOptions]=\"{standalone: true}\"\r\n              [(ngModel)]=\"saveBene\"\r\n            ></ion-toggle>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <ion-button\r\n              class=\"btn\"\r\n              expand=\"block\"\r\n              style=\"margin-top: 1rem; font-family: Mulish !important\"\r\n              (click)=\"next()\"\r\n              routerLinkActive=\"router-link-active\"\r\n            >\r\n              Transfer\r\n            </ion-button>\r\n          </div>\r\n        </form>\r\n\r\n        <form *ngIf=\"!newReq\">\r\n          <div class=\"row-one\" *ngIf=\"benes.length === 0\">\r\n            <span style=\"text-align: left\">No beneficiary found</span>\r\n          </div>\r\n\r\n          <div class=\"row\" style=\"margin-top: 5px\">\r\n            <span\r\n              class=\"header\"\r\n              style=\"text-align: left\"\r\n              *ngIf=\"benes.length > 0\"\r\n              >Beneficiaries</span\r\n            >\r\n\r\n            <div\r\n              style=\"\r\n                background-color: #f8f8f8;\r\n                border-radius: 8px;\r\n                margin-top: 5px;\r\n              \"\r\n              *ngFor=\"let data of benes\"\r\n            >\r\n              <ion-card-content\r\n                style=\"display: flex; flex-direction: row; align-items: center\"\r\n                (click)=\"use(data)\"\r\n              >\r\n                <ion-icon\r\n                  name=\"person\"\r\n                  style=\"\r\n                    margin-right: 10px;\r\n                    font-size: 20px;\r\n                    color: #25214f;\r\n                    width: 10%;\r\n                  \"\r\n                ></ion-icon>\r\n                <div\r\n                  style=\"\r\n                    font-size: 13px;\r\n                    display: flex;\r\n                    flex-direction: column;\r\n                    width: 80%;\r\n                  \"\r\n                >\r\n                  <span style=\"text-align: left; font-weight: 800\"\r\n                    >{{ data.name }} ({{data.bankName}})\r\n                  </span>\r\n                  <span style=\"text-align: left\">{{ data.accNumber }} </span>\r\n                </div>\r\n                <ion-icon\r\n                  (click)=\"delete(data.accNumber)\"\r\n                  name=\"trash\"\r\n                  style=\"\r\n                    margin: auto;\r\n                    font-size: 20px;\r\n                    color: #25214f;\r\n                    width: 10%;\r\n                  \"\r\n                ></ion-icon>\r\n              </ion-card-content>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </section>\r\n    </section>\r\n\r\n    <section\r\n      *ngIf=\"transType === 4\"\r\n      style=\"\r\n        background-color: white;\r\n        border-top-left-radius: 10%;\r\n        border-top-right-radius: 10%;\r\n        padding: 20px;\r\n        padding-top: 40px;\r\n      \"\r\n    >\r\n      <div\r\n        style=\"\r\n          display: flex;\r\n          flex-direction: row;\r\n          justify-content: space-between;\r\n          text-align: left;\r\n        \"\r\n      >\r\n        <div style=\"width: 30vw\">\r\n          <div style=\"font-size: 11px\">From</div>\r\n          <div style=\"font-size: 14px\">{{accNum}}</div>\r\n          <div style=\"font-size: 14px\">your account</div>\r\n        </div>\r\n        <div style=\"width: 30vw\">\r\n          <div style=\"text-align: center; font-size: 15\">\r\n            {{amount | currency: \"&#8358;\" }}\r\n          </div>\r\n          <div style=\"display: flex; flex-direction: row; align-items: center\">\r\n            <div\r\n              style=\"\r\n                height: 10px;\r\n                width: 10px;\r\n                border-radius: 50%;\r\n                background-color: rgb(126, 121, 121);\r\n              \"\r\n            ></div>\r\n            <div\r\n              style=\"\r\n                width: 90%;\r\n                height: 4px;\r\n                background-color: rgb(126, 121, 121);\r\n              \"\r\n            ></div>\r\n            <div\r\n              style=\"\r\n                height: 10px;\r\n                width: 10px;\r\n                border-radius: 50%;\r\n                background-color: rgb(126, 121, 121);\r\n              \"\r\n            ></div>\r\n          </div>\r\n        </div>\r\n        <div style=\"width: 30vw; text-align: right\">\r\n          <div style=\"font-size: 11px\">To</div>\r\n          <div style=\"font-size: 14px\">{{benAcc}}</div>\r\n          <div style=\"font-size: 14px\">{{name}}</div>\r\n          <!-- <div>From</div> -->\r\n        </div>\r\n      </div>\r\n      <div\r\n        style=\"\r\n          display: flex;\r\n          flex-direction: row;\r\n          justify-content: space-between;\r\n          background-color: rgb(246, 238, 238);\r\n          padding: 20px 10px;\r\n          margin-top: 40px;\r\n          font-size: 14px;\r\n          border-radius: 5px;\r\n        \"\r\n      >\r\n        <span style=\"width: 30%; text-align: left\">Narration</span>\r\n        <span style=\"width: 70%; text-align: right; font-size: 12px\"\r\n          >{{narration}}</span\r\n        >\r\n      </div>\r\n      <ion-button\r\n        style=\"margin-top: 30px; background-color: #fee178\"\r\n        class=\"btn2\"\r\n        expand=\"block\"\r\n        (click)=\"show = true\"\r\n      >\r\n        Pay\r\n      </ion-button>\r\n      <ion-button\r\n        style=\"margin-top: 30px\"\r\n        class=\"btn\"\r\n        expand=\"block\"\r\n        (click)=\"back()\"\r\n      >\r\n        Back\r\n      </ion-button>\r\n    </section>\r\n\r\n    <section\r\n      *ngIf=\"transType ===3\"\r\n      style=\"\r\n        background-color: white;\r\n        border-top-left-radius: 10%;\r\n        border-top-right-radius: 10%;\r\n        padding: 20px;\r\n        padding-top: 40px;\r\n      \"\r\n    >\r\n      <div\r\n        style=\"\r\n          display: flex;\r\n          flex-direction: column;\r\n          justify-content: space-evenly;\r\n          height: 70vh;\r\n        \"\r\n      >\r\n        <div>\r\n          <div>\r\n            <!-- <div\r\n            style=\"\r\n              text-align: center;\r\n              font-size: 25px;\r\n              font-weight: 500;\r\n              border-bottom: 2px solid #25214f;\r\n              width: 130px;\r\n              margin: auto;\r\n            \"\r\n          >\r\n            Successful\r\n          </div> -->\r\n          </div>\r\n          <div\r\n            style=\"\r\n              display: flex;\r\n              justify-content: center;\r\n              align-items: center;\r\n              margin: auto;\r\n            \"\r\n          >\r\n            <ion-img\r\n              [src]=\"imageSrc\"\r\n              style=\"width: 200px; margin: auto; height: 200px\"\r\n              class=\"img\"\r\n            ></ion-img>\r\n          </div>\r\n          <section\r\n            style=\"\r\n              font-size: 16px;\r\n              margin-top: 20px;\r\n              text-align: left;\r\n              width: 300px;\r\n              margin: 20px auto;\r\n            \"\r\n          >\r\n            You have successfully transfered {{amount | currency: \"&#8358;\"}} to\r\n            {{name}} <br />\r\n            Bank Name : {{bankName}}, <br />\r\n            Account Number: {{benAcc}}\r\n          </section>\r\n        </div>\r\n        <section\r\n          style=\"\r\n            display: flex;\r\n            flex-direction: column;\r\n            align-content: space-between;\r\n          \"\r\n        >\r\n          <ion-button\r\n            style=\"background-color: #fee178\"\r\n            class=\"btn\"\r\n            expand=\"block\"\r\n            (click)=\"create()\"\r\n          >\r\n            Go To Dashboard\r\n          </ion-button>\r\n        </section>\r\n      </div>\r\n    </section>\r\n  </section>\r\n</ion-content>\r\n";

/***/ }),

/***/ 10252:
/*!*******************************************************************!*\
  !*** ./src/app/modules/welcome/welcome.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content class=\"content\">\r\n  <div style=\"height: 50px\"></div>\r\n\r\n  <section class=\"row\">\r\n    <div class=\"skip\" (click)=\"skip()\" style=\"font-family: Mulish !important;\">Skip</div>\r\n  </section>\r\n  <section class=\"central-image\">\r\n    <ion-img [src]=\"source\" class=\"img\"></ion-img>\r\n  </section>\r\n  <section section style=\"padding-top: 2rem\">\r\n    <div class=\"title\" style=\"font-family: Mulish !important;\">{{ caption }}</div>\r\n  </section>\r\n\r\n  <section class=\"row\">\r\n    <p class=\"sub\" style=\"font-family: Mulish !important;\">\r\n      {{ subtitle }}\r\n    </p>\r\n  </section>\r\n\r\n  <section style=\"padding-bottom: 2rem; padding-top: 2rem\">\r\n    <ion-button class=\"btn\" expand=\"block\" (click)=\"next()\" style=\"font-family: Mulish !important;\"> Next </ion-button>\r\n  </section>\r\n</ion-content>\r\n";

/***/ }),

/***/ 65230:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-tabs>\n  <ion-tab-bar slot=\"bottom\" style=\"background-color: #25214f; color: white\">\n    <ion-tab-button\n      (click)=\"transfer()\"\n      style=\"background-color: #25214f; color: white\"\n    >\n      <ion-icon name=\"card\"></ion-icon>\n      <ion-label>Transfer</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button\n      (click)=\"support()\"\n      style=\"background-color: #25214f; color: white\"\n    >\n      <ion-icon name=\"headset\"></ion-icon>\n      <ion-label>Support</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button\n      (click)=\"profile()\"\n      style=\"background-color: #25214f; color: white\"\n    >\n      <ion-icon name=\"person\"></ion-icon>\n      <ion-label>Account</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n";

/***/ }),

/***/ 42752:
/*!*************************************************************!*\
  !*** ./src/app/withdraw/withdraw.component.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <div style=\"height: 120px\"></div>\n\n  <section *ngIf=\"transType === 0\">\n    <div\n      style=\"\n        font-family: Mulish !important;\n        display: flex;\n        flex-direction: row;\n        justify-content: space-around;\n        cursor: pointer;\n        margin: 1.5rem 0.5rem;\n      \"\n      (click)=\"transactionType(1)\"\n    >\n      <div class=\"icon-container\">\n        <ion-icon name=\"caret-up-circle\" class=\"inner-icon\"></ion-icon>\n      </div>\n      <span style=\"margin: auto; font-size: 20px\">Send to Royal Bank</span>\n      <ion-icon\n        name=\"caret-forward\"\n        style=\"margin: auto; font-size: 20px; color: #25214f\"\n      ></ion-icon>\n    </div>\n\n    <div\n      style=\"\n        font-family: Mulish !important;\n        display: flex;\n        flex-direction: row;\n        justify-content: space-around;\n        cursor: pointer;\n        margin: 1.5rem 0.5rem;\n      \"\n      (click)=\"transactionType(2)\"\n    >\n      <div class=\"icon-container\">\n        <ion-icon name=\"people\" class=\"inner-icon\"></ion-icon>\n      </div>\n      <span style=\"margin: auto; font-size: 20px\">Send to other Banks</span>\n      <ion-icon\n        name=\"caret-forward\"\n        style=\"margin: auto; font-size: 20px; color: #25214f\"\n      ></ion-icon>\n    </div>\n  </section>\n\n  <section *ngIf=\"transType === 1 || transType === 2\">\n    <div\n      class=\"row\"\n      style=\"display: flex; flex-direction: row; justify-content: space-between\"\n    >\n      <ion-button\n        (click)=\"toggleRequest(true)\"\n        [ngClass]=\"{ active: selectedBtn === true }\"\n        style=\"width: 100%; --border-radius: none\"\n      >\n        New\n      </ion-button>\n\n      <ion-button\n        (click)=\"toggleRequest(false)\"\n        size=\"medium\"\n        [ngClass]=\"{ active: selectedBtn1 === true }\"\n        style=\"width: 100%; --border-radius: none\"\n      >\n        Beneficiary\n      </ion-button>\n    </div>\n\n    <section *ngIf=\"transType === 1\">\n      <form *ngIf=\"newReq\">\n        <div class=\"form-group row\" style=\"padding: 5px\">\n          <label for=\"\">Beneficiary</label>\n          <input\n            type=\"text\"\n            name=\"beneficiary\"\n            class=\"input\"\n            placeholder=\"1234567890\"\n          />\n        </div>\n\n        <div class=\"form-group row\" style=\"padding: 5px\">\n          <label for=\"\">Amount</label>\n          <input type=\"text\" name=\"amount\" class=\"input\" placeholder=\"100000\" />\n        </div>\n\n        <div class=\"form-group row\" style=\"padding: 5px\">\n          <label for=\"\">Narration</label>\n          <input\n            type=\"text\"\n            name=\"narration\"\n            class=\"input\"\n            placeholder=\"1234567890\"\n          />\n        </div>\n\n        <div\n          class=\"form-group row\"\n          style=\"\n            display: flex;\n            flex-direction: row;\n            justify-content: space-between;\n            padding: 5px;\n          \"\n        >\n          <label>Save Beneficiary</label>\n          <ion-toggle></ion-toggle>\n        </div>\n\n        <div class=\"form-group\">\n          <ion-button\n            class=\"btn\"\n            expand=\"block\"\n            style=\"margin-top: 1rem; font-family: Mulish !important\"\n            (click)=\"next()\"\n            routerLinkActive=\"router-link-active\"\n          >\n            Transfer\n          </ion-button>\n        </div>\n      </form>\n\n      <form *ngIf=\"!newReq\" [formGroup]=\"form\">\n        <div class=\"form-group row\" style=\"padding: 5px\">\n          <label for=\"\">Search Beneficiary</label>\n          <input\n            type=\"text\"\n            class=\"input\"\n            placeholder=\"Search..\"\n            name=\"search\"\n          />\n          <ion-icon\n            name=\"search\"\n            style=\"margin-top: -34px; margin-left: 7px\"\n          ></ion-icon>\n        </div>\n\n        <div class=\"row-one\">\n          <span style=\"text-align: left\">No beneficiary found</span>\n        </div>\n\n        <div class=\"row\" style=\"margin-top: 5px\">\n          <span class=\"header\" style=\"text-align: left\">Beneficiaries</span>\n          <div\n            style=\"\n              background-color: #f8f8f8;\n              border-radius: 8px;\n              margin-top: 5px;\n            \"\n          >\n            <ion-card-content\n              style=\"\n                display: flex;\n                flex-direction: row;\n                justify-content: space-around;\n              \"\n            >\n              <ion-icon\n                name=\"trash\"\n                style=\"margin-right: 10px; font-size: 30px; color: #25214f\"\n              ></ion-icon>\n              <div\n                style=\"font-size: 13px; display: flex; flex-direction: column\"\n              >\n                <span style=\"text-align: left; font-weight: 800\"\n                  >Ogungbenro Philip - 0141944727\n                </span>\n                <span style=\"text-align: left\">GTB - 0141944727 </span>\n              </div>\n              <ion-icon\n                name=\"caret-forward\"\n                style=\"margin: auto; font-size: 30px; color: #25214f\"\n              ></ion-icon>\n            </ion-card-content>\n          </div>\n\n          <div\n            style=\"\n              background-color: #f8f8f8;\n              border-radius: 8px;\n              margin-top: 5px;\n            \"\n          >\n            <ion-card-content\n              style=\"\n                display: flex;\n                flex-direction: row;\n                justify-content: space-around;\n              \"\n            >\n              <ion-icon\n                name=\"trash\"\n                style=\"margin-right: 10px; font-size: 30px; color: #25214f\"\n              ></ion-icon>\n              <div\n                style=\"font-size: 13px; display: flex; flex-direction: column\"\n              >\n                <span style=\"text-align: left; font-weight: 800\"\n                  >Ogungbenro Philip - 2075898881\n                </span>\n                <span style=\"text-align: left\">UBA - 2075898881 </span>\n              </div>\n              <ion-icon\n                name=\"caret-forward\"\n                style=\"margin: auto; font-size: 30px; color: #25214f\"\n              ></ion-icon>\n            </ion-card-content>\n          </div>\n        </div>\n      </form>\n    </section>\n\n    <section *ngIf=\"transType === 2\">\n      <form *ngIf=\"newReq\">\n        <div class=\"form-group row\" style=\"padding: 5px\">\n          <label for=\"\">Beneficiary</label>\n          <input\n            type=\"text\"\n            name=\"beneficiary\"\n            class=\"input\"\n            placeholder=\"1234567890\"\n          />\n        </div>\n\n        <div class=\"form-group row\" style=\"padding: 5px\">\n          <label for=\"\">Bank</label>\n          <select name=\"bank\" id=\"\" class=\"input\">\n            <option value=\"1\">Access</option>\n            <option value=\"1\">GTB</option>\n            <option value=\"1\">UBA</option>\n          </select>\n        </div>\n\n        <div class=\"form-group row\" style=\"padding: 5px\">\n          <label for=\"\">Amount</label>\n          <input type=\"text\" name=\"amount\" class=\"input\" placeholder=\"100000\" />\n        </div>\n\n        <div class=\"form-group row\" style=\"padding: 5px\">\n          <label for=\"\">Narration</label>\n          <input\n            type=\"text\"\n            name=\"narration\"\n            class=\"input\"\n            placeholder=\"1234567890\"\n          />\n        </div>\n\n        <div class=\"form-group\">\n          <ion-button\n            class=\"btn\"\n            expand=\"block\"\n            style=\"margin-top: 1rem; font-family: Mulish !important\"\n            (click)=\"next()\"\n            routerLinkActive=\"router-link-active\"\n          >\n            Transfer\n          </ion-button>\n        </div>\n      </form>\n\n      <form *ngIf=\"!newReq\">\n        <div class=\"form-group row\" style=\"padding: 5px\">\n          <label for=\"\">Search Beneficiary</label>\n          <input\n            type=\"text\"\n            class=\"input\"\n            placeholder=\"Search..\"\n            name=\"search\"\n          />\n          <ion-icon\n            name=\"search\"\n            style=\"margin-top: -34px; margin-left: 7px\"\n          ></ion-icon>\n        </div>\n\n        <div class=\"row-one\">\n          <span style=\"text-align: left\">No beneficiary found</span>\n        </div>\n\n        <div class=\"row\" style=\"margin-top: 5px\">\n          <span class=\"header\" style=\"text-align: left\">Beneficiaries</span>\n          <div\n            style=\"\n              background-color: #f8f8f8;\n              border-radius: 8px;\n              margin-top: 5px;\n            \"\n          >\n            <ion-card-content\n              style=\"\n                display: flex;\n                flex-direction: row;\n                justify-content: space-around;\n              \"\n            >\n              <ion-icon\n                name=\"trash\"\n                style=\"margin-right: 10px; font-size: 30px; color: #25214f\"\n              ></ion-icon>\n              <div\n                style=\"font-size: 13px; display: flex; flex-direction: column\"\n              >\n                <span style=\"text-align: left; font-weight: 800\"\n                  >Ogungbenro Philip - 0141944727\n                </span>\n                <span style=\"text-align: left\">GTB - 0141944727 </span>\n              </div>\n              <ion-icon\n                name=\"caret-forward\"\n                style=\"margin: auto; font-size: 30px; color: #25214f\"\n              ></ion-icon>\n            </ion-card-content>\n          </div>\n\n          <div\n            style=\"\n              background-color: #f8f8f8;\n              border-radius: 8px;\n              margin-top: 5px;\n            \"\n          >\n            <ion-card-content\n              style=\"\n                display: flex;\n                flex-direction: row;\n                justify-content: space-around;\n              \"\n            >\n              <ion-icon\n                name=\"trash\"\n                style=\"margin-right: 10px; font-size: 30px; color: #25214f\"\n              ></ion-icon>\n              <div\n                style=\"font-size: 13px; display: flex; flex-direction: column\"\n              >\n                <span style=\"text-align: left; font-weight: 800\"\n                  >Ogungbenro Philip - 2075898881\n                </span>\n                <span style=\"text-align: left\">UBA - 2075898881 </span>\n              </div>\n              <ion-icon\n                name=\"caret-forward\"\n                style=\"margin: auto; font-size: 30px; color: #25214f\"\n              ></ion-icon>\n            </ion-card-content>\n          </div>\n        </div>\n      </form>\n    </section>\n  </section>\n\n  <section *ngIf=\"transType === 3\">\n    <div\n      style=\"\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        height: 100vh;\n      \"\n    >\n      <div>\n        <span style=\"text-align: center; font-size: 25px; font-weight: 500\"\n          >Transfer Successful</span\n        >\n        <section class=\"central-image\" style=\"height: 200px\">\n          <ion-img [src]=\"imageSrc\" class=\"img\"></ion-img>\n        </section>\n      </div>\n\n      <section\n        style=\"\n          display: flex;\n          flex-direction: column;\n          align-content: space-between;\n        \"\n      >\n        <ion-button class=\"btn\" expand=\"block\" (click)=\"create()\">\n          Go To Dashboard\n        </ion-button>\n      </section>\n    </div>\n  </section>\n</ion-content>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map