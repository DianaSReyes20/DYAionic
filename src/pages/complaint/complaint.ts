import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { UserServiProvider } from '../../providers/user-servi/user-servi';

/**
 * Generated class for the ComplaintPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-complaint',
  templateUrl: 'complaint.html',
})
export class ComplaintPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public userServiProvider: UserServiProvider
    ) {
  }

  data = { fecha: '', documento: '', descripcion: '', tipo_victima: '', tipo_denuncia: '', fisico: '', foto_ladron: ''};

  doCheckbox() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Tipo de víctima:');

    alert.addInput({
      type: 'checkbox',
      label: 'Personal',
      value: 'value1',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Terceros',
      value: 'value2'
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        console.log('Checkbox data:', data);
        //this.testCheckboxOpen = false;
        //this.testCheckboxResult = data;
      }
    });
    alert.present().then(() => {
      //this.testCheckboxOpen = true;
    });
  }

  doCheckbox2() {
    let alert = this.alertCtrl.create();
    alert.setTitle('¿Por qué denuncia?');

    alert.addInput({
      type: 'checkbox',
      label: 'Atraco',
      value: 'value1',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Robo',
      value: 'value2'
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        console.log('Checkbox data:', data);
        //this.testCheckboxOpen = false;
        //this.testCheckboxResult = data;
      }
    });
    alert.present().then(() => {
      //this.testCheckboxOpen = true;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComplaintPage');
  }

  postComplaint(){
    this.userServiProvider.postComplaint(this.data).then((result) => { 
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
      title: 'Denuncia registrada',
      subTitle: '¡Se ha registrado correctamente su denuncia!',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlertError() {
    const alert = this.alertCtrl.create({
      title: 'Procedo de denuncia cancelada',
      subTitle: 'No se ha podido realizar la denuncia.',
      buttons: ['OK']
    });
    alert.present();
  }

}
