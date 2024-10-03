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

  filter: string;
  // data: Array<Table> = dataset;
  // countries: Array<Table> = dataset;

  data: any;
  countries: any;

  @ViewChildren(SortableHeaderDirective)
  headers: QueryList<SortableHeaderDirective>;

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
    this._tableService.DeleteTable(tableId).subscribe({
      next: () => {
        this.GetTableDetails();
        this._router.navigate(['table']);
      },
      error: () => {

      }
    })
  }



  // onSort({ column, direction }: SortEvent) {
  //   // resetting other headers
  //   this.headers.forEach((header) => {
  //     if (header.sortable !== column) {
  //       header.direction = '';
  //     }
  //   });

  //   // sorting countries
  //   if (direction === '' || column === '') {
  //     this.countries = this.data;
  //   } else {
  //     this.countries = [...this.data].sort((a, b) => {
  //       const res = compare(a[column], b[column]);
  //       return direction === 'asc' ? res : -res;
  //     });
  //   }
  // }
}
