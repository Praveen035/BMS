import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toster: ToastrService) { }

  Success(message: any) {
    this.toster.success(message, "Success");
  }
}
