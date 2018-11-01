import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiProvider } from '../../providers/user-servi/user-servi';

/**
 * Generated class for the QuadrantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quadrant',
  templateUrl: 'quadrant.html',
})
export class QuadrantPage {
  quadrants: any[] = [];
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userServiProvider: UserServiProvider
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuadrantPage');
    this.userServiProvider.getQuadrants().subscribe(
      (data) => { 
      console.log('------------------------');
      this.quadrants = JSON.parse(JSON.stringify(data));
      console.log(data);
      console.log('------------------------');
      console.log(this.quadrants);
    },
    (error) => {
      console.log(error);
    }
  )
  }
}
