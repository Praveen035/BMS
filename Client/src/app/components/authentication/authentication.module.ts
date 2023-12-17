import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HoverDirective } from 'src/app/common/hover.directive';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    HoverDirective,
    ForgotPasswordComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    AuthenticationRoutingModule
  ],
  exports: [
    HoverDirective
  ]
})
export class AuthenticationModule { }
