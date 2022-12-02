import { Injectable } from '@angular/core';
import{ catchError, map, retry } from 'rxjs/operators';
import { AppConfig } from '../Class/AppConfig';
import { Users } from '../Class/Users';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  appconfig = new AppConfig()
  constructor(public http:HttpClient) { }

  login(s:Users){
    let headers=new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = { headers: headers };
    return this.http.post(this.appconfig.url+'/SampleUser',s,options).pipe(map(res => res));
  }
  edit(s:Users){
    let headers=new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = { headers: headers };
    return this.http.post(this.appconfig.url+'/Update',s,options).pipe(map(res => res));
  }
  admin(){
    let headers=new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = { headers: headers };
    console.log("api")
    return this.http.get(this.appconfig.url+'/SampleUser',options).pipe(map(res => res));
  }
  getone(id:any){
    let headers=new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = { headers: headers };
    return this.http.get(this.appconfig.url+'/SampleUser?id='+id,options).pipe(map(res => res));
  }
  del(id:any){
    let headers=new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = { headers: headers };
    console.log("api")
    return this.http.get(this.appconfig.url+'/SampleUser?id='+id,options).pipe(map(res => res));
  }
}
