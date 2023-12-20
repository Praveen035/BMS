import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { CreateMenuComponent } from './create-menu/create-menu.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';


@NgModule({
  declarations: [
    CreateMenuComponent,
    MenuDetailsComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
