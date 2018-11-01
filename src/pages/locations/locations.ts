import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiProvider } from '../../providers/user-servi/user-servi';

/**
 * Generated class for the LocationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-locations',
  templateUrl: 'locations.html',
})
export class LocationsPage {
  locations: any[] = [];
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userServiProvider: UserServiProvider
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationsPage');
    this.userServiProvider.getLocations().subscribe(
      (data) => { 
      console.log('------------------------');
      this.locations = JSON.parse(JSON.stringify(data));
      console.log(data);
      console.log('------------------------');
      console.log(this.locations);
    },
    (error) => {
      console.log(error);
    }
  )
  }

}

