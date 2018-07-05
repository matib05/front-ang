import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RegisterService {

  dataRetrieved: String;

  constructor(private http: Http) { }

  registerPlayer(player) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(headers);
    return this.http.post('http://localhost:8080/player', player, {headers: headers})
	  .map(res => {
      let data = res.json();
      this.dataRetrieved = JSON.stringify(data);
      console.log(res.json())
      res.json();
    });
  }

  getPlayerData() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(headers);
    return this.http.get('http://localhost:8080/players', {headers: headers})
	  .map(res => res.json());
  }

  getDataForPlayerDashboard() {
    return this.dataRetrieved;
  }
}
