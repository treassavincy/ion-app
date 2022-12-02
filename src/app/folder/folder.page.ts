import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppConfig } from '../Class/AppConfig';
import { Users } from '../Class/Users';
import { LoginServiceService } from '../Service/login-service.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  b=new Users()
  appconfig=new AppConfig()
id=''
  constructor(public userservice:LoginServiceService,private router:Router,
    private activatedroute:ActivatedRoute) {this.val() }

  ngOnInit() {
  }
  edituser(Id:any){
    // this.id=localStorage.getItem('editid') || ''
    // console.log(this.b);
    
    this.userservice.edit(this.b).subscribe(data=>{console.log(data)})
    alert('Updated Successfully')
    this.router.navigateByUrl('admin-dashboard')
    
    
  }
  val()
  {
    this.activatedroute.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation()?.extras.state){
       this.b=  this.router.getCurrentNavigation()?.extras.state?.['data']
      }
      // console.log(
      //   this.router.getCurrentNavigation()?.extras.state?.['data'])
    })
  }
}
