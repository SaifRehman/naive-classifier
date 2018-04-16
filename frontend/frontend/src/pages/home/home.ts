import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { HomeService } from '../home/home.service'
import { Observable } from 'rxjs/Rx';
import { Content } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Content) contentScroll: Content;
  public senderName: string = '';
  public temp: any;
  content: string;
  scroll: any;
  public allData: any = null;
  public con:any;
  constructor(public navCtrl: NavController, public homeService: HomeService, public loadingCtrl: LoadingController) {
    this.senderName = sessionStorage.getItem('name');
    this.con = this.loadingCtrl.create({
      content: 'Blockchain Synching ....'
    });
    this.con.present();
  }

  ionViewDidLoad() {


  }
  
  sendMessage() {
    console.log('sending message');
  }
}
