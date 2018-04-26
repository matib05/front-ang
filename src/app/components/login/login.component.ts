import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  data: any = {};

  constructor(private authService: AuthService,
			  private router: Router) { }

  ngOnInit() {
    
  }

  onSubmit(username, password) {
    const user = {
		username:this.username,
		password:this.password
	};
    this.authService.authenticateUser(user).subscribe(data => {
		console.log(data);
		this.data = data;
	});
  }

}
