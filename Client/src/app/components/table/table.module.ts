import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { CreateTableComponent } from './create-table/create-table.component';
import { TableDetailsComponent } from './table-details/table-details.component';


@NgModule({
  declarations: [
    CreateTableComponent,
    TableDetailsComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule
  ]
})
export class TableModule { }
