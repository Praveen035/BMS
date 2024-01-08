import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  models: Customer[] = [];
  constructor(private _customerService: CustomerService) { }
  ngOnInit(): void {
    this.getCustomerDetails();
  }

  deleteCustomer(id: any) {
    if (window.confirm("Do you want to delete this activity?") === true) {
      this._customerService.deleteCustomer(id).subscribe({
        next: (x: any) => {
          this.getCustomerDetails();
        },
        error: (err: Error) => { }
      })
    }
  }

  getCustomerDetails() {
    this._customerService.getAllCustomer().subscribe({
      next: (x: any) => {
        this.models = x;
      },
      error: (err: Error) => { }
    });
  }

}
