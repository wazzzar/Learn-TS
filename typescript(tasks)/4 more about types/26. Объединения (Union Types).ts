// https://code-basics.com/ru/languages/typescript/lessons/union-types

// BEGIN (write your solution here)
function lastIndex(str: string, char: string): number | null {
    let last: number | null = null;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            last = i;
        }
    }
    return last;
}

// END

export default lastIndex;
