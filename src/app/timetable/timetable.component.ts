import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Timetable } from '../timetable';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TimetableService } from '../timetable.service';

@Component({
  selector: 'app-timetable',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './timetable.component.html',
  styleUrl: './timetable.component.css'
})
export class TimetableComponent implements OnInit {
  busLineNumber: number | undefined;
  isReturnLine: boolean | undefined;
  busStopId: number | undefined;
  timetable: Timetable | undefined;

  constructor(
    private timetableService: TimetableService, 
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.busLineNumber = +params['busLineNumber'];
      this.isReturnLine = params['r'] === 'true';
      this.busStopId = params['stop'];
    });

    this.getTimetable();
  }

  getTimetable(): void {
    this.timetableService.getTimetable(this.busLineNumber!, this.isReturnLine!, this.busStopId!)
        .subscribe(timetable => this.timetable = timetable);
  }
}
