import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { profileUser, search } from './shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class FetchFollowersService {
  userList_url: string = 'https://api.github.com/users/' + name + '/followers';
  constructor(private http: HttpClient) { }

  getFollowers(name: string): Observable<profileUser[]> {
    let followerList_url = 'https://api.github.com/users/' + name + '/followers';
    return this.http.get<profileUser[]>(followerList_url);
  }

  searchFollower(name: string): Observable<any> {
    let url = 'https://api.github.com/search/users?q=' + name;
    return this.http.get<any>(url);
  }
}
