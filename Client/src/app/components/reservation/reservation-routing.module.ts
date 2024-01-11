import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';

const routes: Routes = [{
  path: '',
  component: ReservationDetailsComponent
},
{
  path: 'create-reservation',
  component: CreateReservationComponent
}, {
  path: 'edit:/id',
  component: CreateReservationComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
