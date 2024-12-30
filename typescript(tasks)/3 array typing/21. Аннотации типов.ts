// https://code-basics.com/ru/languages/typescript/lessons/type-annotations

// BEGIN (write your solution here)
function unique(arr: Array<number | string>): Array<number | string> {
    let res: Array<number | string> = [];
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        let exists = false;
        for (let j = 0; j < res.length; j++) {
            let temp = res[j];
            if (typeof temp === typeof val && (temp === val)) {
                exists = true;
            }
        }
        if (!exists) {
            res.push(val);
        }
    }
    return res;
}

// END

export default unique;
