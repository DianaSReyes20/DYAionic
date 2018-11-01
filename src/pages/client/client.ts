import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserServiProvider } from '../../providers/user-servi/user-servi';


/**
 * Generated class for the ClientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-client',
  templateUrl: 'client.html',
})
export class ClientPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public userServiProvider: UserServiProvider
    ) {
      
  }

  data = { nombre: '', documento: '', email: '', telefono: '', direccion: '', nombre_usuario: '', password: ''};

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientPage');
  }
  
  postUser(){
    this.userServiProvider.postUser(this.data).then((result) => { 
      console.log(result); 
      this.showAlertCorrect();
      }, (err) => { 
        this.showAlertError();
        console.log(err); 
      }
    ); 
  }

  showAlertCorrect() {
    const alert = this.alertCtrl.create({
      title: 'Nuevo usuario',
      subTitle: '¡Se ha creado correctamente un nuevo usuario!',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.push(HomePage);
  }

  showAlertError() {
    const alert = this.alertCtrl.create({
      title: 'Procedo cancelado',
      subTitle: 'No se ha podido crear un nuevo usuario',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.push(HomePage);
  }
 
}
