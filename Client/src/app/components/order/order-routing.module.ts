import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { CreateOrderComponent } from './create-order/create-order.component';

const routes: Routes = [{
  path: '',
  component: OrderDetailsComponent
}, {
  path: 'createorder',
  component: CreateOrderComponent
}, {
  path: 'edit:/id',
  component: CreateOrderComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
