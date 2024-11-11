// BEGIN (write your solution here)
function filter(arr: number[], pre: Function): number[] {
    let res: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (pre(arr[i])) {
            res.push(arr[i]);
        }
    }
    return res;
}

// END

export default filter;
