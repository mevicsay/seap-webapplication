webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__userhome_userhome_component__ = __webpack_require__("./src/app/userhome/userhome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_home_home_component__ = __webpack_require__("./src/app/dashboard/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_payment_payment_component__ = __webpack_require__("./src/app/dashboard/payment/payment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_wallet_open_wallet_open_component__ = __webpack_require__("./src/app/pages/wallet-open/wallet-open.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_funds_funds_component__ = __webpack_require__("./src/app/pages/funds/funds.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_bills_bills_component__ = __webpack_require__("./src/app/pages/bills/bills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_airtime_airtime_component__ = __webpack_require__("./src/app/pages/airtime/airtime.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_transfer_transfer_component__ = __webpack_require__("./src/app/pages/transfer/transfer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_loans_loans_component__ = __webpack_require__("./src/app/pages/loans/loans.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_withdraw_withdraw_component__ = __webpack_require__("./src/app/pages/withdraw/withdraw.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_request_request_component__ = __webpack_require__("./src/app/pages/request/request.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    { path: '', redirectTo: 'user', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__register_register_component__["a" /* RegisterComponent */] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_4__userhome_userhome_component__["a" /* UserhomeComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_5__dashboard_home_home_component__["a" /* HomeComponent */] },
    { path: 'payment', component: __WEBPACK_IMPORTED_MODULE_6__dashboard_payment_payment_component__["a" /* PaymentComponent */] },
    { path: 'wallet', component: __WEBPACK_IMPORTED_MODULE_7__pages_wallet_open_wallet_open_component__["a" /* WalletOpenComponent */] },
    { path: 'funds', component: __WEBPACK_IMPORTED_MODULE_8__pages_funds_funds_component__["a" /* FundsComponent */] },
    { path: 'bills', component: __WEBPACK_IMPORTED_MODULE_9__pages_bills_bills_component__["a" /* BillsComponent */] },
    { path: 'airtime', component: __WEBPACK_IMPORTED_MODULE_10__pages_airtime_airtime_component__["a" /* AirtimeComponent */] },
    { path: 'transfer', component: __WEBPACK_IMPORTED_MODULE_11__pages_transfer_transfer_component__["a" /* TransferComponent */] },
    { path: 'loans', component: __WEBPACK_IMPORTED_MODULE_12__pages_loans_loans_component__["a" /* LoansComponent */] },
    { path: 'withdraw', component: __WEBPACK_IMPORTED_MODULE_13__pages_withdraw_withdraw_component__["a" /* WithdrawComponent */] },
    { path: 'request', component: __WEBPACK_IMPORTED_MODULE_14__pages_request_request_component__["a" /* RequestComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".foot-bg{\r\n    background-color: rgba(2, 2, 31, 0.89);\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n<div class=\"universal\">\n<div class=\"foot-bg mt-0\">\n    <div class=\"container pb-3 \">\n      <div class=\"row\">\n        <div class=\"col-12 col-md-4 \">\n          <div class=\"row\">\n            <div class=\"col-8 pt-3 ml-1 ml-lg-0 text-bluee\">\n                <h4 class=\"mb-0\">\n                  SEAP MFI\n                </h4>\n                <p class=\"mt-0\">\n                  Development with Vision.\n                </p>\n            </div>\n          </div>\n \n          <p class=\"text-white pl-2\">\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n          </p>\n \n          <div class=\"mb-2\">\n             <span class=\"fa-stack fa-sm mr-1\">\n               <i class=\"fa fa-circle fa-stack-2x text-white\" ></i>\n               <i class=\"fa fa-facebook fa-stack-1x  text-blue \"></i>\n             </span>  \n             <span class=\"fa-stack fa-sm mr-1\">\n               <i class=\"fa fa-circle fa-stack-2x text-white\" ></i>\n               <i class=\"fa fa-twitter fa-stack-1x  text-info \"></i>\n             </span>\n             <span class=\"fa-stack fa-sm mr-1\">\n               <i class=\"fa fa-circle fa-stack-2x text-white\" ></i>\n               <i class=\"fa fa-instagram fa-stack-1x  text-purple \"></i>\n             </span>\n             <span class=\"fa-stack fa-sm mr-1\">\n               <i class=\"fa fa-circle fa-stack-2x text-white\" ></i>\n               <i class=\"fa fa-whatsapp fa-stack-1x  text-green \"></i>\n             </span>\n             <span class=\"fa-stack fa-sm mr-1\">\n               <i class=\"fa fa-circle fa-stack-2x text-white\" ></i>\n               <i class=\"fa fa-pinterest-p fa-stack-1x  text-danger \"></i>\n             </span>      \n           </div>\n \n           <div>\n             <p class=\"text-white\">\n               Read Our <a href=\"\"> Terms and Conditions</a>\n             </p>\n           </div>     \n        </div>\n \n        <div class=\"col-12 col-md-4\">\n          <p class=\"foot-text foot-border py-3\"> Quick Links</p>\n \n          <div class=\"foot-border-2 py-1 \">\n            <a href=\"#\" class=\"text-white\">Services</a>\n          </div>\n          <div class=\"foot-border-2 py-1 \">\n            <a href=\"#\" class=\"text-white\">Funds</a>\n          </div>\n          <div class=\"foot-border-2 py-1 \">\n            <a href=\"#\" class=\"text-white\">Investments</a>\n          </div>\n          <div class=\"foot-border-2 py-1 \">\n            <a href=\"#\" class=\"text-white\">About Us</a>\n          </div>\n          <div class=\"foot-border-2 py-1 \">\n            <a href=\"#\" class=\"text-white\">Contact US</a>\n          </div>\n        </div>\n \n        <div class=\"col-12 col-md-4\">\n          <p class=\"foot-text foot-border py-3\"> Reach Us</p>\n \n          <div>\n            <p class=\"text-white\">\n              N0 1, Western Reservoir, Olorunsogo, Ilorin Kwara State Nigeria \n            </p>\n          </div>\n          <div class=\"py-1\">\n            <span class=\"text-white\">\n              <i class=\"fa fa-phone\"> 08033465859</i>\n            </span>\n          </div>\n          <div class=\"py-2\">\n            <span class=\"text-white \">\n              <i class=\"fa fa-envelope pr-4\"> enquires@seaponline.org</i>\n            </span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__userhome_userhome_component__ = __webpack_require__("./src/app/userhome/userhome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_home_home_component__ = __webpack_require__("./src/app/dashboard/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_payment_payment_component__ = __webpack_require__("./src/app/dashboard/payment/payment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_wallet_open_wallet_open_component__ = __webpack_require__("./src/app/pages/wallet-open/wallet-open.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_funds_funds_component__ = __webpack_require__("./src/app/pages/funds/funds.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_bills_bills_component__ = __webpack_require__("./src/app/pages/bills/bills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_airtime_airtime_component__ = __webpack_require__("./src/app/pages/airtime/airtime.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_transfer_transfer_component__ = __webpack_require__("./src/app/pages/transfer/transfer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_loans_loans_component__ = __webpack_require__("./src/app/pages/loans/loans.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_withdraw_withdraw_component__ = __webpack_require__("./src/app/pages/withdraw/withdraw.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_request_request_component__ = __webpack_require__("./src/app/pages/request/request.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_5__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__userhome_userhome_component__["a" /* UserhomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__dashboard_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__dashboard_payment_payment_component__["a" /* PaymentComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pages_wallet_open_wallet_open_component__["a" /* WalletOpenComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pages_funds_funds_component__["a" /* FundsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_bills_bills_component__["a" /* BillsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_airtime_airtime_component__["a" /* AirtimeComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pages_transfer_transfer_component__["a" /* TransferComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pages_loans_loans_component__["a" /* LoansComponent */],
                __WEBPACK_IMPORTED_MODULE_18__pages_withdraw_withdraw_component__["a" /* WithdrawComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pages_request_request_component__["a" /* RequestComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__user_service__["a" /* UserService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "/**----Background Styling-----**/\r\n\r\nbody{\r\n    color: white !important;\r\n}\r\n\r\n.univer{\r\n    background-color: #5e7092;\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: no-repeat; \r\n}\r\n\r\n.universe{\r\n    background-color: #252a33;\r\n}\r\n\r\n.temp{\r\n    background-color: #222b3bb4;\r\n}\r\n\r\n/**---Coloring-----**/\r\n\r\n.panel-red{\r\n    background-color: brown;\r\n    color: white;\r\n}\r\n\r\n.chain{\r\n    color: #E79B07;\r\n}\r\n\r\na{\r\n    color: black;\r\n    font-size: 16px !important;\r\n}\r\n\r\na:hover{\r\n    text-decoration: none;\r\n}\r\n\r\n.color{\r\n    background-color: rgba(245, 245, 220, 0);\r\n    border-radius: 25px;\r\n    outline: none;\r\n    border: none;\r\n    display: inline-block;\r\n    line-height: 40px;\r\n    font-weight: 700;\r\n}\r\n\r\n.color:hover{\r\n    background-color: #E79B07;\r\n    border-radius: 25px;\r\n    outline: none;\r\n    border: none;\r\n    display: inline-block;\r\n    line-height: 40px;\r\n}\r\n\r\n.white-border{\r\n    background-color:#E79B07;\r\n    border-radius: 25px;\r\n    outline: none;\r\n    border: 2px solid white;\r\n    display: inline-block;\r\n    line-height: 40px;\r\n    font-weight: 700;\r\n}\r\n\r\n.yellow{\r\n    background-color:#E79B07;\r\n    border-radius: 25px;\r\n    outline: none;\r\n    border: none;\r\n    line-height: 40px;\r\n    font-family: \"MagistralTT\";\r\n    font-weight: 700; \r\n}\r\n\r\n.gray{\r\n    background-color: rgba(255, 255, 255, 0.15);\r\n    border-radius: 25px;\r\n    outline: none;\r\n    border: none;\r\n    line-height: 40px;\r\n    font-family: \"MagistralTT\";\r\n    font-weight: 700; \r\n}\r\n\r\n.nav-btn{\r\n    color: #E79B07;\r\n    font-weight: 600;\r\n    font-size: 30px;\r\n}\r\n\r\n.nav-bg{\r\n    background-color: rgba(6, 3, 20, 0.877);\r\n}\r\n\r\n.li{\r\n    color: rgba(134, 131, 124, 0.336);\r\n}\r\n\r\n.link{\r\n    font-size: 14px !important;\r\n}\r\n\r\n.link:hover{\r\n    color: #E79B07 !important;\r\n    border-bottom: 1px solid rgba(231, 156, 7, 0.397);\r\n}\r\n\r\n.lit-btn{\r\n    background-color:#E79B07;\r\n    border-radius: 25px;\r\n    border: 1px solid rgb(250, 173, 18);\r\n    display: inline-block;\r\n    line-height: 40px;\r\n    font-weight: 500; \r\n}\r\n\r\n.lit-btn:hover, .lit{\r\n    border: 1px solid rgba(216, 211, 200, 0.801);\r\n}\r\n\r\n.lit-btn-a:hover,.b:hover{\r\n    border: 1px solid rgb(236, 241, 243);\r\n    background-color:rgb(231, 155, 7) !important;\r\n}\r\n\r\n.hov:hover{\r\n    background-color: rgb(175, 123, 20) !important; \r\n}\r\n\r\n.gold{\r\n    color: rgb(175, 123, 20) !important;\r\n}\r\n\r\n.blue-light{\r\n    background-color:#5e7092;\r\n}\r\n\r\n.blue{\r\n    color: blue;\r\n}\r\n\r\n.blue:hover{\r\n    color: blueviolet;\r\n}\r\n\r\n.bold{\r\n    color: #5e7092;\r\n    font-family: \"MagistralTT\";\r\n    font-size: 30px;\r\n    font-weight: 600;\r\n}\r\n\r\n/**----Border Line**/\r\n\r\n.border-line{\r\n    border-bottom: 1px solid rgba(255, 255, 255, 0.15);\r\n}\r\n\r\n.border-line-top{\r\n    border-top: 1px solid rgba(255, 255, 255, 0.15);\r\n}\r\n\r\n.bord-left{\r\n    border-left: 1px solid rgba(255, 255, 255, 0.15);\r\n}\r\n\r\n/**-----Padding--------**/\r\n\r\n.pad{\r\n    padding-top: 35px;\r\n}\r\n\r\np{\r\n    padding: 0px !important;\r\n    margin: 0px !important;\r\n}\r\n\r\n.pad{\r\n    padding-top: 40px;\r\n    padding-bottom: 0px;\r\n}\r\n\r\n.py{\r\n    padding-top: 10px;\r\n    padding-bottom: 155px;\r\n}\r\n\r\n/**----Fonts Styling**/\r\n\r\n.ultra-light{\r\n    font-size: 13px !important;\r\n    font-weight: 500 !important;\r\n    font-family: \"RobotoRegular\" !important;\r\n}\r\n\r\n.ultra-medium{\r\n    font-size: 13px !important;\r\n    font-weight: 300 !important;\r\n    font-family: \"RobotoMedium\" !important;\r\n}\r\n\r\n.ultra-medium-x{\r\n    font-size: 14px !important;\r\n    font-weight: 100 !important;\r\n    font-family: \"RobotoRegular\" !important;\r\n}\r\n\r\n.ultra-large{\r\n    font-size: 15px !important;\r\n    font-weight: 500 !important;\r\n    font-family: \"RobotoBold\" !important;\r\n}\r\n\r\n.ultra-large-x{\r\n    font-size: 25px !important;\r\n    font-weight: 600 !important;\r\n    font-family: \"RobotoBold\" !important;\r\n}\r\n\r\n.textt {\r\n    text-align: center;\r\n}\r\n\r\n.logo-text{\r\n    font-family:'MagistralTT-Bold';\r\n}\r\n\r\n.text{\r\n    font-size: 35px;\r\n}\r\n\r\n.border-line-butt{\r\n    border-bottom: 1px solid rgba(47, 133, 214, 0.74);\r\n}\r\n\r\n.big{\r\n    font-size: 17px !important;\r\n    font-weight: 600 !important;\r\n}\r\n\r\n.line-hov:hover{\r\n    border: 1px solid rgb(175, 123, 20);\r\n}\r\n\r\n/*-----------Sizng--------------*/\r\n\r\n.w{\r\n    width: 40px;\r\n}\r\n\r\n/***--------Responsive Styling -------****/\r\n\r\n@media (min-width:1200px){\r\n    .bord-right{\r\n        border-right: 1px solid rgb(207, 147, 27);\r\n    \r\n    }\r\n}"

/***/ }),

/***/ "./src/app/dashboard/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"universal border-line-butt px-0\">\n  <div class=\"container-fluid\">\n    <div class=\"row  py-3 bg-light\">\n      <div class=\"col-9 pl-4\">\n        <img src=\"../../../assets/images/logo.png\" class=\"w\">\n      </div>\n      <div class=\"col-3\">\n        <ul class=\"nav p-0\">\n          <li class=\"nav-item px-2 px-md-3 px-lg-3 mt-2\">\n            <span class=\"text-dark px-3\">\n              <a class=\"ultra-medium\" href=\"#\">User's Profile</a>\n            </span>\n          </li>\n          <li class=\"nav-item px-2 px-md-3 px-lg-3 mt-2\">\n            <span class=\"text-dark px-3\">\n              <a class=\"ultra-medium\" href=\"./funds.html\">Sign-Out</a>\n            </span>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"universal border-line-butt px-0\">\n  <div class=\"temp\">\n   <div class=\"container-fluid \">\n    <div class=\"row\">\n      <div class=\"col-12 col-lg-2 py-0 card-v\">\n        <div class=\"tab active\">\n         <div class=\"row\">\n            <div id=\"accordion\"> \n              <div class=\"text-dark bg-light border-0 col-12 col-lg-12 pt-4 pb-1 text-left ultra-light px-3\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"false\" aria-controls=\"collapseOne\">\n                 <h4>WALLET</h4>\n              </div>\n              <button class=\"tablinks text-white border-0 col-12  col-lg-12 pt-4 pb-1 text-left ultra-light px-3\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"false\" aria-controls=\"collapseOne\">\n                  <i class=\"fa fa-key fa-fw mr-2\"></i>OPEN WALLET ACCOUNT\n              </button>\n              <div id=\"collapseOne\" class=\"collapse ultra-light blue-light p-2\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n                <p onclick=\"openTab(event, 'wallet')\">Add Account</p>\n              </div>\n              <button class=\"tablinks text-white border-0 col-12 col-lg-12 pt-4 pb-1 text-left ultra-light px-3 collapsed\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n                  <i class=\"fa fa-external-link fa-fw mr-2\"></i>FUND WALLET\n              </button>\n              <div id=\"collapseTwo\" class=\"collapse ultra-light blue-light p-2\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\n                <p onclick=\"openTab(event, 'funds')\">Wallet to Wallet</p>\n                <p onclick=\"openTab(event, 'reg')\">Bank to Wallet</p>\n              </div>\n              <button class=\"tablinks text-white border-0 col-12  col-lg-12 pt-4 pb-1 text-left px-3 ultra-light collapsed\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\" onclick=\"openTab(event, 'transfer')\">\n                  <i class=\"fa fa-mail-reply-all fa-fw mr-2\"></i>PAYMENT TRANSFER\n              </button>\n              <div id=\"collapseThree\" class=\"collapse ultra-light blue-light p-2\" aria-labelledby=\"headingThree\" data-parent=\"#accordion\">\n                <p onclick=\"openTab(event, 'reg')\">Wallet to Wallet</p>\n                <p onclick=\"openTab(event, 'reg')\">Wallet to Owns Account</p>\n                <p onclick=\"openTab(event, 'reg')\">Wallet to Other Banks</p>\n              </div>\n              <button class=\"tablinks text-white border-0 col-12 col-lg-12 pt-4 pb-1 text-left px-3 ultra-light collapsed\" data-toggle=\"collapse\" data-target=\"#collapseFour\" aria-expanded=\"false\" aria-controls=\"collapseFour\" >\n                  <i class=\"fa fa-credit-card fa-fw mr-2\"></i>CARDS\n              </button>\n              <div id=\"collapseFour\" class=\"collapse ultra-light blue-light p-2\" aria-labelledby=\"headingFour\" data-parent=\"#accordion\">\n                <p onclick=\"openTab(event, 'reg')\">Request Credit Cards</p>\n              </div>\n              <button class=\"tablinks text-white border-0 col-12 col-lg-12 pt-4 pb-1 text-left px-3 ultra-light collapsed\" data-toggle=\"collapse\" data-target=\"#collapseFive\" aria-expanded=\"false\" aria-controls=\"collapseFive\" onclick=\"openTab(event, 'finance')\">\n                <i class=\"fa fa-shopping-cart fa-fw mr-2\"></i>PAY UTILITY BILLS\n              </button>\n              <button class=\"tablinks text-white border-0 col-12 col-lg-12 pt-4 pb-1 text-left px-3 ultra-light collapsed\" data-toggle=\"collapse\" data-target=\"#collapseSix\" aria-expanded=\"false\" aria-controls=\"collapseSix\" onclick=\"openTab(event, 'airtime')\">\n                <i class=\"fa fa-tablet fa-fw mr-2\"></i>BUY AIRTIMES\n              </button>\n              <div id=\"collapseSix\" class=\"collapse ultra-light blue-light p-2\" aria-labelledby=\"headingSix\" data-parent=\"#accordion\">\n                  <p >MTN</p>\n                  <p>GLO</p>\n                  <p>AIRTEL</p>\n                  <p>9MOBILE</p>\n              </div>\n            </div>\n            <button class=\"tablinks text-white border-0 col-12 col-lg-12 pt-4 pb-1 text-left px-3 ultra-light\" onclick=\"openTab(event, 'reg')\" id=\"defaultOpen\" >\n                <i class=\"fa fa-money fa-fw mr-2\"></i>GET LOANS\n            </button>\n            <button class=\"tablinks text-white border-0 col-12 col-lg-12 pt-4 pb-1 text-left px-3 ultra-light\" onclick=\"openTab(event, 'reg')\">\n                <i class=\"fa fa-money fa-fw mr-2\"></i>INVESTMENTS\n            </button>\n            <div class=\"text-dark bg-light border-0 col-12 col-lg-12 pt-4 pb-1 text-left px-3 ultra-light\" onclick=\"openTab(event, 'reg')\">\n              <h6>MY ACCOUNT</h6>\n            </div>\n\n            <!-----Account_Settings---->\n            <button class=\"tablinks text-white border-0 col-12 col-lg-12 pt-4 pb-1 text-left px-3 ultra-light\" onclick=\"openTab(event, 'reg')\">\n                Account Balance\n            </button>\n            <button class=\"tablinks text-white border-0 col-12 col-lg-12 pt-4 pb-1 text-left px-3 ultra-light\" onclick=\"openTab(event, 'reg')\">\n                Account Overview\n            </button>\n            <button class=\"tablinks text-white border-0 col-12 col-lg-12 pt-4 pb-1 text-left px-3 ultra-light\" onclick=\"openTab(event, 'reg')\">\n                Change my pin\n            </button>\n            <button class=\"tablinks text-white border-0 col-12 col-lg-12 pt-4 pb-1 text-left px-3 ultra-light\" onclick=\"openTab(event, 'reg')\">\n                Transaction History\n            </button>\n            <!--Logout_Functionality-->\n            <button (click)=\"logout()\" class=\"tablinks text-white border-0 col-12 col-lg-12 pt-4 pb-1 text-left px-3 ultra-medium\" onclick=\"openTab(event, 'reg')\">\n                <h6>LOGOUT</h6>\n            </button>\n           </div>\n         </div>\n      </div>\n\n      \n      <div class=\"col-12 col-lg-10 mt-5 pb-3 pb-lg-0 mt-lg-0\">\n        <div class=\"py-3 pl-2 border-line\">\n          <h1 class=\"bold\">SEAP MFI</h1>\n        </div>\n\n        <div class=\"row mb-2\">\n          <div class=\"col-12 \">\n            <div class=\"row\">\n              <div class=\"col-12 bg-secondary py-3\">\n                <h6 class=\"text-white\">\n                <span><i class=\"fa fa-cubes\"></i></span>\n                <span class=\"ml-4 ml-sm-1 l-border\"> Welcome:<span class=\"text-info mx-2\">{{username}}</span></span>\n                <span class=\"ml-5 ml-sm-1 l-border\"> Email:<span class=\"text-info mx-1\">{{email}}</span></span>\n                <span class=\"ml-5 ml-sm-1\">Balance:<span class=\"text-info mx-1\">0:00</span></span>\n                </h6>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n        <div class=\"tabcontent\" id=\"wallet\" >\n          <div class=\"row justify-content-center\">\n              <div class=\"col-12 col-md-10 bg-light box-shadow \">\n                <form>\n                \n                    <div class=\"form-row py-3 px-3\">\n                      <div class=\"col-2 col-sm-3 col-md-4\"></div>\n                      <div class=\"col-8 col-sm-6 col-md-4\">\n                        <h6 class=\"background double\"><span class=\"text-info\">Set up your Account</span></h6>\n                      </div>\n                      <div class=\"col-2 col-sm-3 col-md-4\"></div>\n                    </div>\n        \n                    <div class=\"form-row\">\n                      <div class=\"col-12\">\n                        <div class=\"input-group mb-2\">\n                          <div class=\"input-group-addon border border-right-0\"><span><i class=\"fa fa-user bg-info m-white text-white p-2 font-size-4 \"></i></span></div>\n                          <input type=\"text\" class=\"form-control border-left-0 rounded-0\"  placeholder=\"Fullname...\">\n                        </div>\n                      </div>\n                    </div>\n        \n        \n                    <div class=\"form-row\">\n                      <div class=\"col-md-6 col-12 \">\n                        <div class=\"input-group mb-2\">\n                          <div class=\"input-group-addon border border-right-0\"><span><i class=\"fa fa-phone bg-info m-white text-white p-2 font-size-4 \"></i></span></div>\n                          <input type=\"number\" class=\"form-control border-left-0 rounded-0\"  placeholder=\"Wallet Phone\">\n                        </div>\n                      </div>\n                      <div class=\"col-md-6 col-12 \">\n                        <div class=\"input-group mb-2\">\n                          <div class=\"input-group-addon border border-right-0\"><span><i class=\"fa fa-calendar bg-info text-white p-2 font-size-4 \"></i></span></div>\n                          <input type=\"date\" class=\"form-control border-left-0 rounded-0\" placeholder=\"\">\n                        </div>\n                      </div>\n                  </div>\n        \n                  <div class=\"form-row\">\n                    <div class=\"col-md-6 col-12\">\n                      <select class=\"form-control bg-light\">\n                      <option selected>Select</option>\n                      <option >Male</option>\n                      <option >Female</option>\n                      </select>\n                    </div>\n                    <div class=\"col-md-6 col-12\">\n                      <div class=\"input-group mb-2\">\n                        <div class=\"input-group-addon border border-right-0\"><span><i class=\"fa fa-envelope bg-info m-white text-white p-2 font-size-4 \"></i></span></div>\n                        <input type=\"text\" class=\"form-control border-left-0 rounded-0\" id=\"inputtext\" placeholder=\"Email ID for Alert\">\n                      </div>\n                    </div>\n                  </div>\n        \n                  <div class=\"form-row\">\n                    <div class=\"form-group col-md-6 col-12\">\n                      <select  class=\"form-control bg-light\">\n                        <option selected>Select Security Questions</option>\n                        <option >Favourite Color</option>\n                        <option >Favourite food</option>\n                        <option >Pet Name</option>\n                        <option >Father's name</option>\n                      </select>\n                    </div>\n                    <div class=\"form-group col-md-6 col-12\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Answer\"/>\n                    </div>\n                  </div>\n        \n                  <div class=\"form-row\">\n                    <div class=\"col-md-6 col-12\">\n                      <div class=\"input-group mb-2\">\n                          <div class=\"input-group-addon border border-right-0\"><span><i class=\"fa fa-briefcase m-white text-white bg-info p-2 font-size-4 \"></i></span></div>\n                          <input type=\"text\" class=\"form-control border-left-0 rounded-0\"  placeholder=\"Occupation\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-6 col-12\">\n                      <div class=\"input-group mb-2\">\n                        <div class=\"input-group-addon border border-right-0\"><span><i class=\"fa fa-home m-white text-white bg-info p-2 font-size-4 \"></i></span>\n                        </div>\n                        <input type=\"text\" class=\"form-control border-left-0 rounded-0\" placeholder=\"Address\">\n                      </div>\n                    </div>\n                    <div class=\"col-12 \">\n                        <div class=\"form-check pb-2 mb-1\">\n                        <label class=\"form-check-label\">\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                            I agree to the <a href=\"#\">terms of use</a>\n                          </label>\n                      </div>\n                    </div>\n                  </div>\n                <div class=\"row\">\n                      <div class=\"col-4 col-sm-2 mx-3 my-3 ml-auto\">\n                          <a href=\"#\" class=\"btn btn-blue f rounded-0 bol\">Request</a>\n                      </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n        </div>\n\n\n        \n  \n        <div class=\"tabcontent\" id=\"funds\" >\n          <div class=\"line pad-but px-3\">\n            <div>\n              <h5 class=\"text-white\">FUND YOUR WALLET</h5>\n            </div>\n            <div class=\"row border-line border-line-top\">\n              <div id=\"accordion\" role=\"tablist\">\n                <div class=\"card\">\n                  <div class=\"card-header\" role=\"tab\" id=\"headingSeven\">\n                    <h5 class=\"mb-0\">\n                      <a data-toggle=\"collapse\" href=\"#collapseSeven\" aria-expanded=\"true\" aria-controls=\"collapseSeven\">\n                        With Nigerian Issued Cards\n                      </a>\n                    </h5>\n                  </div>\n              \n                  <div id=\"collapseSeven\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingSeven\" data-parent=\"#accordion\">\n                    <div class=\"card-body\">\n                      <div class=\"row bg-white mb-3 py-3\">\n                        <div class=\"col-3\">\n                          <a  [routerLink]=\"['/payment']\" routerLinkActive=\"active\" class=\"btn btn-warning\">\n                           <img src=\"../../../assets/images/master.png\" width=\"80%\">\n                          </a>\n                        </div>\n                        <div class=\"col-3\">\n                          <a href=\"#\" class=\"btn btn-danger pb-3\">\n                           <img src=\"../../../assets/images/verve.jpg\" class=\"mt-1\" width=\"100%\">\n                          </a>\n                        </div>\n                        <div class=\"col-3\">\n                          <a href=\"#\" class=\"btn btn-primary pb-2\">\n                           <img src=\"../../../assets/images/visa.png\" class=\"mt-1\" width=\"100%\"> \n                          </a>\n                        </div>  \n                      </div>                     \n                    </div>\n                  </div>\n                </div>\n                <div class=\"card\">\n                  <div class=\"card-header\" role=\"tab\" id=\"headingTwo\">\n                    <h5 class=\"mb-0\">\n                      <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#collapseEight\" aria-expanded=\"false\" aria-controls=\"collapseEight\">\n                       With Nigerian Internet Mobile Banking\n                      </a>\n                    </h5>\n                  </div>\n                  <div id=\"collapseEight\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingEight\" data-parent=\"#accordion\">\n                    <div class=\"card-body\">\n                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>  \n        </div>\n  \n        <div class=\"tabcontent px-4\" id=\"finance\" >\n            <div class=\"line pad-but\">\n              <div class=\"row\">\n                  <div class=\"col-12\">\n                      <h3 class=\"text-white\">PAY UTILITY BILLS</h3>\n                  </div>  \n              </div>\n\n                <div>\n                  <button type=\"button\" class=\"btn btn-light mr-1\" data-toggle=\"collapse\" href=\"#collapseNine\" aria-expanded=\"true\" aria-controls=\"collapseNine\">\n                    ELECTRICITY BILLS\n                  </button>\n                  <button type=\"button\" class=\"btn btn-light mx-2\" data-toggle=\"collapse\" href=\"#collapseTen\" aria-expanded=\"false\" aria-controls=\"collapseTen\">\n                    TV SUBSCRIPTIONS\n                  </button>\n                  <button type=\"button\" class=\"btn btn-light mx-2\" data-toggle=\"collapse\" href=\"#collapseEleven\" aria-expanded=\"false\" aria-controls=\"collapseEleven\">\n                    INTERNET ACCESS SUBSCRIPTIONS\n                  </button>\n                </div>\n               \n                \n                <div class=\"collapse show my-3\" id=\"collapseNine\" role=\"tabpanel\" aria-labelledby=\"headingNine\" data-parent=\"#accordion\">\n                  <div class=\"row bg-light\">\n                    <div class=\"col-12 col-md-4 col-lg-3\">\n                      <a href=\"#\" class=\"btn btn-dark rounded-0 my-3\">\n                        <img class=\"mt-3\" width=\"85%\" height=\"150px\" src=\"../../../assets/images/abuja.jpg\">\n                      </a>\n                    </div>\n                    <div class=\"col-12 col-md-4 col-lg-3\">\n                      <a href=\"#\"  class=\"btn btn-danger rounded-0 my-3  w-100\">\n                        <img class=\"mt-3\" width=\"100%\" height=\"100%\"  src=\"../../../assets/images/ikeja.jpg\">\n                        <p class=\"mb-0\">IKEJA ELECTRIC</p>\n                        <p class=\"font mt-0\">Pay your Electricity bills</p>\n                      </a>\n                    </div>\n                    <div class=\"col-12 col-md-4 col-lg-3\">\n                      <a href=\"#\" class=\"btn btn-warning rounded-0  my-3 w-100\">\n                        <img class=\"mt-3 mb-2\" width=\"95%\" height=\"95%\" src=\"../../../assets/images/jos.png\">\n                        <p class=\"mb-0 text-dark\">JOS ELECTRIC</p>\n                        <p class=\"font mt-0 text-dark\">Pay your Electricity bills</p>\n                      </a>\n                    </div>\n                  </div>\n                </div>\n\n                \n                <div class=\"collapse my-3\" id=\"collapseTen\"  role=\"tabpanel\" aria-labelledby=\"headingNine\" data-parent=\"#accordion\">\n                  <div class=\"row bg-white\">\n                    <div class=\"col-12 col-md-4 col-lg-3\">\n                      <a href=\"#\"  class=\"btn btn-white rounded-0 my-3 mx-2\">\n                        <img class=\"mt-3\" width=\"100%\" height=\"100%\"  src=\"../../../assets/images/starttimes.jpg\">\n                        <h3 class=\"mb-0\">STARTIMES</h3>\n                      </a>\n                    </div>\n                    <div class=\"col-12 col-md-4 col-lg-3\">\n                      <a href=\"#\" class=\" rounded-0 my-3 mx-3\">\n                        <img class=\"mt-3 mb-2\" width=\"95%\" height=\"200px\" src=\"../../../assets/images/dstv.jpg\">\n                      </a>\n                    </div>              \n                    <div class=\"col-12 col-md-4 col-lg-3\">\n                      <a href=\"#\" class=\"rounded-0 my-3 mx-2\">\n                        <img class=\"mt-5\" width=\"300px\" src=\"../../../assets/images/gotv.png\">\n                      </a>\n                    </div>\n                  </div>\n                </div>\n\n\n                <div class=\"collapse my-3\" id=\"collapseEleven\"  role=\"tabpanel\" aria-labelledby=\"headingNine\" data-parent=\"#accordion\">\n                  <div class=\"row bg-white\">\n                    <div class=\"col-12 col-md-4 col-lg-3\">\n                      <a href=\"#\" class=\"btn btn-white rounded-0 py-3 px-0 mt-3 mr-3 w-100 \">\n                        <img class=\"mt-1\" width=\"40%\" src=\"../../../assets/images/smile.jpg\">\n                        <h6 class=\"mb-0 text-dark\">SMILE</h6>\n                        <p class=\"mt-0 text-secondary\">Pay for your smile subscription</p>\n                      </a>\n                    </div>\n                    <div class=\"col-12 col-md-4 col-lg-3\">\n                      <a href=\"#\"  class=\"btn btn-danger rounded-0 pt-3 pb-3 px-5 mx-5 mt-3 w-100\">\n                        <img class=\"mt-3\" width=\"100%\" height=\"100%\"  src=\"../../../assets/images/ipnx.png\">\n                      </a>\n                    </div>\n                  </div>\n                </div>\n            </div>  \n        </div>\n  \n        <div class=\"tabcontent\" id=\"airtime\" >\n          <div class=\"line pad-but\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <h3 class=\"text-white\">TOP-UP AIRTIME</h3>>\n                </div>  \n            </div>\n            <div class=\"row justify-content-center pb-3\">\n                <div class=\"col-12 col-md-10 bg-light box-shadow \">\n                  <form>\n                   <div class=\"form-row py-3 px-3\">\n                     <div class=\"col-2 col-sm-3 col-md-4\"></div>\n                     <div class=\"col-8 col-sm-6 col-md-4\">\n                       <h6 class=\"background double\"><span class=\"text-info\">Top up Airtime</span></h6>\n                     </div>\n                     <div class=\"col-2 col-sm-3 col-md-4\"></div>\n                   </div>\n         \n                   <div class=\"form-row py-2\">\n                     <div class=\"col-md-6 col-12\">\n                       <div class=\"input-group mb-2\">\n                         <div class=\"input-group-addon border border-right-0\"><span><i class=\"fa fa-phone bg-info m-white text-white p-2 font-size-4 \"></i></span></div>\n                         <input type=\"text\" class=\"form-control border-left-0 rounded-0\" placeholder=\"wallet phone\">\n                       </div>\n                     </div>\n                   \n                     <div class=\"col-md-6 col-12 \">\n                       <select class=\"form-control bg-light rounded-0\">\n                         <option selected>Network</option>\n                         <option >Glo</option>\n                         <option >Mtn</option>\n                         <option >Airtel</option>\n                         <option >Etisalat</option>\n                       </select>\n                     </div>\n                   </div>\n                  \n                     \n         \n                   <div class=\"form-row py-2\">\n                    <div class=\"col-md-6 col-12\">\n                      <div class=\"input-group mb-2\">\n                        <div class=\"input-group-addon border border-right-0\"><span><i class=\"fa fa-money bg-info m-white text-white p-2 font-size-4 \"></i></span></div>\n                        <input type=\"text\" class=\"form-control border-left-0 rounded-0\" placeholder=\"Amount\">\n                      </div>\n                     </div>\n                     <div class=\"col-md-6 col-12\">\n                      <div class=\"input-group mb-2\">\n                        <div class=\"input-group-addon border border-right-0\"><span><i class=\"fa fa-phone bg-info m-white text-white p-2 font-size-4 \"></i></span></div>\n                        <input type=\"text\" class=\"form-control border-left-0 rounded-0\" placeholder=\"Recharge wallet Phone\">\n                      </div>\n                    </div>\n                   </div>\n         \n                  \n         \n                   <div class=\"form-row py-2\">\n                     <div class=\"col-md-6 col-12\">\n                       <div class=\"input-group mb-2\">\n                         <div class=\"input-group-addon border border-right-0\"><span><i class=\"fa fa-cogs m-white text-white bg-info p-2 font-size-4 \"></i></span></div>\n                         <input type=\"password\" class=\"form-control border-left-0 rounded-0\" placeholder=\"Enter Wallet Pin\">\n                       </div>\n                     </div>\n                   </div>\n                   <div class=\"row py-2\">\n                      <div class=\"col-12 col-md-6\">\n                        Don't you have an account?\n                        <a href=\"#\" class=\"blue\">Register</a>\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-4 col-sm-2 mx-3 my-3 ml-auto\">\n                         <a href=\"#\" class=\"btn btn-blue text-white f rounded-0 bol\">Buy Now</a>\n                      </div>\n                  </div>\n                 </form>\n                </div>\n              </div>\n          </div>  \n        </div>\n\n        <div class=\"tabcontent px-4\" id=\"transfer\" >\n            <div class=\"line pad-but\">\n                <div class=\"row\">\n                    <div class=\"col-12\">\n                        <h3 class=\"text-white\">TRANSFER FUNDS</h3>\n                    </div>  \n                </div>\n\n                <div>\n                    <button type=\"button\" class=\"btn btn-light mr-1\" data-toggle=\"collapse\" href=\"#collapseTwelve\" aria-expanded=\"true\" aria-controls=\"collapseTwelve\">\n                      To Any Phone Number\n                    </button>\n                    <button type=\"button\" class=\"btn btn-light mx-2\" data-toggle=\"collapse\" href=\"#collapseThirteen\" aria-expanded=\"false\" aria-controls=\"collapseThirteen\">\n                     To Any Bank\n                    </button>\n                </div>\n               \n                \n                <div class=\"collapse show my-3\" id=\"collapseTwelve\" role=\"tabpanel\" aria-labelledby=\"headingTwelve\" data-parent=\"#accordion\">\n                    <div class=\"row bg-white mb-3 py-3\">\n                        <form>\n                          <div class=\"form-row\">\n                           <div class=\"col-11 col-md-11 span8 center\">\n                              <div class=\"input-group mb-2 mt-1 \">\n                               <input type=\"text\" class=\"form-control border-right-0 rounded-0\" placeholder=\"Enter Recipient Number\">\n                               <div class=\"input-group-addon border border-left-0\"><span><i class=\"fa fa-user  m-white text-danger p-2 font-size-4 \"></i></span></div>\n                              </div>\n         \n                              <div class=\"input-group mb-2 \">\n                                <input type=\"password\" class=\"form-control border-right-0 rounded-0\" placeholder=\"Enter Pin\">\n                                <div class=\"input-group-addon border border-left-0\"><span><i class=\"fa fa-key  m-white text-danger p-2 font-size-4 \"></i></span></div>\n                              </div>\n         \n                              <a href=\"#\" type=\"submit\" class=\"btn btn-primary col-12 mb-3\">Submit</a>\n                           </div>\n                           <div class=\"col-10 col-md-8 py-3  font\">\n                            <a href=\"#\" class=\"text-danger ml-2\">Click here to create an Account</a>\n                           </div>\n                         </div>\n                       </form>     \n                     </div> \n                </div>\n\n                \n                <div class=\"collapse my-3\" id=\"collapseThirteen\"  role=\"tabpanel\" aria-labelledby=\"headingThirteen\" data-parent=\"#accordion\">\n                    <div class=\"row bg-white mb-3 py-3\">\n                        <form>\n                          <div class=\"form-row\">\n                           <div class=\"col-11 col-md-11 span8 center\">\n                              <div class=\"input-group mb-2 mt-1 \">\n                               <input type=\"number\" class=\"form-control border-right-0 rounded-0\" placeholder=\"Enter Recipient Account\">\n                               <div class=\"input-group-addon border border-left-0\"><span><i class=\"fa fa-user  m-white text-danger p-2 font-size-4 \"></i></span></div>\n                              </div>\n         \n                              <div class=\"input-group mb-2 \">\n                                <input type=\"password\" class=\"form-control border-right-0 rounded-0\"  placeholder=\"Enter Pin\">\n                                <div class=\"input-group-addon border border-left-0\"><span><i class=\"fa fa-key  m-white text-danger p-2 font-size-4 \"></i></span></div>\n                              </div>\n         \n                              <a href=\"#\" type=\"submit\" class=\"btn btn-primary col-12 mb-3\">Submit</a>\n                           </div>\n                           <div class=\"col-10 col-md-8 py-3  font\">\n                            <a href=\"#\" class=\"text-danger ml-2\">Click here to create an Account</a>\n                           </div>\n                         </div>\n                       </form>     \n                     </div> \n                </div>\n\n\n            </div>  \n        </div>\n\n\n\n  \n      </div>       \n    </div>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(_user, _router) {
        var _this = this;
        this._user = _user;
        this._router = _router;
        this.username = '';
        this.email = '';
        this._user.user()
            .subscribe(function (data) { return _this.addName(data); }, function (error) { return _this._router.navigate(['/login']); });
    }
    HomeComponent.prototype.addName = function (data) {
        this.username = data.username;
        this.email = data.email;
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.logout = function () {
        var _this = this;
        this._user.logout()
            .subscribe(function (data) { console.log(data); _this._router.navigate(['/login']); }, function (error) { return console.error(error); });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/dashboard/home/home.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/payment/payment.component.css":
/***/ (function(module, exports) {

module.exports = "html, body {\r\n    min-height: 100%; \r\n}\r\n\r\n.universe{\r\n    background-image: url('glo.28acc09a222a0e86cf6b.jpg');\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n}\r\n\r\n.dots{\r\n    background-color: rgba(37, 50, 100, 0.603);\r\n}\r\n\r\n/*---------Forms Stying---------*/\r\n\r\n.line-up{\r\n    color: white !important;\r\n    background-color: rgba(255, 255, 255, 0.938) !important;\r\n    border: 1px solid rgba(231, 156, 7, 0.568) !important;\r\n    border-radius: 25px !important;\r\n}\r\n\r\n.line-up:focus{\r\n    background-color: rgba(82, 99, 167, 0.603) !important;\r\n    outline: 0px !important;\r\n}\r\n\r\nform.loading{\r\n   opacity: 0.4;\r\n}\r\n\r\n/*----------Button Styling-----------*/\r\n\r\n.lit-btn{\r\n    background-color: rgba(82, 99, 167, 0.603)7;\r\n    border-radius: 25px;\r\n    border: 1px solid rgb(250, 173, 18);\r\n    display: inline-block;\r\n    line-height: 40px;\r\n    font-weight: 500; \r\n}\r\n\r\n.lit-btn:hover{\r\n    background-color:  rgba(82, 99, 167, 0.603);\r\n    border: 2px solid rgb(250, 173, 18);\r\n\r\n}\r\n\r\n.faded{\r\n    background-color: #2d374b8f\r\n}\r\n\r\nli{\r\n    color: rgba(221, 233, 243, 0.822);\r\n}\r\n\r\n.textt {\r\n    text-align: center;\r\n}\r\n\r\nbutton:disabled{\r\n    opacity: 0.4;\r\n}\r\n\r\n/*------------Positioning-------------*/\r\n\r\n.middle{\r\n    text-align: center;\r\n}\r\n\r\n/*----------Sizing----------------*/\r\n\r\n.size{\r\n    width: 40px;\r\n}\r\n\r\n/*---------Padding-------------*/\r\n\r\n.paddd{\r\n    padding: 90px 30px ;\r\n}\r\n\r\n/*----------Fonts------------*/\r\n\r\n.font{\r\n    font-family:'MagistralTT-Bold';\r\n    font-size: 13px;\r\n}"

/***/ }),

/***/ "./src/app/dashboard/payment/payment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"universal\">\n  <div class=\"dots\">\n    <div class=\"paddd\">\n      <form class=\"faded py-3\" [ngClass]=\"isValidatingCard ? 'loading' : ' ' \">\n        <div class=\"form-row\">\n          <div class=\"col-11 mr-auto ml-auto ultra-medium middle\">\n            <label for=\"cardNumber\" class=\"text-center\">Card Number</label>\n            <div #cardNumber class=\"field form-control  line-up my-1\" placeholder=\"\"> </div>\n          </div>\n          <div class=\"col-11 mr-auto ml-auto ultra-medium middle\">\n            <label for=\"carddate\" class=\"mt-2\">Card Date</label>\n            <div #cardExp class=\"field form-control line-up my-1\" placeholder=\"\"> </div>\n          </div>\n          <div class=\"col-11 mr-auto ml-auto ultra-medium middle\">\n            <label for=\"cardcvc\" class=\"mt-2\">Card CVC</label>\n            <div #cardCvc class=\"field form-control line-up my-1\" placeholder=\"\"> </div>\n          </div>\n          <div class=\"outcome col-11 ml-auto mr-auto px-2  py-3\">\n            <div *ngIf='error' class=\"error text-danger\">\n              {{error}}\n            </div>\n            <div *ngIf='token' class=\"font alert alert-primary\">\n              <h4>Card Accepted Succesfully</h4>\n            </div>\n          </div>\n        <div class=\"col-2 mr-auto ml-auto py-3\">\n          <button [disabled]=\"!isCardValid()\" class=\"btn btn-outline-warning ml-5 px-5\"  (click)=\"onSubmit()\" (click)=\"clearForm()\">\n            PAY\n          </button>                                                                                                                                                                                                                                                                                                                                                                                                        \n        </div>\n      </div> \n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/payment/payment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var PaymentComponent = /** @class */ (function () {
    function PaymentComponent() {
        this.paymentConfirmed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.isValidatingCard = false;
        this.error = '';
        this.stripe = Stripe(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].STRIPE_PK);
        this.elements = this.stripe.elements();
        this.onChange = this.onChange.bind(this);
    }
    PaymentComponent.prototype.ngOnInit = function () {
        this.cardNumber = this.elements.create('cardNumber');
        this.cardNumber.mount(this.cardNumRef.nativeElement);
        this.cardExp = this.elements.create('cardExpiry');
        this.cardExp.mount(this.cardExpRef.nativeElement);
        this.cardCvc = this.elements.create('cardCvc');
        this.cardCvc.mount(this.cardCvcRef.nativeElement);
        this.cardNumber.addEventListener('change', this.onChange);
        this.cardExp.addEventListener('change', this.onChange);
        this.cardCvc.addEventListener('change', this.onChange);
    };
    PaymentComponent.prototype.ngOnDestroy = function () {
        this.cardNumber.removeEventListener('change', this.onChange);
        this.cardExp.removeEventListener('change', this.onChange);
        this.cardCvc.removeEventListener('change', this.onChange);
        this.cardNumber.destroy();
        this.cardExp.destroy();
        this.cardCvc.destroy();
    };
    PaymentComponent.prototype.onChange = function (_a) {
        var error = _a.error;
        if (error) {
            this.error = error.message;
        }
        else {
            this.error = '';
        }
    };
    PaymentComponent.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, token, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.isValidatingCard = true;
                        return [4 /*yield*/, this.stripe.createToken(this.cardNumber)];
                    case 1:
                        _a = _b.sent(), token = _a.token, error = _a.error;
                        this.isValidatingCard = false;
                        if (error) {
                            console.error(error);
                        }
                        else {
                            this.token = token;
                            console.log(token);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PaymentComponent.prototype.isCardValid = function () {
        return this.cardNumber._complete && this.cardExp._complete && this.cardCvc._complete;
    };
    PaymentComponent.prototype.clearForm = function () {
        console.log('Cleared');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('cardNumber'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], PaymentComponent.prototype, "cardNumRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('cardExp'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], PaymentComponent.prototype, "cardExpRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('cardCvc'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], PaymentComponent.prototype, "cardCvcRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], PaymentComponent.prototype, "paymentConfirmed", void 0);
    PaymentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-payment',
            template: __webpack_require__("./src/app/dashboard/payment/payment.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/payment/payment.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "html, body {\r\n    min-height: 100%; \r\n}\r\n\r\n.universe{\r\n    background-image: url('glo.28acc09a222a0e86cf6b.jpg');\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n}\r\n\r\n.temp{\r\n    background-image: url('glo.28acc09a222a0e86cf6b.jpg');\r\n    background-repeat: no-repeat;\r\n    background-position: top;\r\n    background-size: cover;\r\n    min-height: 100%;\r\n}\r\n\r\n.dots{\r\n    background-color: rgba(37, 50, 100, 0.603);\r\n}\r\n\r\n.two-dots{\r\n    background-color: rgba(82, 99, 167, 0.603); \r\n}\r\n\r\n.lit-btn{\r\n    background-color:#E79B07;\r\n    border-radius: 25px;\r\n    border: 1px solid rgb(250, 173, 18);\r\n    display: inline-block;\r\n    line-height: 40px;\r\n    font-weight: 500; \r\n}\r\n\r\n.lit-btn:hover, .lit-btn-a:hover{\r\n    border: 1px solid rgba(216, 211, 200, 0.801);\r\n}\r\n\r\n/*-----------Responsive Styling---------*/\r\n\r\n@media (min-width: 576px) { }\r\n\r\n@media (min-width: 768px) {\r\n    \r\n    .dots{\r\n        background-color: rgba(37, 50, 100, 0);\r\n    }\r\n }\r\n\r\n@media (min-width: 992px) {\r\n\r\n    \r\n\r\n}\r\n\r\n@media (min-width: 1200px) { }"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"universe\">\n  <div class=\"dots\">\n    <div class=\"container py-5 px-4\">\n      <div class=\"row \">\n        <div class=\"col-12 col-md-5 px-0 temp\">\n          <div class=\"two-dots px-3  py-3\">\n            <div class=\"row\">\n              <div class=\"col-12 pl-5\">\n                <!--Logo Area-->\n                <a [routerLink]=\"['/user']\" routerLinkActive=\"active\">\n                  <img src=\"../assets/images/logo.png\" class=\"size\">\n                  <h4 class=\"text-white\">Seap<span class=\"chain\">Wallet</span></h4>\n                </a>\n              </div>\n            </div>\n            <div class=\"row py-4\">\n              <div class=\"col-12 col-lg-10 pt-5 mr-auto ml-auto\">\n                <h5 class=\"text-white logo-text ml-md-3 pl-lg-5\">We are Professionals</h5>\n                <p class=\"ultra-light middle\">\n                    Seap Wallet is a new generation of decentralized digital currency\n                    exchange, creation and proper payment gateway solutions.\n                </p>\n              </div>\n            </div>\n            <div class=\"row pt-5\">\n              <div class=\"col-12\">\n                <ul>\n                  <li class=\"py-2\">\n                    <a href=\"#\">Create your payment account</a>\n                  </li>\n                  <li class=\"py-2\">\n                    <a href=\"#\">Free fluid payment</a>\n                  </li>\n                  <li class=\"py-2\">\n                    <a href=\"#\">Enjoy online payment security</a>\n                  </li>\n                  <li class=\"py-2\">\n                    <a href=\"#\">Share with friends</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n        <div class=\"col-12 col-md-7 py-3 off-white\">\n          <div class=\"pb-5\">\n            <h3>\n              <a  class=\"blue\">Login</a>\n              <a (click)=\"moveToRegister()\" class=\"grey\"> / Sign up</a>\n            </h3>\n          </div>\n          <div class=\"pt-3\">\n            <h4>Hey there! Welcome Back</h4>\n            <p class=\"pb-4 text-dark ultra-light\">Enter your sign in details below:</p>\n              <form [formGroup]=\"loginForm\">\n                  <div class=\"form-row\">\n                    <div class=\"col-11 mr-auto ml-auto ultra-medium\">\n                      <label for=\"Email\" class=\"\">Email</label>\n                      <input formControlName=\"email\" type=\"text\" class=\"form-control line-up my-1\" placeholder=\"\">\n                    </div>\n                    <div class=\"col-11 mr-auto ml-auto ultra-medium\">\n                      <label for=\"Password\" class=\"mt-2\">Password</label>\n                      <input formControlName=\"password\" type=\"password\" class=\"form-control line-up my-1\" placeholder=\"\">\n                    </div>\n                      <div class=\"col-12 text-right pr-5\">\n                          <a href=\"#\" class=\"ultra-light get\">\n                              Forgot Password?\n                            </a>\n                      </div>\n                  <div class=\"col-6 col-sm-5 col-md-6 col-lg-5 mr-auto ml-auto pl-lg-5 py-4\">\n                    <a class=\"px-5 text-white lit-btn\"(click)=\"login()\" (click)=\"clearForm()\">\n                      LOGIN\n                    </a>                                                                                                                                                                                                                                                                                                                                                                                                        \n                  </div>\n                </div>\n                </form>\n          </div>\n        </div>\n      </div>\n    </div>  \n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("./src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(_router, _user) {
        this._router = _router;
        this._user = _user;
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required]),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required)
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (!this.loginForm.valid) {
            console.log('Invalid');
            return;
        }
        this._user.login(JSON.stringify(this.loginForm.value))
            .subscribe(function (data) { console.log(data); _this._router.navigate(['/home']); }, function (error) { return console.error(error); });
        //console.log(JSON.stringify(this.loginForm.value));
    };
    LoginComponent.prototype.moveToRegister = function () {
        this._router.navigate(['/register']);
    };
    LoginComponent.prototype.clearForm = function () {
        this.loginForm.reset();
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/airtime/airtime.component.css":
/***/ (function(module, exports) {

module.exports = "html, body {\r\n    min-height: 100%; \r\n}\r\n\r\n.universe{\r\n    background-image: url('glo.28acc09a222a0e86cf6b.jpg');\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n}\r\n\r\n.temp{\r\n    background-image: url('glo.28acc09a222a0e86cf6b.jpg');\r\n    background-repeat: no-repeat;\r\n    background-position: top;\r\n    background-size: cover;\r\n    min-height: 100%;\r\n}\r\n\r\n.dots{\r\n    background-color: rgba(33, 67, 206, 0.603);\r\n    background-repeat: no-repeat;\r\n    background-position: top;\r\n    background-size: cover;\r\n    min-height: 100%; \r\n}\r\n\r\n.two-dots{\r\n    background-color: rgba(82, 99, 167, 0.603); \r\n    background-repeat: no-repeat;\r\n    background-position: top;\r\n    background-size: cover;\r\n    min-height: 100%; \r\n}\r\n\r\n.lit-btn{\r\n    background-color:#E79B07;\r\n    border-radius: 25px;\r\n    border: 1px solid rgb(250, 173, 18);\r\n    display: inline-block;\r\n    line-height: 40px;\r\n    font-weight: 500; \r\n}\r\n\r\n.lit-btn:hover, .lit-btn-a:hover{\r\n    border: 1px solid rgba(216, 211, 200, 0.801);\r\n}\r\n\r\n/*-----------Responsive Styling---------*/\r\n\r\n@media (min-width: 576px) { }\r\n\r\n@media (min-width: 768px) {\r\n    \r\n    .dots{\r\n        background-color: rgba(37, 50, 100, 0);\r\n    }\r\n }\r\n\r\n@media (min-width: 992px) {\r\n\r\n    \r\n\r\n}\r\n\r\n@media (min-width: 1200px) { }"

/***/ }),

/***/ "./src/app/pages/airtime/airtime.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"universe\">\n  <div class=\"container py-5 px-4\">\n    <div class=\"row \">\n      <div class=\"col-12 col-md-5 px-0 temp\">\n        <div class=\"two-dots px-3  py-3\">\n          <div class=\"row\">\n            <div class=\"col-12 pl-5\">\n              <!--Logo Area-->\n              <a [routerLink]=\"['/user']\" routerLinkActive=\"active\">\n                <img src=\"../assets/images/logo.png\" class=\"size\">\n                <h4 class=\"text-white\">Seap<span class=\"chain\">Wallet</span></h4>\n              </a>\n            </div>\n          </div>\n          <div class=\"row py-4\">\n            <div class=\"col-12 col-lg-10 pt-5 mr-auto ml-auto\">\n              <h5 class=\"text-white logo-text ml-md-3 pl-lg-5\">We are Professionals</h5>\n              <p class=\"ultra-light middle\">\n                  Seap Wallet is a new generation of decentralized digital currency\n                  exchange, creation and proper payment gateway solutions.\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n      <div class=\"col-12 col-md-7 py-2 off-white\">\n        <div class=\"pt-3\">\n          <h4>Hey there! We Require you to Login first!</h4>\n          <p class=\"pb-4 text-dark ultra-light\">Enter your Login details below:</p>\n            <form [formGroup]=\"loginForm\">\n                <div class=\"form-row\">\n                  <div class=\"col-11 mr-auto ml-auto ultra-medium\">\n                    <label for=\"Email\" class=\"\">Email</label>\n                    <input formControlName=\"email\" type=\"text\" class=\"form-control line-up my-1\" placeholder=\"\">\n                  </div>\n                  <div class=\"col-11 mr-auto ml-auto ultra-medium\">\n                    <label for=\"Password\" class=\"mt-2\">Password</label>\n                    <input formControlName=\"password\" type=\"password\" class=\"form-control line-up my-1\" placeholder=\"\">\n                  </div>\n                    <div class=\"col-12 text-right pr-5\">\n                        <a href=\"#\" class=\"ultra-light get\">\n                            Forgot Password?\n                          </a>\n                    </div>\n                <div class=\"col-6 col-sm-5 col-md-6 col-lg-5 mr-auto ml-auto pl-lg-5 py-4\">\n                  <a class=\"px-5 text-white lit-btn\"(click)=\"login()\" (click)=\"clearForm()\">\n                    LOGIN\n                  </a>                                                                                                                                                                                                                                                                                                                                                                                                        \n                </div>\n              </div>\n              </form>\n        </div>\n      </div>\n    </div>\n  </div>  \n</div>\n\n\n"

/***/ }),

/***/ "./src/app/pages/airtime/airtime.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AirtimeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("./src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AirtimeComponent = /** @class */ (function () {
    function AirtimeComponent(_router, _user) {
        this._router = _router;
        this._user = _user;
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required]),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required)
        });
    }
    AirtimeComponent.prototype.ngOnInit = function () {
    };
    AirtimeComponent.prototype.login = function () {
        var _this = this;
        if (!this.loginForm.valid) {
            console.log('Invalid');
            return;
        }
        this._user.login(JSON.stringify(this.loginForm.value))
            .subscribe(function (data) { console.log(data); _this._router.navigate(['/home']); }, function (error) { return console.error(error); });
        //console.log(JSON.stringify(this.loginForm.value));
    };
    AirtimeComponent.prototype.moveToRegister = function () {
        this._router.navigate(['/register']);
    };
    AirtimeComponent.prototype.clearForm = function () {
        this.loginForm.reset();
    };
    AirtimeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-airtime',
            template: __webpack_require__("./src/app/pages/airtime/airtime.component.html"),
            styles: [__webpack_require__("./src/app/pages/airtime/airtime.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]])
    ], AirtimeComponent);
    return AirtimeComponent;
}());



/***/ }),

/***/ "./src/app/pages/bills/bills.component.css":
/***/ (function(module, exports) {

module.exports = "html, body {\r\n    min-height: 100%; \r\n}\r\n\r\n.universe{\r\n    background-image: url('glo.28acc09a222a0e86cf6b.jpg');\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n}\r\n\r\n.temp{\r\n    background-image: url('glo.28acc09a222a0e86cf6b.jpg');\r\n    background-repeat: no-repeat;\r\n    background-position: top;\r\n    background-size: cover;\r\n    min-height: 100%;\r\n}\r\n\r\n.dots{\r\n    background-color: rgba(33, 67, 206, 0.603);\r\n    background-repeat: no-repeat;\r\n    background-position: top;\r\n    background-size: cover;\r\n    min-height: 100%; \r\n}\r\n\r\n.two-dots{\r\n    background-color: rgba(82, 99, 167, 0.603); \r\n    background-repeat: no-repeat;\r\n    background-position: top;\r\n    background-size: cover;\r\n    min-height: 100%; \r\n}\r\n\r\n.lit-btn{\r\n    background-color:#E79B07;\r\n    border-radius: 25px;\r\n    border: 1px solid rgb(250, 173, 18);\r\n    display: inline-block;\r\n    line-height: 40px;\r\n    font-weight: 500; \r\n}\r\n\r\n.lit-btn:hover, .lit-btn-a:hover{\r\n    border: 1px solid rgba(216, 211, 200, 0.801);\r\n}\r\n\r\n/*-----------Responsive Styling---------*/\r\n\r\n@media (min-width: 576px) { }\r\n\r\n@media (min-width: 768px) {\r\n    \r\n    .dots{\r\n        background-color: rgba(37, 50, 100, 0);\r\n    }\r\n }\r\n\r\n@media (min-width: 992px) {\r\n\r\n    \r\n\r\n}\r\n\r\n@media (min-width: 1200px) { }"

/***/ }),

/***/ "./src/app/pages/bills/bills.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"universe\">\n  <div class=\"container py-5 px-4\">\n    <div class=\"row \">\n      <div class=\"col-12 col-md-5 px-0 temp\">\n        <div class=\"two-dots px-3  py-3\">\n          <div class=\"row\">\n            <div class=\"col-12 pl-5\">\n              <!--Logo Area-->\n              <a [routerLink]=\"['/user']\" routerLinkActive=\"active\">\n                <img src=\"../assets/images/logo.png\" class=\"size\">\n                <h4 class=\"text-white\">Seap<span class=\"chain\">Wallet</span></h4>\n              </a>\n            </div>\n          </div>\n          <div class=\"row py-4\">\n            <div class=\"col-12 col-lg-10 pt-5 mr-auto ml-auto\">\n              <h5 class=\"text-white logo-text ml-md-3 pl-lg-5\">We are Professionals</h5>\n              <p class=\"ultra-light middle\">\n                  Seap Wallet is a new generation of decentralized digital currency\n                  exchange, creation and proper payment gateway solutions.\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n      <div class=\"col-12 col-md-7 py-2 off-white\">\n        <div class=\"pt-3\">\n          <h4>Hey there! We Require you to Login first!</h4>\n          <p class=\"pb-4 text-dark ultra-light\">Enter your Login details below:</p>\n            <form [formGroup]=\"loginForm\">\n                <div class=\"form-row\">\n                  <div class=\"col-11 mr-auto ml-auto ultra-medium\">\n                    <label for=\"Email\" class=\"\">Email</label>\n                    <input formControlName=\"email\" type=\"text\" class=\"form-control line-up my-1\" placeholder=\"\">\n                  </div>\n                  <div class=\"col-11 mr-auto ml-auto ultra-medium\">\n                    <label for=\"Password\" class=\"mt-2\">Password</label>\n                    <input formControlName=\"password\" type=\"password\" class=\"form-control line-up my-1\" placeholder=\"\">\n                  </div>\n                    <div class=\"col-12 text-right pr-5\">\n                        <a href=\"#\" class=\"ultra-light get\">\n                            Forgot Password?\n                          </a>\n                    </div>\n                <div class=\"col-6 col-sm-5 col-md-6 col-lg-5 mr-auto ml-auto pl-lg-5 py-4\">\n                  <a class=\"px-5 text-white lit-btn\"(click)=\"login()\" (click)=\"clearForm()\">\n                    LOGIN\n                  </a>                                                                                                                                                                                                                                                                                                                                                                                                        \n                </div>\n              </div>\n              </form>\n        </div>\n      </div>\n    </div>\n  </div>  \n</div>\n\n\n"

/***/ }),

/***/ "./src/app/pages/bills/bills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("./src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BillsComponent = /** @class */ (function () {
    function BillsComponent(_router, _user) {
        this._router = _router;
        this._user = _user;
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required]),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required)
        });
    }
    BillsComponent.prototype.ngOnInit = function () {
    };
    BillsComponent.prototype.login = function () {
        var _this = this;
        if (!this.loginForm.valid) {
            console.log('Invalid');
            return;
        }
        this._user.login(JSON.stringify(this.loginForm.value))
            .subscribe(function (data) { console.log(data); _this._router.navigate(['/home']); }, function (error) { return console.error(error); });
        //console.log(JSON.stringify(this.loginForm.value));
    };
    BillsComponent.prototype.moveToRegister = function () {
        this._router.navigate(['/register']);
    };
    BillsComponent.prototype.clearForm = function () {
        this.loginForm.reset();
    };
    BillsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-bills',
            template: __webpack_require__("./src/app/pages/bills/bills.component.html"),
            styles: [__webpack_require__("./src/app/pages/bills/bills.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]])
    ], BillsComponent);
    return BillsComponent;
}());



/***/ }),

/***/ "./src/app/pages/funds/funds.component.css":
/***/ (function(module, exports) {

module.exports = "html, body {\r\n    min-height: 100%; \r\n}\r\n\r\n.universe{\r\n    background-image: url('glo.28acc09a222a0e86cf6b.jpg');\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n}\r\n\r\n.temp{\r\n    background-image: url('glo.28acc09a222a0e86cf6b.jpg');\r\n    background-repeat: no-repeat;\r\n    background-position: top;\r\n    background-size: cover;\r\n    min-height: 100%;\r\n}\r\n\r\n.dots{\r\n    background-color: rgba(33, 67, 206, 0.603);\r\n    background-repeat: no-repeat;\r\n    background-position: top;\r\n    background-size: cover;\r\n    min-height: 100%; \r\n}\r\n\r\n.two-dots{\r\n    background-color: rgba(82, 99, 167, 0.603); \r\n    background-repeat: no-repeat;\r\n    background-position: top;\r\n    background-size: cover;\r\n    min-height: 100%; \r\n}\r\n\r\n.lit-btn{\r\n    background-color:#E79B07;\r\n    border-radius: 25px;\r\n    border: 1px solid rgb(250, 173, 18);\r\n    display: inline-block;\r\n    line-height: 40px;\r\n    font-weight: 500; \r\n}\r\n\r\n.lit-btn:hover, .lit-btn-a:hover{\r\n    border: 1px solid rgba(216, 211, 200, 0.801);\r\n}\r\n\r\n/*-----------Responsive Styling---------*/\r\n\r\n@media (min-width: 576px) { }\r\n\r\n@media (min-width: 768px) {\r\n    \r\n    .dots{\r\n        background-color: rgba(37, 50, 100, 0);\r\n    }\r\n }\r\n\r\n@media (min-width: 992px) {\r\n\r\n    \r\n\r\n}\r\n\r\n@media (min-width: 1200px) { }"

/***/ }),

/***/ "./src/app/pages/funds/funds.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"universe\">\n    <div class=\"container py-5 px-4\">\n      <div class=\"row \">\n        <div class=\"col-12 col-md-5 px-0 temp\">\n          <div class=\"two-dots px-3  py-3\">\n            <div class=\"row\">\n              <div class=\"col-12 pl-5\">\n                <!--Logo Area-->\n                <a [routerLink]=\"['/user']\" routerLinkActive=\"active\">\n                  <img src=\"../assets/images/logo.png\" class=\"size\">\n                  <h4 class=\"text-white\">Seap<span class=\"chain\">Wallet</span></h4>\n                </a>\n              </div>\n            </div>\n            <div class=\"row py-4\">\n              <div class=\"col-12 col-lg-10 pt-5 mr-auto ml-auto\">\n                <h5 class=\"text-white logo-text ml-md-3 pl-lg-5\">We are Professionals</h5>\n                <p class=\"ultra-light middle\">\n                    Seap Wallet is a new generation of decentralized digital currency\n                    exchange, creation and proper payment gateway solutions.\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n        <div class=\"col-12 col-md-7 py-2 off-white\">\n          <div class=\"pt-3\">\n            <h4>Hey there! We Require you to Login first!</h4>\n            <p class=\"pb-4 text-dark ultra-light\">Enter your Login details below:</p>\n              <form [formGroup]=\"loginForm\">\n                  <div class=\"form-row\">\n                    <div class=\"col-11 mr-auto ml-auto ultra-medium\">\n                      <label for=\"Email\" class=\"\">Email</label>\n                      <input formControlName=\"email\" type=\"text\" class=\"form-control line-up my-1\" placeholder=\"\">\n                    </div>\n                    <div class=\"col-11 mr-auto ml-auto ultra-medium\">\n                      <label for=\"Password\" class=\"mt-2\">Password</label>\n                      <input formControlName=\"password\" type=\"password\" class=\"form-control line-up my-1\" placeholder=\"\">\n                    </div>\n                      <div class=\"col-12 text-right pr-5\">\n                          <a href=\"#\" class=\"ultra-light get\">\n                              Forgot Password?\n                            </a>\n                      </div>\n                  <div class=\"col-6 col-sm-5 col-md-6 col-lg-5 mr-auto ml-auto pl-lg-5 py-4\">\n                    <a class=\"px-5 text-white lit-btn\"(click)=\"login()\" (click)=\"clearForm()\">\n                      LOGIN\n                    </a>                                                                                                                                                                                                                                                                                                                                                                                                        \n                  </div>\n                </div>\n                </form>\n          </div>\n        </div>\n      </div>\n    </div>  \n  </div>\n\n\n"

/***/ }),

/***/ "./src/app/pages/funds/funds.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FundsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("./src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FundsComponent = /** @class */ (function () {
    function FundsComponent(_router, _user) {
        this._router = _router;
        this._user = _user;
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required]),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required)
        });
    }
    FundsComponent.prototype.ngOnInit = function () {
    };
    FundsComponent.prototype.login = function () {
        var _this = this;
        if (!this.loginForm.valid) {
            console.log('Invalid');
            return;
        }
        this._user.login(JSON.stringify(this.loginForm.value))
            .subscribe(function (data) { console.log(data); _this._router.navigate(['/home']); }, function (error) { return console.error(error); });
        //console.log(JSON.stringify(this.loginForm.value));
    };
    FundsComponent.prototype.moveToRegister = function () {
        this._router.navigate(['/register']);
    };
    FundsComponent.prototype.clearForm = function () {
        this.loginForm.reset();
    };
    FundsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-funds',
            template: __webpack_require__("./src/app/pages/funds/funds.component.html"),
            styles: [__webpack_require__("./src/app/pages/funds/funds.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]])
    ], FundsComponent);
    return FundsComponent;
}());



/***/ }),

/***/ "./src/app/pages/loans/loans.component.css":
/***/ (function(module, exports) {

module.exports = "html, body {\r\n    min-height: 100%; \r\n}\r\n\r\n.universe{\r\n    background-image: url('glo.28acc09a222a0e86cf6b.jpg');\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n}\r\n\r\n.temp{\r\n    background-image: url('glo.28acc09a222a0e86cf6b.jpg');\r\n    background-repeat: no-repeat;\r\n    background-position: top;\r\n    background-size: cover;\r\n    min-height: 100%;\r\n}\r\n\r\n.dots{\r\n    background-color: rgba(33, 67, 206, 0.603);\r\n    background-repeat: no-repeat;\r\n    background-position: top;\r\n    background-size: cover;\r\n    min-height: 100%; \r\n}\r\n\r\n.two-dots{\r\n    background-color: rgba(82, 99, 167, 0.603); \r\n    background-repeat: no-repeat;\r\n    background-position: top;\r\n    background-size: cover;\r\n    min-height: 100%; \r\n}\r\n\r\n.lit-btn{\r\n    background-color:#E79B07;\r\n    border-radius: 25px;\r\n    border: 1px solid rgb(250, 173, 18);\r\n    display: inline-block;\r\n    line-height: 40px;\r\n    font-weight: 500; \r\n}\r\n\r\n.lit-btn:hover, .lit-btn-a:hover{\r\n    border: 1px solid rgba(216, 211, 200, 0.801);\r\n}\r\n\r\n/*-----------Responsive Styling---------*/\r\n\r\n@media (min-width: 576px) { }\r\n\r\n@media (min-width: 768px) {\r\n    \r\n    .dots{\r\n        background-color: rgba(37, 50, 100, 0);\r\n    }\r\n }\r\n\r\n@media (min-width: 992px) {\r\n\r\n    \r\n\r\n}\r\n\r\n@media (min-width: 1200px) { }"

/***/ }),

/***/ "./src/app/pages/loans/loans.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"universe\">\n  <div class=\"container py-5 px-4\">\n    <div class=\"row \">\n      <div class=\"col-12 col-md-5 px-0 temp\">\n        <div class=\"two-dots px-3  py-3\">\n          <div class=\"row\">\n            <div class=\"col-12 pl-5\">\n              <!--Logo Area-->\n              <a [routerLink]=\"['/user']\" routerLinkActive=\"active\">\n                <img src=\"../assets/images/logo.png\" class=\"size\">\n                <h4 class=\"text-white\">Seap<span class=\"chain\">Wallet</span></h4>\n              </a>\n            </div>\n          </div>\n          <div class=\"row py-4\">\n            <div class=\"col-12 col-lg-10 pt-5 mr-auto ml-auto\">\n              <h5 class=\"text-white logo-text ml-md-3 pl-lg-5\">We are Professionals</h5>\n              <p class=\"ultra-light middle\">\n                  Seap Wallet is a new generation of decentralized digital currency\n                  exchange, creation and proper payment gateway solutions.\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-12 col-md-7 py-2 off-white\">\n        <div class=\"pt-3\">\n          <h4>Hey there! We Require you to Login first!</h4>\n          <p class=\"pb-4 text-dark ultra-light\">Enter your Login details below:</p>\n          <form [formGroup]=\"loginForm\">\n            <div class=\"form-row\">\n              <div class=\"col-11 mr-auto ml-auto ultra-medium\">\n                <label for=\"Email\" class=\"\">Email</label>\n                <input formControlName=\"email\" type=\"text\" class=\"form-control line-up my-1\" placeholder=\"\">\n              </div>\n              <div class=\"col-11 mr-auto ml-auto ultra-medium\">\n                <label for=\"Password\" class=\"mt-2\">Password</label>\n                <input formControlName=\"password\" type=\"password\" class=\"form-control line-up my-1\" placeholder=\"\">\n              </div>\n              <div class=\"col-12 text-right pr-5\">\n                <a href=\"#\" class=\"ultra-light get\">\n                  Forgot Password?\n                </a>\n              </div>\n              <div class=\"col-6 col-sm-5 col-md-6 col-lg-5 mr-auto ml-auto pl-lg-5 py-4\">\n                <a class=\"px-5 text-white lit-btn\"(click)=\"login()\" (click)=\"clearForm()\">\n                  LOGIN\n                </a>                                                                                                                                                                                                                                                                                                                                                                                                        \n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>  \n</div>\n\n\n"

/***/ }),

/***/ "./src/app/pages/loans/loans.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoansComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("./src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoansComponent = /** @class */ (function () {
    function LoansComponent(_router, _user) {
        this._router = _router;
        this._user = _user;
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required]),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required)
        });
    }
    LoansComponent.prototype.ngOnInit = function () {
    };
    LoansComponent.prototype.login = function () {
        var _this = this;
        if (!this.loginForm.valid) {
            console.log('Invalid');
            return;
        }
        this._user.login(JSON.stringify(this.loginForm.value))
            .subscribe(function (data) { console.log(data); _this._router.navigate(['/home']); }, function (error) { return console.error(error); });
        //console.log(JSON.stringify(this.loginForm.value));
    };
    LoansComponent.prototype.moveToRegister = function () {
        this._router.navigate(['/register']);
    };
    LoansComponent.prototype.clearForm = function () {
        this.loginForm.reset();
    };
    LoansComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-loans',
            template: __webpack_require__("./src/app/pages/loans/loans.component.html"),
            styles: [__webpack_require__("./src/app/pages/loans/loans.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]])
    ], LoansComponent);
    return LoansComponent;
}());



/***/ }),

/***/ "./src/app/pages/request/request.component.css":
/***/ (function(module, exports) {

module.exports = "html, body {\r\n    min-height: 100%; \r\n}\r\n\r\n.universe{\r\n    background-image: url('glo.28acc09a222a0e86cf6b.jpg');\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n}\r\n\r\n.temp{\r\n    background-image: url('glo.28acc09a222a0e86cf6b.jpg');\r\n    background-repeat: no-repeat;\r\n    background-position: top;\r\n    background-size: cover;\r\n    min-height: 100%;\r\n}\r\n\r\n.dots{\r\n    background-color: rgba(33, 67, 206, 0.603);\r\n    background-repeat: no-repeat;\r\n    background-position: top;\r\n    background-size: cover;\r\n    min-height: 100%; \r\n}\r\n\r\n.two-dots{\r\n    background-color: rgba(82, 99, 167, 0.603); \r\n    background-repeat: no-repeat;\r\n    background-position: top;\r\n    background-size: cover;\r\n    min-height: 100%; \r\n}\r\n\r\n.lit-btn{\r\n    background-color:#E79B07;\r\n    border-radius: 25px;\r\n    border: 1px solid rgb(250, 173, 18);\r\n    display: inline-block;\r\n    line-height: 40px;\r\n    font-weight: 500; \r\n}\r\n\r\n.lit-btn:hover, .lit-btn-a:hover{\r\n    border: 1px solid rgba(216, 211, 200, 0.801);\r\n}\r\n\r\n/*-----------Responsive Styling---------*/\r\n\r\n@media (min-width: 576px) { }\r\n\r\n@media (min-width: 768px) {\r\n    \r\n    .dots{\r\n        background-color: rgba(37, 50, 100, 0);\r\n    }\r\n }\r\n\r\n@media (min-width: 992px) {\r\n\r\n    \r\n\r\n}\r\n\r\n@media (min-width: 1200px) { }"

/***/ }),

/***/ "./src/app/pages/request/request.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  request works!\n</p>\n<div class=\"universe\">\n  <div class=\"container py-5 px-4\">\n    <div class=\"row \">\n      <div class=\"col-12 col-md-5 px-0 temp\">\n        <div class=\"two-dots px-3  py-3\">\n          <div class=\"row\">\n            <div class=\"col-12 pl-5\">\n              <!--Logo Area-->\n              <a [routerLink]=\"['/user']\" routerLinkActive=\"active\">\n                <img src=\"../assets/images/logo.png\" class=\"size\">\n                <h4 class=\"text-white\">Seap<span class=\"chain\">Wallet</span></h4>\n              </a>\n            </div>\n          </div>\n          <div class=\"row py-4\">\n            <div class=\"col-12 col-lg-10 pt-5 mr-auto ml-auto\">\n              <h5 class=\"text-white logo-text ml-md-3 pl-lg-5\">We are Professionals</h5>\n              <p class=\"ultra-light middle\">\n                  Seap Wallet is a new generation of decentralized digital currency\n                  exchange, creation and proper payment gateway solutions.\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-12 col-md-7 py-2 off-white\">\n        <div class=\"pt-3\">\n          <h4>Hey there! We Require you to Login first!</h4>\n          <p class=\"pb-4 text-dark ultra-light\">Enter your Login details below:</p>\n          <form [formGroup]=\"loginForm\">\n            <div class=\"form-row\">\n              <div class=\"col-11 mr-auto ml-auto ultra-medium\">\n                <label for=\"Email\" class=\"\">Email</label>\n                <input formControlName=\"email\" type=\"text\" class=\"form-control line-up my-1\" placeholder=\"\">\n              </div>\n              <div class=\"col-11 mr-auto ml-auto ultra-medium\">\n                <label for=\"Password\" class=\"mt-2\">Password</label>\n                <input formControlName=\"password\" type=\"password\" class=\"form-control line-up my-1\" placeholder=\"\">\n              </div>\n              <div class=\"col-12 text-right pr-5\">\n                <a href=\"#\" class=\"ultra-light get\">\n                  Forgot Password?\n                </a>\n              </div>\n              <div class=\"col-6 col-sm-5 col-md-6 col-lg-5 mr-auto ml-auto pl-lg-5 py-4\">\n                <a class=\"px-5 text-white lit-btn\"(click)=\"login()\" (click)=\"clearForm()\">\n                  LOGIN\n                </a>                                                                                                                                                                                                                                                                                                                                                                                                        \n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>  \n</div>\n\n\n"

/***/ }),

/***/ "./src/app/pages/request/request.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("./src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RequestComponent = /** @class */ (function () {
    function RequestComponent(_router, _user) {
        this._router = _router;
        this._user = _user;
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required]),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required)
        });
    }
    RequestComponent.prototype.ngOnInit = function () {
    };
    RequestComponent.prototype.login = function () {
        var _this = this;
        if (!this.loginForm.valid) {
            console.log('Invalid');
            return;
        }
        this._user.login(JSON.stringify(this.loginForm.value))
            .subscribe(function (data) { console.log(data); _this._router.navigate(['/home']); }, function (error) { return console.error(error); });
        //console.log(JSON.stringify(this.loginForm.value));
    };
    RequestComponent.prototype.moveToRegister = function () {
        this._router.navigate(['/register']);
    };
    RequestComponent.prototype.clearForm = function () {
        this.loginForm.reset();
    };
    RequestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-request',
            template: __webpack_require__("./src/app/pages/request/request.component.html"),
            styles: [__webpack_require__("./src/app/pages/request/request.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]])
    ], RequestComponent);
    return RequestComponent;
}());



/***/ }),

/***/ "./src/app/pages/transfer/transfer.component.css":
/***/ (function(module, exports) {

module.exports = "html, body {\r\n    min-height: 100%; \r\n}\r\n\r\n.universe{\r\n    background-image: url('glo.28acc09a222a0e86cf6b.jpg');\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n}\r\n\r\n.temp{\r\n    background-image: url('glo.28acc09a222a0e86cf6b.jpg');\r\n    background-repeat: no-repeat;\r\n    background-position: top;\r\n    background-size: cover;\r\n    min-height: 100%;\r\n}\r\n\r\n.dots{\r\n    background-color: rgba(33, 67, 206, 0.603);\r\n    background-repeat: no-repeat;\r\n    background-position: top;\r\n    background-size: cover;\r\n    min-height: 100%; \r\n}\r\n\r\n.two-dots{\r\n    background-color: rgba(82, 99, 167, 0.603); \r\n    background-repeat: no-repeat;\r\n    background-position: top;\r\n    background-size: cover;\r\n    min-height: 100%; \r\n}\r\n\r\n.lit-btn{\r\n    background-color:#E79B07;\r\n    border-radius: 25px;\r\n    border: 1px solid rgb(250, 173, 18);\r\n    display: inline-block;\r\n    line-height: 40px;\r\n    font-weight: 500; \r\n}\r\n\r\n.lit-btn:hover, .lit-btn-a:hover{\r\n    border: 1px solid rgba(216, 211, 200, 0.801);\r\n}\r\n\r\n/*-----------Responsive Styling---------*/\r\n\r\n@media (min-width: 576px) { }\r\n\r\n@media (min-width: 768px) {\r\n    \r\n    .dots{\r\n        background-color: rgba(37, 50, 100, 0);\r\n    }\r\n }\r\n\r\n@media (min-width: 992px) {\r\n\r\n    \r\n\r\n}\r\n\r\n@media (min-width: 1200px) { }"

/***/ }),

/***/ "./src/app/pages/transfer/transfer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"universe\">\n  <div class=\"container py-5 px-4\">\n    <div class=\"row \">\n      <div class=\"col-12 col-md-5 px-0 temp\">\n        <div class=\"two-dots px-3  py-3\">\n          <div class=\"row\">\n            <div class=\"col-12 pl-5\">\n              <!--Logo Area-->\n              <a [routerLink]=\"['/user']\" routerLinkActive=\"active\">\n                <img src=\"../assets/images/logo.png\" class=\"size\">\n                <h4 class=\"text-white\">Seap<span class=\"chain\">Wallet</span></h4>\n              </a>\n            </div>\n          </div>\n          <div class=\"row py-4\">\n            <div class=\"col-12 col-lg-10 pt-5 mr-auto ml-auto\">\n              <h5 class=\"text-white logo-text ml-md-3 pl-lg-5\">We are Professionals</h5>\n              <p class=\"ultra-light middle\">\n                  Seap Wallet is a new generation of decentralized digital currency\n                  exchange, creation and proper payment gateway solutions.\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-12 col-md-7 py-2 off-white\">\n        <div class=\"pt-3\">\n          <h4>Hey there! We Require you to Login first!</h4>\n          <p class=\"pb-4 text-dark ultra-light\">Enter your Login details below:</p>\n          <form [formGroup]=\"loginForm\">\n            <div class=\"form-row\">\n              <div class=\"col-11 mr-auto ml-auto ultra-medium\">\n                <label for=\"Email\" class=\"\">Email</label>\n                <input formControlName=\"email\" type=\"text\" class=\"form-control line-up my-1\" placeholder=\"\">\n              </div>\n              <div class=\"col-11 mr-auto ml-auto ultra-medium\">\n                <label for=\"Password\" class=\"mt-2\">Password</label>\n                <input formControlName=\"password\" type=\"password\" class=\"form-control line-up my-1\" placeholder=\"\">\n              </div>\n              <div class=\"col-12 text-right pr-5\">\n                <a href=\"#\" class=\"ultra-light get\">\n                  Forgot Password?\n                </a>\n              </div>\n              <div class=\"col-6 col-sm-5 col-md-6 col-lg-5 mr-auto ml-auto pl-lg-5 py-4\">\n                <a class=\"px-5 text-white lit-btn\"(click)=\"login()\" (click)=\"clearForm()\">\n                  LOGIN\n                </a>                                                                                                                                                                                                                                                                                                                                                                                                        \n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>  \n</div>\n\n\n"

/***/ }),

/***/ "./src/app/pages/transfer/transfer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("./src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TransferComponent = /** @class */ (function () {
    function TransferComponent(_router, _user) {
        this._router = _router;
        this._user = _user;
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required]),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required)
        });
    }
    TransferComponent.prototype.ngOnInit = function () {
    };
    TransferComponent.prototype.login = function () {
        var _this = this;
        if (!this.loginForm.valid) {
            console.log('Invalid');
            return;
        }
        this._user.login(JSON.stringify(this.loginForm.value))
            .subscribe(function (data) { console.log(data); _this._router.navigate(['/home']); }, function (error) { return console.error(error); });
        //console.log(JSON.stringify(this.loginForm.value));
    };
    TransferComponent.prototype.moveToRegister = function () {
        this._router.navigate(['/register']);
    };
    TransferComponent.prototype.clearForm = function () {
        this.loginForm.reset();
    };
    TransferComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-transfer',
            template: __webpack_require__("./src/app/pages/transfer/transfer.component.html"),
            styles: [__webpack_require__("./src/app/pages/transfer/transfer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]])
    ], TransferComponent);
    return TransferComponent;
}());



/***/ }),

/***/ "./src/app/pages/wallet-open/wallet-open.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/wallet-open/wallet-open.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"universal\">\n  <div class=\"container-fluid pt-2 pb-5 px-5 m-padding\">\n    <div class=\"row py-3 justify-content-center\">\n       <div class=\"col-sm-2 col-lg-1 d-none d-sm-block \">\n        <a [routerLink]=\"['/user']\" routerLinkActive=\"active\">\n            <div class=\"mt-2 ml-2 mb-1\" >\n              <img src=\"../../../assets/images/logo.png\" height=\"60px\">\n            </div>\n         </a>\n        </div>\n        <div class=\"col-7 col-sm-5 col-lg-5 ml-0 pt-3 mr-auto text-bluee\">\n            <h4 class=\"mb-0\">\n              SEAP MFI\n            </h4>\n            <p class=\"mt-0\">\n              Development with Vision.\n            </p>\n      </div>\n      <div class=\"col-xm-3 col-sm-4 col-lg-4 pt-lg-4 pl-lg-0 pt-3 pt-sm-4\">\n        <ul class=\"nav\">\n          <li class=\"nav-item m-border px-1\"><a href=\"../index.html\" class=\"pl-2 text-link \">Home </a></li>\n          <li class=\"nav-item px-1\"><a href=\"login.html\" class=\"pr-2 text-link\"> Login</a></li>\n       </ul>\n      </div>\n     </div>\n\n     <div class=\"row justify-content-center\">\n       <div class=\"col-12 col-md-10 col-lg-6 bg-light box-shadow \">\n       \t<form>\n       \t\n        \t  <div class=\"form-row py-3 px-3\">\n        \t  \t<div class=\"col-2 col-sm-3 col-md-4\"></div>\n        \t  \t<div class=\"col-8 col-sm-6 col-md-4\">\n        \t  \t\t<h6 class=\"background double\"><span class=\"text-info\">Set up your Account</span></h6>\n        \t  \t</div>\n        \t  \t<div class=\"col-2 col-sm-3 col-md-4\"></div>\n            </div>\n\n            <div class=\"form-row\">\n      \t\t    <div class=\"col-12\">\n      \t\t      <div class=\"input-group mb-2\">\n      \t\t        <div class=\"input-group-addon border border-right-0\"><span><i class=\"fa fa-user bg-info m-white text-white p-2 font-size-4 \"></i></span></div>\n      \t\t        <input type=\"text\" class=\"form-control border-left-0 rounded-0\" id=\"inputname\" placeholder=\"Fullname...\">\n      \t\t      </div>\n      \t\t    </div>\n      \t\t  </div>\n\n\n      \t\t  <div class=\"form-row\">\n      \t\t    <div class=\"col-md-6 col-12 \">\n      \t\t       <div class=\"input-group mb-2\">\n      \t\t        <div class=\"input-group-addon border border-right-0\"><span><i class=\"fa fa-phone bg-info m-white text-white p-2 font-size-4 \"></i></span></div>\n      \t\t        <input type=\"number\" class=\"form-control border-left-0 rounded-0\" id=\"inputname\" placeholder=\"Wallet Phone\">\n      \t\t      </div>\n      \t\t    </div>\n      \t\t    <div class=\"col-md-6 col-12 \">\n      \t\t      <div class=\"input-group mb-2\">\n      \t\t        <div class=\"input-group-addon border border-right-0\"><span><i class=\"fa fa-calendar bg-info text-white p-2 font-size-4 \"></i></span></div>\n      \t\t        <input type=\"date\" class=\"form-control border-left-0 rounded-0\" id=\"inputdate\" placeholder=\"\">\n      \t\t      </div>\n      \t\t    </div>\n      \t\t </div>\n\n  \t       <div class=\"form-row\">\n  \t      \t <div class=\"col-md-6 col-12\">\n  \t\t        <select id=\"inputquestion\" class=\"form-control bg-light\">\n  \t\t      \t <option selected>Select</option>\n  \t\t         <option >Male</option>\n  \t\t         <option >Female</option>\n  \t\t        </select>\n  \t\t       </div>\n  \t      \t <div class=\"col-md-6 col-12\">\n  \t\t        <div class=\"input-group mb-2\">\n  \t\t          <div class=\"input-group-addon border border-right-0\"><span><i class=\"fa fa-envelope bg-info m-white text-white p-2 font-size-4 \"></i></span></div>\n  \t\t          <input type=\"text\" class=\"form-control border-left-0 rounded-0\" id=\"inputtext\" placeholder=\"Email ID for Alert\">\n  \t\t        </div>\n  \t\t       </div>\n  \t       </div>\n\n    \t\t   <div class=\"form-row\">\n    \t\t     <div class=\"form-group col-md-6 col-12\">\n    \t\t      <select id=\"inputquestion\" class=\"form-control bg-light\">\n    \t\t      \t<option selected>Select Security Questions</option>\n    \t\t        <option >Favourite Color</option>\n    \t\t        <option >Favourite food</option>\n    \t\t        <option >Pet Name</option>\n    \t\t        <option >Father's name</option>\n    \t\t      </select>\n    \t\t     </div>\n    \t\t     <div class=\"form-group col-md-6 col-12\">\n    \t\t      <input type=\"text\" class=\"form-control\" id=\"inputtext\" placeholder=\"Answer\"/>\n    \t\t     </div>\n    \t\t  </div>\n\n  \t\t    <div class=\"form-row\">\n    \t\t     <div class=\"col-md-6 col-12\">\n    \t\t       <div class=\"input-group mb-2\">\n    \t\t          <div class=\"input-group-addon border border-right-0\"><span><i class=\"fa fa-briefcase m-white text-white bg-info p-2 font-size-4 \"></i></span></div>\n    \t\t          <input type=\"text\" class=\"form-control border-left-0 rounded-0\" id=\"inputtext\" placeholder=\"Occupation\">\n    \t\t        </div>\n    \t\t     </div>\n  \t\t       <div class=\"col-md-6 col-12\">\n  \t\t         <div class=\"input-group mb-2\">\n  \t\t          <div class=\"input-group-addon border border-right-0\"><span><i class=\"fa fa-home m-white text-white bg-info p-2 font-size-4 \"></i></span>\n                </div>\n  \t\t          <input type=\"text\" class=\"form-control border-left-0 rounded-0\" id=\"inputtext\" placeholder=\"Address\">\n  \t\t        </div>\n  \t\t       </div>\n  \t\t       <div class=\"col-12 \">\n  \t\t       \t <div class=\"form-check pb-2 mb-1\">\n                 <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                    I agree to the <a href=\"#\">terms of use</a>\n                  </label>\n               </div>\n  \t\t       </div>\n  \t\t    </div>\n  \t\t   <div class=\"row\">\n  \t\t         <div class=\"col-4 col-sm-2 mx-3 my-3 ml-auto\">\n  \t\t       \t   <a href=\"#\" class=\"btn btn-blue f rounded-0 bol\">Request</a>\n  \t\t         </div>\n  \t\t    </div>\n\t\t    </form>\n       </div>\n     </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/pages/wallet-open/wallet-open.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletOpenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WalletOpenComponent = /** @class */ (function () {
    function WalletOpenComponent() {
    }
    WalletOpenComponent.prototype.ngOnInit = function () {
    };
    WalletOpenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-wallet-open',
            template: __webpack_require__("./src/app/pages/wallet-open/wallet-open.component.html"),
            styles: [__webpack_require__("./src/app/pages/wallet-open/wallet-open.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WalletOpenComponent);
    return WalletOpenComponent;
}());



/***/ }),

/***/ "./src/app/pages/withdraw/withdraw.component.css":
/***/ (function(module, exports) {

module.exports = "html, body {\r\n    min-height: 100%; \r\n}\r\n\r\n.universe{\r\n    background-image: url('glo.28acc09a222a0e86cf6b.jpg');\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n}\r\n\r\n.temp{\r\n    background-image: url('glo.28acc09a222a0e86cf6b.jpg');\r\n    background-repeat: no-repeat;\r\n    background-position: top;\r\n    background-size: cover;\r\n    min-height: 100%;\r\n}\r\n\r\n.dots{\r\n    background-color: rgba(33, 67, 206, 0.603);\r\n    background-repeat: no-repeat;\r\n    background-position: top;\r\n    background-size: cover;\r\n    min-height: 100%; \r\n}\r\n\r\n.two-dots{\r\n    background-color: rgba(82, 99, 167, 0.603); \r\n    background-repeat: no-repeat;\r\n    background-position: top;\r\n    background-size: cover;\r\n    min-height: 100%; \r\n}\r\n\r\n.lit-btn{\r\n    background-color:#E79B07;\r\n    border-radius: 25px;\r\n    border: 1px solid rgb(250, 173, 18);\r\n    display: inline-block;\r\n    line-height: 40px;\r\n    font-weight: 500; \r\n}\r\n\r\n.lit-btn:hover, .lit-btn-a:hover{\r\n    border: 1px solid rgba(216, 211, 200, 0.801);\r\n}\r\n\r\n/*-----------Responsive Styling---------*/\r\n\r\n@media (min-width: 576px) { }\r\n\r\n@media (min-width: 768px) {\r\n    \r\n    .dots{\r\n        background-color: rgba(37, 50, 100, 0);\r\n    }\r\n }\r\n\r\n@media (min-width: 992px) {\r\n\r\n    \r\n\r\n}\r\n\r\n@media (min-width: 1200px) { }"

/***/ }),

/***/ "./src/app/pages/withdraw/withdraw.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"universe\">\n  <div class=\"container py-5 px-4\">\n    <div class=\"row \">\n      <div class=\"col-12 col-md-5 px-0 temp\">\n        <div class=\"two-dots px-3  py-3\">\n          <div class=\"row\">\n            <div class=\"col-12 pl-5\">\n              <!--Logo Area-->\n              <a [routerLink]=\"['/user']\" routerLinkActive=\"active\">\n                <img src=\"../assets/images/logo.png\" class=\"size\">\n                <h4 class=\"text-white\">Seap<span class=\"chain\">Wallet</span></h4>\n              </a>\n            </div>\n          </div>\n          <div class=\"row py-4\">\n            <div class=\"col-12 col-lg-10 pt-5 mr-auto ml-auto\">\n              <h5 class=\"text-white logo-text ml-md-3 pl-lg-5\">We are Professionals</h5>\n              <p class=\"ultra-light middle\">\n                  Seap Wallet is a new generation of decentralized digital currency\n                  exchange, creation and proper payment gateway solutions.\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-12 col-md-7 py-2 off-white\">\n        <div class=\"pt-3\">\n          <h4>Hey there! We Require you to Login first!</h4>\n          <p class=\"pb-4 text-dark ultra-light\">Enter your Login details below:</p>\n          <form [formGroup]=\"loginForm\">\n            <div class=\"form-row\">\n              <div class=\"col-11 mr-auto ml-auto ultra-medium\">\n                <label for=\"Email\" class=\"\">Email</label>\n                <input formControlName=\"email\" type=\"text\" class=\"form-control line-up my-1\" placeholder=\"\">\n              </div>\n              <div class=\"col-11 mr-auto ml-auto ultra-medium\">\n                <label for=\"Password\" class=\"mt-2\">Password</label>\n                <input formControlName=\"password\" type=\"password\" class=\"form-control line-up my-1\" placeholder=\"\">\n              </div>\n              <div class=\"col-12 text-right pr-5\">\n                <a href=\"#\" class=\"ultra-light get\">\n                  Forgot Password?\n                </a>\n              </div>\n              <div class=\"col-6 col-sm-5 col-md-6 col-lg-5 mr-auto ml-auto pl-lg-5 py-4\">\n                <a class=\"px-5 text-white lit-btn\"(click)=\"login()\" (click)=\"clearForm()\">\n                  LOGIN\n                </a>                                                                                                                                                                                                                                                                                                                                                                                                        \n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>  \n</div>\n\n\n"

/***/ }),

/***/ "./src/app/pages/withdraw/withdraw.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithdrawComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("./src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WithdrawComponent = /** @class */ (function () {
    function WithdrawComponent(_router, _user) {
        this._router = _router;
        this._user = _user;
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required]),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required)
        });
    }
    WithdrawComponent.prototype.ngOnInit = function () {
    };
    WithdrawComponent.prototype.login = function () {
        var _this = this;
        if (!this.loginForm.valid) {
            console.log('Invalid');
            return;
        }
        this._user.login(JSON.stringify(this.loginForm.value))
            .subscribe(function (data) { console.log(data); _this._router.navigate(['/home']); }, function (error) { return console.error(error); });
        //console.log(JSON.stringify(this.loginForm.value));
    };
    WithdrawComponent.prototype.moveToRegister = function () {
        this._router.navigate(['/register']);
    };
    WithdrawComponent.prototype.clearForm = function () {
        this.loginForm.reset();
    };
    WithdrawComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-withdraw',
            template: __webpack_require__("./src/app/pages/withdraw/withdraw.component.html"),
            styles: [__webpack_require__("./src/app/pages/withdraw/withdraw.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]])
    ], WithdrawComponent);
    return WithdrawComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = "body{\r\n    color: white !important;\r\n}\r\n.universe{\r\n    background-image: url('glo.28acc09a222a0e86cf6b.jpg');\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n}\r\n.temp{\r\n    background-image: url('glo.28acc09a222a0e86cf6b.jpg');\r\n    background-repeat: no-repeat;\r\n    background-position: top;\r\n    background-size: cover;\r\n    min-height: 100%;\r\n}\r\n.two-dots{\r\n    background-color: rgba(82, 99, 167, 0.603);\r\n    background-repeat: no-repeat;\r\n    background-position: top;\r\n    background-size: cover;\r\n    min-height: 100%; \r\n}\r\n.back{\r\n    background-color: #252a33 !important;\r\n}\r\nh6{\r\n    color: white !important;\r\n}\r\na{\r\n    color: white;\r\n    font-size: 16px !important;\r\n    font-family: \"RobotoMedium\";\r\n}\r\na:hover{\r\n    text-decoration: none !important;\r\n}\r\n.color{\r\n    background-color: rgba(245, 245, 220, 0);\r\n    border-radius: 25px;\r\n    outline: none;\r\n    border: none;\r\n    display: inline-block;\r\n    line-height: 40px;\r\n    font-family: \"MagistralTT\";\r\n    font-weight: 700;\r\n}\r\n.color:hover{\r\n    background-color: #E79B07;\r\n    border-radius: 25px;\r\n    outline: none;\r\n    border: none;\r\n    display: inline-block;\r\n    line-height: 40px;\r\n}\r\n.line-up{\r\n    color: white !important;\r\n    background-color: #252a33 !important;\r\n    border: 2px solid #E79B07 !important;\r\n    border-radius: 25px !important;\r\n}\r\n.line{\r\n    border: 2px solid #E79B07 !important;\r\n    border-radius: 25px !important;\r\n}\r\n.ultra-medium{\r\n    font-size: 15px;\r\n    font-weight: 500;\r\n    font-family: \"Robotolight\";\r\n}\r\n.ultra-large{\r\n    font-size: 24px;\r\n    font-family: \"Robotolight\";\r\n}\r\n.text{\r\n    font-size: 35px;\r\n}\r\n.chain{\r\n    color: #E79B07;\r\n}\r\n.blue{\r\n    color: rgb(46, 46, 185) !important;\r\n}\r\n.blue:hover, .nice:hover{\r\n    color: rgb(19, 19, 160) !important;\r\n}\r\n.border-line{\r\n    border-bottom: 1px solid rgba(255, 255, 255, 0.15);\r\n}\r\n.border-line-top{\r\n    border-top: 1px solid rgba(255, 255, 255, 0.15);\r\n}\r\n.bord-left{\r\n    border-left: 1px solid rgba(255, 255, 255, 0.15);\r\n}\r\n.pad{\r\n    padding-top: 35px;\r\n}\r\n.nav-btn{\r\n    color: #E79B07;\r\n    font-weight: 600;\r\n    font-size: 30px;\r\n}\r\n.nav-bg{\r\n    background-color: rgba(6, 3, 20, 0.877);\r\n}\r\n.font_one{\r\n    font-family: \"MagistralTT\";\r\n    font-weight: 500;\r\n}\r\n.font_two{\r\n    font-family: \"MagistralTT\";\r\n    font-weight: 800;\r\n}\r\n.font_three{\r\n    font-family: \"RobotoBold\";\r\n    font-weight: 600;\r\n}\r\n.small{\r\n    font-size: 14px;\r\n    color: white;\r\n}\r\n.ultra-light{\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n    font-family: \"RobotoRegular\";\r\n}\r\n.roboto{\r\n    font-weight: 500;\r\n    font-family: \"MagistralTT-Bold\";\r\n}\r\np{\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n.textt {\r\n    text-align: center;\r\n}\r\n.li{\r\n    color: rgba(134, 131, 124, 0.336);\r\n}\r\n.link{\r\n    font-size: 14px !important;\r\n}\r\n.link:hover{\r\n    color: #E79B07 !important;\r\n    border-bottom: 1px solid rgba(231, 156, 7, 0.397);\r\n}\r\n.pad{\r\n    padding-top: 40px;\r\n    padding-bottom: 40px;\r\n}\r\n.lit-btn{\r\n    background-color:#E79B07;\r\n    border-radius: 25px;\r\n    border: 1px solid rgb(250, 173, 18);\r\n    display: inline-block;\r\n    line-height: 40px;\r\n    font-weight: 500; \r\n}\r\n.lit-btn:hover, .lit-btn-a:hover{\r\n    border: 1px solid rgba(216, 211, 200, 0.801);\r\n}\r\n.gold{\r\n    color: rgb(175, 123, 20) !important;\r\n}\r\n.ultra-light{\r\n    font-size: 13px !important;\r\n    font-weight: 500 !important;\r\n    font-family: \"RobotoRegular\" !important;\r\n}\r\n.new{\r\n    position:absolute;\r\n    top: -10px;\r\n    left: 65px;\r\n    background-image: url('180099751.1cb482dbb5205459ef2d.jpg');\r\n    background-position: 60%;\r\n}\r\n.moving{\r\n    position:absolute;\r\n    bottom: -19px;\r\n    left: 72px;\r\n    background-image: url('180099751.1cb482dbb5205459ef2d.jpg');\r\n    background-position: center;\r\n}\r\n.padd-let{\r\n    padding-left: 28px !important;\r\n}\r\n@media(min-width: 360px ){\r\n    .new{\r\n        position:absolute;\r\n        top: -20px;\r\n        left: 66px;\r\n    }\r\n    .moving{\r\n        position:absolute;\r\n        bottom: -19px;\r\n        left: 72px;\r\n    }\r\n    .padd-let{\r\n        padding-left: 38px !important;\r\n    }\r\n}\r\n@media (min-width:600px){\r\n    .new{\r\n        position:absolute;\r\n        top: -20px;\r\n        left: 98px;\r\n    }\r\n    .moving{\r\n        position:absolute;\r\n        bottom: -19px;\r\n        left: 126px;\r\n    }\r\n    .padd-let{\r\n        padding-left: 68px !important;\r\n    }\r\n}\r\n@media (min-width:768px){\r\n    .new{\r\n        position:absolute;\r\n        top: -20px;\r\n        left: 198px;\r\n    }\r\n    .moving{\r\n        position:absolute;\r\n        bottom: -19px;\r\n        left: 227px;\r\n    }\r\n    .padd-let{\r\n        padding-left: 58px !important;\r\n    }\r\n}\r\n@media (min-width:1000px){\r\n    .new{\r\n        position:absolute;\r\n        top: -16px;\r\n        left: 168px;\r\n    }\r\n    .moving{\r\n        position:absolute;\r\n        bottom: -19px;\r\n        left: 137px;\r\n    }\r\n    .padd-let{\r\n        padding-left: 38px !important;\r\n    }\r\n}\r\n@media (min-width:1280px){\r\n    .new{\r\n        position:absolute;\r\n        top: -16px;\r\n        left: 180px;\r\n    }\r\n    .moving{\r\n        position:absolute;\r\n        bottom: -19px;\r\n        left: 179px;\r\n    }\r\n    .padd-let{\r\n        padding-left: 38px !important;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"universe\">\n  <div class=\"dots\">\n    <div class=\"container px-4\">\n      <div class=\"row pad\">\n        <div class=\"col-12 col-md-5 px-0 temp\">\n          <div class=\"two-dots px-3  py-3\">\n            <div class=\"row\">\n              <div class=\"col-12 pl-5\">\n                <!--Logo Area-->\n                <a [routerLink]=\"['/user']\" routerLinkActive=\"active\">\n                  <img src=\"../assets/images/logo.png\" class=\"size\">\n                  <h4 class=\"text-white\">Seap<span class=\"chain\">Wallet</span></h4>\n                </a>\n              </div>\n            </div>\n            <div class=\"row py-4\">\n              <div class=\"col-12 col-lg-10 pt-5 mr-auto ml-auto\">\n                <h5 class=\"text-white logo-text ml-md-3 pl-lg-5\">We are Professionals</h5>\n                <p class=\"ultra-light middle\">\n                    Seap Wallet is a new generation of decentralized digital currency\n                    exchange, creation and proper payment gateway solutions.\n                </p>\n              </div>\n            </div>\n            <div class=\"row pt-5\">\n              <div class=\"col-12\">\n                <ul>\n                  <li class=\"py-2\">\n                    <a href=\"#\">Create your payment account</a>\n                  </li>\n                  <li class=\"py-2\">\n                    <a href=\"#\">Free fluid payment</a>\n                  </li>\n                  <li class=\"py-2\">\n                    <a href=\"#\">Enjoy online payment security</a>\n                  </li>\n                  <li class=\"py-2\">\n                    <a href=\"#\">Share with friends</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n        <div class=\"col-12 col-md-7 py-3 off-white\">\n          <div class=\"pb-5\">\n            <h3>\n              <a (click)=\"moveToLogin()\" class=\"blue\">Login</a>\n              <a href=\"#\" class=\"grey\"> / Sign up</a>\n            </h3>\n          </div>\n          <div class=\"pt-3\">\n            <h4>Hey there! Welcome Here</h4>\n            <p class=\"pb-4 text-dark ultra-light\">Enter your sign up details below:</p>\n              <form [formGroup]=\"registerForm\">\n                  <div class=\"form-row\">\n                    <div class=\"col-11 mr-auto ml-auto ultra-medium\">\n                      <label for=\"Email\" class=\"tx\">Your Name</label>\n                      <input formControlName=\"name\" type=\"text\" class=\"form-control line-up my-1\" placeholder=\"\">\n                    </div>\n                    <div class=\"col-11 mr-auto ml-auto ultra-medium\">\n                      <label for=\"Password\" class=\"mt-2\">Your Username</label>\n                      <input formControlName=\"username\" type=\"text\" class=\"form-control line-up my-1\" placeholder=\"\">\n                    </div>\n                    <div class=\"col-11 mr-auto ml-auto ultra-medium\">\n                      <label for=\"Password\" class=\"mt-2\">Password</label>\n                      <input formControlName=\"password\" type=\"password\" class=\"form-control line-up my-1\" placeholder=\"\">\n                    </div>\n                    <div class=\"col-11 mr-auto ml-auto ultra-medium\">\n                      <label for=\"Password\" class=\"mt-2\">Confirm Password</label>\n                      <input formControlName=\"cpass\" type=\"password\" class=\"form-control line-up my-1\" placeholder=\"\">\n                    </div>\n                    <div class=\"col-11 mr-auto ml-auto ultra-medium\">\n                      <label for=\"Password\" class=\"mt-2\">Your Email</label>\n                      <input formControlName=\"email\" type=\"text\" class=\"form-control line-up my-1\" placeholder=\"\">\n                    </div>\n                    <div class=\"col-11 mr-auto ml-auto ultra-medium\">\n                      <label for=\"Password\" class=\"mt-2\">Confirm Email</label>\n                      <input formControlName=\"cmail\" type=\"text\" class=\"form-control line-up my-1\" placeholder=\"\">\n                    </div>\n                      <div class=\"col-12 text-right pr-5\">\n                        <a href=\"#\" class=\"ultra-light text-dark get\">\n                         <input type=\"checkbox\"> I agree with <a href=\"#\" class=\"ultra-light nice text-dark text-primary\">terms and conditons</a>\n                        </a>\n                      </div>\n                  <div class=\"col-6 col-sm-5 col-md-6 col-lg-5 mr-auto ml-auto pl-lg-5 py-4\">\n                    <a class=\"px-5 text-white lit-btn\" (click)=\"register()\" (click)=\"clearForm()\">\n                      REGISTER\n                    </a>                                                                                                                                                                                                                                                                                                                                                                                                        \n                  </div>\n                </div>\n                </form>\n          </div>\n        </div>\n      </div>\n    </div>  \n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("./src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
        this.registerForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
            username: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
            cpass: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required]),
            cmail: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required])
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (!this.registerForm.valid || (this.registerForm.controls.password.value != this.registerForm.controls.cpass.value) || (this.registerForm.controls.email.value != this.registerForm.controls.cmail.value)) {
            console.log('Invalid Form');
            return;
        }
        this._userService.register(JSON.stringify(this.registerForm.value))
            .subscribe(function (data) { console.log(data); _this._router.navigate(['/login']); }, function (error) { return console.error(error); });
        //console.log(JSON.stringify(this.registerForm.value));
    };
    RegisterComponent.prototype.moveToLogin = function () {
        this._router.navigate(['/login']);
    };
    RegisterComponent.prototype.clearForm = function () {
        this.registerForm.reset();
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
    }
    UserService.prototype.register = function (body) {
        return this._http.post('http://127.0.0.1:3000/users/register', body, {
            observe: 'body',
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().append('Content-Type', 'application/json')
        });
    };
    UserService.prototype.login = function (body) {
        return this._http.post('http://127.0.0.1:3000/users/login', body, {
            observe: 'body',
            withCredentials: true,
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().append('Content-Type', 'application/json')
        });
    };
    UserService.prototype.user = function () {
        return this._http.get('http://127.0.0.1:3000/users/user', {
            observe: 'body',
            withCredentials: true,
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().append('Content-Type', 'application/json')
        });
    };
    UserService.prototype.logout = function () {
        return this._http.get('http://127.0.0.1:3000/users/logout', {
            observe: 'body',
            withCredentials: true,
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().append('Content-Type', 'application/json')
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/userhome/userhome.component.css":
/***/ (function(module, exports) {

module.exports = "\r\np, h1, h2, h3, h4, h5{\r\n    color: white;\r\n}\r\na{\r\n    color: white !important;\r\n    font-size: 16px !important;\r\n    font-family: \"RobotoMedium\";\r\n}\r\na:hover{\r\n    text-decoration: none !important;\r\n}\r\n.text{\r\n    font-size: 35px;\r\n}\r\n.chain{\r\n    color: #E79B07;\r\n}\r\n.logo-text{\r\n    font-family:'MagistralTT-Bold';\r\n}\r\n.pad-but{\r\n    padding: 20px 20px 50px;\r\n}\r\n.link{\r\n    color:white;\r\n    text-decoration: none;\r\n    -webkit-transition: all ease-in-out;\r\n    transition: all ease-in-out;\r\n}\r\nlink:hover{\r\n    color: blue;\r\n    text-decoration: underline;\r\n}\r\n.color{\r\n    background-color: rgba(245, 245, 220, 0);\r\n    border-radius: 25px;\r\n    outline: none;\r\n    border: none;\r\n    display: inline-block;\r\n    line-height: 40px;\r\n    font-family: \"MagistralTT\";\r\n    font-weight: 700;\r\n}\r\n.color:hover{\r\n    background-color: #E79B07;\r\n    border-radius: 25px;\r\n    outline: none;\r\n    border: none;\r\n    display: inline-block;\r\n    line-height: 40px;\r\n}\r\n.border-line{\r\n    border-bottom: 1px solid rgba(255, 255, 255, 0.15);\r\n}\r\n.border-line-top{\r\n    border-top: 1px solid rgba(255, 255, 255, 0.15);\r\n}\r\n.bord-left{\r\n    border-left: 1px solid rgba(255, 255, 255, 0.15);\r\n}\r\n.pad{\r\n    padding-top: 35px;\r\n}\r\n.nav-btn{\r\n    color: #E79B07;\r\n    font-weight: 600;\r\n    font-size: 30px;\r\n}\r\n.nav-bg{\r\n    background-color: rgba(6, 3, 20, 0.877);\r\n}\r\n.font_one{\r\n    font-family: \"MagistralTT\";\r\n    font-weight: 500;\r\n}\r\n.font_two{\r\n    font-family: \"MagistralTT\";\r\n    font-weight: 800;\r\n}\r\n.font_three{\r\n    font-family: \"RobotoBold\";\r\n    font-weight: 600;\r\n}\r\n.color-btn{\r\n    background-color:#E79B07;\r\n    border-radius: 25px;\r\n    outline: none;\r\n    border: none;\r\n    display: inline-block;\r\n    line-height: 40px;\r\n    font-family: \"MagistralTT\";\r\n    font-weight: 700; \r\n}\r\n.color-btn:hover {\r\n    background-color: rgb(165, 119, 27);\r\n}\r\n.trans{\r\n    background-color: rgba(168, 167, 163, 0);\r\n}\r\n.small{\r\n    font-size: 14px;\r\n    color: white;\r\n}\r\n.ultra-light{\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n    font-family: \"RobotoRegular\";\r\n}\r\n.roboto{\r\n    font-weight: 500;\r\n    font-family: \"MagistralTT-Bold\";\r\n}\r\np{\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n.icon{\r\n    color: #E79B07;\r\n}\r\n.light{\r\n    color: rgba(255, 255, 255, 0.15);\r\n}\r\n.huge{\r\n    font-size: 90px;\r\n    font-weight: 900;\r\n}\r\n.huge-b{\r\n    font-size: 80px;\r\n    font-weight: 900;\r\n}\r\n.card-m{\r\n    background-color:#E79B07;\r\n    border-radius: 50px;\r\n    outline: none;\r\n    border: none;\r\n    display: inline-block;\r\n    line-height: 40px;\r\n    font-weight: 700; \r\n}\r\n.card-a{\r\n    background-color:rgba(189, 131, 15, 0.534);\r\n    border-radius: 50px;\r\n    outline: none;\r\n    border: none;\r\n    display: inline-block;\r\n    line-height: 40px;\r\n    font-weight: 700; \r\n    position: relative;\r\n}\r\n.card-a:hover{\r\n    background-color:#E79B07; \r\n}\r\n.dark-round{\r\n    background-color: rgba(18, 16, 26, 0.37);\r\n    border-radius: 50px;\r\n    outline: none;\r\n    border: none;\r\n    display: inline-block;\r\n}\r\n.line{\r\n    border: 2px solid #E79B07 !important;\r\n    border-radius: 25px !important;\r\n}\r\n.line-up{\r\n    color: white !important;\r\n    background-color: #252a3360 !important;\r\n    border: 1px solid rgba(231, 156, 7, 0.568) !important;\r\n    border-radius: 25px !important;\r\n}\r\n.line-up:focus{\r\n    background-color: #252a33 !important;\r\n    outline: 0 !important;\r\n}\r\n.gold{\r\n    color:#E79B07; \r\n    font-size: 41px;\r\n    font-weight: 600;\r\n}\r\n.gold-a{\r\n    color:#E79B07; \r\n    font-size: 30px;\r\n    font-weight: 100 !important;\r\n}\r\n.gold-b{\r\n    color:#E79B07; \r\n    font-size: 15px;\r\n    font-weight: 600 !important;\r\n}\r\n.lit-btn{\r\n    background-color:#E79B07;\r\n    border-radius: 25px;\r\n    border: 1px solid rgb(250, 173, 18);\r\n    display: inline-block;\r\n    line-height: 40px;\r\n    font-weight: 500; \r\n}\r\n.lit-btn-a{\r\n    background-color:(189, 131, 15, 0.534);\r\n    border-radius: 25px;\r\n    border: 1px solid rgb(250, 173, 18);\r\n    display: inline-block;\r\n    line-height: 40px;\r\n    font-weight: 500; \r\n}\r\n.lit-btn:hover, .lit-btn-a:hover{\r\n    border: 1px solid rgba(216, 211, 200, 0.801);\r\n}\r\n.textt {\r\n    text-align: center;\r\n}\r\n.space{\r\n    padding-top: 100px;\r\n    padding-left: 50px !important;\r\n    margin-left: 20px; \r\n}\r\n.space-top{\r\n    padding-top: 120px;\r\n    padding-left:20px !important; \r\n}\r\n.s{\r\n    padding-top: 300px; \r\n}\r\n.li{\r\n    color: rgba(134, 131, 124, 0.336);\r\n}\r\n.link{\r\n    font-size: 14px !important;\r\n}\r\n.link:hover{\r\n    color: #E79B07 !important;\r\n    border-bottom: 1px solid rgba(231, 156, 7, 0.397);\r\n}\r\n/*-------------LOGO Positioning---------------*/\r\n.logo-pad{\r\n    margin-top: 20px;\r\n    margin-bottom: 30px;\r\n}\r\n.logo-pos-one{\r\n    position: absolute;\r\n    top: 80px;\r\n    left: 160px;\r\n}\r\n.logo-pos-two{\r\n    position: absolute;\r\n    top: 72px;\r\n    left: 20px !important;\r\n}\r\n.logo-pos-three{\r\n    position: absolute;\r\n    top: 20px;\r\n    left: 70px;\r\n}\r\n.logo-pos-four{\r\n    position: absolute;\r\n    top: 43px;\r\n    left: 95px;\r\n}\r\n.logo-pos-five{\r\n    position: absolute;\r\n    top: 57px;\r\n    left: 111px;\r\n}\r\n.logo-pos-six{\r\n    position: absolute;\r\n    top: 27px;\r\n    left: 79px;\r\n}\r\n.logo-pos-sev{\r\n    position: absolute;\r\n    top: 24px;\r\n    left: 77px;\r\n}\r\n.logo-pos-eig{\r\n    position: absolute;\r\n    top: 74px;\r\n    left: 134px;\r\n}\r\n.opac{\r\n    background-color: rgba(224, 158, 26, 0.623);\r\n    padding: 126px;\r\n    border-radius: 50px;\r\n}\r\n/*----------------Responsive Styling--------------*/\r\n.card-v{\r\n    background-color:#E79B07;\r\n    border-radius: 50px;\r\n    outline: none;\r\n    border: none;\r\n    display: inline-block;\r\n}\r\n.card-x{\r\n    background-color:rgba(231, 155, 7, 0.42);\r\n}\r\n.card-x:hover{\r\n    background-color: #E57100;\r\n}\r\n.card-y{\r\n    background-color: #E57100;\r\n}\r\n.card-w{\r\n    background-color:rgb(229, 113, 0, 0.5);\r\n    -webkit-border-radius: 50px;\r\n    -webkit-border-bottom-right-radius: 0px;\r\n    -webkit-border-bottom-left-radius:  0px;\r\n    border-radius: 50px;\r\n    border-bottom-right-radius: 0px;\r\n    border-bottom-left-radius:  0px;\r\n}\r\n.card-w:hover{\r\n    background-color: #E57100;\r\n}\r\n.card-z{\r\n    background-color:rgba(231, 155, 7, 0.42);\r\n    -webkit-border-radius: 50px;\r\n    -webkit-border-top-right-radius: 0px;\r\n    -webkit-border-top-left-radius:  0px;\r\n    border-radius: 50px;\r\n    border-top-right-radius: 0px;\r\n    border-top-left-radius:  0px;\r\n}\r\n.card-z:hover{\r\n    background-color: #E57100;\r\n}\r\n.decrease-one{\r\n    width: 162px;\r\n}\r\n.decrease-two{\r\n    width: 130px;\r\n}\r\n.decrease-three{\r\n    width: 98px;\r\n}\r\n.decrease-four{\r\n    width: 160px;\r\n}\r\n.decrease-five{\r\n    width: 50px;\r\n}\r\n.decrease{\r\n    width: 250px;\r\n}\r\n.bit{\r\n    width: 20%;\r\n}\r\n.margin{\r\n    margin-top: 50px;\r\n}\r\n.w{\r\n    width: 280px;\r\n}\r\n.pos-one{\r\n    position: absolute;\r\n    top: 10px;\r\n    left: 100px;\r\n}\r\n.pos-two{\r\n    position: absolute;\r\n    top: 65px;\r\n    left: 50px;\r\n}\r\n.pos-three{\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 35px;\r\n}\r\n.pos-four{\r\n    position: absolute;\r\n    top: 65px;\r\n    right: 10px;\r\n}\r\n.two{\r\n    position: absolute;\r\n    left: 20px;\r\n    top: 80px;\r\n}\r\n.three{\r\n    position: absolute;\r\n    left: 20px;\r\n    top: 43px;\r\n}\r\n.four{\r\n    position: absolute;\r\n    left: 20px;\r\n    top: 90px;\r\n}\r\n.card-b{\r\n    border-radius: 100%;\r\n    outline: none;\r\n    border: 3px solid rgba(189, 131, 15, 0.534);\r\n    display: inline-block;\r\n    padding: 40%;\r\n    position: relative;\r\n    left: 0px;\r\n}\r\n.card-c{\r\n    border-radius: 100%;\r\n    outline: none;\r\n    border: 3px solid rgba(189, 131, 15, 0.534);\r\n    display: inline-block;\r\n    padding: 40%;\r\n    position: relative;\r\n    left: 0px;\r\n}\r\n@media(min-width:360px) {\r\n    .pos-one{\r\n        position: absolute;\r\n        top: 10px;\r\n        left: 120px;\r\n    }\r\n    .pos-two{\r\n        position: absolute;\r\n        top: 65px;\r\n        left: 50px;\r\n    }\r\n    \r\n    .pos-three{\r\n        position: absolute;\r\n        top: 10px;\r\n        right: 35px;\r\n    }\r\n    .pos-four{\r\n        position: absolute;\r\n        top: 65px;\r\n        right: 10px;\r\n    }\r\n    .decrease-one{\r\n    width: 160px;\r\n    }\r\n    .decrease-four{\r\n        width: 170px;\r\n    }\r\n    .decrease-five{\r\n        width: 60px;\r\n    }\r\n    .logo-pos-one{\r\n        position: absolute;\r\n        top: 80px;\r\n        left: 160px;\r\n    }\r\n    .logo-pos-two{\r\n        position: absolute;\r\n        top: 72px;\r\n        left: 20px !important;\r\n    }\r\n    .logo-pos-three{\r\n        position: absolute;\r\n        top: 20px;\r\n        left: 70px;\r\n    }\r\n    .logo-pos-four{\r\n        position: absolute;\r\n        top: 55px;\r\n        left: 112px;\r\n    }\r\n    .logo-pos-five{\r\n        position: absolute;\r\n        top: 70px;\r\n        left: 128px;\r\n    }\r\n    .logo-pos-six{\r\n        position: absolute;\r\n        top: 35px;\r\n        left: 95px;\r\n    }\r\n    .logo-pos-sev{\r\n        position: absolute;\r\n        top: 20px;\r\n        left: 78px;\r\n    }\r\n    .logo-pos-eig{\r\n        position: absolute;\r\n        top: 80px;\r\n        left: 150px;\r\n    }\r\n    .w{\r\n        width: 340px;\r\n    }\r\n    .decrease-one{\r\n        width: 200px;\r\n    }\r\n    .decrease{\r\n        width: 300px;\r\n    }\r\n    .two{\r\n        position: absolute;\r\n        left: 20px;\r\n        top: 80px;\r\n    }\r\n    .three{\r\n        position: absolute;\r\n        left: 18px;\r\n        top: 43px;\r\n    }\r\n    .four{\r\n        position: absolute;\r\n        left: 18px;\r\n        top: 90px;\r\n    }\r\n    \r\n}\r\n@media (min-width: 412px) {\r\n    .dex-one{\r\n        width: 250px;\r\n    }\r\n    .decrease-two{\r\n        width: 180px;\r\n    }\r\n    .decrease-three{\r\n        width: 140px;\r\n    }\r\n    .decrease-four{\r\n        width: 220px;\r\n    }\r\n    .decrease-five{\r\n        width: 60px;\r\n    }\r\n    .logo-pos-one{\r\n        position: absolute;\r\n        top: 100px;\r\n        left: 212px;\r\n    }\r\n    .logo-pos-two{\r\n        position: absolute;\r\n        top: 95px;\r\n        left: -8px !important;\r\n    }\r\n    .logo-pos-three{\r\n        position: absolute;\r\n        top: 40px;\r\n        left: 102px;\r\n    }\r\n    .logo-pos-four{\r\n        position: absolute;\r\n        top: 50px;\r\n        left: 115px;\r\n    }\r\n    .logo-pos-five{\r\n        position: absolute;\r\n        top: 68px;\r\n        left: 135px;\r\n    }\r\n    .logo-pos-six{\r\n        position: absolute;\r\n        top: 30px;\r\n        left: 95px;\r\n    }\r\n    .logo-pos-sev{\r\n        position: absolute;\r\n        top: 15px;\r\n        left: 76px;\r\n    }\r\n    .logo-pos-eig{\r\n        position: absolute;\r\n        top: 98px;\r\n        left: 175px;\r\n    }\r\n    \r\n }\r\n@media (min-width: 576px) {\r\n    .card-v{\r\n        background-color:#E79B07;\r\n        border-radius: 50px;\r\n        outline: none;\r\n        border: none;\r\n        display: inline-block;\r\n    }\r\n    \r\n    .card-w{\r\n        background-color:rgb(229, 113, 0, 0.5);\r\n        -webkit-border-radius: 50px;\r\n        -webkit-border-bottom-right-radius: 0px;\r\n        -webkit-border-bottom-left-radius:  0px;\r\n        -webkit-border-top-right-radius:  0px;\r\n        border-radius: 50px;\r\n        border-bottom-right-radius: 0px;\r\n        border-bottom-left-radius:  0px;\r\n        border-top-right-radius:  0px;\r\n    }\r\n    .card-w:hover{\r\n        background-color: #E57100;\r\n    }\r\n    .card-x{\r\n        background-color:rgba(231, 155, 7, 0.42);\r\n        border-top-right-radius:  50px;\r\n    }\r\n    .card-x:hover{\r\n        background-color: #E57100;\r\n    }\r\n    .card-y{\r\n        background-color: #E57100;\r\n        border-bottom-left-radius:  50px;\r\n    }\r\n    .card-z{\r\n        background-color:rgba(231, 155, 7, 0.42);\r\n        -webkit-border-radius: 50px;\r\n        -webkit-border-top-right-radius: 0px;\r\n        -webkit-border-top-left-radius:  0px;\r\n        border-radius: 50px;\r\n        border-top-right-radius: 0px;\r\n        border-top-left-radius:  0px;\r\n        border-bottom-left-radius:  0px;\r\n    }\r\n    .card-z:hover{\r\n        background-color: #E57100;\r\n    }\r\n    .w{\r\n        width: 520px;\r\n    }\r\n    .decrease{\r\n        width: 470px;\r\n    }\r\n\r\n    .decrease-one{\r\n        width: 260px;\r\n    }\r\n    .decrease-two{\r\n        width: 130px;\r\n    }\r\n    .decrease-three{\r\n        width: 98px;\r\n    }\r\n    .decrease-four{\r\n        width: 180px;\r\n    }\r\n    .decrease-five{\r\n        width: 60px;\r\n    }\r\n    .card-b{\r\n        border-radius: 100%;\r\n        outline: none;\r\n        border: 3px solid rgba(189, 131, 15, 0.534);\r\n        display: inline-block;\r\n        padding: 40%;\r\n        position: relative;\r\n        left: 0px;\r\n    }\r\n    .card-c{\r\n        border-radius: 100%;\r\n        outline: none;\r\n        border: 3px solid rgba(189, 131, 15, 0.534);\r\n        display: inline-block;\r\n        padding: 40%;\r\n        position: relative;\r\n        left: 0px;\r\n    }\r\n    .side{\r\n        padding-left: 60px;\r\n        padding-right: 160px;\r\n    }\r\n    .side-a{\r\n        padding-left: 160px;\r\n        padding-right: 60px;\r\n    }\r\n\r\n    /*-------------LOGO Positioning---------------*/\r\n    .logo-pad{\r\n        margin-top: 20px;\r\n        margin-bottom: 30px;\r\n    }\r\n    .logo-pos-one{\r\n        position: absolute;\r\n        top: 120px;\r\n        left: 248px;\r\n    }\r\n    .logo-pos-two{\r\n        position: absolute;\r\n        top: 115px;\r\n        left: -10px !important;\r\n    }\r\n    .logo-pos-three{\r\n        position: absolute;\r\n        top: 40px;\r\n        left: 132px;\r\n    }\r\n    .logo-pos-four{\r\n        position: absolute;\r\n        top: 110px;\r\n        left: 202px;\r\n    }\r\n    .logo-pos-five{\r\n        position: absolute;\r\n        top: 125px;\r\n        left: 217px;\r\n    }\r\n    .logo-pos-six{\r\n        position: absolute;\r\n        top: 85px;\r\n        left: 179px;\r\n    }\r\n    .logo-pos-sev{\r\n        position: absolute;\r\n        top: 46px;\r\n        left: 138px;\r\n    }\r\n    .logo-pos-eig{\r\n        position: absolute;\r\n        top: 140px;\r\n        left: 240px;\r\n    }\r\n    \r\n }\r\n@media (min-width: 768px) {\r\n    .w{\r\n        width: 710px;\r\n    }\r\n    .pos-one{\r\n        position: absolute;\r\n        top: 30px;\r\n        left: 120px;\r\n    }\r\n    .pos-two{\r\n        position: absolute;\r\n        top: 100px;\r\n        left: 50px;\r\n    }\r\n    .pos-three{\r\n        position: absolute;\r\n        top: 30px;\r\n        right: 5px;\r\n    }\r\n    .pos-four{\r\n        position: absolute;\r\n        top: 100px;\r\n        right: 5px;\r\n    }\r\n\r\n    .decrease-one{\r\n        width: 300px;\r\n    }\r\n    .one{\r\n        width: 280px;\r\n    }\r\n    .decrease-two{\r\n        width: 180px;\r\n    }\r\n    .decrease-three{\r\n        width: 138px;\r\n    }\r\n    .decrease-four{\r\n        width: 250px;\r\n    }\r\n    .decrease-five{\r\n        width: 80px;\r\n    }\r\n\r\n    /*-------------LOGO Positioning---------------*/\r\n    .logo-pad{\r\n        margin-top: 20px;\r\n        margin-bottom: 30px;\r\n    }\r\n    .logo-pos-one{\r\n        position: absolute;\r\n        top: 185px;\r\n        left: 360px;\r\n    }\r\n    .logo-pos-two{\r\n        position: absolute;\r\n        top: 170px;\r\n        left: 25px !important;\r\n    }\r\n    .logo-pos-three{\r\n        position: absolute;\r\n        top: 85px;\r\n        left: 210px;\r\n    }\r\n    .logo-pos-four{\r\n        position: absolute;\r\n        top: 145px;\r\n        left: 272px;\r\n    }\r\n    .logo-pos-five{\r\n        position: absolute;\r\n        top: 168px;\r\n        left: 293px;\r\n    }\r\n    .logo-pos-six{\r\n        position: absolute;\r\n        top: 110px;\r\n        left: 240px;\r\n    }\r\n    .logo-pos-sev{\r\n        position: absolute;\r\n        top: 80px;\r\n        left: 200px;\r\n    }\r\n    .logo-pos-eig{\r\n        position: absolute;\r\n        top: 190px;\r\n        left: 320px;\r\n    }\r\n    .card-b{\r\n        border-radius: 100%;\r\n        outline: none;\r\n        border: 3px solid rgba(189, 131, 15, 0.534);\r\n        display: inline-block;\r\n        padding: 40%;\r\n        position: relative;\r\n        left: 0px;\r\n    }\r\n    .card-c{\r\n        border-radius: 100%;\r\n        outline: none;\r\n        border: 3px solid rgba(189, 131, 15, 0.534);\r\n        display: inline-block;\r\n        padding: 40%;\r\n        position: relative;\r\n        left: 0px;\r\n    }\r\n    .side{\r\n        padding-left: 60px;\r\n        padding-right: 160px;\r\n    }\r\n    .side-a{\r\n        padding-left: 160px;\r\n        padding-right: 60px;\r\n    }\r\n }\r\n@media (min-width: 992px) {\r\n\r\n    .w{\r\n        width: 450px;\r\n    }\r\n    .decrease{\r\n        width: 500px;\r\n    }\r\n    .decrease-two{\r\n        width: 220px;\r\n    }\r\n    .decrease-three{\r\n        width: 180px;\r\n    }\r\n    .logo-pos-one{\r\n        position: absolute;\r\n        top: 80px;\r\n        left: 220px;\r\n    }\r\n    .logo-pos-two{\r\n        position: absolute;\r\n        top: 83px;\r\n        left: -50px !important;\r\n    }\r\n    .logo-pos-three{\r\n        position: absolute;\r\n        top: 20px;\r\n        left: 70px;\r\n    }\r\n    .logo-pos-four{\r\n        position: absolute;\r\n        top: 58px;\r\n        left: 131px;\r\n    }\r\n    .logo-pos-five{\r\n        position: absolute;\r\n        top: 78px;\r\n        left: 150px;\r\n    }\r\n    .logo-pos-six{\r\n        position: absolute;\r\n        top: 42px;\r\n        left: 115px;\r\n    }\r\n    .logo-pos-sev{\r\n        position: absolute;\r\n        top: 18px;\r\n        left: 90px;\r\n    }\r\n    .logo-pos-eig{\r\n        position: absolute;\r\n        top: 105px;\r\n        left: 200px;\r\n    }\r\n }\r\n@media (min-width: 1024px) {\r\n    .pad-but{\r\n        padding: 50px 30px 510px 30px;\r\n    }\r\n    .card-v{\r\n        background-color:#E79B07;\r\n        border-radius: 50px;\r\n        outline: none;\r\n        border: none;\r\n        display: inline-block;\r\n    }\r\n    .card-x{\r\n        background-color:rgba(231, 155, 7, 0.42);\r\n        border-top-right-radius: 0px;\r\n    }\r\n    .card-x:hover{\r\n        background-color: #E57100;\r\n        border-top-right-radius: 0px;\r\n\r\n    }\r\n    .card-y{\r\n        background-color: #E57100;\r\n        border-bottom-left-radius:  0px;\r\n    }\r\n    .card-w{\r\n        background-color:rgb(229, 113, 0, 0.5);\r\n        -webkit-border-radius: 50px;\r\n        -webkit-border-bottom-right-radius: 0px;\r\n        -webkit-border-bottom-left-radius:  0px;\r\n        border-radius: 50px;\r\n        border-bottom-right-radius: 0px;\r\n        border-bottom-left-radius:  0px;\r\n    }\r\n    .card-w:hover{\r\n        background-color: #E57100;\r\n    }\r\n    .card-z{\r\n        background-color:rgba(231, 155, 7, 0.42);\r\n        -webkit-border-radius: 50px;\r\n        -webkit-border-top-right-radius: 0px;\r\n        -webkit-border-top-left-radius:  0px;\r\n        border-radius: 50px;\r\n        border-top-right-radius: 0px;\r\n        border-top-left-radius:  0px;\r\n    }\r\n    .card-z:hover{\r\n        background-color: #E57100;\r\n    }\r\n    .margin{\r\n        margin-top: 0px;\r\n    }\r\n    .decrease{\r\n        width: 500px;\r\n    }\r\n    .decrease{\r\n        width: 470px;\r\n    }\r\n    .one{\r\n        widows: 350px;\r\n    }\r\n    .dex-one{\r\n        width: 480px !important;\r\n    }\r\n    \r\n    .decrease-one{\r\n        width: 440px;\r\n    }\r\n    .decrease-two{\r\n        width: 250px;\r\n    }\r\n    .decrease-three{\r\n        width: 380px;\r\n    }\r\n    .decrease-four{\r\n        width: 450px;\r\n    }\r\n    .decrease-five{\r\n        width: 127px;\r\n    }\r\n\r\n    /*---------LOGO POSITIONING------*/\r\n    .logo-pad{\r\n        margin-top: 60px;\r\n        margin-bottom: 110px;\r\n    }\r\n    .logo-pos-one{\r\n        position: absolute;\r\n        top: 80px;\r\n        left: 300px;\r\n    }\r\n    .logo-pos-two{\r\n        position: absolute;\r\n        top: 83px;\r\n        left: -130px !important;\r\n    }\r\n    .logo-pos-three{\r\n        position: absolute;\r\n        top: -10px;\r\n        left: 60px;\r\n    }\r\n    .logo-pos-four{\r\n        position: absolute;\r\n        top: 72px;\r\n        left: 163px;\r\n    }\r\n    .logo-pos-five{\r\n        position: absolute;\r\n        top: 5px;\r\n        left: 100px;\r\n    }\r\n    .logo-pos-six{\r\n        position: absolute;\r\n        top: -23px;\r\n        left: 75px;\r\n    }\r\n    .logo-pos-sev{\r\n        position: absolute;\r\n        top: -49px;\r\n        left: 50px;\r\n    }\r\n    .logo-pos-eig{\r\n        position: absolute;\r\n        top: 105px;\r\n        left: 225px;\r\n    }\r\n    .card-b{\r\n        border-radius: 100%;\r\n        outline: none;\r\n        border: 3px solid rgba(189, 131, 15, 0.534);\r\n        display: inline-block;\r\n        padding: 40%;\r\n        position: relative;\r\n        left: 90px;\r\n    }\r\n    .card-c{\r\n        border-radius: 100%;\r\n        outline: none;\r\n        border: 3px solid rgba(189, 131, 15, 0.534);\r\n        display: inline-block;\r\n        padding: 40%;\r\n        position: relative;\r\n        left: -30px;\r\n    }\r\n    .side{\r\n        padding-left: 60px;\r\n        padding-right: 160px;\r\n    }\r\n    .side-a{\r\n        padding-left: 160px;\r\n        padding-right: 40px;\r\n    }\r\n}\r\n@media(min-width:1280px){\r\n    .card-b{\r\n        border-radius: 100%;\r\n        outline: none;\r\n        border: 3px solid rgba(189, 131, 15, 0.534);\r\n        display: inline-block;\r\n        padding: 40%;\r\n        position: relative;\r\n        left: 170px;\r\n    }\r\n    .card-c{\r\n        border-radius: 100%;\r\n        outline: none;\r\n        border: 3px solid rgba(189, 131, 15, 0.534);\r\n        display: inline-block;\r\n        padding: 40%;\r\n        position: relative;\r\n        left: -170px;\r\n    }\r\n    .side{\r\n        padding-left: 60px;\r\n        padding-right: 160px;\r\n    }\r\n    .side-a{\r\n        padding-left: 160px;\r\n        padding-right: 60px;\r\n    }\r\n    .pad-but{\r\n        padding: 50px 30px 410px 30px;\r\n    }\r\n}\r\nbutton:focus{outline: 0 !important}"

/***/ }),

/***/ "./src/app/userhome/userhome.component.html":
/***/ (function(module, exports) {

module.exports = "<!--header-->\n<div class=\"universal\">\n  <div class=\"container-fluid head-border px-5 my-0 \">\n   <div class=\"row my-0 no-gutters\">\n     <div class=\"col-sm-2 col-lg-1 d-none d-sm-block \">\n       <a href=\"../seap/index.html\">\n           <div class=\"mt-2 ml-2 mb-1\" >\n             <img src=\"../../assets/images/logo.png\" height=\"60px\">\n           </div>\n         </a>\n       </div>\n       <div class=\"col-7 col-sm-5 col-lg-5 ml-0 pt-3 mr-auto text-bluee\">\n           <h4 class=\"mb-0\">\n             SEAP MFI\n           </h4>\n           <p class=\"mt-0\">\n             Development with Vision.\n           </p>\n     </div>\n           \n     <div>\n       <nav class=\"d-lg-none navbar navbar-dark p-0 ml-5 ml-sm-0 mr-0 mr-sm-3 mt-3\">\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggleExternalContent\" aria-controls=\"navbarToggleExternalContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon bg-dark \"></span>\n          </button>\n       </nav>\n     </div>\n\n     <!--display lg-none-->\n     <div class=\"col-12 pos-f-t d-lg-none\">\n      <div class=\"collapse\" id=\"navbarToggleExternalContent\">\n        <div class=\"p-4\">\n         <ul class=\"nav flex-column\">\n           <li class=\"nav-item m-border\"><a class=\"px-2 px-lg-0 mr-lg-3 mr-lg-0 link\" [routerLink]=\"['/login']\" routerLinkActive=\"active\"> LOGIN</a></li>\n           <li class=\"nav-item m-border\"><a class=\"px-2 px-lg-0 ml-lg-2 mr-lg-3 link\" href=\"#\"> CONTACT US </a></li>\n           <li class=\"nav-item m-border\"><a class=\"px-2 px-lg-0 ml-lg-2  mr-lg-3 link\" href=\"#\"> ABOUT </a></li>\n           <li class=\"nav-item\"><a class=\"px-2 px-lg-0 ml-lg-2  mr-lg-3 link\" [routerLink]=\"['/register']\" routerLinkActive=\"active\"> SIGN UP </a></li>\n         </ul>\n       </div>\n      </div>\n     </div>\n           \n     <!--display lg-only-->\n     <div class=\"d-none d-lg-block col-lg-6 pt-5 pb-2\">\n       <ul class=\"nav float-right\">\n         <li class=\"nav-item m-border\"><a class=\"px-2 px-lg-0 mr-lg-3 mr-lg-0 link\" [routerLink]=\"['/login']\" routerLinkActive=\"active\"> LOGIN</a></li>\n         <li class=\"nav-item m-border\"><a class=\"px-2 px-lg-0 ml-lg-2 mr-lg-3 link\" href=\"#\"> CONTACT US </a></li>\n         <li class=\"nav-item m-border\"><a class=\"px-2 px-lg-0 ml-lg-2  mr-lg-3 link\" href=\"#\"> ABOUT </a></li>\n         <li class=\"nav-item\"><a class=\"px-2 px-lg-0 ml-lg-2  mr-lg-3 link\" [routerLink]=\"['/register']\" routerLinkActive=\"active\"> SIGN UP </a></li>\n       </ul>\n     </div>\n   </div>\n </div>\n \n   \n \n <div class=\"mb-0\" >\n   <div class=\"container p-lg-4\">\n     <div class=\"row \">\n       <div class=\"col-12 d-lg-none\">\n         <img src=\"../../assets/images/mobile.jpg\" width=\"100%\">\n       </div>\n       <div class=\"col-12 col-lg-8\">\n        <div class=\"row no-gutters \">\n           <div class=\"col-12 col-lg-6 px-0 m-0 bg-dark d-none d-lg-block\">\n             <img src=\"../../assets/images/mobile.jpg\" width=\"100%\" height=\"303px\">\n           </div>\n            <div class=\"col-6 col-lg-3 p-0 box\" >\n             <a class=\"btn btn-green w-100 rounded-0 hov pt-3 pb-4 px-1 effect\" [routerLink]=\"['/wallet']\" routerLinkActive=\"active\"> \n               <span ><i class=\"fa fa-key font-size-1\"></i></span>\n               <p class=\"text-dark mt-4 mb-0 bold\" >Open Wallet Account</p>\n               <p class=\"text-white font mt-1\" >Mobile wallet </p>\n             </a>\n             <a class=\"effect btn btn-blue w-100 rounded-0 hov  pt-3 pb-4 px-1 box \" [routerLink]=\"['/request']\" routerLinkActive=\"active\">\n               <span ><i class=\"fa fa-credit-card-alt font-size-2\"></i></span>\n               <p class=\"text-dark mt-4 mb-0 bold-1\" >Request wallet card</p> \n               <p class=\"text-white  font mt-0\" >Get a card</p>  \n             </a>    \t\t\t\t\t\t\n           </div>\n       \n           <div class=\"col-6 col-lg-3 p-0 box\">\n            <a  class=\"btn btn-orange w-100 rounded-0 hov pt-3 pb-4 px-0 effect\" [routerLink]=\"['/loans']\" routerLinkActive=\"active\">\n              <span ><i class=\"fa fa-money font-size-1\"></i></span>\n              <p class=\"text-dark mt-4 mb-0 bold\" >Loans</p>\n              <p class=\"text-white font mt-1\" >Take loans</p>\n            </a>\n            <a class=\"btn btn-army w-100 rounded-0 hov pt-3 pb-4 px-0 effect\" [routerLink]=\"['/funds']\" routerLinkActive=\"active\">\n              <span ><i class=\"fa fa-download font-size-3\"></i></span>\n              <p class=\"text-dark mt-4 mb-0 bold\" >Fund Wallet</p>\n              <p class=\"text-white font mt-1\" >Pay into your Wallet</p>\n            </a>\n           </div>\n         </div>\n             \n         \n         <div class=\"row no-gutters\">\n                <div class=\"col-6 col-md-3 col-lg-3 p-0\">\n                 <a  class=\"btn btn-purple w-100 rounded-0 border hov  pt-3 pb-3 px-0 effect\" [routerLink]=\"['/bills']\" routerLinkActive=\"active\">\n                 <span ><i class=\"fa fa-shopping-cart font-size-1\"></i></span>\n                 <p class=\"text-white mt-4 mb-0 bold\" >Pay your Bills</p>\n                 <p class=\"text-white font mt-1\" >Utility Bills</p>\n               </a>\n                \n             </div>\n             \n               \n            \n             <div class=\"col-6 col-md-3 col-lg-3 p-0  \">\n                 <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n                 <div class=\"carousel-inner\">\n                   <div class=\"carousel-item active\">\n                     <a class=\"btn w-100 rounded-0 border white-hover pt-3 pb-2 px-0 effect\" [routerLink]=\"['/airtime']\" routerLinkActive=\"active\">\n                       <span ><img class=\"d-block ml-3\" height=\"50px\" width=\"30%\" src=\"../../assets/images/mtn.jpg\" alt=\"First slide\"></span>\n                       <p class=\"text-dark mt-4 mb-0 bold\" >Buy Airtime</p>\n                       <p class=\"text-white font mt-1\" >All Networks</p>\n                     </a>\n                   </div>\n                   <div class=\"carousel-item\">\n                     <a  class=\"btn  w-100 rounded-0 border white-hover pt-3 pb-2 px-0 effect\"  [routerLink]=\"['/airtime']\" routerLinkActive=\"active\">\n                       <span ><img class=\"d-block ml-3\" height=\"50px\" width=\"30%\" src=\"../../assets/images/Etisalat.jpg\" alt=\"Second slide\"></span>\n                       <p class=\"text-dark mt-4 mb-0 bold\" >Buy Airtime</p>\n                       <p class=\"text-white font mt-1\" >All Networks</p>\n                     </a>\n                   </div>\n                   <div class=\"carousel-item\">\n                     <a  class=\"btn  w-100 rounded-0 border white-hover  pt-3 pb-2 px-0 effect\"  [routerLink]=\"['/airtime']\" routerLinkActive=\"active\"> \n                        <span ><img class=\"d-block ml-3\" height=\"50px\" width=\"30%\" src=\"../../assets/images/Airtel.png\" alt=\"Third slide\"></span>\n                        <p class=\"text-dark mt-4 mb-0 bold\" >Buy Airtime</p>\n                        <p class=\"text-white font mt-1\" >All Networks</p>\n                     </a>\n                   </div>\n                    <div class=\"carousel-item\">\n                      <a  class=\"btn  w-100 rounded-0 border white-hover pt-3 pb-2 px-0 effect\"  [routerLink]=\"['/airtime']\" routerLinkActive=\"active\">\n                         <span ><img class=\"d-block ml-3\" height=\"50px\" width=\"30%\" src=\"../../assets/images/glologo.jpg\" alt=\"fourth slide\"></span>\n                         <p class=\"text-dark mt-4 mb-0 bold\" >Buy Airtime</p>\n                         <p class=\"text-white font mt-1\" >All Networks</p>\n                      </a>\n                   </div>\n                 </div>\n               </div>\n             </div>\n\n             <div class=\"col-6 col-md-3 col-lg-3 p-0\">\n               <a  class=\"btn btn-wine w-100 rounded-0 border hov  pt-3 pb-3 px-0 effect\"  [routerLink]=\"['/transfer']\" routerLinkActive=\"active\">\n                 <span ><i class=\"fa fa-sign-out font-size-1\"></i></span>\n                 <p class=\"text-white mt-4 mb-0 bold\" >Transfer Money</p>\n                 <p class=\"text-white font mt-1\" >To friends and Wallet</p>\n               </a>\n             </div>\n\n             <div class=\"col-6 col-md-3 col-lg-3 p-0 \">\n                  <a  class=\"btn btn-violet w-100 rounded-0 border hov pt-3 pb-3 px-0 effect\" [routerLink]=\"['/withdraw']\" routerLinkActive=\"active\">\n                    <span ><i class=\"fa fa-upload font-size-1 text-light\"></i></span>\n                    <p class=\"text-dark mt-4 mb-0 bold\" >Withdrawal</p>\n                    <p class=\"text-white font mt-1\" >Withdraw</p>\n                 </a>\n             </div>\n         </div>\n       </div>\n\n \n       <div class=\"col-12 col-lg-4 pl-lg-1 pt-5 pt-lg-0 \">\n         \n          <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n           <div class=\"carousel-inner\">\n             <div class=\"carousel-item active\">\n              \n               <img class=\"d-block\" height=\"446px\" width=\"100%\" src=\"../../assets/images/tomatoo.png\" alt=\"First slide\">\n             </div>\n             <div class=\"carousel-item\">\n               <img class=\"d-block\" height=\"446px\" width=\"100%\" src=\"../../assets/images/cow.png\" alt=\"Second slide\">\n             </div>\n             <div class=\"carousel-item\">\n               <img class=\"d-block\" height=\"446px\" width=\"100%\" src=\"../../assets/images/supermarket.png\" alt=\"Third slide\">\n             </div>\n           </div>\n         </div>\n       </div>           \n     </div>\n   </div>\n </div>\n\n     \n\n\n</div>"

/***/ }),

/***/ "./src/app/userhome/userhome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserhomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserhomeComponent = /** @class */ (function () {
    function UserhomeComponent() {
    }
    UserhomeComponent.prototype.ngOnInit = function () {
    };
    UserhomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-userhome',
            template: __webpack_require__("./src/app/userhome/userhome.component.html"),
            styles: [__webpack_require__("./src/app/userhome/userhome.component.css")]
        })
    ], UserhomeComponent);
    return UserhomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    STRIPE_PK: 'pk_test_xDvma7YqCGHWWoQsa2exMyCH'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map