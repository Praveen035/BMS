import { Component, OnInit } from '@angular/core';
import { Table } from '../models/table';

@Component({
  selector: 'app-table-details',
  templateUrl: './table-details.component.html',
  styleUrls: ['./table-details.component.scss']
})
export class TableDetailsComponent implements OnInit {

  models: Table[] = [];

  ngOnInit(): void {
  }

  DeleteRecipeCategory(tableId: any) { }

}
