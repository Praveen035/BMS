import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuDetailsComponent } from './menu-details/menu-details.component';
import { CreateMenuComponent } from './create-menu/create-menu.component';

const routes: Routes = [{
  path: '',
  component: MenuDetailsComponent
},
{
  path: 'create-menu',
  component: CreateMenuComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
