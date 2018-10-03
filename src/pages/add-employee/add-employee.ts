import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ToastController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Camera, CameraOptions } from '@ionic-native/camera';
/**
 * Generated class for the AddEmployeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-employee',
  templateUrl: 'add-employee.html',
})
export class AddEmployeePage {

  data = {avatar:"", id: "", name: "", lastname: "", contact: "", designation: "",email:"",password:"" };

  registerForm: FormGroup;


  imgPreview = 'assets/imgs/blank-avatar.jpg';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder,
    private camera: Camera,
    public restProvider: RestProvider, private toastCtrl: ToastController) {
      
    this.registerForm = formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      lastname: ['', Validators.compose([Validators.required])],
      contact: ['', Validators.compose([Validators.required])],
      designation: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEmployeePage');
  }

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
  saveEmployee() {

    this.restProvider.saveEmployee(this.data).then(res => {
      console.log(res);
      let toast = this.toastCtrl.create({
        message: 'User was added successfully',
        duration: 3000,
        position: 'bottom'
      });

      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });

      toast.present();
      this.navCtrl.popToRoot();

    })


    /*  this.toast.show(""+res,'5000','center')
     .subscribe(
       toast=>{
         this.navCtrl.popToRoot();
       }
     ); */


  }


  getPhoto(){

    console.log("In get Photo Method");
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
          let base64Image = 'data:image/jpeg;base64,' + imageData;
          this.data.avatar = base64Image;
       }, (err) => {
         console.log("Check Error Red"+err);
        // Handle error
       });
    
    
    
  
  
    
  } 

}