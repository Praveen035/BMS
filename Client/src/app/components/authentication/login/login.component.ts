import { Component, OnInit } from '@angular/core';
import { Authenticaton } from '../models/authenticaton.model.';
import { Router } from '@angular/router';
import { AuthenticatonService } from '../services/authenticaton.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // faLock:faLock;
  model: Authenticaton = new Authenticaton();
  constructor(private auth: AuthenticatonService, private router: Router) { }
  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['layout']);
    }
  }

  onSubmit(): void {
    if (this.model) {
      this.auth.login(this.model).subscribe(
        (result) => {
          this.router.navigate(['layout']);
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  }
}
