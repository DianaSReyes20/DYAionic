import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { ClientPage } from '../client/client';
import { LocationsPage } from '../locations/locations';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username:string;
  password:string;
  constructor(
    public navCtrl: NavController
    ) {

  }

  iraMenu(){
    this.navCtrl.push(MenuPage);
  }

  iraRegistro(){
    this.navCtrl.push(ClientPage);
  }

  iraLocations(){
    this.navCtrl.push(LocationsPage);
  }

}
