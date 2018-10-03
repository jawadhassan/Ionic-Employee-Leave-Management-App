webpackJsonp([5],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveRequestStatusPageModule", function() { return LeaveRequestStatusPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__leave_request_status__ = __webpack_require__(291);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LeaveRequestStatusPageModule = /** @class */ (function () {
    function LeaveRequestStatusPageModule() {
    }
    LeaveRequestStatusPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__leave_request_status__["a" /* LeaveRequestStatusPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__leave_request_status__["a" /* LeaveRequestStatusPage */]),
            ],
        })
    ], LeaveRequestStatusPageModule);
    return LeaveRequestStatusPageModule;
}());

//# sourceMappingURL=leave-request-status.module.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaveRequestStatusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
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
 * Generated class for the LeaveRequestStatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LeaveRequestStatusPage = /** @class */ (function () {
    function LeaveRequestStatusPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.desc = this.navParams.get('leave').desc;
        this.toDate = this.navParams.get('leave').to;
        this.fromDate = this.navParams.get('leave').from;
        this.leaveId = this.navParams.get('leave').id;
        this.status = this.navParams.get('leave').status;
    }
    LeaveRequestStatusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LeaveRequestStatusPage');
    };
    LeaveRequestStatusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-leave-request-status',template:/*ion-inline-start:"E:\IonicNewBranch\Ionic\CameraApp\src\pages\leave-request-status\leave-request-status.html"*/'<!--\n  Generated template for the LeaveRequestStatusPage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>LeaveRequestStatusPage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n <ion-row>\n<ion-col width-50><p>Description:</p></ion-col>\n<ion-col width-50><p>{{desc}}</p></ion-col>\n</ion-row>\n<ion-row>\n    <ion-col width-50><p>To:</p></ion-col>\n    <ion-col width-50><p>{{toDate}}</p></ion-col>\n</ion-row>\n<ion-row>\n<ion-col width-50><p>From:</p></ion-col>\n<ion-col width-50><p>{{fromDate}}</p></ion-col>\n</ion-row>\n<ion-row>\n  <ion-col width-50><p>Status:</p></ion-col>\n  <ion-col width-50><p>{{status}}</p></ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"E:\IonicNewBranch\Ionic\CameraApp\src\pages\leave-request-status\leave-request-status.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], LeaveRequestStatusPage);
    return LeaveRequestStatusPage;
}());

//# sourceMappingURL=leave-request-status.js.map

/***/ })

});
//# sourceMappingURL=5.js.map