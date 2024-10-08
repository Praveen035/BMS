import { Component, OnInit } from '@angular/core';
import { Department } from '../models/department';
import { DepartmentService } from '../services/department.service';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.scss']
})
export class DepartmentDetailsComponent implements OnInit {
  models: Department[] = [];
  page = 1;
  pageSize = 5;
  collectionSize = this.models.length;
  countries: Department[];

  constructor(private _departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.GetAllDepartments();
  }

  // refreshCountries() {
  //   debugger;
  //   this.countries = this.models
  //     .map((departmentName, i) => ({ id: i + 1, ...departmentName }))
  //     .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  // }

  GetAllDepartments() {
    debugger;
    this._departmentService.GetAllDepartment().subscribe({
      next: (x: any) => {
        this.models = x;
        debugger
        // this.refreshCountries();
      }
    })
  }

  deleteDepartment(id: any) {
    if (window.confirm("Do you want to delete this activity?") === true) {
      this._departmentService.DeleteDepartment(id).subscribe({
        next: (x: any) => {
          this.GetAllDepartments();
        },
        error: () => {

        }
      })
    }
  }
}
