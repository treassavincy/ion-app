import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.page.html',
  styleUrls: ['./userdashboard.page.scss'],
})
export class UserdashboardPage implements OnInit {
current=''
  constructor() { }

  ngOnInit() {
    this.current=localStorage.getItem('currentuser') || ''
  }

}
