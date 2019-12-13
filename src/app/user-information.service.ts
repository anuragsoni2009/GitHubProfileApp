import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { profileUser, user } from './shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserInformationService {
 userList_url:string='https://api.github.com/users';
  constructor(private http:HttpClient) { }
  
  getUsers():Observable<profileUser[]>{
    const  userList_url=  'https://api.github.com/users';
    return this.http.get<profileUser[]>(userList_url);
  }
  //fetching details of the user
getUserDetails(id:string){
  let detail_url:string=this.userList_url+'/'+id;
  return this.http.get<user>(detail_url);
}
}
