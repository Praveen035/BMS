import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { CreateTableComponent } from './create-table/create-table.component';
import { TableDetailsComponent } from './table-details/table-details.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateTableComponent,
    TableDetailsComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    FormsModule
  ]
})
export class TableModule { }
