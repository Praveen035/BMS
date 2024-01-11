import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../service/reservation.service';
import { Router } from '@angular/router';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.scss']
})
export class ReservationDetailsComponent implements OnInit {

  models: Reservation[] = [];
  constructor(private _resTableServive: ReservationService,
    private _router: Router) { }

  ngOnInit(): void {
    this.GetAllReservationTableDetails();
  }

  GetAllReservationTableDetails() {
    this._resTableServive.GetAllReservation().subscribe({
      next: (x: any) => {
        this.models = x;
      },
      error: () => {
      }
    })
  }

  DeleteReservationTableDetails(resId: any) {
    this._resTableServive.DeleteReservation(resId).subscribe({
      next: () => {
        this.GetAllReservationTableDetails();
      },
      error: () => {
      }
    })
  }
}
