import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  models: Order[] = [];
  page = 1;
  pageSize = 5;
  collectionSize = this.models.length;
  searchText: any;
  ngOnInit(): void {
  }

  deleteOrder(id: any) { }
}
