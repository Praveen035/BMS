import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/helpers/http.service';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpService) { }

  CreateCustomer(model: Customer) {
    debugger;
    return this.httpClient.post<Customer>(model, 'api/customer/addcustomer');
  }

  getAllCustomer() {
    return this.httpClient.get<Customer>('api/customer/getcustomer');
  }

  deleteCustomer(id: any) { return this.httpClient.delete(id, 'api/customer'); }

  getAllCustomerId(id: any) {
    const url = id ? `api/customer/getcustomerbyid/${id}` : `api/customer`;
    return this.httpClient.get<Customer>(url);
  }

  updateCustomer(id: any, customer: Customer) {
    return this.httpClient.put<Customer>(id, customer, 'api/customer');
  }
}
