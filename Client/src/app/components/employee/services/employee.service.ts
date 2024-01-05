import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { HttpService } from 'src/app/helpers/http.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private client: HttpService) { }

  CreateEmployee(model: Employee) {
    return this.client.post<Employee>(model, 'api/Employee/saveemployee');
  }
}
