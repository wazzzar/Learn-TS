// https://code-basics.com/ru/languages/typescript/lessons/rest-spread

// BEGIN (write your solution here)
function max(first: number, ...numbers: number[]): number {
    return Math.max(first, ...numbers);
}

// END

export default max;
