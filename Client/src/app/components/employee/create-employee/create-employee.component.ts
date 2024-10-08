import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';
import { NotificationService } from 'src/app/common/services/notification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { DepartmentService } from '../../department/services/department.service';
import { Department } from '../../department/models/department';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  model: Employee = new Employee();
  deps: Department[] = [];
  employeeId: any;
  employeeDtOfJoining: any;
  selectedDep: any;
  constructor(private _empService: EmployeeService, private _router: Router,
    private _avRoute: ActivatedRoute, private datePipe: DatePipe,
    private _depService: DepartmentService) { }
  ngOnInit(): void {
    if (this._avRoute.snapshot.params['id']) {
      this.employeeId = this._avRoute.snapshot.params['id'];
      if (this.employeeId != null && this.employeeId != undefined) {
        this._empService.GetAllEmployeeId(this.employeeId).subscribe((model: any) => {
          this.model = model;
          this.employeeDtOfJoining = this.datePipe.transform(this.model.doj, 'yyyy-MM-dd')!;
          this.model.doj = this.employeeDtOfJoining;
        });
      }
    }
    this.GetAllDepartment();
  }

  SaveEmployeeDetails() {
    if (this.employeeId !== null && this.employeeId !== undefined) {
      this._empService.UpdateEmployee(this.employeeId, this.model).subscribe((x) => {
        this._router.navigate(['employee']);
      });
    } else {
      debugger;
      this._empService.CreateEmployee(this.model).subscribe((x) => {
        debugger;
        // this._notificationsService.Success('Created employee successfully!');
        this._router.navigate(['employee']);
      });
    }
  }

  GetAllDepartment() {
    this._depService.GetAllDepartment().subscribe({
      next: (x: any) => {
        this.deps = x;
      },
      error: (err: Error) => {

      }
    })
  }
}
