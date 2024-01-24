import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BusStop } from './bus-stop';

@Injectable({
  providedIn: 'root'
})
export class BusStopService {
  private apiUrl = 'http://localhost:8080/api/bus_stops';

  constructor(private http: HttpClient) {}

  getBusStops(busLineNumber: number, isReturnLine: boolean): Observable<BusStop[]> {
    const params = {
      r: isReturnLine.toString()
    };

    return this.http.get<BusStop[]>(`${this.apiUrl}/${busLineNumber}`, { params });
  }
}
