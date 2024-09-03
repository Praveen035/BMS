import { Component, OnInit } from '@angular/core';
import { Department } from '../models/department';
import { DepartmentService } from '../services/department.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.scss']
})
export class CreateDepartmentComponent implements OnInit {

  model: Department = new Department();
  departmentId: any;
  constructor(private _departmentService: DepartmentService,
    private _activateRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    if (this._activateRoute.snapshot.params['id'] !== null && this._activateRoute.snapshot.params['id']) {
      this.departmentId = this._activateRoute.snapshot.params['id'];
      this._departmentService.GetAllDepartmentId(this.departmentId).subscribe({
        next: (x: any) => {
          this.model = x;
        },
        error: (error: Error) => {
        }
      });
    }
  }

  SaveDepartmentDetails() {
    if (this.departmentId != null && this.departmentId !== undefined) {
      this._departmentService.UpdateDepartment(this.departmentId, this.model).subscribe({
        next: (x: any) => {
          this._router.navigate(['department']);
        },
        error: (err: Error) => {
        }
      })
    } else {
      debugger;
      this._departmentService.CreateDepartment(this.model).subscribe({
        next: (x: any) => {
          this._router.navigate(['customer']);
        },
        error: (error: Error) => { }
      })
    }
    this._router.navigate(['department']);
  }
}
