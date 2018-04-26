import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isIn = false;
  toggleState() {
    const bool = this.isIn;
    this.isIn = bool === false ? true : false;
  }

  constructor() { }

  ngOnInit() {

  }

}