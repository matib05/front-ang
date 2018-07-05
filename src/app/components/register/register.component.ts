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
  firstName: String;
  lastName: String;
  middleName: String;
  gender: String;
  dateOfBirth: Date;

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
    const player = {
      email: this.email,
      password: this.password,
      fathersName: this.fathersName,
      fathersPhone: this.fathersPhone,
      mothersName: this.mothersName,
      mothersPhone: this.mothersPhone,
      emergencyName: this.emergencyName,
      emergencyPhone: this.emergencyPhone,
      firstName: this.firstName,
      lastName: this.lastName,
      middleName: this.middleName,
      gender: this.gender,
      dateOfBirth: this.dateOfBirth.toLocaleDateString()
    };

    this.register.registerPlayer(player).subscribe(data => {
       console.log(data);
       /*if (data.success) {
           this.router.navigate(['/dashboard']);
       } else {
           this.error = true;
           this.errorMessage = data;
       }*/
       this.router.navigate(['/dashboard']);
    });
  }

}
