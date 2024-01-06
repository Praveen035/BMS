import { Component } from '@angular/core';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent {

  models: Customer[] = [];

  deleteCustomer(id: any) { }
}
