import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComplaintPage } from '../complaint/complaint';
import { HistoryCriminalPage } from '../history-criminal/history-criminal';
import { QuadrantPage } from '../quadrant/quadrant';
import { LocationsPage } from '../locations/locations';
import { AlertNotificationPage } from '../alert-notification/alert-notification';
import { CaiPage } from '../cai/cai';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
    ) {
  }

  goDenuncia(){
    this.navCtrl.push(ComplaintPage);
  }

  goHistorial(){
    this.navCtrl.push(HistoryCriminalPage);
  }

  goCuadrante(){
    this.navCtrl.push(QuadrantPage);
  }

  goNotificaciones(){
    this.navCtrl.push(AlertNotificationPage);
  }

  goLocalidades(){
    this.navCtrl.push(LocationsPage);
  }
  
  goCAI(){
    this.navCtrl.push(CaiPage);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
