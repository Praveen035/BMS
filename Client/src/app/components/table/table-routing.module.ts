import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableDetailsComponent } from './table-details/table-details.component';
import { CreateTableComponent } from './create-table/create-table.component';

const routes: Routes = [{
  path: '',
  component: TableDetailsComponent
},
{
  path: 'create-table',
  component: CreateTableComponent
}, {
  path: 'edit/:id',
  component: CreateTableComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }
