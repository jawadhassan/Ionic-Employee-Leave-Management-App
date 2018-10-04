webpackJsonp([7],{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEmployeePageModule", function() { return EditEmployeePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_employee__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditEmployeePageModule = /** @class */ (function () {
    function EditEmployeePageModule() {
    }
    EditEmployeePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_employee__["a" /* EditEmployeePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_employee__["a" /* EditEmployeePage */]),
            ],
        })
    ], EditEmployeePageModule);
    return EditEmployeePageModule;
}());

//# sourceMappingURL=edit-employee.module.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditEmployeePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(103);
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
 * Generated class for the EditEmployeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditEmployeePage = /** @class */ (function () {
    function EditEmployeePage(navCtrl, navParams, toastCtrl, camera, alertCtrl, loadingCtrl, restProvider, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.restProvider = restProvider;
        this.formBuilder = formBuilder;
        this.data = { id: 0, name: "", lastname: "", contact: "", designation: "", email: "", password: "", avatar: "" };
        this.placeholder = 'assets/imgs/blank-avatar.jpg';
        //this.getCurrentData(navParams.get("id"));
        this.data.id = this.navParams.get('employee').id;
        this.data.name = this.navParams.get('employee').name;
        this.data.lastname = this.navParams.get('employee').lastname;
        this.data.contact = this.navParams.get('employee').contact;
        this.data.designation = this.navParams.get('employee').designation;
        this.data.avatar = this.navParams.get('employee').avatar;
        console.log("Check Email" + this.navParams.get('employee').email);
        this.data.email = this.navParams.get('employee').usermail;
        this.data.password = this.navParams.get('employee').password;
        this.employee = this.navParams.get('employee');
        this.editForm = formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            lastname: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            contact: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            designation: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            id: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])]
        });
    }
    /* getCurrentData(id){
      this.sqlite.create({
        name:'check.db',
        location:'default'
      }).then((db:SQLiteObject)=>{
        db.executeSql('SELECT id,name,lastname,contact,designation FROM EMPLOYEES WHERE id=?',[id])
        .then(res=>{
          console.log("in edit employee current data")
          if(res.rows.length> 0){
            this.data.id = res.rows.item(0).id;
            this.data.name = res.rows.item(0).name;
            this.data.lastname = res.rows.item(0).lastname;
            this.data.contact = res.rows.item(0).contact;
            this.data.designation = res.rows.item(0).designation;
          }
        })
        .catch(e=>{
          console.log(e);
          this.toast.show("Error Failed to view Employee",'5000','center')
          .subscribe(
            toast => {
              console.log(toast);
            }
          );
        });
      }).catch(e=>{
        console.log(e);
        this.toast.show('Error!','5000','center')
        .subscribe(
          toast => {
            console.log(toast);
          }
        );
      });
    } */
    /* updateData(){
      this.sqlite.create({
        name:'check.db',
        location:'default'
      }).then((db:SQLiteObject)=>{
        db.executeSql('UPDATE EMPLOYEES SET name=?,lastname=?,contact=?,designation=? WHERE id=?',[this.data.name,this.data.lastname,this.data.contact,this.data.designation,this.data.id])
        .then(res=>{
          console.log(res);
          this.toast.show('Employee Updated!','4000','center')
          .subscribe(
             toast=>{
                console.log(res);
             }
          );
          this.navCtrl.pop();
        })
        .catch(e=>{
          this.toast.show("Error in updating",'5000','center')
          .subscribe(
            toast => {
              console.log(toast);
            }
          );
        });
      }).catch(e=>{
        this.toast.show("Error!",'5000','center').subscribe(
          toast=> {
            console.log(toast);
          }
        )
      })
    } */
    EditEmployeePage.prototype.updateData = function () {
        var _this = this;
        this.showLoading();
        console.log('update Data called');
        this.restProvider.editEmployee(this.data).then(function (res) {
            console.log(res);
            var toast = _this.toastCtrl.create({
                message: 'User was updated successfully',
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
    };
    EditEmployeePage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    EditEmployeePage.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    EditEmployeePage.prototype.getPhoto = function () {
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
            _this.data.avatar = "data:image/jpeg;base64," + imageData;
        }, function (err) {
            console.log("Check Error Red" + err);
            // Handle error
        });
    };
    EditEmployeePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditEmployeePage');
    };
    EditEmployeePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-employee',template:/*ion-inline-start:"E:\Ionic Employee Leave Managment System\CameraApp\src\pages\edit-employee\edit-employee.html"*/'<!--\n  Generated template for the EditEmployeePage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>EditEmployee</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n<h2 text-center>Edit Contact\n  <ion-icon name="create"></ion-icon>\n</h2>\n<form  [formGroup]="editForm" #formDir="ngForm"  (ngSubmit)="updateData(editForm.value)">\n    <ion-item>\n        <ion-label fixed>Avatar</ion-label>\n        <ion-avatar avatar item-end>\n            <!--img src="{{imgPreview}}" (click)="getPhoto()"-->\n             <img [src]="data.avatar || placeholder" onerror="this.src=\'assets/imgs/blank-avatar.jpg\'" (click)="getPhoto()">\n        </ion-avatar>\n      </ion-item>\n  <ion-item>\n    <ion-label color="primary" floating>Name</ion-label>\n    <ion-input type="text" [(ngModel)] = "data.name" name="name" formControlName="name"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label color="primary" floating>LastName</ion-label>\n    <ion-input type="text" [(ngModel)] = "data.lastname" name="lastname" formControlName="lastname"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label color="primary" floating>Contact</ion-label>\n    <ion-input type="tel" [(ngModel)] = "data.contact" name="contact" formControlName="contact"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label color="primary" floating>Designation</ion-label>\n    <ion-input type="text" [(ngModel)] = "data.designation" name="designation" formControlName="designation"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label color="primary" floating>Email</ion-label>\n    <ion-input type="email" [(ngModel)] = "data.email" name="email" formControlName="email"></ion-input>\n  </ion-item> \n  <ion-item>\n    <ion-label color="primary" floating>Password</ion-label>\n    <ion-input type="password" [(ngModel)] = "data.password" name="password" formControlName="password"></ion-input>\n  </ion-item> \n  <ion-input type="hidden" [(ngModel)]="data.id" name="id" formControlName="id"></ion-input>\n  <button ion-button class="submit-btn" type="submit"  [disabled]="!editForm.valid" block>Submit</button>\n</form>\n</ion-content>\n'/*ion-inline-end:"E:\Ionic Employee Leave Managment System\CameraApp\src\pages\edit-employee\edit-employee.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], EditEmployeePage);
    return EditEmployeePage;
}());

//# sourceMappingURL=edit-employee.js.map

/***/ })

});
//# sourceMappingURL=7.js.map