import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConfig } from '../Class/AppConfig';
import { Users } from '../Class/Users';
import { LoginServiceService } from '../Service/login-service.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.page.html',
  styleUrls: ['./adduser.page.scss'],
})
export class AdduserPage implements OnInit {
s=new Users()

appconfig=new AppConfig()
option: any;

  constructor(public userservice:LoginServiceService,private router:Router) { }

  ngOnInit() {
  }
adduser(){ 
this.userservice.login(this.s).subscribe(data=>{
  alert('User added successfully')
this.router.navigate(['admin-dashboard'])
})
}
}
