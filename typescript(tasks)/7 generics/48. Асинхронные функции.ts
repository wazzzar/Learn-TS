// https://code-basics.com/ru/languages/typescript/lessons/async-functions

// BEGIN (write your solution here)
async function asyncMap(
    promises: Array<Promise<any>>,
    callback: (num: number, idx: number) => number
): Promise<number[]> {
    let result: number[] = [];
    for (let i = 0; i < promises.length; i++) {
        result.push(callback(await promises[i], i));
    }
    return result;
}

// END

export default asyncMap;
