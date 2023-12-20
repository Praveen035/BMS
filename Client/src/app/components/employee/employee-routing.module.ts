import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

const routes: Routes = [{
  path: '',
  component: EmployeeDetailsComponent
},
{
  path: 'employee-details',
  component: EmployeeDetailsComponent
},
{
  path: 'create',
  component: CreateEmployeeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
