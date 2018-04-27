import { Component, OnInit } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  startDate = new Date(1997, 0, 1);

  constructor() { }

  ngOnInit() {
  }

  saveDate(event: MatDatepickerInputEvent<Date>) {
      console.log(`${event.value}`);
  }

}
