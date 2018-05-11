import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addchild',
  templateUrl: './addchild.component.html',
  styleUrls: ['./addchild.component.css']
})
export class AddchildComponent implements OnInit {

  numOfChildren: Number = 1;
  childrenName: String[];

  constructor() { }

  ngOnInit() {
  }

}
