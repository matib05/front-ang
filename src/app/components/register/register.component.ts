import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  mask: any[] = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
	email: String;
	password: String;
	passwordCheck: String;
	fathersName: String;
	fathersPhone: String;
	mothersName: String;
	motherPhone: String;
	emergencyName: String;
	emergencyPhone: String;
	firstname: String;
	lastname: String;
	middlename: String;
	gender: String;
	dob: Date;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(`email ${this.email}, password: ${this.password}, passwordCheck: ${this.passwordCheck},
fathersName: ${this.fathersName}, fathersPhone: ${this.fathersPhone}, mothersName: ${this.mothersName},
motherPhone: ${this.motherPhone}, emergencyName: ${this.emergencyName}, emergencyPhone: ${this.emergencyPhone},
firstname: ${this.firstname}, middlename: ${this.middlename}, lastname: ${this.middlename}, gender: ${this.gender},
dob: ${this.dob.toString()}`)
  }

}
