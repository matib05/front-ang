import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
        MatDatepickerModule,
		MatIconModule, 
		MatInputModule, 
		MatToolbarModule, 
		MatNativeDateModule,
	   } from '@angular/material';
import { TextMaskModule } from 'angular2-text-mask';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';

import { AuthService } from './services/auth.service';
import { RegisterService } from './services/register.service';
import { AddchildComponent } from './components/addchild/addchild.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'addchild', component: AddchildComponent },
  { path: 'home', component: HomeComponent},
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    AddchildComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
	BrowserAnimationsModule,
    MatDatepickerModule,
    MatIconModule, 
    MatInputModule, 
    MatToolbarModule, 
    MatNativeDateModule,
    BrowserModule,
    FormsModule,
    HttpModule,
	TextMaskModule
  ],
  providers: [AuthService,
             RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
