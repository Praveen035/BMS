import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { CreateDepartmentComponent } from './create-department/create-department.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';


@NgModule({
  declarations: [
    CreateDepartmentComponent,
    DepartmentDetailsComponent
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule
  ]
})
export class DepartmentModule { }
