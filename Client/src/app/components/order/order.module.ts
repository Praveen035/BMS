import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { CreateOrderComponent } from './create-order/create-order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { DirectiveModule } from 'src/app/common/directives/directive/directive.module';


@NgModule({
  declarations: [
    CreateOrderComponent,
    OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    FormsModule,
    NgSelectModule,
    DirectiveModule
  ]
})
export class OrderModule { }
