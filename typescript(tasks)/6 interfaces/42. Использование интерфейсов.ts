// https://code-basics.com/ru/languages/typescript/lessons/interface-using

interface IFlying {
    canFly: true;
}

interface IBird extends IFlying {
    isLiving: true;
}

interface IPlane extends IFlying {
    canCarryPeople: true;
}

// BEGIN (write your solution here)
interface ISuperMan extends IFlying {
    guessWho(str: string): string;
}

let superMan: ISuperMan = {
    canFly: true,
    guessWho(str: string): string {
        return `It's a ${str}${str.match(/superman/i) ? '!' : '?'}`;
    }
}

// END

export default superMan;
