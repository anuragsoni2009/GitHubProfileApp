import { Component, OnInit } from '@angular/core';
import { FetchFollowersService } from '../fetch-followers.service';
import { profileUser, search } from '../shared/models/user.model';
import { ActivatedRoute } from '@angular/router';
import { getNativeByIndex } from '@angular/core/src/render3/util';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-follwers',
  templateUrl: './follwers.component.html',
  styleUrls: ['./follwers.component.css']
})
export class FollwersComponent implements OnInit {

  // searchFormControl=new FormControl('');
  // searchFollower:string='';
  userList: profileUser[];
  name: string = "";
  // foundFollower:search=null;

  constructor(private fetchFollowersService: FetchFollowersService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.name = this.activatedRoute.snapshot.paramMap.get('id');
    // this.getName();
    this.fetchFollowersService.getFollowers(this.name).subscribe(
      (response: profileUser[]) => {
        //console.log(response);
        this.userList = response;
        console.log(this.userList);
      }
    );
  }

  // Search(myForm:any){
  //   this.fetchFollowersService.searchFollower(this.searchFollower).subscribe(
  //     (response:search)=>{
  //       this.foundFollower = response;
  //       console.log(this.foundFollower);
  //     }
  //   );
  // }
  // getName(){

  //   alert(this.name+' here');
  //   this.fetchFollowers(this.name);
  // }
  // fetchFollowers(name:string){
  //   this.fetchFollowersService.getFollowers(name).subscribe(
  //     (response:profileUser[])=>{
  //     //console.log(response);
  //     this.userList=response;
  //     console.log(this.userList);
  //     }
  //   );
  // }

  // userDetails(person:profileUser){
  //   this.router.navigate(['/details',person.login]);
  // }



}