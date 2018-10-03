webpackJsonp([2],{

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */]),
            ],
        })
    ], MenuPageModule);
    return MenuPageModule;
}());

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, navParams, auth, menu, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.menu = menu;
        this.loadingCtrl = loadingCtrl;
        this.id = this.navParams.get("id");
        console.log("Menu Page" + this.id);
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
        if (this.auth.getUserInfo().privilege === 'admin') {
            console.log("Check");
            this.userprofile = this.auth.getUserAvatar();
            this.username = this.auth.getUserInfo().name;
            this.usermail = this.auth.getUserInfo().usermail;
            this.pages = [
                { title: 'Add Employee', page: 'AddEmployeePage' },
                { title: 'Leave Requests', page: 'LeaveRequestPage' }
            ];
            this.openPage(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
        }
        else {
            this.pages = [
                { title: 'Add Leave Requests', page: 'UserLeaveRequestPage' }
            ];
            this.openPage('UserHomePage');
        }
    };
    MenuPage.prototype.ionViewWillEnter = function () {
    };
    MenuPage.prototype.ionViewCanEnter = function () {
        return this.auth.isLoggedIn();
    };
    MenuPage.prototype.logout = function () {
        var _this = this;
        this.auth.logOut().subscribe(function (logout) {
            if (logout) {
                _this.menu.enable(false);
                _this.showLoading();
                _this.nav.setRoot('LoginPage');
            }
        });
    };
    MenuPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    MenuPage.prototype.openPage = function (page) {
        console.log('openPage called');
        this.menu.close();
        this.nav.push(page, {
            id: this.id
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MenuPage.prototype, "nav", void 0);
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"E:\IonicNewBranch\Ionic\CameraApp\src\pages\menu\menu.html"*/'<!--\n  Generated template for the MenuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-menu [content]="mycontent" id="menu1">\n  <ion-header>\n          <ion-toolbar>\n           <ion-item full clear>\n              <ion-avatar item-start>\n                  <img alt="" src="{{userprofile}}">\n                </ion-avatar>\n            <h2>{{username}}</h2>\n            <p>{{usermail}}</p>\n          </ion-item>  \n          </ion-toolbar>\n        </ion-header>\n<ion-content>\n<ion-list>\n  <button ion-item *ngFor="let p of pages" (click)="openPage(p.page)" menuClose="menu1" detail-none>\n      {{p.title}}\n  </button>\n</ion-list>\n</ion-content>\n<ion-footer no-shadow>\n  <ion-toolbar>\n<button ion-button full clear icon-left (click)="logout()" item-end>\n  <ion-icon name="log-out" >\n  </ion-icon>Logout</button>\n</ion-toolbar>\n</ion-footer>\n</ion-menu>\n<ion-nav [root]="rootPage" #mycontent></ion-nav>\n'/*ion-inline-end:"E:\IonicNewBranch\Ionic\CameraApp\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ })

});
//# sourceMappingURL=2.js.map