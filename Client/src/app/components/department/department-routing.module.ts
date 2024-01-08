import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { CreateDepartmentComponent } from './create-department/create-department.component';

const routes: Routes = [{
  path: '',
  component: DepartmentDetailsComponent
}, {
  path: 'createdepartment',
  component: CreateDepartmentComponent
},
{
  path: 'edit/:id',
  component: CreateDepartmentComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
