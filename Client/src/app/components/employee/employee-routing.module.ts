import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

const routes: Routes = [{
  path: '',
  component: EmployeeDetailsComponent
},
{
  path: 'createemployee',
  component: CreateEmployeeComponent
},
{
  path: 'edit/:id',
  component: CreateEmployeeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
