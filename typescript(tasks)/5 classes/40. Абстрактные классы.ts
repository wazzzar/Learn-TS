// https://code-basics.com/ru/languages/typescript/lessons/abstract-classes

// BEGIN (write your solution here)
abstract class Clock {
    constructor(protected hours: number, protected minutes: number, protected seconds: number) {

    }

    tick(): void {
        this.seconds++;
        if (this.seconds === 60) {
            this.minutes++;
            this.seconds = 0;
        }
        if (this.minutes === 60) {
            this.hours++;
            this.minutes = 0;
        }
        if (this.hours === 24) {
            this.hours = 0;
        }
    }

    abstract render(): void;
}

// END

export default Clock;
