import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerService } from '../services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {
  model: Customer = new Customer();
  customerId: any;

  constructor(private _customerService: CustomerService,
    private _activateRoute: ActivatedRoute, private _router: Router) { }
  ngOnInit(): void {
    if (this._activateRoute.snapshot.params['id'] !== null && this._activateRoute.snapshot.params['id']) {
      this.customerId = this._activateRoute.snapshot.params['id'];
      this._customerService.getAllCustomerId(this.customerId).subscribe({
        next: (x: any) => {
          this.model = x;
        },
        error: (error: Error) => { }
      })
    }
  }

  SaveCustomerDetails() {
    if (this.customerId !== null && this.customerId !== undefined) {
      this._customerService.updateCustomer(this.customerId, this.model).subscribe({
        next: () => {
          this._router.navigate(['customer']);
        },
        error: () => {
        }
      })
    } else {
      this._customerService.CreateCustomer(this.model).subscribe({
        next: (x: any) => {
          this._router.navigate(['customer']);
        },
        error: (error: Error) => { }
      })
    }
  }
}
