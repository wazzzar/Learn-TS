// https://code-basics.com/ru/languages/typescript/lessons/many-parameters

// BEGIN (write your solution here)
type MyMap<T, U> = {
    values: {};

    set(idx: T, val: U): void;
    get(idx: T): U;
}

// END

export default MyMap;
