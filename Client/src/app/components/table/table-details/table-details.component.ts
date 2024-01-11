import { Component, OnInit } from '@angular/core';
import { Table } from '../models/table';
import { TableService } from '../service/table.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-details',
  templateUrl: './table-details.component.html',
  styleUrls: ['./table-details.component.scss']
})
export class TableDetailsComponent implements OnInit {

  models: Table[] = [];
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
    debugger;
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
