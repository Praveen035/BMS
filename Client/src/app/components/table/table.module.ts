import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { CreateTableComponent } from './create-table/create-table.component';
import { TableDetailsComponent } from './table-details/table-details.component';
import { FormsModule } from '@angular/forms';
import { DirectiveModule } from 'src/app/common/directives/directive/directive.module';

@NgModule({
  declarations: [
    CreateTableComponent,
    TableDetailsComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    FormsModule,
    DirectiveModule
  ]
})
export class TableModule { }
