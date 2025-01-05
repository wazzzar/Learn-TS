// https://code-basics.com/ru/languages/typescript/lessons/generic-types

// BEGIN (write your solution here)
type MySet<T> = {
    data: Array<T>;

    add(item: T): void;
    has(item: T): boolean;
}

// END

export default MySet;
