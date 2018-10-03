webpackJsonp([1],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHomePageModule", function() { return UserHomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_home__ = __webpack_require__(295);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserHomePageModule = /** @class */ (function () {
    function UserHomePageModule() {
    }
    UserHomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_home__["a" /* UserHomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_home__["a" /* UserHomePage */]),
            ],
        })
    ], UserHomePageModule);
    return UserHomePageModule;
}());

//# sourceMappingURL=user-home.module.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(50);
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
 * Generated class for the UserHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserHomePage = /** @class */ (function () {
    function UserHomePage(navCtrl, navParams, restProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.id = this.navParams.get("id");
        console.log("Check User Leave ID" + this.id);
        this.doRefresh(0);
    }
    UserHomePage.prototype.ionViewDidLoad = function () {
        //this.getData();
        this.getLeaves(this.id);
    };
    UserHomePage.prototype.ionViewWillEnter = function () {
        // this.getData();
        this.getLeaves(this.id);
    };
    UserHomePage.prototype.getLeaves = function (id) {
        var _this = this;
        this.restProvider.getAppliedLeaves(id).then(function (data) {
            _this.leaves = data;
            console.log(_this.leaves);
        });
    };
    UserHomePage.prototype.viewDetail = function (leave) {
        this.navCtrl.push('LeaveRequestStatusPage', {
            leave: leave
        });
    };
    UserHomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.restProvider.getAppliedLeaves(this.id).then(function (data) {
            _this.leaves = data;
            if (refresher != 0)
                refresher.complete();
        });
    };
    UserHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-home',template:/*ion-inline-start:"E:\IonicNewBranch\Ionic\CameraApp\src\pages\user-home\user-home.html"*/'<!--\n  Generated template for the UserHomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button [menuToggle]="activeMenu">\n          <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>LeaveRequest</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n      </ion-refresher>\n  <ion-list>\n    <ion-item-sliding  *ngFor="let leave of leaves" (click)="viewDetail(leave)">      \n         <ion-item no-padding>\n          <ion-label> \n           <h2>\n             {{leave.desc}}\n           </h2>\n          </ion-label>\n              <ion-chip [color]="leave.status" item-end>\n              <ion-label>{{leave.status}}</ion-label>               \n            </ion-chip>  \n         </ion-item>\n       </ion-item-sliding>\n     </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\IonicNewBranch\Ionic\CameraApp\src\pages\user-home\user-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]])
    ], UserHomePage);
    return UserHomePage;
}());

//# sourceMappingURL=user-home.js.map

/***/ })

});
//# sourceMappingURL=1.js.map