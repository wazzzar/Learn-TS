/* eslint-disable @typescript-eslint/explicit-function-return-type */

// BEGIN (write your solution here)
function repeat(text: string, count: number): string {
    let res = '';
    for (let i = 0; i < count; i++) {
        res += text;
    }
    return res;
}

// END

export default repeat;
