import { Component, OnInit, Input } from '@angular/core';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  mask: any[] = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  startDate = new Date(1997, 0, 1);
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
  dob: String;

  constructor(private register: RegisterService) { }

  ngOnInit() {
    this.checkPasswords();
  }

  checkPasswords() {
      if (this.password !== this.passwordCheck) {
          console.log('passwords do not match');
          // TODO: make a password checker
      }
  }

  saveDate(date: Date) {
      this.dob = date.toString();
  }

  onSubmit() {
    const User = {
      email: this.email,
      password: this.password,
      passwordCheck: this.passwordCheck,
      fathersName: this.fathersName,
      fathersPhone: this.fathersPhone,
      mothersName: this.mothersName,
      motherPhone: this.motherPhone,
      emergencyName: this.emergencyName,
      emergencyPhone: this.emergencyPhone,
      firstname: this.firstname,
      lastname: this.lastname,
      middlename: this.middlename,
      gender: this.gender,
      dob: this.dob,
    };
    console.log(`email ${this.email}, password: ${this.password}, passwordCheck: ${this.passwordCheck},
    fathersName: ${this.fathersName}, fathersPhone: ${this.fathersPhone}, mothersName: ${this.mothersName},
    motherPhone: ${this.motherPhone}, emergencyName: ${this.emergencyName}, emergencyPhone: ${this.emergencyPhone},
    firstname: ${this.firstname}, middlename: ${this.middlename}, lastname: ${this.middlename}, gender: ${this.gender},
    dob: ${this.dob}`);

    this.register.registerUser(User).subscribe(data => {
       console.log(data);
    });
  }

}
