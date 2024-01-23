import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { BusLine } from '../bus-line';

@Component({
  selector: 'app-bus-lines',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './bus-lines.component.html',
  styleUrl: './bus-lines.component.css'
})
export class BusLinesComponent {
  busLines: BusLine[] = [
    {
      id: 1,
      lineNumber: 101,
      isReturnLine: false,
      startBusStop: { id: 1, stopName: 'Bus Stop A', cityDistrictName: 'District X' },
      endBusStop: { id: 2, stopName: 'Bus Stop B', cityDistrictName: 'District Y' }
    },
    {
      id: 2,
      lineNumber: 101,
      isReturnLine: true,
      startBusStop: { id: 3, stopName: 'Bus Stop C', cityDistrictName: 'District Z' },
      endBusStop: { id: 4, stopName: 'Bus Stop D', cityDistrictName: 'District W' }
    },
    {
      id: 3,
      lineNumber: 102,
      isReturnLine: false,
      startBusStop: { id: 1, stopName: 'Bus Stop A', cityDistrictName: 'District X' },
      endBusStop: { id: 2, stopName: 'Bus Stop B', cityDistrictName: 'District Y' }
    },
    {
      id: 4,
      lineNumber: 102,
      isReturnLine: true,
      startBusStop: { id: 3, stopName: 'Bus Stop C', cityDistrictName: 'District Z' },
      endBusStop: { id: 4, stopName: 'Bus Stop D', cityDistrictName: 'District W' }
    },
    {
      id: 5,
      lineNumber: 103,
      isReturnLine: false,
      startBusStop: { id: 1, stopName: 'Bus Stop A', cityDistrictName: 'District X' },
      endBusStop: { id: 2, stopName: 'Bus Stop B', cityDistrictName: 'District Y' }
    },
    {
      id: 6,
      lineNumber: 104,
      isReturnLine: false,
      startBusStop: { id: 3, stopName: 'Bus Stop C', cityDistrictName: 'District Z' },
      endBusStop: { id: 4, stopName: 'Bus Stop D', cityDistrictName: 'District W' }
    }
  ];
}
