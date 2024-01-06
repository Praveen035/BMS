import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { HttpService } from 'src/app/helpers/http.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpService) { }

  CreateEmployee(model: Employee) {
    debugger;
    return this.httpClient.post<Employee>(model, 'api/employee/addemployee');
  }

  getAllEmployee() {
    debugger;
    return this.httpClient.get<Employee>('api/employee/getemployee');
  }

  deleteEmployee(id: any) { return this.httpClient.delete(id, 'api/employee'); }

  getAllEmployeeId(id: any) {
    const url = id ? `api/employee/getemployeebyid/${id}` : `api/employee`;
    debugger;
    return this.httpClient.get<Employee>(url);
  }

  updateEmployee(id: any, employee: Employee) {
    debugger;
    return this.httpClient.put<Employee>(id, employee, 'api/employee');
  }
}
