/* eslint-disable @typescript-eslint/restrict-template-expressions */

// BEGIN (write your solution here)
function newYearCongratulate(name: string): string;
function newYearCongratulate(year: number, name: string): string;

function newYearCongratulate(nameOrYear?: unknown, nameOrNothing?: string): string {
    if (nameOrNothing && nameOrYear) {
        return `Hi ${nameOrNothing}! Happy New Year ${nameOrYear}!`;
    } else {
        return `Hi ${nameOrYear}! Happy New Year!`;
    }
}

// END

export default newYearCongratulate;
