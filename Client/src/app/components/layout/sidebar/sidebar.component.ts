import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/common/models/user';
import { UserInfo } from 'src/app/common/models/user-info';
import { UserService } from 'src/app/common/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  user: User;
  userDetails: UserInfo[];
  userType: UserInfo;
  public static role: string;
  url: string = '/assets/userInfo.json';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUserDetail();
  }

  getUserDetail() {
    this.userService.userDetail.subscribe((res: any) => {
      this.user = res;
      this.getUserInfoFromLocal();
    })
  }

  getUserInfoFromLocal() {
    fetch(this.url).then(res => res.json())
      .then(json => {
        this.userDetails = json;
        this.userType = this.userDetails.find(x => x.email === this.user.email) as UserInfo;
        SidebarComponent.role = this.userType?.role;
      });
  }
}
