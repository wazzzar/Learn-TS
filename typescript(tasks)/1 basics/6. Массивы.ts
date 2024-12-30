// https://code-basics.com/ru/languages/typescript/lessons/arrays

// BEGIN (write your solution here)
function filterAnagrams(word: string, words: string[]): string[] {
    let arr: string[] = [];
    let origin = word.split('');
    for (let i = 0; i < words.length; i++) {
        let item = words[i].split('');
        if (origin.length == item.length) {
            origin.map(ch => {
                for (let j = 0; j < item.length; j++) {
                    if (ch == item[j]) {
                        item.splice(j, 1);
                        break;
                    }
                }
            });
            if (item.length == 0) arr.push(words[i]);
        }
    }
    return arr;
}

// END

export default filterAnagrams;
