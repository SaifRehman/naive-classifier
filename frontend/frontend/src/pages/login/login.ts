import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomePage} from '../home/home'
import {HomeService} from '../home/home.service'
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  YearsEmployed:any;
  PriorDefault:any;
  Credi1Score:any;
  Income:any;
  constructor(public navCtrl: NavController,public homeService:HomeService,private alertCtrl: AlertController) {
  }
  enter(){
    this.homeService.post(this.YearsEmployed,this.PriorDefault,this.Credi1Score,this.Income).timeout(5000).subscribe((data) => {
      let alert = this.alertCtrl.create({
        title: 'Predicted value',
        subTitle: data['prediction'],
        buttons: ['Dismiss']
      });
      alert.present();
    },
      (error) => {
        console.log(error)
      })
  }
}
