// BEGIN (write your solution here)
function forEach(arr: number[], func: (n: number, index?: number) => void): void {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i], i);
    }
}

// END

export default forEach;
