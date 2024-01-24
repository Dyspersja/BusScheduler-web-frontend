import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { BusLine } from '../bus-line';
import { BusLineService } from '../bus-line.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bus-lines',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './bus-lines.component.html',
  styleUrl: './bus-lines.component.css'
})
export class BusLinesComponent implements OnInit {
  busLines: BusLine[] = [];

  constructor(private busLineService: BusLineService) {}

  ngOnInit(): void {
    this.getBusLines();
  }

  getBusLines(): void {
    this.busLineService.getBusLines()
      .subscribe( busLines => this.busLines = busLines);
  }
}
