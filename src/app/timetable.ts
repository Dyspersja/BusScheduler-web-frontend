import { Time } from "@angular/common";

export interface Timetable {
    weekdays: Time[];
    saturdays: Time[];
    sundays: Time[];
}