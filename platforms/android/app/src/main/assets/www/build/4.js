webpackJsonp([4],{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveRequestPageModule", function() { return LeaveRequestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__leave_request__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LeaveRequestPageModule = /** @class */ (function () {
    function LeaveRequestPageModule() {
    }
    LeaveRequestPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__leave_request__["a" /* LeaveRequestPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__leave_request__["a" /* LeaveRequestPage */]),
            ],
        })
    ], LeaveRequestPageModule);
    return LeaveRequestPageModule;
}());

//# sourceMappingURL=leave-request.module.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaveRequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(50);
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
 * Generated class for the LeaveRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LeaveRequestPage = /** @class */ (function () {
    function LeaveRequestPage(navCtrl, navParams, restProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.doRefresh(0);
    }
    LeaveRequestPage.prototype.ionViewDidLoad = function () {
        //this.getData();
        this.getLeaves();
    };
    LeaveRequestPage.prototype.ionViewWillEnter = function () {
        // this.getData();
        this.getLeaves();
    };
    LeaveRequestPage.prototype.getLeaves = function () {
        var _this = this;
        this.restProvider.getLeaves().then(function (data) {
            _this.leaves = data;
            console.log(_this.leaves);
        });
    };
    LeaveRequestPage.prototype.viewDetail = function (leave) {
        this.navCtrl.push('LeaveRequestDetailPage', {
            leave: leave
        });
    };
    LeaveRequestPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.restProvider.getLeaves().then(function (data) {
            _this.leaves = data;
            if (refresher != 0)
                refresher.complete();
        });
    };
    LeaveRequestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-leave-request',template:/*ion-inline-start:"E:\Ionic Employee Leave Managment System\CameraApp\src\pages\leave-request\leave-request.html"*/'<!--\n  Generated template for the LeaveRequestPage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>LeaveRequest</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n      </ion-refresher>\n  <ion-list>\n    <ion-item-sliding  *ngFor="let leave of leaves" (click)="viewDetail(leave)" >      \n         <ion-item no-padding>\n          <ion-label> \n           <h2>\n             {{leave.desc}}\n           </h2>\n          </ion-label>\n              <ion-chip [color]="leave.status" item-end>\n              <ion-label>{{leave.status}}</ion-label>               \n            </ion-chip>  \n         </ion-item>\n       </ion-item-sliding>\n     </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\Ionic Employee Leave Managment System\CameraApp\src\pages\leave-request\leave-request.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */]])
    ], LeaveRequestPage);
    return LeaveRequestPage;
}());

//# sourceMappingURL=leave-request.js.map

/***/ })

});
//# sourceMappingURL=4.js.map