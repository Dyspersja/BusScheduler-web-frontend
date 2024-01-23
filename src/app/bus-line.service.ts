import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BusLine } from './bus-line';

@Injectable({
  providedIn: 'root'
})
export class BusLineService {
  private apiUrl = 'http://localhost:8080/api/bus_lines';

  constructor(private http: HttpClient) { }

  getBusLines(): Observable<BusLine[]> {
    return this.http.get<BusLine[]>(this.apiUrl);
  }
}
