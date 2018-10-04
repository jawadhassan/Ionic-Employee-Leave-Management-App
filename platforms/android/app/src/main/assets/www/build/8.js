webpackJsonp([8],{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmployeePageModule", function() { return AddEmployeePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_employee__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddEmployeePageModule = /** @class */ (function () {
    function AddEmployeePageModule() {
    }
    AddEmployeePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_employee__["a" /* AddEmployeePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_employee__["a" /* AddEmployeePage */]),
            ],
        })
    ], AddEmployeePageModule);
    return AddEmployeePageModule;
}());

//# sourceMappingURL=add-employee.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEmployeePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(102);
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
 * Generated class for the AddEmployeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddEmployeePage = /** @class */ (function () {
    function AddEmployeePage(navCtrl, navParams, formBuilder, camera, alertCtrl, loadingCtrl, restProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.restProvider = restProvider;
        this.toastCtrl = toastCtrl;
        this.data = { avatar: "", id: "", name: "", lastname: "", contact: "", designation: "", email: "", password: "" };
        this.imgPreview = 'assets/imgs/blank-avatar.jpg';
        this.placeholder = 'assets/imgs/blank-avatar.jpg';
        this.registerForm = formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            lastname: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            contact: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            designation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    }
    AddEmployeePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddEmployeePage');
    };
    /* saveEmployee(){
      if(this.registerForm.valid){
        this.sqlite.create({
          name:'check.db',
          location:'default'
        }).then((db:SQLiteObject)=>{
          db.executeSql('INSERT INTO EMPLOYEES(id,name,lastname,contact,designation) VALUES (NULL,?,?,?,?)',[this.data.name,this.data.lastname,this.data.contact,this.data.designation])
          .then(res=>{
            this.toast.show('Employee Registered','4000','center').subscribe(
              toast=>{
              this.navCtrl.popToRoot();
            });
          })
          .catch(e=>{
            this.toast.show("Employee already exists",'4000','center').subscribe(
              toast => {
                  console.log(toast);
              }
            );
          });
        }).catch(e=>{
          console.log(e);
          this.toast.show("Error!",'5000','center').subscribe(
            toast => {
              console.log(toast);
            }
          );
        });
      }
   
    }
   */
    AddEmployeePage.prototype.saveEmployee = function () {
        var _this = this;
        this.showLoading();
        this.restProvider.saveEmployee(this.data).then(function (res) {
            console.log(res);
            var toast = _this.toastCtrl.create({
                message: 'User was added successfully',
                duration: 3000,
                position: 'bottom'
            });
            toast.onDidDismiss(function () {
                console.log('Dismissed toast');
            });
            toast.present();
            _this.navCtrl.popToRoot();
        }, function (error) {
            _this.showError(error);
        });
        /*  this.toast.show(""+res,'5000','center')
         .subscribe(
           toast=>{
             this.navCtrl.popToRoot();
           }
         ); */
    };
    AddEmployeePage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    AddEmployeePage.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    AddEmployeePage.prototype.getPhoto = function () {
        var _this = this;
        console.log("In get Photo Method");
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        /*   this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
            result => console.log('Has permission?',result.hasPermission),
            err => {
              console.log("No Permission");
              this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)}
          );  */
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            console.log("Check Image" + imageData);
            _this.base64Image = "data:image/jpeg;base64," + imageData;
            console.log(_this.base64Image);
            _this.data.avatar = _this.base64Image;
        }, function (err) {
            console.log("Check Error Red" + err);
            // Handle error
        });
    };
    AddEmployeePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-employee',template:/*ion-inline-start:"E:\Ionic Employee Leave Managment System\CameraApp\src\pages\add-employee\add-employee.html"*/'<!--\n  Generated template for the AddEmployeePage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>AddEmployee</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n<h2 text-center>Add Employee\n<ion-icon name="contact"></ion-icon>\n</h2>\n<form [formGroup]="registerForm" #formDir="ngForm" (ngSubmit)="saveEmployee(registerForm.value)">\n  <ion-item>\n    <ion-label fixed>Avatar</ion-label>\n    <ion-avatar avatar item-end>\n        <!--img src="{{imgPreview}}" (click)="getPhoto()"-->\n         <img [src]="base64Image || placeholder" onerror="this.src=\'assets/imgs/blank-avatar.jpg\'" (click)="getPhoto()">\n    </ion-avatar>\n  </ion-item>\n  <ion-item>\n    <ion-label color="primary" floating>Name</ion-label>\n    <ion-input type="text" [(ngModel)] = "data.name" name="name" formControlName="name"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label color="primary" floating>LastName</ion-label>\n    <ion-input type="text" [(ngModel)] = "data.lastname" name="lastname" formControlName="lastname"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label color="primary" floating>Contact</ion-label>\n    <ion-input type="tel" [(ngModel)] = "data.contact" name="contact" formControlName="contact"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label color="primary" floating>Designation</ion-label>\n    <ion-input type="text" [(ngModel)] = "data.designation" name="designation" formControlName="designation"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label color="primary" floating>Email</ion-label>\n    <ion-input type="email" [(ngModel)] = "data.email" name="email" formControlName="email"></ion-input>\n  </ion-item> \n  <ion-item>\n    <ion-label color="primary" floating>Password</ion-label>\n    <ion-input type="password" [(ngModel)] = "data.password" name="password" formControlName="password"></ion-input>\n  </ion-item> \n  <button ion-button type="submit" [disabled]="!registerForm.valid" block>Submit</button> \n</form>\n</ion-content>'/*ion-inline-end:"E:\Ionic Employee Leave Managment System\CameraApp\src\pages\add-employee\add-employee.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], AddEmployeePage);
    return AddEmployeePage;
}());

//# sourceMappingURL=add-employee.js.map

/***/ })

});
//# sourceMappingURL=8.js.map