import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserServiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UserServiProvider Provider!');
  }

  getLocations(){
    return this.http.get('http://localhost:3000/locations.json');
  }

  getQuadrants(){
    return this.http.get('http://localhost:3000/quadrants.json');
  }

  getCriminals(){
    return this.http.get('http://localhost:3000/complaints.json');
  }

  apiUrl = 'http://localhost:3000';
  
  postUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/clients.json', JSON.stringify(data)).subscribe(res => {
        resolve(res);
      }, (err) => {
      reject(err);
      });
    });
  }

  postComplaint(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/complaint', JSON.stringify(data)).subscribe(res => {
        resolve(res);
      }, (err) => {
      reject(err);
      });
    });
  }
}
