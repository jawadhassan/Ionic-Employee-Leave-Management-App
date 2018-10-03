import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RestProvider} from '../../providers/rest/rest';
import { ToastController } from 'ionic-angular';
import { DomSanitizer,SafeUrl } from '@angular/platform-browser';

/**
 * Generated class for the EmployeeDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-employee-detail',
  templateUrl: 'employee-detail.html',
})
export class EmployeeDetailPage {

  name;
  lastname;
  contact;
  designation;
  id;
  employee;
  email;
  avatar;

  constructor(public navCtrl: NavController, public navParams: NavParams,public restProvider: RestProvider,
    private toastCtrl: ToastController,private sanitizer: DomSanitizer) {
  }

  ionViewDidLoad() {

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
  }

  
  editData(employee){
    this.navCtrl.push('EditEmployeePage',{
      employee:employee
    });
  } 


  delete(id) {

    this.restProvider.delete(id).then(res => {
      console.log("Check Delete"+res);
      let toast = this.toastCtrl.create({
        message: 'User was deleted successfully',
        duration: 3000,
        position: 'bottom'
      });

      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });

      toast.present();
      this.navCtrl.popToRoot();

    })
  }  

  getImgContent(): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(this.avatar);
}
}