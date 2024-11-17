// https://code-basics.com/ru/languages/typescript/lessons/any

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */

// BEGIN (write your solution here)
function getParams(query: string): object {
    let res: any = {};
    let _query = query.split('&');
    for (let i = 0; i < _query.length; i++) {
        let tmp = _query[i].split('=');
        res[tmp[0]] = tmp[1];
    }
    return res;
}

// END

export default getParams;
