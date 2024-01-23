import { BusStop } from "./bus-stop";

export interface BusLine {
    id: number;
    lineNumber: number;
    isReturnLine: boolean;
    startBusStop: BusStop;
    endBusStop: BusStop;
}
