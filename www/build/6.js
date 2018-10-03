webpackJsonp([6],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDetailPageModule", function() { return EmployeeDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employee_detail__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EmployeeDetailPageModule = /** @class */ (function () {
    function EmployeeDetailPageModule() {
    }
    EmployeeDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__employee_detail__["a" /* EmployeeDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__employee_detail__["a" /* EmployeeDetailPage */]),
            ],
        })
    ], EmployeeDetailPageModule);
    return EmployeeDetailPageModule;
}());

//# sourceMappingURL=employee-detail.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(25);
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
 * Generated class for the EmployeeDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EmployeeDetailPage = /** @class */ (function () {
    function EmployeeDetailPage(navCtrl, navParams, restProvider, toastCtrl, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.toastCtrl = toastCtrl;
        this.sanitizer = sanitizer;
    }
    EmployeeDetailPage.prototype.ionViewDidLoad = function () {
        this.employee = this.navParams.get('employee');
        this.id = this.navParams.get('employee').id;
        this.name = this.navParams.get('employee').name;
        this.lastname = this.navParams.get('employee').lastname;
        this.contact = this.navParams.get('employee').contact;
        this.designation = this.navParams.get('employee').designation;
        this.email = this.navParams.get('employee').usermail;
        this.avatar = this.navParams.get('employee').avatar;
        // this.getCurrentData(this.id);
        console.log('ionViewDidLoad EmployeeDetailPage');
    };
    EmployeeDetailPage.prototype.editData = function (employee) {
        this.navCtrl.push('EditEmployeePage', {
            employee: employee
        });
    };
    EmployeeDetailPage.prototype.delete = function (id) {
        var _this = this;
        this.restProvider.delete(id).then(function (res) {
            console.log("Check Delete" + res);
            var toast = _this.toastCtrl.create({
                message: 'User was deleted successfully',
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
    EmployeeDetailPage.prototype.getImgContent = function () {
        return this.sanitizer.bypassSecurityTrustUrl(this.avatar);
    };
    EmployeeDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-employee-detail',template:/*ion-inline-start:"E:\Ionic Employee Leave Managment System\CameraApp\src\pages\employee-detail\employee-detail.html"*/'<!--\n  Generated template for the EmployeeDetailPage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>EmployeeDetail</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click) = "editData(employee)">\n          <ion-icon name="create"></ion-icon>\n        </button>\n    </ion-buttons>\n    <ion-buttons end>\n        <button ion-button icon-only (click) = "delete(employee.id)">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n        \n   <img  width="80" height="80" item-start [src]="getImgContent()">\n        \n    <ion-row>\n        <ion-col width-50><h2>{{name}}</h2></ion-col>\n    </ion-row>  \n<ion-row>\n    <ion-col width-50><p>LastName:</p></ion-col>\n    <ion-col width-50><p>{{lastname}}</p></ion-col>\n</ion-row>\n<ion-row>\n        <ion-col width-50><p>Contact:</p></ion-col>\n        <ion-col width-50><p>{{contact}}</p></ion-col>\n</ion-row>\n<ion-row>\n    <ion-col width-50><p>Designation:</p></ion-col>\n    <ion-col width-50><p>{{designation}}</p></ion-col>\n</ion-row>\n<ion-row>\n    <ion-col width-50><p>Email:</p></ion-col>\n    <ion-col width-50><p>{{email}}</p></ion-col>\n</ion-row>\n</ion-content>'/*ion-inline-end:"E:\Ionic Employee Leave Managment System\CameraApp\src\pages\employee-detail\employee-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]])
    ], EmployeeDetailPage);
    return EmployeeDetailPage;
}());

//# sourceMappingURL=employee-detail.js.map

/***/ })

});
//# sourceMappingURL=6.js.map