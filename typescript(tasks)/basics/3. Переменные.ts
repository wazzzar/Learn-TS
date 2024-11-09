/* eslint-disable @typescript-eslint/explicit-function-return-type */

// BEGIN (write your solution here)
function repeat(text: string, count: number): string {
    let ret = '';
    for (let i = 0; i < count; i++) {
        ret += text;
    }
    return ret;
}

// END

export default repeat;
