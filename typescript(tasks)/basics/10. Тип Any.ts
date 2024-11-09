/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */

// BEGIN (write your solution here)
function getParams(query: string): object {
    let ret: any = {};
    let _query = query.split('&');
    for (let i = 0; i < _query.length; i++) {
        let tmp = _query[i].split('=');
        ret[tmp[0]] = tmp[1];
    }
    return ret;
}
// END

export default getParams;
