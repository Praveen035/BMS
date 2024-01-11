import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { timepickerReducer } from 'ngx-bootstrap/timepicker/reducer/timepicker.reducer';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';


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

  ]
})
export class ReservationModule { }
