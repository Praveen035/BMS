import { Component } from '@angular/core';
import { Authenticaton } from '../models/authenticaton.model.';
import { AuthService } from 'src/app/common/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private auth: AuthService, private router: Router) { }

  model: Authenticaton = new Authenticaton();


  onSubmit(): void {
    if (this.model) {
      this.auth.login(this.model).subscribe(
        (result) => {
          this.router.navigate(['/customer']);
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  }
}
