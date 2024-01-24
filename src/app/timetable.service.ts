import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Timetable } from './timetable';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {
  private apiUrl = 'http://localhost:8080/api/timetable';

  constructor(private http: HttpClient) { }

  getTimetable(
    busLineNumber: number, 
    isReturnLine: boolean,
    busStopId: number
  ): Observable<Timetable> {
    const params = {
      r: isReturnLine.toString(),
      stop: busStopId.toString()
    };

    return this.http.get<Timetable>(`${this.apiUrl}/${busLineNumber}`, { params });
  }
}
