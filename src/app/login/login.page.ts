import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConfig } from '../Class/AppConfig';
import { Users } from '../Class/Users';
import { LoginServiceService } from '../Service/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userid:any
  usern:any
  pswd:any
  s=new Users()
  appconfig=new AppConfig()
  UserList:any;
currentuser=''
type=''
current=''
  constructor(public router:Router,private userservice:LoginServiceService) {
    
this.getuser()

  }
   
  ngOnInit() {
   
  }
  getuser(){
    this.userservice.admin().subscribe(data=> {
      this.UserList = data;
      
    })
    



  }
  login(){
    
  
for(let i of this.UserList){
  if(this.pswd==i.password&&this.usern==i.Name ){
   this.currentuser=i.Name
    this.type=i.usertype
    localStorage.setItem('currentuser',this.currentuser)
  }
}
if(this.currentuser){
  if(this.type=='1'){
    alert('Login Successful')
    this.router.navigateByUrl('admin-dashboard')
  }
  else{
    this.router.navigateByUrl('userdashboard')

  }
}
else{
  alert('Invalid Username or Password')
}


  }

}
