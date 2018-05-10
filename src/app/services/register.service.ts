import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RegisterService {

  constructor(private http: Http) { }

  registerUser(parent) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(headers);
    return this.http.post('http://localhost:8090/register', parent, {headers: headers})
	  .map(res => res.json());
  }
}
