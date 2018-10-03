webpackJsonp([9],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
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




/*
  Generated class for the AuthServiceProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var User = /** @class */ (function () {
    function User(name, usermail, privilege, id) {
        this.name = name;
        this.usermail = usermail;
        this.privilege = privilege;
        this.id = id;
    }
    return User;
}());

var AuthServiceProvider = /** @class */ (function () {
    function AuthServiceProvider(restProvider) {
        this.restProvider = restProvider;
    }
    AuthServiceProvider.prototype.login = function (credentials) {
        var _this = this;
        if (credentials.email == null || credentials.password == null) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw("Please insert credentials");
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
                _this.restProvider.authenticate(credentials.email, credentials.password).then(function (data) {
                    _this.employee = data;
                    //  console.log("Check Admin"+this.employee.name); 
                    //  let access = (credentials.password === "pass" && credentials.email === "man@abc.com");
                    var access = (credentials.password === _this.employee.password && credentials.email === _this.employee.usermail);
                    //  this.currentUser = new User('Martin','admin@Sapphire','admin');
                    if (access) {
                        _this.currentUser = new User(_this.employee.name, _this.employee.usermail, _this.employee.privilege, _this.employee.id);
                        console.log(_this.currentUser);
                    }
                    observer.next(access);
                    observer.complete();
                }).catch(function (error) {
                    console.log(error);
                    observer.next(false);
                    observer.complete();
                });
            });
        }
    };
    AuthServiceProvider.prototype.getUserInfo = function () {
        return this.currentUser;
    };
    AuthServiceProvider.prototype.getUserAvatar = function () {
        return this.employee.avatar;
    };
    AuthServiceProvider.prototype.isLoggedIn = function () {
        return this.currentUser != null;
    };
    AuthServiceProvider.prototype.logOut = function () {
        var _this = this;
        console.log('Logout auth called');
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            _this.currentUser = null;
            observer.next(true);
            observer.complete();
        });
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 116:
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
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-employee/add-employee.module": [
		279,
		8
	],
	"../pages/edit-employee/edit-employee.module": [
		280,
		7
	],
	"../pages/employee-detail/employee-detail.module": [
		281,
		6
	],
	"../pages/leave-request-status/leave-request-status.module": [
		282,
		5
	],
	"../pages/leave-request/leave-request.module": [
		283,
		4
	],
	"../pages/login/login.module": [
		284,
		3
	],
	"../pages/menu/menu.module": [
		285,
		2
	],
	"../pages/user-home/user-home.module": [
		286,
		1
	],
	"../pages/user-leave-request/user-leave-request.module": [
		287,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_rest_rest__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    /* email:String = '';
    user:String = ''; */
    function HomePage(navCtrl, camera, auth, restProvider, sanitizer) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.auth = auth;
        this.restProvider = restProvider;
        this.sanitizer = sanitizer;
        this.doRefresh(0);
        /*let info = this.auth.getUserInfo();
        this.email = info['email'];
        this.user = info['name']; */
    }
    HomePage.prototype.ionViewDidLoad = function () {
        //this.getData();
        this.getEmployee();
    };
    HomePage.prototype.ionViewWillEnter = function () {
        // this.getData();
        this.getEmployee();
    };
    HomePage.prototype.getEmployee = function () {
        var _this = this;
        this.restProvider.getEmployees().then(function (data) {
            _this.employees = data;
            console.log(_this.employees);
        });
    };
    HomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.restProvider.getEmployees().then(function (data) {
            console.log(_this.employees);
            _this.employees = data;
            if (refresher != 0)
                refresher.complete();
        });
    };
    HomePage.prototype.viewDetail = function (employee) {
        this.navCtrl.push('EmployeeDetailPage', {
            employee: employee
        });
    };
    HomePage.prototype.addData = function () {
        this.navCtrl.push('AddEmployeePage');
    };
    HomePage.prototype.logout = function () {
        var _this = this;
        this.auth.logOut().subscribe(function (succ) {
            _this.navCtrl.setRoot('LoginPage');
        });
    };
    HomePage.prototype.getImgContent = function (data) {
        return this.sanitizer.bypassSecurityTrustUrl(data);
    };
    HomePage.prototype.getPhoto = function () {
        console.log("Check");
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
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
            //  let base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            console.log("Check Error Red" + err);
            // Handle error
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\IonicNewBranch\Ionic\CameraApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n      <button ion-button [menuToggle]="activeMenu">\n          <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Employee Management System\n    </ion-title>\n    <!-- <ion-buttons end>\n        <button ion-button icon-only (click) = "addData()">\n          <ion-icon name="add-circle"></ion-icon>\n        </button>\n    </ion-buttons> -->\n  </ion-navbar>\n</ion-header>\n<!-- \n<ion-content padding>\n  The world is your oyster.\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n  <h3>\n    Welcome to App, {{user}}\n    Your mail is, {{email}}\n  </h3>\n</ion-content> -->\n<ion-content padding>\n  <h2 text-center>List of Employees\n      <ion-icon name="contacts"></ion-icon>\n  </h2>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-list>\n     \n <!--    <ion-item-sliding *ngFor="let employee of employees;let i=index" (click)="viewDetail(employee)">\n -->\n <ion-item-sliding  *ngFor="let employee of employees" (click)="viewDetail(employee)">      \n      <ion-item no-padding>\n          <ion-avatar item-start>\n              <img [src]="getImgContent(employee.avatar)">\n            </ion-avatar>\n        <h2>\n          {{employee.name}}\n        </h2>\n        <p>\n          {{employee.designation}}\n        </p>\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n  \n</ion-content>\n'/*ion-inline-end:"E:\IonicNewBranch\Ionic\CameraApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["c" /* DomSanitizer */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_rest_rest__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_service_auth_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__(158);
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
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-employee/add-employee.module#AddEmployeePageModule', name: 'AddEmployeePage', segment: 'add-employee', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-employee/edit-employee.module#EditEmployeePageModule', name: 'EditEmployeePage', segment: 'edit-employee', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/employee-detail/employee-detail.module#EmployeeDetailPageModule', name: 'EmployeeDetailPage', segment: 'employee-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/leave-request-status/leave-request-status.module#LeaveRequestStatusPageModule', name: 'LeaveRequestStatusPage', segment: 'leave-request-status', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/leave-request/leave-request.module#LeaveRequestPageModule', name: 'LeaveRequestPage', segment: 'leave-request', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-home/user-home.module#UserHomePageModule', name: 'UserHomePage', segment: 'user-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-leave-request/user-leave-request.module#UserLeaveRequestPageModule', name: 'UserLeaveRequestPage', segment: 'user-leave-request', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_rest_rest__["a" /* RestProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = 'LoginPage';
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\IonicNewBranch\Ionic\CameraApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\IonicNewBranch\Ionic\CameraApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the RestProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = /** @class */ (function () {
    function RestProvider(http) {
        this.http = http;
        //apiUrl = 'http://192.168.1.100:8080/restmessenger/webapi/myresource';
        this.apiUrl = 'http://192.168.1.119:8080/restmessenger/webapi/myresource';
        console.log('Hello RestProvider Provider');
    }
    RestProvider.prototype.getEmployees = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/employees').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.editEmployee = function (data) {
        /*   var headers = new HttpHeaders();
       
          headers.append("Accept", 'application/json');
          headers.append('Content-Type', 'application/json');
          
          var employeedata = JSON.stringify({ contact:employee.contact,designation:employee.designation,
          id:employee.id,lastname:employee.lastname,name:employee.name});
        //  var jsonstring = JSON.stringify(data);
        
          return new Promise((resolve, reject) => {
            //
              this.http.post(this.apiUrl+'/edit',employeedata ,{headers:headers}).subscribe(
              data => {
                console.log("check"+data);
              },
              error => {
                console.log(error);
            });
          }); */
        var _this = this;
        var employee = data;
        var employeedata = JSON.stringify({ contact: employee.contact, designation: employee.designation,
            id: employee.id, lastname: employee.lastname, name: employee.name, usermail: employee.email, password: employee.password });
        var config = { headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json') };
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/edit', employeedata, config)
                .subscribe(function (data) {
                resolve(data);
                console.log("check" + data);
            }, function (error) {
                console.log(error);
            });
        });
    };
    RestProvider.prototype.saveEmployee = function (data) {
        var _this = this;
        var newemployee = data;
        var newEmployeeData = JSON.stringify({ contact: newemployee.contact, designation: newemployee.designation,
            id: newemployee.id, lastname: newemployee.lastname, name: newemployee.name, usermail: newemployee.email, password: newemployee.password });
        var config = { headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json') };
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/add', newEmployeeData, config)
                .subscribe(function (data) {
                resolve(data);
                console.log("check" + data);
            }, function (error) {
                console.log(error);
            });
        });
    };
    RestProvider.prototype.delete = function (id) {
        var _this = this;
        var config = { headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json') };
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/' + id + '/delete', config)
                .subscribe(function (data) {
                resolve(data);
                console.log("check delete" + data);
            }, function (error) {
                console.log(error);
            });
        });
    };
    RestProvider.prototype.getLeaves = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/leaves').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.getEmployee = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + "/" + id + "/get").subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.leaveApproval = function (id, status) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var config = { headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json') };
            _this.http.post(_this.apiUrl + "/" + id + "/" + status + "/leaveApproval", config).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.authenticate = function (email, pass) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiUrl + '/' + email + '/' + pass + '/AuthEmployee').subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.getAppliedLeaves = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiUrl + '/' + id + '/getAppliedLeaves').subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.applyLeave = function (data) {
        var _this = this;
        var leaveRequest = data;
        var newRequestData = JSON.stringify({ desc: leaveRequest.desc, to: leaveRequest.to, from: leaveRequest.from, employeeId: leaveRequest.employeeId, status: leaveRequest.status });
        return new Promise(function (resolve, reject) {
            var config = { headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json') };
            _this.http.post(_this.apiUrl + '/addleave', newRequestData, config).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map