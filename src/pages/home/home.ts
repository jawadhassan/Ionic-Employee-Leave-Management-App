import { Component } from '@angular/core';
import { NavController,AlertController, LoadingController,Loading } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { EmployeeDetailPage } from '../employee-detail/employee-detail';
import 'rxjs/add/operator/toPromise';
import {RestProvider} from '../../providers/rest/rest';
import { DomSanitizer,SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 // employees : any[] = [];
  employees : any;
  loading:Loading;
  

  /* email:String = '';
  user:String = ''; */
  constructor(public navCtrl: NavController,private camera:Camera,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private auth: AuthServiceProvider,public restProvider : RestProvider,private sanitizer: DomSanitizer ) {
      this.doRefresh(0);
    
    /*let info = this.auth.getUserInfo(); 
    this.email = info['email'];
    this.user = info['name']; */
  }

  ionViewDidLoad(){
    //this.getData();
    //this.getEmployee();
    
  }

  ionViewWillEnter(){
   //this.getData();
   this.getEmployee();
  }

  getEmployee(){
    this.showLoading();
    this.restProvider.getEmployees().then(data =>{
        this.employees = data;
        console.log(this.employees);
        this.loading.dismissAll();
    },
    error => {
      this.showError(error);
    })
}

doRefresh(refresher){
  this.restProvider.getEmployees().then(data =>{
    console.log(this.employees);
    this.employees = data;
    if(refresher != 0)
                 refresher.complete();
  }); 
}

viewDetail(employee){
  this.navCtrl.push('EmployeeDetailPage',{
    employee:employee
  });
}
 
  addData(){
    this.navCtrl.push('AddEmployeePage');
  }

  public logout(){
    this.auth.logOut().subscribe(succ =>{
      this.navCtrl.setRoot('LoginPage')
    })
  }

  
  getImgContent(data): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(data);
  }

  getPhoto(){
    console.log("Check");

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
  /*   this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
      result => console.log('Has permission?',result.hasPermission),
      err => {
        console.log("No Permission");
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)}
    );  */
  
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
      console.log("Check Image"+imageData);
     //  let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log("Check Error Red"+err);
     // Handle error
    });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }


}
