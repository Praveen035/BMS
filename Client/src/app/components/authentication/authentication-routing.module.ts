import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NotFoundComponent } from 'src/app/common/components/not-found/not-found.component';
import { AuthGuard } from 'src/app/common/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'customer',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./../customer/customer.module').then((m) => m.CustomerModule),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
