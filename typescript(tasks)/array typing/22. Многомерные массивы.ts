// https://code-basics.com/ru/languages/typescript/lessons/multi-dimensional-arrays

// BEGIN (write your solution here)
function getField(size: number): any {
    let res: any = [];
    for (let i = 0; i < size; i++) {
        let tmp: any = [];
        for (let j = 0; j < size; j++) {
            tmp.push(null);
        }
        res.push(tmp);
    }
    return res;
}

// END

export default getField;
