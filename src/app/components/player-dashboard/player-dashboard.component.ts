import { Component, OnInit, Input } from '@angular/core';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-player-dashboard',
  templateUrl: './player-dashboard.component.html',
  styleUrls: ['./player-dashboard.component.css']
})
export class PlayerDashboardComponent implements OnInit {

  data: String;

  constructor(private register: RegisterService) { }

  ngOnInit() {
    this.data = this.register.getDataForPlayerDashboard();
  }

}
