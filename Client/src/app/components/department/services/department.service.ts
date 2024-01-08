import { Injectable } from '@angular/core';
import { Department } from '../models/department';
import { HttpService } from 'src/app/helpers/http.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private httpClient: HttpService) { }

  CreateDepartment(department: Department) {
    return this.httpClient.post<Department>(department, 'api/department/adddepartment');
  }

  GetAllDepartment() {
    return this.httpClient.get<Department>('api/department/getdepartment');
  }

  DeleteDepartment(id: any) { return this.httpClient.delete(id, 'api/department'); }

  GetAllDepartmentId(id: any) {
    const url = id ? `api/department/${id}` : `api/department`;
    return this.httpClient.get<Department>(url);
  }

  UpdateDepartment(id: any, department: Department) {
    return this.httpClient.put<Department>(id, department, 'api/department');
  }
}
