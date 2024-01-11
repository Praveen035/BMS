import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { first } from 'rxjs';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  models: Employee[] = [];
  constructor(private _employeeService: EmployeeService) { }
  ngOnInit(): void {
    this.load();
  }

  load() {
    this._employeeService.GetAllEmployee().pipe(first()).subscribe({
      next: (x: any) => {
        this.models = x;
        // this.total$ = x.totalCount;
        // this.models.sort = this.sort;
        // this.models.paginator = this.paginator;
      },
      error: (err: Error) => { }
    });
  }

  editEmployee(empId: any) { }

  deleteEmployee(id: any): void {
    if (window.confirm("Do you want to delete this activity?") === true) {
      this._employeeService
        .DeleteEmployee(id)
        .subscribe({
          next: (x: any) => {
            this.load();
          },
          error: () => {
          }
        });
    }
  }

}
