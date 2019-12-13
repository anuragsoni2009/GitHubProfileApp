import { Component, OnInit } from '@angular/core';
import { UserInformationService } from '../user-information.service';
import { profileUser, search, item } from '../shared/models/user.model';
import { Router } from '@angular/router';
import { FetchFollowersService } from '../fetch-followers.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private userInformationService: UserInformationService,
    private router: Router, private fetchFollowersService: FetchFollowersService) { }
  userList: profileUser[];
  searchFollower: string = '';
  //  foundFollower:search=null;
  foundFollower: profileUser[] = null;
  enableSearchBtn: boolean = true;
  ngOnInit() {
    this.userInformationService.getUsers().subscribe(
      (response: profileUser[]) => {
        //console.log(response);
        this.userList = response;
        console.log(this.userList);
      }
    );

  }
  userDetails(person: profileUser) {
    this.router.navigate(['/details', person.login]);
  }

  Search(myForm: any) {
    this.fetchFollowersService.searchFollower(this.searchFollower).subscribe(
      (response: any) => {
        this.foundFollower = response.items;
        console.log(this.foundFollower);
        // this.userList.unshift(this.foundFollower);
        console.log(this.foundFollower);
      }
    );
  }
  enableBtn() {
    if (this.searchFollower.length > 0)
      this.enableSearchBtn = false;
    else {
      this.enableSearchBtn = true;
      this.foundFollower = null;
    }
  }

}
