import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './common/components/not-found/not-found.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { AuthGuard } from './common/guards/auth.guard';

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./components/layout/layout.module').then(m => m.LayoutModule),
  canActivate: [
    AuthGuard
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
