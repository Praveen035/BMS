import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Table } from '../models/table';
import { TableService } from '../service/table.service';
import { Router } from '@angular/router';
import { SortableHeaderDirective } from 'src/app/common/directives/sortable-header.directive';

@Component({
  selector: 'app-table-details',
  templateUrl: './table-details.component.html',
  styleUrls: ['./table-details.component.scss']
})
export class TableDetailsComponent implements OnInit {
  models: Table[] = [];
  page = 1;
  pageSize = 5;
  collectionSize = this.models.length;
  filter: string;
  data: any;
  searchText: any;

  constructor(private _tableService: TableService, private _router: Router) {
  }

  ngOnInit(): void {
    this.GetTableDetails()
  }

  GetTableDetails() {
    this._tableService.GetAllTable().subscribe({
      next: (x: any) => {
        this.models = x;
      },
      error: () => {

      }
    })
  }

  DeleteTableDetails(tableId: any) {
    this._tableService.DeleteTable(tableId).subscribe({
      next: () => {
        this.GetTableDetails();
        this._router.navigate(['table']);
      },
      error: () => {

      }
    })
  }

}
