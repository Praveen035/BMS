import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/helpers/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatonService {

  constructor(private client: HttpService) {

  }
}
