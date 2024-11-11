// BEGIN (write your solution here)
function last(val: unknown): number | string {
    if (typeof val == 'number') {
        return val % 10;
    }
    if (typeof val == 'string' && val.length) {
        return val[val.length - 1];
    }
    return '';
}

// END

export default last;
