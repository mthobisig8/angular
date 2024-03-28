import { Injectable } from '@angular/core';
import { Registration } from '../model/registration';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataTransferService {
  constructor() {}

  private registrationData = new Subject<Registration>();
  registrationDetails$ = this.registrationData.asObservable();

  sendData(data: Registration) {
    return this.registrationData.next(data);
  }
}
