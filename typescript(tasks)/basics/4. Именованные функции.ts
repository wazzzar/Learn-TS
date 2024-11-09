// BEGIN (write your solution here)
function getHiddenCard(card: string, stars = 4): string {
    let tmp = card.substring(card.length - 4, card.length);
    return tmp.padStart(stars + 4, '*');
}

// END

export default getHiddenCard;
