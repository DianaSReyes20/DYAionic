import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiProvider } from '../../providers/user-servi/user-servi';
import { _appIdRandomProviderFactory } from '@angular/core/src/application_tokens';
import * as _ from 'lodash';
/**
 * Generated class for the HistoryCriminalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history-criminal',
  templateUrl: 'history-criminal.html',
})
export class HistoryCriminalPage {

  private allTeams: any;
  private allTeamDivisions: any;
  teams: any[] = [];
  search: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public userServiProvider: UserServiProvider
    ) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryCriminalPage');
    this.userServiProvider.getCriminals().subscribe(
      (data) => { 
      console.log('------------------------');
      this.teams = JSON.parse(JSON.stringify(data));
      console.log(data);
      console.log('------------------------');
      console.log(this.teams);
    },
    (error) => {
      console.log(error);
    })
  }
  
  getItems(){
    let queryTextLower = this.search.toLowerCase();
    let filteredTeams = [];
    _.forEach(this.allTeamDivisions, td => {
      let teams = _.filter(td.fecha_denuncia, t => (<any>t).name.toLowerCase().includes(queryTextLower));
      if (teams.length){
        filteredTeams.push({ fisico_ladron: td.fisico_ladron, fecha_denuncia: teams});
      }
    });
    this.teams = filteredTeams;
  }

}
