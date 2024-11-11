/* eslint-disable @typescript-eslint/no-explicit-any */

// BEGIN (write your solution here)
function map(arr: number[], pre: (n: number, index: number) => number): number[] {
    let res: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        res[i] = pre(arr[i], i);
    }
    return res;
}

// END

export default map;
