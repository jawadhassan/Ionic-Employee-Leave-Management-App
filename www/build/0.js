webpackJsonp([0],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLeaveRequestPageModule", function() { return UserLeaveRequestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_leave_request__ = __webpack_require__(295);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserLeaveRequestPageModule = /** @class */ (function () {
    function UserLeaveRequestPageModule() {
    }
    UserLeaveRequestPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_leave_request__["a" /* UserLeaveRequestPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_leave_request__["a" /* UserLeaveRequestPage */]),
            ],
        })
    ], UserLeaveRequestPageModule);
    return UserLeaveRequestPageModule;
}());

//# sourceMappingURL=user-leave-request.module.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLeaveRequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
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
 * Generated class for the UserLeaveRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserLeaveRequestPage = /** @class */ (function () {
    function UserLeaveRequestPage(navCtrl, restProvider, navParams, toastCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.restProvider = restProvider;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.data = { employeeId: "", to: "", from: "", desc: "", status: "" };
        this.data.employeeId = this.navParams.get("id");
        this.registerForm = formBuilder.group({
            employeeId: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            to: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            from: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            desc: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
        });
    }
    UserLeaveRequestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserLeaveRequestPage');
    };
    UserLeaveRequestPage.prototype.applyLeave = function () {
        var _this = this;
        console.log("UserLeave Request applyLeave called");
        console.log(this.data);
        this.data.status = "pending";
        this.restProvider.applyLeave(this.data).then(function (res) {
            console.log(res);
            var toast = _this.toastCtrl.create({
                message: 'Leave requested successfully',
                duration: 3000,
                position: 'bottom'
            });
            toast.onDidDismiss(function () {
                console.log('Dismissed toast');
            });
            toast.present();
            _this.navCtrl.popToRoot();
        });
    };
    UserLeaveRequestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-leave-request',template:/*ion-inline-start:"E:\Ionic Employee Leave Managment System\CameraApp\src\pages\user-leave-request\user-leave-request.html"*/'<!--\n  Generated template for the UserLeaveRequestPage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>UserLeaveRequestPage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="registerForm" #formDir="ngForm" (ngSubmit)="applyLeave(registerForm.value)">\n    <ion-item>\n      <ion-label color="primary" floating>Description</ion-label>\n      <ion-input type="text" [(ngModel)] = "data.desc" name="desc" formControlName="desc"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" floating>From</ion-label>\n      <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="data.from" name="from" formControlName="from"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" floating>To</ion-label>\n      <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="data.to"  name="to" formControlName="to"></ion-datetime>\n    </ion-item>\n    <ion-input type="hidden" [(ngModel)]="data.employeeId" name="employeeId" formControlName="employeeId"></ion-input>\n    <button ion-button type="submit" [disabled]="!registerForm.valid" block>Submit</button> \n  </form>\n</ion-content>\n'/*ion-inline-end:"E:\Ionic Employee Leave Managment System\CameraApp\src\pages\user-leave-request\user-leave-request.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], UserLeaveRequestPage);
    return UserLeaveRequestPage;
}());

//# sourceMappingURL=user-leave-request.js.map

/***/ })

});
//# sourceMappingURL=0.js.map