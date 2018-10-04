import { Component } from '@angular/core';
import { IonicPage, NavController,AlertController, LoadingController, Loading, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import {RestProvider} from '../../providers/rest/rest';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';
/**
 * Generated class for the EditEmployeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-employee',
  templateUrl: 'edit-employee.html',
})
export class EditEmployeePage {

  data = {id:0,name:"",lastname:"",contact:"",designation:"",email:"",password:"",avatar:""};
  editForm : FormGroup;
  employee;
  placeholder= 'assets/imgs/blank-avatar.jpg';
  loading:Loading;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toastCtrl: ToastController,
    private camera: Camera,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    public restProvider : RestProvider,
    public formBuilder : FormBuilder) {
    //this.getCurrentData(navParams.get("id"));
    this.data.id = this.navParams.get('employee').id;
    this.data.name = this.navParams.get('employee').name;
    this.data.lastname = this.navParams.get('employee').lastname;
    this.data.contact = this.navParams.get('employee').contact;
    this.data.designation = this.navParams.get('employee').designation;
    this.data.avatar = this.navParams.get('employee').avatar;
    console.log("Check Email"+this.navParams.get('employee').email);
    this.data.email = this.navParams.get('employee').usermail;
    this.data.password = this.navParams.get('employee').password;
    
    this.employee = this.navParams.get('employee');

    this.editForm = formBuilder.group({
      name:['',Validators.compose([Validators.required])],
      lastname : ['',Validators.compose([Validators.required])],
      contact:['',Validators.compose([Validators.required])],
      designation:['',Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      id:['',Validators.compose([Validators.required])]

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

  updateData(){
    this.showLoading();
    console.log('update Data called');
    this.restProvider.editEmployee(this.data).then(res =>{      
      console.log(res);
      let toast = this.toastCtrl.create({
        message: 'User was updated successfully',
        duration: 3000,
        position: 'bottom'
      });
    
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
    
      toast.present();
      this.navCtrl.popToRoot();
  },
  error => {
    this.showError(error);
  })

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


  getPhoto(){

    console.log("In get Photo Method");
     const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
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
         this.data.avatar =  "data:image/jpeg;base64," + imageData;
       }, (err) => {
         console.log("Check Error Red"+err);
        // Handle error
       });
    
    
  } 

  ionViewDidLoad() {
   
    console.log('ionViewDidLoad EditEmployeePage');
  }

}