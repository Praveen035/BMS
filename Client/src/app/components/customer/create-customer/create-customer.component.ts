import { Component } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent {
  model: Customer = new Customer();

  constructor(private _customerService: CustomerService) { }

  SaveCustomerDetails() {
    debugger;
    this._customerService.CreateCustomer(this.model).subscribe({

    })
  }
}
