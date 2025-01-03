// https://code-basics.com/ru/languages/typescript/lessons/interfaces-overview

interface IVehicle {
    seats: number;
    colour: string;
    canHavePassengers: boolean;
    fuelPer100Kilometers: number;

    calcFuelNeeded(distance: number): number;
}

// BEGIN (write your solution here)
class Car implements IVehicle {
    constructor(
        public seats: number = 4,
        public colour: string = 'black',
        public canHavePassengers: boolean = true,
        public fuelPer100Kilometers: number = 10
    ) {
    }

    calcFuelNeeded(distance: number): number {
        return distance / 100 * this.fuelPer100Kilometers;
    }
}

// END

export default Car;
