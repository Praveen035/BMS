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
  constructor(private _departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.GetAllDepartments();
  }

  GetAllDepartments() {
    this._departmentService.GetAllDepartment().subscribe({
      next: (x: any) => {
        this.models = x;
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
