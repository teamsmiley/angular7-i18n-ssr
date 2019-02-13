import { Component, OnInit } from '@angular/core';
// import { environment } from 'src/environments/environment';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  isProduction: boolean = environment.production;

  constructor() { }

  ngOnInit() {

  }

}
