import { Routes } from '@angular/router';
import { BusLinesComponent } from './bus-lines/bus-lines.component';

export const routes: Routes = [
    { path: '', redirectTo: '/bus_lines', pathMatch: 'full' },
    { path: 'bus_lines', component: BusLinesComponent }
];
