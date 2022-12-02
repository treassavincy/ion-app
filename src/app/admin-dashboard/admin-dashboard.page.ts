import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AppConfig } from '../Class/AppConfig';
import { Users } from '../Class/Users';
import { LoginServiceService } from '../Service/login-service.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
})
export class AdminDashboardPage implements OnInit {
  s=new Users()
  appconfig=new AppConfig()
  UserList:any;
  current=''
  id=''
  did=''
  constructor(private userservice:LoginServiceService,public router:Router) { this.getuser()

  }

  ngOnInit() {
    if(!localStorage.getItem('currentuser'))
    {
      alert('login first')
      this.router.navigateByUrl('')
    }
  
    this.current=localStorage.getItem('currentuser') || ''
   
  }



del(Id:any){
  // this.userservice.getone(10).subscribe(data=> {
  //   this.UserList = data;
  // })
  // this.id=this.UserList.Id 
  // console.log(this.id);
  localStorage.setItem('delid',Id)
  this.did=localStorage.getItem('delid') || ''
this.userservice.del(this.did).subscribe(data=>{})
alert('Deleted Successfully')
this.router.navigateByUrl('admin-dashboard')
}

navig(){
  console.log('hh');
  this.router.navigate(['admin-dashboard'])

}
out(){
  localStorage.removeItem('currentuser')
  this.router.navigateByUrl('')
}
add(){
  this.router.navigateByUrl('adduser')
}
  getuser(){
    this.userservice.admin().subscribe(data=> {
      this.UserList = data;
    })
  }
edit(item:any){
// localStorage.setItem('editid',id)
// this.router.navigateByUrl(`folder/${id}`)
let navigationextras:NavigationExtras={
  state:{
    data:item
  }
}

console.log(navigationextras.state)

  // console.log(state)
this.router.navigate(['/folder'],navigationextras)
}
}
