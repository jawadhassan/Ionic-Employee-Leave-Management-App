import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';
import {RestProvider} from '../../providers/rest/rest';

/**
 * Generated class for the LeaveRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leave-request',
  templateUrl: 'leave-request.html',
})
export class LeaveRequestPage {

  leaves : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public restProvider : RestProvider) {
    this.doRefresh(0);
  }



  ionViewDidLoad(){
    //this.getData();
    this.getLeaves();
  }

  ionViewWillEnter(){
    // this.getData();
    this.getLeaves();
   }

   getLeaves(){
    this.restProvider.getLeaves().then(data =>{
        this.leaves = data;
        console.log(this.leaves);
    }) 
  }

 
  viewDetail(leave){
     this.navCtrl.push('LeaveRequestDetailPage',{
      leave:leave
    });
  }

  doRefresh(refresher){
    this.restProvider.getLeaves().then(data =>{
      this.leaves = data;
      if(refresher != 0)
                   refresher.complete();
    }); 
  }
   

}