import { Routes } from '@angular/router';
import { BusLinesComponent } from './bus-lines/bus-lines.component';
import { BusStopsComponent } from './bus-stops/bus-stops.component';
import { TimetableComponent } from './timetable/timetable.component';

export const routes: Routes = [
    { path: '', redirectTo: '/bus_lines', pathMatch: 'full' },
    { path: 'bus_lines', component: BusLinesComponent },
    { path: 'bus_stops/:busLineNumber', component: BusStopsComponent },
    { path: 'timetable/:busLineNumber', component: TimetableComponent }
];
