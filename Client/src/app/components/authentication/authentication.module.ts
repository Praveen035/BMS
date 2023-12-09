import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { HoverDirective } from 'src/app/common/hover.directive';
import { AppModule } from 'src/app/app.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    HoverDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthenticationRoutingModule
  ],
  exports: [
    HoverDirective,
  ]
})
export class AuthenticationModule { }
