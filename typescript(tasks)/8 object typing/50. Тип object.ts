// https://code-basics.com/ru/languages/typescript/lessons/object

// BEGIN (write your solution here)
type T = {
    [key: string]: unknown
}

function extract(obj: T, keys: string[]): T {
    let result: T = {};
    for (let key of keys) {
        if (obj.hasOwnProperty(key)) {
            result[key] = obj[key];
        }
    }
    return result;
}

// END

export default extract;
