// https://code-basics.com/ru/languages/typescript/lessons/generic-functions

// BEGIN (write your solution here)
type MyArray<T> = {
    items: T[];

    push(item: T): number;
    filter(callback: (item: T) => boolean): MyArray<T>;
}

// END

export default MyArray;
