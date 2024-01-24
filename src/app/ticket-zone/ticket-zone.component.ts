import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TicketZone } from '../ticket-zone';
import { TicketZoneService } from '../ticket-zone.service';

@Component({
  selector: 'app-ticket-zone',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './ticket-zone.component.html',
  styleUrl: './ticket-zone.component.css'
})
export class TicketZoneComponent implements OnInit {
  ticketZones: TicketZone[] = [];

  constructor(private ticketZoneService: TicketZoneService) {}

  ngOnInit(): void {
    this.getTicketZones();
  }

  getTicketZones(): void {
    this.ticketZoneService.getTicketZones()
      .subscribe( ticketZones => this.ticketZones = ticketZones);
  }

  addTicketZone(zoneName: string): void {
    zoneName = zoneName.trim();
    if (!zoneName) { return; }
    this.ticketZoneService.addTicketZone({ zoneName } as TicketZone)
      .subscribe(ticketZone => {
        this.ticketZones.push(ticketZone);
      });
  }
}
