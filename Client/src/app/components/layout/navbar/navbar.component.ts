import { Component } from '@angular/core';
import { AppService } from 'src/app/common/services/app.service';
import { AuthenticatonService } from '../../authentication/services/authenticaton.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private appService: AppService, private authService: AuthenticatonService) { }
  isCollapsed = true;
  ngOnInit() {
  }

  toggleSidebarPin() {
    this.appService.toggleSidebarPin();
  }
  toggleSidebar() {
    this.appService.toggleSidebar();
  }

  logout() {
    this.authService.logout();
  }
}
