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
      debugger;
      this.employeeId = this._avRoute.snapshot.params['id'];
      if (this.employeeId != null && this.employeeId != undefined) {
        debugger;
        this._empService.GetAllEmployeeId(this.employeeId).subscribe((model: any) => {
          this.model = model;
          this.employeeDtOfJoining = this.datePipe.transform(this.model.doj, 'yyyy-MM-dd')!;
          this.model.doj = this.employeeDtOfJoining;
          debugger;
        });
      }
    }
    this.GetAllDepartment();
  }

  SaveEmployeeDetails() {
    debugger;
    if (this.employeeId !== null && this.employeeId !== undefined) {
      this._empService.UpdateEmployee(this.employeeId, this.model).subscribe((x) => {
        this._router.navigate(['employee']);
      });
    } else {
      this._empService.CreateEmployee(this.model).subscribe((x) => {
        // this._notificationsService.Success('Created employee successfully!');
        this._router.navigate(['employee']);
      });
    }
  }

  GetAllDepartment() {
    debugger;
    this._depService.GetAllDepartment().subscribe({
      next: (x: any) => {
        this.deps = x;
        debugger;
      },
      error: (err: Error) => {

      }
    })
  }
}
