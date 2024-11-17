// https://code-basics.com/ru/languages/typescript/lessons/named-functions

// BEGIN (write your solution here)
function getHiddenCard(card: string, stars = 4): string {
    let tmp = card.substring(card.length - 4, card.length);
    let pad = '';
    for (; stars > 0; stars--) {
        pad += '*';
    }
    return pad + tmp;
}

// END

export default getHiddenCard;
