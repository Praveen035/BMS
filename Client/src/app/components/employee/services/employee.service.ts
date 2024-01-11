import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { HttpService } from 'src/app/helpers/http.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpService) { }

  CreateEmployee(model: Employee) {
    return this.httpClient.post<Employee>(model, 'api/employee/addemployee');
  }

  GetAllEmployee() {
    return this.httpClient.get<Employee>('api/employee/getemployee');
  }

  DeleteEmployee(id: any) { return this.httpClient.delete(id, 'api/employee'); }

  GetAllEmployeeId(id: any) {
    const url = id ? `api/employee/${id}` : `api/employee`;
    return this.httpClient.get<Employee>(url);
  }

  UpdateEmployee(id: any, employee: Employee) {
    return this.httpClient.put<Employee>(id, employee, 'api/employee');
  }
}
