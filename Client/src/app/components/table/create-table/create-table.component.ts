import { Component, OnInit } from '@angular/core';
import { Table } from '../models/table';
import { TableService } from '../service/table.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-table',
  templateUrl: './create-table.component.html',
  styleUrls: ['./create-table.component.scss']
})
export class CreateTableComponent implements OnInit {

  model: Table = new Table();
  tableId: any;
  constructor(private _tableService: TableService, private _router: Router,
    private _activateRoute: ActivatedRoute) {

  }
  ngOnInit(): void {
    if (this._activateRoute.snapshot.params['id'] !== null && this._activateRoute.snapshot.params['id'] !== undefined) {
      this.tableId = this._activateRoute.snapshot.params['id'];
      this._tableService.GetAllTableId(this.tableId).subscribe({
        next: (x: any) => {
          this.model = x;
        },
        error: () => {
        }
      })
    }
  }

  SaveTableDetails() {
    if (this.tableId !== null && this.tableId !== undefined) {
      this._tableService.UpdateTable(this.tableId, this.model).subscribe({
        next: (x: any) => {
          this.model = x;
          this._router.navigate(['table']);
        },
        error: () => {
        }
      })
    } else {
      this._tableService.CreateTable(this.model).subscribe({
        next: () => {
          this._router.navigate(['table']);
        },
        error: () => {
        }
      })
    }
  }
}
