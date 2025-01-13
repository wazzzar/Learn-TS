// https://code-basics.com/ru/languages/typescript/lessons/mapped-types

// BEGIN (write your solution here)
function sanitize<T extends object, K extends keyof T>(obj: T, exclude: K[]): {} {
    let diff = Object.entries(obj).filter(([key, val]) => !exclude.includes(key as K));
    return Object.fromEntries(diff);
}

// END

export default sanitize;
