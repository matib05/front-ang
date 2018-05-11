import { Component, OnInit, Input } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { Router } from '@angular/router';

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
  mothersPhone: String;
  emergencyName: String;
  emergencyPhone: String;
  error = false;
  errorMessage: String;
  /*firstname: String;
  lastname: String;
  middlename: String;
  gender: String;
  dob: String;*/

  constructor(private register: RegisterService, private router: Router) { }

  ngOnInit() {
  }

  checkPassword() {
      if (this.password !== this.passwordCheck) {
          return true;
      }
      return false;
  }

  onSubmit() {
    const Parent = {
      email: this.email,
      password: this.password,
      passwordCheck: this.passwordCheck,
      fathersName: this.fathersName,
      fathersPhone: this.fathersPhone,
      mothersName: this.mothersName,
      mothersPhone: this.mothersPhone,
      emergencyName: this.emergencyName,
      emergencyPhone: this.emergencyPhone,
      /*firstname: this.firstname,
      lastname: this.lastname,
      middlename: this.middlename,
      gender: this.gender,
      dob: this.dob,*/
    };

    //this.register.registerUser(Parent).subscribe(data => {
       //console.log(data);
       //if (data.success) {
           this.router.navigate(['/addchild']);
       //} else {
           //this.error = true;
           //this.errorMessage = data;
       //}
    //});
  }

}
