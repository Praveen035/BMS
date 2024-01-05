import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';
import { NotificationService } from 'src/app/common/services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  model: Employee = new Employee();

  constructor(private empService: EmployeeService, private _router: Router,
    private _notificationsService: NotificationService) { }
  ngOnInit(): void {
  }

  SaveEmployeeDetails() {
    this.empService.CreateEmployee(this.model).subscribe((x) => {
      this._notificationsService.Success('Created employee successfully!');
      this._router.navigate(['']);
    });
  }
}
