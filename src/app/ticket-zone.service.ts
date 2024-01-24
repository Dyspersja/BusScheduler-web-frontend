import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TicketZone } from './ticket-zone';

@Injectable({
  providedIn: 'root'
})
export class TicketZoneService {
  private apiUrl = 'http://localhost:8080/api/ticket_zones';

  constructor(private http: HttpClient) { }

  getTicketZones(): Observable<TicketZone[]> {
    return this.http.get<TicketZone[]>(this.apiUrl);
  }
}
