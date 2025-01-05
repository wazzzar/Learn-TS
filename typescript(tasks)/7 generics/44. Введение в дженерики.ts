// https://code-basics.com/ru/languages/typescript/lessons/generics-overview

// BEGIN (write your solution here)
function last<Z>(arr: Z[]): Z | null {
    return arr[arr.length - 1] ?? null;
}

// END

export default last;
