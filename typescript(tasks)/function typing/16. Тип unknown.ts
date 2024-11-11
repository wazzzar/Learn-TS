// BEGIN (write your solution here)
function isPlainObject(value: unknown): boolean {
    if (value instanceof Array) return false;
    return value instanceof Object;
}

// END

export default isPlainObject;
