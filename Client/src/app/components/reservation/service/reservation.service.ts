import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/helpers/http.service';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private httpClient: HttpService) { }

  CreateReservation(reservation: Reservation) {
    return this.httpClient.post<Reservation>(reservation, 'api/reservation/addreservation');
  }

  GetAllReservation() {
    return this.httpClient.get<Reservation>('api/table/getreservation');
  }

  DeleteReservation(id: any) { return this.httpClient.delete(id, 'api/reservation'); }

  GetAllReservationId(id: any) {
    const url = id ? `api/reservation/${id}` : `api/reservation`;
    return this.httpClient.get<Reservation>(url);
  }

  UpdateReservation(id: any, reservation: Reservation) {
    return this.httpClient.put<Reservation>(id, reservation, 'api/reservation');
  }
}
