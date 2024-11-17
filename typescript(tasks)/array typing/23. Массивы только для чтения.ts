// https://code-basics.com/ru/languages/typescript/lessons/readonly-arrays

// BEGIN (write your solution here)
function reverse(arr: readonly number[]): number[] {
    let res: number[] = [];
    for (let i = arr.length - 1; i > -1; i--) {
        res.push(arr[i]);
    }
    return res;
}

// END

export default reverse;
