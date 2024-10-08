import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { CreateDepartmentComponent } from './create-department/create-department.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { FormsModule } from '@angular/forms';
import { DirectiveModule } from 'src/app/common/directives/directive/directive.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    CreateDepartmentComponent,
    DepartmentDetailsComponent
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    FormsModule,
    DirectiveModule,
    NgbModule
  ]
})
export class DepartmentModule { }
