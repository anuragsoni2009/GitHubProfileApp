import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserInformationService } from '../user-information.service';
import { user } from '../shared/models/user.model';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { Router } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  login: string;
  userdetail: user;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userInformationService: UserInformationService,
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/room-24px.svg'),
    );

  }

  ngOnInit() {
    this.getdetails();
    this.userInformationService.getUserDetails(this.login).subscribe(
      (response: user) => {
        this.userdetail = response;

        console.log(response);
      }
    );
  }
  getdetails() {
    this.login = this.activatedRoute.snapshot.paramMap.get('id');
  }

  getFollowers() {
    this.router.navigate(['/followers', this.login]);
  }
}
