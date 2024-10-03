import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { DirectiveModule } from 'src/app/common/directives/directive/directive.module';

@NgModule({
  declarations: [
    CreateReservationComponent,
    ReservationDetailsComponent
  ],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    FormsModule,
    NgSelectModule,
    DirectiveModule
  ]
})
export class ReservationModule { }
