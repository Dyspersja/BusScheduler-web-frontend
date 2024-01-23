import { Component, Input, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { BusStop } from '../bus-stop';
import { BusStopService } from '../bus-stop.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bus-stops',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './bus-stops.component.html',
  styleUrl: './bus-stops.component.css'
})
export class BusStopsComponent implements OnInit {
  busLineNumber: number | undefined;
  isReturnLine: boolean | undefined;
  busStops: BusStop[] = [];

  constructor(
    private busStopService: BusStopService, 
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.busLineNumber = +params['busLineNumber'];
      this.isReturnLine = params['r'] === 'true';
    });

    this.getBusStops();
  }

  getBusStops(): void {
    this.busStopService.getBusStops(this.busLineNumber!, this.isReturnLine!)
      .subscribe(busStops => this.busStops = busStops);
  }
}
