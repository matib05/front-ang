import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
    dob: String;

  constructor(private http: Http) { }

  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(headers);
    return this.http.post('http://localhost:8090/login', {User:user}, {headers: headers})
	  .map((res: Response) => res.json());
  }
}
