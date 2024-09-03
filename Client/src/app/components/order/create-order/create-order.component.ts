import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {

  model: Order = new Order();
  selectedRecipes: any;
  recipes: any;
  ngOnInit(): void {
  }

  SaveOrderDetails() { }
}
